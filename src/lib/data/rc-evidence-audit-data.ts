// rc-evidence-audit-data.ts
// Cross-referencing claims in "Raising Cain" (Kindlon & Thompson) with replication status and methodological critiques

export interface EvidenceItem {
	id: string;
	claim: string;
	evidence: string;
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
		id: 'E1',
		claim: 'Newborn boys are more emotionally reactive than girls -- they cry more when frustrated or upset.',
		evidence: 'Replicated developmental psychology finding reviewed by Brody (1996).',
		pages: 'Ch. 1, pp. 9-11',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Replicated developmental psychology finding',
		detail:
			'Well-established in the developmental literature. Directly contradicts the folk belief that boys are "naturally" less emotional. ' +
			'Foundational to the book\'s central thesis that boys\' emotional shutdown is culturally imposed, not innate.'
	},
	{
		id: 'E2',
		claim: 'Males become less facially expressive of emotions with age, whereas females become more so -- a developmental shift driven by socialization.',
		evidence: 'Leslie Brody\'s published meta-analytic review of emotional expression research.',
		pages: 'Ch. 1, pp. 9-11',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Published meta-analytic review',
		detail:
			'Key evidence for the socialization thesis. Brody\'s meta-analytic review synthesizes multiple studies showing that the divergence ' +
			'in emotional expressiveness is developmental, not present at birth. This is the empirical backbone of the "emotional miseducation" argument.'
	},
	{
		id: 'E3',
		claim: 'Boys more stressed by a baby\'s crying turned off the speaker or told the baby to "shut up"; less stressed boys comforted the infant.',
		evidence: 'Fabes & Eisenberg (1994), published peer-reviewed experimental study.',
		pages: 'Ch. 1, pp. 9-11',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published peer-reviewed experimental study',
		detail:
			'Elegant experimental design linking emotional regulation capacity to empathic behavior. Shows that boys who lack emotional ' +
			'regulation skills default to avoidance or aggression rather than empathy -- a microcosm of the book\'s larger thesis.'
	},
	{
		id: 'E4',
		claim: 'No evidence of association between testosterone and aggressive behavior in preadolescent/early adolescent boys; violent boys at Bronx Children\'s Psychiatric Center had normal testosterone.',
		evidence: 'Review article + Constantino et al. (1993), Bronx Children\'s Psychiatric Center study.',
		pages: 'Ch. 1, pp. 11-16',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Multiple converging sources debunking testosterone-aggression link in youth',
		detail:
			'One of the book\'s strongest empirical claims. Multiple sources converge: a review article finding no association between ' +
			'testosterone and aggression in youth, plus a clinical study of violent boys showing normal testosterone levels. ' +
			'Effectively undermines biological determinist explanations for boy violence.'
	},
	{
		id: 'E5',
		claim: 'Peaceful societies (Semoi of Malaysia, Hutterite Brethren, Amish) raise nonviolent men, proving male violence is not biologically inevitable.',
		evidence: 'Anthropological case studies of peaceful societies with no history of male violence.',
		pages: 'Ch. 1, pp. 14-16',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Valid as existence proof against biological determinism; limited as causal evidence',
		detail:
			'Valid as counter-examples to the claim that male violence is biologically inevitable. These societies demonstrate that cultures ' +
			'can successfully raise nonviolent men. However, they are limited as causal explanations for modern Western boys because they ' +
			'differ in so many other ways from industrialized societies.'
	},
	{
		id: 'E6',
		claim: 'Boys are 4x more likely to be referred to school psychologist; 60-80% of learning disabilities are diagnosed in boys; boys are 2-4x as likely to be diagnosed with ADHD.',
		evidence: 'Large epidemiological data sets including Tennessee study of 8,258 children; national data.',
		pages: 'Ch. 2, pp. 20-50',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Robust and widely replicated epidemiological data',
		detail:
			'Large-scale data that is robust and widely replicated. The Tennessee study alone covers 8,258 children. ' +
			'These statistics form the empirical foundation for the claim that schools systematically disadvantage boys through ' +
			'developmental mismatch rather than genuine cognitive deficits.'
	},
	{
		id: 'E7',
		claim: 'Over 1 million boys on Ritalin by mid-1990s; prescriptions tripled between 1990 and 1995.',
		evidence: 'CDC/prescription database data.',
		pages: 'Ch. 2, pp. 20-50',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'CDC/prescription database data',
		detail:
			'Well-documented trend from CDC data. Now dated (1999 publication), but the trend has continued and intensified since. ' +
			'Supports the claim that boys are being medicated for developmental mismatch with school expectations rather than genuine disorders.'
	},
	{
		id: 'E8',
		claim: 'Teacher expectations shape student performance -- Rosenthal\'s "Pygmalion" study showed randomly labeled "bloomers" outperformed controls.',
		evidence: 'Rosenthal & Jacobson, classic highly cited experimental study.',
		pages: 'Ch. 2, pp. 20-50',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Classic, highly cited study (effect size debated but finding robust)',
		detail:
			'Applied by analogy to boy-expectations: if teachers expect boys to be disruptive and academically weaker, this expectation ' +
			'may become self-fulfilling. Not a study specifically about boys, but the general principle is well-established and the ' +
			'application to gender expectations in classrooms is reasonable.'
	},
	{
		id: 'E9',
		claim: 'For every 1 white girl hit in school, approximately 6 white boys are hit; for every 1 Asian girl, 8 Asian boys are hit.',
		evidence: 'U.S. Office for Education Civil Rights data covering 25 million+ children.',
		pages: 'Ch. 3, pp. 51-71',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Massive federal dataset (25 million+ children)',
		detail:
			'Massive sample from federal civil rights data. Compelling evidence of systematic gender bias in physical discipline. ' +
			'The ratios are striking and consistent across racial groups, strongly supporting the claim that boys receive ' +
			'disproportionately harsh physical punishment in schools.'
	},
	{
		id: 'E10',
		claim: 'Boys are 50% more likely to be physically abused than girls; fathers especially more likely to hit teenage sons.',
		evidence: 'Ontario survey of 13,000+ residents (MacMillan et al., 1997, JAMA).',
		pages: 'Ch. 3, pp. 51-71',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Large, representative Canadian sample published in JAMA',
		detail:
			'Published in JAMA with a large representative sample of 13,000+ Ontario residents. Demonstrates that the gender disparity ' +
			'in harsh treatment extends beyond schools into the home, with fathers particularly more likely to physically punish teenage sons.'
	},
	{
		id: 'E11',
		claim: 'Kindergartners spanked at home were more physically aggressive and more likely to bully at school.',
		evidence: 'Strassberg et al. (1994), published peer-reviewed study.',
		pages: 'Ch. 3, pp. 51-71',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published peer-reviewed study; consistent with broader literature',
		detail:
			'Correlational design limits strict causal inference, but the finding is consistent with the broader literature on physical punishment ' +
			'and aggression. Supports the book\'s claim that harsh discipline produces aggression rather than compliance or character.'
	},
	{
		id: 'E12',
		claim: 'Higher agreement with hypermasculine attitudes correlated with drinking, drug use, unprotected sex, school suspension, and sexual coercion -- across race and class.',
		evidence: 'National Survey of Adolescent Males (Pleck et al., multiple publications).',
		pages: 'Ch. 4, pp. 72-93; Ch. 10, pp. 193-217',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Large representative national survey with multiple publications',
		detail:
			'One of the book\'s most powerful pieces of evidence. Links masculinity ideology directly to concrete behavioral outcomes ' +
			'across racial and socioeconomic lines. The finding that the association holds regardless of race or class strengthens ' +
			'the cultural-training thesis over demographic explanations.'
	},
	{
		id: 'E13',
		claim: 'Father involvement in childcare at age 5 was the single strongest predictor of empathy at age 31 -- more powerful than all maternal factors combined.',
		evidence: 'Koestner, Franz & Weinberger (1990), 26-year longitudinal continuation of Sears & Maccoby "Patterns of Child Rearing" study.',
		pages: 'Ch. 5, pp. 94-114',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Landmark longitudinal study with 26-year follow-up',
		detail:
			'Exceptionally long follow-up period makes this a landmark finding. The authors describe it as "remarkable" and "astonishing." ' +
			'The fact that father involvement exceeded all maternal factors in predicting empathy supports the book\'s emphasis on ' +
			'the unique importance of the father-son relationship.'
	},
	{
		id: 'E14',
		claim: 'Of dozens of family factors studied, father attendance at PTA meetings was the single most predictive factor for a child\'s income at age 27.',
		evidence: 'Greg Duncan, 27-year panel study from Northwestern/Michigan with 1,000+ intact families.',
		pages: 'Ch. 5, pp. 94-114',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published longitudinal study with robust design',
		detail:
			'Surprising specificity of finding from a robust longitudinal design. Complements E13 in demonstrating the outsized ' +
			'impact of father involvement. The specific PTA-attendance finding suggests that visible engagement in a child\'s education -- ' +
			'not just financial provision -- drives outcomes.'
	},
	{
		id: 'E15',
		claim: 'Fathers and sons reported completely different experiences of the same shared moment 50% of the time; fathers consistently felt "in control" while sons did not.',
		evidence: 'Larson & Richards, "Divergent Realities" (1994), published book-length beeper study.',
		pages: 'Ch. 5, pp. 94-114',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Innovative published methodology; well-regarded study',
		detail:
			'Innovative "beeper" methodology captures real-time perceptions rather than retrospective accounts. Powerfully illustrates ' +
			'the perception gap between fathers and sons. The finding that fathers always felt "in control" while sons experienced the ' +
			'same moments very differently underscores the emotional gulf the authors describe.'
	},
	{
		id: 'E16',
		claim: 'Adolescent suicide has tripled since 1950; boys account for 80-86% of completions (1,625 of 1,890 annual teen suicides are boys; 253 of 330 annual child suicides are boys).',
		evidence: 'National Center for Health Statistics (1979-1995 data).',
		pages: 'Ch. 8, pp. 158-175',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Robust national health statistics',
		detail:
			'Robust national data from the gold-standard source. The gender disparity in completed suicides is dramatic and persistent. ' +
			'Now somewhat dated (1979-1995 data) but the trend has persisted and in some measures worsened. ' +
			'This is perhaps the book\'s most devastating piece of evidence for the cost of emotional miseducation.'
	},
	{
		id: 'E17',
		claim: 'On any given day, 14% of 15-year-old boys asked "Do you think about killing yourself?" say yes.',
		evidence: 'Reinherz et al. (1995), published in Journal of the American Academy of Child and Adolescent Psychiatry (JAACAP).',
		pages: 'Ch. 8, pp. 158-175',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published in top-tier child psychiatry journal',
		detail:
			'Alarming statistic from a respected journal that demonstrates the hidden prevalence of suicidal thinking among adolescent boys. ' +
			'Supports the claim that boy depression is systematically underdetected because it manifests as irritability or withdrawal ' +
			'rather than overt sadness.'
	},
	{
		id: 'E18',
		claim: 'Boys\' drug use rates are 1.5-2.5x girls\' across all substances; 2/3 of male high school seniors have been drunk; 40% drunk in past month.',
		evidence: 'Johnston, Bachman & O\'Malley, Monitoring the Future national surveys.',
		pages: 'Ch. 9, pp. 176-192',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Gold-standard annual national survey data',
		detail:
			'Monitoring the Future is the gold standard for adolescent substance use data, collected annually with large nationally representative samples. ' +
			'The gender disparities are consistent and striking. Supports the thesis that boys use substances to fill the emotional void ' +
			'created by their miseducation, though the causal mechanism is inferred.'
	},
	{
		id: 'E19',
		claim: 'Aggressive boys attribute hostile intent to ambiguous situations, use less relevant social information, and generate more hostile responses; the pattern predicts actual aggressive behavior.',
		evidence: 'Ken Dodge et al. (1986, 1987), multiple published experimental studies; well-replicated.',
		pages: 'Ch. 11, pp. 218-237',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Strong experimental design; well-replicated across multiple studies',
		detail:
			'One of the most rigorous pieces of evidence in the book. Dodge\'s attribution bias research uses controlled experimental designs ' +
			'and has been well-replicated. Directly supports the claim that boy violence is primarily reactive (based on misperceived threat) ' +
			'rather than predatory. The videotape methodology is elegant and the findings are robust.'
	},
	{
		id: 'E20',
		claim: 'Physically aggressive 13-year-old boys had lower testosterone than popular tough-but-nonaggressive leaders.',
		evidence: 'Tremblay et al. (1997), longitudinal study from kindergarten.',
		pages: 'Ch. 11, pp. 218-237',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published longitudinal study with counter-intuitive finding',
		detail:
			'Counter-intuitive finding that directly undermines the testosterone-causes-violence narrative. ' +
			'The longitudinal design tracking from kindergarten adds strength. Combined with E4, provides strong convergent evidence ' +
			'against biological determinism in boy aggression.'
	},
	{
		id: 'E21',
		claim: 'Boys with poor verbal expression are at significantly increased risk for aggression and delinquency.',
		evidence: 'Comprehensive meta-analytic review (Moffitt, 1990).',
		pages: 'Ch. 11, pp. 218-237',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Comprehensive meta-analytic review',
		detail:
			'Strong convergent evidence from a meta-analytic review that directly supports the book\'s core intervention philosophy: ' +
			'helping boys "use their words" is not just polite advice but a violence-prevention strategy. ' +
			'Connects emotional literacy (the book\'s central concept) to concrete delinquency outcomes.'
	},

	// ============ YELLOW ============
	{
		id: 'E22',
		claim: 'Dozens of clinical case studies illustrating each chapter\'s claims (Luke, Mario, Alan, Joe, Matt, Nick, Bobby, Connor, Jackson, Danny, Tony, Loren, Werther, Keith, Ted, Eric, Leif, Seth, Dale, and many more).',
		evidence: 'Authors\' combined 35+ years of clinical practice with boys in the Boston area, primarily white, affluent, private-school populations.',
		pages: 'All chapters',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Anecdotal by design; vivid but not generalizable; subject to selection bias',
		detail:
			'The book\'s primary rhetorical mode. Case studies are richly detailed, emotionally compelling, and provide extraordinary ' +
			'depth of clinical observation. However, they function as illustration rather than proof. They are drawn almost entirely ' +
			'from white, affluent, private-school boys in the Boston area, raising significant questions about generalizability. ' +
			'Subject to selection bias -- the authors chose cases that support their thesis.'
	},
	{
		id: 'E23',
		claim: 'The Glen Ridge gang rape case demonstrates the extreme end of the "entitled prince" archetype -- athletic entitlement producing gang rape of a disabled girl, with the community defending the perpetrators.',
		evidence: 'Bernard Lefkowitz, "Our Guys" (1997), single journalistic case study.',
		pages: 'Ch. 10, pp. 193-217',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Single journalistic case study; extreme outlier',
		detail:
			'Powerful as an illustration of the "entitled prince" archetype taken to its worst extreme, but not representative of ' +
			'typical boy behavior. As a single journalistic case study of an extreme outlier event, it has limited evidentiary value ' +
			'for understanding normal boy development. Functions more as a rhetorical warning than as data.'
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
		'Raising Cain is remarkably well-grounded for a clinical-narrative book. Of 23 evidence items, 21 are rated green (solidly supported) ' +
		'and only 2 are yellow (the clinical case studies as a body, and a single journalistic case study). None are red or untestable. ' +
		'The green-rated evidence spans developmental psychology (newborn reactivity, Brody\'s meta-analysis), large-scale epidemiology ' +
		'(school referral rates, corporal punishment data, suicide statistics, substance use surveys), landmark longitudinal studies ' +
		'(26-year empathy study, 27-year income study), and well-replicated experimental work (Dodge\'s attribution bias, Rosenthal\'s Pygmalion effect). ' +
		'The book\'s main evidentiary weakness is its heavy reliance on clinical case studies drawn from a narrow demographic (white, affluent, ' +
		'private-school boys in the Boston area), which limits generalizability. The prescriptive chapter (Ch. 12) offers clinical wisdom ' +
		'rather than tested interventions. Overall, the research foundation is strong but the causal mechanisms connecting emotional miseducation ' +
		'to specific outcomes are often inferred from clinical observation rather than experimentally demonstrated.'
};
