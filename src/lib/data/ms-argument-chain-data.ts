// ms-argument-chain-data.ts
// Argument chain for Lothar Böhnisch, "Männliche Sozialisation" (Beltz Juventa, 2., überarbeitete Auflage 2013)

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

/** Node positions for flowchart layout (x/y as percentages of container) */
export const nodePositions: Record<string, { x: number; y: number; row: number }> = {
	'zweite-moderne':            { x: 20, y: 3, row: 0 },
	'reject-biology':            { x: 60, y: 3, row: 0 },
	'dominance-availability':    { x: 25, y: 18, row: 1 },
	'externalization':           { x: 65, y: 18, row: 1 },
	'coping-paradigm':           { x: 25, y: 34, row: 2 },
	'bedürftigkeit':             { x: 60, y: 34, row: 2 },
	'hidden-curriculum':         { x: 85, y: 34, row: 2 },
	'mother-son-bind':           { x: 12, y: 50, row: 3 },
	'event-father':              { x: 38, y: 50, row: 3 },
	'boy-cliques':               { x: 62, y: 50, row: 3 },
	'ghost-roleless-man':        { x: 85, y: 50, row: 3 },
	'gewalt-als-hilflosigkeit':  { x: 25, y: 66, row: 4 },
	'abstract-worker':           { x: 60, y: 66, row: 4 },
	'balanced-man-sein':         { x: 42, y: 84, row: 5 },
};

export const rowLabels = [
	'Epochale Rahmung',
	'Theoretische Leitachsen',
	'Zentrale Mechanismen',
	'Lebensphasen und Institutionen',
	'Krisenmuster im Erwachsenenalter',
	'Normatives Ziel'
];

export const typeLabels: Record<string, { label: string; color: string }> = {
	premise: { label: 'Premise', color: '#6366f1' },
	observation: { label: 'Observation', color: '#3b82f6' },
	causal: { label: 'Causal claim', color: '#f59e0b' },
	theory: { label: 'Theoretical framework', color: '#8b5cf6' },
	consequence: { label: 'Consequence', color: '#ef4444' },
	solution: { label: 'Prescriptive recommendation', color: '#10b981' }
};

