// mf-argument-chain-data.ts
// The argument chain for "Male, Female" 3rd ed. (David Geary), with evidence ratings per link.

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
	'sexual-reproduction':        { x: 42, y: 3, row: 0 },
	'anisogamy':                  { x: 42, y: 11, row: 1 },
	'parental-investment':        { x: 20, y: 19, row: 2 },
	'female-choice':              { x: 50, y: 19, row: 2 },
	'male-competition':           { x: 80, y: 19, row: 2 },
	'life-history':               { x: 12, y: 29, row: 3 },
	'sex-hormones':               { x: 42, y: 29, row: 3 },
	'ancestral-polygyny':         { x: 75, y: 29, row: 3 },
	'fatherhood-tradeoffs':       { x: 8, y: 39, row: 4 },
	'mate-preferences':           { x: 32, y: 39, row: 4 },
	'male-status-competition':    { x: 58, y: 39, row: 4 },
	'female-competition':         { x: 84, y: 39, row: 4 },
	'motivation-to-control':      { x: 42, y: 49, row: 5 },
	'sex-segregation':            { x: 12, y: 59, row: 6 },
	'folk-psychology':            { x: 38, y: 59, row: 6 },
	'folk-physics':               { x: 65, y: 59, row: 6 },
	'modern-manifestations':      { x: 30, y: 71, row: 7 },
	'condition-dependent':        { x: 65, y: 71, row: 7 },
};

