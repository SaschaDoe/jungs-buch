// pentagon-data.ts
// The grand synthesis of the five deep-compared books (the "Fünfeck"):
// NBM (Galloway), OBM (Reeves), JVH (Dittmann), BA (Sax), RC (Kindlon/Thompson).
// Feeds /fuenfeck. All content distilled from the per-book audits,
// the convergence data and the 10 pairwise comparisons.

export interface PentagonBook {
	id: string;      // book id from cross-book-data
	lever: string;   // which lever of the debate this book owns
	stance: string;  // one-line position
	audit: string;   // one-line audit result
}

export const pentagonBooks: PentagonBook[] = [
	{
		id: 'nbm',
		lever: 'Selbstformung',
		stance: 'Der junge Mann formt sich selbst: Fitness, Geld, Rejection-Training, Code, Surplus Value.',
		audit: '12🟢 12🟡 2🔴 4🟣 — stark wo Reeves nacherzählt wird, Blog-Quellen + retracted Chart wo nicht.'
	},
	{
		id: 'obm',
		lever: 'Struktur',
		stance: 'Systeme umbauen: Redshirt the Boys, Men Can HEAL, Direct Dads — der Gesetzgeber ist der Hebel.',
		audit: '0🔴 — Meta-Analysen, Regierungsdaten, markierte Unsicherheit. Robusteste Quelle des Korpus.'
	},
	{
		id: 'ba',
		lever: 'Biologie',
		stance: 'Jungen sind biologisch anders; Schule, Bildschirme, Medikamente und Chemie schneiden sie von ihrer Natur ab.',
		audit: 'Diagnose 🟢, Kausalfaktoren 🟡–🔴 — zwei Faktoren (Stimulanzien, Endokrin) nie eingelöst.'
	},
	{
		id: 'rc',
		lever: 'Emotion',
		stance: 'Jungen wird das Gefühlsvokabular aberzogen; emotionale Alphabetisierung ist die Therapie.',
		audit: '8🟢 4🟡 0🔴 — die robusteste Klinik-Quelle; Schwäche: schmale Stichprobe, ungetestete Lösungen.'
	},
	{
		id: 'jvh',
		lever: 'Erziehung',
		stance: 'Eltern erziehen Söhne aus den Männlichkeitsnormen heraus — zu Caring Masculinity und Gleichberechtigung.',
		audit: 'Beobachtungen 🟢 (Destatis, DCU, BMFSFJ) — zwei tragende Prämissen-Schwächen (Gehirne gleich, Monokausalität).'
	}
];

export type EdgeRelation = 'allied' | 'mixed' | 'conflict';

export interface PentagonEdge {
	a: string;
	b: string;
	relation: EdgeRelation;
	label: string;
	comparisonId: string; // anchor on /vergleiche
}

export const relationInfo: Record<EdgeRelation, { label: string; color: string; description: string }> = {
	allied: { label: 'Verbündet', color: '#10b981', description: 'Kernthesen weitgehend deckungsgleich oder komplementär' },
	mixed: { label: 'Gemischt', color: '#f59e0b', description: 'Prämissen kollidieren, Diagnose und/oder Zielbild konvergieren' },
	conflict: { label: 'Konflikt', color: '#ef4444', description: 'Echte Widersprüche in Kausalmodell oder Praxis' }
};

