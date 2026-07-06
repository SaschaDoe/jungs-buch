// argument-chain-data.ts
// The book's argument as a logical chain, with evidence ratings per link.

export interface ChainLink {
	id: string;
	step: number;
	type: 'premise' | 'observation' | 'causal' | 'theory' | 'consequence' | 'solution';
	claim: string;
	shortLabel: string;
	evidence: string;
	status: 'red' | 'yellow' | 'green' | 'untestable';
	explanation: string;
	dependsOn: string[]; // IDs of links this one depends on
	collapseRisk: string;
	/** Where in the book this argument appears */
	bookLocations: BookLocation[];
	/** Structured evidence sources linking to /references */
	evidenceRefs: EvidenceRef[];
}

export interface EvidenceRef {
	label: string;
	authorSearch: string; // search query for /references page
}

export interface BookLocation {
	pages: string;
	chapter: string;
	context: string;
}

/** Node positions for flowchart layout (x/y as percentages of container) */
export const nodePositions: Record<string, { x: number; y: number; row: number }> = {
	'born-same':             { x: 22, y: 4, row: 0 },
	'socialization':         { x: 62, y: 4, row: 0 },
	'boys-struggle':         { x: 22, y: 18, row: 1 },
	'boys-mask':             { x: 62, y: 18, row: 1 },
	'cause-socialization':   { x: 22, y: 32, row: 2 },
	'adults-treat-different': { x: 62, y: 32, row: 2 },
	'hegemonic':             { x: 22, y: 46, row: 3 },
	'boehnisch':             { x: 62, y: 46, row: 3 },
	'trad-masc-harms':       { x: 22, y: 60, row: 4 },
	'radicalization':        { x: 62, y: 60, row: 4 },
	'parenting-can-fix':     { x: 12, y: 76, row: 5 },
	'caring-masculinity':    { x: 42, y: 76, row: 5 },
	'male-teachers':         { x: 74, y: 76, row: 5 },
	'friendship-crisis':     { x: 22, y: 18, row: 1 },
	'testosterone-complex':  { x: 82, y: 4, row: 0 },
	'porn-consent':          { x: 82, y: 18, row: 1 },
	'housework-gap':         { x: 22, y: 32, row: 2 },
	'conflict-resolution':   { x: 82, y: 32, row: 2 },
	'tate-role-model':       { x: 82, y: 60, row: 4 },
	'body-selfcare':         { x: 42, y: 46, row: 3 },
	'care-professions':      { x: 82, y: 46, row: 3 },
	'political-gap':         { x: 42, y: 60, row: 4 },
	'housework-education':   { x: 12, y: 90, row: 6 },
};

export const rowLabels = [
	'Prämissen',
	'Beobachtungen',
	'Kausalbehauptungen',
	'Theorie',
	'Schlussfolgerungen',
	'Handlungsempfehlungen',
	'Neue Handlungsempfehlungen'
];

export const typeLabels: Record<string, { label: string; color: string }> = {
	premise: { label: 'Prämisse', color: '#6366f1' },
	observation: { label: 'Beobachtung', color: '#3b82f6' },
	causal: { label: 'Kausalbehauptung', color: '#f59e0b' },
	theory: { label: 'Theoretischer Rahmen', color: '#8b5cf6' },
	consequence: { label: 'Schlussfolgerung', color: '#ef4444' },
	solution: { label: 'Handlungsempfehlung', color: '#10b981' }
};

