<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { chain as jvhChain } from '$lib/data/argument-chain-data';
	import { chain as wgmChain } from '$lib/data/wgm-argument-chain-data';
	import { chain as baChain } from '$lib/data/ba-argument-chain-data';
	import { chain as wbChain } from '$lib/data/wb-argument-chain-data';
	import { chain as pbChain } from '$lib/data/pb-argument-chain-data';
	import { chain as mfChain } from '$lib/data/mf-argument-chain-data';
	import { chain as wwChain } from '$lib/data/ww-argument-chain-data';
	import { chain as rcChain } from '$lib/data/rc-argument-chain-data';
	import {
		books,
		scienceFields,
		themeClusters,
		type BookMeta
	} from '$lib/data/cross-book-data';

	const bookChains: { id: string; chain: any[] }[] = [
		{ id: 'jvh', chain: jvhChain },
		{ id: 'wgm', chain: wgmChain },
		{ id: 'ba', chain: baChain },
		{ id: 'wb', chain: wbChain },
		{ id: 'pb', chain: pbChain },
		{ id: 'mf', chain: mfChain },
		{ id: 'ww', chain: wwChain },
		{ id: 'rc', chain: rcChain },
	];

	function getStatus(link: any): string { return link.status ?? link.strength ?? 'yellow'; }
	function getShortLabel(link: any): string { return link.shortLabel ?? link.label ?? link.id; }
	function getDependsOn(link: any): string[] { return link.dependsOn ?? link.dependencies ?? []; }

	let graphEl: HTMLDivElement;
	let cy: any = null;
	let selectedBooks = $state<Set<string>>(new Set(books.map(b => b.id)));
	let selectedFields = $state<Set<string>>(new Set(scienceFields.map(f => f.id)));
	let showFilters = $state(true);
	let showOverlaps = $state(true);
	let selectedNode = $state<any>(null);
	let selectedLink = $state<any>(null);
	let selectedBookId = $state<string>('');

	const statusIcons: Record<string, string> = {
		red: '\u{1F534}', yellow: '\u{1F7E1}', green: '\u{1F7E2}', untestable: '\u{1F7E3}'
	};
	const chainTypeLabels: Record<string, { label: string; color: string }> = {
		premise: { label: 'Premise', color: '#6366f1' },
		observation: { label: 'Observation', color: '#3b82f6' },
		causal: { label: 'Causal claim', color: '#f59e0b' },
		theory: { label: 'Theoretical framework', color: '#8b5cf6' },
		consequence: { label: 'Consequence', color: '#ef4444' },
		solution: { label: 'Prescriptive recommendation', color: '#10b981' }
	};

	function findFullLink(bookId: string, chainId: string): any {
		const bc = bookChains.find(b => b.id === bookId);
		if (!bc) return null;
		return bc.chain.find((l: any) => l.id === chainId) || null;
	}
	let tooltipContent = $state('');
	let tooltipVisible = $state(false);
	let tooltipX = $state(0);
	let tooltipY = $state(0);
	let graphReady = $state(false);

	const statusColors: Record<string, string> = {
		red: '#ef4444', yellow: '#f59e0b', green: '#10b981', untestable: '#8b5cf6'
	};
	const statusBg: Record<string, string> = {
		red: '#3b1111', yellow: '#3b2f11', green: '#113b28', untestable: '#1f113b'
	};
	const statusText: Record<string, string> = {
		red: '#fca5a5', yellow: '#fde68a', green: '#a7f3d0', untestable: '#c4b5fd'
	};
	const statusLabelsMap: Record<string, string> = {
		red: 'Weak', yellow: 'Mixed', green: 'Strong', untestable: 'Untestable'
	};

	function getBook(id: string): BookMeta { return books.find(b => b.id === id)!; }

	function buildOverlapEdges(): { source: string; target: string; theme: string }[] {
		const result: { source: string; target: string; theme: string }[] = [];
		for (const theme of themeClusters) {
			if (!theme.fields.some(f => selectedFields.has(f))) continue;
			const claims = theme.claims.filter(c => selectedBooks.has(c.bookId));
			for (let i = 0; i < claims.length; i++) {
				for (let j = i + 1; j < claims.length; j++) {
					if (claims[i].bookId !== claims[j].bookId) {
						result.push({
							source: `${claims[i].bookId}--${claims[i].chainId}`,
							target: `${claims[j].bookId}--${claims[j].chainId}`,
							theme: theme.name
						});
					}
				}
			}
		}
		return result;
	}

	function buildLayoutElements() {
		// Only intra-book nodes + edges for layout (no overlaps — they pull clusters together)
		const nodes: any[] = [];
		const edges: any[] = [];

		for (const { id: bookId, chain } of bookChains) {
			if (!selectedBooks.has(bookId)) continue;
			const book = getBook(bookId);

			for (const link of chain) {
				const status = getStatus(link);
				const nodeId = `${bookId}--${link.id}`;
				nodes.push({
					data: {
						id: nodeId,
						label: getShortLabel(link),
						bookId,
						chainId: link.id,
						status,
						type: link.type,
						claim: link.claim,
						bookColor: book.color,
						bookTitle: book.shortTitle,
						borderColor: statusColors[status] || '#64748b',
						bgColor: statusBg[status] || '#1e293b',
						textColor: statusText[status] || '#e2e8f0',
					}
				});

				for (const depId of getDependsOn(link)) {
					const sourceId = `${bookId}--${depId}`;
					if (chain.some((l: any) => l.id === depId)) {
						edges.push({
							data: {
								id: `e-${sourceId}-${nodeId}`,
								source: sourceId,
								target: nodeId,
								bookColor: book.color,
								isOverlap: false
							}
						});
					}
				}
			}
		}

		return { nodes, edges };
	}

	let cytoscapeLib: any = null;

	async function createGraph() {
		if (!graphEl) return;
		if (cy) { cy.destroy(); cy = null; }

		if (!cytoscapeLib) {
			cytoscapeLib = (await import('cytoscape')).default;
		}

		const { nodes, edges } = buildLayoutElements();

		// Create graph with ONLY intra-book edges for layout
		cy = cytoscapeLib({
			container: graphEl,
			elements: [...nodes, ...edges],
			layout: {
				name: 'cose',
				animate: false,
				randomize: true,
				nodeRepulsion: 800000,
				idealEdgeLength: 120,
				edgeElasticity: 80,
				gravity: 0.01,
				numIter: 2500,
				nodeDimensionsIncludeLabels: true,
				padding: 80,
				componentSpacing: 400,
			} as any,
			style: [
				{
					selector: 'node[!isLabel]',
					style: {
						'label': 'data(label)',
						'text-valign': 'center' as any,
						'text-halign': 'center' as any,
						'color': 'data(textColor)',
						'font-size': '10px',
						'font-weight': 600,
						'font-family': 'Inter, sans-serif',
						'background-color': 'data(bgColor)',
						'border-width': 2.5,
						'border-color': 'data(borderColor)',
						'shape': 'roundrectangle' as any,
						'width': 160,
						'height': 36,
						'text-wrap': 'wrap' as any,
						'text-max-width': '140px' as any,
						'cursor': 'pointer' as any,
					}
				},
				{
					selector: 'node[?isLabel]',
					style: {
						'label': 'data(label)',
						'text-valign': 'center' as any,
						'text-halign': 'center' as any,
						'color': 'data(bookColor)',
						'font-size': '180px',
						'font-weight': 900,
						'font-family': 'Inter, sans-serif',
						'background-opacity': 0,
						'border-width': 0,
						'width': 1,
						'height': 1,
						'text-opacity': 0.5,
						'text-outline-color': '#0f172a',
						'text-outline-width': 4,
						'text-outline-opacity': 1,
						'z-index': 0,
						'events': 'no' as any,
					}
				},
				{
					selector: 'edge[!isOverlap]',
					style: {
						'width': 1.5,
						'line-color': 'data(bookColor)',
						'line-opacity': 0.35,
						'target-arrow-color': 'data(bookColor)',
						'target-arrow-shape': 'triangle' as any,
						'arrow-scale': 0.7,
						'curve-style': 'bezier' as any,
					}
				},
				{
					selector: 'edge[?isOverlap]',
					style: {
						'width': 1.5,
						'line-color': '#60a5fa',
						'line-opacity': 0.3,
						'line-style': 'dashed' as any,
						'target-arrow-shape': 'none' as any,
						'curve-style': 'bezier' as any,
					}
				},
				{
					selector: 'node.highlighted',
					style: {
						'border-width': 5,
						'z-index': 999,
					}
				},
				// Clicked node
				{
					selector: 'node.selected-node',
					style: {
						'border-width': 5,
						'border-color': '#ffffff',
						'z-index': 1000,
					}
				},
				// Same book as clicked
				{
					selector: 'node.same-book',
					style: {
						'opacity': 1,
						'z-index': 10,
					}
				},
				// Overlap-connected nodes from other books
				{
					selector: 'node.overlap-peer',
					style: {
						'opacity': 1,
						'border-width': 4,
						'z-index': 50,
						'shadow-blur': 12,
						'shadow-color': '#60a5fa',
						'shadow-opacity': 0.6,
						'shadow-offset-x': 0,
						'shadow-offset-y': 0,
					} as any
				},
				// Dimmed (everything else when a node is selected)
				{
					selector: 'node.dimmed',
					style: {
						'opacity': 0.12,
					}
				},
				{
					selector: 'edge.dimmed',
					style: {
						'opacity': 0.05,
					}
				},
				// Active overlap edges (connected to selected node)
				{
					selector: 'edge.active-overlap',
					style: {
						'width': 3,
						'line-color': '#60a5fa',
						'line-opacity': 0.8,
						'z-index': 100,
					}
				},
				// Active intra-book edges
				{
					selector: 'edge.same-book-edge',
					style: {
						'opacity': 1,
						'z-index': 10,
					}
				}
			],
			userZoomingEnabled: true,
			userPanningEnabled: true,
			boxSelectionEnabled: false,
			minZoom: 0.05,
			maxZoom: 3,
		});

		// AFTER layout: add floating book labels at centroid of each cluster
		for (const { id: bookId } of bookChains) {
			if (!selectedBooks.has(bookId)) continue;
			const book = getBook(bookId);
			const bookNodes = cy.nodes(`[bookId = "${bookId}"]`);
			if (bookNodes.length === 0) continue;
			const bb = bookNodes.boundingBox();
			const cx = (bb.x1 + bb.x2) / 2;
			const cy2 = (bb.y1 + bb.y2) / 2;
			cy.add({
				data: {
					id: `label-${bookId}`,
					label: book.shortTitle,
					bookColor: book.color,
					isLabel: true,
				},
				position: { x: cx, y: cy2 },
				locked: false,
				grabbable: false,
				selectable: false,
			});
		}

		// AFTER layout: add overlap edges (they don't affect positioning)
		if (showOverlaps) {
			const overlaps = buildOverlapEdges();
			const nodeIds = new Set(nodes.map((n: any) => n.data.id));
			const seen = new Set<string>();
			for (const ov of overlaps) {
				if (!nodeIds.has(ov.source) || !nodeIds.has(ov.target)) continue;
				const key = `${ov.source}||${ov.target}`;
				if (seen.has(key)) continue;
				seen.add(key);
				cy.add({
					data: {
						id: `ov-${seen.size}`,
						source: ov.source,
						target: ov.target,
						theme: ov.theme,
						isOverlap: true,
					}
				});
			}
		}

		// Zoom handler: fade labels when zoomed in, show when zoomed out
		function updateLabelOpacity() {
			const zoom = cy.zoom();
			// Fully visible below 0.3, fade between 0.3-0.6, completely gone above 0.6
			let opacity = 0;
			if (zoom < 0.3) {
				opacity = 0.5;
			} else if (zoom < 0.6) {
				opacity = 0.5 * (1 - (zoom - 0.3) / 0.3);
			}
			cy.nodes('[?isLabel]').style('text-opacity', opacity);
		}
		cy.on('zoom', updateLabelOpacity);
		updateLabelOpacity();

		// Events — only on non-label nodes
		cy.on('mouseover', 'node[!isLabel]', (evt: any) => {
			const node = evt.target;
			node.addClass('highlighted');
			const pos = node.renderedPosition();
			const book = getBook(node.data('bookId'));
			tooltipContent = `<strong>${book.shortTitle}</strong><br/>${node.data('label')}<br/><span style="color:${statusColors[node.data('status')]};font-weight:700">${statusLabelsMap[node.data('status')]}</span> &middot; ${node.data('type')}`;
			tooltipX = pos.x;
			tooltipY = pos.y - 30;
			tooltipVisible = true;
		});

		cy.on('mouseout', 'node[!isLabel]', (evt: any) => {
			evt.target.removeClass('highlighted');
			tooltipVisible = false;
		});

		function clearHighlighting() {
			cy.elements().removeClass('selected-node same-book overlap-peer dimmed same-book-edge active-overlap');
		}

		cy.on('tap', 'node[!isLabel]', (evt: any) => {
			const node = evt.target;
			const d = node.data();
			selectedNode = d;
			selectedBookId = d.bookId;
			selectedLink = findFullLink(d.bookId, d.chainId);

			// Clear previous
			clearHighlighting();

			// Mark clicked node
			node.addClass('selected-node');

			// Find all same-book nodes (ONLY this book)
			const sameBookNodes = cy.nodes(`[bookId = "${d.bookId}"][!isLabel]`);
			sameBookNodes.addClass('same-book');

			// Find same-book internal edges
			const sameBookEdges = cy.edges().filter((e: any) => {
				const src = e.source().data('bookId');
				const tgt = e.target().data('bookId');
				return src === d.bookId && tgt === d.bookId && !e.data('isOverlap');
			});
			sameBookEdges.addClass('same-book-edge');

			// Only overlap edges from the CLICKED node (not entire book)
			const overlapEdges = cy.edges('[?isOverlap]').filter((e: any) => {
				return e.source().id() === node.id() || e.target().id() === node.id();
			});
			overlapEdges.addClass('active-overlap');

			// Overlap peers = only nodes at the other end of THIS node's overlaps
			const overlapPeerIds = new Set<string>();
			overlapEdges.forEach((e: any) => {
				const otherId = e.source().id() === node.id() ? e.target().id() : e.source().id();
				overlapPeerIds.add(otherId);
			});
			overlapPeerIds.forEach(id => {
				cy.getElementById(id).addClass('overlap-peer');
			});

			// Dim everything else
			cy.nodes('[!isLabel]').filter((n: any) => {
				return !n.hasClass('same-book') && !n.hasClass('overlap-peer') && !n.hasClass('selected-node');
			}).addClass('dimmed');

			cy.edges().filter((e: any) => {
				return !e.hasClass('same-book-edge') && !e.hasClass('active-overlap');
			}).addClass('dimmed');

			// Log for debugging
			console.log(`${d.bookId}: ${sameBookNodes.length} nodes, ${overlapEdges.length} overlaps to ${overlapPeerIds.size} peers`);
		});

		cy.on('tap', (evt: any) => {
			if (evt.target === cy) {
				selectedNode = null;
				selectedLink = null;
				clearHighlighting();
			}
		});

		cy.on('mouseover', 'edge[?isOverlap]', (evt: any) => {
			const edge = evt.target;
			const mp = edge.renderedMidpoint();
			tooltipContent = `<strong>Overlap:</strong> ${edge.data('theme')}`;
			tooltipX = mp.x;
			tooltipY = mp.y - 15;
			tooltipVisible = true;
		});

		cy.on('mouseout', 'edge[?isOverlap]', () => {
			tooltipVisible = false;
		});

		cy.fit(undefined, 30);
		graphReady = true;
	}

	function toggleBook(id: string) {
		const next = new Set(selectedBooks);
		if (next.has(id)) next.delete(id); else next.add(id);
		selectedBooks = next;
	}
	function toggleField(id: string) {
		const next = new Set(selectedFields);
		if (next.has(id)) next.delete(id); else next.add(id);
		selectedFields = next;
	}
	function selectAllBooks() { selectedBooks = new Set(books.map(b => b.id)); }
	function selectNoBooks() { selectedBooks = new Set(); }
	function selectAllFields() { selectedFields = new Set(scienceFields.map(f => f.id)); }
	function selectNoFields() { selectedFields = new Set(); }

	function handleRebuild() {
		createGraph();
	}

	onMount(() => {
		createGraph();
	});

	onDestroy(() => {
		cy?.destroy();
	});
