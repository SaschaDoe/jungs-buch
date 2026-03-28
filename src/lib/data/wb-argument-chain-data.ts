// wb-argument-chain-data.ts
// The argument chain for "The Wonder of Boys" (Michael Gurian), with evidence ratings per link.

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

/** Node positions for flowchart layout (x/y as percentages of container) */
export const nodePositions: Record<string, { x: number; y: number; row: number }> = {
	'biology-prime-mover':       { x: 42, y: 3, row: 0 },
	'testosterone-drives':       { x: 12, y: 14, row: 1 },
	'brain-differences':         { x: 42, y: 14, row: 1 },
	'feelings-eight-ways':       { x: 72, y: 14, row: 1 },
	'male-culture-immutable':    { x: 20, y: 26, row: 2 },
	'seven-principles':          { x: 60, y: 26, row: 2 },
	'three-families':            { x: 12, y: 38, row: 3 },
	'divorce-delinquency':       { x: 42, y: 38, row: 3 },
	'mother-separation':         { x: 72, y: 38, row: 3 },
	'fathers-essential':         { x: 20, y: 50, row: 4 },
	'initiation-manhood':        { x: 60, y: 50, row: 4 },
	'discipline-systematic':     { x: 12, y: 62, row: 5 },
	'spiritual-education':       { x: 36, y: 62, row: 5 },
	'sex-education-male':        { x: 60, y: 62, row: 5 },
	'sacred-role-husbandry':     { x: 84, y: 62, row: 5 },
};

