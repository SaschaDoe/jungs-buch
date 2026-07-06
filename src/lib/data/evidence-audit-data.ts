// evidence-audit-data.ts
// Cross-referencing claims in the book with replication status and methodological critiques

export interface EvidenceItem {
	claim: string;
	source: string;
	pages: string;
	centrality: 'critical' | 'supporting' | 'minor';
	status: 'red' | 'yellow' | 'green' | 'untestable';
	statusLabel: string;
	detail: string;
}

export const evidenceStatusInfo = {
	red: { label: 'Problematisch', color: '#ef4444', icon: '🔴', description: 'Studie nicht repliziert, widerlegt oder stark methodisch kritisiert' },
	yellow: { label: 'Wacklig / Umstritten', color: '#f59e0b', icon: '🟡', description: 'Einzel-Studie, schwache Replikation, oder stärker dargestellt als belegt' },
	green: { label: 'Solide belegt', color: '#10b981', icon: '🟢', description: 'Repliziert, Meta-Analysen, offizielle Statistiken' },
	untestable: { label: 'Theorie / Nicht testbar', color: '#8b5cf6', icon: '🟣', description: 'Soziologisches Rahmenwerk, kein empirisch falsifizierbarer Befund' }
};

export const evidenceItems: EvidenceItem[] = [
	// ============ RED FLAGS ============
	{
		claim: 'Baby-X-Experiment: Erwachsene bieten Babys geschlechtstypisches Spielzeug an und beschreiben sie unterschiedlich — je nach vermutetem Geschlecht',
		source: 'Seavy, Katz & Rosenberg (1975), Sex Roles. N = 18 Erwachsene, 1 Baby.',
		pages: 'S. 51',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Kleine Stichprobe, inkonsistente Replikationen',
		detail:
			'Original: N=18, nur 1 Baby. Meta-Analyse (Stern & Karraker 1989): Effekte klein und inkonsistent. ' +
			'Spielzeug-Angebot zeigt sich teilweise, aber die im Buch zitierte Temperament-Zuschreibung ' +
			'("Mädchen = fröhlich, Jungen = zornig") stammt aus einer anderen Studie und repliziert schlecht. ' +
			'Das Buch vermischt Befunde verschiedener Baby-X-Varianten, ohne die Inkonsistenzen zu erwähnen.'
	},
	{
		claim: 'Pollacks "Pseudoresilienz": Jungen zeigen falsch-positiven Selbstwert als Maske für tiefe Einsamkeit und Schmerz. Der "Boy Code" zwingt Jungen, Gefühle zu unterdrücken.',
		source: 'Pollack (2005), Handbook of Resilience in Children; Pollack (2009), "Jungen".',
		pages: 'S. 89-91, 95',
		centrality: 'critical',
		status: 'red',
		statusLabel: 'Klinische Beobachtungen, keine systematische empirische Validierung',
		detail:
			'Pollacks "Listening to Boys\' Voices" war eine qualitative Studie, kein kontrolliertes Experiment. ' +
			'"Pseudoresilienz" und "Boy Code" sind klinische Eindrücke, die auf alle Jungen generalisiert werden. ' +
			'Keine unabhängige empirische Validierung durch andere Forschergruppen. ' +
			'Die APA-Richtlinien 2018 bauten auf ähnlichen Konzepten auf — und wurden von >100 Psychologen kritisiert. ' +
			'Das Buch präsentiert dies als etablierte psychologische Wissenschaft.'
	},
	{
		claim: '99,8% der Gene werden von Männern und Frauen geteilt — Gehirnunterschiede sind fast ausschließlich sozial geformt (via Neuroplastizität).',
		source: 'Lise Eliot, zitiert auf S. 60; Eliot (2009) "Pink Brain, Blue Brain".',
		pages: 'S. 60',
		centrality: 'critical',
		status: 'red',
		statusLabel: 'Stärker dargestellt als von Eliot selbst vertreten',
		detail:
			'Die 99,8%-Zahl ist genetisch korrekt, aber irreführend: Gene sind komplex, kleine Unterschiede haben große Wirkungen ' +
			'(Mensch-Schimpanse teilen ~98,8% DNA). Eliot selbst ist vorsichtiger als das Buch sie zitiert — sie erkennt ' +
			'kleine angeborene Unterschiede an, die durch Sozialisation verstärkt werden. Das Buch macht daraus: ' +
			'Unterschiede sind FAST AUSSCHLIESSLICH sozial. Dies geht über Eliots Position hinaus und widerspricht ' +
			'dem Interaktionismus (Gene × Umwelt), der Mainstream der Psychologie/Neurowissenschaft ist. ' +
			'Baron-Cohen (Cambridge), Hines (Cambridge), Polderman et al. (Nature Genetics 2015) zeigen substanzielle biologische Komponenten.'
	},

	// ============ YELLOW FLAGS ============
	{
		claim: 'Meta-Analyse: Männer mit traditionellen Männlichkeitsnormen haben schlechtere psychische Gesundheit (78 Studien, ~20.000 Männer).',
		source: 'Wong et al. (2017), Journal of Counseling Psychology.',
		pages: 'S. 15',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Echte Meta-Analyse, aber Effekte klein und Interpretation umstritten',
		detail:
			'Die Meta-Analyse existiert und ist in einem reputablen Journal publiziert. Aber: Effektstärken sind klein; ' +
			'der Zusammenhang ist korrelativ, nicht kausal; die CMNI-Skala vermischt schädliche Normen (Gewalt, Macht über Frauen) ' +
			'mit neutralen (Eigenständigkeit, Leistungswille). Die Schlussfolgerung "traditionelle Männlichkeit = schlechte ' +
			'Gesundheit" ist eine Überinterpretation der Daten. Die APA-Kontroverse 2019 entzündete sich genau hieran.'
	},
	{
		claim: 'Brené Brown: Scham ist die Angst, soziale Verbindungen zu verlieren. Verletzlichkeit ist der "Geburtsort" von Verbindung und Liebe.',
		source: 'Brown (2011), TED Talk "The Power of Vulnerability".',
		pages: 'S. 92',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Qualitative Forschung, keine experimentelle Validierung',
		detail:
			'Browns Arbeit basiert auf Grounded Theory / qualitativen Interviews. Ihre Definitionen sind klinisch-therapeutisch ' +
			'nützlich, aber keine experimentell gesicherten Gesetzmäßigkeiten. Brown ist eine Popularisiererin, ' +
			'keine Primärforscherin. Kein unabhängiges Labor hat ihre "Shame Resilience Theory" systematisch getestet.'
	},
	{
		claim: 'Fragile Männlichkeit: Wenn Männer "weibliche" Aufgaben erledigen (Haare flechten), zeigen sie mehr aggressive Gedanken.',
		source: 'Bosson & Vandello (2008), "Precarious Manhood".',
		pages: 'S. 53-54',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Das Konzept ist repliziert, aber das spezifische Experiment ist eine Einzel-Studie',
		detail:
			'Die "Precarious Manhood"-These hat mehrere Replikationen. Aber das Haar-Flecht-Experiment selbst ist eine ' +
			'Einzel-Studie mit kleiner Stichprobe, die auf Priming-Paradigmen beruht — genau die Art von Studien, ' +
			'die in der Replikationskrise schlecht abschneiden. Das breitere Konzept ist solider als die spezifischen Experimente.'
	},
	{
		claim: 'Mädchen glauben schon im Alter von 6 Jahren, dass Jungen intelligenter sind.',
		source: 'Bian, Leslie & Cimpian (2017), Science.',
		pages: 'S. 61',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Repliziert in USA, NICHT repliziert in China',
		detail:
			'Die Originalstudie erschien in Science (2017). Eine Replikation 2022 durch dieselbe Gruppe fand den Effekt in den ' +
			'USA, aber NICHT in China — der Effekt ist also kulturell bedingt, nicht universell. ' +
			'Das Buch stellt ihn als universelle Tatsache dar.'
	},
	{
		claim: 'New Economics Foundation: Investmentbanker vernichten 8 € pro verdientem Euro, Kinderbetreuungskräfte erzeugen 10 € Mehrwert.',
		source: 'Lawlor et al., New Economics Foundation.',
		pages: 'S. 216-217',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Modellrechnung, keine empirische Studie',
		detail:
			'Dies war ein Gedankenexperiment / Modellierungsübung, keine empirische Studie mit replizierbarer Methodik. ' +
			'Die NEF hat dies selbst eingeräumt. Die Zahlen sind illustrative Schätzungen basierend auf Annahmen ' +
			'über Externalitäten. Im Buch werden sie als harte Fakten präsentiert.'
	},
	{
		claim: 'BusyKid: Jungen erhalten doppelt so viel Taschengeld wie Mädchen für Hausarbeiten (13,80 vs. 6,71 Dollar/Woche).',
		source: 'BusyKid App-Datenanalyse (2018).',
		pages: 'S. 139',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Convenience-Stichprobe einer einzelnen App, nicht repräsentativ',
		detail:
			'Proprietäre Daten einer einzigen App mit selbstselektierter Nutzerbasis. Keine wissenschaftliche Studie, ' +
			'keine repräsentative Stichprobe. Interessant als Anekdote, aber keine belastbare Evidenz.'
	},
	{
		claim: 'Milgram-Experiment: Mehr als jeder zweite Mensch würde "wie ein Psychopath handeln und einen anderen töten."',
		source: 'Milgram (1963), Buch-Darstellung auf S. 131-132.',
		pages: 'S. 131-132',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Realer Befund, aber die Populär-Darstellung ist überholt',
		detail:
			'Die Grundbefunde sind real, aber die "mehr als die Hälfte würde töten"-Rahmung ist eine bekannte ' +
			'Vereinfachung. Compliance-Raten variierten massiv je nach Bedingung. Viele Versuchspersonen ' +
			'zweifelten an der Echtheit. Das Buch korrigiert sich teilweise ("so ganz stimmt das alles gar nicht"), ' +
			'aber die ursprüngliche dramatische Rahmung bleibt im Raum.'
	},

	// ============ GREEN ============
	{
		claim: 'Resilienzforschung: Mindestens eine stabile Bezugsperson ist der wichtigste Schutzfaktor. Resiliente Jungen zeigen oft "geschlechtsuntypische" Fürsorge und emotionale Kompetenz.',
		source: 'Werner & Smith (Kauai-Studie, 1989); Richter-Kornweitz (2011).',
		pages: 'S. 13-14',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Durch Längsschnittstudien über Jahrzehnte belegt',
		detail:
			'Die Kauai-Längsschnittstudie (Werner & Smith, seit 1955) ist eine der robustesten Studien der Entwicklungspsychologie. ' +
			'Die Schutzfaktoren-Forschung ist breit repliziert und bildet den Mainstream der Resilienzforschung.'
	},
	{
		claim: 'Care Gap: Frauen leisten 52% mehr unbezahlte Sorgearbeit als Männer in Deutschland.',
		source: 'Destatis, Zeitverwendungserhebung; BMFSFJ.',
		pages: 'S. 140-142',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Offizielle Regierungsstatistik aus repräsentativen Erhebungen',
		detail: 'Amtliche Statistik des Statistischen Bundesamts. Repliziert in jeder Zeitverwendungserhebung seit 2001.'
	},
	{
		claim: 'Harvard-Langzeitstudie (80+ Jahre): Beziehungsqualität ist der stärkste Prädiktor für Gesundheit und Glück — stärker als Klasse, IQ oder Gene.',
		source: 'Waldinger et al., Harvard Study of Adult Development.',
		pages: 'S. 143-144',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Eine der längsten Längsschnittstudien der Psychologie',
		detail:
			'Die Harvard Grant Study läuft seit 1938 und ist breit anerkannt. Einschränkung: Begann mit nur männlichen ' +
			'Harvard-Studenten, wurde später erweitert. Der relationale Befund ist über mehrere Wellen bestätigt.'
	},
	{
		claim: 'Jungen sind bei Geburt biologisch vulnerabler: unreifere Lungen, Nervensystem; geringere Frühgeborenen-Überlebensrate; Y-Chromosom bietet weniger genetische Redundanz.',
		source: 'Neonatologische Standardliteratur; Kinderarzt Vitor Gatinho.',
		pages: 'S. 71',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Medizinischer Standard, extensiv repliziert',
		detail: 'In der Neonatologie und Pädiatrie seit Jahrzehnten etabliert und unkontrovers.'
	},
	{
		claim: '75% der Verkehrstoten sind männlich; Männer sterben 3x häufiger durch Suizid; höhere Raten bei Alkoholismus, Drogen, Ertrinken.',
		source: 'Destatis 2023.',
		pages: 'S. 77',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Amtliche Statistiken, global konsistentes Muster',
		detail: 'Offizielle Todesursachenstatistik. Das Muster ist in allen westlichen Ländern identisch.'
	},
	{
		claim: 'Videospiele und Gewalt: Kein robuster kausaler Zusammenhang in der Allgemeinbevölkerung.',
		source: 'Friedrichsen (2006); APA Resolution 2020.',
		pages: 'S. 172-175',
		centrality: 'minor',
		status: 'green',
		statusLabel: 'Konsens der aktuellen Forschung, APA-bestätigt',
		detail:
			'Meta-Analysen zeigen Null- oder Minimaleffekte. Die APA schloss 2020: "insufficient evidence" für einen ' +
			'Zusammenhang zwischen Videospielen und krimineller Gewalt. Das Buch stellt dies korrekt dar.'
	},
	{
		claim: 'Häusliche Gewalt: In Deutschland wird fast jeden zweiten Tag eine Frau durch ihren (Ex-)Partner getötet.',
		source: 'BKA Bundeslagebild 2023.',
		pages: 'S. 5, 185',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Offizielle Kriminalstatistik',
		detail: 'Polizeiliche Kriminalstatistik des Bundeskriminalamts.'
	},
	{
		claim: 'Peer-Effekt bei Risikoverhalten: Unfallrisiko steigt dramatisch wenn Gleichaltrige im Auto sitzen.',
		source: 'Steinberg et al.; WDR Quarks.',
		pages: 'S. 77',
		centrality: 'minor',
		status: 'green',
		statusLabel: 'Einer der am besten replizierten Befunde der Entwicklungs-Neurowissenschaft',
		detail: 'Steinbergs Befund über Peer-Präsenz und Risikoverhalten ist vielfach repliziert und unkontrovers.'
	},
	{
		claim: 'TikTok-Algorithmus: Männliche Dummy-Accounts erhielten innerhalb von 23 Minuten antifeministischen Content; Teenager-Profile innerhalb von 9 Minuten.',
		source: 'DCU Antibullying Centre (April 2024).',
		pages: 'S. 182',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Methodisch sauber (experimentelles Design mit Dummy-Accounts)',
		detail:
			'Einzel-Studie, aber methodisch sauber und konsistent mit Platform-Audits anderer Forschungsgruppen ' +
			'(Reset Australia, Center for Countering Digital Hate).'
	},

	// ============ UNTESTABLE ============
	{
		claim: 'Raewyn Connells Konzept der "hegemonialen Männlichkeit": Vier Positionen — hegemonial, komplizenhaft, untergeordnet, marginalisiert.',
		source: 'Connell (1995/2015), "Der gemachte Mann".',
		pages: 'S. 96',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Soziologische Typologie, kein empirisch testbarer Befund',
		detail:
			'Das meistzitierte Konzept der Männlichkeitsforschung weltweit. Es ist ein Analyse-Rahmen, keine ' +
			'Hypothese die falsifiziert werden kann. Nützlich als Denkwerkzeug, aber im Buch werden die ' +
			'Typologien so verwendet, als wären sie empirisch gesicherte Kategorien.'
	},
	{
		claim: 'Böhnischs Theorie: Jungen externalisieren, weil sie "am Markt funktionieren" müssen. Hilflosigkeit ist "soziale Impotenz".',
		source: 'Böhnisch (2013), "Männliche Sozialisation".',
		pages: 'S. 20-22',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Soziologische Theorie, nicht falsifizierbar',
		detail:
			'Böhnischs Rahmenwerk baut auf Bourdieu und Stresstheorie auf. Die spezifische Kausalkette ' +
			'(Gebär-Unfähigkeit → Markt-Funktionieren → Externalisierung) ist nicht empirisch testbar. ' +
			'Das Buch präsentiert dies als Erklärung, nicht als eine von mehreren möglichen Interpretationen.'
	},
	{
		claim: 'Chodorow: Mütter identifizieren sich weniger mit Söhnen, weil sie diese als "geschlechtliche Gegenstücke" sehen.',
		source: 'Chodorow (1978/1990), "Das Erbe der Mütter".',
		pages: 'S. 45-46',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Psychoanalytische Theorie, nicht falsifizierbar',
		detail:
			'Chodorows Objektbeziehungstheorie war bis in die 1990er einflussreich, ist aber nicht empirisch ' +
			'testbar im strengen Sinne. In der empirischen Psychologie heute kaum noch vertreten. ' +
			'Das Buch erwähnt sie ohne Einordnung des wissenschaftlichen Status.'
	},
	{
		claim: 'Caring Masculinities als normatives Konzept: Männlichkeit, die Dominanz ablehnt und Fürsorge als Identitätskern annimmt.',
		source: 'Elliott (2016); ECaRoM-Projekt.',
		pages: 'S. 7, 162-163',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Normatives Rahmenwerk, keine empirisch testbare Hypothese',
		detail:
			'Man kann nicht "testen" ob Caring Masculinities "richtig" sind — es ist ein Wertvorschlag, ' +
			'kein wissenschaftlicher Befund. Das Buch stellt dies angemessen als konzeptionellen Rahmen dar.'
	},

	// ============ NEW GREEN ============
	{
		claim: 'Frauen weinen bis zu 64 Mal pro Jahr, Männer maximal 17 Mal. Der Unterschied entsteht erst nach der Kindheit — Kleinkinder weinen geschlechtsunabhängig gleich viel.',
		source: 'Entwicklungspsychologische Studien (kulturübergreifend repliziert).',
		pages: 'S. 26-27',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Repliziert und kulturübergreifend dokumentiert',
		detail:
			'Repliziert cross-kulturell; das entwicklungspsychologische Timing (Divergenz erst nach der Kindheit) ' +
			'belegt die Rolle der Sozialisation. Die Zahlen stammen aus mehreren unabhängigen Studien.'
	},
	{
		claim: 'Niobe Way: Jungen beschreiben mit 13-14 tiefe, liebevolle Freundschaften, die mit 17 an "Boy Culture"-Druck sterben.',
		source: 'Way (2011), "Deep Secrets". Längsschnitt-Qualitativstudie.',
		pages: 'S. 101-102',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Methodisch solide Längsschnittstudie mit großer Stichprobe',
		detail:
			'Longitudinale qualitative Studie mit großer Stichprobe. Konsistent mit quantitativen ' +
			'Freundschaftsdaten, die eine männliche Freundschaftsrezession zeigen.'
	},
	{
		claim: '15% der Männer haben keinen einzigen engen Freund — 1990 waren es nur 3%.',
		source: 'Survey of American Life / AEI.',
		pages: 'S. 105',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Große repräsentative Umfrage, replizierter Trend',
		detail:
			'Große repräsentative Umfrage, replizierter Trend über mehrere Datenquellen hinweg.'
	},
	{
		claim: '65% der Jugendlichen interessieren sich für soziale Berufe, aber der Männeranteil liegt nur bei ~20%. Väter bremsen Care-Karrieren stärker als Mütter.',
		source: 'BMFSFJ (2024), Men in Care Studie.',
		pages: 'S. 209-210',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Regierungsbeauftragte repräsentative Studie',
		detail: 'Government-commissioned representative study.'
	},
	{
		claim: 'Junge Frauen werden progressiver, junge Männer wählen zunehmend rechts — ein wachsender politischer Gender Gap in allen Demokratien.',
		source: 'Financial Times Analyse; europäische Wahldaten.',
		pages: 'S. 213-214',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Querschnittliche Wahldatenanalyse über OECD-Länder',
		detail:
			'Cross-nationale Wahldatenanalyse, die ein konsistentes Muster über OECD-Länder zeigt.'
	},
	{
		claim: 'Kinder verstehen "Schülerinnen und Schüler" (92%) besser als das generische Maskulinum "Schüler" (68%).',
		source: 'KiKa-Studie (Kinderkanal).',
		pages: 'S. 220',
		centrality: 'minor',
		status: 'green',
		statusLabel: 'Experimentelle Studie mit Kindern als Teilnehmern',
		detail: 'Experimentelle Studie mit Kindern als Teilnehmern.'
	},
	{
		claim: 'Gender Care Gap bei Kindern (10-17) beträgt ~41,5% und hat sich seit 2012 kaum verändert. Jungen machen WENIGER Hausarbeit als vor zehn Jahren.',
		source: 'Destatis, Zeitverwendungsstudie (2022).',
		pages: 'S. 135-137',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Amtliche Regierungsstatistik, repräsentative Stichprobe',
		detail: 'Offizielle Zeitverwendungserhebung des Statistischen Bundesamts, repräsentative Stichprobe.'
	},

	// ============ NEW YELLOW ============
	{
		claim: 'Testosteron verursacht NICHT automatisch Aggression. Reimers-Studie (Hamburg, Fußballfans): T kann kooperatives Verhalten fördern.',
		source: 'Reimers (2019), Hamburg-Studie.',
		pages: 'S. 73-74',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Einzelstudie, aber wichtiges Korrektiv zur T=Aggression-Vereinfachung',
		detail:
			'Einzelstudie, aber sie korrigiert die weit verbreitete Vereinfachung. Konsistent mit breiterer ' +
			'Endokrinologie, die zeigt, dass T sozialen Kontext verstärkt, nicht nur Aggression.'
	},
	{
		claim: 'Jeder 5. Junge (9-16) sieht Andrew Tate als gutes Vorbild. Jeder 2. junge Vater (25-34) stimmt zu.',
		source: 'Umfragedaten, zitiert im Buch.',
		pages: 'S. 41-42',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Umfragedaten, Methodik unklar',
		detail:
			'Umfragedaten — Methodik und Stichprobendetails aus der Buchzitation unklar. Aber breit konsistent ' +
			'mit anderen Erhebungen zur Reichweite Tates.'
	},
	{
		claim: 'Drei-Ampeln-Modell für Konsens: Kopf, Bauchgefühl und Körper müssen alle "grün" zeigen.',
		source: 'Magdalena Zidi (Sexualpädagogin).',
		pages: 'S. 118-119',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Pädagogisches Modell, keine empirische Validierung',
		detail:
			'Pädagogisches Modell, nicht empirisch validiert als solches, aber aufgebaut auf etablierter Konsensforschung.'
	},
	{
		claim: 'Japanische Eltern nehmen an, Kinder seien zu jung um es besser zu wissen. Deutsche Eltern nehmen feindliche Absicht an — was zu mehr Aggression bei deutschen Kindern führt.',
		source: 'Trommsdorff & Kornadt, kulturvergleichende Studie.',
		pages: 'S. 153-154',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Cross-cultural comparison, replicated pattern but causal direction debated',
		detail:
			'Etablierte kulturvergleichende Forschung, aber die Kausalrichtung (Eltern-Attribution → Kinder-Aggression) ' +
			'ist eine Vereinfachung. Kulturelle Unterschiede in Aggression haben auch genetische und gesellschaftliche Komponenten.'
	},
	{
		claim: 'Häufigster Grund von Jungen für Nicht-Sex: "Habe noch nicht die richtige Person gefunden."',
		source: 'BZgA (Bundeszentrale für gesundheitliche Aufklärung), Jugendsexualität 9. Welle.',
		pages: 'S. 121',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Representative Befragung, aber Selbstauskünfte',
		detail: 'Große staatliche Jugendsexualitätsbefragung, aber Selbstauskunftsdaten.'
	},
	{
		claim: 'Mütter entwickeln nach der Geburt mehr psychische Gesundheitsprobleme als Väter.',
		source: 'RWI Leibniz-Institut (2024).',
		pages: 'S. 146',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Aktuelle Studie, Kausalrichtung diskutiert',
		detail:
			'Aktuelle Studie, aber psychische Gesundheitsunterschiede könnten auch auf vorbestehende Faktoren zurückgehen, ' +
			'nicht nur auf die Auswirkungen der Elternschaft.'
	},
	{
		claim: 'Care-Praktiken EXISTIEREN in Jungenfreundschaften, werden aber von Forschern systematisch übersehen.',
		source: 'Leja & Schwarzenbacher, GISo-Projekt.',
		pages: 'S. 107-108',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Qualitative Studie, wichtige Perspektive aber kleine Stichprobe',
		detail:
			'Qualitative Forschung, die das Narrativ in Frage stellt, dass Jungen relationale Fürsorge fehlt. ' +
			'Kleine Stichprobe, aber wertvolles Korrektiv.'
	}
];

