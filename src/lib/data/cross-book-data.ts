// cross-book-data.ts
// Unified cross-book causal path comparison data.
// Groups related claims across all 8 books into thematic clusters,
// tagged by scientific field for filtering.

// ── Book metadata ──────────────────────────────────────────────

export interface BookMeta {
	id: string;
	title: string;
	shortTitle: string;
	author: string;
	color: string;
	route: string;
}

export const books: BookMeta[] = [
	{ id: 'jvh', title: 'Jungs von heute, Männer von morgen', shortTitle: 'Jungs von heute', author: 'Verena Friederike Hasel', color: '#a78bfa', route: '/jungs-von-heute' },
	{ id: 'wgm', title: 'Why Gender Matters', shortTitle: 'Why Gender Matters', author: 'Leonard Sax', color: '#34d399', route: '/why-gender-matters' },
	{ id: 'ba', title: 'Boys Adrift', shortTitle: 'Boys Adrift', author: 'Leonard Sax', color: '#f59e0b', route: '/boys-adrift' },
	{ id: 'wb', title: 'The Wonder of Boys', shortTitle: 'Wonder of Boys', author: 'Michael Gurian', color: '#06b6d4', route: '/wonder-of-boys' },
	{ id: 'pb', title: 'Pink Brain, Blue Brain', shortTitle: 'Pink Brain Blue Brain', author: 'Lise Eliot', color: '#ec4899', route: '/pink-brain-blue-brain' },
	{ id: 'mf', title: 'Male, Female', shortTitle: 'Male, Female', author: 'David C. Geary', color: '#6366f1', route: '/male-female' },
	{ id: 'ww', title: 'Warriors and Worriers', shortTitle: 'Warriors & Worriers', author: 'Joyce F. Benenson', color: '#ef4444', route: '/warriors-and-worriers' },
	{ id: 'rc', title: 'Raising Cain', shortTitle: 'Raising Cain', author: 'Kindlon & Thompson', color: '#14b8a6', route: '/raising-cain' },
];

// ── Scientific fields ──────────────────────────────────────────

export interface ScienceField {
	id: string;
	name: string;
	color: string;
}

export const scienceFields: ScienceField[] = [
	{ id: 'neuroscience', name: 'Neuroscience', color: '#6366f1' },
	{ id: 'dev-psych', name: 'Developmental Psychology', color: '#3b82f6' },
	{ id: 'evo-bio', name: 'Evolutionary Biology', color: '#10b981' },
	{ id: 'endocrinology', name: 'Endocrinology / Hormones', color: '#f59e0b' },
	{ id: 'education', name: 'Education Research', color: '#ec4899' },
	{ id: 'sociology', name: 'Sociology / Gender Studies', color: '#8b5cf6' },
	{ id: 'clinical', name: 'Clinical Psychology', color: '#14b8a6' },
	{ id: 'epidemiology', name: 'Epidemiology / Public Health', color: '#f97316' },
];

// ── Theme cluster ──────────────────────────────────────────────

export interface BookClaim {
	bookId: string;
	chainId: string;       // id in that book's argument-chain-data
	shortLabel: string;
	claim: string;
	status: 'red' | 'yellow' | 'green' | 'untestable';
	type: 'premise' | 'observation' | 'causal' | 'theory' | 'consequence' | 'solution';
}

export type Stance = 'biology-strong' | 'biology-moderate' | 'socialization-strong' | 'interactionist' | 'neutral';

export interface ThemeCluster {
	id: string;
	name: string;
	description: string;
	fields: string[];      // science field IDs
	claims: BookClaim[];
	/** Where the books broadly land on this topic */
	stanceSummary?: string;
}

// ── The actual theme clusters ──────────────────────────────────

