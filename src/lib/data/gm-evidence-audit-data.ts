// gm-evidence-audit-data.ts
// Cross-referencing claims in Connell's "Der gemachte Mann" with replication status and methodological critiques

export interface EvidenceItem {
	claim: string;
	source: string;
	pages: string;
	centrality: 'critical' | 'supporting' | 'minor';
	status: 'red' | 'yellow' | 'green' | 'untestable';
	statusLabel: string;
	detail: string;
}

export const evidenceStatusInfo = {
	red: { label: 'Problematic', color: '#ef4444', icon: '🔴', description: 'Study not replicated, refuted, or subject to strong methodological criticism' },
	yellow: { label: 'Shaky / Contested', color: '#f59e0b', icon: '🟡', description: 'Single study, weak replication, or presented more strongly than the evidence warrants' },
	green: { label: 'Solidly supported', color: '#10b981', icon: '🟢', description: 'Replicated, meta-analyses, official statistics, or well-established findings' },
	untestable: { label: 'Theory / Not testable', color: '#8b5cf6', icon: '🟣', description: 'Theoretical framework, not an empirically falsifiable finding' }
};

export const evidenceItems: EvidenceItem[] = [
	// ============ GREEN ============
	{
		claim: 'Within-sex variation in personality traits and cognitive abilities is much larger than between-sex variation; cross-cultural variability is enormous and overwhelms any "universal" gender difference.',
		source: 'Maccoby & Jacklin, The Psychology of Sex Differences (1974); Hyde\'s gender-similarities-hypothesis tradition; Connell\'s synthesis of personality and trait research.',
		pages: 'Ch. 2, pp. 96-103',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Foundational meta-analytic finding replicated across decades',
		detail:
			'The most consistently replicated finding in gender and individual-differences research. Maccoby & Jacklin established it in 1974, and Hyde\'s 2005 American Psychologist paper "The Gender Similarities Hypothesis" reviewed 46 meta-analyses confirming d < 0.35 for the vast majority of psychological traits. Eliot uses the same finding in Pink Brain, Blue Brain. This is the empirical bedrock of Connell\'s anti-essentialist position.'
	},
	{
		claim: 'Sociobiological causal claims (testosterone causes aggression, evolved gender roles) cannot bear the weight placed on them. Kemper\'s Social Structure and Testosterone showed the testosterone-status causation often runs SOCIAL-to-biological, not the reverse.',
		source: 'Kemper, Theodore D. (1990), Social Structure and Testosterone: Explorations of the Socio-Bio-Social Chain. Rutgers University Press.',
		pages: 'Ch. 2, pp. 96-100',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Peer-reviewed monograph from established sociologist of emotion',
		detail:
			'Kemper\'s book documented multiple cases (sport, military, academic competition) where social position changes preceded and predicted hormone changes — exactly the opposite of the sociobiological causal direction. The finding has been confirmed by subsequent endocrinological research on dominance hierarchies in primates and humans. Connell uses Kemper as the decisive empirical lever against testosterone-as-cause arguments.'
	},
	{
		claim: 'The Imperato-McGinley et al. 1979 Dominican Republic 5-alpha-reductase study (18 cases of "switched" gender identity at puberty) does NOT prove biology beats socialization. Read carefully, it shows a strict-division-of-labor village correcting a social misattribution; medical professionals now correct these cases at birth — supporting rather than challenging the dichotomous gender order.',
		source: 'Imperato-McGinley, J., et al. (1979), "Androgens and the Evolution of Male-Gender Identity Among Male Pseudohermaphrodites With 5α-Reductase Deficiency." New England Journal of Medicine 300(22): 1233-1237. Reread by Connell.',
		pages: 'Ch. 2, pp. 100-103',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Source data is solid; Connell\'s reread is methodologically sharp',
		detail:
			'The Dominican Republic case has been used by sociobiologists for decades as the strongest evidence that biology determines gender identity. Connell\'s reread is one of the sharpest methodological moves in the book: she shows that the data actually support the social-construction reading, since (a) the village had a strict gendered division of labor that incentivized "switching," (b) several of the 18 cases never switched, and (c) modern medicine\'s response (early surgical correction) reveals the social commitment to dichotomous gender, not its biological inevitability. Subsequent reinterpretations (Fausto-Sterling, Sexing the Body) have validated Connell\'s reread.'
	},
	{
		claim: 'Multiple masculinities coexist within any single gender order. Cross-cultural ethnographic research shows enormous variability — including societies (Sambia of New Guinea) where ritualized male-male sexual practices are part of normative male maturation.',
		source: 'Herdt, Gilbert (1981), Guardians of the Flutes: Idioms of Masculinity. Plus Mead\'s Sex and Temperament (1935), Strathern\'s Hagen ethnography, and dozens of other studies synthesized in Connell\'s Ch. 1.',
		pages: 'Ch. 1, pp. 75-87',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Decades of converging cross-cultural ethnographic research',
		detail:
			'The cross-cultural evidence for multiple masculinities is perhaps the most robust empirical foundation in the book. Herdt\'s Sambia work alone is enough to refute any "universal masculinity" claim. The combined weight of historical, ethnographic, and sociological case studies makes the multiple-masculinities observation essentially undeniable. The disagreement with biological essentialists is over whether these are surface variations on a deeper essence (essentialist position) or genuine multiplicity (Connell\'s position) — and the latter has the overwhelming evidence.'
	},
	{
		claim: 'Statistical evidence for the patriarchal dividend is rock-solid: men\'s average income ~2× women\'s in rich nations (1992 baseline), 50/55 US billionaire fortunes controlled by men, ~10:1 male:female parliamentarians worldwide, women perform a disproportionate share of unpaid household and care work.',
		source: 'UN Human Development Reports, World Bank gender statistics, ILO labor statistics, OECD time-use studies. Synthesized in Connell\'s 1987 Gender and Power and updated in the 1995/2005 editions of Masculinities.',
		pages: 'Ch. 3, pp. 135-141',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Among the most robust empirical findings in the social sciences',
		detail:
			'The statistical pattern of male advantage in income, capital ownership, political representation, and unpaid work asymmetry is uncontested across all major data sources (UN, World Bank, ILO, OECD, national statistical offices). The pattern has narrowed but persisted in the 30 years since Connell\'s 1992 baseline. The empirical basis for the "patriarchal dividend" concept is one of the strongest sources of evidence in the entire book.'
	},
	{
		claim: 'Sport injuries, alcohol abuse, drug use, and shortened life expectancy among ex-athletes are well-documented patterns; the male body is "used up" in pursuit of hegemonic-masculine ideals.',
		source: 'Curry, Tim (1991), "Fraternal Bonding in the Locker Room"; Messner, Michael (1992), Power at Play: Sports and the Problem of Masculinity; Donaldson, Mike — factory workers studies; Theberge on sport training.',
		pages: 'Ch. 2, pp. 107-110',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Replicated across multiple sport-sociology studies',
		detail:
			'Sport-sociology research has converged for 30 years on the patterns Connell describes: routinized injury culture, normalized doping, accidents, chronic stress, and the consequent damage to former athletes\' bodies and longevity. Curry, Messner, and the broader sport-sociology field have produced extensive evidence. The findings inform Connell\'s body-reflexive practice argument by showing the body as both object (of training and damage) and agent (of self-imposition of dangerous practices).'
	},
	{
		claim: 'Gerschick & Miller\'s study of men with physical disabilities found three response patterns: (1) intensify effort to meet hegemonic standards, (2) modify one\'s definition of masculinity without abandoning male values, (3) reject hegemonic masculinity entirely.',
		source: 'Gerschick, Thomas J., and Adam Stephen Miller (1994/1995), "Coming to Terms: Masculinity and Physical Disability." In Sabo & Gordon eds., Men\'s Health and Illness.',
		pages: 'Ch. 2, p. 105',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published peer-reviewed disability-studies research',
		detail:
			'A widely cited foundational study in the masculinity-and-disability literature. The three-pattern finding has been replicated in subsequent disability studies and provides Connell with concrete empirical support for body-reflexive practice. The disability-studies field has built on this framework.'
	},
	{
		claim: 'Female head-of-state numbers, parliamentary representation, and labor force participation have all increased substantially since the 1970s in OECD countries, but men still occupy 90%+ of elite positions in business, military, and high politics.',
		source: 'UN Human Development Reports; Inter-Parliamentary Union data; national labor force statistics. Connell synthesizes across multiple data series.',
		pages: 'Ch. 3, pp. 138-141; Nachwort pp. 320-324',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Continuously updated official statistical data',
		detail:
			'The "narrowing but persistent" pattern of gendered elite representation is among the most stably documented findings in comparative political and economic sociology. Connell\'s 1992 baseline numbers have been updated repeatedly and the qualitative pattern (asymptotic narrowing) has held. This is the empirical core of the "crisis tendency" in power relations.'
	},

	// ============ YELLOW ============
	{
		claim: 'The 36-interview empirical study of four groups in NSW, Australia 1985-86 confirms multiple-masculinities theory: protest masculinity (working-class unemployed), profeminist masculinity (environmental activists), gay masculinity, and contradictory professional-class masculinity.',
		source: 'Connell\'s own qualitative research program. 36 biographical interviews, three-level analysis, Sartre-influenced "progressive-regressive method."',
		pages: 'Chs. 4-7, pp. 145-244',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Small, non-representative, geographically and historically narrow sample',
		detail:
			'Connell herself acknowledges in the 2014 Vorwort that she would have written the empirical chapters as individual case studies in hindsight. The sample is small (n=36), non-representative, drawn from one Australian state in 1985-86, and the group-level write-ups erase individual variation. The qualitative analysis is rich and methodologically sophisticated, but cannot bear the full theoretical weight Connell places on it as confirmation of the framework. Subsequent quantitative studies (Holter & Aarseth 2002 in Norway, Zulehner & Volz 1998 in Germany, the European CROME project) provide some confirmation but with their own limitations.'
	},
	{
		claim: '"Protest masculinity" is the characteristic form of marginalized working-class young men under conditions of unemployment — appropriating hegemonic content (toughness, risk-taking, misogyny, homophobia) while modifying it under conditions of powerlessness.',
		source: 'Connell\'s analysis of the unemployed working-class group in Ch. 4 (Jack Harley, Eel, Patrick Vincent, Alan Rubin, Mal Walton). Theoretical lineage from Adler\'s "männlicher Protest." Comparison cases (Stewart Hardy, Danny Taylor, Paul Gray) of escape from this pattern.',
		pages: 'Ch. 4, pp. 151-178',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Compelling case studies; concept widely used but undertheorized at edges',
		detail:
			'The protest masculinity concept has become widely used in subsequent sociology of marginalized masculinities (Messerschmidt, Anderson, Pyke). It provides a productive frame for understanding the bravado-toughness-risk-taking pattern in disadvantaged young men. But like all of Connell\'s case-study material, it rests on a small qualitative sample. The Adlerian theoretical lineage gives it depth but also makes the concept difficult to operationalize for empirical comparison across studies.'
	},
	{
		claim: 'Profeminist environmental activists experience "gender vertigo" — a structural loss-of-self when attempting to undo Oedipal masculinization. Documented in linguistic shifts during interviews (Peter Geddes\'s shift from structured narrative to free-associative speech).',
		source: 'Connell\'s analysis of the six-man environmental-activist group in Ch. 5. Freudian interpretation of the "complete Oedipus complex" with both father-identification AND mother-identification as resources.',
		pages: 'Ch. 5, pp. 179-202',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Provocative theoretical reading of qualitative material',
		detail:
			'The theoretical interpretation (Freudian "complete Oedipus complex" providing resources for profeminist masculinity) is one of the most distinctive but also most contested moves in the book. Some readers find it deeply illuminating; others find it speculative psychoanalytic overreach. The qualitative material itself is rich and Connell\'s reading is internally coherent. Whether it generalizes is unclear.'
	},
	{
		claim: 'The mythopoetic men\'s movement (Bly, Farrell, Goldberg, Keen) is a "reactionary modernization" of patriarchy, not a path to genuine change.',
		source: 'Connell\'s detailed reading of the four exemplary books in Ch. 9. Documents Farrell\'s 1974→1986→1995 trajectory (organizing male NOW networks → arguing women have all the power → attacking political correctness). Quotes Goldberg\'s acknowledgment that his feminist antagonists are fictional ("Marilyn the female macho, Ann the emancipated ice queen").',
		pages: 'Ch. 9, pp. 271-278',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Sharp interpretive reading; politically loaded; sociologically supported',
		detail:
			'Connell\'s textual evidence (Farrell trajectory, Goldberg acknowledgment, Bly\'s actual workshop practice) is solid as documentation. The political verdict ("reactionary modernization") is interpretive and contested. Connell has sociological company (Messner 1997, Kimmel 1996, Schwalbe 1996) but is opposed by men\'s-movement spokespersons. The 30-year track record of the movement (politically marginal, no measurable impact on patriarchal indicators) supports Connell\'s diagnosis but cannot prove the causation.'
	},
	{
		claim: '"Crisis tendencies" in the gender order: power relations (delegitimation by feminist movements), production relations (women\'s entry into paid labor), kathexis (gay/lesbian visibility, women\'s sexual self-determination).',
		source: 'Connell\'s historical-comparative synthesis applying Habermas\'s "crisis tendency" framework to the gender order. Empirical basis in cross-national data on suffrage, labor force participation, and gay rights legislation.',
		pages: 'Ch. 3, pp. 138-141',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Empirical pattern solid; "crisis" framing interpretive',
		detail:
			'The empirical changes Connell points to (women\'s movement gains, gay rights, labor force participation) are real and well-documented. What is yellow-rated is whether these constitute a "crisis" of the gender order or just incremental "balancing-of-change" (the alternative interpretation Connell herself acknowledges in the Nachwort). The theoretical framing is contested even by Connell\'s own later writing.'
	},
	{
		claim: 'Transnational business masculinity is the currently emerging globally hegemonic form: emotionally isolated, highly competitive, individualist, embedded in neoliberalism, with East Asian and North American variants.',
		source: 'Connell & Wood (2005) biographical study of Australian managers; Donaldson (2003) on the super-rich; Hooper (2000/2001) on The Economist magazine and "Manly States"; Gee, Hull & Lankshear (1996) on management literature; Wajcman (1999) on women in management.',
		pages: 'Nachwort pp. 326-335; Einführung pp. 41-46',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Productive concept; thinner empirical base than earlier patriarchal-dividend material',
		detail:
			'A handful of biographical and discourse-analytic studies form the empirical base. The concept has been productive in business studies, globalization research, and international relations (especially via Hooper\'s "Manly States"). But the 2001-2003 turn (Bush, Iraq, post-9/11 hard-line politics) showed that older militarized masculinity remains a competing form even at the global elite level. Hooper\'s alternative two-form picture (hard military-diplomatic vs. softer corporate) may be more accurate. The concept has not been tested with large-N empirical research.'
	},
	{
		claim: 'Sex-role theory is logically incoherent: the same word "role" is asked to denote occupation, status, life-phase, AND gender; the framework treats people as pre-arranged actors, understates power, and obscures resistance.',
		source: 'Connell\'s nine-point critique drawing on Carrigan, Connell & Lee (1985) "Toward a New Sociology of Masculinity" in Theory and Society 14; Stacey & Thorne (1985) "The Missing Feminist Revolution in Sociology" in Social Problems 32.',
		pages: 'Ch. 1, pp. 67-74',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Widely accepted in academic sociology; resisted in popular discourse',
		detail:
			'The theoretical critique is essentially settled in academic sociology of gender — sex-role theory is extinct as a research framework. But role-theoretic vocabulary persists in education, psychology, social work, and popular discourse. The yellow rating reflects that some readers may resist Connell\'s wholesale rejection; the underlying argument itself is solid.'
	},
	{
		claim: 'Black masculinities are integral to the dynamics between masculinities. Black sports stars become models of "masculine toughness" while the phantasy figure of the "black rapist" plays a significant role in white gender politics.',
		source: 'Staples, Robert (1982), Black Masculinity. Connell\'s synthesis with race-and-gender literature plus the Hoch White Hero, Black Beast tradition. Ice-T interview on "The Man" as African-American parlance for white institutional power.',
		pages: 'Ch. 3, pp. 134-135',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Important argument; case-specific evidence; later refined by intersectionality scholars',
		detail:
			'Connell\'s point about marginalized Black masculinities and their role in white gender politics has been substantially developed by subsequent intersectionality scholars (Collins, Crenshaw). Connell\'s 1995/2005 treatment is somewhat schematic compared to the later literature but established the key claim: marginalized masculinities are not merely victims of the gender order but are integral to its dynamics.'
	},
	{
		claim: 'The 1985 Carrigan/Connell/Lee paper "Toward a New Sociology of Masculinity" in Theory and Society 14 is the founding text of the new sociology of masculinity and the first formulation of "hegemonic masculinity."',
		source: 'Carrigan, Tim, R. W. Connell, and John Lee (1985), "Toward a New Sociology of Masculinity." Theory and Society 14(5): 551-604.',
		pages: 'Vorwort, Ch. 1, throughout',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Historically central paper; itself a synthesis rather than empirical research',
		detail:
			'The 1985 paper is the historical founding text of the field — a fact, not an evaluation. As an empirical claim ("hegemonic masculinity exists and works as theorized") it is yellow because the paper itself was a theoretical synthesis, not an empirical study. The hegemonic masculinity framework rests on subsequent empirical work, not the founding paper.'
	},

	// ============ UNTESTABLE ============
	{
		claim: 'Gender = a way of ordering social practice within a three (now four) dimensional structure: power relations, production relations, kathexis (emotional/sexual attachment), plus symbolic representation.',
		source: 'Connell\'s synthesis of Mitchell (1971/1981), Rubin (1975), her own Gender and Power (1987), and the 2005/2015 reformulation responding to Hearn, Beasley, and other critics.',
		pages: 'Ch. 3, pp. 124-129; Vorwort pp. 21-25',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Theoretical framework, not empirical hypothesis',
		detail:
			'The three/four-dimensional structural model of gender is a theoretical lens, not a falsifiable hypothesis. Its value is judged by how well it organizes empirical findings. Has been broadly accepted in academic sociology of gender as an improvement over single-dimensional theories (Marxist, radical-feminist, liberal-feminist). Cannot be falsified directly; could be displaced by a more parsimonious framework that captures the same dynamics.'
	},
	{
		claim: 'Hegemonic masculinity = "the configuration of gender practice that embodies the currently accepted answer to the legitimacy problem of patriarchy and that ensures (or aims to ensure) the dominance of men and the subordination of women." Around it: subordinate, complicit, marginalized masculinities.',
		source: 'Connell\'s formal definitions in Ch. 3 (pp. 129-135). Origin in Carrigan, Connell & Lee 1985. Subsequent refinement in Connell & Messerschmidt 2005.',
		pages: 'Ch. 3, pp. 129-135',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Theoretical framework; the most-cited masculinity concept in world literature',
		detail:
			'Hegemonic masculinity is a theoretical organizing concept, not a falsifiable proposition. With over 14,000 citations across sociology, history, education, health, gender studies, and international relations, it is the single most influential framework in the field. Its productivity is its test. Connell & Messerschmidt 2005 explicitly addresses critics (Donaldson 1993, Hearn 2004, Beasley 2008, Coles 2009) and partially revises but defends the core. Could be displaced by a sharper conceptualization.'
	},
	{
		claim: 'Body-reflexive practice: bodies are simultaneously OBJECTS and AGENTS of social practice, and structures arise from this practice within which bodies in turn get defined and adjusted.',
		source: 'Connell\'s theoretical move in Ch. 2, integrating biographical material from interviewees (Hugh Trelawney, Don Meredith, Tip Southern), Gerschick & Miller on disability, Curry on sport injuries.',
		pages: 'Ch. 2, pp. 111-115',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Theoretical concept; productive in subsequent embodiment research',
		detail:
			'Body-reflexive practice is a conceptual proposal, not a testable claim. Its function is to handle the body in social analysis without falling into either biological reductionism or pure discursive idealism. The concept has been productive in subsequent disability studies, sport sociology, trans studies, and new-materialist approaches to embodiment. Could be displaced by sharper conceptualizations from new materialism (Coole/Frost, Barad) but has not been.'
	},
	{
		claim: 'Strategic prescription: "complex equality" (Walzer) applied to all three (now four) gender structures, pursued through collective politics — alliances with feminist and gay liberation movements, work in concrete institutional arenas (curriculum reform, AIDS politics, antiracism, fatherhood), and international coordination. REJECT the men\'s-group model.',
		source: 'Connell\'s normative argument in Ch. 10, grounded in social-justice principles. Empirical reference points: NOMAS, White Ribbon Campaign, the 2004 UN Commission on the Status of Women session on men and boys.',
		pages: 'Ch. 10, pp. 297-313; Nachwort pp. 335-338',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Normative-strategic prescription, not empirical hypothesis',
		detail:
			'A normative-political prescription cannot be tested as an empirical hypothesis. The most one can ask is whether collective approaches outperform individual approaches in producing measurable change — and the limited evidence (declining intimate-partner violence in jurisdictions with sustained White Ribbon-style campaigns) is suggestive but not decisive. Connell\'s own Nachwort partially concedes the strategy is politically blocked under neoliberal/neoconservative conditions. The framework\'s value is whether it organizes effective political work.'
	},
	{
		claim: '"Krisentendenz" of the gender order is preferable to "crisis of masculinity" because the latter presupposes a coherent system that can be destroyed or restored, whereas masculinity is a configuration of practice within a system of gender relations.',
		source: 'Connell\'s theoretical framing borrowing from Habermas\'s "crisis tendency" framework.',
		pages: 'Ch. 3, p. 139',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Conceptual distinction, not empirical claim',
		detail:
			'A useful conceptual distinction that has been adopted in sociology of gender. Cannot be tested empirically; it is a way of avoiding category errors when analyzing changing gender orders. Connell uses it consistently to refuse the popular-press "crisis of masculinity" framing.'
	},

	// ============ RED ============
	// No red-rated items. Connell is methodologically cautious; her weaknesses are theoretical
	// reach (untestable) and small-sample qualitative work (yellow), not bad evidence.
];