export const rowLabels = [
	'Foundational Claim',
	'Biological Mechanisms',
	'Culture From Biology',
	'Family Structure',
	'Male Development Needs',
	'Prescriptive Framework'
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
	// ======== C1 ========
	{
		id: 'biology-prime-mover',
		step: 1,
		type: 'premise',
		claim: 'Boys are predominantly shaped by testosterone and male brain structure rather than by socialization. Biology is "proclivity," not destiny, but it is the primary driver of male behavior.',
		shortLabel: 'Biology is the prime mover',
		evidence: 'Benbow & Stanley (Johns Hopkins) 100,000-subject study; Roger Gorski brain structure research; Rubin Gur brain-scan studies; Laurie Allen (UCLA) seven structural brain differences; serotonin level differences; testosterone\'s role from fetal development onward.',
		status: 'yellow',
		explanation:
			'Individual studies from the 1980s-90s are cited, some without full publication details. The Benbow/Stanley study is real but ' +
			'the quote ("fifteen years of looking for an environmental explanation and getting zero results") is a simplification of complex findings. ' +
			'Modern neuroscience emphasizes brain mosaics and neuroplasticity rather than categorical sex differences. The foundational claim ' +
			'is overstated relative to the evidence, which shows averages with large overlap.',
		dependsOn: [],
		collapseRisk: 'High. If biology is not the overwhelming "prime mover" but rather one factor among many (as current interactionist science suggests), the entire downstream argument structure weakens.',
		bookLocations: [
			{ pages: '~pp. 24-51', chapter: 'Ch. 1: Where It All Begins', context: 'Biological foundation: testosterone, brain structure, serotonin, evolutionary origins' }
		],
		evidenceRefs: [
			{ label: 'Benbow & Stanley (Johns Hopkins)', authorSearch: 'Benbow' },
			{ label: 'Roger Gorski (brain structure)', authorSearch: 'Gorski' },
			{ label: 'Rubin Gur (brain scans)', authorSearch: 'Gur' },
			{ label: 'Laurie Allen (UCLA)', authorSearch: 'Allen' }
		]
	},

	// ======== C2 ========
	{
		id: 'testosterone-drives',
		step: 2,
		type: 'causal',
		claim: 'Testosterone creates predictable behavioral patterns in boys: aggression, physical risk-taking, independence-seeking, and a characteristic tension-buildup/quick-release cycle.',
		shortLabel: 'Testosterone drives aggression and tension-release',
		evidence: 'Studies of six-month-old infants and string-pulling behavior; anecdotes from mothers; studies of women injected with androgenic hormones showing increased aggression; Aaron Kipnis on aggression vs. violence; Don and Jeanne Elium on the male tension-release cycle.',
		status: 'yellow',
		explanation:
			'The basic testosterone-aggression link is well-established, but the infant string-pulling study is not fully cited. Much evidence ' +
			'is anecdotal. The claim that testosterone increases in puberty are "ten to twenty times more than girls" is stated without citation. ' +
			'Modern research shows testosterone facilitates status-seeking rather than aggression specifically, and the behavioral outcome depends on context.',
		dependsOn: ['biology-prime-mover'],
		collapseRisk: 'Moderate. The basic hormonal claim is supported but the specific behavioral predictions (tension-release cycle, predictable aggression patterns) are the author\'s framework, not empirically validated as described.',
		bookLocations: [
			{ pages: '~pp. 27-34', chapter: 'Ch. 1: Where It All Begins', context: 'Testosterone, aggression, independence, tension-release patterns' }
		],
		evidenceRefs: [
			{ label: 'Aaron Kipnis (aggression vs. violence)', authorSearch: 'Kipnis' },
			{ label: 'Elium (tension-release cycle)', authorSearch: 'Elium' }
		]
	},

	// ======== C3 ========
	{
		id: 'brain-differences',
		step: 3,
		type: 'premise',
		claim: 'The male brain is 10-15% larger, has a smaller corpus callosum (less cross-hemispheric communication), is more right-hemisphere dominant (spatial), less verbal, processes less sensory data, and operates in a more task-focused "on/off" mode.',
		shortLabel: 'Male/female brains structurally different',
		evidence: 'Laurie Allen (UCLA) seven structural differences; Moore and Frost on corpus callosum; Rubin Gur (U Penn) brain-scan studies; claims about hearing differences, visual processing, reading difficulties (boys have 3x more), math advantages.',
		status: 'red',
		explanation:
			'Brain scan research from the era is real but many of these findings have been significantly nuanced or contested by subsequent ' +
			'meta-analyses. The corpus callosum claim -- central to the argument -- was substantially undermined by Bishop & Wahlsten (1997). ' +
			'Joel et al. (2015) showed brains are mosaics rather than cleanly dimorphic. Within-sex variation exceeds between-sex variation ' +
			'for most measures. The book presents categorical differences where the science shows overlapping distributions.',
		dependsOn: ['biology-prime-mover'],
		collapseRisk: 'High. The corpus callosum claim is contradicted and the categorical brain-difference framing is not supported by current neuroscience. Claims C4, C5, and downstream prescriptions all depend on this link.',
		bookLocations: [
			{ pages: '~pp. 34-42', chapter: 'Ch. 1: Where It All Begins', context: 'Brain size, corpus callosum, hemispheric specialization, sensory processing' }
		],
		evidenceRefs: [
			{ label: 'Laurie Allen (UCLA, seven differences)', authorSearch: 'Allen' },
			{ label: 'Rubin Gur (U Penn brain scans)', authorSearch: 'Gur' },
			{ label: 'Moore and Frost (corpus callosum)', authorSearch: 'Moore' }
		]
	},

	// ======== C4 ========
	{
		id: 'feelings-eight-ways',
		step: 4,
		type: 'theory',
		claim: 'Boys have eight characteristic methods of processing feelings (action-release, suppression, displacement, physical expression, going-into-the-cave, talking, problem-solving, crying) that differ from girls due to brain structure.',
		shortLabel: 'Eight male emotional processing methods',
		evidence: 'Clinical anecdotes from the author\'s therapy practice; Jennifer James study claiming males take up to seven hours longer to process "hard emotive data"; reference to smaller corpus callosum creating difficulty connecting feeling to verbal expression.',
		status: 'untestable',
		explanation:
			'The eight methods are the author\'s clinical taxonomy, not derived from controlled research. The Jennifer James "seven hours" ' +
			'claim is cited informally without publication details. The list conflates common observations with neuroscientific explanations. ' +
			'As a clinical heuristic it may be useful; as a scientific claim about biologically determined emotional processing it is not falsifiable.',
		dependsOn: ['biology-prime-mover', 'brain-differences'],
		collapseRisk: 'Moderate. The framework is the author\'s synthesis rather than empirically tested. It depends on the corpus callosum claim (C3), which is contradicted.',
		bookLocations: [
			{ pages: '~pp. 45-50', chapter: 'Ch. 1: Where It All Begins', context: 'Eight methods of male emotional processing, Jennifer James study' }
		],
		evidenceRefs: [
			{ label: 'Jennifer James (emotional processing)', authorSearch: 'James' }
		]
	},

	// ======== C5 ========
	{
		id: 'male-culture-immutable',
		step: 5,
		type: 'theory',
		claim: 'Boy culture -- its competitiveness, hierarchy, aggression, group orientation, emphasis on performance -- is the natural expression of male biology. Attempts to change the core personality of male culture will fail and are counterproductive.',
		shortLabel: 'Male culture is biologically immutable',
		evidence: 'Evolutionary argument (hunting, warfare, group competition over millions of years); cross-cultural observations from the author\'s travels; references to attempts to get boys to play with dolls failing; anecdotes from parents.',
		status: 'untestable',
		explanation:
			'This is primarily an evolutionary psychology narrative without controlled evidence that culture "cannot" change. ' +
			'The claim that male culture "never changes significantly" is an unfalsifiable generalization. Historical evidence shows male behavioral norms ' +
			'have changed dramatically across cultures and centuries. The individual cross-cultural examples are genuine but selectively chosen.',
		dependsOn: ['biology-prime-mover', 'testosterone-drives', 'brain-differences'],
		collapseRisk: 'High. If male culture is more malleable than claimed (as historical and cross-cultural evidence suggests), the prescriptive recommendations to "work with" rather than "change" male nature lose their justification.',
		bookLocations: [
			{ pages: '~pp. 52-87', chapter: 'Ch. 2: The Culture Boys Create', context: 'Evolutionary origins, cross-cultural male culture, immutability of male behavior' }
		],
		evidenceRefs: [
			{ label: 'Evolutionary psychology narrative', authorSearch: 'evolution' }
		]
	},

	// ======== C6 ========
	{
		id: 'seven-principles',
		step: 6,
		type: 'observation',
		claim: 'Male culture is organized around seven core principles: (1) competition/performance, (2) task-specific empathy, (3) large-group preference, (4) independence, (5) personal sacrifice for the collective, (6) male role models, (7) sports as life structure.',
		shortLabel: 'Seven principles of boy culture',
		evidence: 'Deborah Tannen\'s linguistic research; Victor Turner\'s Ndembu anthropological studies; Eleanor Maccoby\'s cross-gender empathy studies; uncited studies on sports and drug use; anecdotes and clinical observations.',
		status: 'yellow',
		explanation:
			'Moderate support for individual elements: Tannen, Turner, and Maccoby are reputable researchers with well-replicated findings. ' +
			'However, the seven-principle framework as a whole is the author\'s synthesis, not an empirically tested model. The claim that boys who play ' +
			'organized sports are less likely to use drugs or join gangs is stated without citation. The framework mixes well-supported individual findings ' +
			'with the author\'s interpretive structure.',
		dependsOn: ['biology-prime-mover', 'testosterone-drives', 'brain-differences', 'male-culture-immutable'],
		collapseRisk: 'Moderate. Individual elements are supported but the overall framework is the author\'s construction, and alternative organizing principles could fit the same evidence.',
		bookLocations: [
			{ pages: '~pp. 55-87', chapter: 'Ch. 2: The Culture Boys Create', context: 'Competition, empathy, groups, independence, sacrifice, role models, sports' }
		],
		evidenceRefs: [
			{ label: 'Deborah Tannen (linguistics)', authorSearch: 'Tannen' },
			{ label: 'Victor Turner (Ndembu)', authorSearch: 'Turner' },
			{ label: 'Eleanor Maccoby (gender interaction)', authorSearch: 'Maccoby' }
		]
	},

	// ======== C7 ========
	{
		id: 'three-families',
		step: 7,
		type: 'theory',
		claim: 'The nuclear family alone cannot raise boys successfully. Boys need three families: (1) birth/adoptive parents, (2) extended family and mentors, and (3) culture/community. The breakdown of this system is responsible for many of boys\' current problems.',
		shortLabel: 'Boys need three families',
		evidence: 'Cross-cultural observations (India, Israel/kibbutz, Native American, Turkey); Kurt Vonnegut quote; Hawaiian ho\'okama, Mexican-American padrinos; WrapAround Care; juvenile delinquency statistics; corporate child-care (IBM, AT&T); University of Colorado/UCLA/UNC/Yale daycare study.',
		status: 'yellow',
		explanation:
			'Moderate support for the general principle that community support helps children; weak support for the specific "three families" framework as a tested model. ' +
			'Cross-cultural comparisons are informal observations, not controlled studies. The daycare studies are real but do not validate the ' +
			'three-family model specifically. The juvenile delinquency statistics are correlational and confounded by socioeconomic factors.',
		dependsOn: ['male-culture-immutable', 'seven-principles'],
		collapseRisk: 'Moderate. The general principle is reasonable but the specific "three families" framework has not been empirically tested as a unified model.',
		bookLocations: [
			{ pages: '~pp. 88-125', chapter: 'Ch. 3: Boys Need a Tribe', context: 'Three-family model, cross-cultural examples, daycare, community programs' }
		],
		evidenceRefs: [
			{ label: 'Daycare study (Colorado/UCLA/UNC/Yale)', authorSearch: 'daycare' },
			{ label: 'Cross-cultural observations', authorSearch: 'kibbutz' }
		]
	},

	// ======== C8 ========
	{
		id: 'divorce-delinquency',
		step: 8,
		type: 'observation',
		claim: 'Divorce and single mothering are at least "correlates to crime among males." Two-thirds of violent crime is committed by sons of divorce. The majority of juvenile delinquent males are raised by single mothers.',
		shortLabel: 'Divorce correlates with male delinquency',
		evidence: 'Judith Wallerstein\'s 24-year divorce study; juvenile detention officer testimony (90% from single-parent homes); Pete du Pont statistics (60% of rapists, 72% of adolescent murderers, 70% of long-term inmates without fathers); Bureau of Justice Statistics.',
		status: 'yellow',
		explanation:
			'The correlation between fatherlessness and crime is real but heavily confounded by poverty, race, education, and other socioeconomic factors. ' +
			'Gurian notes these are "correlates" not causes but the framing strongly implies causation. Wallerstein\'s study has been criticized for methodological ' +
			'issues (small sample, no control group, selection bias). Hetherington\'s larger studies found most children of divorce adjust well.',
		dependsOn: ['three-families'],
		collapseRisk: 'Moderate. The correlation is real; the causal interpretation is contested. If poverty rather than father absence is the primary driver, the prescriptive implications change significantly.',
		bookLocations: [
			{ pages: '~pp. 96-97, 130, 155-160', chapter: 'Ch. 3, 4, 5', context: 'Divorce effects, fatherlessness statistics, juvenile delinquency' }
		],
		evidenceRefs: [
			{ label: 'Judith Wallerstein (divorce study)', authorSearch: 'Wallerstein' },
			{ label: 'Pete du Pont (fatherlessness stats)', authorSearch: 'du Pont' },
			{ label: 'Bureau of Justice Statistics', authorSearch: 'Bureau of Justice' }
		]
	},

	// ======== C9 ========
	{
		id: 'mother-separation',
		step: 9,
		type: 'causal',
		claim: 'In the second decade of life, boys must psychologically separate from their mothers. Mothers who cannot let go risk "impingement" or "enmeshment" that damages boys\' ability to form healthy adult relationships.',
		shortLabel: 'Boys must separate from mothers',
		evidence: 'Clinical case studies (Jake, Tim, Jared, Lane); Grimm\'s fairy tale "The Shroud" as psychological metaphor; Olga Silverstein; author\'s clinical observations; physical abuse statistics (boys more likely to be abused, most often by mothers).',
		status: 'yellow',
		explanation:
			'Moderate support for the general principle of individuation, which is broadly supported in developmental psychology. ' +
			'However, the specific claims about mothers as the primary source of male relationship dysfunction are weakly supported and risk mother-blaming. ' +
			'The evidence is primarily clinical anecdotes and fairy-tale interpretation, not controlled research. The framing places disproportionate ' +
			'responsibility on mothers.',
		dependsOn: ['biology-prime-mover', 'three-families'],
		collapseRisk: 'Moderate. The individuation principle is sound but the mother-blaming framing is not well-supported by systematic research.',
		bookLocations: [
			{ pages: '~pp. 126-150', chapter: 'Ch. 4: Love You Forever', context: 'Mother-son separation, impingement, enmeshment, abuse statistics' }
		],
		evidenceRefs: [
			{ label: 'Olga Silverstein (mother-son)', authorSearch: 'Silverstein' }
		]
	},

	// ======== C10 ========
	{
		id: 'fathers-essential',
		step: 10,
		type: 'causal',
		claim: 'Boys cannot become healthy men without male role models, particularly fathers and mentors. The "prince and king" relationship is essential. Fathers must "name the son\'s emotional destiny." Male kinship systems must be rebuilt.',
		shortLabel: 'Fathers and mentors essential',
		evidence: 'David Blankenhorn\'s Fatherless in America; Pete du Pont statistics; The Lion King metaphor; Robert Peck\'s The Day No Pigs Would Die; studies showing infants recognize father\'s voice at 14 days; author\'s clinical cases (Wayne and Mick).',
		status: 'yellow',
		explanation:
			'The correlation between father absence and negative outcomes is well-documented. The prescriptive elements (men\'s groups, ' +
			'mentoring, "naming destiny") are the author\'s framework rather than empirically tested interventions. The metaphorical analysis ' +
			'(Lion King, fairy tales) is interpretive rather than evidentiary. The specific claim that fathers must "name" the son\'s emotional destiny ' +
			'is a therapeutic concept, not an empirically tested mechanism.',
		dependsOn: ['three-families', 'divorce-delinquency', 'mother-separation'],
		collapseRisk: 'Moderate. Father involvement is beneficial (well-documented), but the specific prescriptive framework (prince/king, naming destiny) is the author\'s construction.',
		bookLocations: [
			{ pages: '~pp. 151-176', chapter: 'Ch. 5: From Daddy to Dad', context: 'Prince and king, father-son bond, male kinship, men\'s groups' }
		],
		evidenceRefs: [
			{ label: 'David Blankenhorn (Fatherless in America)', authorSearch: 'Blankenhorn' },
			{ label: 'Infant voice recognition studies', authorSearch: 'voice recognition' }
		]
	},

	// ======== C11 ========
	{
		id: 'initiation-manhood',
		step: 11,
		type: 'theory',
		claim: 'Adolescence should be treated as a "second birth" requiring structured initiation by male elders. Without initiation, boys become antisocial, unable to commit, spiritually empty. The hero\'s journey is the template for healthy male adolescence.',
		shortLabel: 'Boys need formal initiation into manhood',
		evidence: 'Cross-cultural examples: Australian aboriginal rituals, Shavante anger ceremonies, Native American Vision Quests, Kurdish mothers\' standards; Jack and the Beanstalk as initiation template; David Edeli\'s testimony; Bernard Weiner\'s Boy Into Man; Ropes Course experiences; sports as partial initiation.',
		status: 'untestable',
		explanation:
			'Rich in anthropological examples but these are descriptive, not evidence that replicating tribal initiation in modern contexts ' +
			'produces specific outcomes. The Jack and the Beanstalk analysis is interpretive mythology, not evidence. No controlled studies compare boys ' +
			'who undergo structured initiation with those who do not. The claim that boys without initiation become "antisocial" or "spiritually empty" ' +
			'is a sweeping generalization that cannot be tested.',
		dependsOn: ['biology-prime-mover', 'male-culture-immutable', 'three-families', 'fathers-essential'],
		collapseRisk: 'High for the specific claim. The anthropological descriptions are legitimate, but the causal-prescriptive claim that modern boys need replicated tribal initiation is untestable.',
		bookLocations: [
			{ pages: '~pp. 177-221', chapter: 'Ch. 6: A Boy\'s Second Birth', context: 'Initiation, hero\'s journey, cross-cultural rites, mentoring' }
		],
		evidenceRefs: [
			{ label: 'Bernard Weiner (Boy Into Man)', authorSearch: 'Weiner' },
			{ label: 'David Edeli (initiation testimony)', authorSearch: 'Edeli' }
		]
	},

	// ======== C12 ========
	{
		id: 'discipline-systematic',
		step: 12,
		type: 'solution',
		claim: 'Discipline for boys must be systematic, operating through ten elements: consistency, leadership, respect, variety, recrimination, spiritual context, choices, respect for feelings, authoritative structure, and early/ongoing/adaptive use.',
		shortLabel: 'Ten-element discipline system',
		evidence: 'Kohlberg\'s moral development stages; Piaget\'s moral development theory; Shavante disciplinary traditions; author\'s clinical and workshop observations; anecdotes from parents and teachers.',
		status: 'yellow',
		explanation:
			'Moderate support from the Kohlberg/Piaget framework, which is well-established developmental psychology. However, the ten-element system ' +
			'is the author\'s synthesis, not empirically tested as a package. The claim that boys need "more discipline than girls" on average is stated ' +
			'as clinical observation without controlled evidence. Authoritative parenting is well-supported in the literature, but the specific ' +
			'ten-element formulation is original to this author.',
		dependsOn: ['biology-prime-mover', 'three-families', 'initiation-manhood'],
		collapseRisk: 'Low to moderate. Authoritative discipline is well-supported; the specific ten-element framework adds the author\'s clinical synthesis.',
		bookLocations: [
			{ pages: '~pp. 222-266', chapter: 'Ch. 7: Teaching Boys Discipline', context: 'Ten elements, Kohlberg stages, Shavante traditions, developmental stages' }
		],
		evidenceRefs: [
			{ label: 'Kohlberg (moral development)', authorSearch: 'Kohlberg' },
			{ label: 'Piaget (moral development)', authorSearch: 'Piaget' }
		]
	},

	// ======== C13 ========
	{
		id: 'spiritual-education',
		step: 13,
		type: 'solution',
		claim: 'Boys must be taught spiritual principles (Who created the world, What life is made of, Where they belong, When to live in the Now, How creation works, Why they exist) and spiritual practices. Without spiritual grounding, boys become antisocial and purposeless.',
		shortLabel: 'Boys need spiritual education',
		evidence: 'Thomas Moore\'s Care of the Soul; Indian Brahmin parable; author\'s own spiritual framework from multiple religions; Dan Wakefield on creativity; argument that science and religion are "potentially one and the same thing."',
		status: 'untestable',
		explanation:
			'These are fundamentally normative and philosophical claims about what boys "should" learn, not empirical claims that can be verified or falsified. ' +
			'There is some evidence that religious/spiritual involvement correlates with positive youth outcomes, but the specific Who/What/Where/When/How/Why ' +
			'framework is the author\'s construction. The claim that science and religion are "one and the same" is a philosophical assertion.',
		dependsOn: ['three-families', 'initiation-manhood', 'discipline-systematic'],
		collapseRisk: 'Low for the general principle that meaning/purpose matters; untestable for the specific spiritual framework proposed.',
		bookLocations: [
			{ pages: '~pp. 258-305', chapter: 'Ch. 8: Teaching Boys Values, Morality, and Spirituality', context: 'Spiritual principles, practices, values education, moral development' }
		],
		evidenceRefs: [
			{ label: 'Thomas Moore (Care of the Soul)', authorSearch: 'Moore' },
			{ label: 'Dan Wakefield (creativity)', authorSearch: 'Wakefield' }
		]
	},

	// ======== C14 ========
	{
		id: 'sex-education-male',
		step: 14,
		type: 'solution',
		claim: 'Boys experience sex differently than girls (more driven by curiosity/physicality, less by emotional attachment). Education must address sex, love, and commitment as three distinct elements and integrate them. Current approaches fail boys.',
		shortLabel: 'Male-specific sex education needed',
		evidence: 'Alan Guttmacher Institute 1994 study (51% males: curiosity; 48% females: affection); survey of 3,432 adults; Barbara Dafoe Whitehead\'s "The Failure of Sex Education" in Atlantic Monthly; Robert Francoeur on brain structure and sexuality; tribal initiation practices (African, Australian).',
		status: 'yellow',
		explanation:
			'Moderate support for the empirical claims about sex differences in motivation (Guttmacher data is credible). The prescriptive ' +
			'three-element teaching model (sex, love, commitment as distinct components) is the author\'s framework, not empirically tested. ' +
			'The tribal initiation examples are anthropologically interesting but do not constitute evidence for the proposed educational approach. ' +
			'Survey data may reflect cultural scripts as much as biological differences.',
		dependsOn: ['biology-prime-mover', 'testosterone-drives', 'brain-differences', 'initiation-manhood'],
		collapseRisk: 'Moderate. The sex-difference data is credible but the educational framework is untested.',
		bookLocations: [
			{ pages: '~pp. 306-340', chapter: 'Ch. 9: Teaching Boys about Sex and Love', context: 'Sex differences in motivation, three-element model, tribal practices' }
		],
		evidenceRefs: [
			{ label: 'Alan Guttmacher Institute (1994)', authorSearch: 'Guttmacher' },
			{ label: 'Barbara Dafoe Whitehead (sex education)', authorSearch: 'Whitehead' },
			{ label: 'Robert Francoeur (brain and sexuality)', authorSearch: 'Francoeur' }
		]
	},

	// ======== C15 ========
	{
		id: 'sacred-role-husbandry',
		step: 15,
		type: 'solution',
		claim: 'Boys need a clearly defined male role to give their lives meaning. The proposed role is "husbandry" -- being husbands of families, communities, culture, earth, and their own life journey. Ten principles define this sacred male role.',
		shortLabel: '"Husbandry" as the sacred male role',
		evidence: 'Shavante role training beginning at age four; Stephen Rose\'s 22-year economic study showing male income decline; historical provider/protector role argument; author\'s framework derived from tribal cultures and contemporary dialogue.',
		status: 'untestable',
		explanation:
			'This is the author\'s proposed framework and normative argument, not an empirically testable claim. The economic data (Rose study) is real ' +
			'but used selectively to support the need for a new male role. The claim that boys need a "sacred role" is a values argument, not a scientific one. ' +
			'The ten principles are reasonable aspirational goals but have not been tested as an intervention. The concept of "husbandry" risks ' +
			'reinforcing traditional gender roles while claiming to transcend them.',
		dependsOn: ['biology-prime-mover', 'male-culture-immutable', 'three-families', 'fathers-essential', 'initiation-manhood'],
		collapseRisk: 'High for the specific framework. The general observation that purposelessness harms boys is plausible, but the specific "husbandry" model is the author\'s normative proposal, not an evidence-based intervention.',
		bookLocations: [
			{ pages: '~pp. 340-369', chapter: 'Ch. 10: Teaching Boys a Healthy Male Role in Life', context: 'Husbandry, ten principles, sacred role, Shavante training, economic data' }
		],
		evidenceRefs: [
			{ label: 'Stephen Rose (male income decline)', authorSearch: 'Rose' },
			{ label: 'Shavante role training', authorSearch: 'Shavante' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	// Start from 'sacred-role-husbandry' (the final prescriptive synthesis) and trace back through weakest dependencies
	const target = chain.find((c) => c.id === 'sacred-role-husbandry')!;
	const path: ChainLink[] = [target];

	function findWeakestDep(link: ChainLink): ChainLink | null {
		if (link.dependsOn.length === 0) return null;
		const deps = link.dependsOn.map((id) => chain.find((c) => c.id === id)!);
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
		'The argument chain for "The Wonder of Boys" follows a top-down structure: biology determines behavior (C1), which creates immutable male culture (C5), ' +
		'which requires specific family and community structures (C7), which in turn dictate prescriptive approaches to discipline, spirituality, sexuality, and male identity (C12-C15). ' +
		'The chain\'s critical weakness is its foundation: the 1990s neuroscience on which the biology-as-prime-mover claim rests has aged poorly. ' +
		'The corpus callosum claim (C3) is contradicted by meta-analysis, and the categorical brain-difference framing has been superseded by mosaic models. ' +
		'The testosterone-aggression link (C2) is real but oversimplified. The claim that male culture is biologically immutable (C5) is unfalsifiable. ' +
		'The middle layer -- three-family model, divorce correlations, father absence -- draws on real correlational data but conflates correlation with causation ' +
		'and is heavily confounded by socioeconomic factors. The prescriptive recommendations (initiation, discipline system, husbandry role) are ' +
		'the author\'s creative synthesis of anthropological observation and clinical experience, not empirically tested interventions. ' +
		'The book is most valuable as a call for engaged, intentional parenting of boys and for community support structures. It is least reliable ' +
		'when presenting contested neuroscience as settled fact and when claiming that male nature is essentially fixed.'
};