export const pentagonEdges: PentagonEdge[] = [
	{ a: 'nbm', b: 'obm', relation: 'allied', label: 'Das Derivat: „my Yoda“ — gleiche Thesen, andere Ebene', comparisonId: 'nbm-vs-obm' },
	{ a: 'nbm', b: 'ba', relation: 'allied', label: 'Gleiche Kausalmechanik (Dopamin, Porn, T) — anderes Etikett', comparisonId: 'ba-vs-nbm' },
	{ a: 'nbm', b: 'rc', relation: 'allied', label: 'Die Fallstudie bestätigt das Lehrbuch — ohne es zu kennen', comparisonId: 'rc-vs-nbm' },
	{ a: 'nbm', b: 'jvh', relation: 'mixed', label: 'Gegensätzliche Prämissen, fast dasselbe Zielbild', comparisonId: 'nbm-vs-jvh' },
	{ a: 'obm', b: 'rc', relation: 'allied', label: 'Komplementär: die zwei Bücher ohne rote Glieder', comparisonId: 'rc-vs-obm' },
	{ a: 'obm', b: 'jvh', relation: 'mixed', label: 'Care-Konsens, Prämissen-Konflikt (Kalamazoo-Einwand)', comparisonId: 'obm-vs-jvh' },
	{ a: 'obm', b: 'ba', relation: 'conflict', label: 'Die offenen Rivalen — mit Redshirting-Konvergenz', comparisonId: 'ba-vs-obm' },
	{ a: 'ba', b: 'rc', relation: 'conflict', label: 'Duell der Klassiker: Härte als Nährstoff vs. Pathogen', comparisonId: 'rc-vs-ba' },
	{ a: 'ba', b: 'jvh', relation: 'conflict', label: 'Maximaldistanz: der einzige unvereinbare Praxis-Konflikt', comparisonId: 'ba-vs-jvh' },
	{ a: 'rc', b: 'jvh', relation: 'allied', label: 'Die Ahnenlinie: US-Klinik → deutsche Pädagogik', comparisonId: 'rc-vs-jvh' }
];

// ── Der zusammengeführte Kausalpfad ─────────────────────────────

export interface FlowNode {
	label: string;
	books: string[];        // book ids that carry this node
	note: string;
	kind: 'consensus' | 'contested' | 'conflict';
}

export interface FlowStage {
	title: string;
	subtitle: string;
	nodes: FlowNode[];
}