// ============================================================
// SUMMARY STATISTICS
// ============================================================

export const auditSummary = {
	red: evidenceItems.filter((e) => e.status === 'red').length,
	yellow: evidenceItems.filter((e) => e.status === 'yellow').length,
	green: evidenceItems.filter((e) => e.status === 'green').length,
	untestable: evidenceItems.filter((e) => e.status === 'untestable').length,
	criticalRed: evidenceItems.filter((e) => e.status === 'red' && e.centrality === 'critical').length,
	criticalYellow: evidenceItems.filter((e) => e.status === 'yellow' && e.centrality === 'critical').length,
	verdict:
		'Das Buch baut auf einer Mischung aus solider Evidenz (Resilienzforschung, amtliche Statistiken, Längsschnittstudien, Freundschaftsforschung) ' +
		'und methodisch wackligen Fundamenten (Pollacks "Boy Code", Baby-X, überstrapazierte Neuroplastizitäts-These). ' +
		'Neue Stärken zeigen sich bei den empirisch gut belegten Themen Freundschaftskrise, Care Gap, Radikalisierung und Medieneffekte. ' +
		'Die tragenden Theorien (Connell, Böhnisch, Chodorow) sind soziologische Rahmenwerke, die sich dem empirischen Test grundsätzlich entziehen. ' +
		'Die größte Schwäche bleibt: Biologische Gegenpositionen werden nicht diskutiert, wodurch ' +
		'die Darstellung einseitiger wirkt als der Forschungsstand es rechtfertigt.'
};
