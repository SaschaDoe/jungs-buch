// obm-evidence-audit-data.ts
// Cross-referencing claims in Reeves's "Of Boys and Men" with evidentiary character

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
	red: { label: 'Problematic', color: '#ef4444', icon: '🔴', description: 'Study not replicated, refuted, or subject to strong methodological criticism' },
	yellow: { label: 'Shaky / Contested', color: '#f59e0b', icon: '🟡', description: 'Single study, weak replication, or presented more strongly than the evidence warrants' },
	green: { label: 'Solidly supported', color: '#10b981', icon: '🟢', description: 'Replicated, meta-analyses, official statistics, or well-established findings' },
	untestable: { label: 'Theory / Not testable', color: '#8b5cf6', icon: '🟣', description: 'Theoretical framework, not an empirically falsifiable finding' }
};

export const evidenceItems: EvidenceItem[] = [
	// ============ GREEN ============
	{
		claim: 'Der Bildungs-Gender-Gap hat sich seit Title IX (1972) umgekehrt: heute gehen 57% der Bachelor-Grade in den USA an Frauen, gegenüber 43% an Männer. Gap 15 Punkte. 1972 ging der Gap um 13 Punkte in die andere Richtung.',
		source: 'US National Center for Education Statistics, Degrees Conferred by Postsecondary Institutions (2020)',
		pages: 'Kap. 1, S. 3-4; Preface',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Offizielle Bildungsstatistik, international konsistent',
		detail:
			'Die NCES-Daten sind der Goldstandard für US-Bildungsstatistiken. Der Trend ist in allen OECD-Ländern parallel beobachtbar (siehe Figure 1-3 in Reeves). Es gibt keine methodologische Kontroverse zur Grundbeobachtung.'
	},
	{
		claim: 'In den USA sind Jungen 50% häufiger als Mädchen in den drei Kernfächern (Math, Reading, Science) auf dem niedrigsten Leistungsniveau.',
		source: 'OECD PISA data; Hedges & Nowell (1995) Science Meta-Analyse',
		pages: 'Kap. 1, S. 4-5',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Meta-analytisch und international robust',
		detail:
			'Die Hedges-Nowell-Meta-Analyse 1995 in Science war die erste rigorose Dokumentation der unteren-Tail-Dominanz bei Jungen. Seither konsistent in PISA, NAEP, TIMSS repliziert. Der absolute Unterschied ist nicht riesig, aber das Muster ist international stabil.'
	},
	{
		claim: 'Männliche US-Erwerbsquote fiel von 96% (1970) auf 89% (2020). 9 Millionen US-Männer im Prime Age (25-54) sind nicht im Arbeitsmarkt. 1 in 3 Männer mit nur High-School-Abschluss ist nicht im Arbeitsmarkt.',
		source: 'US Bureau of Labor Statistics, Current Population Survey; Autor & Wasserman',
		pages: 'Kap. 2, S. 14-15',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'BLS-offizielle Statistik',
		detail:
			'Die BLS-Daten sind der internationale Goldstandard für Arbeitsmarkt-Statistiken. Der Trend ist in allen BLS-Datenquellen robust. Die "Non-Participation"-Kategorie ist wichtig: diese Männer zählen offiziell nicht als arbeitslos, sind aber auch nicht beschäftigt.'
	},
	{
		claim: 'Median-US-Männerlohn (full-time): 1979 $1.017/Woche vs. 2020 $881. -14% in realen Dollar. Frauen-Lifetime-Earnings im selben Zeitraum: +33%.',
		source: 'BLS Highlights of Women\'s Earnings (2020); Donovan & Bradley Congressional Research Service (2020) Real Wage Trends',
		pages: 'Kap. 2, S. 21-22',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'BLS-Daten mit CRS-Methodologie',
		detail:
			'Die Lohnzahlen basieren auf BLS Current Population Survey, inflations-bereinigt mit CPI-U-RS. Die Gegen-Richtung der Lohnentwicklung ist nicht strittig. Debattiert wird nur die Ursache (Automatisierung, Globalisierung, Bildungs-Diskrepanz, Union-Zerfall).'
	},
	{
		claim: 'Männer machen 74% aller „deaths of despair” (Suizide und Überdosen) in den USA aus. Männliche Suizidrate weltweit 3-4× höher als die weibliche.',
		source: 'Case & Deaton "Deaths of Despair and the Future of Capitalism" (Princeton 2020); CDC WONDER Mortality Database',
		pages: 'Kap. 5, S. 46-47',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Epidemiologisch breit dokumentiert',
		detail:
			'Case & Deatons Forschung ist eine der einflussreichsten Public-Health-Analysen der letzten Dekade. Die Zahlen selbst sind nicht strittig; umstritten ist die Interpretation (ökonomische Verzweiflung vs. gesellschaftliche Isolation vs. Opioid-Epidemie).'
	},
	{
		claim: 'Black-white intergenerational mobility gap ist „entirely driven by differences in MEN\'s, not women\'s, outcomes” (Raj Chetty et al., 20-Millionen-Personen-Studie).',
		source: 'Raj Chetty, Nathaniel Hendren, Maggie R. Jones, Sonya R. Porter (2020) "Race and Economic Opportunity in the United States", QJE',
		pages: 'Kap. 4, S. 37-38',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Eine der methodologisch stärksten Mobility-Studien überhaupt',
		detail:
			'Chettys Team nutzte IRS-Steuerdaten von 20 Millionen US-Amerikanern zur Analyse von intergenerationeller Einkommensmobilität. Die Methodologie ist Gold-Standard. Der Befund, dass der Race Mobility Gap vollständig durch Männer getrieben wird, hat die Sozialmobilitätsforschung umgewälzt.'
	},
	{
		claim: 'Männer waren ~50% wahrscheinlicher als Frauen, an COVID-19 zu sterben. In den USA: 85.000 mehr männliche als weibliche Tote bis Ende 2021. Reduzierte US-Männer-Lebenserwartung um 2 Jahre — größter Rückgang seit WW2.',
		source: 'CDC COVID-19 Mortality Data; Arias et al. (2021) "Provisional Life Expectancy Estimates"',
		pages: 'Kap. 8, S. 76-77',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'CDC-offizielle Mortalitätsstatistik',
		detail:
			'Die Geschlechtsdiskrepanz bei COVID-Mortalität ist international robust dokumentiert (ca. 50% höheres Risiko für Männer). Die Ursachen werden debattiert (pre-existing conditions, biological factors like ACE2 expression, behavior). Die Zahlen selbst nicht.'
	},
	{
		claim: 'Kalamazoo Promise Free College: „women experience very large gains” (+50% Abschlussrate), „while men seem to experience zero benefit”.',
		source: 'Bartik, Hershbein, Lachowska (2021) "The Effects of the Kalamazoo Promise Scholarship", Upjohn Institute',
		pages: 'Kap. 6, S. 58-59',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Rigorose Evaluierungsstudie mit RCT-artigem Design',
		detail:
			'Die Kalamazoo-Studie nutzt ein Difference-in-Differences-Design, vergleicht Effekte auf verschiedene Demografie. Der null-Effekt bei Männern ist methodologisch solide dokumentiert. Das ist einer der wichtigsten Einzelbefunde in Reeves\' Buch.'
	},

	// ============ YELLOW ============
	{
		claim: 'Der präfrontale Kortex reift bei Jungen etwa 2 Jahre später als bei Mädchen. Das Cerebellum erreicht bei Mädchen mit 11, bei Jungen mit 15 die volle Größe.',
		source: 'Laurence Steinberg "Age of Opportunity"; Frances Jensen (Penn Medicine); National Academies 2019 Report on Adolescent Development',
		pages: 'Kap. 1, S. 8-10',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Gut dokumentierte neurobiologische Differenz, funktionale Interpretation offen',
		detail:
			'Die Timing-Differenz ist in mehreren MRI-Studien robust belegt. Aber: (a) die exakte Größe ist studieabhängig; (b) ob das FUNKTIONAL der größte Faktor für den Education Gap ist, bleibt interpretativ. Reeves gewichtet es als "biggest single factor", andere Autoren (Eliot) sehen es als einen unter vielen.'
	},
	{
		claim: 'Jungen sind im Alter von 17 MONATEN bereits 5× aggressiver als Mädchen.',
		source: 'Richard E. Tremblay et al. longitudinal studies, Université de Montréal; quoted in Reeves Ch. 7',
		pages: 'Kap. 7, S. 66; Kap. 8, S. 78',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Robuster Einzelbefund, Interpretation umstritten',
		detail:
			'Tremblays Longitudinal-Daten zur frühen Aggression bei Kleinkindern zeigen die Differenz konsistent. Die Frage ist, ob das „rein biologisch” ist oder ob 17-Monate-alte Jungen bereits differenzielle Sozialisation erfahren. Reeves sagt: das ist früh genug, um biologisch zu sein. Kritiker argumentieren, dass differenzielle Behandlung schon im ersten Jahr beginnt.'
	},
	{
		claim: 'Ritchie et al. UK Biobank MRI-Studie (5.000 Teilnehmer): „for every brain measure that showed even large sex differences, there was always overlap between males and females: even in the case of the large difference in total brain volume there was 48.1% sample overlap”.',
		source: 'Ritchie SJ et al. (2018) "Sex Differences in the Adult Human Brain: Evidence from 5216 UK Biobank Participants", Cerebral Cortex',
		pages: 'Kap. 7, S. 65',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Die bisher größte einzelne Brain-Sex-Differences-Studie',
		detail:
			'Die UK Biobank ist eine der größten gesundheits- und neuro-bildgebenden Datenquellen weltweit. Ritchie et al. sind repräsentativ, methodologisch stark, und ihre Ergebnisse sind „dimorph, nicht binär”. Das ist ein Kern-Argument gegen beide Extrempositionen (Sax/Gurian und Rippon).'
	},
	{
		claim: 'Testosteron AMPLIFIZIERT Aggression, TRIGGERT sie aber nicht. Carole Hooven: "the innate tendency toward aggression in boys and men is real but not necessarily expressed".',
		source: 'Carole Hooven "Testosterone: The Story of the Hormone That Dominates and Divides Us" (2021); Archer (1991) meta-analysis r≈0.08',
		pages: 'Kap. 7, S. 66-67',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Neue Synthese einer kontroversen Literatur',
		detail:
			'Archers Meta-Analyse zeigte eine sehr schwache direkte Testosteron-Aggression-Korrelation (r ≈ 0.08). Hooven argumentiert, dass T als Amplifier wirkt, nicht als Trigger — das ist eine interpretative Synthese, die die Literatur neu ordnet. Akzeptiert von Reeves; der kontroverse Teil liegt in wie STARK der Amplifier-Effekt ist.'
	},
	{
		claim: 'Brain imaging Studie von Jensen et al.: „in adolescence, on average girls are more developed by about 2 to 3 years in terms of the peak of their synapses and in their connectivity processes”.',
		source: 'Frances Jensen "The Teenage Brain" (2015); quoted in Reeves Ch. 1',
		pages: 'Kap. 1, S. 9-10',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Neurowissenschaftlich plausibel, öffentlich popularisiert',
		detail:
			'Jensens Forschung ist peer-reviewed, aber ihre populären Formulierungen übersetzen komplexe Befunde in zugängliche Sprache. Der 2-3-Jahre-Unterschied ist eine Durchschnittsaussage mit großer individueller Variation.'
	},
	{
		claim: 'Schanzenbach & Cascio Tennessee-Redshirting-Studie: redshirted boys gewinnen mindestens doppelt so viel wie redshirted girls auf allen Outcome-Maßen bis Klasse 8. Low-income boys profitieren am meisten.',
		source: 'Cascio & Schanzenbach (2016) "First in the Class? Age and the Education Production Function", Education Finance and Policy',
		pages: 'Kap. 10, S. 90-91',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Solide Einzelstudie, keine Meta-Analyse',
		detail:
			'Die Studie nutzt administrative Tennessee-Daten mit natürlichem Experiment (kindergarten-cutoff dates). Methodologisch solide. ABER: es gibt andere Studien zu Redshirting mit gemischten Ergebnissen (Cook & Kang, Deming & Dynarski). Reeves\' Verallgemeinerung zu "alle Jungen sollten redshirtet werden" ist ein Extrapolationsschritt.'
	},
	{
		claim: 'Eggebeen Analyse der National Longitudinal Study of Adolescent to Adult Health: 22% der elterlichen Einflüsse auf Teen-Outcomes sind "unique" zu einem Elternteil, 42% "additive", 12% "redundant". "Dads teach, moms tend".',
		source: 'Eggebeen DJ "What fathers contribute to child well-being" (in Palkovitz & Eggebeen, 2013)',
		pages: 'Kap. 12, S. 109-110',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Eine empirische Studie, Interpretation umstritten',
		detail:
			'Eggebeens Befund ist real und methodologisch solide. Aber er widerspricht teilweise Biblarz & Stacey 2010 "How Does the Gender of Parents Matter?" Journal of Marriage and Family — die argumentieren, dass "parenting quality matters, parent gender does not". Die Literatur ist hier unausgemacht. Reeves nutzt Eggebeen selektiv, um seine "direct dads" These zu stützen.'
	},
	{
		claim: '„Toxic masculinity” als akademischer Begriff: vor 2015 weniger als 20 akademische Erwähnungen pro Jahr; 2017 Tausende, überwiegend in Mainstream-Medien. Der Begriff wird „almost never defined” und wird benutzt, um „to simply signal disapproval”.',
		source: 'Carol Harrington (2021) "What is Toxic Masculinity and Why Does It Matter?" Men and Masculinities',
		pages: 'Kap. 8, S. 75-76',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Einzelstudie, aber überzeugende empirische Begriffsgeschichte',
		detail:
			'Harrington ist Soziologin. Ihre empirische Begriffsgeschichte des "toxic masculinity"-Begriffs ist peer-reviewed und beinhaltet eine systematische Analyse akademischer Datenbanken. Die Quantifizierung (weniger als 20 Erwähnungen pre-2015) ist spezifisch. Die normative Schlussfolgerung („es sollte nicht verwendet werden”) ist Reeves\' Extrapolation.'
	},
	{
		claim: 'Pay Gap = Parenting Pay Gap. „There\'s remarkable evidence that earnings for men and women move in sync up until the birth of a couple\'s first child” (Bertrand). Same-sex-Paaren: Geburtmütter zeigen gleiches Gehaltsmuster unabhängig vom Familientyp.',
		source: 'Marianne Bertrand et al. research; Ylva Moberg Swedish Institute study on same-sex vs. hetero-sex couples; Claudia Goldin "grand gender convergence"',
		pages: 'Kap. 2, S. 26-27',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Konvergenz mehrerer Studien, aber politisch kontrovers',
		detail:
			'Die „pay gap = parenting pay gap”-These ist methodologisch gut gestützt. Die Same-sex-Paar-Studie ist besonders elegant (kontrolliert für reine Selbstselektion in Berufe). Die politische Interpretation („also nicht Diskriminierung, sondern Kinder”) ist umstritten, weil sie die institutionelle Diskriminierung gegen Mütter unsichtbar machen kann.'
	},
	{
		claim: 'Marriage als „testosterone suppression system” (Joseph Henrich). Testosteron sinkt bei Männern, die heiraten und Kinder haben, besonders bei solchen, die mehr Kinderbetreuung übernehmen.',
		source: 'Joseph Henrich "The Weirdest People in the World" (2020); underlying studies on marriage and testosterone levels',
		pages: 'Kap. 7, S. 69',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Einzelne Studien konvergieren, Mechanismus nicht voll geklärt',
		detail:
			'Mehrere unabhängige Studien zeigen sinkende Testosteron-Level bei verheirateten und väterlich engagierten Männern. Aber: Richtung der Kausalität ist nicht klar (haben niedrigere-T-Männer bessere Ehen, oder senkt die Ehe T?). Henrich interpretiert es als T-Suppression; kritisch bleibt, ob die Befunde die globale „cultural evolution”-These stützen.'
	},

	// ============ UNTESTABLE ============
	{
		claim: 'Reeves\' Normativ-Vision einer "prosozialen Männlichkeit für eine postfeministische Welt".',
		source: 'Reeves\' politische Synthese, Preface + Epilogue',
		pages: 'Preface; Epilogue',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Normative Vision, keine empirische These',
		detail:
			'Reeves formuliert eine politisch-normative Vision: Männer brauchen eine Rolle, die zur postfeministischen Welt passt, ohne die Errungenschaften des Feminismus zu beschädigen. Das ist empirisch nicht testbar, nur politisch bewertbar. Es ist aber strukturiert und konkret, nicht bloß aspirativ.'
	},
	{
		claim: 'Reeves\' $1-Milliarde-Investment-Vorschlag für Men-Can-HEAL-Infrastruktur, analog zur STEM-für-Frauen-Bewegung.',
		source: 'Reeves\' Policy-Vorschlag, basierend auf Arbeitsmarkt-Projektionen',
		pages: 'Kap. 11, S. 102-103',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Policy-Empfehlung, keine Hypothese',
		detail:
			'Die $1-Milliarde-Zahl ist orientierend, nicht empirisch abgeleitet. Die zugrundeliegende Projektion (HEAL-Jobs werden schneller wachsen als STEM-Jobs) ist plausibel, aber mit Unsicherheit. Der Wert des Vorschlags zeigt sich an der Umsetzung.'
	},
	{
		claim: 'Reeves\' Drei-Element-Vaterschafts-Reformprogramm: (1) 6 Monate gleiche bezahlte Elternzeit, (2) reformiertes Familienrecht mit shared custody als Default, (3) father-friendly jobs.',
		source: 'Reeves\' Policy-Synthese basierend auf Gornick & Meyers 2009, Edin & Nelson 2013, Goldin',
		pages: 'Kap. 12, S. 110-115',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Policy-Agenda, keine Hypothese',
		detail:
			'Der Vorschlag ist konkret und in Teilen erprobt (Skandinavien, Oregon für joint custody, Norwegen für Väter-Elternzeit). Aber als Ganzpaket noch nirgends umgesetzt. Reeves gibt Gornick-Meyers 2009 als theoretische Grundlage.'
	},
	{
		claim: 'Reeves\' Redshirt-the-Boys-Vorschlag für universelle Ein-Jahr-Später-Einschulung aller Jungen.',
		source: 'Reeves\' Policy-Vorschlag basierend auf Cascio & Schanzenbach, Cook & Kang, Jones qualitative Studie',
		pages: 'Kap. 10, S. 88-96',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Policy-Vorschlag mit empirischer Stützung, aber keiner universellen Validierung',
		detail:
			'Die zugrundeliegenden Einzelstudien sind solide, aber keine davon hat jemals einen universellen Redshirt-Roll-out evaluiert. Bestehende Daten kommen aus freiwilligen Einzelentscheidungen, die sich von einem Policy-Mandat unterscheiden. Reeves ist offen: „the only way to find out is to do it” — er lädt zu Pilotstudien ein.'
	},
	{
		claim: 'Die vier Schwächen der progressiven Linken in ihrer Männerpolitik: Pathologisierung, Individualisierung, Biologieverleugnung, Einbahn-Ungleichheit.',
		source: 'Reeves\' politisch-analytische Synthese, Kap. 8',
		pages: 'Kap. 8, S. 74-80',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Politische Analyse mit empirischen Einzelbelegen',
		detail:
			'Die einzelnen empirischen Beobachtungen (Harrington zu Begriffsgebrauch, Gender Policy Council Strategy-Inhalt, WEF-Methodologie) sind robust. Die Gesamtrahmung als „progressive Blindheit” ist eine politische These, nicht eine wissenschaftliche Hypothese.'
	},
	{
		claim: 'Die drei Schwächen der konservativen Rechten: Grievance-Politik, Biologismus-Überbetonung, traditionelle Familie als Lösung.',
		source: 'Reeves\' politisch-analytische Synthese, Kap. 9',
		pages: 'Kap. 9, S. 81-87',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Politische Analyse mit spezifischen Beispielen',
		detail:
			'Beispiele sind konkret (Hawley-Rede, Carlson-Angriff auf Buttigieg, Blankenhorn-Buch). Die Verallgemeinerung zu einer systematischen Kritik der konservativen Männerpolitik ist eine politische Position.'
	}
];