// ============================================================
// SUMMARY STATISTICS
// ============================================================

export const auditSummary = {
	red: evidenceItems.filter((e) => e.status === 'red').length,
	yellow: evidenceItems.filter((e) => e.status === 'yellow').length,
	green: evidenceItems.filter((e) => e.status === 'green').length,
	untestable: evidenceItems.filter((e) => e.status === 'untestable').length,
	criticalRed: evidenceItems.filter((e) => e.status === 'red' && e.centrality === 'critical').length,
	criticalYellow: evidenceItems.filter((e) => e.status === 'yellow' && e.centrality === 'critical').length,
	verdict:
		'Der gemachte Mann is unusual in this library because most of its central claims are theoretical frameworks rather than empirical hypotheses. Of 21 evidence items audited, 8 are rated green (the within-sex-variation finding, the Kemper testosterone/status reread, the Imperato-McGinley Dominican reread, the multiple-masculinities ethnographic record, the patriarchal-dividend statistics, sport injury patterns, the Gerschick/Miller disability study, female elite representation), 8 are yellow (the four-group qualitative study, protest masculinity, Freudian interpretation of profeminist activists, the men\'s-movement-as-reactionary-modernization reading, the crisis-tendency diagnosis, transnational business masculinity, the sex-role critique, the Black-masculinities argument), 5 are untestable theoretical frameworks (gender as multidimensional structure, hegemonic masculinity itself, body-reflexive practice, the strategic prescription, the krisentendenz framing), and 0 are red. ' +
		'The empirical core is rock-solid where it matters most: Maccoby/Jacklin and Hyde\'s gender-similarities meta-analyses for the rejection of biological essentialism; UN/World Bank/ILO/OECD statistical data for the patriarchal dividend; cross-cultural ethnographic research (Herdt, Mead, Strathern) for multiple masculinities. These are among the most robust findings in the social sciences. ' +
		'The theoretical frameworks (hegemonic masculinity, body-reflexive practice, the multidimensional structural model) cannot be falsified directly but are evaluated by their productivity. Connell & Messerschmidt 2005 explicitly addresses critiques and partially revises the framework. Hegemonic masculinity has over 14,000 citations and is the most influential framework in the field, but Beasley\'s critique that it conflates three different referents (a political mechanism, a cultural ideal, an empirical class of men) is a serious challenge that Connell partially concedes. ' +
		'The four-group empirical study (Ch. 4-7) is the weakest link methodologically: small (n=36), non-representative, drawn from one Australian state in 1985-86. Connell herself acknowledges in the 2014 Vorwort that she would have written it as individual case studies in hindsight. Subsequent quantitative attempts (Holter & Aarseth, Zulehner & Volz, the European CROME project) provide some confirmation but with their own limitations. ' +
		'The political-strategic claims (mythopoetic men\'s movement as reactionary modernization, transnational business masculinity, degendering + alliance politics) are interpretive and normative — productive but not testable. The 30-year track record of the men\'s movement (politically marginal, no measurable impact on patriarchal indicators) supports Connell\'s diagnosis but cannot prove causation. ' +
		'Compared to its peers in this library: Connell is the ONLY rigorous academic sociology — the others are psychology, neuroscience, evolutionary biology, or popular nonfiction. She is at her strongest where she rejects pseudoscientific essentialism and synthesizes a half-century of historical/ethnographic/sociological evidence; she is most contested where she advances structural-political claims (complicity, hegemonic masculinity, transnational business masculinity) that resist direct empirical test. The book\'s value lies in the institutional-historical-structural perspective that no other book in the library provides.'
};
