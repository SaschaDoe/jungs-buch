// outline-data.ts
// "The Perfect Book on Raising Boys" — full book outline (20 chapters)
// Each chapter maps to synthesis graph nodes

export interface OutlineChapter {
	id: string;
	number: number;
	title: string;
	subtitle: string;
	/** One-paragraph description of what this chapter covers */
	description: string;
	/** The key question this chapter answers */
	keyQuestion: string;
	/** Bridge sentence leading to the next chapter */
	bridge: string;
	/** Synthesis graph node IDs this chapter draws from */
	nodeIds: string[];
	/** Domain colors for visual indicators */
	domains: string[];
	/** Key sources (short labels) */
	keySources: string[];
	/** Whether this chapter is new (added in the upgrade) */
	isNew?: boolean;
}

export interface OutlinePart {
	id: string;
	number: number;
	title: string;
	subtitle: string;
	color: string;
	chapters: OutlineChapter[];
}

export interface OutlineMyth {
	myth: string;
	reality: string;
	status: 'disproven' | 'overstated' | 'oversimplified' | 'no-evidence';
}

export interface OutlineContradiction {
	question: string;
	sideA: string;
	sideB: string;
	resolution: string;
}

export interface ScienceField {
	name: string;
	color: string;
	sees: string;
	misses: string;
}

// ══════════════════════════════════════════════════════
// MYTHS — Chapter 1 content
// ══════════════════════════════════════════════════════

export const myths: OutlineMyth[] = [
	{
		myth: '"Boys are naturally unemotional"',
		reality: 'Newborn boys are MORE emotionally reactive than girls (Brody synthesis). The stoicism is trained, not innate.',
		status: 'disproven',
	},
	{
		myth: '"Boys\' brains are wired completely differently"',
		reality: 'Most psychological sex differences are small (d < 0.35). Only brain size and maturation timing are reliably proven.',
		status: 'overstated',
	},
	{
		myth: '"Boys need tough love / harsh discipline"',
		reality: 'Harsh discipline produces shame, anger, and retaliation — not self-discipline or moral character.',
		status: 'disproven',
	},
	{
		myth: '"Single-sex schools fix the education gap"',
		reality: 'Meta-analyses controlling for selection effects find no reliable advantage. The solution is better teaching, not segregation.',
		status: 'no-evidence',
	},
	{
		myth: '"Boys will be boys" (deterministic acceptance)',
		reality: 'Neural plasticity means every starting point can be reshaped. Biology sets the start; experience writes the story.',
		status: 'oversimplified',
	},
	{
		myth: '"Treat boys like girls and equality is solved"',
		reality: 'Emotional literacy is not the same as forced vulnerability. Boys process emotions through action, not confession circles.',
		status: 'oversimplified',
	},
	{
		myth: '"Testosterone causes aggression"',
		reality: 'Most boy aggression is reactive/defensive. Testosterone tracks social status; it doesn\'t cause violence.',
		status: 'oversimplified',
	},
	{
		myth: '"More homework and structure fixes boys"',
		reality: 'Boys need more play, movement, and freedom — not more sitting still. Cutting recess is counterproductive.',
		status: 'disproven',
	},
];

// ══════════════════════════════════════════════════════
// SCIENCE FIELDS — Chapter 2 content
// ══════════════════════════════════════════════════════

