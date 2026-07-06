// ms-evidence-audit-data.ts
// Cross-referencing claims in Böhnisch's "Männliche Sozialisation" with evidentiary character

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
		claim: 'Jungen beanspruchen im koedukativen Unterricht etwa zwei Drittel der Aufmerksamkeitszeit des Lehrers, werden häufiger bestraft, dominieren das Unterrichtsgeschehen räumlich und verbal.',
		source: 'Enders-Dragässer & Fuchs (1989), Geschlechteralltag in der Schulklasse; Breidenstein & Keller (1998); Faulstich-Wieland et al. (2004); Budde et al. (2008); Diefenbach (2012).',
		pages: 'Ch. 4.3, S. 213-215',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Konsistent replizierte Befunde seit den 1980er Jahren',
		detail:
			'Die empirischen Befunde zum differentiellen Aufmerksamkeitshandling und der Raumdominanz von Jungen im Klassenzimmer sind seit den 1980er Jahren in mehreren deutschen Schulstudien konsistent repliziert. Die 2/3-Aufmerksamkeitsquote stammt aus Enders-Dragässer/Fuchs 1989 und ist seither in zahlreichen Replikationen bestätigt worden. Die "hidden gender curriculum"-Interpretation ist theoretisch, aber das zugrundeliegende Beobachtungsmuster ist robust.'
	},
	{
		claim: 'Frauen leisten in deutschen Haushalten 1,5 mal so viel Zeit für Kinderbetreuung wie Männer; die Haus- und Beziehungsarbeit bleibt trotz aller Rhetorik überwiegend bei den Frauen.',
		source: 'Gille & Marbach (2004), Künzler et al. (2001), Südtiroler Männerstudie (2012), Walter & Künzler (2001).',
		pages: 'Ch. 5.7, S. 254-256',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Offizielle Zeitbudget-Studien, konsistent über Jahrzehnte',
		detail:
			'Die Ungleichverteilung der Haus- und Kinderbetreuungsarbeit ist in allen einschlägigen deutschen Zeitbudget-Studien seit den 1990er Jahren belegt. Auch Böhnischs eigene Südtiroler Männerstudie (2012) bestätigt den Befund. Der Kernbefund ist uncontested; diskutiert wird nur, ob der Gap sich weiter schließt oder stagniert.'
	},
	{
		claim: 'Junge Väter in qualifizierten Berufen arbeiten im Durchschnitt mehr als 50 Stunden pro Woche inklusive Anfahrt; über die Hälfte der deutschen Männer arbeitet bei Eintritt der Vaterschaft MEHR als zuvor.',
		source: 'Südtiroler Männerstudie (2012), Sächsische Männerstudie (2008), Zerle & Krok (2009), Meuser (2012).',
		pages: 'Ch. 3.2, S. 183-184; Ch. 5.6, S. 253',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Böhnischs eigene Studien + externe Replikationen',
		detail:
			'Die Retraditionalisierung der Arbeitszeiten bei Eintritt der Vaterschaft ist in den deutschsprachigen Vaterforschungs-Studien (Meuser 2012) konsistent dokumentiert. Böhnischs Südtiroler Männerstudie bestätigt den Befund auch für das ländlich-kleinstädtische norditalienische Setting. Der "Eventvater" ist eine empirisch gut belegte Figur.'
	},
	{
		claim: 'Hirnplastizität: ~90% der neuronalen Verknüpfungen zwischen Nervenzellen bilden sich erst im Verlauf des Lebens aus, insbesondere in den ersten Lebensjahren — erst durch Erfahrung, nicht durch Geburt.',
		source: 'Gerald Hüther (2009); Palm (2011).',
		pages: 'Ch. 1.2, S. 26-27',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Etablierte Neurowissenschaft',
		detail:
			'Die Hirnplastizitäts-These ist in der modernen Entwicklungsneurowissenschaft breit akzeptiert. Sie untergräbt biologistische Erklärungen männlich-weiblicher Verhaltensunterschiede: Wer behaupten will, dass neurobiologische Besonderheiten die Ursache typischer Verhaltensmuster sind, muss nachweisen, dass sie NICHT Folge differentieller Entwicklungsbedingungen sind. Böhnisch nutzt die Befunde zur Abwehr essentialistischer Positionen.'
	},
	{
		claim: 'Die "man-the-hunter"-Theorie ist archäologisch nicht haltbar: Die bisherigen archäologischen Befunde legen nahe, dass Frauen und Männer gemeinsam auf die Jagd gingen und sowohl Frauen als auch Männer die Kinder versorgten.',
		source: 'Kerstin Palm (2011, Kritik der Evolutionsbiologie).',
		pages: 'Ch. 1.2, S. 25-26',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Zeitgenössische archäologisch-kritische Rezeption',
		detail:
			'Die moderne Archäologie hat die man-the-hunter-Theorie der 1960er-1980er Jahre weitgehend dekonstruiert als "Projektion des männlichen Ernährermodells auf urzeitliche Bedingungen". Böhnisch nutzt Palms Zusammenfassung der entsprechenden Kritik. Der Befund ist in der zeitgenössischen Wissenschaftsgeschichte der Biologie unkontrovers.'
	},
	{
		claim: 'Junge Männer mit prekären Ausbildungs- und Berufsperspektiven entwickeln biografische Orientierungsmuster, die auf das Normalarbeitsverhältnis fixiert sind, obwohl ihre aktuelle Lage diese Prognose nicht hergibt — typisches männliches Bewältigungsverhalten: Problem abspalten, rationalisieren, über Abwertung anderer positionieren.',
		source: 'Thomas Kreher (2007), empirische Studie zur Kompetenzentwicklung junger Männer. Arnold et al. (2004), Dresdner Übergangsforschung.',
		pages: 'Ch. 4.4, S. 218-219',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Qualitative Studie mit klarer Methodik',
		detail:
			'Krehers Studie ist eine methodisch solide qualitative Untersuchung zu männlichen Bewältigungsmustern in prekären Übergangssituationen. Die Befunde zur Abwertungstendenz gegenüber anderen (z.B. Sozialhilfeempfängern) sind konsistent mit sozialpsychologischen Studien zu Außenorientierung und Projektion.'
	},

	// ============ YELLOW ============
	{
		claim: 'Die hegemoniale Männlichkeit konstituiert sich in der Dialektik von männlicher Dominanz UND Verfügbarkeit — Männer sind Herrscher und Unterworfene zugleich. Das Connellsche Konzept sieht nur die Herrschaftsseite und wird dadurch zum Verdeckungszusammenhang.',
		source: 'Böhnischs eigener theoretischer Beitrag (2003, "Die Entgrenzung der Männlichkeit"), gestützt auf Beratungspraxis, Neumann/Süfke 2006, Erwägen-Wissen-Ethik-Debatte 2010.',
		pages: 'Ch. 1.3, S. 30-33',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Theoretische Erweiterung mit klinischer Plausibilität',
		detail:
			'Böhnischs zentrale theoretische Originalität. Die Kritik, dass Connells Konzept nur eine Seite sieht, ist ein legitimer theoretischer Einwand, der in der deutschen Männerforschung breit akzeptiert wurde. Die empirische Stützung kommt aus der Beratungspraxis (Neumann/Süfke 2006) und zeigt: Männer aller Schichten aktivieren in kritischen Lebenssituationen männliche Bewältigungsmuster und erleben Hilflosigkeit, die sonst unthematisierbar bliebe. Das macht die Erweiterung theoretisch produktiv, ist aber nicht direkt empirisch quantifizierbar.'
	},
	{
		claim: 'Das männliche Externalisierungsprinzip: Außenorientierung, Abspaltung von Gefühlen, Projektion innerer Hilflosigkeit auf Schwächere, Verschließen des Innen. In der frühen Kindheit (Ablösungsdruck von der Mutter) und durch ökonomische Strukturen gleichzeitig entstanden.',
		source: 'Arno Gruen (1992, Der Verrat am Selbst), Nancy Chodorow (1985), Dammasch/Metzger/Theising (2009). Zum politökonomischen Aspekt: Brensell/Habermann 2001.',
		pages: 'Ch. 1.4, S. 33-37; Ch. 5.3, S. 229-238',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Klinisch plausibel, psychoanalytisch begründet, empirisch schwer prüfbar',
		detail:
			'Das Externalisierungskonzept ist klinisch reichhaltig und konvergiert mit Pollacks "mask of masculinity", Kindlon/Thompsons "emotional miseducation" und Terrence Reals "disconnection IS masculinity". Die empirische Grundlage ist die psychoanalytische Sozialisationsforschung der letzten 50 Jahre (Chodorow, Gruen, Benjamin, Dinnerstein), die nicht hypothesenprüfend arbeitet. Die politökonomische Brückenbildung (Brensell/Habermann 2001: Warenform als geschlechtlich codiert) ist spekulativ.'
	},
	{
		claim: 'Bedürftigkeit als leibseelischer Zwangszustand: Männer sehnen sich nach Innehalten und Zugang zur Sorge, werden aber durch die Intensivierung der Erwerbsarbeit daran gehindert. Dieser Zwangszustand drängt nach Entladung, Abspaltung.',
		source: 'Böhnischs Eigenprägung (2003). Empirisch gestützt durch Südtiroler Männerstudie (2012), Neumann/Süfke (2006) aus der Männerberatung.',
		pages: 'Ch. 1.4, S. 36-37; Ch. 5.9, S. 280-283',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Diagnostischer Rahmen aus Beratungspraxis',
		detail:
			'Böhnischs zentraler Eigenbegriff. Er funktioniert als diagnostisches Konzept in der Männerberatung und wird von Neumann/Süfke (2006) explizit als klinisch tauglich befunden. Die empirische Stützung kommt aus einer Kombination von Beratungserfahrung und eigenen quantitativen Studien (Südtiroler Männerstudie 2012 zu Diskrepanz zwischen Vaterschaftswunsch und beruflicher Belastung). Es ist aber schwer direkt zu quantifizieren, was eine "Bedürftigkeit" objektiv auszeichnet.'
	},
	{
		claim: 'Das Bewältigungsparadigma: Männlichkeit und Weiblichkeit sind nicht starre Habitustypen, sondern Bewältigungsmuster im Streben nach biografischer Handlungsfähigkeit. Das Zwei-Kreise-Modell integriert psychodynamische (Selbstwert, Anerkennung, Selbstwirksamkeit) und gesellschaftliche Dimensionen.',
		source: 'Böhnisch über mehrere Werke entwickelt (Böhnisch 2003, 2010, Böhnisch/Lenz/Schröer 2009). Grundlagen: Winnicott, Gruen, Coping-Forschung.',
		pages: 'Ch. 1.6, S. 52-56; Ch. 2.1, S. 82-91',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Theoretischer Rahmen mit empirischer Operationalisierung in Beratungskontexten',
		detail:
			'Der zentrale theoretische Rahmen des Buches. Er wurde von Neumann/Süfke (2006) als Rahmen für Männerberatung angewendet und validiert. Seine Produktivität zeigt sich darin, dass er sowohl das Alltagshandeln (Routine-Bewältigung) als auch das Krisenverhalten (Rückgriff auf traditionelle Muster) erklären kann. Nicht direkt falsifizierbar, aber theoretisch fruchtbar.'
	},
	{
		claim: 'Das "Gespenst des rollenlosen Mannes": Die Erosion des Normalarbeitsverhältnisses bedroht den zentralen Anker der männlichen Identität. Männer in prekären Verhältnissen greifen zur aggressiven Maskulinität als Kompensationsressource.',
		source: 'Böhnisch (2003, 2013). Empirisch: Kreher 2007 (prekäre junge Männer), Dörre 2007, Bründel/Hurrelmann 1999 (arbeitslose Väter), Dörre 2007.',
		pages: 'Ch. 5.3, S. 230-232',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Diagnostische Formel mit starken qualitativen Stützen',
		detail:
			'Die Formel ist metaphorisch und interpretativ, aber die empirischen Befunde zur Verbindung von prekärer Männerarbeit und Rückgriff auf traditionelle Männlichkeit sind in den zitierten Studien (Kreher, Dörre, Bründel/Hurrelmann) solide qualitativ dokumentiert. Die Studien zum Rechtsextremismus bestätigen den Zusammenhang.'
	},
	{
		claim: 'Die Mutter-Sohn-Bindung als strukturell zwiespältige Konstellation: Die Mutter muss den Sohn loslassen und gleichzeitig den Vater in der Familie aufbauen. Söhne bleiben auch als Erwachsene in Abhängigkeit von der internalisierten Mutter. "Männer können Frauen nicht entrinnen."',
		source: 'Moeller 1983 (Die Wahrheit beginnt zu zweit), Chodorow 1985, Benjamin 1990, Dammasch 2011, Ehnis 2008 ("hegemoniale Mütterlichkeit"), Lenz/Adler 2011.',
		pages: 'Ch. 3.1, S. 174-182',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Psychoanalytische Tradition, klinisch plausibel, schwer quantifizierbar',
		detail:
			'Eingebettet in die feministische Psychoanalyse von Chodorow bis Benjamin. Böhnisch ist vorsichtig: Es ist kein Individualschuldvorwurf an Mütter, sondern eine strukturelle Analyse eines gesellschaftlichen Musters. Die Behauptung, dass Männer auch als Erwachsene in Abhängigkeit von der internalisierten Mutterbeziehung bleiben, ist theoretisch einflussreich, aber nicht direkt empirisch testbar. Die komplementäre Behauptung — dass väterliches Engagement die produktive "Triangulation" ermöglicht — wird durch die Vaterforschung (Snarey, Pruett) gestützt.'
	},
	{
		claim: 'Gewalt als abgespaltene Hilflosigkeit: Männliche Gewalt in ihren offenen Formen ist ein Kampf gegen die eigene Hilflosigkeit, ein Kampf gegen sich selbst. Die eigene innere Hilflosigkeit wird auf Schwächere projiziert und dort bekämpft.',
		source: 'Arno Gruen (1992). Quantitativ: BMFSFJ 2004 Pilotstudie "Gewalt gegen Männer", Volz/Zulehner 2009. Döge 2012. Zu rechtsextremen Männern: Birsl 2011, Goldhagen 2004.',
		pages: 'Ch. 5.9, S. 276-283',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Interpretativ-psychoanalytisch, empirisch korrelativ bestätigt',
		detail:
			'Die tiefenpsychologische Deutung (Gewalt als Hilflosigkeitsabwehr) ist bei Gruen 1992 theoretisch entwickelt. Die Volz/Zulehner-Studie (2009) bestätigt korrelativ den Zusammenhang zwischen männlicher Lebenszufriedenheit und physischer Gewalt im sozialen Nahraum. Die Studien zu rechtsextremen Männern bestätigen den Projektionsmechanismus als plausibel, sind aber qualitativ. Der Kern — Gewalt als Bewältigungsstrategie für abgewehrte Hilflosigkeit — ist theoretisch stark, aber nicht direkt kausal prüfbar.'
	},
	{
		claim: 'Das Umwegverhalten: Jungen senden empathische Bedürfnisse über Anmache, Dominanzgebaren und andere "symbolische" Signale aus, die vom Gegenüber entschlüsselt werden müssten. Hinter der äußeren Fassade liegen konträre innere Befindlichkeiten.',
		source: 'Ethnographische Schulstudien und Jugendarbeit (Schnack/Neutzling 1990, Jösting 2005, Wellgraf 2011, Breidenstein 2008). Meuser 2006 zur Strukturlogik der Wettbewerbsspiele.',
		pages: 'Ch. 2.9, S. 135-143',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Qualitative Jugendethnographie, interpretativ aufgesetzt',
		detail:
			'Die ethnographischen Befunde zu Cliquen-Verhalten, Raumaneignung und Anmache-Ritualen sind qualitativ gut dokumentiert. Die Interpretation als "symbolisches Umwegverhalten" — das hinter der Fassade innere Bedürfnisse verbirgt — ist interpretativ und klinisch plausibel. Sie basiert auf qualitativen Beobachtungen und Beratungserfahrung, nicht auf experimentellen Studien.'
	},
	{
		claim: 'Der "abstract worker" als neuer männlicher Sozialisationstyp der Zweiten Moderne: Subjektivierung der Arbeit, Projektarbeit, Deregulierung — Männer sollen mit ihrer ganzen Person in den Arbeitsprozess aufgehen, alle anderen Lebensbereiche untergeordnet.',
		source: 'Meuser 2012, Boltanski/Chiapello 2006 (Der neue Geist des Kapitalismus). Zu empirischen Arbeitsbelastungen: Boes/Kämpf/Gül 2012.',
		pages: 'Ch. 5.4, S. 238-245; Ch. 1.10, S. 71-75',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Theoretische Zeitdiagnose mit Arbeitsforschungs-Unterfütterung',
		detail:
			'Das Konstrukt "abstract worker" stammt aus der Arbeitsforschung und ist von Meuser auf die Männerforschung übertragen worden. Die empirischen Befunde zu Arbeitsverdichtung, Projektarbeit und Burnout sind dokumentiert. Die Interpretation als "Leitfigur der Sozialisationsweise der zweiten Moderne" ist theoretisch, aber plausibel.'
	},
	{
		claim: 'Intensivierung der Arbeit hält Männer zu einem Zeitpunkt von der Familie ab, zu dem sie für sie offen scheint. Wunsch und Verwehrung liegen bei vielen Männern dicht beieinander.',
		source: 'Böhnischs qualitative Vorstudien (2008) und die quantitative Südtiroler Männerstudie (2012) sowie Scholz 2009 als Überblick.',
		pages: 'Ch. 3.2, S. 183-197',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Eigene Studienreihe mit Einzelfall-Illustrationen',
		detail:
			'Die Wunsch-Verwehrung-Diskrepanz ist in Umfragen breit belegt (viele Männer geben in Befragungen hohe Präferenz für Familienarbeit an, realisieren es aber nicht). Die psychologische Deutung als "Bedürftigkeit" ist Böhnischs Ergänzung. Die quantitative Basis ist vorhanden, die interpretative Einordnung klinisch-plausibel.'
	},

	// ============ UNTESTABLE ============
	{
		claim: 'Die Zweite Moderne als Epoche der Entgrenzung: Auflösung der Strukturen der Ersten Moderne, Vermischung mit neuen, Verwischung alter Grenzen, Entstehung neuer Sowohl-als-auch-Strukturen statt Entweder-oder-Strukturen.',
		source: 'Synthesis aus Beck (1986, Risikogesellschaft), Boltanski/Chiapello (2006), Connell/Hearn/Kimmel (2004). Eingebettet in die deutsche Zeitdiagnose-Soziologie.',
		pages: 'Einführung S. 9-19, Ch. 1 passim',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Zeitdiagnostischer Rahmen',
		detail:
			'Nicht direkt falsifizierbar. Seine Produktivität liegt darin, dass er erklärt, wie neue Phänomene (Prekarisierung, digitaler Kapitalismus, Entgrenzung von Lebensphasen) sich in die Sozialisationsforschung einordnen lassen. Der Begriff ist in der deutschen Soziologie breit etabliert (Beck), aber als theoretischer Rahmen nicht empirisch prüfbar.'
	},
	{
		claim: 'Der Verdeckungszusammenhang: Was auf der Alltagsebene als privates Bewältigungsproblem erscheint, ist in Wahrheit ein struktureller Druck, der ins Private verschoben und tiefenpsychisch verdeckt wird.',
		source: 'Böhnischs Synthese, aufbauend auf Leithäuser (1976) zu "Verdrängung" und "Abwehr" im Alltagsbewusstsein.',
		pages: 'Einführung S. 11-12',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Diagnostischer Rahmen, nicht empirisch prüfbar',
		detail:
			'Nicht testbar, aber theoretisch produktiv. Erklärt, warum Männer ihre Situation nicht als strukturelle Probleme, sondern als individuelle Bewältigungsaufgaben erleben. Bettet sich in die kritische Soziologie (Adorno, Habermas, Leithäuser) ein, die den Zugang zur "strukturellen Wahrheit hinter der Erscheinung" sucht.'
	},
	{
		claim: '"Hegemoniale Mütterlichkeit" (Ehnis 2008): Jene Formen geschlechtsbezogener Praktiken und Zuschreibungen, welche die Präsenz von Müttern (statt von Vätern) bei der Kinderbetreuung sichern.',
		source: 'Patrick Ehnis (2008).',
		pages: 'Ch. 3.1, S. 174-175',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Begrifflicher Rahmen für Muttering-Praktiken',
		detail:
			'Ein diagnostischer Begriff in Parallele zu "hegemonialer Männlichkeit". Der zugrundeliegende Befund (Mütter übernehmen die meiste Kinderbetreuung) ist empirisch uncontested; die Konzeptualisierung als "hegemoniale Mütterlichkeit" ist theoretisch.'
	},
	{
		claim: 'Das "balancierte Mann-Sein" als normatives Ziel: Biografisches Projekt, in dem Schwächen und Stärken gleichermaßen aufgehoben und in ein Verhältnis gebracht sind. Verlangt Selbstbezug und Selbstsorge (Foucault), erweiterte Bewältigung und pädagogische Räume.',
		source: 'Böhnischs eigene normative Prescription, in Anlehnung an Neubauer/Winter 2002 und Foucault 1987 ("Die Sorge um sich").',
		pages: 'Ch. 2.13, S. 170-173; Ch. 5.13, S. 310-315',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Normatives Ziel, nicht empirische Prognose',
		detail:
			'Eine normative Prescription, keine empirische Hypothese. Ihr Wert liegt darin, wie sie praktische Männerarbeit, Jungenpädagogik und Beratung orientiert. Böhnisch selbst betont die Unabgeschlossenheit und Schwierigkeit des Projekts: "Es gibt nicht den einfachen Weg zur alternativen Männlichkeit, aber den weiterhin steinigen zum balancierenden Mann-Sein."'
	},
	{
		claim: 'Die ökonomische Warenform ist geschlechtlich "männlich besetzt": Reproduktionstätigkeiten (Sorge) werden vom Wert, von der abstrakten Arbeit und den damit zusammenhängenden Rationalitätsformen abgespalten.',
		source: 'Brensell & Habermann (2001), in Böhnischs Ch. 1.4 zitiert.',
		pages: 'Ch. 1.4, S. 34',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Marxistisch-feministische Theorie, nicht empirisch prüfbar',
		detail:
			'Eine marxistisch-feministische These aus der Tradition des Geschlechter-Kapitalismus-Diskurses. Böhnisch nutzt sie als Brücke zwischen psychodynamischer und politökonomischer Ebene. Nicht direkt testbar.'
	},
	{
		claim: 'Der "innere Kreis" des Bewältigungsmodells: Drei Grundimpulse des personalen Bewältigungsverhaltens — Verlangen nach stabilem Selbstwert, nach sozialer Anerkennung, nach Erfahrung von Selbstwirksamkeit.',
		source: 'Coping-Forschung (Lazarus/Folkman), Selbstbehauptung und "Urform des Selbst" bei Roth 2007 und in der Säuglingsforschung (Winnicott, Moser 1993).',
		pages: 'Ch. 1.6, S. 54',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Theoretisches Konstrukt aus Stressforschung und Tiefenpsychologie',
		detail:
			'Der innere Kreis ist ein synthetisches Konstrukt aus Stressforschung und Tiefenpsychologie. Die drei Impulse (Selbstwert, Anerkennung, Selbstwirksamkeit) sind aus der Psychologie vertraut. Die Zusammenführung als "psychodynamische Urstruktur des Strebens nach Handlungsfähigkeit" ist theoretisch produktiv, aber nicht direkt prüfbar.'
	},
	{
		claim: 'Die "Ambivalenzstruktur" der Zweiten Moderne: Geschlechternivellierung (an der Oberfläche) und Geschlechterdifferenzierung (in kritischen Lebenskonstellationen) stehen in einem wechselnden Spannungsverhältnis zueinander.',
		source: 'Böhnischs eigene Diagnose, empirisch belegt durch Vergleich von Alltagsbefunden und Beratungserfahrung.',
		pages: 'Ch. 1.1, S. 22-24; Ch. 1.12, S. 79-81',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Diagnostische These mit qualitativer Unterfütterung',
		detail:
			'Nicht direkt testbar. Die These ist: In Alltagsinteraktionen wirken Männer und Frauen nivelliert, in Krisenkontexten (Trennung, Arbeitslosigkeit, Gewalt) brechen traditionelle Muster auf. Die qualitative Evidenz aus Beratungsstudien (Neumann/Süfke) stützt die Diagnose, aber sie bleibt interpretativ.'
	}
];

