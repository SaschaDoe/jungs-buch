// synthesis-data.ts
// "The Perfect Book" — synthesis of all green evidence + derived suggestions + missing research

export type NodeTier = 'core' | 'derived' | 'gap';
export type EvidenceStrength = 'green' | 'yellow' | 'new';

export interface SynthSource {
	label: string;
	url?: string;
}

export interface SynthNode {
	id: string;
	label: string;
	claim: string;
	tier: NodeTier;
	strength: EvidenceStrength;
	domain: string;
	/** Which books provide evidence for this */
	sourceBooks: string[];
	/** External sources (for gaps/new claims) */
	externalSources: SynthSource[];
	dependsOn: string[];
	explanation: string;
	isNewSource?: boolean;
}

export const domains = [
	{ id: 'biology', label: 'Biology & Brain', color: '#10b981' },
	{ id: 'emotion', label: 'Emotional Development', color: '#3b82f6' },
	{ id: 'education', label: 'Education & Learning', color: '#f59e0b' },
	{ id: 'social', label: 'Social & Peers', color: '#8b5cf6' },
	{ id: 'family', label: 'Family & Attachment', color: '#ef4444' },
	{ id: 'identity', label: 'Identity & Purpose', color: '#ec4899' },
	{ id: 'physical', label: 'Physical Activity & Play', color: '#06b6d4' },
	{ id: 'society', label: 'Society & Culture', color: '#f97316' },
];

