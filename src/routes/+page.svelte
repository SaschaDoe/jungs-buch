<svelte:head>
	<title>Interaktive Buchanalyse</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<header class="hero">
		<p class="book-label">Interaktive Buchanalyse</p>
		<h1>Bücher unter der Lupe</h1>
		<p class="description">
			Wissenschaftliche Buchanalysen mit interaktiven Datenvisualisierungen,
			Quellenanalysen und weiterführenden Perspektiven.
		</p>
	</header>

	<main class="cards">
		<h2 class="section-title">Bücher</h2>

		<a href="/jungs-von-heute" class="card card-jungs">
			<div class="card-icon">&#128218;</div>
			<div class="card-content">
				<h2>Jungs von heute, Männer von morgen</h2>
				<p class="card-subtitle">Was unsere Söhne für eine gleichberechtigte Zukunft brauchen</p>
				<p>
					Verena Friederike Hasel &mdash; Evidenz-Audit, Argumentationskette,
					Quellenverzeichnis und weiterführende Literatur.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Literatur</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/why-gender-matters" class="card card-gender">
			<div class="card-icon">&#128300;</div>
			<div class="card-content">
				<h2>Why Gender Matters</h2>
				<p class="card-subtitle">Second Edition &mdash; Leonard Sax, M.D., Ph.D.</p>
				<p>
					What Parents and Teachers Need to Know About the Emerging Science of Sex Differences.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Literatur</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/boys-adrift" class="card card-boys-adrift">
			<div class="card-icon">&#128165;</div>
			<div class="card-content">
				<h2>Boys Adrift</h2>
				<p class="card-subtitle">The Five Factors Driving the Growing Epidemic of Unmotivated Boys and Underachieving Young Men</p>
				<p>
					Leonard Sax, M.D., Ph.D. &mdash; Evidenz-Audit, Argumentationskette,
					Quellenverzeichnis und weiterführende Literatur.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Literatur</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/wonder-of-boys" class="card card-wonder">
			<div class="card-icon">&#128171;</div>
			<div class="card-content">
				<h2>The Wonder of Boys</h2>
				<p class="card-subtitle">What Parents, Mentors and Educators Can Do to Shape Boys into Exceptional Men</p>
				<p>
					Michael Gurian &mdash; Evidenz-Audit, Argumentationskette,
					Quellenverzeichnis und weiterführende Literatur.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Literatur</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/pink-brain-blue-brain" class="card card-pink-brain">
			<div class="card-icon">&#129504;</div>
			<div class="card-content">
				<h2>Pink Brain, Blue Brain</h2>
				<p class="card-subtitle">How Small Differences Grow into Troublesome Gaps and What We Can Do About It</p>
				<p>
					Lise Eliot, Ph.D. &mdash; Evidenz-Audit, Argumentationskette,
					Quellenverzeichnis und weiterführende Literatur.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Literatur</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/male-female" class="card card-male-female">
			<div class="card-icon">&#128300;</div>
			<div class="card-content">
				<h2>Male, Female</h2>
				<p class="card-subtitle">The Evolution of Human Sex Differences</p>
				<p>
					David C. Geary, Ph.D. &mdash; Akademisches Lehrbuch. Evidenz-Audit, Argumentationskette,
					Quellenverzeichnis und weiterführende Literatur.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Literatur</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/warriors-and-worriers" class="card card-warriors">
			<div class="card-icon">&#9876;</div>
			<div class="card-content">
				<h2>Warriors and Worriers</h2>
				<p class="card-subtitle">The Survival of the Sexes</p>
				<p>
					Joyce F. Benenson (with Henry Markovits) &mdash; Evidenz-Audit, Argumentationskette,
					Quellenverzeichnis und weiterführende Literatur.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Literatur</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/raising-cain" class="card card-raising-cain">
			<div class="card-icon">&#128153;</div>
			<div class="card-content">
				<h2>Raising Cain</h2>
				<p class="card-subtitle">Protecting the Emotional Life of Boys</p>
				<p>
					Dan Kindlon, Ph.D. &amp; Michael Thompson, Ph.D. &mdash; Evidenz-Audit, Argumentationskette,
					Quellenverzeichnis und weiterführende Literatur.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Literatur</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<h2 class="section-title section-title-extra">Übergreifend</h2>

		<a href="/kausalpfade" class="card card-causal">
			<div class="card-icon">&#128279;</div>
			<div class="card-content">
				<h2>Causal Paths Compared</h2>
				<p>
					All causal paths from all 8 books side by side &mdash;
					where they overlap, agree, or contradict each other.
					Filter by book or field of science.
				</p>
				<span class="card-meta">15 Themes &middot; 8 Books &middot; Overlap Analysis</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/forschungslandschaft" class="card card-fields">
			<div class="card-icon">&#127891;</div>
			<div class="card-content">
				<h2>Forschungslandschaft</h2>
				<p>
					Denkschulen, wissenschaftliche Debatten und Gegenpositionen &mdash;
					die Forschungslandschaft hinter der Geschlechterforschung.
				</p>
				<span class="card-meta">Denkschulen &middot; Konsens &middot; Gegenpositionen</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>
	</main>

	<footer class="app-footer">
		<p>Interaktive wissenschaftliche Buchanalysen</p>
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

	/* Hero */
	.hero {
		padding: 60px 0 40px;
		text-align: center;
	}

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
		background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0 0 10px;
		line-height: 1.15;
	}

	.description {
		color: #94a3b8;
		font-size: 0.95rem;
		line-height: 1.6;
		max-width: 560px;
		margin: 0 auto;
	}

	/* Section titles */
	.section-title {
		font-size: 0.82rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: #64748b;
		margin: 0 0 12px;
		font-weight: 600;
	}

	.section-title-extra {
		margin-top: 28px;
	}

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

	.card-jungs { --card-color: #a78bfa; }
	.card-gender { --card-color: #34d399; }
	.card-boys-adrift { --card-color: #f59e0b; }
	.card-wonder { --card-color: #06b6d4; }
	.card-pink-brain { --card-color: #ec4899; }
	.card-male-female { --card-color: #6366f1; }
	.card-warriors { --card-color: #ef4444; }
	.card-raising-cain { --card-color: #14b8a6; }
	.card-causal { --card-color: #f472b6; }
	.card-fields { --card-color: #60a5fa; }

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

	.card-content {
		flex: 1;
	}

	.card-content h2 {
		font-size: 1.2rem;
		font-weight: 700;
		color: #f1f5f9;
		margin: 0 0 4px;
	}

	.card-subtitle {
		font-size: 0.82rem;
		color: #64748b;
		margin: 0 0 6px;
		font-style: italic;
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

	/* Footer */
	.app-footer {
		text-align: center;
		padding: 30px 0;
		color: #475569;
		font-size: 0.82rem;
		border-top: 1px solid rgba(148, 163, 184, 0.1);
		margin-top: 40px;
	}

	@media (max-width: 640px) {
		.hero h1 {
			font-size: 1.8rem;
		}
		.hero {
			padding: 40px 0 24px;
		}
		.card {
			padding: 18px 16px;
			gap: 14px;
		}
		.card-icon {
			width: 44px;
			height: 44px;
			font-size: 1.6rem;
		}
		.card-content h2 {
			font-size: 1.05rem;
		}
	}
</style>