export const flow: FlowStage[] = [
	{
		title: '1 · Die Diagnose',
		subtitle: 'Hier sind alle fünf einig — über 26 Jahre und alle Lager hinweg. Die Krise ist real, datierbar und männlich.',
		nodes: [
			{ label: 'Bildungsgap: Jungen fallen in der Schule zurück', books: ['ba', 'rc', 'jvh', 'obm', 'nbm'], kind: 'consensus', note: 'NAEP (Sax 1999/2007), PISA/NCES (Reeves), deutsche Bildungsstatistik (Dittmann) — die am breitesten belegte Beobachtung des Korpus.' },
			{ label: 'Failure to Launch / NEET', books: ['ba', 'obm', 'nbm'], kind: 'consensus', note: 'Sax prognostiziert 2007, Reeves quantifiziert 2022, Galloway dokumentiert 2025 (NEET verdreifacht, 60% der 18-24er bei den Eltern).' },
			{ label: 'Emotionale Panzerung & verdeckte Depression', books: ['rc', 'jvh', 'nbm'], kind: 'consensus', note: 'Klinisch (RC), pädagogisch (JVH), autobiografisch (NBM: 16 tränenlose Jahre) — plus Suizid-Ratio 3-4× bei Reeves.' },
			{ label: 'Bindungs- & Freundschaftskrise', books: ['rc', 'jvh', 'obm', 'nbm'], kind: 'consensus', note: 'Way-Tradition (Adoleszenz) + Friendship Recession (Erwachsene, Cox/Holt-Lunstad via Galloway).' }
		]
	},
	{
		title: '2 · Der Ursachen-Streit',
		subtitle: 'Hier zerfällt das Fünfeck in drei Erklärungs-Cluster — der eigentliche Glaubenskrieg der Debatte.',
		nodes: [
			{ label: 'BIOLOGIE: T, PFC, Dimorphismus', books: ['ba', 'nbm'], kind: 'conflict', note: 'Sax hard-wired (bis zur Endokrin-These), Galloway „more nature than nurture“. Audit: Timing-Befunde halten, Typ- und Chemie-Thesen nicht.' },
			{ label: 'SOZIALISATION: Boy Code, Fehlerziehung', books: ['rc', 'jvh'], kind: 'conflict', note: 'RC klinisch-vorsichtig („biology is not destiny“), Dittmann zugespitzt („Gehirne sind gleich“). Audit: Mechanismus gut gestützt (Way, Levant), Monokausalität nicht.' },
			{ label: 'STRUKTUR: Schule, Arbeitsmarkt, Familienrecht', books: ['obm'], kind: 'contested', note: 'Reeves’ Mittelposition: Timing-Biologie TRIFFT auf unangepasste Institutionen. Der einzige Cluster, der die anderen beiden integrieren kann.' }
		]
	},
	{
		title: '3 · Die geteilten Mechanismen',
		subtitle: 'Eine Etage tiefer treffen sich die Pfade wieder: Diese Mechanismen tragen alle Erklärungs-Cluster mit.',
		nodes: [
			{ label: 'Schul-Mismatch', books: ['ba', 'rc', 'jvh', 'obm', 'nbm'], kind: 'consensus', note: 'Alle fünf: Das Schulsystem passt strukturell nicht zu Jungen — nur das WARUM (Entwicklung/Emotion/Didaktik) variiert. Shared Node im Graph.' },
			{ label: 'Bildschirme & Dopamin-Ökonomie', books: ['ba', 'nbm', 'jvh'], kind: 'consensus', note: 'Sax 2007 → Galloway 2025 fast wortgleich; Dittmann ergänzt die Tate-Pipeline. Deskriptiv solide, Kausalgewicht umstritten (Odgers/Przybylski).' },
			{ label: 'Vater-Defizit & fehlende Mentoren', books: ['ba', 'rc', 'jvh', 'obm', 'nbm'], kind: 'consensus', note: 'Die stärkste Doppel-Validierung: Längsschnitte (RC) + Strukturdaten (Reeves) + Memoir (Galloway) + Riten (Sax) + Erzieher-Forderung (Dittmann).' },
			{ label: 'Porn ersetzt Mating-Antrieb', books: ['ba', 'nbm', 'jvh'], kind: 'contested', note: 'Sax→Galloway-Kausalthese (Shared Node), Dittmann mit der Kompetenz-Wendung. Plausibler Mechanismus, Längsschnitt-Evidenz fehlt.' },
			{ label: 'Härte & Wettbewerb unter Jungen', books: ['ba', 'nbm', 'rc', 'jvh'], kind: 'conflict', note: 'DER ungelöste Widerspruch: Nährstoff und Initiations-Bedürfnis (Sax, Galloway) vs. Pathogen und Culture of Cruelty (RC, Dittmann). Beide Seiten verallgemeinern ihre Hälfte der Evidenz.' }
		]
	},
	{
		title: '4 · Die Folgen',
		subtitle: 'Über die Endpunkte herrscht wieder Konsens — sie sind statistisch am besten belegt.',
		nodes: [
			{ label: 'Deaths of Despair, Suizid 3-4×', books: ['obm', 'nbm'], kind: 'consensus', note: 'Case & Deaton / CDC via Reeves und AIBM; von Galloway übernommen. Epidemiologisch unstrittig.' },
			{ label: 'Radikalisierung / Manosphere', books: ['jvh', 'obm', 'nbm'], kind: 'consensus', note: 'Dittmann (Tate/DCU), Reeves (politisches Vakuum), Galloway („nothing more dangerous than a lonely, broke young man“ + 2024-Wahl).' },
			{ label: 'Ökonomischer Abstieg & Ehe-Gradient', books: ['ba', 'obm', 'nbm'], kind: 'consensus', note: 'Arbeitsmarkt-Abstieg (Autor/Wasserman), Heirats-Klassen-Schere (Hamilton Project) — bei RC und JVH kaum Thema (blinder Fleck der Kultur-Cluster).' }
		]
	},
	{
		title: '5 · Die fünf Hebel',
		subtitle: 'Jedes Buch besitzt einen Hebel — sie schließen einander nicht aus, aber nur zwei Forderungen tragen alle mit.',
		nodes: [
			{ label: 'OBM: Redshirt · HEAL · Direct Dads', books: ['obm'], kind: 'contested', note: 'Policy-Ebene; unimplementiert, aber am besten begründet. Redshirting zusätzlich von Sax gestützt — das stärkste Konvergenz-Signal des Korpus.' },
			{ label: 'RC: Emotionale Alphabetisierung', books: ['rc'], kind: 'contested', note: 'Klinisch plausibel, als Intervention ungetestet; Reeves’ Individualismus-Einwand (Kalamazoo) trifft hier.' },
			{ label: 'JVH: Gleichstellungs-Erziehung, Konsens, Care', books: ['jvh'], kind: 'contested', note: 'Konkretester Eltern-Alltagsstoff; die Erziehungs-Wette wird von Kalamazoo (Reeves) und Behavior Genetics (Prüfer) begrenzt.' },
			{ label: 'BA: Später einschulen, Riten, Single-Sex', books: ['ba'], kind: 'contested', note: 'Später einschulen = Konvergenz mit Reeves; Single-Sex meta-analytisch ~null (Pahlke); Riten untestbar.' },
			{ label: 'NBM: Scott-Methode, Mentoring, Code', books: ['nbm'], kind: 'contested', note: 'Selbstformung; unevaluiert, aber Bausteine mit Evidenz (Exercise/Noetel, Mentoring/Abrams) — und die einzige Ebene, die der Betroffene selbst steuern kann.' },
			{ label: 'KONSENS-FORDERUNGEN: mehr Männer in Schule & Care · Mentoren für Jungen', books: ['ba', 'rc', 'jvh', 'obm', 'nbm'], kind: 'consensus', note: 'Die einzigen zwei Maßnahmen, die alle fünf Bücher aus fünf verschiedenen Begründungen fordern — der belastbarste Praxis-Kern der gesamten Literatur.' }
		]
	},
	{
		title: '6 · Das Zielbild',
		subtitle: 'Am Ende laufen alle fünf Pfade wieder zusammen — mit fünf verschiedenen Etiketten für denselben Mann.',
		nodes: [
			{ label: 'Prosoziale Männlichkeit: geben statt nehmen, schützen statt dominieren, fühlen statt panzern', books: ['ba', 'rc', 'jvh', 'obm', 'nbm'], kind: 'consensus', note: '„Prosocial masculinity“ (Reeves), „Aspirational Masculinity/Surplus Value“ (Galloway), „Caring Masculinity“ (Dittmann), „emotional literacy“ (RC), „Verantwortungs-Initiation“ (Sax). Dass fünf verfeindete Lager hier konvergieren, ist der wichtigste Einzelbefund des Fünfecks — das Zielbild folgt nicht aus den Prämissen, sondern aus der geteilten Beobachtung, was Jungen fehlt.' }
		]
	}
];