export const auditSummary = {
	total: evidenceItems.length,
	red: evidenceItems.filter((e) => e.status === 'red').length,
	yellow: evidenceItems.filter((e) => e.status === 'yellow').length,
	green: evidenceItems.filter((e) => e.status === 'green').length,
	untestable: evidenceItems.filter((e) => e.status === 'untestable').length,
	criticalRed: evidenceItems.filter((e) => e.status === 'red' && e.centrality === 'critical').length,
	criticalYellow: evidenceItems.filter((e) => e.status === 'yellow' && e.centrality === 'critical').length,
	verdict:
		'Reeves\' Of Boys and Men ist die empirisch robusteste Quelle der gesamten Bibliothek. Fast jede empirische Behauptung wird mit einer spezifischen, namentlich zitierten Peer-Review-Quelle oder Regierungsstatistik belegt. Die 9 grünen Glieder sind überwiegend offizielle Regierungsstatistiken (BLS, NCES, CDC), rigoros dokumentierte Meta-Analysen (Hedges & Nowell, Ritchie et al.), oder methodologisch exzellente Einzelstudien (Chetty, Case & Deaton, Bartik et al. Kalamazoo). Die 10 gelben Glieder sind kausale Interpretationen und theoretische Synthesen mit spezifischer empirischer Stützung. Die 6 untestbaren sind die Policy-Empfehlungen (Redshirt, Men-Can-HEAL, Direct Fatherhood) und politische Analysen. ' +
		'Keine roten Glieder: Reeves ist methodologisch so vorsichtig, dass er empirisch riskante Behauptungen meidet. Wenn eine Quelle umstritten ist, sagt er es ausdrücklich („I don\'t know for sure”). ' +
		'Diese Qualität hebt Reeves über die meisten anderen Bücher der Bibliothek hinaus. Pollack, Kindlon/Thompson, Süfke arbeiten klinisch-anekdotisch; Sax und Gurian überklagen Biologismus; hooks und Böhnisch arbeiten theoretisch-kritisch; Urwin journalistisch. Reeves ist der einzige, der mit peer-reviewed Zahlen UND konkreten Policy-Vorschlägen UND politischer Neutralität gleichzeitig arbeitet. Das ist Brookings-Standard. ' +
		'Für den Cross-Book-Vergleich ist Reeves besonders wertvoll, weil er als externer empirischer Anker zu den klinisch-konvergenten Thesen der anderen Bücher dient. Wo Reeves mit den anderen übereinstimmt (education gap, deaths of despair, dad deficit), ist das eine unabhängige Validierung über andere Datenquellen. Wo Reeves abweicht („toxische Männlichkeit” als Rahmen, father-specific contributions), deutet es auf Stellen hin, an denen die klinische Konvergenz über ihre Daten hinausgeht.'
};
