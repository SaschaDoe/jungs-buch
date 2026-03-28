// rc-argument-chain-data.ts
// The argument chain for "Raising Cain" (Kindlon & Thompson), with evidence ratings per link.

export interface ChainLink {
	id: string;
	label: string;
	claim: string;
	type: 'premise' | 'observation' | 'causal' | 'theory' | 'consequence' | 'solution';
	evidence: string;
	strength: 'red' | 'yellow' | 'green' | 'untestable';
	dependencies: string[];
	chapter: string;
	pages: string;
	evidenceRefs: EvidenceRef[];
}

export interface EvidenceRef {
	label: string;
	authorSearch: string;
}

/** Node positions for flowchart layout (x/y as percentages of container) */
export const nodePositions: Record<string, { x: number; y: number; row: number }> = {
	'emotional-potential':       { x: 20, y: 3, row: 0 },
	'biology-not-destiny':       { x: 60, y: 3, row: 0 },
	'school-mismatch':           { x: 12, y: 16, row: 1 },
	'harsh-discipline':          { x: 50, y: 16, row: 1 },
	'culture-of-cruelty':        { x: 88, y: 16, row: 1 },
	'father-son-gulf':           { x: 25, y: 30, row: 2 },
	'mother-son-bond':           { x: 65, y: 30, row: 2 },
	'emotional-isolation':       { x: 20, y: 44, row: 3 },
	'hidden-depression':         { x: 55, y: 44, row: 3 },
	'substance-void':            { x: 88, y: 44, row: 3 },
	'romantic-sabotage':         { x: 20, y: 58, row: 4 },
	'reactive-violence':         { x: 55, y: 58, row: 4 },
	'seven-things':              { x: 40, y: 74, row: 5 },
};

