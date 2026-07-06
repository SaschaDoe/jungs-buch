// obm-argument-chain-data.ts
// Argument chain for Richard V. Reeves, "Of Boys and Men: Why the Modern Male is Struggling, Why It Matters, and What To Do About It" (Brookings Institution Press, 2022)

export interface ChainLink {
	id: string;
	step: number;
	type: 'premise' | 'observation' | 'causal' | 'theory' | 'consequence' | 'solution';
	claim: string;
	shortLabel: string;
	evidence: string;
	status: 'red' | 'yellow' | 'green' | 'untestable';
	explanation: string;
	dependsOn: string[];
	collapseRisk: string;
	bookLocations: BookLocation[];
	evidenceRefs: EvidenceRef[];
}

export interface EvidenceRef {
	label: string;
	authorSearch: string;
}

export interface BookLocation {
	pages: string;
	chapter: string;
	context: string;
}

export const typeLabels: Record<string, { label: string; color: string }> = {
	premise: { label: 'Premise', color: '#6366f1' },
	observation: { label: 'Observation', color: '#3b82f6' },
	causal: { label: 'Causal claim', color: '#f59e0b' },
	theory: { label: 'Theoretical framework', color: '#8b5cf6' },
	consequence: { label: 'Consequence', color: '#ef4444' },
	solution: { label: 'Prescriptive recommendation', color: '#10b981' }
};

