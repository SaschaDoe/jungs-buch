// research-fields-data.ts
// Meta-analysis of research fields behind "Jungs von heute, Männer von morgen"
// Maps out schools of thought, mainstream vs. contested positions,
// and links to authors cited in the book.

export interface ResearchField {
	id: string;
	name: string;
	germanName: string;
	color: string;
	icon: string;
	description: string;
	coreQuestion: string;
	groups: SchoolOfThought[];
	/** Authors from the book who work in this field */
	citedAuthors: string[];
}

export interface SchoolOfThought {
	id: string;
	name: string;
	position: string;
	status: 'mainstream' | 'dominant' | 'contested' | 'minority' | 'emerging' | 'fringe';
	/** How widely accepted is this position? */
	statusExplanation: string;
	keyProponents: Proponent[];
	keyArguments: string[];
	/** Notable critics and their arguments */
	critics?: Critic[];
	/** Which authors cited in the book belong to this school? */
	citedInBook: string[];
	/** Is this the position the book adopts? */
	bookPosition: boolean;
}

export interface Proponent {
	name: string;
	affiliation?: string;
	keyWork?: string;
	inBook: boolean;
}

export interface Critic {
	name: string;
	argument: string;
	affiliation?: string;
	standing: 'hochangesehen' | 'angesehen' | 'umstritten' | 'aussenseiter';
}

export const statusLabels: Record<string, { label: string; color: string; description: string }> = {
	mainstream: {
		label: 'Mainstream-Konsens',
		color: '#10b981',
		description: 'Breite Übereinstimmung in der Fachwelt, belegt durch Meta-Analysen und Replikationsstudien'
	},
	dominant: {
		label: 'Dominante Position',
		color: '#3b82f6',
		description: 'Vorherrschend in der Fachliteratur, aber mit substanziellen Gegenpositionen'
	},
	contested: {
		label: 'Wissenschaftlich umstritten',
		color: '#f59e0b',
		description: 'Aktive Debatte zwischen ungefähr gleichstarken Lagern'
	},
	minority: {
		label: 'Minderheitsposition',
		color: '#f97316',
		description: 'Von einer relevanten Minderheit verteten, nicht Mainstream'
	},
	emerging: {
		label: 'Aufkommend',
		color: '#8b5cf6',
		description: 'Relativ neues Forschungsfeld, Konsens bildet sich noch'
	},
	fringe: {
		label: 'Randposition',
		color: '#ef4444',
		description: 'Von der breiten Fachwelt nicht geteilt'
	}
};

// ============================================================
// RESEARCH FIELDS
// ============================================================

