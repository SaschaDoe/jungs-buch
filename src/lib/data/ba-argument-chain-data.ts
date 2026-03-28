// ba-argument-chain-data.ts
// The argument chain for "Boys Adrift" (Leonard Sax), with evidence ratings per link.

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
	'education-gap':           { x: 12, y: 3, row: 0 },
	'new-phenomenon':          { x: 42, y: 3, row: 0 },
	'within-family':           { x: 72, y: 3, row: 0 },
	'curriculum-acceleration': { x: 6, y: 14, row: 1 },
	'girls-please-teachers':   { x: 30, y: 14, row: 1 },
	'kenntnis-wissenschaft':   { x: 54, y: 14, row: 1 },
	'competition-eliminated':  { x: 78, y: 14, row: 1 },
	'zero-tolerance':          { x: 12, y: 26, row: 2 },
	'videogames-will-power':   { x: 42, y: 26, row: 2 },
	'videogames-effects':      { x: 72, y: 26, row: 2 },
	'videogames-qualitative':  { x: 12, y: 38, row: 3 },
	'adhd-overdiagnosis':      { x: 42, y: 38, row: 3 },
	'adhd-nucleus-accumbens':  { x: 72, y: 38, row: 3 },
	'endocrine-feminizing':    { x: 12, y: 50, row: 4 },
	'endocrine-puberty':       { x: 36, y: 50, row: 4 },
	'bones-brittle':           { x: 60, y: 50, row: 4 },
	'testosterone-motivation': { x: 84, y: 50, row: 4 },
	'failure-to-launch':       { x: 12, y: 62, row: 5 },
	'pornography-replacing':   { x: 36, y: 62, row: 5 },
	'trades-declining':        { x: 60, y: 62, row: 5 },
	'forsaken-gods':           { x: 84, y: 62, row: 5 },
	'immigrant-paradox':       { x: 20, y: 74, row: 6 },
	'fatherhood-degraded':     { x: 50, y: 74, row: 6 },
	'boys-schools-mentoring':  { x: 80, y: 74, row: 6 },
	'parents-must-act':        { x: 42, y: 88, row: 7 },
};

