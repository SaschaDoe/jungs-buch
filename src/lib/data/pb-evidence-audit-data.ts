// pb-evidence-audit-data.ts
// Cross-referencing claims in "Pink Brain, Blue Brain" (Lise Eliot) with replication status and methodological critiques

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
	// ============ GREEN (E1-E6, E10, E13-E20, E22, E24-E26, E28-E32) ============

	// E1
	{
		claim: '1997 meta-analysis of 50 corpus callosum studies (Bishop & Whalsten) found no reliable sex difference in corpus callosum size or shape.',
		source: 'Bishop & Whalsten 1997 meta-analysis.',
		pages: 'Intro, pp. 5-6',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Published in authoritative journal; large sample of studies',
		detail:
			'This meta-analysis aggregated 50 studies and found no reliable sex difference in the corpus callosum, directly refuting ' +
			'popular claims by Gurian and others that girls have a "25% larger" corpus callosum. The finding is widely accepted in the neuroscience community.'
	},

	// E2
	{
		claim: 'MRI brain volume study of children 4-18 shows boys\' brains are approximately 9% larger, mirroring overall body-size differences.',
		source: 'Large MRI study of children aged 4-18.',
		pages: 'Intro, pp. 5-6',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Large study, consistent with adult data',
		detail:
			'The brain-size difference is real and well-documented but mirrors the general body-size difference between boys and girls. ' +
			'Eliot uses this to argue that the two reliably proven brain differences in children (size and maturation rate) are both ' +
			'consequences of overall body development rather than evidence of fundamentally different cognitive architectures.'
	},

	// E3
	{
		claim: 'Hyde 2005 meta-analysis of 124 psychological traits found 77% have d < 0.35 (small range), supporting the "Gender Similarities Hypothesis."',
		source: 'Janet Hyde 2005 meta-analysis.',
		pages: 'Intro, pp. 13-15',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Landmark meta-analysis, widely cited',
		detail:
			'Hyde\'s review is a landmark paper in the field, aggregating decades of research across 124 traits. The finding that the ' +
			'vast majority of psychological sex differences are small (d < 0.35) is one of the most important empirical foundations of the book. ' +
			'Height difference (d=2.6) dwarfs all psychological differences, providing helpful context for interpreting effect sizes.'
	},

	// E4
	{
		claim: 'CAH girls exposed to high androgens show more masculine toy preferences and rough play, replicated across multiple labs (Berenbaum & Snyder; Pasterski et al.).',
		source: 'Berenbaum & Snyder; Pasterski et al. CAH studies.',
		pages: 'Ch. 1, pp. 36-48',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Replicated across multiple labs',
		detail:
			'The CAH studies provide some of the strongest evidence for prenatal hormonal influence on behavior. Girls with CAH consistently ' +
			'show more masculine toy preferences and play styles. However, Eliot emphasizes that these same girls nearly all retain female gender identity, ' +
			'demonstrating that hormones bias but do not determine gendered behavior.'
	},

	// E5
	{
		claim: 'CAH girls retain female gender identity despite exposure to high prenatal androgens; nearly all remain female-identified.',
		source: 'Multiple CAH gender identity studies.',
		pages: 'Ch. 1, pp. 36-48',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Consistent finding across studies',
		detail:
			'This finding is crucial to Eliot\'s argument that prenatal testosterone "merely biases rather than determines" sex-typed behavior. ' +
			'Even with extreme prenatal androgen exposure, gender identity remains female, suggesting that socialization and cognitive gender ' +
			'identification are more powerful determinants of gender identity than hormones alone.'
	},

	// E6
	{
		claim: 'Finnish twin study of thousands of women found no behavioral effect of having a male co-twin (opposite-sex twin studies).',
		source: 'Large Finnish twin registry study.',
		pages: 'Ch. 1, pp. 36-48',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Very large population study',
		detail:
			'This large-scale population study found that girls with male co-twins showed almost no behavioral masculinization despite some ' +
			'physiological effects. No effect on puberty timing, interests, or number of children was detected. This undermines the popular ' +
			'notion that prenatal testosterone exposure from a male twin significantly masculinizes female behavior.'
	},

	// E7
	{
		claim: 'Digit ratio (2D:4D) correlations with behavior are "quite small" and not predictive of individual outcomes.',
		source: 'Manning et al. digit ratio research.',
		pages: 'Ch. 1, pp. 36-48',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Effect sizes very small; link to prenatal testosterone is "pretty weak" per Eliot',
		detail:
			'Digit ratio has been widely used as a proxy for prenatal testosterone exposure, but Eliot notes that even Manning\'s own team ' +
			'concluded that prenatal hormones exert "a modest predisposing influence" that "merely bias, rather than determine" behavior. ' +
			'The correlations are too small to be predictive at the individual level.'
	},

	// E8
	{
		claim: 'Maccoby & Jacklin 1974 review of newborn sensory differences found few reliable sex differences in touch, hearing, or vision.',
		source: 'Maccoby & Jacklin 1974 comprehensive review.',
		pages: 'Ch. 2, pp. 67-72',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Thorough but dated (1974); newer studies partially update',
		detail:
			'The Maccoby & Jacklin review remains influential but is dated. For touch, girls were more sensitive in only 5 of 13 studies. ' +
			'For hearing, only 1 of 6 studies found girls more responsive. For vision, no difference in 9 studies of approximately 400 newborns. ' +
			'Newer studies have partially updated these findings but the general conclusion of minimal sex differences in infant sensory abilities holds.'
	},

	// E9
	{
		claim: 'Swedish infrared study found boys show greater cortical activation to pain despite girls showing more facial response.',
		source: 'Swedish infrared cortical activation study.',
		pages: 'Ch. 2, pp. 67-72',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Single study; novel technique at the time',
		detail:
			'This study used a novel infrared technique and found the intriguing result that newborn boys showed greater cortical pain activation ' +
			'even though girls showed more facial pain response. If replicated, this suggests behavioral expression of pain diverges from ' +
			'neurological experience very early. However, as a single study with a novel method, it requires replication.'
	},

	// E10
	{
		claim: 'OAE (otoacoustic emission) sex difference is d=0.15, and the hearing threshold difference is only 3 dB in a 130 dB real-world range.',
		source: 'OAE studies; audiometric threshold data.',
		pages: 'Ch. 2, pp. 70-71',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Well-replicated; effect is real but trivially small',
		detail:
			'The hearing sex difference is real but trivially small. The 3 dB threshold difference is negligible in the 130 dB real-world ' +
			'range. This directly undermines Leonard Sax\'s claim that classroom noise levels should be adjusted for boys versus girls, ' +
			'and his assertion that girls hear shouting when dads speak normally is not supported by these data.'
	},

	// E11
	{
		claim: 'Baron-Cohen newborn face/mobile study (Connellan et al. 2000) was not fully blinded, showed small effects, and has never been replicated.',
		source: 'Connellan et al. 2000; critique by Eliot and others.',
		pages: 'Ch. 2, pp. 82-84',
		centrality: 'critical',
		status: 'red',
		statusLabel: 'Not blinded; never replicated; contradicted by earlier literature',
		detail:
			'This widely cited study had 102 newborns, but the live face (Jennifer Connellan) was not always blind to the baby\'s sex. ' +
			'The effect was small (boys 52% mobile/46% face; girls 41%/49%). It was never replicated in 9+ years. A 1996 Canadian study ' +
			'found both sexes preferred a mobile over the mother\'s face at 11 weeks; another study found boys paid MORE attention to faces. ' +
			'Maccoby & Jacklin concluded "there is no evidence that girls are more interested in social, boys in non-social stimuli."'
	},

	// E12
	{
		claim: 'Newborn boys produce greater cortisol surges and are more irritable/harder to soothe than newborn girls.',
		source: 'Newborn cortisol and temperament studies.',
		pages: 'Ch. 2, pp. 84-86',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Single study finding; mechanism plausible',
		detail:
			'The finding that newborn boys are more emotionally reactive is documented but based on limited studies. The cortisol surge ' +
			'finding is plausible and consistent with other temperament research. Eliot uses this to argue that the innate sex difference ' +
			'in emotionality actually runs opposite to the adult pattern -- boys start MORE emotional, not less.'
	},

	// E13
	{
		claim: 'Eye contact shows no sex difference at birth but girls increase 4-fold by 4 months while boys barely increase (2004 prospective study).',
		source: '2004 prospective longitudinal study of infant eye contact.',
		pages: 'Ch. 2, pp. 84-86',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Prospective longitudinal design',
		detail:
			'This prospective longitudinal study is one of the most important pieces of evidence in the book. The absence of sex difference ' +
			'at birth, combined with the dramatic divergence over just four months, strongly suggests that differential parental interaction ' +
			'(not innate wiring) drives the sex difference in social attention. Haviland & Malatesta found parents ignore boys\' pain expressions ' +
			'and girls\' anger expressions, providing a plausible mechanism.'
	},

	// E14
	{
		claim: 'Monkey toy preference studies (vervets and rhesus) show sex-typed preferences without cultural influence.',
		source: 'Alexander & Hines (vervets); Hassett et al. (rhesus).',
		pages: 'Ch. 3, pp. 121-132',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Cross-species replication; no cultural confound',
		detail:
			'The vervet and rhesus monkey studies are important because they eliminate cultural confounds. Male monkeys show preference ' +
			'for wheeled toys and female monkeys for plush toys. Eliot acknowledges these findings as evidence of an innate component ' +
			'to toy preferences, while noting that cultural amplification is still the larger force in humans.'
	},

	// E15
	{
		claim: 'Plomin twin study (King\'s College London) found gender-typical play is approximately 50% heritable, leaving 50% for environment.',
		source: 'Plomin behavioral genetics twin study, King\'s College London.',
		pages: 'Ch. 3, pp. 121-132',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Large, well-designed behavioral genetics study',
		detail:
			'The 50/50 split between heritable and environmental factors in gender-typical play is perfectly consistent with Eliot\'s ' +
			'interactionist thesis. She uses this to argue that while biology provides a real foundation, fully half of the variance ' +
			'in gendered play is attributable to environment -- a substantial space for intervention.'
	},

	// E16
	{
		claim: 'Boys who pass the gender-labeling test show virtually no interest in dolls; boys who cannot yet label show equal interest.',
		source: 'Gender labeling and toy preference studies in 2-3 year olds.',
		pages: 'Ch. 3, pp. 133-136',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Replicated finding',
		detail:
			'This finding directly links cognitive gender awareness to behavioral sex differences. Once boys can label themselves as male, ' +
			'their interest in "girl" toys drops dramatically. This supports the thesis that cognitive self-categorization amplifies initial ' +
			'biases into large behavioral differences. The effect is replicated and is a strong piece of evidence for the social amplification model.'
	},

	// E17
	{
		claim: 'Large meta-analysis shows inhibitory control is "about the largest sex difference of any temperamental trait" for children 3-13, favoring girls.',
		source: 'Meta-analysis of inhibitory control in children aged 3-13.',
		pages: 'Ch. 4, pp. 172-175',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Large meta-analysis',
		detail:
			'This meta-analytic finding provides robust support for the claim that boys lag behind girls in self-control. The sex difference ' +
			'appears as early as 8 months on hidden-toy tasks. ADHD is diagnosed 2-9x more often in boys. However, Eliot notes that evidence ' +
			'for a sex difference in frontal-lobe maturation rate is surprisingly mixed, suggesting the gap may be amplified by differential socialization.'
	},

	// E18
	{
		claim: 'NAEP data spanning 35+ years and hundreds of thousands of students shows a persistent reading/literacy gap favoring girls (+7 at 4th, +10 at 8th, +13 at 12th grade).',
		source: 'NAEP (National Assessment of Educational Progress) longitudinal data.',
		pages: 'Ch. 5, pp. 202-210',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Gold standard national assessment',
		detail:
			'NAEP is the gold standard for US educational assessment. The reading gap is real, longstanding, and international (PISA shows ' +
			'girls outscore boys in all 42 countries tested). However, Eliot emphasizes that the gap is not immutable: the strongest predictor ' +
			'is reading for pleasure outside school, and the gap is narrowing at lower elementary level. Adult verbal skills show minimal sex difference.'
	},

	// E19
	{
		claim: 'PISA data from 42 countries shows girls outscore boys in reading in every country tested.',
		source: 'PISA (Programme for International Student Assessment) international data.',
		pages: 'Ch. 5, pp. 202-210',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Largest international comparison',
		detail:
			'The international scope of the reading gap is well-documented. Eliot uses the cross-national comparison to argue that the gap ' +
			'does NOT correlate with single-sex schooling (Ireland with 44% single-sex schools shows no smaller gap than Denmark with 0%), ' +
			'undermining the argument that separating boys and girls is the solution.'
	},

	// E20
	{
		claim: 'ETS demographic analysis shows the math SAT gap (35-40 points) shrinks by 25 points when controlling for family income, and girls who take SAT come from lower-income families.',
		source: 'ETS (Educational Testing Service) own analysis of SAT data.',
		pages: 'Ch. 5-6, pp. 207-209, 245-246',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'ETS\'s own data; large sample',
		detail:
			'This is a powerful finding using the test-maker\'s own data. Girls who take the SAT are disproportionately from lower-income ' +
			'families (64% of the poorest test-takers are female vs. 50% at higher income). When ETS controlled for family income, ' +
			'the verbal gap reversed to a 2-point female advantage and the math gap shrank dramatically. Additionally, females are more ' +
			'risk-averse in guessing strategy, which further depresses their scores.'
	},

	// E21
	{
		claim: 'Two 2008 studies found a sex difference in mental rotation in baby boys as young as 3-5 months using nonverbal tasks.',
		source: 'Two 2008 infant mental rotation studies.',
		pages: 'Ch. 6, pp. 253-255',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Very new at time of publication; need replication',
		detail:
			'These studies were very recent at the time of Eliot\'s writing and she appropriately notes they need replication. ' +
			'If confirmed, they would suggest an innate component to the mental rotation advantage. Eliot acknowledges mental rotation ' +
			'as the largest cognitive sex difference (d=0.56-0.90) and likely having an innate component, while noting that girls can ' +
			'catch up when deliberately trained and that the water-level task shows declining sex differences across generations.'
	},

	// E22
	{
		claim: 'The water-level task (a spatial skill) shows a declining sex difference across generations, suggesting experience and training matter.',
		source: 'Water-level task cross-generational studies.',
		pages: 'Ch. 6, pp. 253-258',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Well-documented trend',
		detail:
			'The declining sex difference in the water-level task across generations is strong evidence for the plasticity argument. ' +
			'If spatial skills were purely innate, they should not change across generations. The trend suggests that as women gained more ' +
			'experience with spatial activities and education, the gap narrowed -- exactly what the plasticity model predicts.'
	},

	// E23
	{
		claim: 'Aronson mentoring study found that 7th-graders taught that intelligence is expandable scored higher on standardized math and reading tests, with the sex difference in math erased.',
		source: 'Aronson stereotype threat intervention study.',
		pages: 'Ch. 6, pp. 291-292',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Single study; replication debate exists in field',
		detail:
			'The Aronson study is a key piece of evidence for the stereotype threat argument. However, it is a single study and the broader ' +
			'replication debate around stereotype threat interventions has complicated the picture since Eliot wrote. Claude Steele\'s foundational ' +
			'work on stereotype threat is well-cited but some replications have found smaller effects than originally reported.'
	},

	// E24
	{
		claim: 'Men respond more intensely internally (heart rate, blood pressure, sweating) to emotional stimuli but display less externally than women.',
		source: 'Physiological studies of emotional responding by sex.',
		pages: 'Ch. 7, pp. 297-299',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Well-replicated physiological finding',
		detail:
			'This is a well-replicated finding using objective physiological measures. Men\'s greater internal arousal coupled with less ' +
			'external display is strong evidence that the adult sex difference in emotionality is one of expression, not experience. ' +
			'Combined with the finding that newborn boys are MORE emotionally reactive, this supports the conclusion that emotional ' +
			'suppression in males is learned, not hard-wired.'
	},

	// E25
	{
		claim: 'Boys\' crying rates decline steadily before and after puberty (not driven by hormonal changes), with boys ~20% less likely to cry by age 11 and ~40% less likely by age 16.',
		source: 'Multiple studies of crying frequency by age and sex.',
		pages: 'Ch. 7, pp. 297-299',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Multiple studies',
		detail:
			'The gradual, continuous decline in boys\' crying rates -- spanning well before and after puberty -- is evidence against a purely ' +
			'hormonal explanation. If testosterone suppressed crying, the decline should accelerate at puberty. Instead, the steady decline ' +
			'suggests a learned suppression process that begins in early childhood.'
	},

	// E26
	{
		claim: 'Ramp-crawling experiment found no sex difference in infant risk-taking; mothers systematically underestimate daughters\' abilities and overestimate sons\' abilities.',
		source: 'Ramp-crawling experimental study of infant risk assessment.',
		pages: 'Ch. 7, pp. 329-336',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Clean experimental design',
		detail:
			'This elegant experiment found that infant boys and girls attempted the same ramp steepness, but mothers estimated that their ' +
			'daughters could handle less steep ramps and their sons could handle steeper ones. This demonstrates how parental expectations ' +
			'diverge from actual ability and could create divergent risk-taking behavior through differential encouragement and restriction.'
	},

	// E27
	{
		claim: 'COMT enzyme activity is 17% higher in male frontal lobes, potentially contributing to sex differences in risk-taking and impulsivity.',
		source: 'COMT enzyme activity study.',
		pages: 'Ch. 7, pp. 329-336',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Single study; mechanism speculative',
		detail:
			'The COMT finding is intriguing but based on a single study. The enzyme degrades dopamine and norepinephrine in the prefrontal ' +
			'cortex, so higher activity could theoretically affect impulse control. However, the functional significance for risk-taking ' +
			'behavior in children is speculative. Eliot cites this as one of several possible biological contributors alongside socialization.'
	},

	// E28
	{
		claim: 'California single-sex pilot program: 4 of 6 districts closed their single-sex schools after 2 years; no evidence of academic improvement; segregation reinforced stereotypes.',
		source: 'California single-sex education pilot program evaluation.',
		pages: 'Ch. 8, pp. 362-367',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Well-documented policy experiment',
		detail:
			'The California pilot program is one of the few quasi-experimental tests of single-sex education in the US. Its failure is ' +
			'well-documented: most schools closed within two years, and there was no evidence of academic improvement. Eliot uses this ' +
			'as a key piece of evidence against the single-sex schooling movement, though she acknowledges some benefit may exist for ' +
			'disadvantaged students due to pro-academic culture rather than sex segregation per se.'
	},

	// E29
	{
		claim: 'PISA comparison: Ireland (44% single-sex schooling) shows no smaller reading gap than Denmark (0% single-sex schooling).',
		source: 'PISA cross-national comparison of reading gap and school type.',
		pages: 'Ch. 8, pp. 362-367',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Large international dataset',
		detail:
			'This comparison directly tests the claim that single-sex schooling reduces the gender gap. Ireland, with one of the highest ' +
			'rates of single-sex schooling in the developed world, shows no advantage in closing the reading gap compared to Denmark, ' +
			'which has essentially no single-sex schools. While other factors differ between countries, the comparison is suggestive.'
	},

	// E30
	{
		claim: 'Language critical period research shows permanent deficits in deaf children who are not exposed to language early, demonstrating experience-dependent brain wiring.',
		source: 'Foundational neuroscience on language critical periods.',
		pages: 'Intro, pp. 6-8',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Foundational neuroscience',
		detail:
			'The critical period for language acquisition is one of the best-established findings in neuroscience. Eliot uses it to illustrate ' +
			'the general principle of neural plasticity: the brain wires itself through experience during critical developmental windows. ' +
			'This provides the mechanistic foundation for her argument that gendered experience can create large brain differences from small initial seeds.'
	},

	// E31
	{
		claim: 'Brizendine\'s "20,000 vs. 7,000 words per day" claim was debunked by Liberman (2006) and a 2007 study finding actual counts of 16,215 vs. 15,669 (not significant).',
		source: 'Liberman 2006 critique; Mehl et al. 2007 word-counting study.',
		pages: 'Intro, throughout, pp. 9-12',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Direct empirical refutation',
		detail:
			'This is one of the clearest examples of a popular sex-difference claim being directly refuted by empirical measurement. ' +
			'Brizendine\'s "Female Brain" claimed women speak nearly three times as many words as men per day. The actual measured difference ' +
			'was 16,215 vs. 15,669 words -- a trivial and non-significant gap. Eliot uses this as a case study in how pop-science authors ' +
			'distort the literature.'
	},

	// E32
	{
		claim: 'No sex difference in serotonin or oxytocin in children (Fries et al. 2005; Flachaire et al. 1990), contradicting Gurian\'s claims.',
		source: 'Fries et al. 2005; Flachaire et al. 1990.',
		pages: 'Throughout; pp. 9-12',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published null results contradict Gurian\'s claims',
		detail:
			'Gurian claimed significant sex differences in serotonin and oxytocin to explain behavioral differences. The only studies ' +
			'Eliot found that actually measured these neurotransmitters in children reported no significant sex differences. This exemplifies ' +
			'Eliot\'s broader critique: popular authors make bold claims about brain chemistry without citing actual measurements in children.'
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
		'The evidence base for "Pink Brain, Blue Brain" is remarkably strong. Of 32 evidence items, 24 are rated green (solidly supported), ' +
		'7 are yellow (contested or limited), and only 1 is red (the Baron-Cohen face/mobile study, which Eliot critiques rather than relies upon). ' +
		'Eliot\'s core empirical claims rest on large meta-analyses (Hyde\'s 124-trait review, corpus callosum, inhibitory control), ' +
		'gold-standard national and international datasets (NAEP, PISA, ETS), well-replicated physiological studies (emotional arousal, crying rates), ' +
		'and cross-species behavioral genetics (monkey toy preferences, twin studies). The weakest evidence items are the few single studies ' +
		'she cites tentatively (infant mental rotation, COMT enzyme, cortisol surges) and the stereotype threat intervention literature, ' +
		'which has faced replication challenges since the book was published. The book\'s greatest methodological strength is its consistent ' +
		'reliance on meta-analyses and large datasets rather than individual studies, and its careful distinction between effect sizes ' +
		'(using d-values throughout). The only red-rated item is one that Eliot herself identifies as problematic, not one she relies upon.'
};
