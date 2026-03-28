<script lang="ts">
	import { researchFields, statusLabels, bookPositioningSummary, counterPositions } from '$lib/data/research-fields-data';
	import { authors as allAuthors } from '$lib/data/references-data';

	import type { SchoolOfThought } from '$lib/data/research-fields-data';

	let expandedCounter = $state<string | null>(null);

	function toggleCounter(id: string) {
		expandedCounter = expandedCounter === id ? null : id;
	}

	let expandedField = $state<string | null>(null);
	let expandedGroup = $state<string | null>(null);
	let showSources = $state<string | null>(null);

	function toggleField(id: string) {
		if (expandedField === id) {
			expandedField = null;
			expandedGroup = null;
			showSources = null;
		} else {
			expandedField = id;
			expandedGroup = null;
			showSources = null;
		}
	}

	function toggleGroup(id: string) {
		expandedGroup = expandedGroup === id ? null : id;
		showSources = null;
	}

	function toggleSources(groupId: string) {
		showSources = showSources === groupId ? null : groupId;
	}

	function getAuthorDetails(name: string) {
		return allAuthors.find((a) => a.name === name);
	}

	function statusDot(status: string) {
		return statusLabels[status]?.color || '#64748b';
	}
</script>

<svelte:head>
	<title>Forschungslandschaft — Geschlechterforschung</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
	<header class="hero">
		<div class="hero-inner">
			<div class="nav-links">
				<a href="/" class="back-link">&larr; Hauptseite</a>
				<a href="/jungs-von-heute" class="back-link">Jungs von heute</a>
				<a href="/why-gender-matters" class="back-link">Why Gender Matters</a>
			</div>
			<p class="book-label">Forschungslandschaft</p>
			<h1>Die Wissenschaft hinter der Debatte</h1>
			<p class="subtitle">
				Welche Forschungsfelder, Schulen und Debatten stehen hinter
				der Geschlechterforschung?
			</p>
			<p class="subtitle-note">
				Klicke auf ein Feld, um die verschiedenen Denkschulen, den wissenschaftlichen Konsens
				und abweichende Meinungen zu sehen.
			</p>
		</div>
	</header>

	<!-- Legend -->
	<div class="legend">
		<span class="legend-title">Wissenschaftlicher Status:</span>
		{#each Object.entries(statusLabels) as [key, val]}
			<span class="legend-item">
				<span class="legend-dot" style="background: {val.color}"></span>
				{val.label}
			</span>
		{/each}
	</div>

	<!-- Field cards -->
	<div class="fields-grid">
		{#each researchFields as field}
			<div class="field-card" class:expanded={expandedField === field.id} style="--field-color: {field.color}">
				<button class="field-header" onclick={() => toggleField(field.id)}>
					<div class="field-title-row">
						<span class="field-icon">{field.icon}</span>
						<div class="field-titles">
							<span class="field-name">{field.germanName}</span>
							<span class="field-name-en">{field.name}</span>
						</div>
					</div>
					<span class="field-expand">{expandedField === field.id ? '▾' : '▸'}</span>
				</button>

				{#if expandedField === field.id}
					<div class="field-body">
						<p class="field-desc">{field.description}</p>
						<div class="core-question">
							<span class="cq-label">Kernfrage:</span>
							{field.coreQuestion}
						</div>

						<!-- Cited authors from book -->
						{#if field.citedAuthors.length > 0}
							<div class="cited-authors-bar">
								<span class="ca-label">Im Buch zitiert:</span>
								{#each field.citedAuthors as name}
									<span class="cited-author-chip">{name}</span>
								{/each}
							</div>
						{/if}

						<!-- Schools of thought -->
						<div class="groups-list">
							{#each field.groups as group}
								<div class="group-card" class:is-book-position={group.bookPosition}>
									<button class="group-header" onclick={() => toggleGroup(group.id)}>
										<div class="group-title-area">
											<span class="status-dot" style="background: {statusDot(group.status)}"></span>
											<span class="group-name">{group.name}</span>
											{#if group.bookPosition}
												<span class="book-tag">Position des Buches</span>
											{/if}
										</div>
										<div class="group-status-row">
											<span class="status-badge" style="background: {statusDot(group.status)}">{statusLabels[group.status]?.label}</span>
											<span class="group-expand">{expandedGroup === group.id ? '▾' : '▸'}</span>
										</div>
									</button>

									{#if expandedGroup === group.id}
										<div class="group-body">
											<p class="group-position">{group.position}</p>

											<div class="status-explanation">
												<span class="se-icon">ℹ</span>
												<p>{group.statusExplanation}</p>
											</div>

											<!-- Key arguments -->
											<div class="arguments-section">
												<h4>Kernargumente:</h4>
												<ul>
													{#each group.keyArguments as arg}
														<li>{arg}</li>
													{/each}
												</ul>
											</div>

											<!-- Key proponents -->
											<div class="proponents-section">
												<h4>Wichtigste Vertreter:innen:</h4>
												<div class="proponents-list">
													{#each group.keyProponents as p}
														<div class="proponent" class:in-book={p.inBook}>
															<span class="proponent-name">
																{p.name}
																{#if p.inBook}
																	<span class="in-book-marker">im Buch</span>
																{/if}
															</span>
															{#if p.affiliation}
																<span class="proponent-affil">{p.affiliation}</span>
															{/if}
															{#if p.keyWork}
																<span class="proponent-work">{p.keyWork}</span>
															{/if}
														</div>
													{/each}
												</div>
											</div>

											<!-- Critics -->
											{#if group.critics && group.critics.length > 0}
												<div class="critics-section">
													<h4>Gegenstimmen & Kritik:</h4>
													{#each group.critics as critic}
														<div class="critic-card">
															<div class="critic-header">
																<span class="critic-name">{critic.name}</span>
																{#if critic.affiliation}
																	<span class="critic-affil">{critic.affiliation}</span>
																{/if}
																<span class="critic-standing standing-{critic.standing}">{critic.standing}</span>
															</div>
															<p class="critic-argument">&laquo;{critic.argument}&raquo;</p>
														</div>
													{/each}
												</div>
											{/if}

											<!-- Show sources from book -->
											{#if group.citedInBook.length > 0}
												<button class="sources-toggle" onclick={() => toggleSources(group.id)}>
													{showSources === group.id ? '▾ Quellen aus dem Buch ausblenden' : '▸ Zitierte Quellen aus dem Buch anzeigen'}
													({group.citedInBook.length})
												</button>

												{#if showSources === group.id}
													<div class="sources-panel">
														{#each group.citedInBook as authorName}
															{@const details = getAuthorDetails(authorName)}
															{#if details}
																<div class="source-entry">
																	<span class="source-name">{details.name}</span>
																	<span class="source-field">{details.field}</span>
																	{#each details.works as work}
																		<div class="source-work">
																			<em>{work.title}</em> ({work.year})
																			{#if work.publisher} — {work.publisher}{/if}
																		</div>
																	{/each}
																	<span class="source-pages">{details.pages}</span>
																	<p class="source-context">{details.context}</p>
																</div>
															{:else}
																<div class="source-entry">
																	<span class="source-name">{authorName}</span>
																	<span class="source-field">Nicht im Quellenverzeichnis</span>
																</div>
															{/if}
														{/each}
													</div>
												{/if}
											{/if}
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<!-- Counter positions -->
	<section class="counter-section">
		<div class="counter-header">
			<h2>Was das Buch nicht zeigt: Grundsätzliche Gegenpositionen</h2>
			<p class="counter-intro">
				Diese Forschungstraditionen stellen die sozialkonstruktivistische Grundannahme des Buches
				fundamental in Frage. Sie stammen nicht aus der "Manosphere", sondern von angesehenen
				Forschern an Top-Universitäten (Harvard, Cambridge, Princeton, Brookings).
				Keine davon wird im Buch diskutiert.
			</p>
		</div>

		<div class="counter-grid">
			{#each counterPositions as cp}
				<div class="counter-card" class:expanded={expandedCounter === cp.id} style="--cp-color: {cp.color}">
					<button class="counter-card-header" onclick={() => toggleCounter(cp.id)}>
						<div class="cp-title-row">
							<span class="cp-icon">{cp.icon}</span>
							<div class="cp-titles">
								<span class="cp-name">{cp.name}</span>
								<span class="cp-status" style="background: {statusLabels[cp.status]?.color || '#64748b'}">
									{statusLabels[cp.status]?.label || cp.status}
								</span>
							</div>
						</div>
						<span class="cp-expand">{expandedCounter === cp.id ? '▾' : '▸'}</span>
					</button>

					<p class="cp-challenge">{cp.challenge}</p>

					{#if expandedCounter === cp.id}
						<div class="cp-body">
							<div class="cp-status-note">
								<span class="se-icon">ℹ</span>
								<p>{cp.statusNote}</p>
							</div>

							<p class="cp-description">{cp.description}</p>

							<div class="cp-findings">
								<h4>Zentrale Befunde:</h4>
								<ul>
									{#each cp.keyFindings as finding}
										<li>{finding}</li>
									{/each}
								</ul>
							</div>

							<div class="cp-researchers">
								<h4>Wichtigste Forscher:innen:</h4>
								<div class="proponents-list">
									{#each cp.keyResearchers as r}
										<div class="proponent">
											<span class="proponent-name">{r.name}</span>
											<span class="proponent-affil">{r.affiliation}</span>
											<span class="proponent-work">{r.work}</span>
											<span class="critic-standing standing-{r.standing}">{r.standing}</span>
										</div>
									{/each}
								</div>
							</div>

							<div class="cp-implications">
								<h4>Implikation für das Buch:</h4>
								<p>{cp.implicationsForBook}</p>
							</div>

							<div class="cp-book-response">
								<span class="br-icon">📖</span>
								<p>{cp.bookResponse}</p>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- Book positioning summary -->
	<section class="summary-section">
		<h2>{bookPositioningSummary.title}</h2>
		<p class="summary-desc">{bookPositioningSummary.description}</p>

		<div class="summary-grid">
			<div class="summary-card strengths">
				<h3>Stärken der Quellenauswahl</h3>
				<ul>
					{#each bookPositioningSummary.strengths as s}
						<li>{s}</li>
					{/each}
				</ul>
			</div>
			<div class="summary-card blindspots">
				<h3>Blinde Flecken</h3>
				<ul>
					{#each bookPositioningSummary.blindSpots as b}
						<li>{b}</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<footer class="app-footer">
		<p>
			Meta-Analyse der Forschungslandschaft hinter der Geschlechterforschung.
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
	.nav-links { display: flex; justify-content: center; gap: 24px; margin-bottom: 20px; }
	.back-link { color: #60a5fa; text-decoration: none; font-size: 0.85rem; }
	.back-link:hover { color: #93c5fd; }
	.book-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 3px; color: #64748b; margin: 0 0 12px; }
	.hero h1 {
		font-size: 2.2rem; font-weight: 800; margin: 0 0 8px; line-height: 1.2;
		background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
		-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
	}
	.subtitle { color: #94a3b8; font-size: 1rem; margin: 0 0 6px; }
	.subtitle em { color: #cbd5e1; }
	.subtitle-note { color: #64748b; font-size: 0.85rem; margin: 0; }

	/* Legend */
	.legend {
		display: flex; flex-wrap: wrap; align-items: center; gap: 12px;
		padding: 14px 20px; margin-bottom: 24px;
		background: rgba(30, 41, 59, 0.5); border-radius: 10px;
		border: 1px solid rgba(148, 163, 184, 0.1);
	}
	.legend-title { font-size: 0.78rem; color: #64748b; font-weight: 600; }
	.legend-item { display: flex; align-items: center; gap: 5px; font-size: 0.75rem; color: #94a3b8; }
	.legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }

	/* Fields grid */
	.fields-grid { display: flex; flex-direction: column; gap: 12px; }

	.field-card {
		background: rgba(30, 41, 59, 0.5); border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.12); overflow: hidden;
		transition: border-color 0.2s;
	}
	.field-card:hover { border-color: var(--field-color, rgba(148, 163, 184, 0.25)); }
	.field-card.expanded { border-color: var(--field-color); }

	.field-header {
		width: 100%; display: flex; justify-content: space-between; align-items: center;
		padding: 18px 20px; background: transparent; border: none; color: inherit;
		cursor: pointer; font-family: inherit; text-align: left;
	}
	.field-header:hover { background: rgba(148, 163, 184, 0.04); }

	.field-title-row { display: flex; align-items: center; gap: 14px; }
	.field-icon { font-size: 1.6rem; }
	.field-titles { display: flex; flex-direction: column; }
	.field-name { font-weight: 700; font-size: 1.05rem; color: #f1f5f9; }
	.field-name-en { font-size: 0.78rem; color: #64748b; }
	.field-expand { color: #475569; font-size: 1rem; }

	/* Field body */
	.field-body { padding: 0 20px 20px; }
	.field-desc { font-size: 0.88rem; color: #94a3b8; line-height: 1.6; margin: 0 0 14px; }

	.core-question {
		padding: 12px 16px; background: rgba(99, 102, 241, 0.08);
		border-left: 3px solid #6366f1; border-radius: 6px;
		font-size: 0.88rem; color: #cbd5e1; margin-bottom: 14px;
	}
	.cq-label { font-weight: 600; color: #a5b4fc; margin-right: 6px; }

	.cited-authors-bar {
		display: flex; align-items: center; flex-wrap: wrap; gap: 6px;
		margin-bottom: 18px;
	}
	.ca-label { font-size: 0.78rem; color: #64748b; }
	.cited-author-chip {
		font-size: 0.75rem; padding: 3px 10px; border-radius: 12px;
		background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25);
	}

	/* Group cards */
	.groups-list { display: flex; flex-direction: column; gap: 10px; }

	.group-card {
		background: rgba(15, 23, 42, 0.5); border-radius: 10px;
		border: 1px solid rgba(148, 163, 184, 0.08); overflow: hidden;
	}
	.group-card.is-book-position { border-left: 3px solid #f59e0b; }

	.group-header {
		width: 100%; display: flex; justify-content: space-between; align-items: center;
		padding: 14px 16px; background: transparent; border: none; color: inherit;
		cursor: pointer; font-family: inherit; text-align: left; flex-wrap: wrap; gap: 8px;
	}
	.group-header:hover { background: rgba(148, 163, 184, 0.04); }

	.group-title-area { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
	.status-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
	.group-name { font-weight: 600; font-size: 0.92rem; color: #e2e8f0; }
	.book-tag {
		font-size: 0.68rem; padding: 2px 8px; border-radius: 10px;
		background: rgba(245, 158, 11, 0.2); color: #fbbf24; font-weight: 500;
	}
	.group-status-row { display: flex; align-items: center; gap: 10px; }
	.status-badge {
		font-size: 0.68rem; padding: 2px 10px; border-radius: 10px;
		color: white; font-weight: 500;
	}
	.group-expand { color: #475569; font-size: 0.85rem; }

	/* Group body */
	.group-body { padding: 0 16px 16px; }
	.group-position {
		font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin: 10px 0 14px;
		padding: 12px 14px; background: rgba(30, 41, 59, 0.7); border-radius: 8px;
	}

	.status-explanation {
		display: flex; gap: 10px; padding: 12px 14px; margin-bottom: 16px;
		background: rgba(59, 130, 246, 0.06); border-radius: 8px;
		border-left: 3px solid #3b82f6;
	}
	.se-icon { color: #3b82f6; flex-shrink: 0; }
	.status-explanation p { font-size: 0.82rem; color: #94a3b8; line-height: 1.5; margin: 0; }

	.arguments-section h4, .proponents-section h4, .critics-section h4 {
		font-size: 0.82rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px;
		margin: 0 0 10px; font-weight: 600;
	}

	.arguments-section ul { margin: 0 0 18px; padding-left: 18px; }
	.arguments-section li {
		font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin-bottom: 6px;
	}

	/* Proponents */
	.proponents-list { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px; }
	.proponent {
		display: flex; flex-direction: column; gap: 2px;
		padding: 10px 14px; background: rgba(30, 41, 59, 0.6); border-radius: 8px;
		border: 1px solid rgba(148, 163, 184, 0.08); min-width: 200px; flex: 1;
	}
	.proponent.in-book { border-left: 3px solid #f59e0b; }
	.proponent-name { font-size: 0.88rem; font-weight: 600; color: #e2e8f0; }
	.in-book-marker {
		font-size: 0.65rem; padding: 1px 6px; border-radius: 8px;
		background: rgba(245, 158, 11, 0.2); color: #fbbf24; margin-left: 6px; font-weight: 500;
	}
	.proponent-affil { font-size: 0.75rem; color: #64748b; }
	.proponent-work { font-size: 0.78rem; color: #94a3b8; font-style: italic; }

	/* Critics */
	.critics-section { margin-bottom: 16px; }
	.critic-card {
		padding: 14px; margin-bottom: 10px;
		background: rgba(239, 68, 68, 0.04); border-radius: 8px;
		border-left: 3px solid rgba(239, 68, 68, 0.3);
	}
	.critic-header { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 6px; }
	.critic-name { font-weight: 600; font-size: 0.88rem; color: #fca5a5; }
	.critic-affil { font-size: 0.75rem; color: #64748b; }
	.critic-standing {
		font-size: 0.65rem; padding: 2px 8px; border-radius: 10px; font-weight: 500;
	}
	.standing-hochangesehen { background: rgba(16, 185, 129, 0.2); color: #6ee7b7; }
	.standing-angesehen { background: rgba(59, 130, 246, 0.2); color: #93c5fd; }
	.standing-umstritten { background: rgba(245, 158, 11, 0.2); color: #fde68a; }
	.standing-aussenseiter { background: rgba(239, 68, 68, 0.2); color: #fca5a5; }

	.critic-argument { font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin: 0; font-style: italic; }

	/* Sources toggle */
	.sources-toggle {
		display: inline-block; padding: 8px 14px; margin-top: 4px;
		background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2);
		border-radius: 8px; color: #a5b4fc; font-size: 0.82rem;
		cursor: pointer; font-family: inherit; transition: all 0.2s;
	}
	.sources-toggle:hover { background: rgba(99, 102, 241, 0.15); }

	.sources-panel {
		margin-top: 12px; display: flex; flex-direction: column; gap: 10px;
	}
	.source-entry {
		padding: 12px 14px; background: rgba(30, 41, 59, 0.6); border-radius: 8px;
		border: 1px solid rgba(148, 163, 184, 0.08);
	}
	.source-name { font-weight: 600; font-size: 0.9rem; color: #e2e8f0; display: block; }
	.source-field {
		font-size: 0.72rem; color: #64748b; display: inline-block; margin-top: 2px;
	}
	.source-work { font-size: 0.82rem; color: #94a3b8; margin-top: 6px; }
	.source-pages { font-size: 0.75rem; color: #475569; display: block; margin-top: 6px; }
	.source-context { font-size: 0.82rem; color: #94a3b8; margin: 6px 0 0; line-height: 1.5; }

	/* Counter-positions section */
	.counter-section {
		margin-top: 48px; padding: 28px;
		background: rgba(30, 41, 59, 0.3); border-radius: 14px;
		border: 1px solid rgba(239, 68, 68, 0.15);
	}
	.counter-header { margin-bottom: 24px; }
	.counter-header h2 {
		font-size: 1.4rem; font-weight: 700; color: #fca5a5; margin: 0 0 10px;
	}
	.counter-intro {
		font-size: 0.9rem; color: #94a3b8; line-height: 1.6; margin: 0;
	}

	.counter-grid { display: flex; flex-direction: column; gap: 12px; }

	.counter-card {
		background: rgba(15, 23, 42, 0.6); border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.1); overflow: hidden;
		border-left: 3px solid var(--cp-color, #ef4444);
		transition: border-color 0.2s;
	}
	.counter-card:hover { border-color: var(--cp-color); }
	.counter-card.expanded { border-color: var(--cp-color); }

	.counter-card-header {
		width: 100%; display: flex; justify-content: space-between; align-items: center;
		padding: 16px 18px 0; background: transparent; border: none; color: inherit;
		cursor: pointer; font-family: inherit; text-align: left;
	}
	.counter-card-header:hover { background: rgba(148, 163, 184, 0.03); }

	.cp-title-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
	.cp-icon { font-size: 1.4rem; }
	.cp-titles { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
	.cp-name { font-weight: 700; font-size: 1rem; color: #f1f5f9; }
	.cp-status {
		font-size: 0.68rem; padding: 2px 10px; border-radius: 10px;
		color: white; font-weight: 500;
	}
	.cp-expand { color: #475569; font-size: 1rem; }

	.cp-challenge {
		font-size: 0.88rem; color: #fca5a5; line-height: 1.5; margin: 10px 18px 14px;
		font-weight: 500;
	}

	.cp-body { padding: 0 18px 18px; }

	.cp-status-note {
		display: flex; gap: 10px; padding: 12px 14px; margin-bottom: 14px;
		background: rgba(59, 130, 246, 0.06); border-radius: 8px;
		border-left: 3px solid #3b82f6;
	}
	.cp-status-note p { font-size: 0.82rem; color: #94a3b8; line-height: 1.5; margin: 0; }

	.cp-description {
		font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin: 0 0 16px;
		padding: 12px 14px; background: rgba(30, 41, 59, 0.7); border-radius: 8px;
	}

	.cp-findings h4, .cp-researchers h4, .cp-implications h4 {
		font-size: 0.82rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px;
		margin: 0 0 10px; font-weight: 600;
	}
	.cp-findings ul { margin: 0 0 18px; padding-left: 18px; }
	.cp-findings li { font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin-bottom: 6px; }

	.cp-researchers { margin-bottom: 16px; }

	.cp-implications { margin-bottom: 14px; }
	.cp-implications p { font-size: 0.85rem; color: #fde68a; line-height: 1.5; margin: 0; }

	.cp-book-response {
		display: flex; gap: 10px; padding: 12px 14px;
		background: rgba(245, 158, 11, 0.06); border-radius: 8px;
		border-left: 3px solid #f59e0b;
	}
	.br-icon { flex-shrink: 0; }
	.cp-book-response p { font-size: 0.82rem; color: #fbbf24; line-height: 1.5; margin: 0; font-style: italic; }

	/* Summary section */
	.summary-section {
		margin-top: 48px; padding: 28px; background: rgba(30, 41, 59, 0.5);
		border-radius: 14px; border: 1px solid rgba(148, 163, 184, 0.12);
	}
	.summary-section h2 {
		font-size: 1.3rem; font-weight: 700; color: #e2e8f0; margin: 0 0 10px;
	}
	.summary-desc {
		font-size: 0.9rem; color: #94a3b8; line-height: 1.6; margin: 0 0 20px;
	}
	.summary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

	.summary-card {
		padding: 18px; border-radius: 10px;
	}
	.summary-card h3 { font-size: 0.88rem; margin: 0 0 10px; font-weight: 600; }
	.summary-card ul { margin: 0; padding-left: 18px; }
	.summary-card li { font-size: 0.82rem; line-height: 1.5; margin-bottom: 5px; }

	.strengths {
		background: rgba(16, 185, 129, 0.06); border-left: 3px solid #10b981;
	}
	.strengths h3 { color: #6ee7b7; }
	.strengths li { color: #94a3b8; }

	.blindspots {
		background: rgba(245, 158, 11, 0.06); border-left: 3px solid #f59e0b;
	}
	.blindspots h3 { color: #fde68a; }
	.blindspots li { color: #94a3b8; }

	/* Footer */
	.app-footer {
		text-align: center; padding: 30px 0; color: #475569; font-size: 0.82rem;
		border-top: 1px solid rgba(148, 163, 184, 0.1); margin-top: 40px;
	}
	.app-footer em { color: #64748b; }

	@media (max-width: 640px) {
		.hero h1 { font-size: 1.5rem; }
		.summary-grid { grid-template-columns: 1fr; }
		.proponents-list { flex-direction: column; }
		.legend { flex-direction: column; align-items: flex-start; }
	}
</style>
