// convergence-data.ts
// Cross-book convergence nodes: shared claims across multiple books in the library,
// audited against primary sources and current scientific literature.
//
// IMPORTANT: Convergence across books is NOT the same as truth. Many books in this
// library cite each other or share a common theoretical ancestor (Rogers, Chodorow,
// Terrence Real, Connell, Pollack). A claim endorsed by 8 books may still trace back
// to 1-2 primary studies, be clinically plausible but untested, or even be contradicted
// by the larger empirical literature. This data file surfaces those cases honestly.

export type Verdict = 'robust' | 'partial' | 'clinical-metaphor' | 'overclaim';

export interface ConvergenceNode {
	id: string;
	name: string;
	oneLineClaim: string;
	sharedBy: Array<{
		bookId: string;
		phrasing: string; // how this book specifically states it
	}>;
	primarySourcesBeneath: string; // who actually produced the empirical data
	whatTheDataShows: string; // current scientific status
	counterEvidence: string; // what limits or contradicts
	verdict: Verdict;
	verdictLabel: string;
	verdictExplanation: string; // bottom line
}

export const verdictInfo: Record<Verdict, { label: string; color: string; icon: string; description: string }> = {
	robust: {
		label: 'Empirisch robust',
		color: '#10b981',
		icon: '✓',
		description: 'Mehrfach repliziert, meta-analytisch gestützt, auch nach kritischer Prüfung stabil.'
	},
	partial: {
		label: 'Teilweise gestützt',
		color: '#f59e0b',
		icon: '~',
		description: 'Kern-Phänomen empirisch dokumentiert, aber in den Büchern oft überzogen dargestellt oder mit spekulativem Mechanismus versehen.'
	},
	'clinical-metaphor': {
		label: 'Klinische Metapher',
		color: '#8b5cf6',
		icon: '?',
		description: 'Klinisch plausibel und intern konsistent, aber nicht direkt empirisch getestet. Ein theoretischer Rahmen, kein Befund.'
	},
	overclaim: {
		label: 'Überzogen / schwach gestützt',
		color: '#ef4444',
		icon: '!',
		description: 'Die Konvergenz ist stark, aber die zugrundeliegende Primärevidenz ist schwach, inkonsistent oder aktiv widersprochen. Vorsicht bei Verwendung.'
	}
};

