<script lang="ts">
	import { authors, institutions, studies, categories, bookInfo } from '$lib/data/bdc-references-data';
	import type { Author } from '$lib/data/bdc-references-data';
	import { onMount } from 'svelte';

	type ViewMode = 'authors' | 'studies' | 'institutions';
	let activeView = $state<ViewMode>('authors');
	let activeField = $state<string>('Alle');
	let searchQuery = $state('');
	let expandedAuthor = $state<string | null>(null);

	onMount(() => {
		const urlSearch = new URL(window.location.href).searchParams.get('search');
		if (urlSearch) {
			searchQuery = urlSearch;
			activeView = 'authors';
			const match = authors.find((a) => a.name.toLowerCase().includes(urlSearch.toLowerCase()));
			if (match) expandedAuthor = match.name;
		}
	});

	const fields = ['Alle', ...Object.keys(categories).sort()];

	const keyFigures = authors.filter((a) => a.keyFigure);

	const workTypeLabels: Record<string, string> = {
		book: 'Buch',
		article: 'Artikel',
		study: 'Studie',
		film: 'Film',
		talk: 'Vortrag',
		dissertation: 'Dissertation',
		report: 'Bericht',
		other: 'Sonstiges'
	};

	const workTypeColors: Record<string, string> = {
		book: '#3b82f6',
		article: '#10b981',
		study: '#8b5cf6',
		film: '#6366f1',
		talk: '#ec4899',
		dissertation: '#6366f1',
		report: '#f97316',
		other: '#64748b'
	};

	const fieldColors: Record<string, string> = {
		'Sozialpädagogik / Soziologie': '#818cf8',
		'Sozialwissenschaften / Körpersoziologie': '#a78bfa',
		'Sozialpädagogik / Jungenarbeit': '#10b981',
		'Soziologie / Gender Studies': '#8b5cf6',
		'Soziologie / Männerforschung': '#a78bfa',
		'Psychoanalyse / Sozialpsychologie': '#ec4899',
		'Soziologie / Kritische Männerforschung': '#8b5cf6',
		'Soziologie / Critical Studies on Men': '#8b5cf6',
		'Psychoanalyse / Feministische Theorie': '#ec4899',
		'Psychoanalyse / Pädiatrie': '#ec4899',
		'Psychoanalyse': '#ec4899',
		'Psychoanalytische Sozialisationsforschung': '#ec4899',
		'Psychoanalytische Gender-Forschung': '#ec4899',
		'Sozialisationsforschung / Bildungssoziologie': '#10b981',
		'Männerforschung / Sozialpädagogik': '#10b981',
		'Männerberatung / Klinische Sozialpsychologie': '#14b8a6',
		'Sozialpädagogik / Übergangsforschung': '#10b981',
		'Schulforschung / Gender Studies': '#84cc16',
		'Schulethnographie / Sozialisationsforschung': '#84cc16',
		'Schulforschung / Feministische Pädagogik': '#84cc16',
		'Schulforschung / Männerforschung': '#84cc16',
		'Bildungssoziologie': '#84cc16',
		'Sozialpädagogik / Jugendforschung': '#10b981',
		'Gender Studies / Väterforschung': '#ec4899',
		'Familienforschung': '#6366f1',
		'Soziologie / Zeitdiagnose': '#6366f1',
		'Soziologie': '#6366f1',
		'Philosophie / Geschichte der Sexualität': '#a78bfa',
		'Soziologie / Systemtheorie': '#6366f1',
		'Soziologie / Familienforschung': '#6366f1',
		'Sozialpädagogik': '#818cf8',
		'Religionssoziologie / Männerforschung': '#6366f1',
		'Männerforschung': '#818cf8',
		'Männerforschung / Politikwissenschaft': '#f97316',
		'Literaturwissenschaft / Kulturkritik': '#d946ef',
		'Verhaltenspsychologie / Entwicklungspsychologie': '#0ea5e9',
		'Neurobiologie / Hirnforschung': '#0ea5e9',
		'Wissenschaftsgeschichte / Biologie': '#0ea5e9',
		'Familiensoziologie': '#6366f1',
		'Kulturanthropologie / Jugendforschung': '#84cc16',
		'Kulturanthropologie / Migrationsforschung': '#84cc16',
		'Bildungssoziologie / Ethnographie': '#84cc16',
		'Neurobiologie': '#0ea5e9',
		'Feministische Ökonomie': '#ec4899',
		'Feministische Soziologie': '#ec4899',
		'Politikwissenschaft / Gender Studies': '#f43f5e',
		'Cultural Studies / Geschlechterforschung': '#d946ef',
		'Clinical Psychology': '#14b8a6',
		'Klinische Psychologie / Männerberatung': '#14b8a6',
		'Humanistische Psychologie': '#818cf8',
		'Klinische Psychologie / Neuropsychotherapie': '#818cf8',
		'Klinische Psychologie / Paartherapie': '#14b8a6',
		'Klinische Psychologie / Borderline-Therapie': '#14b8a6',
		'Kognitive Neurowissenschaft': '#0ea5e9',
		'Soziobiologisch orientierte Psychologie': '#0ea5e9',
		'Kulturanthropologie': '#84cc16',
		'Sexualtherapie': '#ec4899',
		'Männerforschung / Jungenarbeit': '#10b981',
		'Klärungsorientierte Psychotherapie': '#14b8a6',
		'Journalismus / Literatur': '#d946ef',
		'Literatur': '#d946ef',
		'Musik': '#f59e0b',
		'Journalismus / Popkultur': '#818cf8',
		'Journalismus / Hinterbliebenenarbeit': '#14b8a6',
		'Militär / Veteranenstimme': '#f97316',
		'Militär / Trans-Aktivismus': '#ec4899',
		'Journalismus / Essstörungs-Zeugenschaft': '#14b8a6',
		'Feministische Journalistin / Psychische Gesundheit': '#ec4899',
		'Lyrik': '#d946ef',
		'Feministische Journalistin': '#ec4899',
		'Journalismus / Popkultur-Theorie': '#818cf8',
		'Journalismus / Porno-Pädagogik': '#818cf8',
		'Stand-up Comedy': '#f59e0b'
	};

	let filteredAuthors = $derived.by(() => {
		let result = authors;
		if (activeField !== 'Alle') {
			result = result.filter((a) => a.field === activeField);
		}
		if (searchQuery.trim()) {
			const q = searchQuery.toLowerCase();
			result = result.filter(
				(a) =>
					a.name.toLowerCase().includes(q) ||
					a.context.toLowerCase().includes(q) ||
					a.works.some((w) => w.title.toLowerCase().includes(q))
			);
		}
		return result;
	});

	let filteredStudies = $derived.by(() => {
		if (!searchQuery.trim()) return studies;
		const q = searchQuery.toLowerCase();
		return studies.filter(
			(s) =>
				s.name.toLowerCase().includes(q) ||
				s.finding.toLowerCase().includes(q) ||
				(s.authors && s.authors.toLowerCase().includes(q))
		);
	});

	let filteredInstitutions = $derived.by(() => {
		if (!searchQuery.trim()) return institutions;
		const q = searchQuery.toLowerCase();
		return institutions.filter(
			(i) =>
				i.name.toLowerCase().includes(q) ||
				i.context.toLowerCase().includes(q)
		);
	});

	function toggleAuthor(name: string) {
		expandedAuthor = expandedAuthor === name ? null : name;
	}