</script>

<svelte:head>
	<title>Kausalpfade — Buchvergleich</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
	<header class="hero">
		<div class="hero-inner">
			<div class="nav-links">
				<a href="/" class="back-link">&larr; Hauptseite</a>
				<a href="/forschungslandschaft" class="back-link">Forschungslandschaft</a>
			</div>
			<p class="book-label">Cross-Book Analysis</p>
			<h1>Causal Paths Compared</h1>
			<p class="subtitle">
				All argument chains from 8 books in one interactive graph. Drag nodes, zoom in/out, click for details.
				Dashed blue lines show where books overlap on the same topic.
			</p>
		</div>
	</header>

	<!-- Filter bar -->
	<button class="filter-toggle" onclick={() => (showFilters = !showFilters)}>
		{showFilters ? 'Hide' : 'Show'} Filters
		<span class="filter-count">{selectedBooks.size}/{books.length} books</span>
	</button>

	{#if showFilters}
		<div class="filters">
			<div class="filter-section">
				<div class="filter-header">
					<span class="filter-title">Books</span>
					<div class="filter-actions">
						<button class="filter-action" onclick={selectAllBooks}>All</button>
						<button class="filter-action" onclick={selectNoBooks}>None</button>
					</div>
				</div>
				<div class="filter-chips">
					{#each books as book}
						<button
							class="chip"
							class:chip-active={selectedBooks.has(book.id)}
							style="--chip-color: {book.color}"
							onclick={() => toggleBook(book.id)}
						>
							<span class="chip-dot" style="background: {book.color}"></span>
							{book.shortTitle}
						</button>
					{/each}
				</div>
			</div>

			<div class="filter-section">
				<div class="filter-header">
					<span class="filter-title">Overlap connections (fields)</span>
					<div class="filter-actions">
						<button class="filter-action" onclick={selectAllFields}>All</button>
						<button class="filter-action" onclick={selectNoFields}>None</button>
						<label class="overlap-toggle">
							<input type="checkbox" bind:checked={showOverlaps} />
							Show overlaps
						</label>
					</div>
				</div>
				<div class="filter-chips">
					{#each scienceFields as field}
						<button
							class="chip"
							class:chip-active={selectedFields.has(field.id)}
							style="--chip-color: {field.color}"
							onclick={() => toggleField(field.id)}
						>
							<span class="chip-dot" style="background: {field.color}"></span>
							{field.name}
						</button>
					{/each}
				</div>
			</div>

			<button class="rebuild-btn" onclick={handleRebuild}>
				Apply Filters &amp; Rebuild Graph
			</button>
		</div>
	{/if}

	<!-- Graph -->
	<div class="graph-wrapper">
		<div class="graph-container" bind:this={graphEl}>
			{#if tooltipVisible && tooltipContent}
				<div class="graph-tooltip" style="left: {tooltipX}px; top: {tooltipY}px">
					{@html tooltipContent}
				</div>
			{/if}
		</div>
		<div class="graph-legend">
			<span class="legend-title">Evidence:</span>
			<span class="gl-item"><span class="gl-dot" style="background: #10b981"></span> Strong</span>
			<span class="gl-item"><span class="gl-dot" style="background: #f59e0b"></span> Mixed</span>
			<span class="gl-item"><span class="gl-dot" style="background: #ef4444"></span> Weak</span>
			<span class="gl-item"><span class="gl-dot" style="background: #8b5cf6"></span> Untestable</span>
			<span class="gl-sep"></span>
			<span class="gl-item"><span class="gl-line-dash"></span> Cross-book overlap</span>
		</div>
	</div>

	<!-- Detail panel -->
	{#if selectedNode && selectedLink}
		{@const book = getBook(selectedNode.bookId)}
		{@const status = getStatus(selectedLink)}
		{@const color = statusColors[status]}
		{@const typeInfo = chainTypeLabels[selectedNode.type] || { label: selectedNode.type, color: '#64748b' }}
		{@const statusLabel = status === 'red' ? 'Problematisch' : status === 'yellow' ? 'Wacklig' : status === 'green' ? 'Solide belegt' : 'Nicht testbar'}
		{@const deps = getDependsOn(selectedLink)}
		{@const bookChain = bookChains.find(b => b.id === selectedNode.bookId)?.chain || []}
		<div class="node-detail" style="--nd-color: {color}">
			<div class="nd-header">
				<span class="nd-num" style="background: {color}">{selectedLink.step ?? '?'}</span>
				<span class="nd-name">{getShortLabel(selectedLink)}</span>
				<span class="nd-type" style="color: {typeInfo.color}">{typeInfo.label}</span>
				<span class="nd-status" style="background: {color}">{statusIcons[status]} {statusLabel}</span>
				<span class="nd-book" style="color: {book.color}">{book.shortTitle}</span>
				<button class="nd-close" onclick={() => { selectedNode = null; selectedLink = null; }}>&#10005;</button>
			</div>

			<p class="nd-claim">{selectedLink.claim}</p>

			{#if deps.length > 0}
				<div class="nd-deps">
					<span class="nd-deps-label">Depends on:</span>
					{#each deps as depId}
						{@const dep = bookChain.find((c) => c.id === depId)}
						{#if dep}
							<button class="nd-dep-chip" style="border-color: {statusColors[getStatus(dep)]}" onclick={() => {
								const fullDep = findFullLink(selectedNode.bookId, depId);
								if (fullDep) {
									selectedLink = fullDep;
									selectedNode = { ...selectedNode, chainId: depId, label: getShortLabel(fullDep), status: getStatus(fullDep), type: fullDep.type, claim: fullDep.claim };
								}
							}}>
								{statusIcons[getStatus(dep)]} {dep.step ?? ''}. {getShortLabel(dep)}
							</button>
						{/if}
					{/each}
				</div>
			{/if}

			{#if selectedLink.evidenceRefs?.length > 0}
				<div class="nd-evidence">
					<strong>Evidence:</strong>
					{#each selectedLink.evidenceRefs as ref, i}
						<a class="ev-link" href="{book.route}/references?search={encodeURIComponent(ref.authorSearch)}">{ref.label}</a>{#if i < selectedLink.evidenceRefs.length - 1}<span class="ev-sep">&middot;</span>{/if}
					{/each}
				</div>
			{/if}

			{#if selectedLink.explanation}
				<div class="nd-explanation">{selectedLink.explanation}</div>
			{/if}

			<div class="nd-stats">
			<span class="nd-stat">{book.shortTitle}: {bookChains.find(b => b.id === selectedNode.bookId)?.chain.length ?? 0} nodes in chain</span>
		</div>
		<a href="{book.route}" class="nd-book-link">View full analysis in {book.shortTitle} &rarr;</a>
		</div>
	{/if}

	<footer class="app-footer">
		<p>Cross-book causal path analysis &middot; <a href="/">Back to all books</a></p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		background: #0f172a;
		color: #e2e8f0;
		-webkit-font-smoothing: antialiased;
	}
	.app {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px 60px;
		min-height: 100vh;
	}
	.hero { padding: 36px 0 20px; text-align: center; }
	.hero-inner { max-width: 640px; margin: 0 auto; }
	.nav-links { display: flex; gap: 16px; justify-content: center; margin-bottom: 16px; flex-wrap: wrap; }
	.back-link { font-size: 0.78rem; color: #64748b; text-decoration: none; transition: color 0.2s; }
	.back-link:hover { color: #94a3b8; }
	.book-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 3px; color: #64748b; margin: 0 0 10px; }
	.hero h1 {
		font-size: 2.2rem; font-weight: 800;
		background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
		-webkit-background-clip: text; -webkit-text-fill-color: transparent;
		background-clip: text; margin: 0 0 8px; line-height: 1.15;
	}
	.subtitle { color: #94a3b8; font-size: 0.88rem; line-height: 1.6; margin: 0; }

	.filter-toggle {
		display: flex; align-items: center; gap: 10px; width: 100%; padding: 12px 20px;
		margin: 12px 0 0; background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(148, 163, 184, 0.12);
		border-radius: 10px; color: #e2e8f0; font-size: 0.85rem; font-weight: 600;
		cursor: pointer; transition: background 0.2s;
	}
	.filter-toggle:hover { background: rgba(30, 41, 59, 0.9); }
	.filter-count { color: #64748b; font-weight: 400; margin-left: auto; font-size: 0.78rem; }

	.filters {
		background: rgba(30, 41, 59, 0.4); border-radius: 0 0 10px 10px;
		border: 1px solid rgba(148, 163, 184, 0.08); border-top: none; padding: 16px 20px;
	}
	.filter-section { margin-bottom: 12px; }
	.filter-section:last-child { margin-bottom: 0; }
	.filter-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
	.filter-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b; font-weight: 600; }
	.filter-actions { display: flex; gap: 10px; align-items: center; }
	.filter-action { font-size: 0.72rem; color: #60a5fa; background: none; border: none; cursor: pointer; text-decoration: underline; padding: 0; }
	.filter-action:hover { color: #93c5fd; }
	.overlap-toggle { display: flex; align-items: center; gap: 5px; font-size: 0.72rem; color: #94a3b8; cursor: pointer; }
	.overlap-toggle input { cursor: pointer; }

	.filter-chips { display: flex; flex-wrap: wrap; gap: 6px; }
	.chip {
		display: flex; align-items: center; gap: 5px; padding: 5px 10px; border-radius: 18px;
		font-size: 0.75rem; background: rgba(148, 163, 184, 0.08); border: 1px solid rgba(148, 163, 184, 0.12);
		color: #94a3b8; cursor: pointer; transition: all 0.15s; white-space: nowrap;
	}
	.chip:hover { background: rgba(148, 163, 184, 0.15); }
	.chip-active {
		background: color-mix(in srgb, var(--chip-color) 15%, transparent);
		border-color: color-mix(in srgb, var(--chip-color) 40%, transparent);
		color: #e2e8f0;
	}
	.chip-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }

	.rebuild-btn {
		margin-top: 14px; padding: 10px 24px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);
		background: rgba(96, 165, 250, 0.1); color: #60a5fa; font-size: 0.82rem; font-weight: 600;
		cursor: pointer; transition: all 0.2s; width: 100%;
	}
	.rebuild-btn:hover { background: rgba(96, 165, 250, 0.2); border-color: rgba(96, 165, 250, 0.5); }

	.graph-wrapper {
		background: rgba(15, 23, 42, 0.6); border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.1); overflow: hidden;
		margin-top: 16px;
	}
	.graph-container { width: 100%; height: 75vh; min-height: 500px; position: relative; }

	.graph-tooltip {
		position: absolute; transform: translate(-50%, -100%);
		background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(148, 163, 184, 0.25);
		border-radius: 8px; padding: 10px 14px; pointer-events: none; z-index: 1000;
		max-width: 280px; min-width: 160px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
		font-size: 0.8rem; line-height: 1.5; color: #e2e8f0;
	}

	.graph-legend {
		display: flex; flex-wrap: wrap; gap: 14px; align-items: center;
		padding: 10px 16px; border-top: 1px solid rgba(148, 163, 184, 0.08);
		background: rgba(15, 23, 42, 0.4);
	}
	.legend-title { font-size: 0.72rem; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
	.gl-item { display: flex; align-items: center; gap: 5px; font-size: 0.75rem; color: #94a3b8; }
	.gl-dot { width: 10px; height: 10px; border-radius: 50%; }
	.gl-sep { width: 1px; height: 14px; background: rgba(148, 163, 184, 0.15); }
	.gl-line-dash { width: 22px; height: 0; border-top: 2px dashed #60a5fa; }

	/* Node detail panel — matches per-book style */
	.node-detail {
		padding: 20px; margin: 16px 0;
		background: rgba(15, 23, 42, 0.7); border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.1);
		border-left: 4px solid var(--nd-color);
	}
	.nd-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; }
	.nd-num {
		width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center;
		justify-content: center; font-size: 0.85rem; font-weight: 700; color: white; flex-shrink: 0;
	}
	.nd-name { font-weight: 700; font-size: 1.05rem; color: #f1f5f9; }
	.nd-type { font-size: 0.75rem; }
	.nd-status {
		font-size: 0.72rem; padding: 4px 12px; border-radius: 12px; color: white;
		font-weight: 600; white-space: nowrap;
	}
	.nd-book { font-size: 0.75rem; font-weight: 600; }
	.nd-close {
		margin-left: auto; background: none; border: none; color: #64748b;
		cursor: pointer; font-size: 1.1rem; padding: 4px;
	}
	.nd-close:hover { color: #ef4444; }
	.nd-claim { font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin: 0 0 12px; }
	.nd-deps { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
	.nd-deps-label { font-size: 0.78rem; color: #64748b; font-weight: 500; }
	.nd-dep-chip {
		font-size: 0.75rem; padding: 4px 10px; border-radius: 10px;
		background: rgba(30, 41, 59, 0.8); color: #cbd5e1;
		border: 1.5px solid; cursor: pointer; font-family: inherit;
		transition: background 0.2s;
	}
	.nd-dep-chip:hover { background: rgba(30, 41, 59, 1); }
	.nd-evidence { font-size: 0.82rem; color: #64748b; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
	.ev-link {
		color: #60a5fa; text-decoration: none; font-weight: 500;
		padding: 2px 8px; border-radius: 6px; background: rgba(59, 130, 246, 0.08);
		border: 1px solid rgba(59, 130, 246, 0.15); transition: all 0.2s;
		font-size: 0.78rem; white-space: nowrap;
	}
	.ev-link:hover { background: rgba(59, 130, 246, 0.2); color: #93c5fd; }
	.ev-sep { color: #334155; }
	.nd-explanation {
		font-size: 0.85rem; color: #94a3b8; line-height: 1.6; margin-bottom: 12px;
		padding: 14px; background: rgba(30, 41, 59, 0.6); border-radius: 8px;
	}
	.nd-stats { margin-bottom: 10px; }
	.nd-stat { font-size: 0.75rem; color: #64748b; }
	.nd-book-link { font-size: 0.82rem; color: #60a5fa; text-decoration: none; }
	.nd-book-link:hover { text-decoration: underline; }

	.app-footer {
		text-align: center; padding: 24px 0; color: #475569; font-size: 0.82rem;
		border-top: 1px solid rgba(148, 163, 184, 0.1); margin-top: 24px;
	}
	.app-footer a { color: #60a5fa; text-decoration: none; }
	.app-footer a:hover { text-decoration: underline; }

	@media (max-width: 640px) {
		.hero h1 { font-size: 1.5rem; }
		.graph-container { height: 60vh; min-height: 400px; }
		.node-detail { margin: 12px 0; padding: 16px; }
	}
</style>