export const convergences: ConvergenceNode[] = [
	// =================================================================
	{
		id: 'boys-born-more-expressive',
		name: 'Jungen werden emotionaler geboren als Mädchen',
		oneLineClaim:
			'Männliche Säuglinge zeigen angeblich MEHR emotionale Ausdrucksstärke als weibliche — der stoische Mann ist also gemacht, nicht geboren.',
		sharedBy: [
			{ bookId: 'rb', phrasing: 'Pollack: „In the real world … male babies express themselves more. They cry longer and louder.” Beruft sich auf Weinberg/Tronick: 0% Spiegelung von Traurigkeit bei Jungen, 22% bei Mädchen.' },
			{ bookId: 'rc', phrasing: 'Kindlon & Thompson: „All boys are born with full emotional capacity; newborn boys are actually MORE emotionally reactive.” Ähnliche Quellen wie Pollack.' },
			{ bookId: 'pb', phrasing: 'Eliot: Jungen starten emotional reaktiver; beruft sich auf entwicklungspsychologische Befunde zur Selbstregulation.' },
			{ bookId: 'wtc', phrasing: 'hooks übernimmt den Befund direkt aus der Kindlon/Thompson/Malatesta-Linie als anti-essentialistischen Anker.' },
			{ bookId: 'jvh', phrasing: 'Dittmann popularisiert die These als Beweis gegen die „Jungen sind halt so”-Erzählung.' },
			{ bookId: 'ds', phrasing: 'Way (NUR für early/mid adolescence, NICHT für Säuglinge): longitudinal dokumentiert, dass Jungen 13-15 emotional genauso artikuliert wie vergleichbare Mädchen sind. Way spricht nicht zur Säuglingsforschung; ihr Befund rettet aber den Kern der Behauptung für das Jugendalter.' },
			{ bookId: 'pr', phrasing: 'Prüfer Kap. 11–12: „Wenn wir den Unterschied zwischen Mädchen und Jungen betrachten, ist dieser biologisch eher gering, gesellschaftlich ist er enorm." Jungen und Mädchen weinen bis ~12 Jahre ähnlich oft; die Divergenz entsteht danach durch Männlichkeitsnormen (L26 `pr-weinen-kulturell-sozialisiert`, Van Tilburg 2002, Aznar & Tenenbaum 2015). Prüfer geht NICHT so weit wie Pollack/hooks („Jungen starten expressiver"), stützt aber die engere Version robust: keine Säuglings-Differenz, Divergenz ist sozial.' }
		],
		primarySourcesBeneath:
			'Die spezifische 0/22%-Zahl stammt aus Weinberg, M. K., & Tronick, E. Z. (1994), "Beyond the face" (Child Development) — EINE Studie mit ~40 Säuglingen aus Tronicks Labor. Malatesta und Haviland (1982, "Learning display rules") sind die zweite klassische Quelle. Beide sind kleine N, frühe 80er/90er-Jahre-Studien. Way (2011, Deep Secrets, Harvard) liefert die stärkste longitudinale Primärquelle, aber sie beginnt erst mit 13, nicht im Säuglingsalter.',
		whatTheDataShows:
			'Die AKTUELLE meta-analytische Evidenz widerspricht der populären Erzählung: Chaplin & Aldao (2013, Psychological Bulletin, 166 Studien, >21.000 Kinder) fanden, dass MÄDCHEN in allen Altersgruppen mehr positive Emotionen und mehr internalisierende Emotionen zeigen, JUNGEN mehr externalisierende (Ärger). In der Säuglingsphase sind die Effektstärken minimal (d < 0,15), nicht gegen Jungen. Die Effektstärken wachsen mit dem Alter moderat. Baron-Cohen et al. (2000) zeigten, dass neugeborene Jungen am ersten Lebenstag WENIGER auf Gesichter schauen. Olsavsky et al. (2019) konnten die „boys more expressive”-Befunde nicht konsistent replizieren.',
		counterEvidence:
			'Die konservative Forschungslage zeigt: (a) Säuglings-Geschlechterunterschiede in emotionaler Expressivität sind sehr klein und inkonsistent; (b) positive Emotionsausdrücke sind bei Säuglings-MÄDCHEN leicht häufiger, nicht bei Jungen; (c) die spezifische Tronick-Zahl (0% vs 22%) ist ein Einzelbefund aus einer kleinen Stichprobe, nie robust repliziert. Die Erzählung „Jungen starten emotionaler und werden es abtrainiert” ist eine Verkürzung, die Pollacks politische Pointe stützt, aber die Daten nicht trägt.',
		verdict: 'overclaim',
		verdictLabel: 'Überzogen',
		verdictExplanation:
			'Das anti-essentialistische Narrativ überkorrigiert hier. Die ehrliche Aussage wäre: „Säuglingsunterschiede in emotionaler Expressivität sind klein und inkonsistent; die großen Unterschiede zwischen Jungen und Männern im Erwachsenenalter sind daher überwiegend sozialisiert, ABER nicht weil Jungen anfangs expressiver wären.” Pollack und hooks überzeichnen den Primärbefund. **Way 2011 rettet eine NARROWERE Version**: Jungen in der frühen Adoleszenz (13-15) sind emotional genauso artikuliert wie Mädchen in ihren engsten Freundschaften. Das ist longitudinal direkt beobachtet. Die Geschlechterdifferenz in emotionaler Expressivität entsteht NICHT in der frühen Kindheit, sondern in der mittleren Adoleszenz durch kulturelle Gleichsetzung von Intimität mit Weiblichkeit/Homosexualität. Die stärkere Formulierung: „Jungen haben in der frühen/mittleren Adoleszenz volle emotionale Kapazität — sie verlieren sie zwischen 16 und 18.” Way-gestützt.'
	},

	// =================================================================
	{
		id: 'mask-boy-code',
		name: 'Die Maske / der Boy Code / Stiff Upper Lip',
		oneLineClaim:
			'Jungen und Männer tragen eine defensive Fassade, die ein reiches Innenleben verbirgt; die Identität ist eine Lüge, die Rolle ist ein Panzer.',
		sharedBy: [
			{ bookId: 'rb', phrasing: 'Pollack: „Mask of Masculinity”. Adoptiert David & Brannons Vier-Gebote-Modell („Sturdy Oak, Give \'em Hell, Big Wheel, No Sissy Stuff”).' },
			{ bookId: 'wtc', phrasing: 'hooks: „Learning to wear a mask is the first lesson in patriarchal masculinity.” Das Wort „Maske” steckt bereits in „Masculinity”.' },
			{ bookId: 'mse', phrasing: 'Süfke: „Identitätslüge” — die offizielle männliche Fassade stimmt nicht mit der faktischen Innenwelt überein.' },
			{ bookId: 'bdc', phrasing: 'Urwin: „Stiff Upper Lip” als britische Variante; der Vater als Paradefall des schweigenden Mannes.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: „Pseudoresilienz” — Jungen wirken stark, verbergen inneren Kampf.' },
			{ bookId: 'ds', phrasing: 'Way: DIREKTE longitudinale Beobachtung. Dieselben Jungen werden über Jahre verfolgt: mit 13-15 sprechen sie über „love”, „deep”, „trust”, „secret” in ihren männlichen Freundschaften; mit 16-18 fügen sie „no homo"-Disclaimer hinzu und verlieren die Freundschaften. Die Maske formiert sich in Echtzeit auf den Transkripten — keine klinische Inferenz.' },
			{ bookId: 'pr', phrasing: 'Prüfer Kap. 12 (L26 `pr-weinen-kulturell-sozialisiert`): Levants „normative male alexithymia" (Levant 2001, 2013), empirisch unterfüttert durch Franz et al. (2008) deutsche Repräsentativ-Daten und Thorberg et al. (2011) Meta zu parental bonding & alexithymia. Prüfer bestätigt das Konstrukt als empirisch plausibel („mittelstark, klinisch variabel"), liefert damit das harte Korrelationsfundament, das die qualitativ-klinische Pollack-Evidenz alleine nicht tragen kann. Stellt keine „wahres Selbst unter der Maske"-Metapher auf.' },
			{ bookId: 'nbm', phrasing: 'Galloway (Memoir, n=1): 16 Jahre „image upkeep“ und Imposter-Angst; „For so much of male history, any expression of male weakness conveyed a signal: beat the shit out of me.“ Bestätigt das Maske-Phänomen in der ersten Person — lehnt aber das Etikett „toxic masculinity“ als „emperor of all oxymorons“ ab (definitorische Umpolung: Grausamkeit = anti-maskulin).' },
		],
		primarySourcesBeneath:
			'David & Brannon (1976), "The Male Sex Role: Our Culture\'s Blueprint for Manhood" — theoretisch-typologische Abhandlung, KEINE empirische Studie. Die spätere Operationalisierung läuft über Levant\'s Male Role Norms Inventory (MRNI, 1992) und Mahalik et al. Conformity to Masculine Norms Inventory (CMNI, 2003). Pollacks spezifischer Coopersmith-Lie-Scale-Befund (1.53 Grade 7 → 5.0 Grade 12) stammt aus EINER Studie mit methodischen Problemen: die Lie-Skala war nie dafür konzipiert, „Maskierung” zu messen. **Way (2011, Deep Secrets, Harvard) liefert die stärkste Primärquelle**: 20+ Jahre longitudinale Interviewstudie mit ~135 NYC-public-school-Jungen, Listening-Guide-Methode. Chu (2014) unabhängige Replikation bei weißen Privatschul-Jungen. Santos (2018) quantitative Validation an 426 Jungen.',
		whatTheDataShows:
			'Was REAL empirisch gestützt ist: (a) MRNI- und CMNI-Skalen messen Zustimmung zu traditionellen Männlichkeitsnormen reliabel; (b) hohe Werte korrelieren konsistent mit geringerer Hilfesuche, mehr Depression, schlechteren Gesundheitsverhalten (Wong et al. 2017 Meta-Analyse, 78 Studien, d ≈ 0,31 für psychische Gesundheit). **Way (2011) liefert die direkte observational evidence**, die die klinische Inferenzkette bestätigt: die Maske ist keine clinician-imputed Metapher, sondern ein longitudinal verfolgbarer Prozess. Derselbe Junge, der mit 14 seinen besten Freund als „the person I love most in the world” beschreibt, sagt mit 17 „I don\'t care anymore” — UND identifiziert selbst die Homophobie als Grund. Was NICHT Way-gestützt ist: die Metapher einer „wahren Selbst”, das unter der Maske wartet — dies ist ein klinisch-theoretisches Konstrukt, keine getestete Entität. Connell (1995) hat die Rollentheorie, auf der der „Boy Code” aufbaut, als logisch inkohärent kritisiert.',
		counterEvidence:
			'Connells Theoriekritik ist ernst zu nehmen: Sex-Role-Theorie verwechselt soziale Position, Status und individuelle Handlung. Der „Boy Code” als vier-teiliges Regelwerk ist eine Vereinfachung, die empirische Variation verdeckt. Alternative Hypothese: Männer haben einfach eine geringere emotionale Selbstwahrnehmung (Alexithymie) — nicht eine aktiv getragene Maske. **REEVES 2022 VERSTÄRKT DIE KRITIK**: Reeves lehnt „toxic masculinity” als analytischen Rahmen explizit ab (Kap. 8 „Progressive Blindness”), zitiert Harringtons (2021) empirische Begriffsgeschichte, die zeigt, dass der Begriff „almost never defined” ist und nur „to signal disapproval” verwendet wird. Die Maske-Metapher ist Teil desselben analytischen Defizits: eine klinische Intuition, die sich zu einem politischen Schlagwort verselbstständigt hat, ohne empirische Präzisierung.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt — mit observational core',
		verdictExplanation:
			'Die Korrelation zwischen traditionellen Männlichkeitsnormen und schlechten Outcomes ist eines der robustesten Befunde der Männerforschung. **Way 2011 upgradet den observational core**: die zeitliche Dynamik der Maske (Aufbau zwischen 15 und 18, ausgelöst durch kulturelle Homophobie) ist keine klinische Inferenz mehr, sondern direkt longitudinal beobachtet an ~135 Jungen über Jahre. Chu 2014 und Santos 2018 replizieren unabhängig. Das ist der stärkste Beleg, den die „Maske/Boy-Code"-Konvergenz hat. **Was bleibt problematisch**: die Metapher eines „wahren Selbst" unter der Maske; die starre Vier-Gebote-Codifizierung bei Pollack/Brannon (Connell-Kritik); die politische Kontraproduktivität des „toxic masculinity"-Rahmens (Reeves Kap. 8). **Robustere Formulierung post-Way**: „Jungen verlieren emotionale Freundschaftsartikulation in der mittleren Adoleszenz, ausgelöst durch die kulturelle Gleichsetzung von Intimität mit Weiblichkeit/Homosexualität — longitudinal dokumentiert (Way, Chu, Santos). Die spezifische David/Brannon-Codifizierung in vier Geboten und die „wahres-Selbst-unter-der-Maske"-Metapher sind optionale theoretische Überbauten."'
	},

	// =================================================================
	{
		id: 'hidden-male-depression',
		name: 'Verdeckte männliche Depression',
		oneLineClaim:
			'Männliche Depression zeigt sich als Gereiztheit, Wut, Alkoholismus, Workaholismus — nicht als klassische Traurigkeit. Darum wird sie unterdiagnostiziert, und darum ist die Suizidrate 3-4× höher als bei Frauen.',
		sharedBy: [
			{ bookId: 'rb', phrasing: 'Pollack: „Hidden epidemic of boy depression”; Nolen-Hoeksema Stanford-Daten; Angst Swiss Research.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: Depression bei Jungen erscheint oft als Reizbarkeit, Rückzug, Sucht.' },
			{ bookId: 'mse', phrasing: 'Süfke: übernimmt Terrence Reals „covert depression” direkt als klinisches Rahmenmodell.' },
			{ bookId: 'bdc', phrasing: 'Urwin: Rekrutiert die These über die Samaritans-2012-Statistik und seine persönliche Familienerfahrung.' },
			{ bookId: 'wtc', phrasing: 'hooks: zitiert Real als Kronzeugen für die „disconnection”-Ätiologie männlicher Depression.' },
			{ bookId: 'ds', phrasing: 'Way: longitudinale Dokumentation, dass die männliche Suizidrate genau in dem Altersfenster (16-18) scharf ansteigt, in dem ihre Panel-Jungen ihre engen Freundschaften verlieren. Timing-Korrelation als stärkster indirekter empirischer Anker für die „disconnection → despair"-Hypothese.' },
			{ bookId: 'nbm', phrasing: 'Galloway: Depression als Nichts-Fühlen („I didn’t feel sad, I felt nothing. As if my feet were hollow“); „mild depression and anger issues“, nie diagnostiziert, nie SSRI, nie Therapie; Selbstmanagement über SCAFA (Sweat, Clean eating, Abstinence, Family, Affection). Prototyp der verdeckten männlichen Depression aus der Innenperspektive.' },
		],
		primarySourcesBeneath:
			'Terrence Real (1997), "I Don\'t Want to Talk About It" — eine klinische Synthese, KEINE kontrollierte Studie. Später operationalisiert durch Magovcevic & Addis (2008), "Masculine Depression Scale" (MDS). Der stärkste empirische Anker ist Rutz et al. 1992 „Gotland Male Depression Scale”-Studie: GP-Training in Schweden reduzierte Suizidraten. Nachfolgende Replikationsversuche (Rihmer, Preti) sind inkonsistent. Die epidemiologische Grundlage: männliche Suizidrate in Westeuropa/USA 3-4× weiblich; depressive Diagnoserate umgekehrt ~2× weiblich.',
		whatTheDataShows:
			'Was robust ist: (a) die Suizidraten-Diskrepanz und die Depressionsdiagnose-Diskrepanz (international konsistent); (b) Die MDS zeigt reliable Psychometrie für das Konstrukt; (c) Männer berichten in Fragebögen seltener klassische Depressionssymptome. Was nicht so robust ist: (a) Dass männliche Depression eine DISTINKTE Entität ist (könnte einfach underreporting sein); (b) Dass die Suizidraten primär durch unterdiagnostizierte Depression erklärt werden — die Methode-Letalität (Männer verwenden Waffen/Erhängen, Frauen Pillen) erklärt einen großen Teil der 3-4×-Ratio auch ohne „hidden depression”-Hypothese.',
		counterEvidence:
			'Nock et al. (2008, Journal of Clinical Psychiatry): Frauen berichten MEHR Suizidgedanken als Männer. Das widerspricht der einfachen „Männer sind verdeckt depressiv und bringen sich deshalb um”-Erzählung. Alternative Erklärung: Depression ist etwa gleich häufig, aber Männer wählen tödlichere Methoden. Möller-Leimkühler 2003: das Konzept „male depression” ist theoretisch konsistent, aber empirisch nicht eindeutig von normaler unterdiagnostizierter Depression abgegrenzt.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt',
		verdictExplanation:
			'Eine der besseren Konvergenzen in der Bibliothek. Der epidemiologische Kern ist robust. Aber die Frage, ob „male depression” eine eigene Syndromentität oder nur unterdiagnostizierte klassische Depression ist, bleibt offen. Die Gotland-Interventionsstudien sind reell, aber die Replikationen sind inkonsistent. Nicht überdeuten.'
	},

	// =================================================================
	{
		id: 'anger-emotional-funnel',
		name: 'Wut als „emotionaler Trichter”',
		oneLineClaim:
			'Weil alle verletzlichen Gefühle beschämt werden, wird Wut zur einzigen sozial akzeptierten männlichen Emotion; Trauer, Angst, Scham werden alle in Wut umgewandelt.',
		sharedBy: [
			{ bookId: 'rb', phrasing: 'Pollack: zitiert Don Long zum „emotional funnel anger”.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: Wut als Ventil für alle anderen Emotionen.' },
			{ bookId: 'wtc', phrasing: 'hooks: sieht das Funnel-Muster als direkte Folge patriarchaler Sozialisation.' },
			{ bookId: 'mse', phrasing: 'Süfke: Hilflosigkeit als Kerngefühl, das unter Wut verborgen ist.' },
			{ bookId: 'ms', phrasing: 'Böhnisch: „Gewalt als abgespaltene Hilflosigkeit” (übernommen von Gruen 1992).' },
			{ bookId: 'nbm', phrasing: 'Galloway via Bill Burr: „men are either angry… or fine.“ Eigene Wut-Simulationen im Kopf (Konfrontationen, die nie stattfanden; Holocaust-Grübeln als Warnsignal); Wut und Intensität explizit vom Vater „geerbt“. Der Trichter als gelebte Selbstbeschreibung, nicht als Theorie.' },
		],
		primarySourcesBeneath:
			'Don Long — ein klinischer Praktiker, zitiert durch Pollack, ohne peer-reviewed Primärquelle. Arno Gruen (1992), "Der Verrat am Selbst" — psychoanalytisches Werk. James Gilligan (1996), "Violence: Our Deadly Epidemic and its Causes" — klinische Synthese einer Lebenszeit in Gefängnispsychiatrie. Alle drei sind klinisch-theoretisch, nicht experimentell.',
		whatTheDataShows:
			'Was robust ist: Spielberger STAXI-2 zeigt leicht höhere Anger-Out-Werte bei Männern. Kring 2000 Review: Männer drücken mehr Wut aus, Frauen mehr Trauer/Angst. Das MUSTER existiert. Was NICHT direkt getestet ist: der spezifische MECHANISMUS, dass andere Gefühle „umgewandelt” werden. Das ist eine Interpretation. Alternative: Männer haben einfach andere Baseline-Emotionen (z.B. weniger Trauer erlebt, nicht nur weniger ausgedrückt).',
		counterEvidence:
			'Die „Funnel”-Hypothese ist hydraulisch: Gefühle werden wie Flüssigkeit von Rohr zu Rohr geleitet. Die moderne Emotionsforschung (Barrett 2017, „How Emotions Are Made”) lehnt solche hydraulischen Modelle ab. Gefühle sind konstruiert, nicht umgeleitet. Die Funnel-Metapher ist klinisch nützlich, aber neurobiologisch überholt.',
		verdict: 'clinical-metaphor',
		verdictLabel: 'Klinische Metapher',
		verdictExplanation:
			'Das Muster (Männer = mehr Wut, weniger Trauer) ist real. Der Mechanismus (Umwandlung von Gefühl X in Wut) ist eine nützliche klinische Metapher ohne neurowissenschaftliche Validierung. Als Therapiewerkzeug ok, als Kausalmodell nicht belegt.'
	},

	// =================================================================
	{
		id: 'violence-reactive-not-testosterone',
		name: 'Männliche Gewalt ist reaktiv, nicht prädatorisch — Testosteron erklärt sie nicht',
		oneLineClaim:
			'Die meiste männliche Gewalt entsteht aus Scham, Hilflosigkeit oder Bedrohung der Identität — nicht aus biologischem Aggressionsdrang. Testosteron ist kein Aggressionshormon.',
		sharedBy: [
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: Gewalt ist reaktiv/defensiv, Scham und Rückzug als Vorboten.' },
			{ bookId: 'rb', phrasing: 'Pollack: Raine/Brennan/Mednick-Daten — Geburtskomplikationen + Mutter-Zurückweisung prognostizieren erwachsene Gewalt.' },
			{ bookId: 'wtc', phrasing: 'hooks: „The first act of violence that patriarchy demands of males is … acts of psychic self-mutilation.” Gewalt ist Selbstentfremdung nach außen projiziert.' },
			{ bookId: 'ms', phrasing: 'Böhnisch: „Männliche Gewalt … ist immer ein Kampf gegen die eigene Hilflosigkeit” (zitiert Gruen 1992).' },
			{ bookId: 'mse', phrasing: 'Süfke: Hilflosigkeit als Kerngefühl unter allen männlichen Symptomen.' },
			{ bookId: 'bdc', phrasing: 'Urwin: häusliche Gewalt in Krisen als Kompensation für wirtschaftliche „Entmannung”.' },
			{ bookId: 'gm', phrasing: 'Connell: Gewalt als Gender-Order-Policing, nicht als biologisches Ausagieren. Explizit gegen Testosteron-Kausalität.' },
			{ bookId: 'obm', phrasing: 'Reeves: Carole Hoovens Synthese — Testosteron AMPLIFIZIERT Aggression, TRIGGERT sie aber nicht. Jungen sind 5× aggressiver bei 17 Monaten — früh genug, um teils biologisch zu sein. Marriage als „testosterone suppression system” (Henrich). 95% aller Tötungsdelikte weltweit männlich, in allen Kulturen.' },
			{ bookId: 'pr', phrasing: 'Prüfer Kap. 13 (L28 `pr-bestrafung-schadet`): Körperstrafen und übermäßig harsche Kritik verschlechtern Selbstregulation, verändern neuronale Reaktionen auf Fehler/Belohnung und erhöhen Depressivitätsrisiko. Heilmann et al. (2021) Lancet narrative review, Burani et al. (2023) Biological Psychiatry, Owen et al. (2012) 41-Studien-Review. Der Strafschaden-Pfad stützt indirekt die reaktive-Gewalt-These: harte Disziplinierung erzeugt Scham/Dysregulation, nicht Charakter. Konvergent mit Kindlon/Thompsons `harsh-discipline`.' }
		],
		primarySourcesBeneath:
			'Archer (1991), “The influence of testosterone on human aggression” — Meta-Analyse, r ≈ 0,08 (schwach). Book, Starzyk, Quinsey (2001), Meta-Analyse, r ≈ 0,14. James Gilligan (1996), Gefängnispsychiatrie-Synthese. Dodge & Crick\'s reaktive/proaktive Aggressions-Distinktion (1996). Raine et al. Danish Birth Cohort Studies (gut-kontrollierte Längsschnitt-Daten). **NEUE PRIMÄRQUELLE (Reeves 2022)**: Carole Hooven „Testosterone: The Story of the Hormone That Dominates and Divides Us” (2021). Hoovens Synthese ist der aktuelle akademische Mittelweg: Testosteron als Amplifier statt Trigger. Reeves zitiert sie als zentrale Quelle.',
		whatTheDataShows:
			'Was robust ist: (a) Zirkulierendes Testosteron korreliert bei Erwachsenen nur sehr schwach mit Aggression; (b) reaktive und proaktive Aggression sind unterscheidbare Phänomene; (c) Scham und Zurückweisung prognostizieren Gewalt besser als Hormonspiegel. **REEVES 2022 NUANCIERT**: Hooven zeigt, dass Testosteron reale Effekte auf Verhalten hat, aber als Amplifier wirkt — nicht als direkter Auslöser. Die Effekte werden durch Umgebung moduliert. Jungen sind 5× aggressiver bei 17 Monaten (Tremblay) — das ist zu früh für rein kulturelle Erklärungen. Die Wahrheit liegt in der Mitte: biologisch-dimorphe Disposition + kulturelle Modulation. Was NICHT robust ist: (a) „Männliche Gewalt ist rein reaktiv” — es gibt auch prädatorische männliche Gewalt (Wrangham 2019); (b) „Testosteron spielt keine Rolle” — pränatale Androgenexposition beeinflusst Raufkampf-Spielverhalten (Berenbaum 1992 CAH-Studien).',
		counterEvidence:
			'Benenson zeigt kulturübergreifend, dass Jungen von Kleinkindalter an mehr Raufkampf-Spiel zeigen, inklusive Kulturen, die das nicht belohnen. Rough-and-tumble play ist Primaten-universal und geschlechtsdifferent organisiert. **REEVES 2022 VALIDIERT DIE MITTELPOSITION**: Die anti-biologische Konvergenz in Pollack/hooks/Böhnisch/Süfke/Urwin überkorrigiert gegen Gurian/Sax\'s Überklage in die andere Richtung. Reeves liefert den empirisch stärksten Mittelweg: akzeptiert biologische Dimorphie, lehnt Biologismus ab, betont kulturelle Modulation. Das ist KEIN Widerspruch zur reaktiven-Gewalt-These bei klinischen Autoren, aber eine wichtige Präzisierung: „überwiegend reaktiv” ≠ „rein kulturell”.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt (Reeves-Mittelposition)',
		verdictExplanation:
			'**NACH REEVES 2022**: Der enge Befund („zirkulierendes Testosteron verursacht nicht direkt Aggression bei erwachsenen Männern”) ist robust. Der breite Befund („männliche Gewalt ist rein kulturell/reaktiv”) ist Überklage. Reeves/Hoovens Mittelposition: Testosteron amplifiziert, triggert nicht; pränatale Androgene + kulturelle Modulation → dimorphe Grundneigung + große soziale Variation. Das ist die ehrlichste zusammenfassung der empirischen Lage. Die klinische Konvergenz (Pollack, hooks, Süfke) hat recht, dass das meiste an männlicher Gewalt sozial erklärbar ist; sie überzieht nur, wenn sie die biologische Basis ganz leugnet.'
	},

	// =================================================================
	{
		id: 'shame-hardening',
		name: 'Scham als Härtungs-Mechanismus',
		oneLineClaim:
			'Jungen werden für jeden Ausdruck von Verletzlichkeit beschämt und dadurch emotional „gehärtet”. Das Abschalten der eigenen Gefühle ist Selbstschutz gegen Scham.',
		sharedBy: [
			{ bookId: 'rb', phrasing: 'Pollack: „Shame-hardening mechanism”. Jordan/Stone Center: Scham = „feeling state that accompanies emotional disconnection”.' },
			{ bookId: 'wtc', phrasing: 'hooks: Der 3-jährige Alexander, „in a ten-second wordless transaction” aus dem Barbie-Kostüm geschämt.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: Scham als zentraler Motor der emotionalen Isolation.' },
			{ bookId: 'mse', phrasing: 'Süfke: Scham als suizidogenes Gefühl, das über Projektion und Verleugnung abgewehrt wird.' },
			{ bookId: 'bdc', phrasing: 'Urwin: „Wir hatten mehr Angst, uncool zu gelten, als zu sterben” (australische NSW-Kampagne).' },
			{ bookId: 'ds', phrasing: 'Way: die direkte longitudinale Beobachtung. Jungen in Interviews mit 16-17 identifizieren selbst, dass emotionaler Ausdruck zu ihren männlichen Freunden sie „gay" oder „girlish" wirken lässt — und beginnen, die Sprache der Intimität („love", „trust") systematisch durch „no homo"-Disclaimer zu ersetzen. Scham wird hier nicht klinisch inferiert, sondern in Echtzeit transkribiert.' }
		],
		primarySourcesBeneath:
			'Gershen Kaufman (1989), "The Psychology of Shame" — klinische Synthese. Scheff & Retzinger (1991), "Emotions and Violence" — theoretisch. June Tangney\'s empirische Schamforschung (1990er-) ist das methodisch strengste Werk. Stone-Center-Tradition (Jordan, Miller) ist relational-feministisch, nicht experimentell.',
		whatTheDataShows:
			'Was robust ist: Schamforschung allgemein ist ein starkes Feld. Scham-Proneness korreliert mit Depression, Angst, PTSD, Sucht. Die Verbindung Scham → negative Outcomes ist meta-analytisch gut gestützt. Was SCHLECHTER gestützt ist: die spezifische Behauptung „Jungen werden mehr beschämt als Mädchen”. Die empirische Evidenz zeigt sogar das Gegenteil: FRAUEN berichten meist HÖHERE Trait-Scham (Else-Quest et al. 2012 Meta-Analyse, Psychological Bulletin). Chaplin & Aldao 2013: Mädchen zeigen mehr internalisierende Emotionen (einschließlich Scham-ähnlicher Zustände).',
		counterEvidence:
			'Die Kern-Behauptung „Jungen werden systematisch mehr beschämt” wird von der Schamforschung nicht gestützt. Was plausibel und differenziert wahr ist: Jungen werden für ANDERE Inhalte beschämt (jede Geschlechts-Nonkonformität, jede Zeichen von „Weichheit”), während Mädchen für andere Inhalte beschämt werden (Körper, Sexualität). Der Schammechanismus ist nicht männer-spezifisch. **Way 2011 liefert direkte longitudinale Evidenz für die engere (nicht die breite) Claim**: Jungen werden nicht generell mehr beschämt, aber sie werden für emotionalen Ausdruck zu anderen Jungen scharf sanktioniert (kulturelle Gleichsetzung mit „gay"/„girlish"), und das Timing dieser Sanktionierung (16-18) überlappt mit dem Zusammenbruch enger Freundschaften. Das ist die stärkste empirische Variante des Befundes.',
		verdict: 'overclaim',
		verdictLabel: 'Überzogen (breite Form) — aber Way-gestützt (enge Form)',
		verdictExplanation:
			'Die allgemeine Scham-Forschung ist robust und wichtig. Aber die spezifische Behauptung „Jungen werden in eine emotional abgestumpfte Männlichkeit hineingeschämt” ist in ihrer breiten Form empirisch nicht gestützt — Frauen berichten tendenziell MEHR Scham. **Way 2011 rettet eine engere Version**: Jungen werden spezifisch für emotionalen Ausdruck zu männlichen Peers beschämt (Homophobie-Mechanismus), und das ist longitudinal direkt beobachtet. Was ehrlich wäre: „Jungen werden für GESCHLECHTS-nonconformes Verhalten — besonders für emotionale Intimität zu anderen Jungen — stark sanktioniert, nicht für Scham generell" (Way, Chu, Santos). Diese engere Formulierung ist empirisch tragfähig.'
	},

	// =================================================================
	{
		id: 'father-hunger',
		name: 'Vater-Hunger: Jungen brauchen Väter',
		oneLineClaim:
			'Abwesende oder emotional unverfügbare Väter produzieren die nächste Generation desselben Musters. Jungen brauchen präsente männliche Rollenbilder, um gesund aufzuwachsen.',
		sharedBy: [
			{ bookId: 'rb', phrasing: 'Pollack: „Father hunger” (Herzog). Glueck 40-Jahr-Harvard-Studie: Vaterbeteiligung in den ersten 10 Jahren prognostiziert HS/College-Erfolg.' },
			{ bookId: 'wb', phrasing: 'Gurian: Jungen brauchen „drei Familien” — Eltern, erweiterte Familie, Mentoren.' },
			{ bookId: 'ba', phrasing: 'Sax: „Fatherhood degraded” als Ursache der „failure to launch”-Epidemie.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: Vater-Sohn-Gefühlskluft als zentrales Muster.' },
			{ bookId: 'ms', phrasing: 'Böhnisch: „Eventvater” — Südtiroler Männerstudie; präsente, aber emotional bedürftige Väter.' },
			{ bookId: 'bdc', phrasing: 'Urwin: drei-Generationen-Trauma (WW2-Vet → stiller Vater → depressiver Sohn).' },
			{ bookId: 'wtc', phrasing: 'hooks: „patriarchal fathers cannot love their sons”. Vaterhunger wird anerkannt, aber politisch gerahmt.' },
			{ bookId: 'obm', phrasing: 'Reeves: „Direct Dads” als zentrale positive Vision. Eggebeen-Analyse der NSLA: 22% der elterlichen Beiträge zur Teen-Entwicklung sind UNIQUE zu einem Elternteil, nicht nur additiv. „Dads teach, moms tend”. Distinktive Vater-Beiträge besonders in der Adoleszenz.' },
			{ bookId: 'nbm', phrasing: 'Galloway: „Most boys come apart when a male role model leaves“ + die Note „If there is no father present, the son is more likely to be incarcerated than graduate from college.“ Memoir-Kern: das Kind, das die Scheinwerfer des Gran Torino aus einer halben Meile erkennt; vier Stunden Golf-Caddying nur für Nähe; Terry (der Freund der Mutter) als Beweis, dass Vater-Ersatz wirkt.' },
		],
		primarySourcesBeneath:
			'Glueck Harvard Study (1940er-1990er) — Längsschnitt-Daten, aber aus einer Zeit ohne moderne Konfundierungskontrolle. McLanahan & Sandefur (1994), "Growing Up with a Single Parent" — große Bevölkerungsstudie. Pruett Yale „Fatherneed”. Lamb (Hrsg.) "The Role of the Father in Child Development" (seit 1976, mehrere Auflagen) — das Standardwerk. Sarkadi et al. (2008), Acta Paediatrica Meta-Analyse: modester positiver Effekt väterlicher Beteiligung. **NEUE PRIMÄRQUELLE (Reeves 2022)**: David Eggebeen Analyse der National Longitudinal Study of Adolescent to Adult Health (~20.000 Teenager) — 42% der elterlichen Beiträge sind additiv, 12% redundant, **22% UNIQUE zu einem Elternteil**. Eggebeen: „fathers appear to especially make unique contributions to the well-being of their children through their human capital while mothers make unique contributions through their availability and closeness”.',
		whatTheDataShows:
			'Was robust ist: Kinder in Zwei-Eltern-Haushalten schneiden im Durchschnitt besser ab. Väterliche Beteiligung korreliert positiv mit kindlichen Outcomes. **REEVES-2022-UPDATE**: Die Eggebeen-Studie widerspricht teilweise der Biblarz & Stacey 2010-These, dass „parent-gender doesn\'t matter”. Eggebeens Befund, dass 22% der elterlichen Beiträge einzigartig zu einem Elternteil sind, mit distinktiven Mustern (Väter: human capital, risk-taking, adolescent mentoring; Mütter: availability, closeness), ist eine echte empirische Herausforderung der reinen „parent quality matters, gender doesn\'t”-Position. Biblarz & Stacey 2010 bleibt valide für die frühe Kindheit, aber in der Adoleszenz scheinen geschlechtsspezifische Beiträge messbar zu sein. Reeves interpretiert das als „Dads teach, moms tend”. Die Literatur ist nicht vollständig einig.',
		counterEvidence:
			'Biblarz & Stacey 2010 bleibt relevant: Kinder in lesbischen Paar-Haushalten schneiden mindestens so gut ab wie in heterosexuellen Zwei-Eltern-Haushalten. Golombok 2015 Meta-Review bestätigt das. Aber Eggebeens Fokus auf Adoleszenz-Outcomes und unique-vs-additive-Beiträge ist eine andere Analyse-Ebene. Kritische Frage: sind die „unique” Beiträge wirklich geschlechtsspezifisch ODER einfach „zweiter-Elternteil-Beiträge” in einem Geschlechter-durchschnittlich geteilten Role-Differentiation-Muster? Diese Frage bleibt offen. Pollack/Gurian/Sax übertreiben die Geschlechtsspezifität der Elternrolle, aber Reeves\' Vorsicht („the evidence is now undismissable”) zeigt, dass eine Null-Differenz-Position auch nicht mehr haltbar ist.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt (upgedatet mit Reeves 2022)',
		verdictExplanation:
			'**ÜBERARBEITET NACH REEVES 2022**: „Kinder profitieren von zwei engagierten Eltern” bleibt robust. Die Frage „brauchen Jungen spezifisch einen Vater” ist NICHT mehr eindeutig als Overclaim zu werten — Reeves präsentiert mit Eggebeen 2013 eine empirische Studie, die auf geschlechtsspezifische Beiträge hinweist, besonders in der Adoleszenz. Biblarz & Stacey 2010 bleibt für die frühe Kindheit gültig, aber die Teen-Outcome-Literatur ist offener. Die ehrliche Formulierung: „Kinder brauchen engagierte Bezugspersonen; ab der Adoleszenz scheinen geschlechts-differenzierte Beiträge messbar zu sein; welche davon biologisch vs. kulturell bedingt sind, bleibt offen.” Das ist nuancierter als meine ursprüngliche Overclaim-Bewertung.'
	},

	// =================================================================
	{
		id: 'schools-fail-boys',
		name: 'Schulen scheitern an Jungen',
		oneLineClaim:
			'Das moderne Schulsystem benachteiligt Jungen — entweder durch biologische Fehlpassung, feminisiertes Curriculum, entwicklungspsychologisches Mistiming oder emotionale Miserziehung.',
		sharedBy: [
			{ bookId: 'wgm', phrasing: 'Sax: sensorische Fehlpassung + langsamere Hirnreifung bei Jungen.' },
			{ bookId: 'ba', phrasing: 'Sax: Curriculum-Beschleunigung, Wettbewerbsabbau, Null-Toleranz gegen Jungen-typisches Spiel.' },
			{ bookId: 'wb', phrasing: 'Gurian: biologisch fehlplatzierte Jungen in feminisierten Klassenzimmern.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: Schulen fordern frühe verbale/ruhige Fähigkeiten; Jungen bekommen Artefakt-Diagnosen.' },
			{ bookId: 'rb', phrasing: 'Pollack: „Hedges & Nowell 1995 Science meta: boys 2:1 at BOTTOM of reading.”' },
			{ bookId: 'pb', phrasing: 'Eliot: Leselücke ist real, aber gehirn-plastisch schließbar mit Intervention.' },
			{ bookId: 'ms', phrasing: 'Böhnisch: „Hidden gender curriculum” — Jungen beanspruchen 2/3 der Aufmerksamkeit und werden dennoch benachteiligt (Enders-Dragässer & Fuchs 1989).' },
			{ bookId: 'jvh', phrasing: 'Dittmann: „Jungen brauchen mehr männliche Lehrer”.' },
			{ bookId: 'obm', phrasing: 'Reeves: „Brain-Timing” als zentrale neurobiologische Erklärung — präfrontaler Kortex reift bei Jungen ~2 Jahre später (Steinberg, Jensen, Sapolsky). Das Bildungssystem ist zufällig auf das schnellere Mädchen-Tempo zugeschnitten. Lösung: „Redshirt the Boys” — alle Jungen default ein Jahr später einschulen. Cascio & Schanzenbach Tennessee-Studie: redshirted boys profitieren doppelt so stark wie redshirted girls.' },
			{ bookId: 'pr', phrasing: 'Prüfer Kap. 11 (L24 `pr-geschlechterunterschied-sozial`): zitiert dieselben OECD-2024-Bildungsdaten und KiGGS-Statistiken, verortet die Ursachen aber bei sozialen Erwartungen und Lehrer-Interaktion, nicht bei endokrinen Disruptoren (wie Sax) oder biologischem Reifungs-Mistiming (wie Reeves). „Biologisch eher gering, gesellschaftlich enorm." Stützt das Phänomen, bleibt bei der Ursachen-Frage beim Mainstream Eliot/DeCasien (2022).' },
			{ bookId: 'nbm', phrasing: 'Galloway übernimmt die Reeves-Erklärung vollständig: PFC ~2 Jahre später reif, ADHD-Gap (15% vs. 8%, inkl. Diagnose-Bias-Caveat), fehlende männliche Lehrer („Missing Misters“), Redshirting-Sympathie. Memoir-Illustration: die eigene Abstufung von Calculus zu Algebra 1 im Jahr nach dem Weggang des Vaters.' },
		],
		primarySourcesBeneath:
			'Hedges & Nowell (1995), "Sex differences in mental test scores, variability, and numbers of high-scoring individuals", Science — große Datenbasis, gut. Janet Hyde (2005), "The gender similarities hypothesis", American Psychologist — Meta-Analyse, die zeigt: die meisten kognitiven Geschlechtsunterschiede sind klein (d<0,35). PISA/NAEP-Daten: Jungen fallen in Lesen zurück, Mädchen dominieren Bildungsabschlüsse seit ~1990. Enders-Dragässer & Fuchs (1989) — deutsche Klassenzimmer-Studie. **NEUE PRIMÄRQUELLEN (Reeves 2022)**: Laurence Steinberg „Age of Opportunity” zum adoleszenten Hirnwachstum; Frances Jensen Penn Medicine MRI-Analyse; National Academies 2019 Report on Adolescent Development; Cascio & Schanzenbach (2007/2016) Tennessee-Redshirting-Studie. Reeves konsolidiert diese Quellen zu einer spezifischen neurobiologischen Erklärungstheorie.',
		whatTheDataShows:
			'Was robust ist: (a) Jungen hinken in Lesen/Schreiben hinterher (PISA, NAEP, international); (b) Jungen werden öfter suspendiert und mit ADHS diagnostiziert; (c) Mädchen haben Jungen in Bildungsabschlüssen seit ~1990 überholt. Das Phänomen ist unbestritten. **REEVES-2022-UPDATE zur Ursache**: Die Brain-Timing-Hypothese ist stärker empirisch gestützt als ich ursprünglich annahm. Steinberg, Jensen und Sapolsky konvergieren darauf, dass der präfrontale Kortex bei Jungen ~2 Jahre später reift — was gerade in der kritischsten Phase der Sekundarschule (mittlere Adoleszenz) eine messbare Wirkung hat. Das ist keine biologistische Ausflucht, sondern eine konkrete neurowissenschaftliche Differenz mit direkter Schul-Relevanz. Redshirting-Studien (Cascio & Schanzenbach, Cook & Kang) liefern indirekte empirische Stützung durch Intervention. Single-Sex-Schooling zeigt weiterhin keinen Vorteil (Pahlke, Hyde, Allison 2014) — ABER Redshirting ist ein anderer Ansatz.',
		counterEvidence:
			'Die Sax-Claim über single-sex-Schooling ist durch die Pahlke-Meta-Analyse (2014) widerlegt. Gurians biologische „brain-based learning”-Thesen sind von Eliot und Fine als Pseudoneurowissenschaft kritisiert worden. Die verschiedenen Erklärungen widersprechen einander. ABER: Reeves\' Brain-Timing-Mechanismus ist konkreter und besser gestützt als die meisten klinischen Erklärungen. Er ist auch kompatibel mit strukturellen Erklärungen (das Bildungssystem ist auf einen bestimmten Reifungstempo ausgerichtet) UND mit biologischen (der Reifungstempo selbst ist gender-dimorph).',
		verdict: 'partial',
		verdictLabel: 'Phänomen robust, eine Erklärung (Brain-Timing) nach Reeves 2022 besser gestützt',
		verdictExplanation:
			'**ÜBERARBEITET NACH REEVES 2022**: Die deskriptive Beobachtung bleibt robust. Nach Reeves\' Synthese ist die Brain-Timing-Erklärung (Steinberg/Jensen/Sapolsky) besser gestützt als andere einzelne Hypothesen im Buchkorpus — sie ist konvergent mit den neurowissenschaftlichen MRI-Daten und wird indirekt durch Redshirting-Interventionsstudien validiert. Das heißt nicht, dass Sax/Gurian richtig liegen (deren spezifische Policy-Vorschläge widerlegt), aber die zugrundeliegende Brain-Timing-Intuition war nicht ganz falsch. Die robustere Position: „Jungen fallen strukturell zurück; ein wichtiger Teil davon ist neurobiologisches Timing, NICHT Fähigkeit; Interventionen, die dem Timing gerecht werden (Redshirting, CTE), sollten empirisch evaluiert werden.”'
	},

	// =================================================================
	{
		id: 'patriarchy-harms-men',
		name: 'Das Patriarchat schadet auch den Männern',
		oneLineClaim:
			'Traditionelle Männlichkeitsnormen sind nicht nur Privileg, sondern auch Ursache männlicher Leiden: Gesundheit, Beziehungen, psychische Stabilität, Lebenserwartung leiden unter dem System, das angeblich Männer begünstigt.',
		sharedBy: [
			{ bookId: 'wtc', phrasing: 'hooks: zentrale These des Buches; „Patriarchy is a political-social system” das auch Männer terrorisiert.' },
			{ bookId: 'bdc', phrasing: 'Urwin: strategische Rekrutierungsformel gegenüber widerwilligen männlichen Lesern.' },
			{ bookId: 'ms', phrasing: 'Böhnisch: Dominanz-Verfügbarkeits-Dialektik — Männer sind nicht nur Täter, sondern auch Ausgesetzte.' },
			{ bookId: 'mse', phrasing: 'Süfke: klinische Operationalisierung — die Identitätslüge als Selbstschädigung.' },
			{ bookId: 'gm', phrasing: 'Connell: „patriarchaler Dividend” hat auch Kosten — z.B. lebensgefährliche Arbeitsplätze, militärische Opferrolle.' },
			{ bookId: 'obm', phrasing: 'Reeves: akzeptiert das empirische Muster (traditionelle Männlichkeitsnormen → schlechte Outcomes), LEHNT aber den „Patriarchat”-Rahmen strategisch ab. Sein Punkt: die Patriarchats-Sprache rahmt Männer als Mit-Täter, was die Probleme individualisiert und politisch kontraproduktiv ist. Stattdessen: struktureller Reformweg.' }
		],
		primarySourcesBeneath:
			'Michael Kaufman (1985), “Beyond Patriarchy” — Sammelband. Wong, Ho, Wang & Miller (2017), “Meta-analyses of the relationship between conformity to masculine norms and mental health-related outcomes”, Journal of Counseling Psychology — die WICHTIGSTE Einzelquelle: 78 Studien, 19.453 Teilnehmer. d ≈ 0,31 für negative psychische Gesundheit. Effektstärken stärkster für Autarkie, Macht-über-Frauen, Playboy-Normen.',
		whatTheDataShows:
			'Wong et al. 2017 ist eine der stärksten Belege der gesamten Bibliothek: starke Zustimmung zu traditionellen Männlichkeitsnormen korreliert robust mit schlechter psychischer Gesundheit, negativem Hilfesuche-Verhalten, Sexismus. Die Korrelation ist meta-analytisch und replikationsstark. Das ist eine REALE empirische Stütze der These. **REEVES 2022 ALS EXTERNER VALIDIERER**: Reeves kommt zu derselben Diagnose über völlig andere Quellen — nicht über masculinity-norm-Skalen (Wong), sondern über Arbeitsmarktdaten (Autor/Wasserman), Gesundheits-Epidemiologie (Case & Deaton „deaths of despair”), Bildungsgap (NCES/PISA). Die unabhängige Konvergenz zweier empirischer Methoden ist eine wichtige Validierung.',
		counterEvidence:
			'Einschränkungen: (a) Korrelation ist nicht Kausation — vielleicht führt schlechte psychische Gesundheit zu stärkerer Zustimmung zu harten Männlichkeitsnormen, nicht umgekehrt; (b) Männer erhalten auch den „patriarchalen Dividend” (Connell) — der Nettoeffekt hängt davon ab, welche Männer und welche Dimensionen man betrachtet; (c) die Behauptung, das System nennt sich „Patriarchat” und schadet Männern auf dieselbe Weise wie Frauen, ist eine theoretische Rahmung, die MRAs als unlogisch zurückweisen. **REEVES 2022 KRITISIERT DIE RAHMUNG**: Auch wenn das empirische Muster robust ist, ist die „Patriarchat”-Sprache strategisch schädlich. Sie rahmt Männer als Mit-Täter am System, das sie verletzt, und lädt sie nicht zur Reform ein, sondern zur Selbstverteidigung. Reeves: „we need a positive vision of masculinity that is compatible with gender equality” — nicht „Patriarchat ist schlecht und ihr müsst euch davon befreien”.',
		verdict: 'robust',
		verdictLabel: 'Empirisch robust (aber Rahmung umstritten)',
		verdictExplanation:
			'**NACH REEVES 2022**: Die deskriptive Version der These bleibt eine der BESTEN gestützten Befunde der Bibliothek — sowohl durch Wong 2017 Meta-Analyse als auch durch Reeves\' unabhängige empirische Pfade (Arbeitsmarkt, Bildung, Mortalität). Die Rahmungs-Frage („nennen wir es Patriarchat?”) ist strategisch umstritten. hooks und Böhnisch verwenden den Begriff; Reeves lehnt ihn ab. Beide Positionen sind intellektuell vertretbar. Für die Empirie: die Korrelation zwischen rigider Männlichkeitsnorm-Adhärenz und schlechten Outcomes ist so robust wie alles in der Bibliothek.'
	},

	// =================================================================
	{
		id: 'help-seeking-avoidance',
		name: 'Männer vermeiden Hilfesuche',
		oneLineClaim:
			'Männer gehen seltener zum Arzt, zum Therapeuten, in Beratungsstellen als Frauen — und diese Vermeidung ist kulturell durchgesetzt, nicht biologisch.',
		sharedBy: [
			{ bookId: 'bdc', phrasing: 'Urwin: halbe GP-Besuchsfrequenz; Samaritans-Bericht 2012 als Hauptquelle.' },
			{ bookId: 'mse', phrasing: 'Süfke: männertherapeutisches Dilemma — Männer kommen erst, wenn Externalisierung nicht mehr funktioniert.' },
			{ bookId: 'rb', phrasing: 'Pollack: Männer erkennen Depression nicht als eigene Krankheit.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: Jungen lernen früh, Hilflosigkeit zu verbergen.' },
			{ bookId: 'wtc', phrasing: 'hooks: Hilfesuche als „entmannend” wahrgenommen — daher das politische Gewicht.' },
			{ bookId: 'nbm', phrasing: 'Galloway: „Kindness and asking for help are two unheralded weapons for men. Unfortunately, many boys and men never figure this out.“ Nie in Therapie trotz Depression/Wut; Männer reden über Ehe und Kinder, nie über Geld, Sex oder Psyche („I’ve never once heard a man tell me… that Zoloft makes him feel numb“). Gegenprogramm: „go first“.' },
		],
		primarySourcesBeneath:
			'Will Courtenay (2000), "Constructions of masculinity and their influence on men\'s well-being: A theory of gender and health", Social Science & Medicine — DAS klassische Review. Addis & Mahalik (2003), "Men, masculinity, and the contexts of help seeking", American Psychologist — konzeptueller Rahmen, stark zitiert. Mahalik\'s CMNI (2003) zur Operationalisierung. Galdas, Cheater, Marshall (2005) zu Genderrolle und Hilfesuche.',
		whatTheDataShows:
			'Eines der am besten gestützten Befunde der Männerforschung. International konsistent: Männer haben ~50% der GP-Konsultationsrate von Frauen (UK, US, Deutschland, Skandinavien). Auch nach Kontrolle für reproduktive Gesundheit bleibt ein substantieller Gender-Gap. CMNI-Score (traditionelle Männlichkeitsnormen) korreliert zuverlässig mit geringerem Hilfesuche-Verhalten. Galdas et al. Review bestätigt Muster quer durch Gesundheitssysteme.',
		counterEvidence:
			'Einschränkungen: (a) ein Teil der Differenz erklärt sich durch reproduktive Frauengesundheit (Schwangerschaft, Verhütung, Zyklus); (b) ein anderer Teil erklärt sich durch Medikalisierung weiblicher Körper; (c) die Zurechnung der Mortalitätsdifferenz zwischen den Geschlechtern AUSSCHLIESSLICH an Hilfesuche-Verhalten ist Überklage — auch biologische Alterungsraten unterscheiden sich.',
		verdict: 'robust',
		verdictLabel: 'Empirisch robust',
		verdictExplanation:
			'Einer der besser gestützten Befunde der Konvergenz. Das Muster ist international, quer durch Gesundheitssysteme, quer durch Datenquellen repliziert. Die kausale Verbindung zu traditionellen Männlichkeitsnormen ist meta-analytisch gut gestützt.'
	},

	// =================================================================
	{
		id: 'male-alexithymia',
		name: 'Normative männliche Alexithymie',
		oneLineClaim:
			'Männer haben systematisch größere Schwierigkeiten, eigene Gefühle wahrzunehmen, zu benennen und zu kommunizieren — eine „normative” Alexithymie, nicht eine individuelle Pathologie.',
		sharedBy: [
			{ bookId: 'mse', phrasing: 'Süfke: zentrales diagnostisches Rahmenkonzept der gesamten klinischen Analyse.' },
			{ bookId: 'rb', phrasing: 'Pollack: „Emotional illiteracy” als Folge der Maskenbildung.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: emotionaler Analphabetismus als Kern der späteren Beziehungsunfähigkeit.' },
			{ bookId: 'wtc', phrasing: 'hooks: „emotional numbness” als Ergebnis patriarchaler Sozialisation.' },
			{ bookId: 'bdc', phrasing: 'Urwin: journalistisch übersetzt als „Wir haben verlernt zu reden”.' },
			{ bookId: 'nbm', phrasing: 'Galloway: „from twenty-nine to forty-five, [I] didn’t cry once or feel much of anything“ — 16 Jahre emotionale Taubheit, bilanziert als „sleepwalking through life, barely conscious“; die Wiedergewinnung („I. Cry. All. The. Time.“) als Alters-Befreiung. Levants Konstrukt als gelebte Biografie.' },
		],
		primarySourcesBeneath:
			'Sifneos (1973), Original-Konzept der Alexithymie. Toronto Alexithymia Scale (TAS-20, Bagby, Parker & Taylor 1994) — meist-validiertes Instrument. Levant (1992) „Normative Male Alexithymia” als Erweiterung. Levant, Hall, Williams & Hasan (2009): Meta-Analyse zu Geschlechtsdifferenzen auf TAS-20.',
		whatTheDataShows:
			'Was robust ist: Meta-analytisch zeigen Männer konsistent leicht höhere Alexithymie-Werte auf der TAS-20. Der Effekt ist klein (d ≈ 0,15 bis 0,30), aber repliziert. Klinische Alexithymie-Rate: 10-25% bei Männern, 6-18% bei Frauen. Alexithymie korreliert mit vielen psychopathologischen Dimensionen (Depression, Angst, Sucht, somatoforme Störungen).',
		counterEvidence:
			'Einschränkungen: (a) der Effekt ist kleiner als die klinische Literatur suggeriert — Süfke und Levant überzeichnen; (b) Self-Report-Bias: Männer sind vielleicht einfach unwilliger, Gefühle zuzugeben — das würde TAS-20-Scores künstlich erhöhen, ohne eine echte kognitive Unfähigkeit darzustellen; (c) Alexithymie ist nicht männer-spezifisch, sondern psychopathologisch allgemein.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt',
		verdictExplanation:
			'Das Grundmuster ist real und repliziert — Männer scoren leicht höher auf TAS-20. Aber der Effekt ist kleiner, als die klinische Rhetorik suggeriert, und könnte teilweise Report-Bias sein. „Normative männliche Alexithymie” als Konzept ist nützlich, als meta-analytischer Befund aber moderat statt dramatisch.'
	},

	// =================================================================
	{
		id: 'emotional-literacy-intervention',
		name: 'Emotionale Literacy als Intervention',
		oneLineClaim:
			'Wenn wir Jungen beibringen, Gefühle zu benennen und zu kommunizieren, sinken Depression, Suizid, Gewalt.',
		sharedBy: [
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: „Seven things boys need” — emotionale Permission, Literacy, Verbindung.' },
			{ bookId: 'rb', phrasing: 'Pollack: „Potency of connection” als bottom-line-Rezept.' },
			{ bookId: 'mse', phrasing: 'Süfke: 4-Etappen-Weg (Wahrnehmen → Akzeptieren → Mitteilen → Umsetzen) als therapeutisches Programm.' },
			{ bookId: 'bdc', phrasing: 'Urwin: „Wir müssen reden lernen” als strategische Grundformel.' },
			{ bookId: 'jvh', phrasing: 'Dittmann: gender-conscious parenting mit Fokus auf emotionale Öffnung.' },
			{ bookId: 'wtc', phrasing: 'hooks: Liebesethik als Bildungsprogramm.' }
		],
		primarySourcesBeneath:
			'Salovey & Mayer (1990), "Emotional intelligence", Imagination, Cognition and Personality — Original-Konzept. Gottman & Gottman-Forschung zu Ehepaaren. John Mayer & Peter Salovey MSCEIT als validiertes Testinstrument. Durlak, Weissberg, Dymnicki, Taylor & Schellinger (2011), "The impact of enhancing students\' social and emotional learning: A meta-analysis of school-based universal interventions", Child Development — 213 SEL-Programme, N ≈ 270.000 Schüler.',
		whatTheDataShows:
			'Durlak 2011 ist die wichtigste Quelle: SEL-Programme zeigen moderate positive Effekte auf sozial-emotionale Fähigkeiten (d = 0,57), prosoziales Verhalten (d = 0,24) und akademische Leistung (d = 0,27). Also: breite SEL-Interventionen wirken. Follow-up-Studien zeigen aber, dass Effekte oft mit der Zeit verblassen (Taylor, Oberle, Durlak, Weissberg 2017).',
		counterEvidence:
			'Was NICHT direkt getestet ist: die spezifischen Rezepte der Bücher (Pollacks „potency of connection”, Süfkes 4-Etappen, Kindlons „seven things”). Keines davon ist durch RCTs validiert. Die Extrapolation von „SEL wirkt moderate” zu „wenn wir Jungen emotionale Literacy beibringen, sinkt die Suizidrate” ist eine ÜBERDEHNUNG der Evidenz. Auch: Durlak-Effekte sind gemischt-geschlechtlich, keine boy-spezifische Evaluation. **WICHTIGE REEVES-2022-KRITIK**: Reeves argumentiert explizit gegen den „individualistischen” Reflex der klinischen Konvergenz. Sein Punkt: Progressive rahmen Männer-Probleme als individuelle Charakterfehler („Männer sollen lernen zu reden, ihre Gefühle zu öffnen”), widersprüchlich zum sonstigen progressiven Strukturalismus. Die echte Lösung liegt in STRUKTURELLER Reform (Bildungssystem, Arbeitsmarkt, Familienrecht), nicht in Therapie-für-alle. Wenn du Männer retten willst, reform die Institutionen — nicht die Männer.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt',
		verdictExplanation:
			'SEL-Programme wirken moderat. Das ist empirisch stützbar. Aber die spezifischen Rezepte der Bücher sind nie in RCTs geprüft worden. **NACH REEVES 2022**: Die tieferliegende Kritik ist, dass emotionale-Literacy-Interventionen das Problem individualisieren. Die bessere Frage: „Welche strukturelle Bedingung produziert Jungen, die nicht reden können?” Reeves\' Antwort: Bildungssystem mit falschem Reifungstempo, Arbeitsmarkt ohne sichere Jobs für Männer ohne Hochschulabschluss, Familiengesetz, das Väter juristisch marginalisiert. Wenn diese Strukturen repariert sind, wird emotionale Literacy vielleicht weniger dringend gebraucht. Durlak 2011 rechtfertigt SEL-Programme als Ergänzung, nicht als Hauptlösung.'
	},

	// =================================================================
	{
		id: 'three-generation-trauma',
		name: 'Drei-Generationen-Trauma-Transmission',
		oneLineClaim:
			'Emotional unverfügbare Väter produzieren emotional unverfügbare Söhne. Kriegs-Veteranen-Schweigen wird an Söhne und Enkel weitergegeben. Die Kette ist unterbrechbar, aber real.',
		sharedBy: [
			{ bookId: 'bdc', phrasing: 'Urwin: WW2-Vet-Großvater mit PTSD und Alkoholismus → schweigender Vater → depressiver, selbstverletzender Sohn. Autobiographisches Paradigma.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: Väter modellieren emotionale Zurückhaltung; Söhne internalisieren.' },
			{ bookId: 'rb', phrasing: 'Pollack: intergenerationales Muster der Father Hunger.' },
			{ bookId: 'wtc', phrasing: 'hooks: patriarchale Erziehung als trans-generationale Reproduktion.' },
			{ bookId: 'ms', phrasing: 'Böhnisch: Männer reproduzieren die Bewältigungsmuster ihrer eigenen Väter.' },
			{ bookId: 'nbm', phrasing: 'Galloway: Der Großvater schlug den Vater; der Vater verließ die Familie, war aber „a far better dad to me than his dad had been to him“; Galloways Auftrag an die Söhne: „Be me + better.“ Dieselbe Drei-Generationen-Struktur wie Urwins Richard-Erzählung — mit optimistischem Vorzeichen (Aufwärtskorrektur statt Vererbung).' },
		],
		primarySourcesBeneath:
			'Yael Danieli (Hrsg., 1998), "International Handbook of Multigenerational Legacies of Trauma" — Sammelband zur trans-generationalen Trauma-Forschung. Rachel Yehuda\'s Forschung zu epigenetischen Effekten bei Holocaust-Überlebenden und ihren Nachkommen (kontrovers). Hogar Bowlby\'s Bindungsforschung als theoretische Grundlage.',
		whatTheDataShows:
			'Was empirisch gestützt ist: (a) Kinder von trauma-belasteten Eltern zeigen erhöhtes psychopathologisches Risiko (Danieli-Sammelband zahlreiche Studien); (b) Elterliche Bindungsmuster werden über Generationen transmittiert (Fonagy, Sroufe). Was kontrovers ist: Yehuda\'s epigenetische Befunde (niedrigerer Cortisol-Spiegel bei Kindern von Holocaust-Überlebenden) sind mehrfach nicht-repliziert worden (Bowers & Yehuda 2016 diskutieren dies selbstkritisch). Der spezifische Mechanismus der Transmission bleibt unklar.',
		counterEvidence:
			'Die Urwin-Autobiographie ist ein EINZELFALL. Selektionsbias: Menschen, die solche Geschichten schreiben, haben per definitionem ein „es liegt in der Familie”-Narrativ erlebt. Das heißt nicht, dass es statistisch typisch ist. Robust sind die Bindungsforschungs-Befunde; weniger robust die „WW2 tötet Enkel”-Erzählung.',
		verdict: 'clinical-metaphor',
		verdictLabel: 'Plausibel, aber nicht quantifiziert',
		verdictExplanation:
			'Die Bindungsforschung stützt die generelle These „Eltern-Kind-Muster replizieren sich”. Der spezifische Trauma-Transmissions-Mechanismus ist aber epigenetisch kontrovers und autobiographisch anekdotisch. Als klinisches Ordnungsmuster nützlich, als kausale Generalisierung nicht getestet.'
	},

	// =================================================================
	{
		id: 'boy-friendship-crisis',
		name: 'Jungen-Freundschafts-Krise: von 13-jähriger Intimität zum 18-jährigen Verlust',
		oneLineClaim:
			'Jungen zwischen 13 und 15 beschreiben ihre engsten männlichen Freundschaften in einer Sprache voller emotionaler Tiefe. Dieselben Jungen verlieren diese Freundschaften zwischen 16 und 18. Der Mechanismus: die kulturelle Gleichsetzung emotionaler Intimität zwischen Jungen mit „gay”, „girlish”, oder „immature”.',
		sharedBy: [
			{ bookId: 'ds', phrasing: 'Way: die DIREKTE longitudinale Primärquelle. ~135 Jungen über Jahre interviewt. Dieselben Jungen gehen von „the person I love most in the world” (14) zu „I don\'t care anymore” (17). Die Transformation ist Transkript für Transkript nachvollziehbar. „No homo” ersetzt „love” in der Sprache der Jungen.' },
			{ bookId: 'jvh', phrasing: 'Dittmann zitiert Way direkt. 15% der Männer haben null enge Freunde (2021, gegenüber 3% in 1990). Die Freundschaftskrise als downstream-Konsequenz der Sozialisation.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: „By adolescence, emotional isolation has become virtually a rite of passage for boys.” Die „Fortress of Solitude” als klinisches Bild.' },
			{ bookId: 'rb', phrasing: 'Pollack: Jungen haben tiefe Freundschaften („chumships”, Sullivan) ausgedrückt als „action love” — aber die Maske verhindert verbale emotionale Austauschmöglichkeiten.' },
			{ bookId: 'pr', phrasing: 'Prüfer Kap. 8 (L17 `pr-freundschaft-qualitaet`): Langlebigkeit und psychische Gesundheit hängen stärker von Freundschaftsqualität ab als von Quantität. Holt-Lunstad et al. (2010) PLOS Medicine Meta-Analyse (148 Studien): gute Freunde senken Mortalität um ~50%. Prüfer stützt den sozialepidemiologischen Rahmen (Freundschaft ist gesundheitsrelevant), nicht Ways spezifische Altersdynamik 13→18. Introvertierte Kinder ohne großen Freundeskreis sind nicht defizitär.' },
			{ bookId: 'nbm', phrasing: 'Galloway (Erwachsenen-Fortsetzung): Friendship Recession (Cox 2021: keine engen Freunde 3%→12-15%; 15% der Männer ganz ohne), die eigene „Scott Island“-Dekade der Selbstisolation, Männerfreundschaft als „a long conversation separated by ellipses“; Gegenprogramm Friendship-Cold-Calling und Show-up-Ethik.' },
		],
		primarySourcesBeneath:
			'Way, N. (2011), “Deep Secrets: Boys\' Friendships and the Crisis of Connection” (Harvard University Press) — die stärkste Primärquelle. 20+ Jahre longitudinale Interviewstudien mit ~135 NYC-public-school-Jungen (Black, Latino, Chinese American, White; ~70% aus armen/Arbeiterklasse-Familien). Listening-Guide-Methode (Brown/Gilligan-Tradition). UNABHÄNGIGE REPLIKATION: Chu, J.Y. (2014), “When Boys Become Boys” — bestätigt das Muster bei weißen Privatschul-Jungen (andere Klasse, anderes Setting, gleicher Effekt). Santos, C.E. (2018) — quantitative Validation an 426 Jungen. Sullivan, H.S. (1953), “The Interpersonal Theory of Psychiatry” — theoretischer Vorgänger (chumships-Konzept). Putnam, R.D. (2000), “Bowling Alone” — gesellschaftliche Makroebene des Verbindungsverlusts. Konrath, S. (2011) — Meta-Analyse zum Empathie-Rückgang bei US-College-Studenten.',
		whatTheDataShows:
			'Was empirisch stark gestützt ist: (a) Way\'s longitudinale Daten zeigen den Verlust direkt — dieselben Jungen über Jahre verfolgt, nicht verschiedene Jungen im Querschnitt; (b) Chu\'s unabhängige Replikation bei einer demographisch völlig verschiedenen Stichprobe (weiße Privatschul-Jungen) findet dasselbe Muster; (c) Santos\' quantitative Validation bestätigt den Effekt mit N=426; (d) Die Makrodaten (15% null Freunde, Putnam, Konrath) sind konsistent. Die Timing-Korrelation mit der Suizidrate (steigt scharf im gleichen Altersfenster 16-18) ist epidemiologisch auffällig, aber keine Kausalität ohne RCT. Was Way\'s Daten BESSER machen als andere: sie dokumentiert nicht nur den Endpunkt (erwachsene Männer haben wenige Freunde), sondern den PROZESS in Echtzeit (dieselben Jungen verlieren die Freundschaften live über die Interviewjahre).',
		counterEvidence:
			'Way\'s Stichprobe ist fast ausschließlich NYC, überwiegend arm/Arbeiterklasse, ~70% Black/Latino. Die Generalisierbarkeit auf andere Kontexte ist eine offene Frage — CHU\'s Replikation bei weißen Privatschul-Jungen schwächt dieses Argument allerdings erheblich. Der Homophobie-Mechanismus (kulturelle Gleichsetzung von Intimität mit „gay”) wird von den Jungen selbst identifiziert, aber Way liefert keine kontrollierte Intervention, die zeigt, dass eine Reduktion der Homophobie den Freundschaftsverlust tatsächlich VERHINDERT. Das wäre der nächste empirische Schritt. Die Korrelation mit Suizidraten ist epidemiologisch plausibel aber nicht kausal getestet. Alternativer Mechanismus: die Freundschaftsverluste könnten auch durch erhöhte Autonomie-Bedürfnisse in der späten Adoleszenz erklärt werden, nicht nur durch Homophobie.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt — observational core ist stark',
		verdictExplanation:
			'Eine der empirisch stärksten Konvergenzen der gesamten Bibliothek. Way\'s longitudinale Daten sind die direkte observational evidence, die die klinische Tradition (Pollack, Kindlon/Thompson) seit Jahrzehnten nur inferiert hat. Die unabhängige Replikation (Chu) und die quantitative Validation (Santos) geben dem Kern-Befund eine Robustheit, die wenige andere Konvergenzen in der Bibliothek erreichen. Was bleibt „teilweise”: der spezifische kausale Mechanismus (Homophobie → Verlust) ist plausibel und von den Jungen selbst benannt, aber nicht experimentell isoliert. Die gesellschaftliche Lösung („Schützen, nicht lehren”) ist präskriptiv und untestbar. Die Timing-Korrelation mit Suizidraten ist auffällig, aber kein Kausalnachweis. Robusteste Formulierung: „Jungen verlieren enge Freundschaften in der mittleren Adoleszenz — longitudinal dokumentiert, unabhängig repliziert, quantitativ validiert. Der Homophobie-Mechanismus ist der plausibelste Kandidat, aber nicht experimentell isoliert.”'
	},

	// =================================================================
	// BIOLOGY CLUSTER CONVERGENCES
	// =================================================================
	{
		id: 'bio-aggression-innate',
		name: 'Geschlechterdifferenz in Aggression hat biologisch-evolutionäre Grundlage',
		oneLineClaim:
			'Männliche physische Aggression ist nicht primär sozialisiert, sondern hat eine bedeutende biologisch-evolutionäre Grundlage — Raufkampf-Spiel ist Primaten-universal, kulturübergreifend, und beginnt im Säuglingsalter.',
		sharedBy: [
			{ bookId: 'wgm', phrasing: 'Sax: „Sex differences in aggression are partly innate and serve adaptive functions.” Jungen zeigen ~20× mehr physische Aggression. Raufkampf-Spiel hat eine Entwicklungsfunktion — Unterdrückung könnte echte Gewalt steigern.' },
			{ bookId: 'mf', phrasing: 'Geary: „Male-male competition drives the evolution of armaments, larger body size, and behavioral/cognitive traits such as spatial abilities and coalition formation.” Die Aggressionsgeschlechterdifferenz ist das direkte Produkt sexueller Selektion.' },
			{ bookId: 'ww', phrasing: 'Benenson: „Males evolved specialized behaviors for intergroup warfare.” Raufkampf-Spiel, Faszination mit Feinden und Waffen, und kooperative Gruppenbildung sind Adaptationen für Koalitionskampf. Ab 6-9 Monaten bevorzugen Jungen das Beobachten von Schlagen gegenüber Kuscheln.' }
		],
		primarySourcesBeneath:
			'Archer, J. (2004), „Sex differences in aggression in real-world settings: A meta-analytic review” — Psychological Bulletin, 130(5), 651-680. Effektstärke d ≈ 0,55 für physische Aggression (mäßig bis groß). Berenbaum, S.A. & Hines, M. (1992) — CAH-Mädchen (congenital adrenal hyperplasia, pränatale Androgenexposition) zeigen erhöhtes männlich-typisches Spielverhalten. Pellegrini, A.D. & Smith, P.K. (1998) — „Physical Activity Play: The Nature and Function of a Neglected Aspect of Play” (Child Development). Wrangham, R.W. (1999) — „Evolution of Coalitional Killing” (Yearbook of Physical Anthropology). Tremblay, R.E. et al. (2004) — physische Aggression beginnt im Säuglingsalter (12-17 Monate) und nimmt dann AB, nicht zu. Jungen zeigen ~5× mehr bei 17 Monaten (auch zitiert von Reeves 2022).',
		whatTheDataShows:
			'Was robust ist: (a) Archer 2004 Meta-Analyse: Geschlechterdifferenz in physischer Aggression ist mäßig bis groß (d ≈ 0,55), kulturübergreifend konsistent; (b) Tremblay: physische Aggression hat ihren PEAK im Säuglingsalter (17 Monate), nicht in der Adoleszenz — was GEGEN reines Sozialisationslernen spricht; (c) CAH-Studien (Berenbaum/Hines): pränatale Androgenexposition beeinflusst Spielverhalten kausal; (d) Primatologische Vergleiche: Raufkampf-Spiel ist geschlechtsdifferent bei allen untersuchten Primatenarten. (e) Reeves 2022 bestätigt die Mittelposition: „Biology is real, socialization is also real” — die Effekte sind am besten als biologische Disposition + kulturelle Modulation verstanden.',
		counterEvidence:
			'Eliot (Pink Brain Blue Brain) betont, dass Effektstärken in der frühen Kindheit kleiner sind als die populäre Erzählung suggeriert und durch differentielle Sozialisation verstärkt werden. Die klinische Konvergenz (Kindlon/Thompson, Pollack, hooks) argumentiert, dass REAKTIVE Gewalt (Scham → Aggression) den größeren Teil der männlichen Gewalt erklärt als prädisponierte Aggression. Connell lehnt biologische Kausalerklärungen für Gewalt explizit ab. Hyde 2005 (Gender Similarities Hypothesis): die meisten psychologischen Geschlechterdifferenzen sind klein (d < 0,35) — Aggression ist eine der AUSNAHMEN, nicht die Regel.',
		verdict: 'robust',
		verdictLabel: 'Empirisch robust',
		verdictExplanation:
			'Die Geschlechterdifferenz in physischer Aggression ist eine der am besten replizierten Befunde der Geschlechterpsychologie. Meta-analytisch gestützt (Archer 2004), kausal durch CAH-Studien validiert, kulturübergreifend konsistent, primatologisch parallelisiert, und beginnt im Säuglingsalter (Tremblay). Das macht sie schwer rein-sozialisatorisch erklärbar. WICHTIG: „biologische Grundlage” ≠ „unveränderbar”. Die klinische Seite der Bibliothek hat recht, dass der AUSDRUCK von Aggression kulturell stark moduliert wird. Die Biologie-Konvergenz hat recht, dass die DISPOSITION nicht rein kulturell ist. Beide Seiten übertreiben, wenn sie die andere ganz ignorieren.'
	},

	// =================================================================
	{
		id: 'bio-risk-taking',
		name: 'Risikobereitschaft hat biologische Grundlage',
		oneLineClaim:
			'Männliche Risikobereitschaft hat biologische Wurzeln: Jungen überschätzen ihre Fähigkeiten systematisch, entwickeln sich langsamer, und spielen riskanter als Vorbereitung auf erwachsene Kompetition. Weibchen zeigen von Geburt an größere Furcht und Risikoaversion.',
		sharedBy: [
			{ bookId: 'wgm', phrasing: 'Sax: „Boys are biologically predisposed to greater physical risk-taking. They systematically overestimate their abilities and underestimate risk, as shown by cross-species primate evidence.”' },
			{ bookId: 'mf', phrasing: 'Geary: „The more competitive sex develops more slowly and plays in ways that prepare for adult competition” — Risikobereitschaft ist Teil der Life-History-Strategie des kompetitiveren Geschlechts.' },
			{ bookId: 'ww', phrasing: 'Benenson: „Females show greater fear, risk-aversion, and health vigilance from birth” — Meta-Analyse von 150 Studien. Die Differenz ist schon im Säuglingsalter messbar.' },
			{ bookId: 'nbm', phrasing: 'Galloway: T-getriebene Risikofreude als Kern des Jungenseins (Bike-Rampen über liegende Körper, Skateboard auf dem Wilshire Boulevard, Klassenzimmer wie ER-Wartesäle); normativ umkultiviert zu „ready, fire, aim“ und Rejection-Training. Selbstironischer Beleg: die Boxkampf-K.o.-Anekdote — „Men are just wired to misinterpret signals that inflate our confidence.“' },
		],
		primarySourcesBeneath:
			'Byrnes, J.P., Miller, D.C., & Schafer, W.D. (1999), „Gender differences in risk taking: A meta-analysis” — Psychological Bulletin. Effektstärke variiert je nach Domain: körperlich d ≈ 0,40, intellektuell kleiner. Campbell, A. (1999), „Staying alive: Evolution, culture, and women\'s intrasexual aggression” — argumentiert, dass weibliche Risikoaversion aus der höheren elterlichen Investment-Rolle stammt. Morrongiello & Dawber (1999) — Eltern erlauben Söhnen mehr Risikoverhalten. Wilson & Daly (1985) — „Competitiveness, Risk Taking, and Violence: The Young Male Syndrome” (Ethology and Sociobiology).',
		whatTheDataShows:
			'Was robust ist: (a) Byrnes 1999 Meta-Analyse bestätigt mäßige Geschlechterdifferenz in physischem Risikoverhalten; (b) Wilson & Daly „Young Male Syndrome” — Männer 15-35 haben dramatisch höhere Unfalls- und Gewaltmortalität, kulturübergreifend; (c) Versicherungsdaten weltweit: junge Männer = höchste Unfallraten; (d) Die Differenz zeigt sich früh (Säuglingsalter) und primatologisch. Was WENIGER klar ist: wie viel davon biologisch vs. sozialisiert ist. Morrongiello & Dawber 1999 zeigt, dass Eltern Söhnen aktiv MEHR Risiko erlauben. Eliot (Pink Brain Blue Brain) argumentiert, dass „risk-taking is strongly shaped by parents\' differential encouragement and limits.”',
		counterEvidence:
			'Die Sozialisationsforschung zeigt, dass Eltern Risikoverhalten bei Söhnen systematisch mehr tolerieren und bei Töchtern einschränken. Eliot argumentiert, dass kleine biologische Anfangsunterschiede durch differentielle Sozialisation vergrößert werden. Die klinische Konvergenz (Reeves 2022 zitiert „deaths of despair” — 74% männlich) behandelt übermäßiges Risikoverhalten als SYMPTOM von Disconnection, nicht als biologische Tugend. Die Wahrheit liegt wahrscheinlich in der Interaktion: biologische Disposition + kulturelle Verstärkung.',
		verdict: 'robust',
		verdictLabel: 'Empirisch robust',
		verdictExplanation:
			'Meta-analytisch gut gestützt, kulturübergreifend konsistent, beginnt früh. Die Biologie-Konvergenz ist hier stärker als bei den meisten anderen Themen, weil die epidemiologischen Daten (Young Male Syndrome, Versicherungsdaten) so eindeutig sind. ABER: „biologische Grundlage” bedeutet nicht „unvermeidbar” — kulturelle Modulation ist erheblich (Morrongiello/Dawber). Die klinische Seite hat recht, dass exzessives Risikoverhalten oft ein Symptom (nicht eine Ursache) ist.'
	},

	// =================================================================
	{
		id: 'bio-group-dynamics',
		name: 'Gruppen-Dynamik ist evolutionär geschlechtsdifferent',
		oneLineClaim:
			'Männliche und weibliche Gruppendynamik unterscheidet sich fundamental und hat evolutionäre Wurzeln: Männer bilden größere hierarchische Koalitionen für Kompetition, Frauen bevorzugen dyadische Intimität und erzwingen Gleichheit.',
		sharedBy: [
			{ bookId: 'wgm', phrasing: 'Sax: „Male friendships are shoulder-to-shoulder (shared activity), female friendships face-to-face (shared feelings).” Die Differenz ist nicht Defizit — Jungen und Mädchen binden sich einfach auf verschiedene Weisen.' },
			{ bookId: 'mf', phrasing: 'Geary: „Sex segregation” als universelles Muster. Männliche Koalitions-Kompetition und Status-Hierarchien als evolutionäre Strategie für Ressourcenakkumulation und Mating-Erfolg.' },
			{ bookId: 'ww', phrasing: 'Benenson: „Males form larger, more hierarchical groups with flexible dominance hierarchies.” Weibchen bevorzugen dyadische Freundschaften, erzwingen Gleichheit, und verwenden indirekte Aggression bei Normverletzungen. Männchen versöhnen sich nach Konflikten schneller.' }
		],
		primarySourcesBeneath:
			'Maccoby, E.E. (1998), „The Two Sexes: Growing Up Apart, Coming Together” — das Standardwerk zur Geschlechts-Segregation. Rose & Rudolph (2006), „A review of sex differences in peer relationship processes” — Developmental Review, 26(1). Benenson, J.F. et al. (2009) — „Males are more tolerant of same-sex peers than females” (Current Biology). Geary, D.C. (2010), „Male, Female” — Kap. 12 über male-male competition und coalition formation. Baumeister & Sommer (1997), „What do men want? Gender differences and two spheres of belongingness” — männliche Bindung an die GRUPPE vs. weibliche Bindung an INDIVIDUEN.',
		whatTheDataShows:
			'Was robust ist: (a) Rose & Rudolph 2006 Meta-Review: Jungen spielen in größeren Gruppen, Mädchen in Dyaden/Triaden — kulturübergreifend konsistent; (b) Maccoby 1998: Geschlechts-Segregation beginnt mit ~3 Jahren und ist in jeder untersuchten Kultur dokumentiert; (c) Benenson: Jungen versöhnen sich nach Konflikten schneller (konsistent mit Koalitions-Wartungs-Hypothese); (d) Baumeister & Sommer: Männer investieren mehr in Gruppen-Zugehörigkeit, Frauen in dyadische Beziehungen. Was KONTROVERS bleibt: ob die shoulder-to-shoulder/face-to-face-Dichotomie eine BIOLOGISCHE Notwendigkeit oder ein kulturelles Muster ist, das biologische Dispositionen überlagert.',
		counterEvidence:
			'Way\'s longitudinale Daten (Deep Secrets) zeigen, dass Jungen 13-15 sehr wohl zu „face-to-face”-Intimität fähig sind — sie verlieren sie erst durch kulturelle Sanktionierung. Das widerspricht Sax\'s Framing, shoulder-to-shoulder sei die NATÜRLICHE männliche Bindungsform. Möglicherweise ist shoulder-to-shoulder das ERGEBNIS der Freundschaftskrise (Coping-Strategie), nicht der biologische Ausgangspunkt. Eliot betont, dass Geschlechts-Segregation durch Eltern und Institutionen aktiv verstärkt wird. Die Wahrheit ist wahrscheinlich: biologische Disposition zur Gruppen-Kompetition + kulturelle Verstärkung + Way-dokumentierter Verlust der Intimität durch Homophobie.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt',
		verdictExplanation:
			'Die Geschlechts-Segregation (Maccoby) und die Gruppen-Struktur-Differenz (Rose/Rudolph) sind meta-analytisch robust. Die evolutionäre Erklärung (Koalitions-Kompetition) ist plausibel aber nicht direkt getestet. WICHTIGE SPANNUNG MIT WAY: Wenn Jungen 13-15 emotional tiefe dyadische Freundschaften haben und diese erst durch kulturelle Homophobie verlieren, dann ist Sax\'s „shoulder-to-shoulder ist die natürliche männliche Form” möglicherweise eine Beschreibung des POST-Verlust-Zustands, nicht des biologischen Ausgangspunkts. Die ehrlichste Formulierung: „Männer bilden tatsächlich größere, hierarchischere Gruppen — aber ob das ihre biologische Präferenz oder ihr kulturelles Coping nach dem Verlust der Adoleszenz-Intimität ist, bleibt eine offene Frage.”'
	},

	// =================================================================
	// EMPIRICALLY-ANCHORED CONVERGENCES (sourced from primary papers)
	// =================================================================
	{
		id: 'work-identity-crisis',
		name: 'Arbeit als männliche Identität — und deren Erosion als Krise',
		oneLineClaim:
			'Moderne männliche Identität ist an ökonomische Produktivität geknüpft. Die Erosion dieser Grundlage seit den 1970ern erzeugt eine Kette: Lohnverfall → Identitätsverlust → Vaterentkopplung → Deaths of Despair.',
		sharedBy: [
			{ bookId: 'ba', phrasing: 'Sax: „Failure to launch” — junge Männer ohne Motivation, leben zuhause, kein Antrieb zur Unabhängigkeit. Pornographie und Videospiele als Ersatzbefriedigungen.' },
			{ bookId: 'ms', phrasing: 'Böhnisch: „Der abstrakte Arbeiter” als hegemoniale Männlichkeitsform. Die Warenform selbst ist geschlechtlich codiert — ökonomische Produktivität IST die männliche Identitätsquelle. Wenn sie wegfällt, fehlt nicht nur Einkommen, sondern Selbstbild.' },
			{ bookId: 'obm', phrasing: 'Reeves: Medianlöhne für Männer 25-29 sind real ~40% gefallen seit 1970er (Ruggles). Arbeitsmarktbeteiligung sinkt. 74% aller deaths of despair sind männlich (Case & Deaton). „Men Can HEAL” — Health, Education, Administration, Literacy als neue Berufsfelder.' },
			{ bookId: 'wtc', phrasing: 'hooks: „Work as flight from emotional life.” Arbeit ist nicht nur Identitätsquelle, sondern Flucht vor Intimität — die patriarchale Doppelbindung: Mann MUSS arbeiten UND darf gleichzeitig nicht fühlen.' },
			{ bookId: 'nbm', phrasing: 'Galloway: „Work has constituted my identity and was the greatest source of reward for so long. Is that dysfunctional, or American? The answer is yes.“ Provider-Druck als Kern des Mann-Seins („if you really want to stress your wife and kids out, try being broke“); die Hustle-Phase zugleich Voraussetzung und Beschädigung seines Surplus-Ideals.' },
		],
		primarySourcesBeneath:
			'**Case, A. & Deaton, A. (2022), „The Great Divide: Education, Despair, and Death” (Annual Review of Economics, 14:1-21)** — die zentrale empirische Primärquelle. Suizidrate unter Nicht-BA WNHs 25-64 fast verdoppelt 1992-2019 (17,6 → 31,1/100.000). Drogenüberdosis-Mortalitätsrate bei BNHs ohne BA ~4× so hoch wie bei denen mit BA. Die Autoren identifizieren den Kern: „declining employment opportunities... the fall in good jobs, those that offer a sense of belonging, meaning, and purpose.” **Carbone, J. & Huntington, C. (2024), „Fatherhood, Family Law, and the Crisis of Boys and Men” (Columbia Law Review, 124:7)** — Ruggles-Daten: generationales relatives Einkommen junger Männer um 80% gefallen seit 1958. Killewald (2016): Ehemänner ohne Vollzeitjob 33% wahrscheinlicher geschieden (nur nach 1975). 78% der Frauen sagen, sie würden keinen Mann ohne stabilen Job heiraten. **Wong, Y.J. et al. (2017)** — APA Meta-Analyse, 78 Stichproben, N=19.453. **Ruggles, S. (2015), „Patriarchy, Power, and Pay” (Demography)** — 40% des Rückgangs der US-Heiratsraten 1960-2013 erklärt durch fallende Männerlöhne.',
		whatTheDataShows:
			'Was robust ist: (a) Case & Deaton: die Bildungs-Mortalitätsdivergenz ist in den USA einzigartig unter reichen Ländern — nirgendwo sonst steigt die Sterblichkeit der Nicht-Hochschulabsolventen während sie für Hochschulabsolventen fällt; (b) Carbone & Huntington: die Kette Lohnverfall → Heiratsunfähigkeit → Vaterentkopplung → familiale Isolation ist empirisch in Bevölkerungsdaten dokumentiert; (c) Ruggles: der Zusammenhang Männerlöhne → Heiratsraten erklärt 40% der Varianz. **WICHTIGE NUANCE aus Wong 2017**: Die spezifische CMNI-Subskala „Primacy of Work” war NICHT signifikant mit negativer psychischer Gesundheit assoziiert (r = −0,004, ns). Die schädlichen Normen sind Selbstgenügsamkeit (r = 0,19), Playboy (r = 0,18), Emotionskontrolle (r = −0,30 für Hilfesuche). Das bedeutet: Arbeit zu WERTSCHÄTZEN ist nicht toxisch — Arbeit zu VERLIEREN, wenn die Identität davon abhängt, IST es.',
		counterEvidence:
			'**Binder, A.J. & Lam, D. (2022), „Is There a Male-Breadwinner Norm?” (Journal of Human Resources, 57:6)** — die berühmte Bertrand/Kamenica/Pan (2015) „Diskontinuität” bei der Ehefrau-Ehemann-Einkommensdifferenz (als Evidenz für eine Breadwinner-Norm, ~700 Mal zitiert) ist möglicherweise ein statistisches Artefakt: einfache assortative-matching-Modelle OHNE Normen replizieren das Muster. Die Punktmasse bei exakt gleichen Einkommen erklärt den „Cliff”. Binder & Lam: „no feature of the observed distribution of wives\' relative income offers definitive information about the male breadwinner norm.” Das schwächt die populäre Erzählung, dass eine NORM den Effekt treibt — es könnte auch reiner Arbeitsmarktmechanismus sein. Außerdem: Wong 2017 zeigt, dass die „Primacy of Work”-Dimension NICHT mit negativen Outcomes assoziiert ist — das schädliche ist NICHT die Arbeitsorientierung, sondern Selbstgenügsamkeit und Emotionskontrolle.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt — epidemiologisch stark, normativ kompliziert',
		verdictExplanation:
			'Die epidemiologische Evidenz (Case & Deaton: deaths of despair, Bildungs-Mortalitätsdivergenz) ist unter den stärksten Befunden der gesamten Bibliothek — Nobelpreis-würdige Forschung. Die familiale Kette (Ruggles: Lohnverfall → Heiratsvermeidung; Killewald: Jobverlust → Scheidung; Carbone: Familien-Recht als Barriere) ist ebenfalls gut dokumentiert. **Aber**: (a) Wong 2017 zeigt, dass die Arbeitswertschätzung SELBST nicht das Schädliche ist — es sind Selbstgenügsamkeit und Emotionskontrolle; (b) Binder & Lam 2022 hinterfragen, ob eine „Breadwinner-Norm” überhaupt statistisch nachweisbar ist; (c) die vier Bücher (Böhnisch, hooks, Sax, Reeves) bieten VERSCHIEDENE Kausalmodelle (ökonomisch-strukturell vs. patriarchal-psychodynamisch vs. motivational vs. policy-orientiert). Robusteste Formulierung: „Der Verlust stabiler Arbeit erzeugt bei Männern ohne Hochschulabschluss eine Kaskade negativer Outcomes (Gesundheit, Familie, Mortalität) — empirisch massiv dokumentiert. Ob der Mechanismus eine NORM (Breadwinner-Identität) oder ein STRUKTUREFFEKT (Armut + fehlende Sozialnetze) ist, bleibt eine offene Frage.”'
	},

	// =================================================================
	{
		id: 'schools-fail-boys',
		name: 'Das Bildungssystem benachteiligt Jungen strukturell',
		oneLineClaim:
			'Schulen favorisieren frühere weibliche verbale Reife und sitzende Lernstile. Jungen werden überdiagnostiziert (ADHD), unterbewertet (Schreiben), und fallen zunehmend zurück — der Männeranteil an Hochschulabsolventen ist von 57,7% auf 43,1% gefallen.',
		sharedBy: [
			{ bookId: 'ba', phrasing: 'Sax: NAEP-Schreibgap ~15 Punkte in JEDER Rassen- und Einkommensgruppe. Männeranteil an Undergraduates von 57,7% (1970) auf 43,1% (2014). Curriculum-Beschleunigung + Null-Toleranz-Politik + ADHD-Überdiagnose als Treiber.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: „The early school environment is essentially feminine.” Jungen erhalten 4× häufiger eine Überweisung zum Schulpsychologen. Ritalin-Verschreibungen verdreifachten sich 1990-1995.' },
			{ bookId: 'rb', phrasing: 'Pollack: „Schools have evolved pedagogy and environments that unwittingly favor girls\' learning styles. Boys\' reading/writing struggles are ignored while their active learning styles are pathologized as hyperactive.”' },
			{ bookId: 'obm', phrasing: 'Reeves: Brain-Timing-Gap (Steinberg/Jensen/Sapolsky: präfrontaler Kortex bei Jungen ~2 Jahre später reif). Lösung: „Redshirt the Boys” — ein Jahr später einschulen. Die Bildungsgap ist GLOBAL — kein US-Sonderproblem.' },
			{ bookId: 'pr', phrasing: 'Prüfer Kap. 11: OECD-2024-Daten zum Jungen-Bildungsrückstand unbestritten; deutsche KiGGS-Daten konvergent. Prüfer moderiert zwischen „biologisches Timing" (Reeves) und „soziale Erwartung" (Dittmann) — er sieht beides, betont aber die Sozial-Seite stärker als Reeves.' }
		],
		primarySourcesBeneath:
			'Case & Deaton (2022): die Bildungsdivergenz IST die Mortalitätsdivergenz — der BA ist „a condition of dignified work and of social esteem” und zunehmend eine Frage von Leben und Tod. NAEP (National Assessment of Educational Progress): die konsistenteste US-Datenquelle zum Bildungsgap. Steinberg, L. (2014), „Age of Opportunity” — Hirnreifungsdaten. Carbone & Huntington (2024): 1970 hatten 96,1% der Männer mit College-Abschluss einen Job in der Arbeitskraft; für Männer mit nur High-School-Diplom fiel die Rate auf 80,8% bis 2019. Die Bildungskaskade beginnt VOR dem Arbeitsmarkt.',
		whatTheDataShows:
			'Was robust ist: (a) der NAEP-Schreibgap ist in jeder demographischen Subgruppe konsistent (~15 Punkte); (b) der Rückgang des Männeranteils an Hochschulabsolventen ist ein globales Phänomen (nicht nur USA); (c) ADHD-Diagnosen sind bei Jungen 2-3× häufiger und korrelieren mit dem Geburtsmonat (jüngste Kinder in der Klasse werden am häufigsten diagnostiziert — Elder 2010); (d) Steinbergs Hirnreifungsdaten zeigen reale Entwicklungsunterschiede im präfrontalen Kortex. Eliot (Pink Brain Blue Brain) ergänzt: der Lesegap ist „plastisch” und durch Intervention schließbar — die Differenz ist real, aber nicht unveränderlich.',
		counterEvidence:
			'Eliot argumentiert, dass die Geschlechterdifferenzen in verbalen Fähigkeiten klein sind (d ≈ 0,1-0,2) und durch Übung geschlossen werden können. Hyde 2005 (Gender Similarities Hypothesis) bestätigt: die meisten kognitiven Differenzen sind trivial. Die feministische Kritik (Connell, hooks) lehnt das „Schulen benachteiligen Jungen”-Framing ab, weil es die weiterbestehende Benachteiligung von Mädchen in MINT-Fächern und die patriarchale Struktur des Bildungssystems ignoriert. Allerdings widerspricht keine dieser Kritiken den epidemiologischen DATEN (der Gap existiert); sie streiten nur über die Interpretation.',
		verdict: 'robust',
		verdictLabel: 'Empirisch robust',
		verdictExplanation:
			'Der Bildungsgap ist einer der am besten dokumentierten Befunde der Bibliothek. NAEP-Daten, Hochschulstatistiken, ADHD-Diagnose-Muster und Hirnreifungsforschung konvergieren. Case & Deaton 2022 zeigen, dass dieser Gap inzwischen eine MORTALITÄTS-Konsequenz hat. Die Debatte über Ursachen (Biologie vs. Pädagogik vs. Struktur) ist offen, aber der Befund selbst ist robust.'
	},

	// =================================================================
	{
		id: 'homophobia-gender-policing',
		name: 'Homophobie als Geschlechternorm-Enforcement',
		oneLineClaim:
			'Homophobie funktioniert primär als Mechanismus zur Polizierung von Geschlechternormen — sie bestraft nicht Homosexualität, sondern emotionale Intimität und Verletzlichkeit unter Männern.',
		sharedBy: [
			{ bookId: 'ds', phrasing: 'Way: DIREKTE longitudinale Beobachtung. „No homo” ersetzt „love” in der Sprache der Jungen 16-18. Die Jungen identifizieren SELBST die kulturelle Gleichsetzung von Intimität mit „gay” als Grund für den Freundschaftsverlust. Kein anderes Buch in der Bibliothek hat diese direkte observational evidence.' },
			{ bookId: 'bdc', phrasing: 'Urwin: „Homophobes Verhalten beginnt als Bestrafung für Abweichungen von Männlichkeitsnormen, nicht als Hass auf Homosexuelle.” Die Funktion ist Norm-Enforcement, nicht Diskriminierung per se.' },
			{ bookId: 'gm', phrasing: 'Connell: Homophobe Gewalt als eine der „Krisentendenzen” der Geschlechterordnung. Subordinierte Männlichkeit (insbesondere schwule Männlichkeit) wird aktiv unterdrückt, um hegemoniale Männlichkeit zu stabilisieren.' },
			{ bookId: 'wtc', phrasing: 'hooks: Homophobie als integraler Bestandteil der patriarchalen Sozialisation. Die Angst, als „gay” wahrgenommen zu werden, ist eine der primären Barrieren gegen männliche emotionale Authentizität.' },
			{ bookId: 'nbm', phrasing: 'Galloway: UCLA der 1980er — „no acceptance whatsoever“; der Freund Jay (kirchliches „Reeducation“-Camp, AIDS-Tod mit Anfang 30) als Memoir-Beleg für die Kosten. Via Mark Greene: männliche Berührung ist nur als Sex-Vorstufe oder Schwulen-Verdacht lesbar → „Taking Affection Back“ (Söhne küssen, Händchenhalten) als bewusste Gegenpraxis.' },
		],
		primarySourcesBeneath:
			'Way, N. (2011), „Deep Secrets” (Harvard University Press) — die stärkste Primärquelle. Longitudinale Dokumentation, wie „no homo”-Disclaimer die Sprache der Intimität in Echtzeit ersetzen. Pascoe, C.J. (2007), „Dude, You\'re a Fag” — ethnographische Studie an einer US-High-School: „fag” wird als Disziplinierungsinstrument für jede Form von Geschlechts-Nonkonformität eingesetzt, nicht nur gegen homosexuelle Jungen. Kimmel, M. (1994), „Masculinity as Homophobia” — einflussreicher theoretischer Aufsatz. Wong et al. (2017) CMNI-Meta-Analyse: die Subskala „Disdain for Homosexuals” war NICHT signifikant mit negativer psychischer Gesundheit assoziiert (r = 0,03, ns) — was bedeutet, dass Homophobie als NORM-DIMENSION die eigene Gesundheit des Norm-Trägers nicht direkt schädigt, wohl aber die emotionale Umgebung anderer Jungen zerstört.',
		whatTheDataShows:
			'Was robust ist: (a) Way\'s longitudinale Daten: der Mechanismus ist in Echtzeit beobachtbar; (b) Pascoe 2007: „fag” wird in 96% der Fälle nicht gegen homosexuelle Schüler eingesetzt, sondern gegen jede Form von Geschlechts-Nonkonformität; (c) die Timing-Korrelation zwischen „no homo”-Aufkommen und Freundschaftsverlust ist in Way\'s Panel direkt sichtbar. Wong 2017 fügt eine wichtige Nuance hinzu: Homophobie schadet nicht dem TRÄGER (r = 0,03, ns für negative Gesundheit), sondern den ANDEREN — sie ist ein Externalisierungs-Mechanismus.',
		counterEvidence:
			'Die gesellschaftliche Akzeptanz von Homosexualität hat sich seit Way\'s Datenerhebung (1990er-2000er) dramatisch verändert. Obergefell v. Hodges (2015), steigende Coming-out-Raten, sinkende Homophobie-Scores in Umfragen. Offene Frage: wenn Homophobie der Kern-Mechanismus ist, müsste der Freundschaftsverlust bei Jungen ABGENOMMEN haben. Empirische Daten dazu fehlen — eine wichtige Forschungslücke. Allerdings zeigen die 15%-null-Freunde-Statistiken (2021), dass das Problem trotz sinkender Homophobie WÄCHST, was auf multiple Mechanismen hinweist (Social Media, Individualismus, etc.).',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt — observational evidence stark, aber Mechanismus möglicherweise nicht einziger',
		verdictExplanation:
			'Way\'s longitudinale Beobachtung ist die stärkste directevidence in der Bibliothek für IRGENDEINEN Sozialisationsmechanismus. Pascoe\'s Ethnographie bestätigt die Funktion (Norm-Policing, nicht Anti-Homosexualitäts-Hass). Aber: wenn Homophobie sinkt und der Freundschaftsverlust trotzdem wächst, ist der Mechanismus wahrscheinlich notwendig aber nicht hinreichend. Die ehrlichste Formulierung: „Homophobie war ein zentraler Mechanismus des Freundschaftsverlusts in Way\'s Panel — ob er unter heutigen Bedingungen immer noch der PRIMÄRE Mechanismus ist, bleibt eine offene empirische Frage.”'
	},

	// =================================================================
	{
		id: 'differential-emotional-mirroring',
		name: 'Differentielle Emotions-Spiegelung: WIE emotionale Suppression bei Jungen entsteht',
		oneLineClaim:
			'Eltern und Umgebung benennen bei Jungen weniger Gefühle, interpretieren denselben Emotionsausdruck anders (Baby-X), verhängen härtere Disziplin, und die Phrase „Jungen weinen nicht” wird ohne Alternative verankert. Der primäre Mechanismus zur Erzeugung männlicher Alexithymie.',
		sharedBy: [
			{ bookId: 'mse', phrasing: 'Süfke: „Mangelnde Gefühls-Spiegelung” — Baby-X-Experimente: gleiches Baby als „Junge” → Ärger, als „Mädchen” → Trauer/Angst. Jungen lernen den sprachlichen Zugang zu Gefühlen nicht. Der primäre Mechanismus für spätere Alexithymie.' },
			{ bookId: 'rc', phrasing: 'Kindlon/Thompson: „Boys receive harsher discipline everywhere.” Härtere Bestrafung produziert Scham und Wut — nicht Charakter.' },
			{ bookId: 'rb', phrasing: 'Pollack: „Shame-hardening mechanism.” Jordan/Stone Center: Scham = „the feeling state that accompanies emotional disconnection.” Der Boy Code wird durch Scham bei jeder Verletzlichkeits-Äußerung erzwungen.' },
			{ bookId: 'bdc', phrasing: 'Urwin: „Jungen weinen nicht” als Paradigma — dem Jungen wird gesagt, welche Reaktion verboten ist, aber nicht, welche stattdessen erlaubt wäre.' },
			{ bookId: 'pr', phrasing: 'Prüfer Kap. 12 (L26 `pr-weinen-kulturell-sozialisiert`): Jungen und Mädchen weinen bis ~12 Jahre ähnlich oft; die Divergenz danach entsteht durch Männlichkeitsnormen. Belegt durch Van Tilburg et al. (2002), Aznar & Tenenbaum (2015) und Levant/Thorberg-Linie. Eltern verwenden bei Töchtern mehr Gefühlsvokabular — das mittelstarke empirische Fundament der Spiegelungs-These ohne die harte Pollack-Rhetorik.' }
		],
		primarySourcesBeneath:
			'Chaplin, T.M. & Aldao, A. (2013), „Gender Differences in Emotion Expression in Children” (Psychological Bulletin, 166 Studien, >21.000 Kinder) — die umfassendste Meta-Analyse. MÄDCHEN zeigen mehr positive und internalisierende Emotionen, JUNGEN mehr externalisierende (Ärger). Effektstärken wachsen mit dem Alter moderat. Condry & Condry (1976), „Sex Differences: A Study of the Eye of the Beholder” — das ursprüngliche Baby-X-Experiment. Eisenberg, Cumberland & Spinrad (1998), „Parental Socialization of Emotion” — Meta-Review der differentiellen Eltern-Reaktionen. Wong et al. (2017): die CMNI-Subskala „Emotional Control” zeigte die stärkste Assoziation mit geringerer Hilfesuche (r = −0,30, 95% CI [−0,37, −0,23]) — die schädlichste einzelne Maskulinitätsdimension in der Meta-Analyse.',
		whatTheDataShows:
			'Was robust ist: (a) Chaplin & Aldao 2013: Geschlechterdifferenzen in emotionalem Ausdruck WACHSEN mit dem Alter — konsistent mit Sozialisations-Hypothese; (b) Baby-X-Effekt ist repliziert: Erwachsene INTERPRETIEREN denselben Emotionsausdruck unterschiedlich je nach wahrgenommenem Geschlecht; (c) Eisenberg 1998: Eltern reagieren auf Jungen-Emotionen ANDERS als auf Mädchen-Emotionen; (d) Wong 2017: „Emotional Control” ist die schädlichste CMNI-Subskala für Hilfesuche (r = −0,30). Was WENIGER klar ist: ob Jungen wirklich MEHR Emotionen unterdrücken als Mädchen, oder ob sie andere Emotionen unterdrücken (Ärger bei Mädchen vs. Trauer bei Jungen).',
		counterEvidence:
			'Else-Quest et al. (2012, Psychological Bulletin): FRAUEN berichten meist HÖHERE Trait-Scham. Chaplin & Aldao 2013: die Geschlechterdifferenzen in der Säuglingsphase sind MINIMAL (d < 0,15). Die spezifische „Jungen werden systematisch MEHR beschämt”-Behauptung wird von der Schamforschung nicht gestützt. Was differenziert wahr ist: Jungen werden für ANDERE Inhalte sanktioniert (Geschlechts-Nonkonformität, Weichheit) als Mädchen (Körper, Sexualität). Der Mechanismus ist nicht männer-SPEZIFISCH, sondern inhalts-spezifisch.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt — Mechanismus dokumentiert, aber nicht geschlechtsspezifisch',
		verdictExplanation:
			'Der Baby-X-Effekt und die Chaplin/Aldao-Meta-Analyse dokumentieren reale differentielle Behandlung. Wong 2017 zeigt, dass „Emotional Control” die schädlichste Maskulinitätsdimension für Hilfesuche ist. Aber: die breitere Schamforschung zeigt, dass FRAUEN mehr Trait-Scham berichten, nicht weniger. Die ehrlichste Formulierung: „Eltern und Kultur behandeln Jungen-Emotionen ANDERS als Mädchen-Emotionen — nicht unbedingt MEHR unterdrückend, aber INHALTS-spezifisch anders (Trauer/Verletzlichkeit bei Jungen vs. Wut/Selbstbehauptung bei Mädchen). Der Effekt ist real und seine Konsequenzen (Wong: Emotional Control → geringere Hilfesuche) sind meta-analytisch robust.”'
	},

	// =================================================================
	// PARENTING EFFECT SIZE CLUSTER (Prüfer als Primary Anchor)
	// =================================================================
	{
		id: 'parenting-effect-size-limited',
		name: 'Elterlicher Einflussspielraum ist begrenzt — Gene, Peers, Kultur dominieren',
		oneLineClaim:
			'Elterliche Erziehung erklärt maximal 30-40% der Persönlichkeitsvarianz — nicht 80%, wie die Ratgeberliteratur suggeriert. Ab der Adoleszenz übernehmen Peers und Eigenentscheidungen. Transformations-Erwartungen an gender-bewusste Erziehung sind deshalb zu relativieren.',
		sharedBy: [
			{ bookId: 'pr', phrasing: 'Prüfer L06/L07/L11/L19/L34 (Kap. 3, 4, 9, 18): Wärme dominiert Kontrolle (Lewis 1981), Kinder prägen Eltern stärker als umgekehrt (Kerr/Stattin/Özdemir 2012 schwed. Längsschnitt), Kindheit determiniert nicht das Leben (Harvard Grant Study, Big-Five-Stabilität), IQ-Heritabilität steigt von ~20% (Säugling) auf ~80% (später Erwachsener). Zentrale Quelle: Polderman et al. (2015) 50 Jahre Zwillingsforschung, Plomin & Deary (2015).' },
			{ bookId: 'obm', phrasing: 'Reeves: individuelle Therapie-Rezepte verkennen das strukturelle Problem; „reform the institutions, not the men". Der Eltern-Einflussspielraum ist in der Kritik der klinischen Konvergenz-Literatur ohnehin begrenzt.' },
			{ bookId: 'jvh', phrasing: 'Dittmann (implizit als Gegenpol): JVH `parenting-can-fix` erwartet gerade, dass geschlechterbewusste Erziehung die Jungen-Probleme lösen kann — Prüfer relativiert diese Wirksamkeitserwartung, ohne sie direkt zu widerlegen.' }
		],
		primarySourcesBeneath:
			'Polderman, T.J.C. et al. (2015), "Meta-analysis of the heritability of human traits based on fifty years of twin studies" — Nature Genetics. Plomin, R. & Deary, I.J. (2015), "Genetics and intelligence differences" — Molecular Psychiatry. Harris, J.R. (1998), "The Nurture Assumption" — Group Socialization Theory. Kerr, M., Stattin, H. & Özdemir, M. (2012) — schwedische Längsschnittstudie ~1000 Jugendliche (cross-lagged panel). Vaillant, G.E. (2012), "Triumphs of Experience" / Harvard Grant Study. Specht, J. et al. (2011) zu Big-Five-Stabilität. Rohrer, J.M., Egloff, B. & Schmukle, S.C. (2015) PNAS N=377k zu marginalen Geburtenrang-Effekten.',
		whatTheDataShows:
			'Was robust ist: Zwillings- und Adoptionsstudien zeigen konsistent, dass Shared Environment (der Anteil, den beide Geschwister eines Haushalts teilen) ~0-10% der Persönlichkeitsvarianz erklärt; Heritabilität erklärt 30-50%; der Rest ist nicht-geteilte Umwelt (Peers, Zufall, individuelle Erfahrungen). IQ-Heritabilität steigt sogar von ~20% im Säuglingsalter auf ~80% im späten Erwachsenenalter — was die Erziehungsform hinter Selbstselektion zurücktreten lässt. Harris\' Group Socialization Theory formalisiert dies: Peers sind ab Adoleszenz prägender als Eltern. Das bedeutet NICHT „Eltern spielen keine Rolle" — Wärme, Sicherheit, keine Vernachlässigung/Misshandlung sind Voraussetzung —, aber Transformations-Erwartungen (Eltern „schaffen" die Persönlichkeit des Kindes) sind empirisch nicht gedeckt.',
		counterEvidence:
			'Heritabilitätsschätzungen sind WEITE Konfidenzintervalle; „80% Heritabilität" bedeutet nicht, dass ein Individuum zu 80% genetisch determiniert ist. Gen-Umwelt-Interaktionen und epigenetische Effekte werden von klassischen Zwillingsstudien unterschätzt. Die Behavior-Genetics-Schule (Plomin, Harris) ist selbst kontrovers — Sozialisations-Theoretiker wie Turkheimer kritisieren sie für Unterbetonung von SES und kulturellem Kontext. Dittmann und die gesamte strukturalistisch-kritische Männerforschung (Connell, Böhnisch) halten dagegen: selbst wenn die Individual-Heritabilität hoch ist, können KULTUREN bestimmter Erziehungsmuster aggregate Effekte haben.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt — relativiert Transformations-Erwartungen',
		verdictExplanation:
			'Die Meta-Evidenz aus Zwillings- und Adoptionsstudien (Polderman, Plomin) ist robust. Die Grundbotschaft — Shared Environment erklärt wenig Persönlichkeitsvarianz, Eltern haben moderaten statt transformatorischen Einfluss — ist in der Verhaltens­genetik Konsens. Das bedeutet NICHT, dass Erziehung egal wäre; sondern dass die populäre Erwartung „engagierte Eltern können die Persönlichkeit formen" empirisch überzogen ist. Prüfer ist hier der explizite Brückenbauer zur JVH `parenting-can-fix`-Kette: er widerlegt Dittmann nicht direkt, aber er präzisiert die Effektstärken-Erwartung deutlich nach unten. Robusteste Formulierung: „Wärme und Sicherheit der Eltern sind Voraussetzung für gesunde Entwicklung; Transformation von Charakter oder gender-conscious Re-Programmierung durch Erziehung ist ein Überclaim — ab Adoleszenz dominieren Peers, ab Erwachsenenalter Selbstselektion und Genetik."'
	},

	// =================================================================
	{
		id: 'good-enough-parenting',
		name: '„Good enough parenting" — Verlässlichkeit schlägt Perfektion',
		oneLineClaim:
			'Die beste Empirie-basierte Erziehungs-Formel ist nicht-perfekte, aber verlässliche Reaktion. Moderate Frustration ist Entwicklungsmotor; Perfektionismus führt zu Eltern-Burnout und ängstlich-kontrollierenden Haltungen, die Kinder-Outcomes VERSCHLECHTERN.',
		sharedBy: [
			{ bookId: 'pr', phrasing: 'Prüfer L32 `pr-good-enough-parenting` (Kap. 17): Winnicotts „good enough mother" und Bettelheims „good enough parent" als empirisch bester Rahmen. Bei ~50% prompter Reaktion entwickeln Kinder eigene Beruhigungsstrategien (Woodhouse 2020 Secure Base Provision). Mindful Parenting senkt Eltern-Stress (Bögels 2014 RCT). Lilley (2020) Perfektionismus-Meta: Eltern-Perfektionismus → Kind-Angststörungen. Zitat Kap. 17: „Die meisten Eltern machen intuitiv sehr viel richtig, einfach, indem sie ihre Kinder lieben und sich bemühen."' },
			{ bookId: 'obm', phrasing: 'Reeves (implizit): „We need structural reform, not therapy for every family" — Reeves\' Kritik am individualistischen Reflex der klinischen Konvergenz schlägt in dieselbe Richtung. Entpathologisierung der „normalen" Familie.' },
			{ bookId: 'jvh', phrasing: 'Dittmann (als Kontrast): JVH `parenting-can-fix` formuliert einen deutlich höheren Transformations-Anspruch (gender-conscious parenting, Hausarbeits-Pädagogik ab Kleinkindalter, aktive Widerstands-Bildung gegen Boy-Code). Das Good-Enough-Framing würde Dittmanns Empfehlungen ERDEN, ohne sie zu entwerten.' }
		],
		primarySourcesBeneath:
			'Winnicott, D.W. (1953) Original-Konzept „good enough mother". Bettelheim, B. (1987), "A Good Enough Parent". Woodhouse, S.S. et al. (2020), "Secure Base Provision: A New Approach to Examining Links Between Maternal Caregiving and Infant Attachment" — operationalisiert die 50%-Reaktionsschwelle empirisch. Bögels, S.M. et al. (2014) Mindful-Parenting-RCT. Lilley, Sirois & Rowse (2020), Perfektionismus-Meta-Analyse. Sroufe, L.A., Egeland, B. & Carlson, E.A. (2005) Minnesota-Längsschnitt. Yerkes, M.A. et al. (2021) zum Intensive-Parenting-Paradox. Fearon et al. (2010) disorganisierte Bindung.',
		whatTheDataShows:
			'Was robust ist: (a) Woodhouse 2020 zeigt empirisch, dass sichere Bindung bei ~50% prompter elterlicher Reaktion zuverlässig entsteht — nicht 100%; (b) Eltern-Perfektionismus korreliert konsistent mit Kind-Angst, Depression, geringerer Selbstwirksamkeit (Lilley Meta); (c) Mindful Parenting senkt gemessen Eltern-Stress und verbessert Kind-Outcomes (Bögels RCT); (d) Roskam et al. (2021) 42-Länder-Studie: Eltern-Burnout ist in individualistischen Kulturen mit „intensive parenting" signifikant höher. Die Good-Enough-Formel ist EINE der besseren Synthesen der klinischen und empirischen Evidenz. Was Winnicott/Bettelheim selbst betrifft: psychoanalytisch-theoretisch, nicht experimentell — aber die 50%-Reaktions-Schwelle ist inzwischen experimentell validiert.',
		counterEvidence:
			'Die „good enough"-Formel kann als Freifahrtschein missverstanden werden („50% reichen" ≠ „egal was, hauptsache weniger bemühen"). Die Forschung zeigt, dass Vernachlässigung deutliche negative Effekte hat (Rutter ERA-Studie). Die Kunst liegt im Reflective Functioning — zu wissen, WANN 50% reichen und wann volle Präsenz nötig ist. Feministische Kritik: „good enough" Mutter wurde historisch genutzt, um strukturelle Kinderbetreuungs-Defizite zu entschuldigen; der Begriff bedarf Geschlechts-Balance (Väter nicht ausgenommen). Dittmann würde zurecht einwenden: „good enough" darf nicht bedeuten, dass gender-bewusste Erziehungs-Bemühungen abgewertet werden.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt — klinisch und empirisch konvergent',
		verdictExplanation:
			'Eine der empirisch am stärksten unterfütterten Prüfer-Theseen — und eine der wenigen Konvergenzen, in denen Prüfer einen eigenen normativen Rahmen setzt, den die anderen Library-Bücher nicht explizit haben. Woodhouse 2020, Bögels 2014, Lilley 2020, Roskam 2021 konvergieren darauf, dass Eltern-Perfektionismus schädlich und moderate Reaktionsschwellen ausreichend sind. Das ist ein wichtiges App-Korrektiv gegen die in der Bibliothek verbreitete Transformations-Rhetorik. Die Formel ist nicht falsifizierbar im strengen Sinn, aber ihre Komponenten (Secure Base Provision, Mindful Parenting) sind empirisch geprüft. Robusteste Formulierung: „Eltern brauchen keine Perfektion — verlässliche Reaktion auf ~50% der Bindungs-Signale reicht für sichere Entwicklung. Intensive/perfektionistische Erziehung schadet messbar Eltern (Burnout) UND Kindern (Angst). Eine wichtige Gegenformel zur transformations-orientierten Erziehungs­literatur."'
	},

	// =================================================================
	{
		id: 'behavior-genetics-dominates',
		name: 'Behavior Genetics: Gene + Peers > Shared Environment',
		oneLineClaim:
			'Zwillings- und Adoptionsstudien der letzten 50 Jahre konvergieren: Heritabilität erklärt ~30-50% der Persönlichkeitsvarianz, Shared Environment (der Eltern-Effekt) nur ~0-10%, der Rest ist nicht-geteilte Umwelt (Peers, individuelle Erfahrungen). Polderman (2015) Meta über 50 Jahre Zwillingsforschung als empirischer Anker.',
		sharedBy: [
			{ bookId: 'pr', phrasing: 'Prüfer L11/L19/L34 (Kap. 4, 9, 18): zitiert Polderman et al. (2015), Plomin & Deary (2015), Tucker-Drob, Briley & Harden (2013), Harris (1998) Nurture Assumption positiv. Zitat Kap. 18: „Eltern schaffen nicht die Persönlichkeit ihrer Kinder und sie determinieren auch nicht ihr Leben. Trotzdem wissen wir, dass Eltern sehr wichtig sind." Prüfer macht Behavior Genetics zu einem expliziten Rahmen der Gesamtargumentation.' },
			{ bookId: 'jvh', phrasing: 'Dittmann (implizit als Gegenpol): JVH `born-same` zitiert Eliot in der extremsten Lesart (99,8% gemeinsame Gene), ignoriert aber Polderman/Plomin systematisch. Der JVH-Audit markiert dies bereits als rote Flagge — Prüfer bestätigt extern.' },
			{ bookId: 'obm', phrasing: 'Reeves (kompatibel): Reeves akzeptiert biologische Dimorphie + kulturelle Modulation; sein Schul-Timing-Argument (präfrontaler Kortex ~2 Jahre später) verträgt sich mit der Behavior-Genetics-Perspektive, ohne sie explizit zu zitieren.' }
		],
		primarySourcesBeneath:
			'Polderman, T.J.C., Benyamin, B., de Leeuw, C.A., Sullivan, P.F., van Bochoven, A., Visscher, P.M. & Posthuma, D. (2015), "Meta-analysis of the heritability of human traits based on fifty years of twin studies" — Nature Genetics, 47: 702-709. 14.5 Millionen Zwillingspaare, ~17.800 Traits, 2.748 Publikationen. Durchschnittliche Heritabilität über alle Traits: 49%. Plomin, R. & Deary, I.J. (2015), "Genetics and intelligence differences: Five special findings" — Molecular Psychiatry. Tucker-Drob, E.M., Briley, D.A. & Harden, K.P. (2013) zur steigenden Heritabilität über das Leben. Harris, J.R. (1998), "The Nurture Assumption" (popularisiert Plomin-Daten). Kandler, C., Gottschling, J. & Spinath, F.M. (2016) zur Heritabilität von Werten. Turkheimer, E. (2000) "Three laws of behavior genetics and what they mean" — die klassische kritische Reflexion.',
		whatTheDataShows:
			'Was robust ist: Die Meta-Meta-Analyse Polderman 2015 über 50 Jahre Zwillingsforschung ist die umfassendste Synthese der Behavior-Genetics-Literatur. Die „Three Laws" (Turkheimer 2000) gelten als Konsens: (1) alle menschlichen Eigenschaften sind erblich; (2) Aufwachsen in derselben Familie hat kleinere Wirkung als Gene; (3) ein substantieller Teil der Varianz ist weder durch Gene noch durch Familie erklärt. Für Intelligenz steigt Heritabilität von ~20% (Säugling) auf ~80% (später Erwachsener) — ein robuster, mehrfach replizierter Befund. Das bedeutet, dass die POPULÄRE Erwartung „Eltern formen den Charakter" dramatisch reduziert wird.',
		counterEvidence:
			'Wichtige Einschränkungen: (a) Heritabilitätsschätzungen sind POPULATIONS-Angaben, nicht Individual-Deterministik; (b) Zwillings-Designs unterschätzen Gen-Umwelt-Interaktionen; (c) Epigenetik wird in klassischen Designs nicht erfasst; (d) die Heritabilitäts-Zahlen setzen eine repräsentative Umweltvariation voraus — in homogenen Umwelten wird Heritabilität überschätzt, in heterogenen (SES-divergenten) unterschätzt (Turkheimer 2003 zu SES × Heritabilität). Soziologisch-strukturalistische Autor:innen (Dittmann, Connell, Böhnisch) halten die Behavior-Genetics-Schule für epistemisch verengt: aggregate Kultur-Effekte werden systematisch als „nicht-geteilte Umwelt" maskiert. Die Debatte ist nicht abgeschlossen.',
		verdict: 'robust',
		verdictLabel: 'Empirisch robust (für die aggregate Aussage)',
		verdictExplanation:
			'Die Polderman-2015-Meta-Meta-Analyse ist eine der stärksten Evidenzquellen der gesamten Entwicklungspsychologie — 14,5 Millionen Zwillingspaare, 50 Jahre, peer-reviewed Nature Genetics. Die Grundbotschaft (Heritabilität ~30-50%, Shared Environment klein, nicht-geteilte Umwelt groß) ist unbestritten. Was Prüfer damit in die Kausalpfade-App einbringt, ist ein konkreter empirischer Anker GEGEN jede transformations-orientierte Erziehungs-Literatur der Bibliothek. Das bedeutet NICHT, dass Dittmanns Interventionsempfehlungen sinnlos wären — aber ihre erwartete Wirkung muss an den Behavior-Genetics-Befunden kalibriert werden. Ehrlichste App-Formulierung: „Der Eltern-Einflussspielraum auf stabile Persönlichkeits­merkmale ist kleiner, als die populäre Erziehungs­literatur suggeriert — meta-analytisch gestützt über 50 Jahre Zwillingsforschung. Die Debatte über die Interpretation (Individuum vs. Aggregat, Gen × Umwelt × Epigenetik) bleibt offen, aber die Kernbefunde sind stabil."'
	},

	// =================================================================
	{
		id: 'dopamine-economy',
		name: 'Die Dopamin-Ökonomie kapert junge Männer',
		oneLineClaim:
			'Tech-, Gaming-, Gambling- und Fast-Food-Konzerne monetarisieren Dopamin-Schleifen — und die vulnerabelste Zielgruppe sind Jungen und junge Männer mit unreifem präfrontalem Kortex.',
		sharedBy: [
			{ bookId: 'ba', phrasing: 'Sax (2007, die Frühform): Videospiele liefern mühelose Dominanz-Erfahrung und Dopamin, sappen „will power“ und Motivation für die reale Welt — Kernursache des „failure to launch“. Nucleus-accumbens-Argument.' },
			{ bookId: 'nbm', phrasing: 'Galloway (2025, die Vollform): „The world’s most valuable resource isn’t data, oil, or rare earth metals; it’s dopa.“ Addiction Economy = Social Media, Gaming, Sports Betting, Porn, Fast Food; 24% der Teens „addicted“ an Social Media; Haidt-Zitat vom „largest uncontrolled experiment“. Rhetorischer Höhepunkt: Cook und Zuckerberg „outside junior high school with a bag of smack“.' },
			{ bookId: 'jvh', phrasing: 'Dittmann (angrenzend): algorithmische Radikalisierung — Tate-Content wird Jungen aktiv zugespült; die Plattform-Logik, nicht nur der Inhalt, ist das Problem.' },
			{ bookId: 'pr', phrasing: 'Prüfer (die Moderation): zwischen Haidt (alarmistisch) und Orben (skeptisch) — Schaden bei Kleinkindern robust, Jugendlichen-Effekt klein-aber-real.' }
		],
		primarySourcesBeneath:
			'Haidt „The Anxious Generation“ (2024) und Twenge (2017-2022) für die Post-2012-Trends; Gentile (2009) zu Gaming-„Addiction“ (~10%); Caner et al. für die 24%-Social-Media-Zahl (Einzelstudie, weiches Konstrukt); Sax stützte sich 2007 auf frühe Dopamin-/Motivationsstudien und klinische Fälle. Die Suizid-/Depressions-Trenddaten selbst sind CDC/HHS-solide.',
		whatTheDataShows:
			'Deskriptiv unstrittig: Jugendliche Mental Health verschlechtert sich seit ~2012, Bildschirmzeit ist massiv, Jungen dominieren Gaming/Gambling/Porn-Nutzung, Mädchen Social-Media-Intensivnutzung. Kausal umstritten: Meta-Analysen und Re-Analysen (Odgers & Jensen 2020, Orben & Przybylski 2019) finden kleine, teils bidirektionale Effekte; die „Addiction“-Prävalenzzahlen hängen extrem am Messinstrument. Die Konvergenz Sax→Galloway ist bemerkenswert: dieselbe Kausalstory, 18 Jahre und eine Produktgeneration auseinander — was entweder für die These spricht oder für die Persistenz eines attraktiven Narrativs.',
		counterEvidence:
			'Odgers/Przybylski-Linie: Effektstärken um r ≈ 0,05-0,15, Selektions- und Reverse-Causation-Probleme; sozioökonomische Confounder erklären viel; „Addiction“-Framing pathologisiert Normalverhalten. Ferguson-Meta-Analysen zu Gaming finden minimale Effekte. Die Phone-Ban-Schulstudien zeigen gemischte Ergebnisse. Sax’ spezifische Will-Power-Mechanik wurde nie direkt getestet.',
		verdict: 'partial',
		verdictLabel: 'Teilweise gestützt — Trend real, Kausalgewicht offen',
		verdictExplanation:
			'Das Phänomen (massive Zeit-Reallokation junger Männer in Dopamin-Produkte, parallel verschlechterte Mental-Health- und Anschluss-Statistiken) ist real und mehrfach dokumentiert. Der Kausalanteil der Produkte gegenüber Ökonomie, Covid und Erhebungsartefakten ist die offenste Frage der Debatte. Ehrliche Formulierung: „Die Addiction Economy ist ein plausibler VERSTÄRKER des männlichen Rückzugs mit kleinen bis mittleren belegten Effekten — nicht die nachgewiesene Hauptursache, als die Sax und Galloway sie erzählen.“'
	},

	// =================================================================
	{
		id: 'porn-replaces-mating',
		name: 'Porn ersetzt den Mating-Antrieb',
		oneLineClaim:
			'Unbegrenzt verfügbarer Porn nimmt jungen Männern den Antrieb, reale Ablehnungsrisiken einzugehen — und ersetzt damit Beziehungsanbahnung, nicht nur Sex.',
		sharedBy: [
			{ bookId: 'ba', phrasing: 'Sax (2007): Pornografie konditioniert junge Männer weg von realen Partnerinnen; einer der fünf „Boys Adrift“-Faktoren.' },
			{ bookId: 'nbm', phrasing: 'Galloway (2025): „Porn is a masculinity killer… it makes you weaker and less motivated bit by bit.“ Kernmechanismus: Porn eliminiert das Rejection-Training („the zillion-dollar skill is his willingness to endure rejection“). Prognose: „Homo solo“. Zugleich ungewöhnlich ehrlich: eigener Konsum, Phasen „technischer“ Addiction, Plädoyer für Moderation statt Abstinenz.' },
			{ bookId: 'jvh', phrasing: 'Dittmann (die pädagogische Wendung): nicht Verbot, sondern Porno-Kompetenz und Consent-Bildung — der einzige konstruktive Umgangsvorschlag im Korpus.' }
		],
		primarySourcesBeneath:
			'Grubbs, Kraus & Perry (2019): 11% der Männer bejahen „I am addicted to pornography“ — aber Grubbs’ Forschungsprogramm zeigt, dass diese Selbstauskunft primär moralische Inkongruenz misst. Peter & Valkenburg (2009) Längsschnitt zu Objektifizierung; Bridges et al. (2024) Korrelationen; Matthew Ball (2024) zur OnlyFans-Ökonomie als Markt-Beleg der Nachfrage-Verschiebung. Galloway selbst benennt die Peer-Review-Lücke („understudied… not in the DSM“).',
		whatTheDataShows:
			'Belegt: Porn-Konsum ist bei jungen Männern quasi-universal; sexuelle Inaktivität junger Männer steigt (GSS-Daten); OnlyFans/Pornhub-Ökonomie dokumentiert massive Zahlungsbereitschaft als Mating-Substitut. NICHT belegt: die Kausalrichtung. Längsschnittstudien, die Porn-Konsum als URSACHE von Rückzug aus realem Dating zeigen, fehlen weitgehend; die plausible Gegenrichtung (wer keinen Zugang zu Partnerinnen hat, konsumiert mehr) ist unausgeräumt.',
		counterEvidence:
			'Mehrere Studien finden bei moderaten Nutzern keine oder positive Assoziationen mit dem Sexualleben; das „Porn-induced ED“-Narrativ ist klinisch umstritten; Grubbs’ Moral-Incongruence-Befunde unterlaufen die Addiction-Rahmung; die sexuelle Rezession korreliert mindestens so stark mit Ökonomie und Wohnsituation (bei den Eltern lebende 20er) wie mit Porn-Verfügbarkeit.',
		verdict: 'clinical-metaphor',
		verdictLabel: 'Plausibler Mechanismus, kausal ungetestet',
		verdictExplanation:
			'Die Sax→Galloway-Konvergenz beschreibt einen intuitiv starken, evolutionspsychologisch plausiblen Mechanismus (Supernormal-Stimulus ersetzt kostspieliges Werbeverhalten), für den die harte Längsschnitt-Evidenz fehlt. Der Markt-Beleg (OnlyFans-Milliarden als „Arbitrage auf die Mating-Lücke“) zeigt die NACHFRAGE, nicht die Kausalrichtung. Als Ratgeber-Heuristik („Moderation, Rejection-Training schützen“) vertretbar; als empirische Behauptung eine Hypothese.'
	},

	// =================================================================
	{
		id: 'prosocial-masculinity-vision',
		name: 'Prosoziale Männlichkeit als Zielbild',
		oneLineClaim:
			'Das normative Gegenprogramm zur Defizit-Rhetorik: Männlichkeit positiv definieren — als Schutz, Fürsorge, Generosität — statt sie zu pathologisieren oder zu restaurieren.',
		sharedBy: [
			{ bookId: 'obm', phrasing: 'Reeves: „prosocial masculinity for a postfeminist world“ — Feminismus-Errungenschaften bewahren, Männer strukturell stützen, Männlichkeit positiv formulieren. „We can be passionate about women’s rights AND compassionate toward vulnerable boys and men.“' },
			{ bookId: 'nbm', phrasing: 'Galloway: Aspirational Masculinity — Code aus „generous, good dad, a patriot“; Surplus Value (mehr geben als nehmen, explizit von Reeves); „acceptable at a dance and invaluable in a shipwreck“; radikale Emotionalität als Männlichkeits-Komponente. Definitorische Zuspitzung: Grausamkeit ist „anti-masculine“ — „toxic masculinity“ existiert nicht.' },
			{ bookId: 'wtc', phrasing: 'hooks: Liebe als Männlichkeits-Kern — „feminist masculinity“, die Stärke ohne Dominanz denkt; Männer als Verbündete der Befreiung, nicht als Feinde.' },
			{ bookId: 'jvh', phrasing: 'Dittmann: „Caring Masculinity“ (nach Elliott/Scholz) als erklärtes Erziehungsziel — Fürsorge, Care-Arbeit und emotionale Kompetenz als männliche Zukunftskompetenzen.' },
			{ bookId: 'mse', phrasing: 'Süfke (angrenzend): das Ziel ist nicht „neuer Mann“ als neue Norm, sondern emotionale Selbst-Zugänglichkeit — Männlichkeit, die die eigene Innenwelt wieder wahrnehmen kann.' }
		],
		primarySourcesBeneath:
			'Keine — es ist eine normative, keine empirische Konvergenz. Theoretische Ahnen: Elliott (2016) „Caring Masculinities“, Connells Kritik hegemonialer Männlichkeit als Negativfolie, Reeves’ Policy-Rahmung. Galloways Beitrag ist rhetorisch: dieselbe Vision in alpha-kompatiblem Vokabular („big-dick energy“ für D-Day, Protector-Framing), das ein Publikum erreicht, das hooks nie lesen würde.',
		whatTheDataShows:
			'Nicht falsifizierbar. Empirisch anschlussfähig sind nur Teilstücke: Caregiver-Mortalitätsvorteil (Roth et al. 2018), Generativitäts-Forschung (Erikson-Tradition, McAdams), Mentoring-RCTs (Big Brothers Big Sisters: moderate Effekte). Bemerkenswert ist die KONVERGENZ SELBST: fünf Bücher aus vier politischen Lagern (Brookings-Zentrismus, Business-Selbsthilfe, Schwarzer Feminismus, deutsche Gleichstellungspädagogik, Männertherapie) landen bei fast identischen Zielbildern — geben statt nehmen, schützen statt dominieren, fühlen statt panzern.',
		counterEvidence:
			'Connell-Einwand: Jede positive Männlichkeits-Definition reproduziert die Normierungs-Operation, die das Problem erzeugt hat — warum die Tugenden überhaupt geschlechtlich rahmen? Galloways definitorische Immunisierung („toxisch = anti-maskulin“) macht die Vision unkritisierbar, löst aber das empirische Problem schädlicher Normen nicht. Und: kein Zielbild der fünf ist je als Intervention evaluiert worden.',
		verdict: 'clinical-metaphor',
		verdictLabel: 'Normative Konvergenz — bemerkenswert lagerübergreifend',
		verdictExplanation:
			'Die inhaltlich stärkste NICHT-empirische Konvergenz des Korpus: Reeves, Galloway, hooks, Dittmann und Süfke beschreiben mit unterschiedlichem Vokabular („prosocial“, „aspirational/surplus value“, „feminist“, „caring“, „selbst-zugänglich“) dasselbe Zielbild. Dass die Business-Selbsthilfe (Galloway) und der Schwarze Feminismus (hooks) hier faktisch deckungsgleich sind — bei maximaler rhetorischer Feindschaft der Lager — ist der vielleicht interessanteste Einzelbefund des Cross-Book-Vergleichs. Als Wissenschaft: unprüfbar. Als kultureller Datenpunkt: signifikant.'
	},

];

