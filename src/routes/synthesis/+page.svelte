<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { synthNodes, domains, type SynthNode } from '$lib/data/synthesis-data';
	import { books } from '$lib/data/cross-book-data';

	let graphEl: HTMLDivElement;
	let cy: any = null;
	let selectedNode = $state<SynthNode | null>(null);
	let tooltipContent = $state('');
	let tooltipVisible = $state(false);
	let tooltipX = $state(0);
	let tooltipY = $state(0);
	let filterTier = $state<string>('all');

	const tierColors = {
		core: '#10b981',
		derived: '#f59e0b',
		gap: '#8b5cf6',
	};
	const tierLabels = {
		core: 'Strong evidence (green)',
		derived: 'Derived suggestion',
		gap: 'Missing research (new)',
	};
	const tierBg = {
		core: '#113b28',
		derived: '#3b2f11',
		gap: '#1f113b',
	};
	const tierText = {
		core: '#a7f3d0',
		derived: '#fde68a',
		gap: '#c4b5fd',
	};

	function getDomain(id: string) {
		return domains.find(d => d.id === id);
	}
	function getBookName(id: string) {
		return books.find(b => b.id === id)?.shortTitle || id;
	}

	function applyFilter() {
		if (!cy) return;
		cy.elements().removeClass('filtered-out');
		if (filterTier !== 'all') {
			// Show only selected tier + its dependencies
			const showIds = new Set<string>();
			for (const n of synthNodes) {
				if (n.tier === filterTier) showIds.add(n.id);
				// In 'derived' filter, also show core (foundations)
				if (filterTier === 'derived' && (n.tier === 'core' || n.tier === 'derived')) showIds.add(n.id);
			}
			cy.nodes().forEach((n: any) => {
				if (!showIds.has(n.id())) n.addClass('filtered-out');
			});
			cy.edges().forEach((e: any) => {
				if (!showIds.has(e.source().id()) || !showIds.has(e.target().id())) e.addClass('filtered-out');
			});
		}
	}

	async function createGraph() {
		if (!graphEl) return;
		if (cy) { cy.destroy(); cy = null; }

		const cytoscape = (await import('cytoscape')).default;

		// Build all nodes with concentric positions
		const coreNodes = synthNodes.filter(n => n.tier === 'core');
		const derivedNodes = synthNodes.filter(n => n.tier === 'derived');
		const gapNodes = synthNodes.filter(n => n.tier === 'gap');

		const centerX = 0, centerY = 0;
		const coreRadius = 600;
		const derivedRadius = 1200;
		const gapRadius = 1800;

		function circlePositions(items: SynthNode[], radius: number) {
			const positions = new Map<string, { x: number; y: number }>();
			items.forEach((n, i) => {
				const angle = (2 * Math.PI * i) / items.length - Math.PI / 2;
				positions.set(n.id, {
					x: centerX + radius * Math.cos(angle),
					y: centerY + radius * Math.sin(angle),
				});
			});
			return positions;
		}

		const posMap = new Map<string, { x: number; y: number }>();
		circlePositions(coreNodes, coreRadius).forEach((v, k) => posMap.set(k, v));
		circlePositions(derivedNodes, derivedRadius).forEach((v, k) => posMap.set(k, v));
		circlePositions(gapNodes, gapRadius).forEach((v, k) => posMap.set(k, v));

		const nodes = synthNodes.map(n => ({
			data: {
				id: n.id,
				label: n.label,
				tier: n.tier,
				domain: n.domain,
				borderColor: tierColors[n.tier],
				bgColor: tierBg[n.tier],
				textColor: tierText[n.tier],
				domainColor: getDomain(n.domain)?.color || '#64748b',
			},
			position: posMap.get(n.id) || { x: 0, y: 0 },
		}));

		const edges = synthNodes.flatMap(n =>
			n.dependsOn
				.map(depId => ({
					data: {
						id: `e-${depId}-${n.id}`,
						source: depId,
						target: n.id,
						tierColor: tierColors[n.tier],
					}
				}))
		);

		cy = cytoscape({
			container: graphEl,
			elements: [...nodes, ...edges],
			layout: { name: 'preset' },
			style: [
				{
					selector: 'node',
					style: {
						'label': 'data(label)',
						'text-valign': 'center' as any,
						'text-halign': 'center' as any,
						'color': 'data(textColor)',
						'font-size': '11px',
						'font-weight': 600,
						'font-family': 'Inter, sans-serif',
						'background-color': 'data(bgColor)',
						'border-width': 3,
						'border-color': 'data(borderColor)',
						'shape': 'roundrectangle' as any,
						'width': 200,
						'height': 44,
						'text-wrap': 'wrap' as any,
						'text-max-width': '180px' as any,
						'cursor': 'pointer' as any,
					}
				},
				{
					selector: 'edge',
					style: {
						'width': 1.5,
						'line-color': 'data(tierColor)',
						'line-opacity': 0.3,
						'target-arrow-color': 'data(tierColor)',
						'target-arrow-shape': 'triangle' as any,
						'arrow-scale': 0.8,
						'curve-style': 'bezier' as any,
					}
				},
				{
					selector: 'node.highlighted',
					style: { 'border-width': 5, 'z-index': 999 }
				},
				{
					selector: 'node.selected-node',
					style: { 'border-width': 5, 'border-color': '#ffffff', 'z-index': 1000 }
				},
				{
					selector: 'node.dimmed',
					style: { 'opacity': 0.12 }
				},
				{
					selector: 'edge.dimmed',
					style: { 'opacity': 0.05 }
				},
				{
					selector: 'edge.active',
					style: { 'width': 3, 'line-opacity': 0.7, 'z-index': 50 }
				},
				{
					selector: 'node.connected',
					style: { 'opacity': 1, 'z-index': 50 }
				},
				{
					selector: '.filtered-out',
					style: { 'display': 'none' as any }
				}
			],
			userZoomingEnabled: true,
			userPanningEnabled: true,
			boxSelectionEnabled: false,
			minZoom: 0.1,
			maxZoom: 3,
		});

		// Events
		cy.on('mouseover', 'node', (evt: any) => {
			const node = evt.target;
			node.addClass('highlighted');
			const e = evt.originalEvent;
			const sn = synthNodes.find(n => n.id === node.id());
			if (!sn) return;
			const dom = getDomain(sn.domain);
			const bookList = sn.sourceBooks.length > 0
				? sn.sourceBooks.map(getBookName).join(', ')
				: 'External research';
			tooltipContent = `<span style="color:${tierColors[sn.tier]};font-weight:800">${tierLabels[sn.tier]}</span><br/><strong>${sn.label}</strong><br/><span style="color:${dom?.color || '#64748b'}">${dom?.label || sn.domain}</span><br/><span style="color:#94a3b8">${bookList}</span>`;
			tooltipX = e.clientX;
			tooltipY = e.clientY - 12;
			tooltipVisible = true;
		});

		cy.on('mouseout', 'node', (evt: any) => {
			evt.target.removeClass('highlighted');
			tooltipVisible = false;
		});

		cy.on('tap', 'node', (evt: any) => {
			const node = evt.target;
			const sn = synthNodes.find(n => n.id === node.id());
			if (!sn) return;
			selectedNode = sn;

			// Highlight connected subgraph
			cy.elements().removeClass('selected-node connected dimmed active');
			node.addClass('selected-node');

			// Find all connected nodes (upstream and downstream)
			const allIds = new Set(synthNodes.map(n => n.id));
			const connectedIds = new Set<string>([node.id()]);
			function addUpstream(id: string) {
				const sn2 = synthNodes.find(n => n.id === id);
				if (!sn2) return;
				for (const dep of sn2.dependsOn) {
					if (allIds.has(dep) && !connectedIds.has(dep)) {
						connectedIds.add(dep);
						addUpstream(dep);
					}
				}
			}
			function addDownstream(id: string) {
				for (const n of synthNodes) {
					if (n.dependsOn.includes(id) && allIds.has(n.id) && !connectedIds.has(n.id)) {
						connectedIds.add(n.id);
						addDownstream(n.id);
					}
				}
			}
			addUpstream(node.id());
			addDownstream(node.id());

			connectedIds.forEach(id => cy.getElementById(id).addClass('connected'));

			// Active edges
			cy.edges().forEach((e: any) => {
				if (connectedIds.has(e.source().id()) && connectedIds.has(e.target().id())) {
					e.addClass('active');
				}
			});

			// Dim the rest
			cy.nodes().filter((n: any) => !connectedIds.has(n.id())).addClass('dimmed');
			cy.edges().filter((e: any) => !e.hasClass('active')).addClass('dimmed');
		});

		cy.on('tap', (evt: any) => {
			if (evt.target === cy) {
				selectedNode = null;
				cy.elements().removeClass('selected-node connected dimmed active');
			}
		});

		cy.fit(undefined, 40);
	}

	onMount(() => createGraph());
	onDestroy(() => cy?.destroy());
