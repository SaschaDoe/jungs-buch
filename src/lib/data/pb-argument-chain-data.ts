// pb-argument-chain-data.ts
// The argument chain for "Pink Brain, Blue Brain" (Lise Eliot), with evidence ratings per link.

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
	'brain-diff-small':        { x: 12, y: 3, row: 0 },
	'psych-diff-small':        { x: 42, y: 3, row: 0 },
	'prenatal-t-biases':       { x: 72, y: 3, row: 0 },
	'infant-sensory-trivial':  { x: 6, y: 14, row: 1 },
	'sax-hearing-unfounded':   { x: 30, y: 14, row: 1 },
	'baron-cohen-unreliable':  { x: 54, y: 14, row: 1 },
	'boys-more-emotional':     { x: 78, y: 14, row: 1 },
	'toy-prefs-both':          { x: 12, y: 26, row: 2 },
	'gender-identity-amplify': { x: 42, y: 26, row: 2 },
	'inhibitory-control':      { x: 72, y: 26, row: 2 },
	'reading-gap-plastic':     { x: 12, y: 38, row: 3 },
	'math-sat-demographics':   { x: 42, y: 38, row: 3 },
	'mental-rotation-innate':  { x: 72, y: 38, row: 3 },
	'stereotype-threat':       { x: 12, y: 50, row: 4 },
	'emotion-learned':         { x: 36, y: 50, row: 4 },
	'aggression-forms':        { x: 60, y: 50, row: 4 },
	'risk-socialized':         { x: 84, y: 50, row: 4 },
	'single-sex-no-advantage': { x: 20, y: 62, row: 5 },
	'neural-plasticity':       { x: 50, y: 62, row: 5 },
	'pop-authors-distort':     { x: 80, y: 62, row: 5 },
};