// ── Konsens- und Konflikt-Zonen ────────────────────────────────

export const consensusZone: string[] = [
	'Die Krise ist real und männlich — kein Panik-Artefakt (alle 5, von 1999 bis 2025 unabhängig belegt).',
	'Das Schulsystem passt strukturell nicht zu Jungen (alle 5 — nur die Begründung variiert).',
	'Väter und männliche Mentoren sind entwicklungsentscheidend, ihr Fehlen ist Kernschaden (alle 5).',
	'Mehr Männer in Erziehungs- und Care-Berufe (alle 5 — von HEAL bis „Men in Care“).',
	'Bildschirme/Algorithmen sind eine spezifische Jungen-Gefahr (4 von 5; RC ist zu alt dafür).',
	'Jungen brauchen emotionalen Ausdruck statt Panzerung (4 von 5 explizit; bei Sax implizit über Bindung).',
	'Jungenförderung OHNE Rücknahme von Frauen-Errungenschaften (4 von 5 explizit; Sax ambivalent).',
	'Das Zielbild: der gebende, schützende, fühlende Mann (alle 5, unter fünf Etiketten).'
];

export interface ConflictZone {
	title: string;
	question: string;
	sides: { label: string; books: string[]; position: string }[];
	state: string;
}

export const conflictZones: ConflictZone[] = [
	{
		title: 'Nature vs. Nurture',
		question: 'Woher kommt der Unterschied zwischen Jungen und Mädchen?',
		sides: [
			{ label: 'Biologie-Pol', books: ['ba', 'nbm'], position: 'Hard-wired (Sax) bzw. „more nature than nurture“ (Galloway) — T und PFC als Motor.' },
			{ label: 'Mitte', books: ['obm', 'rc'], position: 'Timing-Differenzen real, Typ-Differenzen klein und formbar — „nature AND nurture“ (Reeves), „biology is not destiny“ (RC).' },
			{ label: 'Sozialisations-Pol', books: ['jvh'], position: '„Gehirne sind gleich“ — die Differenz wird gemacht (Baby-X, Boy Code).' }
		],
		state: 'Die Meta-Analytik (Hyde, Chaplin & Aldao, Ritchie, Pahlke) stützt die MITTE und widerspricht beiden Polen. Bemerkenswert: Für Diagnose, Praxis und Zielbild ist der Streit fast folgenlos — er entscheidet primär, welches Milieu das Buch kauft.'
	},
	{
		title: 'Härte, Wettbewerb, Raufen',
		question: 'Ist die Härte-Kultur unter Jungen Nährstoff oder Pathogen?',
		sides: [
			{ label: 'Nährstoff', books: ['ba', 'nbm'], position: 'Wettbewerb, Risiko und Bewährung sind gesunde Jungen-Bedürfnisse; ihr Verbot schadet (Sax: Riten; Galloway: Rejection-Training, „be a warrior“).' },
			{ label: 'Pathogen', books: ['rc', 'jvh'], position: 'Die Culture of Cruelty erzwingt die emotionale Panzerung; Härte-Normen sind der Kernschaden (RC klinisch, Dittmann als Boy-Code-Erbe).' }
		],
		state: 'Der am wenigsten aufgelöste Widerspruch des Fünfecks. Differenzierte Lage: strukturiertes Kräftemessen (Sport, Rough-and-Tumble) hat Nutzen-Evidenz, unstrukturierte Peer-Grausamkeit Schadens-Evidenz — beide Seiten verallgemeinern ihre Hälfte. Galloways Frat-Kapitel zeigt beides in EINER Institution.'
	},
	{
		title: 'Der Hebel-Streit',
		question: 'Therapiert man Jungen, Eltern, Schulen oder Gesetze?',
		sides: [
			{ label: 'Struktur', books: ['obm'], position: 'Systeme umbauen; individuelle Förderung verpufft oft (Kalamazoo).' },
			{ label: 'Erziehung/Klinik', books: ['rc', 'jvh', 'ba'], position: 'Eltern und Pädagogik als Haupthebel — mit je eigenem Programm (Emotion / Gleichstellung / Biologie-Passung).' },
			{ label: 'Selbstformung', books: ['nbm'], position: 'Der junge Mann selbst — die einzige Ebene, die er kontrolliert.' }
		],
		state: 'Empirisch am offensten: ALLE Lösungs-Etagen sind ungetestete Wetten auf getesteten Diagnosen. Reeves’ Kalamazoo-Befund und Prüfers Behavior-Genetics-Anker begrenzen die Erziehungs-Wette; Policies sind unimplementiert; Selbstformung ist unevaluierbar. Vermutlich ein UND, kein ODER.'
	},
	{
		title: 'Das Vokabular',
		question: 'Darf man „toxische Männlichkeit“ sagen — und Männlichkeit neu definieren?',
		sides: [
			{ label: 'Rahmen nutzen', books: ['jvh', 'rc'], position: 'Männlichkeitsnormen benennen und abbauen (JVH explizit mit Connell; RC ohne den Begriff, aber in der Sache).' },
			{ label: 'Rahmen verwerfen', books: ['obm', 'nbm', 'ba'], position: 'Reeves: analytisch leer (Harrington) und kontraproduktiv; Galloway: existiert per Definition nicht; Sax: Männlichkeit ist das Opfer, nicht der Täter.' }
		],
		state: 'Ein Streit über Strategie, nicht über Fakten: Dass rigide Männlichkeitsnormen messbar schaden, zeigt Wong (2017) — das stützt inhaltlich die Nutzer-Seite. Dass das VOKABULAR die Zielgruppe vertreibt, zeigt die Rezeption — das stützt die Verwerfer-Seite. Galloway lebt die Synthese vor: RC-Programm unter Anti-„toxic“-Flagge.'
	}
];