</script>

<svelte:head>
	<title>Quellenverzeichnis — {bookInfo.title}</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<header class="hero">
		<div class="hero-inner">
			<div style="display:flex;gap:20px;justify-content:center">
				<a href="/boys-dont-cry" class="back-link">&larr; Buchübersicht</a>
				<a href="/boys-dont-cry/evidence" class="back-link">Evidenz-Audit</a>
			</div>
			<p class="book-label">Quellenverzeichnis</p>
			<h1>{bookInfo.title}</h1>
			<p class="subtitle">{bookInfo.subtitle}</p>
			<p class="author">{bookInfo.author} &mdash; {bookInfo.publisher}, {bookInfo.year}</p>
		</div>
	</header>

	<div class="stats-bar">
		<div class="stat">
			<span class="stat-value">{authors.length}</span>
			<span class="stat-label">Autoren</span>
		</div>
		<div class="stat">
			<span class="stat-value">{authors.reduce((sum, a) => sum + a.works.length, 0)}</span>
			<span class="stat-label">Werke</span>
		</div>
		<div class="stat">
			<span class="stat-value">{studies.length}</span>
			<span class="stat-label">Studien</span>
		</div>
		<div class="stat">
			<span class="stat-value">{institutions.length}</span>
			<span class="stat-label">Institutionen</span>
		</div>
		<div class="stat">
			<span class="stat-value">{keyFigures.length}</span>
			<span class="stat-label">Schlüsselfiguren</span>
		</div>
	</div>

	<section class="section">
		<h2>Schlüsselfiguren des Buches</h2>
		<p class="section-intro">Diese Denker:innen bilden das theoretische Fundament und werden wiederholt zitiert.</p>
		<div class="key-figures-grid">
			{#each keyFigures as author}
				<div class="key-figure-card">
					<div class="kf-header">
						<span class="kf-name">{author.name}</span>
						<span class="field-badge" style="--field-color: {fieldColors[author.field] || '#64748b'}">{author.field}</span>
					</div>
					<p class="kf-context">{author.context}</p>
					<div class="kf-works">
						{#each author.works as work}
							<div class="kf-work">
								<span class="work-type-dot" style="background: {workTypeColors[work.type] || '#64748b'}"></span>
								<span class="work-title">{work.title}</span>
								<span class="work-year">{work.year}</span>
							</div>
						{/each}
					</div>
					<p class="kf-pages">{author.pages}</p>
				</div>
			{/each}
		</div>
	</section>

	<nav class="tabs" id="browse">
		<button class:active={activeView === 'authors'} onclick={() => (activeView = 'authors')}>
			Autoren ({authors.length})
		</button>
		<button class:active={activeView === 'studies'} onclick={() => (activeView = 'studies')}>
			Studien ({studies.length})
		</button>
		<button class:active={activeView === 'institutions'} onclick={() => (activeView = 'institutions')}>
			Institutionen ({institutions.length})
		</button>
	</nav>

	<div class="search-bar">
		<input
			type="text"
			placeholder="Suche nach Autor, Werk, Thema..."
			bind:value={searchQuery}
		/>
		{#if searchQuery}
			<button class="clear-btn" onclick={() => (searchQuery = '')}>&#10005;</button>
		{/if}
	</div>

	<main>
		{#if activeView === 'authors'}
			<div class="field-filters">
				{#each fields as field}
					<button
						class="field-btn"
						class:active={activeField === field}
						style={field !== 'Alle' ? `--field-color: ${fieldColors[field] || '#64748b'}` : ''}
						onclick={() => (activeField = field)}
					>
						{field}
						{#if field !== 'Alle'}
							<span class="field-count">{categories[field]}</span>
						{/if}
					</button>
				{/each}
			</div>

			<p class="result-count">{filteredAuthors.length} Autoren gefunden</p>

			<div class="authors-list">
				{#each filteredAuthors as author (author.name)}
					<div
						class="author-card"
						class:expanded={expandedAuthor === author.name}
						class:key-figure={author.keyFigure}
					>
						<button class="author-header" onclick={() => toggleAuthor(author.name)}>
							<div class="author-main">
								{#if author.keyFigure}
									<span class="star">&#9733;</span>
								{/if}
								<span class="author-name">{author.name}</span>
								<span class="field-badge" style="--field-color: {fieldColors[author.field] || '#64748b'}">{author.field}</span>
							</div>
							<div class="author-meta">
								<span class="work-count">{author.works.length} {author.works.length === 1 ? 'Werk' : 'Werke'}</span>
								<span class="expand-icon">{expandedAuthor === author.name ? '▼' : '▶'}</span>
							</div>
						</button>

						{#if expandedAuthor === author.name}
							<div class="author-details">
								<p class="author-context">{author.context}</p>

								<div class="works-list">
									{#each author.works as work}
										<div class="work-item">
											<span class="work-type-badge" style="background: {workTypeColors[work.type] || '#64748b'}">
												{workTypeLabels[work.type] || work.type}
											</span>
											<div class="work-info">
												<span class="work-title-detail">{work.title}</span>
												<span class="work-meta">
													{work.year}{work.publisher ? ` — ${work.publisher}` : ''}
													{#if work.coAuthors && work.coAuthors.length > 0}
														<br />Mit: {work.coAuthors.join(', ')}
													{/if}
												</span>
											</div>
										</div>
									{/each}
								</div>

								<p class="pages-ref">Zitiert: {author.pages}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>

		{:else if activeView === 'studies'}
			<p class="result-count">{filteredStudies.length} Studien gefunden</p>

			<div class="studies-list">
				{#each filteredStudies as study}
					<div class="study-card">
						<h3 class="study-name">{study.name}</h3>
						{#if study.authors}
							<p class="study-authors">{study.authors}{study.year ? ` (${study.year})` : ''}</p>
						{/if}
						<p class="study-finding">{study.finding}</p>
						<p class="pages-ref">{study.pages}</p>
					</div>
				{/each}
			</div>

		{:else if activeView === 'institutions'}
			<p class="result-count">{filteredInstitutions.length} Institutionen gefunden</p>

			<div class="institutions-list">
				{#each filteredInstitutions as inst}
					<div class="inst-card">
						<div class="inst-header">
							<span class="inst-name">{inst.name}</span>
							<span class="inst-type">{inst.type}</span>
						</div>
						<p class="inst-context">{inst.context}</p>
						<p class="pages-ref">{inst.pages}</p>
					</div>
				{/each}
			</div>
		{/if}
	</main>

	<footer class="app-footer">
		<p>Quellenanalyse erstellt aus: <em>{bookInfo.title}</em> von {bookInfo.author} ({bookInfo.year})</p>
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

	.hero { padding: 40px 0 30px; text-align: center; }
	.back-link { color: #60a5fa; text-decoration: none; font-size: 0.85rem; display: inline-block; margin-bottom: 20px; }
	.back-link:hover { color: #93c5fd; }
	.book-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 3px; color: #64748b; margin: 0 0 12px; }
	.hero h1 {
		font-size: 2.4rem; font-weight: 800;
		background: linear-gradient(135deg, #c7d2fe, #818cf8, #6366f1);
		-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
		margin: 0 0 8px; line-height: 1.2;
	}
	.subtitle { color: #94a3b8; font-size: 1.1rem; margin: 0 0 8px; }
	.author { color: #64748b; font-size: 0.9rem; margin: 0; }

	.stats-bar {
		display: flex; justify-content: center; gap: 32px; padding: 20px;
		background: rgba(30, 41, 59, 0.6); border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.15);
		margin-bottom: 32px; flex-wrap: wrap;
	}
	.stat { text-align: center; }
	.stat-value { display: block; font-size: 1.8rem; font-weight: 800; color: #818cf8; }
	.stat-label { font-size: 0.78rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }

	.section { margin-bottom: 40px; }
	.section h2 { font-size: 1.4rem; font-weight: 700; color: #e2e8f0; margin: 0 0 8px; }
	.section-intro { color: #94a3b8; font-size: 0.9rem; margin: 0 0 20px; }

	.key-figures-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 16px;
	}

	.key-figure-card {
		background: rgba(30, 41, 59, 0.7); border-radius: 12px; padding: 20px;
		border: 1px solid rgba(148, 163, 184, 0.15);
		border-left: 3px solid #818cf8;
		transition: transform 0.2s, box-shadow 0.2s;
	}
	.key-figure-card:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); }

	.kf-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; gap: 8px; flex-wrap: wrap; }
	.kf-name { font-weight: 700; font-size: 1.05rem; color: #f1f5f9; }
	.kf-context { font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin: 0 0 12px; }
	.kf-works { display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px; }
	.kf-work { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; }
	.work-type-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
	.work-title { color: #cbd5e1; flex: 1; }
	.work-year { color: #64748b; font-size: 0.78rem; }
	.kf-pages { font-size: 0.75rem; color: #475569; margin: 0; }

	.tabs {
		display: flex; gap: 8px; padding: 12px 16px;
		background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(8px);
		border-radius: 12px; border: 1px solid rgba(148, 163, 184, 0.1);
		position: sticky; top: 0; z-index: 100;
		margin-bottom: 16px; flex-wrap: wrap;
	}
	.tabs button {
		padding: 8px 18px; border: 1px solid rgba(148, 163, 184, 0.15);
		border-radius: 8px; background: transparent;
		color: #94a3b8; font-size: 0.88rem; cursor: pointer;
		transition: all 0.2s; font-family: inherit;
	}
	.tabs button:hover { color: #e2e8f0; border-color: rgba(148, 163, 184, 0.3); }
	.tabs button.active {
		background: linear-gradient(135deg, #c7d2fe, #818cf8);
		color: #1e293b; border-color: transparent; font-weight: 700;
	}

	.search-bar { position: relative; margin-bottom: 16px; }
	.search-bar input {
		width: 100%; padding: 12px 40px 12px 16px;
		border: 1px solid rgba(148, 163, 184, 0.2); border-radius: 10px;
		background: rgba(30, 41, 59, 0.6); color: #e2e8f0;
		font-size: 0.95rem; font-family: inherit; outline: none;
		transition: border-color 0.2s; box-sizing: border-box;
	}
	.search-bar input:focus { border-color: #818cf8; }
	.search-bar input::placeholder { color: #475569; }
	.clear-btn {
		position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
		background: none; border: none; color: #64748b; cursor: pointer;
		font-size: 1rem; padding: 4px;
	}
	.clear-btn:hover { color: #ef4444; }

	.field-filters { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
	.field-btn {
		padding: 5px 12px; border: 1px solid rgba(148, 163, 184, 0.15);
		border-radius: 20px; background: transparent;
		color: #94a3b8; font-size: 0.78rem; cursor: pointer;
		transition: all 0.2s; font-family: inherit;
		display: flex; align-items: center; gap: 5px;
	}
	.field-btn:hover { border-color: var(--field-color, #94a3b8); color: #e2e8f0; }
	.field-btn.active { background: var(--field-color, #818cf8); color: #1e293b; border-color: transparent; }
	.field-count { background: rgba(255, 255, 255, 0.15); padding: 1px 6px; border-radius: 10px; font-size: 0.72rem; }
	.field-badge {
		font-size: 0.72rem; padding: 2px 8px; border-radius: 12px;
		background: var(--field-color, #64748b); color: white;
		font-weight: 500; white-space: nowrap;
	}
	.result-count { font-size: 0.82rem; color: #64748b; margin: 0 0 16px; }

	.authors-list { display: flex; flex-direction: column; gap: 8px; }
	.author-card {
		background: rgba(30, 41, 59, 0.5); border-radius: 10px;
		border: 1px solid rgba(148, 163, 184, 0.1);
		overflow: hidden; transition: border-color 0.2s;
	}
	.author-card:hover { border-color: rgba(148, 163, 184, 0.25); }
	.author-card.key-figure { border-left: 3px solid #818cf8; }
	.author-card.expanded { border-color: rgba(251, 191, 36, 0.4); }

	.author-header {
		width: 100%; display: flex; justify-content: space-between; align-items: center;
		padding: 14px 16px; background: transparent; border: none;
		color: inherit; cursor: pointer; font-family: inherit; text-align: left;
	}
	.author-header:hover { background: rgba(148, 163, 184, 0.05); }
	.author-main { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
	.star { color: #818cf8; font-size: 1rem; }
	.author-name { font-weight: 600; font-size: 0.95rem; color: #e2e8f0; }
	.author-meta { display: flex; align-items: center; gap: 12px; }
	.work-count { font-size: 0.78rem; color: #64748b; }
	.expand-icon { font-size: 0.7rem; color: #475569; }

	.author-details { padding: 0 16px 16px; border-top: 1px solid rgba(148, 163, 184, 0.08); }
	.author-context { font-size: 0.88rem; color: #94a3b8; line-height: 1.6; margin: 14px 0; }
	.works-list { display: flex; flex-direction: column; gap: 10px; }
	.work-item { display: flex; align-items: flex-start; gap: 10px; }
	.work-type-badge {
		font-size: 0.68rem; padding: 2px 8px; border-radius: 6px;
		color: white; font-weight: 500; white-space: nowrap; margin-top: 2px;
	}
	.work-info { flex: 1; }
	.work-title-detail { display: block; font-size: 0.88rem; color: #cbd5e1; font-weight: 500; }
	.work-meta { font-size: 0.78rem; color: #64748b; margin-top: 2px; display: block; }
	.pages-ref {
		font-size: 0.75rem; color: #475569; margin: 12px 0 0;
		padding-top: 8px; border-top: 1px solid rgba(148, 163, 184, 0.06);
	}

	.studies-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		gap: 12px;
	}
	.study-card {
		background: rgba(30, 41, 59, 0.6); border-radius: 10px; padding: 18px;
		border: 1px solid rgba(148, 163, 184, 0.12); border-left: 3px solid #8b5cf6;
	}
	.study-name { font-size: 0.95rem; font-weight: 600; color: #e2e8f0; margin: 0 0 6px; }
	.study-authors { font-size: 0.8rem; color: #64748b; margin: 0 0 10px; }
	.study-finding { font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin: 0 0 8px; }

	.institutions-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 12px;
	}
	.inst-card {
		background: rgba(30, 41, 59, 0.6); border-radius: 10px; padding: 18px;
		border: 1px solid rgba(148, 163, 184, 0.12); border-left: 3px solid #818cf8;
	}
	.inst-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; gap: 8px; flex-wrap: wrap; }
	.inst-name { font-weight: 600; font-size: 0.95rem; color: #e2e8f0; }
	.inst-type {
		font-size: 0.72rem; padding: 2px 8px; border-radius: 12px;
		background: rgba(251, 191, 36, 0.2); color: #c7d2fe;
	}
	.inst-context { font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin: 0 0 8px; }

	.app-footer {
		text-align: center; padding: 30px 0; color: #475569; font-size: 0.82rem;
		border-top: 1px solid rgba(148, 163, 184, 0.1); margin-top: 40px;
	}
	.app-footer em { color: #64748b; }

	@media (max-width: 640px) {
		.hero h1 { font-size: 1.6rem; }
		.stats-bar { gap: 16px; }
		.stat-value { font-size: 1.4rem; }
		.key-figures-grid { grid-template-columns: 1fr; }
		.studies-list, .institutions-list { grid-template-columns: 1fr; }
	}
</style>