export const chain: ChainLink[] = [
	// ======== PRÄMISSEN ========
	{
		id: 'born-same',
		step: 1,
		type: 'premise',
		claim: 'Jungen und Mädchen werden mit nahezu identischen Gehirnen geboren. 99,8% der Gene werden geteilt. Geschlechterunterschiede im Verhalten sind fast ausschließlich sozial geformt.',
		shortLabel: 'Gehirne sind gleich',
		evidence: 'Lise Eliot (2009), "Pink Brain Blue Brain"; zitiert auf S. 60.',
		status: 'red',
		explanation:
			'Stärker dargestellt als von Eliot selbst vertreten. Sie erkennt kleine angeborene Unterschiede an. ' +
			'Die 99,8%-Zahl ist irreführend (Mensch-Schimpanse: 98,8%). Zwillingsstudien zeigen 40-60% Heritabilität ' +
			'für Persönlichkeitsmerkmale (Polderman et al., Nature Genetics 2015). Baron-Cohen (Cambridge), Hines (Cambridge) ' +
			'und der Mainstream der Neurowissenschaft sehen substanzielle biologische Komponenten. ' +
			'Der Interaktionismus (Gene × Umwelt) ist die vorherrschende Position — nicht der reine Sozialkonstruktivismus.',
		dependsOn: [],
		collapseRisk: 'Wenn Biologie doch eine substanzielle Rolle spielt, ist die Grundannahme des Buches erschüttert — dass Erziehung Geschlechterunterschiede weitgehend auflösen kann.',
		bookLocations: [
			{ pages: 'S. 60-61', chapter: 'Identität: Fragile Männlichkeit & stabile Jungen', context: '99,8% gemeinsame Gene; Lise Eliot über Neuroplastizität' },
			{ pages: 'S. 195', chapter: 'Gleichberechtigung', context: 'Eliot zitiert: Geschlechterunterschiede sind "winzig"' }
		],
		evidenceRefs: [
			{ label: 'Lise Eliot (2009)', authorSearch: 'Eliot' }
		]
	},
	{
		id: 'socialization',
		step: 2,
		type: 'premise',
		claim: 'Die Gesellschaft sozialisiert Jungen ab frühester Kindheit in einengende Männlichkeitsnormen ("Boy Code"): Emotionen unterdrücken, hart sein, nicht weinen, dominieren.',
		shortLabel: 'Boy Code / Sozialisation',
		evidence: 'Pollack (2005), "Boy Code"; Baby-X-Experiment (Katz 1975, N=18); Focks (2016).',
		status: 'red',
		explanation:
			'Pollacks "Boy Code" basiert auf qualitativen Interviews, nicht auf kontrollierten Experimenten. ' +
			'Keine unabhängige empirische Validierung. Das Baby-X-Experiment hatte N=18 und repliziert inkonsistent. ' +
			'Dass Sozialisation stattfindet ist unbestritten — aber das AUSMASS und die ALLEINIGKEIT des Einflusses ' +
			'werden hier übertrieben. Die Verhaltensgenetik zeigt: geteilte familiäre Umwelt (Erziehungsstil) ' +
			'erklärt nur ~0-10% der Persönlichkeitsvarianz bei Erwachsenen (Plomin 2018).',
		dependsOn: ['born-same'],
		collapseRisk: 'Wenn Sozialisation weniger mächtig ist als dargestellt, werden die Handlungsempfehlungen (geschlechterbewusste Erziehung) in ihrer erwarteten Wirkung stark relativiert.',
		bookLocations: [
			{ pages: 'S. 15-16', chapter: 'Einleitung', context: 'Pollacks Boy Code und CMNI-Meta-Analyse eingeführt' },
			{ pages: 'S. 51', chapter: 'Identität: Fragile Männlichkeit', context: 'Baby-X-Experiment als Beweis' },
			{ pages: 'S. 89-91', chapter: 'Pseudoresilienz & Verletzlichkeit', context: 'Pollack: Jungen werden in Normen sozialisiert' }
		],
		evidenceRefs: [
			{ label: 'William Pollack (2005)', authorSearch: 'Pollack' },
			{ label: 'Baby-X / Katz (1975)', authorSearch: 'Katz' },
			{ label: 'Petra Focks (2016)', authorSearch: 'Focks' }
		]
	},

	// ======== BEOBACHTUNGEN ========
	{
		id: 'boys-struggle',
		step: 3,
		type: 'observation',
		claim: 'Jungen haben real messbare Probleme: höhere Suizidraten (3x), mehr Schulabbrüche, mehr Drogenkonsum, 75% der Verkehrstoten, mehr Gewalt — als Täter UND Opfer.',
		shortLabel: 'Jungen haben Probleme',
		evidence: 'Destatis 2023; BKA; WHO; KiGGS-Studie (RKI).',
		status: 'green',
		explanation:
			'Amtliche Statistiken aus mehreren unabhängigen Quellen. Das Muster ist global konsistent. ' +
			'Hier gibt es keinen wissenschaftlichen Dissens — Jungen und Männer sind in diesen Bereichen ' +
			'messbar schlechter dran. Die Frage ist nicht OB, sondern WARUM.',
		dependsOn: [],
		collapseRisk: 'Kein Risiko — die Beobachtung ist unbestritten.',
		bookLocations: [
			{ pages: 'S. 71-77', chapter: 'Risikoverhalten & Selfcare', context: 'Statistiken zu Suizid, Verkehrstoten, Drogenkonsum' },
			{ pages: 'S. 5', chapter: 'Einleitung', context: 'Femizid-Statistik, häusliche Gewalt' },
			{ pages: 'S. 184-185', chapter: 'Gewalt & Radikalisierung', context: 'BKA-Daten, Amok-Statistiken' }
		],
		evidenceRefs: [
			{ label: 'Destatis (2023)', authorSearch: 'Destatis' },
			{ label: 'BKA Bundeslagebild', authorSearch: 'Bundeskriminalamt' },
			{ label: 'KiGGS / RKI', authorSearch: 'Robert Koch' }
		]
	},
	{
		id: 'boys-mask',
		step: 4,
		type: 'observation',
		claim: 'Jungen zeigen "Pseudoresilienz" — sie wirken nach außen stark und selbstbewusst, leiden aber innerlich unter Einsamkeit und emotionaler Unterdrückung.',
		shortLabel: 'Pseudoresilienz / Maske',
		evidence: 'Pollack (2005), "Listening to Boys\' Voices"; Brené Brown TED Talk.',
		status: 'red',
		explanation:
			'Pollacks "Pseudoresilienz" ist eine klinische Beobachtung, generalisiert auf alle Jungen. ' +
			'Keine systematische empirische Studie. Brown ist eine Popularisiererin, keine Primärforscherin. ' +
			'Problematisch: Das Konzept ist unfalsifizierbar — wenn ein Junge leidet bestätigt es die These, ' +
			'wenn er nicht leidet ist es "Maske". Es gibt keine Möglichkeit, die Behauptung zu widerlegen.',
		dependsOn: ['socialization'],
		collapseRisk: 'Wenn die "Masken"-These nicht stimmt, fällt das Argument weg, dass scheinbar gesunde Jungen eigentlich leiden. Das schwächt die Dringlichkeit der Handlungsempfehlungen.',
		bookLocations: [
			{ pages: 'S. 83-95', chapter: 'Pseudoresilienz & die Power der Verletzlichkeit', context: 'Pollacks Pseudoresilienz-Konzept ausführlich dargestellt' },
			{ pages: 'S. 92', chapter: 'Pseudoresilienz', context: 'Brené Brown TED Talk über Scham zitiert' }
		],
		evidenceRefs: [
			{ label: 'William Pollack (2005)', authorSearch: 'Pollack' },
			{ label: 'Brené Brown (2011)', authorSearch: 'Brown' }
		]
	},

	// ======== KAUSALBEHAUPTUNGEN ========
	{
		id: 'cause-socialization',
		step: 5,
		type: 'causal',
		claim: 'Die Probleme der Jungen (Schritt 3) werden VERURSACHT durch die Sozialisierung in toxische Männlichkeitsnormen (Schritt 2) — nicht durch Biologie.',
		shortLabel: 'Ursache = Sozialisation',
		evidence: 'Wong et al. (2017), CMNI Meta-Analyse; Böhnisch (2013); Connell (1995).',
		status: 'yellow',
		explanation:
			'Die CMNI Meta-Analyse zeigt eine Korrelation zwischen Konformität mit Männlichkeitsnormen und ' +
			'schlechterer psychischer Gesundheit — aber: (1) Effekte sind klein, (2) es ist korrelativ, nicht kausal, ' +
			'(3) die Skala vermischt schädliche Normen (Gewalt) mit neutralen (Eigenständigkeit). ' +
			'Alternative Erklärung: Biologische Faktoren (Testosteron, spätere Hirnreifung, Impulsivität) ' +
			'könnten sowohl die Probleme ALS AUCH die Normen teilweise erklären. ' +
			'Die Kausalrichtung Sozialisation → Verhalten ist nicht belegt — es könnte auch umgekehrt sein.',
		dependsOn: ['born-same', 'socialization', 'boys-struggle'],
		collapseRisk: 'ZENTRALER KNOTEN. Wenn die Kausalität nicht stimmt, bricht die gesamte Argumentationskette zusammen — denn die Lösungen setzen alle an der Sozialisation an.',
		bookLocations: [
			{ pages: 'S. 15', chapter: 'Einleitung', context: 'CMNI-Meta-Analyse: Männlichkeitsnormen → schlechtere Gesundheit' },
			{ pages: 'S. 20-22', chapter: 'Krisen & Gefühle', context: 'Böhnisch: Sozialisation → Externalisierung' },
			{ pages: 'S. 53-54', chapter: 'Identität', context: 'Fragile Männlichkeit durch gesellschaftliche Normen' },
			{ pages: 'S. 96', chapter: 'Identität', context: 'Connell: Hegemoniale Männlichkeit als Ursache' }
		],
		evidenceRefs: [
			{ label: 'Wong et al. (2017) CMNI', authorSearch: 'Wong' },
			{ label: 'Lothar Böhnisch (2013)', authorSearch: 'Böhnisch' },
			{ label: 'Raewyn Connell (1995)', authorSearch: 'Connell' }
		]
	},
	{
		id: 'adults-treat-different',
		step: 6,
		type: 'causal',
		claim: 'Erwachsene behandeln Babys unterschiedlich je nach (vermutetem) Geschlecht — bewiesen durch das Baby-X-Experiment.',
		shortLabel: 'Baby-X-Beweis',
		evidence: 'Seavy, Katz & Rosenberg (1975). N=18 Erwachsene, 1 Baby.',
		status: 'red',
		explanation:
			'N=18 Erwachsene, 1 einziges Baby. Stern & Karraker (1989) Meta-Analyse: Effekte klein und inkonsistent. ' +
			'Die Spielzeug-Wahl repliziert teilweise, die Temperaments-Zuschreibung nicht zuverlässig. ' +
			'Das Buch vermischt Befunde verschiedener Baby-X-Varianten ohne die Probleme zu erwähnen. ' +
			'Die Grundidee (Erwachsene haben Geschlechtererwartungen) ist plausibel — aber dieses Experiment ' +
			'belegt sie nicht so sauber wie dargestellt.',
		dependsOn: ['born-same'],
		collapseRisk: 'Der "Beweis" für die Sozialisierungsthese in der frühesten Kindheit ist schwächer als dargestellt.',
		bookLocations: [
			{ pages: 'S. 51', chapter: 'Identität: Fragile Männlichkeit', context: 'Baby-X-Experiment ausführlich beschrieben' },
			{ pages: 'S. 44', chapter: 'Krisen & Gefühle', context: 'Katz-Studie über Elternverhalten und Stereotypen' }
		],
		evidenceRefs: [
			{ label: 'Baby-X / Katz (1975)', authorSearch: 'Katz' }
		]
	},

	// ======== THEORETISCHE RAHMEN ========
	{
		id: 'hegemonic',
		step: 7,
		type: 'theory',
		claim: 'Männlichkeit ist hierarchisch organisiert. Die "hegemoniale Männlichkeit" unterdrückt Frauen UND andere Männlichkeiten. Männer sind gleichzeitig Profiteure und Opfer.',
		shortLabel: 'Hegemoniale Männlichkeit',
		evidence: 'Connell (1995/2015), "Der gemachte Mann".',
		status: 'untestable',
		explanation:
			'Das meistzitierte Konzept der Männlichkeitsforschung. Aber: Es ist eine soziologische Typologie, ' +
			'keine empirisch testbare Hypothese. Man kann nicht messen, ob "hegemoniale Männlichkeit" existiert ' +
			'oder nicht — jedes Verhalten lässt sich post hoc in das Schema einordnen. ' +
			'Kritiker (Demetriou, Collier) bemängeln die Vagheit und den anti-normativen Bias.',
		dependsOn: [],
		collapseRisk: 'Da nicht testbar, kann es auch nicht widerlegt werden — aber es kann auch nichts konkret vorhersagen.',
		bookLocations: [
			{ pages: 'S. 96', chapter: 'Identität', context: 'Connells vier Männlichkeitspositionen vorgestellt' },
			{ pages: 'S. 206', chapter: 'Gleichberechtigung', context: '"Gespenst des rollenlosen Mannes" (Böhnisch via Connell)' }
		],
		evidenceRefs: [
			{ label: 'Raewyn Connell (1995)', authorSearch: 'Connell' }
		]
	},
	{
		id: 'boehnisch',
		step: 8,
		type: 'theory',
		claim: 'Jungen externalisieren weil sie "am Markt funktionieren" müssen. Hilflosigkeit erfahren sie als "soziale Impotenz". Die Bewältigungsstrategien: Schweigen, Rationalisieren, Kontrolle, Gewalt.',
		shortLabel: 'Böhnischs Externalisierung',
		evidence: 'Böhnisch (2013), "Männliche Sozialisation".',
		status: 'untestable',
		explanation:
			'Soziologische Theorie basierend auf Bourdieu und Stresstheorie. Die Kausalkette ist nicht ' +
			'empirisch testbar. Warum externalisieren Jungen in ALLEN Kulturen mehr — auch in solchen ' +
			'mit sehr verschiedenen "Markt"-Strukturen? Biologische Erklärungen (Testosteron, Impulsivität) ' +
			'werden nicht berücksichtigt.',
		dependsOn: ['hegemonic'],
		collapseRisk: 'Wenn Externalisierung teilweise biologisch ist, greift die rein soziologische Erklärung zu kurz.',
		bookLocations: [
			{ pages: 'S. 20-22', chapter: 'Krisen & Gefühle', context: 'Böhnischs Theorie: Externalisierung als männliche Bewältigung' },
			{ pages: 'S. 34-35', chapter: 'Krisen & Gefühle', context: 'Jungen in Krisen: Schweigen, Rationalisieren, Kontrolle' }
		],
		evidenceRefs: [
			{ label: 'Lothar Böhnisch (2013)', authorSearch: 'Böhnisch' }
		]
	},

	// ======== SCHLUSSFOLGERUNGEN ========
	{
		id: 'trad-masc-harms',
		step: 9,
		type: 'consequence',
		claim: 'Traditionelle Männlichkeitsnormen SCHADEN Jungen messbar: schlechtere psychische Gesundheit, höheres Suizidrisiko, weniger Hilfe-Suchen.',
		shortLabel: 'Männlichkeit schadet',
		evidence: 'Wong et al. (2017), CMNI; APA Richtlinien 2018.',
		status: 'yellow',
		explanation:
			'Die Korrelation ist real, aber: (1) Effekte sind klein (CMNI). (2) Korrelation ≠ Kausalität. ' +
			'(3) Die APA-Richtlinien 2018 lösten massive Kontroverse aus — >100 Psychologen protestierten. ' +
			'(4) Die CMNI-Skala vermischt schädliche Normen mit neutralen. ' +
			'Seager & Barry (2019) argumentieren: Manche "traditionelle" Merkmale (Stoizismus, Selbstdisziplin) ' +
			'sind SCHUTZFAKTOREN, nicht Risikofaktoren.',
		dependsOn: ['cause-socialization', 'boys-struggle'],
		collapseRisk: 'Wenn auch traditionelle Männlichkeit Schutzfaktoren enthält, ist die pauschale Pathologisierung kontraproduktiv.',
		bookLocations: [
			{ pages: 'S. 15', chapter: 'Einleitung', context: 'CMNI: Traditionelle Normen korrelieren mit schlechterer Gesundheit' },
			{ pages: 'S. 77', chapter: 'Risikoverhalten & Selfcare', context: 'Suizidstatistiken als Folge von Männlichkeitsnormen' },
			{ pages: 'S. 207-208', chapter: 'Gleichberechtigung', context: 'Höcke-Zitat über "Männlichkeit wiederentdecken" als Negativbeispiel' }
		],
		evidenceRefs: [
			{ label: 'Wong et al. (2017) CMNI', authorSearch: 'Wong' },
			{ label: 'APA Richtlinien (2018)', authorSearch: 'APA' }
		]
	},
	{
		id: 'radicalization',
		step: 10,
		type: 'consequence',
		claim: 'Die Krise der Männlichkeit treibt Jungen in die Radikalisierung: Manosphere, Incels, Andrew Tate, Rechtsextremismus.',
		shortLabel: 'Radikalisierung',
		evidence: 'Regehr/DCU (2024), TikTok-Studie; BKA; Bonnenberg.',
		status: 'green',
		explanation:
			'Die TikTok-Algorithmus-Studie ist methodisch solide. BKA-Statistiken sind belastbar. ' +
			'Dass junge Männer überproportional in Online-Radikalisierung geraten ist gut dokumentiert. ' +
			'ABER: Die Kausalrichtung (Männlichkeitskrise → Radikalisierung) vs. (strukturelle Probleme → ' +
			'Radikalisierung) ist nicht geklärt. Reeves (Brookings) sieht eher strukturelle Ursachen ' +
			'(Bildungsabstieg, Jobverlust) als primäre Treiber.',
		dependsOn: ['boys-struggle'],
		collapseRisk: 'Gering — das Phänomen existiert unabhängig von der Ursachendeutung.',
		bookLocations: [
			{ pages: 'S. 182-191', chapter: 'Gewalt & Radikalisierung', context: 'TikTok-Algorithmen, Andrew Tate, Incel-Ideologie' },
			{ pages: 'S. 183-184', chapter: 'Gewalt & Radikalisierung', context: 'Amokforschung: 95% der Täter männlich' },
			{ pages: 'S. 186-187', chapter: 'Gewalt & Radikalisierung', context: 'Regehr DCU-Studie zu TikTok-Misogynie' }
		],
		evidenceRefs: [
			{ label: 'Kaitlyn Regehr / DCU (2024)', authorSearch: 'Regehr' },
			{ label: 'BKA Bundeslagebild', authorSearch: 'Bundeskriminalamt' },
			{ label: 'Britta Bonnenberg', authorSearch: 'Bonnenberg' }
		]
	},

	// ======== LÖSUNGEN ========
	{
		id: 'parenting-can-fix',
		step: 11,
		type: 'solution',
		claim: 'Geschlechterbewusste Erziehung kann die Probleme lösen: Stereotypen aufbrechen, Emotionen erlauben, Fürsorge vorleben.',
		shortLabel: 'Erziehung als Lösung',
		evidence: 'Focks (2016); Katz (1996); Renz-Polster (2020).',
		status: 'yellow',
		explanation:
			'Hier kollidiert das Buch mit der Verhaltensgenetik: Turkheimer, Plomin und Harris zeigen, ' +
			'dass "shared environment" (= Erziehungsstil der Eltern) nur ~0-10% der Persönlichkeitsvarianz ' +
			'bei Erwachsenen erklärt. Peers und Gene erklären den Rest. ' +
			'Das bedeutet NICHT, dass Erziehung wirkungslos ist — aber die Erwartung, dass ' +
			'geschlechterbewusste Erziehung Geschlechterunterschiede grundlegend auflöst, ist durch die ' +
			'Verhaltensgenetik stark relativiert. Katz (1996) zeigt korrekt, dass Elternverhalten ' +
			'Stereotypen beeinflusst — aber Stereotypen ≠ fundamentale Verhaltensunterschiede.',
		dependsOn: ['born-same', 'cause-socialization'],
		collapseRisk: 'ZENTRALER KNOTEN. Wenn Erziehung weniger Einfluss hat als Gene und Peers, ist die Kernbotschaft des Buches ("So erziehen wir Jungen anders") in ihrer Wirksamkeit begrenzt.',
		bookLocations: [
			{ pages: 'S. 44', chapter: 'Krisen & Gefühle', context: 'Katz: Elternverhalten beeinflusst Stereotypen' },
			{ pages: 'S. 56-68', chapter: 'Das hier ist nichts für Jungen', context: 'Spielzeug, Kleidung, geschlechterbewusste Angebote' },
			{ pages: 'S. 205', chapter: 'Gleichberechtigung', context: 'Focks: Geschlechterbewusste Pädagogik als Lösung' }
		],
		evidenceRefs: [
			{ label: 'Petra Focks (2016)', authorSearch: 'Focks' },
			{ label: 'Phyllis Katz (1996)', authorSearch: 'Katz' },
			{ label: 'Herbert Renz-Polster (2020)', authorSearch: 'Renz-Polster' }
		]
	},
	{
		id: 'caring-masculinity',
		step: 12,
		type: 'solution',
		claim: 'Das Ziel: "Caring Masculinities" — Männlichkeit, die Dominanz ablehnt und Fürsorge als Identitätskern annimmt.',
		shortLabel: 'Caring Masculinities',
		evidence: 'Elliott (2016); ECaRoM; Maihofer (2019).',
		status: 'untestable',
		explanation:
			'Ein normatives Rahmenwerk, keine empirisch testbare Hypothese. Man kann nicht "testen" ' +
			'ob Caring Masculinities "funktionieren", weil es ein Wertvorschlag ist. ' +
			'Die Frage ist nicht ob es gut KLINGT, sondern ob die Kausalkette dahin (Schritte 1-11) hält. ' +
			'Wenn die Prämissen (Schritte 1-2) und die Kausalbehauptung (Schritt 5) wackeln, ' +
			'steht auch das Ziel auf unsicherem Fundament.',
		dependsOn: ['cause-socialization', 'parenting-can-fix', 'trad-masc-harms'],
		collapseRisk: 'Als Wertvorschlag kann es nicht "kollabieren" — aber als Ergebnis einer Argumentationskette hängt es von der Stärke aller vorherigen Glieder ab.',
		bookLocations: [
			{ pages: 'S. 7', chapter: 'Einleitung', context: 'Caring Masculinities als Leitkonzept eingeführt' },
			{ pages: 'S. 162-163', chapter: 'Fürsorge', context: 'ECaRoM-Projekt und Elliott zitiert' },
			{ pages: 'S. 304-306', chapter: 'Einleitung', context: 'Fürsorge als Kernkompetenz definiert' }
		],
		evidenceRefs: [
			{ label: 'Karla Elliott (2016)', authorSearch: 'Elliott' },
			{ label: 'Andrea Maihofer (2019)', authorSearch: 'Maihofer' }
		]
	},
	{
		id: 'male-teachers',
		step: 13,
		type: 'solution',
		claim: 'Mehr männliche Erzieher und Lehrer als Vorbilder. Emotionsbildung in Schulen. Medienkompetenzvermittlung.',
		shortLabel: 'Strukturelle Maßnahmen',
		evidence: 'BMFSFJ Studien; Destatis; DCU TikTok-Studie; Harvard Study.',
		status: 'green',
		explanation:
			'Hier steht das Buch auf solidem Boden. Dass männliche Vorbilder in Kitas unterrepräsentiert sind, ' +
			'ist Fakt. Dass Medienkompetenz wichtig ist, zeigt die DCU-Studie. Dass Beziehungsqualität ' +
			'der wichtigste Schutzfaktor ist, belegt die Harvard-Studie. ' +
			'Diese Maßnahmen funktionieren unabhängig davon, ob die Prämissen des Buches stimmen — ' +
			'sie sind "no-regret"-Maßnahmen, die auch aus einer biologisch-interaktionistischen Perspektive ' +
			'sinnvoll wären.',
		dependsOn: ['boys-struggle'],
		collapseRisk: 'Gering — diese Empfehlungen sind evidenzbasiert und ideologisch unabhängig.',
		bookLocations: [
			{ pages: 'S. 36-49', chapter: 'Wanted: Männliche Vorbilder', context: 'Mangel an männlichen Erziehern diskutiert' },
			{ pages: 'S. 143-144', chapter: 'Fürsorge', context: 'Harvard-Studie: Beziehungsqualität als Schutzfaktor' },
			{ pages: 'S. 172-175', chapter: 'Gewalt & Medien', context: 'Medienkompetenz-Vermittlung in Schulen' },
			{ pages: 'S. 221', chapter: 'Gleichberechtigung', context: 're:publica 2024: Horbach über Schule neu denken' }
		],
		evidenceRefs: [
			{ label: 'BMFSFJ Studien', authorSearch: 'BMFSFJ' },
			{ label: 'DCU TikTok-Studie', authorSearch: 'Regehr' },
			{ label: 'Harvard Study', authorSearch: 'Harvard' }
		]
	},

	// ======== NEUE BEOBACHTUNGEN (fehlende Kapitel) ========
	{
		id: 'friendship-crisis',
		step: 14,
		type: 'observation',
		claim: 'Jungen beschreiben mit 13-14 tiefe, liebevolle Freundschaften — die mit 17 sterben. 15% der Männer haben keinen einzigen engen Freund (1990: nur 3%).',
		shortLabel: 'Freundschaftskrise',
		evidence: 'Way (2011), "Deep Secrets"; Survey of American Life.',
		status: 'green',
		explanation:
			'Ways Längsschnittstudie ist methodisch solide und die Freundschaftsrezession wird durch ' +
			'multiple repräsentative Umfragen bestätigt. Der Befund ist robust und kulturübergreifend dokumentiert.',
		dependsOn: ['socialization', 'boys-mask'],
		collapseRisk: 'Gering — die Daten sind robust. Die Kausaldeutung (Boy Culture als Ursache) ist diskutierbarer als der Befund selbst.',
		bookLocations: [
			{ pages: 'S. 101-110', chapter: 'Platonische Liebe: Zwischen Bros und Friendship-Goals', context: 'Niobe Way: Jungenfreundschaften sterben in der Adoleszenz' }
		],
		evidenceRefs: [
			{ label: 'Niobe Way (2011)', authorSearch: 'Way' }
		]
	},
	{
		id: 'testosterone-complex',
		step: 15,
		type: 'observation',
		claim: 'Testosteron verursacht NICHT automatisch Aggression. Reimers-Studie: T kann kooperatives Verhalten fördern. Vor der Pubertät sind T-Werte bei Jungen und Mädchen gleich.',
		shortLabel: 'Testosteron ist komplex',
		evidence: 'Reimers (2019), Hamburg-Studie; Interview Gatinho.',
		status: 'yellow',
		explanation:
			'Die Reimers-Studie ist eine Einzelstudie, aber konsistent mit der breiteren Endokrinologie-Forschung, ' +
			'die zeigt, dass T sozialen Kontext verstärkt (nicht nur Aggression). ' +
			'Die Gleichheit der T-Werte vor der Pubertät ist medizinischer Standard.',
		dependsOn: [],
		collapseRisk: 'Gering — korrigiert eine Übervereinfahcung. Allerdings ist die Reimers-Studie selbst nicht repliziert.',
		bookLocations: [
			{ pages: 'S. 73-74', chapter: 'Risikoverhalten & Selfcare', context: 'Gatinho-Interview: T vor Pubertät gleich; Reimers-Studie' }
		],
		evidenceRefs: [
			{ label: 'Luise Reimers (2019)', authorSearch: 'Reimers' }
		]
	},
	{
		id: 'porn-consent',
		step: 16,
		type: 'observation',
		claim: 'Erste Pornografie-Exposition liegt bei 12-15 Jahren, oft unfreiwillig (durch Peers geteilt). Porn dient Jungen als soziale Währung mehr als als sexueller Stimulus. Konsens-Bildung fehlt.',
		shortLabel: 'Porn & fehlende Konsensbildung',
		evidence: 'BZgA Jugendsexualität 9. Welle; Oeming (Interview); Zidi (Interview).',
		status: 'yellow',
		explanation:
			'BZgA-Daten sind repräsentativ. Die "soziale Währung"-These stammt aus Interviews, nicht aus ' +
			'quantitativer Forschung. Das "Drei-Ampeln-Modell" (Zidi) ist ein pädagogisches Werkzeug, keine empirisch validierte Methode.',
		dependsOn: ['boys-struggle'],
		collapseRisk: 'Gering — der Befund über frühe Exposition ist robust. Die pädagogischen Modelle sind normativ, nicht testbar.',
		bookLocations: [
			{ pages: 'S. 113-128', chapter: 'Porn & Konsens', context: 'Pornografie als soziale Währung unter Jungen; Drei-Ampeln-Modell' }
		],
		evidenceRefs: [
			{ label: 'BZgA Jugendsexualität', authorSearch: 'BZgA' },
			{ label: 'Madita Oeming', authorSearch: 'Oeming' }
		]
	},
	{
		id: 'housework-gap',
		step: 17,
		type: 'observation',
		claim: 'Der Gender Care Gap bei Kindern (10-17) beträgt ~41,5% und hat sich seit 2012 kaum verändert. Jungen machen WENIGER Hausarbeit als vor zehn Jahren.',
		shortLabel: 'Care Gap bei Kindern',
		evidence: 'Destatis Zeitverwendungsstudie (2022); BusyKid App-Daten.',
		status: 'green',
		explanation:
			'Amtliche Statistik des Statistischen Bundesamts, repräsentative Stichprobe. ' +
			'Der Befund ist robust. BusyKid-Daten sind ergänzend (Convenience-Stichprobe), bestätigen aber das Muster.',
		dependsOn: ['socialization'],
		collapseRisk: 'Gering — amtliche Statistik.',
		bookLocations: [
			{ pages: 'S. 135-142', chapter: 'Hausarbeit: Wie wir Jungen motivieren', context: 'Zeitverwendungsstudie: Jungen-Mädchen Care Gap' }
		],
		evidenceRefs: [
			{ label: 'Destatis Zeitverwendungsstudie (2022)', authorSearch: 'Destatis' }
		]
	},
	{
		id: 'conflict-resolution',
		step: 18,
		type: 'observation',
		claim: 'Japanische Eltern nehmen an, Kinder seien zu jung um es besser zu wissen. Deutsche Eltern nehmen feindliche Absicht an — was zu mehr Aggression führt.',
		shortLabel: 'Kulturelle Konflikterziehung',
		evidence: 'Trommsdorff & Kornadt, kulturvergleichende Studie.',
		status: 'yellow',
		explanation:
			'Etablierte kulturvergleichende Forschung, aber die Kausalrichtung (Eltern-Attribution → Kinder-Aggression) ' +
			'ist eine Vereinfachung. Kulturelle Unterschiede in Aggression haben auch genetische und gesellschaftliche Komponenten.',
		dependsOn: ['socialization'],
		collapseRisk: 'Mittel — der kulturelle Unterschied ist real, aber die monokausale Erklärung über Elternverhalten ist zu einfach.',
		bookLocations: [
			{ pages: 'S. 153-154', chapter: 'Nähe-Dominanz-Konflikt', context: 'Japanische vs. deutsche Eltern: Intentionszuschreibung' }
		],
		evidenceRefs: [
			{ label: 'Trommsdorff & Kornadt', authorSearch: 'Trommsdorff' }
		]
	},
	{
		id: 'tate-role-model',
		step: 19,
		type: 'observation',
		claim: 'Jeder 5. Junge (9-16) sieht Andrew Tate als gutes Vorbild. Jeder 2. junge Vater (25-34) stimmt zu. TikTok serviert männlichen Teenager-Profilen innerhalb von 9 Minuten antifeministischen Content.',
		shortLabel: 'Tate & Algorithmen',
		evidence: 'Umfragedaten; DCU-Studie (2024).',
		status: 'green',
		explanation:
			'Die DCU-Studie ist methodisch solide (experimentelles Design mit Dummy-Accounts). ' +
			'Die Tate-Umfragedaten sind weniger klar in ihrer Methodik, aber konsistent mit anderen Erhebungen zur Reichweite.',
		dependsOn: ['radicalization'],
		collapseRisk: 'Gering — die Verbreitung ist gut dokumentiert.',
		bookLocations: [
			{ pages: 'S. 41-42', chapter: 'Wanted: Männliche Vorbilder', context: 'Andrew Tate als Vorbild für Jungen' },
			{ pages: 'S. 186-187', chapter: 'Minecraft, TikTok & Killerspiele', context: 'DCU-Studie: TikTok-Algorithmus' }
		],
		evidenceRefs: [
			{ label: 'DCU Antibullying Centre (2024)', authorSearch: 'Regehr' }
		]
	},
	{
		id: 'body-selfcare',
		step: 20,
		type: 'observation',
		claim: 'Männer vermeiden Vorsorge und Selbstfürsorge systematisch. Der Einstieg über Körperpflege-Routinen (Hautpflege) kann Zugang zu breiterer Selbstfürsorge schaffen.',
		shortLabel: 'Körper & Selbstfürsorge',
		evidence: 'Statistiken zur Gesundheitsvorsorge; Interview Maher.',
		status: 'yellow',
		explanation:
			'Dass Männer Vorsorge meiden ist statistisch belegt (RKI, KiGGS). Die Hautpflege-als-Einstieg-These ' +
			'stammt aus klinischer Erfahrung (Maher), nicht aus kontrollierter Forschung.',
		dependsOn: ['boys-mask'],
		collapseRisk: 'Gering — der Befund über Vorsorge-Meidung ist robust. Die pädagogische Empfehlung ist plausibel, aber nicht empirisch getestet.',
		bookLocations: [
			{ pages: 'S. 78-80', chapter: 'Risikoverhalten & Selfcare', context: 'Selfcare-Routinen als Zugang; Interview Maher' }
		],
		evidenceRefs: [
			{ label: 'RKI / KiGGS', authorSearch: 'Robert Koch' }
		]
	},
	{
		id: 'care-professions',
		step: 21,
		type: 'observation',
		claim: '65% der Jugendlichen interessieren sich für soziale Berufe, aber der Männeranteil liegt nur bei ~20%. Väter bremsen stärker als Mütter.',
		shortLabel: 'Care-Berufe meiden',
		evidence: 'Men in Care Studie (BMFSFJ 2024).',
		status: 'green',
		explanation:
			'Regierungsbeauftragte repräsentative Studie. Der Befund über die Väter-Bremse ist neu und wichtig.',
		dependsOn: ['socialization', 'trad-masc-harms'],
		collapseRisk: 'Gering — amtliche Studie.',
		bookLocations: [
			{ pages: 'S. 209-210', chapter: 'Ehrenmann, Ehrenamt, Lehramt', context: 'Men in Care Studie über Berufswahl' }
		],
		evidenceRefs: [
			{ label: 'BMFSFJ Men in Care (2024)', authorSearch: 'BMFSFJ' }
		]
	},
	{
		id: 'political-gap',
		step: 22,
		type: 'consequence',
		claim: 'Junge Männer wählen zunehmend rechts, junge Frauen zunehmend progressiv — ein wachsender politischer Gender Gap in allen Demokratien.',
		shortLabel: 'Politischer Gender Gap',
		evidence: 'Financial Times Analyse; europäische Wahldaten.',
		status: 'green',
		explanation:
			'Querschnittliche Wahldatenanalyse über mehrere Demokratien hinweg. Konsistentes Muster in Europa, USA und Asien.',
		dependsOn: ['radicalization', 'boys-struggle'],
		collapseRisk: 'Gering — die Daten sind robust. Die Ursachendeutung ist umstrittener als der Befund.',
		bookLocations: [
			{ pages: 'S. 213-214', chapter: 'Ehrenmann, Ehrenamt, Lehramt', context: 'Gender Gap bei Europawahlen, AfD-TikTok-Strategie' }
		],
		evidenceRefs: [
			{ label: 'Financial Times Analyse', authorSearch: 'Financial Times' }
		]
	},

	// ======== NEUE HANDLUNGSEMPFEHLUNGEN ========
	{
		id: 'housework-education',
		step: 23,
		type: 'solution',
		claim: 'Hausarbeit ab dem Kleinkindalter einführen: Spielküchen, Kinderbesen, Söhne gezielt an "weibliche" Aufgaben heranführen. Familienputzplan erstellen.',
		shortLabel: 'Hausarbeit erziehen',
		evidence: 'Cammarata (Interview); Harvard 80-Jahres-Studie (Beziehungen = Gesundheit).',
		status: 'yellow',
		explanation:
			'Die Harvard-Studie belegt den Wert von Beziehungsfähigkeit. Die konkreten pädagogischen ' +
			'Empfehlungen (Spielküche, Kinderbesen) basieren auf Experten-Meinung, nicht auf RCTs.',
		dependsOn: ['housework-gap', 'caring-masculinity'],
		collapseRisk: 'Gering — die Empfehlungen sind "no-regret"-Maßnahmen.',
		bookLocations: [
			{ pages: 'S. 140-142', chapter: 'Hausarbeit', context: 'Cammarata: Hausarbeit ab Kleinkindalter; Familienputzplan' }
		],
		evidenceRefs: [
			{ label: 'Patricia Cammarata', authorSearch: 'Cammarata' },
			{ label: 'Harvard Study', authorSearch: 'Harvard' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" — the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	// Start from 'caring-masculinity' and trace back through weakest dependencies
	const target = chain.find((c) => c.id === 'caring-masculinity')!;
	const path: ChainLink[] = [target];

	function findWeakestDep(link: ChainLink): ChainLink | null {
		if (link.dependsOn.length === 0) return null;
		const deps = link.dependsOn.map((id) => chain.find((c) => c.id === id)!);
		// Sort: red > yellow > untestable > green
		const order = { red: 0, yellow: 1, untestable: 2, green: 3 };
		deps.sort((a, b) => order[a.status] - order[b.status]);
		return deps[0];
	}

	let current = target;
	while (true) {
		const weakest = findWeakestDep(current);
		if (!weakest || path.includes(weakest)) break;
		path.unshift(weakest);
		current = weakest;
	}
	return path;
}

export const chainSummary = {
	totalLinks: chain.length,
	red: chain.filter((c) => c.status === 'red').length,
	yellow: chain.filter((c) => c.status === 'yellow').length,
	green: chain.filter((c) => c.status === 'green').length,
	untestable: chain.filter((c) => c.status === 'untestable').length,
	verdict:
		'Die erweiterte Argumentationskette zeigt: Das Buch hat neben den bekannten Schwachstellen (Prämissen 1-2, Kausalbehauptung 5) ' +
		'eine Reihe empirisch gut belegter Beobachtungen: Freundschaftskrise (Way), Care Gap bei Kindern (Destatis), ' +
		'Radikalisierung/Tate-Phänomen (DCU), Care-Berufe-Meidung (BMFSFJ), politischer Gender Gap. ' +
		'Die zwei kritischen Schwachstellen bleiben: (1) Die Prämisse "Gehirne sind gleich" und (2) die Kausalbehauptung ' +
		'"Sozialisation verursacht die Probleme". Die strukturellen Maßnahmen (Schritte 13, 21, 23) sind unabhängig von den Prämissen sinnvoll.'
};
