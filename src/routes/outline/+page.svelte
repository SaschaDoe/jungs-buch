<script lang="ts">
	import { outlineParts, myths, scienceFields, contradictions, type OutlineChapter, type OutlinePart } from '$lib/data/outline-data';
	import { synthNodes, domains as synthDomains } from '$lib/data/synthesis-data';

	let expandedChapter = $state<string | null>(null);

	function toggleChapter(id: string) {
		expandedChapter = expandedChapter === id ? null : id;
	}

	function getDomainColor(domId: string) {
		return synthDomains.find(d => d.id === domId)?.color || '#64748b';
	}
	function getDomainLabel(domId: string) {
		return synthDomains.find(d => d.id === domId)?.label || domId;
	}
	function getNode(id: string) {
		return synthNodes.find(n => n.id === id);
	}

	const statusLabels: Record<string, string> = {
		'disproven': 'Disproven',
		'overstated': 'Overstated',
		'oversimplified': 'Oversimplified',
		'no-evidence': 'No evidence',
	};
	const statusColors: Record<string, string> = {
		'disproven': '#ef4444',
		'overstated': '#f59e0b',
		'oversimplified': '#f97316',
		'no-evidence': '#8b5cf6',
	};
</script>

<svelte:head>
	<title>Book Outline — The Perfect Book on Raising Boys</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
	<header class="hero">
		<div class="hero-inner">
			<div class="nav-links">
				<a href="/" class="back-link">&larr; Hauptseite</a>
				<a href="/synthesis" class="back-link">Evidence Graph</a>
			</div>
			<p class="book-label">Book Outline</p>
			<h1>The Perfect Book on Raising Boys</h1>
			<p class="subtitle">
				20 chapters following the causal flow of the evidence. Each chapter maps to nodes in the
				<a href="/synthesis" class="inline-link">synthesis graph</a>.
				Science literacy first, then biology and context, then what we do to boys, then what breaks, then what works.
				Every chapter includes honest engagement with counter-evidence, intersectional context across race/class/disability,
				and a practical Field Guide for parents.
			</p>
			<div class="stats-row">
				<span class="stat"><strong>20</strong> chapters</span>
				<span class="stat"><strong>5</strong> parts</span>
				<span class="stat"><strong>~162K</strong> words</span>
				<span class="stat"><strong>10</strong> Field Guides</span>
			</div>
		</div>
	</header>

	<!-- Outline -->
	<div class="outline">
		{#each outlineParts as part}
			<div class="part" style="--part-color: {part.color}">
				<div class="part-header">
					<span class="part-number">Part {part.number}</span>
					<h2 class="part-title">{part.title}</h2>
					<p class="part-subtitle">{part.subtitle}</p>
				</div>

				<div class="chapters">
					{#each part.chapters as ch}
						{@const isExpanded = expandedChapter === ch.id}
						<button class="chapter-bar" class:expanded={isExpanded} onclick={() => toggleChapter(ch.id)}>
							<div class="ch-left">
								<span class="ch-number">{ch.number}</span>
								<div class="ch-titles">
									<span class="ch-title">{ch.title}</span>
									<span class="ch-subtitle">{ch.subtitle}</span>
								</div>
							</div>
							<div class="ch-right">
								{#each ch.domains as domId}
									<span class="ch-domain-dot" style="background: {getDomainColor(domId)}" title={getDomainLabel(domId)}></span>
								{/each}
								{#if ch.isNew}
									<span class="ch-new-badge">NEW</span>
								{/if}
								<span class="ch-arrow">{isExpanded ? '\u25B2' : '\u25BC'}</span>
							</div>
						</button>

						{#if isExpanded}
							<div class="chapter-detail">
								<div class="cd-question">
									<span class="cd-q-label">Key question:</span>
									{ch.keyQuestion}
								</div>

								<p class="cd-description">{ch.description}</p>

								<!-- Ch 1: Myths -->
								{#if ch.id === 'myths'}
									<div class="cd-extra">
										<span class="cd-section-label">Myths addressed in this chapter:</span>
										<div class="myths-grid">
											{#each myths as m}
												<div class="myth-card">
													<div class="myth-header">
														<span class="myth-label">{m.myth}</span>
														<span class="myth-status" style="background: {statusColors[m.status]}">{statusLabels[m.status]}</span>
													</div>
													<p class="myth-reality">{m.reality}</p>
												</div>
											{/each}
										</div>
									</div>
								{/if}

								<!-- Ch 2: Science fields -->
								{#if ch.id === 'sciences'}
									<div class="cd-extra">
										<span class="cd-section-label">Fields covered:</span>
										<div class="science-grid">
											{#each scienceFields as sf}
												<div class="science-card">
													<div class="science-name" style="color: {sf.color}">{sf.name}</div>
													<div class="science-row">
														<span class="science-label sees">Sees</span>
														<span class="science-text">{sf.sees}</span>
													</div>
													<div class="science-row">
														<span class="science-label misses">Misses</span>
														<span class="science-text">{sf.misses}</span>
													</div>
												</div>
											{/each}
										</div>
									</div>
								{/if}

								<!-- Ch 3: Contradictions -->
								{#if ch.id === 'contradictions'}
									<div class="cd-extra">
										<span class="cd-section-label">Contradictions addressed:</span>
										<div class="contra-list">
											{#each contradictions as c, i}
												<div class="contra-card">
													<div class="contra-question">{i + 1}. {c.question}</div>
													<div class="contra-sides">
														<div class="contra-side side-a">
															<span class="contra-side-label">Side A</span>
															{c.sideA}
														</div>
														<div class="contra-vs">vs.</div>
														<div class="contra-side side-b">
															<span class="contra-side-label">Side B</span>
															{c.sideB}
														</div>
													</div>
													<div class="contra-resolution">
														<span class="contra-res-label">Resolution:</span> {c.resolution}
													</div>
												</div>
											{/each}
										</div>
									</div>
								{/if}

								{#if ch.nodeIds.length > 0}
									<div class="cd-nodes">
										<span class="cd-section-label">Evidence nodes:</span>
										<div class="cd-node-list">
											{#each ch.nodeIds as nid}
												{@const node = getNode(nid)}
												{#if node}
													{@const tierColor = node.tier === 'core' ? '#10b981' : node.tier === 'derived' ? '#f59e0b' : '#8b5cf6'}
													<a href="/synthesis" class="cd-node-chip" style="border-color: {tierColor}; color: {tierColor}">
														{node.label}
														{#if node.isNewSource}
															<span class="cd-node-ext">EXT</span>
														{/if}
													</a>
												{/if}
											{/each}
										</div>
									</div>
								{/if}

								{#if ch.keySources.length > 0}
									<div class="cd-sources">
										<span class="cd-section-label">Key sources:</span>
										{#each ch.keySources as src}
											<span class="cd-source">{src}</span>
										{/each}
									</div>
								{/if}

								{#if ch.bridge}
									<div class="cd-bridge">
										<span class="cd-bridge-label">Bridge to next chapter:</span>
										<em>"{ch.bridge}"</em>
									</div>
								{/if}
							</div>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<footer class="app-footer">
		<p>
			Outline derived from evidence synthesis of 8 books + external research
			&middot; <a href="/synthesis">View evidence graph</a>
			&middot; <a href="/">Back to all books</a>
		</p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		background: #0f172a; color: #e2e8f0; -webkit-font-smoothing: antialiased;
	}
	.app { max-width: 900px; margin: 0 auto; padding: 0 20px 60px; min-height: 100vh; }

	/* Hero */
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
	.subtitle { color: #94a3b8; font-size: 0.88rem; line-height: 1.6; margin: 0 0 16px; }
	.inline-link { color: #60a5fa; text-decoration: none; }
	.inline-link:hover { text-decoration: underline; }
	.stats-row { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
	.stat {
		font-size: 0.78rem; color: #64748b; padding: 4px 12px;
		background: rgba(30, 41, 59, 0.5); border-radius: 8px;
		border: 1px solid rgba(148, 163, 184, 0.1);
	}
	.stat strong { color: #e2e8f0; }

	/* Outline */
	.outline { display: flex; flex-direction: column; gap: 32px; margin-top: 24px; }

	/* Chapter extra content */
	.cd-extra { margin-bottom: 16px; }

	/* Myths */
	.myths-grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
	.myth-card {
		padding: 12px 16px; background: rgba(30, 41, 59, 0.4); border-radius: 8px;
		border-left: 3px solid rgba(239, 68, 68, 0.4);
	}
	.myth-header { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; flex-wrap: wrap; }
	.myth-label { font-size: 0.88rem; font-weight: 700; color: #f1f5f9; }
	.myth-status {
		font-size: 0.65rem; font-weight: 700; padding: 2px 8px; border-radius: 6px;
		color: white; text-transform: uppercase; letter-spacing: 0.5px;
	}
	.myth-reality { font-size: 0.82rem; color: #94a3b8; line-height: 1.5; margin: 0; }

	/* Science fields */
	.science-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px; }
	.science-card {
		padding: 12px 16px; background: rgba(30, 41, 59, 0.4); border-radius: 8px;
	}
	.science-name { font-weight: 700; font-size: 0.88rem; margin-bottom: 8px; }
	.science-row { display: flex; gap: 8px; margin-bottom: 4px; align-items: flex-start; }
	.science-label {
		font-size: 0.65rem; font-weight: 700; padding: 2px 6px; border-radius: 4px;
		text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap; margin-top: 1px;
	}
	.science-label.sees { background: rgba(16, 185, 129, 0.2); color: #6ee7b7; }
	.science-label.misses { background: rgba(239, 68, 68, 0.2); color: #fca5a5; }
	.science-text { font-size: 0.78rem; color: #94a3b8; line-height: 1.4; }

	/* Contradictions */
	.contra-list { display: flex; flex-direction: column; gap: 16px; }
	.contra-card {
		padding: 16px; background: rgba(30, 41, 59, 0.4); border-radius: 8px;
		border-left: 3px solid rgba(96, 165, 250, 0.4);
	}
	.contra-question { font-weight: 700; font-size: 0.95rem; color: #f1f5f9; margin-bottom: 12px; }
	.contra-sides { display: flex; gap: 12px; margin-bottom: 12px; align-items: stretch; }
	.contra-side {
		flex: 1; font-size: 0.82rem; color: #cbd5e1; line-height: 1.5;
		padding: 10px 12px; border-radius: 6px; background: rgba(15, 23, 42, 0.5);
	}
	.contra-side-label {
		display: block; font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
		letter-spacing: 1px; margin-bottom: 4px;
	}
	.side-a .contra-side-label { color: #f59e0b; }
	.side-b .contra-side-label { color: #8b5cf6; }
	.contra-vs {
		display: flex; align-items: center; font-size: 0.78rem; color: #475569;
		font-weight: 700; flex-shrink: 0;
	}
	.contra-resolution {
		font-size: 0.82rem; color: #94a3b8; line-height: 1.5;
		padding: 10px 12px; border-radius: 6px; background: rgba(16, 185, 129, 0.06);
		border: 1px solid rgba(16, 185, 129, 0.15);
	}
	.contra-res-label { color: #6ee7b7; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; }

	.part {
		border-left: 4px solid var(--part-color);
		padding-left: 20px;
	}
	.part-header { margin-bottom: 12px; }
	.part-number {
		font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
		letter-spacing: 2px; color: var(--part-color);
	}
	.part-title { font-size: 1.3rem; font-weight: 800; color: #f1f5f9; margin: 4px 0 4px; }
	.part-subtitle { font-size: 0.85rem; color: #64748b; margin: 0; }

	/* Chapters */
	.chapters { display: flex; flex-direction: column; gap: 2px; }
	.chapter-bar {
		display: flex; align-items: center; justify-content: space-between; width: 100%;
		padding: 12px 16px; background: rgba(30, 41, 59, 0.4); border: 1px solid rgba(148, 163, 184, 0.08);
		border-radius: 8px; cursor: pointer; text-align: left; font-family: inherit;
		color: #e2e8f0; transition: all 0.15s; gap: 12px;
	}
	.chapter-bar:hover { background: rgba(30, 41, 59, 0.7); border-color: rgba(148, 163, 184, 0.15); }
	.chapter-bar.expanded { background: rgba(30, 41, 59, 0.7); border-color: rgba(148, 163, 184, 0.2); border-radius: 8px 8px 0 0; }
	.ch-left { display: flex; align-items: center; gap: 12px; min-width: 0; }
	.ch-number {
		font-size: 1.1rem; font-weight: 800; color: var(--part-color);
		width: 32px; text-align: center; flex-shrink: 0;
	}
	.ch-titles { display: flex; flex-direction: column; min-width: 0; }
	.ch-title { font-size: 0.92rem; font-weight: 700; color: #f1f5f9; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.ch-subtitle { font-size: 0.75rem; color: #64748b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
	.ch-right { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
	.ch-domain-dot { width: 8px; height: 8px; border-radius: 50%; }
	.ch-new-badge {
		font-size: 0.6rem; font-weight: 800; padding: 2px 6px; border-radius: 4px;
		background: rgba(96, 165, 250, 0.2); color: #60a5fa; letter-spacing: 0.5px;
	}
	.ch-arrow { font-size: 0.65rem; color: #475569; margin-left: 4px; }

	/* Chapter detail */
	.chapter-detail {
		padding: 20px; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(148, 163, 184, 0.1);
		border-top: none; border-radius: 0 0 8px 8px; margin-bottom: 4px;
	}
	.cd-question {
		font-size: 0.9rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 14px;
		padding: 10px 14px; background: rgba(96, 165, 250, 0.06); border-radius: 8px;
		border: 1px solid rgba(96, 165, 250, 0.12); font-style: italic;
	}
	.cd-q-label { font-style: normal; font-weight: 700; color: #60a5fa; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 6px; }
	.cd-description { font-size: 0.88rem; color: #94a3b8; line-height: 1.7; margin: 0 0 16px; }

	.cd-nodes { margin-bottom: 14px; }
	.cd-section-label { display: block; font-size: 0.72rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
	.cd-node-list { display: flex; flex-wrap: wrap; gap: 6px; }
	.cd-node-chip {
		font-size: 0.75rem; padding: 4px 10px; border-radius: 8px;
		background: rgba(30, 41, 59, 0.8); border: 1.5px solid;
		text-decoration: none; font-weight: 500; transition: background 0.15s;
	}
	.cd-node-chip:hover { background: rgba(30, 41, 59, 1); }
	.cd-node-ext {
		font-size: 0.55rem; font-weight: 800; background: rgba(96, 165, 250, 0.2);
		color: #60a5fa; padding: 1px 4px; border-radius: 3px; margin-left: 4px;
		vertical-align: middle;
	}

	.cd-sources { margin-bottom: 14px; display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
	.cd-source {
		font-size: 0.75rem; padding: 3px 8px; border-radius: 6px;
		background: rgba(148, 163, 184, 0.08); color: #94a3b8;
		border: 1px solid rgba(148, 163, 184, 0.1);
	}

	.cd-bridge {
		font-size: 0.85rem; color: #94a3b8; line-height: 1.6;
		padding: 12px 14px; background: rgba(30, 41, 59, 0.5); border-radius: 8px;
		border-left: 3px solid rgba(96, 165, 250, 0.3);
	}
	.cd-bridge-label { display: block; font-size: 0.68rem; font-weight: 700; color: #60a5fa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; font-style: normal; }

	/* Footer */
	.app-footer {
		text-align: center; padding: 24px 0; color: #475569; font-size: 0.82rem;
		border-top: 1px solid rgba(148, 163, 184, 0.1); margin-top: 24px;
	}
	.app-footer a { color: #60a5fa; text-decoration: none; }
	.app-footer a:hover { text-decoration: underline; }

	@media (max-width: 640px) {
		.hero h1 { font-size: 1.5rem; }
		.ch-title { white-space: normal; }
		.ch-subtitle { display: none; }
		.contra-sides { flex-direction: column; }
		.contra-vs { justify-content: center; }
		.science-grid { grid-template-columns: 1fr; }
	}
</style>