export const scienceFields: ScienceField[] = [
	{
		name: 'Neuroscience',
		color: '#6366f1',
		sees: 'Brain structure, activation patterns, maturation timing',
		misses: 'Small samples, correlation \u2260 causation, "pink/blue brain" media hype',
	},
	{
		name: 'Developmental Psychology',
		color: '#3b82f6',
		sees: 'Longitudinal trajectories, milestones, temperament',
		misses: 'Expensive and slow, WEIRD-sample bias, hard to isolate variables',
	},
	{
		name: 'Evolutionary Biology',
		color: '#10b981',
		sees: 'WHY differences might exist, cross-species parallels',
		misses: 'Can become unfalsifiable "just-so stories," past \u2260 present',
	},
	{
		name: 'Endocrinology',
		color: '#f59e0b',
		sees: 'Hormonal mechanisms, CAH natural experiments, prenatal effects',
		misses: 'Oversimplified "testosterone = behavior" claims, dosage complexity',
	},
	{
		name: 'Education Research',
		color: '#ec4899',
		sees: 'Classroom interventions, PISA data, achievement gaps',
		misses: 'Hard to do RCTs, policy confounds, Hawthorne effects',
	},
	{
		name: 'Clinical Psychology',
		color: '#14b8a6',
		sees: 'Rich individual case data, therapy outcomes, diagnostic patterns',
		misses: 'Selection bias (only sees struggling kids), small N, generalizability',
	},
	{
		name: 'Epidemiology',
		color: '#f97316',
		sees: 'Population-level trends, large sample sizes, risk factors',
		misses: 'Can\'t show mechanisms, ecological fallacy, confounders',
	},
	{
		name: 'Sociology',
		color: '#8b5cf6',
		sees: 'Cultural forces, structural inequality, institutional effects',
		misses: 'Ideological capture risk, weak causal claims, correlation-heavy',
	},
];

// ══════════════════════════════════════════════════════
// CONTRADICTIONS — Chapter 3 content
// ══════════════════════════════════════════════════════

export const contradictions: OutlineContradiction[] = [
	{
		question: 'How big are sex differences?',
		sideA: 'Eliot: Small and overstated by pop-science. Most d < 0.35.',
		sideB: 'Sax & Geary: Significant and evolved. Ignoring them harms boys.',
		resolution: 'Small but real, then amplified by experience. Both are partly right: the starting differences are small (Eliot) but they matter because culture magnifies them (Sax).',
	},
	{
		question: 'Nature vs. nurture — which drives boys\' behavior?',
		sideA: 'Gurian & Geary: Biology is primary. Evolution shaped male brains for competition.',
		sideB: 'Eliot: Culture is primary. We socialize differences into existence.',
		resolution: 'Interactionism. Biology sets starting biases; experience shapes trajectories. The debate is about emphasis, not either/or. Plasticity is the bridge concept.',
	},
	{
		question: 'Is ADHD overdiagnosed in boys?',
		sideA: 'Sax: Massively overdiagnosed. Normal boy energy pathologized.',
		sideB: 'Barkley: Real neurodevelopmental condition, undertreated in many cases.',
		resolution: 'Both. Developmental timing creates false positives (immature boys misdiagnosed), but real ADHD exists and needs treatment. Age-relative diagnosis helps.',
	},
	{
		question: 'Video games: cause or symptom of boys\' drift?',
		sideA: 'Sax: A root cause of failure to launch. Games displace real achievement.',
		sideB: 'Others: A symptom. Boys who lack purpose in real life retreat to virtual worlds.',
		resolution: 'Probably bidirectional. The displacement of real-world activity (sports, work, social) matters more than the games themselves. But the pull is real.',
	},
	{
		question: 'How much does testosterone explain?',
		sideA: 'Gurian: Testosterone fundamentally shapes male behavior and needs.',
		sideB: 'Eliot: Prenatal effects are tiny; postnatal testosterone is a response, not a cause.',
		resolution: 'Prenatal effects create real but small biases (toy preferences, activity level). Postnatal testosterone tracks social status — it follows behavior more than it drives it.',
	},
];

// ══════════════════════════════════════════════════════
// OUTLINE — Full book structure (20 chapters, 5 parts)
// ══════════════════════════════════════════════════════

