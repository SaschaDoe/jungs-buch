<script lang="ts">
	import { bookCategories, totalBooks, totalCategories } from '$lib/data/further-reading-data';
	import type { BookCategory, FurtherBook } from '$lib/data/further-reading-data';

	let expandedCategories = $state<Set<string>>(new Set());

	function toggleCategory(id: string) {
		const next = new Set(expandedCategories);
		if (next.has(id)) {
			next.delete(id);
		} else {
			next.add(id);
		}
		expandedCategories = next;
	}

	function expandAll() {
		expandedCategories = new Set(bookCategories.map((c) => c.id));
	}

	function collapseAll() {
		expandedCategories = new Set();
	}
</script>

<svelte:head>
	<title>Weiterführende Literatur — Jungs von heute, Männer von morgen</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<!-- Hero -->
	<header class="hero">
		<div class="hero-inner">
			<div class="nav-links">
				<a href="/jungs-von-heute" class="back-link">&larr; Buchübersicht</a>
				<a href="/forschungslandschaft" class="back-link">Forschungslandschaft</a>
				<a href="/jungs-von-heute/references" class="back-link">Quellenverzeichnis &rarr;</a>
			</div>
			<p class="book-label">Weiterführende Literatur</p>
			<h1>Weitere Perspektiven</h1>
			<p class="subtitle">
				{totalBooks} Bücher aus {totalCategories} Denkrichtungen, die dasselbe Thema
				aus unterschiedlichen Blickwinkeln beleuchten.
			</p>
			<p class="subtitle-note">
				Diese Bücher ergänzen, vertiefen oder widersprechen den Thesen von
				<em>Jungs von heute, Männer von morgen</em> — für ein vollständiges Bild der Debatte.
			</p>
		</div>
	</header>

	<!-- Stats bar -->
	<div class="stats-bar">
		<div class="stat">
			<span class="stat-value">{totalBooks}</span>
			<span class="stat-label">Bücher</span>
		</div>
		<div class="stat">
			<span class="stat-value">{totalCategories}</span>
			<span class="stat-label">Kategorien</span>
		</div>
		<div class="stat">
			<span class="stat-value">{bookCategories.reduce((s, c) => s + c.books.filter((b) => b.language === 'Deutsch').length, 0)}</span>
			<span class="stat-label">Deutsch</span>
		</div>
		<div class="stat">
			<span class="stat-value">{bookCategories.reduce((s, c) => s + c.books.filter((b) => b.language === 'English').length, 0)}</span>
			<span class="stat-label">Englisch</span>
		</div>
	</div>

	<!-- Expand/Collapse controls -->
	<div class="controls">
		<button class="control-btn" onclick={expandAll}>Alle aufklappen</button>
		<button class="control-btn" onclick={collapseAll}>Alle zuklappen</button>
	</div>

	<!-- Category sections -->
	<main class="categories">
		{#each bookCategories as category (category.id)}
			<section class="category-section">
				<button
					class="category-header"
					class:expanded={expandedCategories.has(category.id)}
					onclick={() => toggleCategory(category.id)}
					style="--cat-color: {category.color}"
				>
					<div class="category-title-row">
						<span class="category-icon">{category.icon}</span>
						<div class="category-title-block">
							<h2 class="category-name">{category.name}</h2>
							<p class="category-description">{category.description}</p>
						</div>
					</div>
					<div class="category-meta">
						<span class="category-count">{category.books.length} {category.books.length === 1 ? 'Buch' : 'Bücher'}</span>
						<span class="expand-icon">{expandedCategories.has(category.id) ? '\u25BC' : '\u25B6'}</span>
					</div>
				</button>

				{#if expandedCategories.has(category.id)}
					<div class="category-books">
						{#each category.books as book}
							<div class="book-card" style="--cat-color: {category.color}">
								<div class="book-header">
									<div class="book-title-block">
										<h3 class="book-title">{book.title}</h3>
										{#if book.germanTitle}
											<p class="book-german-title">Deutsch: {book.germanTitle}</p>
										{/if}
									</div>
									<span class="language-badge" class:lang-de={book.language === 'Deutsch'} class:lang-en={book.language === 'English'}>
										{book.language}
									</span>
								</div>

								<div class="book-author-line">
									<span class="book-author">{book.author}</span>
									<span class="book-credentials">{book.authorCredentials}</span>
								</div>

								<div class="book-meta-line">
									<span class="book-year">{book.year}</span>
									<span class="meta-separator">&middot;</span>
									<span class="book-publisher">{book.publisher}</span>
								</div>

								<div class="book-section">
									<p class="book-thesis">{book.thesis}</p>
								</div>

								<div class="book-section">
									<p class="book-section-label">Unterschied zum Buch:</p>
									<p class="book-differs">{book.differsFromBook}</p>
								</div>

								<div class="book-section">
									<p class="book-section-label">Wissenschaftliche Einordnung:</p>
									<p class="book-standing">{book.standing}</p>
								</div>

								<div class="book-actions">
									<a
										href={book.amazonUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="amazon-btn"
									>
										Bei Amazon &rarr;
									</a>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</section>
		{/each}
	</main>

	<!-- Summary footer -->
	<div class="summary-bar">
		<p>
			{totalBooks} Bücher aus {totalCategories} Perspektiven — von biologisch-interaktionistisch
			bis konservativ-traditionell. Für ein vollständiges Bild der Jungenforschung.
		</p>
	</div>

	<footer class="app-footer">
		<p>Literaturübersicht zu: <em>Jungs von heute, Männer von morgen</em></p>
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
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 20px 60px;
	}

	/* Hero */
	.hero {
		padding: 40px 0 30px;
		text-align: center;
	}

	.nav-links {
		display: flex;
		gap: 20px;
		justify-content: center;
		margin-bottom: 20px;
	}

	.back-link {
		color: #60a5fa;
		text-decoration: none;
		font-size: 0.85rem;
	}
	.back-link:hover {
		color: #93c5fd;
	}

	.book-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 3px;
		color: #64748b;
		margin: 0 0 12px;
	}

	.hero h1 {
		font-size: 2.4rem;
		font-weight: 800;
		background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin: 0 0 8px;
		line-height: 1.2;
	}

	.subtitle {
		color: #94a3b8;
		font-size: 1.1rem;
		margin: 0 0 8px;
	}

	.subtitle-note {
		color: #64748b;
		font-size: 0.9rem;
		margin: 0;
	}
	.subtitle-note em {
		color: #94a3b8;
	}

	/* Stats bar */
	.stats-bar {
		display: flex;
		justify-content: center;
		gap: 32px;
		padding: 20px;
		background: rgba(30, 41, 59, 0.6);
		border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.15);
		margin-bottom: 24px;
		flex-wrap: wrap;
	}

	.stat {
		text-align: center;
	}

	.stat-value {
		display: block;
		font-size: 1.8rem;
		font-weight: 800;
		color: #60a5fa;
	}

	.stat-label {
		font-size: 0.78rem;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	/* Controls */
	.controls {
		display: flex;
		gap: 8px;
		margin-bottom: 24px;
		justify-content: center;
	}

	.control-btn {
		padding: 8px 18px;
		border: 1px solid rgba(148, 163, 184, 0.15);
		border-radius: 8px;
		background: transparent;
		color: #94a3b8;
		font-size: 0.85rem;
		cursor: pointer;
		transition: all 0.2s;
		font-family: inherit;
	}
	.control-btn:hover {
		color: #e2e8f0;
		border-color: rgba(148, 163, 184, 0.3);
		background: rgba(30, 41, 59, 0.5);
	}

	/* Categories */
	.categories {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.category-section {
		background: rgba(30, 41, 59, 0.5);
		border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.1);
		overflow: hidden;
		transition: border-color 0.2s;
	}
	.category-section:hover {
		border-color: rgba(148, 163, 184, 0.25);
	}

	.category-header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 18px 20px;
		background: transparent;
		border: none;
		border-left: 4px solid var(--cat-color, #64748b);
		color: inherit;
		cursor: pointer;
		font-family: inherit;
		text-align: left;
		transition: background 0.2s;
	}
	.category-header:hover {
		background: rgba(148, 163, 184, 0.05);
	}
	.category-header.expanded {
		border-bottom: 1px solid rgba(148, 163, 184, 0.08);
	}

	.category-title-row {
		display: flex;
		align-items: flex-start;
		gap: 14px;
	}

	.category-icon {
		font-size: 1.6rem;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.category-title-block {
		flex: 1;
	}

	.category-name {
		font-size: 1.1rem;
		font-weight: 700;
		color: #f1f5f9;
		margin: 0 0 4px;
	}

	.category-description {
		font-size: 0.82rem;
		color: #94a3b8;
		margin: 0;
		line-height: 1.5;
	}

	.category-meta {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-shrink: 0;
	}

	.category-count {
		font-size: 0.78rem;
		color: #64748b;
		white-space: nowrap;
	}

	.expand-icon {
		font-size: 0.7rem;
		color: #475569;
	}

	/* Books inside categories */
	.category-books {
		padding: 16px 20px 20px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.book-card {
		background: rgba(15, 23, 42, 0.6);
		border-radius: 10px;
		padding: 20px;
		border: 1px solid rgba(148, 163, 184, 0.12);
		border-left: 3px solid var(--cat-color, #64748b);
		transition: transform 0.2s, box-shadow 0.2s;
	}
	.book-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	}

	.book-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 12px;
		margin-bottom: 8px;
	}

	.book-title-block {
		flex: 1;
	}

	.book-title {
		font-size: 1.1rem;
		font-weight: 700;
		color: #f1f5f9;
		margin: 0;
		line-height: 1.3;
	}

	.book-german-title {
		font-size: 0.82rem;
		color: #a78bfa;
		margin: 4px 0 0;
		font-style: italic;
	}

	.language-badge {
		font-size: 0.7rem;
		padding: 3px 10px;
		border-radius: 12px;
		font-weight: 600;
		white-space: nowrap;
		flex-shrink: 0;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	.lang-de {
		background: rgba(59, 130, 246, 0.2);
		color: #93c5fd;
	}
	.lang-en {
		background: rgba(139, 92, 246, 0.2);
		color: #c4b5fd;
	}

	.book-author-line {
		margin-bottom: 6px;
	}

	.book-author {
		font-size: 0.95rem;
		font-weight: 600;
		color: #e2e8f0;
	}

	.book-credentials {
		display: block;
		font-size: 0.78rem;
		color: #64748b;
		margin-top: 2px;
	}

	.book-meta-line {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.82rem;
		color: #64748b;
		margin-bottom: 14px;
		padding-bottom: 14px;
		border-bottom: 1px solid rgba(148, 163, 184, 0.08);
	}

	.meta-separator {
		color: #475569;
	}

	.book-section {
		margin-bottom: 12px;
	}

	.book-section-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: #64748b;
		margin: 0 0 4px;
		font-weight: 600;
	}

	.book-thesis {
		font-size: 0.88rem;
		color: #cbd5e1;
		line-height: 1.6;
		margin: 0;
	}

	.book-differs {
		font-size: 0.85rem;
		color: #94a3b8;
		line-height: 1.5;
		margin: 0;
	}

	.book-standing {
		font-size: 0.85rem;
		color: #94a3b8;
		line-height: 1.5;
		margin: 0;
		font-style: italic;
	}

	.book-actions {
		margin-top: 16px;
		padding-top: 14px;
		border-top: 1px solid rgba(148, 163, 184, 0.08);
	}

	.amazon-btn {
		display: inline-block;
		padding: 8px 20px;
		background: linear-gradient(135deg, #f59e0b, #f97316);
		color: #1e293b;
		font-size: 0.85rem;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s;
		font-family: inherit;
	}
	.amazon-btn:hover {
		background: linear-gradient(135deg, #fbbf24, #fb923c);
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
	}

	/* Summary */
	.summary-bar {
		margin-top: 40px;
		padding: 24px;
		background: rgba(30, 41, 59, 0.6);
		border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.15);
		text-align: center;
	}

	.summary-bar p {
		color: #94a3b8;
		font-size: 0.95rem;
		margin: 0;
		line-height: 1.6;
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
	.app-footer em {
		color: #64748b;
	}

	@media (max-width: 640px) {
		.hero h1 {
			font-size: 1.6rem;
		}
		.stats-bar {
			gap: 16px;
		}
		.stat-value {
			font-size: 1.4rem;
		}
		.category-header {
			padding: 14px 16px;
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}
		.category-meta {
			align-self: flex-end;
		}
		.book-header {
			flex-direction: column;
		}
		.language-badge {
			align-self: flex-start;
		}
	}
</style>
