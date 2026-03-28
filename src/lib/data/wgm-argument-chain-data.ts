// wgm-argument-chain-data.ts
// The argument chain for "Why Gender Matters" (Leonard Sax), with evidence ratings per link.

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
	'sensory-differences':     { x: 12, y: 3, row: 0 },
	'risk-taking':             { x: 42, y: 3, row: 0 },
	'aggression':              { x: 72, y: 3, row: 0 },
	'sensory-education':       { x: 6, y: 16, row: 1 },
	'drawing-visual':          { x: 30, y: 16, row: 1 },
	'stereotypes-reinforced':  { x: 54, y: 16, row: 1 },
	'dare-training':           { x: 78, y: 16, row: 1 },
	'friendships-differ':      { x: 12, y: 30, row: 2 },
	'brain-pace':              { x: 42, y: 30, row: 2 },
	'sex-motivation':          { x: 72, y: 30, row: 2 },
	'adhd-overdiagnosis':      { x: 12, y: 44, row: 3 },
	'hookup-harms':            { x: 42, y: 44, row: 3 },
	'drugs-gender':            { x: 72, y: 44, row: 3 },
	'social-media-games':      { x: 12, y: 57, row: 4 },
	'gender-atypical':         { x: 42, y: 57, row: 4 },
	'orientation-innate':      { x: 72, y: 57, row: 4 },
	'trans-desistence':        { x: 22, y: 70, row: 5 },
	'gender-2d':               { x: 54, y: 70, row: 5 },
	'gentlemen-ladies':        { x: 38, y: 84, row: 6 },
};