// ============================================================
// SUMMARY STATISTICS
// ============================================================

export const auditSummary = {
	red: evidenceItems.filter((e) => e.status === 'red').length,
	yellow: evidenceItems.filter((e) => e.status === 'yellow').length,
	green: evidenceItems.filter((e) => e.status === 'green').length,
	untestable: evidenceItems.filter((e) => e.status === 'untestable').length,
	criticalRed: evidenceItems.filter((e) => e.status === 'red' && e.centrality === 'critical').length,
	criticalYellow: evidenceItems.filter((e) => e.status === 'yellow' && e.centrality === 'critical').length,
	verdict:
		'Böhnischs "Männliche Sozialisation" ist ein theoretisch-synthetisches und sozialpädagogisch-diagnostisches Werk, kein empirisches Forschungsbuch. Von 22 Evidenz-Items sind 6 grün (konsistent replizierte empirische Befunde aus der Schul-, Arbeits- und Vaterforschung: Aufmerksamkeitsquote von Jungen im Klassenzimmer, Haus- und Kinderbetreuungs-Zeitbudget, Arbeitsstunden junger Väter, Hirnplastizität, man-the-hunter-Kritik, Krehers Studie zu prekären jungen Männern), 9 gelb (die meisten zentralen theoretisch-interpretativen Claims: Dominanz-Verfügbarkeit-Dialektik, Externalisierung, Bedürftigkeit, Bewältigungsparadigma, Gespenst des rollenlosen Mannes, Mutter-Sohn-Bindung, Gewalt-als-Hilflosigkeit, Umwegverhalten, abstract worker, Wunsch-Verwehrung-Diskrepanz) und 7 untestbar als theoretische Rahmen (Zweite Moderne, Verdeckungszusammenhang, hegemoniale Mütterlichkeit, balanciertes Mann-Sein, geschlechtlich codierte Warenform, innerer Kreis der Bewältigung, Ambivalenzstruktur). Keine roten Items. ' +
		'Die empirische Grundlage ist breit, aber überwiegend sekundär (Rezeption der deutschen und englischsprachigen Männerforschung) und qualitativ (Beratungspraxis, Ethnographien, Einzelfallstudien). Die wichtigsten eigenen empirischen Studien sind Böhnischs Südtiroler Männerstudie (2012), die Sächsische Männerstudie (2008) und die Dresdner Übergangsforschung (Arnold u.a. 2004) — solide, aber regional begrenzt. Die klinische Validierung des Bewältigungsparadigmas durch Neumann/Süfke (2006) ist ein wichtiges Qualitätsmerkmal. ' +
		'Die Stärke des Buches liegt in der methodologischen Integration: Böhnisch verbindet soziologische Strukturanalyse (Connell, Bourdieu, Beck) mit psychoanalytischer Sozialisationsforschung (Gruen, Chodorow, Winnicott, Dammasch) und Sozialpädagogik — ein Brückenschlag, den die englischsprachige Männerforschung vernachlässigt. Sein Eigenbeitrag zur Hegemonialitätsdebatte (die Dialektik von Dominanz und Verfügbarkeit) ist theoretisch originell und in der deutschen Männerforschung breit akzeptiert. ' +
		'Die Schwäche liegt in der Schwer-Quantifizierbarkeit vieler zentraler Begriffe ("Bedürftigkeit", "Externalisierung", "balanciertes Mann-Sein"). Sie funktionieren als diagnostische Rahmen in Beratungs- und pädagogischen Kontexten, sind aber keine hypothesenprüfenden Kategorien. Wer empirische Gewissheit sucht, wird enttäuscht; wer einen theoretisch integrativen Rahmen sucht, der empirische Einzelbefunde organisiert, findet ihn hier. ' +
		'Im Vergleich zur Bibliothek: Böhnisch ist der einzige systematische deutschsprachige Sozialpädagoge/Soziologe männlicher Sozialisation. Er ist die akademische Grundlage, auf der Dittmann (Jungs von heute) als populäre Anwendung aufbaut. Er teilt mit Pollack die klinisch-psychoanalytische Tradition und die Kernbegriffe (Mask, father hunger), steht aber in der deutschen psychoanalytischen Sozialisationsforschung (Gruen, Chodorow) statt in der Stone-Center-Tradition. Mit Connell teilt er das Hegemonialitätskonzept, erweitert es aber entscheidend um die Verfügbarkeitsseite. Mit hooks teilt er den Fokus auf emotionale Verkümmerung der Männer, bleibt aber im strukturanalytischen Diagnose-Modus statt im Liebesethik-Horizont. Gegenüber Sax/Gurian/Benenson ist er explizit anti-essentialistisch, aber verteidigt gegen radikalen Konstruktivismus die leibseelische Dimension. ' +
		'Das Buch ist wertvoll, wenn man einen theoretisch integrativen Rahmen für die männliche Sozialisation in der deutschsprachigen Tradition sucht. Es ist ergänzungsbedürftig, wenn man empirische Prognosen oder randomisierte Interventionsstudien sucht.'
};
