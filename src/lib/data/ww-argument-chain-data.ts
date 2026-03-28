// ww-argument-chain-data.ts
// The argument chain for "Warriors and Worriers" (Joyce F. Benenson), with evidence ratings per link.

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
	'innate-sex-diffs':         { x: 42, y: 3, row: 0 },
	'warrior-hypothesis':       { x: 20, y: 14, row: 1 },
	'worrier-hypothesis':       { x: 64, y: 14, row: 1 },
	'boys-play-fighting':       { x: 6, y: 26, row: 2 },
	'throwing-advantage':       { x: 30, y: 26, row: 2 },
	'boys-social-fighting':     { x: 54, y: 26, row: 2 },
	'males-value-rules':        { x: 78, y: 26, row: 2 },
	'males-larger-groups':      { x: 12, y: 38, row: 3 },
	'males-cooperate-groups':   { x: 42, y: 38, row: 3 },
	'females-fear-risk':        { x: 72, y: 38, row: 3 },
	'females-indirect-aggr':    { x: 6, y: 50, row: 4 },
	'female-friendship-fragile': { x: 30, y: 50, row: 4 },
	'females-enforce-equality': { x: 54, y: 50, row: 4 },
	'mothers-primary':          { x: 78, y: 50, row: 4 },
	'women-need-assistants':    { x: 12, y: 62, row: 5 },
	'males-reconcile':          { x: 42, y: 62, row: 5 },
	'females-nonverbal':        { x: 72, y: 62, row: 5 },
};

