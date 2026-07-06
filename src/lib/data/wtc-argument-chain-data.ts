// wtc-argument-chain-data.ts
// Argument chain for bell hooks, "The Will to Change: Men, Masculinity, and Love" (Atria Books, 2004)

export interface ChainLink {
	id: string;
	step: number;
	type: 'premise' | 'observation' | 'causal' | 'theory' | 'consequence' | 'solution';
	claim: string;
	shortLabel: string;
	evidence: string;
	status: 'red' | 'yellow' | 'green' | 'untestable';
	explanation: string;
	dependsOn: string[];
	collapseRisk: string;
	bookLocations: BookLocation[];
	evidenceRefs: EvidenceRef[];
}

export interface EvidenceRef {
	label: string;
	authorSearch: string;
}

export interface BookLocation {
	pages: string;
	chapter: string;
	context: string;
}

/** Node positions for flowchart layout (x/y as percentages of container) */
export const nodePositions: Record<string, { x: number; y: number; row: number }> = {
	'boys-expressive':           { x: 20, y: 3, row: 0 },
	'patriarchy-defined':        { x: 60, y: 3, row: 0 },
	'crisis-patriarchal-masc':   { x: 20, y: 18, row: 1 },
	'normal-traumatization':     { x: 60, y: 18, row: 1 },
	'mask-of-masculinity':       { x: 20, y: 34, row: 2 },
	'maternal-sadism':           { x: 55, y: 34, row: 2 },
	'disconnection-is-masc':     { x: 85, y: 34, row: 2 },
	'sex-addiction':             { x: 15, y: 50, row: 3 },
	'work-as-flight':            { x: 45, y: 50, row: 3 },
	'mens-movement-failure':     { x: 80, y: 50, row: 3 },
	'maleness-as-being':         { x: 30, y: 66, row: 4 },
	'love-ethic':                { x: 65, y: 66, row: 4 },
	'communities-of-resistance': { x: 50, y: 84, row: 5 },
};