export const synthNodes: SynthNode[] = [
	// ══════════════════════════════════════════════════════
	// TIER: CORE — Green evidence from the 8 books
	// ══════════════════════════════════════════════════════

	// Biology & Brain
	{
		id: 'brain-diff-small-but-real',
		label: 'Brain differences: small but real',
		claim: 'Sex differences in children\'s brains are much smaller than pop-science claims. Only brain size (8-11% larger in boys) and maturation timing (girls 1-2 years ahead) are reliably proven. Most psychological differences are small (d < 0.35).',
		tier: 'core', strength: 'green', domain: 'biology',
		sourceBooks: ['pb', 'mf'],
		externalSources: [],
		dependsOn: [],
		explanation: 'Eliot\'s meta-analytic review + Hyde\'s Gender Similarities Hypothesis. Geary\'s evolutionary framework acknowledges the same magnitudes but interprets them through sexual selection.'
	},
	{
		id: 'prenatal-t-biases',
		label: 'Prenatal testosterone biases, not determines',
		claim: 'Prenatal testosterone creates behavioral biases (toy preferences, activity level) but does NOT determine outcomes. CAH girls show masculine toy preferences but retain female gender identity. Biology sets starting points; experience shapes trajectories.',
		tier: 'core', strength: 'green', domain: 'biology',
		sourceBooks: ['pb', 'mf'],
		externalSources: [],
		dependsOn: [],
		explanation: 'CAH natural experiment + animal studies. Key: "biases not determines" is the scientific consensus position (interactionism).'
	},
	{
		id: 'boys-mature-slower',
		label: 'Boys develop 1-2 years behind girls',
		claim: 'Girls\' brains mature faster: 1-2 year gap in language, inhibitory control, and reading readiness. Boys lag in self-control (the largest temperamental sex difference). This is developmental timing, not deficit.',
		tier: 'core', strength: 'green', domain: 'biology',
		sourceBooks: ['pb', 'wgm', 'mf', 'rc'],
		externalSources: [],
		dependsOn: ['brain-diff-small-but-real'],
		explanation: 'Convergent evidence from neuroscience (Eliot), clinical observation (Sax), evolutionary theory (Geary life-history), and developmental psychology (Kindlon).'
	},
	{
		id: 'neural-plasticity',
		label: 'Neural plasticity amplifies small seeds',
		claim: 'Small initial biological biases become large adult differences through neural plasticity and experience. "Your brain is what you do with it." This means interventions CAN reshape trajectories.',
		tier: 'core', strength: 'green', domain: 'biology',
		sourceBooks: ['pb'],
		externalSources: [],
		dependsOn: ['brain-diff-small-but-real', 'prenatal-t-biases'],
		explanation: 'Eliot\'s central thesis. Supported by decades of neuroplasticity research. The optimistic implication: biology is not destiny.'
	},

	// Emotional Development
	{
		id: 'boys-born-emotional',
		label: 'Boys born MORE emotionally reactive',
		claim: 'Newborn boys are more emotionally reactive than girls (cry more, more fussy). The adult pattern of male emotional restraint is learned through cultural training, not innate.',
		tier: 'core', strength: 'green', domain: 'emotion',
		sourceBooks: ['pb', 'rc'],
		externalSources: [],
		dependsOn: [],
		explanation: 'Brody (1996) meta-analysis + Fabes & Eisenberg (1994). Both Eliot and Kindlon/Thompson converge on this finding independently.'
	},
	{
		id: 'emotional-suppression-learned',
		label: 'Emotional suppression is socialized',
		claim: 'Parents differentially suppress boys\' emotional expression starting in infancy. Eye contact shows no sex difference at birth but girls increase 4-fold by 4 months. Boys learn to hide feelings through cultural training.',
		tier: 'core', strength: 'green', domain: 'emotion',
		sourceBooks: ['pb', 'rc'],
		externalSources: [],
		dependsOn: ['boys-born-emotional'],
		explanation: 'Convergent evidence from developmental psychology. Parents talk about emotions less with sons, discourage crying, reward stoicism.'
	},
	{
		id: 'hidden-depression',
		label: 'Boy depression hides as anger',
		claim: 'Depression in boys often presents as irritability, hostility, or withdrawal — not sadness. Suicide rates tripled since 1950; boys are 86% of older teen suicides. Standard depression screening misses boys.',
		tier: 'core', strength: 'green', domain: 'emotion',
		sourceBooks: ['rc'],
		externalSources: [],
		dependsOn: ['emotional-suppression-learned'],
		explanation: 'Kindlon & Thompson\'s clinical evidence. Boys\' depression is systematically underdiagnosed because it doesn\'t look like girls\' depression.'
	},
	{
		id: 'harsh-discipline-backfires',
		label: 'Harsh discipline produces anger, not character',
		claim: 'Boys receive harsher discipline at every stage (family, school, justice). This produces shame, anger, and retaliation — not self-discipline or moral character.',
		tier: 'core', strength: 'green', domain: 'emotion',
		sourceBooks: ['rc'],
		externalSources: [],
		dependsOn: [],
		explanation: 'Justice Dept stats, corporal punishment research, Ontario surveys. Harsh discipline teaches boys that power = authority, weakening internal moral compass.'
	},

	// Education
	{
		id: 'education-gap-real',
		label: 'Boys\' education gap is real and growing',
		claim: 'Boys underperform girls in reading/writing in all 42 PISA countries. Male undergraduates fell from 58% (1970) to 43% (2014). The gap exists within families across race/class.',
		tier: 'core', strength: 'green', domain: 'education',
		sourceBooks: ['ba', 'pb', 'rc'],
		externalSources: [],
		dependsOn: ['boys-mature-slower'],
		explanation: 'NAEP, PISA, and enrollment data. The gap is international and within-family, ruling out purely cultural explanations.'
	},
	{
		id: 'school-mismatch',
		label: 'Schools structurally disadvantage boys',
		claim: 'Early school environment emphasizes verbal skills, sitting still, and reading readiness — all areas where boys lag 1-2 years. 60-80% of learning disabilities are diagnosed in boys. Many are developmental timing artifacts.',
		tier: 'core', strength: 'green', domain: 'education',
		sourceBooks: ['rc', 'ba', 'wgm'],
		externalSources: [],
		dependsOn: ['boys-mature-slower', 'education-gap-real'],
		explanation: 'Three books converge from different angles: developmental timing (Eliot/Kindlon), sensory mismatch (Sax), curriculum acceleration (Sax).'
	},
	{
		id: 'reading-gap-plastic',
		label: 'Reading gap is real but closable',
		claim: 'The reading/literacy gap is longstanding and international but NOT immutable. The gap is narrowing in some countries. Neural plasticity means targeted intervention works.',
		tier: 'core', strength: 'green', domain: 'education',
		sourceBooks: ['pb'],
		externalSources: [],
		dependsOn: ['school-mismatch', 'neural-plasticity'],
		explanation: 'PISA trend data shows the gap is plastic. Eliot\'s plasticity thesis predicts it\'s closable with appropriate intervention.'
	},
	{
		id: 'single-sex-no-advantage',
		label: 'Single-sex schools: no proven advantage',
		claim: 'Single-sex schooling shows no reliable academic advantage when controlling for selection effects (Eliot). The solution is better teaching, not segregation.',
		tier: 'core', strength: 'green', domain: 'education',
		sourceBooks: ['pb'],
		externalSources: [],
		dependsOn: ['school-mismatch'],
		explanation: 'Meta-analyses controlling for self-selection find no effect. This rules out a popular "quick fix."'
	},

	// Social & Peers
	{
		id: 'boys-groups-hierarchical',
		label: 'Boys form large hierarchical groups',
		claim: 'Boys form larger, more interconnected groups than girls. They self-segregate by age 3 (11:1 ratios by 6-7). Boys\' groups feature dominance hierarchies, flexible leadership, and rule-based cooperation.',
		tier: 'core', strength: 'green', domain: 'social',
		sourceBooks: ['ww', 'mf'],
		externalSources: [],
		dependsOn: [],
		explanation: 'Benenson\'s classroom network studies + Geary\'s cross-cultural data. Boys\' group structure parallels organizational/team structures.'
	},
	{
		id: 'boys-shoulder-to-shoulder',
		label: 'Boys connect through shared activity',
		claim: 'Boys\' friendships are "shoulder to shoulder" (shared activities, competition, teamwork). Girls\' are "face to face" (conversation, self-disclosure). Boys bond through DOING, not just talking.',
		tier: 'core', strength: 'green', domain: 'social',
		sourceBooks: ['wgm', 'ww'],
		externalSources: [],
		dependsOn: ['boys-groups-hierarchical'],
		explanation: 'Sax\'s clinical observation + Benenson\'s experimental studies. Implications: therapeutic and educational approaches should leverage activity-based connection.'
	},
	{
		id: 'aggression-reactive',
		label: 'Most boy aggression is defensive',
		claim: 'Most boy aggression is reactive (response to perceived threat/shame), not predatory. Aggressive boys attribute hostile intent to ambiguous situations (Dodge). Rough-and-tumble play serves developmental functions.',
		tier: 'core', strength: 'green', domain: 'social',
		sourceBooks: ['rc', 'ww', 'wgm'],
		externalSources: [],
		dependsOn: ['harsh-discipline-backfires'],
		explanation: 'Dodge\'s social information processing studies + Benenson\'s play research. Suppressing all physical play may increase real aggression.'
	},

	// Family
	{
		id: 'father-son-gulf',
		label: 'Father-son emotional gulf is damaging',
		claim: 'An emotional gulf separates most sons from fathers. Yet father involvement is the most powerful single factor for building empathy and preventing delinquency (26-year longitudinal study).',
		tier: 'core', strength: 'green', domain: 'family',
		sourceBooks: ['rc'],
		externalSources: [],
		dependsOn: [],
		explanation: 'Kindlon & Thompson cite the 26-year Harvard longitudinal study. The paradox: the most important relationship is often the most emotionally barren.'
	},
	{
		id: 'failure-to-launch',
		label: '"Failure to launch" is real and growing',
		claim: 'Men 25-54 not working rose 25% (2004-2014). Young men living at home doubled (1970-2011). This is a new phenomenon correlated with cultural shifts, not inherent male laziness.',
		tier: 'core', strength: 'green', domain: 'family',
		sourceBooks: ['ba'],
		externalSources: [],
		dependsOn: ['education-gap-real'],
		explanation: 'Bureau of Labor Statistics + census data. Sax documents the trend; structural causes debated.'
	},

	// Physical
	{
		id: 'risk-taking-biological',
		label: 'Boys are biologically more risk-prone',
		claim: 'Boys are predisposed to greater physical risk-taking across cultures and primate species. Girls show greater fear, risk-aversion, and health vigilance from birth (meta-analysis of 150 studies).',
		tier: 'core', strength: 'green', domain: 'physical',
		sourceBooks: ['wgm', 'ww', 'mf'],
		externalSources: [],
		dependsOn: ['prenatal-t-biases'],
		explanation: 'Byrnes et al. (1999) 150-study meta-analysis. Cross-species evidence from primates. The difference has biological roots but magnitude is shaped by parenting.'
	},
	{
		id: 'play-fighting-functional',
		label: 'Rough-and-tumble play is functional',
		claim: 'Play fighting appears by 6-9 months, is cross-cultural, and serves developmental purposes: social skill building, hierarchy negotiation, emotional regulation. Suppressing it may increase real aggression.',
		tier: 'core', strength: 'green', domain: 'physical',
		sourceBooks: ['ww', 'wgm'],
		externalSources: [],
		dependsOn: ['risk-taking-biological'],
		explanation: 'Benenson infant studies + cross-cultural observations. Boys who engage in rough play learn to regulate arousal and read social cues.'
	},

	// Society
	{
		id: 'boys-problems-real',
		label: 'Boys\' problems are statistically undeniable',
		claim: 'Boys have 3x suicide rate, more school dropout, 75% of traffic deaths, more violence as both perpetrators AND victims. This pattern is global and consistent across data sources.',
		tier: 'core', strength: 'green', domain: 'society',
		sourceBooks: ['jvh', 'ba', 'rc'],
		externalSources: [],
		dependsOn: [],
		explanation: 'Destatis, WHO, BKA, KiGGS. No scientific disagreement on the observation; only the causes are debated.'
	},
	{
		id: 'radicalization-real',
		label: 'Online radicalization targets boys',
		claim: 'Young men are disproportionately drawn into online radicalization (manosphere, incels, far-right). Algorithm-driven pipelines exploit boys\' need for identity and belonging.',
		tier: 'core', strength: 'green', domain: 'society',
		sourceBooks: ['jvh'],
		externalSources: [],
		dependsOn: ['boys-problems-real'],
		explanation: 'DCU TikTok study (Regehr 2024), BKA data. The pipeline exploits unmet needs for purpose and community.'
	},

	// ── Boy Friendships ──────────────────────────────────
	{
		id: 'friendship-crisis-real',
		label: 'Boy Friendships Die in Adolescence',
		claim: 'Boys describe deep, intimate friendships at 13-14 that systematically erode by 17 due to masculine norm pressure. Male friendship recession: 15% of men report zero close friends, up from 3% in 1990.',
		tier: 'core', strength: 'green', domain: 'social',
		sourceBooks: ['jvh', 'rc'],
		externalSources: [
			{ label: 'Way (2011) — Deep Secrets: Boys\' Friendships' },
		],
		dependsOn: ['boys-born-emotional', 'emotional-suppression-learned'],
		explanation: 'Way\'s longitudinal qualitative research with large samples, confirmed by multiple representative surveys showing male friendship decline.',
	},

	// ── Care Gap ─────────────────────────────────────────
	{
		id: 'care-gap-children',
		label: 'Gender Care Gap Starts in Childhood',
		claim: 'The gender care gap among children (10-17) stands at ~41.5% and has barely changed since 2012. Boys do less housework than a decade ago.',
		tier: 'core', strength: 'green', domain: 'society',
		sourceBooks: ['jvh'],
		externalSources: [
			{ label: 'Destatis — Zeitverwendungsstudie (2022)' },
		],
		dependsOn: ['emotional-suppression-learned'],
		explanation: 'Official German government time-use survey (Destatis 2022), representative sample, consistent pattern across multiple waves.',
	},

	// ── Political Gender Gap ─────────────────────────────
	{
		id: 'political-gender-gap',
		label: 'Young Men Shifting Right Politically',
		claim: 'Young women are becoming more progressive while young men shift right across democracies — a growing political gender gap visible in electoral data from Europe, US, and Asia.',
		tier: 'core', strength: 'green', domain: 'society',
		sourceBooks: ['jvh'],
		externalSources: [],
		dependsOn: ['radicalization-real', 'failure-to-launch'],
		explanation: 'Cross-national electoral data analysis (Financial Times, European election data) showing consistent pattern across OECD countries.',
	},

	// ══════════════════════════════════════════════════════
	// TIER: DERIVED — Suggestions from green evidence
	// ══════════════════════════════════════════════════════

	{
		id: 'delay-academics',
		label: 'Delay formal academics or adapt timing',
		claim: 'Since boys lag 1-2 years in verbal/reading readiness, either delay formal literacy instruction or use developmental benchmarks instead of age-based cutoffs. Redshirting or flexible entry benefits boys most.',
		tier: 'derived', strength: 'yellow', domain: 'education',
		sourceBooks: ['pb', 'rc', 'ba'],
		externalSources: [
			{ label: 'Dee & Sievertsen (2018) — school starting age effects', url: 'https://doi.org/10.1093/qje/qjx043' }
		],
		dependsOn: ['boys-mature-slower', 'school-mismatch'],
		explanation: 'Directly derived from the convergent evidence on developmental timing. If boys aren\'t ready for reading at 5, forcing it creates failure identity.'
	},
	{
		id: 'activity-based-learning',
		label: 'Use movement and hands-on learning',
		claim: 'Boys learn better through activity, manipulation, and spatial engagement than through passive listening and worksheet completion. Classroom design should include movement breaks, standing desks, and hands-on projects.',
		tier: 'derived', strength: 'yellow', domain: 'education',
		sourceBooks: ['wgm', 'ww', 'rc'],
		externalSources: [
			{ label: 'Pellegrini & Bohn (2005) — recess and attention' },
			{ label: 'Donnelly et al. (2016) — physical activity and cognition meta-analysis' }
		],
		dependsOn: ['school-mismatch', 'play-fighting-functional', 'risk-taking-biological'],
		explanation: 'If boys\' brains are wired for spatial/kinesthetic processing and they lag in verbal tasks, meet them where they are.'
	},
	{
		id: 'teach-emotional-vocabulary',
		label: 'Actively teach boys emotional vocabulary',
		claim: 'Since emotional suppression is learned (not innate), it can be unlearned. Parents and teachers should name emotions with boys from infancy, model emotional expression, and create safe spaces for boys to process feelings.',
		tier: 'derived', strength: 'yellow', domain: 'emotion',
		sourceBooks: ['pb', 'rc'],
		externalSources: [
			{ label: 'Gottman et al. (1996) — "emotion coaching" parenting' },
			{ label: 'Brackett (2019) — RULER emotion literacy program' }
		],
		dependsOn: ['boys-born-emotional', 'emotional-suppression-learned'],
		explanation: 'If boys start MORE emotional and learn to suppress, the intervention point is early: give them words before the culture takes them away.'
	},
	{
		id: 'screen-depression-differently',
		label: 'Screen boys for depression via behavior',
		claim: 'Standard depression questionnaires miss boys because they ask about sadness, not anger/withdrawal. Schools and pediatricians should screen for irritability, risk-taking escalation, and social withdrawal as depression markers in boys.',
		tier: 'derived', strength: 'yellow', domain: 'emotion',
		sourceBooks: ['rc'],
		externalSources: [
			{ label: 'Pollack (1998) — male-specific depression presentation' },
			{ label: 'Rice et al. (2013) — male depression scale' }
		],
		dependsOn: ['hidden-depression'],
		explanation: 'Direct clinical implication: if boy depression looks different, screening must look different.'
	},
	{
		id: 'discipline-through-connection',
		label: 'Discipline through relationship, not punishment',
		claim: 'Since harsh discipline produces anger and weak conscience in boys, effective discipline must come through connection: clear expectations + warm relationship + natural consequences. Authoritative (not authoritarian) parenting.',
		tier: 'derived', strength: 'yellow', domain: 'family',
		sourceBooks: ['rc'],
		externalSources: [
			{ label: 'Baumrind (1991) — authoritative parenting outcomes' },
			{ label: 'Siegel & Bryson (2014) — "No-Drama Discipline"' }
		],
		dependsOn: ['harsh-discipline-backfires', 'father-son-gulf'],
		explanation: 'If punishment breeds resentment and fathers are emotionally distant, the fix is warmth + structure together.'
	},
	{
		id: 'leverage-group-dynamics',
		label: 'Leverage boys\' natural group structure',
		claim: 'Boys thrive in structured teams with clear roles, rules, and hierarchies. Use this in education and therapy: team-based learning, mentoring circles, sports teams, collaborative projects with rotating leadership.',
		tier: 'derived', strength: 'yellow', domain: 'social',
		sourceBooks: ['ww', 'mf'],
		externalSources: [
			{ label: 'Slavin (1995) — cooperative learning meta-analysis' }
		],
		dependsOn: ['boys-groups-hierarchical', 'boys-shoulder-to-shoulder'],
		explanation: 'If boys naturally form hierarchical teams, design learning environments that channel this into productive collaboration.'
	},
	{
		id: 'allow-managed-risk',
		label: 'Allow managed risk-taking, don\'t eliminate it',
		claim: 'Since risk-taking is biologically based and play-fighting is functional, the goal is not to eliminate risk but to manage it. Provide climbing, rough play, outdoor exploration, and age-appropriate physical challenges.',
		tier: 'derived', strength: 'yellow', domain: 'physical',
		sourceBooks: ['wgm', 'ww'],
		externalSources: [
			{ label: 'Sandseter & Kennair (2011) — risky play and anti-phobic effects' },
			{ label: 'Gray (2011) — decline of play and rise of psychopathology' }
		],
		dependsOn: ['risk-taking-biological', 'play-fighting-functional'],
		explanation: 'Eliminating all risk creates anxious, incompetent boys. The evidence says controlled risk builds competence and emotional regulation.'
	},
	{
		id: 'fathers-must-engage-emotionally',
		label: 'Fathers must close the emotional gulf',
		claim: 'Given that father involvement is the strongest predictor of empathy and the father-son gulf is the biggest emotional gap, fathers must actively practice emotional engagement: sharing feelings, physical affection, quality time.',
		tier: 'derived', strength: 'yellow', domain: 'family',
		sourceBooks: ['rc'],
		externalSources: [
			{ label: 'Lamb (2010) — The Role of the Father in Child Development' },
			{ label: 'Pleck (2010) — paternal involvement meta-analysis' }
		],
		dependsOn: ['father-son-gulf', 'emotional-suppression-learned'],
		explanation: 'The 26-year longitudinal study shows father warmth predicts empathy. This is the single highest-leverage intervention point.'
	},
	{
		id: 'counter-radicalization-belonging',
		label: 'Provide belonging before algorithms do',
		claim: 'Boys seek identity, hierarchy, and purpose. If families, schools, and communities don\'t provide these, algorithms will — via manosphere, incels, and extremism. Proactive belonging > reactive deradicalization.',
		tier: 'derived', strength: 'yellow', domain: 'society',
		sourceBooks: ['jvh', 'ba'],
		externalSources: [
			{ label: 'Haidt & Twenge (2023) — social media and teen mental health' },
			{ label: 'Marantz (2019) — online radicalization pathways' }
		],
		dependsOn: ['radicalization-real', 'boys-groups-hierarchical', 'failure-to-launch'],
		explanation: 'If boys need hierarchy and purpose (Benenson, Geary) and algorithms exploit this (Regehr), the preventive move is to fill those needs first.'
	},

	// ── Consent Education ────────────────────────────────
	{
		id: 'consent-education-early',
		label: 'Consent Education Before Smartphone Age',
		claim: 'Consent education must begin before boys get smartphones, since first porn exposure is typically 12-15 and often involuntary. Framework: active, ongoing, shame-free conversations.',
		tier: 'derived', strength: 'yellow', domain: 'society',
		sourceBooks: ['jvh'],
		externalSources: [
			{ label: 'BZgA — Jugendsexualität Survey' },
		],
		dependsOn: ['radicalization-real', 'boys-problems-real'],
		explanation: 'Derived from early porn exposure data (BZgA) and algorithm amplification research (DCU). The "three green traffic lights" model provides a practical framework.',
	},

	// ── Housework Socialization ──────────────────────────
	{
		id: 'housework-from-toddlerhood',
		label: 'Housework Socialization From Toddlerhood',
		claim: 'Start care labor education in toddlerhood (play kitchens, child tools). Specifically encourage sons toward traditionally "female" tasks. Create family cleaning schedules with negotiated standards.',
		tier: 'derived', strength: 'yellow', domain: 'society',
		sourceBooks: ['jvh'],
		externalSources: [],
		dependsOn: ['care-gap-children'],
		explanation: 'Derived from care gap data (Destatis) and relationship research (Harvard 80-year study). Care work activates brain reward centers and extends lifespan.',
	},

	// ── Conflict & Intent Attribution ────────────────────
	{
		id: 'cultural-conflict-training',
		label: 'Intent Attribution Shapes Aggression',
		claim: 'Parents who assume hostile intent in children produce more aggressive children (German vs. Japanese parenting comparison). Teaching boys to argue well requires assuming ignorance, not malice.',
		tier: 'derived', strength: 'yellow', domain: 'family',
		sourceBooks: ['jvh'],
		externalSources: [
			{ label: 'Trommsdorff & Kornadt — Cross-cultural Parenting' },
		],
		dependsOn: ['harsh-discipline-backfires', 'aggression-reactive'],
		explanation: 'Derived from Trommsdorff & Kornadt cross-cultural parenting research and aggression literature.',
	},

	// ══════════════════════════════════════════════════════
	// TIER: GAP — Missing research, well-established elsewhere
	// ══════════════════════════════════════════════════════

	{
		id: 'executive-function-scaffolding',
		label: 'Scaffold executive function development',
		claim: 'Boys\' later prefrontal cortex maturation requires explicit scaffolding of executive functions: working memory games, planning practice, impulse control strategies. These are trainable skills, not fixed traits.',
		tier: 'gap', strength: 'new', domain: 'education',
		sourceBooks: [],
		externalSources: [
			{ label: 'Diamond (2012) — executive function interventions meta-analysis' },
			{ label: 'Blair & Razza (2007) — EF and school readiness' },
			{ label: 'Zelazo & Carlson (2012) — developmental cascade models' }
		],
		dependsOn: ['boys-mature-slower', 'neural-plasticity', 'school-mismatch'],
		explanation: 'None of the 8 books addresses HOW to train executive function in boys, despite all acknowledging the deficit. Diamond\'s research shows it\'s highly trainable.'
	},
	{
		id: 'secure-attachment-foundation',
		label: 'Secure attachment is the foundation',
		claim: 'Secure attachment to at least one caregiver is the single strongest predictor of resilience, emotional regulation, and social competence in boys. Insecure attachment amplifies every risk factor.',
		tier: 'gap', strength: 'new', domain: 'family',
		sourceBooks: [],
		externalSources: [
			{ label: 'Bowlby (1969/1982) — attachment theory' },
			{ label: 'Sroufe et al. (2005) — Minnesota longitudinal study' },
			{ label: 'Groh et al. (2017) — attachment and development meta-analysis' }
		],
		dependsOn: ['father-son-gulf', 'boys-born-emotional'],
		explanation: 'The 8 books discuss fathers, mentors, and emotional bonds but never name attachment theory explicitly. It\'s the foundational framework that connects all the pieces.'
	},
	{
		id: 'physical-activity-regulates-emotion',
		label: 'Physical activity regulates boys\' emotions',
		claim: 'Regular vigorous physical activity reduces anxiety, depression, and aggression in boys more than in girls. Exercise is a front-line intervention for emotional and behavioral problems, not just a health recommendation.',
		tier: 'gap', strength: 'new', domain: 'physical',
		sourceBooks: [],
		externalSources: [
			{ label: 'Bidzan-Bluma & Lipowska (2018) — physical activity and executive function' },
			{ label: 'Eggert et al. (2015) — team sports and depression prevention' },
			{ label: 'Hillman et al. (2008) — fitness and brain function in children' }
		],
		dependsOn: ['play-fighting-functional', 'hidden-depression', 'boys-mature-slower'],
		explanation: 'If boys are more physical AND more prone to hidden depression AND have later-maturing self-regulation, exercise addresses all three simultaneously.'
	},
	{
		id: 'narrative-identity-purpose',
		label: 'Boys need narratives of positive male contribution',
		claim: 'Boys construct identity through narratives of competence, contribution, and purpose. Without positive models, they adopt toxic narratives (manosphere) or drift (failure to launch). Mentorship and story-based education fill this gap.',
		tier: 'gap', strength: 'new', domain: 'identity',
		sourceBooks: [],
		externalSources: [
			{ label: 'McAdams (2001) — narrative identity theory' },
			{ label: 'Arnett (2014) — emerging adulthood' },
			{ label: 'Kidd et al. (2018) — mentorship outcomes for at-risk boys' }
		],
		dependsOn: ['failure-to-launch', 'radicalization-real', 'boys-groups-hierarchical'],
		explanation: 'The books diagnose failure to launch and radicalization but don\'t offer a framework for positive male identity construction. McAdams\' narrative identity theory fills this gap.'
	},
	{
		id: 'emotional-literacy-not-vulnerability',
		label: 'Emotional literacy ≠ forced vulnerability',
		claim: 'Teaching boys emotional intelligence should not mean forcing vulnerability or feminizing emotional expression. Boys can learn to name, understand, and act on emotions through action-oriented frameworks (journaling after sports, debriefing after conflict, mentoring conversations during activities).',
		tier: 'gap', strength: 'new', domain: 'emotion',
		sourceBooks: [],
		externalSources: [
			{ label: 'Brackett (2019) — RULER approach' },
			{ label: 'Rosenberg (2015) — Nonviolent Communication' },
			{ label: 'Way (2011) — "Deep Secrets" on boys\' friendships' }
		],
		dependsOn: ['emotional-suppression-learned', 'boys-shoulder-to-shoulder', 'teach-emotional-vocabulary'],
		explanation: 'A critical missing piece: most books say "boys need to express emotions" but don\'t address the HOW in ways that respect boys\' action-oriented processing style.'
	},
	{
		id: 'peer-status-without-cruelty',
		label: 'Navigate status hierarchies without cruelty',
		claim: 'Boys naturally seek status in groups. The goal is not to eliminate hierarchy but to redirect it: status through competence, contribution, and mentorship rather than through domination, exclusion, or cruelty.',
		tier: 'gap', strength: 'new', domain: 'social',
		sourceBooks: [],
		externalSources: [
			{ label: 'Hawley (2014) — prosocial and coercive strategies in peer status' },
			{ label: 'Faris & Felmlee (2011) — status and aggression in schools' },
			{ label: 'Yeager et al. (2015) — anti-bullying intervention effectiveness' }
		],
		dependsOn: ['boys-groups-hierarchical', 'aggression-reactive'],
		explanation: 'Benenson shows boys form hierarchies; Kindlon shows these become cruel. Missing: how to keep the structure while changing the norms within it.'
	},
	{
		id: 'neurodiversity-not-pathology',
		label: 'Neurodiversity is common in boys, not pathology',
		claim: 'ADHD (2-9x more diagnosed in boys), dyslexia, autism spectrum, and high activity levels are part of normal male neurodiversity. Educational environments should accommodate variation instead of pathologizing it.',
		tier: 'gap', strength: 'new', domain: 'education',
		sourceBooks: [],
		externalSources: [
			{ label: 'Barkley (2015) — ADHD and self-regulation' },
			{ label: 'Baron-Cohen (2009) — empathizing-systemizing theory' },
			{ label: 'Universal Design for Learning (CAST) framework' }
		],
		dependsOn: ['school-mismatch', 'boys-mature-slower'],
		explanation: 'Several books mention ADHD overdiagnosis but none offers a framework for neurodiversity-affirming education. UDL provides this.'
	},
	{
		id: 'media-literacy-inoculation',
		label: 'Media literacy as inoculation against radicalization',
		claim: 'Boys need explicit training in recognizing algorithmic manipulation, evaluating claims, and understanding how social media exploits their need for status and belonging. This is preventive, not reactive.',
		tier: 'gap', strength: 'new', domain: 'society',
		sourceBooks: [],
		externalSources: [
			{ label: 'Roozenbeek & van der Linden (2019) — inoculation theory and misinformation' },
			{ label: 'Haidt (2024) — "The Anxious Generation"' },
			{ label: 'Livingstone & Helsper (2010) — digital literacy frameworks' }
		],
		dependsOn: ['radicalization-real', 'counter-radicalization-belonging'],
		explanation: 'The radicalization pipeline is well-documented but none of the 8 books provides a concrete educational framework for media literacy as prevention.'
	},
	{
		id: 'cross-cultural-adaptation',
		label: 'Adapt approaches to cultural context',
		claim: 'No single parenting approach works for all boys. Authoritative parenting is most effective across studies, but its expression varies by culture. Economic context, family structure, and community resources shape what\'s possible.',
		tier: 'gap', strength: 'new', domain: 'society',
		sourceBooks: [],
		externalSources: [
			{ label: 'Baumrind (1991) — parenting styles and outcomes' },
			{ label: 'García Coll et al. (1996) — cultural context of child development' },
			{ label: 'Chetty et al. (2018) — intergenerational mobility by race and gender' }
		],
		dependsOn: ['boys-problems-real'],
		explanation: 'All 8 books are written from Western, middle-class perspectives. The immigrant paradox (Sax) hints at cultural variation but none addresses it systematically.'
	},

	// ── Care Professions ─────────────────────────────────
	{
		id: 'care-profession-pathways',
		label: 'Pathways Into Care Professions for Boys',
		claim: '65% of youth are interested in social professions but male share is only ~20%. Fathers discourage care careers more than mothers. Structural barriers (stigma, pay) compound socialization effects.',
		tier: 'gap', strength: 'new', domain: 'identity',
		sourceBooks: ['jvh'],
		externalSources: [
			{ label: 'BMFSFJ — Men in Care (2024)' },
		],
		dependsOn: ['narrative-identity-purpose', 'failure-to-launch'],
		explanation: 'BMFSFJ Men in Care study (2024) provides the data. No book in the set except Dittmann addresses this. Connects to narrative identity and purpose.',
	},

	// ══════════════════════════════════════════════════════
	// NEW SOURCE NODES — Claims from external research literature
	// These form their own causal chains (Kausalketten)
	// ══════════════════════════════════════════════════════

	// ── Attachment chain ──────────────────────────────────
	{
		id: 'ext-attachment-theory',
		label: 'Secure attachment predicts all outcomes',
		claim: 'Secure attachment to at least one caregiver is the single strongest predictor of resilience, emotional regulation, and social competence. Meta-analysis of 100+ studies (Groh et al. 2017) shows attachment security at 12 months predicts social competence, behavioral problems, and emotional health across childhood.',
		tier: 'core', strength: 'green', domain: 'family',
		sourceBooks: [],
		externalSources: [
			{ label: 'Bowlby (1969/1982) — Attachment Theory' },
			{ label: 'Sroufe et al. (2005) — Minnesota 30-year longitudinal study' },
			{ label: 'Groh et al. (2017) — Attachment and development meta-analysis' },
		],
		dependsOn: [],
		explanation: 'The foundational framework that connects emotional development, parenting, and social outcomes. None of the 8 books names attachment theory explicitly, yet it undergirds all their claims about father involvement, emotional bonds, and resilience.',
		isNewSource: true,
	},
	{
		id: 'ext-attachment-exploration',
		label: 'Secure base enables exploration and learning',
		claim: 'Children with secure attachment explore more freely, take more cognitive risks, and learn more effectively. The "secure base" phenomenon: safety enables adventure. Insecurely attached boys are more likely to avoid challenges or react aggressively to failure.',
		tier: 'core', strength: 'green', domain: 'family',
		sourceBooks: [],
		externalSources: [
			{ label: 'Bowlby (1969/1982) — Secure base concept' },
			{ label: 'Ainsworth et al. (1978) — Strange Situation studies' },
		],
		dependsOn: ['ext-attachment-theory'],
		explanation: 'The mechanism: attachment doesn\'t just make children feel good — it makes them braver learners. Connects attachment to education and risk-taking.',
		isNewSource: true,
	},

	// ── Executive function chain ──────────────────────────
	{
		id: 'ext-ef-trainable',
		label: 'Executive functions are highly trainable',
		claim: 'Meta-analysis shows EF training (working memory, inhibitory control, cognitive flexibility) produces reliable improvements in children, with transfer to academic performance. Programs like Tools of the Mind show 0.5–1.0 SD improvements.',
		tier: 'core', strength: 'green', domain: 'education',
		sourceBooks: [],
		externalSources: [
			{ label: 'Diamond (2012) — EF interventions meta-analysis' },
			{ label: 'Diamond & Lee (2011) — Programs that improve EF' },
		],
		dependsOn: ['neural-plasticity'],
		explanation: 'If boys\' EF matures later (from the 8 books) AND EF is trainable (Diamond), the intervention point is clear. None of the 8 books connects these two findings.',
		isNewSource: true,
	},
	{
		id: 'ext-ef-predicts-school',
		label: 'EF predicts school success better than IQ',
		claim: 'Executive function at age 5 is a stronger predictor of school readiness and academic achievement than IQ, SES, or prior knowledge. EF explains much of the gender gap in early school performance.',
		tier: 'core', strength: 'green', domain: 'education',
		sourceBooks: [],
		externalSources: [
			{ label: 'Blair & Razza (2007) — EF and school readiness' },
			{ label: 'Zelazo & Carlson (2012) — EF developmental cascades' },
		],
		dependsOn: ['ext-ef-trainable', 'boys-mature-slower'],
		explanation: 'Connects the maturation gap (books) to the education gap (books) through a trainable mechanism (external research). The missing puzzle piece.',
		isNewSource: true,
	},

	// ── Parenting chain ──────────────────────────────────
	{
		id: 'ext-authoritative-parenting',
		label: 'Authoritative parenting is universally superior',
		claim: 'Five decades of research across cultures show authoritative parenting (high warmth + high structure) produces the best outcomes. Authoritarian (harsh) and permissive (lax) both produce worse results. Effect sizes are large (d > 0.5).',
		tier: 'core', strength: 'green', domain: 'family',
		sourceBooks: [],
		externalSources: [
			{ label: 'Baumrind (1991) — Parenting styles framework' },
			{ label: 'Steinberg et al. (1994) — Cross-ethnic replication' },
		],
		dependsOn: [],
		explanation: 'Baumrind\'s parenting styles framework is the most replicated finding in developmental psychology. Provides the theoretical backing for what Kindlon/Thompson observe clinically.',
		isNewSource: true,
	},
	{
		id: 'ext-emotion-coaching',
		label: 'Emotion coaching produces emotionally competent children',
		claim: 'Gottman\'s longitudinal research shows parents who notice, validate, label emotions, and help problem-solve produce children with better emotional regulation, health, academics, and peer relationships. Effect is stronger for boys.',
		tier: 'core', strength: 'green', domain: 'emotion',
		sourceBooks: [],
		externalSources: [
			{ label: 'Gottman et al. (1996) — Emotion coaching longitudinal study' },
			{ label: 'Brackett (2019) — RULER emotion literacy program' },
		],
		dependsOn: ['ext-authoritative-parenting', 'ext-attachment-theory'],
		explanation: 'The HOW of emotional development. While the 8 books say "boys need emotional literacy," Gottman provides the validated method.',
		isNewSource: true,
	},

	// ── Physical activity chain ──────────────────────────
	{
		id: 'ext-activity-brain',
		label: 'Physical activity directly improves brain function',
		claim: 'Children who are physically fit show larger hippocampal volumes, better attentional control, and superior academic performance. Meta-analysis of 59 studies shows moderate-to-large effects (d = 0.32–0.57) of physical activity on cognition.',
		tier: 'core', strength: 'green', domain: 'physical',
		sourceBooks: [],
		externalSources: [
			{ label: 'Hillman et al. (2008) — Fitness and brain function in children' },
			{ label: 'Donnelly et al. (2016) — Physical activity and cognition meta-analysis' },
		],
		dependsOn: [],
		explanation: 'Not just "exercise is healthy" — physical activity literally builds the brain structures boys need for self-regulation and learning.',
		isNewSource: true,
	},
	{
		id: 'ext-team-sports-depression',
		label: 'Team sports specifically prevent depression',
		claim: 'Participation in team sports (not solo exercise) significantly reduces depression risk in adolescent boys. The combination of physical activity + social belonging + structured hierarchy makes team sports uniquely protective.',
		tier: 'derived', strength: 'yellow', domain: 'physical',
		sourceBooks: [],
		externalSources: [
			{ label: 'Eggert et al. (2015) — Team sports and depression prevention' },
			{ label: 'Bidzan-Bluma & Lipowska (2018) — Physical activity and EF' },
		],
		dependsOn: ['ext-activity-brain', 'boys-groups-hierarchical'],
		explanation: 'Connects the physical (exercise improves brain) with the social (boys thrive in teams) to explain why team sports are uniquely therapeutic for boys.',
		isNewSource: true,
	},

	// ── Play chain ──────────────────────────────────────
	{
		id: 'ext-play-decline',
		label: 'Decline of play correlates with psychopathology rise',
		claim: 'Over the past 60 years, children\'s free play has declined dramatically. Over the same period, child/adolescent anxiety, depression, and suicide have risen steadily. The causal mechanism (play builds coping skills) is plausible and supported.',
		tier: 'core', strength: 'green', domain: 'physical',
		sourceBooks: [],
		externalSources: [
			{ label: 'Gray (2011) — The decline of play and rise of psychopathology' },
			{ label: 'Gray (2013) — Free to Learn' },
		],
		dependsOn: [],
		explanation: 'A macro-level finding that frames individual observations about boys\' play needs. When play disappears, boys lose their primary developmental laboratory.',
		isNewSource: true,
	},
	{
		id: 'ext-risky-play-courage',
		label: 'Risky play builds courage (anti-phobic effect)',
		claim: 'Children who engage in age-appropriate risky play (heights, speed, rough-and-tumble, exploring alone) develop lower anxiety and fewer phobias. The evolutionary function of thrilling play is to inoculate against fear.',
		tier: 'core', strength: 'green', domain: 'physical',
		sourceBooks: [],
		externalSources: [
			{ label: 'Sandseter & Kennair (2011) — Risky play and anti-phobic effects' },
		],
		dependsOn: ['ext-play-decline', 'risk-taking-biological'],
		explanation: 'The mechanism: play fighting and risky play serve the same function as exposure therapy — graduated doses of fear build mastery and reduce anxiety.',
		isNewSource: true,
	},

	// ── Social chain ────────────────────────────────────
	{
		id: 'ext-boys-lose-friendships',
		label: 'Boys\' deep friendships are lost to culture',
		claim: 'Way\'s longitudinal interviews reveal boys in early adolescence form deep, emotionally intimate friendships — then lose them by late adolescence under cultural pressure. Boys describe this loss with grief. The stoicism is acquired, not desired.',
		tier: 'core', strength: 'green', domain: 'social',
		sourceBooks: ['jvh'],
		externalSources: [
			{ label: 'Way (2011) — Deep Secrets: Boys\' Friendships' },
		],
		dependsOn: ['boys-shoulder-to-shoulder', 'emotional-suppression-learned'],
		explanation: 'Way\'s qualitative data fills a gap the 8 books don\'t address: boys WANT deep friendships and grieve their loss. This is not biological — it\'s cultural destruction of a natural capacity.',
		isNewSource: true,
	},
	{
		id: 'ext-prosocial-status',
		label: 'Prosocial strategies achieve high peer status',
		claim: 'Hawley\'s research shows highest-status children use prosocial strategies (resource sharing, alliance building) more than coercive ones. Purely prosocial children outrank purely coercive ones. Status through competence and generosity is possible.',
		tier: 'derived', strength: 'yellow', domain: 'social',
		sourceBooks: [],
		externalSources: [
			{ label: 'Hawley (2014) — Prosocial and coercive status strategies' },
			{ label: 'Faris & Felmlee (2011) — Status and aggression in schools' },
		],
		dependsOn: ['boys-groups-hierarchical', 'aggression-reactive'],
		explanation: 'Challenges the assumption that status requires domination. Shows boys CAN achieve high rank through competence and generosity — but need explicit coaching.',
		isNewSource: true,
	},

	// ── Identity chain ──────────────────────────────────
	{
		id: 'ext-narrative-identity',
		label: 'Boys build identity through stories of competence',
		claim: 'McAdams\' narrative identity theory shows adolescents construct their sense of self through stories of agency, competence, and contribution. Boys who lack positive narratives adopt available ones — manosphere, gang identity, or nihilism.',
		tier: 'derived', strength: 'yellow', domain: 'identity',
		sourceBooks: [],
		externalSources: [
			{ label: 'McAdams (2001) — Narrative identity theory' },
			{ label: 'Arnett (2014) — Emerging adulthood' },
		],
		dependsOn: ['failure-to-launch'],
		explanation: 'The theoretical framework for why purpose and meaning matter. Without it, the "failure to launch" phenomenon has no solution.',
		isNewSource: true,
	},
	{
		id: 'ext-mentorship-outcomes',
		label: 'Structured mentorship transforms at-risk boys',
		claim: 'Meta-analyses show structured mentoring programs reduce delinquency, improve academic outcomes, and build positive identity in at-risk boys. Key ingredients: consistent relationship, shared activity, and narrative scaffolding.',
		tier: 'derived', strength: 'yellow', domain: 'identity',
		sourceBooks: [],
		externalSources: [
			{ label: 'Kidd et al. (2018) — Mentorship outcomes for at-risk boys' },
			{ label: 'DuBois et al. (2011) — Mentoring meta-analysis' },
		],
		dependsOn: ['ext-narrative-identity', 'father-son-gulf'],
		explanation: 'When fathers are emotionally absent and boys need narrative identity, structured mentorship fills both gaps.',
		isNewSource: true,
	},

	// ── Media/society chain ─────────────────────────────
	{
		id: 'ext-social-media-harm',
		label: 'Social media causally harms teen mental health',
		claim: 'Converging evidence from experiments, natural experiments, and longitudinal studies shows social media use causally increases anxiety, depression, and loneliness in adolescents. Boys are harmed through social comparison, algorithmic radicalization, and displacement of real-world activity.',
		tier: 'core', strength: 'green', domain: 'society',
		sourceBooks: [],
		externalSources: [
			{ label: 'Haidt & Twenge (2023) — Social media and teen mental health' },
			{ label: 'Haidt (2024) — The Anxious Generation' },
		],
		dependsOn: ['boys-problems-real'],
		explanation: 'Moves beyond correlation to causal evidence. Establishes that reducing screen time is not just prudential but medically indicated.',
		isNewSource: true,
	},
	{
		id: 'ext-inoculation-effective',
		label: 'Inoculation training prevents radicalization',
		claim: 'Psychological inoculation — exposing people to weakened forms of misinformation with refutation — produces lasting resistance to manipulation. RCTs show 20–30% improvement in detecting misinformation. Scalable via games and curricula.',
		tier: 'derived', strength: 'yellow', domain: 'society',
		sourceBooks: [],
		externalSources: [
			{ label: 'Roozenbeek & van der Linden (2019) — Inoculation theory' },
			{ label: 'Livingstone & Helsper (2010) — Digital literacy frameworks' },
		],
		dependsOn: ['ext-social-media-harm', 'radicalization-real'],
		explanation: 'The actionable solution to the radicalization pipeline. Instead of banning screens (impractical), inoculate boys against manipulation (effective and scalable).',
		isNewSource: true,
	},

	// ── Clinical chain ──────────────────────────────────
	{
		id: 'ext-male-depression-scale',
		label: 'Male-specific depression scales double detection',
		claim: 'Rice et al.\'s Male Depression Risk Scale measures externalizing symptoms (anger, aggression, risk-taking, substance use) that standard instruments miss. Using it doubles detection rates in young men.',
		tier: 'derived', strength: 'yellow', domain: 'emotion',
		sourceBooks: [],
		externalSources: [
			{ label: 'Rice et al. (2013) — Male Depression Risk Scale' },
			{ label: 'Pollack (1998) — Real Boys' },
		],
		dependsOn: ['hidden-depression'],
		explanation: 'The clinical tool that the 8 books\' observation demands. If boy depression looks different (Kindlon), screening must look different (Rice).',
		isNewSource: true,
	},

	// ── Education chain ─────────────────────────────────
	{
		id: 'ext-school-age-effect',
		label: 'Later school entry improves long-term outcomes',
		claim: 'Dee & Sievertsen\'s quasi-experimental study (QJE) shows children who start school one year later have significantly better self-regulation at age 7 and 11. The effect is larger for boys. Starting early creates artificial disability.',
		tier: 'core', strength: 'green', domain: 'education',
		sourceBooks: [],
		externalSources: [
			{ label: 'Dee & Sievertsen (2018) — School starting age effects (QJE)' },
		],
		dependsOn: ['boys-mature-slower'],
		explanation: 'The strongest causal evidence for what the 8 books suggest: boys aren\'t ready at 5. A policy-level finding with clear action implications.',
		isNewSource: true,
	},
	{
		id: 'ext-recess-restores-attention',
		label: 'Recess restores attention, especially in boys',
		claim: 'Pellegrini\'s classroom studies show recess breaks restore attentional capacity, with stronger effects for younger children and boys. Cutting recess to increase instruction time is counterproductive.',
		tier: 'derived', strength: 'yellow', domain: 'education',
		sourceBooks: [],
		externalSources: [
			{ label: 'Pellegrini & Bohn (2005) — Recess and attention' },
		],
		dependsOn: ['ext-school-age-effect', 'school-mismatch'],
		explanation: 'If schools disadvantage boys by requiring sustained sitting (books) and breaks restore attention (Pellegrini), the intervention is obvious and cost-free.',
		isNewSource: true,
	},
];