export const themeClusters: ThemeCluster[] = [
	// ─── 1. Brain & Biology: Nature vs Nurture ───
	{
		id: 'brain-sex-differences',
		name: 'Brain & Biological Sex Differences',
		description: 'How large are innate brain/biological differences between boys and girls — and how much do they determine behavior?',
		fields: ['neuroscience', 'evo-bio', 'endocrinology'],
		stanceSummary: 'Books sharply disagree: Eliot and Hasel minimize biological differences, Gurian and Sax maximize them, Geary and Benenson take data-driven middle-to-strong positions.',
		claims: [
			{ bookId: 'jvh', chainId: 'born-same', shortLabel: 'Gehirne sind gleich', claim: 'Boys and girls are born with nearly identical brains. 99.8% of genes are shared. Sex differences are almost entirely socially shaped.', status: 'red', type: 'premise' },
			{ bookId: 'pb', chainId: 'brain-diff-small', shortLabel: 'Brain sex differences are small', claim: 'Sex differences in children\'s brains are much smaller than commonly believed. Only brain size and maturation timing differ reliably.', status: 'green', type: 'premise' },
			{ bookId: 'pb', chainId: 'psych-diff-small', shortLabel: 'Most psych differences small', claim: 'Most psychological sex differences are small (d < 0.35). Janet Hyde\'s gender similarities hypothesis.', status: 'green', type: 'premise' },
			{ bookId: 'wgm', chainId: 'sensory-differences', shortLabel: 'Sensory differences', claim: 'Sex differences in sensory perception (smell, hearing, vision) are real and biologically based.', status: 'green', type: 'premise' },
			{ bookId: 'wgm', chainId: 'brain-pace', shortLabel: 'Brain development pace gap', claim: 'Girls\' brains develop faster than boys\', with a gap of roughly 1-2 years during childhood.', status: 'green', type: 'premise' },
			{ bookId: 'wb', chainId: 'biology-prime-mover', shortLabel: 'Biology is the prime mover', claim: 'Boys are predominantly shaped by testosterone and male brain structure rather than socialization.', status: 'yellow', type: 'premise' },
			{ bookId: 'wb', chainId: 'brain-differences', shortLabel: 'Male/female brains structurally different', claim: 'The male brain is 10-15% larger, has a smaller corpus callosum, different hemisphere specialization.', status: 'red', type: 'premise' },
			{ bookId: 'mf', chainId: 'sex-hormones', shortLabel: 'Hormones organize sex differences', claim: 'Prenatal testosterone masculinizes play behavior; the testosterone-immunocompetence trade-off maintains honest signaling.', status: 'green', type: 'causal' },
			{ bookId: 'ww', chainId: 'innate-sex-diffs', shortLabel: 'Innate sex differences', claim: 'Sex differences in behavior have a significant innate basis — appearing in infancy, across cultures, and in primates.', status: 'green', type: 'premise' },
			{ bookId: 'rc', chainId: 'biology-not-destiny', shortLabel: 'Biology does not destiny violence', claim: 'Testosterone does not cause aggression in preadolescent boys. Nature and nurture are inextricably linked.', status: 'green', type: 'premise' },
		]
	},

	// ─── 2. Socialization & Boy Code ───
	{
		id: 'socialization-boy-code',
		name: 'Socialization & "Boy Code"',
		description: 'Do cultural norms ("be tough, don\'t cry") shape boys\' emotional suppression — or do biology and temperament play the larger role?',
		fields: ['sociology', 'dev-psych'],
		stanceSummary: 'Hasel and Raising Cain emphasize socialization as the primary driver. Eliot sees socialization amplifying small biological seeds. Sax, Gurian, Benenson, and Geary see biology as the larger factor.',
		claims: [
			{ bookId: 'jvh', chainId: 'socialization', shortLabel: 'Boy Code / Sozialisation', claim: 'Society socializes boys into restrictive masculinity norms from earliest childhood: suppress emotions, be tough, don\'t cry.', status: 'red', type: 'premise' },
			{ bookId: 'jvh', chainId: 'adults-treat-different', shortLabel: 'Baby-X-Beweis', claim: 'Adults treat babies differently based on perceived gender (Baby-X experiments).', status: 'red', type: 'causal' },
			{ bookId: 'pb', chainId: 'emotion-learned', shortLabel: 'Emotional suppression is learned', claim: 'Emotional expression differences are learned, not hard-wired. Boys start MORE emotionally reactive than girls.', status: 'green', type: 'causal' },
			{ bookId: 'pb', chainId: 'boys-more-emotional', shortLabel: 'Boys start MORE emotional', claim: 'Infant boys are more emotionally reactive/fussy than girls — contradicting the "tough boy" stereotype.', status: 'green', type: 'observation' },
			{ bookId: 'pb', chainId: 'gender-identity-amplify', shortLabel: 'Gender identity amplifies differences', claim: 'Gender identity emerges at 2-3 years and massively amplifies small initial differences through self-socialization.', status: 'green', type: 'causal' },
			{ bookId: 'rc', chainId: 'emotional-potential', shortLabel: 'Boys born emotionally capable', claim: 'All boys are born with full emotional capacity; newborn boys are actually more emotionally reactive. Cultural training suppresses this.', status: 'green', type: 'premise' },
			{ bookId: 'rc', chainId: 'culture-of-cruelty', shortLabel: 'Adolescent culture of cruelty', claim: 'From age 10, boys enter a peer culture of psychological warfare driven by the need to prove masculinity.', status: 'yellow', type: 'observation' },
			{ bookId: 'ww', chainId: 'males-value-rules', shortLabel: 'Males value rules', claim: 'Males value rules more than females and create complex rule systems — boys\' games involve more elaborate rules.', status: 'green', type: 'observation' },
			{ bookId: 'wb', chainId: 'male-culture-immutable', shortLabel: 'Male culture is biologically immutable', claim: 'Boy culture — competitiveness, hierarchy, aggression — is biologically driven and cannot be socialized away.', status: 'untestable', type: 'theory' },
		]
	},

	// ─── 3. Aggression ───
	{
		id: 'aggression',
		name: 'Aggression & Violence',
		description: 'Is male aggression innate, socialized, or both? How should we understand physical vs. relational aggression?',
		fields: ['dev-psych', 'evo-bio', 'clinical'],
		stanceSummary: 'All books acknowledge higher male physical aggression. They diverge on cause: Raising Cain sees it as reactive/learned, Benenson and Geary see evolutionary roots, Eliot distinguishes physical from relational forms.',
		claims: [
			{ bookId: 'wgm', chainId: 'aggression', shortLabel: 'Aggression differences', claim: 'Sex differences in aggression are partly innate and serve different evolutionary functions.', status: 'green', type: 'premise' },
			{ bookId: 'pb', chainId: 'aggression-forms', shortLabel: 'Aggression takes two forms', claim: 'Physical aggression is male-dominant (d~0.50), relational aggression is slightly female-dominant. Forms differ, not total aggression.', status: 'yellow', type: 'observation' },
			{ bookId: 'ww', chainId: 'boys-play-fighting', shortLabel: 'Boys\' innate fighting pleasure', claim: 'Boys derive innate pleasure from play fighting and targeting enemies — visible from 6-9 months.', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'females-indirect-aggr', shortLabel: 'Female indirect aggression', claim: 'Females avoid physical aggression and use indirect strategies: covert competition, social exclusion, confrontation as last resort.', status: 'green', type: 'observation' },
			{ bookId: 'rc', chainId: 'reactive-violence', shortLabel: 'Violence is reactive, not predatory', claim: 'Most boy aggression is defensive — a reaction to perceived threat, shame, or emotional overload — not predatory.', status: 'green', type: 'causal' },
			{ bookId: 'rc', chainId: 'harsh-discipline', shortLabel: 'Harsh discipline produces anger', claim: 'Boys receive harsher discipline everywhere. This produces shame, anger, and retaliation — not character.', status: 'green', type: 'causal' },
			{ bookId: 'wb', chainId: 'testosterone-drives', shortLabel: 'Testosterone drives aggression', claim: 'Testosterone creates predictable behavioral patterns including aggression, competition, and a "tension-release" cycle.', status: 'yellow', type: 'causal' },
			{ bookId: 'mf', chainId: 'male-competition', shortLabel: 'Male-male competition drives dimorphism', claim: 'Male-male competition drives evolution of larger body size, armaments, and behavioral/cognitive traits.', status: 'green', type: 'causal' },
		]
	},

	// ─── 4. Risk-Taking ───
	{
		id: 'risk-taking',
		name: 'Risk-Taking & Fear',
		description: 'Are boys biologically more risk-prone and girls more risk-averse — or is this primarily socialized?',
		fields: ['dev-psych', 'evo-bio', 'epidemiology'],
		stanceSummary: 'Sax and Benenson see biology as primary. Eliot emphasizes socialization. Geary\'s evolutionary framework predicts the pattern from parental investment theory.',
		claims: [
			{ bookId: 'wgm', chainId: 'risk-taking', shortLabel: 'Boys take more risks', claim: 'Boys are biologically predisposed to greater physical risk-taking via testosterone and neural reward systems.', status: 'green', type: 'premise' },
			{ bookId: 'pb', chainId: 'risk-socialized', shortLabel: 'Risk-taking is socialized', claim: 'Risk-taking differs between sexes but is strongly shaped by parents\' differential encouragement and limits.', status: 'yellow', type: 'causal' },
			{ bookId: 'ww', chainId: 'females-fear-risk', shortLabel: 'Female fear and risk-aversion', claim: 'Females show greater fear, risk-aversion, and health vigilance from birth — meta-analysis of 150 studies.', status: 'green', type: 'observation' },
			{ bookId: 'mf', chainId: 'life-history', shortLabel: 'Life history and developmental pace', claim: 'The more competitive sex develops more slowly and plays in ways that prepare for adult competition — including risky play.', status: 'green', type: 'causal' },
		]
	},

	// ─── 5. School Mismatch ───
	{
		id: 'school-mismatch',
		name: 'Schools & the Gender Gap in Education',
		description: 'Are schools structurally disadvantaging boys? What role do developmental timing, curriculum design, and ADHD diagnosis play?',
		fields: ['education', 'dev-psych', 'clinical'],
		stanceSummary: 'Most books agree boys struggle in school. They diverge on causes: developmental timing (Sax, Eliot), feminized environment (Gurian, Sax), or emotional miseducation (Kindlon/Thompson).',
		claims: [
			{ bookId: 'ba', chainId: 'education-gap', shortLabel: 'Education gender gap', claim: 'Boys are increasingly disengaging from school and underachieving relative to girls.', status: 'green', type: 'premise' },
			{ bookId: 'ba', chainId: 'curriculum-acceleration', shortLabel: 'Curriculum acceleration harms boys', claim: 'Acceleration of early elementary curriculum harms boys whose brains develop later.', status: 'yellow', type: 'causal' },
			{ bookId: 'ba', chainId: 'competition-eliminated', shortLabel: 'Loss of competition harms boys', claim: 'Elimination of competition from schools disproportionately harms boys who are motivated by it.', status: 'yellow', type: 'causal' },
			{ bookId: 'wgm', chainId: 'sensory-education', shortLabel: 'Sensory gaps in education', claim: 'Because boys hear differently, soft-spoken female teachers may fail to engage boys.', status: 'yellow', type: 'causal' },
			{ bookId: 'wgm', chainId: 'adhd-overdiagnosis', shortLabel: 'ADHD overdiagnosis (WGM)', claim: 'ADHD is overdiagnosed in boys due to developmental mismatch with school expectations.', status: 'yellow', type: 'causal' },
			{ bookId: 'ba', chainId: 'adhd-overdiagnosis', shortLabel: 'ADHD overdiagnosis (BA)', claim: 'ADHD is massively overdiagnosed in boys; stimulant medications may damage motivation centers.', status: 'yellow', type: 'causal' },
			{ bookId: 'rc', chainId: 'school-mismatch', shortLabel: 'Schools disadvantage boys', claim: 'The early school environment is essentially feminine. Boys\' slower maturation puts them at a structural disadvantage.', status: 'green', type: 'causal' },
			{ bookId: 'pb', chainId: 'reading-gap-plastic', shortLabel: 'Reading gap real but plastic', claim: 'The reading/literacy gap is real and longstanding but the brain is plastic enough to close it with intervention.', status: 'green', type: 'observation' },
			{ bookId: 'pb', chainId: 'single-sex-no-advantage', shortLabel: 'Single-sex schools: no advantage', claim: 'Single-sex schooling shows no reliable academic advantage when controlling for selection effects.', status: 'green', type: 'consequence' },
			{ bookId: 'pb', chainId: 'inhibitory-control', shortLabel: 'Boys lag in self-control', claim: 'Boys lag behind girls in inhibitory control — the largest reliable behavioral sex difference in childhood.', status: 'green', type: 'observation' },
		]
	},

	// ─── 6. Emotional Development ───
	{
		id: 'emotional-development',
		name: 'Emotional Development & Depression',
		description: 'How do boys develop emotionally — and what leads to emotional isolation, hidden depression, or substance use?',
		fields: ['dev-psych', 'clinical'],
		stanceSummary: 'Raising Cain and Hasel focus on emotional miseducation as the root cause. Gurian sees emotional processing as biologically different. Eliot provides evidence that emotional differences are learned.',
		claims: [
			{ bookId: 'rc', chainId: 'emotional-isolation', shortLabel: 'Fortress of solitude', claim: 'By adolescence, emotional isolation has become virtually a rite of passage for boys.', status: 'yellow', type: 'consequence' },
			{ bookId: 'rc', chainId: 'hidden-depression', shortLabel: 'Hidden boy depression', claim: 'Depression in boys often presents as irritability, hostility, or withdrawal — not sadness.', status: 'green', type: 'consequence' },
			{ bookId: 'rc', chainId: 'substance-void', shortLabel: 'Drugs fill emotional void', claim: 'Substance use functions as a rite of passage and self-medication for emotional isolation.', status: 'green', type: 'consequence' },
			{ bookId: 'rc', chainId: 'romantic-sabotage', shortLabel: 'Emotional illiteracy sabotages romance', claim: 'Boys are potentially romantic, but emotional illiteracy sabotages their intimate relationships.', status: 'yellow', type: 'consequence' },
			{ bookId: 'jvh', chainId: 'boys-mask', shortLabel: 'Pseudoresilienz / Maske', claim: 'Boys show "pseudo-resilience" — they appear strong but mask inner struggles.', status: 'red', type: 'observation' },
			{ bookId: 'jvh', chainId: 'trad-masc-harms', shortLabel: 'Masculinity harms boys', claim: 'Traditional masculinity norms measurably harm boys: higher suicide, lower grades, more violence.', status: 'yellow', type: 'consequence' },
			{ bookId: 'wb', chainId: 'feelings-eight-ways', shortLabel: 'Eight male emotional processing methods', claim: 'Boys have eight characteristic methods of processing feelings (action, spatial, object-relational, etc.).', status: 'untestable', type: 'theory' },
			{ bookId: 'pb', chainId: 'emotion-learned', shortLabel: 'Emotional suppression is learned', claim: 'Emotional expression differences are learned, not hard-wired — boys start more emotionally reactive.', status: 'green', type: 'causal' },
		]
	},

	// ─── 7. Fathers, Mentors & Family ───
	{
		id: 'fathers-mentors',
		name: 'Fathers, Mentors & Family Structure',
		description: 'How essential are fathers and male role models for boys\' development? What happens when they\'re absent?',
		fields: ['dev-psych', 'sociology', 'clinical'],
		stanceSummary: 'Gurian and Sax see fathers as irreplaceable. Raising Cain emphasizes the emotional gulf between fathers and sons. Geary frames fatherhood as a cost-benefit trade-off shaped by evolution.',
		claims: [
			{ bookId: 'wb', chainId: 'fathers-essential', shortLabel: 'Fathers and mentors essential', claim: 'Boys cannot become healthy men without male role models, particularly fathers and formal mentors.', status: 'yellow', type: 'causal' },
			{ bookId: 'wb', chainId: 'divorce-delinquency', shortLabel: 'Divorce correlates with delinquency', claim: 'Divorce and single mothering correlate with male delinquency, gangs, and substance abuse.', status: 'yellow', type: 'observation' },
			{ bookId: 'wb', chainId: 'three-families', shortLabel: 'Boys need three families', claim: 'The nuclear family alone cannot raise boys — they need extended family and community mentors.', status: 'yellow', type: 'theory' },
			{ bookId: 'rc', chainId: 'father-son-gulf', shortLabel: 'Father-son emotional gulf', claim: 'An emotional gulf separates most sons from their fathers. Fathers model emotional restraint.', status: 'green', type: 'causal' },
			{ bookId: 'ba', chainId: 'failure-to-launch', shortLabel: 'Failure to launch', claim: 'The "failure to launch" phenomenon — young men living at home, unmotivated — is growing.', status: 'green', type: 'consequence' },
			{ bookId: 'ba', chainId: 'fatherhood-degraded', shortLabel: 'Fatherhood degraded', claim: 'Our culture has degraded fatherhood, undermining a key motivator for young men.', status: 'untestable', type: 'theory' },
			{ bookId: 'mf', chainId: 'fatherhood-tradeoffs', shortLabel: 'Fatherhood as cost-benefit trade-off', claim: 'Men\'s parenting is facultatively expressed: fathers invest more when paternity certainty is high and alternatives are few.', status: 'yellow', type: 'causal' },
			{ bookId: 'jvh', chainId: 'male-teachers', shortLabel: 'More male teachers needed', claim: 'More male educators and teachers as role models. Emotion training in school.', status: 'green', type: 'solution' },
		]
	},

	// ─── 8. Rites of Passage ───
	{
		id: 'rites-of-passage',
		name: 'Rites of Passage & Initiation',
		description: 'Do boys need structured transitions into manhood — or are these prescriptions culturally arbitrary?',
		fields: ['sociology', 'dev-psych'],
		stanceSummary: 'Gurian and Sax strongly advocate for formal rites of passage. Other books don\'t address this or are skeptical.',
		claims: [
			{ bookId: 'wb', chainId: 'initiation-manhood', shortLabel: 'Boys need formal initiation', claim: 'Adolescence should be a "second birth" requiring structured initiation rites and community affirmation.', status: 'untestable', type: 'theory' },
			{ bookId: 'ba', chainId: 'forsaken-gods', shortLabel: 'Forsaken rites of passage', claim: 'Our culture has neglected structured transitions from boyhood to manhood, leaving boys adrift.', status: 'untestable', type: 'theory' },
			{ bookId: 'wb', chainId: 'spiritual-education', shortLabel: 'Boys need spiritual education', claim: 'Boys must be taught spiritual principles as part of their development into manhood.', status: 'untestable', type: 'solution' },
		]
	},

	// ─── 9. Video Games & Technology ───
	{
		id: 'technology-media',
		name: 'Video Games, Social Media & Technology',
		description: 'Do video games and social media cause harm to boys and girls — differently?',
		fields: ['clinical', 'dev-psych', 'epidemiology'],
		stanceSummary: 'Sax sees video games as uniquely harmful to boys and social media to girls. Others don\'t focus on this.',
		claims: [
			{ bookId: 'ba', chainId: 'videogames-will-power', shortLabel: 'Video games hijack will to power', claim: 'Video games hijack boys\' "will to power," redirecting motivation from real-world achievement to virtual worlds.', status: 'untestable', type: 'theory' },
			{ bookId: 'ba', chainId: 'videogames-effects', shortLabel: 'Video game negative effects', claim: 'Violent video games cause measurable negative effects: increased aggression, reduced empathy, academic decline.', status: 'yellow', type: 'observation' },
			{ bookId: 'wgm', chainId: 'social-media-games', shortLabel: 'Social media vs. video games', claim: 'Social media is more toxic for girls (self-objectification); video games are more harmful for boys (displacement of real experience).', status: 'yellow', type: 'causal' },
			{ bookId: 'ba', chainId: 'pornography-replacing', shortLabel: 'Porn replaces real relationships', claim: 'Pornography is replacing real sexual relationships for many young men.', status: 'yellow', type: 'consequence' },
		]
	},

	// ─── 10. Endocrine Disruptors ───
	{
		id: 'endocrine-disruptors',
		name: 'Endocrine Disruptors & Testosterone',
		description: 'Are environmental chemicals feminizing boys and disrupting puberty?',
		fields: ['endocrinology', 'epidemiology'],
		stanceSummary: 'This is primarily a Boys Adrift argument. Other books do not make this claim.',
		claims: [
			{ bookId: 'ba', chainId: 'endocrine-feminizing', shortLabel: 'Endocrine disruptors feminize males', claim: 'Environmental estrogens (phthalates, BPA) are feminizing male animals and potentially human boys.', status: 'yellow', type: 'premise' },
			{ bookId: 'ba', chainId: 'endocrine-puberty', shortLabel: 'Puberty timing disrupted', claim: 'Endocrine disruptors accelerate puberty in girls while delaying it in boys.', status: 'yellow', type: 'causal' },
			{ bookId: 'ba', chainId: 'bones-brittle', shortLabel: 'Boys\' bones more brittle', claim: 'Boys\' bones are becoming more brittle: fracture risk roughly doubled since 1970.', status: 'yellow', type: 'observation' },
			{ bookId: 'ba', chainId: 'testosterone-motivation', shortLabel: 'Testosterone drives male motivation', claim: 'Testosterone fuels motivation and ambition in boys — disruption of testosterone affects drive.', status: 'yellow', type: 'causal' },
		]
	},

	// ─── 11. Evolutionary Mating & Sexual Selection ───
	{
		id: 'sexual-selection',
		name: 'Evolutionary Mating & Sexual Selection',
		description: 'How do evolutionary pressures (parental investment, mate choice, competition) explain sex differences?',
		fields: ['evo-bio', 'endocrinology'],
		stanceSummary: 'Geary provides the most rigorous evolutionary framework. Benenson builds on it for behavioral differences. Gurian uses evolution loosely. Eliot and Hasel do not engage with evolutionary theory.',
		claims: [
			{ bookId: 'mf', chainId: 'sexual-reproduction', shortLabel: 'Why sexual reproduction exists', claim: 'Sexual reproduction evolved to maintain genetic variability (Red Queen, Muller\'s ratchet, Williams\' lottery).', status: 'green', type: 'premise' },
			{ bookId: 'mf', chainId: 'anisogamy', shortLabel: 'Anisogamy: gamete asymmetry', claim: 'Two gamete sizes drive the fundamental sex difference in reproductive strategy.', status: 'green', type: 'premise' },
			{ bookId: 'mf', chainId: 'parental-investment', shortLabel: 'Parental investment theory', claim: 'The sex investing more in offspring becomes the limiting resource; the other sex competes.', status: 'green', type: 'premise' },
			{ bookId: 'mf', chainId: 'female-choice', shortLabel: 'Female choice drives honest signals', claim: 'Female choice drives evolution of honest signals of male quality (ornaments, displays).', status: 'green', type: 'causal' },
			{ bookId: 'mf', chainId: 'mate-preferences', shortLabel: 'Universal mate preferences', claim: 'Women prefer culturally successful men; men prefer youth/attractiveness. Universal across 37 cultures.', status: 'green', type: 'observation' },
			{ bookId: 'mf', chainId: 'male-status-competition', shortLabel: 'Male status competition', claim: 'Men compete for status; high-status men have more wives and children across 33 traditional cultures.', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'warrior-hypothesis', shortLabel: 'Warrior hypothesis', claim: 'Males evolved specialized behaviors for intergroup warfare — play fighting and coalition formation are adaptations.', status: 'yellow', type: 'theory' },
			{ bookId: 'ww', chainId: 'worrier-hypothesis', shortLabel: 'Worrier hypothesis', claim: 'Females evolved self-preservation behaviors because maternal death historically meant child death.', status: 'yellow', type: 'theory' },
			{ bookId: 'mf', chainId: 'ancestral-polygyny', shortLabel: 'Ancestral polygynous mating', claim: 'Human ancestors had a polygynous system with male competition and some paternal investment.', status: 'yellow', type: 'theory' },
		]
	},

	// ─── 12. Group Dynamics & Friendship ───
	{
		id: 'group-dynamics',
		name: 'Group Dynamics & Friendship Styles',
		description: 'Do boys and girls form fundamentally different kinds of friendships and social groups?',
		fields: ['dev-psych', 'evo-bio', 'sociology'],
		stanceSummary: 'Benenson has the most data-driven account. Sax highlights the difference. Raising Cain focuses on the emotional costs. Eliot sees differences as smaller than claimed.',
		claims: [
			{ bookId: 'wgm', chainId: 'friendships-differ', shortLabel: 'Friendship styles differ', claim: 'Girls\' friendships are "face to face" (conversation); boys\' are "shoulder to shoulder" (shared activity).', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'males-larger-groups', shortLabel: 'Males form larger groups', claim: 'Males form larger, more interconnected, hierarchically organized groups. Girls form isolated dyads/cliques.', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'males-cooperate-groups', shortLabel: 'Male group cooperation', claim: 'Males cooperate more effectively in groups and flexibly adjust hierarchies based on expertise.', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'female-friendship-fragile', shortLabel: 'Female friendships fragile', claim: 'Female friendships are more intense but more fragile and vulnerable to disruption by third parties.', status: 'green', type: 'observation' },
			{ bookId: 'ww', chainId: 'females-enforce-equality', shortLabel: 'Females enforce equality', claim: 'Females enforce equality within groups and punish those who stand out or self-promote.', status: 'green', type: 'observation' },
			{ bookId: 'rc', chainId: 'father-son-gulf', shortLabel: 'Father-son emotional gulf', claim: 'An emotional gulf separates most sons from their fathers, modeling emotional restraint.', status: 'green', type: 'causal' },
		]
	},

	// ─── 13. Cognitive Differences (Math, Spatial, Verbal) ───
	{
		id: 'cognitive-differences',
		name: 'Cognitive Differences (Math, Spatial, Verbal)',
		description: 'Are there real cognitive sex differences in math, spatial reasoning, or verbal skills — and what drives them?',
		fields: ['neuroscience', 'education', 'dev-psych'],
		stanceSummary: 'Eliot provides the most nuanced view: differences exist but are smaller and more plastic than claimed. Geary frames them through sexual selection. Sax sees them as biologically meaningful.',
		claims: [
			{ bookId: 'pb', chainId: 'mental-rotation-innate', shortLabel: 'Mental rotation: large but trainable', claim: 'Mental rotation is the largest cognitive sex difference (d=0.9+) but is highly trainable.', status: 'green', type: 'observation' },
			{ bookId: 'pb', chainId: 'math-sat-demographics', shortLabel: 'Math SAT gap largely demographic', claim: 'Males score higher on math SAT, but the gap is largely explained by demographics and sample composition.', status: 'green', type: 'observation' },
			{ bookId: 'pb', chainId: 'stereotype-threat', shortLabel: 'Stereotype threat depresses girls\' math', claim: 'Stereotype threat measurably depresses girls\' math performance in test conditions.', status: 'yellow', type: 'causal' },
			{ bookId: 'mf', chainId: 'folk-psychology', shortLabel: 'Female folk psychology advantage', claim: 'Females show advantages in folk psychological domains (language, empathy, social cognition).', status: 'green', type: 'observation' },
			{ bookId: 'mf', chainId: 'folk-physics', shortLabel: 'Male folk physics advantage', claim: 'Males show advantages in folk physical domains (spatial reasoning, mechanical understanding).', status: 'green', type: 'observation' },
			{ bookId: 'wgm', chainId: 'drawing-visual', shortLabel: 'Drawing / visual preferences', claim: 'Boys draw action scenes with few colors; girls draw people/animals with many colors. Reflects visual system differences.', status: 'green', type: 'observation' },
		]
	},

	// ─── 14. Sexuality & Gender Identity ───
	{
		id: 'sexuality-gender',
		name: 'Sexuality & Gender Identity',
		description: 'How do the books address sexual orientation, gender identity, and transgender desistence?',
		fields: ['dev-psych', 'clinical', 'endocrinology'],
		stanceSummary: 'Sax is the only author who addresses trans desistence and gender-atypical children in detail. His claims are contested. Eliot critiques pop-science gender narratives.',
		claims: [
			{ bookId: 'wgm', chainId: 'orientation-innate', shortLabel: 'Orientation is innate', claim: 'Sexual orientation is largely innate and more genetically determined in males than females.', status: 'green', type: 'observation' },
			{ bookId: 'wgm', chainId: 'gender-atypical', shortLabel: 'Gender-atypical children', claim: '"Anomalous males" (gender-atypical boys) share a trait cluster but are mostly cisgender gay men, not transgender.', status: 'yellow', type: 'observation' },
			{ bookId: 'wgm', chainId: 'trans-desistence', shortLabel: 'Transgender desistence', claim: 'Most children who say they are transgender will desist by adulthood.', status: 'yellow', type: 'consequence' },
			{ bookId: 'wgm', chainId: 'gender-2d', shortLabel: 'Gender is 2D, not 1D', claim: 'Gender is two-dimensional (masculine and feminine are independent axes), not a single spectrum.', status: 'yellow', type: 'theory' },
			{ bookId: 'pb', chainId: 'pop-authors-distort', shortLabel: 'Pop authors distort science', claim: 'Popular authors (Gurian, Sax, Brizendine) systematically distort neuroscience to support gender stereotypes.', status: 'green', type: 'consequence' },
			{ bookId: 'pb', chainId: 'prenatal-t-biases', shortLabel: 'Prenatal T biases, not determines', claim: 'Prenatal testosterone biases but does not determine sex-typed behavior — leaving large room for experience.', status: 'green', type: 'premise' },
		]
	},

	// ─── 15. Solutions & Prescriptions ───
	{
		id: 'solutions',
		name: 'Solutions & Prescriptions',
		description: 'What do the authors recommend we actually do differently?',
		fields: ['education', 'sociology', 'clinical'],
		stanceSummary: 'Recommendations range from gender-conscious parenting (Hasel) to sex-differentiated education (Sax) to emotional literacy training (Kindlon/Thompson) to accepting biological differences (Gurian).',
		claims: [
			{ bookId: 'jvh', chainId: 'parenting-can-fix', shortLabel: 'Gender-conscious parenting', claim: 'Gender-conscious parenting can solve boys\' problems: stereotypes awareness, emotional openness.', status: 'yellow', type: 'solution' },
			{ bookId: 'jvh', chainId: 'caring-masculinity', shortLabel: 'Caring Masculinities', claim: 'The goal: masculinity that replaces dominance with care, engagement, and non-violence.', status: 'untestable', type: 'solution' },
			{ bookId: 'wgm', chainId: 'dare-training', shortLabel: 'Dare training for girls', claim: 'Girls underestimate abilities and would benefit from structured risk-taking ("dare" training).', status: 'yellow', type: 'solution' },
			{ bookId: 'wgm', chainId: 'gentlemen-ladies', shortLabel: '"Ladies and Gentlemen"', claim: 'We must teach boys to be gentlemen and girls to be ladies — embrace healthy sex-differentiated ideals.', status: 'yellow', type: 'solution' },
			{ bookId: 'rc', chainId: 'seven-things', shortLabel: 'Seven things boys need', claim: 'Boys need: emotional permission, emotional literacy, connection, discipline from love, moral guidance, activity, community.', status: 'yellow', type: 'solution' },
			{ bookId: 'wb', chainId: 'discipline-systematic', shortLabel: 'Ten-element discipline system', claim: 'Discipline for boys must be systematic, operating through team and mentors, not just parents.', status: 'yellow', type: 'solution' },
			{ bookId: 'wb', chainId: 'sacred-role-husbandry', shortLabel: '"Husbandry" as sacred male role', claim: 'Boys need a clearly defined male role ("husbandry") to give their lives meaning and purpose.', status: 'untestable', type: 'solution' },
			{ bookId: 'ba', chainId: 'boys-schools-mentoring', shortLabel: 'Boys\' schools and mentoring', claim: 'Consider single-sex education and structured mentoring programs as solutions.', status: 'yellow', type: 'solution' },
			{ bookId: 'pb', chainId: 'neural-plasticity', shortLabel: 'Plasticity amplifies small seeds', claim: 'Neural plasticity is the mechanism — small initial differences are amplified by experience, but also malleable.', status: 'green', type: 'theory' },
		]
	},
];

// ── Helper: get all books that appear in a theme ───────────────

export function getBooksInTheme(theme: ThemeCluster): string[] {
	return [...new Set(theme.claims.map(c => c.bookId))];
}

// ── Helper: get all themes for a book ──────────────────────────

export function getThemesForBook(bookId: string): ThemeCluster[] {
	return themeClusters.filter(t => t.claims.some(c => c.bookId === bookId));
}

// ── Helper: count claims per status ────────────────────────────

export function getStatusCounts(claims: BookClaim[]): Record<string, number> {
	const counts: Record<string, number> = { red: 0, yellow: 0, green: 0, untestable: 0 };
	for (const c of claims) counts[c.status]++;
	return counts;
}