</script>

<svelte:head>
	<title>Synthesis — The Perfect Book</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
	<header class="hero">
		<div class="hero-inner">
			<div class="nav-links">
				<a href="/" class="back-link">&larr; Hauptseite</a>
				<a href="/kausalpfade" class="back-link">Causal Paths</a>
			</div>
			<p class="book-label">Synthesis</p>
			<h1>The Perfect Book on Raising Boys</h1>
			<p class="subtitle">
				What would a book look like that only includes well-evidenced claims?
				Green core = strong evidence. Yellow = derived suggestions. Purple = missing research from external sources.
			</p>
		</div>
	</header>

	<!-- Tier filter -->
	<div class="filter-bar">
		<span class="filter-label">Show:</span>
		{#each [['all', 'All tiers'], ['core', 'Core evidence only'], ['derived', 'Core + Derived'], ['gap', 'Gaps only']] as [val, label]}
			<button class="tier-btn" class:tier-active={filterTier === val} onclick={() => { filterTier = val; applyFilter(); }}>
				{label}
			</button>
		{/each}
	</div>

	<!-- Tooltip -->
	{#if tooltipVisible && tooltipContent}
		<div class="graph-tooltip" style="left: {tooltipX}px; top: {tooltipY}px">
			{@html tooltipContent}
		</div>
	{/if}

	<!-- Graph -->
	<div class="graph-wrapper">
		<div class="graph-container" bind:this={graphEl}></div>
		<div class="graph-legend">
			<span class="legend-title">Tier:</span>
			<span class="gl-item"><span class="gl-dot" style="background: #10b981"></span> Core evidence (green)</span>
			<span class="gl-item"><span class="gl-dot" style="background: #f59e0b"></span> Derived suggestion</span>
			<span class="gl-item"><span class="gl-dot" style="background: #8b5cf6"></span> Missing research (new)</span>
			<span class="gl-sep"></span>
			<span class="legend-title">Domain:</span>
			{#each domains as dom}
				<span class="gl-item" style="color: {dom.color}">{dom.label}</span>
			{/each}
		</div>
	</div>

	<!-- Detail panel -->
	{#if selectedNode}
		{@const dom = getDomain(selectedNode.domain)}
		<div class="node-detail" style="--nd-color: {tierColors[selectedNode.tier]}">
			<div class="nd-header">
				<span class="nd-tier" style="background: {tierColors[selectedNode.tier]}">{tierLabels[selectedNode.tier]}</span>
				<span class="nd-domain" style="color: {dom?.color}">{dom?.label}</span>
				<button class="nd-close" onclick={() => { selectedNode = null; cy?.elements().removeClass('selected-node connected dimmed active'); }}>&#10005;</button>
			</div>
			<h3 class="nd-name">{selectedNode.label}</h3>
			<p class="nd-claim">{selectedNode.claim}</p>

			{#if selectedNode.dependsOn.length > 0}
				<div class="nd-deps">
					<span class="nd-deps-label">Built on:</span>
					{#each selectedNode.dependsOn as depId}
						{@const dep = synthNodes.find(n => n.id === depId)}
						{#if dep}
							<button class="nd-dep-chip" style="border-color: {tierColors[dep.tier]}" onclick={() => {
								selectedNode = dep;
								// re-trigger highlight on the graph
								const cyNode = cy?.getElementById(dep.id);
								if (cyNode) cyNode.emit('tap');
							}}>
								{dep.label}
							</button>
						{/if}
					{/each}
				</div>
			{/if}

			{#if selectedNode.sourceBooks.length > 0}
				<div class="nd-sources">
					<strong>From books:</strong>
					{#each selectedNode.sourceBooks as bid}
						{@const book = books.find(b => b.id === bid)}
						{#if book}
							<a class="ev-link" href="{book.route}">{book.shortTitle}</a>
						{/if}
					{/each}
				</div>
			{/if}

			{#if selectedNode.externalSources.length > 0}
				<div class="nd-sources">
					<strong>External sources:</strong>
					{#each selectedNode.externalSources as src}
						{#if src.url}
							<a class="ev-link" href={src.url} target="_blank">{src.label}</a>
						{:else}
							<span class="ev-link">{src.label}</span>
						{/if}
					{/each}
				</div>
			{/if}

			<div class="nd-explanation">{selectedNode.explanation}</div>
		</div>
	{/if}

	<footer class="app-footer">
		<p>Evidence synthesis from 8 books + external research &middot; <a href="/">Back to all books</a></p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		background: #0f172a; color: #e2e8f0; -webkit-font-smoothing: antialiased;
	}
	.app { max-width: 1200px; margin: 0 auto; padding: 0 20px 60px; min-height: 100vh; }
	.hero { padding: 36px 0 20px; text-align: center; }
	.hero-inner { max-width: 660px; margin: 0 auto; }
	.nav-links { display: flex; gap: 16px; justify-content: center; margin-bottom: 16px; flex-wrap: wrap; }
	.back-link { font-size: 0.78rem; color: #64748b; text-decoration: none; }
	.back-link:hover { color: #94a3b8; }
	.book-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 3px; color: #64748b; margin: 0 0 10px; }
	.hero h1 {
		font-size: 2.2rem; font-weight: 800;
		background: linear-gradient(135deg, #10b981, #f59e0b, #8b5cf6);
		-webkit-background-clip: text; -webkit-text-fill-color: transparent;
		background-clip: text; margin: 0 0 8px; line-height: 1.15;
	}
	.subtitle { color: #94a3b8; font-size: 0.88rem; line-height: 1.6; margin: 0; }

	.filter-bar {
		display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
		padding: 12px 16px; margin-top: 12px;
		background: rgba(30, 41, 59, 0.5); border-radius: 10px;
		border: 1px solid rgba(148, 163, 184, 0.1);
	}
	.filter-label { font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
	.tier-btn {
		padding: 6px 14px; border-radius: 8px; font-size: 0.78rem; font-weight: 600;
		border: 1px solid rgba(148, 163, 184, 0.15); background: rgba(148, 163, 184, 0.05);
		color: #94a3b8; cursor: pointer; transition: all 0.15s;
	}
	.tier-btn:hover { background: rgba(148, 163, 184, 0.12); }
	.tier-active { background: rgba(96, 165, 250, 0.15); border-color: rgba(96, 165, 250, 0.4); color: #60a5fa; }

	.graph-tooltip {
		position: fixed; transform: translate(-50%, -100%);
		background: rgba(15, 23, 42, 0.97); border: 1px solid rgba(148, 163, 184, 0.25);
		border-radius: 8px; padding: 10px 14px; pointer-events: none; z-index: 99999;
		max-width: 340px; min-width: 180px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
		font-size: 0.8rem; line-height: 1.5; color: #e2e8f0;
	}

	.graph-wrapper {
		background: rgba(15, 23, 42, 0.6); border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.1); overflow: hidden; margin-top: 16px;
	}
	.graph-container { width: 100%; height: 75vh; min-height: 500px; position: relative; }
	.graph-legend {
		display: flex; flex-wrap: wrap; gap: 12px; align-items: center;
		padding: 10px 16px; border-top: 1px solid rgba(148, 163, 184, 0.08);
		background: rgba(15, 23, 42, 0.4);
	}
	.legend-title { font-size: 0.72rem; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
	.gl-item { display: flex; align-items: center; gap: 5px; font-size: 0.72rem; color: #94a3b8; }
	.gl-dot { width: 10px; height: 10px; border-radius: 50%; }
	.gl-sep { width: 1px; height: 14px; background: rgba(148, 163, 184, 0.15); }

	.node-detail {
		padding: 20px; margin: 16px 0;
		background: rgba(15, 23, 42, 0.7); border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.1);
		border-left: 4px solid var(--nd-color);
	}
	.nd-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; }
	.nd-tier { font-size: 0.72rem; padding: 4px 12px; border-radius: 12px; color: white; font-weight: 600; }
	.nd-domain { font-size: 0.78rem; font-weight: 600; }
	.nd-close { margin-left: auto; background: none; border: none; color: #64748b; cursor: pointer; font-size: 1.1rem; padding: 4px; }
	.nd-close:hover { color: #ef4444; }
	.nd-name { font-weight: 700; font-size: 1.05rem; color: #f1f5f9; margin: 0 0 8px; }
	.nd-claim { font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin: 0 0 12px; }
	.nd-deps { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
	.nd-deps-label { font-size: 0.78rem; color: #64748b; font-weight: 500; }
	.nd-dep-chip {
		font-size: 0.75rem; padding: 4px 10px; border-radius: 10px;
		background: rgba(30, 41, 59, 0.8); color: #cbd5e1;
		border: 1.5px solid; cursor: pointer; font-family: inherit; transition: background 0.2s;
	}
	.nd-dep-chip:hover { background: rgba(30, 41, 59, 1); }
	.nd-sources { font-size: 0.82rem; color: #64748b; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
	.ev-link {
		color: #60a5fa; text-decoration: none; font-weight: 500;
		padding: 2px 8px; border-radius: 6px; background: rgba(59, 130, 246, 0.08);
		border: 1px solid rgba(59, 130, 246, 0.15); font-size: 0.78rem; white-space: nowrap;
	}
	.ev-link:hover { background: rgba(59, 130, 246, 0.2); color: #93c5fd; }
	.nd-explanation {
		font-size: 0.85rem; color: #94a3b8; line-height: 1.6;
		padding: 14px; background: rgba(30, 41, 59, 0.6); border-radius: 8px;
	}

	.app-footer {
		text-align: center; padding: 24px 0; color: #475569; font-size: 0.82rem;
		border-top: 1px solid rgba(148, 163, 184, 0.1); margin-top: 24px;
	}
	.app-footer a { color: #60a5fa; text-decoration: none; }
	.app-footer a:hover { text-decoration: underline; }

	@media (max-width: 640px) {
		.hero h1 { font-size: 1.5rem; }
		.graph-container { height: 60vh; min-height: 400px; }
	}
</style>