// ══════════════════════════════════════════════════════
// SOURCE REGISTRY — All sources (books + external research)
// ══════════════════════════════════════════════════════

export interface SourceInfo {
	id: string;
	label: string;
	type: 'book' | 'external';
}

export const allSources: SourceInfo[] = [
	// Books
	{ id: 'pb', label: 'Pink Brain Blue Brain (Eliot)', type: 'book' },
	{ id: 'mf', label: 'Male/Female (Geary)', type: 'book' },
	{ id: 'wgm', label: 'Why Gender Matters (Sax)', type: 'book' },
	{ id: 'ba', label: 'Boys Adrift (Sax)', type: 'book' },
	{ id: 'rc', label: 'Raising Cain (Kindlon & Thompson)', type: 'book' },
	{ id: 'ww', label: 'Warriors & Worriers (Benenson)', type: 'book' },
	{ id: 'jvh', label: 'Jungs von heute (Dittmann)', type: 'book' },
	{ id: 'wb', label: 'Wonder of Boys (Gurian)', type: 'book' },
	// External research
	{ id: 'bowlby', label: 'Bowlby — Attachment Theory', type: 'external' },
	{ id: 'sroufe', label: 'Sroufe — Minnesota 30-yr Study', type: 'external' },
	{ id: 'groh', label: 'Groh — Attachment Meta-analysis', type: 'external' },
	{ id: 'ainsworth', label: 'Ainsworth — Strange Situation', type: 'external' },
	{ id: 'diamond', label: 'Diamond — EF Interventions', type: 'external' },
	{ id: 'blair', label: 'Blair & Razza — EF & School', type: 'external' },
	{ id: 'zelazo', label: 'Zelazo — EF Cascades', type: 'external' },
	{ id: 'baumrind', label: 'Baumrind — Parenting Styles', type: 'external' },
	{ id: 'gottman', label: 'Gottman — Emotion Coaching', type: 'external' },
	{ id: 'brackett', label: 'Brackett — RULER Program', type: 'external' },
	{ id: 'hillman', label: 'Hillman — Fitness & Brain', type: 'external' },
	{ id: 'donnelly', label: 'Donnelly — Activity & Cognition', type: 'external' },
	{ id: 'gray', label: 'Gray — Decline of Play', type: 'external' },
	{ id: 'sandseter', label: 'Sandseter — Risky Play', type: 'external' },
	{ id: 'way', label: 'Way — Deep Secrets', type: 'external' },
	{ id: 'hawley', label: 'Hawley — Prosocial Status', type: 'external' },
	{ id: 'faris', label: 'Faris — Status & Aggression', type: 'external' },
	{ id: 'mcadams', label: 'McAdams — Narrative Identity', type: 'external' },
	{ id: 'arnett', label: 'Arnett — Emerging Adulthood', type: 'external' },
	{ id: 'haidt', label: 'Haidt — Anxious Generation', type: 'external' },
	{ id: 'roozenbeek', label: 'Roozenbeek — Inoculation Theory', type: 'external' },
	{ id: 'livingstone', label: 'Livingstone — Digital Literacy', type: 'external' },
	{ id: 'rice', label: 'Rice — Male Depression Scale', type: 'external' },
	{ id: 'pollack', label: 'Pollack — Real Boys', type: 'external' },
	{ id: 'dee', label: 'Dee & Sievertsen — School Age (QJE)', type: 'external' },
	{ id: 'pellegrini', label: 'Pellegrini — Recess & Attention', type: 'external' },
	{ id: 'eggert', label: 'Eggert — Sports & Depression', type: 'external' },
	{ id: 'kidd', label: 'Kidd — Mentorship Outcomes', type: 'external' },
	{ id: 'dubois', label: 'DuBois — Mentoring Meta-analysis', type: 'external' },
	{ id: 'lamb', label: 'Lamb — Father\'s Role', type: 'external' },
	{ id: 'pleck', label: 'Pleck — Paternal Involvement', type: 'external' },
	{ id: 'slavin', label: 'Slavin — Cooperative Learning', type: 'external' },
	{ id: 'siegel', label: 'Siegel & Bryson — No-Drama Discipline', type: 'external' },
	{ id: 'barkley', label: 'Barkley — ADHD & Self-Regulation', type: 'external' },
	{ id: 'baron-cohen', label: 'Baron-Cohen — Systemizing Theory', type: 'external' },
	{ id: 'garcia-coll', label: 'García Coll — Cultural Context', type: 'external' },
	{ id: 'chetty', label: 'Chetty — Intergenerational Mobility', type: 'external' },
	{ id: 'rosenberg', label: 'Rosenberg — NVC', type: 'external' },
	{ id: 'marantz', label: 'Marantz — Online Radicalization', type: 'external' },
	{ id: 'yeager', label: 'Yeager — Anti-Bullying', type: 'external' },
	{ id: 'way-deep-secrets', label: 'Way — Deep Secrets (2011)', type: 'external' },
	{ id: 'destatis-zeit', label: 'Destatis — Zeitverwendungsstudie (2022)', type: 'external' },
	{ id: 'bmfsfj-mic', label: 'BMFSFJ — Men in Care (2024)', type: 'external' },
	{ id: 'trommsdorff', label: 'Trommsdorff & Kornadt — Cross-cultural Parenting', type: 'external' },
	{ id: 'reimers', label: 'Reimers — Testosterone & Cooperation (2019)', type: 'external' },
	{ id: 'bzga', label: 'BZgA — Jugendsexualität Survey', type: 'external' },
];