export const rowLabels = [
	'Foundational Claims',
	'Educational Implications',
	'Developmental Observations',
	'Causal / Consequence Claims',
	'Domain-Specific Claims',
	'Theoretical Conclusions',
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
		id: 'sensory-differences',
		step: 1,
		type: 'premise',
		claim: 'Sex differences in sensory perception are real and biologically based. Girls and women have measurably different sensory capabilities in smell, hearing, and vision.',
		shortLabel: 'Sensory differences',
		evidence: "Dalton's olfactory study (100,000-fold improvement in women); 16.2M vs. 9.2M olfactory bulb cells; Stevens' n 38-49% higher in women; McGuinness ~8 dB difference; parvocellular/magnocellular visual pathway differences.",
		status: 'green',
		explanation:
			'Multiple peer-reviewed studies across different sensory modalities converge on real, measurable sex differences. ' +
			"The hearing studies (Stevens' Power Law) are replicated across labs. The olfactory bulb cell count is from a well-replicated Brazilian study. " +
			"The visual system differences (parvocellular vs. magnocellular pathways) are established in neuroscience. " +
			"Dalton's specific olfactory sensitivity study is individual and the effect size is extraordinary, which warrants some caution, " +
			'but the broader finding of female olfactory superiority is well-supported.',
		dependsOn: [],
		collapseRisk: 'Low. The sensory evidence is among the strongest in the book. Even critics of sex-difference research generally accept these findings.',
		bookLocations: [
			{ pages: '~p. 12-24', chapter: 'Ch. 2: Smelling, Seeing, Hearing', context: 'Biological sex differences in sensory systems' }
		],
		evidenceRefs: [
			{ label: 'Pamela Dalton (olfactory)', authorSearch: 'Dalton' },
			{ label: 'Stevens Power Law studies', authorSearch: 'Stevens' },
			{ label: 'McGuinness (hearing)', authorSearch: 'McGuinness' }
		]
	},

	// ======== C2 ========
	{
		id: 'sensory-education',
		step: 2,
		type: 'causal',
		claim: 'Because boys hear differently than girls, soft-spoken female teachers may not be heard well by boys, leading to misdiagnosis of ADHD and disengagement from school.',
		shortLabel: 'Sensory gaps in education',
		evidence: "Clinical anecdotes from Sax's practice; hearing threshold research; Stevens' Power Law; Deborah Tannen's linguistic research.",
		status: 'yellow',
		explanation:
			'The hearing science is solid, but the causal link to ADHD overdiagnosis is more speculative. ' +
			"Tannen's research showing gender differences in language use are larger than age differences is peer-reviewed, " +
			"but the specific claim that soft-spoken teachers cause boys' disengagement has not been tested in an RCT. " +
			'The inference is reasonable but not directly proven.',
		dependsOn: ['sensory-differences'],
		collapseRisk: 'Moderate. The sensory data is strong, but the causal leap to educational consequences is not directly tested.',
		bookLocations: [
			{ pages: '~p. 5-6, 17-18', chapter: 'Ch. 2: Smelling, Seeing, Hearing', context: 'Hearing differences and classroom implications' },
			{ pages: '~p. 75-76', chapter: 'Ch. 5: School', context: 'Boys and soft-spoken teachers' }
		],
		evidenceRefs: [
			{ label: 'Deborah Tannen (linguistics)', authorSearch: 'Tannen' },
			{ label: 'Stevens Power Law studies', authorSearch: 'Stevens' }
		]
	},

	// ======== C3 ========
	{
		id: 'drawing-visual',
		step: 3,
		type: 'observation',
		claim: 'Boys typically draw action scenes with few colors; girls draw people/pets/flowers with many colors. These differences are cross-cultural and may reflect parvocellular vs. magnocellular visual pathway differences.',
		shortLabel: 'Drawing / visual preferences',
		evidence: 'Cross-cultural studies of children\'s drawings (Africa, Asia, Europe, North America); research on two visual systems; Andrew Phillips case study.',
		status: 'green',
		explanation:
			'Cross-cultural drawing studies are replicated across multiple continents. The sex difference in drawing content ' +
			'and color use is one of the most robust findings in developmental psychology. The link to visual neuroscience ' +
			'(parvocellular vs. magnocellular pathways) is theoretically plausible but more inferential than directly proven.',
		dependsOn: ['sensory-differences'],
		collapseRisk: 'Low for the observation; moderate for the proposed neurological mechanism.',
		bookLocations: [
			{ pages: '~p. 19-24', chapter: 'Ch. 2: Smelling, Seeing, Hearing', context: 'Cross-cultural drawing differences and visual systems' }
		],
		evidenceRefs: [
			{ label: 'Cross-cultural drawing studies', authorSearch: 'drawing' }
		]
	},

	// ======== C4 ========
	{
		id: 'stereotypes-reinforced',
		step: 4,
		type: 'causal',
		claim: "When teachers don't understand boy/girl differences in drawing, hearing, and learning style, they unintentionally reinforce stereotypes like 'drawing is for girls' and 'physics is for boys.'",
		shortLabel: 'Ignoring differences reinforces stereotypes',
		evidence: 'AP exam participation data (fewer than 1 in 4 Studio Art test-takers are boys; 78% of AP Computer Science are boys); anecdotes from 400+ school visits; Kim Tolley\'s historical research.',
		status: 'yellow',
		explanation:
			'The AP participation data is strong and verifiable. Kim Tolley\'s historical research showing girls outperformed boys ' +
			'in physics in the 1800s is published. However, the causal mechanism (gender-blind teaching causes the participation gaps) ' +
			'is observational and theoretical, not experimentally tested. Many other factors could explain AP participation gaps.',
		dependsOn: ['sensory-differences', 'sensory-education', 'drawing-visual'],
		collapseRisk: 'Moderate. The participation data is real, but the proposed causal explanation is one of several possible explanations.',
		bookLocations: [
			{ pages: '~p. 22-24', chapter: 'Ch. 2: Smelling, Seeing, Hearing', context: '"Drawing is for girls" anecdote' },
			{ pages: '~p. 63-101', chapter: 'Ch. 5: School', context: 'AP exam data, Kim Tolley, school visits' }
		],
		evidenceRefs: [
			{ label: 'AP exam participation data', authorSearch: 'AP exam' },
			{ label: 'Kim Tolley (historical)', authorSearch: 'Tolley' }
		]
	},

	// ======== C5 ========
	{
		id: 'risk-taking',
		step: 5,
		type: 'premise',
		claim: 'Boys are biologically predisposed to greater physical risk-taking. They systematically overestimate their abilities and underestimate risk, as shown by cross-species primate evidence.',
		shortLabel: 'Boys take more risks',
		evidence: "Ring-toss risky shift experiment; Peterson's bicycle simulation (boys slower to brake); drowning statistics (boys 10x more likely to die); Fedigan & Zohar's Japanese macaque study; Morrongiello's interviews with injured children.",
		status: 'green',
		explanation:
			'Multiple studies, cross-species evidence, and epidemiological data converge. The drowning statistics alone (boys 9.8-10.4x more likely to die) ' +
			'are compelling. The Japanese macaque data provides cross-species support for a biological component. ' +
			'The ring-toss experiment is older but the broader finding is well-established.',
		dependsOn: [],
		collapseRisk: 'Low. The sex difference in risk-taking is one of the most robust findings in psychology, supported by both human and primate data.',
		bookLocations: [
			{ pages: '~p. 25-42', chapter: 'Ch. 3: Risk', context: 'Sex differences in risk-taking; ring-toss, drowning, macaques' }
		],
		evidenceRefs: [
			{ label: 'Drowning statistics', authorSearch: 'drowning' },
			{ label: 'Fedigan & Zohar (macaques)', authorSearch: 'Fedigan' },
			{ label: 'Morrongiello', authorSearch: 'Morrongiello' }
		]
	},

	// ======== C6 ========
	{
		id: 'dare-training',
		step: 6,
		type: 'solution',
		claim: 'Girls underestimate their abilities and would benefit from structured "dare training" programs encouraging physical risk-taking (rappelling, rock climbing, etc.).',
		shortLabel: 'Dare training for girls',
		evidence: "Olafsdottir's dare training in Iceland; Lauriston girls' school abseiling in Australia; Babcock's Carnegie Mellon salary negotiation study (7% of women vs. 57% of men negotiated).",
		status: 'yellow',
		explanation:
			'The programs described are individual examples without controlled evaluation. Babcock\'s salary negotiation study is well-cited ' +
			'in economics but subsequent research shows women who negotiate may face social backlash. ' +
			'The idea is plausible and aligns with the risk-taking evidence, but there is limited controlled evidence ' +
			'for "dare training" itself producing lasting changes in girls\' risk assessment.',
		dependsOn: ['risk-taking'],
		collapseRisk: 'Moderate. The recommendation is reasonable but the evidence base for the specific intervention is thin.',
		bookLocations: [
			{ pages: '~p. 32-39', chapter: 'Ch. 3: Risk', context: 'Dare training programs; Babcock salary study' }
		],
		evidenceRefs: [
			{ label: 'Olafsdottir (Iceland)', authorSearch: 'Olafsdottir' },
			{ label: 'Linda Babcock', authorSearch: 'Babcock' }
		]
	},

	// ======== C7 ========
	{
		id: 'aggression',
		step: 7,
		type: 'premise',
		claim: 'Sex differences in aggression are partly innate and serve adaptive functions. Boys engage in physical aggression ~20x more often; rough-and-tumble play serves a developmental function and suppressing it may increase real violence.',
		shortLabel: 'Aggression differences',
		evidence: "Janet Lever's playground studies; Frans de Waal's chimpanzee research; Perry & Perry's interviews; CAH girls showing masculinized toy preferences; primate play-fighting deprivation studies.",
		status: 'green',
		explanation:
			'Multiple studies and cross-species evidence. The CAH studies are some of the strongest evidence in the book: ' +
			'girls with higher prenatal androgen exposure choose more masculine toys, and parental encouragement toward feminine toys had zero effect. ' +
			'The primate evidence (deprivation of play-fighting increases adult violence) is well-established. ' +
			'The 20x figure for physical aggression is well-documented in developmental psychology.',
		dependsOn: [],
		collapseRisk: 'Low. The sex difference in physical aggression and the adaptive function of rough-and-tumble play are well-established across species.',
		bookLocations: [
			{ pages: '~p. 43-62', chapter: 'Ch. 4: Aggression', context: 'Aggression, rough-and-tumble play, CAH studies, primate evidence' }
		],
		evidenceRefs: [
			{ label: 'Janet Lever (playground)', authorSearch: 'Lever' },
			{ label: 'Frans de Waal (chimpanzees)', authorSearch: 'de Waal' },
			{ label: 'CAH studies', authorSearch: 'congenital adrenal hyperplasia' }
		]
	},

	// ======== C8 ========
	{
		id: 'friendships-differ',
		step: 8,
		type: 'observation',
		claim: 'Girls\' friendships are "face to face" (conversation, self-disclosure, equality); boys\' friendships are "shoulder to shoulder" (shared activities, hierarchy acceptable).',
		shortLabel: 'Friendship styles differ',
		evidence: "Deborah Tannen's linguistic research; Shelley Taylor's stress response research; John Bishop's boy-teacher research; historical/literary examples (Gilgamesh & Enkidu, David & Jonathan).",
		status: 'green',
		explanation:
			'Well-established in developmental psychology literature. Tannen\'s linguistic research is widely cited and replicated. ' +
			'Taylor\'s tend-and-befriend stress response in women is well-supported. The historical/literary evidence is illustrative ' +
			'rather than scientific but the core observation about differing friendship structures is mainstream psychology.',
		dependsOn: [],
		collapseRisk: 'Low. The observation is well-replicated, though the degree of difference varies across studies.',
		bookLocations: [
			{ pages: '~p. 69-76', chapter: 'Ch. 5: School', context: 'Face-to-face vs. shoulder-to-shoulder friendship patterns' }
		],
		evidenceRefs: [
			{ label: 'Deborah Tannen (linguistics)', authorSearch: 'Tannen' },
			{ label: 'Shelley Taylor (stress)', authorSearch: 'Taylor' }
		]
	},

	// ======== C9 ========
	{
		id: 'brain-pace',
		step: 9,
		type: 'premise',
		claim: 'Girls\' brains develop faster than boys\', with a gap of roughly 1-4 years. This has major implications for kindergarten readiness and ADHD diagnosis.',
		shortLabel: 'Brain development pace gap',
		evidence: 'Lenroot et al. NIH brain imaging (girls reach inflection ~4 years earlier); Wellesley study (3.5-year-old girls match 5-year-old boys in reading facial expressions); nationwide study (youngest in class 2x more likely diagnosed ADHD).',
		status: 'green',
		explanation:
			'Large NIH longitudinal brain imaging study published in Neuroimage. The finding is robust and widely cited. ' +
			'The nationwide ADHD study showing youngest-in-class children are disproportionately diagnosed is well-replicated ' +
			'across multiple countries. The Wellesley facial expression study adds converging evidence. ' +
			'The exact implications for educational policy, however, are debated.',
		dependsOn: [],
		collapseRisk: 'Low for the developmental fact; moderate for the specific educational policy recommendations derived from it.',
		bookLocations: [
			{ pages: '~p. 78-85', chapter: 'Ch. 5: School', context: 'Brain development timing, neuroimaging evidence' }
		],
		evidenceRefs: [
			{ label: 'Lenroot et al. (NIH)', authorSearch: 'Lenroot' },
			{ label: 'Wellesley College study', authorSearch: 'Wellesley' }
		]
	},

	// ======== C10 ========
	{
		id: 'adhd-overdiagnosis',
		step: 10,
		type: 'causal',
		claim: 'ADHD is overdiagnosed in boys due to developmental mismatch. Many boys labeled ADHD are experiencing a pace-of-development gap, not a disorder. Stimulant medications may shrink the nucleus accumbens and decrease motivation.',
		shortLabel: 'ADHD overdiagnosis',
		evidence: "US vs. UK medication rates; nucleus accumbens research; Sax's clinical anecdotes (Matthew's story); Deborah Stipek's research.",
		status: 'yellow',
		explanation:
			'The overdiagnosis argument is well-supported by the youngest-in-class data and US vs. UK prescription rate comparisons. ' +
			'However, the nucleus accumbens claim is based on emerging research where the causal interpretation is still debated. ' +
			'Sax uses this to argue broadly against ADHD medication, which is a stronger position than the evidence warrants. ' +
			'Many children with genuine ADHD benefit substantially from medication.',
		dependsOn: ['brain-pace'],
		collapseRisk: 'Moderate. The overdiagnosis concern is legitimate, but the anti-medication argument extends beyond the evidence.',
		bookLocations: [
			{ pages: '~p. 85-95', chapter: 'Ch. 5: School', context: 'ADHD overdiagnosis, medication concerns, Matthew case study' }
		],
		evidenceRefs: [
			{ label: 'Deborah Stipek (early failure)', authorSearch: 'Stipek' },
			{ label: 'Nucleus accumbens research', authorSearch: 'nucleus accumbens' }
		]
	},

	// ======== C11 ========
	{
		id: 'sex-motivation',
		step: 11,
		type: 'premise',
		claim: 'Girls and boys experience sexual motivation differently. For most girls, sex is linked to romantic attachment (oxytocin); for most boys, sexual drive is more autonomous (testosterone). This holds regardless of sexual orientation.',
		shortLabel: 'Sexual motivation differs',
		evidence: "Lisa Diamond's research on oxytocin; fMRI studies showing different brain activation during arousal; Baumeister's research; Peplau's research; CDC data.",
		status: 'green',
		explanation:
			'The fMRI studies are replicated across multiple labs: men show more activation in primitive brain areas (amygdala/thalamus), ' +
			'women show more cortical activation. The pattern holds regardless of sexual orientation. ' +
			'The oxytocin/testosterone framework is a simplification of complex neurobiology, but the core sex difference in arousal patterns is well-established.',
		dependsOn: [],
		collapseRisk: 'Low for the core observation. The simplified hormonal framework is more contested than the fMRI data.',
		bookLocations: [
			{ pages: '~p. 102-121', chapter: 'Ch. 6: Sex', context: 'Sex differences in sexual motivation; fMRI data; hormonal frameworks' }
		],
		evidenceRefs: [
			{ label: 'Lisa Diamond (oxytocin)', authorSearch: 'Diamond' },
			{ label: 'fMRI arousal studies', authorSearch: 'fMRI' },
			{ label: 'Baumeister (motivation)', authorSearch: 'Baumeister' }
		]
	},

	// ======== C12 ========
	{
		id: 'hookup-harms',
		step: 12,
		type: 'consequence',
		claim: 'Hookup culture represents a shift from the female to the male paradigm of sexuality and disproportionately harms girls, who are more likely to become depressed after hookups.',
		shortLabel: 'Hookup culture harms girls more',
		evidence: 'Study of 24,000 college students (40% of women achieved orgasm in hookups vs. 80% of men); research showing girls with early sex more likely to become depressed; Furman & Wehner on adolescent relationships.',
		status: 'yellow',
		explanation:
			'Large-sample studies support the depression finding and the orgasm gap in hookups. However, the broader cultural claim ' +
			'(hookup culture as male paradigm displacing female paradigm) is more speculative and normative. ' +
			'Sax acknowledges he cannot point to a decades-long RCT. The causality question (does hookup culture cause depression, ' +
			'or do already-depressed girls participate more?) is not resolved.',
		dependsOn: ['sex-motivation'],
		collapseRisk: 'Moderate. The correlational data is real, but the cultural critique extends well beyond what the studies demonstrate.',
		bookLocations: [
			{ pages: '~p. 115-121', chapter: 'Ch. 6: Sex', context: 'Hookup culture, orgasm gap, depression data' }
		],
		evidenceRefs: [
			{ label: 'Hookup culture study (N=24,000)', authorSearch: 'hookup' },
			{ label: 'Furman & Wehner', authorSearch: 'Furman' }
		]
	},

	// ======== C13 ========
	{
		id: 'drugs-gender',
		step: 13,
		type: 'causal',
		claim: 'Girls and boys use drugs/alcohol for different reasons (girls: stress relief, weight loss; boys: thrill-seeking). Alcohol is more neurotoxic to girls\' developing brains. Different prevention strategies are needed.',
		shortLabel: 'Gendered drug/alcohol risks',
		evidence: 'Survey of 6,748 adolescents; neuroimaging showing girls who drink have smaller prefrontal cortex but boys who drink have slightly larger; school sports decrease girls\' drug use but not boys\'; longitudinal study age 17-29.',
		status: 'yellow',
		explanation:
			'The survey data and neuroimaging studies are peer-reviewed. The differential neurotoxicity finding (alcohol more harmful to female adolescent brains) ' +
			'is notable and published. However, some claims rest on single studies. The recommendation for different prevention strategies ' +
			'is reasonable but not yet tested in controlled trials comparing gender-specific vs. generic programs.',
		dependsOn: ['risk-taking', 'sex-motivation'],
		collapseRisk: 'Moderate. The differential risk finding is real but the prescriptive leap to separate prevention programs is not yet evidence-based.',
		bookLocations: [
			{ pages: '~p. 122-146', chapter: 'Ch. 7: Drugs and Alcohol', context: 'Gender differences in substance use reasons and brain effects' }
		],
		evidenceRefs: [
			{ label: 'Adolescent substance survey (N=6,748)', authorSearch: 'substance' },
			{ label: 'Prefrontal cortex / alcohol studies', authorSearch: 'prefrontal' }
		]
	},

	// ======== C14 ========
	{
		id: 'social-media-games',
		step: 14,
		type: 'causal',
		claim: 'Social media is more toxic for girls (self-objectification, comparison, depression); video games are more problematic for boys (displacement of real-world activities, desensitization).',
		shortLabel: 'Social media vs. video games',
		evidence: "Instagram selfie culture research; social media/depression correlation (larger for girls); Craig Anderson's video game meta-analyses; Supreme Court ruling (Brown v. EMA).",
		status: 'yellow',
		explanation:
			'The social media/depression link is well-documented and the gender asymmetry (larger effects for girls) is replicated. ' +
			'The video game/violence link is more contested: Anderson\'s meta-analyses are rigorous, but Ferguson and others ' +
			'have published competing meta-analyses showing smaller or null effects. The APA (2020) acknowledged a link to aggression ' +
			'but not to criminal violence. Sax presents Anderson\'s position as settled science; it is not.',
		dependsOn: ['risk-taking', 'sex-motivation'],
		collapseRisk: 'The social media side is fairly solid. The video game side is contested and should be presented as debated rather than settled.',
		bookLocations: [
			{ pages: '~p. 147-171', chapter: 'Ch. 8: Social Media and Video Games', context: 'Gender-differentiated media effects' }
		],
		evidenceRefs: [
			{ label: 'Craig Anderson (video games)', authorSearch: 'Anderson' },
			{ label: 'Social media / depression studies', authorSearch: 'social media depression' }
		]
	},

	// ======== C15 ========
	{
		id: 'gender-atypical',
		step: 15,
		type: 'observation',
		claim: '"Anomalous males" (gender-atypical boys) share a trait cluster (narrow face, allergies, dislike of rough play, precocious language) that may be genetically programmed via androgen receptor CAG repeats. Gender-atypical girls (tomboys) do not show a corresponding cluster and have better social outcomes.',
		shortLabel: 'Gender-atypical children',
		evidence: "Jerome Kagan's longitudinal studies; Patricia Cayo Sexton's research; NASA astronaut blood pressure study; androgen receptor CAG repeat research; Auburn University color discrimination study.",
		status: 'yellow',
		explanation:
			"Kagan's work on reactive infants is well-regarded. The CAG repeat research is growing but not yet definitive " +
			'for behavioral outcomes. The NASA astronaut study is small. The Auburn color discrimination study (tomboys perform like girly girls, ' +
			'not like boys) is interesting but individual. The overall picture is plausible but the CAG repeat mechanism ' +
			'is still emerging science.',
		dependsOn: ['aggression'],
		collapseRisk: 'Moderate. The observation of gender-atypical clusters is reasonable, but the proposed genetic mechanism is not yet definitive.',
		bookLocations: [
			{ pages: '~p. 172-196', chapter: 'Ch. 9: Gender Nonconforming', context: 'Anomalous males, tomboys, CAG repeats, Kagan' }
		],
		evidenceRefs: [
			{ label: 'Jerome Kagan (temperament)', authorSearch: 'Kagan' },
			{ label: 'CAG repeat research', authorSearch: 'CAG' }
		]
	},

	// ======== C16 ========
	{
		id: 'orientation-innate',
		step: 16,
		type: 'observation',
		claim: 'Sexual orientation is largely innate and more genetically determined in men than women. The fraternal birth order effect points to a biological mechanism. Women\'s sexuality is more fluid.',
		shortLabel: 'Orientation is innate',
		evidence: "Bailey's twin studies (52% concordance identical twins, first study; ~25% in larger); Blanchard's fraternal birth order; Diamond's research on female fluidity; plethysmograph studies.",
		status: 'green',
		explanation:
			'Large, well-conducted twin studies. The fraternal birth order effect is well-replicated. ' +
			"Diamond's research on female sexual fluidity is influential and well-cited. " +
			'The finding that genetic factors play a larger role in male than female homosexuality is well-supported. ' +
			'This is one of the stronger evidence sections in the book.',
		dependsOn: ['sex-motivation'],
		collapseRisk: 'Low. This is well-established science.',
		bookLocations: [
			{ pages: '~p. 197-224', chapter: 'Ch. 10: Lesbian, Gay, Bisexual', context: 'Twin studies, fraternal birth order, female fluidity' }
		],
		evidenceRefs: [
			{ label: 'Bailey (twin studies)', authorSearch: 'Bailey' },
			{ label: 'Blanchard (birth order)', authorSearch: 'Blanchard' },
			{ label: 'Lisa Diamond (fluidity)', authorSearch: 'Diamond' }
		]
	},

	// ======== C17 ========
	{
		id: 'trans-desistence',
		step: 17,
		type: 'consequence',
		claim: 'Most children who say they are transgender will desist by adulthood (88% in the largest study). Rushing to transition young children with hormones and social transition may not be in their best interest.',
		shortLabel: 'Transgender desistence',
		evidence: 'Study of 139 boys (12% persisted); Dutch study (29% MtF, 50% FtM persistence); David Reimer case; Reiner cloacal exstrophy study; Swedish post-surgery follow-up (19x suicide risk); Dr. Kenneth Zucker.',
		status: 'yellow',
		explanation:
			'Multiple longitudinal studies support the desistence finding, but critics raise legitimate methodological concerns: ' +
			'(a) older diagnostic criteria differ from DSM-5; (b) some participants may have been gender-nonconforming, not transgender; ' +
			'(c) studies predate social transition. The Swedish study (Dhejne et al.) is well-conducted but the authors themselves state it ' +
			'should not be interpreted as evidence against surgery (comparison is general population, not untreated transgender individuals). ' +
			'Sax omits this crucial caveat.',
		dependsOn: ['gender-atypical', 'orientation-innate'],
		collapseRisk: 'High. This is one of the most contested areas. The evidence supports caution but the debate is active and evolving. Sax\'s confident prescriptive stance exceeds the evidence.',
		bookLocations: [
			{ pages: '~p. 226-257', chapter: 'Ch. 11: Intersex and Transgender', context: 'Desistence data, Reimer case, Zucker, Swedish follow-up' }
		],
		evidenceRefs: [
			{ label: 'Desistence study (N=139)', authorSearch: 'desistence' },
			{ label: 'Dhejne et al. (Swedish)', authorSearch: 'Dhejne' },
			{ label: 'William Reiner (cloacal)', authorSearch: 'Reiner' },
			{ label: 'Kenneth Zucker', authorSearch: 'Zucker' }
		]
	},

	// ======== C18 ========
	{
		id: 'gender-2d',
		step: 18,
		type: 'theory',
		claim: 'Gender is two-dimensional, not one-dimensional. A person can be high on both masculinity and femininity (androgynous), low on both, or high on one. The either/or framework contributes to confusion and the explosion of transgender identification.',
		shortLabel: 'Gender is 2D, not 1D',
		evidence: "Research showing gender-typical children have higher self-worth and lower anxiety than gender-atypical children (contra Sandra Bem); empirical studies critiquing Bem's framework.",
		status: 'yellow',
		explanation:
			'The studies contradicting Bem (showing gender-typical children do better, not androgynous ones) are published ' +
			'and replicated. The two-dimensional model of gender is a reasonable theoretical framework. However, the link ' +
			'between the one-dimensional model and the "explosion of transgender identification" is speculative and not empirically tested. ' +
			'This mixes a defensible theoretical point with an unsubstantiated causal claim.',
		dependsOn: ['gender-atypical', 'trans-desistence'],
		collapseRisk: 'The 2D model is defensible. The causal claim about transgender identification is speculative and risks being unfalsifiable.',
		bookLocations: [
			{ pages: '~p. 273-276', chapter: 'Ch. 12: The Male/Female Mistake', context: 'Two-dimensional gender model, critique of Bem' }
		],
		evidenceRefs: [
			{ label: 'Anti-Bem studies', authorSearch: 'Bem' },
			{ label: 'Gender typicality / self-worth research', authorSearch: 'gender typical' }
		]
	},

	// ======== C19 ========
	{
		id: 'gentlemen-ladies',
		step: 19,
		type: 'solution',
		claim: 'We must teach boys to be gentlemen and girls to be ladies -- updated for the 21st century. The abandonment of gender-specific moral instruction has produced a culture devoid of respect, not the gender-neutral utopia promised.',
		shortLabel: '"Ladies and Gentlemen"',
		evidence: "Steubenville rape case; Avon Old Farms boys' school anecdote; University School babysitting class; Gilmore's cross-cultural manhood rituals research; Lynn Messina's NYT column.",
		status: 'yellow',
		explanation:
			'This is the weakest evidential section. The supporting evidence consists of anecdotes (Steubenville, Avon Old Farms), ' +
			"one cross-cultural anthropological study (Gilmore), and cultural critique. There is no controlled evidence that " +
			'"gentleman instruction" prevents assault or that gender-specific moral education produces better outcomes than gender-neutral moral education. ' +
			'The prescriptive claims are heavily value-laden and presented as flowing from the science, when they actually involve ' +
			'additional normative judgments that go beyond the empirical findings.',
		dependsOn: ['stereotypes-reinforced', 'risk-taking', 'aggression', 'sex-motivation'],
		collapseRisk: 'High. The cultural prescriptions are the furthest from the empirical evidence. Reasonable people can accept all the science and reject the normative conclusions.',
		bookLocations: [
			{ pages: '~p. 257-290', chapter: 'Ch. 12: The Male/Female Mistake', context: 'Gentleman/lady instruction, Steubenville, Avon Old Farms, Gilmore' }
		],
		evidenceRefs: [
			{ label: 'Gilmore (cross-cultural)', authorSearch: 'Gilmore' },
			{ label: 'Steubenville case', authorSearch: 'Steubenville' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	// Start from 'gentlemen-ladies' (the final prescriptive synthesis) and trace back through weakest dependencies
	const target = chain.find((c) => c.id === 'gentlemen-ladies')!;
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
		'The argument chain is strongest at its empirical foundations: sensory differences (hearing, smell, vision), ' +
		'brain development timing, risk-taking, aggression, and sexual orientation research are all well-supported. ' +
		'The chain weakens as it moves from description to prescription. The causal claims (sensory gaps cause educational failure, ' +
		'hookup culture harms girls, ADHD is overdiagnosed) are plausible but extend beyond what the evidence strictly demonstrates. ' +
		'The weakest links are the final prescriptive claims: "dare training" for girls, gender-specific moral instruction ' +
		'("ladies and gentlemen"), and the transgender desistence/caution argument, where Sax selectively cites evidence and omits ' +
		'important caveats. The book is most valuable as a synthesis of sex-difference research across many domains; ' +
		'it is least reliable when it moves from describing differences to prescribing specific cultural remedies.'
};