export const rowLabels = [
	'Foundation: Why Sex Exists',
	'Foundation: Gamete Asymmetry',
	'Sexual Selection Mechanisms',
	'Development & Ancestral Context',
	'Human Mating & Competition',
	'Cognitive-Motivational Bridge',
	'Development & Cognition',
	'Modern Expression & Vulnerability'
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
		id: 'sexual-reproduction',
		step: 1,
		type: 'premise',
		claim: 'Sexual reproduction evolved to maintain genetic variability against parasites (Red Queen hypothesis), accumulating mutations (Muller\'s ratchet), and environmental change (Williams\' lottery analogy).',
		shortLabel: 'Why sexual reproduction exists',
		evidence: 'Muller\'s ratchet (mutation accumulation in asexual species); Williams\' lottery analogy; Red Queen hypothesis (host-parasite coevolution); MHC gene variability; Cooper et al. (2005) experimental studies with E. coli.',
		status: 'green',
		explanation:
			'The evolution of sexual reproduction is one of the major questions in evolutionary biology. Multiple complementary hypotheses ' +
			'(Red Queen, Muller\'s ratchet, Williams\' lottery) are supported by empirical evidence. Cooper et al. (2005) demonstrated mutation accumulation ' +
			'disadvantages in asexual E. coli. MHC variability across vertebrates supports the pathogen-resistance benefit. The consensus is that no single ' +
			'hypothesis fully explains sex, but together they make a strong case.',
		dependsOn: [],
		collapseRisk: 'Low. Multiple independent lines of evidence support the adaptive value of sexual reproduction.',
		bookLocations: [
			{ pages: 'Ch. 2', chapter: 'Ch. 2', context: 'Natural selection and the evolution of sexual reproduction' }
		],
		evidenceRefs: [
			{ label: 'Cooper et al. (2005, E. coli)', authorSearch: 'Cooper' },
			{ label: 'Red Queen hypothesis', authorSearch: 'Red Queen' },
			{ label: 'MHC variability', authorSearch: 'MHC' }
		]
	},

	// ======== C2 ========
	{
		id: 'anisogamy',
		step: 2,
		type: 'premise',
		claim: 'Anisogamy (two gamete sizes) drives the fundamental sex difference in reproductive strategy: the sex producing larger gametes (female) invests more per offspring; the sex producing smaller gametes (male) can reproduce at lower marginal cost.',
		shortLabel: 'Anisogamy: gamete asymmetry',
		evidence: 'Parker et al. (1972) disruptive selection model; Janicke et al. (2016) meta-analysis across 66 species confirming females invest more in parenting, males more in competing.',
		status: 'green',
		explanation:
			'Anisogamy is the foundational concept in sexual selection theory. Parker et al. (1972) modeled how disruptive selection produces two gamete sizes ' +
			'from an initially continuous distribution. Janicke et al. (2016) meta-analysis across 66 species confirmed that the sex with larger gametes ' +
			'consistently invests more in parenting while the sex with smaller gametes competes more intensely for mating access. ' +
			'This is among the most well-established principles in evolutionary biology.',
		dependsOn: ['sexual-reproduction'],
		collapseRisk: 'Very low. Anisogamy is virtually universal in sexually reproducing multicellular organisms.',
		bookLocations: [
			{ pages: 'Ch. 2-3', chapter: 'Ch. 2-3', context: 'Overview of sexual selection and parental investment' }
		],
		evidenceRefs: [
			{ label: 'Parker et al. (1972)', authorSearch: 'Parker' },
			{ label: 'Janicke et al. (2016) meta-analysis', authorSearch: 'Janicke' }
		]
	},

	// ======== C3 ========
	{
		id: 'parental-investment',
		step: 3,
		type: 'premise',
		claim: 'The sex that invests more in offspring becomes the limiting reproductive resource; the less-investing sex competes more intensely for mating access (Trivers, 1972).',
		shortLabel: 'Parental investment theory',
		evidence: '>90% of mammalian species show female-biased parental care (Clutton-Brock, 1989); sex-role-reversed species (pipefish, phalaropes) confirm the principle -- when males invest more, females compete more intensely.',
		status: 'green',
		explanation:
			'Trivers\' (1972) parental investment theory is one of the most successful theories in behavioral ecology. ' +
			'Over 90% of mammalian species show female-biased parental care and male-biased competition. The critical test comes from sex-role-reversed species: ' +
			'in pipefish and phalaropes, where males provide more parental care, females are the more competitive and ornamented sex. ' +
			'This reversal confirms that parental investment, not sex per se, drives the pattern.',
		dependsOn: ['anisogamy'],
		collapseRisk: 'Very low. Documented across thousands of species, including sex-role-reversed species that confirm the mechanism.',
		bookLocations: [
			{ pages: 'Ch. 3', chapter: 'Ch. 3', context: 'Sexual selection: parental care, female choice, male-male competition' }
		],
		evidenceRefs: [
			{ label: 'Trivers (1972)', authorSearch: 'Trivers' },
			{ label: 'Clutton-Brock (1989)', authorSearch: 'Clutton-Brock' }
		]
	},

	// ======== C4 ========
	{
		id: 'female-choice',
		step: 4,
		type: 'causal',
		claim: 'Female choice drives the evolution of honest signals of male quality: ornaments, displays, and condition-dependent traits that reliably indicate genetic fitness and health.',
		shortLabel: 'Female choice drives honest signals',
		evidence: 'Hamilton & Zuk (1982) parasite-resistance hypothesis; Zahavi (1975) handicap principle; experimental studies on red jungle fowl, barn swallows, ring-necked pheasants; Kamiya et al. (2014) MHC mate choice meta-analysis.',
		status: 'green',
		explanation:
			'The theory of honest signaling through female choice is well-supported empirically. Hamilton & Zuk (1982) showed that elaborate male ornaments ' +
			'signal parasite resistance. Zahavi\'s handicap principle explains why costly signals are reliable. Experimental manipulation of ornaments ' +
			'in multiple bird species confirms female preference for condition-dependent traits. The Kamiya et al. (2014) meta-analysis across mammals, birds, ' +
			'fish, and reptiles supports MHC-based mate choice. These findings collectively establish female choice as a major evolutionary force.',
		dependsOn: ['parental-investment'],
		collapseRisk: 'Low. Multiple independent experimental and comparative studies support female choice for condition-dependent traits.',
		bookLocations: [
			{ pages: 'Ch. 3', chapter: 'Ch. 3', context: 'Female choice, handicap principle, honest signals of quality' }
		],
		evidenceRefs: [
			{ label: 'Hamilton & Zuk (1982)', authorSearch: 'Hamilton' },
			{ label: 'Zahavi (1975) handicap', authorSearch: 'Zahavi' },
			{ label: 'Kamiya et al. (2014) MHC', authorSearch: 'Kamiya' }
		]
	},

	// ======== C5 ========
	{
		id: 'male-competition',
		step: 5,
		type: 'causal',
		claim: 'Male-male competition drives the evolution of armaments, larger body size, and behavioral/cognitive traits such as spatial abilities and coalition formation.',
		shortLabel: 'Male-male competition drives dimorphism',
		evidence: 'Northern elephant seal reproductive skew (<5% of males sire 75-85% of pups); bowerbird behavioral competition; sex differences in bird song neural systems (HVC 3-8x larger in males); meadow vole vs. prairie vole spatial ability comparisons.',
		status: 'green',
		explanation:
			'Male-male competition is demonstrated across multiple taxa. Elephant seals show extreme reproductive skew confirmed by DNA paternity. ' +
			'Bowerbirds demonstrate that competition can be behavioral rather than purely physical. Neural sex differences in bird song systems ' +
			'show that competition drives brain organization. The meadow vole vs. prairie vole comparison provides a natural experiment: ' +
			'spatial ability sex differences appear only in polygynous species where males range widely. The convergent evidence is compelling.',
		dependsOn: ['parental-investment'],
		collapseRisk: 'Low. Cross-species comparative evidence is extensive and the link between competition intensity and dimorphism is well-established.',
		bookLocations: [
			{ pages: 'Ch. 3', chapter: 'Ch. 3', context: 'Male-male competition, armaments, behavioral competition' }
		],
		evidenceRefs: [
			{ label: 'Elephant seal DNA paternity', authorSearch: 'Hoelzel' },
			{ label: 'Vole spatial comparisons', authorSearch: 'Jasarevic' }
		]
	},

	// ======== C6 ========
	{
		id: 'life-history',
		step: 6,
		type: 'causal',
		claim: 'Life history theory explains sex differences in developmental pace, play, and maturation timing: the more competitive sex develops more slowly and plays in ways that prepare for adult competition.',
		shortLabel: 'Life history and developmental pace',
		evidence: 'Male elephant seals mature at 8 years vs. 3 for females; male bowerbirds do not reproduce until 10 years (vs. 2 for females); human boys develop 2 years more slowly than girls at puberty onset (Tanner, 1990); rough-and-tumble play tracks intrasexual competition across species (Power, 2000).',
		status: 'green',
		explanation:
			'Life history theory predicts that the more competitive sex should delay maturation to build the physical and social skills needed for adult competition. ' +
			'This is confirmed across multiple species: male elephant seals, bowerbirds, and humans all show delayed male maturation relative to females. ' +
			'The link between play and adult competition is supported by Power (2000) showing that rough-and-tumble play frequency tracks the intensity ' +
			'of adult male-male competition across primate species. Tanner (1990) documents the 2-year developmental lag in human boys.',
		dependsOn: ['parental-investment', 'male-competition'],
		collapseRisk: 'Low. The pattern is consistent across species with different mating systems.',
		bookLocations: [
			{ pages: 'Ch. 4', chapter: 'Ch. 4', context: 'Sexual selection and life history: development, play, maturation' }
		],
		evidenceRefs: [
			{ label: 'Tanner (1990) human development', authorSearch: 'Tanner' },
			{ label: 'Power (2000) play and competition', authorSearch: 'Power' }
		]
	},

	// ======== C7 ========
	{
		id: 'sex-hormones',
		step: 7,
		type: 'causal',
		claim: 'Sex hormones (testosterone, estrogens) organize and activate sexually selected traits: prenatal testosterone masculinizes play behavior; the testosterone-immunocompetence trade-off maintains honest signaling.',
		shortLabel: 'Hormones organize sex differences',
		evidence: 'Prenatal testosterone masculinizes play in rats and macaques (Pellis, 2002; Wallen, 1996); Wingfield et al. (1990) challenge hypothesis; Foo et al. (2017) testosterone-immune meta-analysis; CAH studies in humans (Berenbaum et al., 2018).',
		status: 'green',
		explanation:
			'Hormonal influences on sexually selected traits are supported by convergent evidence from animal experiments and human natural experiments. ' +
			'Prenatal testosterone masculinizes play behavior in multiple species. The challenge hypothesis (Wingfield et al., 1990) shows testosterone rises ' +
			'during male-male competition across vertebrates. The Foo et al. (2017) meta-analysis confirms the testosterone-immunocompetence trade-off, ' +
			'supporting honest signaling theory. CAH studies in humans show prenatal androgen exposure shifts behavior toward male-typical patterns. ' +
			'The evidence is strong across experimental, comparative, and natural-experiment designs.',
		dependsOn: ['male-competition', 'life-history'],
		collapseRisk: 'Low. Multiple independent lines of evidence (animal experiments, human natural experiments, meta-analyses) converge.',
		bookLocations: [
			{ pages: 'Ch. 4', chapter: 'Ch. 4', context: 'Sex hormones, challenge hypothesis, immunocompetence trade-off, CAH' }
		],
		evidenceRefs: [
			{ label: 'Foo et al. (2017) testosterone-immune', authorSearch: 'Foo' },
			{ label: 'Berenbaum et al. (2018) CAH', authorSearch: 'Berenbaum' },
			{ label: 'Wingfield et al. (1990) challenge', authorSearch: 'Wingfield' }
		]
	},

	// ======== C8 ========
	{
		id: 'ancestral-polygyny',
		step: 8,
		type: 'theory',
		claim: 'Human ancestors had a polygynous mating system with male-male competition and some paternal investment. Physical sex dimorphism in Australopithecus fossils decreased over Homo, suggesting reduced polygyny over time.',
		shortLabel: 'Ancestral polygynous mating system',
		evidence: 'Physical sex dimorphism in Australopithecus fossils (males much larger); DNA paternity studies across 13 primate species (Ostner et al., 2008); chimpanzee coalitional warfare (Goodall, 1986; Wilson et al., 2014); gorilla family structure as model (Geary & Flinn, 2001).',
		status: 'yellow',
		explanation:
			'The fossil evidence for size dimorphism in Australopithecus is confirmed (Grabowski et al., 2015), and the decrease in dimorphism over Homo ' +
			'is well-documented. However, inferring specific social structures from fossil remains requires analogy with living primates, which introduces uncertainty. ' +
			'Different living primate models (chimpanzees, gorillas, bonobos) imply different ancestral social structures. DNA paternity data from living primates ' +
			'supports the general claim of polygyny but the degree and nature of ancestral polygyny remains debated among paleoanthropologists.',
		dependsOn: ['parental-investment', 'male-competition'],
		collapseRisk: 'Moderate. The general claim of some ancestral polygyny is well-supported; the specific details of ancestral social structure are uncertain.',
		bookLocations: [
			{ pages: 'Ch. 5', chapter: 'Ch. 5', context: 'Sexual selection in primates and during human evolution' }
		],
		evidenceRefs: [
			{ label: 'Grabowski et al. (2015) fossil dimorphism', authorSearch: 'Grabowski' },
			{ label: 'Ostner et al. (2008) primate paternity', authorSearch: 'Ostner' },
			{ label: 'Wilson et al. (2014) chimp warfare', authorSearch: 'Wilson' }
		]
	},

	// ======== C9 ========
	{
		id: 'fatherhood-tradeoffs',
		step: 9,
		type: 'causal',
		claim: 'Men\'s parenting is facultatively expressed and reflects cost-benefit trade-offs: fathers invest more when paternity certainty is high and mating alternatives are few; father absence triples child mortality in Ache hunter-gatherers.',
		shortLabel: 'Fatherhood as cost-benefit trade-off',
		evidence: 'Father absence triples child mortality in Ache (Hill & Hurtado, 1996); 54% lower infant mortality for professional vs. unskilled fathers in early 20th-century England (Reid, 1997); paternity certainty >95% for high-status men (Anderson, 2006); operational sex ratio effects (Guttentag & Secord, 1983; Pollet & Nettle, 2008); testosterone drops with pair bonding.',
		status: 'yellow',
		explanation:
			'The Ache data is compelling but Sear & Mace (2008) found no consistent father effect across traditional societies. Geary acknowledges this ' +
			'but argues protection from other men is the one irreplaceable paternal contribution. The operational sex ratio data is well-supported across ' +
			'cultures and historical periods. Testosterone changes with fatherhood are well-documented. The overall framework of facultative paternal investment ' +
			'is theoretically strong, but the empirical support for father effects on child outcomes is more variable than Geary\'s emphasis on the Ache suggests.',
		dependsOn: ['parental-investment', 'sex-hormones', 'ancestral-polygyny'],
		collapseRisk: 'Moderate. The theoretical framework is strong; empirical support for father absence effects varies across populations.',
		bookLocations: [
			{ pages: 'Ch. 6', chapter: 'Ch. 6', context: 'Evolution of fatherhood, cost-benefit trade-offs, paternity certainty' }
		],
		evidenceRefs: [
			{ label: 'Hill & Hurtado (1996) Ache', authorSearch: 'Hill' },
			{ label: 'Sear & Mace (2008) father effect review', authorSearch: 'Sear' },
			{ label: 'Pollet & Nettle (2008) sex ratio', authorSearch: 'Pollet' }
		]
	},

	// ======== C10 ========
	{
		id: 'mate-preferences',
		step: 10,
		type: 'observation',
		claim: 'Women prefer culturally successful men as mates; men prefer youth and physical attractiveness. These preferences are universal across 37 cultures and the sex difference is ~2x larger than cross-cultural variation.',
		shortLabel: 'Universal mate preferences',
		evidence: 'Buss (1989) 37-culture study (N > 10,000); Borgerhoff Mulder (1990) Kipsigis bride choice; Apostolou (2007) arranged marriages in 70% of hunter-gatherer societies prioritize groom status; Lassek & Gaulin (2019) male preference for youthful features; Conroy-Beam et al. (2015) replication.',
		status: 'green',
		explanation:
			'The Buss (1989) cross-cultural study is one of the largest in psychology and has been replicated multiple times. Women rate financial prospects higher ' +
			'in all 37 cultures, and men rate physical attractiveness higher. Conroy-Beam et al. (2015) showed the sex difference is ~2x larger than cross-cultural ' +
			'variation, meaning sex predicts this preference more than culture does. The Kipsigis and arranged-marriage data from traditional societies ' +
			'extends the finding beyond WEIRD populations. The convergence across vastly different societies is a strong argument for evolutionary origins.',
		dependsOn: ['parental-investment', 'female-choice', 'fatherhood-tradeoffs'],
		collapseRisk: 'Low. One of the most widely replicated cross-cultural findings in psychology.',
		bookLocations: [
			{ pages: 'Ch. 7', chapter: 'Ch. 7', context: 'Mate preferences: women\'s and men\'s, marriage systems' }
		],
		evidenceRefs: [
			{ label: 'Buss (1989) 37 cultures', authorSearch: 'Buss' },
			{ label: 'Conroy-Beam et al. (2015)', authorSearch: 'Conroy-Beam' },
			{ label: 'Apostolou (2007) arranged marriage', authorSearch: 'Apostolou' }
		]
	},

	// ======== C11 ========
	{
		id: 'male-status-competition',
		step: 11,
		type: 'observation',
		claim: 'Men compete for status and cultural success through dominance-based and prestige-based strategies; across 33 traditional cultures high-status men have more wives and more surviving children.',
		shortLabel: 'Male status competition',
		evidence: 'von Rueden & Jaeggi (2016) across 33 cultures; Yanomamo warriors 2.5x more wives (Chagnon, 1997); 1/3 of men in traditional societies died from warfare (Keeley, 1996); Betzig (1986, 2012) despotic rulers\' extreme reproductive success; Henrich & Gil-White (2001) prestige-based competition in WEIRD nations.',
		status: 'green',
		explanation:
			'The link between male status and reproductive success is documented across 33 traditional cultures (von Rueden & Jaeggi, 2016). ' +
			'The historical data on warfare mortality (Keeley, 1996; Walker & Bailey, 2013) and despotic rulers\' extreme reproductive success (Betzig, 2012) ' +
			'reinforces the pattern. The shift from dominance-based to prestige-based competition in modern WEIRD nations (Henrich & Gil-White, 2001) ' +
			'explains why the same underlying motive manifests differently across cultural contexts. The Yanomamo data, while methodologically critiqued, ' +
			'fits the broader cross-cultural pattern.',
		dependsOn: ['ancestral-polygyny', 'mate-preferences'],
		collapseRisk: 'Low for the general pattern; moderate for specific ethnographic examples like the Yanomamo.',
		bookLocations: [
			{ pages: 'Ch. 8', chapter: 'Ch. 8', context: 'Male-male competition, warfare, prestige vs. dominance' }
		],
		evidenceRefs: [
			{ label: 'von Rueden & Jaeggi (2016)', authorSearch: 'von Rueden' },
			{ label: 'Keeley (1996) warfare', authorSearch: 'Keeley' },
			{ label: 'Henrich & Gil-White (2001) prestige', authorSearch: 'Henrich' }
		]
	},

	// ======== C12 ========
	{
		id: 'female-competition',
		step: 12,
		type: 'observation',
		claim: 'Women compete primarily through relational aggression and enhancing traits men prefer: social information manipulation, competitor derogation on attractiveness, and self-enhancement.',
		shortLabel: 'Female relational competition',
		evidence: 'Reynolds et al. (2018) social information manipulation; Li (2007) "dress to kill" in monogamous societies; Buss (1988) competitor derogation; Campbell (2013) relational aggression framework; Strassmann (1997) co-wife poisoning in polygynous societies.',
		status: 'yellow',
		explanation:
			'The existence of female-female competition through relational aggression is well-documented (Campbell, 2013; Reynolds et al., 2018). ' +
			'Competitor derogation studies show women target rivals on physical attractiveness, consistent with male preferences (Buss, 1988). ' +
			'However, the evidence base is more limited than for male competition, partly because female competition was historically underresearched. ' +
			'Some findings rely on Western samples. The Strassmann (1997) co-wife poisoning data is dramatic but from a single society. ' +
			'The overall framework is reasonable but the empirical depth is less than for male competition.',
		dependsOn: ['parental-investment', 'mate-preferences', 'male-status-competition'],
		collapseRisk: 'Moderate. The framework is well-motivated but the evidence base is less extensive than for male competition.',
		bookLocations: [
			{ pages: 'Ch. 8', chapter: 'Ch. 8', context: 'Female-female competition, relational aggression, competitor derogation' }
		],
		evidenceRefs: [
			{ label: 'Campbell (2013) relational aggression', authorSearch: 'Campbell' },
			{ label: 'Reynolds et al. (2018)', authorSearch: 'Reynolds' }
		]
	},

	// ======== C13 ========
	{
		id: 'motivation-to-control',
		step: 13,
		type: 'theory',
		claim: 'The "motivation to control" provides a unified cognitive-motivational framework: men show stronger social dominance orientation, women show stronger social equality orientation; these differences emerge from sexually selected pressures.',
		shortLabel: 'Motivation to control framework',
		evidence: 'Integrates Bandura (2001) agency, Ryan & Deci (2017) self-determination theory, Maslow (1943); Pratto & Hegarty (2000), Sidanius et al. (1994) social dominance orientation; 4/5 women value reciprocal relationships more than average man; 3/4 men value political activities more than average woman (Willingham & Cole, 1997).',
		status: 'untestable',
		explanation:
			'The "motivation to control" is Geary\'s integrative theoretical framework that unifies diverse sex differences under one umbrella. ' +
			'It draws on established psychological theories (agency, self-determination, needs hierarchy) and adds an evolutionary lens. ' +
			'The sex differences in social dominance orientation are well-replicated. However, the framework itself is an organizing principle ' +
			'rather than an independently testable hypothesis -- it cannot be falsified because it is flexible enough to accommodate any pattern of results. ' +
			'Its value is heuristic rather than predictive.',
		dependsOn: ['ancestral-polygyny', 'fatherhood-tradeoffs', 'mate-preferences', 'male-status-competition'],
		collapseRisk: 'The framework is unfalsifiable as a unified theory. Individual components (social dominance orientation, etc.) are well-supported.',
		bookLocations: [
			{ pages: 'Ch. 9', chapter: 'Ch. 9', context: 'Evolution and development of the human mind, folk domains, mental models' }
		],
		evidenceRefs: [
			{ label: 'Sidanius et al. (1994) social dominance', authorSearch: 'Sidanius' },
			{ label: 'Willingham & Cole (1997)', authorSearch: 'Willingham' }
		]
	},

	// ======== C14 ========
	{
		id: 'sex-segregation',
		step: 14,
		type: 'observation',
		claim: 'Boys and girls self-segregate into same-sex cultures by age 3, reaching 11:1 ratios by age 6-7. Boys form large competitive coalitions with dominance hierarchies; girls form intense dyadic friendships emphasizing emotional intimacy.',
		shortLabel: 'Same-sex play segregation',
		evidence: 'Maccoby & Jacklin (1987) 11:1 ratio; Whiting & Edwards (1988) cross-cultural replication; pattern found across USA, Canada, China, England, Kenya, Mexico, Japan, India; play patterns track adult competition/parenting roles across species.',
		status: 'green',
		explanation:
			'This is among the most robust findings in developmental psychology. The 11:1 same-sex to mixed-sex play ratio by ages 6-7 ' +
			'has been replicated across vastly different cultures. The content of play differs by sex in ways that track adult reproductive demands: ' +
			'boys\' competitive coalitions prepare for adult status competition, and girls\' dyadic friendships prepare for adult social-support networks. ' +
			'The cross-cultural consistency and early emergence (age 3) before extensive socialization make purely cultural explanations difficult to maintain.',
		dependsOn: ['life-history', 'sex-hormones', 'motivation-to-control'],
		collapseRisk: 'Very low. One of the most replicated developmental findings, consistent across 10+ countries.',
		bookLocations: [
			{ pages: 'Ch. 10-11', chapter: 'Ch. 10-11', context: 'Sex differences in infancy, play, and social development' }
		],
		evidenceRefs: [
			{ label: 'Maccoby & Jacklin (1987)', authorSearch: 'Maccoby' },
			{ label: 'Whiting & Edwards (1988)', authorSearch: 'Whiting' }
		]
	},

	// ======== C15 ========
	{
		id: 'folk-psychology',
		step: 15,
		type: 'observation',
		claim: 'Women have advantages in folk psychology: language, facial expression reading, theory of mind, and interhemispheric brain connectivity. These advantages are linked to female investment in social relationships and offspring care.',
		shortLabel: 'Female folk psychology advantage',
		evidence: 'Women\'s planum temporale and language areas larger (Leonard et al., 2008; Lotze et al., 2019); girls double boys\' vocabulary at 18 months (Lutchmaya et al., 2002); women better at reading facial expressions (Hall, 1984); more interhemispheric connectivity (Ingalhalikar et al., 2014; Szalkai et al., 2018); 93-95% brain sex classification (Chekroud et al., 2016).',
		status: 'green',
		explanation:
			'Female advantages in language and social cognition are among the best-documented cognitive sex differences. The vocabulary advantage appears ' +
			'by 18 months, before extensive socialization could create it. Brain structural differences supporting language processing are documented ' +
			'in multiple large-sample studies. The greater interhemispheric connectivity in female brains is replicated. Hall (1984) meta-analysis confirms ' +
			'female advantage in reading facial expressions. Geary links these to the evolutionary importance of social relationships for female fitness, ' +
			'which is consistent with the cross-species data but the specific evolutionary interpretation adds uncertainty beyond the descriptive findings.',
		dependsOn: ['male-competition', 'female-competition', 'motivation-to-control'],
		collapseRisk: 'Low for the cognitive sex differences. The evolutionary interpretation is plausible but less directly testable.',
		bookLocations: [
			{ pages: 'Ch. 12', chapter: 'Ch. 12', context: 'Brain organization, language, theory of mind, facial expression reading' }
		],
		evidenceRefs: [
			{ label: 'Hall (1984) facial expression', authorSearch: 'Hall' },
			{ label: 'Ingalhalikar et al. (2014) connectivity', authorSearch: 'Ingalhalikar' },
			{ label: 'Lutchmaya et al. (2002) vocabulary', authorSearch: 'Lutchmaya' }
		]
	},

	// ======== C16 ========
	{
		id: 'folk-physics',
		step: 16,
		type: 'observation',
		claim: 'Men have advantages in folk physics: spatial abilities (mental rotation d = 0.7-1.0), navigation, projectile skills, and mechanical reasoning. By age 2-4, >90% of boys throw farther than the average girl.',
		shortLabel: 'Male folk physics advantage',
		evidence: 'Thomas & French (1985) throwing; Gindhart (1973) forearm bone length from birth; Kim et al. (2006) 70% more muscle in 15-year-old boys; mental rotation d = 0.7-1.0; larger sensorimotor brain regions in men (Lotze et al., 2019; Ritchie et al., 2018); vole species comparisons.',
		status: 'green',
		explanation:
			'Male advantages in spatial abilities and throwing are among the largest cognitive/motor sex differences. Mental rotation shows a robust effect size ' +
			'of d = 0.7-1.0, larger than most psychological sex differences. The throwing advantage emerges by age 2-4, with skeletal differences (longer forearm bones) ' +
			'present from birth, making purely socialization-based explanations difficult. Brain regions supporting sensorimotor integration are larger in men ' +
			'even after controlling for total brain size. The vole species comparison (spatial sex differences only in polygynous species) provides ' +
			'cross-species support for the sexual selection interpretation.',
		dependsOn: ['male-competition', 'male-status-competition', 'motivation-to-control'],
		collapseRisk: 'Low for the cognitive and motor sex differences. The evolutionary interpretation (projectile competition in ancestral environments) is plausible but not directly testable.',
		bookLocations: [
			{ pages: 'Ch. 13', chapter: 'Ch. 13', context: 'Spatial abilities, navigation, projectile skills, tool use' }
		],
		evidenceRefs: [
			{ label: 'Thomas & French (1985) throwing', authorSearch: 'Thomas' },
			{ label: 'Ritchie et al. (2018) brain size', authorSearch: 'Ritchie' },
			{ label: 'Lotze et al. (2019) sensorimotor', authorSearch: 'Lotze' }
		]
	},

	// ======== C17 ========
	{
		id: 'modern-manifestations',
		step: 17,
		type: 'consequence',
		claim: 'Evolved sex differences manifest in modern contexts: girls\' reading advantage from language system, boys\' math advantage at high end from spatial abilities, men work longer hours, women trade career for family time, 2-3 boys per girl at intelligence extremes, and sex-typed psychopathology.',
		shortLabel: 'Modern-world manifestations',
		evidence: 'Girls\' reading advantage (Reilly et al., 2019; Stoet & Geary, 2013); boys\' high-end math via spatial abilities; men work longer hours (Hakim, 2002; Ferriman et al., 2009); 2-3 boys per girl at extremes (Johnson et al., 2008); externalizing disorders higher in males, internalizing higher in females (Martel, 2013).',
		status: 'yellow',
		explanation:
			'The descriptive patterns are well-documented: girls outperform boys in reading, boys are overrepresented at math extremes, men work longer hours, ' +
			'and psychopathology shows sex-typed patterns. However, attributing these modern patterns specifically to evolved sex differences rather than to ' +
			'ongoing socialization, institutional biases, and economic incentives involves interpretive leaps. The "gender equality paradox" (some sex differences ' +
			'grow larger in more egalitarian societies) is consistent with Geary\'s framework but has also been critiqued methodologically (Stoet & Geary\'s ' +
			'original index was challenged by Richardson et al., 2020). The interpretation is "moderate to strong" rather than definitive.',
		dependsOn: ['motivation-to-control', 'folk-psychology', 'folk-physics'],
		collapseRisk: 'Moderate. The descriptive patterns are robust but the specific evolutionary causal attribution competes with socialization and structural explanations.',
		bookLocations: [
			{ pages: 'Ch. 14', chapter: 'Ch. 14', context: 'School performance, work, psychopathology, sexual orientation' }
		],
		evidenceRefs: [
			{ label: 'Stoet & Geary (2013) reading gap', authorSearch: 'Stoet' },
			{ label: 'Johnson et al. (2008) intelligence extremes', authorSearch: 'Johnson' },
			{ label: 'Martel (2013) psychopathology', authorSearch: 'Martel' }
		]
	},

	// ======== C18 ========
	{
		id: 'condition-dependent',
		step: 18,
		type: 'theory',
		claim: 'Sexually selected traits are more vulnerable to environmental stressors (condition-dependent expression): the immunocompetence handicap, mitochondrial energy trade-offs, and male vulnerability to chronic toxin exposure in spatial/visuospatial domains.',
		shortLabel: 'Condition-dependent vulnerability',
		evidence: 'Immunocompetence handicap hypothesis (Folstad & Karter, 1992); mitochondrial energy model (Hill, 2014); Foo et al. (2017) testosterone-immune meta-analysis; male elephant seal oxidative stress (Sharick et al., 2015); human male vulnerability to lead and aluminum in spatial domains (Haenninen et al., 1978; Akila et al., 1999).',
		status: 'yellow',
		explanation:
			'The theoretical framework linking sexually selected traits to environmental vulnerability is well-motivated. The testosterone-immunocompetence ' +
			'trade-off is supported by the Foo et al. (2017) meta-analysis. The elephant seal oxidative stress data provides a vivid cross-species example. ' +
			'However, the specific human claims (male vulnerability to lead/aluminum in spatial domains) rest on a small number of occupational exposure studies ' +
			'from the 1970s-1990s that have not been extensively replicated. The general principle (costly sexually selected traits are more vulnerable to stressors) ' +
			'is theoretically strong, but the specific human applications need more empirical support.',
		dependsOn: ['male-competition', 'sex-hormones'],
		collapseRisk: 'Moderate. The theoretical framework is strong; the specific human applications need more empirical support.',
		bookLocations: [
			{ pages: 'Ch. 4, 14', chapter: 'Ch. 4, 14', context: 'Condition-dependent expression, immunocompetence handicap, stressor vulnerability' }
		],
		evidenceRefs: [
			{ label: 'Folstad & Karter (1992) immunocompetence', authorSearch: 'Folstad' },
			{ label: 'Foo et al. (2017) testosterone-immune', authorSearch: 'Foo' },
			{ label: 'Hill (2014) mitochondrial energy', authorSearch: 'Hill' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	// Start from 'modern-manifestations' (the final applied conclusion) and trace back through weakest dependencies
	const target = chain.find((c) => c.id === 'modern-manifestations')!;
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
		'The argument chain for "Male, Female" is exceptionally well-constructed. Of 18 claims, 12 receive green status, reflecting Geary\'s ' +
		'reliance on meta-analyses, cross-species replications, and large cross-cultural datasets. The foundational chain (C1-C7) is almost entirely green, ' +
		'building from the evolution of sexual reproduction through anisogamy, parental investment theory, sexual selection mechanisms, life history theory, ' +
		'and hormonal organization -- each supported by extensive comparative evidence. The chain weakens modestly in the middle: ancestral social structure (C8) ' +
		'requires inference from fossils, fatherhood trade-offs (C9) face inconsistent cross-cultural evidence, and female competition (C12) has a thinner ' +
		'evidence base than male competition. The "motivation to control" framework (C13) is theoretically integrative but unfalsifiable as a unified theory. ' +
		'The modern-world applications (C17) are descriptively robust but attributing modern patterns specifically to evolved biases rather than ongoing ' +
		'socialization involves interpretive leaps. The condition-dependent vulnerability claims (C18) rest on strong theory but limited human-specific evidence. ' +
		'Overall, this is one of the most evidence-rich argument chains in the evolutionary psychology literature, strongest at the comparative-biological level ' +
		'and weakest when making specific claims about ancestral human social structure or modern causal mechanisms.'
};
