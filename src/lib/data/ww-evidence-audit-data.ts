// ww-evidence-audit-data.ts
// Cross-referencing claims in "Warriors and Worriers" (Joyce F. Benenson) with replication status and methodological critiques

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
	// ============ GREEN (E1, E2, E4, E6, E7, E8, E9, E10, E11, E16, E20, E21, E22, E23, E26, E28, E29) ============

	// E1
	{
		claim: '6-9 month old boys preferentially watch hitting vs. cuddling animations.',
		source: 'Benenson et al. (2011), published in Cognition.',
		pages: 'Ch. 2, ~pp. 27-51',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Published in Cognition; infant study conducted before significant socialization',
		detail:
			'This study is published in a well-regarded peer-reviewed journal. The infant age (6-9 months) makes it difficult to attribute ' +
			'the preference to socialization alone. The finding supports Benenson\'s claim that boys\' fascination with aggression appears very early. ' +
			'However, looking preferences in infants are a weak proxy for "innate pleasure from fighting" -- the inferential gap is significant.'
	},

	// E2
	{
		claim: 'By age 3, boys throw farther, faster, and more accurately than girls; this is the only physical skill with such a large early sex difference.',
		source: 'Thomas & French (1985) meta-analysis of sex differences in motor performance.',
		pages: 'Ch. 2, ~pp. 28-29',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Classic, well-cited meta-analysis; replicated finding',
		detail:
			'Thomas & French (1985) is a classic meta-analysis that has been extensively cited and the throwing sex difference is one of the most ' +
			'robust physical performance findings in the literature. The difference increases threefold by adolescence and has been found even ' +
			'in small hunter-gatherer communities (Hadza). Benenson uses this to support the warfare-preparation hypothesis, though alternative ' +
			'explanations (e.g., differential practice) exist for at least part of the difference.'
	},

	// E4
	{
		claim: 'Boys form one large interconnected friendship network while girls form isolated dyads and cliques.',
		source: 'Benenson (1990), published in peer-reviewed journal; replicated in multiple classrooms.',
		pages: 'Ch. 4, ~pp. 98-126',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Published in peer-reviewed journal; replicated in multiple classrooms',
		detail:
			'The finding that boys\' friendship networks are more interconnected while girls\' are more fragmented into dyads is a robust ' +
			'observation replicated across multiple classroom settings. Baines & Blatchford (2009) found a similar nested core-cluster-network ' +
			'structure among 7-8 year old boys in London. The descriptive finding is strong; the functional interpretation (that this serves ' +
			'military-style organization) is more speculative.'
	},

	// E6
	{
		claim: 'Girls at all ages take fewer risks than boys, based on a meta-analysis of 150 studies.',
		source: 'Byrnes et al. (1999) meta-analysis, published in Psychological Bulletin.',
		pages: 'Ch. 5, ~pp. 135-143',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Large meta-analysis in Psychological Bulletin; robust finding',
		detail:
			'Byrnes et al. (1999) is a well-powered meta-analysis published in a top-tier journal. The sex difference in risk-taking is ' +
			'one of the most reliable findings in the behavioral sex differences literature. It supports Benenson\'s "worrier" hypothesis by showing ' +
			'that females are consistently more risk-averse. The finding is descriptive -- the evolutionary interpretation is Benenson\'s addition.'
	},

	// E7
	{
		claim: 'Women have twice the rate of PTSD as men.',
		source: 'Tolin & Foa (2006), quantitative review of 25 years of research.',
		pages: 'Ch. 5, ~pp. 135-143',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Quantitative review of 25 years of research; well-established finding',
		detail:
			'The 2:1 female-to-male PTSD ratio is one of the most consistent findings in clinical psychology. Tolin & Foa (2006) ' +
			'synthesized 25 years of research. The finding supports the "worrier" hypothesis, though alternative explanations exist ' +
			'(differential trauma exposure, reporting biases, socialization). Benenson interprets it as evidence of evolved female vigilance.'
	},

	// E8
	{
		claim: 'Males commit over 90% of homicides in every country ever studied.',
		source: 'Daly & Wilson (1999); cross-cultural homicide data.',
		pages: 'Ch. 5-6, ~pp. 144-210',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Extremely well-documented cross-cultural finding',
		detail:
			'The sex difference in homicide perpetration is one of the most robust findings in all of behavioral science. It holds across ' +
			'every culture, every historical period, and every economic system studied. Daly & Wilson\'s work is foundational. ' +
			'Benenson uses this to support both the warrior hypothesis (males are more physically aggressive) and the worrier hypothesis ' +
			'(females avoid physical confrontation to preserve their lives for child-rearing).'
	},

	// E9
	{
		claim: 'At every age from 10-16, girls report more friendship breakups than boys; girls list more causes for friendship endings.',
		source: 'Benenson & Christakos (2003), published in Child Development.',
		pages: 'Ch. 6, ~pp. 198-210',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Published in Child Development; consistent findings across multiple studies',
		detail:
			'Benenson & Christakos (2003) is published in Child Development, a top developmental psychology journal. The finding is ' +
			'supported by converging evidence from Benenson & Alavi (2004), Soviet Union data (Kon & Losenkov 1978), and MacEvoy & Asher (2012). ' +
			'The cross-cultural consistency strengthens the finding. This is central to Benenson\'s argument about the fragility of female friendships.'
	},

	// E10
	{
		claim: 'Mothers are universally the primary caregivers across all hunter-gatherer and traditional societies; mother + children is the universal family core.',
		source: 'Konner (2010); Brown (1991) "universal people"; Hewlett & Lamb (2005).',
		pages: 'Ch. 7, ~pp. 212-265',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Massive cross-cultural anthropological evidence; foundational finding',
		detail:
			'The universality of maternal primary caregiving is among the most robust findings in anthropology. Konner (2010) draws on ' +
			'decades of cross-cultural research, and Brown (1991) identifies the mother-child unit as part of his "universal people." ' +
			'This is not controversial in the scientific literature. Benenson uses it as a cornerstone of the worrier framework.'
	},

	// E11
	{
		claim: 'A maternal grandmother living within 20km keeps 2 extra grandchildren alive per decade of life past 50.',
		source: 'Lahdenpera et al. (2004), published in Nature; Canadian and Finnish historical demographic data.',
		pages: 'Ch. 7, ~pp. 235-253',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published in Nature; historical demographic data with large sample',
		detail:
			'Lahdenpera et al. (2004) is published in Nature, one of the most prestigious scientific journals. The study uses large-scale ' +
			'historical demographic records from Canada and Finland. It provides quantitative evidence for the "grandmother hypothesis" and ' +
			'supports Benenson\'s claim that women require cooperative assistance for successful child-rearing.'
	},

	// E16
	{
		claim: 'Boys aged 4-9 in Plymouth, England spontaneously report fighting enemies as their favorite toy use (over 50% of responses).',
		source: 'Benenson et al. (2008), published peer-reviewed study with 200+ children.',
		pages: 'Ch. 2, ~pp. 27-51',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published peer-reviewed study with substantial sample size',
		detail:
			'This study by Benenson\'s own lab uses a sample of over 200 children and is published in a peer-reviewed journal. ' +
			'The finding that boys spontaneously report fighting enemies as their favorite toy use supports the claim that boys derive ' +
			'pleasure from enemy-oriented play. Cross-cultural observations in hunter-gatherer societies provide additional convergent evidence.'
	},

	// E20
	{
		claim: 'Approximately 90% of studies show women are more accurate at decoding nonverbal emotional cues than men.',
		source: 'Hall et al. (2000); cross-cultural replication in Japan, Sumatra, Vietnam, Poland, Hungary.',
		pages: 'Ch. 5, ~pp. 147-150',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Extremely well-replicated across cultures; one of the most robust sex differences',
		detail:
			'The female advantage in nonverbal decoding is one of the most well-replicated sex differences in psychology. ' +
			'Hall et al. (2000) synthesize a large body of research showing the advantage across diverse cultures. The advantage is ' +
			'greatest for detecting fear. Newborn girls make more eye contact (Hittelman & Dickes 1979), suggesting an early-appearing ' +
			'difference. Benenson interprets this as part of the worrier\'s information-gathering toolkit.'
	},

	// E21
	{
		claim: 'Campbell\'s (1999) "Staying Alive" model provides an evolutionary framework for female intrasexual aggression avoidance.',
		source: 'Campbell (1999), "Staying Alive: Evolution, Culture, and Women\'s Intrasexual Aggression," peer-reviewed theoretical framework.',
		pages: 'Ch. 5, ~pp. 129-167',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Influential peer-reviewed theoretical framework; widely cited in evolutionary psychology',
		detail:
			'Campbell\'s (1999) "Staying Alive" framework is an influential and widely cited theoretical model in evolutionary psychology. ' +
			'It provides the theoretical foundation for Benenson\'s worrier hypothesis by arguing that females evolved to avoid physical ' +
			'confrontation because a mother\'s death historically meant death for dependent children. The model is well-regarded but, ' +
			'as a theoretical framework, its specific predictions are not all directly testable.'
	},

	// E22
	{
		claim: 'Single fathers provide worse healthcare for children than single mothers, despite being wealthier on average.',
		source: 'US population-based healthcare data.',
		pages: 'Ch. 7, ~pp. 212-265',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Large US population-based data; robust finding',
		detail:
			'This finding comes from large-scale US population data and is difficult to attribute to confounders since single fathers ' +
			'actually have higher average incomes than single mothers. It supports Benenson\'s claim that maternal investment in children ' +
			'is qualitatively different from paternal investment, particularly regarding health vigilance.'
	},

	// E23
	{
		claim: 'Mothers spend more family income on children\'s food and education, while fathers spend more on alcohol and leisure, across Brazil, Mexico, UK, Canada, and Bangladesh.',
		source: 'Multiple independent household expenditure studies across five countries.',
		pages: 'Ch. 7, ~pp. 212-265',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Multiple independent studies in different countries; consistent cross-cultural finding',
		detail:
			'The finding that mothers allocate more income toward children\'s needs is replicated across at least five countries with ' +
			'different economic systems and cultures. The consistency of this pattern across Brazil, Mexico, Bangladesh, the UK, and Canada ' +
			'makes it difficult to attribute to any single cultural explanation. It supports the differential parental investment component ' +
			'of Benenson\'s worrier framework.'
	},

	// E26
	{
		claim: 'The ratio of young men aged 15-29 in a population predicts war fatalities across 88 countries.',
		source: 'Mesquida & Wiener (1999), published in Politics and the Life Sciences.',
		pages: 'Ch. 3, ~pp. 56-97',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published in Politics and the Life Sciences; robust cross-national finding',
		detail:
			'Mesquida & Wiener (1999) analyzed data from 88 countries and found a significant relationship between the proportion of ' +
			'young men and war fatalities. This supports the warrior hypothesis by demonstrating that male-heavy demographics predict ' +
			'intergroup violence at the population level. The finding is correlational but the cross-national scope strengthens it.'
	},

	// E28
	{
		claim: 'Polygynous households have higher child mortality rates.',
		source: 'Strassmann, longitudinal 8-year field study among the Dogon of Mali.',
		pages: 'Ch. 7, ~pp. 235-253',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Rigorous 8-year longitudinal field study',
		detail:
			'Strassmann\'s 8-year longitudinal study among the Dogon of Mali is methodologically rigorous and provides direct evidence ' +
			'that the division of paternal resources across multiple mothers harms child survival. This supports Benenson\'s argument ' +
			'that women require dedicated assistants (especially mates) for successful child-rearing.'
	},

	// E29
	{
		claim: 'Women in a computerized game switch to exclusionary alliance strategies when threatened by a competitor.',
		source: 'Benenson et al. (2013), published in PLoS One.',
		pages: 'Ch. 6, ~pp. 174-210',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published in PLoS One; experimental methodology',
		detail:
			'This experimental study is published in PLoS One and uses a controlled game paradigm to demonstrate that women adopt ' +
			'exclusionary coalitional strategies when threatened. It provides experimental support for the theoretical claim that ' +
			'female competition operates through indirect and exclusionary mechanisms rather than direct physical aggression.'
	},

	// ============ YELLOW (E3, E5, E12, E13, E14, E17, E18, E19, E24, E25) ============

	// E3
	{
		claim: '90% of preschool boys\' stories involve aggressive violence against enemies.',
		source: 'Nicolopoulou (1997); single classroom study in western Massachusetts.',
		pages: 'Ch. 2, ~pp. 27-51',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Single classroom in western Massachusetts; small sample',
		detail:
			'Nicolopoulou (1997) is based on a single classroom in western Massachusetts with a small sample. While the 90% figure is ' +
			'striking, it has not been replicated at scale. The finding is consistent with other observations of boys\' play themes but ' +
			'the specific percentage should be treated with caution given the limited sample and potential for local cultural effects.'
	},

	// E5
	{
		claim: 'Sherif\'s (1961) Robbers Cave experiment demonstrates that boys flexibly adjust leadership based on task expertise.',
		source: 'Sherif (1961), Robbers Cave experiment.',
		pages: 'Ch. 4, ~pp. 98-126',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Classic but unreplicated; methodological criticisms in recent scholarship',
		detail:
			'The Robbers Cave experiment is a classic in social psychology, but recent scholarship has revealed significant methodological ' +
			'concerns, including experimenter manipulation of conditions and selective reporting. The experiment has never been formally replicated. ' +
			'Benenson cites it for the finding that boys flexibly adjusted leadership based on task expertise, which is a reasonable reading ' +
			'of the data, but the overall study should be interpreted with caution.'
	},

	// E12
	{
		claim: 'Mathematical modeling suggests enough warfare deaths in human prehistory to select for cooperative fighting genes.',
		source: 'Bowles (2009), published in Science.',
		pages: 'Ch. 1-2, ~pp. 1-14, 23-54',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Published in Science but model assumptions are debated',
		detail:
			'Bowles (2009) is published in Science and uses archaeological and ethnographic data to model warfare mortality rates. ' +
			'The model suggests sufficient selection pressure for cooperative fighting traits. However, the model\'s assumptions about ' +
			'prehistoric warfare rates, group sizes, and genetic architecture have been debated. The paper is influential but ' +
			'not universally accepted as definitive proof of group selection for warfare traits.'
	},

	// E13
	{
		claim: 'Boys raised in kibbutzim become more effective fighters.',
		source: 'Snarey & Son (1986); historical studies of kibbutz-raised soldiers.',
		pages: 'Ch. 3, ~pp. 56-97',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Specific historical context; confounded with other kibbutz factors',
		detail:
			'The kibbutz evidence is drawn from a specific historical context (Israeli kibbutzim in the mid-20th century) and is ' +
			'confounded with many other factors unique to kibbutz life -- collective child-rearing, ideological commitment, military culture, ' +
			'and selection effects. It is suggestive but cannot isolate the specific variable (peer-group socialization) that Benenson emphasizes.'
	},

	// E14
	{
		claim: 'Boys\' group organization at ages 7-8 parallels US Army organizational structure (core-cluster-network).',
		source: 'Baines & Blatchford (2009); analogy to US Army structure.',
		pages: 'Ch. 4, ~pp. 98-126',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Interesting structural analogy but not tested as a formal hypothesis',
		detail:
			'Baines & Blatchford (2009) document the nested group structure among 7-8 year old boys in London, and the analogy to US Army ' +
			'organizational structure (squad-platoon-company) is striking. However, this is an analogy, not a tested hypothesis. ' +
			'Many organizational forms converge on hierarchical nesting for functional reasons unrelated to warfare preparation. ' +
			'The analogy is illustrative but not evidential in a strict sense.'
	},

	// E17
	{
		claim: 'Men reconcile faster after conflict: in a simulated nose-punch scenario, men\'s heart rates calmed faster and they released more cortisol preparing for reconciliation.',
		source: 'Benenson et al.; simulated conflict scenario study.',
		pages: 'Ch. 2-3, ~pp. 49-51',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Imagined scenario, not real conflict; small sample',
		detail:
			'This study uses an imagined conflict scenario rather than real conflict, which limits ecological validity. The sample size ' +
			'is small. The physiological measures (heart rate, cortisol) are objective, which is a strength, but the generalization from ' +
			'imagined nose-punching to real-world conflict reconciliation requires caution. Anecdotal evidence (the male stabbing reconciliation ' +
			'story, chimpanzee de Waal data) is mixed in without clear distinction from the experimental evidence.'
	},

	// E18
	{
		claim: '6 out of 7 girls\' play groups created social exclusion-themed plays, compared to 0 out of 7 boys\' groups.',
		source: 'Benenson observational study of children\'s play groups.',
		pages: 'Ch. 6, ~pp. 174-210',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Small N (7 groups per sex); no replication reported; potential demand characteristics',
		detail:
			'The 6/7 vs. 0/7 contrast is dramatic but the sample size is extremely small (14 groups total). No replication has been reported. ' +
			'The study may be subject to demand characteristics or coding biases. While the finding is consistent with the broader pattern ' +
			'of sex differences in social aggression, it should not be treated as strong standalone evidence.'
	},

	// E19
	{
		claim: 'Clinical interviews consistently find that women deny competing while simultaneously engaging in competition.',
		source: 'Tracy (1991); Barash (2006); Tanenbaum (2002); Heim et al. (2001).',
		pages: 'Ch. 6, ~pp. 174-184',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Clinical/qualitative evidence; self-report subject to bias',
		detail:
			'Multiple independent clinical and qualitative researchers have converged on the finding that women deny competing while ' +
			'doing so. The convergence across Tracy (1991), Barash (2006), Tanenbaum (2002), and Heim et al. (2001) is notable. ' +
			'However, clinical interview data is inherently subject to selection bias, social desirability effects, and interpretive bias ' +
			'by the researchers. The finding is suggestive rather than definitive.'
	},

	// E24
	{
		claim: 'Testosterone levels in 3-month-old males predict time spent looking at groups.',
		source: 'Alexander et al. (2009); small-sample infant study.',
		pages: 'Ch. 4, ~pp. 98-126',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Small sample; biological mechanism plausible but needs replication',
		detail:
			'Alexander et al. (2009) report a correlation between testosterone levels in 3-month-old males and looking time at group ' +
			'images. The biological mechanism is plausible -- prenatal/neonatal testosterone could influence social orientation. However, ' +
			'the sample is small and the finding has not been widely replicated. Benenson uses it to argue for an innate male preference ' +
			'for group contexts, but larger replication studies are needed.'
	},

	// E25
	{
		claim: 'Boys create extensive rule systems for marble games, treating them like "jurisprudence" (Piaget 1932); boys\' playground games last longer and involve more rules (Lever 1976, 1978).',
		source: 'Piaget (1932); Lever (1976, 1978); Gilligan (1982).',
		pages: 'Ch. 3, ~pp. 77-82',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Classic but old studies; cultural context has changed significantly since the 1930s-1970s',
		detail:
			'Piaget (1932) and Lever (1976, 1978) are classic developmental psychology studies. However, both were conducted in very ' +
			'different cultural contexts than today -- Swiss boys in the 1930s and American schoolyards in the 1970s. Modern children\'s play ' +
			'has changed dramatically with the advent of video games and structured activities. The sex difference in rule-orientation ' +
			'is supported by Gilligan (1982) but the specific magnitude and manifestation may have shifted.'
	},

	// ============ RED (E15, E27) ============

	// E15
	{
		claim: 'Informal interviews with parents confirm that boys spontaneously develop fascination with superhero and enemy play without parental encouragement.',
		source: 'Author\'s informal interviews with parents about superhero play.',
		pages: 'Ch. 2, ~pp. 23-54',
		centrality: 'minor',
		status: 'red',
		statusLabel: 'Anecdotal; not systematic; selection bias likely',
		detail:
			'These are informal, unsystematic interviews with parents who self-selected to discuss their children\'s play. There is no ' +
			'sampling frame, no control group, and no way to assess reporting biases. Parents who are surprised by their sons\' aggression ' +
			'may be more likely to share stories than those who are not. Benenson presents these as converging evidence but they are anecdotal ' +
			'at best and should not be given evidential weight.'
	},

	// E27
	{
		claim: 'A boy watching Scooby-Doo expressed distress at the characters\' lack of weapons when facing enemies.',
		source: 'Single anecdote from author\'s observation.',
		pages: 'Ch. 2, ~pp. 27-51',
		centrality: 'minor',
		status: 'red',
		statusLabel: 'Single anecdote; not systematic data',
		detail:
			'This is a single anecdote about one child watching one television show. It is vivid and memorable, which is likely why ' +
			'Benenson includes it, but it has no evidential value for establishing sex differences. It illustrates the warrior theme ' +
			'but cannot distinguish between innate fascination and socialized expectations. Its inclusion blurs the line between ' +
			'empirical evidence and storytelling.'
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
		'The evidence base for "Warriors and Worriers" is considerably stronger than many popular science books on sex differences. ' +
		'Of 29 evidence items, 17 are rated green (solidly supported), 10 are yellow (shaky/contested), and only 2 are red (problematic). ' +
		'The green-rated items include well-powered meta-analyses (risk-taking, throwing, nonverbal decoding), cross-cultural anthropological ' +
		'data (maternal caregiving, homicide sex ratios), and studies published in top journals (Nature, Cognition, Psychological Bulletin, ' +
		'Child Development). The yellow items tend to be older classic studies (Piaget, Sherif), small-sample studies from Benenson\'s own lab, ' +
		'or theoretical models with debated assumptions (Bowles 2009). The two red items are anecdotal observations with no systematic methodology. ' +
		'The book\'s greatest strength is its convergent-evidence strategy, drawing on developmental, cross-cultural, and primatological data. ' +
		'Its greatest weakness is the tendency to present the warfare-preparation and self-preservation functional interpretations as more ' +
		'established than the behavioral observations warrant -- the "what" is often much stronger than the "why."'
};
