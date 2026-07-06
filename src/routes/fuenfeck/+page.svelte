<script lang="ts">
	import {
		pentagonBooks, pentagonEdges, relationInfo, flow, consensusZone,
		conflictZones, matrix, pentagonVerdict, type PentagonEdge
	} from '$lib/data/pentagon-data';
	import { books } from '$lib/data/cross-book-data';

	function getBook(id: string) {
		return books.find((b) => b.id === id)!;
	}

	// pentagon geometry
	const CX = 330, CY = 300, R = 215;
	const order = ['nbm', 'obm', 'rc', 'jvh', 'ba'];
	const pos: Record<string, { x: number; y: number }> = {};
	order.forEach((id, i) => {
		const a = ((-90 + i * 72) * Math.PI) / 180;
		pos[id] = { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
	});

	let selectedEdge = $state<PentagonEdge | null>(null);
	let hoveredEdge = $state<string | null>(null);

	const kindStyle: Record<string, { color: string; label: string }> = {
		consensus: { color: '#10b981', label: 'Konsens' },
		contested: { color: '#f59e0b', label: 'Umkämpft / offen' },
		conflict: { color: '#ef4444', label: 'Widerspruch' }
	};
</script>

<svelte:head>
	<title>Das Fünfeck — der große Überblick</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
	<header class="hero">
		<a href="/" class="back-link">&larr; Alle Bücher</a>
		<p class="book-label">Die große Synthese</p>
		<h1>Das Fünfeck</h1>
		<p class="subtitle-note">
			Fünf Bücher, fünf Hebel — Selbstformung (Galloway), Struktur (Reeves), Erziehung (Dittmann),
			Biologie (Sax), Emotion (Kindlon &amp; Thompson) — zu einem Gesamtbild verbunden:
			Wo laufen ihre Kausalpfade zusammen, wo widersprechen sie sich, und was bleibt übrig,
			wenn man alle fünf ernst nimmt? Jede Kante des Fünfecks ist ein
			<a href="/vergleiche" class="inline-link">ausgearbeiteter Paar-Vergleich</a>.
		</p>
	</header>

	<!-- ═══════════ PENTAGON ═══════════ -->
	<section class="panel">
		<h2>Die Beziehungs-Karte</h2>
		<p class="panel-sub">Kante anklicken für Details &middot; Buch anklicken für die Einzelanalyse</p>
		<div class="pentagon-wrap">
			<svg viewBox="0 0 660 600" class="pentagon-svg">
				{#each pentagonEdges as edge}
					{@const a = pos[edge.a]}
					{@const b = pos[edge.b]}
					{@const info = relationInfo[edge.relation]}
					{@const eid = `${edge.a}-${edge.b}`}
					<line
						x1={a.x} y1={a.y} x2={b.x} y2={b.y}
						stroke={info.color}
						stroke-width={hoveredEdge === eid || selectedEdge === edge ? 7 : 3.5}
						stroke-opacity={hoveredEdge && hoveredEdge !== eid && selectedEdge !== edge ? 0.25 : 0.85}
						class="p-edge"
						role="button"
						tabindex="0"
						onmouseenter={() => (hoveredEdge = eid)}
						onmouseleave={() => (hoveredEdge = null)}
						onclick={() => (selectedEdge = selectedEdge === edge ? null : edge)}
						onkeydown={(e) => { if (e.key === 'Enter') selectedEdge = selectedEdge === edge ? null : edge; }}
					>
						<title>{getBook(edge.a).shortTitle} ↔ {getBook(edge.b).shortTitle}: {edge.label}</title>
					</line>
				{/each}
				{#each order as id}
					{@const p = pos[id]}
					{@const book = getBook(id)}
					{@const pb = pentagonBooks.find((x) => x.id === id)!}
					<a href={book.route}>
						<g class="p-node">
							<rect x={p.x - 92} y={p.y - 30} width="184" height="60" rx="12"
								fill="#0f172a" stroke={book.color} stroke-width="2.5" />
							<text x={p.x} y={p.y - 7} text-anchor="middle" fill={book.color}
								font-size="14.5" font-weight="800" font-family="Inter, sans-serif">{book.shortTitle}</text>
							<text x={p.x} y={p.y + 13} text-anchor="middle" fill="#94a3b8"
								font-size="11.5" font-weight="600" font-family="Inter, sans-serif">Hebel: {pb.lever}</text>
						</g>
					</a>
				{/each}
			</svg>

			<div class="pentagon-side">
				<div class="legend">
					{#each Object.entries(relationInfo) as [key, info]}
						<div class="legend-row">
							<span class="legend-line" style="background: {info.color}"></span>
							<div>
								<strong style="color: {info.color}">{info.label}</strong>
								<span class="legend-desc">{info.description}</span>
							</div>
						</div>
					{/each}
					<p class="legend-tally">Bilanz der 10 Kanten: <strong style="color:#10b981">5× verbündet</strong> &middot; <strong style="color:#f59e0b">2× gemischt</strong> &middot; <strong style="color:#ef4444">3× Konflikt</strong></p>
				</div>

				{#if selectedEdge}
					{@const bA = getBook(selectedEdge.a)}
					{@const bB = getBook(selectedEdge.b)}
					{@const info = relationInfo[selectedEdge.relation]}
					<div class="edge-detail" style="--ec: {info.color}">
						<div class="edge-detail-head">
							<span style="color: {bA.color}; font-weight: 800">{bA.shortTitle}</span>
							<span class="edge-rel" style="background: {info.color}">{info.label}</span>
							<span style="color: {bB.color}; font-weight: 800">{bB.shortTitle}</span>
						</div>
						<p>{selectedEdge.label}</p>
						<a class="edge-link" href="/vergleiche#{selectedEdge.comparisonId}">Zum vollständigen Vergleich &rarr;</a>
					</div>
				{:else}
					<div class="edge-detail edge-detail-empty">
						<p>Wähle eine Kante, um die Beziehung zu sehen.</p>
					</div>
				{/if}
			</div>
		</div>

		<div class="book-strip">
			{#each pentagonBooks as pb}
				{@const book = getBook(pb.id)}
				<div class="book-chip-card" style="--bc: {book.color}">
					<strong>{book.shortTitle}</strong>
					<span class="bcc-lever">{pb.lever}</span>
					<p class="bcc-stance">{pb.stance}</p>
					<p class="bcc-audit">{pb.audit}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- ═══════════ MERGED CAUSAL PATH ═══════════ -->
	<section class="panel">
		<h2>Der zusammengeführte Kausalpfad</h2>
		<p class="panel-sub">
			Alle fünf Argumentationsketten übereinandergelegt: Die Debatte ist eine Sanduhr —
			breiter Konsens oben (Diagnose) und unten (Zielbild), der Glaubenskrieg sitzt in der Mitte.
			Farbige Punkte = welche Bücher den Knoten tragen.
		</p>

		<div class="flow">
			{#each flow as stage, si}
				<div class="stage">
					<div class="stage-head">
						<h3>{stage.title}</h3>
						<p>{stage.subtitle}</p>
					</div>
					<div class="stage-nodes">
						{#each stage.nodes as node}
							{@const ks = kindStyle[node.kind]}
							<div class="fnode" style="--kc: {ks.color}">
								<div class="fnode-top">
									<span class="fnode-kind" style="background: {ks.color}">{ks.label}</span>
									<span class="fnode-books">
										{#each node.books as bid}
											<span class="bdot" style="background: {getBook(bid).color}" title={getBook(bid).shortTitle}></span>
										{/each}
										{#if node.books.length === 5}<span class="all-five">alle 5</span>{/if}
									</span>
								</div>
								<div class="fnode-label">{node.label}</div>
								<div class="fnode-note">{node.note}</div>
							</div>
						{/each}
					</div>
					{#if si < flow.length - 1}
						<div class="stage-arrow">&#8595;</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- ═══════════ CONSENSUS / CONFLICT ═══════════ -->
	<div class="two-col">
		<section class="panel consensus-panel">
			<h2>Die Konsens-Zone</h2>
			<p class="panel-sub">Was alle (oder fast alle) fünf Lager unabhängig voneinander sagen — der belastbarste Kern der Jungenliteratur.</p>
			<ul class="consensus-list">
				{#each consensusZone as item}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section class="panel conflict-panel">
			<h2>Die vier Konflikt-Zonen</h2>
			<p class="panel-sub">Wo das Fünfeck wirklich streitet — mit Front-Verlauf und aktuellem Stand.</p>
			{#each conflictZones as cz}
				<div class="cz">
					<h3>{cz.title}</h3>
					<p class="cz-q">{cz.question}</p>
					<div class="cz-sides">
						{#each cz.sides as side}
							<div class="cz-side">
								<div class="cz-side-head">
									<strong>{side.label}</strong>
									{#each side.books as bid}
										<span class="bdot" style="background: {getBook(bid).color}" title={getBook(bid).shortTitle}></span>
									{/each}
								</div>
								<p>{side.position}</p>
							</div>
						{/each}
					</div>
					<p class="cz-state"><strong>Stand:</strong> {cz.state}</p>
				</div>
			{/each}
		</section>
	</div>

	<!-- ═══════════ MATRIX ═══════════ -->
	<section class="panel">
		<h2>Die 5-Bücher-Matrix</h2>
		<p class="panel-sub">Die Kernfragen der Debatte, Buch für Buch — als Schnellreferenz.</p>
		<div class="matrix-wrap">
			<table class="matrix">
				<thead>
					<tr>
						<th></th>
						{#each pentagonBooks as pb}
							{@const book = getBook(pb.id)}
							<th style="color: {book.color}">{book.shortTitle}<span class="th-lever">{pb.lever}</span></th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each matrix as row}
						<tr>
							<td class="row-q">{row.question}</td>
							{#each pentagonBooks as pb}
								<td>{row.cells[pb.id]}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<!-- ═══════════ VERDICT ═══════════ -->
	<section class="panel verdict-panel">
		<h2>Das Gesamtbild</h2>
		<p>{pentagonVerdict}</p>
	</section>

	<footer class="app-footer">
		<p>Das Fünfeck &middot; Synthese aus 5 Evidenz-Audits, 27 Konvergenzen und <a href="/vergleiche" class="inline-link">10 Paar-Vergleichen</a></p>
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
	.app { max-width: 1200px; margin: 0 auto; padding: 40px 24px 80px; }
	.hero { margin-bottom: 32px; }
	.back-link { color: #64748b; text-decoration: none; font-size: 0.9rem; }
	.back-link:hover { color: #94a3b8; }
	.book-label { color: #f59e0b; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 24px 0 4px; }
	h1 { font-size: 2.6rem; font-weight: 800; margin: 0 0 12px; }
	.subtitle-note { color: #94a3b8; max-width: 880px; line-height: 1.7; }
	.inline-link { color: #60a5fa; text-decoration: none; }
	.inline-link:hover { text-decoration: underline; }

	.panel { background: #1e293b; border: 1px solid #334155; border-radius: 16px; padding: 28px 32px; margin-bottom: 28px; }
	.panel h2 { margin: 0 0 6px; font-size: 1.5rem; font-weight: 800; }
	.panel-sub { color: #94a3b8; margin: 0 0 20px; line-height: 1.6; max-width: 900px; }

	/* Pentagon */
	.pentagon-wrap { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(260px, 1fr); gap: 24px; align-items: start; }
	.pentagon-svg { width: 100%; height: auto; }
	.p-edge { cursor: pointer; transition: stroke-width 0.15s, stroke-opacity 0.15s; }
	.p-node { cursor: pointer; }
	.p-node:hover rect { fill: #1e293b; }

	.legend { background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 16px; margin-bottom: 16px; }
	.legend-row { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 10px; }
	.legend-line { width: 28px; height: 5px; border-radius: 3px; margin-top: 7px; flex-shrink: 0; }
	.legend-desc { display: block; color: #94a3b8; font-size: 0.85rem; line-height: 1.4; }
	.legend-tally { margin: 8px 0 0; font-size: 0.85rem; color: #cbd5e1; border-top: 1px dashed #334155; padding-top: 10px; }

	.edge-detail { background: #0f172a; border: 1px solid var(--ec, #334155); border-radius: 12px; padding: 16px; }
	.edge-detail-empty { border-style: dashed; color: #64748b; }
	.edge-detail-head { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 8px; }
	.edge-rel { color: #0f172a; font-size: 0.72rem; font-weight: 800; padding: 3px 8px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.04em; }
	.edge-detail p { margin: 0 0 10px; line-height: 1.6; color: #cbd5e1; }
	.edge-link { color: #60a5fa; text-decoration: none; font-weight: 600; font-size: 0.9rem; }
	.edge-link:hover { text-decoration: underline; }

	.book-strip { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-top: 24px; }
	.book-chip-card { background: #0f172a; border: 1px solid #334155; border-top: 3px solid var(--bc); border-radius: 10px; padding: 12px; }
	.book-chip-card strong { color: var(--bc); font-size: 0.9rem; display: block; }
	.bcc-lever { color: #f8fafc; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
	.bcc-stance { color: #cbd5e1; font-size: 0.8rem; line-height: 1.45; margin: 8px 0; }
	.bcc-audit { color: #94a3b8; font-size: 0.75rem; line-height: 1.4; margin: 0; border-top: 1px dashed #334155; padding-top: 8px; }

	/* Flow */
	.stage { margin-bottom: 4px; }
	.stage-head h3 { margin: 0 0 4px; font-size: 1.1rem; color: #f59e0b; font-weight: 800; }
	.stage-head p { margin: 0 0 14px; color: #94a3b8; font-size: 0.92rem; line-height: 1.55; max-width: 880px; }
	.stage-nodes { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; }
	.fnode { background: #0f172a; border: 1px solid #334155; border-left: 4px solid var(--kc); border-radius: 10px; padding: 12px 14px; }
	.fnode-top { display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 8px; }
	.fnode-kind { color: #0f172a; font-size: 0.68rem; font-weight: 800; padding: 2px 8px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.04em; }
	.fnode-books { display: flex; gap: 4px; align-items: center; }
	.all-five { color: #10b981; font-size: 0.7rem; font-weight: 800; margin-left: 4px; }
	.bdot { width: 11px; height: 11px; border-radius: 50%; display: inline-block; flex-shrink: 0; }
	.fnode-label { font-weight: 700; color: #f8fafc; line-height: 1.4; margin-bottom: 6px; font-size: 0.95rem; }
	.fnode-note { color: #94a3b8; font-size: 0.82rem; line-height: 1.5; }
	.stage-arrow { text-align: center; color: #475569; font-size: 1.6rem; padding: 10px 0; }

	/* Consensus / Conflict */
	.two-col { display: grid; grid-template-columns: 1fr 1.4fr; gap: 28px; align-items: start; }
	.consensus-panel { border-left: 4px solid #10b981; }
	.conflict-panel { border-left: 4px solid #ef4444; }
	.consensus-list { margin: 0; padding-left: 18px; }
	.consensus-list li { line-height: 1.6; color: #cbd5e1; margin-bottom: 12px; font-size: 0.92rem; }
	.cz { background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 16px 18px; margin-bottom: 16px; }
	.cz h3 { margin: 0 0 2px; color: #ef4444; font-size: 1rem; font-weight: 800; }
	.cz-q { margin: 0 0 12px; color: #f8fafc; font-weight: 600; font-size: 0.92rem; }
	.cz-sides { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin-bottom: 12px; }
	.cz-side { background: #1e293b; border-radius: 8px; padding: 10px 12px; }
	.cz-side-head { display: flex; gap: 6px; align-items: center; margin-bottom: 6px; }
	.cz-side-head strong { color: #f8fafc; font-size: 0.8rem; margin-right: 4px; }
	.cz-side p { margin: 0; color: #94a3b8; font-size: 0.8rem; line-height: 1.5; }
	.cz-state { margin: 0; color: #cbd5e1; font-size: 0.85rem; line-height: 1.55; border-top: 1px dashed #334155; padding-top: 10px; }
	.cz-state strong { color: #f59e0b; }

	/* Matrix */
	.matrix-wrap { overflow-x: auto; }
	.matrix { width: 100%; border-collapse: collapse; min-width: 900px; }
	.matrix th { text-align: left; padding: 10px 12px; font-size: 0.9rem; border-bottom: 2px solid #334155; vertical-align: bottom; }
	.th-lever { display: block; color: #64748b; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
	.matrix td { padding: 10px 12px; font-size: 0.85rem; line-height: 1.45; color: #cbd5e1; border-bottom: 1px solid #1e293b; vertical-align: top; }
	.matrix tbody tr:hover td { background: #0f172a; }
	.row-q { font-weight: 700; color: #f8fafc; white-space: nowrap; }

	.verdict-panel { border: 1px solid #f59e0b55; }
	.verdict-panel h2 { color: #f59e0b; }
	.verdict-panel p { line-height: 1.75; color: #e2e8f0; margin: 0; font-size: 1.02rem; }

	.app-footer { color: #475569; text-align: center; margin-top: 40px; font-size: 0.85rem; }

	@media (max-width: 980px) {
		.pentagon-wrap, .two-col { grid-template-columns: 1fr; }
		.book-strip { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
	}
</style>