/** Maps external source IDs to the synthesis node IDs they contribute to */
export const sourceToNodes: Record<string, string[]> = {
	'bowlby': ['ext-attachment-theory', 'ext-attachment-exploration', 'secure-attachment-foundation'],
	'sroufe': ['ext-attachment-theory', 'secure-attachment-foundation'],
	'groh': ['ext-attachment-theory', 'secure-attachment-foundation'],
	'ainsworth': ['ext-attachment-exploration'],
	'diamond': ['ext-ef-trainable', 'executive-function-scaffolding'],
	'blair': ['ext-ef-predicts-school', 'executive-function-scaffolding'],
	'zelazo': ['ext-ef-predicts-school', 'executive-function-scaffolding'],
	'baumrind': ['ext-authoritative-parenting', 'discipline-through-connection', 'cross-cultural-adaptation'],
	'gottman': ['ext-emotion-coaching', 'teach-emotional-vocabulary'],
	'brackett': ['ext-emotion-coaching', 'teach-emotional-vocabulary', 'emotional-literacy-not-vulnerability'],
	'hillman': ['ext-activity-brain', 'physical-activity-regulates-emotion'],
	'donnelly': ['ext-activity-brain', 'activity-based-learning'],
	'gray': ['ext-play-decline', 'allow-managed-risk'],
	'sandseter': ['ext-risky-play-courage', 'allow-managed-risk'],
	'way': ['ext-boys-lose-friendships', 'emotional-literacy-not-vulnerability'],
	'hawley': ['ext-prosocial-status', 'peer-status-without-cruelty'],
	'faris': ['ext-prosocial-status', 'peer-status-without-cruelty'],
	'mcadams': ['ext-narrative-identity', 'narrative-identity-purpose'],
	'arnett': ['ext-narrative-identity', 'narrative-identity-purpose'],
	'haidt': ['ext-social-media-harm', 'counter-radicalization-belonging', 'media-literacy-inoculation'],
	'roozenbeek': ['ext-inoculation-effective', 'media-literacy-inoculation'],
	'livingstone': ['ext-inoculation-effective', 'media-literacy-inoculation'],
	'rice': ['ext-male-depression-scale', 'screen-depression-differently'],
	'pollack': ['ext-male-depression-scale', 'screen-depression-differently'],
	'dee': ['ext-school-age-effect', 'delay-academics'],
	'pellegrini': ['ext-recess-restores-attention', 'activity-based-learning'],
	'eggert': ['ext-team-sports-depression', 'physical-activity-regulates-emotion'],
	'kidd': ['ext-mentorship-outcomes', 'narrative-identity-purpose'],
	'dubois': ['ext-mentorship-outcomes'],
	'lamb': ['fathers-must-engage-emotionally'],
	'pleck': ['fathers-must-engage-emotionally'],
	'slavin': ['leverage-group-dynamics'],
	'siegel': ['discipline-through-connection'],
	'barkley': ['neurodiversity-not-pathology'],
	'baron-cohen': ['neurodiversity-not-pathology'],
	'garcia-coll': ['cross-cultural-adaptation'],
	'chetty': ['cross-cultural-adaptation'],
	'rosenberg': ['emotional-literacy-not-vulnerability'],
	'marantz': ['counter-radicalization-belonging'],
	'yeager': ['peer-status-without-cruelty'],
	'way-deep-secrets': ['friendship-crisis-real', 'ext-boys-lose-friendships'],
	'destatis-zeit': ['care-gap-children'],
	'bmfsfj-mic': ['care-profession-pathways'],
	'trommsdorff': ['cultural-conflict-training'],
	'reimers': ['testosterone-complex'],
	'bzga': ['consent-education-early'],
};