export const rowLabels = [
	'Foundational Claim',
	'Core Hypotheses',
	'Warrior Evidence (Chapters 2-3)',
	'Group Structure & Female Fear (Chapters 3-5)',
	'Female Competition & Caregiving (Chapters 5-7)',
	'Cooperation, Reconciliation & Perception'
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
		id: 'innate-sex-diffs',
		step: 1,
		type: 'premise',
		claim: 'Sex differences in behavior have a significant innate (biological) basis. Behavioral differences appear in infancy, across diverse cultures, and in nonhuman primates. Girls with elevated prenatal testosterone display male-typical behavior.',
		shortLabel: 'Innate sex differences',
		evidence: 'Behavioral differences appear at 6-9 months (before strong socialization); cross-cultural consistency across dozens of societies (hunter-gatherer to modern); parallels in nonhuman primates (especially chimpanzees); girls with elevated prenatal testosterone show male-typical behavior; infant boys with higher testosterone look more at groups.',
		status: 'green',
		explanation:
			'Cross-cultural consistency, early onset, and primate parallels converge to suggest a significant biological component ' +
			'to behavioral sex differences. The evidence is moderate-to-strong. However, gene-environment interaction is acknowledged ' +
			'in principle by Benenson but sometimes underweighted in practice. The claim is that biology is a significant contributor, ' +
			'not the sole determinant -- which is well-supported by the evidence.',
		dependsOn: [],
		collapseRisk: 'Low-to-moderate. The existence of biological contributions to sex differences is well-established; the debate is about magnitude and the degree to which specific behaviors can be attributed to biology vs. socialization.',
		bookLocations: [
			{ pages: '~pp. 1-14 and throughout', chapter: 'Ch. 1: Introduction (and all chapters)', context: 'Foundational claim: early onset, cross-cultural, primate parallels' }
		],
		evidenceRefs: [
			{ label: 'Benenson et al. 2011 (infant looking)', authorSearch: 'Benenson 2011' },
			{ label: 'Whiting & Edwards 1988 (cross-cultural)', authorSearch: 'Whiting' },
			{ label: 'Lutchmaya et al. 2002 (prenatal testosterone)', authorSearch: 'Lutchmaya' }
		]
	},

	// ======== C2 ========
	{
		id: 'warrior-hypothesis',
		step: 2,
		type: 'theory',
		claim: 'Males evolved specialized behaviors for intergroup warfare. Play fighting, fascination with enemies and weapons, and cooperative group formation are adaptations for coalitional fighting that was prevalent enough in human prehistory to drive natural selection.',
		shortLabel: 'Warrior hypothesis',
		evidence: 'Play fighting appears very early and cross-culturally; boys show fascination with enemies/weapons from age 2-3; historical and archaeological evidence of pervasive warfare; Bowles (2009) mathematical modeling in Science suggests sufficient warfare deaths for selection; chimpanzee male coalitional killing parallels.',
		status: 'yellow',
		explanation:
			'The warfare-selection argument is supported by cross-cultural behavioral data and mathematical modeling (Bowles 2009, published in Science). ' +
			'However, the specific claim that *these particular behaviors were selected for warfare* (vs. other forms of group competition such as hunting ' +
			'or resource competition) is underdetermined. The hypothesis is plausible and well-argued but the functional attribution goes beyond ' +
			'what the behavioral evidence alone can establish.',
		dependsOn: ['innate-sex-diffs'],
		collapseRisk: 'Moderate. If the behaviors were selected for general group competition rather than specifically warfare, the "warrior" framing is misleading but the underlying behavioral observations remain valid.',
		bookLocations: [
			{ pages: '~pp. 1-14, 23-54', chapter: 'Ch. 1-2: Introduction and Enemy Fighting', context: 'Evolutionary framework: warfare selection, play fighting, enemy fascination' }
		],
		evidenceRefs: [
			{ label: 'Bowles 2009 (warfare modeling)', authorSearch: 'Bowles' },
			{ label: 'Wrangham (chimpanzee warfare)', authorSearch: 'Wrangham' }
		]
	},

	// ======== C3 ========
	{
		id: 'boys-play-fighting',
		step: 3,
		type: 'observation',
		claim: 'Boys derive innate pleasure from play fighting, targeting enemies, and competition. This appears by 6-9 months (preferential watching of hitting vs. cuddling), in spontaneous toy use reports (>50% enemy fighting), and in 90% of preschool boys\' stories involving aggressive violence.',
		shortLabel: 'Boys\' innate fighting pleasure',
		evidence: 'Benenson et al. 2011 (6-9 month olds prefer watching hitting); Plymouth toy study (>50% enemy fighting); Nicolopoulou 1997 (90% aggression in boys\' stories); boys take beads from opponents in non-competitive games; cross-cultural observations in hunter-gatherer and agricultural societies.',
		status: 'green',
		explanation:
			'The behavioral observations are strong and come from multiple convergent methods: infant looking time, spontaneous reports, ' +
			'story content analysis, and game behavior. The infant study (Benenson et al. 2011 in Cognition) is particularly compelling because ' +
			'6-9 month olds have had limited socialization. The "innate" attribution is moderate given difficulty completely ruling out early socialization, ' +
			'but the convergent evidence from multiple methods and populations is substantial.',
		dependsOn: ['innate-sex-diffs'],
		collapseRisk: 'Low for the behavioral observations. Moderate for the "innate" attribution, though early onset and cross-cultural consistency are strong indicators.',
		bookLocations: [
			{ pages: '~pp. 27-51', chapter: 'Ch. 2: Enemy Fighting', context: 'Infant studies, Plymouth toy interviews, story analyses, game behavior' }
		],
		evidenceRefs: [
			{ label: 'Benenson et al. 2011 (infant hitting preference)', authorSearch: 'Benenson 2011' },
			{ label: 'Nicolopoulou 1997 (preschool stories)', authorSearch: 'Nicolopoulou' },
			{ label: 'Benenson et al. 2008 (Plymouth toy study)', authorSearch: 'Benenson 2008' }
		]
	},

	// ======== C4 ========
	{
		id: 'throwing-advantage',
		step: 4,
		type: 'observation',
		claim: 'Males\' throwing ability shows a uniquely early and large sex difference. By age 3, boys throw farther, faster, and more accurately. This is the only physical skill with such a large early sex difference, and it increases threefold by adolescence.',
		shortLabel: 'Throwing sex difference',
		evidence: 'Thomas & French (1985) meta-analysis; found even in smallest hunter-gatherer communities (Hadza); the difference is the only physical skill showing such large early divergence.',
		status: 'green',
		explanation:
			'This is one of the most well-replicated findings in the sex differences literature. Thomas & French (1985) is a classic ' +
			'meta-analysis and the finding has been confirmed in diverse populations including small-scale hunter-gatherer societies. ' +
			'The uniquely early onset distinguishes it from other physical sex differences that emerge primarily at puberty. ' +
			'Benenson uses it to support the warfare-preparation hypothesis, though it could also be related to hunting.',
		dependsOn: ['innate-sex-diffs'],
		collapseRisk: 'Low. The throwing sex difference is extremely well-established. Only the specific functional interpretation (warfare vs. hunting vs. other) is debatable.',
		bookLocations: [
			{ pages: '~pp. 28-29', chapter: 'Ch. 2: Enemy Fighting', context: 'Meta-analytic evidence for early throwing sex difference' }
		],
		evidenceRefs: [
			{ label: 'Thomas & French 1985 (motor meta-analysis)', authorSearch: 'Thomas' }
		]
	},

	// ======== C5 ========
	{
		id: 'boys-social-fighting',
		step: 5,
		type: 'causal',
		claim: 'Boys\' social preferences serve to create effective fighting forces. Three principles: (1) boys distance from caregivers, (2) boys prefer male peers more strongly than girls prefer female peers, (3) boys select allies for physical toughness, emotional cool, self-confidence, rule-following, and expertise.',
		shortLabel: 'Social preferences for fighting forces',
		evidence: 'Whiting & Edwards 1988 (cross-cultural caregiver distancing from Kenya, Guatemala, Japan, Mexico, Philippines, hunter-gatherers); male peer preference observed in Japan, China, Bali, Aboriginal Australia, Navajo, Hopi, among blind children; Goodwin\'s Philadelphia ethnography; Benenson\'s Plymouth interviews; Adler et al. 1992 on popularity.',
		status: 'yellow',
		explanation:
			'The behavioral observations are moderate-to-strong, drawing on cross-cultural data from Whiting & Edwards (1988) and multiple ' +
			'independent ethnographies. The finding among blind children is particularly compelling for ruling out visual socialization cues. ' +
			'However, the specific "fighting force" functional interpretation is more speculative -- boys could be selecting for these traits ' +
			'for general group effectiveness rather than specifically warfare preparation.',
		dependsOn: ['innate-sex-diffs', 'warrior-hypothesis'],
		collapseRisk: 'Moderate. The behavioral observations are robust; the warfare-specific interpretation is underdetermined.',
		bookLocations: [
			{ pages: '~pp. 56-97', chapter: 'Ch. 3: Male Friends', context: 'Three principles of male social organization; cross-cultural evidence' }
		],
		evidenceRefs: [
			{ label: 'Whiting & Edwards 1988 (cross-cultural)', authorSearch: 'Whiting' },
			{ label: 'Goodwin (Philadelphia ethnography)', authorSearch: 'Goodwin' },
			{ label: 'Mesquida & Wiener 1999 (young male ratio)', authorSearch: 'Mesquida' }
		]
	},

	// ======== C6 ========
	{
		id: 'males-value-rules',
		step: 6,
		type: 'observation',
		claim: 'Males value rules more than females and create complex rule systems. Boys\' games involve more elaborate rules, last longer, and involve negotiation of disputes rather than game-ending.',
		shortLabel: 'Males value rules',
		evidence: 'Piaget (1932) Swiss boys\' marble jurisprudence; Lever (1976, 1978) boys\' playground games last longer with more rules; boys negotiate rule disputes rather than ending games; Gilligan (1982) males refer to rules more in moral reasoning; historical male-created rule-bound institutions.',
		status: 'green',
		explanation:
			'Multiple independent researchers across decades have converged on this finding: Piaget (1932), Lever (1976, 1978), and Gilligan (1982) ' +
			'all document greater male investment in formal rule systems. While the original studies are older, the convergence across researchers, ' +
			'methods, and time periods strengthens the finding. The connection to historical male-dominated rule-creating institutions provides ' +
			'additional ecological validity.',
		dependsOn: ['innate-sex-diffs'],
		collapseRisk: 'Low for the behavioral observation. The studies are old but well-replicated across researchers. The specific evolutionary interpretation is an additional layer.',
		bookLocations: [
			{ pages: '~pp. 77-82', chapter: 'Ch. 3: Male Friends', context: 'Rule systems in boys\' games; Piaget, Lever, Gilligan' }
		],
		evidenceRefs: [
			{ label: 'Piaget 1932 (marble rules)', authorSearch: 'Piaget' },
			{ label: 'Lever 1976, 1978 (playground games)', authorSearch: 'Lever' },
			{ label: 'Gilligan 1982 (moral reasoning)', authorSearch: 'Gilligan' }
		]
	},

	// ======== C7 ========
	{
		id: 'males-larger-groups',
		step: 7,
		type: 'observation',
		claim: 'Males form larger, more interconnected, hierarchically organized groups than females. Boys form one large network while girls form isolated dyads/cliques. Boys\' group structure parallels military organization.',
		shortLabel: 'Males form larger groups',
		evidence: 'Benenson (1990) classroom networks; Baines & Blatchford (2009) London 7-8 year olds show core-cluster-network structure; Savin-Williams summer camp studies; boys\' groups expand with time while girls\' break down; male babies prefer looking at groups (Benenson et al. 2004, 2007); testosterone in 3-month-old males predicts group-looking.',
		status: 'green',
		explanation:
			'Multiple convergent methods and populations support this finding. Classroom network analysis, summer camp observations, ' +
			'and infant looking-time studies all converge. The Baines & Blatchford (2009) finding of nested organizational structure is ' +
			'particularly noteworthy. The infant data (preference for looking at groups) suggests early biological predisposition. ' +
			'The military analogy is illustrative but the underlying structural observation is robust.',
		dependsOn: ['innate-sex-diffs', 'boys-social-fighting'],
		collapseRisk: 'Low for the structural observation. The military-organization analogy is suggestive but not a tested hypothesis.',
		bookLocations: [
			{ pages: '~pp. 98-126', chapter: 'Ch. 4: Organizing the Military', context: 'Classroom networks, summer camps, infant looking, group structure' }
		],
		evidenceRefs: [
			{ label: 'Benenson 1990 (classroom networks)', authorSearch: 'Benenson 1990' },
			{ label: 'Baines & Blatchford 2009 (group structure)', authorSearch: 'Baines' },
			{ label: 'Alexander et al. 2009 (infant testosterone)', authorSearch: 'Alexander' }
		]
	},

	// ======== C8 ========
	{
		id: 'males-cooperate-groups',
		step: 8,
		type: 'observation',
		claim: 'Males cooperate more effectively in groups and flexibly adjust hierarchies based on expertise. Boys perform better on tasks in groups vs. pairs, spontaneously divide into teams, and adjust leadership by context.',
		shortLabel: 'Male group cooperation',
		evidence: 'Sherif (1961) Robbers Cave experiment; Benenson & Heath (2006) 10-year-olds: boys better at word game in groups vs. pairs; Piliavin & Martin (1978) men\'s groups more task-focused; boys spontaneously divided into teams and invented competitive games (Benenson et al. 1997).',
		status: 'green',
		explanation:
			'Multiple studies converge on the finding that males cooperate effectively in larger groups with flexible hierarchies. ' +
			'Benenson & Heath (2006) provides experimental evidence that boys perform better in groups. The Sherif (1961) Robbers Cave study, ' +
			'while methodologically criticized, is consistent with the other findings. The spontaneous team formation data is from Benenson\'s ' +
			'own lab and published. The overall pattern is supported by convergent evidence despite individual study limitations.',
		dependsOn: ['boys-social-fighting', 'males-larger-groups'],
		collapseRisk: 'Low. Multiple convergent studies support the pattern even though individual studies (especially Sherif) have limitations.',
		bookLocations: [
			{ pages: '~pp. 98-126', chapter: 'Ch. 4: Organizing the Military', context: 'Robbers Cave, group vs. pair performance, spontaneous team formation' }
		],
		evidenceRefs: [
			{ label: 'Sherif 1961 (Robbers Cave)', authorSearch: 'Sherif' },
			{ label: 'Benenson & Heath 2006 (group performance)', authorSearch: 'Benenson Heath' },
			{ label: 'Benenson et al. 1997 (spontaneous teams)', authorSearch: 'Benenson 1997' }
		]
	},

	// ======== C9 ========
	{
		id: 'worrier-hypothesis',
		step: 9,
		type: 'theory',
		claim: 'Females evolved specialized behaviors for self-preservation and child-rearing. Because a mother\'s death historically meant death of dependent children, women evolved to be risk-averse, health-vigilant, and conflict-avoiding.',
		shortLabel: 'Worrier hypothesis',
		evidence: 'Female reproductive biology more complex/fragile; Hill & Hurtado 1996 and Voland 1988 showing maternal death = child death; women live longer but report more health concerns; women use healthcare more during reproductive years; anxiety/depression 2x higher for women (WHO); Campbell (1999) "Staying Alive" evolutionary model.',
		status: 'yellow',
		explanation:
			'The biological asymmetry in reproductive investment is well-established and uncontroversial. The epidemiological data on ' +
			'maternal death consequences is robust (Hill & Hurtado 1996). Campbell\'s (1999) "Staying Alive" framework is influential ' +
			'and well-regarded. However, the specific "worrier" framing -- that self-preservation behaviors are *adaptations specifically ' +
			'for keeping children alive* -- is more interpretive than the underlying data requires. Alternative framings are possible.',
		dependsOn: ['innate-sex-diffs'],
		collapseRisk: 'Moderate. The biological asymmetry and behavioral patterns are well-documented. The specific evolutionary-functional interpretation is plausible but not uniquely determined by the data.',
		bookLocations: [
			{ pages: '~pp. 129-167', chapter: 'Ch. 5: Protecting Herself', context: 'Evolutionary framework: maternal mortality, self-preservation, Campbell model' }
		],
		evidenceRefs: [
			{ label: 'Campbell 1999 (Staying Alive)', authorSearch: 'Campbell' },
			{ label: 'Hill & Hurtado 1996 (Ache life history)', authorSearch: 'Hill' },
			{ label: 'WHO data (anxiety/depression)', authorSearch: 'WHO' }
		]
	},

	// ======== C10 ========
	{
		id: 'females-fear-risk',
		step: 10,
		type: 'observation',
		claim: 'Females exhibit greater fear, risk-aversion, and health vigilance from birth. Newborn girls cry more in response to others\' crying; girls show fear earlier; girls take fewer risks across 150 studies; women have 2x PTSD rates.',
		shortLabel: 'Female fear and risk-aversion',
		evidence: 'Simner 1971, Sagi & Hoffman 1976 (newborn girls cry more); Nagy et al. 2001 (earlier fear); Byrnes et al. 1999 meta-analysis (150 studies, risk-taking); Tolin & Foa 2006 (2x PTSD); Manitoba healthcare data (women visit doctors more during reproductive years); NW China data (girls 1/3 the accident hospitalizations).',
		status: 'green',
		explanation:
			'This is one of the strongest evidence clusters in the book. The Byrnes et al. (1999) meta-analysis of 150 studies provides ' +
			'powerful quantitative support. The Tolin & Foa (2006) PTSD review synthesizes 25 years of research. The newborn crying data ' +
			'suggests very early onset. The healthcare utilization data from Manitoba is population-based. Multiple independent lines of evidence ' +
			'converge on the same pattern with minimal contradictory findings.',
		dependsOn: ['innate-sex-diffs', 'worrier-hypothesis'],
		collapseRisk: 'Low. This is among the best-supported claims in the book. The evolutionary interpretation adds a layer of speculation but the behavioral pattern is robust.',
		bookLocations: [
			{ pages: '~pp. 135-143', chapter: 'Ch. 5: Protecting Herself', context: 'Meta-analytic evidence for female risk-aversion, fear, health vigilance' }
		],
		evidenceRefs: [
			{ label: 'Byrnes et al. 1999 (risk-taking meta-analysis)', authorSearch: 'Byrnes' },
			{ label: 'Tolin & Foa 2006 (PTSD review)', authorSearch: 'Tolin' },
			{ label: 'Simner 1971 (newborn crying)', authorSearch: 'Simner' }
		]
	},

	// ======== C11 ========
	{
		id: 'females-indirect-aggr',
		step: 11,
		type: 'observation',
		claim: 'Females avoid physical aggression and use indirect competitive strategies: (1) compete discreetly and deny competing, (2) social exclusion via coalitions, (3) direct confrontation only as last resort.',
		shortLabel: 'Female indirect aggression',
		evidence: 'Daly & Wilson 1999 (>90% homicides male); Baillargeon et al. 2007 (male toddlers hit more from age 2); Burbank 1987 (women in 317 societies rarely inflict serious injury); girls take beads but look down; 6/7 girls\' play groups created exclusion plays vs. 0/7 boys\'; Goodwin 1990 (Annette clothing exclusion); Phoebe Prince suicide case.',
		status: 'green',
		explanation:
			'The sex difference in physical aggression is one of the most robust findings in behavioral science (Daly & Wilson). ' +
			'The three-strategy model is well-supported by converging qualitative and quantitative evidence. The experimental data (bead game, ' +
			'computerized exclusion game published in PLoS One) provides objective behavioral measures. The Phoebe Prince case illustrates ' +
			'real-world consequences but is anecdotal. Overall, the combination of cross-cultural homicide data, developmental observations, ' +
			'and experimental studies makes this a strong evidence cluster.',
		dependsOn: ['innate-sex-diffs', 'worrier-hypothesis'],
		collapseRisk: 'Low for the sex difference in physical aggression. Moderate for the three-strategy model, which is well-argued but based partly on qualitative evidence.',
		bookLocations: [
			{ pages: '~pp. 144-210', chapter: 'Ch. 5-6: Protecting Herself / Female Friends', context: 'Homicide data, toddler aggression, three competitive strategies, social exclusion' }
		],
		evidenceRefs: [
			{ label: 'Daly & Wilson 1999 (homicide sex ratio)', authorSearch: 'Daly' },
			{ label: 'Baillargeon et al. 2007 (toddler aggression)', authorSearch: 'Baillargeon' },
			{ label: 'Burbank 1987 (317 societies)', authorSearch: 'Burbank' },
			{ label: 'Benenson et al. 2013 (exclusion game)', authorSearch: 'Benenson 2013' }
		]
	},

	// ======== C12 ========
	{
		id: 'female-friendship-fragile',
		step: 12,
		type: 'observation',
		claim: 'Female friendships are more fragile than male friendships. At every age 10-16, girls report more friendship breakups, more causes for ending friendships, and more distress from friends\' transgressions.',
		shortLabel: 'Fragile female friendships',
		evidence: 'Benenson & Alavi (2004) more ended girl friendships; Benenson & Christakos (2003) published in Child Development; Soviet Union data (Kon & Losenkov 1978); MacEvoy & Asher (2012) girls more upset by friends\' transgressions; Benenson et al. (2009) women report more social exclusion.',
		status: 'green',
		explanation:
			'Multiple studies across multiple populations consistently show that female friendships are shorter-lived and more fragile ' +
			'than male friendships. The publication in Child Development (Benenson & Christakos 2003) is notable. The Soviet Union data ' +
			'(Kon & Losenkov 1978) provides cross-cultural support from a very different social system. The convergence across researchers, ' +
			'populations, and decades makes this a strong finding.',
		dependsOn: ['females-indirect-aggr'],
		collapseRisk: 'Low. The pattern is well-documented across multiple independent studies and populations.',
		bookLocations: [
			{ pages: '~pp. 198-210', chapter: 'Ch. 6: Female Friends', context: 'Friendship ending data across ages and cultures' }
		],
		evidenceRefs: [
			{ label: 'Benenson & Christakos 2003 (friendship endings)', authorSearch: 'Christakos' },
			{ label: 'Kon & Losenkov 1978 (Soviet data)', authorSearch: 'Kon' },
			{ label: 'MacEvoy & Asher 2012 (friendship distress)', authorSearch: 'MacEvoy' }
		]
	},

	// ======== C13 ========
	{
		id: 'females-enforce-equality',
		step: 13,
		type: 'causal',
		claim: 'Females enforce equality and punish perceived superiority among unrelated same-sex peers. Girls rate "niceness" (= not competing) as the most important quality; women believe friends would abandon them if they succeeded; women attribute success to luck more than men.',
		shortLabel: 'Females enforce equality',
		evidence: 'Benenson (1990) girls rate niceness highest; Benenson & Benarroch (1998), Benenson & Schinazi (2004) girls believe friends would abandon successful peers; egalitarian speech from toddlerhood (Goodwin 1990; Sheldon 1990); Heim et al. (2001) "dead even" coworker norm; Tracy (1991), Barash (2006), Tanenbaum (2002) women deny competing.',
		status: 'yellow',
		explanation:
			'The evidence comes from multiple convergent sources -- quantitative studies (Benenson), ethnographies (Goodwin), and clinical ' +
			'interviews (Tracy, Barash, Tanenbaum). The convergence is notable but several of the key sources are qualitative or from Benenson\'s ' +
			'own lab with relatively small samples. The clinical interview data is subject to selection and interpretation biases. ' +
			'The overall pattern is consistent and plausible but not as firmly established as the physical aggression or risk-taking findings.',
		dependsOn: ['females-indirect-aggr', 'female-friendship-fragile'],
		collapseRisk: 'Moderate. The pattern is supported by converging evidence but much of it is qualitative or small-sample.',
		bookLocations: [
			{ pages: '~pp. 174-184', chapter: 'Ch. 6: Female Friends', context: 'Equality enforcement, niceness norms, denial of competition' }
		],
		evidenceRefs: [
			{ label: 'Benenson 1990 (niceness ratings)', authorSearch: 'Benenson 1990' },
			{ label: 'Goodwin 1990 (egalitarian speech)', authorSearch: 'Goodwin' },
			{ label: 'Heim et al. 2001 (dead even)', authorSearch: 'Heim' }
		]
	},

	// ======== C14 ========
	{
		id: 'mothers-primary',
		step: 14,
		type: 'observation',
		claim: 'Mothers are universally the primary caregivers and invest more in children than fathers. Single fathers provide worse healthcare despite being wealthier; mothers spend more income on children across five countries; fathers\' investment depends on relationship with mother.',
		shortLabel: 'Mothers as primary caregivers',
		evidence: 'Konner 2010; Hewlett & Lamb 2005 (universal in hunter-gatherer societies); Brown 1991 ("universal people"); US data on single father healthcare; household expenditure studies in Brazil, Mexico, Bangladesh, UK, Canada; fathers\' investment contingent on mother-relationship; UNICEF girls\' education data.',
		status: 'green',
		explanation:
			'This is supported by an enormous body of cross-cultural and within-culture data. The universality of maternal primary caregiving ' +
			'is not controversial in anthropology. The expenditure data from five different countries with different economic systems ' +
			'strengthens the finding considerably. The single-father healthcare comparison controls for income by noting fathers are wealthier ' +
			'on average yet provide worse healthcare, isolating a care quality difference.',
		dependsOn: ['worrier-hypothesis'],
		collapseRisk: 'Low. This is among the most well-established findings cited in the book.',
		bookLocations: [
			{ pages: '~pp. 212-265', chapter: 'Ch. 7: Organizing Her Family', context: 'Cross-cultural caregiving data, expenditure studies, single parent comparisons' }
		],
		evidenceRefs: [
			{ label: 'Konner 2010 (cross-cultural caregiving)', authorSearch: 'Konner' },
			{ label: 'Brown 1991 (universal people)', authorSearch: 'Brown' },
			{ label: 'UNICEF (girls\' education)', authorSearch: 'UNICEF' }
		]
	},

	// ======== C15 ========
	{
		id: 'women-need-assistants',
		step: 15,
		type: 'causal',
		claim: 'Women require assistants (mates, grandmothers, kin) for successful child-rearing. Humans are cooperative breeders; at least one non-mother relative significantly affects child survival in traditional societies; grandmothers keep extra grandchildren alive.',
		shortLabel: 'Women need cooperative support',
		evidence: 'Hrdy 2009 (cooperative breeder framework); Sear & Mace 2008 (45 traditional societies -- at least one non-mother relative affects child survival); Lahdenpera et al. 2004 in Nature (grandmother effect); Strassmann (Dogon polygyny increases child mortality); Whiting & Edwards 1988 (girls ask for help more from age 2); women seek professional help more.',
		status: 'green',
		explanation:
			'Hrdy\'s (2009) cooperative breeding framework is well-regarded and Sear & Mace\'s (2008) review of 45 traditional societies ' +
			'provides quantitative cross-cultural support. The grandmother effect (Lahdenpera et al. 2004 in Nature) is published in the ' +
			'highest-prestige journal. The Dogon polygyny data shows the negative consequences of diluted paternal investment. ' +
			'The convergence of theoretical framework, cross-cultural review, and specific demographic studies makes this well-supported.',
		dependsOn: ['worrier-hypothesis', 'mothers-primary'],
		collapseRisk: 'Low. The cooperative breeding framework is well-supported by multiple lines of evidence.',
		bookLocations: [
			{ pages: '~pp. 235-253', chapter: 'Ch. 7: Organizing Her Family', context: 'Cooperative breeding, grandmother effect, help-seeking behavior' }
		],
		evidenceRefs: [
			{ label: 'Hrdy 2009 (cooperative breeding)', authorSearch: 'Hrdy' },
			{ label: 'Sear & Mace 2008 (45 societies review)', authorSearch: 'Sear' },
			{ label: 'Lahdenpera et al. 2004 (grandmother effect)', authorSearch: 'Lahdenpera' },
			{ label: 'Strassmann (Dogon polygyny)', authorSearch: 'Strassmann' }
		]
	},

	// ======== C16 ========
	{
		id: 'males-reconcile',
		step: 16,
		type: 'observation',
		claim: 'Males are more willing to reconcile after conflicts than females. Boys and men prefer to resolve conflict with same-sex friends; women prefer to find replacements. Men\'s physiological stress responses recover faster after imagined conflict.',
		shortLabel: 'Male conflict reconciliation',
		evidence: 'Benenson et al. 2009 (interviews across ages: boys/men more willing to reconcile); simulated nose-punch experiment (men\'s heart rates calm faster, more cortisol for reconciliation); male stabbing anecdote (reconciliation in 3 weeks); countries switching enemies to allies; de Waal 1979 (chimpanzee reconciliation).',
		status: 'yellow',
		explanation:
			'The interview data (Benenson et al. 2009) is published and covers multiple age groups. The physiological data is objective but from ' +
			'imagined scenarios with small samples. The chimpanzee data from de Waal provides primate parallels. However, some evidence is anecdotal ' +
			'(the stabbing story, country alliances) and the experimental evidence uses imagined rather than real conflicts. The overall pattern is ' +
			'consistent but the evidential base is thinner than for other claims in the book.',
		dependsOn: ['boys-social-fighting', 'males-larger-groups'],
		collapseRisk: 'Moderate. The pattern is plausible and supported by multiple sources but some key evidence is anecdotal or from imagined scenarios.',
		bookLocations: [
			{ pages: '~pp. 49-51', chapter: 'Ch. 2-3: Enemy Fighting / Male Friends', context: 'Interview data, physiological measures, chimpanzee parallels' }
		],
		evidenceRefs: [
			{ label: 'Benenson et al. 2009 (reconciliation interviews)', authorSearch: 'Benenson 2009' },
			{ label: 'de Waal 1979 (chimpanzee reconciliation)', authorSearch: 'de Waal' }
		]
	},

	// ======== C17 ========
	{
		id: 'females-nonverbal',
		step: 17,
		type: 'observation',
		claim: 'Females are superior at decoding nonverbal emotional cues. Approximately 90% of studies show women are more accurate, found across Japan, Sumatra, Vietnam, Poland, and Hungary. The advantage is greatest for detecting fear.',
		shortLabel: 'Female nonverbal decoding',
		evidence: 'Hall et al. 2000 (~90% of studies show female advantage); cross-cultural replication in Japan, Sumatra, Vietnam, Poland, Hungary; greatest advantage for fear detection; Hittelman & Dickes 1979 (newborn girls more eye contact); Lutchmaya et al. 2002 (lower prenatal testosterone = more eye contact at 12 months); McClure et al. 2004 (faster emotional decisions).',
		status: 'green',
		explanation:
			'The female advantage in nonverbal decoding is one of the most well-replicated sex differences in all of psychology. ' +
			'Hall et al. (2000) synthesize an enormous literature. The cross-cultural consistency across very different societies ' +
			'(Japan, Sumatra, Vietnam, Poland, Hungary) makes cultural explanations insufficient. The newborn eye contact data and ' +
			'prenatal testosterone correlation suggest biological underpinnings. This is one of the strongest evidence clusters in the book.',
		dependsOn: ['worrier-hypothesis'],
		collapseRisk: 'Low. This is among the most well-replicated sex differences in psychology.',
		bookLocations: [
			{ pages: '~pp. 147-150', chapter: 'Ch. 5: Protecting Herself', context: 'Nonverbal decoding accuracy across cultures, newborn eye contact, testosterone link' }
		],
		evidenceRefs: [
			{ label: 'Hall et al. 2000 (nonverbal decoding review)', authorSearch: 'Hall' },
			{ label: 'Hittelman & Dickes 1979 (newborn eye contact)', authorSearch: 'Hittelman' },
			{ label: 'Lutchmaya et al. 2002 (prenatal testosterone)', authorSearch: 'Lutchmaya' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	// For Warriors and Worriers there is no single prescriptive conclusion, so trace from the two
	// most downstream nodes: 'women-need-assistants' (worrier branch) and 'males-cooperate-groups' (warrior branch).
	// Pick the one whose weakest-dep path is weaker overall.
	const candidates = ['women-need-assistants', 'males-cooperate-groups'];

	function buildPath(startId: string): ChainLink[] {
		const target = chain.find((c) => c.id === startId)!;
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

	const paths = candidates.map(buildPath);
	const order = { red: 0, yellow: 1, untestable: 2, green: 3 };
	// Pick path with the weakest individual link
	const weakestScore = (path: ChainLink[]) => Math.min(...path.map((c) => order[c.status]));
	paths.sort((a, b) => weakestScore(a) - weakestScore(b));
	return paths[0];
}

export const chainSummary = {
	totalLinks: chain.length,
	red: chain.filter((c) => c.status === 'red').length,
	yellow: chain.filter((c) => c.status === 'yellow').length,
	green: chain.filter((c) => c.status === 'green').length,
	untestable: chain.filter((c) => c.status === 'untestable').length,
	verdict:
		'The argument chain for "Warriors and Worriers" is notably strong at the observational level. Of 17 claims, 12 are rated green ' +
		'(solidly supported) and 5 are yellow (contested or interpretive). None are rated red or untestable at the chain level. ' +
		'The book\'s greatest strengths are its convergent-evidence strategy and its reliance on well-powered meta-analyses (risk-taking, ' +
		'throwing, nonverbal decoding, homicide), cross-cultural anthropological data (maternal caregiving, friendship patterns), and ' +
		'published experimental studies. The two core theoretical claims -- the warrior hypothesis (C2) and the worrier hypothesis (C9) -- ' +
		'are both rated yellow because their specific evolutionary-functional interpretations go beyond what the behavioral data alone can ' +
		'establish. The behavioral observations they rest upon, however, are largely robust. The weakest links involve small-sample studies ' +
		'from Benenson\'s own lab (reconciliation, equality enforcement) and the mapping of childhood play behaviors to warfare preparation, ' +
		'which remains an underdetermined functional attribution. The book is most reliable when describing behavioral sex differences ' +
		'and least reliable when asserting specific evolutionary origins for those differences.'
};
