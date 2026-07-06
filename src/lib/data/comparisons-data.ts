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
	},
	{
		id: 'nbm-vs-jvh',
		bookA: 'nbm',
		bookB: 'jvh',
		tagline: 'Entgegengesetzte Prämissen, fast dasselbe Zielbild',
		relationship:
			'Das Kontrast-Paar des Korpus: Galloway und Dittmann starten von diametral entgegengesetzten Prämissen — „more nature than nurture“ (T als Engine of Masculinity) gegen „Gehirne sind gleich“ (Baby-X, Sozialisation als Ursache) — und aus entgegengesetzten politischen Lagern: kapitalistischer Podcast-Patriotismus gegen gleichstellungsorientierte Erziehungspädagogik. Sie adressieren verschiedene Personen (den jungen Mann selbst vs. dessen Eltern) und würden einander vermutlich nicht einmal zitieren. Und trotzdem: Ihre Diagnose-Bausteine überlappen massiv (Freundschaftskrise via Way, Porn-Problem, algorithmische Radikalisierung, Suizid- und Bildungszahlen), ihre Praxis-Ratschläge konvergieren (Emotionen benennen, Porn-Moderation statt Verbot, männliche Bezugspersonen/Mentoren), und ihre Zielbilder sind im Graph derselbe Shared Node: Caring Masculinity und Aspirational Masculinity beschreiben beide den gebenden, fürsorglichen, emotional zugänglichen Mann. Genau das macht den Vergleich analytisch wertvoll: Wenn zwei Bücher von gegensätzlichen Prämissen beim selben Zielbild landen, folgt das Zielbild offenbar nicht aus den Prämissen — sondern aus der gemeinsamen Beobachtung, was Jungen fehlt.',
		dimensions: [
			{
				dimension: 'Grundprämisse: Woher kommt der Unterschied?',
				a: '„More nature than nurture“: Testosteron als „engine of masculinity“, vier T-Schübe, später reifender PFC. Zuspitzung über die eigene Quelle (Hooven) hinaus, plus Brizendine-Pop-Neuroscience (rotes Audit-Glied).',
				b: '„Gehirne sind gleich“: minimale Säuglings-Differenzen, Baby-X-Experimente, Boy Code als Sozialisations-Produkt (Rippon/Eliot-Linie). Im Audit ebenfalls eine der zwei kritischen Schwachstellen des Buches — als Überkorrektur in die Gegenrichtung.',
				delta: 'Beide überziehen dieselbe Frage in entgegengesetzte Richtungen — Galloway biologistischer als seine Quelle, Dittmann konstruktivistischer als die Meta-Analytik (Chaplin & Aldao, Davis & Hines) hergibt. Die haltbare Mitte (dimorphe Grundneigung, kulturell massiv moduliert) besetzt im Korpus Reeves, nicht diese beiden.'
			},
			{
				dimension: 'Adressat & Genre',
				a: 'Der junge Mann selbst (und Väter): Memoir plus Selbsthilfe-„Notes“. Du-Perspektive: Werde fit, verdiene Geld, ertrage Ablehnung, sei großzügig.',
				b: 'Eltern (faktisch überwiegend Mütter): Erziehungsratgeber. Wie erziehe ich meinen Sohn zu einem gleichberechtigten Mann — Hausarbeit, Konsens, Konfliktkultur, Care-Kompetenz.',
				delta: 'Komplementäre Interventionspunkte: Dittmann setzt an, bevor der Junge 10 ist; Galloway übernimmt ab 18. Zusammen ergäben sie fast eine Lebensspanne — gelesen werden sie von Milieus, die einander misstrauen.'
			},
			{
				dimension: 'Männlichkeit als Rahmen',
				a: 'Männlichkeit ist die LÖSUNG: Protect, Provide, Procreate als zeitlose Trias; „toxic masculinity“ existiert nicht („emperor of all oxymorons“) — Grausamkeit ist anti-maskulin. Männlichkeit wird aufgewertet und umdefiniert.',
				b: 'Männlichkeit ist das PROBLEM: hegemoniale Männlichkeit (Connell), Externalisierung (Böhnisch), „Männlichkeit schadet“ als eigenes Kettenglied. Das Ziel ist weniger Männlichkeits-Norm, nicht bessere.',
				delta: 'Der tiefste rhetorische Gegensatz — und praktisch folgenärmer, als er klingt: Beide wollen am Ende denselben Verhaltenskatalog (Fürsorge, Emotionsausdruck, Gewaltfreiheit, Respekt). Galloway nennt ihn „echte Männlichkeit“, Dittmann „Überwindung der Männlichkeitsnormen“. Für den Jungen selbst ist es fast dieselbe Anforderung mit anderem Etikett — und Galloways Etikett dockt bei denen an, die Dittmanns Vokabular abwehren würden.'
			},
			{
				dimension: 'Porn & Sexualität',
				a: 'Porn als „masculinity killer“: nimmt das Rejection-Training, killt den Antrieb; Moderation statt Abstinenz; eigene Nutzung offengelegt. Sex-Positivität: Horniness ist „healthy, noble, and wonderful“.',
				b: 'Porno-Kompetenz und Konsens-Erziehung (Drei-Ampeln-Modell): nicht Verbot, sondern Einordnung; Fokus auf Objektifizierung und Respekt gegenüber Mädchen.',
				delta: 'Dieselbe unaufgeregte Grundhaltung (Realismus statt Panik), aber gegensätzliche Sorge: Galloway fürchtet, was Porn dem JUNGEN nimmt (Antrieb, Mating); Dittmann fürchtet, was er ihn über MÄDCHEN lehrt (Objektifizierung). Beide Sorgen sind korrelativ gestützt und kausal ungetestet — zusammen ergäben sie das vollständige Bild.'
			},
			{
				dimension: 'Radikalisierung & Algorithmen',
				a: 'Addiction Economy: Dopa-Produkte kapern den unreifen PFC; „lonely, broke young man“ als gefährlichste Figur; Manosphere als Symptom vernachlässigter Jungen, 2024-Wahl als Quittung.',
				b: 'Tate & Algorithmen: Plattformen spülen Jungen aktiv Frauenhass zu (DCU-Studie); Radikalisierung als Sozialisations-Risiko, dem Eltern medienpädagogisch begegnen müssen.',
				delta: 'Fast deckungsgleiche Mechanik (Algorithmus + vulnerable Jungen), verschiedene Schuldige: Galloway zeigt auf die Tech-Konzerne und die Kultur, die Jungen preisgab; Dittmann auf die Männlichkeitsideologie, die die Inhalte liefert. Beides zusammen ist vermutlich die richtige Antwort.'
			},
			{
				dimension: 'Evidenzprofil',
				a: '12 grün / 12 gelb / 2 ROT / 4 untestbar — stark, wo Reeves nacherzählt wird; Medium/Glamour-Quellen und eine retracted Studie, wo selbst recherchiert.',
				b: 'Solide Beobachtungs-Glieder (Freundschaftskrise, Care Gap/Destatis, Care-Berufe/BMFSFJ, Tate/DCU), aber zwei tragende Schwachstellen: die „Gehirne sind gleich“-Prämisse und die Monokausalität „Sozialisation verursacht die Probleme“ (von Prüfer im Korpus direkt untergraben).',
				delta: 'Symmetrisches Problem: Beide Bücher haben empirisch gute Beobachtungs-Etagen und ideologisch überdehnte Prämissen-Etagen — nur mit umgekehrtem Vorzeichen. Wer eines der beiden zitiert, sollte die Diagnose-Zahlen nehmen und die Prämissen-Sätze liegen lassen.'
			}
		],
		nearIdentical: [
			'Die Jungen-Freundschaftskrise: beide referieren (Dittmann direkt, Galloway unwissentlich als Erwachsenen-Fortsetzung) Ways Befund — im Graph derselbe Shared Node.',
			'Das Zielbild: Caring Masculinity (Dittmann) und Aspirational Masculinity/Surplus Value (Galloway) beschreiben denselben gebenden, fürsorglichen, emotional kompetenten Mann — im Graph als „Prosoziale Männlichkeit“ verschmolzen.',
			'Emotionsarbeit als Kernauftrag: Gefühle benennen lernen, Jungen Ausdruck erlauben — bei Dittmann als Erziehungsauftrag, bei Galloway als Selbstauftrag („lean into your emotions — reckless even“).',
			'Algorithmen als Gefahr für Jungen (Tate-Pipeline vs. Addiction Economy).',
			'Porn: Realismus statt Verbots-Panik, Kompetenz/Moderation als Antwort.',
			'Mehr männliche Bezugspersonen: männliche Erzieher/Lehrer (Dittmann) und Mentoren/„fatherhood by proxy“ (Galloway).'
		],
		divergent: [
			'Nature vs. Nurture: die beiden Extrempole des Korpus — bei identischer Verhaltens-Zielvorstellung.',
			'Männlichkeit aufwerten (Galloway) vs. Männlichkeitsnormen abbauen (Dittmann).',
			'Adressat: der junge Mann selbst vs. seine Eltern.',
			'Politische Rahmung: Patriotismus, Kapitalismus-Bejahung, 2024-Wahl-Deutung vs. feministische Gleichstellungsagenda.',
			'Wettbewerbs- und Härte-Elemente: Galloway bejaht Wettbewerb, Risiko, Stärke als Männlichkeits-Assets; Dittmann problematisiert genau diese als Boy-Code-Erbe.',
			'Provider-Rolle: bei Galloway eine der drei Säulen; bei Dittmann ein zu überwindendes Rollenklischee.'
		],
		verdict:
			'Der lehrreichste Gegensatz der Bibliothek — weil er keiner ist. Galloway und Dittmann teilen Diagnose, Praxisratschläge und Zielbild fast vollständig und verpacken sie in einander ausschließende Weltbilder: Der eine nennt Fürsorglichkeit „echte Männlichkeit“, die andere „Überwindung der Männlichkeit“. Dass beide Wege zum selben Verhaltenskatalog führen, ist der stärkste Hinweis des Korpus darauf, dass die Nature/Nurture-Prämissen für die PRAXIS weitgehend austauschbar sind — sie entscheiden nicht, was Jungen brauchen, sondern nur, welches Milieu das Buch kauft. Strategisch sind die Bücher Verbündete, die sich für Feinde halten: Dittmann erreicht die Eltern, die Galloways Podcast-Ton abstößt; Galloway erreicht die jungen Männer, die Dittmanns Vokabular als Angriff lesen würden.'
	},
	{
		id: 'obm-vs-jvh',
		bookA: 'obm',
		bookB: 'jvh',
		tagline: 'Policy-Empirie trifft Erziehungs-Idealismus',
		relationship:
			'Reeves und Dittmann schreiben fast zeitgleich über dieselbe Krise für zwei Länder und zwei Ebenen: Of Boys and Men (2022) ist die US-Policy-Analyse mit Brookings-Fußnotenapparat, Jungs von heute (2023) der deutsche Erziehungsratgeber mit Gleichstellungs-Agenda. Beide nehmen die Jungenkrise ernst, ohne den Feminismus aufzugeben, und beide fordern mehr Männer in Care-Berufe — Reeves als milliardenschweres HEAL-Programm, Dittmann als Erziehungs- und Berufswahl-Kapitel. Der zentrale Konflikt liegt eine Etage tiefer: Dittmanns Buch RUHT auf der Prämisse, dass Gehirne gleich sind und Sozialisation die Probleme verursacht — exakt der Position, die Reeves (mit Ritchie, Hooven, Steinberg) explizit als eine von zwei Überkorrekturen zurückweist. Und wo Dittmann Erziehung als Lösung setzt, zeigt Reeves mit den Kalamazoo-Daten, dass gut gemeinte individuelle Förderung bei Jungen oft nicht ankommt, solange die Strukturen (Einschulungsalter, Lehrergeschlecht, Arbeitsmarkt, Familienrecht) unverändert bleiben.',
		dimensions: [
			{
				dimension: 'Ebene der Analyse',
				a: 'Strukturell: Bildungssystem, Arbeitsmarkt, Familienrecht als Verursacher; Policy als Hebel (Redshirt the Boys, Men Can HEAL, Direct Dads). Der Einzelne kommt fast nur als Statistik vor.',
				b: 'Individuell-erzieherisch: Eltern als Haupthebel („Erziehung als Lösung“ ist ein eigenes Kettenglied), ergänzt um strukturelle Forderungen (männliche Erzieher, Ganztag).',
				delta: 'Reeves’ Kalamazoo-Befund ist der direkte Angriff auf Dittmanns Wette: Interventionen, die bei Mädchen wirken, verpuffen bei Jungen oft — und Prüfer untergräbt die Eltern-Wette im Korpus zusätzlich mit Behavior-Genetics-Daten. Dittmanns strukturelle Einzelforderungen überleben diese Kritik; ihre Erziehungs-Zuversicht nicht unbeschädigt.'
			},
			{
				dimension: 'Nature vs. Nurture',
				a: '„Nature AND nurture both matter“: dimorphe Grundneigung (Ritchie UK-Biobank, Hooven, PFC-Timing), kulturell moduliert. Weist BEIDE Extreme namentlich zurück — Biologie-Leugnung wie Biologismus.',
				b: '„Gehirne sind gleich“ + Baby-X: Differenzen als Sozialisations-Artefakt. Die Rippon/Eliot-Linie, popularisiert.',
				delta: 'Der schärfste inhaltliche Konflikt des Paars: Reeves’ Mittelposition ist gegen genau die Prämisse gebaut, die Dittmanns Kette trägt. Wichtig fürs Urteil: Dittmanns BEOBACHTUNGEN (Freundschaftskrise, Care Gap, Radikalisierung) überleben den Prämissen-Kollaps — ihre Kausalerklärung nicht.'
			},
			{
				dimension: '„Toxische Männlichkeit“ / Männlichkeits-Rahmen',
				a: 'Lehnt den Rahmen ab: Harrington (2021) zeigt, dass der Begriff undefiniert bleibt und nur Missbilligung signalisiert; er alieniert normale Männer und treibt sie in die Manosphere.',
				b: 'Arbeitet MIT dem Rahmen: hegemoniale Männlichkeit (Connell), Boy Code, „Männlichkeit schadet“ — die klinisch-soziologische Konvergenz der Bibliothek als Erziehungsprogramm.',
				delta: 'Reeves’ Einwand ist strategisch, nicht empirisch: Auch wenn Männlichkeitsnormen messbar schaden (Wong 2017 — das stützt Dittmann), verliert man mit dem Vokabular das Publikum, das man erreichen will. Dittmann schreibt für Überzeugte; Reeves für die Mitte.'
			},
			{
				dimension: 'Männer in Care',
				a: 'Men Can HEAL: $1 Mrd. nationales Investment, um Männer in Health/Education/Administration/Literacy zu bringen — als Arbeitsmarkt- UND Rollenvorbild-Politik.',
				b: 'Care-Berufe-Kapitel (BMFSFJ „Men in Care“), männliche Erzieher und Grundschullehrer, Hausarbeits-Erziehung, Care Gap bei Kindern (Destatis).',
				delta: 'Die stärkste Konvergenz des Paars, unabhängig belegt mit US- und DE-Daten — einer der wenigen Punkte, an denen Policy-Zentrist und Gleichstellungspädagogin wörtlich dasselbe fordern. Entsprechend hoch ist die Glaubwürdigkeit dieses Programmpunkts.'
			},
			{
				dimension: 'Evidenzprofil',
				a: 'Robusteste Quelle des Korpus: 0 rote Glieder, Meta-Analysen, Regierungsstatistiken, markierte Unsicherheit.',
				b: 'Gute Beobachtungs-Glieder (Destatis, BMFSFJ, DCU, Way), aber zwei tragende Schwachstellen (Gehirn-Prämisse, Sozialisations-Monokausalität) und populärwissenschaftliche Verdichtung.',
				delta: 'Gefälle wie bei Galloway, nur an anderer Stelle: Dittmanns Schwäche liegt nicht in der Quellenhygiene (die ist ordentlich), sondern in der Prämissen-Architektur — solide Steine auf weichem Fundament.'
			},
			{
				dimension: 'Kontext & Publikum',
				a: 'USA: College-Gap, Deaths of Despair, US-Familienrecht, US-Polarisierung. Publikum: Policy-Community und Debatten-Öffentlichkeit.',
				b: 'Deutschland: Kita/Erzieher, Destatis-Care-Gap, deutsches Schulsystem. Publikum: Eltern und pädagogische Praxis.',
				delta: 'Die Übertragbarkeit ist asymmetrisch: Reeves’ Strukturbefunde (PFC-Timing, Bildungsgap, Care-Männer-Mangel) replizieren sich in deutschen Daten; Dittmanns Empfehlungen setzen deutsche Institutionen voraus. Wer die Krise in Deutschland strukturell denken will, braucht faktisch beide.'
			}
		],
		nearIdentical: [
			'Mehr Männer in Care- und Erziehungsberufe — HEAL (Reeves) und das Care-Berufe/„Men in Care“-Kapitel (Dittmann) sind dieselbe Forderung mit US- bzw. DE-Datenbasis.',
			'Die Jungen-Freundschaftskrise nach Way — von beiden übernommen, im Graph derselbe Shared Node.',
			'Bildungssystem benachteiligt Jungen strukturell (fehlende männliche Lehrkräfte; Reeves zusätzlich mit dem PFC-Timing-Mechanismus).',
			'Feminismus-kompatible Grundhaltung: Jungenförderung ausdrücklich OHNE Rücknahme von Frauen-Errungenschaften — beide gegen das Nullsummen-Framing.',
			'Sorge vor Radikalisierung vernachlässigter Jungen (Manosphere/Tate) als politisches Risiko.',
			'Prosoziales Zielbild: „prosocial masculinity“ und „Caring Masculinity“ — im Graph verschmolzen.'
		],
		divergent: [
			'Die Gehirn-Prämisse: „nature AND nurture“ (Reeves) vs. „Gehirne sind gleich“ (Dittmann) — Reeves weist Dittmanns Fundament explizit zurück.',
			'Lösungs-Hebel: Gesetzgeber und Institutionen vs. Eltern und Erziehung (mit Kalamazoo als Reeves’ Gegenbeweis zur Erziehungs-Wette).',
			'„Toxische Männlichkeit“: strategische Ablehnung des Rahmens vs. produktive Nutzung.',
			'Vaterschaft: eigenständige Institution mit distinktiven Beiträgen (Eggebeen, „dads teach, moms tend“) vs. gleichberechtigte, entdifferenzierte Elternschaft.',
			'Evidenz-Architektur: Brookings-Standard vs. populärwissenschaftliche Verdichtung auf weicher Prämisse.',
			'Biologie-Kapitel: Reeves akzeptiert T-/Timing-Befunde als Erklärungsbaustein; Dittmann rahmt „Testosteron ist komplex“ primär als Entkräftung.'
		],
		verdict:
			'Das Paar zeigt, was passiert, wenn dieselbe Krise einmal empirisch und einmal weltanschaulich gerahmt wird: Reeves und Dittmann stimmen in Diagnose, Care-Agenda und Zielbild weitgehend überein — aber Reeves’ Mittelposition zur Biologie und sein Kalamazoo-Befund treffen Dittmanns zwei tragende Prämissen (Gehirne gleich, Erziehung als Lösung) frontal. Die faire Lesart: Dittmanns Beobachtungs- und Praxiskapitel (Care Gap, Konsens-Erziehung, Radikalisierung, Care-Berufe) sind auch nach Reeves-Standard wertvoll und für deutsche Eltern konkreter als alles bei Reeves; ihre Kausaltheorie sollte man durch Reeves’ Nature-AND-Nurture-Rahmen ersetzen. Umgekehrt bleibt Reeves gegenüber Eltern seltsam stumm — für den deutschen Alltag ist Dittmann die Anwendungsschicht, die ihm fehlt. Zusammen mit Galloway ergibt sich die Dreiecks-Pointe: Struktur (Reeves), Erziehung (Dittmann), Selbstformung (Galloway) — drei Hebel, ein Zielbild.'
	}
];