export const researchFields: ResearchField[] = [

	// =============================================
	// 1. NEUROWISSENSCHAFT DER GESCHLECHTERUNTERSCHIEDE
	// =============================================
	{
		id: 'neuroscience',
		name: 'Neuroscience of Sex Differences',
		germanName: 'Neurowissenschaft der Geschlechterunterschiede',
		color: '#06b6d4',
		icon: '🧠',
		description:
			'Untersucht, ob und wie sich Gehirne von Männern und Frauen biologisch unterscheiden, ' +
			'und welche Rolle diese Unterschiede für Verhalten, Kognition und Emotionen spielen.',
		coreQuestion: 'Sind Geschlechterunterschiede im Verhalten biologisch vorprogrammiert oder sozial konstruiert?',
		citedAuthors: ['Eliot, Lise'],
		groups: [
			{
				id: 'neuro-minimal',
				name: 'Neuroplastizitäts-Position ("Gender Similarities")',
				position:
					'Gehirne von Männern und Frauen sind weit ähnlicher als verschieden. ' +
					'Beobachtete Unterschiede sind größtenteils klein, durch Überlappung geprägt, und ' +
					'stark von Umwelt und Sozialisation beeinflusst. Neuroplastizität formt das Gehirn ' +
					'durch Erfahrung — vermeintlich "angeborene" Unterschiede sind oft erlernt.',
				status: 'dominant',
				statusExplanation:
					'Die "Gender Similarities Hypothesis" (Hyde 2005) wird durch große Meta-Analysen gestützt, ' +
					'die zeigen, dass >75% der psychologischen Geschlechterunterschiede klein oder trivial sind (d < 0.35). ' +
					'Die Position hat die Mehrheit der Entwicklungspsycholog:innen auf ihrer Seite, ' +
					'aber es gibt substanzielle Gegenargumente aus der Evolutionspsychologie und Endokrinologie.',
				keyProponents: [
					{ name: 'Lise Eliot', affiliation: 'Chicago Medical School', keyWork: 'Pink Brain, Blue Brain (2009)', inBook: true },
					{ name: 'Janet S. Hyde', affiliation: 'University of Wisconsin', keyWork: 'Gender Similarities Hypothesis (2005)', inBook: false },
					{ name: 'Cordelia Fine', affiliation: 'University of Melbourne', keyWork: 'Delusions of Gender (2010)', inBook: false },
					{ name: 'Gina Rippon', affiliation: 'Aston University', keyWork: 'The Gendered Brain (2019)', inBook: false },
					{ name: 'Daphna Joel', affiliation: 'Tel Aviv University', keyWork: 'Mosaic-Brain-Studie (2015)', inBook: false }
				],
				keyArguments: [
					'Meta-Analysen (Hyde 2005, 2014) zeigen: 75%+ der Geschlechterunterschiede sind d < 0.35',
					'Joel et al. (2015): Gehirne sind "Mosaike" — kein typisch männliches oder weibliches Gehirn',
					'Kulturvergleiche zeigen: Unterschiede variieren enorm je nach Gesellschaft',
					'Stereotype-Threat-Effekte erklären einen Großteil der Leistungsunterschiede',
					'Neuroplastizität bedeutet: Erfahrung formt Gehirn, nicht umgekehrt'
				],
				critics: [
					{
						name: 'Simon Baron-Cohen',
						argument: 'Systematisieren/Empathisieren-Theorie: Geschlechterunterschiede in Kognitionsstilen sind teilweise biologisch, gestützt durch pränatales Testosteron und Studien an Neugeborenen',
						affiliation: 'Cambridge University',
						standing: 'hochangesehen'
					},
					{
						name: 'Steven Pinker',
						argument: 'Biologische Geschlechterunterschiede existieren real, auch wenn sie klein sind. Die "Blank Slate"-Annahme ist wissenschaftlich nicht haltbar.',
						affiliation: 'Harvard University',
						standing: 'hochangesehen'
					},
					{
						name: 'Marco Del Giudice',
						argument: 'Meta-Analysen unterschätzen Geschlechterunterschiede systematisch durch Aggregation. Multivariate Analysen zeigen große Unterschiede (D = 2.7).',
						affiliation: 'University of New Mexico',
						standing: 'angesehen'
					},
					{
						name: 'Larry Cahill',
						argument: 'Neuroscience-Reviews zeigen konsistente Geschlechterunterschiede in Gehirnstruktur, Konnektivität und Stressreaktion. Diese zu leugnen schadet der Medizin.',
						affiliation: 'UC Irvine',
						standing: 'angesehen'
					}
				],
				citedInBook: ['Eliot, Lise'],
				bookPosition: true
			},
			{
				id: 'neuro-biological',
				name: 'Biologische Differenz-Position',
				position:
					'Es gibt reale, messbare neurologische Geschlechterunterschiede, die teilweise ' +
					'durch pränatales Testosteron, Genetik und Evolution bedingt sind. Diese beeinflussen ' +
					'Kognitionsstile, Risikobereitschaft, räumliches Denken und soziale Kognition.',
				status: 'contested',
				statusExplanation:
					'Wird von angesehenen Forschern wie Baron-Cohen (Cambridge) und Pinker (Harvard) vertreten. ' +
					'Gestützt durch Hormonstudien (CAH-Studien, Neugeborenen-Studien), aber die Effektstärken ' +
					'und deren Bedeutung für Erziehung sind umstritten. Kein "Fringe" — ernst zu nehmen.',
				keyProponents: [
					{ name: 'Simon Baron-Cohen', affiliation: 'Cambridge University', keyWork: 'The Essential Difference (2003)', inBook: false },
					{ name: 'Steven Pinker', affiliation: 'Harvard University', keyWork: 'The Blank Slate (2002)', inBook: false },
					{ name: 'Melissa Hines', affiliation: 'Cambridge University', keyWork: 'Brain Gender (2004)', inBook: false },
					{ name: 'Larry Cahill', affiliation: 'UC Irvine', keyWork: 'Sex Differences in Neuroscience (2006)', inBook: false }
				],
				keyArguments: [
					'Neugeborenen-Studien (Connellan et al. 2000): Schon am 1. Tag schauen Jungen länger auf mechanische Objekte',
					'CAH-Studien: Mädchen mit erhöhtem pränatalem Testosteron zeigen "jungentypischeres" Spielverhalten',
					'Kreuzkulturelles Muster: Gewisse Unterschiede (Aggression, räumliches Denken) erscheinen in allen Kulturen',
					'Evolutionspsychologische Erklärung: Sexuelle Selektion erzeugt kognitive Spezialisierungen'
				],
				critics: [
					{
						name: 'Cordelia Fine',
						argument: 'Die Neugeborenen-Studien haben methodische Mängel (kleine Stichproben, Versuchsleiter-Bias). "Neurosexismus" überinterpretiert kleine Effekte.',
						affiliation: 'University of Melbourne',
						standing: 'hochangesehen'
					},
					{
						name: 'Rebecca Jordan-Young',
						argument: 'Brain Storm (2010): Die Hormonstudien zur Geschlechtsdifferenzierung sind methodisch inkonsistent und überinterpretiert.',
						affiliation: 'Barnard College, Columbia',
						standing: 'angesehen'
					}
				],
				citedInBook: [],
				bookPosition: false
			}
		]
	},

	// =============================================
	// 2. MÄNNLICHKEITSFORSCHUNG
	// =============================================
	{
		id: 'masculinity-studies',
		name: 'Masculinity Studies',
		germanName: 'Männlichkeitsforschung / Kritische Männerforschung',
		color: '#6366f1',
		icon: '♂',
		description:
			'Untersucht, wie Männlichkeit(en) gesellschaftlich konstruiert, gelebt und reproduziert werden. ' +
			'Analysiert Machtstrukturen, Rollenerwartungen und deren Auswirkungen auf Männer und die Gesellschaft.',
		coreQuestion: 'Wie wird Männlichkeit produziert und aufrechterhalten, und wie schadet sie Männern selbst?',
		citedAuthors: ['Böhnisch, Lothar', 'Connell, Raewyn', 'Bola, JJ', 'Süfke, Björn', 'Urwin, Jack', 'Gilmore, David'],
		groups: [
			{
				id: 'masc-hegemonic',
				name: 'Hegemoniale Männlichkeit (Connell-Paradigma)',
				position:
					'Männlichkeit ist nicht biologisch, sondern ein soziales Konstrukt, das hierarchisch organisiert ist. ' +
					'Die "hegemoniale Männlichkeit" — das kulturell dominante Ideal — legitimiert die Unterordnung ' +
					'von Frauen und "anderen" Männlichkeiten. Männer sind gleichzeitig Profiteure und Opfer dieses Systems.',
				status: 'dominant',
				statusExplanation:
					'Connells Konzept der "hegemonialen Männlichkeit" (1995/2005) ist das meistzitierte Konzept der ' +
					'Männlichkeitsforschung weltweit. Es bildet die Grundlage der meisten Gender-Studies-Programme. ' +
					'Aber: Es gibt substanzielle Kritik an der Vagheit des Konzepts und der empirischen Überprüfbarkeit.',
				keyProponents: [
					{ name: 'Raewyn Connell', affiliation: 'University of Sydney', keyWork: 'Masculinities / Der gemachte Mann (1995)', inBook: true },
					{ name: 'Lothar Böhnisch', affiliation: 'TU Dresden / FU Bozen', keyWork: 'Männliche Sozialisation (2004)', inBook: true },
					{ name: 'Michael Meuser', affiliation: 'TU Dortmund', keyWork: 'Geschlecht und Männlichkeit (1998)', inBook: false },
					{ name: 'Jeff Hearn', affiliation: 'Örebro University', keyWork: 'The Violences of Men (1998)', inBook: false }
				],
				keyArguments: [
					'Männlichkeit ist plural — es gibt "Männlichkeiten" (hegemoniale, komplizenhafte, marginalisierte, untergeordnete)',
					'Hegemoniale Männlichkeit wird durch kulturelle Praxis, nicht durch biologische Fakten aufrechterhalten',
					'Das Patriarchat schadet auch Männern: emotionale Einschränkung, Gesundheitsrisiken, Gewalt',
					'Veränderung ist möglich durch bewusste Dekonstruktion und neue Männlichkeitsmodelle'
				],
				critics: [
					{
						name: 'Demetrakis Z. Demetriou',
						argument: 'Das Konzept ist zu monolithisch. Hegemoniale Männlichkeit ist kein fixer Block, sondern ein "hybrides" Feld, das Elemente marginalisierter Männlichkeiten aufnimmt.',
						affiliation: 'University of Cyprus',
						standing: 'angesehen'
					},
					{
						name: 'Richard Collier',
						argument: 'Das Konzept hat einen anti-normativen Bias — es beschreibt Männlichkeit primär als Problem. Dies verhindert ein Verständnis positiver männlicher Identität.',
						affiliation: 'Newcastle University',
						standing: 'angesehen'
					},
					{
						name: 'Warren Farrell',
						argument: 'Die Mainstream-Männlichkeitsforschung ignoriert systematisch die Nachteile des Mannseins: Wehrpflicht, gefährliche Berufe, Sorgerechtsbenachteiligung, höhere Suizidraten.',
						affiliation: 'Unabhängig (ehem. Board NOW)',
						standing: 'umstritten'
					},
					{
						name: 'Roy Baumeister',
						argument: 'Die "Male Disposability"-These: Gesellschaften opfern Männer systematisch (Krieg, Gefahr) — das Narrativ der reinen "männlichen Macht" greift zu kurz.',
						affiliation: 'University of Queensland',
						standing: 'angesehen'
					}
				],
				citedInBook: ['Connell, Raewyn', 'Böhnisch, Lothar', 'Bola, JJ', 'Süfke, Björn'],
				bookPosition: true
			},
			{
				id: 'masc-caring',
				name: 'Caring Masculinities (Fürsorgliche Männlichkeiten)',
				position:
					'Männer können und sollen Fürsorge als zentralen Bestandteil ihrer Identität entwickeln. ' +
					'Dies erfordert die Abkehr von Dominanz und Konkurrenz als männliche Kerntugenden ' +
					'und die Hinwendung zu Care-Arbeit, emotionaler Kompetenz und Kooperation.',
				status: 'emerging',
				statusExplanation:
					'Relativ neues Teilfeld (Hanlon 2012, Elliott 2016). Zunehmend einflussreich in der EU-Politik ' +
					'(Men in Care Projekt, BMFSFJ-Studien). Empirisch noch nicht so breit belegt wie das Connell-Paradigma, ' +
					'aber wachsende Forschungsbasis. Wird von der traditionellen Männerforschung positiv aufgenommen.',
				keyProponents: [
					{ name: 'Karla Elliott', affiliation: 'Monash University', keyWork: 'Caring Masculinities (2016)', inBook: true },
					{ name: 'Niall Hanlon', affiliation: 'Dublin City University', keyWork: 'Masculinities, Care and Equality (2012)', inBook: false },
					{ name: 'Andrea Maihofer', affiliation: 'Universität Basel', keyWork: 'Wandel und Persistenz hegemonialer Männlichkeit (2019)', inBook: true },
					{ name: 'Elli Scambor', affiliation: 'Institut für Männer- und Geschlechterforschung', keyWork: 'CarMiA-Projekt', inBook: true }
				],
				keyArguments: [
					'Fürsorge ist eine erlernbare Kompetenz, nicht ein weibliches Wesensmerkmal',
					'Caring Masculinities als positive Alternative statt nur Kritik an "toxischer Männlichkeit"',
					'Väterforschung zeigt: Aktiv fürsorgliche Väter profitieren gesundheitlich und emotional',
					'EU-Projekt "Men in Care" belegt: Strukturelle Rahmenbedingungen (Elternzeit, Teilzeit) sind entscheidend'
				],
				critics: [
					{
						name: 'Mark Grover',
						argument: 'Das Konzept romantisiert Care-Arbeit und ignoriert, dass viele Männer aus rationalen ökonomischen Gründen (Gender Pay Gap) die Ernährerrolle übernehmen.',
						standing: 'angesehen'
					}
				],
				citedInBook: ['Elliott, Karla', 'Maihofer, Andrea'],
				bookPosition: true
			},
			{
				id: 'masc-evolutionary',
				name: 'Evolutionäre / Biologische Männlichkeitsforschung',
				position:
					'Geschlechterunterschiede in Verhalten und Psychologie sind teilweise Ergebnis evolutionärer Selektion. ' +
					'Männliche Risiko- und Konkurrenzbereitschaft, Aggression und Status-Streben haben adaptive Funktionen ' +
					'und können nicht allein durch Sozialisation erklärt werden.',
				status: 'contested',
				statusExplanation:
					'In der Psychologie und Biologie ernst genommen (Buss, Geary), aber in der Soziologie und ' +
					'Gender Studies oft abgelehnt als "biologischer Determinismus". Die Debatte ist stark politisiert. ' +
					'Die Wahrheit liegt vermutlich in der Interaktion: Gene × Umwelt.',
				keyProponents: [
					{ name: 'David Geary', affiliation: 'University of Missouri', keyWork: 'Male, Female: The Evolution of Human Sex Differences (1998)', inBook: false },
					{ name: 'David Buss', affiliation: 'University of Texas', keyWork: 'Evolutionary Psychology (1995)', inBook: false },
					{ name: 'David Gilmore', affiliation: 'SUNY Stony Brook', keyWork: 'Manhood in the Making / Mythos Mann (1990)', inBook: true },
				],
				keyArguments: [
					'Kreuzkulturelles Muster: Männliche Risiko- und Statusorientierung erscheint in allen Gesellschaften (Gilmore 1990)',
					'Testosteron beeinflusst nachweislich Aggression, Risikobereitschaft und Dominanzverhalten',
					'Geschlechterunterschiede in Berufswahl bleiben auch in den egalitärsten Ländern bestehen ("Gender Equality Paradox")',
					'Väterliches Investment ist evolutionär begründbar — Männer sind nicht inherent "unfürsorglich"'
				],
				critics: [
					{
						name: 'Raewyn Connell',
						argument: 'Evolutionspsychologie naturalisiert Machtverhältnisse. "Angeboren" wird als Argument verwendet, um den Status quo zu rechtfertigen.',
						affiliation: 'University of Sydney',
						standing: 'hochangesehen'
					},
					{
						name: 'Anne Fausto-Sterling',
						argument: 'Die Trennung von "Natur" und "Kultur" ist selbst ein kulturelles Konstrukt. Biologie und Sozialisation sind untrennbar verwoben.',
						affiliation: 'Brown University',
						standing: 'hochangesehen'
					}
				],
				citedInBook: ['Gilmore, David'],
				bookPosition: false
			}
		]
	},

	// =============================================
	// 3. ENTWICKLUNGSPSYCHOLOGIE
	// =============================================
	{
		id: 'developmental-psych',
		name: 'Developmental Psychology',
		germanName: 'Entwicklungspsychologie der Geschlechtsidentität',
		color: '#ec4899',
		icon: '🧒',
		description:
			'Untersucht, wie Kinder ihre Geschlechtsidentität entwickeln, wie Geschlechterstereotype ' +
			'internalisiert werden, und welche Rolle Eltern, Peers und Medien dabei spielen.',
		coreQuestion: 'Wie lernen Kinder "Junge" oder "Mädchen" zu sein — und lässt sich das beeinflussen?',
		citedAuthors: ['Pollack, William S.', 'Richter-Kornweitz, Antje', 'Focks, Petra', 'Chodorow, Nancy', 'Katz, Phyllis A.'],
		groups: [
			{
				id: 'dev-social-learning',
				name: 'Soziales Lernen / Kognitive Geschlechterentwicklung',
				position:
					'Kinder lernen geschlechtstypisches Verhalten primär durch Beobachtung, Verstärkung und ' +
					'kognitive Kategorisierung. Eltern, Peers, Medien und Institutionen prägen Geschlechterrollenbilder ' +
					'von frühester Kindheit an. Bewusste Erziehung kann Stereotypen aufbrechen.',
				status: 'mainstream',
				statusExplanation:
					'Soziales Lernen (Bandura) und Kognitive Entwicklungstheorie (Kohlberg) bilden zusammen mit ' +
					'der Gender Schema Theory (Bem 1981) den Mainstream der Entwicklungspsychologie. ' +
					'Die Position wird durch Hunderte von Studien gestützt und ist weitgehend unumstritten — ' +
					'die Debatte ist nur, wie STARK die soziale Komponente relativ zur Biologie ist.',
				keyProponents: [
					{ name: 'Albert Bandura', affiliation: 'Stanford University', keyWork: 'Social Learning Theory (1977)', inBook: false },
					{ name: 'Sandra Bem', affiliation: 'Cornell University', keyWork: 'Gender Schema Theory (1981)', inBook: false },
					{ name: 'William Pollack', affiliation: 'Harvard Medical School', keyWork: 'Real Boys / Jungen (1998)', inBook: true },
					{ name: 'Phyllis Katz', affiliation: 'University of Colorado', keyWork: 'Baby X Studie (1975)', inBook: true },
					{ name: 'Petra Focks', affiliation: 'Alice Salomon Hochschule Berlin', keyWork: 'Starke Mädchen, starke Jungen (2016)', inBook: true }
				],
				keyArguments: [
					'Baby-X-Experiment (Katz 1975): Erwachsene behandeln dasselbe Baby anders, je nach vermutetem Geschlecht',
					'Pollacks "Boy Code": Jungen werden ab dem 5. Lebensjahr systematisch von emotionalem Ausdruck abgeschnitten',
					'Kinderbuch-Analysen: Männliche Figuren sind überrepräsentiert, in aktiven Rollen; weibliche passiv',
					'Interventionsstudien: Gender-bewusste Erziehung kann Stereotypen messbar reduzieren'
				],
				critics: [
					{
						name: 'Steven Pinker',
						argument: 'Die "Blank Slate"-Annahme ignoriert biologische Prädispositionen. Studien an Affen zeigen geschlechtstypische Spielzeugpräferenzen ohne jede Sozialisation.',
						affiliation: 'Harvard University',
						standing: 'hochangesehen'
					},
					{
						name: 'Diane Halpern',
						argument: 'Die Wahrheit ist ein Interaktionsmodell. Biologie UND Sozialisation wirken zusammen. Die rein sozialkonstruktivistische Position ist ebenso einseitig wie die rein biologische.',
						affiliation: 'Claremont McKenna College (APA-Präsidentin)',
						standing: 'hochangesehen'
					}
				],
				citedInBook: ['Pollack, William S.', 'Focks, Petra', 'Katz, Phyllis A.'],
				bookPosition: true
			},
			{
				id: 'dev-psychoanalytic',
				name: 'Psychoanalytische Perspektive',
				position:
					'Geschlechtsidentität wird durch frühkindliche Beziehungsdynamiken geformt — insbesondere ' +
					'die Mutter-Kind-Beziehung. Jungen müssen sich von der Mutter "dis-identifizieren", um männliche ' +
					'Identität aufzubauen, was zu emotionaler Distanz und Abwehr von Weiblichkeit führt.',
				status: 'minority',
				statusExplanation:
					'War bis in die 1990er einflussreich (Chodorow, Dinnerstein), wird heute in der empirischen Psychologie ' +
					'kaum noch vertreten. In der Soziologie und Cultural Studies aber weiterhin zitiert. ' +
					'Die Kernidee der "männlichen Dis-Identifikation" bleibt einflussreich, auch wenn die ' +
					'psychoanalytische Rahmung weitgehend aufgegeben wurde.',
				keyProponents: [
					{ name: 'Nancy Chodorow', affiliation: 'UC Berkeley', keyWork: 'Das Erbe der Mütter (1978)', inBook: true },
					{ name: 'Jessica Benjamin', affiliation: 'NYU', keyWork: 'The Bonds of Love (1988)', inBook: false }
				],
				keyArguments: [
					'Jungen müssen sich von der primären Bezugsperson (Mutter) "abstoßen" um Männlichkeit zu entwickeln',
					'Dies erklärt die männliche Abwehr von Emotionalität und "Weiblichem"',
					'Abwesende Väter verschärfen das Problem — Jungen ohne männliche Vorbilder überkompensieren'
				],
				critics: [
					{
						name: 'Michael Lamb',
						argument: 'Empirisch wenig gestützt. Vater-Abwesenheit hat messbare, aber moderate Effekte. Die psychoanalytische Dramatisierung ist übertrieben.',
						affiliation: 'Cambridge University',
						standing: 'hochangesehen'
					}
				],
				citedInBook: ['Chodorow, Nancy'],
				bookPosition: false
			}
		]
	},

	// =============================================
	// 4. RESILIENZFORSCHUNG
	// =============================================
	{
		id: 'resilience',
		name: 'Resilience Research',
		germanName: 'Resilienzforschung',
		color: '#10b981',
		icon: '🛡',
		description:
			'Untersucht Schutzfaktoren, die Kinder und Jugendliche trotz widriger Umstände ' +
			'gesund und psychisch stabil aufwachsen lassen. Fokus auf Stärkung statt Defizitorientierung.',
		coreQuestion: 'Was stärkt Kinder — und gibt es geschlechtsspezifische Schutz- und Risikofaktoren?',
		citedAuthors: ['Richter-Kornweitz, Antje', 'Bengel, Jürgen'],
		groups: [
			{
				id: 'resilience-mainstream',
				name: 'Schutzfaktoren-Modell',
				position:
					'Resilienz ist kein angeborenes Persönlichkeitsmerkmal, sondern ein dynamischer Prozess, ' +
					'der durch Schutzfaktoren gefördert werden kann: stabile Beziehungen, Selbstwirksamkeit, ' +
					'Emotionsregulation, soziale Unterstützung. Jungen haben spezifische Risikofaktoren ' +
					'(externalisierendes Verhalten, weniger Hilfe-Suchen).',
				status: 'mainstream',
				statusExplanation:
					'Breiter wissenschaftlicher Konsens. Die Schutzfaktoren-Forschung (Werner & Smith, Masten, Luthar) ' +
					'ist durch Längsschnittstudien über Jahrzehnte belegt. Die geschlechtsspezifische Perspektive ' +
					'(Jungen als vulnerable Gruppe) ist innerhalb der Resilienzforschung akzeptiert.',
				keyProponents: [
					{ name: 'Emmy Werner', affiliation: 'UC Davis', keyWork: 'Kauai Longitudinal Study (1989)', inBook: false },
					{ name: 'Ann Masten', affiliation: 'University of Minnesota', keyWork: 'Ordinary Magic (2001)', inBook: false },
					{ name: 'Antje Richter-Kornweitz', affiliation: 'Landesvereinigung für Gesundheit Niedersachsen', keyWork: 'Schutzfaktoren-Forschung', inBook: true },
					{ name: 'Jürgen Bengel', affiliation: 'Universität Freiburg', keyWork: 'BZgA Schutzfaktoren-Bericht (2009)', inBook: true }
				],
				keyArguments: [
					'Kauai-Studie (Werner 1989): 1/3 der Hochrisiko-Kinder entwickeln sich trotzdem gut — Schutzfaktoren sind identifizierbar',
					'Mindestens eine stabile Bezugsperson ist der wichtigste einzelne Schutzfaktor',
					'Jungen zeigen mehr externalisierendes Problemverhalten, suchen aber seltener Hilfe',
					'Emotionale Kompetenz ist ein trainierbarer Schutzfaktor — besonders wichtig für Jungen'
				],
				critics: [],
				citedInBook: ['Richter-Kornweitz, Antje', 'Bengel, Jürgen'],
				bookPosition: true
			}
		]
	},

	// =============================================
	// 5. GEWALT- UND RADIKALISIERUNGSFORSCHUNG
	// =============================================
	{
		id: 'violence',
		name: 'Violence & Radicalization Research',
		germanName: 'Gewalt- und Radikalisierungsforschung',
		color: '#ef4444',
		icon: '⚠',
		description:
			'Untersucht die Ursachen männlicher Gewalt, Radikalisierung in Online-Spaces ' +
			'(Incels, Manosphere, Rechtsextremismus) und den Zusammenhang von Männlichkeitsnormen und Gewalt.',
		coreQuestion: 'Warum sind Täter fast immer männlich — und wie entsteht Radikalisierung?',
		citedAuthors: ['Bonnenberg, Britta', 'Evans, Robert', 'Regehr, Kaitlyn', 'Liebl, Ole'],
		groups: [
			{
				id: 'violence-structural',
				name: 'Strukturelle Männlichkeit und Gewalt',
				position:
					'Männliche Gewalt ist kein individuelles Versagen, sondern ein Produkt struktureller Männlichkeitsnormen. ' +
					'Die "Manosphere" (Incels, Red Pill, MGTOW) rekrutiert verletzliche junge Männer, ' +
					'die in der Krise traditioneller Männlichkeit keinen Halt finden.',
				status: 'dominant',
				statusExplanation:
					'In der Kriminologie und Extremismusforschung ist der Zusammenhang von Männlichkeitsnormen ' +
					'und Gewalt empirisch gut belegt. Die WHO, das BKA und die meisten Gewaltforscher teilen diese Einschätzung. ' +
					'Debatte gibt es über die Gewichtung struktureller vs. individueller Faktoren.',
				keyProponents: [
					{ name: 'Michael Kimmel', affiliation: 'Stony Brook University', keyWork: 'Angry White Men (2013)', inBook: false },
					{ name: 'Kaitlyn Regehr', affiliation: 'University of Portsmouth', keyWork: 'Incel 2.0 / TikTok-Studie', inBook: true },
					{ name: 'Rachel Kalish & Michael Kimmel', keyWork: '"Suicide by Mass Murder" (2010)', inBook: false },
					{ name: 'Britta Bonnenberg', keyWork: 'Amokforschung', inBook: true }
				],
				keyArguments: [
					'95%+ aller Amokläufer sind männlich — Zufall oder Struktur?',
					'Incel-Ideologie verbindet sexuelle Frustration mit Anspruchsdenken und Frauenhass',
					'TikTok-Algorithmen verstärken misogyne Inhalte gezielt bei jungen Männern (Regehr)',
					'Prävention muss an Männlichkeitsnormen ansetzen, nicht nur an Symptomen'
				],
				critics: [
					{
						name: 'Christina Hoff Sommers',
						argument: 'Der Fokus auf "toxische Männlichkeit" pathologisiert normales männliches Verhalten und treibt junge Männer erst recht in radikale Spaces.',
						affiliation: 'American Enterprise Institute',
						standing: 'umstritten'
					}
				],
				citedInBook: ['Bonnenberg, Britta', 'Regehr, Kaitlyn', 'Evans, Robert', 'Liebl, Ole'],
				bookPosition: true
			}
		]
	},

	// =============================================
	// 6. PÄDAGOGIK / GESCHLECHTERBEWUSSTE ERZIEHUNG
	// =============================================
	{
		id: 'pedagogy',
		name: 'Gender-Sensitive Pedagogy',
		germanName: 'Geschlechterbewusste Pädagogik',
		color: '#22c55e',
		icon: '📚',
		description:
			'Entwickelt Erziehungs- und Bildungskonzepte, die Geschlechterstereotype aufbrechen und ' +
			'allen Kindern die volle Bandbreite an Verhaltensweisen und Identitäten ermöglichen.',
		coreQuestion: 'Sollen wir geschlechtsneutral erziehen — oder geschlechterbewusst?',
		citedAuthors: ['Focks, Petra', 'Renz-Polster, Herbert', 'Mierau, Susanne', 'hooks, bell', 'Behjat, Shila'],
		groups: [
			{
				id: 'ped-conscious',
				name: 'Geschlechterbewusste Pädagogik',
				position:
					'Nicht geschlechtsneutral (Unterschiede leugnen), sondern geschlechterbewusst: ' +
					'Stereotype bewusst machen, Vielfalt vorleben, einengende Normen aufbrechen. ' +
					'Kinder brauchen keine "neutrale" Erziehung, sondern eine, die ihnen ALLE Optionen öffnet.',
				status: 'dominant',
				statusExplanation:
					'In der deutschsprachigen Pädagogik ist geschlechterbewusste Erziehung der Standard. ' +
					'Empfohlen von BMFSFJ, Bundeszentrale für gesundheitliche Aufklärung, und den meisten ' +
					'Fachverbänden. International ähnlich (OECD, UNESCO). Aber: In der öffentlichen Debatte ' +
					'weit kontroverser als in der Fachwelt.',
				keyProponents: [
					{ name: 'Petra Focks', affiliation: 'Alice Salomon Hochschule Berlin', keyWork: 'Starke Mädchen, starke Jungen (2016)', inBook: true },
					{ name: 'Tim Rohrmann', affiliation: 'Evangel. Hochschule Dresden', keyWork: 'Gender in Kindertageseinrichtungen', inBook: false },
					{ name: 'Herbert Renz-Polster', affiliation: 'Unabhängig (Kinderarzt)', keyWork: 'Erziehung prägt Gesinnung (2020)', inBook: true },
					{ name: 'bell hooks', affiliation: 'Berea College', keyWork: 'Männer, Männlichkeit und Liebe (2004)', inBook: true }
				],
				keyArguments: [
					'Geschlechterbewusst ≠ geschlechtsneutral: Es geht um Erweiterung, nicht Leugnung von Unterschieden',
					'Langzeitstudien zeigen: Kinder mit weniger rigiden Geschlechterstereotypen haben bessere psychische Gesundheit',
					'Jungen profitieren besonders von der Erlaubnis, Emotionen zu zeigen und Fürsorge zu üben',
					'Männliche Erzieher in Kitas sind ein wichtiger, aber stark unterrepräsentierter Faktor'
				],
				critics: [
					{
						name: 'Diversity konservative Gegenstimmen',
						argument: 'Geschlechterbewusste Pädagogik wird oft als ideologische Indoktrination wahrgenommen. Kritiker (z.B. Teile der CDU/CSU, AfD) sehen darin eine Gefährdung "natürlicher" Geschlechterordnung.',
						standing: 'umstritten'
					},
					{
						name: 'Diane Halpern',
						argument: 'Pragmatischer Einwand: Manche geschlechtstypischen Präferenzen sind robust und teilweise biologisch. Erziehung sollte sie nicht unterdrücken, sondern Wahlfreiheit sichern.',
						affiliation: 'Claremont McKenna College',
						standing: 'hochangesehen'
					}
				],
				citedInBook: ['Focks, Petra', 'Renz-Polster, Herbert', 'hooks, bell', 'Behjat, Shila'],
				bookPosition: true
			}
		]
	},

	// =============================================
	// 7. CARE-ÖKONOMIE & GLEICHSTELLUNG
	// =============================================
	{
		id: 'care-economy',
		name: 'Care Economy & Gender Equality',
		germanName: 'Care-Ökonomie & Gleichstellungsforschung',
		color: '#f59e0b',
		icon: '⚖',
		description:
			'Untersucht die ökonomische Bewertung und Verteilung von Sorgearbeit (Kinderbetreuung, Pflege, Haushalt) ' +
			'und deren Zusammenhang mit Geschlechterungleichheit.',
		coreQuestion: 'Warum wird Fürsorgearbeit gesellschaftlich abgewertet — und was hat das mit Männlichkeit zu tun?',
		citedAuthors: ['Cammarata, Patricia', 'Konieczny, Esther', 'Lawlor, Eilis'],
		groups: [
			{
				id: 'care-feminist',
				name: 'Feministische Care-Ökonomie',
				position:
					'Care-Arbeit wird systematisch abgewertet, weil sie als "weiblich" kodiert ist. ' +
					'Eine gerechte Gesellschaft erfordert die ökonomische und kulturelle Aufwertung von Fürsorgearbeit ' +
					'und eine gleichmäßige Verteilung zwischen den Geschlechtern.',
				status: 'dominant',
				statusExplanation:
					'In der Geschlechterforschung und Wohlfahrtsstaatsforschung breiter Konsens. ' +
					'Die OECD und Weltbank verwenden Care-Ökonomie-Frameworks. ' +
					'Die politische Umsetzung (Elterngeld, Ganztagsbetreuung) ist aber national sehr verschieden.',
				keyProponents: [
					{ name: 'Nancy Fraser', affiliation: 'New School, New York', keyWork: 'Universal Caregiver Model', inBook: false },
					{ name: 'Patricia Cammarata', affiliation: 'Autorin', keyWork: 'Musterbruch (2024)', inBook: true },
					{ name: 'Eilis Lawlor', affiliation: 'New Economics Foundation', keyWork: 'Social Value of Jobs Study', inBook: true }
				],
				keyArguments: [
					'New Economics Foundation: Eine Krankenhausreinigungskraft erzeugt 10x mehr gesellschaftlichen Wert als ein Banker',
					'Mental Load — die unsichtbare Planungsarbeit — lastet überproportional auf Frauen',
					'In Deutschland leisten Frauen 52% mehr unbezahlte Care-Arbeit als Männer (BMFSFJ)',
					'Ehegattensplitting incentiviert das Alleinverdiener-Modell und verfestigt die Ungleichverteilung'
				],
				critics: [
					{
						name: 'Hakim, Catherine',
						argument: 'Preference Theory: Viele Frauen WÄHLEN aktiv mehr Care-Arbeit und weniger Erwerbsarbeit. Die feministische Care-Ökonomie pathologisiert freie Entscheidungen.',
						affiliation: 'London School of Economics',
						standing: 'angesehen'
					}
				],
				citedInBook: ['Cammarata, Patricia', 'Konieczny, Esther', 'Lawlor, Eilis'],
				bookPosition: true
			}
		]
	},

	// =============================================
	// 8. MEDIENWIRKUNGSFORSCHUNG
	// =============================================
	{
		id: 'media-effects',
		name: 'Media Effects Research',
		germanName: 'Medienwirkungsforschung & Digitale Sozialisation',
		color: '#a78bfa',
		icon: '📱',
		description:
			'Untersucht, wie soziale Medien, Algorithmen und digitale Plattformen die Identitätsbildung ' +
			'und Radikalisierung junger Männer beeinflussen.',
		coreQuestion: 'Radikalisiert TikTok junge Männer — oder finden bereits Radikalisierte sich dort?',
		citedAuthors: ['Regehr, Kaitlyn', 'Liebl, Ole', 'Siegert, Susanne'],
		groups: [
			{
				id: 'media-algorithmic',
				name: 'Algorithmische Radikalisierung',
				position:
					'Social-Media-Algorithmen verstärken systematisch extreme Inhalte, weil diese mehr Engagement ' +
					'erzeugen. Junge Männer sind besonders vulnerable, weil sie in Identitätskrisen nach Orientierung ' +
					'suchen und die Algorithmen sie gezielt zu Manosphere-Content führen.',
				status: 'emerging',
				statusExplanation:
					'Relativ neues Forschungsfeld mit wachsender Evidenz. Die "Rabbit Hole"-These (YouTube/TikTok ' +
					'als Radikalisierungspipeline) wird durch einige Studien gestützt (Regehr, Ribeiro et al. 2020), ' +
					'aber die Kausalität ist umstritten. Große Tech-Unternehmen bestreiten den Effekt.',
				keyProponents: [
					{ name: 'Kaitlyn Regehr', affiliation: 'University of Portsmouth', keyWork: 'TikTok Misogyny Study', inBook: true },
					{ name: 'Manoel Horta Ribeiro', affiliation: 'EPFL', keyWork: 'Auditing Radicalization Pathways on YouTube (2020)', inBook: false }
				],
				keyArguments: [
					'DCU-Studie: TikTok zeigt neuen Accounts innerhalb von 30 Min misogyne Inhalte',
					'Andrew Tate erreichte mit frauenfeindlichen Inhalten Milliarden Views',
					'Algorithmen verstehen nicht "Kontext" — sie optimieren für Engagement, nicht für Wahrheit',
					'Medienkompetenz-Bildung in Schulen ist dringend nötig, aber kaum vorhanden'
				],
				critics: [
					{
						name: 'Andrew Przybylski',
						argument: 'Die Evidenz für kausale algorithmische Radikalisierung ist schwächer als behauptet. Selektionseffekte (wer nutzt was) werden unterschätzt.',
						affiliation: 'Oxford Internet Institute',
						standing: 'hochangesehen'
					}
				],
				citedInBook: ['Regehr, Kaitlyn', 'Liebl, Ole', 'Siegert, Susanne'],
				bookPosition: true
			}
		]
	}
];

