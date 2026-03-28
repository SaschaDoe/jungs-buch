export interface FurtherBook {
	title: string;
	author: string;
	authorCredentials: string;
	year: number;
	publisher: string;
	language: 'Deutsch' | 'English';
	germanTitle?: string;
	thesis: string;
	differsFromBook: string;
	standing: string;
	amazonUrl: string;
	category: string;
}

export interface BookCategory {
	id: string;
	name: string;
	color: string;
	icon: string;
	description: string;
	books: FurtherBook[];
}

export const bookCategories: BookCategory[] = [
	{
		id: 'biologisch-interaktionistisch',
		name: 'Biologisch-interaktionistisch',
		color: '#06b6d4',
		icon: '\u{1F9EC}',
		description:
			'Werke, die biologische Unterschiede zwischen Jungen und Mädchen anerkennen, aber deren Wechselwirkung mit Umwelt und Erziehung betonen.',
		books: [
			{
				title: 'Why Gender Matters',
				author: 'Leonard Sax',
				authorCredentials: 'Arzt und Psychologe, Ph.D. University of Pennsylvania',
				year: 2017,
				publisher: 'Harmony Books (2. Auflage)',
				language: 'English',
				thesis:
					'Geschlechtsunterschiede in Gehirn, Sinneswahrnehmung und Entwicklung sind biologisch real und pädagogisch relevant. Wer sie ignoriert, schadet Kindern beider Geschlechter.',
				differsFromBook:
					'Sax argumentiert auf Basis von Neurobiologie und Endokrinologie, während Dittmann stärker konstruktivistisch und soziologisch ansetzt.',
				standing:
					'Viel gelesen in Eltern- und Lehrerkreisen; wissenschaftlich umstritten, da Sax einzelne Studien teils selektiv interpretiert.',
				amazonUrl: 'https://www.amazon.de/dp/0451497775',
				category: 'biologisch-interaktionistisch'
			},
			{
				title: 'Boys Adrift',
				author: 'Leonard Sax',
				authorCredentials: 'Arzt und Psychologe, Ph.D. University of Pennsylvania',
				year: 2016,
				publisher: 'Basic Books',
				language: 'English',
				thesis:
					'Fünf Faktoren treiben die Krise der Jungen: veränderte Schulstrukturen, Videospiele, ADHS-Übermedikation, Umweltöstrogene und der Verlust männlicher Vorbilder.',
				differsFromBook:
					'Sax benennt konkrete biologische und umweltbedingte Ursachen, während Dittmann die Krise eher als gesellschaftlich-konstruiertes Problem rahmt.',
				standing:
					'Populärwissenschaftlicher Bestseller; einige Thesen (z. B. Umweltöstrogene) sind wissenschaftlich nur schwach belegt.',
				amazonUrl: 'https://www.amazon.de/dp/0465040829',
				category: 'biologisch-interaktionistisch'
			},
			{
				title: 'The Wonder of Boys',
				author: 'Michael Gurian',
				authorCredentials: 'Familientherapeut und Autor, Gründer des Gurian Institute',
				year: 2006,
				publisher: 'TarcherPerigee',
				language: 'English',
				thesis:
					'Jungen haben ein spezifisches neurobiologisches Profil, das andere Erziehungs- und Unterrichtsmethoden erfordert als das von Mädchen.',
				differsFromBook:
					'Gurian setzt auf hirnbasierte Geschlechtsunterschiede als Ausgangspunkt, während Dittmann Geschlechterrollen als sozial verhandelbar betrachtet.',
				standing:
					'Einflussreich in der amerikanischen Jungenbildungsdebatte; neurowissenschaftliche Vereinfachungen werden von Fachleuten kritisiert.',
				amazonUrl: 'https://www.amazon.de/dp/087477831X',
				category: 'biologisch-interaktionistisch'
			},
			{
				title: 'Pink Brain, Blue Brain',
				author: 'Lise Eliot',
				authorCredentials: 'Neurowissenschaftlerin, Professorin an der Rosalind Franklin University',
				year: 2009,
				publisher: 'Houghton Mifflin Harcourt',
				language: 'English',
				thesis:
					'Die tatsächlichen neurologischen Unterschiede zwischen Jungen und Mädchen sind minimal; die meisten Differenzen entstehen durch Sozialisation und Neuroplastizität.',
				differsFromBook:
					'Eliot kommt Dittmanns konstruktivistischer Position am nächsten, betont aber stärker die neurowissenschaftliche Evidenz für Plastizität.',
				standing:
					'Wissenschaftlich hoch angesehen; gilt als wichtiges Korrektiv gegenüber neurosexistischen Übertreibungen.',
				amazonUrl: 'https://www.amazon.de/dp/0547394594',
				category: 'biologisch-interaktionistisch'
			},
			{
				title: 'The Essential Difference',
				author: 'Simon Baron-Cohen',
				authorCredentials:
					'Professor für Entwicklungspsychopathologie, University of Cambridge',
				year: 2003,
				publisher: 'Allen Lane',
				language: 'English',
				thesis:
					'Das männliche Gehirn ist im Durchschnitt auf Systematisieren ausgerichtet, das weibliche auf Empathie -- ein Unterschied, der bereits vorgeburtlich angelegt ist.',
				differsFromBook:
					'Baron-Cohens Empathizing-Systemizing-Theorie steht im Kontrast zu Dittmanns Betonung sozialer Konstruktion von Geschlechtsunterschieden.',
				standing:
					'Einflussreich und vielfach zitiert; die Dichotomie Empathie/Systematisieren wird jedoch als zu vereinfachend kritisiert.',
				amazonUrl: 'https://www.amazon.de/dp/0241961351',
				category: 'biologisch-interaktionistisch'
			}
		]
	},
	{
		id: 'zentristische-boy-crisis',
		name: 'Zentristische "Boy Crisis"',
		color: '#3b82f6',
		icon: '\u{1F4CA}',
		description:
			'Datengetriebene Analysen der Bildungs- und Entwicklungskrise von Jungen, die biologische und soziale Faktoren gleichermaßen berücksichtigen.',
		books: [
			{
				title: 'Of Boys and Men',
				author: 'Richard Reeves',
				authorCredentials:
					'Senior Fellow, Brookings Institution; Gründer des American Institute for Boys and Men',
				year: 2022,
				publisher: 'Brookings Institution Press',
				language: 'English',
				germanTitle: 'Von Jungen und Männern (Berlin Verlag, 2023)',
				thesis:
					'Jungen und Männer fallen in Bildung, Arbeitsmarkt und sozialen Beziehungen systematisch zurück. Diese Krise lässt sich nicht durch traditionelle links-rechts-Schemata lösen.',
				differsFromBook:
					'Reeves analysiert die Jungenkrise als strukturelles Problem mit politischen Lösungsvorschlägen, während Dittmann stärker auf individuelle Erziehungspraxis fokussiert.',
				standing:
					'Weithin als sachlich und ausgewogen anerkannt; eines der meistdiskutierten Bücher zur Männerfrage der letzten Jahre.',
				amazonUrl: 'https://www.amazon.de/dp/0815739877',
				category: 'zentristische-boy-crisis'
			},
			{
				title: 'The Boy Crisis',
				author: 'Warren Farrell',
				authorCredentials:
					'Politikwissenschaftler, ehemaliges Vorstandsmitglied der National Organization for Women (USA)',
				year: 2018,
				publisher: 'BenBella Books',
				language: 'English',
				thesis:
					'Die Krise der Jungen hat vor allem mit Vaterlosigkeit zu tun. Jungen brauchen aktive Väter und eine Gesellschaft, die männliche Verletzlichkeit anerkennt.',
				differsFromBook:
					'Farrell betont die zentrale Rolle des Vaters deutlich stärker als Dittmann und sieht Vaterlosigkeit als Hauptursache der Jungenkrise.',
				standing:
					'Populär und einflussreich in der Männerbewegung; Kritiker bemängeln eine zu starke Fokussierung auf Väter bei Vernachlässigung anderer Faktoren.',
				amazonUrl: 'https://www.amazon.de/dp/1942952716',
				category: 'zentristische-boy-crisis'
			},
			{
				title: 'Man (Dis)connected',
				author: 'Philip Zimbardo',
				authorCredentials:
					'emeritierter Professor für Psychologie, Stanford University',
				year: 2015,
				publisher: 'Rider',
				language: 'English',
				thesis:
					'Junge Männer ziehen sich zunehmend in Videospiele und Pornografie zurück, was zu sozialer Isolation, Motivationsverlust und einer Generation „verlorener Männer" führt.',
				differsFromBook:
					'Zimbardo fokussiert auf die Suchtmechanismen digitaler Medien, während Dittmann die Ursachen breiter in gesellschaftlichen Rollenveränderungen verortet.',
				standing:
					'Viel beachtet dank Zimbardos Renommee; methodisch aber eher essayistisch als empirisch belegt.',
				amazonUrl: 'https://www.amazon.de/dp/1846044847',
				category: 'zentristische-boy-crisis'
			},
			{
				title: 'The Trouble with Boys',
				author: 'Peg Tyre',
				authorCredentials:
					'Investigativjournalistin, Pulitzer-Preisträgerin (Newsweek)',
				year: 2008,
				publisher: 'Crown',
				language: 'English',
				thesis:
					'Das amerikanische Bildungssystem ist zunehmend auf die Stärken von Mädchen zugeschnitten und lässt Jungen systematisch zurückfallen.',
				differsFromBook:
					'Tyre liefert detaillierte journalistische Recherche zum Bildungssystem, während Dittmann stärker theoretisch-soziologisch argumentiert.',
				standing:
					'Gut recherchiertes journalistisches Sachbuch; als Impulsgeber geschätzt, aber keine wissenschaftliche Primärquelle.',
				amazonUrl: 'https://www.amazon.de/dp/0307381293',
				category: 'zentristische-boy-crisis'
			}
		]
	},
	{
		id: 'evolutionspsychologisch',
		name: 'Evolutionspsychologisch',
		color: '#f97316',
		icon: '\u{1F52C}',
		description:
			'Perspektiven aus der Evolutionspsychologie, die Geschlechtsunterschiede als Ergebnis natürlicher und sexueller Selektion verstehen.',
		books: [
			{
				title: 'Male, Female: The Evolution of Human Sex Differences',
				author: 'David C. Geary',
				authorCredentials:
					'Professor für Psychologie, University of Missouri; Fellow der APA',
				year: 2021,
				publisher: 'American Psychological Association (3. Auflage)',
				language: 'English',
				thesis:
					'Geschlechtsunterschiede in Kognition, Sozialverhalten und Motivation sind evolutionär geformt und lassen sich nicht allein durch Sozialisation erklären.',
				differsFromBook:
					'Geary liefert eine umfassende evolutionsbiologische Erklärung, die Dittmanns sozialkonstruktivistischem Ansatz diametral gegenübersteht.',
				standing:
					'Standardwerk der Evolutionspsychologie; in Fachkreisen hoch angesehen, aber von Sozialkonstruktivisten als reduktionistisch kritisiert.',
				amazonUrl: 'https://www.amazon.de/dp/143383264X',
				category: 'evolutionspsychologisch'
			},
			{
				title: 'The Blank Slate',
				author: 'Steven Pinker',
				authorCredentials:
					'Johnstone Family Professor of Psychology, Harvard University',
				year: 2002,
				publisher: 'Viking',
				language: 'English',
				germanTitle: 'Das unbeschriebene Blatt (Berlin Verlag)',
				thesis:
					'Die Vorstellung, der Mensch sei bei Geburt ein „unbeschriebenes Blatt", ist wissenschaftlich unhaltbar. Gene, Evolution und Hirnstruktur prägen Verhalten und Geschlechtsunterschiede.',
				differsFromBook:
					'Pinker greift die Blank-Slate-Doktrin direkt an, auf der Teile von Dittmanns konstruktivistischer Argumentation aufbauen.',
				standing:
					'Eines der einflussreichsten populärwissenschaftlichen Bücher des 21. Jahrhunderts; breit diskutiert und in vielen Disziplinen zitiert.',
				amazonUrl: 'https://www.amazon.de/dp/0142003344',
				category: 'evolutionspsychologisch'
			},
			{
				title: 'Warriors and Worriers',
				author: 'Joyce F. Benenson',
				authorCredentials:
					'Professorin für Psychologie, Emmanuel College / Harvard University',
				year: 2014,
				publisher: 'Oxford University Press',
				language: 'English',
				thesis:
					'Männliche und weibliche Sozialstrategien unterscheiden sich fundamental: Jungen bilden hierarchische Koalitionen (Warriors), Mädchen fokussieren auf dyadischen Schutz (Worriers).',
				differsFromBook:
					'Benenson erklärt Geschlechtsunterschiede im Sozialverhalten evolutionär, während Dittmann sie als kulturell geformt betrachtet.',
				standing:
					'Innovativer Forschungsbeitrag mit solider empirischer Basis; wird als wichtige Ergänzung zur Evolutionspsychologie gewürdigt.',
				amazonUrl: 'https://www.amazon.de/dp/0199972230',
				category: 'evolutionspsychologisch'
			}
		]
	},
	{
		id: 'klinisch-therapeutisch',
		name: 'Klinisch-therapeutisch',
		color: '#ec4899',
		icon: '\u{1F4AC}',
		description:
			'Bücher von Therapeuten und Klinikern, die aus der Praxis mit Jungen und jungen Männern berichten.',
		books: [
			{
				title: 'Raising Cain: Protecting the Emotional Life of Boys',
				author: 'Dan Kindlon & Michael Thompson',
				authorCredentials:
					'Kindlon: Psychologe, Harvard School of Public Health; Thompson: klinischer Psychologe, Jungenexperte',
				year: 1999,
				publisher: 'Ballantine Books',
				language: 'English',
				thesis:
					'Jungen leiden unter einer „emotionalen Analphabetismus-Kultur", die ihnen beibringt, Gefühle zu unterdrücken. Dies führt zu Aggression, Depression und schulischem Versagen.',
				differsFromBook:
					'Kindlon/Thompson fokussieren auf die emotionale Innenwelt von Jungen aus klinischer Erfahrung, während Dittmann stärker soziologisch-strukturell argumentiert.',
				standing:
					'Klassiker der Jungenpsychologie; hat die Debatte über die emotionale Entwicklung von Jungen maßgeblich geprägt.',
				amazonUrl: 'https://www.amazon.de/dp/0345434854',
				category: 'klinisch-therapeutisch'
			},
			{
				title: "It's a Boy! Understanding Your Son's Development from Birth to Age 18",
				author: 'Michael Thompson',
				authorCredentials:
					'Klinischer Psychologe, Bestsellerautor und Berater für Jungenschulen',
				year: 2008,
				publisher: 'Ballantine Books',
				language: 'English',
				thesis:
					'Die Entwicklung von Jungen folgt eigenen Mustern, die Eltern und Erzieher verstehen müssen, um Jungen in jeder Phase optimal zu begleiten.',
				differsFromBook:
					'Thompson bietet einen praxisnahen Entwicklungsführer, während Dittmann die Jungenentwicklung stärker im gesellschaftspolitischen Kontext analysiert.',
				standing:
					'Praxisnah und bei Eltern beliebt; wissenschaftlich fundiert durch Thompsons klinische Erfahrung, aber kein akademisches Werk.',
				amazonUrl: 'https://www.amazon.de/dp/0345493966',
				category: 'klinisch-therapeutisch'
			},
			{
				title: 'Strong Mothers, Strong Sons',
				author: 'Meg Meeker',
				authorCredentials: 'Kinderärztin mit über 30 Jahren Praxiserfahrung',
				year: 2014,
				publisher: 'Ballantine Books',
				language: 'English',
				thesis:
					'Die Mutter-Sohn-Beziehung ist entscheidend für die Charakterentwicklung von Jungen. Starke Mütter erziehen emotional gesunde Männer.',
				differsFromBook:
					'Meeker betont die individuelle Eltern-Kind-Beziehung mit konservativen Wertevorstellungen, während Dittmann gesellschaftliche Strukturen in den Vordergrund stellt.',
				standing:
					'Populär bei konservativem Publikum; von akademischer Seite für anekdotische Argumentation und normative Tendenzen kritisiert.',
				amazonUrl: 'https://www.amazon.de/dp/0345518098',
				category: 'klinisch-therapeutisch'
			}
		]
	},
	{
		id: 'positive-maennlichkeit',
		name: 'Positive Männlichkeit',
		color: '#22c55e',
		icon: '\u{1F3D4}',
		description:
			'Bücher, die ein positives Bild von Männlichkeit entwerfen und Jungen ermutigen, Stärke, Resilienz und Charakter zu entwickeln.',
		books: [
			{
				title: 'Wild Things: The Art of Nurturing Boys',
				author: 'Stephen James & David Thomas',
				authorCredentials:
					'James: Berater und Autor; Thomas: Kinder- und Jugendtherapeut, Daystar Counseling',
				year: 2009,
				publisher: 'Tyndale House',
				language: 'English',
				thesis:
					'Jungen durchlaufen charakteristische Entwicklungsphasen (Explorer, Lover, Individual, Wanderer, Warrior), die jeweils unterschiedliche erzieherische Antworten erfordern.',
				differsFromBook:
					'James/Thomas arbeiten mit einem positiven Phasenmodell der Jungenentwicklung, während Dittmann Jungen stärker als Opfer problematischer Geschlechternormen beschreibt.',
				standing:
					'In christlich-therapeutischen Kreisen sehr geschätzt; wissenschaftlich eher als Ratgeber denn als Fachbuch einzuordnen.',
				amazonUrl: 'https://www.amazon.de/dp/1414322275',
				category: 'positive-maennlichkeit'
			},
			{
				title: 'The Obstacle Is the Way',
				author: 'Ryan Holiday',
				authorCredentials: 'Autor und Popularisierer der stoischen Philosophie',
				year: 2014,
				publisher: 'Portfolio',
				language: 'English',
				germanTitle: 'Dein Hindernis ist dein Weg (FinanzBuch Verlag)',
				thesis:
					'Hindernisse sind keine Blockaden, sondern Gelegenheiten. Die stoische Philosophie bietet jungen Männern einen Rahmen für Resilienz und Selbstführung.',
				differsFromBook:
					'Holiday bietet eine individualethische Perspektive auf Männlichkeit, während Dittmann strukturelle Veränderungen und gesellschaftliche Verantwortung betont.',
				standing:
					'Millionenseller und kulturell einflussreich; kein wissenschaftliches Werk, sondern angewandte Philosophie.',
				amazonUrl: 'https://www.amazon.de/dp/1591846358',
				category: 'positive-maennlichkeit'
			}
		]
	},
	{
		id: 'deutsche-perspektiven',
		name: 'Deutsche Perspektiven',
		color: '#f59e0b',
		icon: '\u{1F1E9}\u{1F1EA}',
		description:
			'Deutschsprachige Autoren, die Jungen- und Männerthemen im Kontext des deutschen Bildungs- und Sozialsystems analysieren.',
		books: [
			{
				title: 'Jungen: Eine Gebrauchsanweisung',
				author: 'Reinhard Winter',
				authorCredentials:
					'Diplom-Pädagoge, Leiter des Sozialwissenschaftlichen Instituts Tübingen (SOWIT)',
				year: 2014,
				publisher: 'Beltz',
				language: 'Deutsch',
				thesis:
					'Jungen brauchen keine Umerziehung, sondern ein Verständnis ihrer spezifischen Bedürfnisse. Gute Jungenpädagogik verbindet Empathie mit klaren Strukturen.',
				differsFromBook:
					'Winter arbeitet praxisorientierter und weniger ideologisch als Dittmann, mit stärkerem Fokus auf konkrete pädagogische Handlungsempfehlungen.',
				standing:
					'Standardwerk der deutschsprachigen Jungenpädagogik; in Fachkreisen als ausgewogen und fundiert anerkannt.',
				amazonUrl: 'https://www.amazon.de/dp/3407859317',
				category: 'deutsche-perspektiven'
			},
			{
				title: 'Kleine Machos in der Krise',
				author: 'Allan Guggenbühl',
				authorCredentials:
					'Kinder- und Jugendpsychotherapeut, Professor an der Pädagogischen Hochschule Zürich',
				year: 2006,
				publisher: 'Herder',
				language: 'Deutsch',
				thesis:
					'Jungen inszenieren Männlichkeit oft übertrieben, weil ihnen positive männliche Leitbilder fehlen. Die Lösung liegt nicht im Bekämpfen, sondern im Verstehen von Jungenkultur.',
				differsFromBook:
					'Guggenbühl betont die kulturelle Eigenlogik von Jungengruppen, während Dittmann solche Dynamiken eher als Ausdruck toxischer Männlichkeit interpretiert.',
				standing:
					'Einflussreich im deutschsprachigen Raum; von feministischer Seite für zu unkritischen Umgang mit Jungen-Stereotypen kritisiert.',
				amazonUrl: 'https://www.amazon.de/dp/3451063247',
				category: 'deutsche-perspektiven'
			},
			{
				title: 'Männer: Das schwache Geschlecht und sein Gehirn',
				author: 'Gerald Hüther',
				authorCredentials:
					'Neurobiologe, ehem. Professor für Neurobiologie, Universität Göttingen',
				year: 2009,
				publisher: 'Vandenhoeck & Ruprecht',
				language: 'Deutsch',
				thesis:
					'Das männliche Gehirn ist nicht defizitär, sondern anders organisiert. Männer brauchen Herausforderungen und Gestaltungsräume, um ihr Potenzial zu entfalten.',
				differsFromBook:
					'Hüther argumentiert neurobiologisch für männliche Eigenheiten, während Dittmann solche Unterschiede als kulturell überformt betrachtet.',
				standing:
					'Populärwissenschaftlich sehr erfolgreich; in der Fachwelt zunehmend kritisch gesehen wegen Vereinfachung neurowissenschaftlicher Befunde.',
				amazonUrl: 'https://www.amazon.de/dp/3525404204',
				category: 'deutsche-perspektiven'
			},
			{
				title: 'Plädoyer für eine linke Männerpolitik',
				author: 'Arne Hoffmann',
				authorCredentials:
					'Medienwissenschaftler und Publizist, Autor zahlreicher Bücher zur Geschlechterpolitik',
				year: 2014,
				publisher: 'Edition Zeitgeist',
				language: 'Deutsch',
				thesis:
					'Eine progressive Männerpolitik muss die realen Benachteiligungen von Jungen und Männern anerkennen, ohne in Antifeminismus zu verfallen.',
				differsFromBook:
					'Hoffmann fordert eine explizit männerpolitische Perspektive innerhalb des linken Spektrums, während Dittmann Geschlechterfragen eher aus feministischer Tradition heraus behandelt.',
				standing:
					'In der Männerrechtsbewegung einflussreich; in akademischen Kreisen wenig rezipiert, gilt aber als seriöser als viele andere Stimmen der Szene.',
				amazonUrl:
					'https://www.amazon.de/dp/149543625X',
				category: 'deutsche-perspektiven'
			}
		]
	},
	{
		id: 'konservativ-traditionell',
		name: 'Konservativ / Traditionell',
		color: '#ef4444',
		icon: '\u{1F4DC}',
		description:
			'Konservative Stimmen, die klassische Geschlechterrollen verteidigen und feministische Bildungsreformen als jungenfeindlich kritisieren.',
		books: [
			{
				title: 'The War Against Boys',
				author: 'Christina Hoff Sommers',
				authorCredentials:
					'Philosophin, Resident Scholar am American Enterprise Institute',
				year: 2013,
				publisher: 'Simon & Schuster (überarbeitete Ausgabe)',
				language: 'English',
				thesis:
					'Feministisch inspirierte Bildungsreformen haben einen „Krieg gegen Jungen" entfacht, der deren natürliche Bedürfnisse ignoriert und sie systematisch benachteiligt.',
				differsFromBook:
					'Sommers sieht die Ursache der Jungenkrise explizit im Feminismus, während Dittmann aus einer feministisch informierten Perspektive schreibt.',
				standing:
					'Kontrovers, aber einflussreich; hat die konservative Debatte über Jungenbildung in den USA maßgeblich geprägt.',
				amazonUrl: 'https://www.amazon.de/dp/1451644183',
				category: 'konservativ-traditionell'
			},
			{
				title: 'No Apologies: Why Civilization Depends on the Strength of Men',
				author: 'Anthony Esolen',
				authorCredentials:
					'Professor für Literatur, Thomas More College; katholischer Intellektueller',
				year: 2022,
				publisher: 'Regnery',
				language: 'English',
				thesis:
					'Männliche Stärke, Opferbereitschaft und Führung sind Grundpfeiler der Zivilisation. Die Abwertung traditioneller Männlichkeit gefährdet die Gesellschaft.',
				differsFromBook:
					'Esolen verteidigt traditionelle Männlichkeit aus einer katholisch-konservativen Perspektive, die Dittmanns konstruktivistischem Ansatz fundamental widerspricht.',
				standing:
					'In konservativen und religiösen Kreisen geschätzt; von akademischer Seite als essentialistisch und nostalgisch kritisiert.',
				amazonUrl: 'https://www.amazon.de/dp/1684512344',
				category: 'konservativ-traditionell'
			}
		]
	}
];

export const totalBooks = bookCategories.reduce((sum, cat) => sum + cat.books.length, 0);
export const totalCategories = bookCategories.length;