export const chain: ChainLink[] = [
	// ======== Step 1 ========
	{
		id: 'zweite-moderne',
		step: 1,
		shortLabel: 'Zweite Moderne: Entgrenzung + Verdeckung',
		type: 'premise',
		claim:
			'Die gegenwärtige männliche Sozialisation vollzieht sich in der "Zweiten Moderne" — einer Epoche der Entgrenzung von Arbeit, Lebenslauf und Geschlechterverhältnis. Auf der Alltagsebene scheint Geschlechternivellierung vorzuherrschen; gleichzeitig treibt der digitale Kapitalismus das männlich konnotierte Prinzip der Externalisierung systemisch weiter voran und verschiebt strukturelle Widersprüche ins Private. Was als privates Bewältigungsproblem erscheint, ist in Wahrheit ein doppelter Verdeckungszusammenhang.',
		evidence:
			'Böhnischs Diagnose der deutschen und europäischen Arbeits- und Geschlechterverhältnisse, gestützt auf Beck (Risikogesellschaft 1986), Meuser, Scholz, Boltanski/Chiapello ("Der neue Geist des Kapitalismus" 2006), Connell/Hearn/Kimmel (Handbook 2004). Konkrete Indikatoren: Erosion des Normalarbeitsverhältnisses, Freisetzung einer "Männerfrage" (Langzeitarbeitslose, Stressopfer, Verlassene), männliche Verlierer in der Schule.',
		status: 'yellow',
		explanation:
			'Die zeitdiagnostische Rahmung ist breit rezipiert in der deutschen Soziologie und stützt sich auf gut dokumentierte Strukturwandel-Phänomene. Das konkrete Vokabular ("Zweite Moderne", "Entgrenzung", "Verdeckungszusammenhang") ist theoretisch aufgeladen und teils interpretativ; die empirischen Bestandteile (Erosion des Normalarbeitsverhältnisses, Prekarisierung, gender pay gap) sind robust.',
		dependsOn: [],
		collapseRisk:
			'Wäre die Zeitdiagnose der "Zweiten Moderne" und der systemischen Externalisierung falsch (z.B. wenn sich zeigen würde, dass die klassischen Arbeits- und Geschlechterstrukturen der Ersten Moderne weitgehend intakt geblieben sind), dann würde Böhnischs Rahmung kollabieren. Der empirische Befund der Prekarisierung widerlegt das jedoch.',
		bookLocations: [
			{
				pages: 'Einführung, S. 9-19',
				chapter: 'Einführung: Männlichkeit und Mannsein in der Zweiten Moderne',
				context: 'Zentrale Rahmung des gesamten Buches — Entgrenzung, Verdeckung, Ambivalenz.'
			},
			{
				pages: 'Ch. 1.1, S. 21-23',
				chapter: 'Die neue Ambivalenz',
				context: 'Expliziert den Ambivalenzbegriff und die Spannung zwischen Alltagsnivellierung und struktureller Externalisierung.'
			}
		],
		evidenceRefs: [
			{ label: 'Beck, Ulrich — Risikogesellschaft (1986)', authorSearch: 'Beck' },
			{ label: 'Boltanski & Chiapello — Der neue Geist des Kapitalismus', authorSearch: 'Boltanski' },
			{ label: 'Connell/Hearn/Kimmel — Handbook of Studies on Men and Masculinities', authorSearch: 'Connell' }
		]
	},

	// ======== Step 2 ========
	{
		id: 'reject-biology',
		step: 2,
		shortLabel: 'Anti-Essentialismus mit Leib-Vorbehalt',
		type: 'premise',
		claim:
			'Biologisch-genetische und evolutionsbiologische Erklärungen männlichen Verhaltens ("man-the-hunter", testosterongetriebene Aggression) sind wissenschaftlich nicht haltbar. Aber radikalkonstruktivistische Positionen, die Geschlecht allein auf interaktive Praxis reduzieren, greifen zu kurz. Geschlecht reicht leibseelisch in die Natur des Menschen hinein und ist zur historischen Struktur geworden — das macht es nicht zur Natur, erschwert aber seine soziale Dekonstruktion.',
		evidence:
			'Böhnischs Kritik an Bischof-Köhler (2002, 2012) und an populärwissenschaftlichen evolutionsbiologischen Rückführungen. Unterstützt durch die Hirnforschung (Hüther 2009, Palm 2011): ~90% der neuronalen Verknüpfungen bilden sich erst im Leben aus. Archäologische Kritik der "man-the-hunter"-Theorie. Gleichzeitig: psychoanalytische Sozialisationsforschung (Gottschalch 1991, Gruen 1992) zu leibseelischer Verankerung des Geschlechts.',
		status: 'yellow',
		explanation:
			'Die empirische Seite (Ablehnung biologistischer Reduktionen) ist gut gestützt durch Hyde-Gender-Similarities, Maccoby/Jacklin und Eliot. Die Gegenseite (die Betonung der leibseelischen Dimension gegen radikalen Konstruktivismus) ist stärker interpretativ. Böhnisch positioniert sich explizit zwischen den Fronten — das ist theoretisch produktiv, aber einzelne Elemente (z.B. die "Naturstärke der gebärenden Frau") sind von konstruktivistischer Seite angreifbar.',
		dependsOn: [],
		collapseRisk:
			'Würde tatsächlich eine biologisch determinierte männliche Verhaltensmatrix nachgewiesen (Sax/Gurian/Benenson-Position), würde Böhnischs Sozialisationsbegriff kollabieren. Würde umgekehrt Geschlecht vollständig auf Interaktion reduzierbar sein, verlöre die Rede von "Tiefenpsychologie" ihre Grundlage. Beide Extreme sind empirisch nicht haltbar — die Mittelposition ist stabil.',
		bookLocations: [
			{
				pages: 'Ch. 1.2, S. 24-29',
				chapter: 'Das Verwirrspiel Anlage – Umwelt',
				context: 'Kritik der evolutionsbiologischen Rückführung und gleichzeitige Verteidigung der leibseelischen Tiefendimension.'
			}
		],
		evidenceRefs: [
			{ label: 'Hüther, Gerald — Hirnplastizität', authorSearch: 'Hüther' },
			{ label: 'Palm, Kerstin — Kritik der Evolutionsbiologie', authorSearch: 'Palm' },
			{ label: 'Gruen, Arno — Der Verrat am Selbst', authorSearch: 'Gruen' },
			{ label: 'Gottschalch, Wilfried — Sozialisationsforschung', authorSearch: 'Gottschalch' }
		]
	},

	// ======== Step 3 ========
	{
		id: 'dominance-availability',
		step: 3,
		shortLabel: 'Hegemonie = Dominanz UND Verfügbarkeit',
		type: 'theory',
		claim:
			'Connells Konzept der hegemonialen Männlichkeit muss dialektisch erweitert werden: Männer stellen Machtverhältnisse her UND sind ihnen unterworfen. "Sie sind eben die Geschlechtergruppe, die den Bedingungen kapitalistischer Verwertung ohne echte Rückzugsmöglichkeit ausgesetzt ist." Hegemoniale Männlichkeit konstituiert sich in der Dialektik von männlicher Dominanz und Verfügbarkeit. Ohne die Verfügbarkeitsseite wird das Leiden von Männern unthematisierbar — und das Hegemonialkonzept selbst wird zum Verdeckungszusammenhang.',
		evidence:
			'Böhnischs Eigenbeitrag zur Hegemonialitätsdebatte, gestützt auf eigene Beratungspraxis, Erfahrungen aus der Sozialen Arbeit (Neumann/Süfke 2006), die deutschen Männerforschungs-Beiträge (Meuser 2006, 2010, 2012, Brandes 2002) sowie die Diskussion im Band "Erwägen, Wissen, Ethik" (2010).',
		status: 'untestable',
		explanation:
			'Eine theoretische Erweiterung, nicht eine empirische Hypothese. Das Argument: Connells Konzept sieht nur die Herrschaftsseite. Die empirische Plausibilität kommt aus Beratungspraxis (Männer zeigen Hilflosigkeit in kritischen Lebenssituationen quer durch alle Schichten). Das ist die zentrale theoretische Originalität des Buches.',
		dependsOn: ['zweite-moderne'],
		collapseRisk:
			'Wenn Männer tatsächlich nur Täter/Nutzer und nie auch Ausgesetzte/Unterworfene wären (radikalfeministische Position), wäre Böhnischs Erweiterung überflüssig. Das Argument widerlegt sich durch die vielfältigen empirischen Befunde zu männlicher Sterblichkeit, Suizid, Depressionen, Arbeitsverletzungen etc.',
		bookLocations: [
			{
				pages: 'Ch. 1.3, S. 30-33',
				chapter: 'Das sozialwissenschaftliche Leitkonzept: Hegemoniale Männlichkeit in der Spannung von Dominanz und Verfügbarkeit',
				context: 'Das zentrale theoretische Kapitel. Explizite Kritik und Erweiterung Connells.'
			}
		],
		evidenceRefs: [
			{ label: 'Connell, R. W. — Masculinities / Der gemachte Mann', authorSearch: 'Connell' },
			{ label: 'Meuser, Michael — Geschlecht und Männlichkeit', authorSearch: 'Meuser' },
			{ label: 'Neumann & Süfke — Männerberatungspraxis', authorSearch: 'Neumann' }
		]
	},

	// ======== Step 4 ========
	{
		id: 'externalization',
		step: 4,
		shortLabel: 'Externalisierung als Grundmechanismus',
		type: 'theory',
		claim:
			'Das männliche Grundprinzip der Externalisierung: Außenorientierung, Abspaltung eigener Gefühle, Projektion innerer Hilflosigkeit auf Schwächere, Verschließen des Innen. Entsteht in der frühen Kindheit (Ablösungsdruck von der Mutter, Suche nach schwer erreichbarem Vater) und wird durch ökonomische Strukturen verstärkt — die Warenform selbst ist geschlechtlich codiert: Reproduktionstätigkeiten (Sorge) werden vom Wert und den damit verbundenen Rationalitätsformen abgespalten.',
		evidence:
			'Psychoanalytische Sozialisationsforschung: Arno Gruen (1992, Der Verrat am Selbst), Nancy Chodorow (1985, Das Erbe der Mütter), Dammasch/Metzger/Theising 2009. Soziologisch-ökonomische Unterfütterung: Brensell/Habermann 2001 zur geschlechtlichen Besetzung der Warenform. Flaake (2012) zur psychoanalytischen Verbindung von Subjektgenese und Geschlechterverhältnissen.',
		status: 'yellow',
		explanation:
			'Starke klinische und interpretative Plausibilität. Das Konzept organisiert viele Beobachtungen (Männer reden viel, aber ritualisiert; mangelnde Empathiefähigkeit; Konkurrenzorientierung; Wut als einzig erlaubte Emotion). Es ist aber primär psychoanalytisch fundiert und nicht direkt quantitativ prüfbar. Die Brücke zwischen psychodynamischer und politökonomischer Ebene (Brensell/Habermann) ist theoretisch anspruchsvoll, aber spekulativ.',
		dependsOn: ['dominance-availability', 'reject-biology'],
		collapseRisk:
			'Wenn Männer sich emotional gar nicht systematisch anders verhalten als Frauen (radikale Nivellierungsthese) oder wenn die frühkindliche Ablösung psychoanalytisch falsch beschrieben ist, bricht die Grundlage. Die Konvergenz mit der Pollack/Kindlon-Thompson/Real-Linie der klinischen Männerforschung stützt aber den Kern.',
		bookLocations: [
			{
				pages: 'Ch. 1.4, S. 33-37',
				chapter: 'Der tiefenpsychologische Zugang: Externalisierung und Bedürftigkeit',
				context: 'Das zentrale Kapitel zur psychodynamischen Dimension. Führt den Begriff der Externalisierung ein.'
			},
			{
				pages: 'Ch. 5.3, S. 229-238',
				chapter: 'Muster männlicher Lebensbewältigung',
				context: 'Operationalisierung der Externalisierung in adult coping patterns (Stummheit, Kontrollzwang, externalisierte Rationalität).'
			}
		],
		evidenceRefs: [
			{ label: 'Gruen, Arno — Der Verrat am Selbst', authorSearch: 'Gruen' },
			{ label: 'Chodorow, Nancy — Das Erbe der Mütter', authorSearch: 'Chodorow' },
			{ label: 'Brensell & Habermann — Warenform und Geschlecht', authorSearch: 'Brensell' }
		]
	},

	// ======== Step 5 ========
	{
		id: 'coping-paradigm',
		step: 5,
		shortLabel: 'Männlichkeit als Medium der Lebensbewältigung',
		type: 'theory',
		claim:
			'Männlichkeit und Weiblichkeit sind nicht starre Habitustypen, sondern Bewältigungsmuster im Streben nach biografischer Handlungsfähigkeit, die aktiviert werden, wenn Druck und Dynamik der Lebenslagenkonstellation es erfordern. Das Zwei-Kreise-Modell: (1) innerer Kreis — psychodynamisch angetriebenes personales Bewältigungsverhalten mit drei Grundimpulsen: Selbstwert, soziale Anerkennung, Selbstwirksamkeit; (2) äußerer Kreis — gesellschaftliche Bewältigungsaufforderungen, soziale Spielräume.',
		evidence:
			'Anlehnung an das Coping-Modell der Stressforschung, die Devianzforschung und die Sozialpädagogische Theorie Abweichenden Verhaltens (Böhnisch 2010). Tiefenpsychologische Grundlagen: Winnicott (1984, 1988), Gruen (1992), Roth (2007, "Urform des Selbst"). Eigenständige Entwicklung Böhnischs über mehrere Werke hinweg (Böhnisch 2003 "Die Entgrenzung der Männlichkeit"; Böhnisch/Lenz/Schröer 2009 "Sozialisation und Bewältigung").',
		status: 'untestable',
		explanation:
			'Ein theoretischer Rahmen, nicht eine falsifizierbare Hypothese. Seine Produktivität zeigt sich in der Ordnung empirischer Befunde: Er erklärt, warum Männer in der Beratungspraxis in kritischen Lebenslagen auf traditionelle Muster zurückgreifen, auch wenn sie im Alltag geschlechternivelliert handeln. Wurde von Neumann/Süfke (2006) empirisch auf die klinische Praxis angewendet und als diagnostisch/interventionspraktisch tauglich befunden.',
		dependsOn: ['externalization', 'dominance-availability'],
		collapseRisk:
			'Wenn das Bewältigungsparadigma durch ein präziseres Modell ersetzt werden könnte (z.B. ein rein rollentheoretisches oder ein rein psychoanalytisches), wäre es überholt. Seine Stärke liegt in der Vermittlung zwischen diesen Ebenen — eine Stärke, die nicht direkt testbar ist, sondern sich an der theoretischen Fruchtbarkeit zeigt.',
		bookLocations: [
			{
				pages: 'Ch. 1.6, S. 52-56',
				chapter: 'Die Konzepte Habitus und Bewältigung',
				context: 'Zentrales Konzeptkapitel. Abkehr vom starren Habitusbegriff zugunsten des Bewältigungsmodells.'
			},
			{
				pages: 'Ch. 2.1, S. 82-91',
				chapter: 'Doing gender als Bewältigung',
				context: 'Kritik am "Doing Gender"-Paradigma und Einbettung in das Bewältigungskonzept.'
			}
		],
		evidenceRefs: [
			{ label: 'Böhnisch — Die Entgrenzung der Männlichkeit (2003)', authorSearch: 'Böhnisch' },
			{ label: 'Winnicott, Donald W. — Psychoanalytische Schlüsselwerke', authorSearch: 'Winnicott' },
			{ label: 'Böhnisch/Lenz/Schröer — Sozialisation und Bewältigung', authorSearch: 'Böhnisch' }
		]
	},

	// ======== Step 6 ========
	{
		id: 'bedürftigkeit',
		step: 6,
		shortLabel: 'Bedürftigkeit als zentraler Schlüsselbegriff',
		type: 'causal',
		claim:
			'Bedürftigkeit ist ein "leibseelischer Zwangszustand, in dem man sich nach etwas sehnt, das gleichzeitig verwehrt ist und das — da dieser Zustand schwer aushaltbar ist — nach Entladung, Abspaltung drängt". Der ambivalente Verwehrungszusammenhang: Männer möchten zu sich kommen, in Sorgekontexte eingebunden sein — und werden durch die Intensivierung der Erwerbsarbeit daran gehindert. Dies erklärt, warum Männer in kritischen Situationen zu abspaltendem, externalisierendem, teils gewalttätigem Verhalten greifen.',
		evidence:
			'Böhnischs Eigenprägung (erstmals 2003). Empirische Grundlage: Südtiroler Männerstudie (2012), Sächsische Männerstudie (2008), Dresdner Übergangsforschung (Arnold u. a. 2004), Neumann/Süfke (2006) aus der Männerberatung. Unterschied zum feministischen Begriff des "Angewiesenseins" (Eckart 1988): psychodynamisch spezifischer.',
		status: 'yellow',
		explanation:
			'Ein begrifflich-interpretativer Beitrag mit klinischer Plausibilität und empirischer Grundlage in eigenen Studien. Das Konzept ist aber schwer direkt quantifizierbar — es ist eher ein diagnostischer Rahmen für Beratungskontexte als eine hypothesenprüfende Kategorie. Die Südtiroler Männerstudie (2012) liefert empirische Unterstützung für Spannung zwischen beruflicher Belastung und Vaterschaftswunsch.',
		dependsOn: ['externalization', 'coping-paradigm'],
		collapseRisk:
			'Wenn Männer tatsächlich keine strukturelle Verwehrung gegenüber Sorge, Nähe und Selbstbezug erleben (sondern einfach nicht interessiert sind), wäre der Begriff theoretisch leer. Die empirische Studienlage (Männer wollen mehr Zeit mit Kindern, können aber aufgrund beruflicher Intensivierung nicht) stützt die Verwehrungsdimension.',
		bookLocations: [
			{
				pages: 'Ch. 1.4, S. 36-37',
				chapter: 'Externalisierung und Bedürftigkeit',
				context: 'Erste Einführung des Begriffs.'
			},
			{
				pages: 'Ch. 5.9, S. 276-283',
				chapter: 'Bedürftigkeit, Gewalt und Sorge',
				context: 'Vertiefte Ausarbeitung: Bedürftigkeit als leibseelischer Zwangszustand, Zusammenhang mit Gewalt und Rechtsextremismus.'
			}
		],
		evidenceRefs: [
			{ label: 'Südtiroler Männerstudie (2012)', authorSearch: 'Südtiroler' },
			{ label: 'Neumann & Süfke — Männerberatungspraxis', authorSearch: 'Neumann' },
			{ label: 'Flaake, Karin — Psychoanalyse und Geschlechterverhältnisse', authorSearch: 'Flaake' }
		]
	},

	// ======== Step 7 ========
	{
		id: 'hidden-curriculum',
		step: 7,
		shortLabel: 'Hidden gender curriculum (KiTa, Schule)',
		type: 'causal',
		claim:
			'Kindergärten und Schulen, die sich als "geschlechtsneutral" oder "koedukativ" verstehen, wirken als Orte einer verdeckten, alltäglich wirksamen, milieubildenden geschlechtsdifferenten Aneignungskultur. Die Rahmung "Kinder" verhindert die Wahrnehmung des Geschlechtlichen. Jungen werden als "unruhig" wahrgenommen, beanspruchen etwa 2/3 der Aufmerksamkeit im Unterricht, werden häufiger bestraft und beherrschen räumlich das Klassenzimmer — die scheinbare Bevorzugung ist ihre Benachteiligung, weil sie externalisierte Muster verfestigt.',
		evidence:
			'Klassische Befunde: Enders-Dragässer/Fuchs 1989, Breidenstein/Keller 1998, Faulstich-Wieland u.a. 2004, Budde u.a. 2008, Diefenbach 2012, Rohrmann 2009, 2012, Kuger u.a. 2011. Zur geschlechtlich aufgeladenen Spielkultur im Kindergarten: Blank-Mathieu 2006, Aigner/Rohrmann 2012. Zur Situation der männlichen Erzieher: Aigner/Poschesnik 2011. Böhnischs Südtiroler Studie (2012): 90% halten den Frauendominierung im Kindergartenberuf für selbstverständlich.',
		status: 'green',
		explanation:
			'Die Empirie ist stark. Die Befunde zu differentieller Aufmerksamkeitszuwendung im Klassenzimmer, zur Überrepräsentation von Jungen in Bestrafungen und zur Jungen-Raumbesetzung sind in mehreren Studien konsistent repliziert. Die Interpretation als "hidden gender curriculum" ist theoretisch, aber das zugrundeliegende Verhaltensmuster ist gut dokumentiert. Böhnisch überträgt hier die Diskussion der letzten 25 Jahre in einen theoretischen Rahmen.',
		dependsOn: ['coping-paradigm'],
		collapseRisk:
			'Würden neuere Studien zeigen, dass es keine geschlechtsdifferenten Aufmerksamkeits- und Raumverteilungsmuster gibt, wäre die Beobachtungsbasis hin. Die Befunde sind aber konsistent seit den 1980er Jahren.',
		bookLocations: [
			{
				pages: 'Ch. 4.2, S. 204-212',
				chapter: 'Der frauendominierte Kindergarten',
				context: 'Entwicklung der Jungencliquen in Kindergärten, Fehlen männlicher Erzieher.'
			},
			{
				pages: 'Ch. 4.3, S. 212-216',
				chapter: 'Die "geschlechtsneutrale" Schule',
				context: 'Hidden gender curriculum in Schulen. Jungen beherrschen das Unterrichtsgeschehen, 2/3 der Aufmerksamkeit.'
			}
		],
		evidenceRefs: [
			{ label: 'Enders-Dragässer & Fuchs — Geschlechteralltag in der Schulklasse', authorSearch: 'Enders' },
			{ label: 'Faulstich-Wieland et al. — Schule und Geschlecht', authorSearch: 'Faulstich' },
			{ label: 'Rohrmann, Tim — Männer in Kitas', authorSearch: 'Rohrmann' }
		]
	},

	// ======== Step 8 ========
	{
		id: 'mother-son-bind',
		step: 8,
		shortLabel: 'Mutter-Sohn-Bindung + hegemoniale Mütterlichkeit',
		type: 'causal',
		claim:
			'Die Mutter-Sohn-Beziehung ist in unserer Gesellschaft zwangsläufig zwiespältig: Die Mutter muss den Sohn loslassen, gleichzeitig aber den Vater aufbauen und hochhalten — das erzeugt ein "modernes Männermatriarchat im Kleinen" (Moeller 1983). "Hegemoniale Mütterlichkeit" (Ehnis 2008) als strukturelle Konstellation, nicht als Schuld der Mutter. Wo die gelungene "Triangulation" mit einem emotional verfügbaren, in Stärken UND Schwächen erfahrbaren Vater fehlt, idolisiert der Junge das Männliche und wertet das Weibliche ab.',
		evidence:
			'Moeller 1983 (Die Wahrheit beginnt zu zweit), Chodorow 1985 (Das Erbe der Mütter), Benjamin 1990 (Die Fesseln der Liebe), Dammasch 2011. Zur hegemonialen Mütterlichkeit: Ehnis 2008. Lenz/Adler 2011 zum mothering-Begriff.',
		status: 'yellow',
		explanation:
			'Stark klinisch-interpretativ, eingebettet in eine lange Tradition der feministischen Psychoanalyse (Chodorow, Benjamin, Dinnerstein). Die Behauptung, dass Männer auch als Erwachsene in Abhängigkeit von der Mutterbeziehung bleiben, ist theoretisch einflussreich, aber schwer quantitativ überprüfbar. Die strukturelle Rahmung (nicht als individuelle Schuld, sondern als gesellschaftliches Muster) ist Böhnischs vorsichtige Pointe.',
		dependsOn: ['externalization', 'coping-paradigm'],
		collapseRisk:
			'Wenn die Mutter-Sohn-Beziehung tatsächlich nicht diesen strukturellen Ambivalenzcharakter hätte (z.B. wenn Söhne engagierter Väter sich problemlos entwickelten), wäre der Mechanismus abgeschwächt. Die Empirie zur Bedeutung väterlichen Engagements (Snarey/Glueck, Pruett) stützt den komplementären Teil des Arguments.',
		bookLocations: [
			{
				pages: 'Ch. 3.1, S. 174-182',
				chapter: 'Mütter und Söhne, Mädchen und Jungen, Frauen und Männer',
				context: 'Das zentrale Kapitel zur Mutter-Sohn-Dynamik. Einführung von Moellers "Männermatriarchat im Kleinen" und Ehnis\' "hegemoniale Mütterlichkeit".'
			},
			{
				pages: 'Ch. 2.2, S. 92-100',
				chapter: 'Das Aufwachsen von Jungen und jungen Männern',
				context: 'Frühkindliche Ablösung und Suche nach männlicher Geschlechtsidentität.'
			}
		],
		evidenceRefs: [
			{ label: 'Moeller, Martin Lukas — Männermatriarchat', authorSearch: 'Moeller' },
			{ label: 'Ehnis, Patrick — Hegemoniale Mütterlichkeit', authorSearch: 'Ehnis' },
			{ label: 'Chodorow, Nancy — Das Erbe der Mütter', authorSearch: 'Chodorow' },
			{ label: 'Benjamin, Jessica — Die Fesseln der Liebe', authorSearch: 'Benjamin' }
		]
	},

	// ======== Step 9 ========
	{
		id: 'event-father',
		step: 9,
		shortLabel: 'Event-Vater / engagierte und bedürftige Väter',
		type: 'observation',
		claim:
			'Junge Väter in qualifizierten Berufen arbeiten mehr als 50h/Woche und werden am Wochenende zu "Eventvätern". Die Kinder erleben ein einseitig starkes Männerbild. Der starke Vater ist im Kern oft ein bedürftiger Vater. Die neuere Väterforschung "drückt sich um die Bedürftigkeit der Väter" — sie sieht nicht den bedürftigen Mann, sondern den Vater, der endlich seine Rolle erkannt hat. Es ist aber kein einfacher Willensakt: Die Intensivierung der Arbeit hält Männer zu einem Zeitpunkt von der Familie ab, zu dem sie für sie offen scheint.',
		evidence:
			'Südtiroler Männerstudie (2010), Sächsische Männerstudie (2008), qualitative Vater-Interviews in Ostsachsen. Durchschnittliche Erwerbsarbeitszeit (inkl. Anfahrt) >50h/Woche. Scholz 2009 als Überblick. Zerle/Krok 2009: über die Hälfte der jungen Männer arbeiten bei Eintritt der Vaterschaft MEHR als zuvor. Meuser 2012: "Mit der Geburt des ersten Kindes setzt ein Prozess der Retraditionalisierung ein."',
		status: 'green',
		explanation:
			'Die empirischen Befunde zu Vater-Arbeitszeit, Retraditionalisierung bei Geburt des ersten Kindes und Wunsch-Wirklichkeit-Diskrepanz sind gut belegt. Die Interpretation als "engagierte und bedürftige Väter" fügt einen theoretischen Rahmen hinzu, aber die empirische Grundlage ist stark.',
		dependsOn: ['zweite-moderne', 'mother-son-bind'],
		collapseRisk:
			'Würden neuere Studien zeigen, dass Väter heute tatsächlich weitgehend gleichberechtigt in Haus- und Erziehungsarbeit involviert sind, wäre die These überholt. Gille/Marbach 2004 und die deutsche Arbeitsteilungsforschung zeigen aber das Gegenteil: Frauen investieren 1,5x so viel Zeit in Kinderbetreuung wie Männer.',
		bookLocations: [
			{
				pages: 'Ch. 3.2, S. 182-197',
				chapter: 'Die engagierten und die bedürftigen Väter',
				context: 'Zentrales empirisches Kapitel mit Böhnischs eigenen Studien.'
			},
			{
				pages: 'Ch. 5.7, S. 254-260',
				chapter: 'Innerhäusliche Arbeitsteilung und Vereinbarkeit',
				context: 'Statistische Vertiefung: Vereinbarkeitsdiskurs, "adult worker model", reale Arbeitsteilung.'
			}
		],
		evidenceRefs: [
			{ label: 'Südtiroler Männerstudie (2012)', authorSearch: 'Südtiroler' },
			{ label: 'Sächsische Männerstudie (2008)', authorSearch: 'Sächsische' },
			{ label: 'Scholz, Sylka — Überblick Vaterforschung', authorSearch: 'Scholz' },
			{ label: 'Meuser, Michael — Retraditionalisierung', authorSearch: 'Meuser' }
		]
	},

	// ======== Step 10 ========
	{
		id: 'boy-cliques',
		step: 10,
		shortLabel: 'Männliche Clique und Umwegverhalten',
		type: 'observation',
		claim:
			'Jungencliquen sind nicht nur jugendkulturelle Experimentierräume, sondern Orte der Suche nach männlicher Identität. In ihnen werden Maskulinität als Gruppencode aktiviert, Idolisierung des Männlichen und Abwertung des Weiblichen eingeübt. Das "Umwegverhalten" beschreibt, wie Jungen empathische Bedürfnisse über Anmache und Dominanzgebaren "symbolisch" ausdrücken, die vom Gegenüber entschlüsselt werden müssten. Hinter der äußeren Fassade liegen Beziehungssuche, Empathie, Hilflosigkeit, Verletzlichkeit.',
		evidence:
			'Meuser 2006 (Geschlecht und Männlichkeit): Strukturlogik der Wettbewerbsspiele in Peers. Jösting 2005 (Jungen-Freundschaften). Breidenstein 2008. Zur Raumaneignung: Jungen kontrollieren Räume, Territorialverhalten. Schnack/Neutzling 1990 ("Kleine Helden in Not"). Flaake 2005, Wellgraf 2011 am Beispiel einer Hauptschule zur Schwulenfeindlichkeit. Seiffge-Krenke/Seiffge 2005 zu Konfliktverhalten.',
		status: 'yellow',
		explanation:
			'Qualitativ gut dokumentierte Befunde aus Ethnographien und Schulstudien. Das "Umwegverhalten" ist eher ein interpretatives Konstrukt — klinisch plausibel, aber schwer direkt nachweisbar. Die Strukturlogik der männlichen Peer-Gruppe (Meuser) ist in der deutschen Männerforschung breit akzeptiert.',
		dependsOn: ['hidden-curriculum', 'externalization'],
		collapseRisk:
			'Wenn männliche Peer-Gruppen nicht systematisch als Ort der Maskulinitätsaktivierung fungieren würden (sondern z.B. ebenso oft als Raum der Emanzipation), wäre der Mechanismus schwächer. Die ethnographische Evidenz ist aber konsistent.',
		bookLocations: [
			{
				pages: 'Ch. 2.9, S. 135-143',
				chapter: 'Die männliche Clique',
				context: 'Zentrales Kapitel zur Peer-Dynamik. Umwegverhalten, Raumkontrolle, Strukturlogik der Wettbewerbsspiele.'
			},
			{
				pages: 'Ch. 2.5, S. 114-116',
				chapter: 'Bewältigungsfallen',
				context: 'Drei kritische Phasen im Aufwachsen, in denen Maskulinität besonders aktiviert wird.'
			}
		],
		evidenceRefs: [
			{ label: 'Meuser, Michael — Strukturübungen', authorSearch: 'Meuser' },
			{ label: 'Schnack & Neutzling — Kleine Helden in Not', authorSearch: 'Schnack' },
			{ label: 'Wellgraf, Stefan — Hauptschule Ethnographie', authorSearch: 'Wellgraf' }
		]
	},

	// ======== Step 11 ========
	{
		id: 'ghost-roleless-man',
		step: 11,
		shortLabel: '"Gespenst des rollenlosen Mannes"',
		type: 'consequence',
		claim:
			'Die Erosion des Normalarbeitsverhältnisses bedroht den zentralen Anker der männlichen Identität. Das "Gespenst des rollenlosen Mannes" geht in der Männerwelt um — und mit ihm der Drang, sich "wenigstens als maskulin zu inszenieren", wenn die patriarchale Dividende nicht mehr arbeitsgesellschaftlich abgesichert ist. Männer, die in prekären Arbeitsverhältnissen ihr Auskommen finden, sind am meisten gefährdet, auf naturalistische Konzepte von Maskulinität zurückzugreifen.',
		evidence:
			'Böhnischs Formulierung, gestützt auf Studien zur Feminisierung der Erwerbsarbeit, Kreher 2007 zu jungen Männern in prekären Ausbildungs-/Berufssituationen, Dörre 2007, Bründel/Hurrelmann 1999 zu arbeitslosen Vätern, "Erster Deutscher Männergesundheitsbericht" 2011. Prozentuale Veränderung bei männlichen Erwerbsbeteiligungen in Deutschland seit den 1980er Jahren.',
		status: 'yellow',
		explanation:
			'Die strukturellen Veränderungen der Arbeitsgesellschaft sind empirisch solide dokumentiert. Die Interpretation als "Gespenst des rollenlosen Mannes" ist metaphorisch und interpretativ. Der Zusammenhang zwischen prekärer Arbeit und Rückgriff auf aggressive Maskulinität ist qualitativ gut belegt (Kreher, Dörre), quantitativ weniger systematisch.',
		dependsOn: ['zweite-moderne', 'dominance-availability'],
		collapseRisk:
			'Wenn prekäre männliche Arbeitnehmer nicht systematisch zu traditionell-maskulinen Bewältigungsmustern greifen würden, wäre die These schwächer. Die Studien zu Rechtsextremismus, Arbeitslosen-Studien und Männerberatung stützen den Zusammenhang.',
		bookLocations: [
			{
				pages: 'Ch. 5.3, S. 230-232',
				chapter: 'Muster männlicher Lebensbewältigung',
				context: 'Einführung des "Gespensts des rollenlosen Mannes" als diagnostische Formel.'
			},
			{
				pages: 'Einführung, S. 15-16',
				chapter: 'Einführung',
				context: 'Erste Andeutung im Rahmen der Diagnose der Erosion des Normalarbeitsverhältnisses.'
			}
		],
		evidenceRefs: [
			{ label: 'Kreher, Thomas — Junge Männer prekär', authorSearch: 'Kreher' },
			{ label: 'Bründel & Hurrelmann — Arbeitslose Väter', authorSearch: 'Bründel' },
			{ label: 'Erster Deutscher Männergesundheitsbericht 2011', authorSearch: 'Männergesundheitsbericht' }
		]
	},

	// ======== Step 12 ========
	{
		id: 'gewalt-als-hilflosigkeit',
		step: 12,
		shortLabel: 'Gewalt als abgespaltene Hilflosigkeit',
		type: 'causal',
		claim:
			'"Männliche Gewalt in ihren offenen Formen ist immer ein Kampf gegen die eigene Hilflosigkeit, ein Kampf gegen sich selbst" (Gruen 1992). Die eigene innere Hilflosigkeit wird auf Schwächere projiziert und dort bekämpft — Frauen, Behinderte, Ausländer. Das Konkurrenzsystem bietet legale, die offene Gewalt die illegalen Wege. Gewalt aus Liebe: Männer, die in Familien schlagen, sind oft fassungslos, weil sie "nur etwas geholt" haben, worauf sie "Anspruch" zu haben meinen. Rechtsextreme Gruppen bieten jungen Männern mit rigider Eindeutigkeit und Unterordnungszwang Halt für ihre Hilflosigkeit.',
		evidence:
			'Gruen 1992 (Der Verrat am Selbst). BMFSFJ 2004 "Gewalt gegen Männer" Pilotstudie. Volz/Zulehner 2009 (repräsentative deutsche Männerstudie). Döge 2012. Zu rechtsextremen Gruppen: Birsl 2011, Goldhagen 2004. Zu "Gewalt aus Liebe": Gräßel 2003.',
		status: 'yellow',
		explanation:
			'Die interpretative These (Gewalt als abgespaltene Hilflosigkeit) hat klinische und beratungspraktische Plausibilität und wird von Gruens psychoanalytischer Tradition gestützt. Sie kann die hohe Täterquote bei Männern mit Identitätsproblemen erklären. Quantitative Befunde bestätigen den Zusammenhang zwischen männlicher Unzufriedenheit und häuslicher Gewalt, aber die tiefere psychodynamische Deutung ist interpretativ.',
		dependsOn: ['externalization', 'bedürftigkeit', 'ghost-roleless-man'],
		collapseRisk:
			'Die Volz/Zulehner-Studie stützt die Korrelation zwischen männlicher Unzufriedenheit und physischer Gewalt. Die psychodynamische Deutung ist interpretativ und kann durch alternative Erklärungen (rein situative, soziologische) ergänzt werden.',
		bookLocations: [
			{
				pages: 'Ch. 5.9, S. 276-283',
				chapter: 'Bedürftigkeit, Gewalt und Sorge',
				context: 'Das zentrale Gewaltkapitel. "Gewalt aus Liebe"-Paradoxie, rechte Männer als Fallbeispiel.'
			}
		],
		evidenceRefs: [
			{ label: 'Gruen, Arno — Der Verrat am Selbst', authorSearch: 'Gruen' },
			{ label: 'Volz & Zulehner — Repräsentative Männerstudie', authorSearch: 'Volz' },
			{ label: 'Goldhagen, Daniel — Antisemitismus globalisiert', authorSearch: 'Goldhagen' }
		]
	},

	// ======== Step 13 ========
	{
		id: 'abstract-worker',
		step: 13,
		shortLabel: 'Abstract worker als neuer Sozialisationstyp',
		type: 'consequence',
		claim:
			'Die Arbeitsgesellschaft der Zweiten Moderne hat eine Subjektivierung der Arbeit entwickelt, die den Menschen nicht nur in Zeit und Raum, sondern mit seiner ganzen Person in den Arbeitsprozess hineinzieht. Der "abstract worker" (Meuser 2012) geht emotional in der Arbeit auf, ordnet alle anderen Lebensbereiche ihr unter und ist prinzipiell immer verfügbar. Der Mann in dieser Rolle hat keinen Zugang zu Sorge und Innehalten — es sei denn parasozial über Konsumangebote, die dem "Manager-Vater im Taxi" das Bild der Sorge zurückspielen.',
		evidence:
			'Meuser 2012, Boltanski/Chiapello 2006 zum "neuen Geist des Kapitalismus". Empirische Befunde zu Arbeitsverdichtung, Burnout, Projektarbeit. Boes/Kämpf/Gül 2012 zu Druck, Belastungen und Burnout in der IT-Industrie. Luhmann 1995 zur Exklusion als "aufs Körperliche reduzierte Existenz".',
		status: 'yellow',
		explanation:
			'Die strukturellen Veränderungen der Arbeitsorganisation (Deregulierung, Projektarbeit, Subjektivierung) sind gut dokumentiert. Die Interpretation als "abstract worker" ist ein theoretisches Konstrukt, das Meuser und andere populär gemacht haben. Die parasoziale Kompensation durch Werbung ist ein interessanter Zusatz, aber eher anekdotisch illustriert.',
		dependsOn: ['externalization', 'zweite-moderne'],
		collapseRisk:
			'Wenn sich zeigen sollte, dass die Subjektivierung der Arbeit Männer nicht systematisch davon abhält, in Sorge- und Familienkontexte einzutreten, wäre die These geschwächt. Die Arbeitsforschung stützt aber die zentrale These.',
		bookLocations: [
			{
				pages: 'Ch. 5.4, S. 238-245',
				chapter: 'Der neue Arbeitstyp',
				context: 'Entwicklung des abstract worker-Konzepts. Subjektivierung, Projektarbeit, biografische Unsicherheit.'
			},
			{
				pages: 'Ch. 1.10, S. 71-75',
				chapter: 'Sozialisationsweise und Sozialisationsregime',
				context: 'Theoretische Einführung des abstract worker als neue Leitfigur der Sozialisationsweise.'
			}
		],
		evidenceRefs: [
			{ label: 'Meuser, Michael — Abstract Worker', authorSearch: 'Meuser' },
			{ label: 'Boltanski & Chiapello — Neuer Geist des Kapitalismus', authorSearch: 'Boltanski' },
			{ label: 'Boes/Kämpf/Gül — IT-Burnout', authorSearch: 'Boes' }
		]
	},

	// ======== Step 14 ========
	{
		id: 'balanced-man-sein',
		step: 14,
		shortLabel: 'Balanciertes Mann-Sein',
		type: 'solution',
		claim:
			'Das normative Ziel: nicht der "neue Mann" als Utopie, nicht der Wild Man als Regression, sondern das "balancierte Mann-Sein" als biografisches Projekt, in dem die Schwächen und Stärken gleichermaßen aufgehoben und in ein Verhältnis zueinander gebracht sind. Es verlangt Selbstbezug und Selbstsorge (in Foucaults Sinn: gesellschaftliche Praxis, nicht Einsamkeit), die "erweiterte Bewältigung" mit gegenseitiger Anerkennung, und pädagogische Räume, in denen Jungen und Männer zu sich kommen und ohne Angst vor Gesichtsverlust Schwächen zeigen können. "Es gibt nicht den einfachen Weg zur alternativen Männlichkeit, aber den weiterhin steinigen zum balancierenden Mann-Sein."',
		evidence:
			'Eigene Formulierung Böhnischs, in Anlehnung an Neubauer/Winter 2002, Foucault 1987 ("Die Sorge um sich"), Winter 2012 (Gastbeitrag 2.12/2.13). Methodische Orientierung an der Sozialpädagogik und Männerberatung. Kooperiert mit Winter (Reinhard) als Praxispartner.',
		status: 'untestable',
		explanation:
			'Eine normative Prescription, keine empirische Hypothese. Ihr Wert liegt darin, wie produktiv sie die pädagogische und beratungspraktische Arbeit orientiert. Cannot be falsified — evaluiert durch die praktische Anwendbarkeit. Böhnisch selbst betont die Schwierigkeit und Unabgeschlossenheit des Projekts.',
		dependsOn: ['coping-paradigm', 'bedürftigkeit', 'gewalt-als-hilflosigkeit', 'abstract-worker'],
		collapseRisk:
			'Wenn das balancierte Mann-Sein tatsächlich nur ein diskursiver Wunsch bliebe ohne praxistaugliche Umsetzung, bliebe es abstrakt. Die Männerberatung (Neumann/Süfke) und die Jungenarbeit (Sturzenhecker/Winter, Brandes) haben Modelle entwickelt, die das Konzept operationalisieren.',
		bookLocations: [
			{
				pages: 'Ch. 2.13, S. 170-173',
				chapter: 'Der sozialisationstheoretische Gehalt des Modells Balanciertes Junge- und Mann-Sein',
				context: 'Zentrales Modellkapitel mit Gastbeitrag Reinhard Winter.'
			},
			{
				pages: 'Ch. 5.13, S. 310-315',
				chapter: 'Männlichkeiten in der Zukunftsperspektive',
				context: 'Abschluss des Buches: "Es gibt nicht den einfachen Weg..." Der steinige Weg zum balancierenden Mann-Sein.'
			}
		],
		evidenceRefs: [
			{ label: 'Winter, Reinhard — Jungenarbeit', authorSearch: 'Winter' },
			{ label: 'Neubauer/Winter — Balanciertes Mann-Sein', authorSearch: 'Neubauer' },
			{ label: 'Foucault, Michel — Die Sorge um sich', authorSearch: 'Foucault' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'balanced-man-sein')!;
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
		'Böhnischs Argumentationskette ist für diese Bibliothek typisch akademisch-soziologisch. Von 14 Gliedern sind 1 grün (hidden gender curriculum, dessen empirische Befunde konsistent repliziert sind, sowie event-father, dessen Arbeitszeitstudien solide sind), 9 gelb (die meisten zentralen interpretativ-theoretischen Claims: Zweite Moderne, Anti-Essentialismus, Externalisierung, Bedürftigkeit, Mutter-Sohn-Bindung, Jungencliquen, Gespenst des rollenlosen Mannes, Gewalt-als-Hilflosigkeit, abstract worker) und 4 untestbar als theoretische Rahmen (Dominanz-Verfügbarkeits-Dialektik, Bewältigungsparadigma, balanciertes Mann-Sein). Keine roten Glieder. ' +
		'Die empirische Grundlage ist vielfältig: Böhnischs eigene quantitative Südtiroler Männerstudie (2012), die Sächsische Männerstudie (2008), die Dresdner Übergangsforschung, sowie die breite deutschsprachige Männerforschungsliteratur (Meuser, Brandes, Scholz, Flaake, Dammasch). Für die zentralen theoretischen Kernbehauptungen (Dominanz-Verfügbarkeits-Dialektik, Bedürftigkeit, balanciertes Mann-Sein) gibt es klinische/beratungspraktische Evidenz (Neumann/Süfke 2006), aber keine kontrollierten Studien. ' +
		'Die methodologische Stärke liegt im integrativen Zugriff: Böhnisch verbindet soziologische Strukturanalyse (Connell, Bourdieu, Beck) mit Tiefenpsychologie (Gruen, Chodorow, Winnicott) und Sozialpädagogik — ein Brückenschlag, den weder rein strukturelle noch rein klinische Ansätze leisten. Die theoretischen Rahmen sind produktiv in der Beratungspraxis angewendet worden (Neumann/Süfke) und haben die deutsche Männerforschung nachhaltig geprägt. ' +
		'Die methodologische Schwäche: Viele zentrale Begriffe ("Bedürftigkeit", "Externalisierung", "balanciertes Mann-Sein") sind schwer direkt quantifizierbar. Sie funktionieren als diagnostische Rahmen in Beratungs- und pädagogischen Kontexten, sind aber keine hypothesenprüfenden Kategorien. Wer empirische Gewissheit sucht, wird enttäuscht. Wer einen theoretisch integrativen Rahmen sucht, der die empirischen Einzelbefunde organisiert, findet ihn hier. ' +
		'Im Vergleich zur Bibliothek: Böhnisch ist die DEUTSCHSPRACHIGE akademische Tradition, auf der Dittmann (Jungs von heute) explizit aufbaut. Er rezipiert Connell direkt, ergänzt aber das Hegemonialitätskonzept um die Verfügbarkeitsdimension — ein wesentlicher Eigenbeitrag. Er teilt mit Pollack (Real Boys) den klinischen Blick und die Betonung von father hunger und Maske, steht aber stärker in der psychoanalytisch-sozialpädagogischen Tradition (Gruen, Chodorow) statt in der Stone-Center-Relationalpsychologie. Mit hooks teilt er die Sorge um emotionale Verkümmerung, bleibt aber im strukturanalytischen Diagnose-Modus statt im Liebesethik-Horizont. Böhnisch ist gegenüber Sax/Gurian/Benenson explizit anti-essentialistisch, verteidigt aber gegen radikalen Konstruktivismus die leibseelische Dimension. ' +
		'Die Kette ist stark an den Stellen, an denen Böhnisch empirische Befunde der deutschen Männerforschung integriert (hidden gender curriculum, event-father, Jungencliquen), und interpretativ/theoretisch-originell an den Stellen, an denen er Connells Framework erweitert (Dominanz-Verfügbarkeit, Bedürftigkeit, balanciertes Mann-Sein). Ihre distinctive contribution liegt im methodologischen Integrationsprogramm — die Brücke zwischen soziologischer Strukturanalyse und tiefenpsychologischer Sozialisationsforschung.'
};