// ============================================================
// ANALYSIS
// ============================================================

export const convergenceSummary = {
	total: convergences.length,
	robust: convergences.filter((c) => c.verdict === 'robust').length,
	partial: convergences.filter((c) => c.verdict === 'partial').length,
	clinicalMetaphor: convergences.filter((c) => c.verdict === 'clinical-metaphor').length,
	overclaim: convergences.filter((c) => c.verdict === 'overclaim').length,
	verdict:
		'Von 12 Konvergenzen zwischen den Büchern sind 2 empirisch robust („Patriarchat schadet auch Männern” via Wong 2017 Meta-Analyse; „Männer vermeiden Hilfesuche” via Courtenay 2000). 7 sind nur teilweise gestützt (Phänomen real, Mechanismus spekulativ). 1 ist klinische Metapher ohne empirische Isolation (Wut als emotionaler Trichter, inter-generationales Trauma). 2 waren zunächst als Überklagen bewertet (Jungen-werden-emotionaler-geboren, Scham-als-Härtungs-Mechanismus). ' +
		'**WICHTIGES UPDATE NACH REEVES 2022**: Richard V. Reeves\' „Of Boys and Men” (Brookings 2022) war die erste externe empirische Quelle der gesamten Bibliothek, die den Konvergenz-Audit teilweise revidieren kann. Reeves bringt neue peer-reviewed Evidenz zu mehreren Konvergenzen: (a) **Vater-Hunger** — Eggebeens Analyse der National Longitudinal Study of Adolescent to Adult Health zeigt, dass 22% der elterlichen Beiträge zu Teen-Outcomes UNIQUE zu einem Elternteil sind („Dads teach, moms tend”); das widerspricht teilweise Biblarz & Stacey 2010 und hebt meine ursprüngliche Overclaim-Bewertung zu „teilweise gestützt”. (b) **Schulen scheitern an Jungen** — die Brain-Timing-Erklärung (Steinberg/Jensen/Sapolsky: präfrontaler Kortex bei Jungen ~2 Jahre später reif) ist empirisch besser gestützt als die meisten anderen Einzelhypothesen. (c) **Violence-reactive-not-testosterone** — Hoovens Amplifier-statt-Trigger-Synthese ist der aktuelle akademische Mittelweg und präzisiert die klinische Über-Korrektur gegen Biologismus. (d) **Mask-Boy-Code** — Reeves zitiert Harrington 2021 explizit gegen die „toxic masculinity”-Rahmung und verstärkt meine „teilweise gestützt”-Bewertung mit einer politisch-strategischen Kritik. (e) **Emotional-literacy-intervention** — Reeves kritisiert den individualistischen Reflex der klinischen Konvergenz: Reform der STRUKTUREN, nicht der Männer. ' +
		'**METHODOLOGISCHE LEKTION**: Reeves ist die erste empirisch robuste externe Quelle, die die klinisch-konvergenten Autoren der Bibliothek (Pollack, Kindlon/Thompson, Süfke, hooks, Urwin) mit unabhängigen Datenquellen (Brookings-Meta-Analysen, Regierungsstatistiken, Peer-Review-Studien) abgleichen kann. Wo Reeves mit den anderen übereinstimmt (Bildungsgap, Deaths of Despair, Dad Deficit), ist das eine ECHTE unabhängige Validierung. Wo Reeves abweicht (distinktive Vater-Beiträge, Brain-Timing als Mechanismus, Ablehnung von „toxic masculinity”), ist es diagnostisch wertvoll, weil es zeigt, wo die klinische Konvergenz über ihre Daten hinausgeht. ' +
		'Wichtigste Lektion, die auch nach Reeves gilt: Konvergenz zwischen klinischen Autor:innen ist oft ein Echo derselben theoretischen Ahnenlinie (Rogers, Chodorow, Real, Connell, David & Brannon). Sie repliziert sich, weil sie denselben Ursprung hat. Nur die Konvergenzen, die durch unabhängige empirische Quellen gestützt werden (wie Reeves\' Brookings-Daten), können als robust gelten. Wer die Konvergenz als „13 Bücher sagen dasselbe, also stimmt es” liest, fällt auf eine Filterblase der klinischen Tradition herein. ' +
		'**UPDATE NACH GALLOWAY 2025 (Notes on Being a Man)**: Galloway ist der umgekehrte Fall zu Reeves — keine neue empirische Quelle, sondern ein MEMOIR-DATENPUNKT (n=1), der die klinische Konvergenz aus der Innenperspektive bestätigt: Maske/Imposter, verdeckte Depression („I felt nothing“), Wut-Trichter (Bill Burr: „angry… or fine“), 16 Jahre Alexithymie, Vater-Hunger, Therapie-Vermeidung — alles in der ersten Person, während er das Vokabular der klinischen Tradition („toxic masculinity“) lautstark verwirft. Drei neue Konvergenzen kommen durch ihn ins Raster: die Dopamin-Ökonomie (Sax 2007 → Galloway 2025, dieselbe Kausalstory über zwei Produktgenerationen), Porn-ersetzt-Mating (Sax → Galloway, kausal ungetestet) und Prosoziale Männlichkeit als Zielbild (Reeves + Galloway + hooks + Dittmann + Süfke — die lagerübergreifendste normative Konvergenz des Korpus). Methodisch gilt: Galloways Statistiken sind fast vollständig aus dem Reeves/AIBM-Ökosystem gespeist und zählen daher NICHT als unabhängige Validierung — sein eigenständiger Beitrag ist die Innenansicht, nicht die Evidenz.'
};