export const rowLabels = [
	'Foundational Claims',
	'Institutional & Peer Miseducation',
	'Parental Relationships',
	'Consequences I: Isolation & Depression',
	'Consequences II: Relationships & Violence',
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
		id: 'emotional-potential',
		label: 'Boys born emotionally capable',
		claim:
			'All boys are born with the capacity for a full range of emotional experience; newborn boys are actually more emotionally reactive than girls (cry more when frustrated). But through cultural training, boys become less emotionally expressive over time.',
		type: 'premise',
		evidence:
			'Research showing newborn boys cry more than girls when frustrated; Leslie Brody\'s meta-analytic finding of a developmental shift in which males become less facially expressive with age while females become more so; Fabes & Eisenberg study showing boys more stressed by baby crying turned off speaker or acted aggressively rather than comforting.',
		strength: 'green',
		dependencies: [],
		chapter: 'Ch. 1: The Road Not Taken',
		pages: 'pp. 9-11',
		evidenceRefs: [
			{ label: 'Brody (1996) meta-analytic review', authorSearch: 'Brody' },
			{ label: 'Fabes & Eisenberg (1994)', authorSearch: 'Fabes' }
		]
	},

	// ======== C2 ========
	{
		id: 'biology-not-destiny',
		label: 'Biology does not destiny violence',
		claim:
			'Testosterone does not cause aggression in preadolescent/early adolescent boys; the two clear biological differences (girls\' faster verbal development and boys\' higher activity level) do not explain the full scope of emotional miseducation. Nature and nurture are inextricably linked.',
		type: 'premise',
		evidence:
			'Review showing no association between testosterone and aggression in preadolescent/early adolescent boys; Bronx Children\'s Psychiatric Center study finding violent boys had normal testosterone; anthropological evidence from Semoi of Malaysia and Hutterite Brethren (peaceful societies with no male violence); testosterone levels fluctuate with experience (winners vs. losers).',
		strength: 'green',
		dependencies: ['emotional-potential'],
		chapter: 'Ch. 1: The Road Not Taken',
		pages: 'pp. 11-16',
		evidenceRefs: [
			{ label: 'Constantino et al. (1993), Bronx study', authorSearch: 'Constantino' },
			{ label: 'Semoi / Hutterite peaceful societies', authorSearch: 'Semoi' }
		]
	},

	// ======== C3 ========
	{
		id: 'school-mismatch',
		label: 'Schools disadvantage boys',
		claim:
			'The early school environment is essentially feminine -- emphasizing reading, writing, verbal skills, sitting still -- and boys\' slower maturation in verbal/language skills plus higher activity levels put them at a structural disadvantage. Many boys\' learning disabilities are artifacts of developmental timing rather than genuine impairment.',
		type: 'causal',
		evidence:
			'Girls mature cognitively earlier; 60-80% of learning disabilities diagnosed in boys; boys 4x more likely referred to school psychologist; 2-4x as many boys diagnosed ADHD; Ritalin prescriptions tripled 1990-1995 (over 1 million boys); Rosenthal\'s Pygmalion expectation studies; case studies (Alan, Joe, Christopher in kindergarten).',
		strength: 'green',
		dependencies: ['biology-not-destiny'],
		chapter: 'Ch. 2: Thorns among Roses',
		pages: 'pp. 20-50',
		evidenceRefs: [
			{ label: 'Tennessee study (N=8,258)', authorSearch: 'Tennessee' },
			{ label: 'CDC Ritalin data', authorSearch: 'Ritalin' },
			{ label: 'Rosenthal & Jacobson (Pygmalion)', authorSearch: 'Rosenthal' }
		]
	},

	// ======== C4 ========
	{
		id: 'harsh-discipline',
		label: 'Harsh discipline produces anger',
		claim:
			'Boys receive harsher discipline than girls at every stage -- from family to school to justice system. This harsh treatment (physical and verbal) does not build character; instead it produces shame, anger, weak conscience, and retaliation. It teaches boys that discipline is external force rather than internal moral compass.',
		type: 'causal',
		evidence:
			'Justice Dept statistics (men 20x more likely to receive death penalty); boys 1.5x more likely detained for same drug offense; corporal punishment gender ratios (6 white boys hit for every 1 white girl; 8 Asian boys for 1 Asian girl); Ontario survey (boys 50% more likely physically abused); research on spanking producing more aggressive kindergartners; episodic vs. semantic memory theory of why harsh discipline fails.',
		strength: 'green',
		dependencies: ['emotional-potential'],
		chapter: 'Ch. 3: The High Cost of Harsh Discipline',
		pages: 'pp. 51-71',
		evidenceRefs: [
			{ label: 'U.S. Office for Education Civil Rights data', authorSearch: 'Civil Rights' },
			{ label: 'MacMillan et al. (1997), JAMA Ontario survey', authorSearch: 'MacMillan' },
			{ label: 'Strassberg et al. (1994), spanking study', authorSearch: 'Strassberg' }
		]
	},

	// ======== C5 ========
	{
		id: 'culture-of-cruelty',
		label: 'Adolescent culture of cruelty',
		claim:
			'Beginning around age 10, boys enter a peer culture characterized by continuous psychological warfare -- teasing, domination, humiliation, betrayal of friendships -- driven by the need to prove masculinity ("the Big Impossible"). This culture imposes a code of silence that prevents boys from seeking help and teaches them that vulnerability equals weakness.',
		type: 'observation',
		evidence:
			'Extensive clinical vignettes (boarding school pranks, locker room cruelty, lacrosse team forcing small boys to fight); David Gilmore\'s anthropological work on "Manhood in the Making"; case studies (Bobby\'s lasting body-image damage, Gary\'s betrayal by friend Lee, Steven\'s bus torment, Connor\'s "Red Ranger" teasing); National Survey of Adolescent Males linking masculinity ideology to risky behavior.',
		strength: 'yellow',
		dependencies: ['emotional-potential', 'harsh-discipline'],
		chapter: 'Ch. 4: The Culture of Cruelty',
		pages: 'pp. 72-93',
		evidenceRefs: [
			{ label: 'Gilmore, "Manhood in the Making"', authorSearch: 'Gilmore' },
			{ label: 'National Survey of Adolescent Males (Pleck)', authorSearch: 'Pleck' }
		]
	},

	// ======== C6 ========
	{
		id: 'father-son-gulf',
		label: 'Father-son emotional gulf',
		claim:
			'An emotional gulf separates most sons from their fathers. Fathers tend toward competition, criticism, and control rather than emotional connection. Yet research shows father involvement is the single most powerful factor in developing empathy and preventing delinquency.',
		type: 'causal',
		evidence:
			'26-year longitudinal study showing father involvement was more important than all maternal factors for empathy at age 31; Greg Duncan\'s 27-year study showing father PTA attendance most predictive of child\'s income at 27; National Survey of Children (584 families, 11 years) showing emotionally close fathers reduced delinquency; "beeper study" showing fathers and sons had completely different accounts 50% of the time; survey of 300 corporate men wishing for closer fathers.',
		strength: 'green',
		dependencies: ['emotional-potential'],
		chapter: 'Ch. 5: Fathers and Sons',
		pages: 'pp. 94-114',
		evidenceRefs: [
			{ label: 'Koestner, Franz & Weinberger (1990), 26-year study', authorSearch: 'Koestner' },
			{ label: 'Duncan 27-year panel study', authorSearch: 'Duncan' },
			{ label: 'Larson & Richards, "Divergent Realities"', authorSearch: 'Larson' }
		]
	},

	// ======== C7 ========
	{
		id: 'emotional-isolation',
		label: 'Fortress of solitude',
		claim:
			'By adolescence, emotional isolation has become virtually a reflex. Boys retreat into a "fortress of solitude," choosing hiding over vulnerability. This withdrawal -- whether manifesting as stoicism, sarcasm, hostility, or simple silence -- blocks emotional growth and can spiral into depression.',
		type: 'consequence',
		evidence:
			'Extensive case studies (Martin\'s attic retreat into pornography; Tony\'s prison-escape story revealing feeling "locked away"; Danny\'s hidden shame about hockey tryouts; Ascher and Ken\'s offensive-as-defense strategy; Foster\'s therapy journey). The grandmother of a boy who killed 5 family members describes him as "just like any other boy his age... quiet, stayed in his room."',
		strength: 'yellow',
		dependencies: ['emotional-potential', 'harsh-discipline', 'culture-of-cruelty', 'father-son-gulf'],
		chapter: 'Ch. 7: Inside the Fortress of Solitude',
		pages: 'pp. 142-157',
		evidenceRefs: [
			{ label: 'Clinical case studies (multiple)', authorSearch: 'fortress' }
		]
	},

	// ======== C8 ========
	{
		id: 'hidden-depression',
		label: 'Hidden boy depression',
		claim:
			'Depression in boys often presents as irritability, hostility, defiance, or withdrawal rather than sadness -- and these are accepted as "normal for boys." Suicide rates have tripled since 1950, with boys accounting for 80-86% of adolescent suicides.',
		type: 'consequence',
		evidence:
			'Suicide statistics (tripled since 1950; boys = 86% of older teen suicides; 1,625 of 1,890 annual teen suicides are boys); 14% of 15-year-old boys affirm suicidal ideation on any given day; depression prevalence ~2% children, ~7% adolescents; average major depressive episode lasts 8 months; case studies (Loren, Werther, Jody, Daryl, Keith, Jihan).',
		strength: 'green',
		dependencies: ['emotional-potential', 'culture-of-cruelty', 'father-son-gulf', 'emotional-isolation'],
		chapter: 'Ch. 8: Boys\' Struggle with Depression and Suicide',
		pages: 'pp. 158-175',
		evidenceRefs: [
			{ label: 'National Center for Health Statistics', authorSearch: 'suicide' },
			{ label: 'Reinherz et al. (1995), JAACAP', authorSearch: 'Reinherz' }
		]
	},

	// ======== C9 ========
	{
		id: 'substance-void',
		label: 'Drugs fill emotional void',
		claim:
			'Substance use functions as a rite of passage proving masculinity, an anxiety reducer, and a substitute for genuine emotional connection. Drinking allows boys to bypass their trained-in stoicism and briefly experience closeness. But it arrests emotional development.',
		type: 'consequence',
		evidence:
			'Statistics (2/3 of male seniors drunk; 40% drunk in past month; 7% smoke pot daily; male drug use 1.5-2.5x female; 4/10 senior boys drove under influence); pharmacological explanation (ethanol\'s anxiolytic effects; endogenous opiate system connection to attachment); case studies (Ted, Eric, Randy/Devin/Tan).',
		strength: 'green',
		dependencies: ['emotional-potential', 'culture-of-cruelty', 'emotional-isolation'],
		chapter: 'Ch. 9: Drinking and Drugs',
		pages: 'pp. 176-192',
		evidenceRefs: [
			{ label: 'Johnston et al., Monitoring the Future', authorSearch: 'Johnston' },
			{ label: 'Pharmacological mechanism (ethanol/GABA)', authorSearch: 'ethanol' }
		]
	},

	// ======== C10 ========
	{
		id: 'romantic-sabotage',
		label: 'Emotional illiteracy sabotages romance',
		claim:
			'Boys are potentially romantic and loving, but three forces collide: desire for love, strong sexual impulses, and pressure to be "manly" (invulnerable). The culture of cruelty\'s demand for dominance, combined with performance anxiety and lack of empathy training, pushes many boys toward exploitative or emotionally shallow sexual behavior.',
		type: 'consequence',
		evidence:
			'Jonathon\'s detailed sexual autobiography; Jerry\'s story of first love, betrayal, and emotional shutdown; Lefkowitz\'s "Our Guys" (Glen Ridge gang rape case) as extreme end; National Survey of Adolescent Males linking masculinity ideology to unprotected sex and coercion.',
		strength: 'yellow',
		dependencies: ['emotional-potential', 'culture-of-cruelty', 'emotional-isolation'],
		chapter: 'Ch. 10: Romancing the Stone',
		pages: 'pp. 193-217',
		evidenceRefs: [
			{ label: 'National Survey of Adolescent Males (Pleck)', authorSearch: 'Pleck' },
			{ label: 'Lefkowitz, "Our Guys" (1997)', authorSearch: 'Lefkowitz' }
		]
	},

	// ======== C11 ========
	{
		id: 'reactive-violence',
		label: 'Violence is reactive, not predatory',
		claim:
			'Most boy aggression is defensive -- a reaction to perceived threat, frustration, or emotional pain. Boys see the world as more threatening than it is because they must defend an impossible masculine self-image, the culture of cruelty teaches them to expect hostility, and emotional illiteracy makes them misread social cues.',
		type: 'causal',
		evidence:
			'Ken Dodge\'s videotape studies showing aggressive boys attribute hostile intent to ambiguous situations; Tremblay\'s longitudinal finding that aggressive 13-year-olds had lower testosterone than popular nonaggressive leaders; Kleinfelter\'s syndrome boys (testosterone-deficient) being more aggressive due to shame; verbal ability-delinquency connection confirmed by meta-analytic review; case studies (Leif, Seth, Dale).',
		strength: 'green',
		dependencies: ['emotional-potential', 'biology-not-destiny', 'culture-of-cruelty', 'harsh-discipline', 'emotional-isolation'],
		chapter: 'Ch. 11: Anger and Violence',
		pages: 'pp. 218-237',
		evidenceRefs: [
			{ label: 'Ken Dodge et al. (1986, 1987)', authorSearch: 'Dodge' },
			{ label: 'Tremblay et al. (1997)', authorSearch: 'Tremblay' },
			{ label: 'Moffitt (1990), verbal-delinquency review', authorSearch: 'Moffitt' }
		]
	},

	// ======== C12 ========
	{
		id: 'seven-things',
		label: 'Seven things boys need',
		claim:
			'Boys need: (1) Permission for an internal life and emotional vocabulary; (2) Recognition of high activity level and safe spaces; (3) Communication in "boy language" -- direct, consultative, problem-solving; (4) Models of emotional courage, not just physical bravery; (5) Discipline that builds character and conscience, not enemies; (6) Models of manhood featuring emotional attachment; (7) Exposure to many ways of being a man.',
		type: 'solution',
		evidence:
			'Case examples (football coach declaring "my job is to love you"; Franciscan monk captivating boys\' assembly; Casey Johnson\'s soccer goalie essay; Alex\'s graduation speech about kind headmaster; Charlie\'s tornado fears comforted by father); Anne Roche Muggeridge\'s "Boys Should Be Boys" essay; Montessori school jump-rope policy; community service programs teaching empathy.',
		strength: 'yellow',
		dependencies: ['emotional-potential', 'school-mismatch', 'harsh-discipline', 'culture-of-cruelty', 'father-son-gulf', 'emotional-isolation', 'hidden-depression', 'substance-void', 'romantic-sabotage', 'reactive-violence'],
		chapter: 'Ch. 12: What Boys Need',
		pages: 'pp. 239-258',
		evidenceRefs: [
			{ label: 'Clinical recommendations (Kindlon & Thompson)', authorSearch: 'Kindlon' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'seven-things')!;
	const path: ChainLink[] = [target];

	function findWeakestDep(link: ChainLink): ChainLink | null {
		if (link.dependencies.length === 0) return null;
		const deps = link.dependencies.map((id) => chain.find((c) => c.id === id)!);
		const order = { red: 0, yellow: 1, untestable: 2, green: 3 };
		deps.sort((a, b) => order[a.strength] - order[b.strength]);
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
	red: chain.filter((c) => c.strength === 'red').length,
	yellow: chain.filter((c) => c.strength === 'yellow').length,
	green: chain.filter((c) => c.strength === 'green').length,
	untestable: chain.filter((c) => c.strength === 'untestable').length,
	verdict:
		'The argument chain for "Raising Cain" is remarkably strong at its empirical foundations. ' +
		'Of 12 links, 8 are rated green (solidly supported), 4 are yellow (contested or primarily anecdotal), and none are red or untestable. ' +
		'The foundational claims (C1-C2) rest on replicated developmental psychology and converging debunking of biological determinism. ' +
		'The institutional critique (C3: school mismatch) and discipline analysis (C4) draw on large-scale epidemiological data. ' +
		'The father-son chapter (C6) is anchored by landmark longitudinal studies with 26- and 27-year follow-ups. ' +
		'The depression (C8) and substance use (C9) chapters rely on robust national health statistics. ' +
		'The violence chapter (C11) draws on Dodge\'s well-replicated experimental work. ' +
		'The chain weakens at three points: the culture of cruelty chapter (C5) is heavily anecdotal despite one strong survey; ' +
		'the emotional isolation chapter (C7) relies almost entirely on clinical case studies; and the romantic relationships chapter (C10) ' +
		'mixes one good survey with journalistic case work. The prescriptive chapter (C12) offers clinical wisdom grounded in the preceding ' +
		'analysis but lacks tested interventions. The book\'s most significant structural weakness is that most of its causal mechanisms ' +
		'are inferred from clinical observation rather than experimentally demonstrated, and its evidence base is drawn narrowly from ' +
		'white, affluent, private-school boys in the Boston area.'
};
