// pr-argument-chain-data.ts
// The argument chain for "Was Sie (Wirklich) Über Erziehung Wissen Müssen"
// (Tillmann Prüfer, dtv 2026), with evidence ratings per link.

export interface ChainLink {
	id: string;
	step: number;
	type: 'premise' | 'observation' | 'causal' | 'theory' | 'consequence' | 'solution';
	claim: string;
	shortLabel: string;
	evidence: string;
	status: 'red' | 'yellow' | 'green' | 'untestable';
	explanation: string;
	dependsOn: string[]; // IDs of links this one depends on
	collapseRisk: string;
	/** Where in the book this argument appears */
	bookLocations: BookLocation[];
	/** Structured evidence sources linking to /references */
	evidenceRefs: EvidenceRef[];
}

export interface EvidenceRef {
	label: string;
	authorSearch: string; // search query for /references page
}

export interface BookLocation {
	pages: string;
	chapter: string;
	context: string;
}

/** Node positions for flowchart layout (x/y as percentages of container).
 *  Layout: 8 thematic rows (A–H), x spread 4%–88% within each row. */
export const nodePositions: Record<string, { x: number; y: number; row: number }> = {
	// Row 0 — Block A: Fundamente (4 links)
	'pr-ratgeber-ueberlast':          { x: 8,  y: 3,  row: 0 },
	'pr-intensive-parenting-burnout': { x: 36, y: 3,  row: 0 },
	'pr-helikopter-schaden':          { x: 62, y: 3,  row: 0 },
	'pr-kindheit-ist-konstruiert':    { x: 86, y: 3,  row: 0 },

	// Row 1 — Block B: Erziehungsstile (4 links)
	'pr-baumrind-kanon':              { x: 8,  y: 15, row: 1 },
	'pr-waerme-dominiert-kontrolle':  { x: 34, y: 15, row: 1 },
	'pr-kind-praegt-eltern':          { x: 60, y: 15, row: 1 },
	'pr-routinen-schuetzen':          { x: 86, y: 15, row: 1 },

	// Row 2 — Block C: Kindheit/Resilienz (3 links)
	'pr-trauma-wirkt-aber-nicht-alltag': { x: 14, y: 28, row: 2 },
	'pr-hormesis-resilienz':             { x: 46, y: 28, row: 2 },
	'pr-kindheit-nicht-schicksal':       { x: 78, y: 28, row: 2 },

	// Row 3 — Block D: Geschwister/Bindung (4 links)
	'pr-geschwister-marginal':    { x: 8,  y: 41, row: 3 },
	'pr-bindungstheorie-mythos':  { x: 34, y: 41, row: 3 },
	'pr-stillen-bindung-null':    { x: 60, y: 41, row: 3 },
	'pr-familienbett-offen':      { x: 86, y: 41, row: 3 },

	// Row 4 — Block E: Werte/Förderung (6 links)
	'pr-werte-vorleben':              { x: 4,  y: 54, row: 4 },
	'pr-freundschaft-qualitaet':      { x: 22, y: 54, row: 4 },
	'pr-foerderung-intrinsisch':      { x: 40, y: 54, row: 4 },
	'pr-iq-begrenzt':                 { x: 58, y: 54, row: 4 },
	'pr-musikunterricht-transfer-schwach': { x: 74, y: 54, row: 4 },
	'pr-orchidee-loewenzahn-ueberzogen':   { x: 88, y: 54, row: 4 },

	// Row 5 — Block F: Spiel/Geschlecht/Emotion (5 links)
	'pr-freies-spiel-kern':              { x: 6,  y: 67, row: 5 },
	'pr-spielvorlieben-stabil':          { x: 26, y: 67, row: 5 },
	'pr-geschlechterunterschied-sozial': { x: 48, y: 67, row: 5 },
	'pr-transgender-elternunterstuetzung': { x: 70, y: 67, row: 5 },
	'pr-weinen-kulturell-sozialisiert':  { x: 88, y: 67, row: 5 },

	// Row 6 — Block G: Belohnung/Essen/Screen (4 links)
	'pr-belohnung-korrumpiert-nur-bedingt': { x: 8,  y: 80, row: 6 },
	'pr-bestrafung-schadet':                { x: 34, y: 80, row: 6 },
	'pr-essen-druck-schadet':               { x: 60, y: 80, row: 6 },
	'pr-smartphone-effekt-klein':           { x: 86, y: 80, row: 6 },

	// Row 7 — Block H: Adoleszenz/Fazit (4 links)
	'pr-adoleszenz-zweite-chance': { x: 8,  y: 93, row: 7 },
	'pr-good-enough-parenting':    { x: 34, y: 93, row: 7 },
	'pr-autonomie-foerdert':       { x: 60, y: 93, row: 7 },
	'pr-erziehen-ist-entdecken':   { x: 86, y: 93, row: 7 }
};

export const rowLabels = [
	'Block A — Fundamente: Was ist Erziehung?',
	'Block B — Erziehungsstile: Baumrind im Lichte der Replikationskrise',
	'Block C — Kindheit, Trauma, Resilienz',
	'Block D — Geschwister, Bindung',
	'Block E — Werte, Freundschaft, Förderung',
	'Block F — Spiel, Geschlecht, Emotion',
	'Block G — Belohnung, Strafe, Essen, Screen',
	'Block H — Adoleszenz, Fazit'
];

export const typeLabels: Record<string, { label: string; color: string }> = {
	premise:     { label: 'Prämisse',              color: '#6366f1' },
	observation: { label: 'Beobachtung',           color: '#3b82f6' },
	causal:      { label: 'Kausalbehauptung',      color: '#f59e0b' },
	theory:      { label: 'Theoretischer Rahmen',  color: '#8b5cf6' },
	consequence: { label: 'Schlussfolgerung',      color: '#ef4444' },
	solution:    { label: 'Handlungsempfehlung',   color: '#10b981' }
};

