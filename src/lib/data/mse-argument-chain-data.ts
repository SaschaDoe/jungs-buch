// mse-argument-chain-data.ts
// Argument chain for Björn Süfke, "Männerseelen: Ein psychologischer Reiseführer" (Gütersloher Verlagshaus, 2010)

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
	// ======== Row 0: Theoretische Grundlage ========
	{
		id: 'rogers-grawe',
		step: 1,
		shortLabel: 'Organismische Erfahrung (Rogers/Grawe)',
		type: 'premise',
		claim:
			'Psychische Gesundheit gründet in der Bewusstheit über die eigenen inneren Impulse — Körperempfindungen, Gefühle, Bedürfnisse. Wer den Zugang zu diesen „organismischen Erfahrungen” verliert, verliert die Orientierung für ein kongruent geführtes Leben. Dieses humanistisch-neuropsychotherapeutische Fundament ist Süfkes Ausgangspunkt.',
		evidence:
			'Rogers (1951/2000) zur organismischen Erfahrung und zur Kongruenz als Kern psychischer Gesundheit. Grawe (2004), Neuropsychotherapie, zum Konsistenzmodell und zur empirisch-integrativen Neufassung der humanistischen Grundannahmen.',
		status: 'untestable',
		explanation:
			'Der Rahmen ist ein etabliertes theoretisches Modell der humanistischen und neuropsychotherapeutischen Tradition. Grawes Konsistenzmodell hat Metaanalysen zur Wirksamkeit verschiedener Psychotherapieformen integriert, aber die Grundprämisse (Kongruenz-Inkongruenz) selbst ist ein theoretisches Rahmenkonzept, nicht eine falsifizierbare Hypothese.',
		dependsOn: [],
		collapseRisk:
			'Wäre psychische Gesundheit unabhängig vom Zugang zur eigenen Innenwelt herstellbar (reine Verhaltensänderung oder rein pharmakologische Ansätze genügten), würde Süfkes gesamtes Projekt seine theoretische Basis verlieren. Die Metaanalysen der Psychotherapieforschung stützen aber die Relevanz der Kongruenzdimension.',
		bookLocations: [
			{
				pages: 'Kap. 1, S. 17-24',
				chapter: 'Reisevorbereitungen',
				context: 'Einführung des Rogerschen organismischen Erfahrungsbegriffs und Verweis auf Grawes Konsistenzmodell.'
			},
			{
				pages: 'Kap. 2, S. 27-40',
				chapter: 'Geschichtliches: Der Weg zu sich selbst',
				context: 'Theoretische Grundlegung des 4-Etappen-Modells auf Rogers/Grawe.'
			}
		],
		evidenceRefs: [
			{ label: 'Rogers, Carl R. — Client-centered Therapy / Entwicklung der Persönlichkeit', authorSearch: 'Rogers' },
			{ label: 'Grawe, Klaus — Neuropsychotherapie', authorSearch: 'Grawe' }
		]
	},

	// ======== Row 0: Der Weg zu sich selbst ========
	{
		id: 'four-stage-weg',
		step: 2,
		shortLabel: '4-Etappen-Weg: Wahrnehmen → Akzeptieren → Mitteilen → Umsetzen',
		type: 'theory',
		claim:
			'Gesunde Identitätsentwicklung verläuft in vier Etappen: (1) Wahrnehmung der eigenen Impulse, (2) Akzeptanz der Impulse ohne Bewertung, (3) Mitteilung der Impulse an andere, (4) Umsetzung in Handlung — „vom Sollen zum Wollen”. Männliche Sozialisation bricht diesen Weg systematisch schon auf Etappe 1 ab: Jungen lernen nicht, ihre Gefühle wahrzunehmen.',
		evidence:
			'Süfkes eigene theoretische Synthese aus Rogers, Grawe und zwei Jahrzehnten klinischer Männertherapie-Praxis. Teils in Neumann/Süfke (2004), "Den Mann zur Sprache bringen", vorbereitet. Die Entwicklungslogik ist an psychodynamische und humanistische Entwicklungsmodelle angelehnt, aber explizit auf die männliche Sozialisation zugeschnitten.',
		status: 'untestable',
		explanation:
			'Ein therapeutisches Heuristikmodell, kein quantitativ überprüfbares Entwicklungsstadienmodell. Seine Produktivität liegt in der Orientierung für die männertherapeutische Praxis: Jede Etappe definiert eine konkrete Intervention. Die einzelnen Etappen (Wahrnehmen etc.) sind einzeln empirisch erforschbar (z.B. Alexithymie-Forschung), aber das 4-Stufen-Modell als Sequenz ist ein didaktisches Konstrukt.',
		dependsOn: ['rogers-grawe'],
		collapseRisk:
			'Wenn männliche Identitätsentwicklung grundsätzlich nicht auf Bewusstheit über innere Impulse angewiesen wäre (etwa wenn männliche Rollenkonformität genügte), würde das Modell leer laufen. Die klinische Praxis des Scheiterns konformer Männer in Beziehungen und Gesundheit widerlegt diese Alternative empirisch.',
		bookLocations: [
			{
				pages: 'Kap. 2, S. 27-52',
				chapter: 'Geschichtliches: Der Weg zu sich selbst',
				context: 'Das zentrale Konzeptkapitel. Entfaltet die 4 Etappen als „Wanderkarte” zur männlichen Identitätsentwicklung.'
			},
			{
				pages: 'Kap. 6, S. 103-122',
				chapter: 'Einheimischen-Kontakt',
				context: 'Therapeutische Operationalisierung der 4 Etappen als Lösungssequenz in der Männertherapie.'
			}
		],
		evidenceRefs: [
			{ label: 'Rogers, Carl R. — Client-centered Therapy', authorSearch: 'Rogers' },
			{ label: 'Grawe, Klaus — Neuropsychotherapie', authorSearch: 'Grawe' },
			{ label: 'Neumann & Süfke — Den Mann zur Sprache bringen', authorSearch: 'Neumann' }
		]
	},

	// ======== Row 1: Sozialisationsmechanismen ========
	{
		id: 'mangelnde-spiegelung',
		step: 3,
		shortLabel: 'Mangelnde Gefühls-Spiegelung bei Jungen (Gendering)',
		type: 'causal',
		claim:
			'Eltern und die Umgebung benennen Jungen deutlich weniger Gefühle als Mädchen, und sie deuten gleiche Emotionsausdrücke bei Jungen anders als bei Mädchen. Klassische "Baby-X"-Experimente zeigen: Ein als „Junge” bezeichnetes Baby wird als ärgerlich, ein als „Mädchen” bezeichnetes Baby wird als traurig oder ängstlich wahrgenommen — bei identischem Verhalten. Dadurch lernen Jungen den sprachlichen und kognitiven Zugang zu ihren Gefühlen nicht.',
		evidence:
			'Gendering-Forschung in der Entwicklungspsychologie seit den 1970er Jahren. Süfke verweist auf entwicklungspsychologische Befunde zur elterlichen Gefühlsbenennung und auf Chodorow (1985). Die "Baby-X"-Paradigmenstudien sind klassischer Bestandteil der Sozialpsychologie der Geschlechterforschung.',
		status: 'green',
		explanation:
			'Die Gendering-Befunde zur differenziellen elterlichen Emotionsbenennung und zur geschlechtsstereotypen Wahrnehmung von Säuglingsverhalten sind in der entwicklungspsychologischen Literatur gut dokumentiert und mehrfach repliziert. Die Interpretation als „mangelnde Spiegelung mit Folgewirkungen auf Alexithymie” ist ein interpretativer Schritt — aber die zugrundeliegende differenzielle Behandlung ist empirisch robust.',
		dependsOn: [],
		collapseRisk:
			'Wenn sich zeigen sollte, dass Eltern Jungen und Mädchen inzwischen emotional gleich behandeln und gleich spiegeln (radikale Nivellierungsthese in der Praxis), würde die Kausalkette zur Alexithymie unterbrochen. Aktuelle Studien zeigen aber weiterhin systematische Unterschiede.',
		bookLocations: [
			{
				pages: 'Kap. 3, S. 53-64',
				chapter: 'Gespaltenes Land',
				context: 'Entfaltet den Mechanismus der mangelnden Spiegelung und die Baby-X-Befunde.'
			}
		],
		evidenceRefs: [
			{ label: 'Chodorow, Nancy — Das Erbe der Mütter', authorSearch: 'Chodorow' },
			{ label: 'Baron-Cohen, Simon — Vom ersten Tag an anders', authorSearch: 'Baron-Cohen' }
		]
	},

	{
		id: 'umweg-identifikation',
		step: 4,
		shortLabel: 'Umweg-Identifikation: Nicht-Nicht-Mann',
		type: 'theory',
		claim:
			'Jungen entwickeln ihre Männlichkeitsidentität nicht durch positive Identifikation mit einem präsenten Vater, sondern negativ — durch Abgrenzung von Mutter und allem als „weiblich” Markierten. Süfkes Formulierung: „Nicht-Nicht-Mann”. Identität entsteht als doppelte Negation statt als positiver Selbstentwurf. Das Ich wird durch das, was es NICHT ist, definiert, nicht durch das, was es ist.',
		evidence:
			'Chodorow (1985), "Das Erbe der Mütter". Psychoanalytisch-feministische Theorie der Geschlechtsidentitätsentwicklung, die die asymmetrische Ablösungssituation von Jungen vs. Mädchen aufgrund der mütterlichen Hauptbezugsperson analysiert. Süfke kombiniert das mit klinischen Fallvignetten aus der eigenen Praxis.',
		status: 'yellow',
		explanation:
			'Chodorows Rahmen ist ein wichtiger theoretischer Bezugspunkt, aber die empirische Überprüfung der spezifischen Kausalkette (abwesender Vater → negative Identifikation → Alexithymie) ist schwierig. Das Konzept ist klinisch plausibel und hat das Feld nachhaltig geprägt, bleibt aber im Kern ein psychoanalytisches Rahmenmodell. Süfkes sprachliche Verdichtung zum "Nicht-Nicht-Mann" ist seine Originalleistung.',
		dependsOn: [],
		collapseRisk:
			'Wenn Jungen in Familien mit präsenten Vätern grundsätzlich anders aufwachsen und dennoch die gleichen männlichen Abwehrmuster entwickeln, wäre der Umweg-Mechanismus nicht die entscheidende Kausalkette. Empirisch ist die Frage offen — Vaterpräsenz korreliert mit manchen Entwicklungsvorteilen, aber nicht eindeutig mit geringerer Alexithymie.',
		bookLocations: [
			{
				pages: 'Kap. 3, S. 53-70',
				chapter: 'Gespaltenes Land',
				context: 'Einführung der Umweg-Identifikation nach Chodorow und Süfkes Prägung „Nicht-Nicht-Mann”.'
			}
		],
		evidenceRefs: [
			{ label: 'Chodorow, Nancy — Das Erbe der Mütter', authorSearch: 'Chodorow' }
		]
	},

	// ======== Row 2: Gespaltenes Land ========
	{
		id: 'alexithymie',
		step: 5,
		shortLabel: 'Alexithymie: systematische Gefühlsblindheit',
		type: 'consequence',
		claim:
			'Das Resultat mangelnder Spiegelung und der Umweg-Identifikation ist eine weitgehende Gefühlsblindheit (Alexithymie): Männer nehmen die eigenen Gefühle schlecht wahr, können sie noch schlechter benennen und kaum kommunizieren. Die erste Etappe des „Wegs zu sich selbst” (Wahrnehmung) wird bei Jungen systematisch nicht eingeübt.',
		evidence:
			'Klinische Praxis der Männerberatung in Bielefeld; konvergent mit der internationalen Alexithymie-Forschung (Sifneos, Taylor). Süfke stützt sich auf die eigene Beratungserfahrung sowie die deutsche Männerberatungsliteratur (Neumann/Süfke 2004). Verweis auf Real (1999) "I Don\'t Want to Talk About It".',
		status: 'yellow',
		explanation:
			'Die Alexithymie-Forschung zeigt konsistent höhere Alexithymie-Werte bei Männern (Meta-Analysen von Levant u.a. zur "Normative Male Alexithymia"). Das klinische Phänomen ist gut dokumentiert. Süfkes kausale Rückführung speziell auf die beiden genannten Sozialisationsmechanismen ist interpretativ — die Korrelation „Mann → höhere Alexithymie” ist empirisch stabil, die spezifische Ätiologie bleibt Interpretationssache.',
		dependsOn: ['mangelnde-spiegelung', 'umweg-identifikation', 'four-stage-weg'],
		collapseRisk:
			'Wenn Männer und Frauen empirisch gleich alexithym wären, wäre die zentrale Phänomenbehauptung hin. Die Evidenz zeigt aber einen konsistenten, wenn auch moderaten Geschlechtseffekt.',
		bookLocations: [
			{
				pages: 'Kap. 3, S. 53-76',
				chapter: 'Gespaltenes Land',
				context: 'Das zentrale Kapitel zur Alexithymie-Diagnose männlicher Sozialisation.'
			}
		],
		evidenceRefs: [
			{ label: 'Real, Terrence — Mir geht\'s doch gut', authorSearch: 'Real' },
			{ label: 'Neumann & Süfke — Den Mann zur Sprache bringen', authorSearch: 'Neumann' }
		]
	},

	{
		id: 'identitaetsluege',
		step: 6,
		shortLabel: 'Identitätslüge: Fassade ≠ Innenwelt',
		type: 'consequence',
		claim:
			'Aus Alexithymie und negativ bestimmter Identität resultiert die „Identitätslüge”: Die offizielle männliche Fassade (selbstbewusst, kontrolliert, handlungsfähig, unabhängig) stimmt nicht mit der faktischen Innenwelt überein, die meist deutlich mehr Hilflosigkeit, Angst, Scham und Sehnsucht enthält, als zugegeben werden darf. Mann zu sein heißt im Normalfall, die eigene innere Wahrheit zu verleugnen.',
		evidence:
			'Klinische Praxis der Männerberatung Bielefeld; analoge Konzepte in Real (1999, "verdeckte Depression"), Pollack ("Boy Code"/Maske des Jungen), hooks ("Will to Change"). Süfke stellt das in direkte Beziehung zu Connells Konzept der hegemonialen Männlichkeit als "subject position" vs. Lebenspraxis.',
		status: 'yellow',
		explanation:
			'Klinisch-phänomenologisch sehr plausibel und konvergent mit zahlreichen anderen Beobachtern (Real, Pollack, hooks, Brooks). Eine direkte empirische Messung der „Identitätslüge” ist methodisch schwierig — sie ist eher eine klinische Beschreibung als eine hypothesenprüfende Kategorie. Die konvergente Beobachtung über mehrere Autoren hinweg erhöht die Glaubwürdigkeit.',
		dependsOn: ['alexithymie', 'umweg-identifikation'],
		collapseRisk:
			'Wenn Männer ihre Fassade authentisch leben würden (d.h. die offizielle Männlichkeitsdarstellung wäre mit dem Innenleben kongruent), wäre der Identitätslügen-Befund falsch. Die hohen Raten an verdeckter Depression, Suizidalität, Sucht und Beziehungsproblemen bei normativ-männlichen Männern widerlegen diese Möglichkeit.',
		bookLocations: [
			{
				pages: 'Kap. 3, S. 65-80',
				chapter: 'Gespaltenes Land',
				context: 'Zentrale Prägung des Begriffs „Identitätslüge”.'
			}
		],
		evidenceRefs: [
			{ label: 'Real, Terrence — Mir geht\'s doch gut', authorSearch: 'Real' },
			{ label: 'Connell, R. W. — Der gemachte Mann', authorSearch: 'Connell' }
		]
	},

	// ======== Row 3: Abwehrmechanismen / Sitten ========
	{
		id: 'externalisierung',
		step: 7,
		shortLabel: 'Externalisierung: Abspaltung nach außen',
		type: 'theory',
		claim:
			'Die erste und wichtigste Bewältigungsstrategie der Alexithymie ist die Externalisierung: Innere Zustände werden systematisch nach außen verlagert — in Arbeit, Leistung, Sport, Alkohol, Gewalt, Sex. Das Selbsterleben wird im Außen gesucht, nicht im Innen. Süfke übernimmt den Begriff explizit von Lothar Böhnisch und operationalisiert ihn klinisch.',
		evidence:
			'Böhnisch (2003, "Die Entgrenzung der Männlichkeit" / 2006 / 2013) als theoretische Hauptquelle. Klinische Fallvignetten aus Süfkes Praxis. Die Übernahme ist explizit und direkt.',
		status: 'yellow',
		explanation:
			'Klinisch breit plausibel und theoretisch gut fundiert. Die Externalisierung ist diagnostisch als Rahmen in der Männerberatung etabliert. Empirische Quantifizierung als solcher Mechanismus ist schwierig — er wird eher als diagnostisches Ordnungsschema genutzt. Die Konvergenz mit Böhnischs soziologischer Beobachtung stützt die Plausibilität.',
		dependsOn: ['alexithymie'],
		collapseRisk:
			'Wenn Männer in Krisen tatsächlich auch nach innen schauten statt ins Außen auszuweichen, wäre der Mechanismus nicht spezifisch. Die klinische Praxis zeigt aber konsistent das Gegenteil.',
		bookLocations: [
			{
				pages: 'Kap. 4, S. 81-102',
				chapter: 'Sitten und Gebräuche: Abwehrmechanismen',
				context: 'Vertiefte klinische Ausarbeitung der Externalisierung als Bewältigungsmuster.'
			}
		],
		evidenceRefs: [
			{ label: 'Böhnisch, Lothar — Männliche Sozialisation', authorSearch: 'Böhnisch' }
		]
	},

	{
		id: 'konzeptverwirrung',
		step: 8,
		shortLabel: 'Konzeptverwirrung: Gefühl ↔ Gedanke ↔ Handlung',
		type: 'causal',
		claim:
			'Mangels affektiven Wortschatzes verwechseln Männer systematisch Gefühle mit Gedanken, Handlungen oder Urteilen. Auf die Frage „Wie geht es Ihnen?” antworten sie mit Analysen oder Tätigkeitsberichten. Auf „Was fühlen Sie gerade?” antworten sie mit „Ich finde, dass...” Diese Konzeptverwirrung ist nicht bösartig, sondern Ausdruck eines fehlenden Zugangs zum eigenen emotionalen Erleben.',
		evidence:
			'Süfkes klinische Kernbeobachtung aus über einem Jahrzehnt Männerberatung. Ausführlich dokumentiert in Kap. 4 mit Fallvignetten. Empirisch anschlussfähig an die Alexithymie-Forschung, konkretisiert aber eine spezifische kognitiv-sprachliche Ebene, die in der quantitativen Alexithymie-Literatur weniger beachtet wird.',
		status: 'yellow',
		explanation:
			'Klinisch hoch plausibel und mit der Alexithymie-Forschung konvergent (dort als "difficulty describing feelings" operationalisiert). Süfkes Kategorienverwirrung ist eine feine Beobachtung der sprachlichen Ebene. Direkt empirisch überprüfbar wäre sie über linguistische Analysen von Therapieprotokollen — solche Analysen gibt es bisher nicht systematisch.',
		dependsOn: ['alexithymie'],
		collapseRisk:
			'Wenn Männer empirisch saubere Trennungen zwischen Gefühl, Gedanke und Handlung in ihrer Sprache vornehmen könnten, wäre die Beobachtung irrelevant. Jeder Männertherapeut hat aber diese Beobachtung schon mehrfach gemacht.',
		bookLocations: [
			{
				pages: 'Kap. 4, S. 81-102',
				chapter: 'Sitten und Gebräuche',
				context: 'Fallvignetten illustrieren die systematische Verwechslung von Gefühlskategorien.'
			}
		],
		evidenceRefs: [
			{ label: 'Süfke, Björn — Eigene klinische Praxis', authorSearch: 'Süfke' }
		]
	},

	// ======== Row 4: Klinische Phänomene ========
	{
		id: 'hilflosigkeit-kern',
		step: 9,
		shortLabel: 'Hilflosigkeit als verdecktes Kerngefühl',
		type: 'causal',
		claim:
			'Unter praktisch jedem männlichen Symptom (Wut, Rückzug, Sucht, Workaholismus, Gewalt, Impotenz) liegt Hilflosigkeit. Hilflosigkeit ist für die männliche Identität das unzulässige Gefühl schlechthin; also muss sie abgewehrt, umgewandelt oder projiziert werden. Die männertherapeutische Grundaufgabe besteht darin, dem Mann zu ermöglichen, die eigene Hilflosigkeit wahrzunehmen und auszuhalten.',
		evidence:
			'Süfkes klinische Beobachtung; konvergent mit Pollack (Real Boys), Real (Verdeckte Depression), Kindlon/Thompson (Raising Cain), Böhnisch (Bedürftigkeit). Als diagnostische Kategorie in der Männerberatungspraxis etabliert.',
		status: 'yellow',
		explanation:
			'Sehr breit konvergente klinische Beobachtung über mehrere Traditionen hinweg (humanistisch, psychoanalytisch, entwicklungspsychologisch, soziologisch). Die Hypothese „fast alle männlichen Symptome decken Hilflosigkeit” ist stark, aber empirisch schwer zu überprüfen — man müsste Symptome gegen das abgewehrte Gefühl kausal trennen können. Funktioniert primär als klinisch-diagnostisches Heuristikwerkzeug.',
		dependsOn: ['alexithymie', 'identitaetsluege'],
		collapseRisk:
			'Wenn männliche Symptome unabhängig voneinander und nicht durch ein Kerngefühl verbunden wären, wäre die Hypothese strukturell falsch. Die Konvergenz mehrerer klinischer Traditionen auf diesen Punkt ist aber stark.',
		bookLocations: [
			{
				pages: 'Kap. 7, S. 123-170',
				chapter: 'Sehenswürdigkeiten und Geheimtipps: Die einzelnen Gefühle',
				context: 'Hilflosigkeit als das erste und zentrale Gefühlskapitel im phänomenologischen Katalog.'
			}
		],
		evidenceRefs: [
			{ label: 'Real, Terrence — Mir geht\'s doch gut', authorSearch: 'Real' },
			{ label: 'Böhnisch, Lothar — Männliche Sozialisation', authorSearch: 'Böhnisch' }
		]
	},

	{
		id: 'maennliche-depression',
		step: 10,
		shortLabel: 'Verdeckte männliche Depression (nach Terrence Real)',
		type: 'consequence',
		claim:
			'Männliche Depression erscheint klinisch oft nicht als klassische Traurigkeit/Antriebslosigkeit, sondern als Gereiztheit, Workaholismus, Alkoholismus, Wut, Rückzug oder körperliche Symptomatik. Sie wird deshalb systematisch unterdiagnostiziert. Süfke übernimmt Terrence Reals Konzept der "covert depression" direkt.',
		evidence:
			'Terrence Real (1999), "I Don\'t Want to Talk About It" / deutsch: "Mir geht\'s doch gut". Epidemiologisch gestützt durch die signifikant höhere männliche Suizidrate (3-4x weiblich) bei gleichzeitig geringeren offiziellen Depressionsdiagnose-Raten — eine Diskrepanz, die nur durch unterdiagnostizierte männliche Depression erklärbar ist.',
		status: 'green',
		explanation:
			'Die Diskrepanz zwischen Suizidraten und Depressionsdiagnose-Raten bei Männern ist epidemiologisch eindeutig und international konsistent (WHO, Statistische Landesämter). Das Konzept der "covert/externalized depression" ist in der klinischen Literatur etabliert und wurde in nachfolgenden Arbeiten (Cochran & Rabinowitz, Magovcevic & Addis "Masculine Depression Scale") empirisch weiterentwickelt.',
		dependsOn: ['hilflosigkeit-kern', 'externalisierung'],
		collapseRisk:
			'Wenn die hohe männliche Suizidrate allein durch andere Faktoren (Zugang zu Waffen, impulsivere Methoden) erklärbar wäre, ohne eine zugrundeliegende unterdiagnostizierte Depression, würde der Mechanismus wackeln. Die klinische Forschung spricht aber deutlich für die Real-These.',
		bookLocations: [
			{
				pages: 'Kap. 7, S. 123-150',
				chapter: 'Sehenswürdigkeiten und Geheimtipps',
				context: 'Expliziter Verweis auf Real und Integration in den klinischen Katalog.'
			}
		],
		evidenceRefs: [
			{ label: 'Real, Terrence — Mir geht\'s doch gut', authorSearch: 'Real' }
		]
	},

	{
		id: 'impotenz-metapher',
		step: 11,
		shortLabel: 'Impotenz als Metapher der Männlichkeitskrise',
		type: 'observation',
		claim:
			'Psychogene Impotenz ist die perfekte Metapher der männlichen Identitätskrise: Unfähigkeit zur Performanz, nicht externalisierbar (anders als berufliche Krisen, wo man „Schuldige im Außen” finden kann), zwingt zur Selbstreflexion. Gleichzeitig birgt sie eine therapeutische Chance, weil der Mann sich nicht mehr herausreden kann.',
		evidence:
			'Klinische Männerberatungspraxis (Süfke, Neumann/Süfke 2004). Konvergent mit Zilbergeld (2000) "Die neue Sexualität der Männer" und Schnack/Neutzling (1995) "Die Prinzenrolle". Fallvignetten in Kap. 7.',
		status: 'yellow',
		explanation:
			'Die phänomenologische Beschreibung ist klinisch gut etabliert. Die epidemiologische Seite (Impotenz als Stressindikator, Zusammenhang mit Depression und kardiovaskulären Risiken) ist medizinisch robust. Süfkes spezifische Lesart als „perfekte Metapher” ist interpretativ, aber treffsicher — sie erklärt, warum Impotenz therapeutisch oft der Türöffner zu tieferer Arbeit ist.',
		dependsOn: ['hilflosigkeit-kern', 'identitaetsluege'],
		collapseRisk:
			'Wenn psychogene Impotenz empirisch NICHT stärker mit Depression, Stress und Identitätskrisen korrelierte als andere Körpersymptome, wäre Süfkes Lesart überzogen. Die medizinisch-psychologische Literatur stützt aber die Korrelation.',
		bookLocations: [
			{
				pages: 'Kap. 7, S. 155-170',
				chapter: 'Liebe und Lust',
				context: 'Zentrale Passage zur Impotenz-Metapher, mit Fallvignette Herr Calinski.'
			}
		],
		evidenceRefs: [
			{ label: 'Zilbergeld, Bernie — Die neue Sexualität der Männer', authorSearch: 'Zilbergeld' },
			{ label: 'Schnack & Neutzling — Die Prinzenrolle', authorSearch: 'Schnack' }
		]
	},

	// ======== Row 5: Ressourcen ========
	{
		id: 'maennliche-staerken',
		step: 12,
		shortLabel: 'Männliche Stärken: Humor, Distanz, Rationalität, Selbstbehauptung',
		type: 'observation',
		claim:
			'Männliche Sozialisation produziert nicht nur Defizite, sondern auch echte Ressourcen, die therapeutisch nutzbar sind: Humor (besonders Selbstironie als Schambewältigung), Distanzierungsfähigkeit (in akuten Krisen schützend), strukturiertes Rationalitätsdenken und Selbstbehauptungsfähigkeit. Ein defizitorientierter Blick auf Männer wäre therapeutisch kontraproduktiv.',
		evidence:
			'Süfkes klinische Praxis und Grawes Konsistenz-/Ressourcenmodell. Anti-Pathologisierung als bewusste methodische Entscheidung. Humor als spezifische Scham-Bewältigungsstrategie ist in der Scham-Forschung dokumentiert (Scheff, Tangney).',
		status: 'untestable',
		explanation:
			'Die Ressourcenorientierung ist eine methodische und ethische Entscheidung, die sich in ihrer therapeutischen Fruchtbarkeit bewährt, aber nicht als empirische Hypothese „Männer haben diese Stärken (statistisch) mehr als Frauen” formuliert ist. Das wäre auch gar nicht Süfkes Punkt — er rekonstruiert die Ressourcen der defizitären männlichen Sozialisation.',
		dependsOn: [],
		collapseRisk:
			'Wenn sich zeigen sollte, dass ressourcenorientierte Männertherapie weniger wirksam ist als rein defizitorientierte Arbeit, würde die praktische Rechtfertigung des Kapitels wackeln. Die Psychotherapieforschung (Grawe) spricht aber klar für die Ressourcenorientierung.',
		bookLocations: [
			{
				pages: 'Kap. 5, S. 81-102',
				chapter: 'Touristische Highlights: Männliche Stärken',
				context: 'Ressourcenkatalog mit vier Hauptstärken.'
			}
		],
		evidenceRefs: [
			{ label: 'Grawe, Klaus — Neuropsychotherapie', authorSearch: 'Grawe' }
		]
	},

	// ======== Row 6: Lösung ========
	{
		id: 'liebevolle-konfrontation',
		step: 13,
		shortLabel: 'Liebevolle Konfrontation als therapeutische Kernmethode',
		type: 'solution',
		claim:
			'Die therapeutische Grundmethode der Männerberatung ist die „liebevolle Konfrontation”: klare, nicht-ausweichende Benennung der Abwehrmechanismen (Externalisierung, Konzeptverwirrung, Minimierung, Projektion) bei gleichzeitiger grundsätzlicher Wertschätzung des Mannes. Weder kuscheligem Hineinversinken (der Mann würde sich nicht ernst genommen fühlen) noch konfrontativer Beschämung (der Mann würde abwehren) — sondern humorvolle, präsente, ehrliche Begegnung.',
		evidence:
			'Süfkes und Neumanns klinische Praxis (Neumann/Süfke 2004). Süfke liefert in Kap. 6 explizite Interaktionsbeispiele ("Sind wir hier bei der Elefantenrunde nach der Bundestagswahl?"). Theoretisch anschlussfähig an DBT (Linehan) und konfrontative Varianten der Humanistischen Psychologie.',
		status: 'untestable',
		explanation:
			'Eine therapeutische Methodenempfehlung, kein falsifizierbares Modell. Ihre Wirksamkeit ließe sich empirisch an Outcome-Studien der Männerberatung messen — solche Studien existieren für die deutsche Männerberatung nur in Ansätzen (Neumann/Süfke 2006 dokumentiert klinische Erfahrungen, nicht RCTs).',
		dependsOn: ['konzeptverwirrung', 'externalisierung', 'maennliche-staerken'],
		collapseRisk:
			'Wenn rein beschämende oder rein kuschelige Therapieansätze in RCTs sich als wirksamer erwiesen, würde die Methodenempfehlung bröckeln. Die Psychotherapieforschung spricht aber für integrative Ansätze, die Nähe und Konfrontation verbinden — Süfkes Methode ist konsistent mit diesem Befund.',
		bookLocations: [
			{
				pages: 'Kap. 6, S. 103-122',
				chapter: 'Einheimischen-Kontakt',
				context: 'Das methodische Kernkapitel. Entfaltet die 4 Lösungsetappen und die Grundhaltung der liebevollen Konfrontation.'
			}
		],
		evidenceRefs: [
			{ label: 'Neumann & Süfke — Den Mann zur Sprache bringen', authorSearch: 'Neumann' },
			{ label: 'Linehan, Marsha — Dialektisch-Behaviorale Therapie', authorSearch: 'Linehan' }
		]
	},

	{
		id: 'sehnsucht-selbst',
		step: 14,
		shortLabel: 'Sehnsucht nach sich selbst / Vom Sollen zum Wollen',
		type: 'solution',
		claim:
			'Das normative und therapeutische Ziel ist die Sehnsucht nach sich selbst: Der Mann lernt, den Weg vom Äußeren zum Inneren zu gehen, die eigenen Bedürfnisse wahrzunehmen, zu akzeptieren, zu benennen und zu leben. "Vom Sollen zum Wollen" — Handeln aus dem eigenen Bedürfnis, nicht aus der Rollenpflicht. Nicht Weiblichkeit oder Männlichkeit, sondern Menschlichkeit ist der Horizont. Schlusssatz: "Dort unten, in uns drin, lauert nicht der Feind."',
		evidence:
			'Süfkes zusammenfassende therapeutische Zielformulierung, mit expliziter Aufnahme von Böhnischs Bild des Mannes, der sich vom „weiblichen Spiegel” abwendet und in sich hineinsieht (Böhnisch 2006). Verweis auf Rogers und das humanistische Menschenbild.',
		status: 'untestable',
		explanation:
			'Ein normatives und existentielles Zielbild, keine empirische Hypothese. Seine Rechtfertigung liegt in der therapeutischen Erfahrung und im humanistischen Menschenbild. Nicht falsifizierbar, aber durchaus prüfbar an der konkreten Frage: Werden Männer, die diesen Weg gehen, glücklicher, gesünder, beziehungsfähiger? Die klinische Erfahrung sagt: Ja.',
		dependsOn: ['liebevolle-konfrontation', 'four-stage-weg'],
		collapseRisk:
			'Wenn Männer, die den „Weg nach innen” gehen, empirisch NICHT gesünder/zufriedener/beziehungsfähiger würden, wäre die normative Empfehlung entkräftet. Die bisher verfügbaren Outcome-Daten aus Männerberatung und Psychotherapie widersprechen dieser Möglichkeit deutlich.',
		bookLocations: [
			{
				pages: 'Ausblick, S. 171-180',
				chapter: 'Ausblick',
				context: 'Zusammenfassende Vision und expliziter Rückbezug auf Böhnisch.'
			},
			{
				pages: 'Kap. 7, S. 135-145',
				chapter: 'Sehnsüchte',
				context: 'Die Sehnsucht nach sich selbst als das therapeutisch fruchtbarste Gefühl.'
			}
		],
		evidenceRefs: [
			{ label: 'Böhnisch, Lothar — Männliche Sozialisation', authorSearch: 'Böhnisch' },
			{ label: 'Rogers, Carl R. — Entwicklung der Persönlichkeit', authorSearch: 'Rogers' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'sehnsucht-selbst')!;
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
		'Süfkes Argumentationskette ist ein klinisch-phänomenologisches Gebäude, das sich von Rogers/Grawe über Chodorow und Böhnisch zu einer eigenständigen therapeutischen Methodenlehre entwickelt. Von 14 Gliedern sind 2 grün (mangelnde Gefühls-Spiegelung mit gut dokumentierter entwicklungspsychologischer Empirie; verdeckte männliche Depression mit epidemiologischer Stützung durch Suizidraten), 6 gelb (Umweg-Identifikation, Alexithymie, Identitätslüge, Externalisierung, Konzeptverwirrung, Hilflosigkeit als Kerngefühl, Impotenz-Metapher — alle klinisch hoch plausibel, aber primär durch klinische Erfahrung und konvergente Beobachtungen mehrerer Autor:innen gestützt), und 6 untestbar (die theoretischen Rahmen Rogers/Grawe, 4-Etappen-Weg, die Ressourcen-Orientierung, liebevolle Konfrontation als Methode, Sehnsucht-nach-sich-selbst als Ziel). Keine roten Glieder. ' +
		'Methodologisch ist Süfkes Buch explizit klinisch-therapeutisch, nicht empirisch-prüfend. Es beansprucht Phänomen-Erschließung und Handlungsorientierung für die männertherapeutische Praxis, nicht kontrollierte Studien. Seine Stärke liegt in der konvergenten Zusammenschau der internationalen Männer-Klinik-Literatur (Real, Pollack, Zilbergeld) mit der deutschen soziologischen Tradition (Böhnisch) und der humanistisch-neuropsychotherapeutischen Schule (Rogers, Grawe). ' +
		'Das Buch ist der klinische Spiegel zu Böhnisch\'s Männliche Sozialisation: Wo Böhnisch die strukturelle Mechanik erklärt (Dominanz-Verfügbarkeit, Externalisierung als sozialökonomisch eingebettet), zeigt Süfke die resultierende Innenwelt — oder eher die abwesende Innenwelt — im Therapiezimmer. Beide Bücher sind kompatibel und ergänzen sich: Makro-Theorie + Mikro-Phänomenologie. ' +
		'Im Vergleich zur Bibliothek teilt Süfke mit hooks („The Will to Change”) die Diagnose der emotionalen Taubheit und die Empfehlung einer liebevollen Grundhaltung, bleibt aber klinisch-individuell statt politisch-systemkritisch. Mit Pollack und Kindlon/Thompson teilt er den klinischen Blick, die Betonung der Alexithymie und das „Kerngefühl Hilflosigkeit”. Gegenüber Sax/Gurian/Baron-Cohen bleibt er distanziert: Er erkennt den Biologismus nicht als relevanten Bezugsrahmen an, polemisiert aber auch nicht. ' +
		'Die distinctive contribution ist methodisch: Süfke bietet eine konkrete, operationalisierbare Handlungsanleitung für die deutsche Männertherapie mit der Methode der „liebevollen Konfrontation” und dem 4-Etappen-Weg. Das macht ihn zum Praxis-Handbuch der deutschen Männerarbeit, analog zu Neumann/Süfke 2004. Wer empirische Gewissheit sucht, wird enttäuscht. Wer einen klinischen Zugang zum männlichen Innenleben sucht, findet ihn hier präzise ausgearbeitet.'
};
