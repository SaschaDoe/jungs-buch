// mse-evidence-audit-data.ts
// Cross-referencing claims in Süfke's "Männerseelen" with evidentiary character

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
		claim: 'Alexithymie-Forschung zeigt konsistent höhere Alexithymie-Werte bei Männern im Vergleich zu Frauen („Normative Male Alexithymia”).',
		source: 'Sifneos, Taylor und Nachfolger; Levant et al. zur "Normative Male Alexithymia Scale"; konvergente Befunde in klinischen und nichtklinischen Stichproben.',
		pages: 'Kap. 3, S. 53-76',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Meta-analytisch stabil',
		detail:
			'Die quantitative Alexithymie-Forschung zeigt einen moderaten, aber konsistenten Geschlechtseffekt: Männer weisen auf der Toronto Alexithymia Scale und verwandten Instrumenten systematisch höhere Werte auf. Der Effekt ist nicht riesig, aber replikationsstark. Das stützt Süfkes klinische Grundbeobachtung der männlichen Gefühlsblindheit empirisch.'
	},
	{
		claim: 'Männliche Suizidrate liegt in westlichen Ländern bei 3-4x der weiblichen Rate, bei gleichzeitig niedrigeren offiziellen Depressionsdiagnose-Raten — Diskrepanz, die nur durch unterdiagnostizierte/verdeckte männliche Depression erklärbar ist.',
		source: 'WHO-Statistiken, Statistisches Bundesamt, Terrence Real (1999/2005), Cochran & Rabinowitz — Deepening Psychotherapy with Men; Magovcevic & Addis — Masculine Depression Scale.',
		pages: 'Kap. 7, S. 123-150',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Epidemiologisch robust und international konsistent',
		detail:
			'Die Diskrepanz zwischen hohen männlichen Suizidraten und vergleichsweise niedrigen offiziellen Depressionsdiagnose-Raten ist in WHO-Daten und nationalen Statistiken konsistent. Terrence Reals These der „covert depression” ist in der nachfolgenden Forschung (Cochran/Rabinowitz, Addis) empirisch weiter operationalisiert worden. Das Phänomen selbst ist uncontested; diskutiert wird nur die genaue Ätiologie.'
	},
	{
		claim: 'Gendering: Eltern benennen Jungen weniger Gefühle als Mädchen; gleiche Säuglingsverhaltensweisen werden bei Jungen eher als Ärger, bei Mädchen eher als Trauer/Angst wahrgenommen ("Baby-X"-Experimente).',
		source: 'Sozialpsychologische und entwicklungspsychologische Gendering-Forschung seit den 1970er Jahren; klassische Condry & Condry Baby-X-Studien.',
		pages: 'Kap. 3, S. 53-70',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Mehrfach replizierte Befunde',
		detail:
			'Die Baby-X-Paradigmenstudien und nachfolgende Untersuchungen zur differenziellen elterlichen Gefühlsbenennung sind in der entwicklungspsychologischen Literatur konsistent repliziert. Die zugrundeliegende differenzielle Behandlung ist empirisch gut dokumentiert. Die Interpretation als Kausalkette zur Alexithymie (Süfkes Schritt) ist interpretativ, die Basisbefunde sind aber robust.'
	},
	{
		claim: 'Hirnplastizität: ca. 90% der neuronalen Verknüpfungen bilden sich erst im Verlauf des Lebens aus — Geschlechtshirn ist nicht biologisch festgelegt.',
		source: 'Gerald Hüther und nachfolgende Neurowissenschaft; anschlussfähig an Lise Eliot (Pink Brain, Blue Brain).',
		pages: 'Kap. 1-3 (implizit)',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Etablierte Neurowissenschaft',
		detail:
			'Süfke argumentiert nicht explizit mit Neurobiologie, aber sein anti-essentialistischer Ansatz (Gendering als Sozialisation, nicht als biologische Determination) steht auf dem neurowissenschaftlichen Befund der hohen Hirnplastizität. Dieser Befund ist in der Neurobiologie gut etabliert.'
	},
	{
		claim: 'Psychogene Impotenz korreliert signifikant mit Depression, Stress und kardiovaskulären Risiken — ist also nicht „nur sexuelles Symptom”, sondern ein körperlicher Indikator breiterer Gesundheitsprobleme.',
		source: 'Urologische und psychosomatische Literatur; Massachusetts Male Aging Study und Nachfolger.',
		pages: 'Kap. 7, S. 155-170',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Medizinisch robust',
		detail:
			'Die Korrelation zwischen erektiler Dysfunktion und Depression, Stress sowie kardiovaskulären Risiken ist medizinisch gut dokumentiert. Süfkes Lesart der Impotenz als „Metapher der Männlichkeitskrise” hat damit eine robuste körperlich-medizinische Grundlage.'
	},

	// ============ YELLOW ============
	{
		claim: 'Jungen entwickeln ihre Männlichkeitsidentität negativ durch Abgrenzung von Mutter und Weiblichem („Umweg-Identifikation”, „Nicht-Nicht-Mann”) — Folge der asymmetrischen mütterlichen Hauptbezugsperson.',
		source: 'Nancy Chodorow (1985), Das Erbe der Mütter. Psychoanalytisch-feministische Theorie.',
		pages: 'Kap. 3, S. 53-70',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Klinisch plausibel, aber primär theoretisch',
		detail:
			'Chodorows Theorie hat das Feld nachhaltig geprägt und gehört zum Standardinventar der psychoanalytisch-feministischen Geschlechtsforschung. Direkt empirisch überprüfbar ist die spezifische Kausalkette (asymmetrische mütterliche Bezugsperson → negative Identifikation → Alexithymie) allerdings kaum. Die These wurde in der nachfolgenden Sozialisationsforschung teils differenziert (Väter sind heute präsenter, die Dynamik besteht aber phänomenologisch fort).'
	},
	{
		claim: 'Unter praktisch jedem männlichen Symptom (Wut, Rückzug, Sucht, Workaholismus, Gewalt, Impotenz) liegt verdrängte Hilflosigkeit.',
		source: 'Süfkes klinische Beobachtung; konvergent mit Pollack (Real Boys), Real (Verdeckte Depression), Kindlon/Thompson (Raising Cain), Böhnisch (Bedürftigkeit).',
		pages: 'Kap. 7, S. 123-170',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Breit konvergente klinische Beobachtung, schwer direkt empirisch prüfbar',
		detail:
			'Die Hypothese „Hilflosigkeit als Kerngefühl unter männlichen Symptomen” ist von mehreren unabhängigen klinischen Traditionen bestätigt (humanistisch, psychoanalytisch, entwicklungspsychologisch, soziologisch). Empirisch direkt prüfbar wäre sie nur, wenn man Symptome gegen das abgewehrte Gefühl kausal trennen könnte. Sie funktioniert als diagnostisches Heuristikmodell mit hoher klinischer Fruchtbarkeit.'
	},
	{
		claim: 'Die „Identitätslüge”: Die offizielle männliche Fassade stimmt nicht mit der faktischen Innenwelt überein — Männlichsein heißt, die eigene innere Wahrheit zu verleugnen.',
		source: 'Süfke, klinische Beobachtung; konvergent mit Real (covert depression), Pollack (Boy Code), hooks (patriarchal emotional numbness), Brooks (The New Psychotherapy with Men).',
		pages: 'Kap. 3, S. 65-80',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Konvergent beobachtet, phänomenologisch, nicht quantifiziert',
		detail:
			'Die Identitätslüge ist eine klinische Diagnose, die bei mehreren unabhängigen Autor:innen konvergent auftritt. Eine direkte empirische Messung ist methodisch schwierig — Männer können eine Fassade nicht leicht selbst beobachten. Indirekt gestützt durch die Diskrepanz zwischen normativ-männlicher Rollenkonformität und psychischer Gesundheit (männliche Depression, Suizidraten, Beziehungsschäden).'
	},
	{
		claim: 'Externalisierung: Männer verlagern innere Zustände systematisch nach außen (Arbeit, Leistung, Sport, Alkohol, Gewalt, Sex) statt sie innerpsychisch zu verarbeiten.',
		source: 'Explizit übernommen von Lothar Böhnisch (2003, 2006, 2013). Klinisch operationalisiert in Neumann/Süfke (2004, 2006).',
		pages: 'Kap. 4, S. 81-102',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Theoretischer Rahmen mit klinischer Evidenz',
		detail:
			'Das Externalisierungskonzept ist in der deutschen Männerforschung und -beratung etabliert. Es organisiert viele Beobachtungen konsistent. Direkte quantitative Überprüfung (als hypothetische Variable) existiert nur eingeschränkt; das Konzept funktioniert primär als diagnostischer Rahmen.'
	},
	{
		claim: 'Konzeptverwirrung: Männer verwechseln systematisch Gefühle mit Gedanken, Handlungen oder Urteilen. Auf „Wie geht es Ihnen?” antworten sie mit Analysen oder Tätigkeitsberichten.',
		source: 'Süfkes klinische Praxis, ausführlich mit Fallvignetten in Kap. 4. Empirisch anschlussfähig an die Alexithymie-Forschung ("difficulty describing feelings").',
		pages: 'Kap. 4, S. 81-102',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Konvergent mit Alexithymie-Forschung, aber sprachlich-fein',
		detail:
			'Süfkes linguistische Feinbeobachtung ist konvergent mit der Alexithymie-Dimension „Schwierigkeit, Gefühle zu beschreiben”. Eine direkte empirische Validierung über systematische Analyse von Therapieprotokollen gibt es nicht. Jeder Männertherapeut erkennt die Beobachtung sofort wieder — anecdotal, aber methodisch ernst zu nehmen.'
	},
	{
		claim: 'Abwehrmechanismen (Minimierung, Rationalisierung, Projektion, ideologische Starrheit) strukturieren den Umgang mit nicht zugelassenen Gefühlen — die projektive Schamabwehr erklärt etwa rigide moralisch-ideologische Männer-Haltungen, die bei eigener Normabweichung plötzlich inkonsistent werden.',
		source: 'Psychoanalytische Standard-Abwehrlehre (Freud, Anna Freud), klinisch auf männliche Sozialisation angewendet.',
		pages: 'Kap. 4, S. 81-102',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Etablierte psychoanalytische Begriffe, klinische Anwendung',
		detail:
			'Die Abwehrlehre ist psychoanalytisches Standardinventar. Süfkes spezifische Anwendung auf männliche Sozialisationsbefunde ist klinisch plausibel, aber die quantitative Operationalisierung einzelner Abwehrmechanismen ist methodisch schwierig.'
	},
	{
		claim: 'Psychogene Impotenz ist die perfekte Metapher der Männlichkeitskrise: Nicht-externalisierbar, zwingt zur Selbstreflexion, ist therapeutisch ein „Türöffner”.',
		source: 'Süfkes klinische Praxis; konvergent mit Zilbergeld (2000) und Schnack/Neutzling (1995).',
		pages: 'Kap. 7, S. 155-170',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Phänomenologisch plausibel, nicht empirisch geprüft',
		detail:
			'Die Lesart der Impotenz als Identitäts-Metapher ist klinisch gut nachvollziehbar und erklärt, warum Impotenz in der Männertherapie oft zu tieferer Arbeit führt. Als empirische Hypothese wäre sie an spezifischen Outcome-Studien der Impotenz-Therapie zu prüfen — solche Studien gibt es nur indirekt.'
	},
	{
		claim: 'Scham ist bei Männern häufig suizidogen, weil sie zur „unwiderruflichen Schande” übersteigert wird. Viele Morde, vor allem aber Suizide beruhen letztlich auf Schamgefühl.',
		source: 'Süfkes klinische Praxis; anschlussfähig an die Scham-Forschung (Scheff, Tangney, Lewis) und kriminologische Literatur zu „honor-based violence”.',
		pages: 'Kap. 7, S. 123-155',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Klinisch und kriminologisch plausibel',
		detail:
			'Der Zusammenhang zwischen unverarbeiteter Scham und Suizidalität bzw. Gewalt ist in der Scham-Forschung gut dokumentiert (Scheff u.a.). Süfkes spezifische Formulierung zur männlichen Scham-Suizidalität ist konvergent mit dieser Literatur, aber methodisch auf klinischer und interpretativer Ebene.'
	},
	{
		claim: 'Internet-Pornographie kompensiert für Männer die Verletzungen der realen sexuellen Erfahrungen — Über-Verfügbarkeit im Porno als Gegenpol zur erlebten sexuellen Unverfügbarkeit der Pubertät.',
		source: 'Süfkes klinische Reflexion; anschlussfähig an die Forschung zu problematischem Pornokonsum (Grubbs, Voon u.a.).',
		pages: 'Kap. 7, S. 158-170',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Plausibel, im Detail umstritten',
		detail:
			'Die Kompensationshypothese ist klinisch plausibel und mit Teilen der Pornokonsumforschung kompatibel. Die Detailfrage, ob Pornokonsum für einzelne Männer primär Kompensation oder eigenständige Problemdynamik ist, wird in der Literatur kontrovers diskutiert.'
	},

	// ============ UNTESTABLE ============
	{
		claim: 'Psychische Gesundheit gründet in der Bewusstheit über eigene innere Impulse („organismische Erfahrung” nach Rogers; „Konsistenz” nach Grawe).',
		source: 'Rogers (1951/2000), Grawe (2004). Humanistische bzw. neuropsychotherapeutische Tradition.',
		pages: 'Kap. 1-2, S. 17-52',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Theoretisches Rahmenmodell',
		detail:
			'Rogers\' organismische Erfahrung und Grawes Konsistenzmodell sind theoretische Rahmen der humanistischen und neuropsychotherapeutischen Tradition. Grawe hat zwar Metaanalysen zur Wirksamkeit verschiedener Psychotherapieformen integriert, aber die Grundprämisse selbst ist ein Rahmenmodell, nicht eine falsifizierbare Einzelhypothese.'
	},
	{
		claim: 'Der Weg zu sich selbst verläuft in 4 Etappen: Wahrnehmen → Akzeptieren → Mitteilen → Umsetzen der Impulse. Männliche Sozialisation bricht den Weg schon auf Etappe 1 ab.',
		source: 'Süfkes eigene theoretische Synthese aus Rogers/Grawe und klinischer Praxis.',
		pages: 'Kap. 2, S. 27-52',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Therapeutisches Heuristikmodell',
		detail:
			'Die 4-Stufen-Struktur ist ein didaktisches Konstrukt zur Orientierung therapeutischen Handelns. Jede Etappe lässt sich einzeln operationalisieren (Alexithymie-Messung für Wahrnehmen, Akzeptanzskalen etc.), aber das 4-Stufen-Modell als sequenzielle Entwicklungslogik ist ein therapeutisches Ordnungsschema.'
	},
	{
		claim: 'Männliche Stärken: Humor (bes. Selbstironie), Distanzierungsfähigkeit, strukturiertes Rationalitätsdenken und Selbstbehauptungsfähigkeit sind echte Ressourcen, die aus männlicher Sozialisation entstehen.',
		source: 'Süfkes klinische Ressourcenorientierung; anschlussfähig an Grawes Ressourcenmodell.',
		pages: 'Kap. 5, S. 81-102',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Methodische Entscheidung, nicht statistische Behauptung',
		detail:
			'Die Ressourcenorientierung ist keine empirische Hypothese vom Typ „Männer haben mehr Humor als Frauen”, sondern eine klinisch-methodische Entscheidung zur Anti-Pathologisierung. Sie rechtfertigt sich praktisch durch ihre therapeutische Fruchtbarkeit und theoretisch durch Grawes Ressourcenmodell.'
	},
	{
		claim: 'Liebevolle Konfrontation als therapeutische Grundmethode: klare Benennung der Abwehrmechanismen bei gleichzeitiger grundsätzlicher Wertschätzung des Mannes.',
		source: 'Süfke, Neumann/Süfke (2004). Klinische Methodenempfehlung.',
		pages: 'Kap. 6, S. 103-122',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Methodenempfehlung, keine RCT-geprüfte Intervention',
		detail:
			'Die „liebevolle Konfrontation” ist eine klinisch entwickelte Methodenempfehlung, die in der deutschen Männerberatung etabliert ist. RCT-geprüfte Wirksamkeitsstudien gibt es für die deutsche Männerberatung nur in Ansätzen. Die theoretische Anschlussfähigkeit an DBT (Linehan) und integrative Psychotherapieforschung spricht aber für den Ansatz.'
	},
	{
		claim: 'Das therapeutische Ziel ist die „Sehnsucht nach sich selbst” — Handeln aus dem eigenen Bedürfnis, nicht aus Rollenpflicht. Nicht Weiblichkeit oder Männlichkeit, sondern Menschlichkeit.',
		source: 'Süfkes normative Zielformulierung in Ausblick; expliziter Rückbezug auf Böhnisch (2006).',
		pages: 'Ausblick, S. 171-180',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Existentielles/normatives Zielbild',
		detail:
			'Eine normative Vision der therapeutischen Arbeit. Nicht empirisch falsifizierbar, aber prüfbar an der konkreten Wirkung auf Zufriedenheit, Beziehungsqualität und Gesundheit. Die klinische Erfahrung und Psychotherapieforschung sprechen für die Richtung.'
	},
	{
		claim: 'Männergruppen und ernsthafter Austausch unter Männern sind weitgehend ungenutzte Entwicklungsressourcen; sie ermöglichen realistische Männlichkeitseinschätzung, Solidarität und Überwindung der Isolation.',
		source: 'Süfkes klinische Empfehlung im Ausblick. Anschlussfähig an Männerarbeit-Tradition (Böhnisch, Brandes, Winter).',
		pages: 'Ausblick, S. 171-180',
		centrality: 'minor',
		status: 'untestable',
		statusLabel: 'Praxisempfehlung, keine Evaluierungsstudie',
		detail:
			'Die Empfehlung für Männergruppen ist konsistent mit der deutschen Männerarbeits-Tradition. Evaluationsstudien zur Wirksamkeit von Männergruppen als Intervention gibt es nur in Ansätzen. Als Praxisempfehlung gut begründet, als empirische Wirksamkeitsaussage nicht quantifiziert.'
	},
	{
		claim: 'Gesellschaftspolitisch braucht es zwei parallele Strategien: (1) Androgynie-Programm mit geschlechtsspezifischer Förderung, (2) Umwertung der Ungleichbewertung männlicher und weiblicher Eigenschaften.',
		source: 'Ausblick, mit Verweis auf Doris Bischof-Köhler (2006).',
		pages: 'Ausblick, S. 171-180',
		centrality: 'minor',
		status: 'untestable',
		statusLabel: 'Gesellschaftspolitische Vision',
		detail:
			'Süfke selbst betont, dass er sich mit gesellschaftsweiten Entwürfen überfordert fühlt und hauptsächlich auf der individuell-therapeutischen Ebene arbeitet. Die beiden Strategien sind skizziert, nicht ausgeführt — sie sind ein Hinweis auf den strukturellen Horizont, nicht ein eigenständiges Programm.'
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
		'Süfkes Männerseelen ist ein klinisch-phänomenologisches Buch, dessen Evidenzqualität programmatisch ist, nicht defizitär. Die Grünen stützen die zentralen Phänomen-Behauptungen (Alexithymie, verdeckte männliche Depression, Gendering, Impotenz-Korrelate). Die Gelben sind die klinischen Kernbefunde der Männertherapie — Umweg-Identifikation, Identitätslüge, Externalisierung, Konzeptverwirrung, Hilflosigkeit als Kerngefühl — die mehrfach konvergent beobachtet, aber nicht quantitativ hypothesengeprüft sind. Die Untestbaren sind die theoretischen und methodischen Rahmen (Rogers/Grawe, 4-Etappen-Weg, liebevolle Konfrontation, Sehnsucht-Ziel). Keine roten Glieder: Süfke macht keine empirisch riskanten Behauptungen außerhalb seines klinisch-phänomenologischen Modus. ' +
		'Das ist für die klinisch-therapeutische Gattung angemessen. Das Buch beansprucht Handlungsorientierung für die Männertherapie, nicht empirische Gewissheit. Wer die Gattung ernst nimmt, findet hier ein durchdachtes, konvergent validiertes Gebäude. Wer RCTs erwartet, wird enttäuscht. ' +
		'Im Vergleich zu Sax/Gurian/Pollack (amerikanisch-populäre Jungenbücher) ist Süfke zurückhaltender bei Biologismus-Ansprüchen und präziser im klinischen Methodeneinsatz. Im Vergleich zu Böhnisch (akademisch-soziologisch) ist er klinisch-konkreter und handlungsorientierter. Im Vergleich zu hooks (politisch-ethisch) ist er weniger systemkritisch, dafür methodisch präziser in der individuellen Arbeit.'
};
