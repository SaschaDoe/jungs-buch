<script lang="ts">
	import { comparisons } from '$lib/data/comparisons-data';
	import { books } from '$lib/data/cross-book-data';

	function getBook(id: string) {
		return books.find((b) => b.id === id)!;
	}
</script>

<svelte:head>
	<title>Buchvergleiche — Kausalpfade</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
	<header class="hero">
		<a href="/" class="back-link">&larr; Alle Bücher</a>
		<p class="book-label">Direkte Gegenüberstellungen</p>
		<h1>Buchvergleiche</h1>
		<p class="subtitle-note">
			Ausgearbeitete Paar-Vergleiche zwischen zwei Büchern des Korpus. Bewusst selektiv:
			Bei 18 Büchern gäbe es 153 mögliche Paare — ausgearbeitet werden nur die, bei denen der
			direkte Vergleich etwas zeigt, das Kausalpfade-Graph und Konvergenz-Audit nicht schon zeigen.
		</p>
	</header>

	{#each comparisons as cmp}
		{@const bookA = getBook(cmp.bookA)}
		{@const bookB = getBook(cmp.bookB)}
		<section class="cmp" id={cmp.id}>
			<div class="cmp-head">
				<div class="cmp-title-row">
					<a class="cmp-book" style="--bc: {bookA.color}" href={bookA.route}>{bookA.shortTitle}</a>
					<span class="cmp-vs">vs.</span>
					<a class="cmp-book" style="--bc: {bookB.color}" href={bookB.route}>{bookB.shortTitle}</a>
				</div>
				<p class="cmp-authors">{bookA.author} ({bookA.shortTitle}) &middot; {bookB.author} ({bookB.shortTitle})</p>
				<p class="cmp-tagline">{cmp.tagline}</p>
			</div>

			<div class="cmp-block">
				<h3>Wie die Bücher zusammenhängen</h3>
				<p>{cmp.relationship}</p>
			</div>

			<div class="cmp-block">
				<h3>Dimension für Dimension</h3>
				<div class="dim-list">
					{#each cmp.dimensions as dim}
						<div class="dim">
							<div class="dim-name">{dim.dimension}</div>
							<div class="dim-cols">
								<div class="dim-col" style="--bc: {bookA.color}">
									<span class="dim-col-book" style="color: {bookA.color}">{bookA.shortTitle}</span>
									<p>{dim.a}</p>
								</div>
								<div class="dim-col" style="--bc: {bookB.color}">
									<span class="dim-col-book" style="color: {bookB.color}">{bookB.shortTitle}</span>
									<p>{dim.b}</p>
								</div>
							</div>
							<div class="dim-delta"><strong>Was der Unterschied bedeutet:</strong> {dim.delta}</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="cmp-grid">
				<div class="cmp-block cmp-identical">
					<h3>Fast deckungsgleich</h3>
					<ul>
						{#each cmp.nearIdentical as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div class="cmp-block cmp-divergent">
					<h3>Echte Abweichungen</h3>
					<ul>
						{#each cmp.divergent as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="cmp-block cmp-verdict">
				<h3>Fazit</h3>
				<p>{cmp.verdict}</p>
			</div>
		</section>
	{/each}

	<footer class="app-footer">
		<p>Buchvergleiche &middot; Teil der Kausalpfade-Bibliothek</p>
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
	.app { max-width: 1100px; margin: 0 auto; padding: 40px 24px 80px; }
	.hero { margin-bottom: 40px; }
	.back-link { color: #64748b; text-decoration: none; font-size: 0.9rem; }
	.back-link:hover { color: #94a3b8; }
	.book-label { color: #f59e0b; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 24px 0 4px; }
	h1 { font-size: 2.4rem; font-weight: 800; margin: 0 0 12px; }
	.subtitle-note { color: #94a3b8; max-width: 800px; line-height: 1.6; }

	.cmp { background: #1e293b; border: 1px solid #334155; border-radius: 16px; padding: 32px; margin-bottom: 40px; }
	.cmp-title-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
	.cmp-book { font-size: 1.6rem; font-weight: 800; color: var(--bc); text-decoration: none; border-bottom: 3px solid var(--bc); padding-bottom: 2px; }
	.cmp-vs { color: #64748b; font-size: 1.2rem; font-weight: 600; }
	.cmp-authors { color: #64748b; font-size: 0.9rem; margin: 8px 0 0; }
	.cmp-tagline { color: #cbd5e1; font-size: 1.1rem; font-style: italic; margin: 12px 0 0; }

	.cmp-block { margin-top: 28px; }
	.cmp-block h3 { font-size: 1.1rem; font-weight: 700; color: #f8fafc; margin: 0 0 12px; }
	.cmp-block p { line-height: 1.7; color: #cbd5e1; margin: 0; }

	.dim-list { display: flex; flex-direction: column; gap: 20px; }
	.dim { background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 20px; }
	.dim-name { font-weight: 800; color: #f59e0b; margin-bottom: 12px; font-size: 1rem; }
	.dim-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
	.dim-col { border-left: 3px solid var(--bc); padding-left: 12px; }
	.dim-col-book { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
	.dim-col p { margin: 6px 0 0; font-size: 0.95rem; line-height: 1.6; color: #cbd5e1; }
	.dim-delta { margin-top: 14px; padding-top: 12px; border-top: 1px dashed #334155; font-size: 0.95rem; line-height: 1.6; color: #94a3b8; }
	.dim-delta strong { color: #cbd5e1; }

	.cmp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
	.cmp-identical { border-left: 4px solid #10b981; padding-left: 16px; }
	.cmp-divergent { border-left: 4px solid #ef4444; padding-left: 16px; }
	.cmp-block ul { margin: 0; padding-left: 18px; }
	.cmp-block li { line-height: 1.6; color: #cbd5e1; margin-bottom: 10px; font-size: 0.95rem; }

	.cmp-verdict { background: #0f172a; border: 1px solid #f59e0b44; border-radius: 12px; padding: 20px 24px; }
	.cmp-verdict h3 { color: #f59e0b; }

	.app-footer { color: #475569; text-align: center; margin-top: 40px; font-size: 0.85rem; }

	@media (max-width: 760px) {
		.dim-cols, .cmp-grid { grid-template-columns: 1fr; }
	}
</style>