// ============================================================
// SUMMARY: Book's overall scientific positioning
// ============================================================

export const bookPositioningSummary = {
	title: 'Wissenschaftliche Einordnung des Buches',
	description:
		'Das Buch positioniert sich klar im sozialkonstruktivistischen Lager der Geschlechterforschung. ' +
		'Es zitiert überwiegend Forscher:innen, die Geschlechterunterschiede primär als sozial geformt verstehen ' +
		'und biologische Erklärungen skeptisch betrachten. Die biologisch-evolutionäre Perspektive wird kaum ' +
		'dargestellt. Dies entspricht dem Mainstream der deutschsprachigen Soziologie und Pädagogik, aber ' +
		'nicht dem Gesamtbild der internationalen Forschung, wo der Interaktionismus (Gene × Umwelt) ' +
		'die vorherrschende Position ist.',
	strengths: [
		'Zitiert überwiegend peer-reviewed Forschung und angesehene Forscher:innen',
		'Die Schutzfaktoren-Forschung und Resilienzforschung sind empirisch sehr solide',
		'Die Kritik an einengenden Männlichkeitsnormen ist in der Fachwelt breit akzeptiert',
		'Caring Masculinities als konstruktive Alternative ist ein wachsendes, seriöses Feld',
		'Die Analyse der Manosphere und algorithmischen Radikalisierung ist aktuell und relevant'
	],
	blindSpots: [
		'Biologische Perspektiven (Baron-Cohen, Pinker, Hines) werden nicht diskutiert',
		'Das "Gender Equality Paradox" (größere Unterschiede in egalitäreren Ländern) wird nicht thematisiert',
		'Interaktionistische Positionen (Gene × Umwelt) kommen kaum vor',
		'Kritik am Konzept "toxische Männlichkeit" (z.B. APA-Kontroverse 2019) wird nicht aufgegriffen',
		'Positive Aspekte traditioneller Männlichkeit (Schutz, Opferbereitschaft, Leistung) werden wenig gewürdigt',
		'Männerrechtliche Perspektiven (z.B. Farrell, Stichwort Sorgerecht, Suizidrate) fehlen fast vollständig'
	]
};