export const rowLabels = [
	'Foundational premises',
	'The patriarchal injury',
	'The mechanisms of damage',
	'Downstream manifestations',
	'Normative reconstruction',
	'Political horizon'
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
	// ======== Step 1 ========
	{
		id: 'boys-expressive',
		step: 1,
		shortLabel: 'Male infants are MORE emotionally expressive',
		type: 'premise',
		claim:
			'"Contrary to sexist mythology, in the real world of male and female babies, male babies express themselves more. They cry longer and louder. They come into the world wanting to be seen and heard." Male infants are born with greater emotional expressiveness than female infants — any later "stoicism" cannot be biologically given.',
		evidence:
			'hooks imports this finding from developmental-psychology literature, citing Kindlon & Thompson\'s Raising Cain and the same research tradition Pollack uses (Malatesta & Haviland, Brody, Fivush). She does not engage with the empirical literature directly but uses the finding as anti-essentialist anchor.',
		status: 'green',
		explanation:
			'The underlying developmental psychology is solid and independently replicated (multiple labs at Rutgers, BU, Emory). hooks is borrowing it from Pollack, Kindlon & Thompson, and Eliot\'s tradition. The claim is the empirical foundation of her entire anti-essentialist position: if boys START more expressive, then masculine "stoicism" is culturally imposed.',
		dependsOn: [],
		collapseRisk:
			'If boys were actually born with less emotional expressiveness, hooks\'s entire "patriarchy damages boys" thesis would need reformulation. But the developmental evidence is robust across multiple independent research programs.',
		bookLocations: [
			{
				pages: 'Ch. 3, "Being a Boy"',
				chapter: 'Being a Boy',
				context: 'Opening paragraph: "Patriarchal assault on the emotional life of boys begins at the moment of their birth…In the real world of male and female babies, male babies express themselves more."'
			}
		],
		evidenceRefs: [
			{ label: 'Kindlon & Thompson (1999), Raising Cain', authorSearch: 'Kindlon' },
			{ label: 'Malatesta & Haviland — infant emotion research', authorSearch: 'Malatesta' }
		]
	},

	// ======== Step 2 ========
	{
		id: 'patriarchy-defined',
		step: 2,
		shortLabel: 'Patriarchy = system of dominance maintained by terror',
		type: 'theory',
		claim:
			'"Patriarchy is a political-social system that insists that males are inherently dominating, superior to everything and everyone deemed weak, especially females, and endowed with the right to dominate and rule over the weak and to maintain that dominance through various forms of psychological terrorism and violence." It is BOTH a structural system AND a psychology (Terrence Real\'s "psychological patriarchy"). Women enforce it as much as men — it is not a male-vs-female dynamic but a dominance-vs-connection one.',
		evidence:
			'hooks\'s synthesis of her own earlier work (Feminist Theory: From Margin to Center 1984) with Terrence Real\'s psychological patriarchy framework, John Bradshaw\'s rules of patriarchy, and the feminist critique of sex-role theory. Her marbles beating scene is presented as paradigmatic.',
		status: 'untestable',
		explanation:
			'"Patriarchy" is a theoretical framework, not a falsifiable empirical claim. It is evaluated by how well it organizes experience and action. hooks\'s specific innovation is to frame patriarchy as equally enforced by women, which distinguishes her from antimale strands of feminism and aligns her with Connell\'s "complicity" concept — but from a different direction.',
		dependsOn: [],
		collapseRisk:
			'The framework could be replaced by a sharper conceptualization. hooks herself acknowledges the word "patriarchy" draws laughter and resistance. If social dominance dynamics can be more precisely named (e.g., Connell\'s "hegemonic masculinity" or Real\'s "psychological patriarchy"), her use of the term may be superseded.',
		bookLocations: [
			{
				pages: 'Ch. 2, "Understanding Patriarchy"',
				chapter: 'Understanding Patriarchy',
				context: 'The opening pages define patriarchy and establish Real\'s "psychological patriarchy" as the dynamic. The marbles-beating autobiographical scene is the emotional anchor.'
			}
		],
		evidenceRefs: [
			{ label: 'Real, Terrence — How Can I Get Through to You?', authorSearch: 'Real' },
			{ label: 'Bradshaw, John — Creating Love', authorSearch: 'Bradshaw' },
			{ label: 'hooks — Feminist Theory: From Margin to Center (1984)', authorSearch: 'hooks' }
		]
	},

	// ======== Step 3 ========
	{
		id: 'crisis-patriarchal-masc',
		step: 3,
		shortLabel: 'The crisis is of patriarchal masculinity, not masculinity',
		type: 'theory',
		claim:
			'"The crisis facing men is not the crisis of masculinity, it is the crisis of patriarchal masculinity." This distinction is central: it allows defense of maleness as a category while attacking the patriarchal configuration of it. The "end of manhood" strand of feminism is rejected for furthering "the notion that there is something inherently evil, bad, or unworthy about maleness."',
		evidence:
			'hooks\'s theoretical argument supported by her critique of Susan Faludi\'s Stiffed: The Betrayal of the American Man (2000). Faludi documented male suffering but "spends so much time trying not to challenge patriarchy that she fails to highlight the necessity of ending patriarchy."',
		status: 'untestable',
		explanation:
			'A conceptual distinction rather than a testable hypothesis. Its value is strategic: it opens space for feminist thinking about maleness without requiring the abolition of maleness as a category. This is hooks\'s single most original theoretical move.',
		dependsOn: ['patriarchy-defined'],
		collapseRisk:
			'If the distinction between "maleness" and "patriarchal masculinity" turns out to be impossible to sustain in practice (if every attempt to reclaim maleness drifts back into patriarchal patterns), then hooks\'s project would collapse into either the "end of manhood" position she rejects or the men\'s-movement position she rejects. The jury is still out at cultural scale.',
		bookLocations: [
			{
				pages: 'Ch. 2, end of chapter',
				chapter: 'Understanding Patriarchy',
				context: 'The distinction is stated most sharply in the closing pages of Ch. 2, anchored in the Faludi critique.'
			},
			{
				pages: 'Ch. 7, "Feminist Manhood"',
				chapter: 'Feminist Manhood',
				context: 'Developed at length against the "end of manhood" feminist strand: "Our work of love should be to reclaim masculinity and not allow it to be held hostage to patriarchal domination."'
			}
		],
		evidenceRefs: [
			{ label: 'Faludi, Susan — Stiffed: The Betrayal of the American Man', authorSearch: 'Faludi' },
			{ label: 'hooks — Feminism Is for Everybody', authorSearch: 'hooks' }
		]
	},

	// ======== Step 4 ========
	{
		id: 'normal-traumatization',
		step: 4,
		shortLabel: '"Normal traumatization" of boys',
		type: 'causal',
		claim:
			'Patriarchal socialization of boys IS a form of trauma. Terrence Real: "When I first began looking at gender issues, I believed that violence was a by-product of boyhood socialization. But after listening more closely…I have come to believe that violence IS boyhood socialization. The way we \'turn boys into men\' is through injury: We sever them from their mothers, research tells us, far too early. We pull them away from their own expressiveness, from their feelings, from sensitivity to others…Disconnection is not fallout from traditional masculinity. Disconnection IS masculinity."',
		evidence:
			'Terrence Real\'s clinical observation (family therapy practice) is hooks\'s primary source. Real\'s anecdote of his 3-year-old son Alexander being silently shamed out of wearing a Barbie costume by other boys in a "ten-second wordless transaction" exemplifies the "normal traumatization." hooks adds her own marbles scene from Ch. 2 as parallel case.',
		status: 'yellow',
		explanation:
			'Real\'s clinical observation has strong face validity and aligns with the developmental-psychology research on shame socialization (Jordan, Stone Center). But "trauma" is a clinical term that does heavy metaphorical work here — there is no large-N empirical study demonstrating that normal boy socialization meets clinical trauma criteria. The claim is theoretically provocative and clinically suggestive, but yellow-rated because the evidence is case-based rather than experimental.',
		dependsOn: ['boys-expressive', 'patriarchy-defined'],
		collapseRisk:
			'The strong version (boy socialization = trauma) is contested; the weak version (boy socialization involves shaming that reduces emotional expressiveness) is well-supported and overlaps with the Pollack / Kindlon-Thompson / Eliot finding. If the trauma framing is rejected, hooks\'s case would weaken but not collapse.',
		bookLocations: [
			{
				pages: 'Ch. 2 and Ch. 4',
				chapter: 'Understanding Patriarchy / Stopping Male Violence',
				context: 'Real\'s Alexander-Barbie vignette appears in Ch. 2; his "disconnection IS masculinity" formulation in Ch. 4.'
			}
		],
		evidenceRefs: [
			{ label: 'Real, Terrence — How Can I Get Through to You?', authorSearch: 'Real' },
			{ label: 'hooks — the marbles beating scene', authorSearch: 'hooks' }
		]
	},

	// ======== Step 5 ========
	{
		id: 'mask-of-masculinity',
		step: 5,
		shortLabel: 'The mask of masculinity',
		type: 'consequence',
		claim:
			'"Learning to wear a mask (that word already embedded in the term \'masculinity\') is the first lesson in patriarchal masculinity that a boy learns. He learns that his core feelings cannot be expressed if they do not conform to the acceptable behaviors sexism defines as male." The false self, the split, the compartmentalization — these are the interior architecture of patriarchal masculinity, and they make genuine self-knowledge (and therefore love) impossible.',
		evidence:
			'hooks draws on John Bradshaw, Nathaniel Branden (Six Pillars of Self-Esteem), M. Scott Peck, and Rabbi Harold Kushner on the definition of integrity as wholeness. Pollack\'s "mask of masculinity" metaphor (without direct citation) is also in the background — hooks extends it by noting the word "mask" is already inside "masculinity."',
		status: 'yellow',
		explanation:
			'"The mask" is a powerful metaphor with strong interpretive validity and clinical resonance. It is not directly measurable but resonates with observable patterns (boys\' false-positive responses on self-esteem measures — the Coopersmith finding Pollack reports). As a metaphor for a real phenomenon, yellow-rated: the underlying phenomenon is real but the specific framing is interpretive.',
		dependsOn: ['normal-traumatization'],
		collapseRisk:
			'If boys who appear confident actually ARE confident (and self-report measures are correct), then the "mask" is not a real phenomenon but a clinical projection. Pollack\'s own Coopersmith false-positive data and the wider literature on male help-seeking suggest the mask is real but more evidence would strengthen the case.',
		bookLocations: [
			{
				pages: 'Ch. 10, "Reclaiming Male Integrity"',
				chapter: 'Reclaiming Male Integrity',
				context: 'The entire chapter is organized around the mask metaphor and integrity as its antidote.'
			}
		],
		evidenceRefs: [
			{ label: 'Bradshaw, John — Creating Love', authorSearch: 'Bradshaw' },
			{ label: 'Kushner, Harold — Living a Life That Matters', authorSearch: 'Kushner' },
			{ label: 'Branden, Nathaniel — Six Pillars of Self-Esteem', authorSearch: 'Branden' }
		]
	},

	// ======== Step 6 ========
	{
		id: 'maternal-sadism',
		step: 6,
		shortLabel: 'Maternal sadism',
		type: 'causal',
		claim:
			'Women enforce patriarchy AS MUCH as men — and often MORE so with sons. "Patriarchy breeds maternal sadism in women who embrace its logic." Single-parent homes are NOT automatically antipatriarchal and may be more patriarchal. "Many mothers in patriarchal culture silence the wild spirit in their sons…for fear their sons will be weak, will not be prepared to be macho men." hooks names this as a feminist failing: feminist idealization of motherhood has prevented direct examination of maternal abuse of boys.',
		evidence:
			'Dorothy Dinnerstein (The Mermaid and the Minotaur), Olga Silverstein (The Courage to Raise Good Men), Terrence Real\'s family therapy cases. The Incredible Hulk anecdote — boys telling a sociologist they would "smash their mommies" if they had Hulk\'s power. David Winter\'s research (via Riane Eisler\'s The Power of Partnership) cited for the pattern: "women living in countries or periods of extreme male dominance tend to be very controlling of their sons, who are the only males it is safe for them to vent against."',
		status: 'yellow',
		explanation:
			'The claim that women can be violent enforcers of patriarchy is theoretically sound and matches observable patterns. The specific "maternal sadism" framing is more contested — the term does heavy interpretive work. The underlying claim (feminist literature has underreported women\'s emotional violence toward sons) is hooks\'s distinctive contribution and is supported by Dinnerstein and Silverstein.',
		dependsOn: ['patriarchy-defined', 'normal-traumatization'],
		collapseRisk:
			'If most female-led households produce less-patriarchal boys (as reformist feminism sometimes assumes), then hooks\'s strong version is wrong. The evidence is mixed: single-parent-mother households do not reliably produce either more or less patriarchal boys. The weaker version (some mothers enforce patriarchy severely) is uncontested.',
		bookLocations: [
			{
				pages: 'Chs. 4 and 9',
				chapter: 'Stopping Male Violence / Healing Male Spirit',
				context: 'The Dinnerstein-influenced treatment of maternal violence toward boys is in Ch. 4; Ch. 9 develops the "maternal sadism" concept explicitly.'
			}
		],
		evidenceRefs: [
			{ label: 'Dinnerstein, Dorothy — The Mermaid and the Minotaur', authorSearch: 'Dinnerstein' },
			{ label: 'Silverstein, Olga — The Courage to Raise Good Men', authorSearch: 'Silverstein' },
			{ label: 'Eisler, Riane — The Power of Partnership', authorSearch: 'Eisler' }
		]
	},

	// ======== Step 7 ========
	{
		id: 'disconnection-is-masc',
		step: 7,
		shortLabel: 'Disconnection IS masculinity',
		type: 'theory',
		claim:
			'Under patriarchy, masculinity is not fundamentally about strength, power, or sexuality — it is about DISCONNECTION. From self, from feelings, from other men, from women, from children. The "one-up, one-down world of masculinity leaves little space for tenderness" (Real). Men learn early that "relationships are based on power, control, secrecy, fear, shame, isolation, and distance" (Bradshaw). This systematic disconnection IS what makes men unable to love.',
		evidence:
			'Terrence Real\'s formulation is hooks\'s anchor. John Bradshaw on patriarchal relationship rules. Victor Seidler (Rediscovering Masculinity) on men\'s inability to tolerate being alone with themselves. Zukav & Francis (The Heart of the Soul) on the incompatibility of external power and intimacy. Multiple convergent theoretical voices.',
		status: 'untestable',
		explanation:
			'A theoretical reframing that has strong explanatory power across the book. Cannot be falsified directly — it is a way of organizing observations about male emotional life. Its productivity is its test: the framing makes sense of why men in patriarchal culture can be intimate with no one including themselves.',
		dependsOn: ['normal-traumatization', 'mask-of-masculinity'],
		collapseRisk:
			'If men in patriarchal culture are actually as well-connected emotionally as women (and the gender difference is a measurement artifact), then the framing collapses. But the converging evidence from Pollack (Coopersmith data), Kindlon & Thompson (clinical observation), and Connell (ethnographic work) supports the disconnection pattern.',
		bookLocations: [
			{
				pages: 'Ch. 4, "Stopping Male Violence"',
				chapter: 'Stopping Male Violence',
				context: 'Real\'s "disconnection IS masculinity" passage is the core formulation.'
			},
			{
				pages: 'Ch. 9, "Healing Male Spirit"',
				chapter: 'Healing Male Spirit',
				context: 'The theme runs through the account of men\'s inability to grieve, to speak pain, to be intimate with themselves.'
			}
		],
		evidenceRefs: [
			{ label: 'Real, Terrence — How Can I Get Through to You?', authorSearch: 'Real' },
			{ label: 'Seidler, Victor — Rediscovering Masculinity', authorSearch: 'Seidler' },
			{ label: 'Zukav & Francis — The Heart of the Soul', authorSearch: 'Zukav' }
		]
	},

	// ======== Step 8 ========
	{
		id: 'sex-addiction',
		step: 8,
		shortLabel: 'Patriarchal sex as addiction, not intimacy',
		type: 'consequence',
		claim:
			'"Most men and women are not having satisfying and fulfilling sex…In actuality, men come to sex hoping that it will provide them with all the emotional satisfaction that would come from love." Sex becomes the one permitted vehicle for unmet emotional needs, which means it can never deliver. Patriarchal pornography eroticizes domination because domination is the only available model of connection. "He\'s gotta have it" ideology sustains rape culture.',
		evidence:
			'Michael Kimmel\'s essay "Fuel for Fantasy: The Ideological Construction of Male Lust," Robert Jensen\'s essay "Patriarchal Sex," Steve Bearman\'s essay "Why Men Are So Obsessed with Sex." AMA statistics on sexual violence (700,000 US women sexually assaulted per year). Zukav & Francis on sexual obsession as addiction masking deeper need.',
		status: 'yellow',
		explanation:
			'The interpretive claim (male sexual obsession is addiction, not natural appetite) is compelling and is supported by multiple independent theorists. The statistical anchors on sexual violence are rock-solid. What is yellow-rated is the strong claim that patriarchal sex NEVER delivers intimacy — this is more a normative/interpretive diagnosis than an empirically testable proposition.',
		dependsOn: ['disconnection-is-masc'],
		collapseRisk:
			'If sexual activity within patriarchal cultures does routinely deliver emotional intimacy for men, then the framing is overblown. The rape/assault statistics are uncontested; the interpretive frame around male sexuality as addictive is harder to test. It is consistent with feminist anti-porn literature and sex-addiction clinical literature but is not a formal empirical hypothesis.',
		bookLocations: [
			{
				pages: 'Ch. 5, "Male Sexual Being"',
				chapter: 'Male Sexual Being',
				context: 'The entire chapter develops this claim through Kimmel, Jensen, Bearman, and Zukav & Francis.'
			}
		],
		evidenceRefs: [
			{ label: 'Kimmel, Michael — Fuel for Fantasy', authorSearch: 'Kimmel' },
			{ label: 'Jensen, Robert — Patriarchal Sex', authorSearch: 'Jensen' },
			{ label: 'Bearman, Steve — Why Men Are So Obsessed with Sex', authorSearch: 'Bearman' },
			{ label: 'Dworkin, Andrea — Scapegoat', authorSearch: 'Dworkin' }
		]
	},

	// ======== Step 9 ========
	{
		id: 'work-as-flight',
		step: 9,
		shortLabel: 'Work as flight from self',
		type: 'consequence',
		claim:
			'"Many men use work as the place where they can flee from the self, from emotional awareness, where they can lose themselves and operate from a space of emotional numbness." Workaholism is "the most common addiction in men because it is usually rewarded and not taken seriously." The disconnection of patriarchal masculinity is reinforced by economic structures that reward emotional absence — and unemployment feels threatening precisely because it means time alone with oneself.',
		evidence:
			'Victor Seidler\'s autobiographical testimony (Rediscovering Masculinity), Dean Ornish (Love and Survival), Gary Zukav & Linda Francis on workaholism as "a deep sleep…a self-induced trance that temporarily keeps painful emotions away." hooks\'s readings of American Beauty and Life as a House as cultural texts.',
		status: 'yellow',
		explanation:
			'The observation that many men use work to escape emotional life is well-attested clinically and in first-person accounts (Seidler, Ornish, the men in Gail Sheehy\'s Understanding Men\'s Passages). The specific claim that workaholism is rewarded as addiction is contested but has clinical support. Yellow-rated because it is primarily interpretive case-based work rather than quantitative.',
		dependsOn: ['disconnection-is-masc', 'mask-of-masculinity'],
		collapseRisk:
			'If male work patterns are actually driven by economic necessity and provider-identity rather than emotional flight, the framing is partial. The truth is likely both — work is economically necessary AND for many men it functions emotionally as hooks describes. The strong version is overreach; the weak version is well-supported.',
		bookLocations: [
			{
				pages: 'Ch. 6, "Work: What\'s Love Got to Do with It?"',
				chapter: 'Work',
				context: 'The whole chapter develops this claim with Seidler and Ornish as anchor voices.'
			}
		],
		evidenceRefs: [
			{ label: 'Seidler, Victor — Rediscovering Masculinity', authorSearch: 'Seidler' },
			{ label: 'Ornish, Dean — Love and Survival', authorSearch: 'Ornish' },
			{ label: 'Sheehy, Gail — Understanding Men\'s Passages', authorSearch: 'Sheehy' }
		]
	},

	// ======== Step 10 ========
	{
		id: 'mens-movement-failure',
		step: 10,
		shortLabel: 'Men\'s movement failed because it refused to name patriarchy',
		type: 'consequence',
		claim:
			'The mythopoetic men\'s movement (Bly\'s Iron John, Farrell, Goldberg, Keen) failed because it sought "the deep masculine" without critiquing patriarchy. "The men\'s movement was often critical of women and feminism while making no sustained critique of patriarchy. Ultimately it did not consistently demand that men challenge patriarchy or envision liberating models of masculinity." It was a reaction, not an alternative — and it blamed mothers for wounds that were actually caused by patriarchal culture.',
		evidence:
			'hooks\'s textual readings of Bly (Iron John), Farrell (The Myth of Male Power), Goldberg (The Hazards of Being Male). Christine A. James\'s essay "Feminism and Masculinity" on Bly. Convergent critique with Connell\'s Chapter 9 of Masculinities, though hooks cites Connell\'s essay "Gender Politics of Men" directly in Ch. 4.',
		status: 'yellow',
		explanation:
			'An interpretive verdict on a cultural movement. hooks\'s reading of the men\'s movement texts is sharp and aligns with Connell, Messner, and Kimmel\'s parallel critiques. The verdict is broadly accepted in academic masculinity studies but contested by men\'s-movement participants. Yellow-rated as informed interpretation.',
		dependsOn: ['patriarchy-defined', 'crisis-patriarchal-masc'],
		collapseRisk:
			'If Bly-style mythopoetic work actually DID heal men and reduce male violence, hooks\'s critique would be overblown. Thirty years on, there is no clear evidence of such effects — the movement is marginal and patriarchal indicators (violence, suicide, emotional isolation) have not declined. The critique stands.',
		bookLocations: [
			{
				pages: 'Ch. 7, "Feminist Manhood"',
				chapter: 'Feminist Manhood',
				context: 'Section on the men\'s movement develops the critique. Also Ch. 9 on Bly\'s mother-blaming.'
			}
		],
		evidenceRefs: [
			{ label: 'Bly, Robert — Iron John', authorSearch: 'Bly' },
			{ label: 'James, Christine A. — Feminism and Masculinity', authorSearch: 'James' },
			{ label: 'Connell, R. W. — Gender Politics of Men', authorSearch: 'Connell' }
		]
	},

	// ======== Step 11 ========
	{
		id: 'maleness-as-being',
		step: 11,
		shortLabel: 'Reclaim maleness as being, not performance',
		type: 'solution',
		claim:
			'The normative prescription: reject "end of manhood" feminism AND reject mythopoetic men\'s movement. Instead: "Maleness, masculinity must stand for the essential core goodness of the self, of the human body that has a penis." Male value must be about BEING not PERFORMANCE. Feminist masculinity\'s chief constituents (from Olga Silverstein): "integrity, self-love, emotional awareness, assertiveness, and relational skill, including the capacity to be empathic, autonomous, and connected."',
		evidence:
			'hooks\'s own theoretical synthesis drawing on Olga Silverstein (The Courage to Raise Good Men), Robert Levant\'s catalog of patriarchal male norms, the Masai wise man parable via Terrence Real ("a good morani is ferocious when ferocity is called for and tender when tenderness is called for — a great morani knows which is which"). John Stoltenberg\'s essay "Healing from Manhood" on "loving justice more than manhood."',
		status: 'untestable',
		explanation:
			'A normative prescription, not an empirical hypothesis. Cannot be tested directly. Its value is whether it organizes effective practice — raising boys who embody the Silverstein traits rather than the Levant norms. The case studies and autobiographical accounts in hooks\'s book suggest the prescription CAN be enacted but do not prove it works at scale.',
		dependsOn: ['crisis-patriarchal-masc', 'disconnection-is-masc', 'mens-movement-failure'],
		collapseRisk:
			'If the distinction between "maleness" (good core) and "patriarchal masculinity" (bad configuration) cannot be sustained in practice — if every attempt to reclaim maleness drifts back into patriarchy — the prescription fails. hooks\'s answer is that the love ethic is what makes the distinction sustainable. Whether this is true at cultural scale is an open empirical question.',
		bookLocations: [
			{
				pages: 'Ch. 7, "Feminist Manhood"',
				chapter: 'Feminist Manhood',
				context: 'The chapter\'s central thesis is the reclamation of maleness as being not performance.'
			},
			{
				pages: 'Ch. 10, "Reclaiming Male Integrity"',
				chapter: 'Reclaiming Male Integrity',
				context: 'Interior work of reclaiming integrity (wholeness) as the precondition for feminist masculinity.'
			}
		],
		evidenceRefs: [
			{ label: 'Silverstein, Olga — The Courage to Raise Good Men', authorSearch: 'Silverstein' },
			{ label: 'Stoltenberg, John — Healing from Manhood', authorSearch: 'Stoltenberg' },
			{ label: 'Levant, Robert — traditional male role norms', authorSearch: 'Levant' }
		]
	},

	// ======== Step 12 ========
	{
		id: 'love-ethic',
		step: 12,
		shortLabel: 'Love as political program',
		type: 'solution',
		claim:
			'The central prescription: a love ethic applied to maleness. "Only a revolution of values in our nation will end male violence, and that revolution will necessarily be based on a love ethic. To create loving men, we must love males." Love is not a feeling but a practice: CARE, COMMITMENT, KNOWLEDGE, RESPONSIBILITY, RESPECT, and TRUST (from M. Scott Peck + Erich Fromm + hooks). Performance-based valuation of men is replaced by being-based valuation. Feminist politics WITHOUT a love ethic cannot reach men; feminist politics WITH a love ethic can.',
		evidence:
			'hooks\'s synthesis of M. Scott Peck (love as will to nurture spiritual/emotional growth), Erich Fromm (love as action not feeling). Supported by her own earlier trilogy on love (All About Love, Salvation, Communion). Influence from Thich Nhat Hanh, the Dalai Lama, Daniel Berrigan on "communities of resistance."',
		status: 'untestable',
		explanation:
			'A normative-ethical program, not a testable hypothesis. hooks is explicit that this is a political program grounded in a love ethic. Its productivity is measured by whether it organizes effective practice and generates change. Cannot be falsified.',
		dependsOn: ['maleness-as-being', 'mens-movement-failure', 'sex-addiction', 'work-as-flight'],
		collapseRisk:
			'If love-ethic approaches to male change have no measurable effect on male violence, emotional isolation, or suicide rates relative to other approaches, the framework is aesthetically compelling but practically ineffective. hooks\'s own Ch. 11 acknowledges that she cannot promise efficacy — she can only invite men to try. No randomized comparison exists.',
		bookLocations: [
			{
				pages: 'Ch. 1, "Wanted: Men Who Love"',
				chapter: 'Wanted: Men Who Love',
				context: 'The love ethic is introduced as the book\'s core thesis in the opening chapter.'
			},
			{
				pages: 'Ch. 4, "Stopping Male Violence"',
				chapter: 'Stopping Male Violence',
				context: 'Love defined operationally via Peck + Fromm: care, commitment, knowledge, responsibility, respect, trust.'
			},
			{
				pages: 'Ch. 11, "Loving Men"',
				chapter: 'Loving Men',
				context: 'The closing chapter integrates the love ethic with communities-of-resistance politics.'
			}
		],
		evidenceRefs: [
			{ label: 'Peck, M. Scott — The Road Less Traveled', authorSearch: 'Peck' },
			{ label: 'Fromm, Erich — The Art of Loving', authorSearch: 'Fromm' },
			{ label: 'hooks — All About Love: New Visions', authorSearch: 'hooks' }
		]
	},

	// ======== Step 13 ========
	{
		id: 'communities-of-resistance',
		step: 13,
		shortLabel: 'Communities of resistance',
		type: 'solution',
		claim:
			'Men\'s transformation cannot happen in isolation. "Healing does not take place in isolation. Men who love and men who long to love know this." The practical horizon is Thich Nhat Hanh\'s "communities of resistance" — relationships, families, and small groups reimagined as sites where men can return to themselves, heal from patriarchal wounding, and practice the love ethic. The family itself must be reimagined as "a place of resistance." Women who love men must stand by them "with open hearts and open arms" as they exercise the will to change.',
		evidence:
			'Thich Nhat Hanh and Daniel Berrigan in conversation (The Raft Is Not the Shore). Shepherd Bliss ("My War Story") on moving beyond the warrior archetype to "guardian, boundary-setter, husbandman, citizen." Barbara Ehrenreich (Blood Rites) on the pre-patriarchal history when humans of both sexes were prey. Kay Leigh Hagan\'s account of "good men" as "comrades in struggle."',
		status: 'untestable',
		explanation:
			'A prescriptive-strategic horizon. hooks offers examples (her own relationships, reconciliation with her father, the Kay Leigh Hagan testimony of good men who challenged her man-hating) but no measurement of efficacy at scale. The framework\'s value is whether it helps readers act.',
		dependsOn: ['love-ethic', 'maleness-as-being'],
		collapseRisk:
			'If relationships and small communities cannot transform individual men against the weight of mass-media patriarchal pedagogy and economic pressure, the program is beautiful but inadequate. hooks\'s own book acknowledges this tension: she ends not with certainty but with hope.',
		bookLocations: [
			{
				pages: 'Ch. 11, "Loving Men"',
				chapter: 'Loving Men',
				context: 'The closing chapter weaves together war critique, community-of-resistance politics, and the final invitation to women to stand by men exercising the will to change.'
			}
		],
		evidenceRefs: [
			{ label: 'Thich Nhat Hanh & Berrigan — The Raft Is Not the Shore', authorSearch: 'Thich' },
			{ label: 'Bliss, Shepherd — My War Story', authorSearch: 'Bliss' },
			{ label: 'Ehrenreich, Barbara — Blood Rites', authorSearch: 'Ehrenreich' },
			{ label: 'Hagan, Kay Leigh — A Good Man Is Hard to Bash', authorSearch: 'Hagan' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'communities-of-resistance')!;
	const path: ChainLink[] = [target];

	function findWeakestDep(link: ChainLink): ChainLink | null {
		if (link.dependsOn.length === 0) return null;
		const deps = link.dependsOn.map((id) => chain.find((c) => c.id === id)!);
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
		'bell hooks\'s argument chain is unusual in this library because it is primarily ETHICAL-THEORETICAL rather than empirical. Of 13 links, 1 is green (the empirical foundation that male infants are more emotionally expressive — imported from the same research tradition Pollack and Eliot use), 6 are yellow (the mask metaphor, normal traumatization, maternal sadism, sex-addiction framing, work-as-flight, men\'s-movement critique — all interpretive claims with clinical/textual support), and 6 are untestable theoretical frameworks (the definition of patriarchy, crisis-of-patriarchal-masculinity distinction, disconnection-IS-masculinity theory, reclaim-maleness prescription, love ethic, communities-of-resistance horizon). None are red. ' +
		'The empirical core is thin by design — hooks is not a sociologist or psychologist but a cultural theorist and ethicist. The one rock-solid empirical anchor (male infants more expressive) carries the whole chain because it blocks the essentialist defense: if boys START more expressive, then the "stoicism" that defines patriarchal masculinity cannot be biological. ' +
		'The theoretical heart of the book — Terrence Real\'s "disconnection IS masculinity" — is a clinical-observational claim that resonates strongly with Pollack\'s "mask of masculinity" and Kindlon & Thompson\'s "emotional miseducation." It cannot be directly falsified but it organizes enormous amounts of observation. ' +
		'The prescriptive chapters (reclaim maleness as being, love ethic, communities of resistance) are normative commitments grounded in hooks\'s earlier love trilogy and the Peck/Fromm tradition. They are not testable as hypotheses but are evaluated by whether they help readers act. ' +
		'The critique of the men\'s movement (Bly, Farrell, Goldberg) and of Faludi\'s Stiffed is interpretive and broadly shared with Connell, Messner, and Kimmel. ' +
		'Compared to its peers in this library: hooks is the ONLY explicitly Black feminist voice, the ONLY ethical-love framework, and one of the few books that engages both structural (Connell-level) and clinical (Pollack-level) registers. She cites Connell directly and aligns closely with Pollack on the mask and father hunger, but her distinctive contribution is the love ethic and the willingness to name both paternal AND maternal violence as patriarchal — a move feminist literature had largely resisted. ' +
		'The chain\'s strength is interpretive clarity and normative courage; its weakness is the scarcity of testable claims. Readers looking for empirical certainty will be dissatisfied; readers looking for a framework to organize the existing empirical findings from Pollack, Eliot, and Kindlon/Thompson around a coherent ethics of love will find this book essential.'
};