// ── Die 5-Bücher-Matrix ────────────────────────────────────────

export interface MatrixRow {
	question: string;
	cells: Record<string, string>; // bookId -> short answer
}

export const matrix: MatrixRow[] = [
	{
		question: 'Hauptursache der Krise',
		cells: {
			nbm: 'Addiction Economy + kulturelle Preisgabe',
			obm: 'Unangepasste Strukturen (Schule, Arbeit, Recht)',
			jvh: 'Männlichkeitsnormen / Sozialisation',
			ba: 'Fünf Faktoren gegen die Jungen-Biologie',
			rc: 'Emotionale Fehlerziehung'
		}
	},
	{
		question: 'Biologie-Gewicht',
		cells: {
			nbm: 'Hoch („more nature than nurture“)',
			obm: 'Mitte (Timing ja, Typ klein)',
			jvh: 'Minimal („Gehirne sind gleich“)',
			ba: 'Maximal (hard-wired)',
			rc: 'Niedrig-Mitte („not destiny“)'
		}
	},
	{
		question: 'Hebel',
		cells: {
			nbm: 'Der junge Mann selbst',
			obm: 'Gesetzgeber & Institutionen',
			jvh: 'Eltern & Pädagogik',
			ba: 'Eltern, Ärzte, Schulform',
			rc: 'Eltern, Lehrer, Therapie'
		}
	},
	{
		question: 'Zielbild-Etikett',
		cells: {
			nbm: 'Aspirational Masculinity / Surplus Value',
			obm: 'Prosocial Masculinity',
			jvh: 'Caring Masculinity',
			ba: 'Initiierter, verantwortlicher Mann',
			rc: 'Emotional ganzer Junge (ohne Männlichkeits-Norm)'
		}
	},
	{
		question: 'Evidenz-Ampel (Audit)',
		cells: {
			nbm: '🟡 stark nur via Reeves; 2 rote Glieder',
			obm: '🟢 0 rote Glieder, Goldstandard',
			jvh: '🟡 Beobachtung grün, Prämissen weich',
			ba: '🟡 Diagnose grün, Kausalfaktoren rot-gelb',
			rc: '🟢 8/12 grün, 0 rot — beste Klinik-Quelle'
		}
	},
	{
		question: 'Publikum',
		cells: {
			nbm: 'Junge Männer (Podcast-Millionenreichweite)',
			obm: 'Policy-Community, Debatten-Öffentlichkeit',
			jvh: 'Deutsche Eltern (progressiv)',
			ba: 'US-Eltern (konservativ-besorgt)',
			rc: 'Bildungsbürgerliche Eltern (lagerneutral)'
		}
	},
	{
		question: '„Toxische Männlichkeit“?',
		cells: {
			nbm: 'Existiert nicht (per Definition)',
			obm: 'Begriff verwerfen (Harrington)',
			jvh: 'Rahmen produktiv nutzen',
			ba: 'Männlichkeit ist Opfer, nicht Täter',
			rc: 'Sache ja, Begriff kommt nicht vor'
		}
	}
];

export const pentagonVerdict =
	'Das Fünfeck liest sich wie eine Sanduhr: oben breiter Konsens (die Diagnose), in der Mitte der Glaubenskrieg (drei Ursachen-Cluster, vier Konfliktzonen), unten wieder Konsens (Folgen, zwei Praxis-Forderungen, ein Zielbild unter fünf Etiketten). Daraus folgen die drei Kernbefunde der ganzen Vergleichsreihe: (1) Was ALLE fünf Lager unabhängig fordern — mehr Männer um Jungen herum, Schule an Jungen anpassen, Väter ernst nehmen — ist der belastbarste Kern der Jungenliteratur und verdient Vorrang vor jedem Lager-Programm. (2) Der Nature/Nurture-Streit, der die Debatte öffentlich dominiert, ist für Praxis und Zielbild fast folgenlos — er sortiert Milieus, nicht Maßnahmen. (3) Die Lösungs-Etagen ALLER fünf Bücher sind ungetestete Wetten; wer Gewissheit verkauft (egal welches Lager), verkauft zu viel. Ehrlicher Stand: getestete Diagnose, plausible Mechanismen, offene Therapie.';