export const rowLabels = [
	'Foundational Claims (Brain & Psychology)',
	'Infant Differences & Critiques',
	'Early Childhood: Toys, Gender, Temperament',
	'Academic Gaps: Reading, Math, Spatial',
	'Emotion, Aggression, Risk & Stereotype Threat',
	'Synthesis: Schools, Plasticity & Pop-Science Critique'
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
		id: 'brain-diff-small',
		step: 1,
		type: 'premise',
		claim: 'Sex differences in children\'s brains are much smaller than commonly believed. Only two reliably proven brain differences in children: (1) boys\' brains 8-11% larger; (2) girls\' brains finish growing 1-2 years earlier. Both mirror overall body-size differences. No reliable difference in corpus callosum (1997 meta-analysis of 50 studies).',
		shortLabel: 'Brain sex differences are small',
		evidence: '1997 meta-analysis of 50 corpus callosum studies (Bishop & Whalsten) found none; large MRI studies confirm size difference mirrors body size; EEG maturity data are contradictory.',
		status: 'green',
		explanation:
			'The corpus callosum meta-analysis is decisive: 50 studies found no reliable sex difference, directly refuting Gurian\'s claim of "up to 25% difference." ' +
			'The brain-size difference is real but mirrors the general body-size difference. EEG maturity data are mixed, with some showing girls ahead and some boys. ' +
			'This is a strong foundational claim supported by meta-analytic evidence.',
		dependsOn: [],
		collapseRisk: 'Low. Meta-analytic support for the corpus callosum finding is robust. The brain-size data is well-established.',
		bookLocations: [
			{ pages: 'pp. 5-12', chapter: 'Introduction', context: 'Brain sex differences overview; corpus callosum meta-analysis; brain volume data' }
		],
		evidenceRefs: [
			{ label: 'Bishop & Whalsten 1997 meta-analysis', authorSearch: 'Bishop Whalsten corpus callosum' },
			{ label: 'MRI brain volume studies', authorSearch: 'brain volume children' }
		]
	},

	// ======== C2 ========
	{
		id: 'psych-diff-small',
		step: 2,
		type: 'premise',
		claim: 'Most psychological sex differences are small (d < 0.35). Janet Hyde\'s meta-analysis of 124 psychological traits found 77% in the small range. Height difference (d=2.6) dwarfs all psychological differences. This is the "Gender Similarities Hypothesis."',
		shortLabel: 'Most psych differences are small',
		evidence: 'Hyde 2005 meta-analysis of 124 traits; comparison to height (d=2.6); Gender Similarities Hypothesis.',
		status: 'green',
		explanation:
			'Hyde\'s meta-analysis is a landmark paper, widely cited and methodologically rigorous. The finding that 77% of psychological sex differences ' +
			'fall in the small range (d < 0.35) provides a powerful empirical foundation for the argument that sex differences are overstated. ' +
			'The comparison to height (d=2.6) helpfully contextualizes the scale of psychological differences.',
		dependsOn: [],
		collapseRisk: 'Low. Large-scale meta-analytic review with robust methodology.',
		bookLocations: [
			{ pages: 'pp. 13-15', chapter: 'Introduction', context: 'Gender Similarities Hypothesis; d-values explained; Hyde meta-analysis' }
		],
		evidenceRefs: [
			{ label: 'Hyde 2005 (Gender Similarities)', authorSearch: 'Hyde gender similarities' }
		]
	},

	// ======== C3 ========
	{
		id: 'prenatal-t-biases',
		step: 3,
		type: 'premise',
		claim: 'Prenatal testosterone biases but does not determine sex-typed behavior. CAH girls show more masculine toy preferences but retain female gender identity. Opposite-sex twin studies show almost no behavioral masculinization. Digit ratio correlations are "quite small."',
		shortLabel: 'Prenatal T biases, not determines',
		evidence: 'CAH studies (Berenbaum & Snyder; Pasterski et al.); Finnish twin study (thousands of women); Manning digit ratio research.',
		status: 'green',
		explanation:
			'Multiple lines of converging evidence support this claim. CAH studies are replicated across labs and consistently show that even extreme prenatal ' +
			'androgen exposure does not override gender identity. The Finnish twin study is very large. Manning\'s own team concluded that prenatal hormones ' +
			'exert "a modest predisposing influence" that "merely bias, rather than determine" behavior. Direct experimental evidence in humans is impossible, ' +
			'but the natural experiments are consistent.',
		dependsOn: ['brain-diff-small'],
		collapseRisk: 'Low. Multiple converging lines of evidence from different methodologies.',
		bookLocations: [
			{ pages: 'pp. 36-50', chapter: 'Ch. 1: Pink and Blue in the Womb', context: 'CAH girls, opposite-sex twins, digit ratios, prenatal testosterone' }
		],
		evidenceRefs: [
			{ label: 'Berenbaum & Snyder (CAH)', authorSearch: 'Berenbaum' },
			{ label: 'Pasterski et al. (CAH)', authorSearch: 'Pasterski' },
			{ label: 'Finnish twin registry', authorSearch: 'Finnish twin' },
			{ label: 'Manning (digit ratio)', authorSearch: 'Manning digit' }
		]
	},

	// ======== C4 ========
	{
		id: 'infant-sensory-trivial',
		step: 4,
		type: 'observation',
		claim: 'Innate sex differences in infant sensory abilities are trivially small. Touch: girls more sensitive in only 5/13 studies. Hearing: 3 dB threshold difference is trivial. Vision: no difference in 9 studies. Smell: minimal and inconsistent.',
		shortLabel: 'Infant sensory differences trivial',
		evidence: 'Maccoby & Jacklin 1974 review; OAE studies (d=0.15); 9 vision studies of ~400 newborns; Swedish infrared pain study.',
		status: 'green',
		explanation:
			'The Maccoby & Jacklin review, though dated, remains the most comprehensive assessment of infant sensory sex differences. ' +
			'More recent studies have partially updated but broadly confirm the conclusion of minimal differences. The OAE hearing difference of d=0.15 ' +
			'is well-replicated but functionally trivial. The vision finding of no difference across 9 studies is strong null evidence.',
		dependsOn: [],
		collapseRisk: 'Low for the overall conclusion. Individual studies vary but the pattern across hundreds of infants is consistent.',
		bookLocations: [
			{ pages: 'pp. 67-72', chapter: 'Ch. 2: Under the Pink or Blue Blankie', context: 'Newborn sensory differences: touch, pain, hearing, vision, smell' }
		],
		evidenceRefs: [
			{ label: 'Maccoby & Jacklin 1974', authorSearch: 'Maccoby Jacklin' },
			{ label: 'OAE hearing studies', authorSearch: 'otoacoustic' }
		]
	},

	// ======== C5 ========
	{
		id: 'sax-hearing-unfounded',
		step: 5,
		type: 'observation',
		claim: 'Leonard Sax\'s claims about hearing differences justifying single-sex education are unfounded. The actual hearing difference (3 dB, d=0.15) is trivially small. Maccoby & Jacklin found "the bulk of the evidence shows the sexes are highly similar in attentiveness to auditory stimulation."',
		shortLabel: 'Sax hearing claims unfounded',
		evidence: 'OAE d=0.15; Maccoby & Jacklin review of auditory attentiveness; primary literature Sax ignores.',
		status: 'green',
		explanation:
			'Eliot directly checks Sax\'s claims against the primary literature and finds them unsupported. The 3 dB threshold difference in a 130 dB ' +
			'real-world range is negligible. Sax\'s assertion that girls hear shouting when dads speak normally is contradicted by the actual measurements. ' +
			'This is a strong critique because it uses the same primary sources.',
		dependsOn: ['infant-sensory-trivial'],
		collapseRisk: 'Low. Directly supported by quantitative audiometric data.',
		bookLocations: [
			{ pages: 'pp. 70-71', chapter: 'Ch. 2: Under the Pink or Blue Blankie', context: 'Critique of Sax\'s hearing-difference claims' }
		],
		evidenceRefs: [
			{ label: 'OAE data (d=0.15)', authorSearch: 'otoacoustic emission' },
			{ label: 'Maccoby & Jacklin (auditory)', authorSearch: 'Maccoby auditory' }
		]
	},

	// ======== C6 ========
	{
		id: 'baron-cohen-unreliable',
		step: 6,
		type: 'observation',
		claim: 'The Baron-Cohen newborn face/mobile study is unreliable and unreplicated. The live face was not always blind to baby\'s sex; the effect was small (boys 52% mobile/46% face; girls 41%/49%); never replicated in 9+ years; contradicted by earlier research.',
		shortLabel: 'Baron-Cohen study unreliable',
		evidence: 'Connellan et al. 2000 methodological critique; 1996 Canadian study (both sexes preferred mobile); another study finding boys paid MORE attention to faces; Maccoby & Jacklin null finding.',
		status: 'green',
		explanation:
			'The methodological critique is strong: lack of blinding is a fundamental flaw, the effect sizes are small, and the study has never been replicated ' +
			'despite being published in a high-profile journal. Contradictory findings from earlier research strengthen the critique. ' +
			'Rated green because the critique itself is well-supported, even though the original study is problematic.',
		dependsOn: ['infant-sensory-trivial'],
		collapseRisk: 'Low. The methodological problems with the original study are clear and the lack of replication after 9+ years is telling.',
		bookLocations: [
			{ pages: 'pp. 82-84', chapter: 'Ch. 2: Under the Pink or Blue Blankie', context: 'Critique of Baron-Cohen face/mobile newborn study' }
		],
		evidenceRefs: [
			{ label: 'Connellan et al. 2000', authorSearch: 'Connellan' },
			{ label: 'Maccoby & Jacklin (social stimuli)', authorSearch: 'Maccoby social stimuli' }
		]
	},

	// ======== C7 ========
	{
		id: 'boys-more-emotional',
		step: 7,
		type: 'observation',
		claim: 'Infant boys are more emotionally reactive/fussy than girls. Parents then suppress boys\' emotional expression. Eye contact shows no sex difference at birth but girls increase 4-fold by 4 months. The adult pattern of male emotional suppression is learned, not innate.',
		shortLabel: 'Boys start MORE emotional',
		evidence: 'Newborn cortisol studies; eye contact prospective longitudinal study (2004); Haviland & Malatesta parent-infant interaction study.',
		status: 'green',
		explanation:
			'The eye contact study is particularly compelling: no difference at birth, dramatic divergence by 4 months. The Haviland & Malatesta finding ' +
			'that parents ignore boys\' pain expressions and girls\' anger expressions provides a mechanism. The overall pattern -- boys starting more reactive ' +
			'but becoming less expressive -- is consistent across multiple studies and strongly supports the socialization argument.',
		dependsOn: [],
		collapseRisk: 'Low for the descriptive finding. The causal interpretation (parental shaping) is well-supported but some studies are not fully blinded.',
		bookLocations: [
			{ pages: 'pp. 84-86', chapter: 'Ch. 2: Under the Pink or Blue Blankie', context: 'Infant emotional reactivity, eye contact divergence, parental differential treatment' }
		],
		evidenceRefs: [
			{ label: 'Eye contact longitudinal study (2004)', authorSearch: 'eye contact infant' },
			{ label: 'Haviland & Malatesta', authorSearch: 'Haviland Malatesta' }
		]
	},

	// ======== C8 ========
	{
		id: 'toy-prefs-both',
		step: 8,
		type: 'observation',
		claim: 'Toy preferences are large sex differences (~d=1.9) with both innate and social components. Monkey studies confirm innate element. Twin study shows ~50% heritability, leaving 50% for environment. No reliable preference before ~12 months. Fathers react most strongly to sons with "girl" toys.',
		shortLabel: 'Toy preferences: 50/50 nature-nurture',
		evidence: 'Swedish study (d=1.9); vervet and rhesus monkey studies; Plomin twin study (~50% heritable); SUNY Binghamton peer effect study; parental reinforcement data.',
		status: 'green',
		explanation:
			'Multiple lines of evidence converge: cross-species data confirms an innate component, behavioral genetics quantifies it at roughly 50%, ' +
			'and the absence of preference before 12 months plus strong parental and peer amplification documents the environmental component. ' +
			'Eliot handles this evidence balanced, acknowledging both nature and nurture.',
		dependsOn: ['prenatal-t-biases'],
		collapseRisk: 'Low. Cross-species, cross-cultural, and behavioral genetics data all converge.',
		bookLocations: [
			{ pages: 'pp. 121-132', chapter: 'Ch. 3: Learning Through Play in the Preschool Years', context: 'Toy preferences, monkey studies, twin study, peer effects, parental reinforcement' }
		],
		evidenceRefs: [
			{ label: 'Alexander & Hines (vervets)', authorSearch: 'Alexander Hines' },
			{ label: 'Hassett et al. (rhesus)', authorSearch: 'Hassett' },
			{ label: 'Plomin twin study', authorSearch: 'Plomin gender play' }
		]
	},

	// ======== C9 ========
	{
		id: 'gender-identity-amplify',
		step: 9,
		type: 'causal',
		claim: 'Gender identity emerges at 2-3 years and massively amplifies sex differences. Boys who pass gender-labeling test show virtually no interest in dolls. Six- and seven-year-olds are the "sternest enforcers" of gender norms. Children from more traditional homes reach gender awareness months earlier.',
		shortLabel: 'Gender identity amplifies differences',
		evidence: 'Gender-labeling/toy-preference correlation studies; gender constancy development (achieved by 6-7); cross-cultural replication of developmental timeline.',
		status: 'green',
		explanation:
			'Gender identity emergence is a universal developmental milestone, well-replicated across cultures. The finding that toy preference ' +
			'shifts dramatically at the moment of gender self-labeling is strong evidence for cognitive amplification of initial biases. ' +
			'The observation that children from traditional homes pass this threshold earlier supports the environmental moderation claim.',
		dependsOn: ['toy-prefs-both'],
		collapseRisk: 'Low. Universal developmental milestone with replicated behavioral correlates.',
		bookLocations: [
			{ pages: 'pp. 133-136', chapter: 'Ch. 3: Learning Through Play in the Preschool Years', context: 'Gender labeling, gender constancy, norm enforcement by children' }
		],
		evidenceRefs: [
			{ label: 'Gender labeling studies', authorSearch: 'gender labeling toy' }
		]
	},

	// ======== C10 ========
	{
		id: 'inhibitory-control',
		step: 10,
		type: 'observation',
		claim: 'Boys lag behind girls in inhibitory control -- the largest temperamental sex difference. Appears at 8 months; by 2-3 years, boys worse on virtually every measure. ADHD diagnosed 2-9x more in boys. But evidence for sex difference in frontal maturation is surprisingly mixed.',
		shortLabel: 'Boys lag in self-control',
		evidence: 'Hidden-toy task (8 months); large meta-analysis of inhibitory control (ages 3-13); ADHD prevalence data; UCLA frontal maturation study; conflicting EEG maturation data.',
		status: 'green',
		explanation:
			'The meta-analytic support is strong. The sex difference in inhibitory control is well-replicated across cultures and measures. ' +
			'However, Eliot importantly notes that the neurological explanation (girls\' frontal lobes mature earlier) is not as clear-cut as commonly claimed: ' +
			'one UCLA study shows girls peak ~1 year earlier, but EEG studies show earlier maturation in boys. This suggests the behavioral gap may be ' +
			'partly socialized rather than purely neurological.',
		dependsOn: [],
		collapseRisk: 'Low for the behavioral finding. The neurological mechanism is less certain than the behavior itself.',
		bookLocations: [
			{ pages: 'pp. 172-175', chapter: 'Ch. 4: Starting School', context: 'Inhibitory control sex difference, frontal maturation, ADHD prevalence' }
		],
		evidenceRefs: [
			{ label: 'Inhibitory control meta-analysis', authorSearch: 'inhibitory control' },
			{ label: 'ADHD sex ratio data', authorSearch: 'ADHD diagnosis sex' }
		]
	},

	// ======== C11 ========
	{
		id: 'reading-gap-plastic',
		step: 11,
		type: 'observation',
		claim: 'The reading/literacy gap is real, longstanding, and international but not immutable. Girls outscore boys in all 42 PISA countries. Gap has existed for 35+ years of NAEP. But strongest predictor is reading for pleasure; gap is narrowing at lower elementary; adult verbal skills show minimal sex difference.',
		shortLabel: 'Reading gap real but plastic',
		evidence: 'NAEP 35+ year data; PISA 42-country data; reading-for-pleasure predictor; narrowing gap at lower elementary; adult verbal null finding.',
		status: 'green',
		explanation:
			'The descriptive data from NAEP and PISA is incontrovertible. The analytical addition -- that reading for pleasure is the strongest predictor ' +
			'of the gap -- is key to Eliot\'s plasticity argument. The gap narrowing at lower elementary and disappearing in adults both suggest ' +
			'that practice effects, not innate ability, drive the childhood gap.',
		dependsOn: ['boys-more-emotional', 'inhibitory-control'],
		collapseRisk: 'Low. Massive longitudinal and international datasets.',
		bookLocations: [
			{ pages: 'pp. 202-210', chapter: 'Ch. 5: The Wonder of Words', context: 'NAEP and PISA reading data, reading for pleasure, adult convergence' }
		],
		evidenceRefs: [
			{ label: 'NAEP reading data', authorSearch: 'NAEP reading' },
			{ label: 'PISA 42-country data', authorSearch: 'PISA reading' }
		]
	},

	// ======== C12 ========
	{
		id: 'math-sat-demographics',
		step: 12,
		type: 'observation',
		claim: 'Males score higher on math SAT, but the gap is largely explained by demographics and test-taking strategy. When ETS controlled for family income, the gap shrank by 25 points. Female test-takers come from lower-income families. Females are more risk-averse in guessing.',
		shortLabel: 'Math SAT gap largely demographic',
		evidence: 'ETS demographic analysis; income distribution of SAT takers (64% of poorest are female); risk-aversion in guessing strategy; time-constraint effects.',
		status: 'green',
		explanation:
			'Using ETS\'s own data -- the organization that makes the test -- is a powerful rhetorical and evidential move. The demographic ' +
			'correction reveals that much of the "math gap" reflects who takes the test, not inherent ability. The risk-aversion finding ' +
			'adds a second non-ability explanation. Together, these substantially deflate the raw gap.',
		dependsOn: ['psych-diff-small'],
		collapseRisk: 'Low. ETS\'s own analysis with large sample sizes.',
		bookLocations: [
			{ pages: 'pp. 207-209, 245-246', chapter: 'Ch. 5-6', context: 'SAT gender gap, ETS demographic analysis, guessing strategy' }
		],
		evidenceRefs: [
			{ label: 'ETS demographic analysis', authorSearch: 'ETS SAT income' }
		]
	},

	// ======== C13 ========
	{
		id: 'mental-rotation-innate',
		step: 13,
		type: 'observation',
		claim: 'Mental rotation is the largest cognitive sex difference (d=0.56-0.90) and likely has an innate component. Universal across cultures; infant data emerging (3-5 months). But the water-level task shows declining sex differences across generations, and girls can catch up when trained.',
		shortLabel: 'Mental rotation: large but trainable',
		evidence: 'Cross-cultural universality; two 2008 infant rotation studies; water-level task generational decline; training studies showing girls catch up.',
		status: 'green',
		explanation:
			'Eliot is notably honest about this finding, acknowledging it as the largest cognitive sex difference with likely innate roots. ' +
			'The infant data, if replicated, strengthens the innate case. But the declining water-level task gap across generations and the ' +
			'training studies demonstrate that even the largest cognitive sex difference is partially plastic -- exactly the book\'s thesis.',
		dependsOn: ['prenatal-t-biases'],
		collapseRisk: 'Low for the description. The innate-vs-trained debate continues but both sides are represented.',
		bookLocations: [
			{ pages: 'pp. 253-258', chapter: 'Ch. 6: Math, Science, and Technology', context: 'Mental rotation, spatial skills, water-level task, training studies' }
		],
		evidenceRefs: [
			{ label: '2008 infant rotation studies', authorSearch: 'infant mental rotation' },
			{ label: 'Water-level task decline', authorSearch: 'water-level task' }
		]
	},

	// ======== C14 ========
	{
		id: 'stereotype-threat',
		step: 14,
		type: 'causal',
		claim: 'Stereotype threat measurably depresses girls\' math performance. Aronson study: 7th-graders mentored to believe intelligence is expandable scored higher and the math sex difference was erased. Mothers exposed to media reports about sex differences rated daughters\' math ability lower.',
		shortLabel: 'Stereotype threat depresses girls\' math',
		evidence: 'Aronson mentoring intervention study; Claude Steele\'s stereotype threat research; SMPY media-exposure study of mothers\' ratings.',
		status: 'yellow',
		explanation:
			'The Aronson study is compelling but it is a single study, and the broader stereotype threat literature has faced replication ' +
			'challenges since Eliot wrote. Some replications find smaller effects. The mothers\' rating study is correlational. ' +
			'The general phenomenon is plausible and supported by multiple studies, but the field has become more cautious about effect sizes.',
		dependsOn: ['math-sat-demographics'],
		collapseRisk: 'Moderate. The general concept is supported but specific effect sizes and replicability are debated.',
		bookLocations: [
			{ pages: 'pp. 291-292', chapter: 'Ch. 6: Math, Science, and Technology', context: 'Aronson intervention, Steele, mothers\' math ratings' }
		],
		evidenceRefs: [
			{ label: 'Aronson intervention study', authorSearch: 'Aronson' },
			{ label: 'Claude Steele (stereotype threat)', authorSearch: 'Steele stereotype' }
		]
	},

	// ======== C15 ========
	{
		id: 'emotion-learned',
		step: 15,
		type: 'causal',
		claim: 'Emotional expression differences are learned, not hard-wired. Newborn boys are MORE reactive. Boys\' crying declines steadily before and after puberty (not hormone-driven). Men respond more intensely internally but display less externally. Anonymous self-reports show no sex difference.',
		shortLabel: 'Emotional suppression is learned',
		evidence: 'Newborn reactivity data; crying rate studies spanning childhood; physiological arousal studies (heart rate, blood pressure); anonymous self-report studies.',
		status: 'green',
		explanation:
			'Multiple converging lines of evidence support this claim. The reversal from boys-more-reactive (infancy) to men-less-expressive (adulthood) ' +
			'is difficult to explain by biology alone. The gradual, pre-pubertal decline in crying contradicts a hormonal explanation. ' +
			'The dissociation between internal arousal and external expression in adult men is well-replicated with objective physiological measures.',
		dependsOn: ['boys-more-emotional'],
		collapseRisk: 'Low. Physiological and behavioral data converge across multiple studies.',
		bookLocations: [
			{ pages: 'pp. 297-299', chapter: 'Ch. 7: Love and War', context: 'Emotional reactivity reversal, crying rates, internal vs. external arousal' }
		],
		evidenceRefs: [
			{ label: 'Physiological arousal studies', authorSearch: 'emotional arousal sex' },
			{ label: 'Crying rate studies', authorSearch: 'crying sex difference' }
		]
	},

	// ======== C16 ========
	{
		id: 'aggression-forms',
		step: 16,
		type: 'observation',
		claim: 'Aggression has both physical (male-dominant, d~0.50) and relational (female-dominant) forms. Physical aggression has clear biological roots (prenatal testosterone, larger amygdala). Relational aggression is a cultural adaptation. Cross-cultural variation in both forms is substantial.',
		shortLabel: 'Aggression takes two forms',
		evidence: 'Physical aggression sex difference (d~0.50); relational aggression research; prenatal testosterone and amygdala data; cross-cultural variation evidence.',
		status: 'yellow',
		explanation:
			'The physical aggression sex difference is well-documented and has plausible biological roots. The relational aggression concept is well-accepted ' +
			'but harder to measure reliably. The claim that relational aggression is specifically a "cultural adaptation to patriarchal suppression" ' +
			'goes beyond what the data can establish. Cross-cultural variation is substantial but hard to parse into biological vs. cultural components.',
		dependsOn: ['prenatal-t-biases', 'emotion-learned'],
		collapseRisk: 'Moderate. Physical aggression data is strong. Relational aggression measurement and the evolutionary interpretation are less certain.',
		bookLocations: [
			{ pages: 'pp. 296-325', chapter: 'Ch. 7: Love and War', context: 'Physical vs. relational aggression, biological roots, cultural shaping' }
		],
		evidenceRefs: [
			{ label: 'Physical aggression meta-analyses', authorSearch: 'aggression sex difference' }
		]
	},

	// ======== C17 ========
	{
		id: 'risk-socialized',
		step: 17,
		type: 'causal',
		claim: 'Risk taking differs between sexes but is strongly shaped by socialization. No sex difference in infancy (ramp-crawling experiments). Emerges at 2-3 years. d-values declining across generations (0.20 before 1980; 0.13 after 1981). Mothers caution daughters more and intervene sooner.',
		shortLabel: 'Risk-taking is socialized',
		evidence: 'Ramp-crawling experiment; cross-generational d-value decline; cross-cultural data (Chinese vs. Canadian infants); maternal behavior observations; COMT enzyme data; orbital prefrontal cortex maturation.',
		status: 'yellow',
		explanation:
			'The ramp-crawling experiment is elegantly designed and shows no innate difference. The declining d-values across generations support ' +
			'a socialization explanation. However, the neurological findings (COMT, orbital prefrontal cortex) are from single or preliminary studies. ' +
			'The claim combines strong socialization evidence with weaker biological evidence, making the overall causal story moderate.',
		dependsOn: ['prenatal-t-biases', 'inhibitory-control'],
		collapseRisk: 'Moderate. The socialization evidence is strong; some neurological findings are preliminary.',
		bookLocations: [
			{ pages: 'pp. 329-336', chapter: 'Ch. 7: Love and War', context: 'Ramp-crawling, maternal behavior, cross-cultural variation, COMT, frontal maturation' }
		],
		evidenceRefs: [
			{ label: 'Ramp-crawling experiment', authorSearch: 'ramp crawling' },
			{ label: 'COMT enzyme study', authorSearch: 'COMT frontal' }
		]
	},

	// ======== C18 ========
	{
		id: 'single-sex-no-advantage',
		step: 18,
		type: 'consequence',
		claim: 'Single-sex schooling shows no reliable academic advantage when controlling for self-selection. California pilot: 4/6 districts closed schools after 2 years. Ireland (44% single-sex) shows no smaller reading gap than Denmark (0%). Segregation may reinforce stereotypes.',
		shortLabel: 'Single-sex schools: no advantage',
		evidence: 'Multiple observational studies controlling for selection; California pilot program; PISA Ireland vs. Denmark comparison.',
		status: 'green',
		explanation:
			'The evidence converges from multiple methodologies: observational studies with statistical controls, a quasi-experimental pilot program, ' +
			'and an international cross-national comparison. The California pilot program failure is particularly telling as a real-world test. ' +
			'Eliot acknowledges possible benefits for at-risk students but attributes these to pro-academic culture rather than sex segregation.',
		dependsOn: ['reading-gap-plastic', 'math-sat-demographics'],
		collapseRisk: 'Low to moderate. The California pilot and PISA data are strong. Some studies find small benefits for specific subgroups.',
		bookLocations: [
			{ pages: 'pp. 362-367', chapter: 'Ch. 8: Concluding chapter', context: 'California pilot, Ireland/Denmark comparison, self-selection controls' }
		],
		evidenceRefs: [
			{ label: 'California pilot program', authorSearch: 'California single-sex' },
			{ label: 'PISA Ireland/Denmark comparison', authorSearch: 'Ireland Denmark single-sex' }
		]
	},

	// ======== C19 ========
	{
		id: 'neural-plasticity',
		step: 19,
		type: 'theory',
		claim: 'Neural plasticity is the mechanism by which small initial biases become large adult differences. The brain changes through experience at every level. Childhood is the period of greatest plasticity. Boys and girls spend time differently, so their brains inevitably diverge. "Your brain is what you do with it."',
		shortLabel: 'Plasticity amplifies small seeds',
		evidence: 'Language critical period research; experience-dependent synaptic pruning; deaf children\'s permanent deficits; general neuroscience of plasticity.',
		status: 'green',
		explanation:
			'Neural plasticity is foundational, well-established neuroscience. The critical period evidence is incontrovertible. The specific application to ' +
			'sex differences -- that gendered experience creates gendered brains -- is theoretically sound and consistent with all the evidence, ' +
			'but the exact contribution of experience vs. innate wiring for specific traits remains partly theoretical. ' +
			'Eliot\'s key insight that "all learning is biological whether caused by nature or nurture" elegantly dissolves the false dichotomy.',
		dependsOn: ['brain-diff-small', 'psych-diff-small'],
		collapseRisk: 'Low for the neuroscience. The specific application to sex differences involves some theoretical extrapolation.',
		bookLocations: [
			{ pages: 'pp. 6-8', chapter: 'Introduction', context: 'Neural plasticity, critical periods, experience-dependent wiring, "all biology"' }
		],
		evidenceRefs: [
			{ label: 'Language critical period research', authorSearch: 'critical period language' },
			{ label: 'Experience-dependent plasticity', authorSearch: 'neural plasticity' }
		]
	},

	// ======== C20 ========
	{
		id: 'pop-authors-distort',
		step: 20,
		type: 'consequence',
		claim: 'Popular authors (Gurian, Sax, Brizendine) systematically distort the science. Gurian\'s "25% corpus callosum" is false. Sax\'s hippocampal math claim is unproven in children. Brizendine\'s "20,000 vs. 7,000 words" was debunked (actual: 16,215 vs. 15,669). Claims about serotonin/oxytocin sex differences are contradicted by published null results.',
		shortLabel: 'Pop authors distort science',
		evidence: 'Corpus callosum meta-analysis (vs. Gurian); Liberman 2006 and Mehl 2007 (vs. Brizendine); Fries 2005 and Flachaire 1990 null results (vs. Gurian); primary literature review (vs. Sax).',
		status: 'green',
		explanation:
			'Each specific claim is checked against the primary literature and found wanting. The corpus callosum claim is contradicted by 50 studies. ' +
			'Brizendine\'s word-count claim is directly refuted by measurement. The serotonin/oxytocin claims are contradicted by published null results. ' +
			'Sax\'s brain-region claims are unproven in children. This is rigorous, source-by-source debunking.',
		dependsOn: ['brain-diff-small', 'psych-diff-small', 'infant-sensory-trivial', 'sax-hearing-unfounded'],
		collapseRisk: 'Low. Each debunking rests on specific primary sources that can be independently verified.',
		bookLocations: [
			{ pages: 'pp. 9-12, 70-71, 82-84', chapter: 'Introduction, throughout', context: 'Gurian corpus callosum, Brizendine word counts, Sax hippocampus, serotonin/oxytocin' }
		],
		evidenceRefs: [
			{ label: 'Liberman 2006 (word count)', authorSearch: 'Liberman word' },
			{ label: 'Mehl et al. 2007 (word count)', authorSearch: 'Mehl word' },
			{ label: 'Fries et al. 2005 (oxytocin)', authorSearch: 'Fries oxytocin' },
			{ label: 'Flachaire et al. 1990 (serotonin)', authorSearch: 'Flachaire serotonin' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	// Start from 'pop-authors-distort' (the culminating consequence) and trace back through weakest dependencies
	const target = chain.find((c) => c.id === 'pop-authors-distort')!;
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
		'The argument chain for "Pink Brain, Blue Brain" is remarkably well-supported. Of 20 claims, 16 are rated green (solidly supported) ' +
		'and only 4 are yellow (contested or limited). There are no red or untestable links. The foundational claims (C1-C3) about brain and ' +
		'psychological sex differences being small rest on large meta-analyses and are among the strongest links. The infant and early childhood ' +
		'observations (C4-C10) are broadly well-supported, with the eye contact and gender-labeling findings being particularly compelling. ' +
		'The academic gap analysis (C11-C13) leverages gold-standard national and international datasets. The weakest links are stereotype threat (C14), ' +
		'which has faced replication challenges, aggression forms (C16), where relational aggression measurement is difficult, and risk-taking socialization (C17), ' +
		'where some neurological findings are preliminary. The critique of popular authors (C20) is among the strongest links, resting on specific, ' +
		'verifiable source-checking. The book\'s greatest structural strength is that its argument does not depend on any single causal claim: ' +
		'even if stereotype threat proves weaker than claimed, the plasticity thesis is supported by dozens of other converging lines of evidence. ' +
		'Unlike many popular science books, "Pink Brain, Blue Brain" is strongest precisely where it makes its biggest claims.'
};