export const chain: ChainLink[] = [
	// ======== Row 0: Die empirische Diagnose ========
	{
		id: 'education-gap',
		step: 1,
		shortLabel: 'Bildungs-Gender-Gap: Mädchen überholt Jungen global',
		type: 'observation',
		claim:
			'Der Bildungs-Gender-Gap hat sich in zwei Generationen umgekehrt. 1972 (Title IX) betrug die US-Bachelor-Gap 13 Prozentpunkte zugunsten Männer; heute 15 Prozentpunkte zugunsten Frauen (57% aller Bachelor-Grade). Das Phänomen ist global und replikationsstark: in jedem OECD-Land gibt es mehr junge Frauen als Männer mit Bachelor-Abschluss. Jungen sind 50% häufiger in den niedrigsten Perzentilen bei Lesen, Mathe und Naturwissenschaften. Die Finnland-PISA-Daten: 20% der Mädchen erreichen das höchste Leseniveau, nur 9% der Jungen.',
		evidence:
			'OECD PISA-Daten; US National Center for Education Statistics; Hedges & Nowell (1995) Science Meta-Analyse; Sean Reardon Stanford-Studie zu District-Level-Gaps; Janet Hyde Gender Similarities Hypothesis 2005.',
		status: 'green',
		explanation:
			'Eine der empirisch robustesten Beobachtungen der gesamten Bibliothek. Offizielle Bildungsstatistiken international konsistent. Die PISA-Daten werden alle drei Jahre repliziert. Die Finland-Beobachtung ist besonders aussagekräftig, weil Finnland als pädagogisches Vorzeigeland gilt — der Ruhm ist „entirely explained by the stunning performance of Finnish girls”.',
		dependsOn: [],
		collapseRisk:
			'Wenn der Gender-Gap sich wieder umkehren sollte (historisch möglich — er war schließlich früher in die andere Richtung), würde Reeves diese Beobachtung anpassen müssen. Die aktuelle Evidenz ist aber konsistent in Bewegung zugunsten der Mädchen.',
		bookLocations: [
			{
				pages: 'Einführung, Kap. 1 S. 3-13',
				chapter: 'Girls Rule: Boys Are Behind in Education',
				context: 'Das empirische Eröffnungskapitel. Kalamazoo-Case, Vassar-Acceptance-Rate, Finnland-Vergleich.'
			}
		],
		evidenceRefs: [
			{ label: 'Hedges & Nowell (1995) Science Meta-Analyse', authorSearch: 'Hedges' },
			{ label: 'OECD PISA-Daten', authorSearch: 'PISA' }
		]
	},

	{
		id: 'labor-decline',
		step: 2,
		shortLabel: 'Männlicher Arbeitsmarkt-Abstieg (Autor/Wasserman 4-Achsen-Befund)',
		type: 'observation',
		claim:
			'Die Arbeitsmarktbilanz von US-Männern ist seit 30 Jahren auf allen vier Dimensionen gefallen: skills acquisition, employment rates, occupational stature, real wage levels (David Autor / Melanie Wasserman). Erwerbsquote sank 96% → 89% in 50 Jahren. 9 Millionen US-Männer im Prime Age außerhalb des Arbeitsmarkts. Median-Männerlohn 1979: $1.017/Woche; heute $881 — 14% Rückgang in realen Dollar. Frauen im selben Zeitraum: Lifetime Earnings +33%. Der Rückgang trifft Männer ohne Hochschulbildung am härtesten (1 von 3 nicht im Arbeitsmarkt).',
		evidence:
			'David Autor & Melanie Wasserman (ongoing research); BLS Current Population Survey; Mark Muro (Brookings) zu Automatisierung und Männer-Jobs; Bertrand/Kamenica/Pan zu Lohnverhältnissen.',
		status: 'green',
		explanation:
			'Die Labor-Market-Zahlen sind BLS-offizielle Statistiken, extrem robust. Autors und Wassermans Arbeit ist der akademische Konsens zu dieser Entwicklung. Die Erklärung (Automatisierung trifft männlich-dominierte Sektoren stärker, Globalisierung verlagert Produktion) ist breit akzeptiert, auch wenn die genaue Gewichtung der Ursachen debattiert wird.',
		dependsOn: [],
		collapseRisk:
			'Ein Wiederaufbau der industriellen Beschäftigung könnte den Trend lokal wenden. Post-COVID-Daten zeigen dagegen eher eine Verfestigung.',
		bookLocations: [
			{
				pages: 'Kap. 2, S. 14-21',
				chapter: 'Working Man Blues: Men Are Losing Ground in the Labor Market',
				context: 'Die Arbeitsmarkt-Diagnose. Autor/Wasserman-Zitat, BLS-Daten, Grip-Strength-Beispiel.'
			}
		],
		evidenceRefs: [
			{ label: 'Autor & Wasserman — Male labor market decline', authorSearch: 'Autor' },
			{ label: 'BLS Current Population Survey', authorSearch: 'BLS' }
		]
	},

	{
		id: 'dad-deficit',
		step: 3,
		shortLabel: 'Dad Deficit: strukturelle Vater-Entkopplung',
		type: 'observation',
		claim:
			'Die traditionelle Männer-Versorger-Rolle wurde durch die ökonomische Unabhängigkeit der Frauen ausgehöhlt, aber kulturelle Skripte und Gesetze haben sich nicht angepasst. 1 in 5 Väter lebt nicht mit seinen Kindern zusammen. 40% der Geburten finden außerhalb der Ehe statt (1970: 11%). Bei Vätern ohne High School: 40% leben getrennt vom Kind; bei College-Absolventen: 7%. Innerhalb 6 Jahren nach Trennung sehen 1/3 der Kinder ihren Vater nie wieder. Steve Ruggles: 40% des Rückgangs der Heiratsraten 1960-2013 erklärt sich durch fallende Männerlöhne.',
		evidence:
			'US Census-Daten; Steve Ruggles historische Familienforschung; Alexandra Killewald zur "husband breadwinner norm"; Ariel Binder & John Bound zu Labor Supply und Vaterschaft; Kathryn Edin & Timothy Nelson "Doing the Best I Can" (2013) Ethnographie mit 110 unverheirateten Vätern.',
		status: 'green',
		explanation:
			'Die Zahlen sind offizielle Demographie-Statistiken. Die kausale Kette (Frauen-Unabhängigkeit → traditioneller Männer-Rollenverlust → Dad Deficit) ist Mainstream-Familiensoziologie. Reeves erweitert sie um die spezifische Policy-Beobachtung, dass das Familiengesetz unverheiratete Väter juristisch anders behandelt als verheiratete.',
		dependsOn: ['labor-decline'],
		collapseRisk:
			'Wenn die Vater-Kind-Beziehung auch ohne Ehe robust werden könnte, wäre die kulturelle Verbindung zwischen Ehe und Vaterschaft überholt. Reeves argumentiert, dass genau das notwendig ist — aber Kultur und Recht sind noch nicht so weit.',
		bookLocations: [
			{
				pages: 'Kap. 3, S. 22-34',
				chapter: 'Dislocated Dads: Fathers Have Lost Their Traditional Role in the Family',
				context: 'Die Familie-Dimension der Diagnose. Gilmore, Dench, Cherlin als Kronzeugen.'
			}
		],
		evidenceRefs: [
			{ label: 'Edin & Nelson — Doing the Best I Can', authorSearch: 'Edin' },
			{ label: 'Steve Ruggles — Patriarchy, Power, and Pay', authorSearch: 'Ruggles' }
		]
	},

	// ======== Row 1: Double Disadvantage ========
	{
		id: 'black-men-intersection',
		step: 4,
		shortLabel: 'Black boys & men: intersektional schwerstbetroffen',
		type: 'observation',
		claim:
			'Die strukturelle Männerkrise ist bei Black men besonders akut. Raj Chetty (Opportunity Insights, 20-Millionen-Personen-Studie): der Black-white intergenerational mobility gap ist „entirely driven by differences in MEN\'s, not women\'s, outcomes”. 1 in 4 Black men der post-1980-Kohorte war mindestens einmal im Gefängnis bis Mitte 30; unter High-School-Dropouts 7 in 10. White women haben Black men beim Wocheneinkommen überholt. Der Gender Gap in Bildung zwischen Black women und Black men ist viel größer als zwischen white women und white men.',
		evidence:
			'Raj Chetty, Maggie Jones, Sonya Porter Opportunity Insights Studie; Tommy Curry "The Man-Not"; Kimberlé Crenshaw Intersectionality; Camille Busette (Brookings); Rashawn Ray zu Black middle-class men; Kelly Raley et al. Marital Trends Review.',
		status: 'green',
		explanation:
			'Chettys Studie ist methodologisch eine der stärksten Sozialmobilität-Analysen überhaupt (20 Millionen Menschen, IRS-Daten). Der Befund, dass die Race-Gap vollständig durch Männer-Outcomes getrieben wird, ist robust und hat die akademische Debatte verändert. Reeves nutzt ihn, um eine Intersektionalität ohne gender blindness zu fordern.',
		dependsOn: ['education-gap', 'labor-decline'],
		collapseRisk:
			'Die Chetty-Daten sind aus den 1980er-Kohorten. Nachfolgestudien könnten Veränderungen zeigen. Aber der Trend ist stabil.',
		bookLocations: [
			{
				pages: 'Kap. 4, S. 35-44',
				chapter: 'Dwight\'s Glasses: Black Boys and Men Face Acute Challenges',
				context: 'Dwights Nerd-Brille als Illustration. Moynihan 1965, Crenshaw, Curry, Ray als theoretische Quellen.'
			}
		],
		evidenceRefs: [
			{ label: 'Chetty et al. — Opportunity Insights Mobility Study', authorSearch: 'Chetty' },
			{ label: 'Tommy Curry — The Man-Not', authorSearch: 'Curry' }
		]
	},

	{
		id: 'deaths-of-despair',
		step: 5,
		shortLabel: 'Deaths of Despair: 74% männlich',
		type: 'observation',
		claim:
			'Männer stellen drei Viertel aller „deaths of despair” (Suizide und Überdosen) in den USA. Die männliche Suizidrate ist international 3-4× höher als die weibliche. Bei COVID waren Männer ~50% häufiger Todesopfer als Frauen; 85.000 mehr US-Männer starben. Die erwartete Lebensdauer für US-Männer sank um 2 Jahre (größter Rückgang seit WW2), bei Frauen 1 Jahr. Diese massive Gesundheitskrise hat bemerkenswert wenig Beachtung gefunden.',
		evidence:
			'Case & Deaton "Deaths of Despair" (2020) Princeton-Forschung; CDC WONDER Mortality Data; CDC COVID-19 Mortality by Sex; Marianne J. Legato zu gender-specific medicine.',
		status: 'green',
		explanation:
			'Epidemiologisch stabil. Case-Deaton-Forschung ist eine der einflussreichsten Public-Health-Analysen der letzten Dekade. Die COVID-Mortalitätsdiskrepanz ist in CDC- und internationalen Daten konsistent.',
		dependsOn: ['labor-decline'],
		collapseRisk:
			'Die Interpretation dieser Zahlen als „strukturell” (Arbeitsmarkt, soziale Isolation) vs. „biologisch” (Alterungsraten, Lebensstil) bleibt offen. Reeves gewichtet beide Ebenen.',
		bookLocations: [
			{
				pages: 'Kap. 5, S. 45-56',
				chapter: 'Class Ceiling: Poor Boys and Men Are Suffering',
				context: 'Deaths-of-despair als strukturelles Symptom der Arbeitsmarktverschiebung.'
			}
		],
		evidenceRefs: [
			{ label: 'Case & Deaton — Deaths of Despair', authorSearch: 'Case' },
			{ label: 'CDC WONDER Mortality Database', authorSearch: 'CDC' }
		]
	},

	{
		id: 'policies-fail-men',
		step: 6,
		shortLabel: 'Viele Sozialinterventionen helfen Frauen, nicht Männern',
		type: 'causal',
		claim:
			'Ein wiederholtes Muster in Sozialinterventionen: Programme, die als gender-neutral konzipiert sind, zeigen starke Effekte auf Frauen und null oder negative Effekte auf Männer. Das Kalamazoo-Free-College-Programm: „women experience very large gains” (+50% Abschlussrate), „while men seem to experience zero benefit”. Ähnliches für Student Mentoring in Fort Worth, School Choice in Charlotte, Income Boost für Niedriglöhner in NYC. Die positiven Durchschnittsergebnisse verdecken die null-Effekte bei Männern. Das zeigt: bestehende Programme sind strukturell nicht männer-kompatibel.',
		evidence:
			'Brad Hershbein, Timothy J. Bartik, Brian Gill, Morgan R. Smith (Kalamazoo Promise Evaluation); MDRC NYC Paycheck-plus Evaluation; diverse Einzelevaluationen zusammengetragen von Reeves. Metal-Analyse ist noch nicht verfügbar.',
		status: 'yellow',
		explanation:
			'Die einzelnen Studien sind solide, aber die Verallgemeinerung ("policies systematically fail men") basiert auf Reeves\' Zusammenstellung, nicht auf einer peer-reviewed Meta-Analyse. Das Muster ist aber so konsistent und in so vielen Einzelstudien dokumentiert, dass es kaum Zufall sein kann.',
		dependsOn: ['education-gap', 'labor-decline'],
		collapseRisk:
			'Wenn spätere Meta-Analysen zeigen, dass manche Interventionen auch Männer helfen, würde die Verallgemeinerung zu relativieren sein. Aber selbst dann bleibt der Kern-Befund: die Evaluationsliteratur ignoriert Gender-Disaggregation systematisch.',
		bookLocations: [
			{
				pages: 'Kap. 6, S. 57-63',
				chapter: 'Non-Responders: Policies Aren\'t Helping Boys and Men',
				context: 'Kalamazoo, Fort Worth, Charlotte, NYC als Einzelbeispiele. Der Gesamtbefund als "striking pattern".'
			}
		],
		evidenceRefs: [
			{ label: 'Bartik et al. — Kalamazoo Promise Evaluation', authorSearch: 'Bartik' }
		]
	},

	// ======== Row 2: Biology and Culture ========
	{
		id: 'brain-timing',
		step: 7,
		shortLabel: 'Prefrontal cortex reift bei Jungen ~2 Jahre später',
		type: 'causal',
		claim:
			'Der größte Unterschied zwischen weiblichen und männlichen Gehirnen ist nicht WIE sie sich entwickeln, sondern WANN. Der präfrontale Kortex — Sitz von Impulskontrolle, Planung, Zukunftsorientierung — reift bei Jungen ca. 2 Jahre später als bei Mädchen. Der Cerebellum erreicht bei Mädchen mit 11, bei Jungen mit 15 die volle Größe. Daraus folgt: in der kritischsten Phase der Sekundarschule (mittlere Adoleszenz) haben Jungen BIOLOGISCH eine niedrigere Selbstregulation. Das Bildungssystem ist ZUFÄLLIG auf das schnellere Mädchen-Tempo zugeschnitten — nicht als "feministische Verschwörung", sondern als Side-Effect.',
		evidence:
			'Laurence Steinberg "Age of Opportunity" (2014); Robert Sapolsky "Behave" (2017); Frances Jensen Penn Medicine zur adoleszenten Synaptogenese; Gokcen Akyurek zum Cerebellum; National Academies 2019 Report zum adoleszenten Brain.',
		status: 'yellow',
		explanation:
			'Die neurobiologische Kern-Beobachtung ist robust: mehrere unabhängige MRI-Studien zeigen das Timing-Differenz. Die funktionale Interpretation (das erklärt einen großen Teil des Bildungs-Gaps) ist plausibel, aber nicht direkt kausal gemessen. Das Bildungs-Reformexperiment (Redshirting) ist ein indirekter Test dieser Hypothese.',
		dependsOn: [],
		collapseRisk:
			'Wenn die Brain-Timing-Differenz nicht funktional für Schulleistung wäre (z.B. weil andere Entwicklungsfaktoren wichtiger sind), würde die biologische Erklärung des Education Gap schwächer. Aber die Redshirting-Studien zeigen, dass Altersunterschiede messbare Effekte haben.',
		bookLocations: [
			{
				pages: 'Kap. 1, S. 8-12',
				chapter: 'Girls Rule — It\'s All About the Timing (of Brain Development)',
				context: 'Die zentrale neurobiologische Erklärung. Steinberg, Sapolsky, Jensen als Kronzeugen.'
			}
		],
		evidenceRefs: [
			{ label: 'Steinberg — Age of Opportunity', authorSearch: 'Steinberg' },
			{ label: 'Sapolsky — Behave', authorSearch: 'Sapolsky' }
		]
	},

	{
		id: 'nature-and-nurture',
		step: 8,
		shortLabel: 'Nature UND Nurture: Sex-Differenzen sind real und moduliert',
		type: 'theory',
		claim:
			'Biologische Sex-Unterschiede sind real, besonders in Aggression (Jungen 5× aggressiver bei 17 MONATEN), Risikobereitschaft, Sex-Drive — aber die Verteilungen sind dimorph (überlappend), nicht binär. Ritchie et al. MRI-Studie mit 5.000 UK-Teilnehmern: selbst bei der größten Hirn-Differenz (Gesamtvolumen) gibt es 48.1% Overlap. Testosteron AMPLIFIZIERT Aggression, TRIGGERT sie aber nicht (Carole Hooven "Testosterone"). Kultur kann diese Traits massiv modulieren (Reeves: "ich wäre in Sparta aggressiver gewesen"). Die anti-biologische Position (Rippon) und die biologistische Position (Sax/Gurian) sind beide falsch.',
		evidence:
			'Stuart Ritchie et al. UK Biobank MRI Meta (5000 participants); Carole Hooven "Testosterone" (2021); Joyce Benenson "Warriors and Worriers"; Joseph Henrich "The WEIRDest People in the World"; Melvin Konner "Women After All"; Kathryn Paige Harden.',
		status: 'yellow',
		explanation:
			'Die Kernposition ist wissenschaftlicher Konsens in der neueren Neuropsychologie. Die spezifische Formulierung als "beide extreme Positionen sind falsch" ist Reeves\' politische Intervention. Die Meta-Analyse-Landschaft ist konvergent (Hyde, Ritchie), aber Einzelstudien variieren in der Interpretation.',
		dependsOn: ['brain-timing'],
		collapseRisk:
			'Wenn sich das Verhältnis von Nature zu Nurture drastisch zugunsten der einen Seite verschieben sollte (unwahrscheinlich, basierend auf 20 Jahren konsistenter Forschung), müsste Reeves seine Mittelposition anpassen.',
		bookLocations: [
			{
				pages: 'Kap. 7, S. 64-73',
				chapter: 'Making Men: Nature and Nurture Both Matter',
				context: 'Das politische Kernkapitel. Fünf Caveats zum biologischen Argument; explizite Ablehnung beider Extrempositionen.'
			}
		],
		evidenceRefs: [
			{ label: 'Ritchie et al. — UK Biobank MRI Meta', authorSearch: 'Ritchie' },
			{ label: 'Hooven — Testosterone', authorSearch: 'Hooven' },
			{ label: 'Henrich — WEIRDest People', authorSearch: 'Henrich' }
		]
	},

	// ======== Row 3: Political Stalemate ========
	{
		id: 'progressive-blindness',
		step: 9,
		shortLabel: 'Progressive Blindheit: 4 Reflexe, die Männer verlieren',
		type: 'consequence',
		claim:
			'Die politische Linke versagt an 4 Stellen: (1) **Pathologisierung** — „toxische Männlichkeit” als Rahmen, der fast jedes antisoziale Männerverhalten erfasst. Carol Harrington: vor 2015 <20 akademische Erwähnungen/Jahr; heute Tausende; der Begriff wird "almost never defined", nur „to signal disapproval”. (2) **Individualisierung** — Männer-Probleme werden als persönliche Charakterfehler behandelt, nicht strukturell (widersprüchlich zum sonstigen progressiven Strukturalismus). (3) **Biologie-Verleugnung** — "science is real" gilt für Klimawandel, aber nicht für geschlechts-dimorphe Hirnentwicklung. (4) **Einbahn-Ungleichheit** — die US Gender Policy Council Strategy 2021 nennt keine einzige Gender-Ungleichheit zum Nachteil von Männern.',
		evidence:
			'Carol Harrington (2021) "What is toxic masculinity and why does it matter?"; Natalie Wynn YouTube-Essay; Kathryn Paige Harden (Genetics); White House Gender Policy Council Strategy 2021; World Economic Forum Global Gender Gap Report.',
		status: 'yellow',
		explanation:
			'Die einzelnen empirischen Beobachtungen (Harrington zu Begriffsgebrauch, Strategy Paper Inhalt, WEF-Methodologie) sind robust. Die Gesamtrahmung als "progressive Blindheit" ist politisch, nicht wissenschaftlich — aber Reeves argumentiert, dass sie empirisch gestützt ist: die Asymmetrie ist messbar und konsistent.',
		dependsOn: ['education-gap', 'labor-decline', 'deaths-of-despair'],
		collapseRisk:
			'Wenn progressive Institutionen ihre Aufmerksamkeit umverteilen würden, würde die Kritik ihre Kraft verlieren. Bisher ist wenig Bewegung erkennbar (Reeves schreibt 2022).',
		bookLocations: [
			{
				pages: 'Kap. 8, S. 74-80',
				chapter: 'Progressive Blindness: The Political Left Is in Denial',
				context: 'Der empirische Beleg für die Behauptung: Harrington-Zahlen, Strategy Paper Auszüge, COVID-Mortalität vs. Media Coverage.'
			}
		],
		evidenceRefs: [
			{ label: 'Harrington — What is toxic masculinity?', authorSearch: 'Harrington' }
		]
	},

	{
		id: 'conservative-rollback',
		step: 10,
		shortLabel: 'Konservative Rückschritts-Fantasie: 3 Sackgassen',
		type: 'consequence',
		claim:
			'Die politische Rechte versagt an 3 Stellen: (1) **Grievance-Politik** — Josh Hawleys Männer-werden-angegriffen-Rhetorik gewinnt Stimmen, aber bietet keine Lösungen. (2) **Biologismus-Überbetonung** — Männer sind „halt so”, Rollen sind natürlich fixiert. (3) **Traditionelle Familie zurück** — Blankenhorn, Dench: Männer brauchen wieder den Versorger-Status. Das funktioniert nicht, weil Frauen keine ökonomische Abhängigkeit mehr akzeptieren. Da konservative „Lösungen” nicht greifen, wandern frustrierte Männer zur MRA-/Incel-Subkultur ab.',
		evidence:
			'Josh Hawley Nov 2021 National Conservatism Conference Speech; Tucker Carlson Kommentare zu Pete Buttigieg Paternity Leave; David Blankenhorn "Fatherless America"; Geoff Dench "Transforming Men"; Donald Trump-Jahre als politische Illustration.',
		status: 'yellow',
		explanation:
			'Die Beispiele sind konkret. Die Gesamtkritik ist politisch-analytisch. Reeves ist härter gegenüber der Rechten als gegenüber der Linken in Tonfall, anerkennt aber, dass die Rechte mehr Aufmerksamkeit auf das Thema gelegt hat.',
		dependsOn: ['education-gap', 'labor-decline', 'dad-deficit'],
		collapseRisk:
			'Wenn ein konservativer Politiker eine ernsthafte Policy-Agenda für Männer vorlegt (nicht nur Kulturkampf), würde die Kritik weniger kraftvoll. Hawleys Vorschläge (Steuervergünstigung für Ehe, Wiederaufbau der Industrie) sind nach Reeves\' Lesart aber leer.',
		bookLocations: [
			{
				pages: 'Kap. 9, S. 81-87',
				chapter: 'Seeing Red: The Political Right Wants to Turn Back the Clock',
				context: 'Hawleys Rede als Eröffnung. Blankenhorn und Dench als intellektuelle Kronzeugen der Rückkehrs-Fantasie.'
			}
		],
		evidenceRefs: [
			{ label: 'Blankenhorn — Fatherless America', authorSearch: 'Blankenhorn' }
		]
	},

	// ======== Row 4: Solutions ========
	{
		id: 'redshirt-policy',
		step: 11,
		shortLabel: 'Redshirt the Boys: ein Jahr später einschulen',
		type: 'solution',
		claim:
			'Reeves\' konkreter Bildungs-Reformvorschlag: alle Jungen sollten default ein Jahr später in die Schule starten. Nicht um „aufzuholen”, sondern um dem biologischen Reifungstempo gerecht zu werden. Empirische Evidenz aus mehreren Studien: Schanzenbach & Cascio Tennessee-Studie zeigt, dass redshirted boys gewinnen mindestens doppelt so viel wie redshirted girls auf allen Outcome-Maßen (Klassenwiederholung, Testscores, SAT/ACT-Teilnahme). Niedrig-Einkommens-Jungen profitieren am meisten. Cook & Kang NC-Studie: 10% Redshirting reduziert den Leseabstand im 3. Schuljahr um 11%.',
		evidence:
			'Elizabeth Cascio & Diane Whitmore Schanzenbach "First in the Class? Age and the Education Production Function" (NBER 2007); Philip Cook & Songman Kang "Birthdays, Schooling, and Crime" (AEJ Applied Economics 2016); Suzanne Stateler Jones Collin College qualitative Studie.',
		status: 'yellow',
		explanation:
			'Die Einzelstudien sind solide und replikationsstark. Reeves\' Vorschlag, es als universelle Default-Politik zu machen, ist ein Extrapolationsschritt. Bisher wurde nirgends ein vollständiger Redshirt-Roll-out evaluiert; bestehende Daten kommen aus freiwilligen Entscheidungen, die selbst gender-, klassen- und rassenselektiv sind. Reeves ist diesbezüglich offen: "the only way to find out is to do it".',
		dependsOn: ['brain-timing', 'education-gap'],
		collapseRisk:
			'Wenn ein Pilotprogramm Null-Effekte zeigt, würde der Vorschlag verworfen werden müssen. Reeves lädt explizit zu Pilotstudien ein.',
		bookLocations: [
			{
				pages: 'Kap. 10, S. 88-97',
				chapter: 'Redshirt the Boys: Boys Need an Extra Year in the Classroom',
				context: 'Persönliches Beispiel (Sohn Bryce), Studiendaten, Einwände und Widerlegungen, rechtliche Machbarkeit.'
			}
		],
		evidenceRefs: [
			{ label: 'Cascio & Schanzenbach — First in the Class', authorSearch: 'Cascio' },
			{ label: 'Cook & Kang — Birthdays, Schooling, and Crime', authorSearch: 'Cook' }
		]
	},

	{
		id: 'men-can-heal',
		step: 12,
		shortLabel: 'Men Can HEAL: $1 Mrd. Investment in Männer-in-Pflegeberufen',
		type: 'solution',
		claim:
			'Spiegelbild der STEM-für-Frauen-Bewegung: Männer müssen systematisch in HEAL-Berufe (Health, Education, Administration, Literacy) bewegt werden, weil dort die Zukunftsjobs entstehen. David Deming: „jobs requiring high levels of social interaction grew by 12 percentage points 1980-2012”. Reeves: für jeden neuen STEM-Job werden mehr als 3 HEAL-Jobs geschaffen bis 2030. Aktuell: Männer sind 15% der Nurses, 3% der Pre-K-Teacher, 18% der Social Worker. Reeves fordert $1 Milliarde nationaler Investition — pipeline building, financial incentives, social marketing — analog zur STEM-für-Frauen-Infrastruktur.',
		evidence:
			'David Deming "The Growing Importance of Social Skills in the Labor Market" (QJE 2017); Kirsten Cole Manhattan Community College Studie zu 46 männlichen Pre-K-Lehrern; Steven Ruggles IPUMS zu Beschäftigungstrends; Kranton & Akerlof "Identity Economics".',
		status: 'untestable',
		explanation:
			'Eine Policy-Empfehlung, keine testbare Hypothese. Die Datengrundlage (Deming QJE, IPUMS) ist robust. Die Projektion (jobs of the future are HEAL) ist plausibel, aber mit Unsicherheit behaftet (wer weiß, was Automatisierung mit Pflegejobs macht). Die $1-Milliarde-Zahl ist orientierend, nicht empirisch abgeleitet.',
		dependsOn: ['labor-decline'],
		collapseRisk:
			'Wenn HEAL-Berufe automatisiert werden oder Löhne stark fallen, würde die Empfehlung weniger attraktiv. Aber derzeitige Trends deuten das Gegenteil an.',
		bookLocations: [
			{
				pages: 'Kap. 11, S. 98-106',
				chapter: 'Men Can HEAL: Getting Men into the Jobs of the Future',
				context: 'Die ökonomische Begründung plus konkretes $1-Mrd-Investment-Vorschlag.'
			}
		],
		evidenceRefs: [
			{ label: 'Deming — Growing Importance of Social Skills', authorSearch: 'Deming' }
		]
	},

	{
		id: 'direct-fatherhood',
		step: 13,
		shortLabel: 'Direct Dads: Vaterschaft als eigenständige Institution',
		type: 'solution',
		claim:
			'Die zentrale positive Vision: Vaterschaft muss als unabhängige soziale Institution rekonstruiert werden, nicht als Anhängsel der Ehe. Fathers matter unabhängig davon, ob sie mit der Mutter verheiratet oder zusammenlebend sind. Policy-Agenda: (1) 6 Monate bezahlte Elternzeit für beide Eltern, 100% Lohnersatz bis Median, "use it or lose it" — nicht übertragbar; (2) reformiertes Familienrecht mit shared custody als Default auch für unverheiratete Paare; (3) father-friendly jobs (Goldin „egalitarian professions” statt „greedy jobs”). Eggebeen-Studie (National Longitudinal Adolescent Health): 22% der elterlichen Inputs sind „unique” für einen Elternteil. Väter leisten distinktive Beiträge, besonders in der Adoleszenz — „dads teach, moms tend”.',
		evidence:
			'David Eggebeen Analyse der National Longitudinal Study of Adolescent to Adult Health; Kathryn Edin & Tim Nelson "Doing the Best I Can" (2013); Janet Gornick & Marcia Meyers "Institutions That Support Gender Equality in Parenthood and Employment" (2009); Anna Machin "The Life of Dad"; Sarah Blaffer Hrdy zu evolutionärer Vaterschaft; Claudia Goldin zu "greedy jobs".',
		status: 'yellow',
		explanation:
			'Eggebeens Befund (distinktive Vater-Beiträge) ist empirisch, aber widerspricht teilweise Biblarz & Stacey 2010 ("parent gender doesn\'t matter"). Die Interpretation bleibt offen: sind die distinktiven Beiträge wirklich geschlechtsspezifisch oder einfach "zweiter Elternteil-Beiträge"? Reeves interpretiert sie als geschlechtsspezifisch. Die Policy-Agenda (6 Monate Eltern-Leave etc.) ist in Skandinavien teilweise erprobt mit gemischten Erfolgen.',
		dependsOn: ['dad-deficit'],
		collapseRisk:
			'Wenn same-sex-couple-Studien weiter konsistent zeigen, dass Parent-Gender nicht zählt, würde die "direct fatherhood"-These an der Gender-Spezifität kratzen. Reeves müsste dann auf "two-parent homes are good"-Position zurückfallen — was weniger politisch interessant ist.',
		bookLocations: [
			{
				pages: 'Kap. 12, S. 107-115',
				chapter: 'New Dads: Fatherhood as an Independent Social Institution',
				context: 'Die positive Vision. Eggebeen, Machin, Palkovitz, Gornick & Meyers als Kronzeugen. Drei konkrete Policy-Elemente.'
			}
		],
		evidenceRefs: [
			{ label: 'Eggebeen — Parental Contributions Study', authorSearch: 'Eggebeen' },
			{ label: 'Gornick & Meyers — Institutions for Gender Equality', authorSearch: 'Gornick' },
			{ label: 'Machin — The Life of Dad', authorSearch: 'Machin' }
		]
	},

	{
		id: 'prosocial-masculinity',
		step: 14,
		shortLabel: 'Prosoziale Männlichkeit für eine postfeministische Welt',
		type: 'solution',
		claim:
			'Das normative Ziel: eine „prosoziale Männlichkeit für eine postfeministische Welt”. Drei Elemente: (1) die Errungenschaften des Feminismus werden vollständig bewahrt — keine Rückkehr zur Rollenverteilung des 20. Jahrhunderts; (2) Männer werden strukturell unterstützt (Bildung, Arbeit, Vaterschaft) ohne pathologisiert zu werden; (3) Männlichkeit wird als positiv formuliert — nicht als Maske, nicht als Krankheit, nicht als Problem. "We can hold two thoughts in our head at once: we can be passionate about women\'s rights AND compassionate toward vulnerable boys and men."',
		evidence:
			'Reeves\' zusammenfassende normative These. Nicht falsifizierbar. Konvergent mit politischem Zentrismus; explizite Absage an Links- und Rechtspurismus.',
		status: 'untestable',
		explanation:
			'Eine normative Vision, keine empirische Hypothese. Ihr Wert zeigt sich am politischen Erfolg in der Umsetzung. Reeves ist Brookings-Wonk — er glaubt an iterative Policy-Experimente, nicht an Revolutionen.',
		dependsOn: ['redshirt-policy', 'men-can-heal', 'direct-fatherhood'],
		collapseRisk:
			'Wenn der politische Stillstand (Chapter 8+9) anhält, bleibt diese Vision abstrakt. Reeves ist sich der Herausforderung bewusst und nennt die aktuelle Lage "trench warfare".',
		bookLocations: [
			{
				pages: 'Epilogue + Preface',
				chapter: 'Preface + Epilogue',
				context: 'Die Formel wird im Preface geprägt und im Epilogue bekräftigt.'
			}
		],
		evidenceRefs: [
			{ label: 'Reeves — Brookings policy synthesis', authorSearch: 'Reeves' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'prosocial-masculinity')!;
	const path: ChainLink[] = [target];

	function findWeakestDep(link: ChainLink): ChainLink | null {
		if (link.dependsOn.length === 0) return null;
		const deps = link.dependsOn.map((id) => chain.find((c) => c.id === id)!);
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
		'Reeves\' Argumentationskette ist die empirisch robusteste der gesamten Bibliothek. Von 14 Gliedern sind 5 grün (die empirischen Diagnose-Kernbefunde: education gap, labor decline, dad deficit, Black men intersection, deaths of despair — alle durch offizielle Statistiken oder namentlich zitierte Peer-Review-Studien gestützt), 8 gelb (die kausalen und theoretischen Erklärungen: policies fail men, brain timing, nature-and-nurture, progressive blindness, conservative rollback, redshirt policy, direct fatherhood — alle mit spezifischer empirischer Stützung, aber interpretativ zusammengefügt), und 2 untestbar (normative Lösungsvisionen: Men Can HEAL investment, prosocial masculinity). Keine roten Glieder. ' +
		'Das macht Reeves zur empirisch stärksten Einzelquelle des gesamten Korpus. Für fast jede Behauptung gibt es eine namentliche Peer-Review-Quelle, meist mit spezifischer Autorenschaft, Journal-Publikation und methodologischer Beschreibung. Das ist Brookings-Standard, nicht journalistische Übertreibung. ' +
		'Besonders wertvoll: Reeves kann mehrere der Konvergenzen der Bibliothek mit neuer empirischer Evidenz beurteilen. Er akzeptiert die brain-timing-Differenz explizit (widerspricht Pollack/hooks/Süfke\'s Überkorrektur); er lehnt "toxische Männlichkeit" als analytischen Rahmen ab (Harrington-Zitat); er beruft sich auf Eggebeen für distinktive Vater-Beiträge (widerspricht Biblarz & Stacey 2010-Konsens); er akzeptiert die "pay gap = parenting pay gap"-These von Bertrand, Goldin etc. (statt reiner Patriarchat-Rahmung). ' +
		'Im Gesamtkorpus ist Reeves das am wenigsten durch klinisch-psychologische Intuitionen belastete Buch. Er kommt zu vielen ähnlichen Schlüssen wie Pollack/Kindlon/Süfke, aber über völlig andere Wege — strukturelle Analyse statt klinische Beobachtung. Diese unabhängige Konvergenz stärkt die gemeinsamen Befunde; wo Reeves abweicht (z.B. bei "toxische Männlichkeit" oder bei father-specific-contributions), ist das diagnostisch wertvoll, weil es zeigt, wo die klinische Konvergenz über ihre Daten hinausgeht.'
};
