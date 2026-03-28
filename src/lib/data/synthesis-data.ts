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
];