export const outlineParts: OutlinePart[] = [
	{
		id: 'landscape',
		number: 1,
		title: 'The Landscape',
		subtitle: 'Before you read about boys, learn how to read the science',
		color: '#60a5fa',
		chapters: [
			{
				id: 'myths',
				number: 1,
				title: 'Everything You Think You Know Is Wrong',
				subtitle: 'The most common beliefs about boys — and what the evidence actually says',
				description: 'Opens with the statistics: 3x suicide rate, growing education gap, rising failure to launch. Then immediately surprises: boys are born MORE emotionally reactive than girls. Runs through eight popular beliefs about boys that are disproven, overstated, or unsupported. The reader finishes this chapter realizing they need to rethink everything.',
				keyQuestion: 'What do most people believe about boys that the science doesn\'t support?',
				bridge: 'But how do we know all this? Eight different sciences study boys — and they don\'t always agree.',
				nodeIds: ['boys-problems-real', 'boys-born-emotional', 'brain-diff-small-but-real', 'harsh-discipline-backfires', 'single-sex-no-advantage', 'aggression-reactive'],
				domains: ['society', 'emotion', 'biology'],
				keySources: ['Brody (1996)', 'Hyde — Gender Similarities', 'PISA data', 'Eliot', 'Kindlon & Thompson'],
			},
			{
				id: 'sciences',
				number: 2,
				title: 'Eight Sciences, One Boy',
				subtitle: 'The research landscape — what each field sees and what it misses',
				description: 'Maps the eight scientific fields that study boys: neuroscience, developmental psychology, evolutionary biology, endocrinology, education research, clinical psychology, epidemiology, and sociology. For each: what it can measure, how it gets evidence, where it\'s strong, and where it misleads. The key insight: when multiple fields converge on the same finding from different methods, confidence is high.',
				keyQuestion: 'How do you evaluate competing scientific claims about boys?',
				bridge: 'Now you know the tools. But what happens when these sciences contradict each other?',
				nodeIds: [],
				domains: [],
				keySources: ['Meta-science overview', 'Replication crisis context'],
			},
			{
				id: 'contradictions',
				number: 3,
				title: 'Where the Experts Fight',
				subtitle: 'The five major contradictions — and what they tell us',
				description: 'Lays out the five biggest disagreements honestly: how big are sex differences, nature vs. nurture, ADHD overdiagnosis, video games as cause or symptom, and what testosterone actually does. For each: who says what, what evidence they have, and where the resolution lies. Also identifies seven consensus findings that virtually every serious researcher accepts.',
				keyQuestion: 'Where do the experts agree, where do they disagree, and why does it matter?',
				bridge: 'Now you know how to read the evidence and where the debates are. Let\'s look at what the science actually says about the boy in front of you.',
				nodeIds: ['prenatal-t-biases', 'neural-plasticity', 'education-gap-real'],
				domains: ['biology', 'education'],
				keySources: ['Eliot vs. Sax', 'Geary vs. Eliot', 'Barkley vs. Sax', 'Gurian vs. Eliot'],
			},
		],
	},
	{
		id: 'what-boys-are',
		number: 2,
		title: 'What Boys Actually Are',
		subtitle: 'The biology, the context, and the foundation',
		color: '#10b981',
		chapters: [
			{
				id: 'seeds',
				number: 4,
				title: 'Small Seeds, Not Destinies',
				subtitle: 'Brain differences, testosterone, and the power of plasticity',
				description: 'Prenatal testosterone creates behavioral biases but does not determine outcomes. Girls\' brains mature faster — a 1-2 year gap in language and self-control. But neural plasticity amplifies small seeds into large differences. The optimistic implication: interventions can reshape trajectories. The self-regulation gap is the biggest reliable difference — and it\'s developmental, not permanent.',
				keyQuestion: 'What does biology actually give boys — and how much can experience change it?',
				bridge: 'Biology gives boys a slightly different starting point. But that starting point lands in radically different soil depending on who the boy is and where he lives.',
				nodeIds: ['brain-diff-small-but-real', 'prenatal-t-biases', 'neural-plasticity', 'boys-mature-slower'],
				domains: ['biology'],
				keySources: ['Eliot', 'Geary', 'Hyde', 'Hines', 'Joel (brain mosaic)'],
			},
			{
				id: 'not-one-boyhood',
				number: 5,
				title: 'Not One Boyhood',
				subtitle: 'Race, class, disability, and the boys we overlook',
				description: 'Three boys, same age, same city, radically different boyhoods. Most research in this book comes from WEIRD populations (96% of subjects, 12% of the world). Black boys face a specific mobility gap (Chetty et al. 2020). Poverty amplifies every risk factor. Immigration means navigating competing masculinity models. Disability intersects with gender in compounding ways. This chapter establishes the lens for everything that follows: every time the book says "boys," ask "which boys?"',
				keyQuestion: 'How does a boy\'s race, class, culture, and neurology shape how every finding in this book applies to him?',
				bridge: 'With the full picture of which boys we\'re talking about, we can now turn to what every boy — regardless of background — needs from the adults around him.',
				nodeIds: ['cross-cultural-adaptation'],
				domains: ['society', 'identity'],
				keySources: ['Chetty et al. (2020)', 'Henrich — WEIRD', 'Noguera', 'Skiba', 'Garcia Coll', 'Reeves (2022)'],
				isNew: true,
			},
			{
				id: 'secure-base',
				number: 6,
				title: 'The Secure Base',
				subtitle: 'Attachment theory — the foundation everything else rests on',
				description: 'Secure attachment is among the strongest predictors of resilience, emotional regulation, and social competence (Groh meta-analysis, 100+ studies). The "secure base" phenomenon: safety enables adventure — securely attached children explore more, take more cognitive risks, learn more effectively. For boys, secure attachment acts as a thermostat for risk-taking: calibrated risk, not reckless or avoidant.',
				keyQuestion: 'What is the one thing that matters more than anything else for a boy\'s development?',
				bridge: 'Attachment is the foundation. So why do we systematically dismantle it for boys?',
				nodeIds: ['ext-attachment-theory', 'ext-attachment-exploration', 'secure-attachment-foundation', 'boys-born-emotional'],
				domains: ['family', 'emotion'],
				keySources: ['Bowlby', 'Sroufe — Minnesota Study', 'Groh meta-analysis', 'Ainsworth'],
			},
		],
	},
	{
		id: 'what-we-do',
		number: 3,
		title: 'What We Do to Them',
		subtitle: 'The environmental forces that shape — and damage — boys',
		color: '#ef4444',
		chapters: [
			{
				id: 'shutdown',
				number: 7,
				title: 'The Emotional Shutdown',
				subtitle: 'How we silence boys starting in infancy',
				description: 'Parents suppress boys\' emotions from birth: less eye contact, less emotion talk, less tolerance for tears. The "Boy Code" (Pollack) has four pillars, but it plays out differently across race and class — Black boys face harsher consequences for the same emotions, Latino boys navigate competing cultural demands. By late adolescence, boys have lost the deep friendships they had at 13. Includes a practical Field Guide for recognizing and responding to emotional shutdown.',
				keyQuestion: 'How does a boy who is born more emotional than a girl become a man who can\'t name his feelings?',
				bridge: 'The emotional shutdown happens at home. But there\'s another institution that structurally disadvantages boys every single day.',
				nodeIds: ['emotional-suppression-learned', 'ext-boys-lose-friendships', 'boys-born-emotional'],
				domains: ['emotion', 'social'],
				keySources: ['Kindlon & Thompson', 'Way — Deep Secrets', 'Pollack', 'Fivush', 'Wong meta-analysis'],
			},
			{
				id: 'school',
				number: 8,
				title: 'School Wasn\'t Built for This',
				subtitle: 'The maturation gap, the EF deficit, and the structural mismatch',
				description: 'Boys underperform girls in reading in all PISA countries. Schools demand verbal skills and sitting still — exactly where boys lag 1-2 years. Executive function predicts school success better than IQ, but develops later in boys. The discipline gap is both gendered AND racialized — Black boys are suspended at 3x the rate of white boys. Includes a Field Guide for advocating for your son at school.',
				keyQuestion: 'Why does the education gap exist in every country, and what structural factors make it worse?',
				bridge: 'School fails many typical boys. But for boys whose brains are wired differently — not just delayed, but genuinely divergent — the mismatch runs deeper.',
				nodeIds: ['school-mismatch', 'education-gap-real', 'ext-ef-predicts-school', 'boys-mature-slower', 'reading-gap-plastic'],
				domains: ['education', 'biology'],
				keySources: ['PISA data', 'Blair & Razza', 'Diamond', 'Elder (2010)', 'Skiba'],
			},
			{
				id: 'neurodivergent',
				number: 9,
				title: 'The Neurodivergent Boy',
				subtitle: 'ADHD, autism, and the spectrum of minds',
				description: 'Two boys fidget in the same classroom — one is just young for his grade, the other has genuine ADHD. The system can\'t tell them apart. ADHD is real (heritability 0.74) AND overdiagnosed (youngest in class 60% more likely to be labeled). Autism\'s 4:1 male ratio may partly reflect diagnostic bias. Race distorts diagnosis: Black children get conduct disorder labels for the same ADHD symptoms. Includes the medication question handled without ideology, and a Field Guide for navigating evaluation.',
				keyQuestion: 'How do you distinguish a boy whose brain is developing on a normal-but-slower timeline from a boy who is genuinely neurodivergent — and what does each one need?',
				bridge: 'Neurodivergent boys need movement and sensory regulation more than most. Which brings us to a broader loss that affects all boys.',
				nodeIds: [],
				domains: ['biology', 'education', 'identity'],
				keySources: ['Barkley', 'Faraone & Larsson', 'Elder (2010)', 'Loomes — autism ratio', 'Morgan — racial diagnosis bias', 'MTA study'],
				isNew: true,
			},
			{
				id: 'play',
				number: 10,
				title: 'When Play Disappeared',
				subtitle: 'The cost of eliminating risk from childhood',
				description: 'Free play declined for decades; childhood anxiety rose substantially over the same period. The causal link is plausible but primarily correlational — this chapter is honest about what we know and don\'t know. Risky play builds courage through graduated exposure (Sandseter & Kennair). Access to play is class-stratified: low-income boys face "play deserts." Includes a Field Guide for restoring play.',
				keyQuestion: 'What did boys lose when we made childhood safe — and what did they gain?',
				bridge: 'Schools silenced them. Playgrounds sanitized them. But there\'s one relationship that could have held it all together.',
				nodeIds: ['ext-play-decline', 'ext-risky-play-courage', 'play-fighting-functional', 'risk-taking-biological'],
				domains: ['physical'],
				keySources: ['Gray', 'Sandseter & Kennair', 'Benenson', 'Byrnes meta-analysis'],
			},
			{
				id: 'fathers',
				number: 11,
				title: 'The Father-Son Gulf',
				subtitle: 'The most important relationship — and the most broken',
				description: 'Father involvement is among the strongest predictors of empathy and non-delinquency (Harvard longitudinal study). Yet the father-son relationship is typically the most emotionally barren. The "absent Black father" narrative is contradicted by CDC data showing Black residential fathers are MORE involved than white or Hispanic fathers. The "provider trap" operates differently across class. Includes a Field Guide for building the father-son connection.',
				keyQuestion: 'Why is the most powerful relationship in a boy\'s life usually the most emotionally empty?',
				bridge: 'Everything we\'ve said about fathers is true. But there is another relationship — often the most powerful one in a boy\'s early life — that we have not yet examined.',
				nodeIds: ['father-son-gulf', 'harsh-discipline-backfires', 'ext-authoritative-parenting'],
				domains: ['family'],
				keySources: ['Kindlon & Thompson', 'Baumrind', 'Lamb', 'Pleck', 'CDC NCHS (2013)'],
			},
			{
				id: 'mothers',
				number: 12,
				title: 'The Mother-Son Bond',
				subtitle: 'What she gives, what she fears, what the research shows',
				description: 'Mothers are typically the primary architects of a boy\'s emotional infrastructure — yet the "boys books" never give them a dedicated chapter. The "cutting the cord" myth says mothers should pull away at puberty; the research says the opposite (Allen et al. 2007). Single mothers can provide everything boys need — with adequate resources. Mothers are often the last space where a boy permits vulnerability. Includes a Field Guide for staying connected through adolescence.',
				keyQuestion: 'What does the research actually say about what mothers provide, what the "let him go" advice gets wrong, and how single mothers can thrive?',
				bridge: 'The mother fears losing her son emotionally. Sometimes that fear is realized in a way no parent expects.',
				nodeIds: [],
				domains: ['family', 'emotion'],
				keySources: ['Ainsworth', 'Allen et al. (2007)', 'Fivush', 'Golombok (2015)', 'Way', 'Clearfield & Nelson'],
				isNew: true,
			},
		],
	},
	{
		id: 'what-breaks',
		number: 4,
		title: 'What Goes Wrong',
		subtitle: 'The downstream consequences — and the digital accelerant',
		color: '#f59e0b',
		chapters: [
			{
				id: 'depression',
				number: 13,
				title: 'The Hidden Depression',
				subtitle: 'When sadness wears the mask of anger',
				description: 'Depression in boys presents as irritability, hostility, risk-taking, and withdrawal — not sadness. Standard screening misses it. Males account for 80-86% of teen suicides. Male-specific depression scales (Rice et al.) double detection rates. Diagnostic bias compounds the problem: Black boys\' depression is more often labeled as conduct disorder. Includes a Field Guide with age-bracketed warning signs emphasizing male-type symptoms.',
				keyQuestion: 'Why does our mental health system systematically fail to detect depression in boys?',
				bridge: 'Undetected depression is one outcome. But there\'s a larger pattern of boys drifting — and something is waiting to catch them.',
				nodeIds: ['hidden-depression', 'ext-male-depression-scale', 'screen-depression-differently'],
				domains: ['emotion'],
				keySources: ['Kindlon & Thompson', 'Rice et al. — MDRS', 'Pollack', 'Martin et al. (2013)', 'Addis & Mahalik'],
			},
			{
				id: 'drift',
				number: 14,
				title: 'Failure to Launch',
				subtitle: 'Drift, algorithms, and the purpose gap',
				description: 'Men 25-54 not working rose 25%. Young men at home doubled since 1970. The cascade of five failures (emotional shutdown + school mismatch + play decline + father-son gulf + hidden depression) is multiplicative, not additive. "Failure to launch" looks completely different by class — middle-class boys drift; working-class boys fall. The purpose gap is the upstream cause, and narrative identity (McAdams) is the missing piece.',
				keyQuestion: 'Why are so many young men drifting — and what fills the vacuum when purpose is absent?',
				bridge: 'Into the vacuum these failures create, a device arrives — and with it, an algorithm that knows exactly what a lonely, purposeless boy wants to hear.',
				nodeIds: ['failure-to-launch', 'radicalization-real', 'ext-narrative-identity'],
				domains: ['society', 'identity'],
				keySources: ['Eberstadt', 'Case & Deaton', 'McAdams', 'Reeves (2022)', 'Haidt'],
			},
			{
				id: 'screens',
				number: 15,
				title: 'The Screen in His Pocket',
				subtitle: 'Beyond moral panic, beyond denial',
				description: 'Same phone, two boys, radically different outcomes. This chapter presents both sides honestly: Haidt/Twenge\'s case for harm AND the skeptics (Orben & Przybylski: r = -0.035; Odgers questioning causal inference). The honest middle: heavy use probably harmful, moderate use probably neutral, type matters more than amount. Covers algorithmic amplification, the positive digital life, the radicalization pipeline (nuanced), pornography as default sex education, and evidence-based responses. Includes a Field Guide with the "displacement test."',
				keyQuestion: 'What does the evidence actually show about screens and boys — when you look at both sides?',
				bridge: 'The algorithm manipulates emotions. The antidote is a boy who can recognize, name, and regulate his own.',
				nodeIds: ['ext-social-media-harm', 'radicalization-real'],
				domains: ['society', 'identity', 'emotion'],
				keySources: ['Haidt (2024)', 'Orben & Przybylski (2019)', 'Odgers (2024)', 'Ribeiro et al.', 'Ging (2019)', 'Roozenbeek & van der Linden'],
				isNew: true,
			},
		],
	},
	{
		id: 'what-works',
		number: 5,
		title: 'What Actually Works',
		subtitle: 'Evidence-based interventions',
		color: '#22c55e',
		chapters: [
			{
				id: 'emotion-coaching',
				number: 16,
				title: 'Emotion Coaching, Not Forced Vulnerability',
				subtitle: 'How to teach boys emotional intelligence on their own terms',
				description: 'Gottman\'s method: notice, validate, label, problem-solve. Longitudinal evidence shows effects for boys (though the sex-differential finding needs independent replication). The RULER program scales to 2,000+ schools. The key: action-oriented approaches that respect boys\' processing style — shoulder-to-shoulder, not confession circles (though some circle formats work when activity-embedded). Includes a detailed Field Guide with age-bracketed techniques and conversation scripts.',
				keyQuestion: 'How do you teach emotional intelligence to someone who processes feelings through action?',
				bridge: 'Emotional coaching works at home. But boys spend most of their day somewhere else.',
				nodeIds: ['ext-emotion-coaching', 'teach-emotional-vocabulary', 'emotional-literacy-not-vulnerability'],
				domains: ['emotion'],
				keySources: ['Gottman', 'Brackett — RULER', 'Rosenberg — NVC', 'Way'],
			},
			{
				id: 'learning',
				number: 17,
				title: 'Redesigning Learning',
				subtitle: 'Later entry, EF training, movement, recess',
				description: 'Later school entry improves self-regulation — the effect is larger for boys (Dee & Sievertsen, QJE). Executive functions are trainable through structured programs, though key studies have mixed replication (Tools of the Mind). Recess restores attention, especially in boys. The Finnish model works but requires investment that under-resourced schools don\'t have — equity-conscious reform must address this gap.',
				keyQuestion: 'What would school look like if it were designed around how boys actually develop?',
				bridge: 'Better classrooms help. But boys need something schools can\'t fully provide.',
				nodeIds: ['ext-school-age-effect', 'ext-ef-trainable', 'ext-recess-restores-attention', 'delay-academics', 'activity-based-learning', 'neurodiversity-not-pathology'],
				domains: ['education'],
				keySources: ['Dee & Sievertsen (QJE)', 'Diamond', 'Pellegrini', 'Barkley', 'Sahlberg — Finland'],
			},
			{
				id: 'body',
				number: 18,
				title: 'The Moving Body as Medicine',
				subtitle: 'Physical activity, team sports, and managed risk',
				description: 'Physical activity directly improves brain function — meta-analysis shows d = 0.32-0.57 (Donnelly). Team sports specifically combine exercise + belonging + hierarchy. Exercise is a complement to clinical treatment for ADHD, not a replacement — but for sub-clinical restlessness, it may be sufficient. Managed risk (climbing, martial arts, skateparks) functions as exposure therapy.',
				keyQuestion: 'Why is a moving body the single most underused intervention for struggling boys?',
				bridge: 'Movement helps the individual boy. But boys don\'t exist as individuals — they exist in groups.',
				nodeIds: ['ext-activity-brain', 'ext-team-sports-depression', 'allow-managed-risk', 'physical-activity-regulates-emotion'],
				domains: ['physical'],
				keySources: ['Hillman', 'Donnelly', 'Sandseter & Kennair', 'Cerrillo-Urbina — ADHD & exercise'],
			},
			{
				id: 'groups',
				number: 19,
				title: 'Shoulder to Shoulder',
				subtitle: 'Group dynamics, prosocial status, and deep friendships',
				description: 'Boys form hierarchical groups by age 3 and bond through doing, not talking. Prosocial strategies outrank coercive ones in peer status (Hawley). Aggression peaks in the middle of the hierarchy, not the top (Faris & Felmlee). Anti-bullying programs that leverage prosocial high-status kids work best (KiVa). Boys\' friendships are measured with a "female ruler" — side-by-side bonding is not lesser, just different.',
				keyQuestion: 'How do you work WITH boys\' natural social structure instead of against it?',
				bridge: 'Groups provide belonging. But belonging needs a story — a reason to be part of something.',
				nodeIds: ['boys-groups-hierarchical', 'boys-shoulder-to-shoulder', 'leverage-group-dynamics', 'ext-prosocial-status'],
				domains: ['social'],
				keySources: ['Benenson', 'Hawley', 'Faris & Felmlee', 'Slavin', 'Way'],
			},
			{
				id: 'purpose',
				number: 20,
				title: 'Purpose Before the Algorithm',
				subtitle: 'Narrative identity, mentorship, and media inoculation',
				description: 'Boys construct identity through stories of competence and contribution (McAdams). Structured mentorship transforms at-risk boys — but mentoring effects are strongest when mentors share demographic backgrounds (DuBois), and "find a mentor" is hollow advice for boys in communities without resources. Media inoculation training reduces susceptibility 20-30% (Roozenbeek), though not yet tested specifically on adolescent boys. Narrative identity formation is harder when cultural narratives don\'t include people who look like you.',
				keyQuestion: 'How do you give a boy a reason to become a man — before someone else gives him a worse one?',
				bridge: '',
				nodeIds: ['ext-mentorship-outcomes', 'ext-inoculation-effective', 'counter-radicalization-belonging', 'narrative-identity-purpose'],
				domains: ['identity', 'society'],
				keySources: ['McAdams', 'DuBois', 'Roozenbeek', 'Haidt', 'Kidd'],
			},
		],
	},
];
