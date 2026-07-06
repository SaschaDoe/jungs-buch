// cross-book-data.ts
// Unified cross-book causal path comparison data.
// Groups related claims across all 8 books into thematic clusters,
// tagged by scientific field for filtering.

// ── Book metadata ──────────────────────────────────────────────

export interface BookMeta {
	id: string;
	title: string;
	shortTitle: string;
	author: string;
	color: string;
	route: string;
}

export const books: BookMeta[] = [
	{ id: 'jvh', title: 'Jungs von heute, Männer von morgen', shortTitle: 'Jungs von heute', author: 'Anne Dittmann', color: '#a78bfa', route: '/jungs-von-heute' },
	{ id: 'wgm', title: 'Why Gender Matters', shortTitle: 'Why Gender Matters', author: 'Leonard Sax', color: '#34d399', route: '/why-gender-matters' },
	{ id: 'ba', title: 'Boys Adrift', shortTitle: 'Boys Adrift', author: 'Leonard Sax', color: '#f59e0b', route: '/boys-adrift' },
	{ id: 'wb', title: 'The Wonder of Boys', shortTitle: 'Wonder of Boys', author: 'Michael Gurian', color: '#06b6d4', route: '/wonder-of-boys' },
	{ id: 'pb', title: 'Pink Brain, Blue Brain', shortTitle: 'Pink Brain Blue Brain', author: 'Lise Eliot', color: '#ec4899', route: '/pink-brain-blue-brain' },
	{ id: 'mf', title: 'Male, Female', shortTitle: 'Male, Female', author: 'David C. Geary', color: '#6366f1', route: '/male-female' },
	{ id: 'ww', title: 'Warriors and Worriers', shortTitle: 'Warriors & Worriers', author: 'Joyce F. Benenson', color: '#ef4444', route: '/warriors-and-worriers' },
	{ id: 'rc', title: 'Raising Cain', shortTitle: 'Raising Cain', author: 'Kindlon & Thompson', color: '#14b8a6', route: '/raising-cain' },
	{ id: 'rb', title: 'Real Boys', shortTitle: 'Real Boys', author: 'William S. Pollack', color: '#fb7185', route: '/real-boys' },
	{ id: 'gm', title: 'Der gemachte Mann', shortTitle: 'Der gemachte Mann', author: 'Raewyn Connell', color: '#c084fc', route: '/der-gemachte-mann' },
	{ id: 'wtc', title: 'The Will to Change', shortTitle: 'Will to Change', author: 'bell hooks', color: '#f472b6', route: '/will-to-change' },
	{ id: 'ms', title: 'Männliche Sozialisation', shortTitle: 'Männliche Sozialisation', author: 'Lothar Böhnisch', color: '#fbbf24', route: '/maennliche-sozialisation' },
	{ id: 'mse', title: 'Männerseelen', shortTitle: 'Männerseelen', author: 'Björn Süfke', color: '#22d3ee', route: '/maennerseelen' },
	{ id: 'bdc', title: "Boys Don't Cry", shortTitle: "Boys Don't Cry", author: 'Jack Urwin', color: '#818cf8', route: '/boys-dont-cry' },
	{ id: 'obm', title: 'Of Boys and Men', shortTitle: 'Of Boys and Men', author: 'Richard V. Reeves', color: '#10b981', route: '/of-boys-and-men' },
	{ id: 'ds', title: 'Deep Secrets', shortTitle: 'Deep Secrets', author: 'Niobe Way', color: '#f43f5e', route: '/deep-secrets' },
	{ id: 'pr', title: 'Was Sie (Wirklich) Über Erziehung Wissen Müssen', shortTitle: 'Prüfer (2026)', author: 'Tillmann Prüfer', color: '#ec4899', route: '/was-sie-wirklich' },
	{ id: 'nbm', title: 'Notes on Being a Man', shortTitle: 'Notes on Being a Man', author: 'Scott Galloway', color: '#eab308', route: '/notes-on-being-a-man' },
];

// ── Scientific fields ──────────────────────────────────────────

export interface ScienceField {
	id: string;
	name: string;
	color: string;
}

export const scienceFields: ScienceField[] = [
	{ id: 'neuroscience', name: 'Neuroscience', color: '#6366f1' },
	{ id: 'dev-psych', name: 'Developmental Psychology', color: '#3b82f6' },
	{ id: 'evo-bio', name: 'Evolutionary Biology', color: '#10b981' },
	{ id: 'endocrinology', name: 'Endocrinology / Hormones', color: '#f59e0b' },
	{ id: 'education', name: 'Education Research', color: '#ec4899' },
	{ id: 'sociology', name: 'Sociology / Gender Studies', color: '#8b5cf6' },
	{ id: 'clinical', name: 'Clinical Psychology', color: '#14b8a6' },
	{ id: 'epidemiology', name: 'Epidemiology / Public Health', color: '#f97316' },
];

// ── Theme cluster ──────────────────────────────────────────────

export interface BookClaim {
	bookId: string;
	chainId: string;       // id in that book's argument-chain-data
	shortLabel: string;
	claim: string;
	status: 'red' | 'yellow' | 'green' | 'untestable';
	type: 'premise' | 'observation' | 'causal' | 'theory' | 'consequence' | 'solution';
}

export type Stance = 'biology-strong' | 'biology-moderate' | 'socialization-strong' | 'interactionist' | 'neutral';

export interface ThemeCluster {
	id: string;
	name: string;
	description: string;
	fields: string[];      // science field IDs
	claims: BookClaim[];
	/** Where the books broadly land on this topic */
	stanceSummary?: string;
}

// ── The actual theme clusters ──────────────────────────────────

