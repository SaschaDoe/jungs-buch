// mf-evidence-audit-data.ts
// Cross-referencing claims in "Male, Female" 3rd ed. (David Geary) with replication status and methodological critiques

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
		claim: 'Cross-species patterns of parental investment and mating competition: in >90% of mammals, females provide most parental care and males compete for mates; sex-role-reversed species confirm the principle.',
		source: 'Clutton-Brock (1989); Janicke et al. (2016) meta-analysis; sex-role-reversed species (pipefish, phalaropes).',
		pages: 'Ch. 2-3',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Extremely well-documented across thousands of species',
		detail:
			'This is one of the most robust findings in evolutionary biology. The pattern of female-biased parental care and male-biased ' +
			'competition has been documented across thousands of mammalian species. Sex-role-reversed species (where males invest more in offspring) ' +
			'provide a critical natural experiment confirming the principle: when males invest more, females compete more intensely. ' +
			'Janicke et al. (2016) meta-analysis across 66 species provides strong quantitative support.'
	},
	{
		claim: 'Darwin\'s finch beak evolution: heritable trait variation, differential survival, and cross-generational change documented in real time over 40 years by Grant & Grant.',
		source: 'Grant & Grant (Princeton), 40-year longitudinal Galapagos field study.',
		pages: 'Ch. 2',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'One of the best empirical demonstrations of natural selection in action',
		detail:
			'The Grants\' 40-year study of Galapagos finches is universally regarded as one of the finest field demonstrations of natural selection. ' +
			'It documents heritable beak variation, differential survival during droughts, and measurable cross-generational change in beak morphology. ' +
			'Used by Geary to establish the empirical reality of natural selection as a mechanism before applying it to sex differences.'
	},
	{
		claim: 'MHC-based mate choice across vertebrates: females prefer mates with different MHC genes, creating offspring with diverse immune systems.',
		source: 'Kamiya et al. (2014) meta-analysis across mammals, birds, fish, reptiles.',
		pages: 'Ch. 2-3',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Well-supported by meta-analysis across multiple vertebrate classes',
		detail:
			'The Kamiya et al. (2014) meta-analysis confirms MHC-disassortative mate choice across a broad range of vertebrate species. ' +
			'This supports both the Red Queen hypothesis (C1) and the claim that female choice drives evolution of honest quality signals (C4). ' +
			'The finding links sexual selection to immunological benefit for offspring.'
	},
	{
		claim: 'Elephant seal reproductive skew and sexual dimorphism: <5% of males sire 75-85% of pups; males 3-8x heavier than females; 50% mortality for intensely competing young males.',
		source: 'DNA fingerprinting (Hoelzel et al., 1999); behavioral observation studies.',
		pages: 'Ch. 3-4',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'DNA fingerprinting confirmed behavioral estimates',
		detail:
			'Northern elephant seals provide a dramatic demonstration of sexual selection. DNA paternity studies confirmed the extreme reproductive skew ' +
			'previously estimated from behavioral observation, though actual skew is somewhat lower than behavioral estimates suggested. ' +
			'The extreme size dimorphism (males 3-8x heavier) and high mortality among competing young males illustrate the intensity of male-male competition. ' +
			'Used by Geary as a paradigmatic example of how mating system drives sex differences.'
	},
	{
		claim: 'Vole species comparisons: polygynous meadow vole males have better spatial abilities than females; no sex difference in monogamous prairie/woodland voles.',
		source: 'Jasarevic et al. (2012); Perdue et al. (2011); replicated across multiple mammal species.',
		pages: 'Ch. 3, 13',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Replicated across multiple mammal species with different mating systems',
		detail:
			'The comparison between vole species with different mating systems is a powerful natural experiment. Polygynous meadow vole males, ' +
			'who range over larger territories to find multiple mates, show superior spatial abilities relative to females. ' +
			'Monogamous prairie and woodland voles, where males do not range widely, show no sex difference. This pattern has been replicated ' +
			'across multiple mammal species, strongly supporting the link between mating system and cognitive sex differences.'
	},
	{
		claim: 'Buss (1989) 37-culture mate preference study: women rate good financial prospect higher than men in all 37 cultures; men rate physical attractiveness higher.',
		source: 'Buss (1989), N > 10,000 across 37 cultures; Conroy-Beam et al. (2015) replication.',
		pages: 'Ch. 7',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Replicated and extended multiple times; sex difference ~2x larger than cross-cultural variation',
		detail:
			'The Buss (1989) study remains one of the largest cross-cultural studies in psychology. Women rate financial prospects higher in all 37 cultures, ' +
			'and men rate physical attractiveness higher. Conroy-Beam et al. (2015) confirmed that the sex difference in financial-prospect preference ' +
			'is approximately 2x larger than the cross-cultural variation, meaning sex predicts this preference better than culture does. ' +
			'The universality across very different societies is a strong argument against purely cultural explanations.'
	},
	{
		claim: 'Operational sex ratio influences mating dynamics: when men outnumber women, women demand more resources; when women outnumber men, men invest less in parenting.',
		source: 'Guttentag & Secord (1983); Pollet & Nettle (2008); documented across historical periods, cultures, and species.',
		pages: 'Ch. 6, 8',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Documented across historical periods, cultures, and species',
		detail:
			'The influence of operational sex ratio on mating dynamics has been documented across human historical periods, diverse cultures, ' +
			'and nonhuman species. The finding that the scarcer sex can "demand" more from the abundant sex is consistent with basic supply-demand logic ' +
			'applied to mating markets. Geary uses this to support the facultative nature of men\'s parenting investment (C9).'
	},
	{
		claim: 'Brain sex differences and classification accuracy: 93-95% of adults can be correctly classified as male or female from brain structure alone.',
		source: 'Chekroud et al. (2016); Anderson et al. (2019); contradicts Joel et al. (2015) "mosaic brain" interpretation.',
		pages: 'Ch. 12',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Replicated with large samples; pattern-based classification is robust',
		detail:
			'While individual brain features overlap substantially between sexes (as Joel et al. 2015 emphasized), the overall pattern of features ' +
			'reliably distinguishes male from female brains with 93-95% accuracy. Geary uses the analogy that individual facial features also overlap ' +
			'between sexes, yet faces are easily sexed. This contradicts the "mosaic brain" narrative but does not imply that every brain region differs; ' +
			'it is the multivariate pattern that distinguishes.'
	},
	{
		claim: 'Prenatal hormone effects (CAH studies): girls with congenital adrenal hyperplasia show more boy-typical play, interests, and some social behaviors; most still identify as female.',
		source: 'Berenbaum et al. (2018); multiple CAH studies across different populations.',
		pages: 'Ch. 4, 10',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Natural experiment with consistent findings across many studies',
		detail:
			'Congenital adrenal hyperplasia provides a natural experiment: girls exposed to excess prenatal androgens show shifted play preferences, ' +
			'spatial abilities, and activity levels toward male-typical patterns. Most still identify as female, showing that prenatal hormones ' +
			'influence behavioral tendencies without determining gender identity. This is one of the strongest pieces of evidence for biological ' +
			'influences on sex-typed behavior in humans.'
	},
	{
		claim: 'Cross-cultural sex segregation in children\'s play: by age 6-7, children spend 11 hours in same-sex groups for every 1 hour in mixed-sex groups; found across 10+ countries.',
		source: 'Maccoby & Jacklin (1987); Whiting & Edwards (1988); replicated across USA, Canada, China, England, Kenya, Mexico, Japan, India, and more.',
		pages: 'Ch. 10-11',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'One of the most robust findings in developmental psychology',
		detail:
			'Childhood sex segregation is among the most consistently replicated findings in developmental psychology. The 11:1 ratio of same-sex ' +
			'to mixed-sex play time by ages 6-7 appears across vastly different cultures. Children self-segregate beginning around age 3. ' +
			'Boys form large competitive groups with dominance hierarchies; girls form intense dyadic friendships emphasizing emotional intimacy and disclosure. ' +
			'These patterns track adult competition and parenting patterns predicted by sexual selection theory.'
	},
	{
		claim: 'Sex differences in intelligence distribution: no average sex difference at age 11, but 2:1 ratio of boys to girls at both extremes (top and bottom).',
		source: 'Johnson et al. (2008), N > 150,000; greater male variability replicated consistently.',
		pages: 'Ch. 14',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'One of the most consistently replicated findings; large sample',
		detail:
			'Greater male variability in cognitive abilities is one of the most consistently replicated findings in psychometrics. ' +
			'Johnson et al. (2008) with N > 150,000 found no average sex difference at age 11 but a 2:1 ratio of boys to girls at both extremes. ' +
			'This means more males at the top AND bottom of the distribution. A small average advantage for males may emerge by late adolescence. ' +
			'Geary interprets this through the lens of sexual selection: traits under stronger selection pressure show more variability.'
	},
	{
		claim: 'Folk biological knowledge in traditional societies: women know more about local plants; men know more about local animals; mothers\' folk biological knowledge predicts children\'s health.',
		source: 'McDade et al. (2007); ethnobotanical and ethnozoological studies across traditional societies.',
		pages: 'Ch. 13',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Documented across multiple traditional societies; health outcome link replicated',
		detail:
			'Sex-differentiated folk biological knowledge is documented across multiple traditional societies. Women\'s greater plant knowledge ' +
			'and men\'s greater animal knowledge align with the evolutionary division of gathering and hunting. The finding that mothers\' ' +
			'folk biological knowledge predicts children\'s health (McDade et al., 2007) provides a fitness-relevant link. ' +
			'However, Geary acknowledges this could reflect engagement in different activities rather than innate cognitive bias.'
	},

	// ============ YELLOW ============
	{
		claim: 'Australopithecus fossil sex dimorphism: male ancestors much larger than females ~4 million years ago; dimorphism decreased over Homo, implying decreasing intensity of male-male competition.',
		source: 'Grabowski et al. (2015); fossil morphological studies; inference from living primate analogues.',
		pages: 'Ch. 5',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Fossil size differences confirmed, but exact social structure is debated',
		detail:
			'The physical size dimorphism in Australopithecus fossils is confirmed by Grabowski et al. (2015) and others. ' +
			'However, interpreting behavioral and social patterns from fossil remains requires inference from living primate analogues, ' +
			'which introduces uncertainty. The decreasing dimorphism over Homo is consistent with reduced polygyny and increased paternal investment, ' +
			'but the exact social structure of ancestral hominins remains debated among paleoanthropologists.'
	},
	{
		claim: 'Chagnon\'s Yanomamo data: warriors who killed have 2.5x more wives and 3x more children; ~25% of men die violently.',
		source: 'Chagnon (1997); critiqued methodologically and ethically; broader pattern confirmed by Keeley (1996), Walker & Bailey (2013).',
		pages: 'Ch. 8',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Frequently cited but methodologically and ethically critiqued; broader pattern is confirmed',
		detail:
			'Chagnon\'s data has been critiqued on methodological grounds (age confound: older men are both more likely to have killed and more likely to have wives) ' +
			'and ethical grounds (informed consent, impact on Yanomamo). However, the broader pattern of violence in traditional societies and its link ' +
			'to male reproductive success is confirmed by independent researchers (Keeley 1996, Walker & Bailey 2013) across many societies. ' +
			'Geary uses it alongside this broader cross-cultural data, not in isolation.'
	},
	{
		claim: 'Father absence and child mortality: among the Ache, father absence triples probability of child death from illness and doubles kidnapping/killing risk.',
		source: 'Hill & Hurtado (1996) Ache data; Sear & Mace (2008) cross-cultural review found inconsistent father effect.',
		pages: 'Ch. 6',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Strong for Ache but inconsistent across other traditional cultures',
		detail:
			'The Ache data (Hill & Hurtado, 1996) is compelling, showing father absence triples child mortality from illness. However, Sear & Mace (2008) ' +
			'found no consistent relationship between father presence and child mortality across traditional societies -- other kin can often compensate. ' +
			'Geary acknowledges this but argues that protection from other men is the one area where kin cannot compensate, and that subtle effects on health ' +
			'and social competitiveness persist even when mortality is unaffected. The father effect is more consistent in preindustrial and developing nations.'
	},
	{
		claim: 'Physical development and throwing sex differences: by age 2-4, >90% of boys throw farther than the average girl; forearm bones longer in boys from birth.',
		source: 'Thomas & French (1985); Gindhart (1973); Kim et al. (2006).',
		pages: 'Ch. 13',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Among the largest and earliest-emerging motor sex differences; skeletal differences present at birth',
		detail:
			'The throwing sex difference is among the largest and earliest-emerging cognitive/motor sex differences. By age 2-4, over 90% of boys throw ' +
			'farther than the average girl, and by age 17 only the very best girls match the least skilled boys. Forearm bones are longer in boys from birth ' +
			'(Gindhart, 1973), and by age 15 boys have 70% more muscle tissue (Kim et al., 2006). The skeletal differences present at birth make it ' +
			'difficult to attribute entirely to socialization. Geary interprets this through the lens of male-male projectile competition in ancestral environments.'
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
		'The evidence base for "Male, Female" is remarkably strong compared to most popular science books on sex differences. ' +
		'Twelve of sixteen evidence items receive green status, reflecting Geary\'s reliance on meta-analyses, cross-species replications, ' +
		'large cross-cultural studies, and natural experiments (CAH, vole species comparisons). The strongest evidence comes from cross-species ' +
		'patterns of parental investment (thousands of species), the Buss 37-culture mate preference study (replicated multiple times), ' +
		'brain classification accuracy (93-95%), and childhood sex segregation (replicated across 10+ countries). ' +
		'The three yellow items involve inherent inferential challenges: reconstructing ancestral social structure from fossils (Australopithecus), ' +
		'methodologically critiqued ethnographic data (Yanomamo), and inconsistent cross-cultural findings on father absence. ' +
		'Geary consistently acknowledges limitations and competing explanations, and his interactionist position (biology provides scaffolding, ' +
		'experience fills in details) is more nuanced than many popular treatments of sex differences. The book is strongest on cross-species ' +
		'comparative evidence and weakest when making specific claims about ancestral human social structure.'
};
