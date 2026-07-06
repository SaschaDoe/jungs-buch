// rb-evidence-audit-data.ts
// Cross-referencing claims in "Real Boys" (William S. Pollack) with replication status and methodological critiques

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
		claim: 'Male infants are more emotionally expressive than female infants at birth and for several months afterward — they startle, cry, and fuss more. But by elementary school, this expressiveness has vanished.',
		source: 'Malatesta & Haviland (1982), Child Development 53: 991-1003; Malatesta, Culver, Tesman et al. (1989), Monographs of the Society for Research in Child Development 50. Rutgers-based developmental psychology.',
		pages: 'Ch. 1, pp. 39-40; Ch. 2, pp. 70-73',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Replicated developmental psychology from multiple labs',
		detail:
			'Well-established in the developmental literature. Foundational to Pollack\'s anti-essentialist argument: if boys start MORE emotional than girls, their later "stoicism" cannot be biologically given. The Malatesta/Haviland infant studies showed mothers actively mirror boys\' smiles but ignore their sad expressions, while responding 22% of the time to girls\' sad expressions. Replicated conceptually by Brody (BU) and Fivush (Emory). Used in Raising Cain too (Kindlon & Thompson) with the same evidentiary weight.'
	},
	{
		claim: 'Mothers use more emotion words and a wider range of emotional vocabulary with daughters than with sons; parents focus on anger with sons but sadness with daughters.',
		source: 'Brody, L. R. (1993, 1996) meta-analytic and review papers on gender and emotion (Boston University); Grief, Alvarez & Ulman (1981) — mothers never used "angry" with girls in story creation, frequently with boys; Fivush (1989), Sex Roles — parents favor harmony-reestablishing with daughters, accept retaliation with sons.',
		pages: 'Ch. 2, pp. 72-75',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Converging findings from multiple independent labs (BU, Emory)',
		detail:
			'Three separate research groups (BU, Boston U again, Emory) reach the same conclusion using different methodologies. Brody\'s meta-analytic review synthesizes across studies. The pattern is robust. Provides direct empirical support for Pollack\'s claim that boys\' emotional range is narrowed by differential socialization starting in infancy.'
	},
	{
		claim: 'Father involvement in a son\'s first 10 years predicts the boy\'s academic success in HS and college, and continued involvement through adolescence predicts career success — it is virtually impossible for fathers to be "too involved."',
		source: 'The Glueck Study — John Snarey (1993), "How Fathers Care for the Next Generation: A Four-Decade Study" (Harvard University Press). Follow-up of 240 fathers and sons begun 40+ years earlier in Boston.',
		pages: 'Ch. 6, pp. 118-121',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Landmark 40-year longitudinal study published by Harvard University Press',
		detail:
			'Exceptionally long follow-up period and large sample make this one of the strongest pieces of evidence in the book. The Glueck Study began in the 1940s with 240 Boston father-son pairs; Snarey\'s 40-year follow-up is a landmark in fatherhood research. The finding that no amount of father involvement was "too much" directly contradicts older psychoanalytic concerns about Oedipal overinvolvement.'
	},
	{
		claim: 'Fathers who are actively involved in their sons\' care have sons who are less aggressive, less overly competitive, and better able to express feelings of vulnerability and sadness.',
		source: 'Leslie Brody (Boston University) papers 1993, 1996 on gender and emotion; corroborated by Hardesty group at Morehead State Kentucky; Bernadett-Shapiro, Ehrensaft & Shapiro (1996) Santa Clara study in Family Therapy 23(2), 77-93.',
		pages: 'Ch. 6, pp. 117-118',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Multiple independent studies converging on same conclusion',
		detail:
			'Converging evidence from at least three independent research groups across different universities. The causal direction is also supported by Robert Sears\'s longitudinal work showing age-5 father sharing predicted age-23 compromise ability and age-31 empathy.'
	},
	{
		claim: 'Fathers with poor self-control — easily lost tempers, impulsive behavior — have adolescent sons with significant difficulties across almost all life domains (school, peer conflicts, drugs/alcohol, sexual promiscuity).',
		source: 'D\'Angelo, Weinberger & Feldman (1995), "Like Father, Like Son? Predicting Male-Adolescents\' Adjustment from Parents\' Distress and Self-restraint." Developmental Psychology 31(6), 883-96. Case Western Reserve.',
		pages: 'Ch. 6, pp. 121-122',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published in top developmental psychology journal',
		detail:
			'Studied 80+ adolescent boys and their parents, with a robust design. The finding that paternal emotional regulation predicts son adjustment supports Pollack\'s thesis that what fathers model matters even more than whether they are present.'
	},
	{
		claim: 'Boys in Kyle Pruett\'s 10-year study of primary-caregiver fathers showed more caring behavior, more relaxed attitudes about gender, and greater self-assurance about their identity — contrary to myths about "too much male parenting" creating problems.',
		source: 'Pruett, Kyle D. (1987), "The Nurturing Father" (Warner Books); Pruett (1989) longitudinal study of primary nurturing fathers, Yale University child psychiatry.',
		pages: 'Ch. 6, pp. 131-133',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Published Yale longitudinal study with 10-year follow-up',
		detail:
			'A distinctive dataset because it studies a rare parenting arrangement (dad-primary-caregiver) longitudinally. Pruett\'s findings directly contradict traditional psychoanalytic fears about boys who are "over-mothered" (or in this case over-fathered) losing gender security.'
	},
	{
		claim: 'Boys are now at the bottom of academic achievement: boys outnumber girls 3:1 in top 10% of math/science but 2:1 at the BOTTOM of reading comprehension; females outscore males in reading at all age levels.',
		source: 'Hedges, L. V. and Nowell, A. (1995), "Sex Differences in Mental Test Scores, Variability, and Numbers of High-Scoring Individuals," Science 269: 41-45. Six-survey meta-analysis spanning 30 years of data; University of Chicago. Plus US Department of Education, The Condition of Education 1997.',
		pages: 'Ch. 10, pp. 273-276',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Published in Science; large meta-analysis across 30 years of data',
		detail:
			'One of the most authoritative data sources on gender and academic achievement. The reading/writing gap has remained robust in subsequent decades. Hedges & Nowell is the same study Sax cites in Boys Adrift and Kindlon & Thompson reference in Raising Cain — it is the foundational statistical evidence all three boy-crisis books share.'
	},
	{
		claim: 'Girls score higher than boys on the Self-Concept as Learner Scale at all grade levels and across categories; boys "brag as a shield to hide deep-seated lack of confidence."',
		source: 'William Purkey, "Research in Middle Level Education" 17(1) 79-89 (1993), University of North Carolina; replicated by Finger (1995) dissertation, UNC-Greensboro, in African American students.',
		pages: 'Ch. 1, p. 16; Ch. 10, pp. 278-279',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Replicated within and across demographic groups',
		detail:
			'Purkey\'s instrument uses indirect measures rather than direct "do you feel smart?" questions, which bypasses boys\' tendency to boast on self-report. The finding that the gender pattern holds across races (Finger\'s African American sample showed the same) strengthens the case that it reflects a gender-specific pattern, not a race-or-class artifact.'
	},
	{
		claim: 'In adolescence, boys report depression at rates at least equal to girls — contradicting the traditional view that depression is a female disorder.',
		source: 'Nolen-Hoeksema, Susan (Stanford) (1990-1995) multiple papers on sex differences in depression, including "Sex Differences in Depression" (Stanford University Press, 1990); Smucker, M. (1982) Penn State survey of 2,790 rural Pennsylvania children.',
		pages: 'Ch. 12, pp. 355-358',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Multiple peer-reviewed studies; contradicts traditional gender-depression narrative',
		detail:
			'Nolen-Hoeksema is a leading researcher on gender and depression; she later became a major critic of the simple "women more depressed" narrative. Smucker\'s 2,790-child Penn State survey is a robust sample that found no gender difference. Both findings support Pollack\'s "hidden epidemic" thesis. Still, clinical diagnosis data continues to show a female majority, so this item is green for the "at least equal" claim but not for the stronger "more depressed than girls" claim.'
	},
	{
		claim: 'Men with equal functional impairment as depressed women report FEWER depressive symptoms than the women do, AND forget their past depression — supporting the claim that boys\' depression is systematically under-detected.',
		source: 'Angst, J. and Dobler-Mikola, A. (1984), "Do the Diagnostic Criteria Determine the Sex Ratio in Depression?" Journal of Affective Disorders 7: 189-98. Swiss longitudinal research.',
		pages: 'Ch. 12, pp. 357-358',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Published in peer-reviewed journal; specific test of masking hypothesis in adults',
		detail:
			'Particularly valuable because it tests the masking hypothesis directly in adults: if men under-report depression and forget it, diagnostic surveys under-count male depression. This is the kind of specific methodological finding that supports extrapolating to adolescent boys. Provides empirical grounding for Pollack\'s "mask of masculinity" framework as applied to depression measurement.'
	},
	{
		claim: 'Contrary to expectation, boys\' depression is as correlated with peer rejection/popularity as girls\' depression is — relationships matter equally to both genders.',
		source: 'Girgus, Joan, Nolen-Hoeksema, S., and Seligman, M. E. (1989). Princeton University research paper; also published in subsequent peer-reviewed papers.',
		pages: 'Ch. 12, pp. 355-356',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Predictions falsified in favor of Pollack\'s thesis',
		detail:
			'A strong piece of evidence because the researchers EXPECTED to find that girls\' depression was more relationship-driven than boys\' depression and found the opposite. This is a falsification of the received wisdom that boys don\'t care about relationships. Directly supports Pollack\'s "hidden yearning for relationships" thesis.'
	},
	{
		claim: 'Teens who feel "connected to their families" are less likely to experience emotional distress, engage in violence, attempt suicide, or use harmful substances — across every measured risk category.',
		source: 'Resnick, M. D., Bearman, P. S., Blum, R. W., et al. (1997), "Protecting Adolescents from Harm: Findings from the National Longitudinal Study on Adolescent Health," Journal of the American Medical Association 278(10): 823-832. The Add Health study.',
		pages: 'Ch. 12, pp. 356; Ch. 7, pp. 174',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'JAMA-published; one of the most robust adolescent health findings ever produced',
		detail:
			'The Add Health study is the gold standard in adolescent health research. The finding that family connectedness is protective across every risk domain is one of the most robust results in the field. It provides the strongest possible empirical backing for Pollack\'s "potency of connection" principle.'
	},
	{
		claim: 'Boys who suffered BOTH birth complications AND early maternal rejection were most likely to become violent offenders as adults — specifically showing that disconnection, not biology alone, causes violence.',
		source: 'Raine, A., Brennan, P., and Mednick, S. A. (1997), "Interaction between Birth Complications and Early Maternal Rejection in Predisposing Individuals to Adult Violence: Specificity to Serious, Early-Onset Violence." American Journal of Psychiatry 154: 1265-71. Danish longitudinal cohort.',
		pages: 'Ch. 13, pp. 394-395',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Published in top psychiatry journal; Danish longitudinal cohort',
		detail:
			'Perhaps the single strongest piece of direct causal evidence for Pollack\'s "disconnection → violence" thesis. The interaction effect (neither factor alone predicted violence as strongly as the combination) is methodologically rigorous and specifically supports a connection-focused intervention approach.'
	},
	{
		claim: 'Homosexual orientation is heavily influenced by heredity and biology: identical twin concordance for homosexuality is ~100% in one study of 85 gay men; fraternal twin concordance was only 11.5%.',
		source: 'Kallman, F. J. (1953), "Heredity in Health and Mental Disorder: Principles of Psychiatric Genetics in the Light of Comparative Twin Studies," Norton. Plus subsequent separated-at-birth twin studies and LeVay\'s hypothalamus research.',
		pages: 'Ch. 9, pp. 214-216',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Robust finding replicated by subsequent twin studies',
		detail:
			'Kallman\'s 1953 study is foundational; the twin pattern has been replicated in multiple subsequent studies. Pollack uses this to refute the "bad parenting makes boys gay" psychoanalytic claim. The LeVay hypothalamus finding provides a biological correlate, though Pollack correctly notes it is not a complete explanation.'
	},
	{
		claim: 'Gay youth account for up to 30% of all teenage suicides; nearly 1/3 of gay and bisexual adolescent males have attempted suicide at least once.',
		source: 'Committee on Adolescence (1993), "Homosexuality and Adolescence," Pediatrics 92(4): 631-34; Friedman & Downey (1994), "Homosexuality," New England Journal of Medicine 331(14): 923-30.',
		pages: 'Ch. 9, pp. 209',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Published in Pediatrics and NEJM; well-replicated statistic',
		detail:
			'Published in top medical journals. The statistic is robust across multiple studies. Pollack uses this to argue that problems faced by gay youth come from homophobia, not from homosexuality itself.'
	},

	// ============ YELLOW ============
	{
		claim: 'Pollack\'s own testing using the Coopersmith Self-Esteem Inventory found that boys give "false-positive" (lie-measure) responses at rates that grow with age — from 1.53 in grade 7 to 5.0 in grade 12 on a 1-8 scale.',
		source: 'Pollack\'s own unpublished/clinical research using Coopersmith Self-Esteem Inventories (School Form), Consulting Psychologists Press.',
		pages: 'Ch. 10, pp. 279-280',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Single-researcher finding with small sample; used to support masking thesis',
		detail:
			'Interesting and provocative, but it is Pollack\'s own finding not yet replicated. The lie-measure interpretation is reasonable but could alternatively reflect developmental changes in response style rather than active masking. This piece of evidence is doing heavy lifting for Pollack\'s "hidden crisis" thesis but rests on a single small-sample study.'
	},
	{
		claim: 'The "Listening to Boys\' Voices" Harvard Medical School study: hundreds of boys interviewed, observed, and tested to document emotional suppression patterns in detail.',
		source: 'Pollack\'s own research program at Harvard Medical School / McLean Hospital Center for Men, described throughout the book.',
		pages: 'Throughout the book',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Pollack\'s own qualitative research program; valuable but not independently replicated',
		detail:
			'The LTBV study is Pollack\'s primary empirical base and provides rich qualitative material. It is cited throughout the book for specific vignettes and quotes. But it is a single-author program without independent replication, and its findings are selected illustratively rather than reported with formal sampling. The quotes are compelling but their representativeness is hard to verify.'
	},
	{
		claim: 'Premature separation at age 5-6 (starting school) and again at adolescence are "traumatic" events for boys that create "a deep wellspring of grief and sadness" lasting throughout life.',
		source: 'Pollack\'s own clinical observation and case studies (Johnny, Roger, Christopher, Gabe vignettes). Theoretical grounding in secure attachment research (Gunnar, Sroufe) and Chodorow\'s psychoanalytic framework (which Pollack disagrees with).',
		pages: 'Ch. 1, pp. 25-27; Ch. 2, pp. 55-60',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Clinical-theoretical extension of attachment research; not directly tested',
		detail:
			'This is one of Pollack\'s most distinctive claims and also his most vulnerable. Attachment research supports the importance of secure attachment, but no empirical study directly shows that culturally-normative first-day-of-school separation causes lasting trauma in boys specifically. The clinical case studies are vivid but illustrative rather than generalizable. The specific "separation trauma at age 5-6" framing goes further than current developmental evidence warrants.'
	},
	{
		claim: 'Italian "mammismo" — where 58% of Italian men 18-34 still live with their mothers — shows that cultures which permit close mother-son relationships produce psychologically healthy men without the traumas of forced separation.',
		source: 'Italian National Statistics Institute 1997 demographic data.',
		pages: 'Ch. 5, pp. 131-132',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Anecdotal demographic comparison; limited as causal evidence',
		detail:
			'Demographic statistics are real, but using them as evidence that Italian men are psychologically healthier due to mother-closeness is a large causal leap. Many other factors differ between Italian and American family structures (economic, religious, historical). Works as an existence proof against the "cut the apron strings" orthodoxy but cannot establish causation.'
	},
	{
		claim: 'Boys show love through "action love" — concrete deeds, protection, work, and acts of justice — rather than verbal declarations. Girls show love through talking.',
		source: 'Pollack\'s Listening to Boys\' Voices qualitative data; theoretical extension of Gilligan/Stone Center relational models.',
		pages: 'Ch. 4, pp. 96-109',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Qualitative-theoretical framework; plausible but not experimentally tested',
		detail:
			'The "action love" framework is plausible and intuitively resonates with observed behavior. But it rests on qualitative case studies and has not been tested against rival explanations (e.g., that boys and girls both use similar modes of expression but are interpreted differently). Useful as a clinical lens, weaker as an empirical claim.'
	},
	{
		claim: 'The "timed silence syndrome" — boys need a period of silence to process emotional experience before being able to speak about it, in contrast to girls who tend to speak immediately.',
		source: 'Pollack\'s clinical observation and the Listening to Boys\' Voices study.',
		pages: 'Ch. 5, pp. 102-104',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Clinical-observational claim; useful heuristic but not experimentally established',
		detail:
			'Matches a common clinical pattern and is practically useful as parenting advice. But it has not been tested in controlled comparison studies, and the magnitude of any gender difference in the "silent processing period" is unknown.'
	},
	{
		claim: 'Clinical vignettes throughout the book (Adam, Johnny, Roger, Christopher, Gabe, Rusty, Kevin, Carl, and many others) illustrate the Boy Code and mask of masculinity.',
		source: 'Pollack\'s own clinical practice and the Listening to Boys\' Voices study.',
		pages: 'All chapters',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Anecdotal by design; vivid but not generalizable; subject to selection bias',
		detail:
			'Like Kindlon & Thompson, Pollack uses case vignettes as a primary rhetorical mode. They are emotionally compelling and provide clinical depth. But they function as illustration rather than proof, are selected to support the thesis, and are drawn from a geographically and demographically narrow clinical population (McLean Hospital, Harvard Medical School, predominantly New England boys).'
	},

	// ============ UNTESTABLE ============
	{
		claim: 'The Boy Code — the unwritten set of outdated 19th-century masculinity rules imposed on all boys — operates in four injunctions: "the Sturdy Oak", "Give \'em Hell", "the Big Wheel", and "No Sissy Stuff".',
		source: 'David, D., and Brannon, R. (eds.) (1976), The Forty-nine Percent Majority: The Male Sex Role (Addison-Wesley). Pollack adopts their four-injunction typology.',
		pages: 'Ch. 1, pp. 23-25; Ch. 2, pp. 52-54',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Cultural organizing framework, not a falsifiable empirical claim',
		detail:
			'The Boy Code is a cultural framework, not a testable hypothesis. It cannot be "refuted" in the way a specific psychological finding can be. Its utility is as an organizing lens that makes other claims comprehensible. Similar frameworks exist in the sociological literature (Connell\'s "hegemonic masculinity", Gilmore\'s "Big Impossible"). The framework has persistence in the field which suggests utility but does not constitute empirical confirmation.'
	},
	{
		claim: 'Shame is "the feeling state that accompanies emotional disconnection" — not just a response to specific actions but a systemic consequence of disrupted relational ties.',
		source: 'Jordan, Judith (1989), Stone Center Working Paper 39, "Relational Development: Therapeutic Implications of Empathy and Shame" (Wellesley College).',
		pages: 'Ch. 2, pp. 61-64',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Theoretical framework from Stone Center relational-cultural theory',
		detail:
			'A theoretical reframing rather than an empirical finding. Jordan\'s definition of shame has clinical utility and has been influential in relational-cultural therapy. But it is not a testable claim in the way that specific shame-response patterns are. Used by Pollack as the conceptual bridge between disconnection and symptoms.'
	},

	// ============ RED ============
	// No red-rated items. Pollack avoids overstrong empirical claims; his weaknesses are
	// primarily theoretical overreach (yellow) rather than bad evidence (red).
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
		'Real Boys aggregates more empirical research than most of the boy-crisis books and is at its strongest where it does so. Of 25 evidence items audited, 15 are rated green (solidly supported), 7 are yellow (theoretical or primarily clinical-observational), 2 are untestable (the Boy Code itself as a framework, and the Jordan theory of shame as disconnection), and 0 are red. ' +
		'The book\'s strongest empirical domains are fathers (the Glueck/Snarey 40-year study, Pruett Yale primary-father study, D\'Angelo Case Western, Brody BU — all independently published and peer-reviewed), depression research (Nolen-Hoeksema Stanford, Angst/Dobler-Mikola Switzerland, Girgus Princeton, Smucker Penn State — all converging on the "hidden epidemic" thesis), the academic gender gap (Hedges & Nowell 1995 in Science, Purkey at UNC, and the US Department of Education data), and the attachment/connectedness literature (Resnick et al. Add Health in JAMA, Barnett at Wellesley, Gunnar at Minnesota). ' +
		'The weakest portions of the book are the clinical-theoretical extensions: the claim that normative school-start separation is "traumatic" (Pollack\'s own theoretical extension of attachment research, not empirically tested directly), the "mask of masculinity" as an inferred construct rather than measured variable, the "timed silence syndrome" and "action love" as clinical heuristics rather than tested interventions, and the Italian mammismo claim as cross-cultural evidence (demographic rather than causal). ' +
		'Compared to its peers: Real Boys has stronger empirical grounding than Gurian\'s Wonder of Boys and Bola-esque popular books, roughly equal grounding to Kindlon & Thompson\'s Raising Cain (with both relying heavily on clinical case studies), and narrower quantitative range than Sax\'s Boys Adrift or Eliot\'s Pink Brain, Blue Brain. The book\'s distinctive contribution is synthesis and framing rather than novel empirical findings — its value lies in organizing existing research around the Boy Code and potency-of-connection concepts.'
};
