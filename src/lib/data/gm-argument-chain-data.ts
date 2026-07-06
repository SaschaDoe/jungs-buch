// gm-argument-chain-data.ts
// Argument chain for Raewyn Connell, "Der gemachte Mann" (Masculinities, 2nd ed. 2005 / dt. 4. Aufl. 2015)

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
	'reject-biology':         { x: 18, y: 3, row: 0 },
	'reject-sex-role':        { x: 55, y: 3, row: 0 },
	'gender-as-structure':    { x: 35, y: 18, row: 1 },
	'body-reflexive':         { x: 75, y: 18, row: 1 },
	'multiple-masculinities': { x: 25, y: 34, row: 2 },
	'hegemonic-masculinity':  { x: 60, y: 34, row: 2 },
	'patriarchal-dividend':   { x: 18, y: 50, row: 3 },
	'four-group-studies':     { x: 50, y: 50, row: 3 },
	'crisis-tendencies':      { x: 82, y: 50, row: 3 },
	'mens-movement-critique': { x: 35, y: 66, row: 4 },
	'transnational-business': { x: 70, y: 66, row: 4 },
	'degendering-strategy':   { x: 50, y: 84, row: 5 },
};

export const rowLabels = [
	'Foundational rejections',
	'Theoretical reconstruction',
	'The masculinity typology',
	'Empirical & structural consequences',
	'Political diagnosis',
	'Strategic synthesis'
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
		id: 'reject-biology',
		step: 1,
		shortLabel: 'No "true masculinity" in the body',
		type: 'premise',
		claim:
			'There is no biological substrate that determines a "true masculinity" — neither sociobiology, neuroscience, nor hormone research has produced credible evidence that complex social patterns of male behavior follow from genes, brains, or testosterone. Within-sex variation always exceeds between-sex variation, and cross-cultural variability is enormous.',
		evidence:
			'Connell\'s critique of Wilson, Tiger (Men in Groups), and the sociobiology tradition. Reread of the Imperato-McGinley et al. 1979 Dominican Republic 5-alpha-reductase study: rather than proving physiology beats socialization, it shows a strict-division-of-labor village correcting a social misattribution. Kemper 1990 Social Structure and Testosterone: the testosterone-status causation runs SOCIAL-to-biological, not the reverse. Maccoby/Jacklin and Hyde meta-analyses showing tiny gender differences in personality traits.',
		status: 'green',
		explanation:
			'Connell\'s empirical-critical case against biological determinism is robust and converges with the broader scholarly consensus in the social sciences. The same critique appears in Eliot (Pink Brain, Blue Brain), Fine (Delusions of Gender), and Hyde\'s gender-similarities-hypothesis literature. Where Connell goes beyond Eliot is that she rereads supposedly-decisive evidence (the Dominican case) as actually supporting the social construction view.',
		dependsOn: [],
		collapseRisk:
			'If significant biological determination of complex social masculinity patterns were ever demonstrated, the entire social-construction framework would weaken. But forty years of sociobiology and evolutionary psychology have not produced this evidence; the burden of proof remains on the biological side.',
		bookLocations: [
			{
				pages: 'pp. 95-103',
				chapter: 'Ch. 2: Die Körper von Männern',
				context: 'Section "Maschine, Landschaft und Kompromiss" — Connell\'s sustained critique of biological determinism, with the Dominican Republic reread as the central case.'
			},
			{
				pages: 'pp. 47-66',
				chapter: 'Ch. 1: Die Wissenschaft von der Männlichkeit',
				context: 'The "Klinisches Wissen" section establishes that even Freud "let the cat out of the bag" — there is no biological essence of masculinity even in the foundational psychoanalytic tradition.'
			}
		],
		evidenceRefs: [
			{ label: 'Kemper (1990), Social Structure and Testosterone', authorSearch: 'Kemper' },
			{ label: 'Imperato-McGinley et al. (1979) — Dominican 5-alpha-reductase cases', authorSearch: 'Imperato' },
			{ label: 'Maccoby & Jacklin (1974), The Psychology of Sex Differences', authorSearch: 'Maccoby' },
			{ label: 'Wilson, E. O. — sociobiology critique target', authorSearch: 'Wilson' }
		]
	},

	// ======== Step 2 ========
	{
		id: 'reject-sex-role',
		step: 2,
		shortLabel: 'Sex-role theory is incoherent',
		type: 'premise',
		claim:
			'Sex-role theory — the framework that dominated 1950s-1970s social science and still circulates in popular men\'s literature — is logically incoherent and politically reactive. The same word "role" is asked to denote occupation, life-phase, status, AND gender; the framework treats people\'s social behavior as pre-arranged, understates power and inequality, reduces gender to two homogeneous categories, and obscures resistance.',
		evidence:
			'Connell\'s nine-point critique drawing on Carrigan/Connell/Lee 1985, Stacey/Thorne 1985, and her own earlier work (Gender and Power 1987). Concrete failure case: men who pursued "role reform" in the 1970s could not defend themselves in the 1980s against the mythopoetic backlash that called them "soft" — because role theory provides no power analysis with which to argue back.',
		status: 'yellow',
		explanation:
			'The theoretical critique is widely accepted in the sociology of gender — sex-role theory is essentially extinct as a research framework in academic sociology. But role-theoretic vocabulary persists in education, psychology, social work, and popular discourse. The "yellow" rating reflects that some readers may resist the systematic abandonment Connell demands; the underlying argument itself is solid.',
		dependsOn: [],
		collapseRisk:
			'If sex-role theory were rehabilitated as a useful framework — for instance via systems-theoretic or structural-functionalist revival — Connell\'s push toward a relational structural-practice framework would lose its motivating contrast. But this rehabilitation has not happened in 40 years.',
		bookLocations: [
			{
				pages: 'pp. 67-74',
				chapter: 'Ch. 1: Die Wissenschaft von der Männlichkeit',
				context: 'Section "Die männliche Rolle" — Connell\'s systematic point-by-point destruction of sex-role theory and its derivatives.'
			},
			{
				pages: 'pp. 119-124',
				chapter: 'Ch. 3: Die soziale Organisation von Männlichkeit',
				context: 'Section "Männlichkeit definieren" — Connell distinguishes four failed strategies (essentialist, positivist, normative, semiotic), where the normative strategy includes sex-role theory and Brannon\'s four-injunction Boy Code.'
			}
		],
		evidenceRefs: [
			{ label: 'Carrigan, Connell & Lee (1985), Theory and Society 14', authorSearch: 'Carrigan' },
			{ label: 'Stacey & Thorne (1985), Social Problems 32', authorSearch: 'Stacey' },
			{ label: 'Connell (1987), Gender and Power', authorSearch: 'Connell' }
		]
	},

	// ======== Step 3 ========
	{
		id: 'gender-as-structure',
		step: 3,
		shortLabel: 'Gender = three/four-dimensional structure of practice',
		type: 'theory',
		claim:
			'Gender must be understood as a way of ordering social practice within structures of relations. The structure has at least three dimensions: (a) power relations (the patriarchal axis of male dominance / female subordination); (b) production relations (gendered division of labor and the patriarchal dividend); (c) kathexis (the patterning of sexual desire and emotional attachment). In the 2005/2015 reformulation Connell adds (d) symbolic representation. No single-axis theory of patriarchy can capture the dynamics.',
		evidence:
			'Connell\'s synthesis of Mitchell 1971/1981, Rubin 1975, and her own Gender and Power 1987. The three-dimensional structure was developed across multiple works and is empirically motivated by the observation that struggles over each dimension have distinct historical trajectories (workplace equality, suffrage, queer rights). Meuser/Müller 2015 trace how Connell added the fourth dimension after critique by Hearn (2004), Beasley (2008), and others.',
		status: 'untestable',
		explanation:
			'A theoretical framework, not an empirical hypothesis. Its value is judged by how well it organizes empirical findings and predicts dynamics across cases. Connell argues — and the field has largely accepted — that single-dimension theories (Marxist patriarchy theories focusing on labor; radical-feminist theories focusing on sexuality; liberal-feminist theories focusing on rights) systematically miss key dynamics. The framework cannot be falsified directly but can be replaced by something more useful.',
		dependsOn: ['reject-biology', 'reject-sex-role'],
		collapseRisk:
			'A more parsimonious theory that captured the same dynamics would displace it. The Connell/Messerschmidt 2005 paper acknowledges revisions are needed; the framework is not closed. If a unified theory of gender practice emerged that needed fewer dimensions, this would be superseded.',
		bookLocations: [
			{
				pages: 'pp. 124-129',
				chapter: 'Ch. 3: Die soziale Organisation von Männlichkeit',
				context: 'Section "Geschlecht als Struktur der sozialen Praxis" — the formal definition and the three-dimensional structure.'
			},
			{
				pages: 'pp. 21-25',
				chapter: 'Vorwort zur deutschen Übersetzung (2014)',
				context: 'Connell explicitly lists the multidimensional treatment of men\'s lives (economic, power, emotional, and now symbolic) as one of the things the book preserves against post-structuralist flattening.'
			}
		],
		evidenceRefs: [
			{ label: 'Mitchell, Juliet (1971/1981), Woman\'s Estate', authorSearch: 'Mitchell' },
			{ label: 'Rubin, Gayle (1975), Traffic in Women', authorSearch: 'Rubin' },
			{ label: 'Connell & Messerschmidt (2005), Gender and Society', authorSearch: 'Messerschmidt' }
		]
	},

	// ======== Step 4 ========
	{
		id: 'body-reflexive',
		step: 4,
		shortLabel: 'Body-reflexive practice',
		type: 'theory',
		claim:
			'Bodies are simultaneously OBJECTS and AGENTS of social practice. Sociology since Descartes has lost the body; discourse theory since Foucault has made bodies into surfaces inscribed with meaning. Both moves remove bodies as participants in their own constitution. Connell proposes "körperreflexive Praxis" (body-reflexive practice) as the third way: a pattern in which bodies are both objects and agents, and structures arise from this practice within which bodies in turn get defined and adjusted.',
		evidence:
			'Biographical material from Connell\'s 36-interview corpus (Hugh Trelawney, Don Meredith, Tip Southern). Gerschick & Miller\'s study of men with physical disabilities and their three response patterns. Donaldson on factory workers using up their bodily capital. Curry on injured ex-athletes. Messner on sport-induced body damage. Theberge on sport training.',
		status: 'untestable',
		explanation:
			'Body-reflexive practice is a theoretical concept, not a falsifiable claim. It functions as a way to handle the body in social analysis without falling into either biological reductionism or pure discursive idealism. Its productivity is shown by how well it organizes the case-study material and bridges to feminist body-theory (Bordo, Grosz). Has been productive in subsequent disability studies, sport sociology, and trans studies.',
		dependsOn: ['reject-biology', 'gender-as-structure'],
		collapseRisk:
			'If a sharper conceptualization of bodies-in-practice emerged from sociology of embodiment or new materialism (Coole/Frost, Barad), Connell\'s formulation could be displaced. The concept itself is not closed.',
		bookLocations: [
			{
				pages: 'pp. 111-115',
				chapter: 'Ch. 2: Die Körper von Männern',
				context: 'Section "Banquos Geist: Körperreflexive Praxen" — the chapter\'s central positive move; Don Meredith vignette as illustration.'
			},
			{
				pages: 'pp. 104-110',
				chapter: 'Ch. 2: Die Körper von Männern',
				context: 'Sections on the inescapable body and "Schlamm und Blut" — sport injuries, body rebellion, workplace consumption of bodily capital.'
			}
		],
		evidenceRefs: [
			{ label: 'Gerschick & Miller — disability and masculinity', authorSearch: 'Gerschick' },
			{ label: 'Messner, Michael — Power at Play', authorSearch: 'Messner' },
			{ label: 'Curry, Tim — wrestling injuries', authorSearch: 'Curry' },
			{ label: 'Donaldson, Mike — factory workers', authorSearch: 'Donaldson' }
		]
	},

	// ======== Step 5 ========
	{
		id: 'multiple-masculinities',
		step: 5,
		shortLabel: 'Multiple masculinities exist',
		type: 'observation',
		claim:
			'There is no single masculinity. Empirical research across history, ethnography, and sociology shows multiple masculinities coexisting within any single gender order, standing in hierarchical and contested relations to one another. The historical record (Ch. 8) and the cross-cultural ethnographic record both confirm this.',
		evidence:
			'Connell\'s 45-page review in Ch. 1 of historical, ethnographic, and sociological research: Heward on English public schools, Grossberg on 19th-century US legal practice, Phillips on colonial New Zealand settler masculinity, Mead\'s Sex and Temperament, Herdt on the Sambia Guardians of the Flutes (where ritualized homosexuality is part of male maturation), Strathern on the Hagen, Messner on US sport, Klein on bodybuilding, Tolson/Messerschmidt/Collinson on class, Staples on race, Willis Learning to Labour.',
		status: 'green',
		explanation:
			'The empirical foundation here is unusually strong. The cross-cultural ethnographic record alone falsifies any "universal masculinity" claim. Decades of historical and sociological research since the 1980s have confirmed the heterogeneity. The single-masculinity assumption is incompatible with both historical evidence and lived experience of intersectional difference. This is the most empirically secure step in Connell\'s chain.',
		dependsOn: ['reject-biology'],
		collapseRisk:
			'Only an essentialist would deny that masculinities differ across cultures and historical periods. The actual disagreement is whether the differences are surface variations on a deeper essence (the position Connell rejects) or genuine multiplicity (the position the evidence supports). The latter has overwhelming empirical backing.',
		bookLocations: [
			{
				pages: 'pp. 75-87',
				chapter: 'Ch. 1: Die Wissenschaft von der Männlichkeit',
				context: 'Section "Die neuen Sozialwissenschaften" — Connell\'s synthesis of historical, ethnographic, and sociological literature establishing the multiplicity of masculinities.'
			},
			{
				pages: 'pp. 247-268',
				chapter: 'Ch. 8: Die Geschichte der Männlichkeit',
				context: 'The full 400-year history of Western masculinity as a sequence of gender orders, each with its own configuration of multiple masculinities.'
			}
		],
		evidenceRefs: [
			{ label: 'Herdt, Gilbert — Guardians of the Flutes', authorSearch: 'Herdt' },
			{ label: 'Mead, Margaret — Sex and Temperament', authorSearch: 'Mead' },
			{ label: 'Messerschmidt, James — Masculinities and Crime', authorSearch: 'Messerschmidt' },
			{ label: 'Willis, Paul — Learning to Labour', authorSearch: 'Willis' }
		]
	},

	// ======== Step 6 ========
	{
		id: 'hegemonic-masculinity',
		step: 6,
		shortLabel: 'Hegemonic masculinity = legitimating configuration',
		type: 'theory',
		claim:
			'Hegemonic masculinity is "the configuration of gender practice that embodies the currently accepted answer to the legitimacy problem of patriarchy and that ensures (or aims to ensure) the dominance of men and the subordination of women." It is NOT necessarily violent, NOT necessarily the most common pattern, and NOT necessarily embodied by the most powerful individuals. It is the version that authorizes the gender order. It can be challenged, displaced, and historically transformed. Around it stand SUBORDINATE (e.g. gay), COMPLICIT (most men), and MARGINALIZED (e.g. Black, working-class) masculinities.',
		evidence:
			'Connell\'s own sustained theoretical argument plus the empirical material from the four group studies (Ch. 4-7) showing that few interviewees actually embody the hegemonic pattern even when they benefit from it. Gramsci\'s analysis of class hegemony as model. The four-fold typology has become the most-cited masculinity framework in the world literature; over 14,000 citations. Meuser/Müller 2015 trace its global reception.',
		status: 'untestable',
		explanation:
			'The hegemonic masculinity framework is a theoretical lens, not a falsifiable proposition. It is most testable through comparison with alternative frameworks (Bourdieu\'s habitus theory; Hearn\'s "hegemony of men"; Beasley\'s tripartite distinction; Demetriou\'s "dialectical pragmatism"). Connell/Messerschmidt 2005 explicitly addresses critiques (Donaldson 1993, Hearn 2004, Beasley 2008, Coles 2009) and partially revises the framework but defends its core. The framework\'s test is its productivity, not its truth-value.',
		dependsOn: ['gender-as-structure', 'multiple-masculinities'],
		collapseRisk:
			'The most serious challenges are (a) Beasley\'s argument that the term conflates three different referents (a political mechanism, a cultural ideal, an empirical class of men) and (b) Hearn\'s argument that "hegemony of men" is sharper. These are revisions, not refutations. The framework would be displaced if a sharper conceptualization captured all the same phenomena with less ambiguity.',
		bookLocations: [
			{
				pages: 'pp. 129-135',
				chapter: 'Ch. 3: Die soziale Organisation von Männlichkeit',
				context: 'Section "Beziehungen zwischen Männlichkeiten: Hegemonie, Unterordnung, Komplizenschaft, Marginalisierung" — the formal definitions of all four typology elements. The single most-cited section of Connell\'s body of work.'
			},
			{
				pages: 'pp. 21-25',
				chapter: 'Vorwort zur deutschen Übersetzung (2014)',
				context: 'Connell explicitly clarifies that hegemonic masculinity is NOT a synonym for "violent or threatening masculinity" — "Macht, die routinemäßig durch Gewalt und Furcht ausgeübt wird, ist etwas anderes als Hegemonie: sie ist Kolonialismus, Faschismus oder häusliche Tyrannei."'
			}
		],
		evidenceRefs: [
			{ label: 'Carrigan, Connell & Lee (1985)', authorSearch: 'Carrigan' },
			{ label: 'Connell & Messerschmidt (2005), Gender and Society', authorSearch: 'Messerschmidt' },
			{ label: 'Gramsci, Antonio — hegemony', authorSearch: 'Gramsci' }
		]
	},

	// ======== Step 7 ========
	{
		id: 'patriarchal-dividend',
		step: 7,
		shortLabel: 'Patriarchal dividend & complicity',
		type: 'causal',
		claim:
			'Most men do not embody hegemonic masculinity but receive the "patriarchal dividend" — concrete material and symbolic benefits — by virtue of being men. This is the COMPLICIT structural position. It explains why patriarchy persists without most men actively defending it, and why individual self-help approaches cannot dismantle the gender order: the structure rewards passive participation. Concrete numbers (1992): men\'s average income ~2× women\'s in rich nations; 50/55 US billionaire fortunes controlled by men; 10:1 male:female parliamentarians worldwide.',
		evidence:
			'Time-budget studies, income data, parliamentary representation data, capital ownership data — converging quantitative evidence across many nations. UN gender development data. Connell synthesizes World Bank, ILO, and OECD statistics. The complicity concept is theoretically novel but the underlying empirical claim about distributional advantage is rock-solid.',
		status: 'green',
		explanation:
			'The empirical evidence for the patriarchal dividend (income gaps, capital ownership, political representation, time-use asymmetry) is among the most robust in the social sciences. The theoretical extension to "complicity" as a structural position is more contested but builds directly on the empirical pattern. Where Connell adds value is in making the structural position visible — most men do not see themselves as patriarchal but materially they participate in the dividend.',
		dependsOn: ['hegemonic-masculinity', 'gender-as-structure'],
		collapseRisk:
			'The empirical core (statistical advantage for men in income, capital, power) is uncontested. What can be questioned is whether "complicity" is the right theoretical frame or whether it morally overreaches by attributing collaboration to non-active participants. Even if the moral framing were rejected, the empirical pattern would remain.',
		bookLocations: [
			{
				pages: 'pp. 132-135',
				chapter: 'Ch. 3: Die soziale Organisation von Männlichkeit',
				context: 'Section on Komplizenschaft — the theoretical introduction of the patriarchal dividend.'
			},
			{
				pages: 'pp. 135-141',
				chapter: 'Ch. 3: Die soziale Organisation von Männlichkeit',
				context: 'Section "Historische Dynamik, Gewalt und Krisenanfälligkeit" — the concrete numerical evidence for the dividend across income, capital, parliament, time-use.'
			},
			{
				pages: 'pp. 315-323',
				chapter: 'Nachwort (2005)',
				context: 'Updated balance sheet of men\'s collective advantages and disadvantages across the four structural dimensions.'
			}
		],
		evidenceRefs: [
			{ label: 'UN Human Development Reports', authorSearch: 'UN' },
			{ label: 'Connell (1987), Gender and Power', authorSearch: 'Connell' },
			{ label: 'World Bank gender statistics', authorSearch: 'World Bank' }
		]
	},

	// ======== Step 8 ========
	{
		id: 'four-group-studies',
		step: 8,
		shortLabel: 'Four-group empirical study',
		type: 'observation',
		claim:
			'Connell\'s 36-interview empirical study (NSW, Australia, 1985-86) of four strategically chosen groups confirms the multiple-masculinities framework: (1) unemployed working-class young men show "protest masculinity" — appropriating hegemonic content under conditions of powerlessness; (2) profeminist environmental activists show painful attempts at "annulment of masculinity"; (3) gay men illustrate subordinated masculinity with internal reciprocity but limited political base; (4) professional middle-class men show a contradictory mix of traditional patriarchy and rationalized hegemony.',
		evidence:
			'36 biographical interviews, full transcripts, three-level analysis (narrative sequence + structural + dynamic), influenced by Sartre\'s "progressive-regressive method," Adler, Freud, Riesman\'s Faces in the Crowd, and Thomas/Znaniecki\'s The Polish Peasant. Each interview analyzed individually, then group-level analyses written.',
		status: 'yellow',
		explanation:
			'Strong as qualitative case-study research, but weak in the senses Connell herself acknowledges (Vorwort 2014): the sample is small (n=36), non-representative, all from one Australian state in 1985-86, and the group-level write-ups erase individual variation. Cannot bear the full weight Connell places on it as confirmation of the typology — but does provide rich illustration. Subsequent work (Holter & Aarseth 2002, Zulehner & Volz 1998) attempted larger quantitative studies but found similar patterns.',
		dependsOn: ['multiple-masculinities', 'hegemonic-masculinity', 'body-reflexive'],
		collapseRisk:
			'The four-group studies should be understood as illustration, not confirmation. If subsequent quantitative research had failed to find similar patterns, the framework would weaken. Holter, Aarseth, and the European CROME project (Hearn et al. 2002) provide some confirmation. The case studies cannot prove the framework but they make it concrete.',
		bookLocations: [
			{
				pages: 'pp. 145-150',
				chapter: 'Vorbemerkung zum zweiten Teil',
				context: 'Methodological framing: 36 interviews, three interviewers, NSW 1985-86, three-level analysis.'
			},
			{
				pages: 'pp. 151-244',
				chapter: 'Chs. 4-7',
				context: 'The four group studies in full: live-fast-die-young (Ch. 4), environmental activists (Ch. 5), gay men (Ch. 6), professional class (Ch. 7).'
			}
		],
		evidenceRefs: [
			{ label: 'Holter & Aarseth — Norwegian quantitative masculinity research', authorSearch: 'Holter' },
			{ label: 'Hearn et al. (2002), CROME European project', authorSearch: 'Hearn' },
			{ label: 'Zulehner & Volz (1998), Männer im Aufbruch', authorSearch: 'Zulehner' }
		]
	},

	// ======== Step 9 ========
	{
		id: 'crisis-tendencies',
		step: 9,
		shortLabel: 'Krisentendenz of the gender order',
		type: 'consequence',
		claim:
			'The current gender order shows specific "crisis tendencies" (Krisentendenz, deliberately preferred over "crisis of masculinity" which presupposes a coherent system) in each of its three structural dimensions: (a) power — global delegitimation of patriarchal authority by feminist movements; (b) labor — postwar expansion of women\'s paid labor and the resulting contradictions in the gendered division of work; (c) kathexis — public visibility of gay/lesbian sexuality and women\'s demands for sexual self-determination. Each dimension exhibits distinct dynamics; collectively they make masculinity a contested and unstable formation.',
		evidence:
			'Cross-national data on women\'s political participation (suffrage gains, parliamentary representation), labor force participation (postwar expansion), sexual rights (decriminalization, anti-discrimination law). Historical-comparative analysis of feminist movements, gay liberation, and the institutional changes they have produced. The "crisis tendency" framing is borrowed from Habermas but applied to the gender order.',
		status: 'yellow',
		explanation:
			'The empirical basis (women\'s movement gains, gay rights, labor force participation) is solid. What is yellow-rated is the theoretical framing of these as "crisis tendencies" of an unstable system. Critics could argue that the gender order has accommodated these changes without genuine crisis (the "balancing of change" Connell herself names in the Nachwort). The diagnosis is interpretive, not directly testable.',
		dependsOn: ['gender-as-structure', 'patriarchal-dividend'],
		collapseRisk:
			'If patriarchy has proven more stable than the "crisis tendency" framing suggests — for instance through the rise of authoritarian populism, masculine fundamentalism, or "transnational business masculinity" without any genuine destabilization — then the framework needs revision. Connell\'s own Nachwort partially concedes this: "balancing-of-change" rather than crisis is the dominant pattern.',
		bookLocations: [
			{
				pages: 'pp. 138-141',
				chapter: 'Ch. 3: Die soziale Organisation von Männlichkeit',
				context: 'Section establishing the three crisis tendencies, one per structural dimension.'
			},
			{
				pages: 'pp. 263-268',
				chapter: 'Ch. 8: Die Geschichte der Männlichkeit',
				context: '"Die gegenwärtige Lage" — the global gender order in its current state, with both global feminist pressure and rich-country-male power expansion.'
			}
		],
		evidenceRefs: [
			{ label: 'Habermas — Krisentendenz framework (background)', authorSearch: 'Habermas' },
			{ label: 'Bulbeck (1998), Re-Orienting Western Feminisms', authorSearch: 'Bulbeck' },
			{ label: 'UN Convention on Elimination of Discrimination Against Women (1979)', authorSearch: 'UN' }
		]
	},

	// ======== Step 10 ========
	{
		id: 'mens-movement-critique',
		step: 10,
		shortLabel: 'Mythopoetic men\'s movement = reactionary modernization',
		type: 'consequence',
		claim:
			'The mythopoetic men\'s movement (Bly\'s Iron John, Farrell\'s Myth of Male Power, Goldberg\'s Hazards of Being Male, Keen\'s Fire in the Belly) is not a path to genuine change but a "reactionary modernization" of patriarchy. It mistakes therapy for politics, replaces structural analysis with archetypal mythology, invents fictional feminist enemies (Goldberg\'s "Marilyn the female macho"), and provides white middle-class complicit men with a vocabulary of grievance that lets them maintain the patriarchal dividend while feeling wounded. Farrell\'s biographical trajectory — from organizing male NOW networks in 1974 to attacking political correctness in 1995 — exemplifies the pattern.',
		evidence:
			'Connell\'s detailed reading of the four exemplary books in Ch. 9. Tracing Farrell\'s 1974 → 1986 → 1995 trajectory. Quoting Goldberg\'s explicit acknowledgment that his feminist antagonists are fictional. Documenting Bly\'s actual practice ("workshops are led by paid therapists, participants talk about their feelings") versus the warrior-myth marketing. The contrast with Keen, who Connell judges more sympathetically as part of a broader reform project.',
		status: 'yellow',
		explanation:
			'The interpretive case is sharp and Connell\'s reading of the texts is well-grounded. What is yellow-rated is that this is a politically loaded interpretation, not a neutral observation. Adherents of the men\'s movement would contest the "reactionary" label. The Farrell trajectory and Goldberg fictional-feminist documentation are matters of textual fact; the political verdict is interpretive. Connell has sociological company here (Messner 1997, Kimmel 1996) but is also opposed by men\'s movement spokespersons.',
		dependsOn: ['hegemonic-masculinity', 'patriarchal-dividend'],
		collapseRisk:
			'If the men\'s movement actually produced sustained reductions in male violence, paid-work asymmetry, or political dominance — outcomes the structural analysis predicts it cannot — Connell\'s diagnosis would be falsified. Forty years on, no such outcomes are visible. The men\'s movement has remained politically marginal in exactly the way Connell predicted.',
		bookLocations: [
			{
				pages: 'pp. 271-278',
				chapter: 'Ch. 9: Männlichkeitspolitik',
				context: 'Section "Männlichkeitstherapie" — the detailed reading of Farrell, Goldberg, Bly, Keen as exemplars of therapeutic-political masculinity.'
			},
			{
				pages: 'pp. 67-74',
				chapter: 'Ch. 1: Die Wissenschaft von der Männlichkeit',
				context: 'Earlier critique of the 80s mythopoetic backlash against the 70s "soft" masculine reformers.'
			}
		],
		evidenceRefs: [
			{ label: 'Bly, Robert — Iron John', authorSearch: 'Bly' },
			{ label: 'Farrell, Warren — The Myth of Male Power', authorSearch: 'Farrell' },
			{ label: 'Goldberg, Herb — The Hazards of Being Male', authorSearch: 'Goldberg' },
			{ label: 'Kimmel, Michael — Manhood in America', authorSearch: 'Kimmel' }
		]
	},

	// ======== Step 11 ========
	{
		id: 'transnational-business',
		step: 11,
		shortLabel: 'Transnational business masculinity',
		type: 'theory',
		claim:
			'The currently emerging globally hegemonic form of masculinity is "transnational business masculinity": the masculinity of managers in transnational corporations. Characterized by emotional isolation, high competitiveness, individualism, tolerance of (some) sexual diversity, embedded in neoliberalism. Replaced earlier "local bourgeois masculinity" embedded in conservative national cultures. Has variants: an East Asian Confucian variant with more hierarchy and consensus; a secularized Christian variant in North America with more hedonism and tolerance for open conflict.',
		evidence:
			'Connell & Wood 2005 biographical study of Australian managers; Donaldson 2003 biographical study of the super-rich; Hooper 2000 on The Economist magazine\'s gendered language; Gee/Hull/Lankshear 1996 on management literature; Wajcman 1999 on women in management.',
		status: 'yellow',
		explanation:
			'A productive concept that has gained traction in business studies and globalization research, but the empirical base is thinner than for the earlier patriarchal-dividend material — a handful of biographical studies, content analyses of business media, and observational research. The 2001-2003 turn (Bush, Iraq, post-9/11 hard-line politics) showed that "harter Kurs" militarized masculinity remains a competing form even at the global elite level. The concept may be over-generalized.',
		dependsOn: ['hegemonic-masculinity', 'crisis-tendencies'],
		collapseRisk:
			'If transnational business masculinity is more variable than Connell suggests — if there is no coherent "global hegemonic form" but rather multiple regional hegemonic forms in tension — then the concept needs revision. Hooper\'s alternative (hard, power-oriented military-diplomatic masculinity vs. softer corporate masculinity) suggests a two-form picture that may be more accurate.',
		bookLocations: [
			{
				pages: 'pp. 29-46',
				chapter: 'Einführung zur 2. englischen Ausgabe (2005)',
				context: 'First introduction of transnational business masculinity as a key new concept of the 2005 edition.'
			},
			{
				pages: 'pp. 326-335',
				chapter: 'Nachwort (2005)',
				context: 'Extended discussion of transnational business masculinity, its variants, and Hooper\'s alternative two-form model.'
			}
		],
		evidenceRefs: [
			{ label: 'Connell & Wood (2005), Men and Masculinities', authorSearch: 'Connell' },
			{ label: 'Donaldson (2003) — biographical study of the super-rich', authorSearch: 'Donaldson' },
			{ label: 'Hooper, Charlotte (2001), Manly States', authorSearch: 'Hooper' },
			{ label: 'Wajcman, Judy (1999), Managing Like a Man', authorSearch: 'Wajcman' }
		]
	},

	// ======== Step 12 ========
	{
		id: 'degendering-strategy',
		step: 12,
		shortLabel: 'Degendering + collective politics',
		type: 'solution',
		claim:
			'The strategic prescription is "complex equality" (Walzer) applied to all three (now four) gender structures, pursued through collective politics rather than individual self-help. Concretely: practical deconstruction of hegemonic masculinity ("degendering"), recombination rather than elimination of gendered elements ("Bodybuilder können im Kindergarten arbeiten, Lesben können Lederjacken tragen"), alliance with feminist and gay liberation movements, work in concrete institutional arenas (curriculum reform, AIDS politics, antiracism, fatherhood), and international coordination (NOMAS, White Ribbon Campaign). REJECT the men\'s-group model — its structural base as "imperialists in a slave revolt" (Tolson) is not equivalent to feminism\'s or gay liberation\'s.',
		evidence:
			'Connell\'s normative argument grounded in social-justice principles. Empirical evidence for what works: White Ribbon Campaign reach, NOMAS programs, the international diffusion of profeminist men\'s organizing (Germany, UK, Australia, Mexico, Russia, India, Nordic countries, Japan). The 2004 UN Commission on the Status of Women session on men and boys as evidence of institutional uptake.',
		status: 'untestable',
		explanation:
			'A normative-strategic prescription, not an empirical hypothesis. Cannot be tested directly. The most that can be done is observe whether collective approaches outperform individual ones in producing measurable change — and the limited evidence (declining intimate partner violence in jurisdictions with sustained White Ribbon-style campaigns) is suggestive but not decisive. The framework is best evaluated by whether it organizes effective political work, which it has clearly done in some contexts.',
		dependsOn: ['mens-movement-critique', 'transnational-business', 'patriarchal-dividend', 'crisis-tendencies'],
		collapseRisk:
			'The clearest counterargument is that radical collective politics has not in fact dismantled the patriarchal dividend in 30 years of trying. Connell\'s own closing warning (Nachwort) acknowledges that neoliberal and neoconservative political conditions are increasingly hostile to her recommended path. The strategy may be correct in principle and politically blocked in practice.',
		bookLocations: [
			{
				pages: 'pp. 297-313',
				chapter: 'Ch. 10: Praxis und Utopie',
				context: 'Connell\'s strategic synthesis: action goals across the three dimensions, practical deconstruction, forms of action, the rejection of the men\'s-group model.'
			},
			{
				pages: 'pp. 335-338',
				chapter: 'Nachwort (2005)',
				context: 'Updated international map of profeminist men\'s organizing, with the closing warning about neoconservative headwinds.'
			}
		],
		evidenceRefs: [
			{ label: 'Walzer, Michael — Spheres of Justice', authorSearch: 'Walzer' },
			{ label: 'Kaufman, Michael — White Ribbon Campaign', authorSearch: 'Kaufman' },
			{ label: 'NOMAS — National Organization for Men Against Sexism', authorSearch: 'NOMAS' },
			{ label: 'Tolson, Andrew — The Limits of Masculinity', authorSearch: 'Tolson' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

/** Find the "critical path" -- the weakest chain of dependencies to the final conclusion */
export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'degendering-strategy')!;
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
		'Connell\'s argument chain is unusual in this library because most of its central claims are theoretical frameworks rather than empirical hypotheses. Of 12 links, 2 are rated green (the rejection of biological determinism, the multiple-masculinities observation), 5 are yellow (the sex-role critique, the four-group studies, the crisis-tendency diagnosis, the men\'s-movement critique, transnational business masculinity), and 5 are untestable as theoretical frameworks (the structural-practice model, body-reflexive practice, hegemonic masculinity itself, the patriarchal dividend in its strong form, and the strategic prescription). None are red. ' +
		'The empirical core is rock-solid where it matters: (1) within-sex variation always exceeds between-sex variation, undermining biological determinism; (2) cross-cultural and historical evidence overwhelmingly confirms multiple coexisting masculinities; (3) statistical evidence for the patriarchal dividend (income, capital, parliamentary representation, time-use) is among the most robust findings in the social sciences. ' +
		'The theoretical heart of the book — the hegemonic/subordinate/complicit/marginalized typology — is not a falsifiable claim but an organizing framework. Its productivity is shown by 14,000+ citations across sociology, history, education, health, and gender studies; its weaknesses are documented by Connell\'s own self-revisions (Connell & Messerschmidt 2005 acknowledged critiques from Donaldson 1993, Hearn 2004, Beasley 2008). ' +
		'The four-group empirical study (Ch. 4-7) is small (n=36), non-representative, and 40 years old; Connell herself notes in the 2014 Vorwort that she would have written it as individual case studies in hindsight. It functions as illustration, not confirmation. ' +
		'The political-strategic claims (men\'s movement as reactionary modernization, transnational business masculinity as new global hegemonic form, degendering + alliance politics as the path forward) are interpretive and normative. They have considerable explanatory power but cannot be tested directly. Connell\'s own Nachwort partially concedes the strategy is politically blocked under neoliberal/neoconservative conditions. ' +
		'Compared to its peers in this library: Connell is the ONLY rigorous academic sociology — the others are psychology, neuroscience, evolutionary biology, or popular nonfiction. She provides the theoretical foundation that Dittmann (Jungs von heute) explicitly draws on (Dittmann cites Connell at refs 52, 58-59, 145, 289). She directly opposes Sax/Gurian/Benenson on biology and explicitly analyzes the Bly/Farrell/Goldberg lineage as politics rather than therapy. Her overlap with Eliot (Pink Brain Blue Brain) on plasticity, with Pollack (Real Boys) on radical psychoanalysis, and with Kindlon & Thompson (Raising Cain) on emotional miseducation is partial but real. The book\'s distinctive contribution is the institutional-historical-structural perspective that no other book in the library provides.'
};
