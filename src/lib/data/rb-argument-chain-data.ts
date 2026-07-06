// rb-argument-chain-data.ts
// The argument chain for "Real Boys" (William S. Pollack, 1998), with evidence ratings per link.

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
	'boys-expressive':          { x: 20, y: 3, row: 0 },
	'boy-code':                 { x: 60, y: 3, row: 0 },
	'premature-separation':     { x: 15, y: 18, row: 1 },
	'shame-hardening':          { x: 50, y: 18, row: 1 },
	'father-disengagement':     { x: 85, y: 18, row: 1 },
	'mask-of-masculinity':      { x: 40, y: 34, row: 2 },
	'emotional-funnel-anger':   { x: 75, y: 34, row: 2 },
	'hidden-depression':        { x: 12, y: 50, row: 3 },
	'school-boy-failure':       { x: 40, y: 50, row: 3 },
	'reactive-violence':        { x: 70, y: 50, row: 3 },
	'suicide':                  { x: 92, y: 50, row: 3 },
	'potency-connection':       { x: 50, y: 72, row: 4 },
};

export const rowLabels = [
	'Foundational Claims',
	'The Three Mechanisms',
	'The Mask & Emotional Funnel',
	'Consequences',
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
	// ======== Step 1 ========
	{
		id: 'boys-expressive',
		step: 1,
		shortLabel: 'Boys born more emotionally expressive',
		type: 'premise',
		claim:
			'Male infants are born MORE emotionally expressive than female infants — they startle, cry, excite, and fuss more. But by elementary school, this expressiveness has largely vanished, suggesting it has been socialised out of them rather than biologically inherent.',
		evidence:
			'Haviland & Malatesta (Rutgers) infant studies showing male infants have higher baseline emotional reactivity. Mothers mirror unhappy emotions 22% of the time with girls, 0% with boys. Brody (BU) documents mothers using broader emotional vocabulary with daughters. Fivush (Emory) shows parents reestablish harmony with girls but accept retaliation with boys. Grief (BU) shows mothers never used "angry" with daughters but frequently with sons.',
		status: 'green',
		explanation:
			'Multiple independent research groups (Rutgers, BU, Emory) converge on the same finding. Pollack uses this as his anti-essentialist foundation: if boys start MORE emotional, then their later "stoicism" cannot be biological. The developmental shift is real and well-replicated.',
		dependsOn: [],
		collapseRisk:
			'If boys were actually born less emotionally expressive, Pollack\'s entire "culture not biology" framework would collapse. But this premise has strong independent replication.',
		bookLocations: [
			{
				pages: 'pp. 40-43',
				chapter: 'Ch. 2: Shame and the Trauma of Separation',
				context: 'Section "Emotional Shaping in a Mother\'s Reactions" — presents the Rutgers Haviland/Malatesta research as foundational evidence that emotional suppression is culturally imposed.'
			},
			{
				pages: 'pp. 39-40',
				chapter: 'Ch. 1: Inside the World of Boys',
				context: 'Introductory claim in Ch. 1: "at birth and for several months afterward, male infants are actually more emotionally expressive than female babies."'
			}
		],
		evidenceRefs: [
			{ label: 'Malatesta & Haviland (1982), Child Development', authorSearch: 'Malatesta' },
			{ label: 'Brody, Leslie R. — gender and emotion research', authorSearch: 'Brody' },
			{ label: 'Fivush, Robyn (Emory)', authorSearch: 'Fivush' }
		]
	},

	// ======== Step 2 ========
	{
		id: 'boy-code',
		step: 2,
		shortLabel: 'Society imposes the Boy Code',
		type: 'theory',
		claim:
			'An unwritten "Boy Code" — a set of outdated 19th-century masculinity rules — is imposed on boys from birth through four injunctions: "the Sturdy Oak" (stoicism), "Give \'em Hell" (bravado), "the Big Wheel" (status, avoid shame), and "No Sissy Stuff" (no vulnerability). Pollack adopts this framework from David & Brannon (1976).',
		evidence:
			'Pollack adopts David & Brannon\'s four-injunction typology from The Forty-Nine Percent Majority (1976). He provides qualitative support from hundreds of boys in his Harvard Medical School "Listening to Boys\' Voices" study, whose responses he reports as dominated by phrases like "keep a stiff upper lip", "not show feelings", "be cool", "just laugh it off."',
		status: 'untestable',
		explanation:
			'The "Boy Code" is a cultural framework, not a falsifiable empirical finding. It is a useful synthesis of observable behavioural expectations but cannot be tested directly. Its utility is as an organising lens for the rest of Pollack\'s argument.',
		dependsOn: [],
		collapseRisk:
			'As a framework, the Boy Code cannot be "refuted" but could be seen as an oversimplification. Alternative frameworks (Connell\'s hegemonic masculinity, Gilmore\'s "Big Impossible") describe the same phenomenon differently.',
		bookLocations: [
			{
				pages: 'pp. 23-25',
				chapter: 'Ch. 1: Inside the World of Boys',
				context: 'First introduction of "Boy Code" concept as "outdated and constricting assumptions, models, and rules about boys that our society has used since the nineteenth century."'
			},
			{
				pages: 'pp. 52-54',
				chapter: 'Ch. 2: Shame and the Trauma of Separation',
				context: 'Section "The Boy Code: Four Injunctions" — Pollack introduces David & Brannon\'s typology and builds the framework.'
			}
		],
		evidenceRefs: [
			{ label: 'David & Brannon (1976), The Forty-Nine Percent Majority', authorSearch: 'David' },
			{ label: 'Pollack — Listening to Boys\' Voices study', authorSearch: 'Pollack' }
		]
	},

	// ======== Step 3 ========
	{
		id: 'premature-separation',
		step: 3,
		shortLabel: 'Premature forced separation traumatises boys',
		type: 'causal',
		claim:
			'Boys undergo two traumatic forced separations — around age 5-6 (school/camp) and again at adolescence — where they are pushed to emotionally disconnect from their mothers before they are developmentally ready. This creates a "deep wellspring of grief and sadness that may last throughout their lives."',
		evidence:
			'Clinical case vignettes (Johnny vomiting at kindergarten, Roger at summer camp, Christopher\'s post-hospital depression, Gabe\'s repressed camping-trip nightmare). Theoretical grounding in attachment research (Gunnar at Minnesota; Sroufe). One weekend-time-use poll showing 25% of young boys spend few/no weekend hours with family vs. <10% for girls. Nancy Chodorow\'s feminist analysis of "dis-identification" — which Pollack explicitly disagrees with as a healthy framing.',
		status: 'yellow',
		explanation:
			'Pollack\'s broader claim that normative school-start separation is *traumatic* is largely clinical-theoretical. Attachment research supports the importance of secure attachment, but no study directly shows that culturally-normative first-day-of-school separation causes lasting trauma in boys specifically. This is the chain\'s most contested link.',
		dependsOn: ['boy-code'],
		collapseRisk:
			'If separation at 5-6 is actually developmentally appropriate (as mainstream developmental psychology holds for most children), then the "two traumas" framing becomes an overclaim. The supporting evidence is primarily clinical case work plus theoretical extension from infant attachment research.',
		bookLocations: [
			{
				pages: 'pp. 25-27',
				chapter: 'Ch. 1: Inside the World of Boys',
				context: 'Introduces premature separation as one of the two primary causes of boys\' transformation from expressive to withdrawn.'
			},
			{
				pages: 'pp. 49-58',
				chapter: 'Ch. 2: Shame and the Trauma of Separation',
				context: 'Extended development with Johnny, Roger, Christopher vignettes and the "Chodorow rejection" argument against the dis-identification framing.'
			}
		],
		evidenceRefs: [
			{ label: 'Chodorow (1978), The Reproduction of Mothering', authorSearch: 'Chodorow' },
			{ label: 'Gunnar (U Minnesota) attachment research', authorSearch: 'Gunnar' },
			{ label: 'Sroufe, Alan — attachment research', authorSearch: 'Sroufe' }
		]
	},

	// ======== Step 4 ========
	{
		id: 'shame-hardening',
		step: 4,
		shortLabel: 'Shame-hardening as enforcement mechanism',
		type: 'causal',
		claim:
			'The Boy Code is enforced through shame — every time a boy shows vulnerability, he is shamed ("Don\'t be a sissy", "Big boys don\'t cry", "Don\'t be a mama\'s boy"). Over time, he suppresses the original feeling itself, producing a "hardened" boy who can no longer feel his own vulnerable emotions.',
		evidence:
			'Haviland & Malatesta infant research on differential mirroring; Brody, Grief, Fivush studies on gendered emotion socialization. Judith Jordan (Stone Center Harvard) provides the theoretical definition of shame as "the feeling state that accompanies emotional disconnection." Navy commissioned study on female recruits accidentally found 39% of MALE recruits had suffered physical abuse (beyond spanking) from parents before 18 — evidence that boys endure violence silently.',
		status: 'yellow',
		explanation:
			'The socialization-of-emotion studies are strong (green-rated as E2 and E3). The Stone Center shame theory is a respected framework. The Navy stat is striking. But the specific causal claim that *shame-hardening* is the mechanism linking Boy Code → emotional suppression is theoretical rather than directly tested.',
		dependsOn: ['boy-code', 'boys-expressive'],
		collapseRisk:
			'If boys\' reduced emotional expression comes from different mechanisms (e.g., developmental hormonal shifts, peer-culture-specific rather than general cultural shaming), then the "shame-hardening" framing is partially wrong even if the outcome is real.',
		bookLocations: [
			{
				pages: 'pp. 61-64',
				chapter: 'Ch. 2: Shame and the Trauma of Separation',
				context: 'Section "Shame: The Consequence of Emotional Disconnection" develops Jordan\'s theoretical framework and the core shame-hardening claim.'
			},
			{
				pages: 'pp. 70-73',
				chapter: 'Ch. 2: Shame and the Trauma of Separation',
				context: 'Section "Emotional Shaping in a Mother\'s Reactions" — ties the Rutgers research to the shame-hardening mechanism.'
			}
		],
		evidenceRefs: [
			{ label: 'Jordan, Judith (Stone Center) — shame theory', authorSearch: 'Jordan' },
			{ label: 'Malatesta & Haviland (1982)', authorSearch: 'Malatesta' },
			{ label: 'Navy recruit abuse study (Bower 1997)', authorSearch: 'Navy' }
		]
	},

	// ======== Step 5 ========
	{
		id: 'father-disengagement',
		step: 5,
		shortLabel: 'Father disengagement amplifies the cycle',
		type: 'causal',
		claim:
			'Fathers play a unique role through "enthrallment" play and emotional coaching. When fathers are absent or emotionally disengaged ("deadpan" not deadbeat), sons suffer "father hunger" — unmet longing for paternal connection that creates an intergenerational cycle of disengaged fathering.',
		evidence:
			'Extensive longitudinal evidence: **Glueck Study / Snarey Harvard 40-year follow-up** of 240 Boston fathers and sons showed supportive fathers in first 10 years → excellent HS/college performance; through adolescence → career success. **Parke (UC Riverside)** on father-infant response patterns. **Pruett (Yale) 10-year primary-caregiver father study**. **Robert Sears longitudinal** — age-5 father sharing → age-23 compromise ability → age-31 empathy → age-40s intimacy. **Brody (BU)** — active fathers → less aggressive, more expressive sons. **D\'Angelo (Case Western)** — fathers with poor self-control → sons with problems across all domains. **Barnett & Marshall (Wellesley)** — fathers\' positive child relationships = best predictor of men\'s physical health.',
		status: 'green',
		explanation:
			'One of the strongest empirical sections in the book. Multiple independent longitudinal studies with decades of follow-up converge on the same conclusion. The Glueck/Snarey 40-year data is particularly hard to dismiss. This is also the area where Real Boys agrees most strongly with Sax (Boys Adrift) and Gurian (Wonder of Boys).',
		dependsOn: ['boy-code'],
		collapseRisk:
			'The empirical evidence for "father involvement matters" is robust. What could be questioned is Pollack\'s specific mechanism (enthrallment play as the key mode). But even without that specific mechanism, the broader causal claim holds.',
		bookLocations: [
			{
				pages: 'pp. 113-116',
				chapter: 'Ch. 6: Real Fathers / Real Men',
				context: 'Section "Enthrallment: Father-Son Play" establishes the distinctive fatherly role; cites Parke and Herzog.'
			},
			{
				pages: 'pp. 117-121',
				chapter: 'Ch. 6: Real Fathers / Real Men',
				context: 'Section "The Lasting Daddy Effect" synthesizes the longitudinal evidence — Brody, Hardesty, Sears, Glueck/Snarey, D\'Angelo.'
			},
			{
				pages: 'pp. 158-161',
				chapter: 'Ch. 6: Real Fathers / Real Men',
				context: '"Father hunger" and "deadpan dads" concepts — Herzog\'s framework plus Mark Bryan Harvard divorce research.'
			}
		],
		evidenceRefs: [
			{ label: 'Snarey, John — Glueck Study 40-year follow-up', authorSearch: 'Snarey' },
			{ label: 'Parke, Ross (UC Riverside)', authorSearch: 'Parke' },
			{ label: 'Pruett, Kyle (Yale) — primary fathers', authorSearch: 'Pruett' },
			{ label: 'Herzog, Jim (Harvard) — father hunger', authorSearch: 'Herzog' },
			{ label: 'Brody, Leslie (BU)', authorSearch: 'Brody' }
		]
	},

	// ======== Step 6 ========
	{
		id: 'mask-of-masculinity',
		step: 6,
		shortLabel: 'Mask of masculinity hides genuine self',
		type: 'consequence',
		claim:
			'The accumulation of shame-hardening, premature separation, and absent fathers produces the "mask of masculinity" — a defensive persona boys put up that presents toughness, invulnerability, and "I\'m fine" to the world, even when they are suffering deeply. Crucially, the mask fools the boy himself: he loses access to his own suppressed emotions.',
		evidence:
			'Extensive qualitative evidence from the "Listening to Boys\' Voices" study and clinical case work: the Adam vignette (14-year-old bullied, saying "everything\'s fine", comes home with black eye); boys throughout the study using phrases like "I keep it all in" and "I don\'t tell anybody about it." Pollack\'s own Coopersmith Self-Esteem Inventory testing found boys gave "false-positive" responses at rates that grew with age (1.53 in grade 7 → 5.0 in grade 12 on a 1-8 lie-measure scale).',
		status: 'yellow',
		explanation:
			'The qualitative evidence from Listening to Boys\' Voices is rich and internally consistent. Pollack\'s own Coopersmith data is interesting but is a single-researcher finding. The "mask" as a metaphor has strong clinical validity but is hard to measure directly; it is an inference from coping strategies observable in interview data.',
		dependsOn: ['shame-hardening', 'premature-separation'],
		collapseRisk:
			'If boys who look confident actually ARE confident (and self-esteem surveys taking them at face value are correct), then Pollack\'s entire "hidden crisis" thesis would be wrong. His defense rests on the false-positive pattern and the clinical observation that outwardly-fine boys later collapse.',
		bookLocations: [
			{
				pages: 'pp. 5-19',
				chapter: 'Ch. 1: Inside the World of Boys',
				context: 'Core development of "mask of masculinity" concept with Adam vignette as opening case.'
			},
			{
				pages: 'pp. 278-280',
				chapter: 'Ch. 10: Schools',
				context: 'Pollack reports his Coopersmith false-positive lie-measure findings, showing boys increasingly mask their real feelings on self-report instruments.'
			}
		],
		evidenceRefs: [
			{ label: 'Pollack — Listening to Boys\' Voices', authorSearch: 'Pollack' },
			{ label: 'Coopersmith Self-Esteem Inventory', authorSearch: 'Coopersmith' },
			{ label: 'Purkey, William — Self-Concept as Learner', authorSearch: 'Purkey' }
		]
	},

	// ======== Step 7 ========
	{
		id: 'emotional-funnel-anger',
		step: 7,
		shortLabel: 'Anger as the only permitted emotion',
		type: 'causal',
		claim:
			'Because boys are shamed for expressing vulnerability, the only emotion that remains culturally acceptable for them to express is anger. Anger becomes the "emotional funnel" (Don Long, Washington University) — every feeling, from sadness to fear to loneliness, gets channeled into this one outlet.',
		evidence:
			'Long\'s "emotional funnel" framework. Parental socialization research: Grief (BU) showed mothers never used "angry" with daughters but frequently with sons when creating stories. Fivush (Emory) showed parents accept retaliation as reasonable for sons but favor reestablishing harmony for daughters. Converging with Kindlon & Thompson\'s emotional miseducation framework.',
		status: 'green',
		explanation:
			'The claim that parents use more anger-related language with sons than daughters is well-replicated across multiple labs. The specific "funnel" metaphor is Long\'s theoretical framing but rests on robust underlying socialization research.',
		dependsOn: ['shame-hardening', 'mask-of-masculinity'],
		collapseRisk:
			'If boys have other outlets besides anger (humor, irony, silent withdrawal) then the "funnel" is too narrow. But the core empirical claim — that anger-language is specifically permitted to boys in ways it is not to girls — is robust.',
		bookLocations: [
			{
				pages: 'pp. 73-75',
				chapter: 'Ch. 2: Shame and the Trauma of Separation',
				context: 'Section "Anger: The OK Male Emotion" introduces Long\'s emotional funnel concept and cites Grief and Fivush.'
			}
		],
		evidenceRefs: [
			{ label: 'Long, Don (Washington University)', authorSearch: 'Long' },
			{ label: 'Grief, Esther (Boston University)', authorSearch: 'Grief' },
			{ label: 'Fivush, Robyn (Emory)', authorSearch: 'Fivush' }
		]
	},

	// ======== Step 8 ========
	{
		id: 'hidden-depression',
		step: 8,
		shortLabel: 'Hidden epidemic of boy depression',
		type: 'consequence',
		claim:
			'Boy depression is at rates at least equal to girl depression but is systematically under-detected because (a) diagnostic tools were designed for adult women, (b) boys present with irritability/aggression rather than classic sadness/withdrawal, and (c) boys actively mask and even forget their own symptoms. The result is a "hidden epidemic."',
		evidence:
			'Strong quantitative evidence: **Nolen-Hoeksema (Stanford) 1990-91** found boys 8-12 reported MORE depression than girls at higher scores. **Smucker (Penn State) 1982** survey of 2,790 rural PA children — no gender difference. **Angst & Dobler-Mikola (Switzerland)** — men with equal functional impairment reported FEWER depressive symptoms than women and forgot their past depression. **Girgus/Nolen-Hoeksema/Seligman (Princeton)** expected boys\' depression to be less tied to peer relationships — found the OPPOSITE. **Rohde, Seeley, Mace (Eugene)** — boys\' suicidal ideation linked to social disconnection. 3.5 million US children under 19 clinically depressed (~5%); 580,000 Prozac prescriptions for kids 5+ in 1996.',
		status: 'green',
		explanation:
			'Multiple peer-reviewed studies from independent researchers converge on the same conclusion: the traditional gender gap in depression narrows or reverses when measurement tools are improved. The Angst/Dobler-Mikola finding that men underreport and forget symptoms is particularly important because it validates Pollack\'s masking thesis.',
		dependsOn: ['mask-of-masculinity', 'emotional-funnel-anger'],
		collapseRisk:
			'The weakest version of this claim is that boys are "more depressed than we think" which is well-supported. The stronger version — that boys are depressed at rates equal to or exceeding girls — depends on which measurement instruments you trust. Clinical diagnosis still shows a female majority.',
		bookLocations: [
			{
				pages: 'pp. 348-361',
				chapter: 'Ch. 12: Hamlet\'s Curse — Depression and Suicide',
				context: 'Core chapter developing the hidden-epidemic thesis, citing Nolen-Hoeksema, Smucker, Angst, Girgus, Rohde directly.'
			}
		],
		evidenceRefs: [
			{ label: 'Nolen-Hoeksema, Susan (Stanford)', authorSearch: 'Nolen' },
			{ label: 'Angst & Dobler-Mikola (1984)', authorSearch: 'Angst' },
			{ label: 'Girgus, Nolen-Hoeksema & Seligman (Princeton)', authorSearch: 'Girgus' },
			{ label: 'Rohde, Seeley & Mace (1997)', authorSearch: 'Rohde' }
		]
	},

	// ======== Step 9 ========
	{
		id: 'school-boy-failure',
		step: 9,
		shortLabel: 'Boy-hostile schools → academic failure',
		type: 'consequence',
		claim:
			'Schools have evolved pedagogy and environments that unwittingly favor girls\' learning styles. Boys\' reading/writing struggles are ignored while their active learning styles are pathologized as "hyperactive." The result is a large academic gender gap and widespread boy disengagement.',
		evidence:
			'**Hedges & Nowell 1995 in Science** — 6-survey meta-analysis, 30 years, thousands of children: boys outnumber girls 3:1 in top 10% math/science, 7:1 in top 1%; BUT boys outnumber girls 2:1 at the BOTTOM in reading comprehension and writing. **US Department of Education Condition of Education 1997**: females outscore males in reading at all age levels. **Purkey (UNC) Self-Concept as Learner Scale**: girls score higher than boys at all grade levels. **Valerie Lee (U Michigan)** study of 9000+ 8th graders: girls more academically engaged. Statistics: 8th-grade boys held back 50% more often; boys = 2/3 HS special-ed; 71% of suspensions; 58% male HS grads enter college vs. 67% female; 55% of bachelor\'s degrees now go to women.',
		status: 'green',
		explanation:
			'The empirical case is strong. Hedges & Nowell in Science alone is a landmark meta-analysis. The descriptive gender gap in reading/writing and disciplinary outcomes is uncontested; debate centers on causal interpretation. This is also where Pollack agrees most with Sax (Boys Adrift) and other boy-crisis authors.',
		dependsOn: ['shame-hardening', 'mask-of-masculinity'],
		collapseRisk:
			'The statistical gap is robust. The claim that schools CAUSED the gap (rather than reflecting prior socialization) is partly causal and partly institutional — most scholars accept that school environments amplify the gap but may not be its sole source.',
		bookLocations: [
			{
				pages: 'pp. 272-285',
				chapter: 'Ch. 10: Schools — The Blackboard Jumble',
				context: 'Opens with Hedges/Nowell U Chicago meta-analysis; develops the four-ways-schools-fail-boys framework.'
			},
			{
				pages: 'pp. 14-17',
				chapter: 'Ch. 1: Inside the World of Boys',
				context: 'Early introduction of the gender gap statistics (50% more held back, 71% of suspensions, etc).'
			}
		],
		evidenceRefs: [
			{ label: 'Hedges & Nowell (1995), Science', authorSearch: 'Hedges' },
			{ label: 'Purkey, William (UNC)', authorSearch: 'Purkey' },
			{ label: 'US Department of Education', authorSearch: 'Department of Education' },
			{ label: 'Lee, Valerie (U Michigan)', authorSearch: 'Lee' }
		]
	},

	// ======== Step 10 ========
	{
		id: 'reactive-violence',
		step: 10,
		shortLabel: 'Accumulated anger → reactive violence',
		type: 'consequence',
		claim:
			'When anger accumulated in the emotional funnel overflows, it manifests as violence against self, others, or society. Pollack frames this as DISCONNECTION\'s final consequence, explicitly rejecting testosterone-as-cause. Violence is often a perverse attempt to reconnect (gangs, bullying-for-friendship).',
		evidence:
			'**Raine, Brennan & Mednick (1997)** in *American Journal of Psychiatry*: Danish study found individuals who suffered BOTH birth complications AND early maternal rejection were most likely to become violent offenders — specifically supports disconnection-as-cause. **James Gilligan** (1996, *Violence*) on male violence as socialized, not biological. **Jean Baker Miller (Stone Center)** on how fear of unmanliness drives aggression. **NASP**: ~160,000 US children miss school daily for fear of bullying. Boys 400% more likely to be murdered than girls; firearms death rate for male teens 15-19 more than doubled 1985-94 to 49.2/100,000. Boys 4× more injured than girls after age 2.',
		status: 'green',
		explanation:
			'The Raine Danish study provides specific support for the disconnection-causation claim (not just correlation). Gilligan\'s synthesis is widely cited. The statistical pattern of male-skewed violence is uncontested. The CAUSAL framing (socialization not biology) is where Pollack differs from Benenson and Sax.',
		dependsOn: ['emotional-funnel-anger', 'mask-of-masculinity'],
		collapseRisk:
			'Evolutionary psychologists (Benenson, Wilson) would argue male violence has deep biological roots that socialization can channel but not erase. If they are right, Pollack\'s claim that violence is purely downstream of disconnection is incomplete.',
		bookLocations: [
			{
				pages: 'pp. 385-396',
				chapter: 'Ch. 13: Violence — Slay or Be Slain',
				context: 'Opens with "IT BEGINS WITH DISCONNECTION: THE ROOTS OF MALE VIOLENCE". Develops the full disconnection → anger → violence chain. Cites Raine, Gilligan, and Miller directly.'
			}
		],
		evidenceRefs: [
			{ label: 'Raine, Brennan & Mednick (1997)', authorSearch: 'Raine' },
			{ label: 'Gilligan, James — Violence (1996)', authorSearch: 'Gilligan, James' },
			{ label: 'Miller, Jean Baker (Stone Center)', authorSearch: 'Miller' }
		]
	},

	// ======== Step 11 ========
	{
		id: 'suicide',
		step: 11,
		shortLabel: 'Male suicide epidemic',
		type: 'consequence',
		claim:
			'The most tragic outcome of the chain is the male suicide epidemic. The US 15-24 suicide rate tripled 1950-1990. Suicide is now the third leading cause of death in that age group, and the male-to-female suicide ratio is approximately 4:1 across all ages.',
		evidence:
			'**CDC suicide surveillance reports** (1985, 1995, 1997). **Joan Girgus and colleagues (Princeton)** found boys\' depression was correlated with BOTH popularity AND rejection — relationship-driven. **Rohde, Seeley & Mace** found boys\' suicidal ideation linked to lack of social supports. **Add Health (Resnick et al. 1997, JAMA)** — family connectedness predicts protection against emotional distress, violence, and suicide attempts. Gay youth specifically account for up to 30% of teen suicides; nearly 1/3 of gay/bisexual adolescent males attempted suicide.',
		status: 'green',
		explanation:
			'CDC data is the gold standard; the tripling of youth suicide and the 4:1 male skew are beyond dispute. The causal link to disconnection has supporting evidence from multiple studies but is not a direct experimental demonstration. Still, the connectedness-as-protection finding (Add Health) is one of the strongest pieces of evidence in adolescent health research.',
		dependsOn: ['hidden-depression', 'father-disengagement'],
		collapseRisk:
			'The statistics are uncontested. The causal claim — that disconnection specifically drives the male suicide skew — has supporting but not definitive evidence. Alternative explanations include method-availability (firearms) and different help-seeking patterns.',
		bookLocations: [
			{
				pages: 'pp. 348-375',
				chapter: 'Ch. 12: Hamlet\'s Curse',
				context: 'Depression and suicide discussed together; statistics + Add Health connectedness data.'
			},
			{
				pages: 'pp. 209-210',
				chapter: 'Ch. 9: Being "Different" — Being Gay',
				context: 'Specific statistics on gay youth suicide rates as subset of the broader male suicide pattern.'
			}
		],
		evidenceRefs: [
			{ label: 'CDC Suicide Surveillance', authorSearch: 'CDC' },
			{ label: 'Resnick et al. (1997), JAMA — Add Health', authorSearch: 'Resnick' },
			{ label: 'Girgus, Nolen-Hoeksema & Seligman', authorSearch: 'Girgus' }
		]
	},

	// ======== Step 12 ========
	{
		id: 'potency-connection',
		step: 12,
		shortLabel: 'Potency of connection heals',
		type: 'solution',
		claim:
			'The remedy is what Pollack calls "the potency of connection": staying emotionally attached to boys, refusing to push them away, giving them permission for full emotional range, and creating action-oriented bonding contexts (father enthrallment play, mother "car therapy") that respect the "timed silence syndrome." Pollack\'s bottom-line rule: "stay connected, no matter what."',
		evidence:
			'Theoretical grounding in Stone Center "connected self" research (Gilligan, Miller, Stiver, Surrey, Jordan). Secure attachment research from Gunnar (Minnesota) and Sroufe showing lifelong benefits. **Add Health (Resnick et al. JAMA 1997)** — family connectedness predicts positive outcomes across every domain. **Rosalind Barnett (Wellesley)** — young adult men with close parental relationships had lower psychological distress. **Blake Bowden (Cincinnati Children\'s)** — teens eating dinner with parents 5+/week significantly better adjusted. Italian "mammismo" as cross-cultural evidence: Italian National Statistics Institute 1997 — 58% of Italian "boys" 18-34 live with mothers with no reported psychological harm.',
		status: 'yellow',
		explanation:
			'The empirical evidence for "connection matters" is strong. What is yellow-rated is Pollack\'s specific *prescriptions* (timed silence syndrome, action love, car therapy, enthrallment play) — these are clinical wisdom, not tested interventions. No randomized trial has shown that following Pollack\'s specific advice produces better outcomes than alternatives.',
		dependsOn: ['hidden-depression', 'school-boy-failure', 'reactive-violence', 'suicide', 'father-disengagement'],
		collapseRisk:
			'Even if the specific prescriptions are not tested, the broader principle (secure attachment and family connectedness protect boys) is well-supported. The prescriptive advice is the weakest part of the chain but its collapse would not invalidate the overall connection-as-protective claim.',
		bookLocations: [
			{
				pages: 'pp. 47-51',
				chapter: 'Ch. 2: Shame and the Trauma of Separation',
				context: 'Primer for Parents — 8 concrete recommendations based on connection principle.'
			},
			{
				pages: 'pp. 172-180',
				chapter: 'Ch. 6: Real Fathers / Real Men',
				context: 'Section "How to Be a Well-Connected Father: Stay Attached — No Matter What" — explicit prescriptive synthesis.'
			},
			{
				pages: 'pp. 443-451',
				chapter: 'Epilogue: The Real Boy Code',
				context: 'Pollack\'s final synthesis of the "second gender revolution" thesis.'
			}
		],
		evidenceRefs: [
			{ label: 'Stone Center (Gilligan, Miller, Stiver, Jordan)', authorSearch: 'Stone Center' },
			{ label: 'Resnick et al. JAMA Add Health', authorSearch: 'Resnick' },
			{ label: 'Barnett, Rosalind (Wellesley)', authorSearch: 'Barnett' },
			{ label: 'Gunnar, Megan (U Minnesota)', authorSearch: 'Gunnar' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'potency-connection')!;
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
		'The argument chain for Real Boys is uneven. Of 12 links, 6 are rated green (solidly supported), 5 are yellow (contested or primarily theoretical), and 1 is untestable (the Boy Code itself as a framework). None are red. ' +
		'The empirical foundations are strongest at three points: (1) the father research (Step 5), anchored by the Glueck/Snarey 40-year Harvard follow-up plus multiple independent longitudinal studies; (2) the depression evidence (Step 8), with replicated findings from Nolen-Hoeksema, Smucker, Angst, Girgus, and Rohde; and (3) the school gender gap (Step 9), anchored by the Hedges/Nowell 1995 Science meta-analysis. ' +
		'The chain weakens at two critical theoretical points. First, the "premature separation trauma" claim (Step 3) is largely clinical-theoretical — Pollack\'s broader assertion that normative school-start separation is traumatic is not directly tested. Second, the "mask of masculinity" inference (Step 6) rests on Pollack\'s own Coopersmith lie-measure data plus qualitative case work; the mask is more a clinical metaphor than a measurable construct. ' +
		'The Boy Code itself (Step 2) is rated untestable because it is an organizing cultural framework, not a falsifiable empirical finding. ' +
		'The prescriptive chapter (Step 12) relies on clinical wisdom rather than tested interventions, though the broader principle of secure attachment is well-supported. ' +
		'Overall, Pollack\'s book is at its strongest where it aggregates existing empirical research (fathers, depression, schools) and at its weakest where it advances novel theoretical claims (premature separation trauma, mask metaphor). The evidence is narrower than for Kindlon & Thompson\'s Raising Cain and broader than for Gurian\'s Wonder of Boys.'
};