export const themeClusters: ThemeCluster[] = [
	// ─── 1. Brain & Biology: Nature vs Nurture ───
	{
		id: 'brain-sex-differences',
		name: 'Brain & Biological Sex Differences',
		description: 'How large are innate brain/biological differences between boys and girls — and how much do they determine behavior?',
		fields: ['neuroscience', 'evo-bio', 'endocrinology'],
		stanceSummary: 'Books sharply disagree: Eliot and Dittmann minimize biological differences, Gurian and Sax maximize them, Geary and Benenson take data-driven middle-to-strong positions. Prüfer verortet sich in der Eliot-Mitte („biologisch klein, sozial groß"), prüft Einzelstudien aber strenger als Dittmann und akzeptiert Davis & Hines-Meta zu stabilen Spielvorlieben.',
		claims: [
			{ bookId: 'jvh', chainId: 'born-same', shortLabel: 'Gehirne sind gleich', claim: 'Boys and girls are born with nearly identical brains. 99.8% of genes are shared. Sex differences are almost entirely socially shaped.', status: 'red', type: 'premise' },
			{ bookId: 'pb', chainId: 'brain-diff-small', shortLabel: 'Brain sex differences are small', claim: 'Sex differences in children\'s brains are much smaller than commonly believed. Only brain size and maturation timing differ reliably.', status: 'green', type: 'premise' },
			{ bookId: 'pb', chainId: 'psych-diff-small', shortLabel: 'Most psych differences small', claim: 'Most psychological sex differences are small (d < 0.35). Janet Hyde\'s gender similarities hypothesis.', status: 'green', type: 'premise' },
			{ bookId: 'wgm', chainId: 'sensory-differences', shortLabel: 'Sensory differences', claim: 'Sex differences in sensory perception (smell, hearing, vision) are real and biologically based.', status: 'green', type: 'premise' },
			{ bookId: 'wgm', chainId: 'brain-pace', shortLabel: 'Brain development pace gap', claim: 'Girls\' brains develop faster than boys\', with a gap of roughly 1-2 years during childhood.', status: 'green', type: 'premise' },
			{ bookId: 'wb', chainId: 'biology-prime-mover', shortLabel: 'Biology is the prime mover', claim: 'Boys are predominantly shaped by testosterone and male brain structure rather than socialization.', status: 'yellow', type: 'premise' },
			{ bookId: 'wb', chainId: 'brain-differences', shortLabel: 'Male/female brains structurally different', claim: 'The male brain is 10-15% larger, has a smaller corpus callosum, different hemisphere specialization.', status: 'red', type: 'premise' },
			{ bookId: 'mf', chainId: 'sex-hormones', shortLabel: 'Hormones organize sex differences', claim: 'Prenatal testosterone masculinizes play behavior; the testosterone-immunocompetence trade-off maintains honest signaling.', status: 'green', type: 'causal' },
			{ bookId: 'ww', chainId: 'innate-sex-diffs', shortLabel: 'Innate sex differences', claim: 'Sex differences in behavior have a significant innate basis — appearing in infancy, across cultures, and in primates.', status: 'green', type: 'premise' },
			{ bookId: 'rc', chainId: 'biology-not-destiny', shortLabel: 'Biology does not destiny violence', claim: 'Testosterone does not cause aggression in preadolescent boys. Nature and nurture are inextricably linked.', status: 'green', type: 'premise' },
			{ bookId: 'rb', chainId: 'boys-expressive', shortLabel: 'Boys born more emotional (RB)', claim: 'Male infants are born MORE emotionally expressive than females. Mothers mirror boys\' smiles but ignore their sadness (0% vs 22% for girls). Expressiveness is socialized out of them.', status: 'green', type: 'premise' },
			{ bookId: 'gm', chainId: 'reject-biology', shortLabel: 'No "true masculinity" in the body (GM)', claim: 'There is no biological substrate that determines a "true masculinity" — within-sex variation always exceeds between-sex variation, cross-cultural variability is enormous. Connell rereads the Imperato-McGinley Dominican 5α-reductase study to show it actually supports the social-construction view rather than refuting it. Kemper 1990: testosterone-status causation runs SOCIAL→BIOLOGICAL.', status: 'green', type: 'premise' },
			{ bookId: 'wtc', chainId: 'boys-expressive', shortLabel: 'Male infants more expressive (WTC)', claim: '"In the real world of male and female babies, male babies express themselves more. They cry longer and louder. They come into the world wanting to be seen and heard." hooks imports this from the Kindlon/Thompson/Malatesta research tradition as her anti-essentialist anchor: if boys START more expressive, later "stoicism" cannot be biological.', status: 'green', type: 'premise' },
			{ bookId: 'ms', chainId: 'reject-biology', shortLabel: 'Anti-Essentialismus mit Leib-Vorbehalt (MS)', claim: 'Biologistische Erklärungen männlichen Verhaltens (man-the-hunter, Testosteron als Ursache für Aggression) sind nicht haltbar — Hüthers Hirnplastizität-Forschung (~90% der Verknüpfungen entstehen erst im Leben), archäologische Kritik von Palm. ABER: Radikalkonstruktivistische Positionen greifen zu kurz — Geschlecht reicht leibseelisch in die Natur des Menschen hinein. Das Verwirrspiel "Anlage oder Umwelt" entwirrt sich als Machtfrage, die zur historischen Struktur geworden ist.', status: 'yellow', type: 'premise' },
			{ bookId: 'obm', chainId: 'nature-and-nurture', shortLabel: 'Nature AND Nurture: Brain-Timing ist real (OBM)', claim: 'Reeves akzeptiert biologische Sex-Differenzen explizit — aber als dimorph und kulturell moduliert, nicht als binär-deterministisch. Ritchie et al. UK Biobank MRI-Studie mit 5.216 Teilnehmern: selbst bei der größten Hirndifferenz gibt es 48,1% Overlap. Testosteron amplifiziert Aggression, triggert sie nicht (Hooven). Jungen sind im Alter von 17 MONATEN bereits 5× aggressiver. Präfrontaler Kortex reift bei Jungen ~2 Jahre später (Steinberg, Jensen, Sapolsky). Reeves lehnt explizit Rippon (Biologie-Leugnung) UND Sax/Gurian (Biologismus) ab.', status: 'yellow', type: 'premise' },
			{ bookId: 'pr', chainId: 'pr-geschlechterunterschied-sozial', shortLabel: 'Biologisch klein, sozial groß (PR)', claim: 'Prüfer verortet sich bei Eliot: Gehirnunterschiede zwischen den Geschlechtern sind klein und größtenteils durch Körpergröße erklärt; Intragruppen-Varianz übersteigt Intergruppen-Varianz. Gesellschaftliche Erwartungen erzeugen die dominanten Effekte (schulische Leistung, Berufswahl, psychische Gesundheit). Stützt sich auf Eliot (2021) „Dump the dimorphism", DeCasien (2022), OECD (2024). Kap. 11.', status: 'green', type: 'causal' },
			{ bookId: 'pr', chainId: 'pr-spielvorlieben-stabil', shortLabel: 'Geschlechts-Spielvorlieben stabil (PR)', claim: 'Davis & Hines (2021) Meta-Analyse über 75 Studien und 50 Jahre: Jungen bevorzugen männlich-assoziierte Spielsachen (Fahrzeuge, Waffen), Mädchen weiblich-assoziierte (Puppen). Prüfer akzeptiert diese Meta-Evidenz als deskriptiv robust, lässt die kausale Frage (angeboren vs. früh konditioniert) aber offen. Kap. 11.', status: 'green', type: 'observation' },
			{ bookId: 'nbm', chainId: 't-biology', shortLabel: '„More nature than nurture“ — T als Engine of Masculinity (NBM)', claim: 'Galloway übernimmt Hoovens T-Fakten (10-20× Konzentration, vier Entwicklungsschübe, Amplifier-Rolle), zieht daraus aber eine stärkere Folgerung als seine eigene Quelle: „My experience is that it’s more nature than nurture.“ Dazu zitiert er Brizendine-Claims („double the brain space devoted to sexual drive“), die die Neurosexismus-Kritik (Eliot, Joel) längst demontiert hat, und eine Chart, deren Quelle eine zurückgezogene Studie über ein anderes Konstrukt ist (Diaz & Bailey ROGD als „Body Dysmorphia“). Er steht damit biologistischer da als Reeves — näher bei Sax/Gurian.', status: 'yellow', type: 'premise' },
		]
	},

	// ─── 2. Socialization & Boy Code ───
	{
		id: 'socialization-boy-code',
		name: 'Socialization & "Boy Code"',
		description: 'Do cultural norms ("be tough, don\'t cry") shape boys\' emotional suppression — or do biology and temperament play the larger role?',
		fields: ['sociology', 'dev-psych'],
		stanceSummary: 'Dittmann and Raising Cain emphasize socialization as the primary driver. Eliot sees socialization amplifying small biological seeds. Sax, Gurian, Benenson, and Geary see biology as the larger factor. Prüfer akzeptiert das Boy-Code-Muster empirisch über Levants Alexithymie-Meta (Franz 2008 dt. repräsentativ, Thorberg 2011 Meta), lehnt aber die Alleinwirksamkeit der Sozialisation ab und betont Gen-Umwelt-Interaktion.',
		claims: [
			{ bookId: 'jvh', chainId: 'socialization', shortLabel: 'Boy Code / Sozialisation', claim: 'Society socializes boys into restrictive masculinity norms from earliest childhood: suppress emotions, be tough, don\'t cry.', status: 'red', type: 'premise' },
			{ bookId: 'jvh', chainId: 'adults-treat-different', shortLabel: 'Baby-X-Beweis', claim: 'Adults treat babies differently based on perceived gender (Baby-X experiments).', status: 'red', type: 'causal' },
			{ bookId: 'pb', chainId: 'emotion-learned', shortLabel: 'Emotional suppression is learned', claim: 'Emotional expression differences are learned, not hard-wired. Boys start MORE emotionally reactive than girls.', status: 'green', type: 'causal' },
			{ bookId: 'pb', chainId: 'boys-more-emotional', shortLabel: 'Boys start MORE emotional', claim: 'Infant boys are more emotionally reactive/fussy than girls — contradicting the "tough boy" stereotype.', status: 'green', type: 'observation' },
			{ bookId: 'pb', chainId: 'gender-identity-amplify', shortLabel: 'Gender identity amplifies differences', claim: 'Gender identity emerges at 2-3 years and massively amplifies small initial differences through self-socialization.', status: 'green', type: 'causal' },
			{ bookId: 'rc', chainId: 'emotional-potential', shortLabel: 'Boys born emotionally capable', claim: 'All boys are born with full emotional capacity; newborn boys are actually more emotionally reactive. Cultural training suppresses this.', status: 'green', type: 'premise' },
			{ bookId: 'rc', chainId: 'culture-of-cruelty', shortLabel: 'Adolescent culture of cruelty', claim: 'From age 10, boys enter a peer culture of psychological warfare driven by the need to prove masculinity.', status: 'yellow', type: 'observation' },
			{ bookId: 'ww', chainId: 'males-value-rules', shortLabel: 'Males value rules', claim: 'Males value rules more than females and create complex rule systems — boys\' games involve more elaborate rules.', status: 'green', type: 'observation' },
			{ bookId: 'wb', chainId: 'male-culture-immutable', shortLabel: 'Male culture is biologically immutable', claim: 'Boy culture — competitiveness, hierarchy, aggression — is biologically driven and cannot be socialized away.', status: 'untestable', type: 'theory' },
			{ bookId: 'rb', chainId: 'boy-code', shortLabel: 'Boy Code (RB)', claim: 'An unwritten "Boy Code" of outdated 19th-century masculinity rules is imposed on boys through four injunctions: Sturdy Oak, Give \'em Hell, Big Wheel, No Sissy Stuff. Adopts David & Brannon framework.', status: 'untestable', type: 'theory' },
			{ bookId: 'rb', chainId: 'shame-hardening', shortLabel: 'Shame-hardening mechanism (RB)', claim: 'Boys are shamed whenever they show vulnerability, producing a "hardened" boy who loses access to his own feelings. Shame = "the feeling state that accompanies emotional disconnection" (Jordan/Stone Center).', status: 'yellow', type: 'causal' },
			{ bookId: 'rb', chainId: 'mask-of-masculinity', shortLabel: 'Mask of masculinity (RB)', claim: 'Boys wear a defensive mask presenting "I\'m fine" toughness that fools even themselves. Pollack\'s own Coopersmith false-positive testing found the mask tightens with age (1.53 grade 7 → 5.0 grade 12 on lie-scale).', status: 'yellow', type: 'consequence' },
			{ bookId: 'gm', chainId: 'hegemonic-masculinity', shortLabel: 'Hegemonic masculinity = legitimating configuration (GM)', claim: 'Hegemonic masculinity is "the configuration of practice that embodies the currently accepted answer to the legitimacy problem of patriarchy." NOT necessarily violent, NOT the most common pattern, NOT embodied by the most powerful individuals — it is the version that authorizes the gender order. Around it stand SUBORDINATE (e.g. gay), COMPLICIT (most men), and MARGINALIZED (e.g. Black, working-class) masculinities.', status: 'untestable', type: 'theory' },
			{ bookId: 'gm', chainId: 'reject-sex-role', shortLabel: 'Sex-role theory is incoherent (GM)', claim: 'Sex-role theory is logically incoherent and politically reactive. The same word "role" is asked to denote occupation, life-phase, status, AND gender; treats people as pre-arranged actors, understates power, reduces gender to two homogeneous categories. Connell explicitly rejects Brannon\'s four-injunction "Boy Code" framework that Pollack adopts.', status: 'yellow', type: 'premise' },
			{ bookId: 'gm', chainId: 'multiple-masculinities', shortLabel: 'Multiple masculinities exist (GM)', claim: 'There is no single masculinity. Cross-cultural ethnographic evidence (Herdt on Sambia, Mead, Strathern, Herzfeld) and 200 years of historical research show multiple masculinities coexisting in any single gender order. Connell\'s strongest empirical claim — falsifies any "universal masculinity" essentialism.', status: 'green', type: 'observation' },
			{ bookId: 'wtc', chainId: 'patriarchy-defined', shortLabel: 'Patriarchy as dominance + terror (WTC)', claim: 'hooks\'s working definition: "Patriarchy is a political-social system that insists that males are inherently dominating, superior to everything and everyone deemed weak, especially females, and endowed with the right to dominate…through various forms of psychological terrorism and violence." Women enforce it as much as men. Patriarchy is not a male-vs-female dynamic but a dominance-vs-connection one (Terrence Real\'s "psychological patriarchy"). The crisis is "not of masculinity but of patriarchal masculinity."', status: 'untestable', type: 'theory' },
			{ bookId: 'wtc', chainId: 'normal-traumatization', shortLabel: 'Normal traumatization of boys (WTC)', claim: 'Terrence Real (via hooks): "When I first began looking at gender issues, I believed that violence was a by-product of boyhood socialization. But…I have come to believe that violence IS boyhood socialization…Disconnection is not fallout from traditional masculinity. Disconnection IS masculinity." The process of making a boy into a patriarchal man involves systematic shaming and disconnection. The Alexander-Barbie vignette: a 3-year-old shamed out of his Barbie costume in a "ten-second wordless transaction."', status: 'yellow', type: 'causal' },
			{ bookId: 'ms', chainId: 'externalization', shortLabel: 'Externalisierung (MS)', claim: 'Das männliche Grundprinzip der Externalisierung: Außenorientierung, Abspaltung von Gefühlen, Projektion innerer Hilflosigkeit auf Schwächere, Verschließen des Innen. Entsteht durch Ablösungsdruck von der Mutter UND durch ökonomischen Zwang zur Verfügbarkeit. Die Warenform selbst ist geschlechtlich codiert: Reproduktionstätigkeiten (Sorge) werden vom Wert und den Rationalitätsformen abgespalten (Brensell/Habermann). Psychoanalytisch fundiert bei Gruen (1992) und Chodorow.', status: 'yellow', type: 'theory' },
			{ bookId: 'ms', chainId: 'coping-paradigm', shortLabel: 'Männlichkeit als Medium der Lebensbewältigung (MS)', claim: 'Statt starrer Habitustypen: Männlichkeit und Weiblichkeit als Bewältigungsmuster im Streben nach biografischer Handlungsfähigkeit. Zwei-Kreise-Modell — innerer Kreis (psychodynamisch: Selbstwert, Anerkennung, Selbstwirksamkeit) und äußerer Kreis (gesellschaftliche Bewältigungsaufforderungen). Geschlecht wird in kritischen Lebenskonstellationen freigesetzt, auch wenn der Alltag nivelliert scheint.', status: 'yellow', type: 'theory' },
			{ bookId: 'mse', chainId: 'alexithymie', shortLabel: 'Alexithymie: systematische Gefühlsblindheit (MSE)', claim: 'Das klinische Resultat männlicher Sozialisation ist eine weitgehende Gefühlsblindheit: Männer nehmen die eigenen Gefühle schlecht wahr, können sie noch schlechter benennen und kaum kommunizieren. Die erste Etappe des "Wegs zu sich selbst" (Wahrnehmung der eigenen organismischen Impulse) wird bei Jungen systematisch nicht eingeübt. Meta-analytisch gestützt durch die international robuste "Normative Male Alexithymia" (Levant u.a.) auf der Toronto Alexithymia Scale.', status: 'yellow', type: 'consequence' },
			{ bookId: 'mse', chainId: 'umweg-identifikation', shortLabel: 'Nicht-Nicht-Mann: Umweg-Identifikation (MSE)', claim: 'Jungen entwickeln ihre Männlichkeitsidentität nicht durch positive Identifikation mit einem präsenten Vater, sondern negativ — durch Abgrenzung von Mutter und allem als "weiblich" Markierten. Süfkes Formulierung: "Nicht-Nicht-Mann". Identität entsteht als doppelte Negation statt als positiver Selbstentwurf. Stützt sich direkt auf Chodorow (1985) und operationalisiert die Kausalkette zur Alexithymie.', status: 'yellow', type: 'theory' },
			{ bookId: 'mse', chainId: 'identitaetsluege', shortLabel: 'Identitätslüge: Fassade ≠ Innenwelt (MSE)', claim: 'Die offizielle männliche Fassade (selbstbewusst, kontrolliert, handlungsfähig, unabhängig) stimmt nicht mit der faktischen Innenwelt überein, die meist deutlich mehr Hilflosigkeit, Angst, Scham und Sehnsucht enthält, als zugegeben werden darf. Mann zu sein heißt im Normalfall, die eigene innere Wahrheit zu verleugnen. Konvergent mit Pollack ("Maske"), Real ("covert depression"), hooks ("mask of masculinity").', status: 'yellow', type: 'consequence' },
			{ bookId: 'mse', chainId: 'konzeptverwirrung', shortLabel: 'Konzeptverwirrung: Gefühl ↔ Gedanke (MSE)', claim: 'Mangels affektiven Wortschatzes verwechseln Männer systematisch Gefühle mit Gedanken, Handlungen oder Urteilen. Auf die Frage "Wie geht es Ihnen?" antworten sie mit Analysen oder Tätigkeitsberichten. Auf "Was fühlen Sie gerade?" antworten sie mit "Ich finde, dass…". Keine bösartige Verweigerung, sondern Ausdruck eines fehlenden Zugangs zum eigenen emotionalen Erleben. Konvergent mit der Alexithymie-Dimension "difficulty describing feelings".', status: 'yellow', type: 'causal' },
			{ bookId: 'mse', chainId: 'externalisierung', shortLabel: 'Externalisierung, klinisch (MSE)', claim: 'Süfke übernimmt Böhnischs Begriff der Externalisierung und operationalisiert ihn klinisch: Innere Zustände werden systematisch nach außen verlagert — in Arbeit, Leistung, Sport, Alkohol, Gewalt, Sex. Das Selbsterleben wird im Außen gesucht, nicht im Innen. Diagnostisches Kernschema der deutschen Männerberatung (Männerberatung Bielefeld).', status: 'yellow', type: 'theory' },
			{ bookId: 'bdc', chainId: 'boys-dont-cry', shortLabel: '„Jungen weinen nicht" als frühe Konditionierung (BDC)', claim: 'Die Phrase „Jungen weinen nicht" und ihre funktional äquivalenten Skripte werden in der frühen Kindheit verankert und selten mit einer Alternative versehen — dem Jungen wird gesagt, welche Reaktion verboten ist, aber nicht, welche stattdessen erlaubt. Urwin liest das als Paradigma der Sozialisations-Unterdrückung: Jungen lernen, dass emotionale Äußerung um jeden Preis zu vermeiden ist, wenn sie „männlich rüberkommen" wollen. Grundlage: Samaritans-Bericht 2012.', status: 'yellow', type: 'causal' },
			{ bookId: 'bdc', chainId: 'toxic-masculinity', shortLabel: 'Toxische Männlichkeit (BDC)', claim: 'Urwins zentraler Dachbegriff: „übertriebenes Verhalten, das darauf abzielt, noch männlicher zu erscheinen, gewöhnlich motiviert durch Unsicherheit und im Allgemeinen weit entfernt vom positiven, echten Ausdruck von Männlichkeit, die es zu imitieren sucht". Wenn Männer sich entmannt fühlen, klammern sie sich an alles, was sie als männlich empfinden. Popularisiert den Begriff aus der mythopoetischen Männerbewegung (Shepherd Bliss 1980er), ohne akademische Strenge.', status: 'yellow', type: 'theory' },
			{ bookId: 'bdc', chainId: 'reject-biologism', shortLabel: 'Biologismus als faule Rechtfertigung (BDC)', claim: 'Urwins anti-essentialistische Grundposition: 50.000 Jahre modernes Verhalten, 10.000 Jahre seit Jäger-und-Sammler-Leben. Körperliche Evolution ist extrem langsam (Blinddarm-Analogie), Verhalten und Normen ändern sich von Generation zu Generation dramatisch. Wer biologische „Natur" als Rechtfertigung für männliches Verhalten heute anführt, ignoriert 10.000 Jahre Zivilisationsgeschichte. Rhetorisch-journalistisch, aber konvergent mit Eliot, Fine, Hyde, Connell.', status: 'yellow', type: 'premise' },
			{ bookId: 'obm', chainId: 'progressive-blindness', shortLabel: '„Toxic masculinity" ist counterproductive (OBM)', claim: 'Reeves lehnt explizit den Rahmen „toxische Männlichkeit" ab, der in der klinischen Konvergenz der Bibliothek (Pollack, Süfke, Urwin, hooks) zentral ist. Carol Harrington (2021) empirische Begriffsgeschichte: vor 2015 weniger als 20 akademische Erwähnungen/Jahr, 2017 Tausende, „almost never defined", nur „to signal disapproval". Reeves: der Begriff alieniert normale Männer und lädt sie in die Manosphere ein. Progressive Linke macht 4 Fehler: Pathologisierung, Individualisierung, Biologieleugnung, Einbahn-Ungleichheit.', status: 'yellow', type: 'consequence' },
			{ bookId: 'ds', chainId: 'directly-observes-mask', shortLabel: 'Mask/Boy-Code direkt observiert (DS)', claim: 'Way liefert die direkte longitudinale Beobachtung dessen, was Pollack, Kindlon/Thompson, Süfke, hooks und Urwin klinisch inferiert haben. Dieselben Jungen werden über Jahre verfolgt: Mit 13-15 sprechen sie über ihre engsten männlichen Freundschaften in einer Sprache voller „love", „deep", „trust", „secret"; mit 16-18 fügen sie „no homo"-Disclaimer hinzu, verlieren die Freundschaften, und sagen „I don\'t care anymore". Die Maske formiert sich in Echtzeit auf den Transkripten. Upgradet die Mask-/Boy-Code-Konvergenz von klinischer Inferenz zu direkter observational evidence.', status: 'yellow', type: 'observation' },
			{ bookId: 'ds', chainId: 'homophobia-mechanism', shortLabel: 'Homophobie als Kernmechanismus (DS)', claim: 'Way identifiziert Homophobie — die kulturelle Gleichsetzung emotionaler Intimität zwischen Jungen mit „gay" oder „girlish" — als den zentralen Mechanismus des Freundschaftsverlustes. Die Jungen selbst identifizieren dies: Immer wieder tauchen „no homo"-Disclaimer in den späteren Interviews auf. „The phrase „no homo" has replaced the word „love" in the language of boys." Erklärt den Mechanismus präziser als die klinische Literatur der Bibliothek (Pollack, Süfke, hooks).', status: 'yellow', type: 'causal' },
			{ bookId: 'ds', chainId: 'challenges-biology-essentialism', shortLabel: 'Widerlegt Biologie-Essentialismus (DS)', claim: 'Way\'s longitudinale Daten widerlegen die Position (Sax, Gurian, Benenson), Jungen seien biologisch weniger emotional als Mädchen: Mit 13-15 sind die Jungen emotional genauso artikuliert wie vergleichbare Mädchen. Die Geschlechterdifferenz entsteht erst in der mittleren Adoleszenz durch kulturelle Gleichsetzung von Intimität mit Weiblichkeit/Homosexualität. Empirisch direkt — nicht nur theoretisch wie bei Eliot — weil dieselben Jungen über Zeit verfolgt werden.', status: 'yellow', type: 'premise' },
			{ bookId: 'pr', chainId: 'pr-weinen-kulturell-sozialisiert', shortLabel: 'Tränen-Divergenz sozialisiert (PR)', claim: 'Jungen und Mädchen weinen bis ~12 Jahre ähnlich oft; die Divergenz danach entsteht durch Männlichkeitsnormen. „Normative male alexithymia" (Levant) schwächt Beziehungen und Hilfesuche bei Männern. Empirische Unterfütterung: Levant (2001), Franz et al. (2008) dt. Repräsentativ, Thorberg et al. (2011) Meta zu parental bonding & alexithymia. Kap. 12.', status: 'yellow', type: 'causal' },
		]
	},

	// ─── 3. Aggression ───
	{
		id: 'aggression',
		name: 'Aggression & Violence',
		description: 'Is male aggression innate, socialized, or both? How should we understand physical vs. relational aggression?',
		fields: ['dev-psych', 'evo-bio', 'clinical'],
		stanceSummary: 'All books acknowledge higher male physical aggression. They diverge on cause: Raising Cain sees it as reactive/learned, Benenson and Geary see evolutionary roots, Eliot distinguishes physical from relational forms.',
		claims: [
			{ bookId: 'wgm', chainId: 'aggression', shortLabel: 'Aggression differences', claim: 'Sex differences in aggression are partly innate and serve different evolutionary functions.', status: 'green', type: 'premise' },
			{ bookId: 'pb', chainId: 'aggression-forms', shortLabel: 'Two aggression forms (PB)', claim: 'Physical aggression is male-dominant with biological roots (prenatal testosterone); relational aggression is female-typical and more culturally shaped.', status: 'yellow', type: 'observation' },
			{ bookId: 'ww', chainId: 'boys-play-fighting', shortLabel: 'Play fighting as adaptation (WW)', claim: 'Physical aggression shows large sex differences (~20x); rough-and-tumble play serves developmental functions — suppressing it may increase real violence.', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'females-indirect-aggr', shortLabel: 'Female indirect aggression', claim: 'Females avoid physical aggression and use indirect strategies: covert competition, social exclusion, confrontation as last resort.', status: 'green', type: 'observation' },
			{ bookId: 'rc', chainId: 'reactive-violence', shortLabel: 'Violence is reactive, not predatory', claim: 'Most boy aggression is defensive — a reaction to perceived threat, shame, or emotional overload — not predatory.', status: 'green', type: 'causal' },
			{ bookId: 'rc', chainId: 'harsh-discipline', shortLabel: 'Harsh discipline produces anger', claim: 'Boys receive harsher discipline everywhere. This produces shame, anger, and retaliation — not character.', status: 'green', type: 'causal' },
			{ bookId: 'wb', chainId: 'testosterone-drives', shortLabel: 'Testosterone drives aggression', claim: 'Testosterone creates predictable behavioral patterns including aggression, competition, and a "tension-release" cycle.', status: 'yellow', type: 'causal' },
			{ bookId: 'mf', chainId: 'male-competition', shortLabel: 'Male-male competition drives dimorphism', claim: 'Male-male competition drives evolution of larger body size, armaments, and behavioral/cognitive traits.', status: 'green', type: 'causal' },
			{ bookId: 'rb', chainId: 'emotional-funnel-anger', shortLabel: 'Anger as emotional funnel (RB)', claim: 'Because all vulnerable emotions are shamed, anger becomes the "emotional funnel" (Don Long): every feeling from sadness to fear gets channeled into this one socially acceptable outlet.', status: 'green', type: 'causal' },
			{ bookId: 'rb', chainId: 'reactive-violence', shortLabel: 'Violence = disconnection\'s final link (RB)', claim: 'Violence is the final link in a chain beginning with disconnection. Raine/Brennan/Mednick Danish study: birth complications + maternal rejection → adult violence. Rejects testosterone-as-cause.', status: 'green', type: 'consequence' },
			{ bookId: 'gm', chainId: 'crisis-tendencies', shortLabel: 'Violence as gender-order policing (GM)', claim: 'Two forms of violence in the gender order: (1) members of the privileged group use violence to secure dominance (street harassment, sexual harassment, rape, domestic violence); (2) violence among men polices hegemonic masculinity itself (homophobic violence, fights, military combat). Rejects testosterone-as-cause: "Wenn rassistische und sexistische Ideologien hierarchische soziale Arrangements aufgrund von Biologie rechtfertigen, muss die Biologie falsch sein" (Kemper). Most men don\'t harass — but those who do feel empowered by supremacist ideology.', status: 'yellow', type: 'causal' },
			{ bookId: 'wtc', chainId: 'maternal-sadism', shortLabel: 'Maternal sadism (WTC)', claim: '"Patriarchy breeds maternal sadism in women who embrace its logic." hooks\'s distinctive contribution: feminist idealization of motherhood has prevented examination of maternal violence toward boys. Single-parent homes are NOT automatically less patriarchal. Boys asked about The Incredible Hulk said they would "smash their mommies." Dinnerstein and Silverstein as theoretical anchors. Addresses a gap most feminist literature avoids.', status: 'yellow', type: 'causal' },
			{ bookId: 'wtc', chainId: 'disconnection-is-masc', shortLabel: 'Violence = disconnection (WTC)', claim: '"The first act of violence that patriarchy demands of males is not violence toward women. Instead patriarchy demands of all males that they engage in acts of psychic self-mutilation, that they kill off the emotional parts of themselves." Violence against others follows from violence against the self. Rejects "natural-born killers" framing: "if men were natural-born killers…there would be no need for patriarchal socialization to turn them into killers."', status: 'untestable', type: 'theory' },
			{ bookId: 'ms', chainId: 'gewalt-als-hilflosigkeit', shortLabel: 'Gewalt als abgespaltene Hilflosigkeit (MS)', claim: '"Männliche Gewalt in ihren offenen Formen ist immer ein Kampf gegen die eigene Hilflosigkeit, ein Kampf gegen sich selbst" (Gruen 1992, via Böhnisch). Die eigene innere Hilflosigkeit wird auf Schwächere projiziert (Frauen, Behinderte, Ausländer) und dort bekämpft. "Gewalt aus Liebe": Männer in Familien-Gewalt sind oft fassungslos, weil sie "nur etwas geholt" haben, worauf sie "Anspruch" zu haben meinen. Rechtsextreme Gruppen bieten rigide Eindeutigkeit als Halt für hilflose junge Männer.', status: 'yellow', type: 'causal' },
			{ bookId: 'mse', chainId: 'hilflosigkeit-kern', shortLabel: 'Hilflosigkeit als Kerngefühl (MSE)', claim: 'Unter praktisch jedem männlichen Symptom (Wut, Rückzug, Sucht, Workaholismus, Gewalt, Impotenz) liegt Hilflosigkeit. Hilflosigkeit ist für die männliche Identität das unzulässige Gefühl schlechthin; also muss sie abgewehrt, umgewandelt oder projiziert werden. Die männertherapeutische Grundaufgabe besteht darin, dem Mann zu ermöglichen, die eigene Hilflosigkeit wahrzunehmen und auszuhalten. Breit konvergent mit Pollack, Kindlon/Thompson, Real, Böhnisch.', status: 'yellow', type: 'causal' },
			{ bookId: 'bdc', chainId: 'active-toxicity', shortLabel: 'Aktive toxische Männlichkeit: Gewalt, Risiko, Mob (BDC)', claim: 'Die laute Variante toxischer Männlichkeit — Machismo, Gewalt, riskantes Fahren, Hooliganismus, Lad-Kultur, Top-Gear-Fankultur, Fight-Club-Fetischisierung. Männer werden beim Autofahren doppelt so häufig getötet. Die australische NSW-Verkehrskampagne („Speeding: No One Thinks Big Of You", mit Kleinfinger-Geste) senkte die Verkehrstote um ~25% im ersten Jahr, weil sie die Penis-Kompensation entlarvte. Fenerbahce-Istanbul-Episode 2011: Männer aus dem Stadion verbannen führte sofort zu freundlicher Atmosphäre.', status: 'yellow', type: 'consequence' },
			{ bookId: 'pr', chainId: 'pr-bestrafung-schadet', shortLabel: 'Harte Strafe → neuronaler Schaden (PR)', claim: 'Körperstrafen und übermäßig harsche Kritik verschlechtern Selbstregulation, verändern neuronale Reaktionen auf Fehler/Belohnung, erhöhen Depressivitätsrisiko. Gestützt durch Heilmann (2021) Lancet Review, Burani et al. (2023) Biological Psychiatry, Owen et al. (2012) systematischer Review 41 Studien. Kap. 13.', status: 'green', type: 'causal' },
		]
	},

	// ─── 4. Risk-Taking ───
	{
		id: 'risk-taking',
		name: 'Risk-Taking & Fear',
		description: 'Are boys biologically more risk-prone and girls more risk-averse — or is this primarily socialized?',
		fields: ['dev-psych', 'evo-bio', 'epidemiology'],
		stanceSummary: 'Sax and Benenson see biology as primary. Eliot emphasizes socialization. Geary\'s evolutionary framework predicts the pattern from parental investment theory.',
		claims: [
			{ bookId: 'wgm', chainId: 'risk-taking', shortLabel: 'Boys take more risks', claim: 'Boys are biologically predisposed to greater physical risk-taking via testosterone and neural reward systems.', status: 'green', type: 'premise' },
			{ bookId: 'pb', chainId: 'risk-socialized', shortLabel: 'Risk-taking is socialized', claim: 'Risk-taking differs between sexes but is strongly shaped by parents\' differential encouragement and limits.', status: 'yellow', type: 'causal' },
			{ bookId: 'ww', chainId: 'females-fear-risk', shortLabel: 'Female fear and risk-aversion', claim: 'Females show greater fear, risk-aversion, and health vigilance from birth — meta-analysis of 150 studies.', status: 'green', type: 'observation' },
			{ bookId: 'mf', chainId: 'life-history', shortLabel: 'Life history and developmental pace', claim: 'The more competitive sex develops more slowly and plays in ways that prepare for adult competition — including risky play.', status: 'green', type: 'causal' },
		]
	},

	// ─── 5. School Mismatch ───
	{
		id: 'school-mismatch',
		name: 'Schools & the Gender Gap in Education',
		description: 'Are schools structurally disadvantaging boys? What role do developmental timing, curriculum design, and ADHD diagnosis play?',
		fields: ['education', 'dev-psych', 'clinical'],
		stanceSummary: 'Most books agree boys struggle in school. They diverge on causes: developmental timing (Sax, Eliot), feminized environment (Gurian, Sax), or emotional miseducation (Kindlon/Thompson).',
		claims: [
			{ bookId: 'ba', chainId: 'education-gap', shortLabel: 'Education gender gap', claim: 'Boys are increasingly disengaging from school and underachieving relative to girls.', status: 'green', type: 'premise' },
			{ bookId: 'ba', chainId: 'curriculum-acceleration', shortLabel: 'Curriculum too fast for boys (BA)', claim: 'Schools eliminated competition and physical activity boys need, while enforcing zero-tolerance policies hostile to boy-typical play.', status: 'yellow', type: 'causal' },
			{ bookId: 'ba', chainId: 'competition-eliminated', shortLabel: 'Competition removed (BA)', claim: 'Elimination of competition from schools disproportionately harms boys who are motivated by competitive structures.', status: 'yellow', type: 'causal' },
			{ bookId: 'wgm', chainId: 'sensory-education', shortLabel: 'Sensory mismatch in class (WGM)', claim: 'Boys\' different sensory profiles (higher hearing thresholds, visual preferences) clash with classroom designs optimized for girls\' sensory strengths.', status: 'yellow', type: 'causal' },
			{ bookId: 'wgm', chainId: 'adhd-overdiagnosis', shortLabel: 'ADHD: developmental mismatch (WGM)', claim: 'Boys are disproportionately diagnosed with ADHD because their slower brain maturation clashes with school expectations — not neurological disorder.', status: 'yellow', type: 'causal' },
			{ bookId: 'ba', chainId: 'adhd-overdiagnosis', shortLabel: 'ADHD: 10x overdiagnosis (BA)', claim: 'ADHD diagnosis has increased 10x in boys; driven by school environment changes, video games, and endocrine disruption — stimulant meds may damage motivation centers.', status: 'yellow', type: 'causal' },
			{ bookId: 'rc', chainId: 'school-mismatch', shortLabel: 'Feminine school environment (RC)', claim: 'Schools demand early verbal/reading skills and physical stillness before boys\' developmental readiness, creating artifacts of "disability" that resolve with age.', status: 'green', type: 'causal' },
			{ bookId: 'pb', chainId: 'reading-gap-plastic', shortLabel: 'Reading gap real but plastic', claim: 'The reading/literacy gap is real and longstanding but the brain is plastic enough to close it with intervention.', status: 'green', type: 'observation' },
			{ bookId: 'pb', chainId: 'single-sex-no-advantage', shortLabel: 'Single-sex schools: no advantage', claim: 'Single-sex schooling shows no reliable academic advantage when controlling for selection effects.', status: 'green', type: 'consequence' },
			{ bookId: 'pb', chainId: 'inhibitory-control', shortLabel: 'Boys lag in self-control', claim: 'Boys lag behind girls in inhibitory control — the largest reliable behavioral sex difference in childhood.', status: 'green', type: 'observation' },
			{ bookId: 'rb', chainId: 'school-boy-failure', shortLabel: 'Boy-hostile schools (RB)', claim: 'Schools favor girls\' learning styles and pathologize boys\'. Hedges & Nowell 1995 Science meta: boys 2:1 at BOTTOM of reading. Purkey UNC: girls score higher on Self-Concept as Learner. Boys = 71% of suspensions.', status: 'green', type: 'causal' },
			{ bookId: 'ms', chainId: 'hidden-curriculum', shortLabel: 'Hidden gender curriculum (MS)', claim: 'Kindergärten und Schulen, die sich als "geschlechtsneutral" oder "koedukativ" verstehen, wirken als Orte verdeckter, milieubildender geschlechtsdifferenter Aneignungskultur. Jungen beanspruchen etwa 2/3 der Aufmerksamkeit im Unterricht (Enders-Dragässer/Fuchs 1989, mehrfach repliziert), werden häufiger bestraft und dominieren räumlich. Die scheinbare Bevorzugung ist ihre Benachteiligung — sie verfestigt externalisierte Muster.', status: 'green', type: 'causal' },
			{ bookId: 'obm', chainId: 'education-gap', shortLabel: 'Der Bildungsgap ist global und strukturell (OBM)', claim: 'Seit Title IX 1972 hat sich der US-Bildungsgap umgekehrt: 57% der Bachelor-Grade gehen heute an Frauen, Gap 15 Punkte (1972 war der Gap 13 Punkte in die andere Richtung). Finnland-PISA: 20% der Mädchen auf höchstem Leseniveau, 9% der Jungen. Jungen sind 50% häufiger in den untersten Perzentilen aller Kernfächer. Der Gender-Gap in der Bildung ist in jedem OECD-Land präsent und wächst. Reeves\' zentrale neurobiologische Erklärung: präfrontaler Kortex reift bei Jungen ~2 Jahre später (Steinberg, Jensen, Sapolsky).', status: 'green', type: 'observation' },
			{ bookId: 'obm', chainId: 'redshirt-policy', shortLabel: 'Redshirt the Boys: ein Jahr später einschulen (OBM)', claim: 'Reeves\' konkrete Policy-Empfehlung: alle Jungen default ein Jahr später einschulen, nicht um „aufzuholen", sondern um dem biologischen Reifungstempo gerecht zu werden. Empirische Stütze: Cascio & Schanzenbach Tennessee-Studie zeigt, dass redshirted boys mindestens doppelt so viel wie redshirted girls gewinnen auf allen Outcome-Maßen. Low-income boys profitieren am meisten. Cook & Kang NC-Studie: 10% Redshirting reduziert Lesegap um 11%. Reeves\' Vorschlag ist konkret und rechtlich machbar (Ginsburg VMI-Ruling erlaubt Differenzierung).', status: 'yellow', type: 'solution' },
			{ bookId: 'pr', chainId: 'pr-geschlechterunterschied-sozial', shortLabel: 'Bildungsgap: sozial dominiert (PR)', claim: 'Prüfer zitiert OECD (2024) Education at a Glance für das Bildungsgap zu Lasten der Jungen, verortet die Ursachen aber primär sozial (Erwartungen, Lehrer-Interaktion) — nicht in endokrin-disruptor-Kausalketten wie Sax. Konvergent mit OBM/PB im Befund, näher an Eliot im Mechanismus. Kap. 11.', status: 'green', type: 'observation' },
		]
	},

	// ─── 6. Emotional Development ───
	{
		id: 'emotional-development',
		name: 'Emotional Development & Depression',
		description: 'How do boys develop emotionally — and what leads to emotional isolation, hidden depression, or substance use?',
		fields: ['dev-psych', 'clinical'],
		stanceSummary: 'Raising Cain and Dittmann focus on emotional miseducation as the root cause. Gurian sees emotional processing as biologically different. Eliot provides evidence that emotional differences are learned. Prüfer stützt die emotionale-Sozialisation-These empirisch stärker als Dittmann (Levant/Franz/Thorberg) und liefert damit das Evidenz-Substrat, auf dem die Boy-Code-Konvergenz unabhängig vom qualitativen Pollack-Material steht.',
		claims: [
			{ bookId: 'rc', chainId: 'emotional-isolation', shortLabel: 'Fortress of solitude', claim: 'By adolescence, emotional isolation has become virtually a rite of passage for boys.', status: 'yellow', type: 'consequence' },
			{ bookId: 'rc', chainId: 'hidden-depression', shortLabel: 'Hidden boy depression', claim: 'Depression in boys often presents as irritability, hostility, or withdrawal — not sadness.', status: 'green', type: 'consequence' },
			{ bookId: 'rc', chainId: 'substance-void', shortLabel: 'Drugs fill emotional void', claim: 'Substance use functions as a rite of passage and self-medication for emotional isolation.', status: 'green', type: 'consequence' },
			{ bookId: 'rc', chainId: 'romantic-sabotage', shortLabel: 'Emotional illiteracy sabotages romance', claim: 'Boys are potentially romantic, but emotional illiteracy sabotages their intimate relationships.', status: 'yellow', type: 'consequence' },
			{ bookId: 'jvh', chainId: 'boys-mask', shortLabel: 'Pseudoresilienz / Maske', claim: 'Boys show "pseudo-resilience" — they appear strong but mask inner struggles.', status: 'red', type: 'observation' },
			{ bookId: 'jvh', chainId: 'trad-masc-harms', shortLabel: 'Masculinity harms boys', claim: 'Traditional masculinity norms measurably harm boys: higher suicide, lower grades, more violence.', status: 'yellow', type: 'consequence' },
			{ bookId: 'wb', chainId: 'feelings-eight-ways', shortLabel: 'Eight male emotional processing methods', claim: 'Boys have eight characteristic methods of processing feelings (action, spatial, object-relational, etc.).', status: 'untestable', type: 'theory' },
			{ bookId: 'pb', chainId: 'emotion-learned', shortLabel: 'Emotional suppression is learned', claim: 'Emotional expression differences are learned, not hard-wired — boys start more emotionally reactive.', status: 'green', type: 'causal' },
			{ bookId: 'rb', chainId: 'premature-separation', shortLabel: 'Premature separation trauma (RB)', claim: 'Boys undergo two traumatic forced separations (age 5-6 and adolescence). Clinical case work (Johnny, Roger, Christopher vignettes) plus attachment research (Gunnar, Sroufe). Pollack disagrees with Chodorow\'s "healthy dis-identification" framing.', status: 'yellow', type: 'causal' },
			{ bookId: 'rb', chainId: 'hidden-depression', shortLabel: 'Hidden epidemic of boy depression (RB)', claim: 'Boy depression is systematically under-detected. Nolen-Hoeksema Stanford, Smucker Penn State, Angst Swiss research all show rates at least equal to girls. Angst/Dobler-Mikola: men under-report AND forget past depression.', status: 'green', type: 'consequence' },
			{ bookId: 'rb', chainId: 'suicide', shortLabel: 'Male suicide epidemic (RB)', claim: 'US 15-24 suicide rate tripled 1950-1990; male:female ratio 4:1. Rohde/Seeley/Mace: boys\' suicidal ideation linked to lack of social supports. Girgus/Princeton: boys\' depression correlates with BOTH popularity and rejection — disproving the stereotype that boys don\'t care about relationships.', status: 'green', type: 'consequence' },
			{ bookId: 'wtc', chainId: 'mask-of-masculinity', shortLabel: 'Mask of masculinity (WTC)', claim: 'The word "mask" is already embedded in "masculinity." hooks: "Learning to wear a mask is the first lesson in patriarchal masculinity that a boy learns. He learns that his core feelings cannot be expressed if they do not conform to the acceptable behaviors sexism defines as male." The false self, the split, compartmentalization — interior architecture of patriarchal masculinity. Makes integrity (wholeness) the prerequisite for love.', status: 'yellow', type: 'consequence' },
			{ bookId: 'ms', chainId: 'bedürftigkeit', shortLabel: 'Bedürftigkeit (MS)', claim: 'Bedürftigkeit als "leibseelischer Zwangszustand, in dem man sich nach etwas sehnt, das gleichzeitig verwehrt ist und das — da dieser Zustand schwer aushaltbar ist — nach Entladung, Abspaltung drängt". Männer sehnen sich nach Innehalten und Sorge-Einbindung, werden aber durch die Intensivierung der Erwerbsarbeit daran gehindert. Erklärt, warum Männer in kritischen Situationen zu abspaltendem, externalisierendem Verhalten greifen. Präziser als feministische Rede von "Angewiesenheit".', status: 'yellow', type: 'causal' },
			{ bookId: 'mse', chainId: 'mangelnde-spiegelung', shortLabel: 'Mangelnde Gefühls-Spiegelung (MSE)', claim: 'Eltern und die Umgebung benennen Jungen deutlich weniger Gefühle als Mädchen und deuten gleiche Emotionsausdrücke bei Jungen anders ("Baby-X"-Experimente: gleiches Baby als "Junge" → Ärger, als "Mädchen" → Trauer/Angst). Jungen lernen dadurch den sprachlichen und kognitiven Zugang zu ihren Gefühlen nicht. Der primäre Mechanismus für die spätere Alexithymie.', status: 'green', type: 'causal' },
			{ bookId: 'mse', chainId: 'maennliche-depression', shortLabel: 'Verdeckte männliche Depression (MSE)', claim: 'Süfke übernimmt Terrence Reals Konzept der "covert depression" direkt: Männliche Depression erscheint klinisch oft nicht als klassische Traurigkeit/Antriebslosigkeit, sondern als Gereiztheit, Workaholismus, Alkoholismus, Wut, Rückzug oder körperliche Symptomatik. Wird deshalb systematisch unterdiagnostiziert. Epidemiologisch robust gestützt durch die international konsistente Diskrepanz zwischen hohen männlichen Suizidraten (3-4x weiblich) und niedrigeren offiziellen Depressionsdiagnose-Raten.', status: 'green', type: 'consequence' },
			{ bookId: 'mse', chainId: 'four-stage-weg', shortLabel: '4-Etappen-Weg zu sich selbst (MSE)', claim: 'Gesunde Identitätsentwicklung verläuft in vier Etappen: (1) Wahrnehmung der eigenen Impulse, (2) Akzeptanz der Impulse ohne Bewertung, (3) Mitteilung der Impulse an andere, (4) Umsetzung in Handlung — "vom Sollen zum Wollen". Männliche Sozialisation bricht diesen Weg systematisch schon auf Etappe 1 ab. Theoretische Synthese aus Rogers (organismische Erfahrung) und Grawe (Konsistenzmodell).', status: 'untestable', type: 'theory' },
			{ bookId: 'bdc', chainId: 'mortality-stats', shortLabel: '„Stiff Upper Lip" tötet Männer (BDC)', claim: 'Britische Männer sterben überproportional früh und an vermeidbaren Ursachen. Selbstmordrate 3× weiblich (78% aller UK-Suizide 2013 männlich). Arztbesuchsfrequenz halb so hoch wie bei Frauen. Vorzeitige Todesfälle (unter 50) 1,5× höher bei Männern. Hautkrebs bei gleicher Inzidenz, aber doppelter Mortalität. Diese Zahlen sind kein biologisches Schicksal, sondern Folge einer kulturellen Norm der Hilfevermeidung. Der Samaritans-Bericht 2012 ist Urwins Hauptquelle.', status: 'green', type: 'observation' },
			{ bookId: 'obm', chainId: 'deaths-of-despair', shortLabel: 'Deaths of Despair: 74% männlich (OBM)', claim: 'Männer machen 74% aller „deaths of despair" (Suizide und Überdosen) in den USA aus. Reeves baut auf Case & Deaton 2020 „Deaths of Despair" Princeton-Forschung. COVID-Mortalität: US-Männer ~50% wahrscheinlicher als Frauen zu sterben, 85.000 mehr Tote bis Ende 2021, reduzierte Lebenserwartung um 2 Jahre. Der größte Rückgang der US-Männer-Lebenserwartung seit dem Zweiten Weltkrieg. Wesentlich weniger mediale Aufmerksamkeit als der Impact auf Frauen.', status: 'green', type: 'observation' },
			{ bookId: 'bdc', chainId: 'passive-toxicity', shortLabel: 'Passive toxische Männlichkeit (BDC)', claim: 'Die stille Variante toxischer Männlichkeit — britischer „Stiff Upper Lip", Schweigen, Hilfeverweigerung, emotionale Verdrängung, verzögerte Arztbesuche, Alkoholismus als Selbstmedikation — ist statistisch tödlich. Urwins Vater Richard als paradigmatischer Fall: frühere Herzinfarkt verschwiegen, Herzmedikament in der Jackentasche, mit niemandem gesprochen. Tod mit 51 als direktes Ergebnis dieses Musters. Unterscheidung aktiv/passiv ist Urwins analytische Originalleistung.', status: 'yellow', type: 'consequence' },
			{ bookId: 'bdc', chainId: 'relationship-damage', shortLabel: 'Inter-generationales Trauma (BDC)', claim: 'Die durch „Jungen weinen nicht" verinnerlichte emotionale Verdrängung zerstört romantische Beziehungen und Familien. Urwins eigenes Beispiel: WW2-Veteran-Großvater mit PTSD und Alkoholismus → emotional abwesender alkoholischer Vater → depressiver, selbstverletzender Sohn. Häusliche Gewalt steigt in wirtschaftlichen Krisen, weil Männer, deren Männlichkeit an Arbeit/Einkommen hängt, sich „entmannt" fühlen und zu Gewalt greifen.', status: 'yellow', type: 'consequence' },
			{ bookId: 'ds', chainId: 'boys-emotionally-articulate-early-adolescence', shortLabel: 'Jungen 13-15 emotional hochartikuliert (DS)', claim: 'Der zentrale observational finding: Jungen zwischen 13 und 15 beschreiben ihre engsten männlichen Freundschaften in einer Sprache voller emotionaler Tiefe — „love", „deep", „trust", „secret". Direkte Zitate über hunderte Interviews hinweg. Widerlegt das Stereotyp vom emotional begrenzten Jungen: Die emotionale Kapazität ist da, bevor sie verloren geht.', status: 'green', type: 'observation' },
			{ bookId: 'ds', chainId: 'friendship-loss-late-adolescence', shortLabel: 'Freundschaftsverlust in später Adoleszenz (DS)', claim: 'Dieselben Jungen verlieren dieselben Freundschaften zwischen 16 und 18. Longitudinale Validierung durch mehrfach-verfolgte Cases: Anfangs-Intimität, dann „no homo"-Disclaimer, dann Rückzug, schließlich „I don\'t care anymore". Der Verlust ist nicht hypothetisch — er wird Jahr für Jahr in Echtzeit dokumentiert. Parallelisiert durch Chu (unabhängige Replikation bei weißen Privatschul-Jungen) und Santos (quantitative Validation).', status: 'green', type: 'observation' },
			{ bookId: 'ds', chainId: 'suicide-timing-correlation', shortLabel: 'Suizid-Timing an derselben Schwelle (DS)', claim: 'Way verweist auf die Timing-Korrelation: Die männliche Suizidrate steigt scharf in genau dem Altersfenster (16-18), in dem die longitudinalen Freundschaften zusammenbrechen. Way argumentiert: Das ist kein Zufall, sondern der klinische Ausdruck der „Crisis of Connection". Epidemiologisch schwache direkte Kausalevidenz (keine RCT möglich), aber methodologisch stärkster verfügbarer Befund — Timing + Mechanismus in Echtzeit beobachtet.', status: 'yellow', type: 'causal' },
			{ bookId: 'pr', chainId: 'pr-weinen-kulturell-sozialisiert', shortLabel: 'Alexithymie empirisch (PR)', claim: 'Prüfer liefert die beste empirische Unterfütterung, die die Maske-These bekommen kann: Levant (2001) „Normative Male Alexithymia", Franz et al. (2008) dt. repräsentativ, Thorberg et al. (2011) Meta zu parental bonding & alexithymia. Alexithymie-Konzept ist klinisch uneinheitlich, aber Korrelationsdaten sind solide. Kap. 12.', status: 'yellow', type: 'causal' },
			{ bookId: 'nbm', chainId: 'loneliness-friendship', shortLabel: 'Memoir bestätigt das Alexithymie-Muster in der ersten Person (NBM)', claim: 'Galloway dokumentiert die klinische Konvergenz der Bibliothek autobiografisch: 16 Jahre (29-45) ohne Tränen und ohne „feeling much of anything“; Depression als Nichts-Fühlen („hollow feet“); Anger als einziges zugelassenes Männer-Gefühl (Bill-Burr-Riff: „men are either angry… or fine“); nie in Therapie; Selbstmanagement über SCAFA (Sweat, Clean eating, Abstinence, Family, Affection). Die späte Emotionsöffnung („I. Cry. All. The. Time.“) erzählt er als Gewinn — Pollacks und Süfkes Befund als Ich-Erzählung, ohne deren Vokabular zu übernehmen.', status: 'untestable', type: 'observation' },
		]
	},

	// ─── 7. Fathers, Mentors & Family ───
	{
		id: 'fathers-mentors',
		name: 'Fathers, Mentors & Family Structure',
		description: 'How essential are fathers and male role models for boys\' development? What happens when they\'re absent?',
		fields: ['dev-psych', 'sociology', 'clinical'],
		stanceSummary: 'Gurian and Sax see fathers as irreplaceable. Raising Cain emphasizes the emotional gulf between fathers and sons. Geary frames fatherhood as a cost-benefit trade-off shaped by evolution.',
		claims: [
			{ bookId: 'wb', chainId: 'fathers-essential', shortLabel: 'Fathers and mentors essential', claim: 'Boys cannot become healthy men without male role models, particularly fathers and formal mentors.', status: 'yellow', type: 'causal' },
			{ bookId: 'wb', chainId: 'divorce-delinquency', shortLabel: 'Divorce correlates with delinquency', claim: 'Divorce and single mothering correlate with male delinquency, gangs, and substance abuse.', status: 'yellow', type: 'observation' },
			{ bookId: 'wb', chainId: 'three-families', shortLabel: 'Boys need three families', claim: 'The nuclear family alone cannot raise boys — they need extended family and community mentors.', status: 'yellow', type: 'theory' },
			{ bookId: 'rc', chainId: 'father-son-gulf', shortLabel: 'Father-son emotional gulf', claim: 'An emotional gulf separates most sons from their fathers. Fathers model emotional restraint.', status: 'green', type: 'causal' },
			{ bookId: 'ba', chainId: 'failure-to-launch', shortLabel: 'Failure to launch', claim: 'The "failure to launch" phenomenon — young men living at home, unmotivated — is growing.', status: 'green', type: 'consequence' },
			{ bookId: 'ba', chainId: 'fatherhood-degraded', shortLabel: 'Fatherhood degraded', claim: 'Our culture has degraded fatherhood, undermining a key motivator for young men.', status: 'untestable', type: 'theory' },
			{ bookId: 'mf', chainId: 'fatherhood-tradeoffs', shortLabel: 'Fatherhood as cost-benefit trade-off', claim: 'Men\'s parenting is facultatively expressed: fathers invest more when paternity certainty is high and alternatives are few.', status: 'yellow', type: 'causal' },
			{ bookId: 'jvh', chainId: 'male-teachers', shortLabel: 'More male teachers needed', claim: 'More male educators and teachers as role models. Emotion training in school.', status: 'green', type: 'solution' },
			{ bookId: 'rb', chainId: 'father-disengagement', shortLabel: 'Father hunger / deadpan dads (RB)', claim: 'Strongest empirical section of the book. Glueck/Snarey 40-year Harvard follow-up: father involvement in first 10 years predicts HS/college success; impossible to be "too involved." Pruett Yale 10-year primary-father study. Plus Parke, Brody, D\'Angelo, Sears, Barnett. "Father hunger" (Herzog) creates intergenerational cycle.', status: 'green', type: 'causal' },
			{ bookId: 'wtc', chainId: 'normal-traumatization', shortLabel: 'Father hunger + patriarchal fatherhood (WTC)', claim: '"No one hungers for male love more than the little girl or boy who rightfully needs and seeks love from Dad." Every night millions of kids go to sleep "starving for attention from their dads." Patriarchal fathers "cannot love their sons because the rules of patriarchy dictate that they stand in competition with their sons." hooks\'s own reconciliation with her father as paradigmatic of what becomes possible when fathers break with patriarchy.', status: 'yellow', type: 'causal' },
			{ bookId: 'ms', chainId: 'event-father', shortLabel: 'Engagierte und bedürftige Väter (MS)', claim: 'Südtiroler Männerstudie (2012): Junge Väter in qualifizierten Berufen arbeiten über 50h/Woche inkl. Anfahrt und werden zu "Eventvätern" am Wochenende. Die Kinder erleben ein einseitig starkes Männerbild — der Mann, der im Arbeitsalltag unter Druck steht, wird nicht sichtbar. Der starke Vater ist im Kern oft bedürftig. Die Väterforschung "drückt sich" um diese Bedürftigkeit. Zerle/Krok 2009: über die Hälfte der jungen Männer arbeitet nach Geburt des ersten Kindes MEHR. Meuser 2012: Retraditionalisierung mit der Geburt des ersten Kindes.', status: 'green', type: 'observation' },
			{ bookId: 'ms', chainId: 'mother-son-bind', shortLabel: 'Hegemoniale Mütterlichkeit + Männermatriarchat (MS)', claim: 'Die Mutter-Sohn-Beziehung als strukturell zwiespältige Konstellation: Mutter muss den Sohn loslassen UND den Vater gleichzeitig aufbauen — "Modernes Männermatriarchat im Kleinen" (Moeller 1983). "Hegemoniale Mütterlichkeit" (Ehnis 2008) als struktureller Vorgang, nicht als individuelle Schuld. Wo die "gelungene Triangulation" mit einem alltäglich erfahrbaren Vater fehlt, idolisiert der Junge das Männliche und wertet das Weibliche ab. Empirische Unterstützung: Chodorow, Dammasch.', status: 'yellow', type: 'causal' },
			{ bookId: 'obm', chainId: 'dad-deficit', shortLabel: 'Dad Deficit: strukturelle Vater-Entkopplung (OBM)', claim: 'Reeves: 1 in 5 Väter lebt nicht mit seinen Kindern zusammen. 40% der Geburten außerhalb der Ehe. Bei Vätern ohne High School: 40% getrennt vom Kind; College-Absolventen: 7%. Der Traditionelle-Männer-Versorger-Rolle wurde ausgehöhlt, aber kulturelle Skripte sind nicht angepasst. Ruggles: 40% des Rückgangs der US-Heiratsraten 1960-2013 erklärt sich durch fallende Männerlöhne. Edin & Nelson Doing the Best I Can: die meisten unverheirateten Väter wollen Beteiligung, werden aber von Armut, Mental Illness und einem Familiengesetz blockiert, das sie als walking ATMs behandelt.', status: 'green', type: 'observation' },
			{ bookId: 'obm', chainId: 'direct-fatherhood', shortLabel: 'Direct Dads: Eggebeen distinktive Vater-Beiträge (OBM)', claim: 'Reeves\' zentrale positive These: Vaterschaft als eigenständige Institution, unabhängig von der Ehe. Empirisch gestützt durch Eggebeens Analyse der National Longitudinal Study of Adolescent to Adult Health: von den elterlichen Inputs auf Teen-Outcomes sind 42% additiv (beide Eltern gleich), 12% redundant, aber 22% UNIQUE zu einem Elternteil. „Dads teach, moms tend." Väter leisten besonders in der Adoleszenz distinktive Beiträge (human capital, risk-taking, standing up for oneself). Widerspricht teilweise Biblarz & Stacey 2010 „parent-gender doesn\'t matter"-Konsens.', status: 'yellow', type: 'causal' },
			{ bookId: 'pr', chainId: 'pr-kind-praegt-eltern', shortLabel: 'Kind prägt Eltern (PR)', claim: 'Schwedische Längsschnittstudie (Kerr/Stattin/Özdemir 2012): Kindliches Verhalten sagt elterlichen Erziehungsstil besser vorher als umgekehrt. Antisoziales Verhalten schiebt Eltern Richtung vernachlässigend; offenes Kommunizieren fördert autoritative Haltung. Präzisiert JVH `cause-socialization`: Sozialisation ist bidirektional. Kap. 3.', status: 'yellow', type: 'causal' },
			{ bookId: 'nbm', chainId: 'mentorship-solution', shortLabel: 'Fatherhood by proxy: Mentorship als „fastest blue-line path“ (NBM)', claim: 'Galloways zentrale gesellschaftliche Lösung: mehr Männer, die sich „irrational passioniert“ um Jungen kümmern, die nicht ihre eigenen sind. Neurowissenschaftliches Argument via Abrams et al. (2022): adoleszente Belohnungssysteme orientieren sich ab ~13-15 von Elternstimmen auf fremde Stimmen um — „boys will listen to their dads’ friends more than their own dads“. Beklagt die Pathologisierung des Mentorings (3× mehr Big-Sister- als Big-Brother-Bewerber in NYC). Konvergiert mit Gurians Tribe-These und Reeves’ HEAL-Agenda.', status: 'untestable', type: 'solution' },
		]
	},

	// ─── 8. Rites of Passage ───
	{
		id: 'rites-of-passage',
		name: 'Rites of Passage & Initiation',
		description: 'Do boys need structured transitions into manhood — or are these prescriptions culturally arbitrary?',
		fields: ['sociology', 'dev-psych'],
		stanceSummary: 'Gurian and Sax strongly advocate for formal rites of passage. Other books don\'t address this or are skeptical.',
		claims: [
			{ bookId: 'wb', chainId: 'initiation-manhood', shortLabel: 'Boys need formal initiation', claim: 'Adolescence should be a "second birth" requiring structured initiation rites and community affirmation.', status: 'untestable', type: 'theory' },
			{ bookId: 'ba', chainId: 'forsaken-gods', shortLabel: 'Forsaken rites of passage', claim: 'Our culture has neglected structured transitions from boyhood to manhood, leaving boys adrift.', status: 'untestable', type: 'theory' },
			{ bookId: 'wb', chainId: 'spiritual-education', shortLabel: 'Boys need spiritual education', claim: 'Boys must be taught spiritual principles as part of their development into manhood.', status: 'untestable', type: 'solution' },
		]
	},

	// ─── 9. Video Games & Technology ───
	{
		id: 'technology-media',
		name: 'Video Games, Social Media & Technology',
		description: 'Do video games and social media cause harm to boys and girls — differently?',
		fields: ['clinical', 'dev-psych', 'epidemiology'],
		stanceSummary: 'Sax sees video games as uniquely harmful to boys and social media to girls. Others don\'t focus on this. Prüfer moderiert zwischen Haidt (alarmistisch) und Orben (skeptisch): Schaden bei Kleinkindern robust, Jugendlichen-Effekt klein-aber-real.',
		claims: [
			{ bookId: 'ba', chainId: 'videogames-will-power', shortLabel: 'Video games hijack will to power', claim: 'Video games hijack boys\' "will to power," redirecting motivation from real-world achievement to virtual worlds.', status: 'untestable', type: 'theory' },
			{ bookId: 'ba', chainId: 'videogames-effects', shortLabel: 'Video game negative effects', claim: 'Violent video games cause measurable negative effects: increased aggression, reduced empathy, academic decline.', status: 'yellow', type: 'observation' },
			{ bookId: 'wgm', chainId: 'social-media-games', shortLabel: 'Social media vs. video games', claim: 'Social media is more toxic for girls (self-objectification); video games are more harmful for boys (displacement of real experience).', status: 'yellow', type: 'causal' },
			{ bookId: 'ba', chainId: 'pornography-replacing', shortLabel: 'Porn replaces real relationships', claim: 'Pornography is replacing real sexual relationships for many young men.', status: 'yellow', type: 'consequence' },
			{ bookId: 'pr', chainId: 'pr-smartphone-effekt-klein', shortLabel: 'Smartphone-Schaden klein-aber-real (PR)', claim: 'Haidts starke „Anxious Generation"-These ist kausal nicht belegbar; Orbens Experimentaldaten zeigen nur sehr kleine negative Effekte. Einig sind die Befunde: (a) Kleinkinder-Bildschirmzeit schadet (Neuro + Entwicklung), (b) Smartphone-Sucht korreliert mit Angst/Depression (mittelgroß), (c) Smartphone-Nutzung verschlechtert Schlaf. Eirich (JAMA Psychiatry Meta), Mallawaarachchi (JAMA Peds 100-Studien-Meta), Sun (Stanford 5-Jahres-Längsschnitt). Kap. 15.', status: 'yellow', type: 'causal' },
		]
	},

	// ─── 10. Endocrine Disruptors ───
	{
		id: 'endocrine-disruptors',
		name: 'Endocrine Disruptors & Testosterone',
		description: 'Are environmental chemicals feminizing boys and disrupting puberty?',
		fields: ['endocrinology', 'epidemiology'],
		stanceSummary: 'This is primarily a Boys Adrift argument. Other books do not make this claim.',
		claims: [
			{ bookId: 'ba', chainId: 'endocrine-feminizing', shortLabel: 'Endocrine disruptors feminize males', claim: 'Environmental estrogens (phthalates, BPA) are feminizing male animals and potentially human boys.', status: 'yellow', type: 'premise' },
			{ bookId: 'ba', chainId: 'endocrine-puberty', shortLabel: 'Puberty timing disrupted', claim: 'Endocrine disruptors accelerate puberty in girls while delaying it in boys.', status: 'yellow', type: 'causal' },
			{ bookId: 'ba', chainId: 'bones-brittle', shortLabel: 'Boys\' bones more brittle', claim: 'Boys\' bones are becoming more brittle: fracture risk roughly doubled since 1970.', status: 'yellow', type: 'observation' },
			{ bookId: 'ba', chainId: 'testosterone-motivation', shortLabel: 'Testosterone drives male motivation', claim: 'Testosterone fuels motivation and ambition in boys — disruption of testosterone affects drive.', status: 'yellow', type: 'causal' },
		]
	},

	// ─── 11. Evolutionary Mating & Sexual Selection ───
	{
		id: 'sexual-selection',
		name: 'Evolutionary Mating & Sexual Selection',
		description: 'How do evolutionary pressures (parental investment, mate choice, competition) explain sex differences?',
		fields: ['evo-bio', 'endocrinology'],
		stanceSummary: 'Geary provides the most rigorous evolutionary framework. Benenson builds on it for behavioral differences. Gurian uses evolution loosely. Eliot and Dittmann do not engage with evolutionary theory.',
		claims: [
			{ bookId: 'mf', chainId: 'sexual-reproduction', shortLabel: 'Why sexual reproduction exists', claim: 'Sexual reproduction evolved to maintain genetic variability (Red Queen, Muller\'s ratchet, Williams\' lottery).', status: 'green', type: 'premise' },
			{ bookId: 'mf', chainId: 'anisogamy', shortLabel: 'Anisogamy: gamete asymmetry', claim: 'Two gamete sizes drive the fundamental sex difference in reproductive strategy.', status: 'green', type: 'premise' },
			{ bookId: 'mf', chainId: 'parental-investment', shortLabel: 'Parental investment theory', claim: 'The sex investing more in offspring becomes the limiting resource; the other sex competes.', status: 'green', type: 'premise' },
			{ bookId: 'mf', chainId: 'female-choice', shortLabel: 'Female choice drives honest signals', claim: 'Female choice drives evolution of honest signals of male quality (ornaments, displays).', status: 'green', type: 'causal' },
			{ bookId: 'mf', chainId: 'mate-preferences', shortLabel: 'Universal mate preferences', claim: 'Women prefer culturally successful men; men prefer youth/attractiveness. Universal across 37 cultures.', status: 'green', type: 'observation' },
			{ bookId: 'mf', chainId: 'male-status-competition', shortLabel: 'Male status competition', claim: 'Men compete for status; high-status men have more wives and children across 33 traditional cultures.', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'warrior-hypothesis', shortLabel: 'Warrior hypothesis', claim: 'Males evolved specialized behaviors for intergroup warfare — play fighting and coalition formation are adaptations.', status: 'yellow', type: 'theory' },
			{ bookId: 'ww', chainId: 'worrier-hypothesis', shortLabel: 'Worrier hypothesis', claim: 'Females evolved self-preservation behaviors because maternal death historically meant child death.', status: 'yellow', type: 'theory' },
			{ bookId: 'mf', chainId: 'ancestral-polygyny', shortLabel: 'Ancestral polygynous mating', claim: 'Human ancestors had a polygynous system with male competition and some paternal investment.', status: 'yellow', type: 'theory' },
			{ bookId: 'gm', chainId: 'reject-biology', shortLabel: 'Sociobiology fails as gender explanation (GM)', claim: 'Connell rejects the entire sociobiological framework (Wilson, Tiger\'s Men in Groups). Within-sex variation always exceeds between-sex variation. Cross-cultural variability is enormous and overwhelms any "universal" pattern. The Imperato-McGinley Dominican case, often cited by sociobiologists, actually documents social construction. Sociobiology mistakes the current patriarchal organization of gender for natural difference.', status: 'green', type: 'premise' },
		]
	},

	// ─── 12. Group Dynamics & Friendship ───
	{
		id: 'group-dynamics',
		name: 'Group Dynamics & Friendship Styles',
		description: 'Do boys and girls form fundamentally different kinds of friendships and social groups?',
		fields: ['dev-psych', 'evo-bio', 'sociology'],
		stanceSummary: 'Benenson has the most data-driven account. Sax highlights the difference. Raising Cain focuses on the emotional costs. Eliot sees differences as smaller than claimed.',
		claims: [
			{ bookId: 'wgm', chainId: 'friendships-differ', shortLabel: 'Friendship styles differ', claim: 'Girls\' friendships are "face to face" (conversation); boys\' are "shoulder to shoulder" (shared activity).', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'males-larger-groups', shortLabel: 'Males form larger groups', claim: 'Males form larger, more interconnected, hierarchically organized groups. Girls form isolated dyads/cliques.', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'males-cooperate-groups', shortLabel: 'Male group cooperation', claim: 'Males cooperate more effectively in groups and flexibly adjust hierarchies based on expertise.', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'female-friendship-fragile', shortLabel: 'Female friendships fragile', claim: 'Female friendships are more intense but more fragile and vulnerable to disruption by third parties.', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'females-enforce-equality', shortLabel: 'Females enforce equality', claim: 'Females enforce equality within groups and punish those who stand out or self-promote.', status: 'green', type: 'observation' },
			{ bookId: 'rc', chainId: 'father-son-gulf', shortLabel: 'Father-son emotional gulf', claim: 'An emotional gulf separates most sons from their fathers, modeling emotional restraint.', status: 'green', type: 'causal' },
		]
	},

	// ─── 13. Cognitive Differences (Math, Spatial, Verbal) ───
	{
		id: 'cognitive-differences',
		name: 'Cognitive Differences (Math, Spatial, Verbal)',
		description: 'Are there real cognitive sex differences in math, spatial reasoning, or verbal skills — and what drives them?',
		fields: ['neuroscience', 'education', 'dev-psych'],
		stanceSummary: 'Eliot provides the most nuanced view: differences exist but are smaller and more plastic than claimed. Geary frames them through sexual selection. Sax sees them as biologically meaningful.',
		claims: [
			{ bookId: 'pb', chainId: 'mental-rotation-innate', shortLabel: 'Mental rotation: large but trainable', claim: 'Mental rotation is the largest cognitive sex difference (d=0.9+) but is highly trainable.', status: 'green', type: 'observation' },
			{ bookId: 'pb', chainId: 'math-sat-demographics', shortLabel: 'Math SAT gap largely demographic', claim: 'Males score higher on math SAT, but the gap is largely explained by demographics and sample composition.', status: 'green', type: 'observation' },
			{ bookId: 'pb', chainId: 'stereotype-threat', shortLabel: 'Stereotype threat depresses girls\' math', claim: 'Stereotype threat measurably depresses girls\' math performance in test conditions.', status: 'yellow', type: 'causal' },
			{ bookId: 'mf', chainId: 'folk-psychology', shortLabel: 'Female folk psychology advantage', claim: 'Females show advantages in folk psychological domains (language, empathy, social cognition).', status: 'green', type: 'observation' },
			{ bookId: 'mf', chainId: 'folk-physics', shortLabel: 'Male folk physics advantage', claim: 'Males show advantages in folk physical domains (spatial reasoning, mechanical understanding).', status: 'green', type: 'observation' },
			{ bookId: 'wgm', chainId: 'drawing-visual', shortLabel: 'Drawing / visual preferences', claim: 'Boys draw action scenes with few colors; girls draw people/animals with many colors. Reflects visual system differences.', status: 'green', type: 'observation' },
		]
	},

	// ─── 14. Sexuality & Gender Identity ───
	{
		id: 'sexuality-gender',
		name: 'Sexuality & Gender Identity',
		description: 'How do the books address sexual orientation, gender identity, and transgender desistence?',
		fields: ['dev-psych', 'clinical', 'endocrinology'],
		stanceSummary: 'Sax is the only author who addresses trans desistence and gender-atypical children in detail. His claims are contested. Eliot critiques pop-science gender narratives.',
		claims: [
			{ bookId: 'wgm', chainId: 'orientation-innate', shortLabel: 'Orientation is innate', claim: 'Sexual orientation is largely innate and more genetically determined in males than females.', status: 'green', type: 'observation' },
			{ bookId: 'wgm', chainId: 'gender-atypical', shortLabel: 'Gender-atypical children', claim: '"Anomalous males" (gender-atypical boys) share a trait cluster but are mostly cisgender gay men, not transgender.', status: 'yellow', type: 'observation' },
			{ bookId: 'wgm', chainId: 'trans-desistence', shortLabel: 'Transgender desistence', claim: 'Most children who say they are transgender will desist by adulthood.', status: 'yellow', type: 'consequence' },
			{ bookId: 'wgm', chainId: 'gender-2d', shortLabel: 'Gender is 2D, not 1D', claim: 'Gender is two-dimensional (masculine and feminine are independent axes), not a single spectrum.', status: 'yellow', type: 'theory' },
			{ bookId: 'pb', chainId: 'pop-authors-distort', shortLabel: 'Pop authors distort science', claim: 'Popular authors (Gurian, Sax, Brizendine) systematically distort neuroscience to support gender stereotypes.', status: 'green', type: 'consequence' },
			{ bookId: 'pb', chainId: 'prenatal-t-biases', shortLabel: 'Prenatal T biases, not determines', claim: 'Prenatal testosterone biases but does not determine sex-typed behavior — leaving large room for experience.', status: 'green', type: 'premise' },
			{ bookId: 'rb', chainId: 'shame-hardening', shortLabel: 'Homophobia, not homosexuality, harms (RB)', claim: 'Problems faced by gay youth come from homophobia, not homosexuality itself. Kallman 100% identical twin concordance, LeVay hypothalamus, Ford/Beach 76-culture study. Gay youth account for up to 30% of teen suicides — driven by stigma, not orientation.', status: 'green', type: 'causal' },
			{ bookId: 'gm', chainId: 'hegemonic-masculinity', shortLabel: 'Gay subordination as structural (GM)', claim: 'In current Western society, the dominance of heterosexual men and the subordination of homosexual men is the most important case of internal hierarchy in the gender order. Goes "way beyond cultural stigmatization": political/cultural exclusion, state violence (sodomy laws), street violence, economic discrimination. "Alles, was die patriarchale Ideologie aus der hegemonialen Männlichkeit ausschließt, wird dem Schwulsein zugeordnet." Gay men in Connell\'s Ch. 6 study show subordination is structural even when self-presentation is masculine.', status: 'untestable', type: 'theory' },
			{ bookId: 'mse', chainId: 'impotenz-metapher', shortLabel: 'Impotenz als Männlichkeitskrisen-Metapher (MSE)', claim: 'Psychogene Impotenz ist die perfekte Metapher der männlichen Identitätskrise: Unfähigkeit zur Performanz, nicht externalisierbar (anders als berufliche Krisen, wo man "Schuldige im Außen" finden kann), zwingt zur Selbstreflexion. Gleichzeitig birgt sie eine therapeutische Chance, weil der Mann sich nicht mehr herausreden kann. Medizinisch robust durch die dokumentierte Korrelation mit Depression, Stress und kardiovaskulären Risiken.', status: 'yellow', type: 'observation' },
			{ bookId: 'wtc', chainId: 'sex-addiction', shortLabel: 'Patriarchal sex as addiction (WTC)', claim: '"Most men and women are not having satisfying and fulfilling sex…In actuality, men come to sex hoping that it will provide them with all the emotional satisfaction that would come from love." Patriarchal pornography eroticizes domination because domination is the only available model of connection. Robert Jensen: "Sex is fucking. In patriarchy, there is an imperative to fuck." Gay-and-straight distinction cuts across: "gay men fuck in about the same way straight men do." Male sex-obsession is addiction displacing unmet emotional needs.', status: 'yellow', type: 'consequence' },
			{ bookId: 'pr', chainId: 'pr-transgender-elternunterstuetzung', shortLabel: 'Elterliche Akzeptanz schützt trans (PR)', claim: 'Trans-/nichtbinäre Jugendliche mit elterlicher Unterstützung zeigen deutlich weniger Depression/Suizidalität als abgelehnte. Geschlechtsidentität überwiegend stabil (Olson 2022 5-Jahres-Studie), aber nicht unveränderlich. Prüfer trennt sauber: emotionale Elternhaltung = gesichert; medizinische Frühinterventionen bei Jugendlichen = offen. Kap. 11.', status: 'yellow', type: 'causal' },
		]
	},

	// ─── 15. Solutions & Prescriptions ───
	{
		id: 'solutions',
		name: 'Solutions & Prescriptions',
		description: 'What do the authors recommend we actually do differently?',
		fields: ['education', 'sociology', 'clinical'],
		stanceSummary: 'Recommendations range from gender-conscious parenting (Dittmann) to sex-differentiated education (Sax) to emotional literacy training (Kindlon/Thompson) to accepting biological differences (Gurian). Prüfer steht quer: „good enough parenting" (Winnicott/Bettelheim), Autonomie-Unterstützung und „Erziehung als Entdecken, nicht Formen" — gegen Transformations-Erwartungen an Eltern, weil Behavior Genetics (Plomin/Polderman) und Peer-Forschung (Harris) den Eltern-Effekt begrenzen.',
		claims: [
			{ bookId: 'jvh', chainId: 'parenting-can-fix', shortLabel: 'Gender-conscious parenting', claim: 'Gender-conscious parenting can solve boys\' problems: stereotypes awareness, emotional openness.', status: 'yellow', type: 'solution' },
			{ bookId: 'jvh', chainId: 'caring-masculinity', shortLabel: 'Caring Masculinities', claim: 'The goal: masculinity that replaces dominance with care, engagement, and non-violence.', status: 'untestable', type: 'solution' },
			{ bookId: 'wgm', chainId: 'dare-training', shortLabel: 'Dare training for girls', claim: 'Girls underestimate abilities and would benefit from structured risk-taking ("dare" training).', status: 'yellow', type: 'solution' },
			{ bookId: 'wgm', chainId: 'gentlemen-ladies', shortLabel: '"Ladies and Gentlemen"', claim: 'We must teach boys to be gentlemen and girls to be ladies — embrace healthy sex-differentiated ideals.', status: 'yellow', type: 'solution' },
			{ bookId: 'rc', chainId: 'seven-things', shortLabel: 'Seven things boys need', claim: 'Boys need: emotional permission, emotional literacy, connection, discipline from love, moral guidance, activity, community.', status: 'yellow', type: 'solution' },
			{ bookId: 'wb', chainId: 'discipline-systematic', shortLabel: 'Ten-element discipline system', claim: 'Discipline for boys must be systematic, operating through team and mentors, not just parents.', status: 'yellow', type: 'solution' },
			{ bookId: 'wb', chainId: 'sacred-role-husbandry', shortLabel: '"Husbandry" as sacred male role', claim: 'Boys need a clearly defined male role ("husbandry") to give their lives meaning and purpose.', status: 'untestable', type: 'solution' },
			{ bookId: 'ba', chainId: 'boys-schools-mentoring', shortLabel: 'Boys\' schools and mentoring', claim: 'Consider single-sex education and structured mentoring programs as solutions.', status: 'yellow', type: 'solution' },
			{ bookId: 'pb', chainId: 'neural-plasticity', shortLabel: 'Plasticity amplifies small seeds', claim: 'Neural plasticity is the mechanism — small initial differences are amplified by experience, but also malleable.', status: 'green', type: 'theory' },
			{ bookId: 'rb', chainId: 'potency-connection', shortLabel: 'Potency of connection (RB)', claim: 'Pollack\'s bottom-line prescription: "Stay connected, no matter what." Permission for full emotional range, action-oriented bonding (enthrallment play, car therapy), respect timed silence syndrome. Resnick Add Health JAMA: family connectedness protects across ALL risk domains. Barnett Wellesley: men with close parental relationships had LOWER psychological distress.', status: 'yellow', type: 'solution' },
			{ bookId: 'gm', chainId: 'degendering-strategy', shortLabel: 'Degendering + collective politics (GM)', claim: 'Connell\'s strategic prescription: "complex equality" (Walzer) applied to all gender structures, pursued through COLLECTIVE politics — not individual self-help. Practical deconstruction of hegemonic masculinity ("degendering"), recombination rather than elimination ("Bodybuilder können im Kindergarten arbeiten, Lesben können Lederjacken tragen"), alliance with feminist and gay liberation movements, work in concrete institutional arenas (curriculum reform, AIDS politics, antiracism, fatherhood). REJECT the men\'s-group model — Tolson: "imperialists in a slave revolt." NOMAS, White Ribbon Campaign as positive examples.', status: 'untestable', type: 'solution' },
			{ bookId: 'gm', chainId: 'mens-movement-critique', shortLabel: 'Mythopoetic men\'s movement = reactionary modernization (GM)', claim: 'Bly, Farrell, Goldberg are NOT a path to change but a "reactionary modernization" of patriarchy. Mistakes therapy for politics, replaces structural analysis with archetypal mythology, invents fictional feminist enemies (Goldberg explicitly admits his "Marilyn the female macho" is fictional). Farrell\'s 1974→1995 trajectory: from organizing male NOW networks to defending biological sex differences. The men\'s-movement\'s structural base (white, heterosexual, complicit) prevents it from challenging patriarchy.', status: 'yellow', type: 'consequence' },
			{ bookId: 'wtc', chainId: 'love-ethic', shortLabel: 'Love as political program (WTC)', claim: '"Only a revolution of values in our nation will end male violence, and that revolution will necessarily be based on a love ethic. To create loving men, we must love males." Love defined as practice with six components (Peck + Fromm + hooks): CARE, COMMITMENT, KNOWLEDGE, RESPONSIBILITY, RESPECT, TRUST. Maleness as BEING not performance: "In patriarchal culture males are not allowed simply to be who they are…in an antipatriarchal culture males do not have to prove their value and worth."', status: 'untestable', type: 'solution' },
			{ bookId: 'wtc', chainId: 'maleness-as-being', shortLabel: 'Reclaim maleness, not end it (WTC)', claim: 'hooks rejects BOTH the "end of manhood" feminist strand AND the mythopoetic men\'s movement. "Our work of love should be to reclaim masculinity and not allow it to be held hostage to patriarchal domination." Maleness must be reclaimed as BEING not performance. Silverstein\'s alternative feminist masculinity traits: integrity, self-love, emotional awareness, assertiveness, relational skill (empathy, autonomy, connection).', status: 'untestable', type: 'solution' },
			{ bookId: 'wtc', chainId: 'communities-of-resistance', shortLabel: 'Communities of resistance (WTC)', claim: 'Individual healing impossible: "healing does not take place in isolation." Thich Nhat Hanh (via hooks): "Communities of resistance should be places where people can return to themselves more easily, where the conditions are such that they can heal themselves and recover their wholeness." Family reimagined as "a place of resistance." Relationships as primary sites of political transformation.', status: 'untestable', type: 'solution' },
			{ bookId: 'ms', chainId: 'balanced-man-sein', shortLabel: 'Balanciertes Mann-Sein (MS)', claim: 'Das normative Ziel: nicht der "neue Mann" als Utopie, nicht der Wild Man als Regression, sondern das "balancierte Mann-Sein" als biografisches Projekt, in dem Schwächen und Stärken gleichermaßen aufgehoben und in ein Verhältnis gebracht sind. Verlangt Selbstbezug und Selbstsorge (Foucault: gesellschaftliche Praxis), erweiterte Bewältigung mit gegenseitiger Anerkennung, pädagogische Räume ohne Angst vor Gesichtsverlust. Böhnischs Mantra: "Es gibt nicht den einfachen Weg zur alternativen Männlichkeit, aber den weiterhin steinigen zum balancierenden Mann-Sein."', status: 'untestable', type: 'solution' },
			{ bookId: 'mse', chainId: 'liebevolle-konfrontation', shortLabel: 'Liebevolle Konfrontation (MSE)', claim: 'Die therapeutische Grundmethode der Männerberatung ist die "liebevolle Konfrontation": klare, nicht-ausweichende Benennung der Abwehrmechanismen (Externalisierung, Konzeptverwirrung, Minimierung, Projektion) bei gleichzeitiger grundsätzlicher Wertschätzung des Mannes. Weder kuscheliges Hineinversinken noch konfrontative Beschämung, sondern humorvolle, präsente, ehrliche Begegnung. Theoretisch anschlussfähig an DBT (Linehan) und integrative Psychotherapieforschung.', status: 'untestable', type: 'solution' },
			{ bookId: 'mse', chainId: 'sehnsucht-selbst', shortLabel: 'Sehnsucht nach sich selbst (MSE)', claim: 'Das normative und therapeutische Ziel: Der Mann lernt, den Weg vom Äußeren zum Inneren zu gehen, die eigenen Bedürfnisse wahrzunehmen, zu akzeptieren, zu benennen und zu leben. "Vom Sollen zum Wollen" — Handeln aus dem eigenen Bedürfnis, nicht aus der Rollenpflicht. Nicht Weiblichkeit oder Männlichkeit, sondern Menschlichkeit ist der Horizont. Schlusssatz: "Dort unten, in uns drin, lauert nicht der Feind." Expliziter Rückbezug auf Böhnisch.', status: 'untestable', type: 'solution' },
			{ bookId: 'mse', chainId: 'maennliche-staerken', shortLabel: 'Männliche Stärken als Ressourcen (MSE)', claim: 'Süfke besteht gegen defizitorientierte Ansätze auf einer ressourcenorientierten Sicht: Humor (besonders Selbstironie als Scham-Bewältigung), Distanzierungsfähigkeit (in akuten Krisen schützend), strukturiertes Rationalitätsdenken und Selbstbehauptungsfähigkeit sind echte Stärken, die aus männlicher Sozialisation entstehen und therapeutisch nutzbar sind. Anschlussfähig an Grawes Ressourcenmodell.', status: 'untestable', type: 'observation' },
			{ bookId: 'bdc', chainId: 'three-level-action', shortLabel: 'Drei Handlungsebenen + Feminismus als Verbündeter (BDC)', claim: 'Urwins Lösung: (1) An sich selbst arbeiten — reden lernen, Gefühle teilen; (2) Andere Männer erreichen — Freunde, Familienmitglieder ohne Verurteilung; (3) Nächste Generation erziehen — Konsens, Vergewaltigungskultur, emotionale Bildung. Strategisch: „Wenn wir Männer nicht überflüssig werden wollen, müssen wir uns den Feminismus ansehen und fragen, was wir von Frauen lernen können." Frauen haben die emotionale Reife kultiviert, die Männer nachholen müssen. Explizite Absage an MRA-Positionen.', status: 'untestable', type: 'solution' },
			{ bookId: 'bdc', chainId: 'pragmatic-solutions', shortLabel: 'Pragmatischer Kompromiss statt Purismus (BDC)', claim: 'Kampagnen wie Samariter („Wir sind auf deiner Seite" mit Boxer/Soldat-Rollenbildern) und CALM/Lynx, die toxische Männlichkeits-Ideale als Vehikel nutzen, um Männer zu erreichen, sind langfristig problematisch, kurzfristig aber notwendig. „Wir können nur eine gewisse Zeit an unseren idealistischen Ansichten festhalten, dann müssen wir akzeptieren, dass jeder noch so unvollkommene Fortschritt besser ist als gar keiner." Bewusste Absage an den „betonlinken" Purismus als strategisch unfruchtbar.', status: 'untestable', type: 'solution' },
			{ bookId: 'obm', chainId: 'men-can-heal', shortLabel: 'Men Can HEAL: $1 Milliarde Investment (OBM)', claim: 'Reeves\' zentrale Arbeitsmarkt-Policy: Männer müssen systematisch in HEAL-Berufe (Health, Education, Administration, Literacy) bewegt werden, analog zur STEM-für-Frauen-Bewegung der 2000er-Jahre. Deming (Harvard QJE 2017): soziale-Fähigkeiten-Jobs wuchsen um 12 Prozentpunkte 1980-2012. Pro STEM-Job werden 3+ HEAL-Jobs bis 2030 geschaffen. Männer sind 15% der Nurses, 3% der Pre-K-Teacher, 18% der Social Worker. Reeves fordert $1 Milliarde Investment für pipeline building, financial incentives, social marketing.', status: 'untestable', type: 'solution' },
			{ bookId: 'obm', chainId: 'prosocial-masculinity', shortLabel: 'Prosoziale Männlichkeit für eine postfeministische Welt (OBM)', claim: 'Reeves\' normative Formel: eine „prosoziale Männlichkeit für eine postfeministische Welt". Drei Elemente: (1) Feminismus-Errungenschaften vollständig bewahren; (2) Männer strukturell unterstützen ohne zu pathologisieren; (3) Männlichkeit positiv formulieren — nicht als Maske, nicht als Krankheit, nicht als Problem. „We can hold two thoughts in our head at once: passionate about women\'s rights AND compassionate toward vulnerable boys and men." Explizit gegen beide politische Extreme (Chapter 8 Progressive Blindness, Chapter 9 Conservative Rollback).', status: 'untestable', type: 'solution' },
			{ bookId: 'pr', chainId: 'pr-good-enough-parenting', shortLabel: 'Good-enough Parenting (PR)', claim: 'Winnicotts „good enough mother" und Bettelheims „good enough parent": nicht-perfekte, aber verlässliche Reaktion; moderate Frustration als Entwicklungsmotor; bei ~50% prompter Reaktion entwickeln Kinder eigene Beruhigungsstrategien. Mindful Parenting senkt Eltern-Stress. Gegenpol zu Dittmanns Transformations-Erwartung. Woodhouse (2020) Secure Base Provision, Bögels (2014) RCT. Kap. 17.', status: 'yellow', type: 'solution' },
			{ bookId: 'pr', chainId: 'pr-erziehen-ist-entdecken', shortLabel: 'Erziehung = Entdecken, nicht Formen (PR)', claim: 'Normative Synthese: Eltern sollten akzeptieren, dass Kinder mit Eigenschaften kommen, die nur entdeckt, nicht geformt werden können. Gegenbild zum westlichen Erfolgsimperativ. Stützt sich auf Harris (1998) Nurture Assumption und Plomin (2016) Heritabilität. Kap. 18.', status: 'untestable', type: 'solution' },
			{ bookId: 'pr', chainId: 'pr-autonomie-foerdert', shortLabel: 'Autonomie-Unterstützung (PR)', claim: 'Eltern, die Autonomie unterstützen statt kontrollieren, haben Kinder mit besserer Selbstregulation, höherem Wohlbefinden, besseren schulischen Leistungen — am stärksten wenn beide Eltern so agieren. Vasquez et al. (2015) Meta-Analyse 36 Studien, Self-Determination-Theory. Kap. 17.', status: 'green', type: 'solution' },
		]
	},

	// ─── 16. Pornography & Consent Education ───
	{
		id: 'porn-consent',
		name: 'Pornography & Consent Education',
		description: 'How early porn exposure shapes boys\' understanding of sexuality, and what consent education should look like.',
		fields: ['dev-psych', 'clinical', 'education'],
		stanceSummary: 'Only Dittmann addresses this directly with a full chapter. Other books mention porn peripherally (Sax in Boys Adrift) but none provide a consent framework.',
		claims: [
			{ bookId: 'jvh', chainId: 'porn-consent', shortLabel: 'Porn als soziale Währung', claim: 'First porn exposure at 12-15, often involuntary (shared by peers). Porn serves social functions for boys more than sexual ones.', status: 'yellow', type: 'observation' },
			{ bookId: 'jvh', chainId: 'porn-consent', shortLabel: 'Drei-Ampeln-Konsens', claim: 'The "three green traffic lights" model: head, gut feeling, and body must all signal consent.', status: 'yellow', type: 'solution' },
			{ bookId: 'ba', chainId: 'pornography-replacing', shortLabel: 'Porn replaces relationships', claim: 'Pornography is replacing real human relationships for many young men.', status: 'yellow', type: 'consequence' },
		]
	},

	// ─── 17. Housework & Care Labor ───
	{
		id: 'housework-care',
		name: 'Housework & Care Labor in Childhood',
		description: 'How the gender care gap begins in childhood and what can be done to change housework socialization.',
		fields: ['sociology', 'education'],
		stanceSummary: 'Dittmann provides the only detailed treatment with statistical data and concrete interventions. No other book in the set addresses boys\' housework socialization.',
		claims: [
			{ bookId: 'jvh', chainId: 'housework-gap', shortLabel: 'Care Gap bei Kindern 41,5%', claim: 'Gender Care Gap among children 10-17 stands at ~41.5% and has barely changed since 2012. Boys do less housework than ten years ago.', status: 'green', type: 'observation' },
			{ bookId: 'jvh', chainId: 'housework-education', shortLabel: 'Hausarbeit ab Kleinkindalter', claim: 'Start housework education in toddlerhood with play kitchens and child-sized tools. Encourage sons specifically toward "female" tasks.', status: 'yellow', type: 'solution' },
			{ bookId: 'gm', chainId: 'patriarchal-dividend', shortLabel: 'Patriarchal dividend in unpaid work (GM)', claim: 'Connell\'s "patriarchal dividend": most men do not embody hegemonic masculinity but receive concrete material benefits by virtue of being men. The unpaid-care-work asymmetry is a key component. Time-budget studies show men\'s and women\'s total annual working hours are ~equal, but the distribution of PAID work (and the unpaid work that frees men to do paid work) makes the difference. This is the structural reason why individual self-help can\'t dismantle patriarchy: the structure rewards passive participation.', status: 'green', type: 'causal' },
		]
	},

	// ─── 18. Conflict Resolution & Cultural Parenting ───
	{
		id: 'conflict-culture',
		name: 'Conflict Resolution & Cultural Parenting',
		description: 'How cultural parenting styles shape boys\' aggression and conflict behavior — the Japanese-German comparison.',
		fields: ['dev-psych', 'sociology'],
		stanceSummary: 'Dittmann introduces the Trommsdorff & Kornadt cross-cultural comparison. Raising Cain touches on conflict through emotional literacy. Sax and Gurian emphasize biological bases of aggression.',
		claims: [
			{ bookId: 'jvh', chainId: 'conflict-resolution', shortLabel: 'Japanische vs. deutsche Erziehung', claim: 'Japanese parents assume children misbehave from ignorance; German parents assume hostile intent — leading to more aggression.', status: 'yellow', type: 'causal' },
			{ bookId: 'rc', chainId: 'reactive-violence', shortLabel: 'Reactive aggression', claim: 'Most boy aggression is defensive/reactive, not predatory.', status: 'green', type: 'observation' },
			{ bookId: 'wgm', chainId: 'aggression', shortLabel: 'Aggression partly innate', claim: 'Aggression differences between sexes are partly innate with evolutionary functions.', status: 'green', type: 'premise' },
		]
	},

	// ─── 19. Care Professions & Career Guidance ───
	{
		id: 'care-professions',
		name: 'Care Professions & Career Guidance',
		description: 'Why boys avoid social/care professions and what structural changes could help.',
		fields: ['education', 'sociology'],
		stanceSummary: 'Dittmann provides unique data from the BMFSFJ Men in Care study. No other book in the set addresses career guidance toward care professions.',
		claims: [
			{ bookId: 'jvh', chainId: 'care-professions', shortLabel: 'Care-Berufe Barrieren', claim: '65% of youth interested in social professions but male share only ~20%. Fathers discourage care careers more than mothers.', status: 'green', type: 'observation' },
			{ bookId: 'jvh', chainId: 'caring-masculinity', shortLabel: 'Caring Masculinities Ziel', claim: 'The goal: masculinities that reject dominance and embrace care as identity core.', status: 'untestable', type: 'solution' },
			{ bookId: 'gm', chainId: 'degendering-strategy', shortLabel: 'Re-embodiment for men: care work (GM)', claim: 'Connell\'s concrete example of "practical deconstruction" of hegemonic masculinity: men in infant/toddler caregiving. "Babys knuddelnde Männer." Different bodily capacities than war/sport/factory. Body-reflexive practice means men can develop new tactile and emotional capacities through care work — recombination, not elimination, of gendered elements. The point is institutional change in care professions, not just individual choice.', status: 'untestable', type: 'solution' },
		]
	},

	// ─── 20. Boy Friendships & Social Connection ───
	{
		id: 'boy-friendships',
		name: 'Boy Friendships & the Connection Crisis',
		description: 'How boys lose the capacity for deep friendship during adolescence and the consequences of male social isolation.',
		fields: ['dev-psych', 'sociology', 'clinical'],
		stanceSummary: 'Way\'s Deep Secrets is the primary longitudinal evidence anchor. Dittmann and Pollack adopt Way directly. Raising Cain discusses emotional isolation. Benenson provides the evolutionary framework for male group dynamics. Sax emphasizes shoulder-to-shoulder bonding.',
		claims: [
			{ bookId: 'jvh', chainId: 'friendship-crisis', shortLabel: 'Freundschaftskrise', claim: 'Boys describe deep friendships at 13-14 that die by 17. 15% of men have zero close friends (up from 3% in 1990).', status: 'green', type: 'observation' },
			{ bookId: 'rc', chainId: 'emotional-isolation', shortLabel: 'Fortress of solitude', claim: 'By adolescence, emotional isolation has become virtually a rite of passage for boys.', status: 'yellow', type: 'consequence' },
			{ bookId: 'ww', chainId: 'males-larger-groups', shortLabel: 'Larger hierarchical groups', claim: 'Males form larger, more hierarchical groups with flexible dominance hierarchies.', status: 'green', type: 'observation' },
			{ bookId: 'wgm', chainId: 'friendships-differ', shortLabel: 'Shoulder-to-shoulder bonding', claim: 'Male friendships are shoulder-to-shoulder (shared activity), female friendships face-to-face (shared feelings).', status: 'green', type: 'observation' },
			{ bookId: 'rb', chainId: 'mask-of-masculinity', shortLabel: 'Chumships & action love (RB)', claim: 'Boys have deep friendships ("chumships", Sullivan) expressed through "action love": shared activity, protection, work, and justice rather than verbal intimacy. The mask prevents verbal emotional exchange but not genuine connection.', status: 'yellow', type: 'observation' },
			{ bookId: 'ds', chainId: 'longitudinal-method', shortLabel: '20-Jahre-Listening-Guide (DS)', claim: 'Way\'s methodologische Basis: 20+ Jahre Interviewstudien mit ~135 NYC-public-school-Jungen (Black, Latino, Chinese American, White; ~70% Arbeiterklasse). Listening Guide-Methode (Brown/Gilligan): mehrfaches sequentielles Lesen derselben Transkripte nach verschiedenen „voices". Dieselben Jungen werden jährlich interviewt. Die stärkste longitudinale ethnographische Primärquelle zu Jungen-Freundschaften in der Bibliothek.', status: 'green', type: 'premise' },
			{ bookId: 'ds', chainId: 'boys-emotionally-articulate-early-adolescence', shortLabel: 'Deep intimacy at 13-15 (DS)', claim: 'Boys 13-15 describe their closest male friendships in a language of „love", „deep", „trust", „secret". This is the strongest direct empirical validation of the Sullivan „chumship"-tradition adopted by Pollack. Way documents it longitudinally across hundreds of interviews, not through clinical inference.', status: 'green', type: 'observation' },
			{ bookId: 'ds', chainId: 'friendship-loss-late-adolescence', shortLabel: 'Loss between 16-18 (DS)', claim: 'The same boys lose the same friendships between 16 and 18 — documented in real time in the transcripts. The 15% of men with zero close friends (cited by Dittmann and others) is the downstream consequence Way observed forming live in her panel.', status: 'green', type: 'observation' },
			{ bookId: 'ds', chainId: 'homophobia-mechanism', shortLabel: 'Homophobia as mechanism (DS)', claim: 'Way identifies homophobia — the cultural equation of male intimacy with „gay" or „girlish" — as the core mechanism of friendship loss. The boys themselves identify it. „No homo" disclaimers appear repeatedly in later interviews. This is the most direct evidence in the whole library for why the connection crisis happens when it happens.', status: 'yellow', type: 'causal' },
			{ bookId: 'ds', chainId: 'solution-crisis-of-connection', shortLabel: 'Society-wide crisis of connection (DS)', claim: 'Way\'s solution frame: boys\' friendship loss is not a boy-specific problem but the leading edge of a society-wide „crisis of connection" that the US has been experiencing for decades (Putnam Bowling Alone; Konrath empathy decline). Boys are the canaries in the coal mine. The solution: „protect, not teach" — the emotional capacity is already there, it needs to be shielded from the cultural equation of intimacy with weakness.', status: 'yellow', type: 'solution' },
			{ bookId: 'pr', chainId: 'pr-freundschaft-qualitaet', shortLabel: 'Freundschaft: Qualität > Quantität (PR)', claim: 'Langlebigkeit und psychische Gesundheit hängen stärker von Freundschaftsqualität ab als von Quantität. Gute Freunde senken Mortalität um ca. 50 % (Holt-Lunstad et al. 2010, PLOS Medicine Meta-Analyse 148 Studien). Stützt den sozialepidemiologischen Rahmen der Friendship-Crisis-Konvergenz, ohne Ways Längsschnitt direkt zu replizieren. Kap. 8.', status: 'green', type: 'causal' },
			{ bookId: 'nbm', chainId: 'loneliness-friendship', shortLabel: 'Friendship Recession: die Erwachsenen-Fortsetzung von Deep Secrets (NBM)', claim: 'Amerikaner ohne enge Freunde: 3% (1990) → 12-15% (2021), Männer am stärksten betroffen; zwei Drittel der US-Männer: „No one really knows me well“ (Equimundo 2023); Männer verlagern emotionale Versorgung auf Partnerinnen, deren Verlust ihre Netzwerke kollabieren lässt. Galloway liefert damit — ohne Way zu zitieren — die Erwachsenen-Fortsetzung ihrer Adoleszenz-Kurve, plus Praxis: Friendship-Cold-Calling, „go first“ bei verletzlichen Themen, Show-up-Ethik.', status: 'green', type: 'observation' },
		]
	},
];

// ── Helper: get all books that appear in a theme ───────────────

export function getBooksInTheme(theme: ThemeCluster): string[] {
	return [...new Set(theme.claims.map(c => c.bookId))];
}

// ── Helper: get all themes for a book ──────────────────────────

export function getThemesForBook(bookId: string): ThemeCluster[] {
	return themeClusters.filter(t => t.claims.some(c => c.bookId === bookId));
}

// ── Helper: count claims per status ────────────────────────────

export function getStatusCounts(claims: BookClaim[]): Record<string, number> {
	const counts: Record<string, number> = { red: 0, yellow: 0, green: 0, untestable: 0 };
	for (const c of claims) counts[c.status]++;
	return counts;
}
