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
					Anne Dittmann &mdash; Evidenz-Audit, Argumentationskette,
					Quellenverzeichnis und weiterführende Literatur.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Literatur</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/was-sie-wirklich" class="card card-pruefer">
			<div class="card-icon">&#127959;&#65039;</div>
			<div class="card-content">
				<h2>Was Sie (Wirklich) Über Erziehung Wissen Müssen</h2>
				<p class="card-subtitle">Das Wichtigste für alle Eltern &mdash; aus den entscheidenden Studien</p>
				<p>
					Tillmann Prüfer (dtv, 2026) &mdash; evidenzskeptischer Meta-Ratgeber. 341 Endnoten auditiert,
					34 Chain-Links. Verortet gegen „Jungs von heute": stützt Dittmanns Diagnose, untergräbt die Lösungs-Wette.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; 97 Quellen &middot; Dittmann-Verdict</span>
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

		<a href="/real-boys" class="card card-real-boys">
			<div class="card-icon">&#129335;&#8205;&#9794;&#65039;</div>
			<div class="card-content">
				<h2>Real Boys</h2>
				<p class="card-subtitle">Rescuing Our Sons from the Myths of Boyhood</p>
				<p>
					William S. Pollack, Ph.D. (Harvard Medical School) &mdash; Evidenz-Audit, Argumentationskette,
					Quellenverzeichnis und weiterführende Literatur.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Literatur</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/der-gemachte-mann" class="card card-gemachte-mann">
			<div class="card-icon">&#127891;</div>
			<div class="card-content">
				<h2>Der gemachte Mann</h2>
				<p class="card-subtitle">Konstruktion und Krise von Männlichkeiten</p>
				<p>
					Raewyn Connell &mdash; das soziologische Grundlagenwerk. Hegemoniale, untergeordnete,
					komplizenhafte und marginalisierte Männlichkeit als theoretischer Rahmen für die
					gesamte Männlichkeitsforschung.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Soziologie</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/will-to-change" class="card card-will-to-change">
			<div class="card-icon">&#10084;&#65039;</div>
			<div class="card-content">
				<h2>The Will to Change</h2>
				<p class="card-subtitle">Men, Masculinity, and Love</p>
				<p>
					bell hooks &mdash; schwarz-feministische Stimme, vierter Band der &bdquo;love trilogy&ldquo;.
					Verbindet Patriarchatskritik (im Dialog mit Connell) mit einer Liebesethik als
					politischem Programm. Die Krise ist nicht die der Männlichkeit, sondern die der
					patriarchalen Männlichkeit.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Liebesethik</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/maennliche-sozialisation" class="card card-maennliche-sozialisation">
			<div class="card-icon">&#127891;</div>
			<div class="card-content">
				<h2>Männliche Sozialisation</h2>
				<p class="card-subtitle">Eine Einführung (2. Auflage)</p>
				<p>
					Lothar Böhnisch &mdash; das deutschsprachige Standardwerk der sozialpädagogisch-soziologischen
					Männerforschung. Verbindet Connells Hegemonialitätskonzept mit psychoanalytischer
					Sozialisationsforschung. Kernbegriffe: Externalisierung, Bedürftigkeit, Gespenst
					des rollenlosen Mannes, balanciertes Mann-Sein. Die akademische Grundlage, auf der
					Dittmann aufbaut.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Sozialpädagogik</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/maennerseelen" class="card card-maennerseelen">
			<div class="card-icon">&#129504;</div>
			<div class="card-content">
				<h2>Männerseelen</h2>
				<p class="card-subtitle">Ein psychologischer Reiseführer</p>
				<p>
					Björn Süfke &mdash; der klinisch-phänomenologische Spiegel zu Böhnisch. Aus über einem
					Jahrzehnt Praxis in der Männerberatung Bielefeld. Zeigt die resultierende Innenwelt
					(oder eher die abwesende Innenwelt) im Therapiezimmer. Kernbegriffe: Alexithymie,
					Umweg-Identifikation / "Nicht-Nicht-Mann", Identitätslüge, Hilflosigkeit als Kerngefühl,
					verdeckte männliche Depression (Terrence Real), der 4-Etappen-Weg und die liebevolle
					Konfrontation als therapeutische Grundmethode.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Klinische Psychologie</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/boys-dont-cry" class="card card-boys-dont-cry">
			<div class="card-icon">&#9994;</div>
			<div class="card-content">
				<h2>Boys Don't Cry</h2>
				<p class="card-subtitle">Identität, Gefühl und Männlichkeit</p>
				<p>
					Jack Urwin &mdash; das britisch-journalistische Pendant zu Süfke und Böhnisch. VICE-Autor,
					schreibt aus dem Anlass des frühen Herzinfarkt-Todes seines Vaters Richard mit 51. Aus
					seinem viralen Artikel "A Stiff Upper Lip Is Killing British Men" (2014) wurde ein Buch.
					Kernkonzepte: toxische Männlichkeit als organisierender Rahmen; Urwins analytische
					Originalleistung &mdash; die Unterscheidung zwischen <em>aktiver</em> toxischer Männlichkeit
					(Gewalt, Machismo, Risikoverhalten) und <em>passiver</em> (Schweigen, Hilfeverweigerung,
					"Stiff Upper Lip"); inter-generationales Trauma; "Das Patriarchat schadet auch den Männern"
					als strategische Rahmung.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Journalismus / UK</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/of-boys-and-men" class="card card-of-boys-and-men">
			<div class="card-icon">&#128202;</div>
			<div class="card-content">
				<h2>Of Boys and Men</h2>
				<p class="card-subtitle">Why the Modern Male is Struggling, Why It Matters, and What To Do About It</p>
				<p>
					Richard V. Reeves &mdash; die empirisch robusteste Quelle des gesamten Korpus.
					Brookings-Senior-Fellow und späterer Gründer des American Institute for Boys and Men,
					liefert explizit zentristische Analyse zwischen progressiver "toxische Männlichkeit"-Rhetorik
					und konservativer Rückkehrs-Fantasie. Kernkonzepte: <em>Brain-Timing-Gap</em>
					(präfrontaler Kortex bei Jungen ~2 Jahre später reif); <em>Girls-Rule Bildungsgap global</em>;
					<em>Autor/Wasserman Arbeitsmarkt-Abstieg</em>; <em>Nature AND Nurture</em>;
					<em>Redshirt the Boys</em>; <em>Men Can HEAL</em>; <em>Direct Dads</em>. Meta-Analysen,
					Brookings-Standard, Peer-Review-Quellen für fast jede Behauptung.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Brookings / Policy</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/notes-on-being-a-man" class="card card-notes-on-being-a-man">
			<div class="card-icon">&#127908;</div>
			<div class="card-content">
				<h2>Notes on Being a Man</h2>
				<p class="card-subtitle">How to address the masculinity crisis, build mental strength and raise good sons</p>
				<p>
					Scott Galloway &mdash; das Selbsthilfe-Memoir des Korpus. NYU-Marketingprofessor und
					Podcaster, erzählt seine Biografie (Scheidungskind, alleinerziehende Sekretärin-Mutter,
					UCLA, neun Gründungen, späte Vaterschaft) als Männlichkeitsprogramm. Kernkonzepte:
					<em>Protect/Provide/Procreate</em>; <em>Surplus Value</em> (von Reeves, &bdquo;my
					Yoda&ldquo;); <em>Addiction Economy</em>; <em>Friendship Recession</em>; Mentorship
					als &bdquo;fastest blue-line path&ldquo;. Ausdrücklich &bdquo;observations, not
					peer-reviewed academic research&ldquo; &mdash; inhaltlich weitgehend Reeves-Derivat,
					biologistischer im Ton, mit teils gravierenden Quellenmängeln (Brizendine; eine
					retracted Studie als Chart-Quelle).
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Memoir / Selbsthilfe</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/deep-secrets" class="card card-deep-secrets">
			<div class="card-icon">&#128300;</div>
			<div class="card-content">
				<h2>Deep Secrets</h2>
				<p class="card-subtitle">Boys' Friendships and the Crisis of Connection</p>
				<p>
					Niobe Way &mdash; die stärkste longitudinale ethnographische Primärquelle des gesamten Korpus.
					NYU-Professorin und Schülerin von Carol Gilligan, liefert 20+ Jahre Listening-Guide-Interviews
					mit ~135 NYC-public-school-Jungen. Kernbefund: Jungen zwischen 13-15 beschreiben ihre engsten
					männlichen Freundschaften in einer Sprache voller <em>love</em>, <em>deep</em>, <em>trust</em>,
					<em>secret</em>. Dieselben Jungen verlieren diese Freundschaften zwischen 16-18 &mdash; und Way
					dokumentiert die Transformation in Echtzeit. Mechanismus: die kulturelle Gleichsetzung emotionaler
					Intimität mit <em>gay</em>, <em>girlish</em>, oder <em>immature</em>. Direct observational upgrade
					der klinischen Mask/Boy-Code-Konvergenz.
				</p>
				<span class="card-meta">Evidenz-Audit &middot; Quellen &middot; Longitudinale Ethnographie</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<h2 class="section-title section-title-extra">Geplant &mdash; Deep-Dive ausstehend</h2>
		<p class="section-note">Weitere Literatur aus den Referenzen von <em>Jungs von heute, Männer von morgen</em>. Jedes Buch wird vor dem Deep-Dive als eBook gekauft und vollständig durchgearbeitet.</p>

		<div class="planned-grid">
			<div class="planned-card">
				<h3>Sei kein Mann (Mask Off)</h3>
				<p class="planned-author">JJ Bola</p>
				<p class="planned-desc">Warum Männlichkeit ein Albtraum für Jungs ist &mdash; kritische Analyse toxischer Normen.</p>
				<span class="planned-badge">Geplant</span>
			</div>

			<div class="planned-card">
				<h3>Söhne großziehen als Feministin</h3>
				<p class="planned-author">Shila Behjat</p>
				<p class="planned-desc">Streitgespräch mit sich selbst über die Erziehung von Söhnen in einer patriarchalen Welt.</p>
				<span class="planned-badge">Geplant</span>
			</div>

			<div class="planned-card">
				<h3>How to raise a feminist son</h3>
				<p class="planned-author">Sonora Jha</p>
				<p class="planned-desc">Praxisnahe Elternperspektive auf feministische Jungenerziehung.</p>
				<span class="planned-badge">Geplant</span>
			</div>

			<div class="planned-card">
				<h3>Erziehung prägt Gesinnung</h3>
				<p class="planned-author">Herbert Renz-Polster</p>
				<p class="planned-desc">Wie frühkindliche Erziehung politische und emotionale Haltungen formt.</p>
				<span class="planned-badge">Geplant</span>
			</div>

			<div class="planned-card">
				<h3>Starke Mädchen, starke Jungen</h3>
				<p class="planned-author">Petra Focks</p>
				<p class="planned-desc">Geschlechtergerechte Pädagogik für beide Geschlechter &mdash; Leitfaden für Kita und Schule.</p>
				<span class="planned-badge">Geplant</span>
			</div>

			<div class="planned-card">
				<h3>Kümmern und Kämpfen</h3>
				<p class="planned-author">Anne Waak</p>
				<p class="planned-desc">Neue Männlichkeiten zwischen Care-Arbeit und traditionellen Rollenbildern.</p>
				<span class="planned-badge">Geplant</span>
			</div>

			<div class="planned-card">
				<h3>Musterbruch</h3>
				<p class="planned-author">Patricia Cammarata</p>
				<p class="planned-desc">Überraschende Lösungen für wirkliche Gleichberechtigung in Familie und Beruf.</p>
				<span class="planned-badge">Geplant</span>
			</div>
		</div>

		<h2 class="section-title section-title-extra">Übergreifend</h2>

		<a href="/synthesis" class="card card-synthesis">
			<div class="card-icon">&#127793;</div>
			<div class="card-content">
				<h2>The Perfect Book</h2>
				<p>
					What would the ideal book on raising boys look like?
					Green evidence core, derived suggestions, and missing research &mdash;
					synthesized from all 8 books + external sources.
				</p>
				<span class="card-meta">Synthesis &middot; Evidence Map &middot; Research Gaps</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/outline" class="card card-outline">
			<div class="card-icon">&#128214;</div>
			<div class="card-content">
				<h2>Book Outline</h2>
				<p>
					The complete 20-chapter outline for The Perfect Book &mdash;
					myths debunked, science landscape, contradictions,
					and evidence-based interventions.
				</p>
				<span class="card-meta">Outline &middot; Myths &middot; Contradictions &middot; Chapters</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

		<a href="/read" class="card card-read">
			<div class="card-icon">&#128216;</div>
			<div class="card-content">
				<h2>Read the Book</h2>
				<p class="card-subtitle">Raising Boys &mdash; What the Science Actually Says</p>
				<p>
					The complete 20-chapter book as PDF &mdash;
					read directly in your browser or download for offline reading.
				</p>
				<span class="card-meta">PDF Reader &middot; 20 Chapters &middot; Download</span>
			</div>
			<span class="card-arrow">&rarr;</span>
		</a>

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

		<a href="/vergleiche" class="card card-compare">
			<div class="card-icon">&#9878;&#65039;</div>
			<div class="card-content">
				<h2>Buchvergleiche</h2>
				<p>
					Ausgearbeitete Paar-Gegenüberstellungen: Dimension für Dimension, fast
					deckungsgleiche Positionen vs. echte Abweichungen, mit Fazit. Bewusst selektiv
					&mdash; nur Paare, bei denen der Direktvergleich etwas Eigenes zeigt.
					Bisher: <em>Notes on Being a Man vs. Of Boys and Men</em> (das Original und
					seine Selbsthilfe-Übersetzung).
				</p>
				<span class="card-meta">1 Vergleich &middot; 7 Dimensionen &middot; Deckungsgleich vs. Divergent</span>
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

	.section-note {
		font-size: 0.82rem;
		color: #64748b;
		margin: 0 0 16px;
		line-height: 1.5;
	}
	.section-note em {
		color: #94a3b8;
		font-style: italic;
	}

	.planned-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 12px;
		margin-bottom: 8px;
	}

	.planned-card {
		position: relative;
		padding: 16px 18px 36px;
		background: rgba(30, 41, 59, 0.3);
		border-radius: 10px;
		border: 1px dashed rgba(148, 163, 184, 0.18);
		border-left: 3px solid rgba(100, 116, 139, 0.5);
	}

	.planned-card h3 {
		font-size: 0.95rem;
		font-weight: 700;
		color: #cbd5e1;
		margin: 0 0 4px;
		line-height: 1.3;
	}

	.planned-author {
		font-size: 0.75rem;
		color: #64748b;
		font-style: italic;
		margin: 0 0 8px;
	}

	.planned-desc {
		font-size: 0.78rem;
		color: #94a3b8;
		line-height: 1.45;
		margin: 0;
	}
	.planned-badge {
		position: absolute;
		bottom: 10px;
		right: 12px;
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 1.2px;
		color: #64748b;
		background: rgba(100, 116, 139, 0.12);
		padding: 2px 8px;
		border-radius: 10px;
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
	.card-pruefer { --card-color: #ec4899; }
	.card-gender { --card-color: #34d399; }
	.card-boys-adrift { --card-color: #f59e0b; }
	.card-wonder { --card-color: #06b6d4; }
	.card-pink-brain { --card-color: #ec4899; }
	.card-male-female { --card-color: #6366f1; }
	.card-warriors { --card-color: #ef4444; }
	.card-raising-cain { --card-color: #14b8a6; }
	.card-real-boys { --card-color: #fb7185; }
	.card-gemachte-mann { --card-color: #c084fc; }
	.card-will-to-change { --card-color: #f472b6; }
	.card-maennliche-sozialisation { --card-color: #fbbf24; }
	.card-maennerseelen { --card-color: #22d3ee; }
	.card-boys-dont-cry { --card-color: #818cf8; }
	.card-of-boys-and-men { --card-color: #10b981; }
	.card-notes-on-being-a-man { --card-color: #eab308; }
	.card-deep-secrets { --card-color: #f43f5e; }
	.card-synthesis { --card-color: #10b981; }
	.card-outline { --card-color: #60a5fa; }
	.card-read { --card-color: #f59e0b; }
	.card-causal { --card-color: #f472b6; }
	.card-compare { --card-color: #f59e0b; }
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
