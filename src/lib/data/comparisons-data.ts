// comparisons-data.ts
// Pairwise deep comparisons between two books of the library.
// Deliberately sparse: only pairs where a full comparison earns its keep get content
// (17+ books = 136+ possible pairs — most would be noise).

export interface ComparisonDimension {
	dimension: string; // what is being compared
	a: string;         // position of bookA
	b: string;         // position of bookB
	delta: string;     // what the difference means
}

export interface BookComparison {
	id: string;        // route-stable slug, e.g. 'nbm-vs-obm'
	bookA: string;     // book id from cross-book-data
	bookB: string;
	tagline: string;   // one-line framing of the pair
	relationship: string; // prose: how the books relate genetically/intellectually
	dimensions: ComparisonDimension[];
	nearIdentical: string[]; // claims/positions that are practically the same
	divergent: string[];     // where they genuinely part ways
	verdict: string;
}

export const comparisons: BookComparison[] = [
	{
		id: 'nbm-vs-obm',
		bookA: 'nbm',
		bookB: 'obm',
		tagline: 'Das Original und seine Selbsthilfe-Übersetzung',
		relationship:
			'Kein anderes Buchpaar der Bibliothek ist so eng verwandt: Galloway nennt Reeves „my Yoda on this subject", widmet ihm die Danksagung und übernimmt sein Kernvokabular wörtlich — Surplus Value, das „acceptable at a dance and invaluable in a shipwreck"-Ideal, die Redshirting-Sympathie, die Missing-Misters-Lehrerdaten und das komplette Zahlenfundament aus dem AIBM/Brookings-Ökosystem. Notes on Being a Man (2025) ist funktional die Individualisierung von Of Boys and Men (2022): Was Reeves als Policy-Programm für Institutionen formuliert, formuliert Galloway als Lebensprogramm für den einzelnen jungen Mann — erzählt durch sechzig Jahre eigene Biografie. Der Vergleich lohnt gerade WEIL die Bücher fast dasselbe sagen: An den wenigen Stellen, wo sie abweichen, sieht man präzise, was beim Übersetzen von Policy in Selbsthilfe passiert.',
		dimensions: [
			{
				dimension: 'Genre & Methode',
				a: 'Memoir mit Ratgeber-„Notes": Biografie als Beweisführung, Statistiken als Begleitmusik. Selbstauskunft: „observations, not peer-reviewed academic research".',
				b: 'Policy-Analyse auf Brookings-Standard: Meta-Analysen, Regierungsstatistiken (BLS, NCES, CDC), benannte Peer-Review-Quellen für fast jede Behauptung.',
				delta: 'Dieselben Thesen, zwei Beweisregimes: Reeves belegt, Galloway bezeugt. Für die Faktenlage ist Reeves die Quelle — Galloway zitiert ihn ja selbst.'
			},
			{
				dimension: 'Evidenzqualität (Audit-Ergebnis)',
				a: '12 grün / 12 gelb / 2 ROT / 4 untestbar. Die roten: Brizendine-Hirn-Claims und eine Chart mit einer ZURÜCKGEZOGENEN Studie als Quelle (Diaz & Bailey ROGD als „Body Dysmorphia" etikettiert). Sekundärquellen: Medium, Glamour, Quartz, Anwalts-Blogs.',
				b: '9+ grün / 10 gelb / 0 ROT / 6 untestbar. Keine roten Glieder — Reeves markiert Unsicherheit explizit („I don\'t know for sure"). Empirisch robusteste Quelle des gesamten Korpus.',
				delta: 'Der größte messbare Unterschied. Wo Galloway von Reeves abschreibt, ist er solide; wo er selbst recherchiert, bricht der Standard ein. Faustregel: Jede Galloway-Zahl vor dem Weiterzitieren gegen die Primärquelle prüfen — bei Reeves genügt die Fußnote.'
			},
			{
				dimension: 'Nature vs. Nurture',
				a: '„More nature than nurture" — T als „engine of masculinity", gestützt auf Hooven, aber zugespitzt über deren Position hinaus; dazu Brizendine-Pop-Neuroscience. Steht faktisch näher bei Sax/Gurian.',
				b: '„Nature AND nurture both matter" — dimorphe Grundneigung, kulturell moduliert. Lehnt explizit BEIDE Extreme ab: Rippons Biologie-Leugnung und Sax/Gurians Biologismus. Zitiert Ritchie (48% Overlap), Hooven (Amplifier, nicht Trigger).',
				delta: 'Die interessanteste Abweichung: Galloway nutzt dieselbe Hauptquelle (Hooven) und zieht die stärkere Folgerung. Der Selbsthilfe-Modus belohnt klare Ansagen; der Policy-Modus belohnt Präzision. Reeves\' Mittelposition ist die wissenschaftlich haltbare.'
			},
			{
				dimension: '„Toxische Männlichkeit"',
				a: 'Existiert per Definition nicht: „the emperor of all oxymorons" — wer grausam ist, ist anti-maskulin. Definitorische Immunisierung: rhetorisch stark, analytisch zirkulär.',
				b: 'Analytisch unbrauchbar und politisch kontraproduktiv — aber als BEGRIFFSKRITIK belegt: Harrington (2021) zeigt empirisch, dass der Begriff „almost never defined" ist und nur Missbilligung signalisiert.',
				delta: 'Gleiche Stoßrichtung, verschiedene Waffen: Reeves argumentiert mit Begriffsgeschichte, Galloway dekretiert per Definition. Reeves\' Version übersteht eine kritische Prüfung, Galloways nicht — sie erreicht dafür das Publikum, das den Begriff täglich um die Ohren bekommt.'
			},
			{
				dimension: 'Lösungsebene',
				a: 'Individuell: die Scott-Methode (Fitness, Nutrition, Money, Work), Rejection-Training, Screen-Audit, Kindness als Praxis, persönliches Mentoring, Code entwickeln. Adressat: der einzelne junge Mann.',
				b: 'Strukturell: Redshirt the Boys (alle Jungen ein Jahr später einschulen), Men Can HEAL ($1 Mrd. für Männer in Care-Berufe), Direct Dads (Vaterschaft als eigenständige Institution, reformiertes Familienrecht). Adressat: der Gesetzgeber.',
				delta: 'Komplementär, nicht widersprüchlich — Policy und Praxis desselben Programms. Blinde Flecken spiegelbildlich: Reeves sagt dem einzelnen Jungen wenig Konkretes; Galloway tut so, als könne Selbstdisziplin strukturelle Probleme lösen, deren Strukturalität er selbst (via Reeves) referiert.'
			},
			{
				dimension: 'Die Innenansicht',
				a: 'Der eigentliche Mehrwert: 16 tränenlose Jahre, Depression als Nichts-Fühlen, Wut-Trichter, Scham des armen Kindes, transaktionales Frühwerk, späte Emotionsöffnung — die klinische Konvergenz der Bibliothek (Pollack, Way, Süfke) in der ersten Person bestätigt.',
				b: 'Emotionen kommen als Datenpunkt vor (HEAL, Suizidstatistik, Freundschafts-Surveys), nie als Erfahrung. Reeves bleibt methodisch außen.',
				delta: 'Hier dreht sich das Qualitätsverhältnis um: Als empirische Quelle ist Galloway schwach, als DATENPUNKT ist er einzigartig — ein prominenter Mann, der das Maske/Alexithymie-Muster öffentlich an sich selbst dokumentiert, während er dessen Vokabular ablehnt.'
			},
			{
				dimension: 'Politik & Publikum',
				a: 'Zentristischer Kapitalismus-Optimist; Patriotismus als explizite Männlichkeits-Komponente (im Korpus einzigartig); 2024-Wahl als „referendum on failing young men". Erreicht Millionen junger Männer im Podcast-Ökosystem — das Publikum, das hooks oder Pollack nie anfassen würde.',
				b: 'Expliziter Zentrismus als Methode: Kapitel gegen die progressive Linke UND die konservative Rechte. Publikum: Policy-Community, Journalisten, Eltern mit College-Abschluss.',
				delta: 'Reeves liefert die Debattengrundlage, Galloway die Massenverbreitung. Galloways Patriotismus-Baustein und seine Wahl-Deutung gehen über Reeves hinaus — dort wird aus Analyse Programm.'
			}
		],
		nearIdentical: [
			'Surplus Value — wörtlich von Reeves übernommen und zum Leitmotiv des ganzen Buches gemacht („this phrase shows up a lot in these pages").',
			'Prosoziale Männlichkeit als Zielbild: Reeves\' „prosocial masculinity for a postfeminist world" und Galloways „aspirational masculinity" sind dasselbe Programm in zwei Vokabularen (im Graph als gemeinsamer Shared Node).',
			'Die Krisen-Diagnose: Bildungsgap, Arbeitsmarkt-Abstieg, Deaths of Despair, Dad Deficit — Galloway übernimmt Reeves\' Zahlenfundament inklusive AIBM-Charts praktisch eins zu eins.',
			'PFC-Timing als Kernerklärung des Bildungsgaps (präfrontaler Kortex ~2 Jahre später reif) samt Redshirting-Sympathie.',
			'Das „acceptable at a dance and invaluable in a shipwreck"-Ideal — Galloway zitiert es direkt von Reeves und baut sein Dancing-Kapitel darauf.',
			'Mentoring/HEAL-Stoßrichtung: mehr Männer in erziehende und fürsorgende Rollen; Entpathologisierung des männlichen Mentorings.'
		],
		divergent: [
			'Evidenzstandard: 0 rote Glieder (Reeves) vs. 2 rote inkl. retracted Studie (Galloway).',
			'Biologie-Gewichtung: Mittelposition (Reeves) vs. „more nature than nurture" (Galloway) — trotz identischer Hauptquelle Hooven.',
			'Toxische Männlichkeit: empirische Begriffskritik (Reeves/Harrington) vs. definitorisches Wegdefinieren (Galloway).',
			'Lösungsebene: Gesetzgeber (Reeves) vs. Individuum (Galloway).',
			'Memoir: Galloways einziger echter Eigenbeitrag — die Innenansicht fehlt bei Reeves vollständig.',
			'Patriotismus als Männlichkeits-Komponente und die 2024-Wahl-Deutung: nur Galloway.'
		],
		verdict:
			'Notes on Being a Man ist die Selbsthilfe-Übersetzung von Of Boys and Men — gleiche Diagnose, gleiche Vision, andere Ebene, deutlich schwächerer Fußnotenapparat. Die ehrliche Arbeitsteilung: Wer wissen will, WAS stimmt, liest Reeves; wer einem 19-Jährigen etwas in die Hand drücken will, das er tatsächlich liest, gibt ihm Galloway — mit dem Warnhinweis, die Zahlen nicht weiterzuzitieren. Für den Korpus ist das Paar methodisch aufschlussreich: Es zeigt an einem fast kontrollierten Experiment (gleiche Thesen, gleiche Quellen), was die Übersetzung von Policy-Analyse in Massen-Ratgeber kostet — Präzision, Unsicherheitsmarkierung, Quellenhygiene — und was sie kauft: Reichweite, Erzählkraft und eine Innenansicht, die keine Meta-Analyse liefern kann.'
	}
];