// ============================================================
// FUNDAMENTAL COUNTER-POSITIONS
// ============================================================
// Research traditions that challenge the social-constructivist
// framework of gender studies at a foundational level.

export interface CounterPosition {
	id: string;
	name: string;
	color: string;
	icon: string;
	challenge: string;
	status: 'mainstream' | 'dominant' | 'contested' | 'minority' | 'emerging';
	statusNote: string;
	description: string;
	keyFindings: string[];
	keyResearchers: { name: string; affiliation: string; work: string; standing: string }[];
	implicationsForBook: string;
	bookResponse: string;
}

export const counterPositions: CounterPosition[] = [
	{
		id: 'gender-equality-paradox',
		name: 'Das Gender Equality Paradox',
		color: '#f59e0b',
		icon: '🔄',
		challenge: 'Je gleichberechtigter eine Gesellschaft, desto GRÖSSER werden manche Geschlechterunterschiede — das Gegenteil der sozialkonstruktivistischen Vorhersage.',
		status: 'contested',
		statusNote:
			'Die Originalstudie (Stoet & Geary 2018, Science) ist methodisch anerkannt, wurde in Science ' +
			'publiziert und vielfach repliziert. Die Interpretation ist aber heftig umstritten. ' +
			'Kritiker (Richardson, Breda et al.) argumentieren, das Paradox verschwinde bei besserer Messung. ' +
			'Verteidiger (Geary, Mac Giolla & Kajonius) sehen es als robusten Befund.',
		description:
			'In Ländern mit hoher Geschlechtergleichstellung (Skandinavien, Schweiz) sind die Unterschiede ' +
			'in Berufswahl, MINT-Fächern und Persönlichkeitsmerkmalen GRÖSSER als in weniger egalitären Ländern. ' +
			'Die sozialkonstruktivistische Theorie sagt das Gegenteil vorher: Wenn Barrieren fallen, sollten ' +
			'Unterschiede verschwinden. Das Paradox deutet darauf hin, dass individuelle Präferenzen — ' +
			'möglicherweise teilweise biologisch — stärker hervortreten, wenn ökonomische Zwänge wegfallen.',
		keyFindings: [
			'Stoet & Geary (2018): In den 67 untersuchten Ländern gilt: Je höher der Gender Gap Index, desto geringer der Frauenanteil in MINT',
			'Mac Giolla & Kajonius (2019): Big-Five-Persönlichkeitsunterschiede sind in egalitären Ländern am größten (d = 0.80 vs 0.40)',
			'Falk & Hermle (2018, Science): Analyse von 80.000 Personen in 76 Ländern bestätigt das Muster für Risikobereitschaft, Geduld, Altruismus',
			'Lippa (2010): Geschlechterunterschiede in Berufsinteressen (People vs. Things) sind kulturübergreifend robust (d = 0.93)',
			'Kritik: Breda et al. (2020, PNAS): Das Paradox verschwindet teilweise, wenn man für Gender-Stereotype in der Schule kontrolliert',
			'Kritik: Richardson et al. (2020): Die Länderkategorisierung in "egalitär/nicht-egalitär" ist zu vereinfacht'
		],
		keyResearchers: [
			{ name: 'Gijsbert Stoet', affiliation: 'University of Essex', work: 'The Gender-Equality Paradox in Science Education (Science, 2018)', standing: 'hochangesehen' },
			{ name: 'David Geary', affiliation: 'University of Missouri', work: 'Male, Female (1998); Gender Equality Paradox (2018)', standing: 'hochangesehen' },
			{ name: 'Erik Mac Giolla', affiliation: 'University of Gothenburg', work: 'Sex Differences in Personality Are Larger in Gender Equal Countries (2019)', standing: 'angesehen' },
			{ name: 'Armin Falk', affiliation: 'Universität Bonn', work: 'Global Evidence on Economic Preferences (Science, 2018)', standing: 'hochangesehen' }
		],
		implicationsForBook:
			'Wenn das Paradox zutrifft, wäre die Grundannahme des Buches fraglich — nämlich dass geschlechterbewusste ' +
			'Erziehung Geschlechterunterschiede auflösen kann. Es könnte sein, dass bestimmte Unterschiede in einer ' +
			'freieren Gesellschaft stärker hervortreten, weil individuelle Präferenzen sichtbarer werden.',
		bookResponse: 'Das Buch erwähnt das Gender Equality Paradox nicht.'
	},
	{
		id: 'blank-slate',
		name: 'Die "Blank Slate"-Kritik',
		color: '#ef4444',
		icon: '📋',
		challenge: 'Der Mensch ist kein unbeschriebenes Blatt. Biologische Prädispositionen — Gene, Hormone, Hirnstruktur — beeinflussen Geschlechterunterschiede substanziell.',
		status: 'dominant',
		statusNote:
			'In der Psychologie, Neurowissenschaft und Verhaltensbiologie ist der Interaktionismus (Gene × Umwelt) ' +
			'die vorherrschende Position. Die Idee, dass Geschlechterunterschiede AUSSCHLIESSLICH sozial konstruiert ' +
			'sind, wird von der Mehrheit der Naturwissenschaftler abgelehnt. In der Soziologie und Gender Studies ' +
			'ist der Sozialkonstruktivismus allerdings weiterhin dominant.',
		description:
			'Steven Pinker argumentiert in "The Blank Slate" (2002), dass die Sozialwissenschaften systematisch ' +
			'die Rolle der Biologie in menschlichem Verhalten unterschätzen. Zwillingsstudien zeigen, dass ' +
			'Persönlichkeitsmerkmale zu 40-60% erblich sind. Geschlechterunterschiede in Aggression, räumlichem ' +
			'Denken und empathischem Verhalten haben nachweislich biologische Komponenten — neben den sozialen.',
		keyFindings: [
			'Zwillingsstudien (Turkheimer 2000): Jedes Persönlichkeitsmerkmal ist zu 30-60% erblich — "First Law of Behavioral Genetics"',
			'Polderman et al. (2015, Nature Genetics): Meta-Analyse von 2.748 Zwillingsstudien (14,5 Mio. Zwillingspaare) — durchschnittliche Heritabilität: 49%',
			'Hines (2004, 2020): Mädchen mit CAH (erhöhtes pränatales Testosteron) zeigen "jungentypischeres" Spielverhalten — auch gegen Sozialisation der Eltern',
			'Connellan et al. (2000): Neugeborene (< 24h alt) zeigen geschlechtstypische Blickpräferenzen noch vor jeder Sozialisation',
			'Alexander et al. (2009): Rhesusaffen zeigen geschlechtstypische Spielzeugpräferenzen — ohne jede menschliche Kultur',
			'Replication Crisis: Viele der in Gender Studies zitierten sozialpsychologischen Effekte (Stereotype Threat, Implicit Bias) haben sich als schwächer erwiesen als behauptet'
		],
		keyResearchers: [
			{ name: 'Steven Pinker', affiliation: 'Harvard University', work: 'The Blank Slate: The Modern Denial of Human Nature (2002)', standing: 'hochangesehen' },
			{ name: 'Melissa Hines', affiliation: 'Cambridge University', work: 'Brain Gender (2004); Neuroscience of Sex Differences', standing: 'hochangesehen' },
			{ name: 'Simon Baron-Cohen', affiliation: 'Cambridge University', work: 'The Essential Difference (2003); Empathizing-Systemizing Theory', standing: 'hochangesehen' },
			{ name: 'Alice Eagly', affiliation: 'Northwestern University', work: 'Social Role Theory — Integration von biologischen und sozialen Faktoren', standing: 'hochangesehen' },
			{ name: 'Eric Turkheimer', affiliation: 'University of Virginia', work: '"Three Laws of Behavioral Genetics" (2000)', standing: 'hochangesehen' }
		],
		implicationsForBook:
			'Das Buch behandelt Geschlechterunterschiede fast ausschließlich als Produkt von Erziehung und Kultur. ' +
			'Die Verhaltensgenetik und Neurowissenschaft zeigen aber, dass die Biologie nicht null ist. ' +
			'Ein interaktionistisches Modell — Natur UND Erziehung — wäre wissenschaftlich ausgewogener.',
		bookResponse: 'Das Buch zitiert Lise Eliot (Neuroplastizität), erwähnt aber weder Pinker, noch Baron-Cohen, noch Zwillingsstudien.'
	},
	{
		id: 'reeves-boy-crisis',
		name: 'Die "Boy Crisis" aus zentrischer Perspektive',
		color: '#3b82f6',
		icon: '📊',
		challenge: 'Jungen haben reale, strukturelle Nachteile (Bildung, Gesundheit, Suizid) — diese lassen sich nicht allein durch "toxische Männlichkeit" erklären.',
		status: 'emerging',
		statusNote:
			'Richard Reeves\' Buch "Of Boys and Men" (2022, Brookings Institution) hat die Debatte neu gerahmt. ' +
			'Reeves ist ein linker/zentristischer Forscher, der die Jungenprobleme ernst nimmt, ohne in ' +
			'konservative Nostalgie oder Manosphere-Rhetorik zu verfallen. Seine Arbeit wird von links UND ' +
			'rechts zitiert und hat breite mediale Aufmerksamkeit erhalten.',
		description:
			'Reeves argumentiert, dass Jungen und Männer in westlichen Gesellschaften zunehmend strukturell ' +
			'benachteiligt sind — in Bildung, mentaler Gesundheit, sozialer Einbindung und Lebenserwartung. ' +
			'Die Lösung sei nicht, traditionelle Männlichkeit wiederherzustellen oder zu bekämpfen, sondern ' +
			'strukturelle Reformen: Einschulung ein Jahr später für Jungen, mehr männliche Lehrer, ' +
			'gezielte Arbeitsmarktpolitik für Sektoren mit männlichem Jobverlust.',
		keyFindings: [
			'Bildung: In allen OECD-Ländern haben Jungen schlechtere Schulnoten, niedrigere Abschlussraten und geringere Uni-Anteile als Mädchen',
			'USA: 60% der Hochschulstudierenden sind weiblich — 1970 waren es 40%',
			'Suizid: Männer sterben 3-4x häufiger durch Suizid als Frauen in allen westlichen Ländern',
			'"Deaths of Despair" (Case & Deaton): Drogenüberdosen, Alkoholismus und Suizide betreffen überproportional Männer ohne Hochschulabschluss',
			'Reeves: "Die progressiven Werkzeuge (Repräsentation, Quoten, Mentoring) die für Frauen entwickelt wurden, funktionieren auch für Jungen — man muss sie nur anwenden"',
			'Strukturvorschlag: "Redshirting" — Jungen ein Jahr später einschulen, da ihre Hirnreifung (präfrontaler Cortex) im Schnitt 1-2 Jahre hinter Mädchen liegt'
		],
		keyResearchers: [
			{ name: 'Richard Reeves', affiliation: 'Brookings Institution', work: 'Of Boys and Men: Why the Modern Male Is Struggling (2022)', standing: 'hochangesehen' },
			{ name: 'Anne Case & Angus Deaton', affiliation: 'Princeton University (Deaton: Nobelpreis 2015)', work: 'Deaths of Despair and the Future of Capitalism (2020)', standing: 'hochangesehen' },
			{ name: 'Warren Farrell', affiliation: 'Unabhängig (ehem. Board of NOW)', work: 'The Boy Crisis: Why Our Boys Are Struggling (2018)', standing: 'umstritten' },
			{ name: 'Philip Zimbardo', affiliation: 'Stanford University', work: 'Man, Interrupted: Why Young Men Are Struggling (2016)', standing: 'angesehen' }
		],
		implicationsForBook:
			'Das Buch sieht Jungen primär als potenzielle Täter / Reproduzenten toxischer Männlichkeit, die es zu "ent-giftigen" gilt. ' +
			'Reeves sieht sie als eine strukturell benachteiligte Gruppe, die konkrete Hilfe braucht — nicht (nur) Umerziehung.',
		bookResponse: 'Das Buch thematisiert männliches Leiden (Suizid, Krisen), führt es aber primär auf Männlichkeitsnormen zurück. Reeves wird nicht zitiert.'
	},
	{
		id: 'methodological-critique',
		name: 'Methodenkritik an Gender Studies',
		color: '#8b5cf6',
		icon: '🔬',
		challenge: 'Teile der Gender-Forschung erfüllen nicht die Standards empirischer Wissenschaft: geringe Replizierbarkeit, Confirmation Bias, Vermischung von Aktivismus und Forschung.',
		status: 'contested',
		statusNote:
			'Die Methodenkritik kommt sowohl von außen (Pinker, Sommers, Sokal) als auch von innerhalb ' +
			'der Sozialwissenschaften (Open Science Movement). Die "Replication Crisis" hat viele ' +
			'sozialpsychologische Befunde erschüttert, die auch in Gender Studies zitiert werden. ' +
			'Manche Kritik ist berechtigt, andere ist politisch motiviert.',
		description:
			'Verschiedene Kritiker hinterfragen die wissenschaftliche Methodik der Gender Studies: ' +
			'Sokal & Bricmont (1997) zeigten postmoderne Texte als pseudowissenschaftlich; ' +
			'Boghossian, Lindsay & Pluckrose (2018) schafften es, absurde Fake-Papers in Gender-Journals zu publizieren ("Grievance Studies Affair"); ' +
			'die Replication Crisis hat gezeigt, dass Schlüsselbefunde wie "Stereotype Threat" ' +
			'deutlich schwächer sind als ursprünglich berichtet.',
		keyFindings: [
			'Replication Crisis: Open Science Collaboration (2015, Science) konnte nur 36% von 100 Psychologie-Studien replizieren',
			'Stereotype Threat (Steele & Aronson 1995): Effekt in Meta-Analysen deutlich kleiner als im Original; Flore & Wicherts (2015) finden d = 0.22 statt 0.80',
			'Implicit Association Test (IAT): Geringe Test-Retest-Reliabilität (r = 0.44); sagt kaum reales Verhalten vorher. Trotzdem massiv in Diversity-Trainings eingesetzt',
			'Grievance Studies Affair (2018): 4 von 7 eingereichten Fake-Papers in Gender/Cultural Studies Journals akzeptiert — inklusive eines umgeschriebenen Mein-Kampf-Kapitels',
			'Publication Bias: Studien die Geschlechterunterschiede FINDEN werden leichter publiziert in Bio-Journals, Studien die KEINE finden leichter in Sozial-Journals',
			'Lee Jussim (Rutgers): Zeigt systematisch, dass "Stereotype" oft erstaunlich akkurat sind — die Annahme "Stereotype sind immer falsch" ist selbst ein Bias'
		],
		keyResearchers: [
			{ name: 'Helen Pluckrose & James Lindsay', affiliation: 'Unabhängig', work: 'Cynical Theories (2020); Grievance Studies Affair (2018)', standing: 'umstritten' },
			{ name: 'Lee Jussim', affiliation: 'Rutgers University', work: 'Social Perception and Social Reality (2012) — Stereotyp-Genauigkeit', standing: 'angesehen' },
			{ name: 'Christina Hoff Sommers', affiliation: 'American Enterprise Institute', work: 'The War Against Boys (2000); Who Stole Feminism? (1994)', standing: 'umstritten' },
			{ name: 'Jonathan Haidt', affiliation: 'NYU Stern', work: 'The Coddling of the American Mind (2018); Heterodox Academy', standing: 'hochangesehen' },
			{ name: 'Brian Nosek', affiliation: 'University of Virginia', work: 'Open Science Collaboration (2015) — Replication Crisis', standing: 'hochangesehen' }
		],
		implicationsForBook:
			'Wenn zentrale Befunde wie "Stereotype Threat" und "Implicit Bias" schwächer sind als angenommen, ' +
			'wird die Argumentationskette des Buches an einigen Stellen fragil. Das bedeutet nicht, dass alles falsch ist — ' +
			'aber manche Schlussfolgerungen ruhen auf unsichererem Fundament als dargestellt.',
		bookResponse: 'Das Buch diskutiert weder die Replication Crisis noch die Debatte um die wissenschaftliche Methodik der Gender Studies.'
	},
	{
		id: 'positive-masculinity',
		name: 'Positive Maskulinität / Traditionalismus-Debatte',
		color: '#22c55e',
		icon: '🏔',
		challenge: 'Traditionelle Männlichkeit hat auch adaptive, prosoziale Seiten (Schutz, Opferbereitschaft, Disziplin). Die reine Pathologisierung als "toxisch" schadet Jungen.',
		status: 'contested',
		statusNote:
			'Die APA-Richtlinien 2019 ("Traditional masculinity ideology is harmful") lösten eine massive ' +
			'Kontroverse aus — auch unter Psychologen. >100 Psychologen unterzeichneten einen offenen Brief dagegen. ' +
			'Die Debatte zwischen "Toxische Männlichkeit ist das Problem" vs. "Wir brauchen positive Männlichkeit ' +
			'statt Pathologisierung" ist wissenschaftlich nicht entschieden.',
		description:
			'Kritiker der "toxic masculinity"-Rahmung argumentieren: Männlichkeit hat neben destruktiven auch ' +
			'prosoziale Aspekte — Beschützerinstinkt, Selbstaufopferung, Stoizismus in Krisen, ' +
			'Leistungsbereitschaft. Die Pathologisierung traditioneller Männlichkeit entfremde Jungen und Männer ' +
			'und treibe sie in die Arme von Influencern wie Andrew Tate, weil ihnen kein positives Modell angeboten wird. ' +
			'Statt "Entgiftung" brauche es ein affirmatives Modell: gute Männlichkeit vorleben statt nur schlechte kritisieren.',
		keyFindings: [
			'APA-Kontroverse (2019): Richtlinien erklären "traditional masculinity ideology" als "harmful" — >100 Psychologen protestieren in offenem Brief',
			'Seager & Barry (2019): "Male Psychology" — Männer haben eigene psychische Bedürfnisse, die durch feministische Rahmungen nicht adäquat adressiert werden',
			'Baumeister (2007): "Is There Anything Good About Men?" — Männer nehmen extreme Positionen ein (Top & Bottom); Gesellschaft nutzt männliche Disposabilität',
			'Glover & Kaplan: "Grit" und "resilience" unter Jungen sind teilweise traditionelle Männlichkeitstugenden — sie zu pathologisieren zerstört Schutzfaktoren',
			'Reeves (2022): Jungen brauchen kein "weniger Männlichkeit" sondern "bessere Männlichkeit" — ein positives Ziel statt nur Verbote',
			'Reeves (2022): Junge Männer suchen nach positiven Vorbildern — wenn die akademische Seite keine anbietet, füllen Influencer wie Andrew Tate das Vakuum'
		],
		keyResearchers: [
			{ name: 'Martin Seager & John Barry', affiliation: 'UCL / University College London', work: 'The Palgrave Handbook of Male Psychology and Mental Health (2019)', standing: 'angesehen' },
			{ name: 'Roy Baumeister', affiliation: 'University of Queensland', work: 'Is There Anything Good About Men? (2010)', standing: 'hochangesehen' },
			{ name: 'Richard Reeves', affiliation: 'Brookings Institution', work: 'Of Boys and Men (2022) — "pro-boy without being anti-feminist"', standing: 'hochangesehen' },
			{ name: 'Scott Barry Kaufman', affiliation: 'Columbia University', work: 'Positive Masculinity & "The Light Triad" (2019)', standing: 'angesehen' },
		],
		implicationsForBook:
			'Das Buch rahmt traditionelle Männlichkeit fast durchgehend als Problem. Es fehlt ein affirmatives Gegenmodell: ' +
			'Was ist GUTE Männlichkeit? Was dürfen Jungen positiv an Männlichkeit finden? Ohne dieses Angebot ' +
			'riskiert man, dass Jungen zu Figuren wie Andrew Tate abwandern, die genau dieses Vakuum füllen.',
		bookResponse: 'Das Buch erwähnt Andrew Tate als Problem, bietet aber kein vergleichbar charismatisches positives Gegenmodell für Jungen an.'
	},
	{
		id: 'behavioral-genetics',
		name: 'Verhaltensgenetik & Zwillingsforschung',
		color: '#14b8a6',
		icon: '🧬',
		challenge: 'Zwillingsstudien zeigen: Persönlichkeit und Geschlechtsunterschiede sind zu 40-60% erblich. Erziehung ("shared environment") hat überraschend wenig Einfluss.',
		status: 'mainstream',
		statusNote:
			'Dies ist KEIN Randthema — es ist der Mainstream der Verhaltensgenetik, belegt durch ' +
			'die größte Meta-Analyse der Geschichte (Polderman et al. 2015, Nature Genetics: 14,5 Mio. Zwillingspaare). ' +
			'Die "Three Laws of Behavioral Genetics" (Turkheimer 2000) sind in der Psychologie breit akzeptiert. ' +
			'In der Soziologie und Pädagogik werden diese Befunde allerdings oft ignoriert.',
		description:
			'Verhaltensgenetik zeigt konsistent: (1) Alle Verhaltensmerkmale sind teilweise erblich (40-60%). ' +
			'(2) Die geteilte familiäre Umwelt (Erziehungsstil, Familienklima) hat überraschend wenig Einfluss auf die ' +
			'Persönlichkeit erwachsener Kinder. (3) Die nicht-geteilte Umwelt (Peers, individuelle Erfahrungen) ist ' +
			'wichtiger als die geteilte. Das stellt die Grundannahme vieler Erziehungsratgeber in Frage — ' +
			'einschließlich der Idee, dass man durch "richtige" Erziehung Geschlechterunterschiede auflösen kann.',
		keyFindings: [
			'Polderman et al. (2015, Nature Genetics): Meta-Analyse über 2.748 Studien / 14,5 Mio. Zwillingspaare — durchschnittliche Heritabilität aller Traits: 49%',
			'Turkheimers Drei Gesetze: (1) Alles ist erblich. (2) Geteilte Umwelt (Familie) erklärt weniger als Gene. (3) Nicht-geteilte Umwelt erklärt den Rest.',
			'Plomin (2018, "Blueprint"): DNA erklärt ~50% der Varianz in Persönlichkeit, Intelligenz und Psychopathologie. Erziehungsstil erklärt ~0-10%.',
			'Harris (1998, "The Nurture Assumption"): Peers sind wichtiger als Eltern für die Persönlichkeitsentwicklung — radikal, aber zunehmend gestützt',
			'Geschlechtsspezifisch: Risikobereitschaft (h² = 0.42), Aggression (h² = 0.50), Empathie (h² = 0.35) — alle substanziell erblich',
			'Caveat: Erblich ≠ unveränderbar. Erblichkeit beschreibt Populationsvarianz, nicht individuelle Determinierung.'
		],
		keyResearchers: [
			{ name: 'Robert Plomin', affiliation: 'King\'s College London', work: 'Blueprint: How DNA Makes Us Who We Are (2018)', standing: 'hochangesehen' },
			{ name: 'Eric Turkheimer', affiliation: 'University of Virginia', work: 'Three Laws of Behavioral Genetics (2000)', standing: 'hochangesehen' },
			{ name: 'Judith Rich Harris', affiliation: 'Unabhängig', work: 'The Nurture Assumption (1998) — APA George A. Miller Award', standing: 'hochangesehen' },
			{ name: 'Tinca Polderman', affiliation: 'VU Amsterdam', work: 'Meta-analysis of Twin Studies (Nature Genetics, 2015)', standing: 'hochangesehen' }
		],
		implicationsForBook:
			'Wenn Erziehung ("shared environment") weniger Einfluss auf die Persönlichkeit hat als Gene und Peers, ' +
			'wird die zentrale These des Buches — dass geschlechterbewusste Erziehung Männlichkeitsnormen grundlegend ' +
			'verändern kann — relativiert. Nicht falsch, aber die Erwartungen müssen realistischer sein.',
		bookResponse: 'Das Buch erwähnt keine Zwillingsstudien und keine Verhaltensgenetik. Der Einfluss von Erziehung wird als fast unbegrenzt dargestellt.'
	}
];
