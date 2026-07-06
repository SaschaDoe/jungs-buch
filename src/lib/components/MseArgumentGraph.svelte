<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { chain, getWeakestPath, typeLabels } from '$lib/data/mse-argument-chain-data';

	let {
		onNodeClick
	}: {
		onNodeClick: (id: string) => void;
	} = $props();

	let container: HTMLDivElement;
	let tooltip: HTMLDivElement;
	let cy: any = null;
	let tooltipContent = $state('');
	let tooltipVisible = $state(false);
	let tooltipX = $state(0);
	let tooltipY = $state(0);

	const statusColors: Record<string, string> = {
		red: '#ef4444',
		yellow: '#f59e0b',
		green: '#10b981',
		untestable: '#8b5cf6'
	};

	const statusBg: Record<string, string> = {
		red: '#3b1111',
		yellow: '#3b2f11',
		green: '#113b28',
		untestable: '#1f113b'
	};

	const weakIds = new Set(getWeakestPath().map((l) => l.id));

	onMount(async () => {
		const cytoscape = (await import('cytoscape')).default;
		const dagre = (await import('cytoscape-dagre')).default;
		cytoscape.use(dagre);

		const nodes = chain.map((link) => ({
			data: {
				id: link.id,
				label: `${link.step}. ${link.shortLabel}`,
				status: link.status,
				type: link.type,
				step: link.step,
				isWeak: weakIds.has(link.id),
				borderColor: statusColors[link.status],
				bgColor: statusBg[link.status],
				textColor: link.status === 'red' ? '#fca5a5' : link.status === 'yellow' ? '#fde68a' : link.status === 'green' ? '#a7f3d0' : '#c4b5fd',
				tooltipHtml: link.bookLocations.map((loc) =>
					`${loc.pages} — ${loc.chapter}\n${loc.context}`
				).join('\n\n')
			}
		}));

		const edges = chain.flatMap((link) =>
			link.dependsOn.map((depId) => {
				const dep = chain.find((c) => c.id === depId);
				const isWeakEdge = weakIds.has(link.id) && weakIds.has(depId);
				return {
					data: {
						id: `${depId}->${link.id}`,
						source: depId,
						target: link.id,
						edgeColor: isWeakEdge ? '#ef4444' : (dep ? statusColors[dep.status] + '88' : '#33415588'),
						edgeWidth: isWeakEdge ? 3 : 1.5
					}
				};
			})
		);

		cy = cytoscape({
			container,
			elements: [...nodes, ...edges],
			layout: {
				name: 'dagre',
				rankDir: 'TB',
				nodeSep: 40,
				rankSep: 60,
				edgeSep: 20,
				padding: 30
			} as any,
			style: [
				{
					selector: 'node',
					style: {
						'label': 'data(label)',
						'text-valign': 'center',
						'text-halign': 'center',
						'color': 'data(textColor)',
						'font-size': '13px',
						'font-weight': '600',
						'font-family': 'Inter, sans-serif',
						'background-color': 'data(bgColor)',
						'border-width': 2.5,
						'border-color': 'data(borderColor)',
						'shape': 'roundrectangle',
						'width': 250,
						'height': 50,
						'text-wrap': 'wrap',
						'text-max-width': '230px',
						'padding': '12px',
						'cursor': 'pointer'
					} as any
				},
				{
					selector: 'node[?isWeak]',
					style: {
						'border-width': 3.5,
						'background-color': '#2a1115',
						'shadow-blur': 12,
						'shadow-color': '#ef444466',
						'shadow-offset-x': 0,
						'shadow-offset-y': 0,
						'shadow-opacity': 1
					} as any
				},
				{
					selector: 'edge',
					style: {
						'width': 'data(edgeWidth)',
						'line-color': 'data(edgeColor)',
						'target-arrow-color': 'data(edgeColor)',
						'target-arrow-shape': 'triangle',
						'curve-style': 'bezier',
						'arrow-scale': 1.2
					} as any
				}
			],
			userZoomingEnabled: true,
			userPanningEnabled: true,
			boxSelectionEnabled: false,
			minZoom: 0.5,
			maxZoom: 2
		});

		cy.on('tap', 'node', (evt: any) => {
			onNodeClick(evt.target.id());
		});

		cy.on('mouseover', 'node', (evt: any) => {
			const node = evt.target;
			const pos = evt.renderedPosition || node.renderedPosition();
			tooltipContent = node.data('tooltipHtml') || '';
			tooltipX = pos.x;
			tooltipY = pos.y - 30;
			tooltipVisible = true;
		});

		cy.on('mouseout', 'node', () => {
			tooltipVisible = false;
		});

		cy.fit(undefined, 30);
	});

	onDestroy(() => {
		cy?.destroy();
	});
</script>

<div class="graph-wrapper">
	<div class="graph-container" bind:this={container}>
		{#if tooltipVisible && tooltipContent}
			<div
				class="graph-tooltip"
				style="left: {tooltipX}px; top: {tooltipY}px"
				bind:this={tooltip}
			>
				<div class="gt-title">Im Buch:</div>
				{#each tooltipContent.split('\n\n') as block}
					<div class="gt-block">
						{#each block.split('\n') as line, li}
							{#if li === 0}
								<span class="gt-pages">{line}</span>
							{:else}
								<span class="gt-context">{line}</span>
							{/if}
						{/each}
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<div class="graph-legend">
		<span class="gl-item"><span class="gl-dot" style="background: #ef4444"></span> Problematisch</span>
		<span class="gl-item"><span class="gl-dot" style="background: #f59e0b"></span> Wacklig</span>
		<span class="gl-item"><span class="gl-dot" style="background: #10b981"></span> Solide</span>
		<span class="gl-item"><span class="gl-dot" style="background: #8b5cf6"></span> Nicht testbar</span>
		<span class="gl-item"><span class="gl-line-red"></span> Schwächster Pfad</span>
	</div>
</div>

<style>
	.graph-wrapper {
		background: rgba(15, 23, 42, 0.6);
		border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.1);
		overflow: hidden;
		margin-bottom: 16px;
	}

	.graph-container {
		width: 100%;
		height: 760px;
		position: relative;
	}

	.graph-tooltip {
		position: absolute;
		transform: translate(-50%, -100%);
		background: rgba(15, 23, 42, 0.95);
		border: 1px solid rgba(148, 163, 184, 0.25);
		border-radius: 10px;
		padding: 12px 14px;
		pointer-events: none;
		z-index: 1000;
		max-width: 320px;
		min-width: 200px;
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
	}

	.gt-title {
		font-size: 0.68rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: #64748b;
		font-weight: 600;
		margin-bottom: 8px;
	}

	.gt-block {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 6px 0;
		border-bottom: 1px solid rgba(148, 163, 184, 0.08);
	}
	.gt-block:last-child { border-bottom: none; }

	.gt-pages {
		font-size: 0.78rem;
		color: #60a5fa;
		font-weight: 600;
	}

	.gt-context {
		font-size: 0.75rem;
		color: #94a3b8;
		line-height: 1.4;
	}

	.graph-legend {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		padding: 10px 16px;
		border-top: 1px solid rgba(148, 163, 184, 0.08);
		background: rgba(15, 23, 42, 0.4);
	}

	.gl-item {
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 0.75rem;
		color: #94a3b8;
	}

	.gl-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.gl-line-red {
		width: 20px;
		height: 3px;
		background: #ef4444;
		border-radius: 2px;
	}
</style>
