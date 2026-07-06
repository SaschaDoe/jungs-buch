<svelte:head>
	<title>Of Boys and Men — Buchanalyse</title>
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
		<h1>Of Boys and Men</h1>
		<p class="subtitle">Why the Modern Male is Struggling, Why It Matters, and What To Do About It</p>
		<p class="author">Richard V. Reeves &mdash; Brookings Institution Press, 2022.</p>
		<p class="description">
			Die empirisch robusteste und policy-konkreteste Analyse der Männerkrise im gesamten
			Bibliothekskorpus. Richard V. Reeves, Senior Fellow am Brookings Institution (und später
			Gründer des American Institute for Boys and Men), liefert eine bewusst zentristische
			Position zwischen progressiver &bdquo;toxische Männlichkeit&ldquo;-Rhetorik und konservativer
			Rückkehrs-Fantasie. Kernthese: die Probleme sind <em>strukturell</em> (Bildungssystem,
			Arbeitsmarkt, Familienrecht), nicht individuell-psychologisch. Kernkonzepte:
			<em>Brain-Timing-Gap</em> (präfrontaler Kortex bei Jungen ~2 Jahre später reif);
			<em>&bdquo;Girls Rule&ldquo; Bildungsgap global</em>; <em>Autor/Wasserman 4-Dimensionen-Arbeitsmarkt-Abstieg</em>;
			<em>Dad Deficit</em>; <em>&bdquo;deaths of despair&ldquo; zu 74% männlich</em>; <em>Nature AND Nurture</em>
			(explizit gegen Rippon UND Sax/Gurian); <em>Policies don't help men</em> (Kalamazoo 0% Effekt);
			drei konkrete Reformen &mdash; <em>Redshirt the Boys</em>, <em>Men Can HEAL</em>, <em>Direct Dads</em>.
		</p>
	</header>

	<main class="cards">
		<a href="/of-boys-and-men/evidence" class="card card-evidence">
			<div class="card-icon">&#128300;</div>
			<div class="card-content">
				<h2>Evidenz-Audit &amp; Argumentationskette</h2>
				<p>
					Reeves ist die empirisch robusteste Quelle der gesamten Bibliothek: fast jede Behauptung
					ist mit peer-reviewed Meta-Analysen, BLS/NCES/CDC-Regierungsstatistiken oder Brookings-Niveau-Studien
					belegt. Der Argument-Graph zeigt die 14-stufige Argumentationskette von der Diagnose
					(Education Gap, Labor Decline, Dad Deficit) über Biology and Culture zur Policy-Agenda.
				</p>
				<span class="card-meta">Evidenz-Ampel &middot; Argument-Graph</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/of-boys-and-men/references" class="card card-refs">
			<div class="card-icon">&#128218;</div>
			<div class="card-content">
				<h2>Quellenverzeichnis</h2>
				<p>
					Alle zitierten Peer-Review-Autor:innen und Institutionen: Raj Chetty, David Autor,
					Carole Hooven, Joseph Henrich, Laurence Steinberg, Stuart Ritchie (UK Biobank MRI),
					Diane Schanzenbach (Redshirting), David Eggebeen (father contributions),
					Kathryn Edin, Claudia Goldin, Marianne Bertrand, Case & Deaton, Carol Harrington (toxic masculinity critique).
					Institutionen: Brookings, Opportunity Insights, BLS, NCES, CDC, UK Biobank.
				</p>
				<span class="card-meta">Peer-Review-Studien &middot; Regierungsstatistiken &middot; Meta-Analysen</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>
	</main>

	<footer class="app-footer">
		<p>Interaktive Analyse zu: <em>Of Boys and Men — Why the Modern Male is Struggling</em></p>
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

	.hero { padding: 60px 0 40px; text-align: center; }

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
		font-size: 2.8rem;
		font-weight: 800;
		background: linear-gradient(135deg, #a7f3d0, #6ee7b7, #34d399);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0 0 6px;
		line-height: 1.15;
	}

	.subtitle {
		color: #94a3b8;
		font-size: 1.15rem;
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
	.description em { color: #a7f3d0; font-style: italic; }

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

	.card-evidence { --card-color: #10b981; }
	.card-refs { --card-color: #059669; }

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
		.hero h1 { font-size: 1.8rem; }
		.hero { padding: 40px 0 24px; }
		.card { padding: 18px 16px; gap: 14px; }
		.card-icon { width: 44px; height: 44px; font-size: 1.6rem; }
		.card-content h2 { font-size: 1.05rem; }
	}
</style>
