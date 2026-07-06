// ds-evidence-audit-data.ts
// Cross-referencing claims in Way's "Deep Secrets" with evidentiary character

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
		claim: 'Jungen in früher und mittlerer Adoleszenz (13-15) beschreiben ihre engsten männlichen Freundschaften in sprachlich intimer Weise, mit Wörtern wie „love”, „deep”, „within you”, „trust”, „secret”.',
		source: 'Way\'s longitudinale NYC public school Studien (20+ Jahre, hunderte Jungen, ~135 im Kernprojekt). Direkte Interview-Transkripte mit Justin, George, Chen, Kai, Malcolm, etc. Independent replication: Judy Chu\'s Studien mit weißen Privatschul-Jungen.',
		pages: 'Kap. 1-3 (S. 1-130)',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Primary longitudinale observational data, independent replication',
		detail:
			'Die beobachtung ist in direkten Interview-Transkripten von hundreds of boys dokumentiert. Way\'s Daten sind unabhängig repliziert durch Judy Chu (When Boys Become Boys, 2014) mit einem anderen Sample (weiße Privatschulen). Race und Klasse machen nach Way KEINEN systematischen Unterschied. Das ist die stärkste longitudinale observational data in der gesamten Bibliothek für diesen Befund.'
	},
	{
		claim: 'Dieselben Jungen verlieren ihre engen männlichen Freundschaften ab ca. 16-17, einer Transformation dokumentiert in wiederholten Interviews über mehrere Jahre.',
		source: 'Way\'s Längsschnitt-Daten. Dokumentiert Boy-by-Boy mit before/after-Vergleichen. Justin, Joseph, Carlos, Jason, Mohammed als Fallstudien.',
		pages: 'Kap. 6, S. 180-240',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Same-subjects longitudinal observation',
		detail:
			'Die Transformation wird an denselben Jungen in wiederholten jährlichen Interviews beobachtet. Das eliminiert Selektionsbias-Probleme. Die Muster sind konsistent über den Sample und werden durch parallele Forschung (Chu, Santos, Frosh, Barker) gestützt. Way\'s Methodologie (Listening Guide, Bronfenbrenner) ist peer-reviewed und etabliert.'
	},
	{
		claim: 'Methodologie: 20+ Jahre longitudinale Interview-Studien, ~135 Jungen im Kernprojekt, 75% über 3+ Jahre interviewt, diverses Sample (Black, Latino, Chinese American, White), 70% arm/Arbeiterklasse, NYC public schools, Listening Guide Protokoll.',
		source: 'Way\'s methodology chapter (Kap. 2). Peer-reviewed publikationen in Developmental Psychology, Journal of Research on Adolescence, etc.',
		pages: 'Kap. 2, S. 36-50',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Etablierte qualitative Methodologie mit hohen Retentionsraten',
		detail:
			'Die Methodologie ist rigoros und peer-reviewed. Die Retention-Raten (60% über 3-5 Jahre, 90%+ innerhalb derselben Schule) sind ausgezeichnet für qualitative Längsschnittforschung. Das Sample ist deliberately diverse — Way wählte spezifisch Black/Latino/Chinese-American boys, um die Stereotyp der "hyper-masculine" ethnischen Minderheiten zu widerlegen.'
	},

	// ============ YELLOW ============
	{
		claim: 'Homophobie („no homo”-Disclaimer, Angst vor dem Als-gay-gesehen-Werden, Gleichsetzung von Intimität mit Weiblichkeit) ist der Kernmechanismus des Freundschaftsverlusts in später Adoleszenz.',
		source: 'Way\'s direkte Interview-Transkripte (Carlos, Jason, Mohammed, etc.). Boys fügen selbst homophobe Disclaimers ein, ohne dass der Interviewer nach Sexualität gefragt hätte.',
		pages: 'Kap. 6, S. 200-220',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Beobachtung robust, kausale Interpretation plausibel aber nicht experimentell isoliert',
		detail:
			'Die Beobachtung (Boys inserting no-homo-disclaimers) ist empirisch solide. Die kausale Interpretation (Homophobie IST der Mechanismus) ist plausibel: die zeitliche Korrelation zwischen dem Auftreten der Disclaimers und dem Verlust der Freundschaften stützt die Kausalrichtung. Aber alternative Interpretationen (Reifung, andere Interessen) sind logisch möglich. Die Pollack/Connell/Urwin-Konvergenz stützt dieselbe Mechanismus-These.'
	},
	{
		claim: 'Die Suizidrate für US-Jungen steigt scharf zwischen 14 und 19 und wird 4× die der Mädchen — genau im Alter, wenn Way den Freundschaftsverlust dokumentiert.',
		source: 'CDC WONDER Daten, US National Center for Health Statistics. Konvergent mit Pollack\'s "hidden epidemic of boy depression"-Daten (Nolen-Hoeksema Stanford, Angst Swiss).',
		pages: 'Kap. 6, S. 215-225',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Korrelation epidemiologisch robust, kausale Interpretation interpretativ',
		detail:
			'Die Timing-Korrelation zwischen Friendship Loss und Suizid-Anstieg ist real. Die kausale Interpretation (Loss → Isolation → Depression → Suicide) ist plausibel aber nicht die einzige Erklärung. Way\'s Beitrag ist, Friendship-Loss als unterschätzten Faktor zu identifizieren. Alternative Erklärungen (Academic Pressure, Access zu Waffen) spielen sicher auch eine Rolle.'
	},
	{
		claim: 'Die Brown & Gilligan (1992) Parallele: Mädchen verlieren ihre „honest voice” zwischen 8-11 und 12-13 durch Konform zu feminen Normen; Jungen verlieren sie zwischen 13-15 und 16-18 durch Konform zu maskulinen Normen. Der Mechanismus (kulturelle Pressure auf frühere Kapazität) ist identisch.',
		source: 'Lyn Mikel Brown & Carol Gilligan (1992) "Meeting at the Crossroads: Women\'s Psychology and Girls\' Development." Seminal work. Way\'s explicit framing der Parallele.',
		pages: 'Kap. 5, S. 143-155',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Theoretisch produktiv, methodologisch nicht unabhängig',
		detail:
			'Brown & Gilligans Daten für Mädchen sind robust und viel-zitiert. Way\'s Extension auf Jungen ist logisch konsistent. Die gemeinsame Schlussfolgerung — gleicher Mechanismus bei beiden Geschlechtern — widerlegt rein biologische Erklärungen. Kritische Einschränkung: beide Befunde kommen aus derselben methodologischen Tradition (Listening Guide). Das ist kein unabhängiger Replication.'
	},
	{
		claim: '"Resistance for Liberation" (Janie Ward framework): Jungen die gegen die Gender-Norm Widerstand leisten und ihre Freundschaften behalten zeigen bessere psychische Gesundheit. Santos longitudinale Daten: höheres Widerstandsniveau → signifikant niedrigere depressive Symptome.',
		source: 'Janie Ward (Harvard Graduate School of Education) framework "Resistance for Survival vs. Resistance for Liberation." Carlos Santos longitudinale Studie mit ~500 middle schoolers.',
		pages: 'Kap. 5, S. 140-170',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Korrelationsstudien vorhanden, Kausalität nicht experimentell isoliert',
		detail:
			'Die Santos-Daten zeigen eine signifikante Korrelation zwischen Widerstand und besserer psychischer Gesundheit. Longitudinale Analyse zeigt, dass Veränderungen in einem mit Veränderungen im anderen einhergehen. Das stützt (aber beweist nicht) die Kausalrichtung Way vertritt. Kritische Einschränkung: "resilient" boys könnten von Anfang an andere Charakter-Traits haben (die sowohl Widerstand als auch bessere psychische Gesundheit verursachen).'
	},
	{
		claim: 'Die klinisch-konvergente "Mask/Boy Code"-These wird durch Way\'s longitudinale observational data direkt validiert. Pollack\'s "Mask of Masculinity", Süfke\'s "Identitätslüge", Urwin\'s "Stiff Upper Lip" werden empirisch gestützt, aber durch primary observation statt klinische Inference.',
		source: 'Way\'s Interview-Daten. Parallel zu Pollack, Kindlon/Thompson, Real, Chu, Santos, Frosh, Barker.',
		pages: 'Kap. 9, S. 270-290',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Longitudinale Validation einer klinischen Konvergenz, nicht ganz unabhängig',
		detail:
			'Way\'s Beitrag zur Mask-Konvergenz ist signifikant: sie erhöht deren empirische Robustheit von "klinisch plausibel" zu "longitudinal direkt beobachtet." Einschränkung: Way ist Teil der Brown/Gilligan-Tradition, nicht eine unabhängige Quelle für die Pollack-Linie. Aber ihre Daten sind primary observational, nicht Sekundär-Synthese. Die Upgrade ist von Klinik → direkte Beobachtung, nicht von einer Tradition zur anderen.'
	},
	{
		claim: 'Thick-culture vs thin-culture-Distinction (Geertz-derived): nearly all existing boy-crisis literature (Pollack, Sax, Gurian, Kindlon/Thompson, Sommers) offers thin interpretations, weil sie Stereotype als gegeben akzeptieren statt sie zu untersuchen.',
		source: 'Clifford Geertz (1973) "Thick Description." Way\'s Erweiterung auf kulturelle Stereotyp-Untersuchung.',
		pages: 'Kap. 1, S. 55-80',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Methodologisch-theoretische Einschätzung, produktive Neurahmung',
		detail:
			'Way\'s Distinktion ist nicht direkt empirisch testbar, aber methodologisch fruchtbar. Sie ermöglicht eine kritische Umordnung der Boy-Crisis-Literatur. Ihre Validierung liegt in der fruchtbaren Produktivität der Neurahmung, nicht in einer empirischen Hypothese.'
	},
	{
		claim: 'Die Logik: Wenn Jungen mit 13-15 emotionale Kapazität HABEN und sie mit 16-18 VERLIEREN, dann widerlegt das biologisch-essentialistische Erklärungen ("Jungen sind halt so").',
		source: 'Way\'s observational data + formale Logik. Konvergent mit Eliot (Pink Brain, Blue Brain) und kritischer Neurowissenschaft.',
		pages: 'Kap. 2, S. 75-90',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Logisches Argument, stützt anti-essentialist Position, aber nicht vollständig exkludierend',
		detail:
			'Das Argument ist logisch: Kapazität zu einem Zeitpunkt + Verlust zu einem anderen Zeitpunkt = Verlust ist nicht biologisch notwendig. Aber es excludert nicht Interaktionseffekte — biologische Faktoren können die kulturelle Pressure moderieren ohne sie zu bestimmen. Reeves\' Mittelposition (Biology + Nurture) bleibt kompatibel mit Way\'s Daten.'
	},
	{
		claim: 'Mütter, nicht Väter, werden von den meisten Jungen als primäre emotionale Support-Quelle genannt. Nur gelegentlich werden Väter als „best friends” bezeichnet.',
		source: 'Way\'s Interview-Daten, besonders Kap. 7 „As Boys Become Men”.',
		pages: 'Kap. 7, S. 237-260',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Empirisch robust in Way\'s Sample, komplexert das Father-Hunger-Narrativ',
		detail:
			'Way findet, dass Mütter die zentralen emotionalen Stützen sind, auch in Haushalten mit präsenten Vätern. Das komplex iert das Father-Hunger-Narrativ der klinischen Tradition (Pollack, Gurian, Reeves via Eggebeen). Nicht Widerspruch, aber Nuance: Jungen brauchen emotional verfügbare Eltern, und in vielen Familien ist das die Mutter — nicht weil Väter irrelevant wären, sondern weil maternalen Unterstützung oft die emotional-zentrale ist.'
	},

	// ============ UNTESTABLE ============
	{
		claim: '„Schützen statt lehren”: Die emotionale Kapazität ist bereits da, muss aber vor kulturellem Abbau geschützt werden. Konkrete Forderungen: Homophobie delegitimieren, Peer-Groups mit Gegen-Normen fördern, maternale Unterstützung stärken.',
		source: 'Way\'s synthesizing framework in Kap. 9.',
		pages: 'Kap. 9, S. 290-320',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Normative Handlungsempfehlung',
		detail:
			'Eine interventionspolitische Empfehlung, keine empirische Hypothese. Ihre Validität zeigt sich an konkreten Interventionsstudien (wie Reichert\'s Jewish Leadership Programs, Men Can Stop Rape, Becoming-a-Man Chicago), aber die Evidenz-Basis für "Protect not Teach" als Framework ist noch dünn.'
	},
	{
		claim: 'Die Boys\' Friendship Crisis ist Teil einer breiteren „Crisis of Connection” in der US-Gesellschaft, dokumentiert durch Konrath Meta-Analyse (Empathy decline 1979-2009) und Putnam „Bowling Alone”.',
		source: 'Sara Konrath et al. (2010) Meta-Analyse zu Empathy. Robert Putnam (2000) "Bowling Alone."',
		pages: 'Kap. 9, S. 320-345',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Gesellschaftsdiagnostische Rahmung',
		detail:
			'Die breitere gesellschaftliche Diagnose ist interpretativ und kontrovers. Konrath-Meta-Analyse ist real publiziert, aber auch kritisiert (self-report bias, generational response shift). Way\'s Verbindung zur Boys\' Friendship Crisis ist interpretativ stark, aber nicht experimentell etabliert.'
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
		'Way\'s Deep Secrets liefert die stärkste longitudinale observational evidence in der gesamten Bibliothek. Die 3 grünen Glieder sind die fundamentalen empirischen Beobachtungen: (1) Jungen in 13-15 sind emotional hochartikuliert, (2) dieselben Jungen verlieren diese Kapazität zwischen 16-18, (3) die Methodologie selbst ist rigoros und replikationsstark. Die 7 gelben Glieder sind die mechanistischen Interpretationen (Homophobie als Kern, Brown/Gilligan-Parallele, Resistance-for-Liberation, Mask-Validierung, Thick-vs-Thin, anti-Biologismus, maternal-support) — alle plausibel aber interpretativ. Die 2 untestbaren sind die normativen Lösungen. ' +
		'Keine roten Glieder: Way ist methodologisch so vorsichtig, dass sie empirisch riskante Behauptungen vermeidet. ' +
		'Kritische Einschränkung, die Way selbst anerkennt: Die Methodologie ist qualitativ, nicht quantitativ. Die Interpretation des "Verlusts" basiert auf Listening Guide-Analysen von Interviewtranskripten, nicht auf messbaren Effektstärken. Unabhängige quantitative Validierung (z.B. ein RCT zu interventions-basiertem Protection der adolescenten männlichen Freundschaften) existiert nicht. Way dokumentiert, was passiert, nicht wie stark die Effekte sind. ' +
		'Für den Cross-Book-Vergleich: Way ist besonders wertvoll für die Mask/Boy-Code-Konvergenz. Sie hebt diese von "klinisch plausibel" zu "longitudinal direkt beobachtet" — das ist die stärkste verfügbare Validation für das zentrale Argument der klinisch-konvergenten Autoren. Gleichzeitig validiert sie eine nuanciertere Form der "boys-emotional-capacity"-Behauptung: nicht in der Säuglingsphase (wo Chaplin & Aldao 2013 zeigen, dass Mädchen leicht expressiver sind), sondern in früher und mittlerer Adoleszenz (wo Way\'s Daten die Kapazität robust dokumentieren).'
};
