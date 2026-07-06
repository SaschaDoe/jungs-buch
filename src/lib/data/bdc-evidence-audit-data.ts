// bdc-evidence-audit-data.ts
// Cross-referencing claims in Urwin's "Boys Don't Cry" with evidentiary character

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
		claim: 'Britische Selbstmordrate bei Männern ist etwa 3× so hoch wie bei Frauen; 78% aller UK-Suizide 2013 waren männlich; Selbstmord ist die Haupttodesursache britischer Männer im Alter von 20-49 Jahren.',
		source: 'UK Office for National Statistics; Public Health England; Samaritans-Bericht 2012 „Men, Suicide and Society”',
		pages: 'Einführung, S. 14-16; Kap. Die Zukunft, S. 58-65',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Offizielle Statistik, international konsistent',
		detail:
			'Die Suizidraten sind in offiziellen Statistiken robust dokumentiert. Die Ratio ist in den meisten westlichen Ländern ähnlich (3-4:1). Der Samaritans-Bericht 2012 bezieht sich auf diese Zahlen und liefert auch die sozial-normative Interpretation, die Urwin übernimmt.'
	},
	{
		claim: 'Männer gehen nur halb so oft zum Hausarzt wie Frauen. Selbst wenn man den Bereich der Reproduktionsmedizin einrechnet.',
		source: 'UK NHS-Statistiken; Men\'s Health Forum',
		pages: 'Einführung, S. 14-15',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Vielfach repliziert in der Gesundheitsverhaltens-Forschung',
		detail:
			'Die geringere Konsultationsfrequenz von Männern ist international robust dokumentiert (Courtenay 2000 "Constructions of masculinity and their influence on men\'s well-being" — der klassische Meta-Review; Addis & Mahalik 2003 "Men, masculinity, and the contexts of help seeking"). Urwin gibt keine Einzelreferenz, aber die Zahl ist Konsens.'
	},
	{
		claim: 'Im Vereinigten Königreich ist die Zahl frühzeitiger Todesfälle (unter 50 Jahre) bei Männern anderthalb Mal höher als bei Frauen, hauptsächlich aufgrund von Herz-Kreislauf-Erkrankungen, Unfällen, Selbstmorden und Krebs.',
		source: 'UK ONS; Men\'s Health Forum',
		pages: 'Einführung, S. 14',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Offizielle Mortalitätsstatistik',
		detail:
			'Die männliche Übersterblichkeit im mittleren Erwachsenenalter ist in allen westlichen Ländern dokumentiert. Die Kombination aus Herz-Kreislauf, Unfall, Suizid und verzögert-diagnostiziertem Krebs spricht gegen eine rein biologische Erklärung.'
	},
	{
		claim: 'Hautkrebs: Männer und Frauen erkranken etwa gleich häufig, aber doppelt so viele Männer sterben daran — weil Männer sich erst damit befassen, wenn es zu spät ist.',
		source: 'Cancer Research UK; UK Melanoma Statistics',
		pages: 'Einführung, S. 14',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Onkologische Standarddaten',
		detail:
			'Die Diskrepanz zwischen Inzidenz und Mortalität bei Hautkrebs ist in UK-Krebsstatistiken dokumentiert und illustriert exakt das Help-Seeking-Muster. Eines der stärksten Einzelargumente Urwins für die Letalität verzögerter Hilfesuche.'
	},
	{
		claim: 'Im Vereinigten Königreich ist die Zahl der Männer, die hinter dem Steuer getötet oder schwer verletzt werden, Jahr für Jahr durchschnittlich doppelt so hoch wie die der Frauen.',
		source: 'UK Department for Transport; THINK! Road Safety',
		pages: 'Kap. Fight Club, S. 70-72',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Verkehrsstatistik, international konsistent',
		detail:
			'Die Gender-Diskrepanz bei Verkehrstoten ist universal und persistiert auch nach Kontrolle für Fahrleistung. Urwins Interpretation als „Risikokompensation für männliche Unsicherheit” ist die klinische Standardinterpretation.'
	},
	{
		claim: 'Australische NSW-Verkehrssicherheitskampagne („Speeding: No One Thinks Big Of You” mit Kleinfinger-Geste) senkte im ersten Jahr die Verkehrstote und 75% der jungen Fahrer änderten ihr Verhalten — weil sie „mehr Angst hatten, uncool zu gelten, als zu sterben”.',
		source: 'Clemenger BBDO / Ogilvy Evaluation; zitiert in Guardian-Artikel zu Ogilvy',
		pages: 'Kap. Fight Club, S. 74-75',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Kampagnen-Evaluierung mit Zeitreihen-Daten',
		detail:
			'Die NSW-Kampagne ist ein Paradebeispiel erfolgreicher verhaltensänderungs-basierter Intervention. Die Wirksamkeitsdaten wurden öffentlich dokumentiert und in der Werbe-Branche breit zitiert. Ein seltenes Beispiel, wo ein kultureller Unsicherheits-Hebel empirisch messbar angegriffen wurde.'
	},
	{
		claim: 'Männliche Essstörungen und Diagnosen haben seit 2000 um 27% zugenommen.',
		source: 'NHS/Beat UK eating disorder statistics',
		pages: 'Kap. Der ideale Mann, S. 140-142',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'NHS-Registerdaten',
		detail:
			'Die Zunahme männlicher Essstörungen in der UK-NHS-Statistik ist dokumentiert. Ob es sich um eine echte Inzidenzsteigerung oder um verbesserte Diagnostik handelt, ist offen — aber die Zahl selbst ist robust.'
	},

	// ============ YELLOW ============
	{
		claim: 'Biologisch-evolutionäre Erklärungen männlichen Verhaltens sind faule Rechtfertigungen, weil körperliche Evolution extrem langsam ist, kulturelle Evolution aber schnell — und wir seit 10.000 Jahren nicht mehr als Jäger und Sammler leben.',
		source: 'Urwins rhetorisches Argument; Blinddarm-Analogie; kulturhistorische Illustration',
		pages: 'Kap. Männerdämmerung, S. 30-40',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Konvergent mit Anti-Biologismus-Tradition, aber ohne systematische Evidenz',
		detail:
			'Die Grundposition ist konvergent mit der kritischen Neurowissenschaft (Eliot, Fine, Hyde). Urwin bringt sie rhetorisch-journalistisch ohne wissenschaftliche Primärquellen. Die breit gestützte Literatur (Gender Similarities Hypothesis, Hyde 2005) macht die Position plausibel.'
	},
	{
		claim: 'Toxische Männlichkeit = übertriebenes Verhalten, das darauf abzielt, noch männlicher zu erscheinen, motiviert durch Unsicherheit.',
		source: 'Urwins eigene Definition, basierend auf populärer Verwendung des Begriffs; ursprünglich aus mythopoetischer Männerbewegung (Shepherd Bliss, 1980er)',
		pages: 'Durchgängig; explizite Definition Kap. Mann & Frau, S. 123-125',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Popularisiert, analytisch umstritten',
		detail:
			'Der Begriff ist populär und intuitiv, aber akademisch umstritten. Kritiker (Harrington 2021 „The Rise of Victimhood Culture”) argumentieren, dass er Männlichkeit als solche pathologisiert. Urwins Definition grenzt „toxisch” von „positiv” ab, adressiert die Kritik aber nur teilweise. Als Heuristik funktional, als analytische Kategorie schwach operationalisiert.'
	},
	{
		claim: 'Aktive vs. passive toxische Männlichkeit als analytische Unterscheidung: passive = Schweigen, Hilfeverweigerung, Alkoholismus; aktive = Gewalt, Risikobereitschaft, Lad-Kultur. Beide Varianten sind tödlich, aus verschiedenen Gründen.',
		source: 'Urwins eigene analytische Unterscheidung, basierend auf persönlicher Beobachtung und UK-Statistiken',
		pages: 'Kap. Fight Club, S. 67-70',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Originelle Unterscheidung, klinisch plausibel, nicht empirisch isoliert',
		detail:
			'Die Unterscheidung ist Urwins eigene Prägung und analytisch produktiv. Sie erklärt, warum sein Vater Richard (passiv, nicht-macho, Radlerhosen) genauso ein Opfer toxischer Männlichkeit war wie ein Fußballhooligan. Eine direkte empirische Validierung der Typologie fehlt, aber sie ist konsistent mit der klinischen Literatur zu männlicher Alexithymie + männlicher Gewalt als zwei verschiedenen Ausprägungen derselben Sozialisation.'
	},
	{
		claim: 'Männer haben ökonomisch keinen Anreiz, traditionelle Geschlechterrollen zu verändern, weil sie davon profitieren. Louis CK: „Ich find\'s toll, weiß zu sein” als Analogie.',
		source: 'Louis CK Stand-up; UK gender pay gap Statistik; Mutterschaftsurlaub-Vergleich',
		pages: 'Kap. Männerdämmerung, S. 40-48',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Konvergent mit Connells "patriarchal dividend", journalistisch gerahmt',
		detail:
			'Die Grundposition ist in der feministischen Soziologie Standard (Connells "patriarchal dividend" ist das akademische Pendant). Urwins Rahmung ist populär-illustrativ und nicht quantitativ entwickelt. Die Ungleichheitsdaten selbst sind robust.'
	},
	{
		claim: '„Jungen weinen nicht” und funktional äquivalente kulturelle Skripte verankern emotionale Verdrängung in der frühen Kindheit; die Kausalkette führt zu späterer Gefühlsblindheit.',
		source: 'Samaritans-Bericht 2012; konvergent mit Pollack "Boy Code", Real "covert depression", Süfke "mangelnde Spiegelung", Böhnisch "hidden curriculum"',
		pages: 'Kap. Die Zukunft, S. 53-60',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Klinisch breit konvergent, kausal aber schwer isoliert',
		detail:
			'Die Beobachtung ist von mehreren klinischen Traditionen übereinstimmend dokumentiert. Die Kausalkette „früher Spruch → spätere Alexithymie” ist nicht direkt experimentell getestet, aber die korrelative Evidenz (Normative Male Alexithymia Scale, Levant u.a.) ist robust.'
	},
	{
		claim: 'Der Zerfall der britischen Arbeiterklasse in den 1980ern (Thatcherismus, Bergbau-Schließungen) zerstörte die Versorger-Männlichkeit und öffnete den Raum für Konsum-Männlichkeit; 1994 prägte Mark Simpson den Begriff „metrosexuell”.',
		source: 'Mark Simpson — Independent 1994; historische UK-Arbeitsmarktdaten; American Psycho / Fight Club als popkulturelle Begleit-Diagnosen',
		pages: 'Kap. Der ideale Mann, S. 126-140',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Historisch plausibel, ohne systematische Sozialgeschichtsreferenz',
		detail:
			'Die Grundthese (Zerfall der Industriearbeit → Krise der Arbeiterklassen-Männlichkeit → neue Konsum-Männlichkeit) ist in der britischen Soziologie breit diskutiert (Paul Gilroy, Beverley Skeggs). Urwin bringt sie journalistisch ohne akademische Referenzen, aber die Grundlinie ist Konsens.'
	},
	{
		claim: 'Häusliche Gewalt steigt in wirtschaftlichen Krisen, weil Männer, deren Männlichkeit an Arbeit/Einkommen geknüpft ist, sich „entmannt” fühlen und zur Gewalt greifen.',
		source: 'UK-Statistiken zu häuslicher Gewalt in Rezessionsphasen; Urwins Interpretation',
		pages: 'Kap. Mann & Frau, S. 145-150',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Korrelation robust, Kausalinterpretation plausibel',
		detail:
			'Die Korrelation zwischen Wirtschaftskrisen und häuslicher Gewalt ist statistisch dokumentiert. Die psychologische Interpretation (Entmannungs-Kompensation) ist klinisch plausibel und konvergent mit Böhnischs "Gewalt als Hilflosigkeit". Eine direkte experimentelle Isolierung des Mechanismus ist methodisch schwierig.'
	},
	{
		claim: 'Homophobes Verhalten beginnt oft nicht als Hass auf Homosexuelle, sondern als Strafe für Geschlechts-Nonkonformität. Jungen werden als „schwul” gehänselt, lange bevor sie eine Vorstellung von Sexualität haben.',
		source: 'Urwins Beobachtung; persönliche Schulerfahrungen; konvergent mit Pascoe "Dude, You\'re a Fag" (2007)',
		pages: 'Kap. Männlichkeit jenseits, S. 155-165',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Konvergent mit ethnographischer Forschung',
		detail:
			'Die Beobachtung ist in C. J. Pascoes klassischer Studie „Dude, You\'re a Fag. Masculinity and Sexuality in High School” (2007) systematisch dokumentiert. Urwin zitiert sie nicht, erreicht aber dieselbe Diagnose.'
	},
	{
		claim: 'Inter-generationales Trauma: WW2-Veteran-Großvater mit PTSD und Alkoholismus → emotional abwesender alkoholischer Vater → depressiver, selbstverletzender Sohn.',
		source: 'Urwins Autobiographie; allgemeine Trauma-Transmissions-Literatur',
		pages: 'Einführung, S. 14-18; Kap. Mann & Frau',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Autobiographisch, nicht verallgemeinerbar',
		detail:
			'Die inter-generationale Trauma-Hypothese ist in der Klinik breit akzeptiert (Yael Danieli 1998 „International Handbook of Multigenerational Legacies of Trauma”). Der einzelne Fall Urwin-Familie ist illustrativ, eine empirische Verallgemeinerung würde systematische Studien zu WW2-Veteranen und Nachkommen erfordern.'
	},
	{
		claim: 'Vergewaltigungskultur ist das Endpunkt-Symptom: männliche Berechtigung zum Sex als Beweis der Männlichkeit, fehlende Konsens-Bildung, Porno-basierte sexuelle Sozialisation. Elliot Rodger (Isla Vista 2014) als Extremfall.',
		source: 'Elliot-Rodger-Manifest; Emily-Reynolds-Interview; Martin-Daubney-Guardian-Artikel',
		pages: 'Kap. Ausrasten, S. 180-210',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Breit etabliert als Konzept, kausal-komplex',
		detail:
			'„Rape culture” als Analyserahmen ist seit Buchwald/Fletcher/Roth (1993) etabliert und inzwischen in der kriminologischen und soziologischen Literatur Standard. Die Verbindung zur incel/MRA-Kultur ist in der neueren Forschung dokumentiert (Ging 2019, Manne 2020). Urwins Framing ist plausibel, aber eine exakte Isolierung einzelner Kausalstränge ist methodisch schwierig.'
	},
	{
		claim: 'Popkultur (Hollywood-Kriegsfilme, Top Gear, Fight Club, Ego-Shooter-Spiele, Lynx-Werbung) ist ein zentraler Sozialisationskanal für toxische Männlichkeit; Lad-Kultur wird medial reproduziert.',
		source: 'Interviews (Josh Huddleston zu Kriegsfilmen, Stewart Lee zu Top Gear); Urwins Kulturkritik',
		pages: 'Kap. Fight Club, S. 76-90; Kap. Mann am Boden',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Kulturkritisch plausibel, empirisch nicht quantifiziert',
		detail:
			'Die kritische Männerforschung (Kimmel, Messner, Katz) arbeitet seit Jahrzehnten an der medialen Reproduktion toxischer Männlichkeitsbilder. Urwins Analyse ist konvergent, aber ohne systematische empirische Operationalisierung der Medienwirkung.'
	},

	// ============ UNTESTABLE ============
	{
		claim: '„Das Patriarchat schadet auch den Männern” als strategische Rahmung für die Rekrutierung männlicher Verbündeter.',
		source: 'Urwin; konvergent mit hooks "The Will to Change", Kimmel "Guyland", Real "How Can I Get Through to You"',
		pages: 'Kap. Wir müssen reden, S. 215-225',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Strategische Rahmung, keine empirische Hypothese',
		detail:
			'Die Formel ist strategisch und nicht falsifizierbar. Ihre Wirksamkeit als Rekrutierungs-Argument ist in der feministischen Männer-Beteiligungsforschung diskutiert (Flood 2019 „Engaging Men and Boys in Violence Prevention”) — dort wird sie als nützlich bewertet, aber auch als Gefahr, die zentralen feministischen Analyse-Ebenen zu verschieben.'
	},
	{
		claim: 'Pragmatische Kompromisse: Samariter- und CALM/Lynx-Kampagnen, die traditionelle männliche Rollenbilder als Vehikel nutzen, sind kurzfristig nötig, langfristig problematisch — besser als gar nichts zu tun.',
		source: 'Urwins strategische Abwägung; Analyse der UK-Männer-Gesundheits-Kampagnen',
		pages: 'Kap. Wir müssen reden, S. 230-238',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Strategische Empfehlung',
		detail:
			'Eine inkrementelle vs. transformationelle Strategie-Debatte. Die Wirksamkeit der einzelnen Kampagnen (CALM, Samariter) ist dokumentiert. Ob sie langfristig Reform-Dynamik bremsen oder beschleunigen, ist offen. Urwins Position ist pragmatisch vertretbar.'
	},
	{
		claim: 'Drei Handlungsebenen zur Männlichkeitsreform: (1) an sich selbst arbeiten, (2) andere Männer erreichen, (3) die nächste Generation erziehen.',
		source: 'Urwins zusammenfassendes Handlungsprogramm; konvergent mit feministischer Männer-Organisations-Praxis (NOMAS, White Ribbon, Men Engage)',
		pages: 'Kap. Wir müssen reden, S. 225-238',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Normative Handlungsanleitung',
		detail:
			'Eine strategische Empfehlung, keine testbare Hypothese. In der Praxis der feministischen Männer-Organisierung etabliert. Wirksamkeit ist in RCT-Form nicht geprüft, aber der Ansatz ist breit akzeptiert.'
	},
	{
		claim: 'Feminismus als Verbündeter: Männer müssen lernen, „was Frauen können”, weil Frauen die emotionale Reife kultiviert haben, die Männer noch nachholen müssen.',
		source: 'Urwins normativer Schluss; konvergent mit hooks',
		pages: 'Kap. Wir müssen reden, S. 238-240',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Normative Empfehlung mit geschlechter-politischer Pointierung',
		detail:
			'Eine explizite Absage an die MRA-Position. Normativ und strategisch, nicht empirisch. Die Grundannahme (Frauen haben emotionale Kompetenzen, die auch lernbar sind) ist in der Psychotherapie-Forschung gestützt (emotionale Intelligenz als lernbare Fähigkeit, vgl. Salovey & Mayer).'
	},
	{
		claim: 'Militär als Institution kann sowohl toxische Männlichkeit produzieren (USMC-Kultur) als auch — bei strikter Anti-Diskriminierungs-Politik — progressiv reformierend wirken (RAF und Christina Bentleys Coming-out).',
		source: 'Interviews Josh Huddleston (USMC) und Christina Bentley (RAF); DADT-Geschichte; Vergleich USA/UK/Israel',
		pages: 'Kap. Mann am Boden, S. 96-120',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Qualitative Einzelfälle, strategische Pointierung',
		detail:
			'Eine wichtige Nuancierung gegen den „betonlinken” Reflex, das Militär pauschal zu verdammen. Die Interviews sind qualitativ reichhaltig, aber nicht verallgemeinerbar. Der Kontrast UK/USA/Israel vs. historisches US-Trans-Verbot illustriert die politische Gestaltbarkeit institutioneller Männlichkeit.'
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
		'Urwins Boys Don\'t Cry ist ein journalistisches, kein akademisches Buch, und seine Evidenzqualität entspricht dieser Gattung. Die Grünen stützen die zentralen empirischen Ankerpunkte: UK-Suizidrate, halbe Arztbesuchsfrequenz, männliche Übersterblichkeit unter 50, Hautkrebs-Mortalitätsdiskrepanz, doppelte Verkehrstoten-Rate, NSW-Kampagnen-Wirksamkeit, Anstieg männlicher Essstörungen. Das sind robuste, offizielle Statistiken. Die Gelben sind die interpretativen und theoretischen Glieder — Anti-Biologismus, „toxische Männlichkeit” als Rahmen, aktiv/passiv-Unterscheidung, „Jungen weinen nicht” als Kausalbegriff, Thatcherismus-Konsum-Männlichkeit-These, häusliche Gewalt in Krisen, Homophobie als Geschlechts-Nonkonformitäts-Polizei, inter-generationales Trauma, Vergewaltigungskultur — alle klinisch/soziologisch konvergent plausibel, aber primär journalistisch und ohne systematische akademische Quellen. Die Untestbaren sind die strategischen Empfehlungen (Pragmatik, drei Ebenen, Feminismus-Allianz, Militär-Reformierbarkeit). Keine roten Glieder. ' +
		'Das ist für die Gattung „journalistischer Reportage-Essay” angemessen. Urwin beansprucht keine akademische Rigorosität und macht daraus ein Programm. Sein Buch ist gedacht als Einstiegsvehikel für Männer, die keine Gender-Studies-Literatur lesen würden. Gemessen an diesem Ziel ist es erfolgreich: Es arbeitet mit robusten Statistiken, konvergent mit der kritischen Männerforschung, und liefert eine analytische Originalleistung (aktiv/passiv-Unterscheidung) und eine popularisierbare Sprache („toxische Männlichkeit”, „Stiff Upper Lip Is Killing British Men”). ' +
		'Im Vergleich zu den akademischen Bücher der Bibliothek (Connell, Böhnisch, hooks) ist Urwin dünner an theoretischer Tiefe, aber reicher an lived experience und UK-spezifischen Daten. Im Vergleich zur klinischen Tradition (Pollack, Kindlon/Thompson, Süfke) ist er journalistisch statt diagnostisch, aber mit konvergenter Phänomenologie. Im Vergleich zur Biologismus-Linie (Sax, Gurian, Baron-Cohen) ist er explizit anti-essentialistisch, ohne sich empirisch damit auseinanderzusetzen.'
};