export const chain: ChainLink[] = [
	// ======== Block A — Fundamente ========
	{
		id: 'pr-ratgeber-ueberlast',
		step: 1,
		type: 'premise',
		claim:
			'Die Gegenwart produziert mehr Erziehungsratgeber als je zuvor, mit stark widersprüchlichen Empfehlungen („Kinder brauchen Grenzen" vs. „Kinder brauchen Bindung"). Jede Generation hat ihre Mode (Ferber-Methode 1990er, heute „schwarze Pädagogik" genannt), die scheinbar zeitlos wirkte, aber kulturell kontingent war.',
		shortLabel: 'Ratgeber-Überlast verunsichert Eltern',
		evidence:
			'McDermott (2020) The Problem with parenting [3]; historische Ratgeber Schreber 1891, Niemeyer 1796, Schregardus 1998 [2,13–16].',
		status: 'green',
		explanation:
			'Rein deskriptiv, keine kausale Behauptung. Schwer zu widerlegen. Qualitativ, aber gut belegt via Textbeispiele und unstrittige historische Beobachtung.',
		dependsOn: [],
		collapseRisk: 'Sehr gering — Ausgangsbeobachtung des Buches.',
		bookLocations: [
			{
				pages: 'ca. S. 1–25',
				chapter: 'Kap. 1+2',
				context: 'Einstieg: Ratgebermode und historische Kontingenz pädagogischer Konzepte.'
			}
		],
		evidenceRefs: [
			{ label: 'McDermott (2020)', authorSearch: 'McDermott' },
			{ label: 'Schreber (1891)', authorSearch: 'Schreber' },
			{ label: 'Niemeyer (1796)', authorSearch: 'Niemeyer' },
			{ label: 'Schregardus (1998)', authorSearch: 'Schregardus' }
		]
	},
	{
		id: 'pr-intensive-parenting-burnout',
		step: 2,
		type: 'observation',
		claim:
			'„Intensive parenting" (hoher Zeitaufwand, Perfektionsanspruch, Dauerverfügbarkeit) ist mit Eltern-Burnout, Schuldgefühlen und psychischer Erschöpfung assoziiert — besonders in individualistischen Gesellschaften.',
		shortLabel: 'Intensive Parenting → Eltern-Burnout',
		evidence:
			'Roskam et al. (2021), 42-Länder-Studie zu Parental Burnout [10]; Cornell 2019 [5]; Forsa/KKH 2024 [6]; McCoy et al. (2024) Meta-Analyse zu Helikopter-Parenting [7].',
		status: 'green',
		explanation:
			'Meta-Analyse + Cross-Cultural-Daten. Korrelation gut repliziert; kausale Richtung (Kultur → Burnout oder umgekehrt) bleibt offen.',
		dependsOn: ['pr-ratgeber-ueberlast'],
		collapseRisk:
			'Moderat — wenn die Messung von „intensive parenting" unsauber wäre, kollabieren Kausalaussagen.',
		bookLocations: [
			{
				pages: 'S. 5–10',
				chapter: 'Kap. 1',
				context: 'Empirische Einordnung des Eltern-Burnout-Phänomens in individualistischen Gesellschaften.'
			}
		],
		evidenceRefs: [
			{ label: 'Roskam et al. (2021)', authorSearch: 'Roskam' },
			{ label: 'Cornell (2019)', authorSearch: 'Cornell' },
			{ label: 'Forsa/KKH (2024)', authorSearch: 'KKH' },
			{ label: 'McCoy et al. (2024)', authorSearch: 'McCoy' }
		]
	},
	{
		id: 'pr-helikopter-schaden',
		step: 3,
		type: 'causal',
		claim:
			'Übermäßig kontrollierende Erziehung im Kleinkindalter ist mit schlechterer Emotionsregulation, geringerer Resilienz, höherer Ängstlichkeit/Depressivität im Jugendalter verbunden.',
		shortLabel: 'Helikopter-Erziehung → schlechtere kindliche Selbstregulation',
		evidence:
			'Perry et al. (2018) U. Minnesota Längsschnittstudie [8]; Vigdal & Brennick (2022) systematischer Review von 38 Studien [8]; irische Studie zu Helikopter-Parenting und Resilienz [8].',
		status: 'yellow',
		explanation:
			'Evidenz überwiegend korrelativ; Längsschnitt stützt aber Kausalrichtung. Eltern-Kind-Interaktion ist bidirektional; „schwieriges Kind → kontrollierendere Eltern" ebenso plausibel.',
		dependsOn: ['pr-intensive-parenting-burnout'],
		collapseRisk: 'Mittel — Prüfer stützt darauf seine „weniger ist mehr"-Empfehlung.',
		bookLocations: [
			{
				pages: 'S. 5–8',
				chapter: 'Kap. 1',
				context: 'Zentrale Stelle zu Overparenting und kindlicher Entwicklung.'
			}
		],
		evidenceRefs: [
			{ label: 'Perry et al. (2018)', authorSearch: 'Perry' },
			{ label: 'Vigdal & Brennick (2022)', authorSearch: 'Vigdal' }
		]
	},
	{
		id: 'pr-kindheit-ist-konstruiert',
		step: 4,
		type: 'theory',
		claim:
			'Das moderne Bild des Kindes (schutzwürdig, zu fördern, Investment, Heilsbringer) ist eine westlich-neuzeitliche Erfindung. Agrar- und Stammesgesellschaften sind „Gerontokratien", der Westen eine „Neontokratie" (Lancy).',
		shortLabel: 'Kindheit als historisches Konstrukt',
		evidence:
			'Ariès (1960) [12]; Lancy (2015) Anthropology of Childhood [18]; Seel & Hanke (2015) Erziehungswissenschaft [19]; Key (1900) [24]; Dekker (2009) [25].',
		status: 'untestable',
		explanation:
			'Anthropologisches Interpretationsmodell, nicht falsifizierbar. Ariès\' Urversion wurde korrigiert (auch Mittelalter kannte Kinder als besonders), Lancys „neontocracy/gerontocracy"-Schema ist beschreibend nützlich, aber nicht quantitativ testbar.',
		dependsOn: [],
		collapseRisk:
			'Gering — dient als Einordnungsrahmen, keine operative Empfehlung hängt davon ab.',
		bookLocations: [
			{
				pages: 'S. 12–25',
				chapter: 'Kap. 2',
				context: 'Historisch-anthropologische Einordnung des modernen Kindheitsbegriffs.'
			}
		],
		evidenceRefs: [
			{ label: 'Ariès (1960)', authorSearch: 'Ariès' },
			{ label: 'Lancy (2015)', authorSearch: 'Lancy' },
			{ label: 'Seel & Hanke (2015)', authorSearch: 'Seel' },
			{ label: 'Key (1900)', authorSearch: 'Key' },
			{ label: 'Dekker (2009)', authorSearch: 'Dekker' }
		]
	},

	// ======== Block B — Erziehungsstile ========
	{
		id: 'pr-baumrind-kanon',
		step: 5,
		type: 'theory',
		claim:
			'Seit Baumrind (1966) gilt das Modell autoritär / autoritativ / permissiv als Standard; autoritativ (Wärme + klare Regeln) gilt als „goldener Mittelweg" und mit besten Outcomes korreliert.',
		shortLabel: 'Baumrinds drei Erziehungsstile',
		evidence:
			'Baumrind (1966) [33]; spätere Ergänzung neglectful von Maccoby & Martin implizit; Lamborn et al. (1991) [41]; Steinberg (2001) [41]; Pinquart (2017) Meta-Analyse von 1400+ Studien [42].',
		status: 'yellow',
		explanation:
			'Rahmen hält grob, aber methodisch angeschlagen. Stichprobe nur ~100 weiße Mittelschichtsfamilien; Kategorien wurden von Catherine Lewis (1981) reanalysiert — die Vorteile lassen sich überwiegend durch Wärme allein erklären, nicht durch strenge Kontrolle. Kritik Alfie Kohn [34]. Der Rahmen bleibt als heuristisches Vokabular brauchbar, aber die starke Fassung „autoritativ = wissenschaftlich belegt beste" wird durch Lewis & neuere Studien nicht gestützt.',
		dependsOn: [],
		collapseRisk:
			'Hoch — wenn Baumrind kollabiert, fehlt dem populären Erziehungsdiskurs sein Hauptanker. Prüfer nutzt dies bewusst.',
		bookLocations: [
			{
				pages: 'S. 46–54',
				chapter: 'Kap. 3',
				context: 'Kanonische Darstellung und Reanalyse der Baumrind-Typologie.'
			}
		],
		evidenceRefs: [
			{ label: 'Baumrind (1966)', authorSearch: 'Baumrind' },
			{ label: 'Lamborn et al. (1991)', authorSearch: 'Lamborn' },
			{ label: 'Steinberg (2001)', authorSearch: 'Steinberg' },
			{ label: 'Pinquart (2017)', authorSearch: 'Pinquart' },
			{ label: 'Kohn (2005)', authorSearch: 'Kohn' }
		]
	},
	{
		id: 'pr-waerme-dominiert-kontrolle',
		step: 6,
		type: 'causal',
		claim:
			'Re-Analyse von Baumrind-Daten (Lewis 1981) und neue spanische Studien zeigen: Wärme allein produziert ebenso gute oder bessere Outcomes wie Wärme + Kontrolle. Kontrolldruck (v. a. psychologische Kontrolle, Liebesentzug) schadet; bloße Nachsichtigkeit ist nicht schädlich, solange Wärme da ist.',
		shortLabel: 'Wärme > Kontrolle',
		evidence:
			'Lewis (1981) [35]; Martinez & Garcia (2007) Spanien, N > 1400 [39]; Fuentes et al. (2022) [40]; Garcia et al. (2018) [46]; Pinquart (2017) [42]; Masud et al. (2019) [38].',
		status: 'yellow',
		explanation:
			'Spanische Studien deutlich, aber kulturspezifisch; US-/deutsche Replikationen gemischter. Kulturkontext (Spanien: nachsichtig akzeptiert, Skandinavien ähnlich) kann Ergebnisse verzerren. Die zentrale Aussage — Wärme unverhandelbar, Kontrolle verhandelbar — ist aber robust.',
		dependsOn: ['pr-baumrind-kanon'],
		collapseRisk: 'Mittel — trägt Prüfers Hauptpraxis-Empfehlung „nicht Angst vor Softness haben".',
		bookLocations: [
			{
				pages: 'S. 51–58',
				chapter: 'Kap. 3',
				context: 'Reanalyse und spanisch-skandinavische Evidenz zur Wärme-Dominanz.'
			}
		],
		evidenceRefs: [
			{ label: 'Lewis (1981)', authorSearch: 'Lewis' },
			{ label: 'Martinez & Garcia (2007)', authorSearch: 'Martinez Garcia' },
			{ label: 'Fuentes et al. (2022)', authorSearch: 'Fuentes' },
			{ label: 'Garcia et al. (2018)', authorSearch: 'Garcia' },
			{ label: 'Pinquart (2017)', authorSearch: 'Pinquart' },
			{ label: 'Masud et al. (2019)', authorSearch: 'Masud' }
		]
	},
	{
		id: 'pr-kind-praegt-eltern',
		step: 7,
		type: 'causal',
		claim:
			'Schwedische Längsschnittstudie mit ~1000 Jugendlichen: Kindliches Verhalten sagt elterlichen Erziehungsstil besser vorher als umgekehrt. Antisoziales Verhalten schiebt Eltern Richtung vernachlässigend; offenes Kommunizieren fördert autoritative Haltung.',
		shortLabel: 'Kinder beeinflussen Eltern stärker als umgekehrt',
		evidence: 'Kerr, Stattin & Özdemir (2012) [37]; Smetana (2017) review [36].',
		status: 'yellow',
		explanation:
			'Einzelne starke Studie, wegweisend aber nicht dogmatisch. Ein zentraler Befund, methodisch sauber (cross-lagged panel), aber kulturspezifisch und braucht Replikation.',
		dependsOn: ['pr-baumrind-kanon'],
		collapseRisk: 'Mittel — Prüfers Verteidigung gegen Eltern-Schuldgefühle hängt daran.',
		bookLocations: [
			{
				pages: 'S. 53',
				chapter: 'Kap. 3',
				context: 'Kerr/Stattin als zentrale Studie zur Bidirektionalität von Elter-Kind-Dynamik.'
			}
		],
		evidenceRefs: [
			{ label: 'Kerr, Stattin & Özdemir (2012)', authorSearch: 'Kerr Stattin' },
			{ label: 'Smetana (2017)', authorSearch: 'Smetana' }
		]
	},
	{
		id: 'pr-routinen-schuetzen',
		step: 8,
		type: 'causal',
		claim:
			'Struktur (vorhersehbare Abläufe, Rituale) korreliert mit weniger Angst/Verhaltensproblemen und besserer kognitiver Entwicklung — unabhängig vom sozioökonomischen Hintergrund. Unterscheidet sich scharf von „kontrollierendem Druck".',
		shortLabel: 'Routinen > Kontrolldruck',
		evidence:
			'Marsh et al. (2020) Neuseeland scoping review [47]; Selman & Dilworth-Bart (2024) systematischer Review von 170 Studien [48]; Levitt et al. (2020) Massachusetts N=215 [49]; Spagnola & Fiese (2007) [330].',
		status: 'green',
		explanation:
			'Mehrere konvergente Meta-/Systematic-Reviews. Robust; Haupt-„Lever" für Eltern, die etwas ändern wollen, ohne autoritär zu werden.',
		dependsOn: ['pr-waerme-dominiert-kontrolle'],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 56–60',
				chapter: 'Kap. 3',
				context: 'Evidenz, dass Alltagsstruktur ohne Druck positive Effekte hat.'
			}
		],
		evidenceRefs: [
			{ label: 'Marsh et al. (2020)', authorSearch: 'Marsh' },
			{ label: 'Selman & Dilworth-Bart (2024)', authorSearch: 'Selman' },
			{ label: 'Levitt et al. (2020)', authorSearch: 'Levitt' },
			{ label: 'Spagnola & Fiese (2007)', authorSearch: 'Spagnola' }
		]
	},

	// ======== Block C — Kindheit, Trauma, Resilienz ========
	{
		id: 'pr-trauma-wirkt-aber-nicht-alltag',
		step: 9,
		type: 'causal',
		claim:
			'Langzeitliche Deprivation (rumänische Waisenhäuser, ERA-Studie) hinterlässt messbare Spuren im Gehirn/Stresssystem. Aber Adoption mit 2–4 Jahren erlaubt weitgehende Erholung. Normale Familienschwankungen haben nicht die katastrophalen Folgen, die Ratgeber suggerieren.',
		shortLabel: 'Nur Schwertraumata prägen irreversibel',
		evidence:
			'Rutter et al. (2010) English and Romanian Adoptees Study [52]; Kumsta et al. (2010) [55]; Yehuda (2004) Risk and resilience [57]; Specht et al. (2011) Big Five Stabilität [56].',
		status: 'green',
		explanation:
			'ERA ist eine der methodisch solidesten Längsschnittstudien der Entwicklungspsychologie. Naturexperiment mit deutlicher „Schwellen-Evidenz": unter einem bestimmten Niveau von Deprivation erholen sich Kinder weitgehend; darüber bleiben messbare Defizite.',
		dependsOn: [],
		collapseRisk: 'Gering — ERA ist gut repliziert.',
		bookLocations: [
			{
				pages: 'S. 35–45',
				chapter: 'Kap. 4',
				context: 'Ceaușescu-Waisenhäuser, ERA-Studie, Trauma-Forschung.'
			}
		],
		evidenceRefs: [
			{ label: 'Rutter et al. (2010)', authorSearch: 'Rutter' },
			{ label: 'Kumsta et al. (2010)', authorSearch: 'Kumsta' },
			{ label: 'Yehuda (2004)', authorSearch: 'Yehuda' },
			{ label: 'Specht et al. (2011)', authorSearch: 'Specht' }
		]
	},
	{
		id: 'pr-hormesis-resilienz',
		step: 10,
		type: 'causal',
		claim:
			'Junge Erwachsene mit mittleren, aber nicht extremen Lebensbelastungen sind später weniger anfällig für Depression/Stress als jene, die keine Schwierigkeiten bewältigen mussten.',
		shortLabel: 'Moderater Stress → Resilienz',
		evidence: 'Seery, Holman & Silver (2010) Whatever does not kill us [9].',
		status: 'yellow',
		explanation:
			'Eine Haupt-Quelle, attraktiv aber Einzelstudie; U-förmige Dosis-Wirkung repliziert nicht immer eindeutig. Populäre Studie, die oft als Beleg für „Antifragilität" gilt; spätere Replikationen gemischt.',
		dependsOn: ['pr-trauma-wirkt-aber-nicht-alltag'],
		collapseRisk: 'Mittel — stützt die „keine Überbehütung"-Empfehlung, aber nicht existentiell.',
		bookLocations: [
			{
				pages: 'Kap. 1+4',
				chapter: 'Kap. 1 und Kap. 4',
				context: 'Antifragilitäts-Argument gegen Überbehütung.'
			}
		],
		evidenceRefs: [
			{ label: 'Seery, Holman & Silver (2010)', authorSearch: 'Seery' }
		]
	},
	{
		id: 'pr-kindheit-nicht-schicksal',
		step: 11,
		type: 'consequence',
		claim:
			'Persönlichkeit und Lebenszufriedenheit ändern sich noch stark im Erwachsenenalter durch Partnerschaften, Beruf, Krisen. Die psychoanalytische „Kindheit als Schicksal"-These ist empirisch schwach.',
		shortLabel: 'Kindheit determiniert nicht das Leben',
		evidence:
			'Specht et al. (2011) Big Five Stabilität [56]; Vaillant (2012) Triumphs of Experience / Harvard Grant Study [62]; Jenni (2021) [58].',
		status: 'green',
		explanation:
			'Big-Five-Stabilitätsforschung & Harvard Grant Study stützen moderate Plastizität über die Lebensspanne. Mainstream-Persönlichkeitspsychologie; Freud-basierte Ursprungsmythen sind empirisch kaum haltbar.',
		dependsOn: ['pr-trauma-wirkt-aber-nicht-alltag', 'pr-hormesis-resilienz'],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 42–48',
				chapter: 'Kap. 4',
				context: 'Plastizität der Persönlichkeit jenseits der Kindheit.'
			}
		],
		evidenceRefs: [
			{ label: 'Specht et al. (2011)', authorSearch: 'Specht' },
			{ label: 'Vaillant (2012)', authorSearch: 'Vaillant' },
			{ label: 'Jenni (2021)', authorSearch: 'Jenni' }
		]
	},

	// ======== Block D — Geschwister, Bindung ========
	{
		id: 'pr-geschwister-marginal',
		step: 12,
		type: 'observation',
		claim:
			'Geburtsreihenfolge hat minimale und weitgehend nicht replizierbare Effekte auf Persönlichkeit. Theory-of-Mind-Vorteile für Kinder mit Geschwistern existieren, sind aber klein. Elterliche Differentialbehandlung (oft Töchter bevorzugt) ist belegt.',
		shortLabel: 'Geschwisterkonfiguration wirkt schwach',
		evidence:
			'Rohrer, Egloff & Schmukle (2015) PNAS N=377k [75]; Damian & Roberts (2015) [74]; Ashton & Lee (2024) PNAS [73]; Zhang et al. (2021) Only-Child ToM [63]; Jensen (2025) Meta-Analyse zu parental differential treatment [76].',
		status: 'green',
		explanation:
			'Rohrer et al. hat praktisch den Mythos des starken Geburtenrangeffekts begraben. Sehr große, methodisch saubere Stichproben widerlegen populäre Zuschreibungen.',
		dependsOn: [],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 44–48',
				chapter: 'Kap. 5',
				context: 'Geschwister-Dynamik: Widerlegung populärer Geburtenrang-Mythen.'
			}
		],
		evidenceRefs: [
			{ label: 'Rohrer, Egloff & Schmukle (2015)', authorSearch: 'Rohrer' },
			{ label: 'Damian & Roberts (2015)', authorSearch: 'Damian' },
			{ label: 'Ashton & Lee (2024)', authorSearch: 'Ashton' },
			{ label: 'Zhang et al. (2021)', authorSearch: 'Zhang' },
			{ label: 'Jensen (2025)', authorSearch: 'Jensen' }
		]
	},
	{
		id: 'pr-bindungstheorie-mythos',
		step: 13,
		type: 'theory',
		claim:
			'Die Bindungstheorie (Bowlby/Ainsworth) und die darauf gebaute populäre „Attachment-Parenting"-Bewegung (Sears) sind methodisch und konzeptionell brüchig: (a) Baltimore-Studie N=26, nicht repräsentativ; (b) Vorbild von Konrad Lorenz\' Tier-Prägung nicht auf Menschen übertragbar; (c) „inneres Arbeitsmodell" nicht operationalisierbar; (d) Test kulturblind; (e) Langzeitkorrelationen Säuglingsbindung → Erwachsenenbindung schwach oder null.',
		shortLabel: 'Bindungstheorie ist schwach fundiert',
		evidence:
			'Bowlby (1969) [83]; Ainsworth (1978) [84]; Kritik: Vicedo (2013) Nature & Nurture of Love [85]; Keller (2021) Mythos Bindungstheorie [97]; Thompson (2008) review anerkennt Mängel [87]; Sroufe et al. (2010) Minnesota Längsschnitt findet keine starke Kontinuität [91]; Zimmermann et al. (2000) Grossmann-Studie ebenfalls keine signifikante Kontinuität 1 Jahr → 16 Jahre [92]; Dugan et al. (2024) Canalization-Test [99]; Sears & Sears (2013) The Baby Book [77] als populäre Vulgärversion.',
		status: 'yellow',
		explanation:
			'Prüfers Kritik ist substantiell, aber er überzieht stellenweise. Der Kern (sichere Bindung = Schutzfaktor) ist gut belegt (Fearon et al. 2010 Meta-Analyse disorganisierter Bindung [88]); die radikalen Ableitungen (Familienbett, Tragen, Stillen als Bindungspflicht, berufstätige Mütter schaden) sind nicht gestützt. Prüfer wirft hier zu Recht Kern und Peripherie separat.',
		dependsOn: [],
		collapseRisk:
			'Hoch — zentraler Buchbeitrag; betrifft Kita-Eingewöhnungsmodelle, Mutterrollen-Ideologie etc.',
		bookLocations: [
			{
				pages: 'S. 52–61',
				chapter: 'Kap. 6',
				context: 'Zentrale Abrechnung mit der populären Bindungstheorie und Attachment Parenting.'
			}
		],
		evidenceRefs: [
			{ label: 'Bowlby (1969)', authorSearch: 'Bowlby' },
			{ label: 'Ainsworth (1978)', authorSearch: 'Ainsworth' },
			{ label: 'Vicedo (2013)', authorSearch: 'Vicedo' },
			{ label: 'Keller (2021)', authorSearch: 'Keller' },
			{ label: 'Thompson (2008)', authorSearch: 'Thompson' },
			{ label: 'Sroufe et al. (2010)', authorSearch: 'Sroufe' },
			{ label: 'Zimmermann et al. (2000)', authorSearch: 'Zimmermann Grossmann' },
			{ label: 'Dugan et al. (2024)', authorSearch: 'Dugan' },
			{ label: 'Fearon et al. (2010)', authorSearch: 'Fearon' },
			{ label: 'Sears & Sears (2013)', authorSearch: 'Sears' }
		]
	},
	{
		id: 'pr-stillen-bindung-null',
		step: 14,
		type: 'causal',
		claim:
			'Entgegen weitverbreiteter Annahme gibt es keinen Nachweis, dass Stillen die Mutter-Kind-Bindung spezifisch stärkt. Stillen hat dokumentierte Gesundheitsvorteile, aber die Bindungsthese ist empirisch unbelegt.',
		shortLabel: 'Stillen → Bindung: kein Nachweis',
		evidence:
			'Jansen, de Weerth & Riksen-Walraven (2008) Radboud review [89]; Linde et al. (2020) Midwifery systematic review [90].',
		status: 'green',
		explanation:
			'Zwei unabhängige Reviews, gleiches Ergebnis. Einer der klarsten Befunde gegen einen populären Mythos.',
		dependsOn: ['pr-bindungstheorie-mythos'],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 59',
				chapter: 'Kap. 6',
				context: 'Stillen und Bindung: widerlegter Mythos.'
			}
		],
		evidenceRefs: [
			{ label: 'Jansen, de Weerth & Riksen-Walraven (2008)', authorSearch: 'Jansen Weerth' },
			{ label: 'Linde et al. (2020)', authorSearch: 'Linde' }
		]
	},
	{
		id: 'pr-familienbett-offen',
		step: 15,
		type: 'consequence',
		claim:
			'Es gibt keine Langzeitstudie mit deutlichen Hinweisen, dass Familienbett-Schlaf Kindern nützt. Cry-it-out/Ferber-Methode ist wiederum nicht nachweisbar schädlich für Bindung.',
		shortLabel: 'Kein Beleg für Familienbett-Vorteil',
		evidence: 'Bilgin & Wolke (2020) Warwick-Studie [11]; fehlende Langzeitstudien für Bedsharing.',
		status: 'yellow',
		explanation:
			'„Absence of evidence, not evidence of absence" für Familienbett. Für Ferber: solide Warwick-Studie. Für Familienbett: fehlende Daten, nicht widerlegt — aber die starke Behauptung „Familienbett fördert Bindung" ist nicht gestützt.',
		dependsOn: ['pr-bindungstheorie-mythos', 'pr-stillen-bindung-null'],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 60',
				chapter: 'Kap. 6',
				context: 'Schlafarrangements und Bindung: Evidenzlage.'
			}
		],
		evidenceRefs: [
			{ label: 'Bilgin & Wolke (2020)', authorSearch: 'Bilgin Wolke' }
		]
	},

	// ======== Block E — Werte, Freundschaft, Förderung ========
	{
		id: 'pr-werte-vorleben',
		step: 16,
		type: 'causal',
		claim:
			'Eltern-Kind-Werteübereinstimmung hängt stärker von wahrgenommener elterlicher Wärme als von expliziter Werterziehung ab. Prosoziale Werte übertragen sich leichter als individualistische. Peers werden ab der Pubertät mächtiger, aber Eltern bleiben bei langfristigen Wertbindungen (Substanzkonsum, Sexualität, Schule) einflussreich.',
		shortLabel: 'Werte werden gelebt, nicht gelehrt',
		evidence:
			'Knafo-Noam, Barni & Schwartz (2020) Oxford Handbook [119]; Doering et al. (2017) [106]; Kandler, Gottschling & Spinath (2016) Zwillingsstudie [118]; Grusec & Goodnow (1994) [125]; Bornstein, Yu & Putnick (2022) [116]; Lee, Shin & Bong (2020) [112].',
		status: 'green',
		explanation:
			'Konvergierend aus Zwillings-, Längsschnitt- und Cross-Cultural-Studien. Solider, wenn auch in Effektstärken moderater Befund.',
		dependsOn: ['pr-waerme-dominiert-kontrolle'],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 65–72',
				chapter: 'Kap. 7',
				context: 'Werteübertragung in Familien: Wärme vor Indoktrination.'
			}
		],
		evidenceRefs: [
			{ label: 'Knafo-Noam, Barni & Schwartz (2020)', authorSearch: 'Knafo-Noam' },
			{ label: 'Doering et al. (2017)', authorSearch: 'Doering' },
			{ label: 'Kandler, Gottschling & Spinath (2016)', authorSearch: 'Kandler' },
			{ label: 'Grusec & Goodnow (1994)', authorSearch: 'Grusec' },
			{ label: 'Bornstein, Yu & Putnick (2022)', authorSearch: 'Bornstein' },
			{ label: 'Lee, Shin & Bong (2020)', authorSearch: 'Lee Shin Bong' }
		]
	},
	{
		id: 'pr-freundschaft-qualitaet',
		step: 17,
		type: 'causal',
		claim:
			'Langlebigkeit und psychische Gesundheit hängen stärker von Freundschaftsqualität ab als von Quantität. Gute Freunde senken Mortalität um ca. 50 % (Meta-Analyse 148 Studien). Introvertierte Kinder ohne großen Freundeskreis sind nicht defizitär.',
		shortLabel: 'Freundschaft: Qualität > Quantität',
		evidence:
			'Holt-Lunstad, Smith & Layton (2010) PLOS Medicine Meta-Analyse [134]; Giles et al. (2005) Australian Longitudinal Study of Aging [134]; Pezirkianidis et al. (2023) 38-Studien-Review [135]; Li & Kanazawa (2016) [145]; Cain (2023) Still [129].',
		status: 'green',
		explanation:
			'Holt-Lunstad Meta-Analyse sehr robust. Top-Befund der Sozialepidemiologie; Effektgröße vergleichbar mit Rauchverzicht.',
		dependsOn: [],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 74–81',
				chapter: 'Kap. 8',
				context: 'Freundschaft als Gesundheits- und Lebenszufriedenheits-Faktor.'
			}
		],
		evidenceRefs: [
			{ label: 'Holt-Lunstad, Smith & Layton (2010)', authorSearch: 'Holt-Lunstad' },
			{ label: 'Giles et al. (2005)', authorSearch: 'Giles' },
			{ label: 'Pezirkianidis et al. (2023)', authorSearch: 'Pezirkianidis' },
			{ label: 'Li & Kanazawa (2016)', authorSearch: 'Kanazawa' },
			{ label: 'Cain (2023)', authorSearch: 'Cain' }
		]
	},
	{
		id: 'pr-foerderung-intrinsisch',
		step: 18,
		type: 'causal',
		claim:
			'Frühe Förderung wirkt, aber moderat, und ihre Effekte verblassen zur Hälfte binnen eines Jahres nach Programm-Ende. Kürzere, qualitativ hochwertige Programme sind oft besser als lange. Die stärksten Effekte gibt es bei sozial benachteiligten Kindern; für Mittelschichtskinder ist der Grenznutzen zusätzlicher Förderung klein.',
		shortLabel: 'Intrinsische Motivation > Fördertraining',
		evidence:
			'Li et al. (2020) 67-Studien-Review, Brown U. [157]; Taggart et al. (2015) EPPSE [158]; Sylva et al. (2004) EPPE [175]; Reynolds et al. (2011) Chicago Longitudinal Study [176]; Campbell et al. (2001/2014) Abecedarian Project [177].',
		status: 'green',
		explanation:
			'EPPSE und Abecedarian sind Goldstandard-Langzeitstudien. Robust für benachteiligte Kinder; die populäre Ausweitung auf „jedes Kind braucht Frühförderung" wird nicht gestützt.',
		dependsOn: [],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 83–90',
				chapter: 'Kap. 9',
				context: 'Frühförderung: Evidenzbasis und Grenzen.'
			}
		],
		evidenceRefs: [
			{ label: 'Li et al. (2020)', authorSearch: 'Li' },
			{ label: 'Taggart et al. (2015) EPPSE', authorSearch: 'Taggart EPPSE' },
			{ label: 'Sylva et al. (2004) EPPE', authorSearch: 'Sylva EPPE' },
			{ label: 'Reynolds et al. (2011)', authorSearch: 'Reynolds' },
			{ label: 'Campbell et al. (2014) Abecedarian', authorSearch: 'Campbell Abecedarian' }
		]
	},
	{
		id: 'pr-iq-begrenzt',
		step: 19,
		type: 'observation',
		claim:
			'IQ ist stark mit schulischer Leistung korreliert, aber kein umfassendes Intelligenzmaß. Heritabilität steigt von ~20 % (Säugling) auf ~80 % (später Erwachsener). Umwelteinfluss ist in frühen Jahren groß, schrumpft später.',
		shortLabel: 'IQ misst begrenzt und wird altersabhängig',
		evidence:
			'Plomin & Deary (2015) Molecular Psychiatry [160]; Polderman et al. (2015) Nature Genetics 50 Jahre Zwillingsforschung Meta [161]; Plomin et al. (2016) Top-10-Behavioral-Genetics-Findings [162]; Sternberg-Interview.',
		status: 'green',
		explanation:
			'Behavior genetics Mainstream. Zu den robustesten Befunden der Psychologie überhaupt.',
		dependsOn: [],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 84–88',
				chapter: 'Kap. 9',
				context: 'Heritabilität, Intelligenz und ihre Grenzen.'
			}
		],
		evidenceRefs: [
			{ label: 'Plomin & Deary (2015)', authorSearch: 'Plomin Deary' },
			{ label: 'Polderman et al. (2015)', authorSearch: 'Polderman' },
			{ label: 'Plomin et al. (2016)', authorSearch: 'Plomin' },
			{ label: 'Sternberg', authorSearch: 'Sternberg' }
		]
	},
	{
		id: 'pr-musikunterricht-transfer-schwach',
		step: 20,
		type: 'causal',
		claim:
			'Transfer-Effekte von Musikunterricht auf außer-musikalische Kognition sind „schwach oder nicht vorhanden" (Schellenberg). Viele positive Befunde verwechseln Selbstselektion (musikalische Begabung → mehr Üben) mit kausalem Training.',
		shortLabel: 'Musikunterricht → allgemeine Kognition: schwach',
		evidence:
			'Schellenberg & Lima (2024) Annual Review of Psychology [180]; Schneider et al. (2023) 12-Jahres-Längsschnitt Graz [181]; Hyde et al. (2009) [179].',
		status: 'green',
		explanation:
			'Schellenberg ist führender Kritiker, Konsens wächst. Populäre „Mozart-Effekt"-Argumente widerlegt.',
		dependsOn: ['pr-iq-begrenzt'],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 88–90',
				chapter: 'Kap. 9',
				context: 'Mozart-Effekt und Transfer-Behauptungen kritisch geprüft.'
			}
		],
		evidenceRefs: [
			{ label: 'Schellenberg & Lima (2024)', authorSearch: 'Schellenberg' },
			{ label: 'Schneider et al. (2023)', authorSearch: 'Schneider' },
			{ label: 'Hyde et al. (2009)', authorSearch: 'Hyde' }
		]
	},
	{
		id: 'pr-orchidee-loewenzahn-ueberzogen',
		step: 21,
		type: 'theory',
		claim:
			'Boyce\'s Dichotomie (sensible „Orchideen" vs. robuste „Löwenzahn") ist populär, aber die empirische Verteilung ist eher kontinuierlich (Normalverteilung mit „Tulpen" in der Mitte), nicht bimodal.',
		shortLabel: 'Orchideen/Löwenzahn nur Metapher',
		evidence:
			'Boyce & Ellis (2005) [171]; Lionetti et al. (2018) [172]; Zhang, Widaman & Belsky (2023) [173]; Pluess & Belsky (2010) [174].',
		status: 'yellow',
		explanation:
			'Kategorisierung ist Überinterpretation; Grundphänomen differentieller Sensibilität hält. Differentielle Sensibilität existiert; das attraktive „zwei Typen"-Schema nicht.',
		dependsOn: [],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 87',
				chapter: 'Kap. 9',
				context: 'Differentielle Sensibilität: Metapher vs. empirische Verteilung.'
			}
		],
		evidenceRefs: [
			{ label: 'Boyce & Ellis (2005)', authorSearch: 'Boyce Ellis' },
			{ label: 'Lionetti et al. (2018)', authorSearch: 'Lionetti' },
			{ label: 'Zhang, Widaman & Belsky (2023)', authorSearch: 'Widaman' },
			{ label: 'Pluess & Belsky (2010)', authorSearch: 'Pluess' }
		]
	},

	// ======== Block F — Spiel, Geschlecht, Emotion ========
	{
		id: 'pr-freies-spiel-kern',
		step: 22,
		type: 'causal',
		claim:
			'Selbstinitiiertes freies und Rollenspiel aktiviert simultan Problemlösung, Sprache, Emotionsregulation. Didaktisierte Förderung verdrängt spontane Explorationsfreude.',
		shortLabel: 'Freies Spiel = Entwicklungsmotor',
		evidence:
			'Vygotsky (1978) [184]; Gray (2013) Free to Learn [186]; Yogman et al. (2018) APA Statement [188]; Lillard et al. (2013) Psychological Bulletin [191]; Smits-van der Nat et al. (2024) Meta-Analyse [194]; Bonawitz et al. (2011) Cognition [168].',
		status: 'yellow',
		explanation:
			'Lillard et al. (2013) ist vorsichtiger als Vygotsky-Rezeption suggeriert. Lillards Metareview fand vielen behaupteten Effekten schwache Evidenz; jüngere Meta-Analysen (Smits-van der Nat 2024) optimistischer. Prinzip „Spiel zulassen, nicht stören" ist robust; konkrete Outcome-Versprechen sind schwächer.',
		dependsOn: [],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 92–100',
				chapter: 'Kap. 10',
				context: 'Rolle des freien Spiels in der kindlichen Entwicklung.'
			}
		],
		evidenceRefs: [
			{ label: 'Vygotsky (1978)', authorSearch: 'Vygotsky' },
			{ label: 'Gray (2013)', authorSearch: 'Gray' },
			{ label: 'Yogman et al. (2018)', authorSearch: 'Yogman' },
			{ label: 'Lillard et al. (2013)', authorSearch: 'Lillard' },
			{ label: 'Smits-van der Nat et al. (2024)', authorSearch: 'Smits-van der Nat' },
			{ label: 'Bonawitz et al. (2011)', authorSearch: 'Bonawitz' }
		]
	},
	{
		id: 'pr-spielvorlieben-stabil',
		step: 23,
		type: 'observation',
		claim:
			'Meta-Analyse >75 Studien, 50 Jahre: Jungen bevorzugen deutlich männlich-assoziierte Spielsachen (Fahrzeuge, Waffen), Mädchen weiblich-assoziierte (Puppen, Plüschtiere). Präferenzen sind zeitstabil, trotz veränderter Erziehungsideale.',
		shortLabel: 'Geschlechts-Spielvorlieben sind stabil',
		evidence: 'Davis & Hines (2021) Archives of Sexual Behavior [199].',
		status: 'green',
		explanation:
			'Sehr große Meta-Analyse. Deskriptiv robust; kausale Interpretation (angeboren vs. früh konditioniert) bleibt offen.',
		dependsOn: [],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 101',
				chapter: 'Kap. 11',
				context: 'Geschlechts-Spielvorlieben: 50 Jahre Meta-Evidenz.'
			}
		],
		evidenceRefs: [
			{ label: 'Davis & Hines (2021)', authorSearch: 'Davis Hines' }
		]
	},
	{
		id: 'pr-geschlechterunterschied-sozial',
		step: 24,
		type: 'causal',
		claim:
			'Biologische Gehirnunterschiede zwischen den Geschlechtern sind klein und größtenteils durch Körpergröße erklärt; Intragruppen-Varianz übersteigt Intergruppen-Varianz. Gesellschaftliche Erwartungen erzeugen die dominanten Effekte (schulische Leistung, Berufswahl, psychische Gesundheit).',
		shortLabel: 'Biologische Geschlechterdifferenzen klein, soziale groß',
		evidence:
			'Eliot et al. (2021) „Dump the dimorphism" [204]; DeCasien et al. (2022) Biology of Sex Differences [205]; Williams et al. (2021) [203]; OECD (2024) Education at a Glance [200].',
		status: 'green',
		explanation:
			'Neue große Meta-Studien konvergieren. Widerspricht explizit der stärkeren geschlechtsessentialistischen Lesart von Sax/Gurian; entspricht dem neurowissenschaftlichen Mainstream 2021+.',
		dependsOn: [],
		collapseRisk:
			'Mittel — dies ist der Ort, an dem Prüfer sich am stärksten von der Sax/Gurian-Schule absetzt.',
		bookLocations: [
			{
				pages: 'S. 102–105',
				chapter: 'Kap. 11',
				context: 'Biologische vs. soziale Geschlechterdifferenzen: neuer Konsens.'
			}
		],
		evidenceRefs: [
			{ label: 'Eliot et al. (2021)', authorSearch: 'Eliot' },
			{ label: 'DeCasien et al. (2022)', authorSearch: 'DeCasien' },
			{ label: 'Williams et al. (2021)', authorSearch: 'Williams' },
			{ label: 'OECD (2024)', authorSearch: 'OECD' }
		]
	},
	{
		id: 'pr-transgender-elternunterstuetzung',
		step: 25,
		type: 'causal',
		claim:
			'Trans-/nichtbinäre Jugendliche mit elterlicher Unterstützung zeigen deutlich weniger Depression/Suizidalität als abgelehnte. Geschlechtsidentität ist überwiegend stabil (Olson 5-Jahres-Längsschnitt), aber nicht unveränderlich (~7 % Re-Identifikation im Beobachtungszeitraum).',
		shortLabel: 'Elterliche Akzeptanz schützt trans Jugendliche',
		evidence:
			'Simons et al. (2013) N=66 Los Angeles [209]; Ryan et al. (2009) Pediatrics [210]; Olson et al. (2022) Pediatrics 5-Jahres-Studie [212]; Bachmann et al. (2024) Dt. Ärzteblatt, Trends 2013–2022 [208]; Ganna et al. (2019) Science GWAS [213].',
		status: 'yellow',
		explanation:
			'Evidenz für Schutzeffekt gut; Evidenz für langfristige Outcomes operativer Interventionen bei Jugendlichen begrenzt. Prüfer trennt sauber: emotionale Elternhaltung = gesichert; medizinische Frühinterventionen = offen. Hayton-Interview bringt kritische Insider-Stimme.',
		dependsOn: ['pr-geschlechterunterschied-sozial'],
		collapseRisk: 'Mittel — politisch heikel, aber Prüfer moderiert.',
		bookLocations: [
			{
				pages: 'S. 104–107',
				chapter: 'Kap. 11',
				context: 'Trans-Jugendliche: Elternakzeptanz vs. medizinische Fragen.'
			}
		],
		evidenceRefs: [
			{ label: 'Simons et al. (2013)', authorSearch: 'Simons' },
			{ label: 'Ryan et al. (2009)', authorSearch: 'Ryan' },
			{ label: 'Olson et al. (2022)', authorSearch: 'Olson' },
			{ label: 'Bachmann et al. (2024)', authorSearch: 'Bachmann' },
			{ label: 'Ganna et al. (2019)', authorSearch: 'Ganna' }
		]
	},
	{
		id: 'pr-weinen-kulturell-sozialisiert',
		step: 26,
		type: 'causal',
		claim:
			'Jungen und Mädchen weinen bis etwa 12 Jahre ähnlich oft; die Divergenz danach entsteht durch Männlichkeitsnormen. „Normative male alexithymia" (Levant) schwächt Beziehungen und Hilfesuche bei Männern.',
		shortLabel: 'Tränen-Differenz entsteht durch Sozialisation',
		evidence:
			'Van Tilburg et al. (2002) [219]; Levant (2001) [226]; Franz et al. (2008) Dt. Repräsentativ [227]; Levant & Wong (2013) [228]; Thorberg et al. (2011) Meta zu parental bonding & alexithymia [229]; Aznar & Tenenbaum (2015) [232].',
		status: 'yellow',
		explanation:
			'Alexithymie-Konzept ist nützlich, aber klinische Diagnostik variabel. Mittelstarke Evidenz; unterstützt ist, dass Eltern mit Töchtern mehr Gefühlsvokabular verwenden (belegt), das langfristige Folgenmodell ist schwächer.',
		dependsOn: ['pr-geschlechterunterschied-sozial'],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 110–115',
				chapter: 'Kap. 12',
				context: 'Emotionale Sozialisation von Jungen: Levants „normative male alexithymia".'
			}
		],
		evidenceRefs: [
			{ label: 'Van Tilburg et al. (2002)', authorSearch: 'Van Tilburg' },
			{ label: 'Levant (2001)', authorSearch: 'Levant' },
			{ label: 'Franz et al. (2008)', authorSearch: 'Franz' },
			{ label: 'Levant & Wong (2013)', authorSearch: 'Levant Wong' },
			{ label: 'Thorberg et al. (2011)', authorSearch: 'Thorberg' },
			{ label: 'Aznar & Tenenbaum (2015)', authorSearch: 'Aznar' }
		]
	},

	// ======== Block G — Belohnung, Strafe, Essen, Screen ========
	{
		id: 'pr-belohnung-korrumpiert-nur-bedingt',
		step: 27,
		type: 'causal',
		claim:
			'Der Korrumpierungseffekt (Deci/Ryan, Overjustification-Studien) ist real, aber auf intrinsisch bereits motivierte Tätigkeiten begrenzt. Für Tätigkeiten ohne intrinsische Motivation sind Anreize neutral bis nützlich. Alfie Kohns radikale Ablehnung jeder Belohnung (einschließlich Lob) ist überzogen.',
		shortLabel: 'Belohnungen korrumpieren — manchmal',
		evidence:
			'Greene, Sternberg & Lepper (1976) [244]; Deci & Ryan (2000) [265]; Cameron & Pierce (1994) Meta-Analyse [264]; Cerasoli, Nicklin & Ford (2014) 40-Jahre-Meta [263]; Fabiano & Pelham (2010) Token Economies bei ADHS [243].',
		status: 'yellow',
		explanation:
			'Kohn-These ist populär, aber Cameron & Pierce (1994) widerlegt sie direkt. Prüfer positioniert sich differenziert gegen den deutschen Alfie-Kohn-Mainstream.',
		dependsOn: [],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 117–122',
				chapter: 'Kap. 13',
				context: 'Belohnung und intrinsische Motivation: die Overjustification-Debatte.'
			}
		],
		evidenceRefs: [
			{ label: 'Greene, Sternberg & Lepper (1976)', authorSearch: 'Lepper' },
			{ label: 'Deci & Ryan (2000)', authorSearch: 'Deci Ryan' },
			{ label: 'Cameron & Pierce (1994)', authorSearch: 'Cameron Pierce' },
			{ label: 'Cerasoli, Nicklin & Ford (2014)', authorSearch: 'Cerasoli' },
			{ label: 'Fabiano & Pelham (2010)', authorSearch: 'Fabiano' }
		]
	},
	{
		id: 'pr-bestrafung-schadet',
		step: 28,
		type: 'causal',
		claim:
			'Körperstrafen und übermäßig harsche Kritik verschlechtern Selbstregulation, verändern neuronale Reaktionen auf Fehler/Belohnung, erhöhen Depressivitätsrisiko. Milde, kurze, klare Intervention ist effektiver als harte.',
		shortLabel: 'Harte Strafe → neuronaler Schaden',
		evidence:
			'Heilmann et al. (2021) Lancet narrative review [260]; Ferguson (2013) Meta-Analyse Längsschnitt [259]; Burani et al. (2023) Biological Psychiatry CNNI [261]; Merz, Tottenham & Noble (2019) [262]; Owen et al. (2012) systematischer Review 41 Studien [250]; Harris & Howard (1984) N=883 [256].',
		status: 'green',
		explanation:
			'Lancet-Review und neuere Neuroimaging-Daten robust. Gut repliziert; Effekt kleiner als Effekte schwerer Vernachlässigung, aber reproduzierbar.',
		dependsOn: [],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 122–125',
				chapter: 'Kap. 13',
				context: 'Körperstrafen und harsche Kritik: Neuro-/Verhaltens-Schäden.'
			}
		],
		evidenceRefs: [
			{ label: 'Heilmann et al. (2021)', authorSearch: 'Heilmann' },
			{ label: 'Ferguson (2013)', authorSearch: 'Ferguson' },
			{ label: 'Burani et al. (2023)', authorSearch: 'Burani' },
			{ label: 'Merz, Tottenham & Noble (2019)', authorSearch: 'Merz Tottenham' },
			{ label: 'Owen et al. (2012)', authorSearch: 'Owen' },
			{ label: 'Harris & Howard (1984)', authorSearch: 'Harris Howard' }
		]
	},
	{
		id: 'pr-essen-druck-schadet',
		step: 29,
		type: 'causal',
		claim:
			'Restriktive Fütterungsstile (Zum-Aufessen-Drängen, Süßigkeiten-Verbot) korrelieren mit höherem späteren BMI und schwächerer Sättigungsregulation. Autoritativer Stil auch im Ernährungskontext am besten.',
		shortLabel: 'Essensdruck → schlechtere Selbstregulation',
		evidence:
			'Pinquart (2014) Meta-Analyse [284]; Sokol, Qin & Poti (2017) Obesity Reviews [285]; Ruzicka, Darling & Sato (2021) Meta [289]; Hittner et al. (2016) Colorado Adoption Project [291]; Mahmood et al. (2021) [292]; WHO (2023) zu Süßgetränken [270].',
		status: 'green',
		explanation:
			'Mehrere Meta-Analysen konvergent. Robust für Essensdruck-Schaden; WHO-Empfehlungen zu Zucker gleichfalls gut belegt.',
		dependsOn: ['pr-waerme-dominiert-kontrolle'],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 126–133',
				chapter: 'Kap. 14',
				context: 'Essensstile und Kinder-Gewicht-/Regulationsbefunde.'
			}
		],
		evidenceRefs: [
			{ label: 'Pinquart (2014)', authorSearch: 'Pinquart 2014' },
			{ label: 'Sokol, Qin & Poti (2017)', authorSearch: 'Sokol' },
			{ label: 'Ruzicka, Darling & Sato (2021)', authorSearch: 'Ruzicka' },
			{ label: 'Hittner et al. (2016)', authorSearch: 'Hittner' },
			{ label: 'Mahmood et al. (2021)', authorSearch: 'Mahmood' },
			{ label: 'WHO (2023)', authorSearch: 'WHO' }
		]
	},
	{
		id: 'pr-smartphone-effekt-klein',
		step: 30,
		type: 'causal',
		claim:
			'Haidts starke These („Anxious Generation") lässt sich nicht kausal belegen; Orbens Experimentaldaten zeigen nur sehr kleine negative Effekte. Einig sind sich Befunde: (a) bei Kleinkindern schadet Bildschirmzeit (Neuro + Entwicklung), (b) Smartphone-Sucht korreliert mit Angst/Depression (mittelgroß), (c) Smartphone-Nutzung verschlechtert Schlaf. Kein Beleg für einen positiven Effekt des Smartphone-Besitzes auf Kinder-Wohlbefinden.',
		shortLabel: 'Smartphone-Schaden: kleiner, aber real',
		evidence:
			'Haidt (2024) The Anxious Generation [295]; Twenge & Campbell (2018) [296]; Orben & Przybylski (2019) 3 Zeitbudget-Studien [297]; Yang et al. (2019) 14-Studien-Review [300]; Augner et al. (2023) 17-Studien-Meta [301]; Eirich et al. (2022) JAMA Psychiatry Meta [302]; Law et al. (2023) JAMA Peds EEG [307]; Hutton et al. (2020) JAMA Peds MRT [308]; Mallawaarachchi et al. (2024) JAMA Peds 100-Studien-Meta [310]; Sun et al. (2023) Stanford 5-Jahres-Längsschnitt [312].',
		status: 'yellow',
		explanation:
			'Die politisch aufgeladene Debatte macht Einzelergebnisse fragiler. Prüfer balanciert Haidt ↔ Orben besser als die meisten. Die deutlichsten Schäden sind bei < 3-Jährigen; bei Jugendlichen wirken Effekte klein, aber konsistent negativ.',
		dependsOn: [],
		collapseRisk: 'Mittel.',
		bookLocations: [
			{
				pages: 'S. 133–141',
				chapter: 'Kap. 15',
				context: 'Bildschirmmedien, Smartphone-Nutzung und kindliches Wohlbefinden.'
			}
		],
		evidenceRefs: [
			{ label: 'Haidt (2024)', authorSearch: 'Haidt' },
			{ label: 'Twenge & Campbell (2018)', authorSearch: 'Twenge' },
			{ label: 'Orben & Przybylski (2019)', authorSearch: 'Orben' },
			{ label: 'Yang et al. (2019)', authorSearch: 'Yang' },
			{ label: 'Augner et al. (2023)', authorSearch: 'Augner' },
			{ label: 'Eirich et al. (2022)', authorSearch: 'Eirich' },
			{ label: 'Law et al. (2023)', authorSearch: 'Law' },
			{ label: 'Hutton et al. (2020)', authorSearch: 'Hutton' },
			{ label: 'Mallawaarachchi et al. (2024)', authorSearch: 'Mallawaarachchi' },
			{ label: 'Sun et al. (2023)', authorSearch: 'Sun' }
		]
	},

	// ======== Block H — Adoleszenz, Fazit ========
	{
		id: 'pr-adoleszenz-zweite-chance',
		step: 31,
		type: 'theory',
		claim:
			'Gehirnentwicklung geht bis ~25 Jahre; elterliche Härte in der Pubertät verschlechtert Gehirnentwicklung und erhöht Depression. Warme Eltern-Kind-Beziehung ist Schutzfaktor. Peers überflügeln Eltern-Einfluss ab 14.',
		shortLabel: 'Adoleszenz = zweites Entwicklungsfenster',
		evidence:
			'Schwartz et al. (2017) Orygen Adolescent Development Study [326]; Arnett (2000) „emerging adulthood" [314]; Scarr & Weinberg (1983) Minnesota Adoption [324]; Tucker-Drob, Briley & Harden (2013) [325]; Scalici & Schulz (2014) Rauchen-Peerinfluenz [323]; Braus-Interview.',
		status: 'green',
		explanation:
			'Großes Kohorten-Evidence. Peereinflussthese ist Mainstream (auch bei Harris 1998).',
		dependsOn: [],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 144–151',
				chapter: 'Kap. 16',
				context: 'Adoleszenz als Entwicklungsfenster; Peer- vs. Elterneinfluss.'
			}
		],
		evidenceRefs: [
			{ label: 'Schwartz et al. (2017)', authorSearch: 'Schwartz' },
			{ label: 'Arnett (2000)', authorSearch: 'Arnett' },
			{ label: 'Scarr & Weinberg (1983)', authorSearch: 'Scarr' },
			{ label: 'Tucker-Drob, Briley & Harden (2013)', authorSearch: 'Tucker-Drob' },
			{ label: 'Scalici & Schulz (2014)', authorSearch: 'Scalici' },
			{ label: 'Braus', authorSearch: 'Braus' }
		]
	},
	{
		id: 'pr-good-enough-parenting',
		step: 32,
		type: 'solution',
		claim:
			'Winnicotts „good enough mother" und Bettelheims „good enough parent" bilden den empirisch besten Rahmen: nicht-perfekte, aber verlässliche Reaktion; moderate Frustration als Entwicklungsmotor; bei ~50 % prompter Reaktion entwickeln Kinder eigene Beruhigungsstrategien. Mindful Parenting senkt Eltern-Stress und verbessert Kind-Outcomes.',
		shortLabel: 'Good-enough Parenting',
		evidence:
			'Winnicott (1953) [327]; Bettelheim (1987) A Good Enough Parent [334]; Sroufe, Egeland & Carlson (2005) Minnesota [328]; Woodhouse et al. (2020) Secure Base Provision [329]; Bögels et al. (2014) Mindful Parenting RCT [332]; Lilley, Sirois & Rowse (2020) Perfektionismus-Meta [336]; Yerkes et al. (2021) Intensive-Parenting-Paradox [337].',
		status: 'yellow',
		explanation:
			'Winnicott selbst ist psychoanalytisch/theoretisch, aber empirische Belege (Woodhouse 2020) stützen die 50%-Reaktionsschwelle. Zentrale normative Empfehlung des Buches; empirisch plausibel, konzeptionell uneinheitlich.',
		dependsOn: [
			'pr-intensive-parenting-burnout',
			'pr-helikopter-schaden',
			'pr-waerme-dominiert-kontrolle',
			'pr-bindungstheorie-mythos'
		],
		collapseRisk: 'Mittel — die „good enough"-Botschaft ist der Kern-Praxis-Take.',
		bookLocations: [
			{
				pages: 'S. 152–158',
				chapter: 'Kap. 17',
				context: 'Winnicott/Bettelheim-Synthese als Praxis-Rahmen.'
			}
		],
		evidenceRefs: [
			{ label: 'Winnicott (1953)', authorSearch: 'Winnicott' },
			{ label: 'Bettelheim (1987)', authorSearch: 'Bettelheim' },
			{ label: 'Sroufe, Egeland & Carlson (2005)', authorSearch: 'Sroufe Egeland' },
			{ label: 'Woodhouse et al. (2020)', authorSearch: 'Woodhouse' },
			{ label: 'Bögels et al. (2014)', authorSearch: 'Bögels' },
			{ label: 'Lilley, Sirois & Rowse (2020)', authorSearch: 'Lilley Sirois' },
			{ label: 'Yerkes et al. (2021)', authorSearch: 'Yerkes' }
		]
	},
	{
		id: 'pr-autonomie-foerdert',
		step: 33,
		type: 'causal',
		claim:
			'Eltern, die Autonomie unterstützen (statt kontrollieren), haben Kinder mit besserer Selbstregulation, höherem Wohlbefinden, besseren schulischen Leistungen — am stärksten wenn beide Eltern so agieren.',
		shortLabel: 'Autonomie-Unterstützung → bessere Outcomes',
		evidence:
			'Vasquez et al. (2015) Meta-Analyse 36 Studien [341]; Jungert et al. (2014) [339]; Meuwissen & Carlson (2019) Experiment [340]; Eriksson et al. (2022) [338].',
		status: 'green',
		explanation: 'Meta-Analyse + Experiment. Self-Determination-Theory-Paradigma ist robust.',
		dependsOn: ['pr-waerme-dominiert-kontrolle'],
		collapseRisk: 'Gering.',
		bookLocations: [
			{
				pages: 'S. 156–158',
				chapter: 'Kap. 17',
				context: 'Autonomie-Unterstützung im Rahmen der Self-Determination-Theory.'
			}
		],
		evidenceRefs: [
			{ label: 'Vasquez et al. (2015)', authorSearch: 'Vasquez' },
			{ label: 'Jungert et al. (2014)', authorSearch: 'Jungert' },
			{ label: 'Meuwissen & Carlson (2019)', authorSearch: 'Meuwissen' },
			{ label: 'Eriksson et al. (2022)', authorSearch: 'Eriksson' }
		]
	},
	{
		id: 'pr-erziehen-ist-entdecken',
		step: 34,
		type: 'solution',
		claim:
			'Letzte normative Formel: Eltern sollten akzeptieren, dass Kinder mit Eigenschaften kommen, die nur entdeckt, nicht geformt werden können. Fokus auf die gemeinsame Gegenwart statt auf eine imaginäre Zukunftsoptimierung. Jüdisch-kollektivistisches Modell (via Schmidbauer) als Gegenbild zum westlichen Erfolgsimperativ.',
		shortLabel: 'Erziehung = Entdecken, nicht Formen',
		evidence: 'Harris (1998) Nurture Assumption [335]; Schmidbauer-Interview; Plomin et al. (2016) Heritabilität [162].',
		status: 'untestable',
		explanation:
			'Normative Synthese, keine empirische Behauptung. Theoretischer Rahmen, der bisherige empirische Befunde integriert.',
		dependsOn: [
			'pr-kind-praegt-eltern',
			'pr-kindheit-nicht-schicksal',
			'pr-iq-begrenzt',
			'pr-geschlechterunterschied-sozial',
			'pr-adoleszenz-zweite-chance',
			'pr-good-enough-parenting',
			'pr-autonomie-foerdert'
		],
		collapseRisk: 'n/a — es ist die Synthese, keine Komponente.',
		bookLocations: [
			{
				pages: 'S. 159–165',
				chapter: 'Kap. 18',
				context: 'Normative Schluss-Synthese: Entdecken statt Formen.'
			}
		],
		evidenceRefs: [
			{ label: 'Harris (1998)', authorSearch: 'Harris Nurture' },
			{ label: 'Schmidbauer', authorSearch: 'Schmidbauer' },
			{ label: 'Plomin et al. (2016)', authorSearch: 'Plomin' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" — the weakest chain of dependencies to the final conclusion.
 *  Start from `pr-erziehen-ist-entdecken` (the final normative synthesis) and trace back. */
export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'pr-erziehen-ist-entdecken')!;
	const path: ChainLink[] = [target];

	function findWeakestDep(link: ChainLink): ChainLink | null {
		if (link.dependsOn.length === 0) return null;
		const deps = link.dependsOn.map((id) => chain.find((c) => c.id === id)!).filter(Boolean);
		if (deps.length === 0) return null;
		// Sort: red > yellow > untestable > green
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
		'Prüfers Argumentationskette ist am stärksten dort, wo sie skeptisch-deskriptiv bleibt: die Ratgeber-Überlast, ' +
		'die Meta-Analysen zu Elternstil (Pinquart), zu sozialer Einbindung (Holt-Lunstad), die Geschwister-Befunde (Rohrer, PNAS N=377k) ' +
		'und die ERA-Studie (Rutter) stehen auf solider empirischer Grundlage. Robust sind auch die Body-Gehirn-Befunde zu Geschlechterdifferenzen ' +
		'(Eliot, DeCasien) sowie die Körperstrafen-Evidenz (Heilmann/Lancet, Burani). ' +
		'Schwächer wird die Kette bei einzelnen Kernstützen: Baumrinds Originalstudie (N≈100, reanalysiert durch Lewis), ' +
		'Kerr/Stattins bidirektionaler Befund (Einzelstudie), Seerys Hormesis-Daten (gemischte Replikation) sowie die Bindungstheorie-Kritik ' +
		'(substantiell, aber stellenweise überzogen). Haidt vs. Orben bleibt ungelöst. Am wenigsten testbar sind Prüfers normative Schluss-Rahmen ' +
		'(„good enough", „Erziehung = Entdecken"), die als kohärente Integration der empirischen Befunde funktionieren, aber selbst keine falsifizierbaren Behauptungen sind. ' +
		'Insgesamt: das Buch ist am wertvollsten als epistemische Korrekturinstanz — es zeigt, wie viele populäre Ratgebertreiben schwach fundiert sind —, ' +
		'und am angreifbarsten dort, wo es selbst positive Handlungsempfehlungen formuliert.'
};