export const rowLabels = [
	'Foundational Claims',
	'Factor 1: Changes at School',
	'Factor 2: Video Games',
	'Factor 2 (cont.) / Factor 3: ADHD',
	'Factor 4: Endocrine Disruptors',
	'Consequences / Factor 5 begins',
	'Factor 5: Cultural Analysis',
	'Prescriptive Synthesis'
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
		id: 'education-gap',
		step: 1,
		type: 'premise',
		claim: 'Boys are increasingly disengaging from school and underachieving relative to girls. The NAEP writing gap is ~15 points within every racial and income subgroup; male share of undergraduates fell from 57.7% (1970) to 43.1% (2014); 1 in 4 white boys with college-educated parents cannot read at basic proficiency vs. 1 in 16 girls.',
		shortLabel: 'Education gender gap',
		evidence: 'NAEP test score data; US Department of Education college enrollment data; NEA survey showing boys\' reading for pleasure declined dramatically 1980-2004.',
		status: 'green',
		explanation:
			'NAEP data is the gold standard for US educational assessment. The gender gap in writing is real, significant, and ' +
			'appears within every racial and income subgroup. College enrollment data is from the US Department of Education. ' +
			'These are among the most robust findings in the book.',
		dependsOn: [],
		collapseRisk: 'Low. The educational gender gap is well-documented across multiple federal datasets and longitudinal surveys.',
		bookLocations: [
			{ pages: '~pp. 8-20', chapter: 'Ch. 1: The Riddle', context: 'Statistical evidence of the growing gender gap in education' }
		],
		evidenceRefs: [
			{ label: 'NAEP writing scores', authorSearch: 'NAEP' },
			{ label: 'US Dept. of Education enrollment', authorSearch: 'enrollment' }
		]
	},

	// ======== C2 ========
	{
		id: 'new-phenomenon',
		step: 2,
		type: 'observation',
		claim: 'This is a new phenomenon, not a timeless feature of boyhood. Unlike Tom Sawyer or Ferris Bueller, who disdained school but pursued real-world ambitions, today\'s unmotivated boys lack passion for anything in the real world.',
		shortLabel: 'New phenomenon, not eternal',
		evidence: 'Contrast with Tom Sawyer/Ferris Bueller archetypes; Beach Boys "Be True to Your School" and Sam Cooke "Wonderful World" as cultural artifacts; statistical evidence from C1 supports the timeline.',
		status: 'yellow',
		explanation:
			'The cultural analysis is plausible and the statistical evidence in C1 supports the timeline, but the argument relies ' +
			'partly on cultural artifacts and anecdotes. The distinction between "disengaged from school" and "disengaged from everything" ' +
			'is conceptually important but hard to measure rigorously across decades.',
		dependsOn: ['education-gap'],
		collapseRisk: 'Moderate. The statistical trend is real, but the claim that boys used to be motivated in non-school pursuits is partly based on cultural analysis rather than hard data.',
		bookLocations: [
			{ pages: '~pp. 5-8', chapter: 'Ch. 1: The Riddle', context: 'Historical contrast: motivated rebels vs. unmotivated apathy' }
		],
		evidenceRefs: [
			{ label: 'Cultural analysis (Twain, Hughes)', authorSearch: 'Twain' }
		]
	},

	// ======== C3 ========
	{
		id: 'within-family',
		step: 3,
		type: 'premise',
		claim: 'The gender gap in education is not primarily a race or class issue; it exists within families. NAEP data shows a ~15-point writing gap within every racial and income subgroup.',
		shortLabel: 'Gap within families',
		evidence: 'NAEP Writing exam data broken down by race, sex, and free-lunch eligibility; anecdotes of sisters outperforming brothers in the same household.',
		status: 'green',
		explanation:
			'The NAEP data broken down by race, sex, and socioeconomic status is well-documented federal data. The within-group gender gap ' +
			'is comparable in magnitude to the race and income gaps. This is one of Sax\'s strongest empirical points, effectively countering ' +
			'the argument that the boys\' crisis is really just a class or race issue.',
		dependsOn: ['education-gap'],
		collapseRisk: 'Low. Federal assessment data is the gold standard; the within-group comparisons are straightforward.',
		bookLocations: [
			{ pages: '~pp. 12-14', chapter: 'Ch. 2: The First Factor', context: 'NAEP data controlling for race and income' }
		],
		evidenceRefs: [
			{ label: 'NAEP subgroup analysis', authorSearch: 'NAEP' }
		]
	},

	// ======== C4 ========
	{
		id: 'curriculum-acceleration',
		step: 4,
		type: 'causal',
		claim: 'The acceleration of the early elementary curriculum harms boys disproportionately because girls\' brains mature ~2 years earlier in reading/writing regions.',
		shortLabel: 'Curriculum acceleration harms boys',
		evidence: 'Brain development MRI research (Penn study, N=949); Finland example (formal schooling at age 7, outperforms US on PISA); trend of affluent parents redshirting boys; Deborah Stipek\'s research on early attitudes toward school.',
		status: 'yellow',
		explanation:
			'Brain development research is peer-reviewed and shows real sex differences, but the neuroscience community has cautioned against ' +
			'simplistic "boys\' brains are different so teach them differently" conclusions. The Finland comparison is valid but Finland differs ' +
			'from the US in many other ways. The causal chain from early academics to lifelong disengagement is plausible but not experimentally demonstrated.',
		dependsOn: ['education-gap', 'within-family'],
		collapseRisk: 'Moderate. The brain development data is real but the specific causal leap to lifelong harm from early curriculum acceleration is not directly tested.',
		bookLocations: [
			{ pages: '~pp. 5-10', chapter: 'Ch. 2: The First Factor', context: 'Brain development, Finland comparison, redshirting' }
		],
		evidenceRefs: [
			{ label: 'Penn MRI study (N=949)', authorSearch: 'brain development' },
			{ label: 'Finland PISA comparison', authorSearch: 'Finland' },
			{ label: 'Deborah Stipek', authorSearch: 'Stipek' }
		]
	},

	// ======== C5 ========
	{
		id: 'girls-please-teachers',
		step: 5,
		type: 'theory',
		claim: 'Girls are more intrinsically motivated to please teachers than boys, due to evolutionary and biological factors. Female chimps learn from adults while males prefer rough play.',
		shortLabel: 'Girls motivated to please adults',
		evidence: 'Lonsdorf, Eberly, and Pusey chimpanzee studies; primate philopatry research; cross-cultural data on girls\' homework compliance; school shooting tip-off data (girls alerted adults in 18 of 20 prevented cases).',
		status: 'yellow',
		explanation:
			'The chimpanzee field studies are well-conducted, but primate analogies are suggestive, not conclusive for human behavior. ' +
			'Homework compliance data is correlational. The evolutionary explanation is plausible but untestable in its ultimate form. ' +
			'The school shooting data point is interesting but tangential.',
		dependsOn: ['curriculum-acceleration'],
		collapseRisk: 'Moderate. The primate evidence is real but the inferential leap to human educational policy is significant.',
		bookLocations: [
			{ pages: '~pp. 8-10', chapter: 'Ch. 2: The First Factor', context: 'Primate sex differences in learning orientation' }
		],
		evidenceRefs: [
			{ label: 'Lonsdorf et al. (chimps)', authorSearch: 'Lonsdorf' },
			{ label: 'Primate philopatry', authorSearch: 'philopatry' }
		]
	},

	// ======== C6 ========
	{
		id: 'kenntnis-wissenschaft',
		step: 6,
		type: 'causal',
		claim: 'The shift from experiential learning (Kenntnis) to didactic learning (Wissenschaft) especially harms boys, who need hands-on engagement to stay motivated.',
		shortLabel: 'Experiential vs. didactic learning',
		evidence: 'Richard Louv\'s "Last Child in the Woods" research; Swedish day-care study (green vs. urban facilities); University of Illinois ADHD/outdoor research; Frank Wilson on medical students; 60+ years of multisensory research (Rene Spitz).',
		status: 'yellow',
		explanation:
			'Individual studies support the general principle that experiential learning benefits children. However, the specific claim that ' +
			'this shift disproportionately harms boys more than girls rests partly on the claims in C5 about differential motivation. ' +
			'The Swedish day-care study and outdoor ADHD research are suggestive but not definitive for the gender-specific claim.',
		dependsOn: ['curriculum-acceleration', 'girls-please-teachers'],
		collapseRisk: 'Moderate for the general principle; the gender-specific application is less well-established.',
		bookLocations: [
			{ pages: '~pp. 10-12', chapter: 'Ch. 2: The First Factor', context: 'Experiential vs. abstract learning, nature-deficit disorder' }
		],
		evidenceRefs: [
			{ label: 'Richard Louv (nature deficit)', authorSearch: 'Louv' },
			{ label: 'Rene Spitz (multisensory)', authorSearch: 'Spitz' }
		]
	},

	// ======== C7 ========
	{
		id: 'competition-eliminated',
		step: 7,
		type: 'causal',
		claim: 'Elimination of competition from schools disproportionately demotivates boys who thrive on competitive formats. Self-esteem correlation with performance is zero or negative for boys.',
		shortLabel: 'Loss of competition harms boys',
		evidence: 'Mater Dei School Blue/White team system; Canadian boys\' school snowshoe relay; dodgeball elimination trend; "everybody gets a trophy" anecdote; Harvard self-esteem study with Asian American women; self-esteem/performance research.',
		status: 'yellow',
		explanation:
			'Self-esteem research is peer-reviewed but contested. The Mater Dei and snowshoe examples are anecdotal. ' +
			'The claim that competition is specifically more important for boys than girls rests on gender-essentialist assumptions ' +
			'that are plausible but not definitively proven. The Australian sports model providing more team opportunities is interesting but ecological.',
		dependsOn: ['education-gap', 'girls-please-teachers'],
		collapseRisk: 'Moderate. The observation that some boys thrive on competition is reasonable, but the evidence that eliminating competition causes the gender gap is thin.',
		bookLocations: [
			{ pages: '~pp. 16-20', chapter: 'Ch. 2: The First Factor', context: 'Competition, self-esteem, "everybody gets a trophy"' }
		],
		evidenceRefs: [
			{ label: 'Self-esteem / performance research', authorSearch: 'self-esteem' }
		]
	},

	// ======== C8 ========
	{
		id: 'zero-tolerance',
		step: 8,
		type: 'observation',
		claim: 'Zero-tolerance policies and restrictions on boy-typical behaviors (imaginary weapons, violent stories, snowball fights) have made schools hostile to boys.',
		shortLabel: 'Zero-tolerance hostile to boys',
		evidence: 'Examples of suspensions for imaginary bows, Pop-Tart guns, tiny G.I. Joe weapons; Sax\'s own violent story winning award in 1977; research showing zero-tolerance policies increase discipline referrals without reducing actual violence.',
		status: 'yellow',
		explanation:
			'The individual examples are well-documented news stories. The research showing zero-tolerance policies increase discipline referrals ' +
			'without reducing violence is published. However, the claim that this contributes meaningfully to the overall gender gap in motivation ' +
			'is harder to quantify. The examples may represent extreme cases rather than a systematic cause.',
		dependsOn: ['education-gap'],
		collapseRisk: 'Moderate. The policy critique is reasonable but its contribution to the overall gender gap is unclear.',
		bookLocations: [
			{ pages: '~pp. 14-20', chapter: 'Ch. 2: The First Factor', context: 'Zero-tolerance suspensions, snowball bans, boy-typical behavior policed' }
		],
		evidenceRefs: [
			{ label: 'Zero-tolerance policy research', authorSearch: 'zero-tolerance' }
		]
	},

	// ======== C9 ========
	{
		id: 'videogames-will-power',
		step: 9,
		type: 'theory',
		claim: 'Video games hijack boys\' "will to power" (Nietzsche), redirecting motivation from the real world to the virtual world. The desire for environmental control is innate from infancy.',
		shortLabel: 'Video games hijack will to power',
		evidence: 'Nietzsche\'s "will to power" concept; Sony PS4 "Greatness Awaits" ad analysis; infant mobile study showing desire for environmental control from 2 months; anecdotes of boys preferring video games to girls, school, and sports.',
		status: 'untestable',
		explanation:
			'The Nietzschean theoretical framework is philosophically interesting but empirically untestable. ' +
			'The behavioral observations (boys preferring games to real-world activities) are consistent but the specific causal mechanism -- ' +
			'"will to power" -- cannot be measured or falsified. The infant mobile study shows desire for control but calling it "will to power" ' +
			'is a philosophical interpretation, not an empirical finding.',
		dependsOn: ['education-gap', 'new-phenomenon'],
		collapseRisk: 'The theoretical framework is unfalsifiable. The underlying observation (games displace real activities) is reasonable but the "will to power" explanation adds no testable predictions.',
		bookLocations: [
			{ pages: '~pp. 21-23', chapter: 'Ch. 3: The Second Factor', context: 'Nietzsche, will to power, video games as motivation displacement' }
		],
		evidenceRefs: [
			{ label: 'Nietzsche (will to power)', authorSearch: 'Nietzsche' }
		]
	},

	// ======== C10 ========
	{
		id: 'videogames-effects',
		step: 10,
		type: 'observation',
		claim: 'Violent video games cause measurable negative effects: increased distractibility, risk-taking, obesity, dehumanization, and antisocial behavior. Effect sizes are comparable to secondhand smoke/lung cancer.',
		shortLabel: 'Video game negative effects',
		evidence: 'Craig Anderson\'s meta-analyses; longitudinal study linking racing games to 3x crash risk; appetite-stimulant effect of gaming; dehumanization studies; 4-year longitudinal study linking violent game play to substance abuse; Brown v. EMA Supreme Court ruling.',
		status: 'yellow',
		explanation:
			'Anderson\'s meta-analyses are widely cited but also contested by Christopher Ferguson and others who have published ' +
			'competing meta-analyses showing smaller or null effects. The comparison to secondhand smoke has been challenged. ' +
			'Longitudinal studies show correlation but experimental evidence is more limited. The APA acknowledged a link to aggression but not to criminal violence. ' +
			'Sax presents Anderson\'s position as settled science; it is not.',
		dependsOn: [],
		collapseRisk: 'Moderate. The evidence base is real but the field is divided. Presenting one side as definitive is misleading.',
		bookLocations: [
			{ pages: '~pp. 23-26', chapter: 'Ch. 3: The Second Factor', context: 'Meta-analyses, longitudinal studies, effect sizes' }
		],
		evidenceRefs: [
			{ label: 'Craig Anderson (meta-analyses)', authorSearch: 'Anderson' },
			{ label: 'Brown v. EMA (Supreme Court)', authorSearch: 'Brown v.' }
		]
	},

	// ======== C11 ========
	{
		id: 'videogames-qualitative',
		step: 11,
		type: 'observation',
		claim: 'Violent video games are qualitatively different from nonviolent games: more realistic violence produces bigger desensitization effects; some E-rated games are more violent than T-rated games.',
		shortLabel: 'Violent games qualitatively worse',
		evidence: 'Brain desensitization studies in violent vs. nonviolent game players; realism-effect gradient research; Anderson\'s team rating studies showing E-rated games sometimes more violent than T-rated.',
		status: 'yellow',
		explanation:
			'The desensitization findings are replicated but contested by some researchers. The effect sizes are debated. ' +
			'The observation about E-rated games being sometimes more violent than T-rated games highlights rating system limitations ' +
			'but is tangential to the core claim about harm.',
		dependsOn: ['videogames-effects'],
		collapseRisk: 'Moderate. The replicated findings exist but the entire video game violence field remains contested.',
		bookLocations: [
			{ pages: '~pp. 24-25', chapter: 'Ch. 3: The Second Factor', context: 'Desensitization, realism gradient, ESRB rating limitations' }
		],
		evidenceRefs: [
			{ label: 'Brain desensitization studies', authorSearch: 'desensitization' }
		]
	},

	// ======== C12 ========
	{
		id: 'adhd-overdiagnosis',
		step: 12,
		type: 'causal',
		claim: 'ADHD is massively overdiagnosed in boys: diagnosis rate increased ~10x (12/1,000 to 110/1,000); teachers most commonly suggest the diagnosis; medications help normal children equally, undermining diagnostic validity.',
		shortLabel: 'ADHD overdiagnosis',
		evidence: 'ADHD diagnosis rate 10x increase; Sax\'s survey of DC-area doctors; Gabrieli (MIT) study showing equal medication effect in ADHD and non-ADHD children; five DSM-5 criteria analysis; "Jared" case study (thrived at boys\' school without medication).',
		status: 'yellow',
		explanation:
			'The 10x increase in diagnosis rates is well-documented. Gabrieli\'s finding that medications help all children equally is significant. ' +
			'However, the causal claim that inappropriate school expectations are the primary driver of overdiagnosis is supported by correlational ' +
			'evidence but not experimentally proven. The Jared case study demonstrates feasibility but not universal applicability. ' +
			'Sax does not deny ADHD exists but argues the threshold for diagnosis is far too low.',
		dependsOn: ['curriculum-acceleration', 'kenntnis-wissenschaft'],
		collapseRisk: 'Moderate. The overdiagnosis concern is widely shared in the medical community, but the specific claim that changing schools eliminates the need for medication is not supported by controlled trials.',
		bookLocations: [
			{ pages: '~pp. 30-37', chapter: 'Ch. 4: The Third Factor', context: 'ADHD diagnosis trends, Gabrieli study, DSM-5 analysis, Jared case study' }
		],
		evidenceRefs: [
			{ label: 'ADHD diagnosis rate data', authorSearch: 'ADHD diagnosis' },
			{ label: 'Gabrieli (MIT)', authorSearch: 'Gabrieli' }
		]
	},

	// ======== C13 ========
	{
		id: 'adhd-nucleus-accumbens',
		step: 13,
		type: 'causal',
		claim: 'Stimulant medications (Adderall, Ritalin, Concerta) may cause lasting damage to the nucleus accumbens, the brain\'s motivational center, impairing drive and ambition in adulthood.',
		shortLabel: 'Stimulants damage motivation center',
		evidence: 'William Carlezon (Harvard) animal studies; brain imaging showing nucleus accumbens changes; finding that ADHD itself is associated with larger nucleus accumbens (so shrinkage isn\'t the disorder); near-linear correlation between nucleus accumbens size and motivation; "Timmy" case study.',
		status: 'yellow',
		explanation:
			'The animal studies by Carlezon are well-conducted and concerning. However, extrapolation from juvenile animals to therapeutic doses in humans ' +
			'requires caution. Human brain imaging studies are mostly cross-sectional, not longitudinal. The claim of lasting, clinically significant damage ' +
			'in humans at therapeutic doses is not proven. Sax acknowledges uncertainty but his presentation leans strongly toward the harm conclusion.',
		dependsOn: ['adhd-overdiagnosis'],
		collapseRisk: 'Moderate-to-high. If the nucleus accumbens damage claim does not hold in humans at therapeutic doses, a core pillar of the book weakens considerably.',
		bookLocations: [
			{ pages: '~pp. 33-37', chapter: 'Ch. 4: The Third Factor', context: 'Carlezon animal studies, nucleus accumbens, case studies' }
		],
		evidenceRefs: [
			{ label: 'William Carlezon (Harvard)', authorSearch: 'Carlezon' },
			{ label: 'Nucleus accumbens imaging', authorSearch: 'nucleus accumbens' }
		]
	},

	// ======== C14 ========
	{
		id: 'endocrine-feminizing',
		step: 14,
		type: 'premise',
		claim: 'Environmental estrogens (phthalates, BPA) are feminizing males across species: feminized fish, declining sperm counts, genital malformations, lower testosterone in young men compared to their grandfathers.',
		shortLabel: 'Endocrine disruptors feminize males',
		evidence: 'Potomac River feminized fish (80%+ USGS); Florida feminized alligators; Swan\'s phthalate/genital malformation study (10x risk); declining sperm counts meta-analysis; young men\'s testosterone lower than grandfathers\'; 84,000+ untested synthetic chemicals (EPA data).',
		status: 'yellow',
		explanation:
			'The animal evidence (fish, alligators) is robust and well-documented. Swan\'s human epidemiological work is well-regarded ' +
			'but the 10x figure represents the extreme end. Declining sperm counts are supported by a major 2017 meta-analysis but ' +
			'some researchers dispute the magnitude. The causal chain from environmental exposure to specific behavioral outcomes in humans ' +
			'is less firmly established. The testosterone decline could also be explained by obesity and lifestyle changes.',
		dependsOn: [],
		collapseRisk: 'Moderate. The wildlife evidence is strong. The human health extrapolation is plausible but not proven for behavioral outcomes.',
		bookLocations: [
			{ pages: '~pp. 37-43', chapter: 'Ch. 5: The Fourth Factor', context: 'Feminized fish, phthalates, BPA, sperm counts, testosterone decline' }
		],
		evidenceRefs: [
			{ label: 'USGS Potomac fish study', authorSearch: 'Potomac' },
			{ label: 'Shanna Swan (phthalates)', authorSearch: 'Swan' },
			{ label: 'Sperm count meta-analysis', authorSearch: 'sperm count' }
		]
	},

	// ======== C15 ========
	{
		id: 'endocrine-puberty',
		step: 15,
		type: 'causal',
		claim: 'Endocrine disruptors accelerate puberty in girls while delaying or disrupting it in boys, widening the developmental gap between sexes.',
		shortLabel: 'Puberty timing disrupted',
		evidence: 'Half of American girls begin puberty before age 10; endosulfan pesticide study (2003) showing puberty disruption in boys only; Italian study showing BPA-exposed males\' activity "feminized, strongly resembling control females"; Tufts study showing low-dose BPA eliminates sex-differentiation in brain structure.',
		status: 'yellow',
		explanation:
			'The trend toward earlier female puberty is well-documented. The animal and cell studies are peer-reviewed. However, attributing ' +
			'the puberty timing trends specifically to endocrine disruptors rather than other factors (nutrition, obesity) is contested. ' +
			'The claim that boys\' puberty is being delayed by these chemicals is less firmly established than the girl-specific effects.',
		dependsOn: ['endocrine-feminizing'],
		collapseRisk: 'Moderate. The observational data is real but the specific causal attribution competes with multiple alternative explanations.',
		bookLocations: [
			{ pages: '~pp. 39-43', chapter: 'Ch. 5: The Fourth Factor', context: 'Puberty timing, endosulfan, BPA sex-differential effects' }
		],
		evidenceRefs: [
			{ label: 'Endosulfan study (2003)', authorSearch: 'endosulfan' },
			{ label: 'Tufts BPA study', authorSearch: 'BPA brain' }
		]
	},

	// ======== C16 ========
	{
		id: 'bones-brittle',
		step: 16,
		type: 'observation',
		claim: 'Boys\' bones are becoming more brittle: fracture risk roughly doubled (1960s-1990s), 350% increase (2004-2009), 440% increase in mid-shaft forearm fractures (2000-2009), possibly linked to endocrine disruptors.',
		shortLabel: 'Boys\' bones more brittle',
		evidence: 'Fracture rate studies; cross-species research linking endocrine disruptors to bone density loss (monkeys, alligators, polar bears); controlled for weight.',
		status: 'yellow',
		explanation:
			'The fracture rate increase is documented in peer-reviewed studies. However, multiple confounders exist: decreased physical activity, ' +
			'changes in play behavior, dietary changes (less milk, more cola). Sax acknowledges dietary changes but argues they cannot fully explain ' +
			'the trend. The specific attribution to endocrine disruptors is one hypothesis among several.',
		dependsOn: ['endocrine-feminizing'],
		collapseRisk: 'Moderate. The observation is real but the causal mechanism is uncertain.',
		bookLocations: [
			{ pages: '~pp. 42-43', chapter: 'Ch. 5: The Fourth Factor', context: 'Fracture rates, bone density, endocrine disruptors in wildlife' }
		],
		evidenceRefs: [
			{ label: 'Fracture rate studies', authorSearch: 'fracture' }
		]
	},

	// ======== C17 ========
	{
		id: 'testosterone-motivation',
		step: 17,
		type: 'causal',
		claim: 'Testosterone fuels motivation and ambition in boys (but not girls). Declining testosterone levels in young men, driven by environmental estrogens, contribute to declining male motivation.',
		shortLabel: 'Testosterone drives male motivation',
		evidence: 'Research showing high-achieving boys have higher testosterone than low-achieving boys; competitive girls do NOT have higher testosterone; declining testosterone in young men across industrialized nations.',
		status: 'yellow',
		explanation:
			'The correlation between testosterone and male motivation is documented. However, the claim that environmental estrogens are ' +
			'the primary cause of testosterone decline is supported but not proven -- alternative explanations like obesity and lifestyle changes exist. ' +
			'The sex-specific nature of the testosterone-motivation link is interesting but the causal direction is not established ' +
			'(does testosterone cause achievement or does achievement raise testosterone?).',
		dependsOn: ['endocrine-feminizing', 'endocrine-puberty'],
		collapseRisk: 'Moderate-to-high. The correlation is real but the causal chain (endocrine disruptors -> lower testosterone -> less motivation) involves multiple unproven links.',
		bookLocations: [
			{ pages: '~pp. 43-44', chapter: 'Ch. 5: The Fourth Factor', context: 'Testosterone and motivation, sex-differential effects' }
		],
		evidenceRefs: [
			{ label: 'Testosterone / achievement research', authorSearch: 'testosterone' }
		]
	},

	// ======== C18 ========
	{
		id: 'failure-to-launch',
		step: 18,
		type: 'consequence',
		claim: 'The "failure to launch" phenomenon -- young men living at home, not working, not motivated -- is a real and growing trend. Men 25-54 not working rose 25% (2004-2014); young men living at home doubled (1970-2011).',
		shortLabel: 'Failure to launch',
		evidence: 'Bureau of Labor Statistics data; Census Bureau data; Michigan data (18% of men 30-54 not working); married couples with children now only 20% of households; New York Times reporting; movie "Failure to Launch" as cultural marker.',
		status: 'green',
		explanation:
			'Demographic data from BLS and Census Bureau is robust. The trend is well-documented across multiple sources. ' +
			'The descriptive finding is beyond dispute. However, attributing this specifically to the five factors Sax identifies ' +
			'(rather than to economic restructuring, the Great Recession, housing costs, etc.) is where the argument becomes more speculative.',
		dependsOn: ['education-gap'],
		collapseRisk: 'Low for the observation. High for the specific causal attribution to Sax\'s five factors vs. economic explanations.',
		bookLocations: [
			{ pages: '~pp. 44-57', chapter: 'Ch. 6: End Result', context: 'BLS data, Census data, marriage decline, reader emails' }
		],
		evidenceRefs: [
			{ label: 'Bureau of Labor Statistics', authorSearch: 'BLS' },
			{ label: 'Census Bureau data', authorSearch: 'Census' }
		]
	},

	// ======== C19 ========
	{
		id: 'pornography-replacing',
		step: 19,
		type: 'consequence',
		claim: 'Pornography is replacing real sexual relationships for many young men. 1 in 3 college-aged men reports erectile dysfunction; Harvard study finds 69% of men seeking sexual help have "compulsive masturbation."',
		shortLabel: 'Porn replaces real relationships',
		evidence: 'Harvard study (69% compulsive masturbation, 50% pornography-dependent); 1 in 3 college men with erectile dysfunction; John Mayer public statements; Sax\'s informal middle school survey; young men requesting Viagra/Cialis.',
		status: 'yellow',
		explanation:
			'Individual studies are concerning, but the claim of a causal relationship between pornography and disengagement from relationships is correlational. ' +
			'The middle school survey is informal and likely subject to social desirability bias. The Harvard study and erectile dysfunction data ' +
			'are peer-reviewed but the causal direction is debatable (does pornography cause dysfunction or do men with dysfunction turn to pornography?).',
		dependsOn: ['failure-to-launch'],
		collapseRisk: 'Moderate. The correlational data is real but causal attribution is uncertain.',
		bookLocations: [
			{ pages: '~pp. 49-50', chapter: 'Ch. 6: End Result', context: 'Pornography, erectile dysfunction, compulsive masturbation data' }
		],
		evidenceRefs: [
			{ label: 'Harvard sexual problems study', authorSearch: 'compulsive masturbation' }
		]
	},

	// ======== C20 ========
	{
		id: 'trades-declining',
		step: 20,
		type: 'observation',
		claim: 'Traditional trades and blue-collar work have lost status, contributing to male purposelessness. Plumbers and contractors cannot recruit American-born young men despite $80-100K salaries.',
		shortLabel: 'Trades lost status',
		evidence: 'Plumber Neal Brown\'s recruitment difficulties; contractor John Craft; Miller & Long getting 75%+ from El Salvador; Jeff Donohoe\'s failed high school recruiting; Charles Murray on credential inflation; master plumber earning $80-100K.',
		status: 'yellow',
		explanation:
			'The anecdotes are consistent across multiple informants and the broader trend of declining trade enrollment is documented. ' +
			'However, the causal attribution to cultural attitudes rather than economic factors (instability of construction work, lack of benefits, ' +
			'physical toll) is debatable. The recommendation to value trades is reasonable but the evidence is primarily anecdotal.',
		dependsOn: ['failure-to-launch'],
		collapseRisk: 'Moderate. The observation is plausible but the evidence is primarily anecdotal rather than systematic.',
		bookLocations: [
			{ pages: '~pp. 44-46', chapter: 'Ch. 6: End Result', context: 'Trade recruitment difficulties, credential inflation, skilled labor shortage' }
		],
		evidenceRefs: [
			{ label: 'Charles Murray (credentialism)', authorSearch: 'Murray' }
		]
	},

	// ======== C21 ========
	{
		id: 'forsaken-gods',
		step: 21,
		type: 'theory',
		claim: 'Our culture has neglected the structured transition from boyhood to manhood that virtually all enduring cultures maintain. Manhood must be achieved through community ritual, not assumed from age alone.',
		shortLabel: 'Forsaken rites of passage',
		evidence: 'David Gilmore\'s cross-cultural research; examples from !Kung, Samburu, Masai, Navajo, Orthodox Jews, Japanese samurai; Alaskan Native Larry Merculieff\'s account; J.R. Moehringer: "Manhood is mimesis"; Boy Scout founding (1910) aimed at making "men of little boys."',
		status: 'untestable',
		explanation:
			'Gilmore\'s anthropological research is well-regarded and the cross-cultural observation is robust as description. However, the ' +
			'inference that our culture\'s neglect of these transitions caused the current epidemic of male apathy is theoretical and not empirically ' +
			'testable in any controlled sense. The "forsaken gods" metaphor is evocative but unscientific. Many modern cultures lack formal rites of ' +
			'passage without exhibiting the specific problems Sax describes.',
		dependsOn: ['failure-to-launch'],
		collapseRisk: 'The anthropological evidence is solid as description. The causal-prescriptive claim that restoring rites of passage will fix male apathy is untestable.',
		bookLocations: [
			{ pages: '~pp. 58-65', chapter: 'Ch. 7: The Fifth Factor', context: 'Cross-cultural masculinity rites, Gilmore, Merculieff, Boy Scouts' }
		],
		evidenceRefs: [
			{ label: 'David Gilmore (cross-cultural)', authorSearch: 'Gilmore' },
			{ label: 'Larry Merculieff (Alaska Native)', authorSearch: 'Merculieff' }
		]
	},

	// ======== C22 ========
	{
		id: 'immigrant-paradox',
		step: 22,
		type: 'observation',
		claim: 'The "immigrant paradox" demonstrates that American culture itself is toxic to children: children of new immigrants are at lower risk than American-born children from the same demographics, and the advantage erodes with acculturation.',
		shortLabel: 'Immigrant paradox',
		evidence: 'APA 328-page monograph (2011); Dartmouth expert panel (Brazelton, Coles); data showing lower risk for new immigrants across anxiety, depression, substance abuse, and delinquency.',
		status: 'green',
		explanation:
			'This is one of the strongest pieces of evidence in the book. The finding is robust, well-replicated across multiple studies, ' +
			'and documented in a comprehensive APA monograph. The Dartmouth panel\'s conclusion that American culture is "toxic" to children ' +
			'is a strong interpretation, but the underlying data pattern is difficult to dismiss. Many possible mechanisms exist beyond ' +
			'the ones Sax emphasizes.',
		dependsOn: ['forsaken-gods'],
		collapseRisk: 'Low for the observation. The specific mechanism Sax proposes (loss of cultural rites) is just one of many possible explanations.',
		bookLocations: [
			{ pages: '~pp. 61-63', chapter: 'Ch. 7: The Fifth Factor', context: 'APA monograph, Dartmouth panel, acculturation effects' }
		],
		evidenceRefs: [
			{ label: 'APA Immigrant Paradox monograph (2011)', authorSearch: 'immigrant paradox' },
			{ label: 'Dartmouth panel', authorSearch: 'Brazelton' }
		]
	},

	// ======== C23 ========
	{
		id: 'fatherhood-degraded',
		step: 23,
		type: 'theory',
		claim: 'The cultural image of fatherhood has degraded from wise patriarch (Father Knows Best) to buffoon (Homer Simpson), confusing boys about what manhood means.',
		shortLabel: 'Father as buffoon',
		evidence: 'Trajectory from Father Knows Best to The Simpsons; Harvey Mansfield\'s "Manliness" book critique; absence of movies depicting ordinary boys becoming men in realistic settings.',
		status: 'untestable',
		explanation:
			'Cultural analysis is inherently interpretive. The trajectory from wise TV fathers to buffoon TV fathers is observable, ' +
			'but the causal link between TV portrayals and actual boy outcomes is not established. Cherry-picking of cultural examples is possible. ' +
			'Many other factors changed simultaneously. This is the weakest evidential section of the cultural analysis.',
		dependsOn: ['forsaken-gods'],
		collapseRisk: 'High. The cultural critique is plausible but unfalsifiable. Correlation between media portrayals and outcomes does not establish causation.',
		bookLocations: [
			{ pages: '~pp. 63-65', chapter: 'Ch. 7: The Fifth Factor', context: 'TV father figures, Mansfield critique, cultural analysis of masculinity' }
		],
		evidenceRefs: [
			{ label: 'Harvey Mansfield (Manliness)', authorSearch: 'Mansfield' }
		]
	},

	// ======== C24 ========
	{
		id: 'boys-schools-mentoring',
		step: 24,
		type: 'solution',
		claim: 'Boys\' schools and male mentoring communities can reverse many of these negative trends. Case studies show boys going off medications, engaging academically, and developing character in single-sex and mentoring environments.',
		shortLabel: 'Boys\' schools and mentoring',
		evidence: '"Jared" case study (thrived at The Heights boys\' school); Avon Old Farms boys\' school; Georgetown Prep Somos Amigos program; Craig McClain\'s Boys to Men program; Waldkindergarten in Germany; Partners 2 community in Burlington, Wisconsin.',
		status: 'yellow',
		explanation:
			'The case studies and program descriptions are compelling but not controlled experiments. Selection bias is a significant concern ' +
			'with all school-choice examples (families who choose boys\' schools differ in motivation and resources from those who do not). ' +
			'The Waldkindergarten study is suggestive but ecological. No randomized controlled trial compares boys\' schools to coeducational schools ' +
			'with proper controls for selection effects.',
		dependsOn: ['adhd-overdiagnosis', 'forsaken-gods'],
		collapseRisk: 'Moderate-to-high. The recommendations are reasonable but the evidence consists of success stories rather than controlled evaluations.',
		bookLocations: [
			{ pages: 'Various', chapter: 'Ch. 4, 7, 8', context: 'Boys\' school case studies, mentoring programs, Waldkindergarten' }
		],
		evidenceRefs: [
			{ label: 'Craig McClain (Boys to Men)', authorSearch: 'McClain' },
			{ label: 'Waldkindergarten (Roland Gorges)', authorSearch: 'Waldkindergarten' }
		]
	},

	// ======== C25 ========
	{
		id: 'parents-must-act',
		step: 25,
		type: 'solution',
		claim: 'Parents must actively intervene across all five factors: change schools, restrict video games, avoid unnecessary medications, reduce chemical exposure, and reconnect boys with male mentoring communities. Waiting for insight or institutional solutions is futile.',
		shortLabel: 'Parents must act',
		evidence: '"Jacob" case study (22-year-old gamer with no insight even after improvement); "Aaron" case study (reluctantly started football, stopped gaming voluntarily); Brown v. EMA Supreme Court ruling (no legal restriction on game sales to minors); parental community models (Partners 2, Boys to Men); RaceLegal program.',
		status: 'yellow',
		explanation:
			'The prescriptive claim is the culmination of the book. The supporting evidence consists of successful case examples, ' +
			'which demonstrate feasibility but not universal applicability. The observation that boys will not develop "insight" on their own ' +
			'is clinically interesting but generalized from a small number of cases. The Supreme Court ruling point is factually correct ' +
			'and underscores the need for parental rather than governmental action. The specific recommendations are reasonable but untested ' +
			'as a comprehensive program.',
		dependsOn: ['videogames-will-power', 'videogames-effects', 'adhd-nucleus-accumbens', 'failure-to-launch'],
		collapseRisk: 'Moderate. The recommendations are individually reasonable, but the evidence that they will collectively reverse the trend consists of anecdotes rather than controlled trials.',
		bookLocations: [
			{ pages: 'Various', chapter: 'Ch. 3, 8', context: 'Detox strategies, case studies, community models, parental authority' }
		],
		evidenceRefs: [
			{ label: 'Brown v. EMA (Supreme Court)', authorSearch: 'Brown v.' },
			{ label: 'RaceLegal program', authorSearch: 'RaceLegal' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	// Start from 'parents-must-act' (the final prescriptive synthesis) and trace back through weakest dependencies
	const target = chain.find((c) => c.id === 'parents-must-act')!;
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
		'The argument chain for "Boys Adrift" is strongest at its descriptive foundations: the educational gender gap (NAEP data, enrollment trends), ' +
		'the "failure to launch" demographic data, and the immigrant paradox are all well-supported by federal datasets and peer-reviewed research. ' +
		'The five-factor causal framework is where the chain weakens. Factor 1 (school changes) rests on real brain development research but ' +
		'overextends its educational implications. Factor 2 (video games) relies on contested meta-analyses and an untestable Nietzschean framework. ' +
		'Factor 3 (ADHD medications) combines a legitimate overdiagnosis concern with an unproven claim about nucleus accumbens damage. ' +
		'Factor 4 (endocrine disruptors) draws on robust wildlife evidence but the human behavioral extrapolation is speculative. ' +
		'Factor 5 (cultural rites of passage) is anthropologically interesting but empirically untestable as a causal claim. ' +
		'The weakest links are the prescriptive conclusions, where Sax relies on case studies and anecdotes rather than controlled evidence. ' +
		'The book is most valuable as an alarm bell about real demographic trends; it is least reliable when attributing specific causes ' +
		'and prescribing specific remedies.'
};
