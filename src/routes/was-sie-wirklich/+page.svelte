<svelte:head>
	<title>Was Sie (Wirklich) Über Erziehung Wissen Müssen — Buchanalyse</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<header class="hero">
		<a href="/" class="back-link">&larr; Alle Bücher</a>
		<p class="book-label">Interaktive Buchanalyse</p>
		<h1>Was Sie (Wirklich) Über Erziehung Wissen Müssen</h1>
		<p class="subtitle">Das Wichtigste für alle Eltern — aus den entscheidenden Studien</p>
		<p class="author">Tillmann Prüfer &middot; dtv, 2026</p>
		<p class="description">
			Ein evidenzskeptischer Meta-Ratgeber: Prüfer (ZEIT, Ressort Familie) prüft 18 Erziehungsfragen
			gegen 341 Studien — und räumt dabei mit viel Ratgeber-Sicherheit auf. Wärme und Verlässlichkeit
			halten, Baumrind und Bowlby wackeln, „good enough parenting" gewinnt.
		</p>
	</header>

	<section class="verdict">
		<h2 class="verdict-title">
			<span class="verdict-icon">⚖️</span>
			Verhältnis zu „Jungs von heute, Männer von morgen" (Dittmann)
		</h2>
		<p class="verdict-lead">
			<strong>Prüfer stützt Dittmanns Diagnose — aber nicht ihre Lösungs-Wette.</strong>
		</p>
		<div class="verdict-grid">
			<div class="verdict-col verdict-pro">
				<h3>✓ Was Prüfer stützt</h3>
				<ul>
					<li>Jungen-Gehirne sind <em>nicht</em> grundlegend anders gebaut (Eliot-Linie)</li>
					<li>„Boy Code" / Alexithymie empirisch real (Levant-Meta-Analyse)</li>
					<li>Peer-Einfluss ab Schulalter &gt; Elterneinfluss (Harris, Plomin)</li>
					<li>Gender Care Gap, Friendship Crisis, Schul-Gap — deskriptiv konvergent</li>
					<li>Anti-essentialistische Position gegen Sax / Gurian</li>
				</ul>
			</div>
			<div class="verdict-col verdict-con">
				<h3>✗ Was Prüfer untergräbt</h3>
				<ul>
					<li>Starke Erziehungs-Effekt-Annahme („gender-conscious parenting kann das Problem lösen") — Verhaltensgenetik zeigt ~30–40 % Elternanteil</li>
					<li>Baumrinds autoritativer Stil — nach Replikationskrise relativiert</li>
					<li>Bindungstheorie (Bowlby/Ainsworth/Sears) — durch Vicedo, Keller, LeVine kritisch gerahmt</li>
					<li>Aktivistisches Framing (Caring Masculinities als Programm) — Prüfer bleibt neutral-generalistisch</li>
				</ul>
			</div>
		</div>
		<p class="verdict-bottom">
			<strong>Netto:</strong> Dittmanns <em>Was</em>-Analyse wird gestützt. Dittmanns
			<em>Wie-stark-wirkt-Erziehung</em>-Wette: nein. Prüfer ist damit ein
			<em>neutraler externer Audit-Anker</em> für die genderpolitisch aufgeladenen roten Knoten
			von JVH — er macht sie diskutabler, ohne sie zu übernehmen.
		</p>
	</section>

	<main class="cards">
		<a href="/was-sie-wirklich/evidence" class="card card-evidence">
			<div class="card-icon">&#128300;</div>
			<div class="card-content">
				<h2>Evidenz-Audit &amp; Argumentationskette</h2>
				<p>
					34 Chain-Links über 8 thematische Blöcke (Fundamente → Erziehungsstile →
					Kindheit/Resilienz → Bindung → Werte/Förderung → Spiel/Geschlecht/Emotion →
					Belohnung/Essen/Screen → Adoleszenz/Fazit). Für jeden Knoten: welche Studien stützen,
					welche schwächen ihn?
				</p>
				<span class="card-meta">Evidenz-Ampel &middot; Argument-Graph &middot; 97 Quellen-Audits</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/was-sie-wirklich/references" class="card card-refs">
			<div class="card-icon">&#128218;</div>
			<div class="card-content">
				<h2>Quellenverzeichnis</h2>
				<p>
					341 Endnoten systematisch extrahiert — gruppiert nach Forschungsfeld (Bindung,
					Entwicklungspsychologie, Verhaltensgenetik, Medien, Neurowissenschaft, Soziologie).
					Schlüsselfiguren: Eliot, Harris, Plomin, Baumrind (reanalysiert), Bowlby (kritisch),
					Vicedo, Haidt + Orben, Kohn.
				</p>
				<span class="card-meta">Autoren &middot; Studien &middot; Institutionen</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/kausalpfade" class="card card-cross">
			<div class="card-icon">&#128260;</div>
			<div class="card-content">
				<h2>Kausalpfade-Überblick</h2>
				<p>
					Prüfer im Netzwerk mit 15 anderen Erziehungs-/Jungen-Büchern. Welche Knoten werden
					durch Prüfer zu <em>shared nodes</em>? Welche Konvergenzen werden robust, welche
					wackeln unter dem Evidenzskeptiker?
				</p>
				<span class="card-meta">Bücher-Vergleich &middot; Konvergenzen &middot; Divergenzen</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>
	</main>

	<footer class="app-footer">
		<p>Interaktive Analyse zu: <em>Was Sie (Wirklich) Über Erziehung Wissen Müssen</em></p>
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
		max-width: 900px;
		margin: 0 auto;
		padding: 0 20px 60px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.hero {
		padding: 60px 0 30px;
		text-align: center;
	}

	.back-link {
		color: #60a5fa;
		text-decoration: none;
		font-size: 0.85rem;
		display: inline-block;
		margin-bottom: 20px;
	}
	.back-link:hover { color: #93c5fd; }

	.book-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 3px;
		color: #64748b;
		margin: 0 0 16px;
	}

	.hero h1 {
		font-size: 2.4rem;
		font-weight: 800;
		background: linear-gradient(135deg, #ec4899, #f472b6, #fbbf24);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0 0 8px;
		line-height: 1.15;
	}

	.subtitle {
		color: #94a3b8;
		font-size: 1.05rem;
		margin: 0 0 6px;
		font-style: italic;
	}

	.author {
		color: #64748b;
		font-size: 0.95rem;
		margin: 0 0 20px;
	}

	.description {
		color: #94a3b8;
		font-size: 0.95rem;
		line-height: 1.6;
		max-width: 640px;
		margin: 0 auto;
	}

	/* Verdict card */
	.verdict {
		background: linear-gradient(135deg, rgba(236, 72, 153, 0.08), rgba(251, 191, 36, 0.05));
		border: 1px solid rgba(236, 72, 153, 0.25);
		border-radius: 16px;
		padding: 28px 30px;
		margin: 10px 0 30px;
	}
	.verdict-title {
		font-size: 1.1rem;
		color: #f1f5f9;
		margin: 0 0 14px;
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.verdict-icon { font-size: 1.3rem; }
	.verdict-lead {
		color: #e2e8f0;
		font-size: 1.05rem;
		line-height: 1.6;
		margin: 0 0 20px;
	}
	.verdict-lead strong { color: #fbbf24; }
	.verdict-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 18px;
		margin-bottom: 20px;
	}
	.verdict-col {
		background: rgba(15, 23, 42, 0.5);
		border-radius: 10px;
		padding: 16px 18px;
	}
	.verdict-col h3 {
		font-size: 0.95rem;
		margin: 0 0 10px;
	}
	.verdict-pro { border-left: 3px solid #10b981; }
	.verdict-pro h3 { color: #10b981; }
	.verdict-con { border-left: 3px solid #ef4444; }
	.verdict-con h3 { color: #ef4444; }
	.verdict-col ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.verdict-col li {
		font-size: 0.82rem;
		color: #cbd5e1;
		line-height: 1.55;
		padding: 4px 0;
		border-bottom: 1px dashed rgba(148, 163, 184, 0.12);
	}
	.verdict-col li:last-child { border-bottom: none; }
	.verdict-col em { color: #94a3b8; font-style: normal; font-weight: 500; }
	.verdict-bottom {
		color: #cbd5e1;
		font-size: 0.9rem;
		line-height: 1.65;
		margin: 0;
		padding: 14px 16px;
		background: rgba(15, 23, 42, 0.5);
		border-radius: 10px;
		border-left: 3px solid #f59e0b;
	}
	.verdict-bottom strong { color: #fbbf24; }
	.verdict-bottom em { color: #f472b6; font-style: normal; font-weight: 600; }

	/* Cards */
	.cards {
		display: flex;
		flex-direction: column;
		gap: 16px;
		flex: 1;
	}
	.card {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 24px 28px;
		background: rgba(30, 41, 59, 0.5);
		border-radius: 14px;
		border: 1px solid rgba(148, 163, 184, 0.1);
		border-left: 4px solid var(--card-color, #64748b);
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
	}
	.card:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
		border-color: rgba(148, 163, 184, 0.25);
	}
	.card-evidence { --card-color: #8b5cf6; }
	.card-refs { --card-color: #f59e0b; }
	.card-cross { --card-color: #06b6d4; }

	.card-icon {
		font-size: 2.2rem;
		flex-shrink: 0;
		width: 56px;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(148, 163, 184, 0.08);
		border-radius: 12px;
	}
	.card-content { flex: 1; }
	.card-content h2 {
		font-size: 1.2rem;
		font-weight: 700;
		color: #f1f5f9;
		margin: 0 0 6px;
	}
	.card-content p {
		font-size: 0.88rem;
		color: #94a3b8;
		line-height: 1.5;
		margin: 0 0 8px;
	}
	.card-content em { color: #cbd5e1; font-style: normal; font-weight: 500; }
	.card-meta {
		font-size: 0.75rem;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	.card-arrow {
		font-size: 1.4rem;
		color: #475569;
		flex-shrink: 0;
		transition: color 0.2s, transform 0.2s;
	}
	.card:hover .card-arrow {
		color: var(--card-color, #94a3b8);
		transform: translateX(4px);
	}

	.app-footer {
		text-align: center;
		padding: 30px 0;
		color: #475569;
		font-size: 0.82rem;
		border-top: 1px solid rgba(148, 163, 184, 0.1);
		margin-top: 40px;
	}
	.app-footer em { color: #64748b; }

	@media (max-width: 640px) {
		.hero h1 { font-size: 1.7rem; }
		.hero { padding: 40px 0 24px; }
		.verdict { padding: 20px 18px; }
		.verdict-grid { grid-template-columns: 1fr; gap: 12px; }
		.card { padding: 18px 16px; gap: 14px; }
		.card-icon { width: 44px; height: 44px; font-size: 1.6rem; }
		.card-content h2 { font-size: 1.05rem; }
	}
</style>
