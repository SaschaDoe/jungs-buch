// nbm-argument-chain-data.ts
// Argument chain for Scott Galloway, "Notes on Being a Man: How to address the masculinity crisis, build mental strength and raise good sons" (Simon & Schuster, 2025)

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
	// ======== Row 0: Die Diagnose ========
	{
		id: 'crisis-diagnosis',
		step: 1,
		shortLabel: 'Die Krise: Jungen/junge Männer fallen schneller und tiefer als jede Kohorte zuvor',
		type: 'observation',
		claim:
			'„Seldom in recent memory has there been a cohort that\'s fallen farther, faster." Bildungssystem benachteiligt Jungen (später reifende Gehirne, kaum männliche Lehrer); der NEET-Anteil der 20-24-jährigen Männer hat sich seit 1980 verdreifacht; männliche Erwerbsquote unter 90%; 60% der 18-24-jährigen Männer wohnen bei den Eltern, 1 von 5 noch mit 30; ~70.000 Deaths of Despair pro Jahr, überproportional arbeitslose weiße Männer ohne College-Abschluss; Suizidrate von Männern 3,8× höher als die von Frauen; Männer haben in 13 der 15 häufigsten Todesursachen die höhere Mortalität.',
		evidence:
			'Brookings (Carol Graham) zu Deaths of Despair; BLS-Erwerbsquoten; CDC-Daten via American Institute for Boys and Men (AIBM); Reeves „Missing Misters" zu männlichen Lehrern; Joint Economic Committee zu Mortalitätstrends. Aber auch: zwei Medium-Blogposts als Belege für Kernzahlen der Einleitung.',
		status: 'green',
		explanation:
			'Die Kern-Diagnose ist identisch mit Reeves\' Of Boys and Men und dort mit Regierungsstatistiken abgesichert — die Zahlen selbst sind robust und konvergieren mit der gesamten Bibliothek. Galloways CITATION-Qualität ist allerdings deutlich schwächer als die Substanz: Die Einleitung stützt zentrale Statistiken auf Medium-Posts („Young Men Are Failing and Taking Society Down with Them") statt auf Primärquellen. Die Diagnose ist grün, weil sie extern validierbar ist — nicht, weil Galloways Fußnoten sie tragen.',
		dependsOn: [],
		collapseRisk:
			'Gering für die Grundbeobachtung. Einzelne Zuspitzungen sind fragiler: die „45% der Männer 18-25 haben noch nie eine Frau persönlich angesprochen"-Statistik stammt aus einem Medium-Post ohne nachvollziehbare Primärerhebung und sollte nicht zitierfähig weitergetragen werden.',
		bookLocations: [
			{
				pages: 'Einleitung (Scan S. 1-4, ca. 0-2%)',
				chapter: 'Introduction',
				context: 'Die datengetriebene Eröffnung: Bildung, NEET, Wohnsituation, Deaths of Despair, Mating-Statistiken.'
			}
		],
		evidenceRefs: [
			{ label: 'Graham (Brookings) — Crisis of Despair', authorSearch: 'Graham' },
			{ label: 'AIBM/CDC Suizidraten-Vergleich', authorSearch: 'AIBM' }
		]
	},

	{
		id: 'cultural-abandonment',
		step: 2,
		shortLabel: 'Kulturelle Preisgabe: Niemand verteidigt Männer; „toxische Männlichkeit" ist Verachtung',
		type: 'causal',
		claim:
			'Das Thema Mann-Sein ist „radioaktiv" geworden: Medien porträtieren Männer als Idioten mit gutem Herzen; die DNC-Website listet 16 Zielgruppen — Jungen und Männer fehlen; der Diskurs („toxic masculinity") sei Verachtung statt Analyse. Galloways Deutung der US-Wahl 2024: kein Referendum über Frauenrechte, sondern über scheiternde junge Männer — Trump gewann 16 Punkte bei jungen Männern, der größte Shift aller Altersgruppen, plus die Mütter (Frauen 46-64).',
		evidence:
			'Navigator Research 2024 Post-Election Survey (Trump +16 bei jungen Männern); die DNC-„Who We Serve"-Beobachtung ist verifizierbar; der Rest ist kulturkritische Interpretation.',
		status: 'yellow',
		explanation:
			'Der Wahl-Shift junger Männer 2024 ist real und mehrfach dokumentiert (AP VoteCast, Navigator, CIRCLE) — die genaue Punktzahl variiert je nach Erhebung. Die Kausalinterpretation („die Wahl WAR ein Referendum über scheiternde junge Männer") ist eine plausible, aber nicht testbare Rahmung. Konvergiert mit Reeves\' „Progressive Blindness"-Kapitel, ist aber polemischer formuliert.',
		dependsOn: ['crisis-diagnosis'],
		collapseRisk:
			'Wenn der 2024-Männer-Shift sich als Inflations-/Inkumbenz-Effekt statt als Geschlechter-Realignment erweist (2026er-Midterm-Daten werden es zeigen), verliert die Wahl-These ihre Beweiskraft. Die DNC-Anekdote bleibt davon unberührt, trägt aber allein kein Kausalargument.',
		bookLocations: [
			{
				pages: 'Einleitung (Scan S. 2-4, ca. 1-2%)',
				chapter: 'Introduction',
				context: '„Toxic masculinity is the emperor of all oxymorons"; DNC-Anekdote; 2024-Wahlanalyse.'
			}
		],
		evidenceRefs: [
			{ label: 'Navigator 2024 Post-Election Survey', authorSearch: 'Navigator' },
			{ label: 'Reeves — Progressive Blindness (Konvergenz)', authorSearch: 'Reeves' }
		]
	},

	// ======== Row 1: Die biologische Prämisse ========
	{
		id: 't-biology',
		step: 3,
		shortLabel: 'Testosteron als „Engine of Masculinity" — mehr Nature als Nurture',
		type: 'premise',
		claim:
			'T ist „the engine of masculinity, what wins wars and World Series". Vier T-Schübe (Utero, Geburt, Pubertät, Peak mit 20); Jungen/Männer haben 10-20× mehr T; T „maskulinisiert" das Gehirn und erklärt Rough-and-Tumble, Risikofreude, Wettbewerbsorientierung. Galloways Position zur Nature/Nurture-Frage: „My experience […] is that, as Michelle Obama said, ‚They come to you.\' That is, it\'s more nature than nurture."',
		evidence:
			'Carole Hooven „T: The Story of Testosterone" (2021) als Hauptquelle — dieselbe Quelle, die Reeves nutzt; Handelsman et al. (2018) Endocrine Reviews zu T und athletischer Leistung. Die „more nature than nurture"-Zuspitzung geht über Hoovens vorsichtigere Amplifier-These hinaus.',
		status: 'yellow',
		explanation:
			'Die T-Grundfakten (Konzentrationsunterschied, Entwicklungsschübe, athletischer Vorteil) sind solide (Hooven, Handelsman). Aber Galloway nimmt eine stärkere biologistische Position ein als seine eigene Hauptquelle: Hooven und Reeves betonen T als AMPLIFIER in kultureller Modulation; Galloway destilliert daraus „more nature than nurture" auf Basis von Spielplatz-Beobachtungen seiner Kinder. Damit steht er näher bei Sax/Gurian als bei Reeves — im Widerspruch zur Gender-Mosaic-Kritik (Joel) und zu Eliots Plastizitäts-Befunden.',
		dependsOn: [],
		collapseRisk:
			'Der Link kollabiert nicht ganz (die T-Physiologie stimmt), aber die deterministische Lesart bricht, wenn man die Interaktions-Literatur ernst nimmt: Die Bibliothek (Eliot, Joel, Reeves) zeigt, dass „dimorphe Grundneigung + große kulturelle Modulation" die ehrlichere Formel ist. Galloway räumt das im selben Kapitel teilweise selbst ein („genetics, hormones, and the environment all come together").',
		bookLocations: [
			{
				pages: 'Kap. 1 Boyhood (Scan S. 8-9, ca. 5-6%)',
				chapter: 'Teed Off / Testosteron-Exkurs',
				context: 'Der „male science"-Detour: vier T-Schübe, T-Kurve nach Alter, eigene TRT-Nutzung.'
			}
		],
		evidenceRefs: [
			{ label: 'Hooven — T: The Story of Testosterone', authorSearch: 'Hooven' },
			{ label: 'Handelsman et al. (2018) Endocrine Reviews', authorSearch: 'Handelsman' }
		]
	},

	{
		id: 'brain-claims',
		step: 4,
		shortLabel: 'Pop-Neuroscience: Brizendine-Claims und eine falsch etikettierte, zurückgezogene Studie',
		type: 'premise',
		claim:
			'„Men have more than double the brain space and processing power devoted to sexual drive. The male amygdala, home to fear, anger, and aggression, contains testosterone receptors that make males lose their cool faster." Dazu präsentiert das Buch eine Grafik „Age of Onset of Body Dysmorphia, U.S., by Gender, 2022" — deren Quellenangabe tatsächlich Diaz & Bailey (2023) „Rapid Onset Gender Dysphoria: Parent Reports on 1.655 Possible Cases" ist.',
		evidence:
			'Louann Brizendine „The Female Brain" (2007) — populärwissenschaftlich, in Nature (Young & Balaban 2006) für fehlende Belege scharf kritisiert. Diaz & Bailey (2023, Archives of Sexual Behavior) — im Juni 2023 wegen fehlender Einwilligung ZURÜCKGEZOGEN, und inhaltlich eine Eltern-Befragung zu Rapid-Onset-GENDER-Dysphorie, nicht zu Body Dysmorphia.',
		status: 'red',
		explanation:
			'Der schwächste empirische Baustein des Buches. (1) Die Brizendine-Zahlen („2,5× brain space for sex") stammen aus einem Buch, dessen quantitative Behauptungen die Fachwelt nie belegen konnte — die Bibliothek (Eliot, Joel) hat diese Sorte Claim systematisch demontiert. (2) Die Body-Dysmorphia-Grafik ist ein doppelter Fehler: Die zitierte Studie behandelt ein ANDERES Konstrukt (Gender-Dysphorie), und sie wurde retracted. Dass so etwas durch das Lektorat von Simon & Schuster rutscht, illustriert den Unterschied zwischen Galloways journalistischem Arbeiten und Reeves\' Brookings-Standard.',
		dependsOn: ['t-biology'],
		collapseRisk:
			'Bereits kollabiert, was die spezifischen Zahlen angeht. Für die Gesamtargumentation ist der Schaden begrenzt, weil die Körperbild-Passage (Muscle Dysmorphia, 90% der Adoleszenten unzufrieden mit Muskulatur) auch ohne die falsche Grafik über Frederick et al. gestützt werden kann — aber der Vertrauensschaden für alle anderen unbelegten Zahlen des Buches ist real.',
		bookLocations: [
			{
				pages: 'Kap. 1 (Scan S. 16, ca. 11%) + Kap. 2 (Scan S. 20, ca. 13%)',
				chapter: 'Enemies of Young Men: The Prefrontal Cortex / The Weather Up There',
				context: 'Brizendine-Absatz zur Amygdala; „Age of Onset of Body Dysmorphia"-Chart mit Diaz-&-Bailey-Quellenzeile.'
			}
		],
		evidenceRefs: [
			{ label: 'Brizendine — The Female Brain (kritisiert)', authorSearch: 'Brizendine' },
			{ label: 'Diaz & Bailey (2023) — retracted', authorSearch: 'Bailey' }
		]
	},

	{
		id: 'pfc-timing',
		step: 5,
		shortLabel: 'Später reifender präfrontaler Kortex → Bildungsnachteil + Risikoverhalten bis ~25',
		type: 'causal',
		claim:
			'Der weibliche PFC reift bis zu zwei Jahre vor dem männlichen; der männliche holt erst um 25 auf. Der PFC ist „the grown-up in the room, the CEO" — Impulskontrolle, Planung, Priorisierung. Daraus folgen der frühe schulische Rückstand der Jungen (verstärkt durch ADHD-Diagnosegefälle 15% vs. 8% und fehlende männliche Lehrer) und die Tide-Pod-Klasse jugendlicher Männer-Dummheiten, die Galloway an sich selbst durchdekliniert.',
		evidence:
			'Lenroot & Giedd (2010) zu Sex-Differenzen im adoleszenten Gehirn; NIH Research Matters (2021); CDC-ADHD-Daten; Reeves „Missing Misters" und Redshirting-Vorschlag (von Galloway referiert, inkl. Reeves\' eigener Einschränkung, die Lehrer-Evidenz sei „inconclusive").',
		status: 'green',
		explanation:
			'Der Kern (spätere strukturelle Reifung, höhere Impulsivität im Altersfenster) ist der am besten replizierte neurowissenschaftliche Befund der ganzen Debatte und das Rückgrat von Reeves\' Redshirt-Argument. Galloway referiert hier fair, nennt sogar den Diagnose-Bias bei ADHD und die inkonklusive Lehrer-Evidenz. Vorsicht nur bei der Folk-Neuroscience-Präzision („mit 25 fertig") — die Literatur zeigt kontinuierliche Reifung mit großer individueller Varianz, keine harte Schwelle.',
		dependsOn: ['t-biology'],
		collapseRisk:
			'Gering. Selbst wenn die Zwei-Jahres-Zahl auf spezifische Volumen-Maße beschränkt bleibt, trägt die Richtung des Befundes. Angreifbar ist nur die deterministische Ableitung individueller Biografien aus Gruppenmittelwerten.',
		bookLocations: [
			{
				pages: 'Kap. 1 (Scan S. 15-17, ca. 10-12%)',
				chapter: 'Enemies of Young Men: The Prefrontal Cortex',
				context: 'PFC als CEO; „Slowpa"-Konzept als Gegenprogramm zu Tech-Dopamin; eigene Jugend-Idiotien als Illustration.'
			}
		],
		evidenceRefs: [
			{ label: 'Lenroot & Giedd (2010) — Sex Differences in the Adolescent Brain', authorSearch: 'Giedd' },
			{ label: 'Reeves — Redshirt the Boys (Konvergenz)', authorSearch: 'Reeves' }
		]
	},

	// ======== Row 2: Die Mechanismen ========
	{
		id: 'addiction-economy',
		step: 6,
		shortLabel: 'Die Addiction Economy zielt auf den unreifen männlichen PFC',
		type: 'causal',
		claim:
			'„The world\'s most valuable resource isn\'t data, oil, or rare earth metals; it\'s dopa." Die wertvollsten Firmen der Geschichte (Social Media, Gaming, Sports Betting, Fast Food, Porn) monetarisieren Dopamin-Schleifen — und die vulnerabelste Zielgruppe sind Jungen und junge Männer mit unfertigem PFC: 24% der Teens „addicted" an Social Media, Teen-Suizidrate +56% in einer Dekade, 12% der Männer über 12 mit Substanzstörung (vs. 6,5% der Frauen), Sports-Betting-Legalisierung gefolgt von +28% Insolvenzen. Haidt: „the largest uncontrolled experiment humanity has ever performed on its own children."',
		evidence:
			'Haidt (The Anxious Generation / NYT); Twenge zu Depression/Suizid-Trends; Surgeon General Advisory 2023; NIDA-Geschlechterdaten; Einzelstudien zu Gaming (Gentile 2009) und Social-Media-Addiction (Caner et al.).',
		status: 'yellow',
		explanation:
			'Die deskriptiven Trends (Suizid, Depression, Nutzungszeiten) sind grün. Die KAUSALE Zuschreibung an Smartphones/Social Media ist die Haidt-These — prominent, aber in der Fachwelt umstritten (Odgers, Przybylski: kleine Effektstärken, Selektionseffekte, Reverse Causation). Die „24% addicted"-Zahl stammt aus einer einzelnen Current-Psychology-Studie mit weichem Addiction-Begriff. Galloway übernimmt die stärkste Lesart ohne die Gegenliteratur zu erwähnen — rhetorisch brillant („Tim Cook und Zuckerberg vor der Junior High mit einer Tüte Smack"), evidenziell einseitig.',
		dependsOn: ['crisis-diagnosis', 'pfc-timing'],
		collapseRisk:
			'Wenn die Kausalitäts-Debatte zugunsten der Skeptiker ausgeht (bislang unentschieden), degradiert der Link zu „Korrelation plus plausibler Mechanismus". Die Policy-Folgerungen (Phone-Bans an Schulen, Age-Gating) haben inzwischen eigene, unabhängige Evidenz und überleben das teilweise.',
		bookLocations: [
			{
				pages: 'Kap. 5 Health (Scan S. 71-73, ca. 47-48%)',
				chapter: 'Enemies of Young Men: Addictions',
				context: 'Addiction-Economy-These, Adoleszenz-Statistiken, Congress-Versagen (40 Hearings, null Gesetze).'
			}
		],
		evidenceRefs: [
			{ label: 'Haidt — The Anxious Generation', authorSearch: 'Haidt' },
			{ label: 'Twenge — Adolescent Depression/Suicide Trends', authorSearch: 'Twenge' }
		]
	},

	{
		id: 'porn-mating-crisis',
		step: 7,
		shortLabel: 'Porn + Dating-Apps + fehlende Third Places → Mating-Rezession',
		type: 'causal',
		claim:
			'Porn ist „a risk- and masculinity-killer": Er nimmt jungen Männern den Antrieb, Ablehnung im echten Leben zu riskieren („the zillion-dollar skill […] is his willingness to endure rejection"). Dating-Apps konzentrieren die Nachfrage auf die Top-10%-Männer (60% der Hinge-Likes); die Bottom-80% der Tinder-Männer konkurrieren um die Bottom-22% der Frauen. Parallel verschwinden Third Places (400+ UK-Nightclubs geschlossen). Ergebnis: Hypogamie steigt, arme Männer heiraten nicht mehr (-35% in der untersten Einkommens-Quartile 1970-2011), und es entsteht „Homo solo" — und „there is nothing more dangerous than a lonely, broke young man."',
		evidence:
			'Grubbs/Kraus/Perry (2019) zu selbstberichteter Porn-Addiction (11% der Männer); Peter & Valkenburg (2009) Längsschnitt zu Objektifizierung; Bridges et al. (2024); Matthew Ball zu OnlyFans-Ökonomie ($6,6 Mrd. 2023); Hinge-Daten via Quartz; Tinder-„Gini" aus einem pseudonymen Medium-Post; Greenstone & Looney (Hamilton Project) zur Heiratsquote nach Einkommen; Pew zu Bildungs-Heiratsgap.',
		status: 'yellow',
		explanation:
			'Ein Mix aus solide und wacklig. Solide: die Heirats-Klassen-Schere (Hamilton Project, Pew), die OnlyFans/Pornhub-Ökonomie (Ball), der Rückgang an Begegnungsorten. Wacklig: die Tinder-Ungleichheits-Zahlen (pseudonymer Blogpost von 2015); die Porn-Kausalthese stützt sich auf Korrelationsstudien, und Galloways eigene Hauptquelle Grubbs zeigt, dass „gefühlte Porn-Addiction" stark von moralischer Inkongruenz getrieben ist — nicht vom Konsum selbst. Bemerkenswert ehrlich: Galloway outet sich selbst als Porn-Konsument mit Phasen „technischer" Addiction und plädiert für Moderation statt Abstinenz.',
		dependsOn: ['addiction-economy'],
		collapseRisk:
			'Die „Porn kills mating drive"-Kausalkette ist empirisch dünn (kaum Längsschnitt-Evidenz, Peer-Review-Lücke, die Galloway selbst benennt). Die Mating-Rezession als PHÄNOMEN (weniger Sex, spätere Partnerschaften, Klassen-Gap) überlebt unabhängig davon — die Gewichtung der Ursachen (Ökonomie vs. Apps vs. Porn) bleibt offen.',
		bookLocations: [
			{
				pages: 'Kap. 7 (Scan S. 94-100, ca. 62-66%)',
				chapter: 'Online Dating / Winner Take Most / Porn-Free',
				context: 'Dating-App-Ungleichheit, Klassen-Heiratsgap, Second-Order-Effects (Geburtenrate, Radikalisierung), Porn-Kapitel.'
			}
		],
		evidenceRefs: [
			{ label: 'Grubbs, Kraus & Perry (2019) — Porn Self-Reported Addiction', authorSearch: 'Grubbs' },
			{ label: 'Greenstone & Looney — The Marriage Gap', authorSearch: 'Greenstone' }
		]
	},

	{
		id: 'guardrails',
		step: 8,
		shortLabel: 'Guardrails: Männer brauchen externe Strukturen (Beziehungen, Gruppen, Arbeit)',
		type: 'causal',
		claim:
			'Männer jeden Alters brauchen ein „organizing principle": Ohne Guardrails (Mutter, Fraternity, Freundin, Ehefrau, Arbeit) verwahrlosen junge Männer — „they detach from the world, put on weight, stop shaving […] and revert to the same negative surplus value they had as kids." Die Anwesenheit einer Partnerin allein sei „a positive vote for the overall mental health of a young man". Single-Männer sterben laut Galloway „acht bis siebzehn Jahre früher" als verheiratete.',
		evidence:
			'Holt-Lunstad et al. (2015) Meta-Analyse (Mortalität +20-32% bei Isolation); Harvard Study of Adult Development; die „8-17 Jahre"-Zahl stammt aus einem Glamour-Artikel über eine University-of-Louisville-Studie; eigene Biografie (Frat, College-Freundin, Ehefrau) als Anekdotik.',
		status: 'yellow',
		explanation:
			'Die Richtung ist gut belegt: Soziale Integration ist einer der stärksten bekannten Prädiktoren für Gesundheit und Lebensdauer, und der Effekt ist bei Männern größer (Beziehungsende → Schrumpfen männlicher Netzwerke, Killam). Aber die „8-17 Jahre"-Spanne ist eine Extremlesart einer einzelnen Studie via Frauenzeitschrift — seriöse Schätzungen des Ehe-Überlebensvorteils liegen deutlich niedriger und sind mit Selektionseffekten konfundiert (gesündere Männer heiraten eher). Klassisches Galloway-Muster: richtige Richtung, überdrehte Zahl, schwache Quelle.',
		dependsOn: ['pfc-timing'],
		collapseRisk:
			'Selektionseffekte sind die Achillesferse: Wenn Ehe/Beziehung primär SELEKTIERT statt SCHÜTZT, wird aus der Policy-Folgerung („mehr Partnerschaft verordnen") ein Zirkelschluss. Die Kernbeobachtung (Isolation ist tödlich, Männer sind anfälliger) bleibt.',
		bookLocations: [
			{
				pages: 'Kap. 7 (Scan S. 90-91, ca. 59-60%)',
				chapter: 'Guardrails',
				context: 'Guardrail-Konzept von der Mutter über die Frat bis zur Ehefrau; Homo-solo-Warnung.'
			}
		],
		evidenceRefs: [
			{ label: 'Holt-Lunstad et al. (2015) — Loneliness Meta-Analyse', authorSearch: 'Holt-Lunstad' },
			{ label: 'Harvard Study of Adult Development', authorSearch: 'Harvard' }
		]
	},

	{
		id: 'loneliness-friendship',
		step: 9,
		shortLabel: 'Friendship Recession: Männerfreundschaft als Medizin',
		type: 'observation',
		claim:
			'Amerikaner ohne enge Freunde: 3% (1990) → 12-15% (2021), Männer besonders betroffen; zwei Drittel der US-Männer stimmen zu „No one really knows me well"; Männer verlassen sich emotional auf Partnerinnen statt Freunde. Loneliness wirkt wie 15 Zigaretten täglich und kostet die US-Wirtschaft $406 Mrd./Jahr; Freundschaft ist zugleich ökonomischer Beschleuniger (Chetty: reichere Freunde = stärkster Prädiktor sozialer Mobilität). Galloways Praxis: Friendship-Cold-Calling, geteilte Kalender, „go first" bei verletzlichen Themen.',
		evidence:
			'Cox / Survey Center on American Life (2021); Equimundo State of American Men (2023); U.S. Surgeon General Advisory (2023); Holt-Lunstad; Chetty et al. (2022) Social Capital II; Pearson/NYT zu Check-in-Studien.',
		status: 'green',
		explanation:
			'Das empirisch sauberste Kapitel des Buches. Die Survey-Daten sind aktuell und mehrfach repliziert, die Mortalitäts-Meta-Analytik ist Standard, Chettys Social-Capital-Studie ist methodisch exzellent. Konvergiert präzise mit Niobe Ways Deep-Secrets-Befund (Verlust männlicher Intimität in der Adoleszenz) — Galloway liefert die Erwachsenen-Fortsetzung derselben Kurve. Die „15 Zigaretten"-Formel ist eine popularisierte, aber vertretbare Übersetzung von Holt-Lunstad.',
		dependsOn: ['addiction-economy'],
		collapseRisk:
			'Gering. Angreifbar ist nur die $406-Mrd.-Zahl (Modellrechnung mit heroischen Annahmen) und die Frage, wie viel der Friendship Recession Kohorten- vs. Messeffekt ist.',
		bookLocations: [
			{
				pages: 'Kap. 6 Friendship (Scan S. 76-88, ca. 50-58%)',
				chapter: 'Friendship',
				context: 'Adam-Erzählung, Friendship-Statistiken, Karsen & Charly, Scotland-Geburtstag, Show-up-Ethik.'
			}
		],
		evidenceRefs: [
			{ label: 'Cox — State of American Friendship (2021)', authorSearch: 'Cox' },
			{ label: 'Chetty et al. (2022) — Social Capital II', authorSearch: 'Chetty' }
		]
	},

	// ======== Row 3: Das normative Gerüst ========
	{
		id: 'protect-provide-procreate',
		step: 10,
		shortLabel: 'Der dreibeinige Hocker: Protect, Provide, Procreate',
		type: 'theory',
		claim:
			'Auf die Fragen „Why are men here? What do men do?" antwortet Galloway mit drei zeitlosen „givens": Männer beschützen (Mensch-Ideal, „Real men don\'t start bar fights; they break them up"), versorgen (ökonomische Verantwortung als Default-Annahme jedes Mannes, inkl. der Fähigkeit, einer besser verdienenden Partnerin Platz zu machen) und pflanzen sich fort (nicht maximale Verbreitung, sondern Investment: Kinder großziehen, „stronger, smarter, faster" als man selbst). „Protector" sei das stabilste der drei Beine.',
		evidence:
			'Kein empirischer Beleg beansprucht — evolutionär gerahmte Normativität. Rückgriff auf Reeves\' Beobachtung, dass Vaterschaft/Provider-Rollen kulturelle Skripte brauchen.',
		status: 'untestable',
		explanation:
			'Ein normatives Framework, keine Hypothese. Bemerkenswert ist die RHETORISCHE Operation: Galloway definiert Männlichkeit über prosoziale Funktionen und erklärt Grausamkeit per Definition zu „anti-masculine" — dieselbe Umdeutungsstrategie, die hooks (Liebe als Männlichkeit) und Reeves (prosocial masculinity) fahren, nur mit alpha-kompatiblem Vokabular („big-dick energy" für D-Day-Soldaten). Das macht die Position politisch anschlussfähig nach rechts UND links — und immun gegen Falsifikation.',
		dependsOn: ['t-biology', 'cultural-abandonment'],
		collapseRisk:
			'Als Definition nicht falsifizierbar. Kritisierbar von zwei Seiten: Connell würde die Funktionalisierung als Sex-Role-Theorie-Neuauflage sehen (wer definiert, was „echte" Männlichkeit ist, reproduziert Hegemonie); aus der Empirie-Ecke fehlt jeder Beleg, dass die Trias spezifisch MÄNNLICH statt allgemein menschlich ist — was Galloway teils selbst konzediert („mensch" heißt schlicht Mensch).',
		bookLocations: [
			{
				pages: 'Einleitung (Scan S. 4-5, ca. 2-3%)',
				chapter: 'Introduction',
				context: 'Die Stool-Metapher als Programm des Buches, wiederholt in der Letter-to-my-Sons-Coda.'
			}
		],
		evidenceRefs: [
			{ label: 'Reeves — prosocial masculinity (Vorbild)', authorSearch: 'Reeves' }
		]
	},

	{
		id: 'surplus-value',
		step: 11,
		shortLabel: 'Surplus Value: mehr geben als nehmen — das Reeves-Leitmotiv',
		type: 'theory',
		claim:
			'Das Lebensziel eines Mannes ist, „surplus value" zu schaffen (explizit von Reeves übernommen, „my Yoda on this subject"): mehr Liebe geben als empfangen wurde, ein besserer Vater sein als der eigene Vater, ohne Scorecard leben. Anwendungen im Buch: Ehe („never keep score"), Vaterschaft („ending up in the minus column is what being a good dad means"), Freundschaft („show up, don\'t ask"), Philanthropie (Selbstbesteuerung: jährlich mehr verschenken als ausgeben) und Manieren als „Surplus value in Aktion".',
		evidence:
			'Normatives Prinzip; empirische Seitenstützen: Caregiver-Mortalitätsvorteil (Roth et al. 2018), Forgiveness-Beziehungsforschung (Braithwaite et al.), Gottman-Befunde.',
		status: 'untestable',
		explanation:
			'Der ethische Kern des Buches und seine originellste Leistung: Galloway übersetzt Reeves\' Policy-Konzept in eine individuelle Lebensethik und erzählt die eigene Biografie als Bekehrungsgeschichte vom transaktionalen „Tape-Measure"-Leben zur Generosität. Nicht falsifizierbar, aber kohärent durchgehalten — und als Selbstkritik glaubwürdiger als die meisten Männlichkeits-Ratgeber, weil Galloway seine Versäumnisse (Scheidung, Vaterferne in den ersten Jahren, Karsen im Stich gelassen) ungeschönt dokumentiert.',
		dependsOn: ['protect-provide-procreate'],
		collapseRisk:
			'Keiner im empirischen Sinn. Die Spannung liegt intern: Das Surplus-Ideal kollidiert sichtbar mit Galloways eigenem Hustle-Kapitel („I\'m all fucking over everybody all the fucking time", Balance ist ein Mythos) — das Buch löst nie auf, ob die Werk-Phase Voraussetzung oder Verrat des Surplus-Ideals war.',
		bookLocations: [
			{
				pages: 'Einleitung + Kap. 8 + Kap. 10 (Scan S. 5, 113-120, 130)',
				chapter: 'Introduction / Fatherhood / Life Is So Rich',
				context: '„This phrase shows up a lot in these pages" — Leitmotiv von der Einleitung bis zur Giving-Back-Selbstbesteuerung.'
			}
		],
		evidenceRefs: [
			{ label: 'Reeves — surplus value Konzept', authorSearch: 'Reeves' },
			{ label: 'Roth et al. (2018) — Caregiver-Mortalität', authorSearch: 'Roth' }
		]
	},

	// ======== Row 4: Die Lösungen ========
	{
		id: 'mentorship-solution',
		step: 12,
		shortLabel: 'Die Scott-Methode: Fitness, Nutrition, Money, Work — plus Mentorship älterer Männer',
		type: 'solution',
		claim:
			'Für einzelne junge Männer: Screen-Zeit auditieren und 8-12 h/Woche reallozieren; 3-4× wöchentlich Kraft/Cardio; irgendeinen Job annehmen („how do you make a lot of money? By starting to make money… any money"); 3× wöchentlich unter Fremde gehen und Rejection-Kallus aufbauen. Gesellschaftlich: „The fastest blue-line path to a better world is more men becoming irrationally passionate about the well-being of a child who isn\'t their own" — Mentorship müsse entpathologisiert werden (3× mehr Big-Sister- als Big-Brother-Bewerber in NYC).',
		evidence:
			'Anekdotische Mentee-Dialoge; Exercise-Depression-Evidenz (Noetel et al. 2024 BMJ Netzwerk-Meta-Analyse) als indirekte Stütze der Fitness-Komponente; Boys-listen-to-non-parents-Befund (Abrams et al. 2022, Journal of Neuroscience).',
		status: 'untestable',
		explanation:
			'Als Gesamtpaket nie evaluiert — es ist Coaching-Praxis, kein Programm mit Outcome-Daten. Einzelkomponenten haben aber überraschend gute Evidenz: Exercise ist laut Noetel et al. die stärkste nicht-pharmakologische Depressions-Intervention; die neuronale Umorientierung Adoleszenter weg von Elternstimmen (Abrams) stützt die Mentorship-These elegant. Die Grundidee konvergiert mit Reeves\' HEAL-Argument (mehr Männer in erziehende Rollen) und Gurians „Tribe"-Konzept.',
		dependsOn: ['guardrails', 'surplus-value', 'loneliness-friendship'],
		collapseRisk:
			'Mentoring-Programme haben in RCTs (Big Brothers Big Sisters) reale, aber bescheidene Effektstärken — die „fastest blue-line path"-Superlative ist Rhetorik. Risiko der Methode: Survivorship-Bias des Selfmade-Narrativs; was bei ambitionierten Mentees eines Prominenten funktioniert, skaliert nicht zwingend.',
		bookLocations: [
			{
				pages: 'Kap. 5 (Scan S. 65-67, ca. 43-44%) + Kap. 8 (Scan S. 118-119, ca. 79%)',
				chapter: 'The Scott Method / Crushing It',
				context: 'Mentoring-Playbook mit Dialog-Beispielen; Fatherhood-by-proxy-Plädoyer.'
			}
		],
		evidenceRefs: [
			{ label: 'Noetel et al. (2024) BMJ — Exercise vs. Depression', authorSearch: 'Noetel' },
			{ label: 'Abrams et al. (2022) — Shift von Eltern- zu Fremdstimmen', authorSearch: 'Abrams' }
		]
	},

	{
		id: 'aspirational-masculinity',
		step: 13,
		shortLabel: 'Aspirational Masculinity: fit, patriotisch, großzügig, emotional — der Galloway-Code',
		type: 'solution',
		claim:
			'Das Zielbild (kondensiert im „Letter to My Sons"): ein Code aus drei Adjektiven („generous, good dad, a patriot"), physische UND mentale Stärke, „acceptable at a dance and invaluable in a shipwreck" (via Reeves), radikale Emotionalität („try to be more emotive—reckless even"), Kindness als Praxis, Schutz auch verbal („either step up to defend others or keep quiet"), und die Weigerung, „toxische Männlichkeit" als Kategorie zu akzeptieren: Wer grausam ist, ist nicht maskulin, sondern anti-maskulin.',
		evidence:
			'Normative Synthese. Empirische Seitenstützen aus den vorherigen Gliedern (Emotionsexpression, Fitness, soziale Einbettung); der „Iceman/ballast"-Aspekt zitiert Kipling.',
		status: 'untestable',
		explanation:
			'Die Vision ist Reeves\' prosocial masculinity in Selbsthilfe-Übersetzung, angereichert um Galloways Spezifika: Patriotismus als explizite Männlichkeits-Komponente (in der Bibliothek einzigartig), Reichtums-Reflexion und die Verbindung von Hyper-Erfolgs-Habitus mit Verletzlichkeits-Rhetorik. Die definitorische Immunisierung („toxisch = anti-maskulin") ist rhetorisch elegant, analytisch aber ein Taschenspielertrick: Sie löst das Problem toxischer Verhaltensmuster nicht, sie benennt es nur um — Connell und Urwin würden einwenden, dass genau diese Idealisierungs-Bewegung die Selbstkritik von Männlichkeitsnormen verhindert.',
		dependsOn: ['surplus-value', 'mentorship-solution', 'porn-mating-crisis'],
		collapseRisk:
			'Als normative Vision unfalsifizierbar. Ihre Schwachstelle ist Konsistenz: Das Buch predigt Anti-Materialismus und beschreibt zugleich Gulfstream-Anteile, Equinox und Scotland-Castle-Partys; es predigt Präsenz und dokumentiert Dauerreisen. Galloway entschärft das durch Selbstironie — aber ob „Do as I say, not as I did" als Männlichkeits-Pädagogik trägt, bleibt offen.',
		bookLocations: [
			{
				pages: 'Conclusion (Scan S. 133-135, ca. 88-89%)',
				chapter: 'A Letter to My Sons',
				context: 'Die Synthese als Brief: Rudel statt Isolation, Protector-Schwerpunkt, Kindness-Praxis, „Be me + better".'
			}
		],
		evidenceRefs: [
			{ label: 'Reeves — dance/shipwreck-Zitat', authorSearch: 'Reeves' },
			{ label: 'Kipling — If (Ballast-Ideal)', authorSearch: 'Kipling' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'aspirational-masculinity')!;
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
		'Galloways Kette ist eine Memoir-Ethik mit statistischer Begleitmusik — und genau so sollte man sie lesen. Von 13 Gliedern sind 3 grün (Krisen-Diagnose, PFC-Timing, Friendship Recession — alle extern durch Reeves, Giedd, Cox/Holt-Lunstad validierbar), 5 gelb (die Kausal-Mechanismen: Addiction Economy, Porn/Mating, Guardrails, T-Biologismus, Wahl-2024-Deutung — jeweils richtige Richtung, aber überdrehte Zahlen aus journalistischen Sekundärquellen), 1 rot (die Brizendine-Hirn-Claims samt einer falsch etikettierten, ZURÜCKGEZOGENEN Studie als Chart-Quelle) und 4 untestbar (der normative Kern: Protect/Provide/Procreate, Surplus Value, Scott-Methode, Aspirational Masculinity). ' +
		'Das Muster ist konsistent: Wo Galloway Reeves referiert, ist er solide; wo er selbst recherchiert, zitiert er Medium-Posts, Glamour-Artikel und pseudonyme Blogs — er sagt es im Buch selbst ehrlich: „The thoughts in here are observations, not peer-reviewed academic research." Die Selbstauskunft ist die beste Lesehilfe. ' +
		'Für den Korpus ist das Buch dennoch wertvoll, und zwar aus einem Grund, den keine andere Quelle bietet: Es ist die INNENANSICHT. Pollack, Way und Süfke beschreiben die männliche Maske klinisch von außen; Galloway dokumentiert sechzig Jahre gelebte Maske von innen — die Scham des armen Kindes, das transaktionale Frühwerk, die 16 tränenlosen Jahre, die Bekehrung zur Generosität. Als Datenpunkt (n=1, aber ungewöhnlich ehrlich) bestätigt er die klinische Konvergenz der Bibliothek fast vollständig — während er ihr Vokabular („toxische Männlichkeit") lautstark ablehnt. Diese Kombination — klinisch konvergent, rhetorisch dissident — macht ihn zur idealen Brückenquelle für Leser, die hooks oder Pollack nie anfassen würden.'
};
