// wb-evidence-audit-data.ts
// Cross-referencing claims in "The Wonder of Boys" (Michael Gurian) with replication status and methodological critiques

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
		claim: 'Serotonin levels differ between males and females; males tend to have lower serotonin turnover, which correlates with impulsivity and aggression.',
		source: 'Neurochemistry research on sex differences in serotonin synthesis rates and receptor densities.',
		pages: 'Ch. 1, ~pp. 24-51',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Well-supported finding in neurochemistry; relationship to aggression is more complex than presented',
		detail:
			'This is among the more robust neuroscience findings cited in the book. Sex differences in serotonin systems are documented across ' +
			'multiple studies. However, the relationship between serotonin and aggression is more complex than Gurian presents -- serotonin modulates ' +
			'impulsivity broadly, not aggression specifically, and the behavioral implications depend on context.'
	},
	{
		claim: 'Testosterone is reliably linked to aggression and dominance behavior in both animal and human studies. The relationship is bidirectional: winning increases testosterone, and testosterone increases competitive behavior.',
		source: 'Endocrinology and behavioral research on testosterone-aggression links.',
		pages: 'Ch. 1, ~pp. 27-34',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Well-established basic finding; nuances about context-dependence are omitted',
		detail:
			'The basic testosterone-aggression link is well-established in the literature. However, modern research shows testosterone ' +
			'facilitates status-seeking behavior, which can be prosocial or antisocial depending on context. Gurian\'s framing that boys are ' +
			'"dominated by testosterone" and that this "programs" aggression oversimplifies. The claim that pubertal testosterone increases ' +
			'are "ten to twenty times more than girls" is stated without citation.'
	},
	{
		claim: 'The Alan Guttmacher Institute 1994 study found sex differences in reasons for first sexual encounter: 51% of males cited curiosity, 48% of females cited affection.',
		source: 'Alan Guttmacher Institute 1994 study on teen sexual behavior.',
		pages: 'Ch. 9, ~pp. 306-340',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Reputable demographic data from a credible research institute',
		detail:
			'These are straightforward demographic statistics from a credible source, applicable to the mid-1990s period. ' +
			'The sex differences in stated motivation for first sexual encounters are well-documented. However, survey responses about motivation ' +
			'are subject to social desirability bias and may reflect cultural scripts as much as biological differences.'
	},
	{
		claim: 'Kohlberg\'s six stages of moral development describe a progression from pre-conventional through conventional to post-conventional morality, broadly validated in developmental psychology.',
		source: 'Kohlberg\'s moral development framework; Piaget\'s moral development theory.',
		pages: 'Ch. 7-8, ~pp. 222-305',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Well-established developmental psychology framework, though critiqued for cultural and gender bias',
		detail:
			'Kohlberg\'s framework is well-established in developmental psychology. The six stages have been broadly validated, though the framework ' +
			'has been critiqued notably by Carol Gilligan for being developed primarily on male subjects and for cultural bias. Gurian applies it ' +
			'specifically to boys\' discipline, which is a reasonable application of the framework.'
	},
	{
		claim: 'Eleanor Maccoby\'s research at Stanford found differences in how boys and girls interact in same-sex vs. cross-sex contexts, including gender-segregated play patterns.',
		source: 'Eleanor Maccoby, Stanford developmental psychology research.',
		pages: 'Ch. 2, ~pp. 55-87',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Well-replicated findings from a highly respected developmental psychologist',
		detail:
			'Maccoby is a highly respected developmental psychologist and her findings on gender-segregated play and interaction styles are ' +
			'well-replicated. The observation that boys and girls self-segregate and develop different interaction styles in same-sex groups ' +
			'is robust. However, Gurian uses this to support a stronger claim -- that male culture is biologically immutable -- which goes ' +
			'beyond what Maccoby\'s research demonstrates.'
	},
	{
		claim: 'Stephen Rose\'s 22-year economic study for the National Commission for Employment Policy documented declining real earnings for many men, particularly young men and Black men, during the 1970s-1980s.',
		source: 'Stephen Rose, National Commission for Employment Policy.',
		pages: 'Ch. 10, ~pp. 340-369',
		centrality: 'minor',
		status: 'green',
		statusLabel: 'Well-documented economic data from federal commission',
		detail:
			'Economic data from the National Commission for Employment Policy. The decline in real male earnings during the 1970s-1980s is ' +
			'well-documented across multiple sources. However, Gurian uses this economic data to support his normative argument that men need ' +
			'a "sacred role" of husbandry, which is an interpretive leap from the data.'
	},

	// ============ YELLOW ============
	{
		claim: 'Benbow & Stanley\'s 100,000-subject Johns Hopkins study found no environmental explanation for sex differences in math learning; after "fifteen years of looking" they "gave up."',
		source: 'Benbow & Stanley, Johns Hopkins Study of Mathematically Precocious Youth.',
		pages: 'Ch. 1, ~pp. 24-30',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Real study, but the characterization oversimplifies complex findings',
		detail:
			'Benbow and Stanley studied mathematically precocious youth and found persistent sex differences not explained by differential course-taking. ' +
			'However, their work was more nuanced than the quote suggests; Benbow herself clarified she was not dismissing environmental factors entirely, ' +
			'only saying they were insufficient as a sole explanation. Subsequent research has shown that math gender gaps vary significantly by culture, ' +
			'suggesting environmental factors do matter substantially.'
	},
	{
		claim: 'Roger Gorski, Rubin Gur, and Laurie Allen identified structural brain differences between males and females, including hemispheric specialization, brain size differences, and seven distinct structural differences.',
		source: 'Roger Gorski (brain structure); Rubin Gur (U Penn brain scans); Laurie Allen (UCLA, seven structural differences).',
		pages: 'Ch. 1, ~pp. 34-42',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Real research from the 1980s-90s, but many findings significantly nuanced or contested by later meta-analyses',
		detail:
			'These researchers identified real differences in aggregate, but large-sample neuroimaging studies (e.g., Joel et al., 2015, PNAS) ' +
			'have since shown brains are "mosaics" of male-typical and female-typical features rather than cleanly dimorphic. The interpretation ' +
			'that "the male brain turns on like a machine to do its task, then turns off" is a significant simplification. Within-sex variation ' +
			'exceeds between-sex variation for most brain measures.'
	},
	{
		claim: 'Judith Wallerstein\'s 24-year study found lasting negative effects of divorce on children; "we didn\'t see a single child who was well adjusted."',
		source: 'Judith Wallerstein, longitudinal divorce study.',
		pages: 'Ch. 3-5, ~pp. 96-97, 130, 155-160',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Broadly supported concern, but Wallerstein\'s specific study has significant methodological limitations',
		detail:
			'Wallerstein\'s longitudinal study found lasting negative effects of divorce on children. However, the study had no control group, ' +
			'a small sample (60 families), and used a clinical (not random) sample. Hetherington\'s larger studies found most children of divorce ' +
			'(75-80%) adjust well. The finding that divorce can harm children is broadly supported, but Wallerstein\'s claim is more extreme ' +
			'than the general literature supports.'
	},
	{
		claim: 'Fatherlessness correlates with negative outcomes: 60% of rapists, 72% of adolescent murderers, and 70% of long-term prison inmates grew up without fathers; the majority of juvenile delinquent males are raised by single mothers.',
		source: 'Pete du Pont editorial; Bureau of Justice Statistics; juvenile detention officer testimony.',
		pages: 'Ch. 3-5, ~pp. 96-97, 155-160',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Real correlation, but heavily confounded by poverty, race, and other socioeconomic factors',
		detail:
			'There is a robust correlation between father absence and negative outcomes for children, especially boys. However, the specific ' +
			'statistics cited are from a Pete du Pont editorial and may reflect confounds with poverty and race. Poverty, neighborhood effects, ' +
			'and maternal stress are significant confounds. The specific statistics have been widely circulated but are difficult to trace to ' +
			'primary research. Gurian notes these are "correlates" but the framing strongly implies causation.'
	},
	{
		claim: 'Cross-cultural anthropological observations from India, Israel (kibbutz), Turkey, Native American reservations, Shavante of Brazil, Australian aboriginals, and Kurdish cultures all show structured male initiation and community child-rearing.',
		source: 'Author\'s personal cross-cultural observations; David Gilmore; Victor Turner; various anthropological sources.',
		pages: 'Ch. 2-3, 6, ~pp. 52-125, 177-221',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Genuine cultural practices, but selection of confirming cultures raises cherry-picking concerns',
		detail:
			'The author draws on personal observations and published anthropological literature. These are genuine cultural practices. ' +
			'However, these observations are informative but do not constitute controlled evidence that modern American boys would benefit ' +
			'from replicating these practices. The selection of cultures that confirm the author\'s thesis raises cherry-picking concerns. ' +
			'Cultures that challenge the thesis are not examined.'
	},
	{
		claim: 'Evolutionary psychology narrative: males developed spatial skills through hunting, females developed verbal/sensory skills through gathering; millions of years of evolution shaped male brains for competition, hierarchy, and group warfare.',
		source: 'Standard evolutionary psychology accounts; referenced throughout.',
		pages: 'Ch. 1-2, ~pp. 24-87',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Widely told narrative but speculative reconstruction; archaeological evidence suggests more flexible ancestral gender roles',
		detail:
			'The hunter-gatherer narrative is a standard evolutionary psychology account. However, it is speculative reconstruction. ' +
			'Archaeological and anthropological evidence suggests more flexible and varied gender roles in ancestral humans than the clean ' +
			'hunter/gatherer division implies. The "environment of evolutionary adaptedness" is not directly observable. Cross-cultural ' +
			'variation in gender differences in math, spatial skills, and emotional expression undermines claims of strict universality.'
	},

	// ============ RED ============
	{
		claim: 'The female corpus callosum is larger than the male corpus callosum, creating greater cross-hemispheric communication and explaining why boys have difficulty connecting feelings to verbal expression.',
		source: 'Moore and Frost; early 1980s-90s neuroscience studies.',
		pages: 'Ch. 1, ~pp. 34-42',
		centrality: 'critical',
		status: 'red',
		statusLabel: 'Contradicted by Bishop & Wahlsten (1997) meta-analysis; does not hold when controlling for brain size',
		detail:
			'Early studies (1980s-90s) suggested the corpus callosum was larger in females. However, Bishop & Wahlsten (1997) meta-analysis ' +
			'found that when controlling for brain size, the sex difference in corpus callosum size was not significant. This was one of ' +
			'the most widely cited neuroscience claims of the 1990s but has not held up well. Gurian builds significant behavioral claims ' +
			'on this now-refuted structural finding.'
	},

	// ============ UNTESTABLE ============
	{
		claim: 'Boys process feelings in eight male-specific ways (action-release, suppression, displacement, physical expression, going-into-the-cave, talking, problem-solving, crying) that differ from girls due to brain structure.',
		source: 'Author\'s clinical taxonomy; Jennifer James "seven hours" claim; general corpus callosum reference.',
		pages: 'Ch. 1, ~pp. 45-50',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Author\'s clinical taxonomy, not derived from controlled research; the eight methods are unfalsifiable as a framework',
		detail:
			'The eight methods are the author\'s clinical taxonomy, not derived from controlled research. The Jennifer James claim that ' +
			'males take up to seven hours longer than females to process "hard emotive data" is cited informally without publication details. ' +
			'The list conflates common clinical observations with neuroscientific explanations. As a clinical heuristic it may be useful; ' +
			'as a scientific claim about biologically determined emotional processing it is not testable.'
	},
	{
		claim: 'Male culture -- its competitiveness, hierarchy, aggression, group orientation -- is the natural expression of male biology and cannot be fundamentally changed; attempts to change it are counterproductive.',
		source: 'Evolutionary argument; cross-cultural observations; Deborah Tannen linguistic research.',
		pages: 'Ch. 2, ~pp. 52-87',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Unfalsifiable generalization; the claim that male culture "never changes significantly" cannot be tested',
		detail:
			'This is primarily an evolutionary psychology narrative without controlled evidence that culture "cannot" change. The claim that ' +
			'male culture "never changes significantly" is an unfalsifiable generalization. Historical evidence shows male behavioral norms ' +
			'have changed dramatically across cultures and centuries (e.g., attitudes toward violence, emotional expression, work roles). ' +
			'The individual researchers cited (Tannen, Turner, Maccoby) are reputable, but the sweeping conclusion goes far beyond their findings.'
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
		'The book is strongest when citing well-established findings in endocrinology (testosterone-aggression link, serotonin differences) ' +
		'and developmental psychology (Kohlberg\'s moral stages, Maccoby\'s play research, Guttmacher demographic data). These green-status items ' +
		'provide a legitimate foundation for discussing sex differences. However, the neuroscience claims from the 1990s have aged poorly: ' +
		'the corpus callosum difference -- a critical pillar of the argument -- has been contradicted by meta-analysis, and the brain scan studies ' +
		'are presented as showing categorical differences where the science shows overlapping distributions. The cross-cultural anthropological evidence ' +
		'is genuine but selectively chosen to confirm the thesis. The evolutionary psychology narrative and the claim that male culture cannot be ' +
		'fundamentally changed are unfalsifiable. The fatherlessness-crime correlation is real but heavily confounded. Overall, the book\'s empirical ' +
		'foundation is strongest for basic biological sex differences and weakest for the sweeping causal and prescriptive claims built on top of them.'
};
