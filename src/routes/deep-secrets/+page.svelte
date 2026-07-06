<svelte:head>
	<title>Deep Secrets — Buchanalyse</title>
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
		<h1>Deep Secrets</h1>
		<p class="subtitle">Boys' Friendships and the Crisis of Connection</p>
		<p class="author">Niobe Way &mdash; Harvard University Press, 2011.</p>
		<p class="description">
			Die stärkste longitudinale ethnographische Primärquelle der gesamten Bibliothek.
			Niobe Way, Professor of Applied Psychology an der NYU und Schülerin von Carol Gilligan,
			liefert 20+ Jahre longitudinale Interviewstudien mit hunderten NYC-public-school-Jungen
			(Black, Latino, Chinese American, White; ~70% aus armen/Arbeiterklasse-Familien).
			Kernbefund: Jungen zwischen 13-15 beschreiben ihre engsten männlichen Freundschaften
			in einer Sprache voller &bdquo;love&ldquo;, &bdquo;deep&ldquo;, &bdquo;trust&ldquo;, &bdquo;secret&ldquo;. Dieselben Jungen
			verlieren diese Freundschaften zwischen 16-18 — und Way dokumentiert die Transformation
			in Echtzeit. Der Mechanismus, den die Jungen selbst identifizieren: die kulturelle
			Gleichsetzung emotionaler Intimität mit &bdquo;gay&ldquo;, &bdquo;girlish&ldquo;, oder &bdquo;immature&ldquo;.
			Direkte observational evidence für die &bdquo;Mask/Boy Code&ldquo;-Konvergenz der klinischen Tradition.
		</p>
	</header>

	<main class="cards">
		<a href="/deep-secrets/evidence" class="card card-evidence">
			<div class="card-icon">&#128300;</div>
			<div class="card-content">
				<h2>Evidenz-Audit &amp; Argumentationskette</h2>
				<p>
					Way's 12-stufige Argumentationskette von der Methodologie (Listening Guide, 20-Jahre-Längsschnitt)
					über die zentralen observational findings (boys 13-15 emotional hochartikuliert,
					dieselben boys 16-18 verlieren ihre Freundschaften) zu den mechanistischen Interpretationen
					(Homophobie als Kernmechanismus, Suizid-Timing, Brown/Gilligan-Parallele) und zur
					„Schützen statt Lehren"-Solution. Direct observational upgrade der klinischen Mask/Boy-Code-Konvergenz.
				</p>
				<span class="card-meta">Evidenz-Ampel &middot; Argument-Graph</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/deep-secrets/references" class="card card-refs">
			<div class="card-icon">&#128218;</div>
			<div class="card-content">
				<h2>Quellenverzeichnis</h2>
				<p>
					Way's akademische Tradition und Parallelforschung: Carol Gilligan und Lyn Mikel Brown
					(Meeting at the Crossroads, methodologische Vorgänger), Judy Chu (unabhängige Replikation
					bei weißen Privatschul-Jungen), Carlos Santos (quantitative Validation), Michael Thompson,
					Stephen Frosh, Gary Barker, Michael Reichert, Janie Ward (resistance framework),
					Clifford Geertz (thick/thin culture), Bronfenbrenner (ecological model), Sara Konrath (empathy decline).
				</p>
				<span class="card-meta">Longitudinale Studien &middot; Parallelforschung &middot; Entwicklungspsychologie</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>
	</main>

	<footer class="app-footer">
		<p>Interaktive Analyse zu: <em>Deep Secrets — Boys' Friendships and the Crisis of Connection</em></p>
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
		background: linear-gradient(135deg, #fecaca, #fda4af, #f43f5e);
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
	.description em { color: #fda4af; font-style: italic; }

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

	.card-evidence { --card-color: #f43f5e; }
	.card-refs { --card-color: #e11d48; }

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
