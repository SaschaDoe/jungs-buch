// ds-argument-chain-data.ts
// Argument chain for Niobe Way, "Deep Secrets: Boys' Friendships and the Crisis of Connection" (Harvard University Press, 2011)

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
	// ======== Row 0: Methodology ========
	{
		id: 'longitudinal-method',
		step: 1,
		shortLabel: '20-Jahre-Längsschnitt-Ethnographie mit hunderten Jungen',
		type: 'premise',
		claim:
			'Way und ihr Team haben über 20 Jahre hinweg Längsschnitt-Interview-Studien mit hunderten adolescenter Jungen in NYC Public Schools durchgeführt. Drei separate Forschungsprojekte, ~135 Jungen in der Kernstichprobe dieses Buches, 75% über 3+ Jahre interviewt (typischerweise 4 jährliche Interviews). Sample deliberately not white-middle-class: Black, Latino (Puerto Rican, Dominican), Chinese American, European American, ~70% aus armen/Arbeiterklasse/unteren Mittelklasse-Familien. Semi-strukturierte Interviews mit dem "Listening Guide"-Protokoll (Brown & Gilligan).',
		evidence:
			'Way et al. methodology section. Way\'s publications in Developmental Psychology, Journal of Research on Adolescence, and other peer-reviewed outlets over 20+ years. Brown & Gilligan (1992) "Meeting at the Crossroads" als methodologischer Rahmen. Bronfenbrenner ecological context model.',
		status: 'green',
		explanation:
			'Die Methodologie ist rigoros und peer-reviewed. Listening Guide ist ein etabliertes qualitatives Verfahren. Längsschnitt-Design mit hohen Retention-Raten (60% über 3-5 Jahre, 90%+ in der gleichen Schule) ist für qualitative Sozialforschung ausgezeichnet.',
		dependsOn: [],
		collapseRisk:
			'Die Methodologie ist qualitativ, nicht quantitativ — keine Effektstärken messbar. Kritiker könnten argumentieren, dass die Listening Guide-Methode bereits theoretisch voraussetzt, was sie finden soll. Way ist sich dessen bewusst und betont die Konsistenz der Befunde über hunderten verschiedener Boys.',
		bookLocations: [
			{
				pages: 'Kap. 2, S. 36-50',
				chapter: 'Investigating Boys, Friendships, and Human Nature',
				context: 'Zentrale Methodologie-Beschreibung. Listening Guide, Bronfenbrenner, sample selection, interview protocol.'
			}
		],
		evidenceRefs: [
			{ label: 'Brown & Gilligan — Meeting at the Crossroads', authorSearch: 'Brown' },
			{ label: 'Bronfenbrenner — The Ecology of Human Development', authorSearch: 'Bronfenbrenner' }
		]
	},

	{
		id: 'thick-vs-thin-culture',
		step: 2,
		shortLabel: 'Thick-culture vs thin-culture-Interpretationen',
		type: 'theory',
		claim:
			'Way übernimmt Clifford Geertz\' Unterscheidung zwischen "thin" und "thick" Kulturinterpretationen. Thin culture = Oberflächen-Klischees ("boys don\'t have close friends because they\'re busy with sports/girls"). Thick culture = Untersuchung der Stereotype selbst, der Prozesse, die zu stereotypischen Schlussfolgerungen führen, und der Frage, was Jungen selbst sagen statt was Erwachsene annehmen. Fast alle bestehende boy-crisis-Literatur (Pollack, Sax, Gurian, Kindlon/Thompson) operiert mit thin interpretations.',
		evidence:
			'Clifford Geertz (1973) "Thick Description" in The Interpretation of Cultures. Way erweitert das Konzept auf die kulturkritische Untersuchung von Stereotypen.',
		status: 'untestable',
		explanation:
			'Ein methodologisch-theoretischer Rahmen, keine empirische Hypothese. Seine Produktivität liegt in der Art, wie er die Boy-Crisis-Literatur neu organisiert: Way argumentiert, dass die meisten Analysen Symptome statt Ursachen adressieren, weil sie Stereotype als gegeben akzeptieren.',
		dependsOn: ['longitudinal-method'],
		collapseRisk:
			'Die Unterscheidung ist nicht direkt testbar; sie ist ein interpretativer Zugang. Ihre Rechtfertigung liegt in der fruchtbaren Umordnung, die sie ermöglicht.',
		bookLocations: [
			{
				pages: 'Kap. 1, S. 55-80',
				chapter: 'The Hidden Landscape of Boys\' Friendships',
				context: 'Zentrale methodologische Rahmung für den gesamten Rest des Buches.'
			}
		],
		evidenceRefs: [
			{ label: 'Geertz — The Interpretation of Cultures', authorSearch: 'Geertz' }
		]
	},

	// ======== Row 1: The empirical discovery ========
	{
		id: 'boys-emotionally-articulate-early-adolescence',
		step: 3,
		shortLabel: 'Jungen 13-15 sind emotional hochartikuliert in ihren männlichen Freundschaften',
		type: 'observation',
		claim:
			'In früher und mittlerer Adoleszenz (Alter 13-15) beschreiben Jungen ihre engsten männlichen Freundschaften in Sprache, die "wie das Lesen eines altmodischen Romans klingt, in dem die weibliche Protagonistin ihre leidenschaftlichen Gefühle für ihren Mann beschreibt" (Way). Sie verwenden Wörter wie "love," "deep," "within you," "trust," "heart," "secret." Justin (15): "[My best friend and I] love each other... this thing that is deep, so deep, it\'s within you, you can\'t explain it." George (16): Ohne enge Freunde würde man "just gonna go wacko." Kai (14): "you need a friend or else, you would be depressed, you would try to kill yourself."',
		evidence:
			'Way\'s direkte Interview-Transkripte aus den NYC-Studien. Hunderten von Beispielen im Buch, consistent across Black, Latino, Chinese American, White boys. Parallel evidence from Judy Chu\'s studies of white private-school boys (When Boys Become Boys, 2014).',
		status: 'green',
		explanation:
			'Das ist die stärkste longitudinale observational evidence in der gesamten Bibliothek. Way dokumentiert in direkten Zitaten aus wiederholten Interviews, dass Jungen dieser Altersgruppe emotional hochartikuliert sind. Die Beobachtung wurde von Judy Chu unabhängig repliziert (anderer Sample: weiße Privatschulen). Race/Class/Ethnicity machen nach Way\'s Daten KEINEN systematischen Unterschied — was die "diese Boys sind eine Ausnahme"-Hypothese widerlegt.',
		dependsOn: ['longitudinal-method'],
		collapseRisk:
			'Wenn die Interviewer unbewusst bestimmte Antworten gefördert hätten (leading questions), wäre die Beobachtung weniger valide. Way diskutiert das direkt und weist auf die Konsistenz hinüber hunderte verschiedener Jungen als internal validation hin. Ein kritischer Befund wäre, wenn quantitative Fragebögen dieselben Jungen als "emotional inarticulate" einstufen — diese Gegenevidenz existiert tatsächlich. Way argumentiert, dass Fragebögen "thin culture"-Methodik sind.',
		bookLocations: [
			{
				pages: 'Kap. 1, S. 1-12',
				chapter: 'The Hidden Landscape of Boys\' Friendships',
				context: 'Justin als Eröffnungsvignette. Weitere Dutzende Interviewsamples mit George, Chen, Kai, Malcolm, etc.'
			},
			{
				pages: 'Kap. 3, S. 90-130',
				chapter: 'Sometimes You Need to Spill Your Heart Out to Somebody',
				context: 'Hauptkapitel zur Empirik früher/mittlerer Adoleszenz. Systematische Darstellung der Daten.'
			}
		],
		evidenceRefs: [
			{ label: 'Chu, Judy — When Boys Become Boys', authorSearch: 'Chu' }
		]
	},

	{
		id: 'friendship-loss-late-adolescence',
		step: 4,
		shortLabel: 'In später Adoleszenz (16-18) verlieren die selben Jungen diese Freundschaften',
		type: 'observation',
		claim:
			'Ab etwa Alter 16-17 dokumentiert Way, wie die SELBEN Jungen diese Freundschaften verlieren. Justin (senior year): "best friends become close friends, close friends become general friends... whether it\'s natural or whatever, it just happens that way." Joseph (senior year): "I don\'t have a best friend... I feel pretty lonely and sometimes depressed... because I don\'t have no one to go out with." Die Jungen rationalisieren den Verlust als "natural" oder "maturity", zeigen aber gleichzeitig Symptome von Einsamkeit, Misstrauen und Trauer.',
		evidence:
			'Way\'s longitudinale Interviewdaten: die selben Jungen wurden jedes Jahr für 3-5 Jahre interviewt. Die Transformation vom intimen Freundschaft-sprechen im Freshman zum "I lost it"-sprechen im Senior Year ist dokumentiert Boy-by-Boy in direkten Zitaten.',
		status: 'green',
		explanation:
			'Die longitudinale Natur der Beobachtung macht sie zu einer der stärksten direkten Evidenzen in der Bibliothek. Same-boy-before-and-after Vergleiche in Interviews eliminieren das "Selektions-Bias"-Problem. Die Muster sind konsistent über die Stichprobe.',
		dependsOn: ['boys-emotionally-articulate-early-adolescence'],
		collapseRisk:
			'Wenn nur eine Minderheit der Jungen dieses Muster zeigte, würde der Befund an Allgemeinheit verlieren. Way dokumentiert, dass die Mehrheit den Verlust durchläuft, eine signifikante Minderheit aber resistiert.',
		bookLocations: [
			{
				pages: 'Kap. 6, S. 180-210',
				chapter: '"When You Grow Up, Your Heart Dies"',
				context: 'Das zentrale empirische Kapitel zur Late-Adolescence-Transformation. Dutzende von before/after-Interviewvergleichen.'
			}
		],
		evidenceRefs: [
			{ label: 'Way — Longitudinal NYC Studies', authorSearch: 'Way' }
		]
	},

	// ======== Row 2: The mechanism ========
	{
		id: 'homophobia-mechanism',
		step: 5,
		shortLabel: 'Homophobie als Kernmechanismus des Verlusts',
		type: 'causal',
		claim:
			'Die Jungen selbst identifizieren den Mechanismus: die kulturelle Gleichsetzung emotionaler Intimität mit "gay", "girlish", oder "immature" produziert eine Vermeidungsreaktion. Carlos (freshman): "we could express our feelings... tell each other how we feel... show each other love." Carlos (junior year, über DENSELBEN Freund): fügt "no homo" nach jedem Satz ein, sagt "that question sounded homo." Jason (senior year), unprompted bei Frage über männliche Freunde: "ich habe nichts gegen Schwule, aber ich selbst bin nicht schwul." Mohammed (junior year): "I could keep [my feelings] to myself. You know, I\'m mature enough."',
		evidence:
			'Direkte Interview-Transkripte zeigen Boys, die homophobe Disclaimers selbst einfügen, ohne dass der Interviewer nach Sexualität gefragt hätte. Das ist "freiwillige Selbstüberwachung" — die Boys zeigen selbst, dass sie die kulturelle Gleichsetzung internalisiert haben.',
		status: 'yellow',
		explanation:
			'Die Beobachtung (Boys fügen homophobe Disclaimers ein) ist empirisch solide. Die kausale Interpretation (Homophobie IST der Mechanismus des Freundschaftsverlusts) ist plausibel, aber nicht experimentell isoliert. Way argumentiert, dass die zeitliche Korrelation — Verlust beginnt genau dann, wenn die Homophobie-Disclaimers anfangen — die Kausalrichtung stützt. Alternative Interpretationen (Reifung, Entwicklung anderer Interessen, etc.) sind logisch möglich, erklären aber die spezifische sprachliche Muster nicht.',
		dependsOn: ['friendship-loss-late-adolescence'],
		collapseRisk:
			'Wenn Homophobe Disclaimers ein Artefakt der Interview-Situation wären (Jungen machen Witze, performen Männlichkeit vor dem Interviewer), wäre die Interpretation zu stark. Way weist auf das konsistente Muster hin und darauf, dass sensiblere Jungen (wie Carlos) explizit die Konflikt zwischen ihren Wünschen und der Norm artikulieren.',
		bookLocations: [
			{
				pages: 'Kap. 6, S. 200-220',
				chapter: '"When You Grow Up, Your Heart Dies"',
				context: 'Carlos-Fall im Detail entwickelt. "No homo"-Dokumentation über verschiedene Interviews.'
			}
		],
		evidenceRefs: [
			{ label: 'Pollack — Real Boys', authorSearch: 'Pollack' },
			{ label: 'Connell — Der gemachte Mann (über Homophobie als Gender-Policing)', authorSearch: 'Connell' }
		]
	},

	{
		id: 'suicide-timing-correlation',
		step: 6,
		shortLabel: 'Timing: Suizidrate steigt an derselben Altersschwelle',
		type: 'observation',
		claim:
			'Der Freundschaftsverlust bei 16-18 korreliert zeitlich mit dem dramatischen Anstieg der männlichen Suizidrate. In den USA steigt die Suizidrate für Jungen zwischen 14 und 19 scharf an und wird viermal so hoch wie bei Mädchen. Way argumentiert, dass dieser Timing keine Koinzidenz ist — die Jungen verlieren die Schutzfaktoren (enge Freundschaften, emotionale Unterstützung) in genau dem Alter, in dem die kulturelle Druck zur "Männlichkeit" am stärksten wird.',
		evidence:
			'CDC und National Center for Health Statistics Daten zur Jugend-Suizidrate. Way zitiert diese als epidemiologisches Anker für die Folgen des Freundschaftsverlusts. Konvergent mit Pollack\'s "Hidden Epidemic of Boy Depression" Daten (Nolen-Hoeksema, Angst, Girgus).',
		status: 'yellow',
		explanation:
			'Die Korrelation ist epidemiologisch robust. Die kausale Interpretation (Freundschaftsverlust → Isolation → Depression → Suizid) ist plausibel, aber nicht die einzige Erklärung. Alternative Faktoren (Academic Pressure, Identity Formation, Access to Lethal Methods) spielen sicher auch eine Rolle. Way\'s Beitrag ist, die Freundschafts-Ebene als unterschätzten Faktor zu identifizieren.',
		dependsOn: ['friendship-loss-late-adolescence'],
		collapseRisk:
			'Wenn die Suizidrate-Steigerung primär durch andere Faktoren erklärt wird (z.B. Access zu Schusswaffen in USA), wäre der Freundschafts-Erklärungsrahmen weniger zentral. Aber international zeigen mehrere Länder ähnliche Timing-Muster trotz verschiedener Suizidmethoden.',
		bookLocations: [
			{
				pages: 'Kap. 6, S. 215-225',
				chapter: '"When You Grow Up, Your Heart Dies"',
				context: 'Epidemiologischer Anker. Verbindung zum Pollack/Kindlon-Thompson-Material.'
			}
		],
		evidenceRefs: [
			{ label: 'CDC WONDER — Suicide Rates by Age and Sex', authorSearch: 'CDC' }
		]
	},

	// ======== Row 3: Parallels and theoretical context ========
	{
		id: 'brown-gilligan-parallel',
		step: 7,
		shortLabel: 'Parallele zu Brown & Gilligans Mädchen-Forschung',
		type: 'theory',
		claim:
			'Way rahmt ihr Buch explizit als parallele Fortsetzung von Brown & Gilligans *Meeting at the Crossroads* (1992), die zeigte, dass Mädchen, die mit 8-11 "freely and honestly" über ihre Gefühle sprachen, mit 12-13 "lost in a world of \'I don\'t know\'" wurden — sie verloren ihre "honest voice" beim Konform zu weiblichen Normen ("be nice," "don\'t be selfish"). Way findet das GLEICHE Muster bei Jungen — aber an einem anderen Alter. Mädchen verlieren es mit 12-13; Jungen mit 16-18. Der Mechanismus ist identisch: kulturelle Pressure überschreibt frühere emotionale Kapazität.',
		evidence:
			'Lyn Mikel Brown & Carol Gilligan (1992) "Meeting at the Crossroads: Women\'s Psychology and Girls\' Development" — seminal work. Way\'s explicit framing throughout Deep Secrets.',
		status: 'yellow',
		explanation:
			'Die Parallele ist theoretisch fruchtbar und empirisch gut gestützt. Brown & Gilligans Daten für Mädchen sind robust und viel-zitiert. Way\'s Extension auf Jungen ist logisch konsistent. Die Schlussfolgerung — dass der Mechanismus bei beiden Geschlechtern derselbe ist (kulturelle Pressure auf frühere Kapazität) — widerlegt biologische Erklärungen ("Jungen sind halt so"). Schwäche: die beiden Befunde kommen aus derselben methodologischen Tradition (Listening Guide), nicht aus unabhängigen Quellen.',
		dependsOn: ['boys-emotionally-articulate-early-adolescence', 'friendship-loss-late-adolescence'],
		collapseRisk:
			'Die Parallele kann als methodologisches Artefakt der Listening Guide gelesen werden — beide Studien "finden" Verlust, weil sie aktiv danach suchen. Unabhängige quantitative Studien müssten den Befund validieren.',
		bookLocations: [
			{
				pages: 'Kap. 5, S. 143-150',
				chapter: 'Stories of Resistance',
				context: 'Explizite Parallele zu Brown & Gilligan. Way nennt sie ihre unmittelbaren methodologischen Vorgängerinnen.'
			}
		],
		evidenceRefs: [
			{ label: 'Brown & Gilligan — Meeting at the Crossroads', authorSearch: 'Brown' },
			{ label: 'Chu — When Boys Become Boys', authorSearch: 'Chu' }
		]
	},

	{
		id: 'resistance-for-liberation',
		step: 8,
		shortLabel: 'Resistance-for-liberation: Jungen die das Muster durchbrechen',
		type: 'observation',
		claim:
			'Nicht alle Jungen verlieren ihre Freundschaften. Eine Minderheit zeigt "Resistance for Liberation" (Janie Ward Framework) — sie behalten ihre emotionalen Freundschaften durchs späte Adoleszenz hindurch. Santos longitudinale Daten (zitiert von Way): Black, Latino, Asian American und White middle-schoolers die höhere Widerstandsniveaus gegen Gender-Stereotypen zeigten hatten signifikant niedrigere depressive Symptome. Wenn Widerstand über Zeit zunahm, verbesserte sich die psychologische Anpassung; wenn er abnahm, verschlechterte sie sich. Protective factors: starke mütterliche Unterstützung, mitfühlende Schulen, Peer-Gruppen mit Gegennormen.',
		evidence:
			'Janie Ward (Harvard School of Education) framework "resistance for survival vs resistance for liberation." Carlos Santos longitudinale Studie mit ~500 middle schoolers (peer-reviewed publications). Gary Barker zu brasilianischen street boys. Stephen Frosh zu britischen working-class boys. Michael Reichert und Sharon Ravitch zu Jewish-identified boys.',
		status: 'yellow',
		explanation:
			'Die Muster der "resistance for liberation" sind qualitativ beschrieben und durch Santos\' quantitative Daten gestützt. Die Korrelation zwischen Widerstand und besserer psychischer Gesundheit ist real und durchaus signifikant. Aber die kausale Richtung bleibt offen: widerstehen gesündere Jungen der Norm, oder macht der Widerstand sie gesünder? Way argumentiert für letzteres, Santos\' Längsschnittdaten stützen es teilweise.',
		dependsOn: ['friendship-loss-late-adolescence', 'brown-gilligan-parallel'],
		collapseRisk:
			'Wenn die "resistant boys" in ihren zugrundeliegenden Charakteren anders wären (mehr Resilienz von Geburt an, bessere familiäre Umgebungen), dann wäre die protective-factor-These nicht direkt kausal lesbar. Way ist sich dessen bewusst.',
		bookLocations: [
			{
				pages: 'Kap. 5, S. 140-170',
				chapter: 'Nick and George: Stories of Resistance',
				context: 'Zentrales Kapitel über Widerstand. Nick und George als Fallstudien; Santos-Daten zitiert.'
			}
		],
		evidenceRefs: [
			{ label: 'Ward, Janie — Resistance for Survival vs Liberation', authorSearch: 'Ward' },
			{ label: 'Santos, Carlos — Longitudinal Resistance Study', authorSearch: 'Santos' }
		]
	},

	// ======== Row 4: Cross-book implications ========
	{
		id: 'directly-observes-mask',
		step: 9,
		shortLabel: 'Direktes empirisches Validieren der Mask-/Boy-Code-Konvergenz',
		type: 'consequence',
		claim:
			'Way bietet direkte longitudinale observational evidence für die "Mask/Boy Code/Stiff Upper Lip/Identitätslüge"-Konvergenz, die in der klinischen Tradition zentral ist (Pollack, Kindlon/Thompson, Süfke, Urwin, hooks). Wo die klinische Literatur die Maske aus Erwachsenen-Therapie-Präsentationen INFERIERTE, OBSERVIERT Way ihre Formation in Echtzeit bei denselben Jungen über Jahre. Das ist eine Upgrade von klinischer Inference zu direkter Beobachtung — die Maske ist real, und sie bildet sich konkret zwischen 16 und 18.',
		evidence:
			'Way\'s longitudinale direkte Observation. Parallele Studien (Judy Chu, Carlos Santos, Deborah Tolman, Stephen Frosh, Gary Barker, Michael Reichert) bestätigen das Muster in anderen Samples.',
		status: 'yellow',
		explanation:
			'Way\'s Beitrag zur Mask-Konvergenz ist signifikant: sie erhöht deren empirische Robustheit von "klinisch plausibel" zu "longitudinal direkt beobachtet." Einschränkung: Way ist Teil der Brown/Gilligan-Tradition — nicht eine unabhängige Quelle für die klinische Literatur. Aber ihre direkten Interview-Daten sind primary observational, nicht Sekundär-Synthese.',
		dependsOn: ['friendship-loss-late-adolescence', 'homophobia-mechanism'],
		collapseRisk:
			'Wenn quantitative Studien zeigen, dass Jungen nicht signifikant emotional verlorene Kapazität zeigen (z.B. dass sie weiterhin zu ihren Müttern/Partnerinnen reden), wäre der "Verlust" nur ein Freundschafts-Verlust, nicht ein Fähigkeits-Verlust. Way dokumentiert tatsächlich, dass viele Jungen zu ihren Müttern weiter sprechen — aber das unterstützt ihr Argument (sie haben die Kapazität, verlieren sie aber in männlichen Peer-Beziehungen).',
		bookLocations: [
			{
				pages: 'Kap. 9, S. 260-290',
				chapter: 'The Crisis of Connection',
				context: 'Synthese-Kapitel. Explicit cross-reference zu Pollack, Kindlon/Thompson, Sullivan.'
			}
		],
		evidenceRefs: [
			{ label: 'Pollack — Real Boys', authorSearch: 'Pollack' },
			{ label: 'Kindlon & Thompson — Raising Cain', authorSearch: 'Kindlon' }
		]
	},

	{
		id: 'challenges-biology-essentialism',
		step: 10,
		shortLabel: 'Widerlegt biologisch-essentialistische Erklärungen',
		type: 'consequence',
		claim:
			'Wenn Jungen mit 13-15 die emotionale Kapazität HABEN und sie mit 16-18 VERLIEREN, dann kann diese Kapazität nicht biologisch-deterministisch abwesend sein. Sax, Gurian, Benensons Position ("Jungen sind halt so, das ist ihre Natur") wird durch Way\'s direkte observational data widerlegt. Die Kapazität existiert; sie wird erst danach wegsozialisiert. Die Brown/Gilligan-Parallele verstärkt das: Mädchen verlieren ihre "honest voice" mit 12-13 durch dieselbe kulturelle Mechanik — also ist es nicht geschlechtsspezifische Biologie, sondern geschlechts-differenzierte kulturelle Pressure.',
		evidence:
			'Way\'s direkte Interview-Daten mit ausdrucksstarken Jungen. Brown & Gilligan parallel Daten für Mädchen. Eliot\'s "Pink Brain, Blue Brain" als Neurowissenschaft-Rückendeckung. Konvergent mit Fine, Hyde, Ritchie MRI-Studie.',
		status: 'yellow',
		explanation:
			'Die logische Struktur des Arguments ist stark: wenn Kapazität observiert wird und dann verloren geht, kann die spätere Abwesenheit nicht biologisch notwendig sein. Aber das Argument hat Grenzen: es widerlegt nicht die Möglichkeit, dass biologische Faktoren die Richtung oder Stärke der sozialen Pressure beeinflussen. Reeves\' Mittelposition (Biologie und Kultur interagieren, Testosteron amplifiziert statt triggert) bleibt kompatibel mit Way\'s Daten.',
		dependsOn: ['boys-emotionally-articulate-early-adolescence', 'friendship-loss-late-adolescence', 'brown-gilligan-parallel'],
		collapseRisk:
			'Wenn biologische Studien zeigen, dass Testosteron-Anstieg in der Pubertät direkt emotionale Verarbeitungszentren beeinträchtigt, wäre eine rein kulturelle Erklärung ungenügend. Die aktuelle Neurowissenschaft (Hooven, Ritchie, Eliot) unterstützt aber die "Amplifier nicht Trigger"-These.',
		bookLocations: [
			{
				pages: 'Kap. 2, S. 75-90',
				chapter: 'Investigating Boys, Friendships, and Human Nature',
				context: 'Explizite Auseinandersetzung mit Biologismus. Eliot, Hooven, Maccoby zitiert.'
			}
		],
		evidenceRefs: [
			{ label: 'Eliot — Pink Brain, Blue Brain', authorSearch: 'Eliot' }
		]
	},

	// ======== Row 5: Solutions ========
	{
		id: 'solution-protect-not-teach',
		step: 11,
		shortLabel: '„Schützen, nicht lehren”: die Kapazität ist schon da',
		type: 'solution',
		claim:
			'Way\'s solution-framework ist distinct von der klinischen Tradition. Wo Pollack und Kindlon/Thompson fordern, dass Jungen "emotionale Literacy" beigebracht bekommen, argumentiert Way, dass die Kapazität bereits da ist — wir müssen sie nur vor kulturellem Abbau schützen. Konkrete Forderungen: (1) Homophobie und die Equation von Intimität mit "gay"/"girlish" kulturell delegitimieren; (2) Männliche Peer-Gruppen mit Gegen-Normen fördern (Schulen, Jugendprogramme, Sport-teams mit emotionaler Akzeptanz); (3) Eltern — besonders Mütter — als primäre emotionale Stütze unterstützen; (4) Masculine role models, die emotionale Intimität explizit zeigen (z.B. Carlos Santos\' Arbeit, Michael Reichert\'s Jewish-identified boys).',
		evidence:
			'Way\'s Synthese basierend auf den resistance-Fallstudien (Kap. 5), Parent/Peer Context-Analyse (Kap. 7-8), und das Crisis of Connection-Schlusskapitel (Kap. 9).',
		status: 'untestable',
		explanation:
			'Normative Handlungsempfehlung. Die Grundeinsicht ("Kapazität ist da, nicht weggebracht werden, muss geschützt werden") ist eine andere Framing als "Jungen müssen emotionale Fähigkeiten lernen". Empirisch testbar wäre das über Interventionsstudien, die explicit auf Schutz statt Lehre setzen — solche Studien gibt es in Ansätzen (Jewish Leadership Programs in Reichert\'s Arbeit, Men Can Stop Rape, Becoming-a-Man Chicago) aber keine große RCT-Evidenz.',
		dependsOn: ['resistance-for-liberation', 'directly-observes-mask'],
		collapseRisk:
			'Wenn Intervention auf "emotionale Literacy lehren"-Basis wirksam sind und auf "Kapazität schützen"-Basis nicht, wäre Way\'s Rahmung praktisch weniger nützlich. Die Evidenz-Basis ist zu dünn, um das zu entscheiden.',
		bookLocations: [
			{
				pages: 'Kap. 9, S. 290-330',
				chapter: 'The Crisis of Connection',
				context: 'Way\'s Synthese und Lösungsvorschläge.'
			}
		],
		evidenceRefs: [
			{ label: 'Reichert & Ravitch — Jewish masculinity', authorSearch: 'Reichert' },
			{ label: 'Santos — Resistance in middle schoolers', authorSearch: 'Santos' }
		]
	},

	{
		id: 'solution-crisis-of-connection',
		step: 12,
		shortLabel: 'Society-wide Crisis of Connection',
		type: 'solution',
		claim:
			'Way situiert die Boys\' Friendship Crisis in einem breiteren gesellschaftlichen Kontext. Sara Konrath Meta-Analyse von 72 Studien zu Empathie bei College-Studierenden 1979-2009: drastischer Rückgang, besonders nach 2000. Parallel: Rückgang in sozialer Verbindung, Vertrauen, Gemeinschaft (Putnam "Bowling Alone"). Way argumentiert: die Boys\' Crisis ist nicht isoliert — sie ist Teil einer breiteren "Crisis of Connection," die alle Altersgruppen und Geschlechter betrifft, aber bei männlichen Adolescenten am akutesten wird, weil die kulturelle Pressure gegen Verbindung am stärksten männlich codiert ist.',
		evidence:
			'Sara Konrath et al. meta-analysis on empathy decline (2010). Robert Putnam "Bowling Alone" (2000) für sozialen Kapital-Rückgang. New York Times article zu Schulen, die "best friends" aktiv entmutigen.',
		status: 'yellow',
		explanation:
			'Die Empathie-Rückgang-Befunde sind publiziert und diskutiert, aber auch kritisiert (self-report bias, generational response shift). Die Verbindung zur Boys\' Friendship Crisis ist interpretativ stark, aber nicht experimentell etabliert. Die breiteren gesellschaftlichen Diagnose (Putnam) ist kontrovers aber einflussreich.',
		dependsOn: ['directly-observes-mask', 'solution-protect-not-teach'],
		collapseRisk:
			'Wenn die Empathie-Rückgang-Metanalyse methodisch wackelt (z.B. Konrath 2011 zeigte, dass self-report-effects die Ergebnisse teilweise erklären), wäre die Verbindung weniger robust.',
		bookLocations: [
			{
				pages: 'Kap. 9, S. 320-345',
				chapter: 'The Crisis of Connection',
				context: 'Zoom-out auf die gesellschaftliche Crisis of Connection. Konrath Meta-Analyse, Putnam-Referenz, NYT article zu Schulen.'
			}
		],
		evidenceRefs: [
			{ label: 'Konrath, Sara — Empathy Meta-Analysis', authorSearch: 'Konrath' },
			{ label: 'Putnam, Robert — Bowling Alone', authorSearch: 'Putnam' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'solution-crisis-of-connection')!;
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
		'Way\'s Deep Secrets ist die erste longitudinale ethnographische Primärquelle der gesamten Bibliothek. Von 12 Gliedern sind 3 grün (die zwei fundamentalen observational findings zu emotional articulation in früher Adoleszenz und zu Friendship Loss in später Adoleszenz, plus die Methodologie selbst), 7 gelb (die mechanistischen Interpretationen — Homophobie als Mechanismus, Suizid-Timing-Korrelation, Brown/Gilligan-Parallele, Resistance-for-Liberation, direkte Validierung der Mask-Konvergenz, Widerlegung des Biologismus) und 2 untestbar (die normativen Lösungsvisionen). Keine roten Glieder. ' +
		'Die distinctive contribution: Way liefert primary observational data zum Mechanismus der "Mask/Boy Code"-Konvergenz. Wo Pollack, Kindlon/Thompson, Süfke, hooks und Urwin die Maske aus klinischen Adult-Präsentationen inferieren, dokumentiert Way sie in Echtzeit bei adolescenten Jungen. Das ist ein upgrade von klinischer Inferenz zu direkter Beobachtung. ' +
		'Methodologische Einschränkung: Way steht im Brown/Gilligan Listening-Guide-Tradition, nicht in einer unabhängigen Forschungslinie. Ihre Befunde validieren die klinische Konvergenz teilweise, aber sie sind Teil derselben theoretischen Ahnenlinie — nicht externe Replikation. Die Parallele ist: Reeves lieferte externe statistische Validation (Brookings-Daten), Way liefert interne methodologische Upgrade (Klinik → Beobachtung). ' +
		'Way\'s Befund widerlegt direkt die "overclaim"-Bewertung, die ich zu "boys-born-more-expressive" gab — zumindest für frühe Adoleszenz. Infant-Niveau-Claims bleiben überklagt (Chaplin & Aldao 2013 Meta-Analyse zeigt Mädchen in Säuglingsphase leicht expressiver), aber Way zeigt, dass bei 13-15 die emotional expression robust und konsistent präsent ist. Das ist eine Upgrade der Teilbehauptung, die die Mask-Konvergenz stützt. ' +
		'Für das Gesamtkorpus: Way + Reeves zusammen bilden das empirische Doppel-Anker der Bibliothek. Reeves für politisch-statistische Validierung, Way für longitudinale observational Validierung. Beide kommen aus anderen Traditionen als die klinische Konvergenz (Brookings-Wonk vs. Brown/Gilligan developmental psychology), beide konvergieren auf ähnliche Diagnosen mit unterschiedlichen Methoden. Das ist die stärkste mögliche Form von interdisziplinärer Validation.'
};
