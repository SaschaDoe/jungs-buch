<svelte:head>
	<title>The Will to Change — Buchanalyse</title>
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
		<h1>The Will to Change</h1>
		<p class="subtitle">Men, Masculinity, and Love</p>
		<p class="author">bell hooks &mdash; Atria Books, 2004 (vierter Band der <em>love trilogy</em>)</p>
		<p class="description">
			Die einflussreichste schwarze feministische Stimme der letzten Jahrzehnte über Männer,
			Männlichkeit und Liebe. hooks verbindet strukturelle Patriarchatskritik (im Dialog mit
			Connell und Terrence Real) mit einer <em>Ethik der Liebe</em>, die weder &bdquo;Ende der
			Männlichkeit&ldquo;-Feminismus noch mythopoetische Männerbewegung akzeptiert. Ihr
			Kernbefund: die Krise ist nicht die der Männlichkeit, sondern die der patriarchalen
			Männlichkeit &mdash; und der Weg nach vorn ist eine Liebesethik.
		</p>
	</header>

	<main class="cards">
		<a href="/will-to-change/evidence" class="card card-evidence">
			<div class="card-icon">&#128300;</div>
			<div class="card-content">
				<h2>Evidenz-Audit &amp; Argumentationskette</h2>
				<p>
					Wie belastbar sind hooks&rsquo; Behauptungen &mdash; und was bedeutet es,
					wenn ein Buch bewusst <em>ethisch</em> statt <em>empirisch</em> argumentiert?
					Evidenz-Ampel und interaktiver Argument-Graph.
				</p>
				<span class="card-meta">Evidenz-Ampel &middot; Argument-Graph</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/will-to-change/references" class="card card-refs">
			<div class="card-icon">&#128218;</div>
			<div class="card-content">
				<h2>Quellenverzeichnis</h2>
				<p>
					Alle zitierten Autor:innen, Essays und Institutionen &mdash; von Terrence Real und
					John Bradshaw bis Dorothy Dinnerstein, James Baldwin, Thich Nhat Hanh und Raewyn Connell.
				</p>
				<span class="card-meta">Autoren &middot; Studien &middot; Institutionen</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>
	</main>

	<footer class="app-footer">
		<p>Interaktive Analyse zu: <em>The Will to Change</em></p>
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
		background: linear-gradient(135deg, #f472b6, #fb7185, #fda4af);
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
	.author em { color: #94a3b8; }

	.description {
		color: #94a3b8;
		font-size: 0.95rem;
		line-height: 1.6;
		max-width: 620px;
		margin: 0 auto;
	}
	.description em { color: #cbd5e1; }

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

	.card-evidence { --card-color: #f472b6; }
	.card-refs { --card-color: #fb7185; }

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
	.card-content p em { color: #cbd5e1; }

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
