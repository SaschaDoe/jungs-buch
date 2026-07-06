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
	},
	{
		id: 'ba-vs-obm',
		bookA: 'ba',
		bookB: 'obm',
		tagline: 'Das Rivalen-Paar: zwei Empirie-Ansprüche, ein direkter Schlagabtausch',
		relationship:
			'Das einzige Paar des Korpus, in dem sich die Bücher offen bekriegen: Reeves weist Sax NAMENTLICH zurück — als medizinische Überklage, die aus realen Timing-Befunden harte Dimorphismus-Pädagogik macht. Zugleich ist Boys Adrift (2007) die Vorlage, auf die Of Boys and Men (2022) antwortet: dieselbe Diagnose (Bildungsgap, Failure to Launch, unmotivierte junge Männer), dieselbe Grundüberzeugung, dass Biologie eine Rolle spielt, sogar dieselbe Kern-Policy (Jungen später einschulen). Der Streit liegt nicht im OB, sondern im WIE: Sax erklärt die Krise über fünf medizinisch-kausale Faktoren (Schule, Videospiele, ADHD-Medikamente, endokrine Disruptoren, verlorene Initiationsriten), Reeves über Strukturen (Brain-Timing im Schulsystem, Arbeitsmarktwandel, Familienrecht). Fünfzehn Jahre und ein Evidenz-Standard trennen sie — und der Vergleich zeigt, wie viel von Sax übrig bleibt, wenn man ihn durch den Brookings-Filter schickt: die Diagnose fast vollständig, die Kausalfaktoren fast gar nicht.',
		dimensions: [
			{
				dimension: 'Diagnose der Krise',
				a: 'Früh und alarmistisch (2007): Bildungsgap (NAEP), Failure to Launch, Motivationsverlust — im Audit die stärkste Etage des Buches, durch Bundesdaten gut gestützt. Sax hat die Krise VOR der Debatte benannt.',
				b: 'Dieselbe Diagnose, 15 Jahre später, mit besseren Daten: Bildungsgap global (PISA/NCES), Deaths of Despair, Arbeitsmarkt-Abstieg (Autor/Wasserman). Bestätigt Sax’ Alarm rückwirkend fast vollständig.',
				delta: 'Der unbequeme Punkt für Reeves-Leser: Sax hatte mit der Diagnose zuerst recht, als sie noch als Panikmache galt. Reeves liefert die Validierung — ohne Sax dafür zu würdigen.'
			},
			{
				dimension: 'Kausalmodell',
				a: 'Fünf medizinische Faktoren: (1) verfrühte/verkopfte Schule, (2) Videospiele kapern den „Will to Power“, (3) ADHD-Überdiagnose + Stimulanzien schädigen das Motivationszentrum, (4) endokrine Disruptoren feminisieren Jungen, (5) verlorene Initiationsriten. Im Audit: Faktor für Faktor zwischen umstritten und spekulativ.',
				b: 'Strukturell: PFC-Timing trifft auf ein beschleunigtes Schulsystem; Automatisierung/Globalisierung treffen männliche Jobs; Familienrecht entkoppelt Väter. Jeder Baustein mit Peer-Review-Quelle.',
				delta: 'Der Kern des Streits. Sax’ Faktoren sind kausal stark erzählt und schwach belegt (Nucleus-accumbens-These unbewiesen, Wildlife-Extrapolation spekulativ, Nietzsche-Rahmen untestbar); Reeves’ Strukturbefunde sind schwächer erzählt und robust belegt. Wer Ursachen zitieren will, nimmt Reeves; Sax’ Faktoren sind Hypothesen-Katalog, nicht Befund.'
			},
			{
				dimension: 'Biologie-Position',
				a: 'Dimorphismus stark: hard-wired Geschlechterunterschiede in Lernen, Hören, Motivation; Testosteron als Motor; daraus folgt geschlechtergetrennte Pädagogik.',
				b: 'Mittelposition: Timing-Differenzen ja (PFC ~2 Jahre), Typ-Differenzen klein (Ritchie: 48% Overlap selbst beim größten Unterschied). Lehnt Sax’ Sprung von „Reifung verschieden“ zu „Wesen verschieden“ explizit ab.',
				delta: 'Die präziseste Bruchlinie: Beide akzeptieren Biologie — Sax macht aus einem TIMING-Befund eine TYP-Pädagogik, Reeves bleibt beim Timing. Die Single-Sex-Schooling-Evidenz (Pahlke-Meta: ~null Effekt) gibt Reeves recht.'
			},
			{
				dimension: 'Die gemeinsame Policy: später einschulen',
				a: 'Sax empfiehlt seit 2005/2007, Jungen später einzuschulen bzw. den Lehrplan zu entschleunigen — begründet über Hirnreifung und kindgerechtes Lernen.',
				b: 'Redshirt the Boys: alle Jungen default ein Jahr später — begründet über Cascio/Schanzenbach- und Cook/Kang-Daten.',
				delta: 'Das stärkste Konvergenz-Signal des ganzen Korpus: Dieselbe konkrete Maßnahme aus verfeindeten Rahmen, einmal klinisch, einmal ökonometrisch hergeleitet. Wenn zwei Rivalen unabhängig hier landen, verdient Redshirting mehr Aufmerksamkeit als jede andere Einzelforderung der Bibliothek.'
			},
			{
				dimension: 'Evidenzprofil',
				a: 'Deskriptive Etage grün (Bundesdaten), Kausal-Etage gelb bis rot: umstrittene Gaming-Meta-Analysen, unbewiesene Stimulanzien-These, spekulative Endokrin-Extrapolation, anekdotische Fallgeschichten als Beleg.',
				b: 'Robusteste Quelle des Korpus: 0 rote Glieder, markierte Unsicherheit, Meta-Analysen und Regierungsstatistik.',
				delta: 'Sax ist der Preis der Früherkennung: Wer 2007 Alarm schlägt, hat 2007er-Evidenz. Reeves ist der Gewinn der Geduld — aber er konnte nur so solide sein, weil die Debatte (auch durch Sax) schon 15 Jahre lief.'
			},
			{
				dimension: 'Politische Anschlussfähigkeit',
				a: 'Kulturkampf-nah: Kritik an „feminisierter“ Schule, Gender-Medizin-Rhetorik, konservatives Publikum; von der Linken pauschal verworfen, von der Rechten pauschal übernommen.',
				b: 'Demonstrativ zentristisch: eigene Kapitel gegen Links UND Rechts; anschlussfähig in Policy-Debatten beider Seiten.',
				delta: 'Erklärt die Rezeptions-Asymmetrie: Inhaltlich überlappen die Bücher stark, aber Sax’ Rahmung machte die Jungenkrise jahrelang zum Lager-Thema — Reeves’ Leistung ist zur Hälfte Entgiftung derselben Diagnose.'
			}
		],
		nearIdentical: [
			'Die Diagnose: Bildungsgap + Failure to Launch + Motivationskrise junger Männer — Sax (2007) und Reeves (2022) beschreiben dasselbe Phänomen mit denselben Datenquellen-Typen.',
			'Später einschulen (Redshirting) — dieselbe konkrete Policy aus entgegengesetzten Begründungen; das stärkste unabhängige Konvergenz-Signal des Korpus.',
			'Mehr männliche Lehrer und Rollenvorbilder in Schule und Erziehung.',
			'Biologie ist real: beide gegen die „Gehirne sind gleich“-Position (Reeves moderat, Sax stark).',
			'Videospiele/Bildschirme als Problemverstärker für Jungen (Sax als Kernfaktor, Reeves am Rande).',
			'Sorge um vaterlose Jungen und den Verlust männlicher Entwicklungspfade.'
		],
		divergent: [
			'Kausalmodell: fünf medizinische Faktoren vs. strukturelle Erklärung — Reeves weist Sax’ Biologismus namentlich zurück.',
			'Single-Sex Schooling: Sax’ Kernempfehlung, von der Meta-Analytik (Pahlke) nicht gestützt und von Reeves nicht übernommen.',
			'Endokrine Disruptoren und Stimulanzien-Schäden: nur Sax, empirisch bis heute nicht eingelöst.',
			'Timing- vs. Typ-Differenzen: Reeves’ präziseste Korrektur an Sax.',
			'Evidenz-Standard: Fallgeschichten und umstrittene Metas vs. Brookings-Apparat.',
			'Politische Rahmung: Kulturkampf-Anschluss vs. Zentrismus als Methode.'
		],
		verdict:
			'Reeves ist Sax minus Überklage: Die Diagnose übersteht den Brookings-Filter fast vollständig, die fünf Kausalfaktoren fast gar nicht — übrig bleiben Timing-Biologie und Schulstruktur. Fair gelesen war Sax der Frühwarner, der mit der Krise recht hatte und mit den Ursachen überzog; Reeves der Spätvalidierer, der die Diagnose entgiftete und belegte. Die Pointe für die Praxis: Wo beide RIVALEN unabhängig konvergieren — Redshirting, männliche Lehrer, Biologie-ernst-nehmen-ohne-Determinismus — liegt der belastbarste Kern der gesamten Jungenkrisen-Literatur.'
	},
	{
		id: 'ba-vs-jvh',
		bookA: 'ba',
		bookB: 'jvh',
		tagline: 'Die Maximaldistanz: zwei Elternratgeber, unvereinbare Rezepte',
		relationship:
			'Das Paar mit der größten Spannweite des Korpus: zwei Erziehungsratgeber für dieselben Söhne, geschrieben von den entgegengesetzten Polen der Nature/Nurture-Achse. Sax (Arzt, 2007, USA) sieht Jungen als biologisch eigene Spezies, die von feminisierter Schule, Bildschirmen, Medikamenten und Chemikalien von ihrer Natur abgeschnitten wird; Dittmann (Journalistin, 2023, Deutschland) sieht Jungen als Opfer der Männlichkeitsnormen, die ihnen anerzogen werden. Beim NBM-vs-JVH-Vergleich trug die These „Verbündete, die sich für Feinde halten“ — hier ist der Test, ob sie auch am Extrempol hält. Antwort: nur zur Hälfte. Diagnose und Mediensorge konvergieren weiter, aber die HANDLUNGSempfehlungen kollidieren real: getrennte Klassen gegen koedukative Gleichstellungspädagogik, Rollenbilder stärken gegen Rollenbilder abbauen, Jungen als Jungen fördern gegen Jungen vom Junge-sein-Müssen entlasten. Wo Galloway und Dittmann nur andere Etiketten für dasselbe Programm nutzen, wollen Sax und Dittmann im Klassenzimmer tatsächlich Verschiedenes tun.',
		dimensions: [
			{
				dimension: 'Grundprämisse',
				a: 'Hard-wired: Jungen lernen, hören, reagieren biologisch anders; Testosteron treibt Motivation; die Schule ignoriert das auf Kosten der Jungen.',
				b: '„Gehirne sind gleich“: Baby-X, Boy Code, hegemoniale Männlichkeit; die Unterschiede werden gemacht — von Eltern, Schule, Kultur.',
				delta: 'Die beiden Extrempole des Korpus in Reinform. Die Meta-Analytik (Hyde, Chaplin & Aldao, Davis & Hines, Pahlke) widerspricht BEIDEN Zuspitzungen: Differenzen existieren, sind aber klein und plastisch. Jede Seite zitiert nur die Hälfte der Literatur.'
			},
			{
				dimension: 'Wer ist schuld?',
				a: 'Die moderne Umwelt: verkopfte Frühpädagogik, Videospiele, ADHD-Stimulanzien, endokrine Disruptoren, verschwundene Initiationsriten. Männlichkeit selbst ist gesund — sie wird vergiftet.',
				b: 'Die Männlichkeitsnormen: Boy Code, Externalisierung (Böhnisch), hegemoniale Männlichkeit (Connell). Die Kultur der Männlichkeit ist das Gift.',
				delta: 'Spiegelbildliche Schuldzuweisung mit identischer Struktur: Beide erzählen „gesunde Jungen werden von außen beschädigt“ — nur ist das Außen einmal die moderne (entmännlichte) Welt und einmal die traditionelle (männliche) Norm. Beide Erzählungen immunisieren das eigene Weltbild.'
			},
			{
				dimension: 'Schule konkret',
				a: 'Geschlechtergetrennte Klassen, später einschulen, experientielles Lernen, Wettbewerb zurückholen, Zero-Tolerance abschaffen.',
				b: 'Koedukation mit Gleichstellungs-Pädagogik, mehr männliche Erzieher/Grundschullehrer, anti-stereotype Erziehung, Konflikt- und Konsens-Kultur.',
				delta: 'Der einzige echte Praxis-Konflikt der bisherigen Vergleiche: getrennte vs. gemeinsame Klassen sind nicht beides machbar. Die Evidenz: Single-Sex zeigt meta-analytisch ~null Effekt (Pahlke) — Punkt für Dittmann; mehr männliche Lehrkräfte fordern BEIDE — der gemeinsame Rest ist zugleich der belastbarste.'
			},
			{
				dimension: 'Medien & Porn',
				a: 'Videospiele kapern den Willen (Dopamin/„Will to Power“), Porn ersetzt Beziehungen — zwei der fünf Kernfaktoren.',
				b: 'Tate-Pipeline: Algorithmen spülen Jungen Frauenhass zu; Porn erfordert Konsens- und Medienkompetenz-Erziehung.',
				delta: 'Die stabilste Konvergenz auch am Extrempol: Beide fürchten dieselben Bildschirme, nur einmal als Motivations- und einmal als Ideologie-Gefahr. Wie bei NBM-vs-JVH gilt: zusammen ergeben beide Sorgen das vollständige Bild.'
			},
			{
				dimension: 'Männliche Bezugspersonen & Übergänge',
				a: 'Initiationsriten, Männergemeinschaften, Vater/Mentoren als Entwicklungs-Notwendigkeit — deren Verlust ist Kernfaktor 5.',
				b: 'Männliche Erzieher und Grundschullehrer, Väter in Care-Verantwortung — als Gleichstellungs- und Vorbild-Frage.',
				delta: 'Konvergenz mit verschiedener Begründung: Sax will Männer, die Jungen ins MANN-Sein führen; Dittmann will Männer, die Jungen zeigen, dass Männer SORGEN können. Die Forderung „mehr Männer um Jungen herum“ teilt der gesamte Korpus — nur ihr Zweck ist umkämpft.'
			},
			{
				dimension: 'Evidenzprofil',
				a: 'Deskriptiv grün, kausal gelb-rot: umstrittene Gaming-Metas, unbewiesene Medikamenten-These, spekulative Endokrin-Kette, Anekdoten als Beleg.',
				b: 'Beobachtungen solide (Destatis, BMFSFJ, DCU, Way), aber zwei tragende Prämissen-Schwächen (Gehirn-Gleichheit, Sozialisations-Monokausalität).',
				delta: 'Symmetrische Schwäche auf verschiedenen Etagen: Sax’ Fundament (Diagnose) ist stark und sein Überbau (Faktoren) weich; Dittmanns Überbau (Praxis-Kapitel) ist brauchbar und ihr Fundament (Prämisse) weich. Keiner von beiden taugt als alleinige Quelle.'
			}
		],
		nearIdentical: [
			'Die Diagnose: Jungen fallen in der Schule zurück und verlieren Anschluss — von beiden mit nationalen Daten belegt (NAEP vs. deutsche Bildungsstatistik).',
			'Bildschirm-Sorge: Videospiele/Algorithmen als spezifische Jungen-Gefahr (Dopamin-Mechanik bei Sax, Tate-Pipeline bei Dittmann).',
			'Porn als Erziehungsthema, das Eltern nicht ignorieren dürfen.',
			'Mehr männliche Lehrer, Erzieher und Bezugspersonen — die einzige Schulforderung, die beide teilen.',
			'Väter/Mentoren sind entwicklungsrelevant und fehlen zu oft.',
			'Anti-Fatalismus: Eltern können und müssen handeln (bei beiden die letzte Kettenstufe — und bei beiden die am schwächsten belegte).'
		],
		divergent: [
			'Nature vs. Nurture in Reinform: hard-wired Differenz vs. Baby-X-Gleichheit — die Extrempole des Korpus.',
			'Single-Sex vs. Gleichstellungs-Koedukation: der einzige echte, unvereinbare Praxis-Konflikt der Vergleichsreihe.',
			'Männlichkeit: von der Moderne bedrohtes Gut (Sax) vs. zu überwindende Norm (Dittmann).',
			'Wettbewerb & Raufen: zurückholen (Sax) vs. als Boy-Code-Erbe problematisieren (Dittmann).',
			'Testosteron: Motivations-Motor vs. „ist komplex“-Entkräftung.',
			'Schuldrichtung: entmännlichte Umwelt vs. männliche Norm — spiegelbildliche Kausalerzählungen.'
		],
		verdict:
			'Am Extrempol bricht die „heimliche Verbündete“-These zur Hälfte: Diagnose, Mediensorge und der Ruf nach männlichen Bezugspersonen konvergieren auch hier — aber im Klassenzimmer wollen Sax und Dittmann tatsächlich Unvereinbares (getrennt vs. gleichgestellt-gemeinsam, Rollenbilder stärken vs. abbauen). Damit markiert dieses Paar die tatsächliche Konfliktlinie der Jungendebatte: Sie verläuft nicht zwischen Diagnose-Leugnern und Alarmisten, sondern zwischen zwei Therapien für dieselbe anerkannte Krankheit. Die Meta-Analytik gibt keiner Therapie recht, dem gemeinsamen Rest aber schon: mehr Männer um Jungen herum, Bildschirme ernst nehmen, Eltern nicht aus der Verantwortung lassen. Alles darüber hinaus ist einstweilen Weltanschauung.'
	},
	{
		id: 'ba-vs-nbm',
		bookA: 'ba',
		bookB: 'nbm',
		tagline: 'Ist Notes on Being a Man ein Sax-Buch mit Reeves-Etikett?',
		relationship:
			'Die unbequemste Frage der Vergleichsreihe. Galloway nennt Reeves seinen „Yoda“ — aber seine KAUSALMECHANIK stammt erkennbar aus der Sax-Tradition: Dopamin-Produkte kapern die Motivation junger Männer (im Graph derselbe Shared Node), Porn ersetzt das Mating (ebenfalls), Testosteron als Motor des Jungen-Verhaltens, „more nature than nurture“. Sogar die Kapitelarchitektur ähnelt sich: Galloways „Enemies of Young Men“ (PFC, Addictions, Complaining) sind funktional Sax’ Fünf-Faktoren-Katalog in Selbsthilfe-Form. Achtzehn Jahre trennen die Bücher — und machen das Paar zum unfreiwilligen Longitudinal-Experiment: Sax’ 2007er-Prognose (Failure to Launch wird sich verschärfen) lässt sich an Galloways 2025er-Zahlen (NEET verdreifacht, 60% der 18-24-Jährigen bei den Eltern) direkt ablesen. Die Diagnose-Prognose hat sich bestätigt; die spezifischen Sax-Ursachen (Stimulanzien, endokrine Disruptoren) sind auch 2025 unbelegt — und tauchen bei Galloway bezeichnenderweise nicht mehr auf.',
		dimensions: [
			{
				dimension: 'Kausalmechanik',
				a: 'Fünf Faktoren, medizinisch gerahmt: Schule, Videospiele („Will to Power“-Kaperung), ADHD-Stimulanzien, endokrine Disruptoren, verlorene Riten.',
				b: 'Addiction Economy, PFC-Timing, Porn als Rejection-Killer, Guardrail-Verlust — dieselbe Grundmechanik (Dopamin trifft unreifen männlichen Kortex) ohne die Medikamenten- und Chemie-Faktoren.',
				delta: 'Kern-Antwort auf die Titelfrage: JA, mechanisch ist Galloway Sax’ Erbe — zwei der zentralen Kausalthesen sind im Graph wörtlich verschmolzen. Aufschlussreich ist, was Galloway WEGLÄSST: die beiden am schlechtesten gealterten Sax-Faktoren (Stimulanzien-Schaden, Endokrin-Feminisierung) sind stillschweigend entsorgt.'
			},
			{
				dimension: 'Etikett & Autorität',
				a: 'Beruft sich auf die eigene Praxis als Arzt und Psychologe plus Studienapparat (teils umstritten). Autorität: Klinik.',
				b: 'Beruft sich auf Reeves/AIBM und erzählt die eigene Biografie. Autorität: Erfahrung + geliehene Brookings-Glaubwürdigkeit — bei Sax-artiger Argumentationsmechanik.',
				delta: 'Die Reeves-Zitate funktionieren bei Galloway als Seriositäts-Anker für Thesen, die Reeves so nicht vertritt („more nature than nurture“, Dopamin als Hauptursache). Wer Galloway liest, bekommt öfter Sax, als das Namensregister verrät.'
			},
			{
				dimension: 'Der 18-Jahre-Test',
				a: '2007 prognostiziert: eine Generation unmotivierter junger Männer, die den Start ins Leben nicht schafft — damals als Alarmismus kritisiert.',
				b: '2025 dokumentiert: NEET-Quote verdreifacht, 60% der 18-24-Jährigen bei den Eltern, Sexless-Statistiken, Manosphere — Galloways Zahlen sind Sax’ eingetroffene Prognose.',
				delta: 'Das Paar als Longitudinal-Experiment: Die DIAGNOSE-Prognose hat sich bestätigt (Punkt für Sax), die Ursachen-Prognosen nicht überprüfbar besser geworden — die Dopamin-These ist von Sax’ Randposition zum Haidt-Mainstream gewandert, OHNE kausal besser belegt zu sein (Odgers/Przybylski-Kritik trifft beide Bücher gleichermaßen).'
			},
			{
				dimension: 'Männlichkeits-Bild',
				a: 'Jungen brauchen Initiation ins Mann-Sein: Riten, Männergemeinschaften, Verantwortungsübernahme — Gemeinschaft macht den Mann.',
				b: 'Protect/Provide/Procreate plus Code, Frat-Erfahrung, Boy Scouts, Mentoren — strukturell dieselbe Initiations-Idee, autobiografisch beglaubigt statt anthropologisch begründet.',
				delta: 'Fast deckungsgleich, und beide gegen den Zeitgeist formuliert. Unterschied im Ton: Sax paternalistisch (Eltern sollen Riten organisieren), Galloway peer-förmig (such dir deinen Stamm selbst). Galloways Version ist dadurch für junge Männer anschlussfähiger.'
			},
			{
				dimension: 'Gleichstellungs-Verhältnis',
				a: 'Defensiv bis kulturkämpferisch: die „feminisierte“ Schule als Täterin; Frauenbewegungs-Errungenschaften kommen kaum vor.',
				b: 'Explizit feminismus-kompatibel: „No one should want to slow the arrow of this trajectory“; Empathie sei kein Nullsummenspiel; Kritik trifft Tech-Konzerne und Politik, nicht Frauen.',
				delta: 'Der wichtigste echte Unterschied — und Reeves’ sichtbarster Einfluss auf Galloway: dieselbe Krise ohne Gegner-Konstruktion Richtung Feminismus. Das macht Galloway koalitionsfähig, wo Sax polarisiert.'
			},
			{
				dimension: 'Evidenzprofil',
				a: 'Deskriptiv grün, kausal gelb-rot; klinische Anekdoten als Belege; zwei Faktoren bis heute empirisch nicht eingelöst.',
				b: '12 grün / 12 gelb / 2 ROT / 4 untestbar; Blog-Sekundärquellen und eine retracted Studie; stark nur, wo Reeves nacherzählt wird.',
				delta: 'Ehrliches Fazit: Die beiden evidenziell schwächsten Bücher der Vergleichsreihe — beide leben von starker Erzählung über dünner Kausal-Evidenz. Sax’ Fehler sind die eines Klinikers (Überkausalisierung), Galloways die eines Podcasters (Quellenhygiene).'
			}
		],
		nearIdentical: [
			'Die Dopamin-These: Videospiele/Addiction Economy kapern die Motivation junger Männer — im Graph derselbe Shared Node, 2007 und 2025 fast wortgleich.',
			'Porn ersetzt reale Beziehungsanbahnung/Mating — ebenfalls verschmolzener Shared Node.',
			'Testosteron als Motor männlichen Verhaltens, „more nature than nurture“.',
			'Failure to Launch als Kern-Diagnose (bei Galloway mit den 2025er-Zahlen, die Sax’ Prognose bestätigen).',
			'Initiation/Männergemeinschaft als Entwicklungs-Notwendigkeit (Riten vs. Frat/Scouts/Mentoren).',
			'Anti-Verweichlichungs-Motive: Risiko, Wettbewerb und Bewährung als gesunde Jungen-Bedürfnisse.'
		],
		divergent: [
			'Stimulanzien- und Endokrin-Faktoren: Sax’ zwei riskanteste Thesen fehlen bei Galloway vollständig — stille Selbstkorrektur der Tradition.',
			'Gleichstellung: Kulturkampf-Rahmung (Sax) vs. explizite Feminismus-Kompatibilität (Galloway) — Reeves’ sichtbarster Einfluss.',
			'Adressat: Eltern/Pädagogik (Sax) vs. der junge Mann selbst (Galloway).',
			'Schul-Programm: Single-Sex und Lehrplan-Reform (Sax) vs. praktisch keine Schulforderungen (Galloway).',
			'Autoritätsquelle: klinische Praxis vs. Memoir + geliehene Brookings-Seriosität.',
			'Emotionalität: bei Sax Randthema; bei Galloway (via hooks/Pollack-Konvergenz, ohne deren Namen) zentral — „lean into your emotions“.'
		],
		verdict:
			'Die Antwort auf die Titelfrage lautet: mechanisch ja, politisch nein. Galloways Kausal-Kern (Dopamin, Porn, T, Initiation) ist die Sax-Tradition — modernisiert, von ihren zwei am schlechtesten gealterten Faktoren befreit und mit Reeves-Zitaten beglaubigt. Sein echter Fortschritt gegenüber Sax liegt nicht in der Evidenz (beide sind kausal dünn), sondern in der Rahmung: Feminismus-kompatibel statt kulturkämpferisch, Selbstformung statt Paternalismus, Emotionsöffnung statt reiner Härtung. Als Longitudinal-Paar gelesen zeigen die Bücher beides: dass die Diagnose von 2007 real war — und dass die populärste Kausalerzählung (Bildschirm-Dopamin) in 18 Jahren vom Rand in den Mainstream wanderte, ohne den Kausalitäts-Beweis mitzubringen.'
	},
	{
		id: 'rc-vs-ba',
		bookA: 'rc',
		bookB: 'ba',
		tagline: 'Duell der US-Erziehungsklassiker: Gefühl gegen Biologie',
		relationship:
			'Die beiden prägenden amerikanischen Jungen-Elternbücher ihrer Ära, acht Jahre auseinander (1999/2007), geschrieben für dieselben Eltern über dieselben Symptome — unmotivierte, wütende, abgehängte Jungen — mit konkurrierenden Diagnosen: Kindlon & Thompson (zwei Schulpsychologen mit Jahrzehnten Klinikpraxis) erklären die Krise über EMOTIONALE FEHLERZIEHUNG — Jungen wird das Gefühlsvokabular systematisch aberzogen, der Rest (Wut, Rückzug, Substanzen, Gewalt) ist Folgeschaden. Sax (Arzt) erklärt dieselben Symptome über fünf biologisch-mediale Faktoren — Schule gegen die Jungen-Natur, Videospiele, Stimulanzien, Chemikalien, verlorene Riten. Der Audit-Vergleich ist eine kleine Sensation: Das ÄLTERE Buch ist das methodisch robustere (8 von 12 Gliedern grün, null rote — gegen Sax\u2019 gelb-rote Kausal-Etage). Und die Überlappungen der beiden Rivalen (Schul-Mismatch, Disziplin-Kritik, Väter) sind wieder einmal das Belastbarste an beiden.',
		dimensions: [
			{
				dimension: 'Kausalmodell',
				a: 'Emotionale Fehlerziehung: Jungen kommen mit voller Gefühlskapazität zur Welt und werden kulturell „emotional verkrüppelt“ — durch Eltern-Spiegelung, Culture of Cruelty unter Peers, harte Disziplin. Mechanismen klinisch hergeleitet, Grundlagen entwicklungspsychologisch repliziert.',
				b: 'Fünf Faktoren: Schule, Videospiele, ADHD-Stimulanzien, endokrine Disruptoren, verlorene Riten — medizinisch gerahmt, im Audit Faktor für Faktor zwischen umstritten und spekulativ.',
				delta: 'Kultur- vs. Biologie-Erklärung für identische Symptome. Der Audit gibt der Klinik recht: Kindlon/Thompsons Fundament (Chaplin & Aldao-kompatible Entwicklungsbefunde, Dodge-Experimente, Vater-Längsschnitte) hat gehalten; Sax\u2019 riskanteste Faktoren (Stimulanzien-Schaden, Endokrin-These) sind 18 Jahre später weiter unbelegt.'
			},
			{
				dimension: 'Schule',
				a: 'Schul-Mismatch: Curriculum und Disziplinarsystem passen nicht zur Entwicklung von Jungen; Zero-Tolerance und Beschämung treffen Jungen überproportional (epidemiologische Daten).',
				b: 'Gleiche Diagnose, andere Therapie: verfrühter Lehrplan, verlorenes experientielles Lernen — Lösung: geschlechtergetrennte Klassen, später einschulen.',
				delta: 'Die Diagnose (Schule benachteiligt Jungen strukturell) teilen beide — im Graph derselbe Shared Node. Die Therapien trennen sich: emotionale Nachrüstung der bestehenden Schule (RC) vs. bauliche Trennung (BA). Die Single-Sex-Evidenz (Pahlke: ~null) spricht für die RC-Richtung.'
			},
			{
				dimension: 'Die Rolle der Härte',
				a: 'Culture of Cruelty: Die Grausamkeit unter Jungen (Hänseln, Hierarchie, Homophobie-Policing) ist ein HAUPTSCHADEN — sie erzwingt die emotionale Panzerung.',
				b: 'Wettbewerb und Raufen sind GESUNDE Jungen-Bedürfnisse, deren Verbot schadet; Härte-Erfahrungen gehören zur Initiation.',
				delta: 'Der direkteste inhaltliche Widerspruch des Paars: Dieselbe Pausenhof-Realität ist einmal Pathogen, einmal Nährstoff. Die differenzierte Lage: strukturiertes Kräftemessen (Sport, Rough-and-Tumble) hat Evidenz für Nutzen, unstrukturierte Peer-Grausamkeit für Schaden — beide Bücher verallgemeinern ihre Hälfte.'
			},
			{
				dimension: 'Väter',
				a: 'Vater-Sohn-Kapitel mit Landmark-Längsschnitten (26/27-Jahre-Follow-ups): väterliche emotionale Präsenz prädiziert Entwicklung — der stärkste Evidenz-Baustein des Buches.',
				b: 'Vater als Kulturverlust: mediale Buffoon-Darstellung, fehlende Riten, fehlende Männergemeinschaft.',
				delta: 'Konvergenz mit Qualitätsgefälle: RC belegt die Vater-Wirkung längsschnittlich, Sax beklagt sie kulturkritisch. Gemeinsame Botschaft (Väter/Mentoren sind nicht optional) gehört zum belastbaren Kern des Korpus.'
			},
			{
				dimension: 'Evidenzprofil',
				a: '8 grün / 4 gelb / 0 rot / 0 untestbar — für ein Elternbuch von 1999 außergewöhnlich. Schwächen: anekdotische Kapitel (Cruelty, Isolation), untested Interventionen, Stichprobe weißer Privatschuljungen.',
				b: 'Deskriptiv grün, kausal gelb-rot; zwei Faktoren empirisch nie eingelöst; Anekdoten als Belege.',
				delta: 'Das Audit-Ergebnis stellt die Intuition auf den Kopf: Der Arzt argumentiert unsauberer als die Therapeuten. RC altert besser, weil es dort vorsichtig blieb, wo Sax kausal zupackte.'
			}
		],
		nearIdentical: [
			'Schul-Mismatch: Das Schulsystem passt strukturell nicht zu Jungen — im Graph derselbe Shared Node, mit epidemiologischen Daten bei beiden.',
			'Disziplin-Kritik: Zero-Tolerance und Beschämungspraktiken treffen Jungen überproportional und verschärfen die Spirale.',
			'Väter und männliche Mentoren sind entwicklungsentscheidend.',
			'Die Diagnose selbst: wütende, unmotivierte, abgehängte Jungen als reale, datierbare Krise — nicht als Panik.',
			'Anti-Fatalismus: Eltern können viel bewirken (bei beiden zugleich die am dünnsten belegte Etage).',
			'Substanzen/Bildschirme füllen ein Vakuum — RC nennt es emotionale Leere, BA Dopamin-Kaperung; die Beobachtung ist dieselbe.'
		],
		divergent: [
			'Ursache: kulturelle Gefühls-Aberziehung vs. biologisch-mediale Fünf-Faktoren-Vergiftung.',
			'Härte & Wettbewerb: Pathogen (Culture of Cruelty) vs. Nährstoff (Initiation, Kräftemessen).',
			'Schul-Therapie: emotionale Nachrüstung vs. Geschlechtertrennung.',
			'Biologie-Gewicht: „biology is not destiny“ (RC) vs. hard-wired Differenz (BA).',
			'Testosteron: Randnotiz vs. Motivations-Motor.',
			'Audit-Alterung: das 1999er-Buch hält 2025 besser als das 2007er — Klinik-Vorsicht schlägt Medizin-Kausalmut.'
		],
		verdict:
			'Das Duell der Klassiker endet mit einem Auswärtssieg der Therapeuten: Raising Cain trägt seine Thesen auf replizierten Entwicklungsbefunden und Längsschnitten, Boys Adrift auf einem Hypothesen-Katalog, von dem zwei Posten nie eingelöst wurden. Beide haben denselben blinden Fleck (untested Lösungen, Anekdoten-Kapitel) und denselben harten Kern gemeinsam — Schule, Disziplin, Väter —, der damit erneut als das Belastbarste der Jungenliteratur bestätigt ist. Die eigentliche Lektion des Paars: Die Frage „Gefühl oder Biologie?“ war schon immer falsch gestellt — die Symptomlisten beider Bücher sind austauschbar, nur ihre Lieblingsursachen nicht.'
	},
	{
		id: 'rc-vs-obm',
		bookA: 'rc',
		bookB: 'obm',
		tagline: 'Klinik trifft Struktur: die zwei robustesten Bücher des Korpus',
		relationship:
			'Das Qualitäts-Gipfeltreffen: die methodisch stärkste klinische Quelle (Raising Cain: 8/12 grün, null rot) gegen die methodisch stärkste strukturelle (Of Boys and Men: null rot, Brookings-Apparat). Beide beschreiben dieselben Endpunkte — Depression, Suizid, Schulversagen, Substanzkonsum, Vater-Entkopplung — aber auf verschiedenen Ebenen: Kindlon/Thompson sehen den einzelnen Jungen im Sprechzimmer, Reeves die Kohorte in der Statistik. Der Konflikt ist präzise lokalisierbar: Reeves kritisiert den individualistischen Reflex der Emotional-Literacy-Tradition — man könne Jungen nicht aus einer Strukturkrise heraustherapieren; Kalamazoo zeigt, dass wohlmeinende Förderung bei Jungen oft verpufft. Umgekehrt hat Reeves für das, was im Sprechzimmer sitzt, buchstäblich kein Kapitel. Es ist das komplementärste Paar der Reihe: kaum echte Widersprüche, aber zwei Bücher, die einander systematisch die blinden Flecken füllen.',
		dimensions: [
			{
				dimension: 'Analyseebene',
				a: 'Der einzelne Junge: Innenleben, Gefühlsvokabular, Scham, Vater-Beziehung — hergeleitet aus Jahrzehnten Schulklinik-Praxis.',
				b: 'Die Kohorte: Bildungs-, Arbeitsmarkt- und Mortalitätsstatistik; der Einzelne kommt als Fallzahl vor.',
				delta: 'Kein Widerspruch, sondern Arbeitsteilung: RC erklärt, WIE sich die Krise im einzelnen Jungen anfühlt und festsetzt; Reeves erklärt, WARUM sie ganze Jahrgänge trifft. Wer nur eines liest, hält entweder alles für Therapie- oder alles für Politikversagen.'
			},
			{
				dimension: 'Wo die Bücher kollidieren',
				a: 'Lösung: emotionale Alphabetisierung — Eltern und Schulen sollen Jungen ein Gefühlsvokabular geben; Interventionen klinisch plausibel, aber ungetestet.',
				b: 'Einwand: Der individualistische Reflex therapiert Symptome einer Strukturkrise; Kalamazoo-Befund als Warnung, dass Förderprogramme bei Jungen oft nicht ankommen. Lösung: Systeme umbauen (Redshirt, HEAL, Direct Dads).',
				delta: 'Der einzige echte Konflikt — und er ist empirisch offen: Emotional-Literacy-Programme haben bis heute gemischte Evaluationen, Reeves\u2019 Policies sind größtenteils noch nie implementiert. Beide Lösungs-Etagen sind Wetten; nur die Diagnosen darunter sind belegt.'
			},
			{
				dimension: 'Biologie',
				a: '„Biology is not destiny“: kleine Anfangsunterschiede, große Sozialisationswirkung — vorsichtig anti-deterministisch, ohne die Gleichheits-These von Dittmann.',
				b: 'Nature AND Nurture: Timing-Differenzen real (PFC ~2 Jahre), Typ-Differenzen klein; gegen beide Extreme.',
				delta: 'Praktisch dieselbe Mittelposition mit anderer Betonung — RC von der Kultur-Seite kommend, Reeves von der Daten-Seite. Zusammen markieren sie den Konsens-Korridor, den Sax und Dittmann je in eine Richtung verlassen.'
			},
			{
				dimension: 'Väter',
				a: 'Vater-Sohn als klinisches Kernkapitel, gestützt auf 26/27-Jahre-Längsschnitte: emotionale Vater-Präsenz wirkt bis ins Erwachsenenalter.',
				b: 'Dad Deficit strukturell: 1 von 5 Vätern lebt nicht beim Kind; Familienrecht behandelt Väter als „walking ATMs“; Eggebeen: 22% der Eltern-Beiträge sind elternteil-spezifisch.',
				delta: 'Die stärkste Doppel-Validierung des Paars: Mikro-Längsschnitt (RC) und Makro-Statistik (Reeves) zeigen unabhängig dieselbe Vater-Wirkung. Nach dem Redshirting-Signal (BA/OBM) das zweitstärkste Konvergenz-Argument der Vergleichsreihe.'
			},
			{
				dimension: 'Evidenzprofil & blinde Flecken',
				a: '8 grün / 4 gelb / 0 rot — aber: Stichprobe weißer, wohlhabender Privatschuljungen; Mechanismen klinisch inferiert; Lösungen ungetestet.',
				b: '0 rot, Meta-Analysen, Regierungsdaten — aber: kein Zugang zum Innenleben; Black-Men-Kapitel bleibt Statistik; Policies unimplementiert.',
				delta: 'Spiegelbildliche Löcher: RC generalisiert von einer schmalen Stichprobe auf alle Jungen, Reeves von Aggregatdaten auf keinen konkreten. Wer beide kombiniert, hat das vollständigste Bild, das der Korpus hergibt.'
			}
		],
		nearIdentical: [
			'Verdeckte männliche Depression und Suizidgefälle als Kernbefund (klinisch bei RC, epidemiologisch bei Reeves).',
			'Schul-Mismatch: Schule passt strukturell nicht zu Jungen — derselbe Shared Node im Graph; RC liefert Disziplin-Daten, Reeves den PFC-Timing-Mechanismus.',
			'Väter sind nicht ersetzbar-optional: Längsschnitte (RC) + Eggebeen/Strukturdaten (Reeves).',
			'Biologie-Mittelposition: Differenzen real, aber klein/formbar — gegen Determinismus UND Gleichheits-These.',
			'Substanzen/Rückzug als Selbstmedikation einer tieferliegenden Leere.',
			'Feminismus-kompatible Grundhaltung: Jungen fördern ohne Frauen-Errungenschaften zurückzudrehen.'
		],
		divergent: [
			'Interventionsebene: Gefühlsvokabular für den Einzelnen vs. Systemumbau — der einzige echte Konflikt, empirisch unentschieden.',
			'Reeves\u2019 Individualismus-Kritik trifft RCs Lösungs-Kapitel direkt (Kalamazoo als Warnschuss).',
			'Reichweite der Stichprobe: Privatschul-Klinik vs. nationale Kohorten.',
			'Ökonomie: bei RC praktisch abwesend, bei Reeves die halbe Erklärung (Arbeitsmarkt, Löhne, Ehe-Gradient).',
			'Zeithorizont: RC (1999) kennt weder Smartphones noch Manosphere; Reeves integriert beide Debatten.',
			'Emotionen als Datentyp: erlebte Innenwelt vs. Survey-Variable.'
		],
		verdict:
			'Das komplementärste Paar der Reihe — und zusammengelesen der Goldstandard des Korpus: Die beiden einzigen Bücher ohne rote Audit-Glieder decken einander exakt die blinden Flecken ab (Innenleben vs. Struktur, Sprechzimmer vs. Statistik). Ihr einziger echter Streit — therapiert man Jungen oder Systeme? — ist zugleich die offenste empirische Frage der ganzen Debatte, denn beide Lösungs-Etagen sind ungetestete Wetten auf getesteten Diagnosen. Arbeitshypothese nach diesem Vergleich: Die Antwort ist ein UND, kein ODER — Reeves\u2019 Strukturen bestimmen, wie viele Jungen ins Sprechzimmer müssen; Kindlon/Thompson bestimmen, was dort mit ihnen geschieht.'
	},
	{
		id: 'rc-vs-jvh',
		bookA: 'rc',
		bookB: 'jvh',
		tagline: 'Die Ahnenlinie: US-Klinik wird deutsche Gleichstellungspädagogik',
		relationship:
			'Das Original und seine deutsche Enkelin: Dittmanns Kern-Apparat — Jungen werden mit voller Gefühlskapazität geboren, der Boy Code erzieht sie ab, Pseudoresilienz maskiert die Not — stammt direkt aus der Kindlon/Thompson-Pollack-Tradition und wird bei ihr ausdrücklich referiert. Jungs von heute (2023) ist damit die Übersetzung von Raising Cain (1999) in ein anderes Land, eine andere Generation und vor allem einen anderen RAHMEN: Aus der politisch bewusst zurückhaltenden Klinik-Beobachtung wird ein Gleichstellungs-Programm mit Connell/Böhnisch-Theorieetage, Care-Arbeit-Agenda und Tate-Kapitel. Der Vergleich zeigt präzise, was die Übersetzung kostet und was sie hinzugewinnt — und er erklärt nebenbei, warum das deutsche Buch angreifbarer ist als sein amerikanisches Original, obwohl es dieselbe Kernthese vertritt.',
		dimensions: [
			{
				dimension: 'Kernthese & Herkunft',
				a: 'Emotionale Fehlerziehung, klinisch beobachtet: Jungen verlieren ihr Gefühlsvokabular durch Elternspiegelung, Peer-Grausamkeit, Schuldisziplin. Keine politische Theorie-Etage darüber.',
				b: 'Dieselbe These, übernommen und theoretisch überbaut: Boy Code + hegemoniale Männlichkeit (Connell) + Externalisierung (Böhnisch) + „Gehirne sind gleich“-Prämisse.',
				delta: 'Die Übersetzung fügt genau die zwei Etagen hinzu, die im Audit zu Dittmanns kritischen Schwachstellen wurden: die Gleichheits-Prämisse (die RC so nie behauptet — „biology is not destiny“ ist schwächer als „Gehirne sind gleich“) und die Männlichkeits-Theorie als Monokausalität. Das Original ist robuster, WEIL es theorieärmer ist.'
			},
			{
				dimension: 'Evidenzbasis',
				a: '8 grün / 4 gelb / 0 rot: replizierte Entwicklungspsychologie, Dodge-Experimente, Vater-Längsschnitte, nationale Gesundheitsstatistik — plus klinische Fälle als Illustration, nicht als Beweis.',
				b: 'Solide Beobachtungs-Glieder (Destatis-Care-Gap, DCU/Tate, BMFSFJ, Way) — aber die tragenden Prämissen ruhen auf Baby-X-artigen Einzelbefunden und populärwissenschaftlicher Verdichtung.',
				delta: 'Generationen-Paradox: Das 24 Jahre ältere Buch hat den haltbareren Apparat. Dittmanns NEUE Daten (Care Gap, Algorithmen) sind echter Fortschritt; ihr ALTES Fundament ist eine zugespitzte Version dessen, was RC vorsichtiger formulierte.'
			},
			{
				dimension: 'Was die Übersetzung hinzugewinnt',
				a: 'Fehlt bei RC: Care-Arbeit, Konsens/Porno-Kompetenz, Berufswahl, digitale Radikalisierung — 1999 schlicht noch kein Thema oder kein US-Klinik-Thema.',
				b: 'Die Praxis-Kapitel: Hausarbeit erziehen, Drei-Ampeln-Konsensmodell, Care-Berufe, Tate-Medienpädagogik — konkreter Alltagsstoff für Eltern von heute.',
				delta: 'Der echte Mehrwert der Enkelin liegt nicht in der Theorie, sondern in der Aktualisierung: Dittmann beantwortet Erziehungsfragen, die es 1999 nicht gab. Diese Kapitel überleben auch den Prämissen-Einsturz unbeschadet.'
			},
			{
				dimension: 'Politische Rahmung',
				a: 'Bewusst lagerneutral: Kindlon/Thompson vermeiden Patriarchats- wie Biologie-Vokabular; das Buch wurde quer durch die Lager gelesen.',
				b: 'Explizit gleichstellungspolitisch: Jungenförderung als Beitrag zur gerechten Gesellschaft; Zielbild Caring Masculinity.',
				delta: 'Erklärt die Rezeptions-Differenz: RC konnte konservative wie progressive Eltern erreichen; Dittmann adressiert ein Milieu und immunisiert das andere — derselbe Effekt wie bei Sax, nur spiegelverkehrt.'
			},
			{
				dimension: 'Zielbild',
				a: 'Emotional ganze Jungen: ein Gefühlsvokabular, Bindungsfähigkeit, „emotional literacy“ — bewusst OHNE neues Männlichkeitsbild.',
				b: 'Caring Masculinity: ein positives Gegen-Männlichkeitsbild als Erziehungsziel.',
				delta: 'Subtil, aber folgenreich: RC will Jungen von Männlichkeits-VORGABEN entlasten, Dittmann setzt eine neue (bessere) Vorgabe. Connell würde bei beiden anmerken, dass auch „caring“ eine Norm ist — RC entgeht dem Einwand, Dittmann nicht.'
			}
		],
		nearIdentical: [
			'Die Kernthese: volle emotionale Kapazität bei Geburt, kulturelle Aberziehung, Maske/Pseudoresilienz — Dittmann übernimmt sie ausdrücklich aus dieser Tradition (Shared Nodes im Graph).',
			'Schul-Kritik: Disziplin und Struktur treffen Jungen überproportional.',
			'Verdeckte Not hinter Wut und Coolness als Erkennungs-Auftrag an Eltern.',
			'Freundschafts-These (bei beiden via Way-Tradition): Jungen verlieren Intimität in der Adoleszenz.',
			'Anti-Determinismus: Biologie erklärt die Krise nicht (RC vorsichtig, JVH zugespitzt).',
			'Eltern als Haupthebel — bei beiden die am dünnsten belegte Etage (und von Prüfer im Korpus gleichermaßen getroffen).'
		],
		divergent: [
			'Theorie-Etage: keine (RC) vs. Connell/Böhnisch-Überbau (JVH) — der Überbau macht die Enkelin angreifbarer als das Original.',
			'Prämissen-Stärke: „biology is not destiny“ vs. „Gehirne sind gleich“ — vorsichtige vs. maximale Formulierung derselben Richtung.',
			'Politik: lagerneutral vs. gleichstellungsprogrammatisch.',
			'Zielbild: Entlastung von Männlichkeits-Normen vs. neue Caring-Norm.',
			'Themen-Update: Porn-Konsens, Care-Arbeit, Tate — nur bei Dittmann (echter Mehrwert).',
			'Evidenz-Architektur: Längsschnitte + Klinik vs. Sekundär-Synthese mit Prämissen-Risiko.'
		],
		verdict:
			'Übersetzung mit Aufpreis: Dittmann erbt von Kindlon/Thompson eine im Kern haltbare These und bezahlt für die deutsche Neuauflage mit zwei Zuspitzungen (Gehirn-Gleichheit, Männlichkeits-Monokausalität), die das Original nie brauchte — die Enkelin ist moderner UND fragiler als die Großeltern. Die faire Gesamtrechnung: Wer die These verstehen will, liest Raising Cain; wer 2025 einen Sohn erzieht, findet bei Dittmann die Kapitel, die es 1999 nicht geben konnte (Konsens, Care, Algorithmen). Und die Lektion für den Korpus: Klinische Beobachtung altert besser als ihre politische Verpackung — in beide Richtungen, wie der Spiegelfall Sax zeigt.'
	},
	{
		id: 'rc-vs-nbm',
		bookA: 'rc',
		bookB: 'nbm',
		tagline: 'Die Fallstudie, die ihr Lehrbuch nie gelesen hat',
		relationship:
			'Das methodisch einzigartigste Paar der Reihe: Raising Cain (1999) beschreibt klinisch, wie emotionale Fehlerziehung einen Jungen formt — Vater-Verlust, Scham, Wut als einzig erlaubtes Gefühl, Panzerung, Substanzen als Kantenschleifer, späte (oder nie erfolgende) Öffnung. Notes on Being a Man (2025) dokumentiert exakt diese Kurve autobiografisch: der Neunjährige am Treppenabsatz beim tobenden Vater, die Scham des armen Kindes, „mild depression and anger issues“, 16 tränenlose Jahre, Alkohol „to sand the edges“, die Emotionsöffnung ab Mitte vierzig — ohne Kindlon/Thompson je zu zitieren und unter ausdrücklicher Ablehnung ihres Vokabulars. Galloway ist damit die unabhängigste Bestätigung, die die Emotional-Miseducation-These je bekommen hat: ein Proband, der das Studienergebnis liefert, während er das Studiendesign beschimpft. Zugleich zeigt seine SELBSTDEUTUNG (Testosteron, Dopamin, PFC), wie ein Betroffener die kulturelle Erklärung der eigenen Biografie durch eine biologische ersetzt — das Paar ist ein Lehrstück über Theorie-Wahl.',
		dimensions: [
			{
				dimension: 'Dieselbe Kurve, zwei Perspektiven',
				a: 'Klinisch, von außen: Jungen verlieren ihr Gefühlsvokabular durch Beschämung und Härtung; Folgen sind Wut-Monokultur, Rückzug, Selbstmedikation; Heilung über emotionale Alphabetisierung.',
				b: 'Autobiografisch, von innen: genau diese Sequenz als gelebte Biografie — inklusive der Heilung (bewusstes „lean into your emotions“, Freundschafts-Investition, Umarmungs- und Kuss-Praxis mit den Söhnen).',
				delta: 'Punkt für Punkt deckungsgleich, bis in Details (Wut vom Vater „geerbt“ = RCs inter-generationale Weitergabe; SCAFA = Verhaltensaktivierung; „name what you feel“ ist wörtlich RCs Kern-Rezept). Eine bessere unabhängige n=1-Validierung einer klinischen These gibt es im Korpus nicht.'
			},
			{
				dimension: 'Die Selbstdeutung des Probanden',
				a: 'Würde Galloways Biografie als Paradefall kultureller Fehlerziehung lesen: Vater-Modell, Scham-Ökonomie, Männlichkeits-Skript der 70er.',
				b: 'Galloway selbst erklärt sein Verhalten biologisch: T-Schübe, unreifer PFC, Dopamin — „more nature than nurture“. Die Kultur-Erklärung seiner eigenen Geschichte lehnt er als Vokabular ab.',
				delta: 'Das Lehrstück des Paars: Die Daten (seine Biografie) passen auf die RC-Theorie mindestens so gut wie auf seine eigene — er wählt die Erklärung nach Milieu-Kompatibilität, nicht nach Fit. Genau diese Wahlfreiheit zwischen Erklärungen bei identischer Praxis war schon die Pointe von NBM vs. JVH.'
			},
			{
				dimension: 'Culture of Cruelty',
				a: 'Kernkapitel: Die Grausamkeitskultur unter Jungen (Hierarchie, Demütigung, Homophobie-Policing) erzwingt die Panzerung — anekdotenreich, mit einer starken Survey-Stütze.',
				b: 'Liefert die Anekdoten dazu frei Haus: der Hackordnungs-Alltag der Schulzeit, der Cool-Adjacent-Status, Jays Schicksal (Conversion-Camp, AIDS) als Extremfall des Policing — und die Frat als AMBIVALENTES Gegenbeispiel: dieselbe Männergruppe als Grausamkeits- UND Fürsorge-Raum („guardrails“).',
				delta: 'Galloways Frat-Kapitel ist die beste Ergänzung zu RCs düsterem Bild: Männergruppen härten nicht nur, sie halten auch — je nach Struktur. RC unterbelichtet diese zweite Hälfte; Way liefert später die Daten dafür.'
			},
			{
				dimension: 'Väter',
				a: 'Vater-Kapitel mit Längsschnitt-Anker: emotionale Vater-Präsenz wirkt Jahrzehnte nach — im Guten wie im Schaden.',
				b: 'Der Beleg in Ich-Form: der Gran-Torino-Scheinwerfer-Blick des verlassenen Jungen, die lebenslange Prägung — und die bewusste Drei-Generationen-Korrektur („Be me + better“) als gelebtes RC-Programm.',
				delta: 'Vollständige Konvergenz inklusive Lösungsrichtung (Präsenz, „garbage time“, Affection). Galloways Vater-Kapitel könnten als Fallvignetten in einer RC-Neuauflage stehen.'
			},
			{
				dimension: 'Evidenz & Reichweite',
				a: '8 grün / 0 rot, aber: Privatschul-Stichprobe, Vor-Internet-Ära, erreicht primär bildungsbürgerliche Eltern.',
				b: '2 rote Glieder, Blog-Quellen — aber Millionenreichweite exakt in der Zielgruppe (junge Männer), die RC nie erreicht hat.',
				delta: 'Asymmetrische Stärken: RC hat die Theorie, NBM die Distribution. Galloway schmuggelt de facto RC-Botschaften (Gefühle benennen, Verletzlichkeit, Vater-Präsenz) in ein Publikum, das „emotional literacy“ als Therapeuten-Sprech abtun würde.'
			}
		],
		nearIdentical: [
			'Die komplette Verlaufskurve: Beschämung → Panzerung → Wut-Monokultur → Selbstmedikation → (späte) Öffnung — klinisch beschrieben (RC), autobiografisch dokumentiert (NBM).',
			'Wut als einziges erlaubtes Männergefühl (RCs Anger-Funnel = Galloways Bill-Burr-Riff „angry… or fine“).',
			'Verdeckte Depression als Nichts-Fühlen statt Traurigkeit.',
			'Vater-Präsenz als Jahrzehnte wirkender Faktor, inklusive inter-generationaler Weitergabe und bewusster Korrektur.',
			'Substanzen als Emotions-Management („sand the edges“ = RCs Selbstmedikations-Kapitel).',
			'Die Lösungsrichtung: Gefühle benennen, Verletzlichkeit riskieren, Affection praktizieren — Galloways „Notes“ sind RC-Rezepte in Podcast-Sprache.'
		],
		divergent: [
			'Erklärungsrahmen: kulturelle Fehlerziehung (RC) vs. T/PFC/Dopamin (NBM) — dieselben Daten, entgegengesetzte Theorie-Wahl.',
			'Vokabular: RC nutzt die klinische Sprache, die Galloway („toxic masculinity“-Umfeld) ausdrücklich verwirft.',
			'Männergruppen: primär Grausamkeits-Raum (RC) vs. auch Guardrail-Raum (NBM/Frat) — Galloways echte Ergänzung.',
			'Männlichkeits-Zielbild: RC will Jungen von Vorgaben entlasten; Galloway setzt eine neue Trias (Protect/Provide/Procreate).',
			'Evidenzstandard: 0 rote vs. 2 rote Glieder.',
			'Adressat und Reichweite: bildungsbürgerliche Eltern (1999) vs. junge Männer im Podcast-Ökosystem (2025).'
		],
		verdict:
			'Der methodisch wertvollste Vergleich der Reihe: Galloway bestätigt die Raising-Cain-These als unfreiwilliger Proband — dieselbe Verlaufskurve, dieselben Rezepte, Punkt für Punkt, bei ausdrücklicher Ablehnung des Vokabulars. Für die Bibliothek heißt das zweierlei. Erstens: Die Emotional-Miseducation-These hat jetzt neben Klinik (RC), Längsschnitt (Way) und Fragebogen (Levant/Prüfer) auch eine prominente Ich-Erzählung — sie ist der am breitesten unabhängig gestützte Befund des gesamten Korpus. Zweitens: Die Erklärungs-Etiketten darüber (Kultur vs. Biologie) sind offenbar frei wählbar, ohne dass sich an Befund oder Therapie etwas ändert — Galloway lebt RCs Programm und nennt es Testosteron-Management. Wer junge Männer erreichen will, lernt hier die Lektion: Es ist das Vokabular, das entscheidet, ob die Botschaft ankommt — nicht die Theorie dahinter.'
	}
];
