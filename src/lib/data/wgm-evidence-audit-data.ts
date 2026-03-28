// wgm-evidence-audit-data.ts
// Cross-referencing claims in "Why Gender Matters" (Leonard Sax) with replication status and methodological critiques

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
	// ============ RED ============
	{
		claim: '"35% of normal college men would rape if assured of not being caught"; in another study, more than 50%.',
		source: 'Malamuth (1981) and related 1980s studies.',
		pages: 'Ch. 6, ~p. 102-121',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Old studies with contested methodology; modern replications find much lower rates',
		detail:
			'These studies (Malamuth, 1981; others from the 1980s) used specific wording that has been critiqued. ' +
			'A more recent replication using the word "rape" (rather than "force a woman to have sex") found much lower rates (~14%). ' +
			'The studies are old and the methodology is debated. Sax presents these numbers without caveat. The finding is contested.'
	},

	// ============ YELLOW ============
	{
		claim: "Dalton's olfactory sensitivity study: Women's ability to detect an odor improved 100,000-fold with repeated exposure; men showed no improvement.",
		source: 'Pamela Dalton, Monell Chemical Senses Center.',
		pages: 'Ch. 2, ~p. 12-14',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Individual study, not a meta-analysis; extraordinary effect size',
		detail:
			'The effect size is extraordinary and has been cited widely, but the study tested only a small number ' +
			'of odors and subjects. Not yet replicated at this scale by independent labs. ' +
			'The separate finding about 16.2 million vs. 9.2 million cells in the olfactory bulb (Brazilian study) is well-replicated.'
	},
	{
		claim: 'Ring-toss "risky shift": Young men stand farther from the target and show a risky shift when other men are watching; women do not.',
		source: 'Classic social psychology literature on risk-taking.',
		pages: 'Ch. 3, ~p. 25-30',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Classic finding, but the specific study cited is older',
		detail:
			'The general "risky shift" phenomenon is well-established in social psychology. However, the specific ' +
			'study cited is older and has not been precisely replicated with modern methods. ' +
			'Cross-species evidence from Japanese macaques strengthens the broader claim about sex differences in risk-taking.'
	},
	{
		claim: 'ADHD medications may shrink the nucleus accumbens, which correlates with decreased motivation.',
		source: 'Emerging research on stimulant effects on brain structure.',
		pages: 'Ch. 5, ~p. 85-95',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Emerging research; causal interpretation still debated',
		detail:
			'The finding is published but the causal interpretation is still debated. The correlation between ' +
			'nucleus accumbens size and motivation comes from separate studies. Sax uses this to argue against ' +
			'ADHD medication, which is a stronger claim than the evidence warrants. Many children genuinely benefit ' +
			'from stimulant medication.'
	},
	{
		claim: 'Transgender desistence rates: 88% of boys who said they were girls grew out of it (largest study, N=139).',
		source: 'Study of 139 boys; Dutch studies; Canadian studies.',
		pages: 'Ch. 11, ~p. 226-257',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Published and replicated, but methodological concerns are legitimate',
		detail:
			'The finding is published and replicated across multiple clinics, but critics note: ' +
			'(a) older studies used different diagnostic criteria than current DSM-5 "gender dysphoria"; ' +
			'(b) some children in these studies may have been merely gender-nonconforming rather than truly transgender; ' +
			'(c) the studies predate the current era of social transition. Sax cites desistence rates as the primary reason ' +
			'to oppose early social transition. While the data support caution, the debate is active and the evidence base is evolving.'
	},
	{
		claim: 'Swedish long-term follow-up: Transgender individuals post-surgery are 19x more likely to die by suicide than matched controls.',
		source: 'Dhejne et al. (2011), long-term follow-up of sex reassignment.',
		pages: 'Ch. 11, ~p. 240-250',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Well-conducted study, but the authors say it should not be used to argue against surgery',
		detail:
			'This is a well-conducted cohort study (Dhejne et al., 2011), but the authors themselves have stated that ' +
			'the study should not be interpreted as evidence against sex reassignment surgery, since the comparison group is ' +
			'the general population, not untreated transgender individuals. Sax does not mention this important caveat. ' +
			'The study shows surgery does not fully resolve psychiatric risk, but using it to argue against surgery requires ' +
			'comparison with untreated outcomes, which this study does not provide.'
	},
	{
		claim: "Craig Anderson's meta-analyses: Violent video games are associated with increased aggressive behavior, with effect sizes comparable to secondhand smoke/lung cancer.",
		source: 'Craig Anderson, meta-analyses on violent video games.',
		pages: 'Ch. 8, ~p. 147-171',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: "Anderson's meta-analyses are rigorous but the field remains divided",
		detail:
			"Anderson's meta-analyses are methodologically rigorous, but Christopher Ferguson and others have published " +
			'competing meta-analyses showing smaller or null effects. The APA\'s own position statement (2015, updated 2020) ' +
			'acknowledged a link to aggression but not to criminal violence. Sax presents Anderson\'s position as settled science; it is not.'
	},

	// ============ GREEN ============
	{
		claim: "Stevens' Power Law hearing studies: Women's Stevens' n is 38-49% higher than men's, meaning women are significantly more sensitive to mid-range sounds.",
		source: "Multiple studies using Stevens' Power Law; McGuinness.",
		pages: 'Ch. 2, ~p. 15-18',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Multiple studies using different methodologies converge on the same finding',
		detail:
			"Multiple studies using different methodologies converge on the same finding. McGuinness's ~8 dB difference " +
			'is replicated. The application to classroom behavior (explaining why boys do not pay attention to soft-spoken teachers) ' +
			'is a reasonable inference but not directly tested in an RCT.'
	},
	{
		claim: 'Cross-cultural drawing studies: In every culture studied, girls draw people/pets/flowers with many colors; boys draw action scenes with fewer colors.',
		source: 'Cross-cultural studies of children\'s drawings (Africa, Asia, Europe, North America).',
		pages: 'Ch. 2, ~p. 19-24',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Replicated across multiple continents',
		detail:
			'Replicated across multiple continents. The link to visual neuroscience (parvocellular vs. magnocellular pathways) ' +
			'is theoretically plausible but not directly proven as the causal mechanism for drawing preferences.'
	},
	{
		claim: 'CAH (Congenital Adrenal Hyperplasia) girls choose more masculine toys in proportion to androgen exposure; parental encouragement toward feminine toys had zero effect.',
		source: 'Multiple CAH studies in developmental psychology.',
		pages: 'Ch. 4, ~p. 43-62',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Well-replicated "natural experiment" widely accepted in developmental psychology',
		detail:
			'This is some of the strongest evidence in the book for the biological basis of gendered behavior. ' +
			'CAH studies are considered a well-replicated "natural experiment" and are widely accepted in developmental psychology.'
	},
	{
		claim: 'Drowning statistics: Boys 15-19 are 9.8x more likely to die from drowning; young men 20-24 are 10.4x more likely.',
		source: 'Epidemiological data on drowning rates.',
		pages: 'Ch. 3, ~p. 30-35',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Epidemiological data, well-documented',
		detail: 'Well-documented epidemiological data. The sex difference in drowning rates is consistent across countries and time periods.'
	},
	{
		claim: 'Brain development pace: Girls reach brain development inflection point approximately 4 years before boys.',
		source: 'Lenroot et al., large NIH longitudinal brain imaging study, Neuroimage.',
		pages: 'Ch. 5, ~p. 78-85',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Large NIH longitudinal brain imaging study, robust and widely cited',
		detail:
			'This is a large NIH longitudinal brain imaging study published in Neuroimage. The finding is robust and widely cited. ' +
			'However, the exact implications for educational policy are debated.'
	},
	{
		claim: 'fMRI studies of sexual arousal: Men show more activation in primitive brain areas; women show more cortical activation. No differences between gay and straight men.',
		source: 'Multiple fMRI studies on sexual arousal.',
		pages: 'Ch. 6, ~p. 102-115',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Replicated across multiple fMRI studies',
		detail:
			'Replicated across multiple fMRI studies. The broader claim that "testosterone mediates both sex and aggression in males" ' +
			'is a simplification of complex neurobiology, but the core fMRI finding is solid.'
	},
	{
		claim: 'Bailey twin studies on homosexuality: 52% concordance for identical twins (first study); ~25% in larger studies vs. 13% for fraternal twins.',
		source: "Bailey's twin studies on homosexuality; Blanchard's fraternal birth order research.",
		pages: 'Ch. 10, ~p. 197-224',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Large, well-conducted twin studies with replicated results',
		detail:
			'Large, well-conducted twin studies. The finding that genetic factors play a larger role in male than female ' +
			'homosexuality is well-supported. The fraternal birth order effect is also well-replicated.'
	},
	{
		claim: "Babcock's salary negotiation study: Only 7% of female Carnegie Mellon graduates negotiated starting salary vs. 57% of males.",
		source: 'Linda Babcock, "Women Don\'t Ask," Carnegie Mellon.',
		pages: 'Ch. 3, ~p. 35-39',
		centrality: 'minor',
		status: 'green',
		statusLabel: 'Well-cited study in economics',
		detail:
			'Well-cited study in economics, published in Babcock\'s book "Women Don\'t Ask." Subsequent research has complicated ' +
			'this picture, showing that women who negotiate may face social backlash (the "social cost" of negotiation for women). ' +
			'Sax does not discuss this nuance.'
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
		'The book presents a large number of empirical findings about sex differences, many of which are well-supported by peer-reviewed research. ' +
		'The strongest evidence comes from sensory neuroscience (hearing, smell, vision), brain development timing, CAH studies, and twin studies of sexual orientation. ' +
		'The weakest evidence surrounds the prescriptive claims about education, the video game debate, the transgender desistence statistics, and the cultural critiques in the final chapter. ' +
		'A notable blind spot: Sax tends to cite studies that support his thesis and does not always engage with contradictory evidence ' +
		'(e.g., Ferguson\'s competing video game meta-analyses; the Dhejne study authors\' own caveats about their transgender surgery data). ' +
		'The book is most valuable as a synthesis of sex-difference research across many domains; it is least reliable when it moves from describing differences to prescribing specific cultural remedies.'
};
