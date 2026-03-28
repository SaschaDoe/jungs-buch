<script lang="ts">
	import { evidenceItems, evidenceStatusInfo, auditSummary } from '$lib/data/ww-evidence-audit-data';
	import { chain, getWeakestPath, chainSummary, typeLabels as chainTypeLabels } from '$lib/data/ww-argument-chain-data';
	import WwArgumentGraph from '$lib/components/WwArgumentGraph.svelte';

	let selectedNodeId = $state<string | null>(null);
	let selectedNode = $derived(selectedNodeId ? chain.find((c) => c.id === selectedNodeId) : null);

	const weakestPath = getWeakestPath();
	const weakestIds = new Set(weakestPath.map((l) => l.id));
	const statusColors: Record<string, string> = { red: '#ef4444', yellow: '#f59e0b', green: '#10b981', untestable: '#8b5cf6' };
	const statusIcons: Record<string, string> = { red: '🔴', yellow: '🟡', green: '🟢', untestable: '🟣' };

	let auditFilter = $state<string>('all');
	let filteredEvidence = $derived.by(() => {
		if (auditFilter === 'all') return evidenceItems;
		return evidenceItems.filter((e) => e.status === auditFilter);
	});
</script>

<svelte:head>
	<title>Evidenz-Audit &amp; Argumentationskette — Warriors and Worriers</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
	<header class="hero">
		<div class="hero-inner">
			<div class="nav-links">
				<a href="/warriors-and-worriers" class="back-link">&larr; Buchübersicht</a>
				<a href="/warriors-and-worriers/references" class="back-link">Quellenverzeichnis &rarr;</a>
			</div>
			<p class="book-label">Evidenz-Audit &amp; Argumentationskette</p>
			<h1>Wie belastbar ist das Fundament?</h1>
			<p class="subtitle">
				Evidenz-Audit und Argumentationskette für
				<em>Warriors and Worriers</em>
			</p>
			<p class="subtitle-note">
				Wie gut sind die Thesen des Buches wissenschaftlich abgesichert?
				Wo bricht die Argumentation?
			</p>
		</div>
	</header>

	<!-- Argument Chain -->
	<section class="chain-section">
		<h2>Argumentationskette: Wo bricht das Fundament?</h2>
		<p class="chain-intro">
			Die Schritte der Buchlogik — von den Prämissen bis zu den Handlungsempfehlungen.
			Jeder Schritt zeigt an, auf welchem Vorgänger er aufbaut. Rote und gelbe Glieder schwächen alles, was auf ihnen steht.
		</p>

		<!-- Chain mini-stats -->
		<div class="chain-stats">
			<span>🔴 {chainSummary.red} problematisch</span>
			<span>🟡 {chainSummary.yellow} wacklig</span>
			<span>🟢 {chainSummary.green} solide</span>
			<span>🟣 {chainSummary.untestable} nicht testbar</span>
		</div>

		<p class="graph-instruction">Klicke auf einen Knoten um Details zu sehen. Ziehen zum Verschieben, Scrollen zum Zoomen.</p>

		<!-- Interactive graph -->
		<WwArgumentGraph onNodeClick={(id) => (selectedNodeId = selectedNodeId === id ? null : id)} />

		<!-- Detail panel for selected node -->
		{#if selectedNode}
			{@const color = statusColors[selectedNode.status]}
			{@const icon = statusIcons[selectedNode.status]}
			{@const typeInfo = chainTypeLabels[selectedNode.type]}
			{@const statusLabel = selectedNode.status === 'red' ? 'Problematisch' : selectedNode.status === 'yellow' ? 'Wacklig' : selectedNode.status === 'green' ? 'Solide belegt' : 'Nicht testbar'}
			<div class="node-detail" style="--nd-color: {color}">
				<div class="nd-header">
					<span class="nd-num" style="background: {color}">{selectedNode.step}</span>
					<span class="nd-name">{selectedNode.shortLabel}</span>
					<span class="nd-type" style="color: {typeInfo.color}">{typeInfo.label}</span>
					<span class="nd-status" style="background: {color}">{icon} {statusLabel}</span>
					<button class="nd-close" onclick={() => (selectedNodeId = null)}>&#10005;</button>
				</div>

				<p class="nd-claim">{selectedNode.claim}</p>

				{#if selectedNode.dependsOn.length > 0}
					<div class="nd-deps">
						<span class="nd-deps-label">Stützt sich auf:</span>
						{#each selectedNode.dependsOn as depId}
							{@const dep = chain.find((c) => c.id === depId)}
							{#if dep}
								<button class="nd-dep-chip" style="border-color: {statusColors[dep.status]}" onclick={() => (selectedNodeId = depId)}>
									{statusIcons[dep.status]} {dep.step}. {dep.shortLabel}
								</button>
							{/if}
						{/each}
					</div>
				{/if}

				<div class="nd-evidence">
					<strong>Evidenz:</strong>
					{#each selectedNode.evidenceRefs as ref, i}
						<a class="ev-link" href="/warriors-and-worriers/references?search={encodeURIComponent(ref.authorSearch)}">{ref.label}</a>{#if i < selectedNode.evidenceRefs.length - 1}<span class="ev-sep">&middot;</span>{/if}
					{/each}
				</div>

				<div class="nd-explanation">{selectedNode.explanation}</div>

				{#if selectedNode.status === 'red' || selectedNode.status === 'yellow'}
					<div class="nd-risk">
						<strong>Wenn dieses Glied bricht:</strong> {selectedNode.collapseRisk}
					</div>
				{/if}
			</div>
		{/if}

		<!-- Chain verdict -->
		<div class="chain-verdict">
			<h3>Zusammenfassung</h3>
			<p>{chainSummary.verdict}</p>
		</div>
	</section>

	<!-- Evidence Audit -->
	<section class="audit-section">
		<h2>Evidenz-Audit: Wie belastbar sind die Quellen des Buches?</h2>
		<p class="audit-intro">
			Jede im Buch zitierte Studie und empirische Behauptung wurde gegen den aktuellen
			Replikationsstand und die Methodenkritik geprüft.
		</p>

		<!-- Audit stats -->
		<div class="audit-stats">
			{#each Object.entries(evidenceStatusInfo) as [key, info]}
				<button
					class="audit-stat-card"
					class:active={auditFilter === key}
					style="--stat-color: {info.color}"
					onclick={() => (auditFilter = auditFilter === key ? 'all' : key)}
				>
					<span class="audit-stat-icon">{info.icon}</span>
					<span class="audit-stat-count">{evidenceItems.filter((e) => e.status === key).length}</span>
					<span class="audit-stat-label">{info.label}</span>
				</button>
			{/each}
		</div>

		{#if auditFilter !== 'all'}
			<button class="show-all-btn" onclick={() => (auditFilter = 'all')}>Alle anzeigen ({evidenceItems.length})</button>
		{/if}

		<!-- Evidence items -->
		<div class="audit-list">
			{#each filteredEvidence as item}
				{@const info = evidenceStatusInfo[item.status]}
				<div class="audit-item" style="--item-color: {info.color}">
					<div class="audit-item-header">
						<span class="audit-icon">{info.icon}</span>
						<span class="audit-claim">{item.claim}</span>
						<span class="centrality-tag centrality-{item.centrality}">
							{item.centrality === 'critical' ? 'Tragend' : item.centrality === 'supporting' ? 'Stützend' : 'Nebensächlich'}
						</span>
					</div>
					<div class="audit-item-body">
						<div class="audit-source"><strong>Quelle:</strong> {item.source}</div>
						<div class="audit-pages"><strong>Seite:</strong> {item.pages}</div>
						<div class="audit-status-label" style="color: {info.color}">
							<strong>Status:</strong> {item.statusLabel}
						</div>
						<p class="audit-detail">{item.detail}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Verdict -->
		<div class="audit-verdict">
			<h3>Gesamturteil</h3>
			<div class="verdict-stats">
				<span>🔴 {auditSummary.red} problematisch ({auditSummary.criticalRed} davon tragend)</span>
				<span>🟡 {auditSummary.yellow} wacklig ({auditSummary.criticalYellow} davon tragend)</span>
				<span>🟢 {auditSummary.green} solide</span>
				<span>🟣 {auditSummary.untestable} nicht testbar</span>
			</div>
			<p>{auditSummary.verdict}</p>
		</div>
	</section>

	<footer class="app-footer">
		<p>
			Evidenz-Audit und Argumentationsanalyse zu <em>Warriors and Worriers</em> (Benenson, 2014).
			Die Einordnungen basieren auf dem Stand der wissenschaftlichen Debatte bis 2025.
		</p>
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

	.app { max-width: 1100px; margin: 0 auto; padding: 0 20px 60px; }

	/* Hero */
	.hero { padding: 40px 0 24px; text-align: center; }
	.nav-links { display: flex; justify-content: center; gap: 24px; margin-bottom: 20px; flex-wrap: wrap; }
	.back-link { color: #60a5fa; text-decoration: none; font-size: 0.85rem; }
	.back-link:hover { color: #93c5fd; }
	.book-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 3px; color: #64748b; margin: 0 0 12px; }
	.hero h1 {
		font-size: 2.2rem; font-weight: 800; margin: 0 0 8px; line-height: 1.2;
		background: linear-gradient(135deg, #ef4444, #f87171, #fca5a5);
		-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
	}
	.subtitle { color: #94a3b8; font-size: 1rem; margin: 0 0 6px; }
	.subtitle em { color: #fca5a5; }
	.subtitle-note { color: #64748b; font-size: 0.85rem; margin: 0; }

	/* Argument Chain */
	.chain-section {
		margin-top: 10px; padding: 28px;
		background: rgba(30, 41, 59, 0.4); border-radius: 14px;
		border: 1px solid rgba(148, 163, 184, 0.12);
	}
	.chain-section h2 { font-size: 1.4rem; font-weight: 700; color: #e2e8f0; margin: 0 0 8px; }
	.chain-intro { font-size: 0.9rem; color: #94a3b8; margin: 0 0 16px; line-height: 1.5; }

	.chain-stats {
		display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 20px;
		font-size: 0.82rem; color: #94a3b8;
	}

	/* Graph section */
	.graph-instruction { font-size: 0.82rem; color: #64748b; margin: 0 0 10px; font-style: italic; }

	/* Node detail panel */
	.node-detail {
		padding: 20px; margin-bottom: 20px;
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

	.nd-risk {
		padding: 12px 14px;
		background: rgba(239, 68, 68, 0.06); border-radius: 8px;
		border-left: 3px solid #ef4444;
		font-size: 0.84rem; color: #fca5a5; line-height: 1.5;
	}

	.chain-verdict {
		padding: 20px; background: rgba(15, 23, 42, 0.6); border-radius: 10px;
		border: 1px solid rgba(148, 163, 184, 0.1);
	}
	.chain-verdict h3 { font-size: 1rem; font-weight: 700; color: #e2e8f0; margin: 0 0 10px; }
	.chain-verdict p { font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin: 0; }

	/* Evidence Audit */
	.audit-section {
		margin-top: 48px; padding: 28px;
		background: rgba(30, 41, 59, 0.4); border-radius: 14px;
		border: 1px solid rgba(148, 163, 184, 0.12);
	}
	.audit-section h2 { font-size: 1.4rem; font-weight: 700; color: #e2e8f0; margin: 0 0 8px; }
	.audit-intro { font-size: 0.9rem; color: #94a3b8; margin: 0 0 20px; line-height: 1.5; }

	.audit-stats {
		display: flex; gap: 10px; margin-bottom: 18px; flex-wrap: wrap;
	}
	.audit-stat-card {
		display: flex; flex-direction: column; align-items: center; gap: 4px;
		padding: 14px 20px; border-radius: 10px; border: 1px solid rgba(148, 163, 184, 0.12);
		background: rgba(15, 23, 42, 0.5); cursor: pointer; font-family: inherit;
		color: #e2e8f0; transition: all 0.2s; flex: 1; min-width: 100px;
	}
	.audit-stat-card:hover { border-color: var(--stat-color); }
	.audit-stat-card.active { border-color: var(--stat-color); background: rgba(15, 23, 42, 0.8); box-shadow: 0 0 12px rgba(0,0,0,0.3); }
	.audit-stat-icon { font-size: 1.3rem; }
	.audit-stat-count { font-size: 1.5rem; font-weight: 800; color: var(--stat-color); }
	.audit-stat-label { font-size: 0.72rem; color: #64748b; text-align: center; }

	.show-all-btn {
		display: inline-block; padding: 6px 14px; margin-bottom: 14px;
		background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2);
		border-radius: 8px; color: #fca5a5; font-size: 0.8rem;
		cursor: pointer; font-family: inherit;
	}
	.show-all-btn:hover { background: rgba(239, 68, 68, 0.2); }

	.audit-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }

	.audit-item {
		background: rgba(15, 23, 42, 0.5); border-radius: 10px;
		border: 1px solid rgba(148, 163, 184, 0.08);
		border-left: 3px solid var(--item-color);
		padding: 16px;
	}
	.audit-item-header {
		display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;
	}
	.audit-icon { font-size: 1rem; flex-shrink: 0; margin-top: 2px; }
	.audit-claim { font-size: 0.9rem; font-weight: 600; color: #e2e8f0; line-height: 1.4; flex: 1; }

	.centrality-tag {
		font-size: 0.65rem; padding: 2px 8px; border-radius: 10px; font-weight: 500; white-space: nowrap;
	}
	.centrality-critical { background: rgba(239, 68, 68, 0.2); color: #fca5a5; }
	.centrality-supporting { background: rgba(245, 158, 11, 0.2); color: #fde68a; }
	.centrality-minor { background: rgba(100, 116, 139, 0.2); color: #94a3b8; }

	.audit-item-body { padding-left: 28px; }
	.audit-source { font-size: 0.8rem; color: #64748b; margin-bottom: 4px; }
	.audit-pages { font-size: 0.78rem; color: #475569; margin-bottom: 6px; }
	.audit-status-label { font-size: 0.82rem; font-weight: 500; margin-bottom: 8px; }
	.audit-detail { font-size: 0.84rem; color: #94a3b8; line-height: 1.6; margin: 0; }

	.audit-verdict {
		padding: 20px; background: rgba(15, 23, 42, 0.6); border-radius: 10px;
		border: 1px solid rgba(148, 163, 184, 0.1);
	}
	.audit-verdict h3 { font-size: 1rem; font-weight: 700; color: #e2e8f0; margin: 0 0 10px; }
	.verdict-stats {
		display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 12px;
		font-size: 0.82rem; color: #94a3b8;
	}
	.audit-verdict p { font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin: 0; }

	/* Footer */
	.app-footer {
		text-align: center; padding: 30px 0; color: #475569; font-size: 0.82rem;
		border-top: 1px solid rgba(148, 163, 184, 0.1); margin-top: 40px;
	}
	.app-footer em { color: #64748b; }

	@media (max-width: 640px) {
		.hero h1 { font-size: 1.5rem; }
		.nav-links { gap: 12px; }
	}
</style>
