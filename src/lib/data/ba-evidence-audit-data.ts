// ba-evidence-audit-data.ts
// Cross-referencing claims in "Boys Adrift" (Leonard Sax) with replication status and methodological critiques

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
		claim: 'The gender gap in education is large and growing: ~15-point NAEP writing gap within every racial and income subgroup; male share of undergraduates fell from 57.7% (1970) to 43.1% (2014).',
		source: 'NAEP 12th-grade writing scores; US Department of Education enrollment data.',
		pages: 'Ch. 1, ~pp. 8-20',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Well-documented federal data, replicated across years and demographics',
		detail:
			'NAEP data is the gold standard for US educational assessment. The gender gap in writing is real and significant, ' +
			'appearing within every racial and income subgroup. The college enrollment trend is from the US Department of Education. ' +
			'However, the gap in math is smaller and in some cases favors boys, which Sax does not emphasize.'
	},
	{
		claim: 'Male proportion of undergraduates declined from 57.7% (1970) to 43.1% (2014); women outnumber men 59% to 41% in graduate programs.',
		source: 'US Department of Education enrollment data.',
		pages: 'Ch. 1, ~pp. 8-12',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'US Department of Education data, well-documented trend',
		detail:
			'Well-documented trend from federal data. Sax correctly notes this is not because women are doing worse but because men are doing less well. ' +
			'The trend is consistent across multiple data sources.'
	},
	{
		claim: 'The "failure to launch" phenomenon: men 25-54 not working rose 25% (5.6M to 7M) from 2004-2014; young men 25-34 living at home doubled from 9.5% (1970) to 18.6% (2011).',
		source: 'Bureau of Labor Statistics; US Census Bureau.',
		pages: 'Ch. 6, ~pp. 44-57',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'BLS and Census Bureau data, well-documented demographic trend',
		detail:
			'Demographic data is from BLS and Census Bureau. The trend is well-documented across multiple sources, including ' +
			'married couples with children now only 20% of households and 52% of men 25-34 never married in 2010 vs. 1 in 6 in 1970. ' +
			'The descriptive trend is beyond dispute; the causal explanation is where debate begins.'
	},
	{
		claim: '80%+ of male smallmouth bass in Potomac tributaries had eggs in their sex organs, linked to endocrine disruptors in water.',
		source: 'USGS Potomac River fish study; replicated in other waterways.',
		pages: 'Ch. 5, ~pp. 37-39',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Well-documented by USGS, replicated in other waterways',
		detail:
			'The fish evidence is robust and well-documented by USGS. The phenomenon has been replicated in other waterways. ' +
			'The extrapolation to human health effects is where the evidence becomes less certain. Sax uses this as a dramatic opening ' +
			'for the endocrine disruptor chapter.'
	},
	{
		claim: 'The immigrant paradox: children of new immigrants are healthier, less anxious, less delinquent, and more motivated than same-demographic American-born children; the advantage erodes with acculturation.',
		source: 'APA 328-page monograph (2011); Dartmouth expert panel including T. Berry Brazelton and Robert Coles.',
		pages: 'Ch. 7, ~pp. 61-63',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Robust finding documented in large body of peer-reviewed research and APA monograph',
		detail:
			'This is one of the strongest pieces of evidence in the book. The finding is well-replicated across multiple studies ' +
			'and documented in a 328-page APA monograph. The implication -- that something about American culture is harmful to children -- ' +
			'is difficult to dismiss. However, many possible mechanisms exist beyond the ones Sax emphasizes.'
	},
	{
		claim: 'Female chimps learn tool use from adults ~2 years earlier than males; males prefer rough play over observational learning.',
		source: 'Lonsdorf, Eberly, and Pusey chimpanzee field studies.',
		pages: 'Ch. 2, ~pp. 8-10',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Well-conducted long-term field study',
		detail:
			'The study is solid and well-conducted. However, extrapolating from chimpanzees to human educational policy involves ' +
			'significant inferential leaps. Used by Sax to argue that sex differences in learning orientation are evolutionary, not purely cultural.'
	},
	{
		claim: 'Virtually all enduring cultures have structured transitions from boyhood to manhood; these cultures treat manhood as conditional and achieved, not automatic.',
		source: 'David Gilmore, "Manhood in the Making"; examples from !Kung, Samburu, Masai, Navajo, Orthodox Jews, Japanese samurai.',
		pages: 'Ch. 7, ~pp. 58-65',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Well-regarded anthropological description (Gilmore); prescriptive implications are less certain',
		detail:
			'Gilmore\'s "Manhood in the Making" is well-regarded in anthropology. The cross-cultural observation is robust as a descriptive finding. ' +
			'However, the prescriptive inference -- that our culture should adopt similar structured transitions -- is a values claim, ' +
			'not an empirical finding. Sax\'s application of this research to modern American policy is creative but involves significant interpretive leaps.'
	},

	// ============ YELLOW ============
	{
		claim: 'Girls\' gray matter matures ~2 years ahead of boys in reading/writing regions; University of Pennsylvania MRI study of 949 individuals shows different connectivity patterns.',
		source: 'Brain development research; Penn MRI study (N=949).',
		pages: 'Ch. 2, ~pp. 5-10',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Real sex differences exist, but educational implications are debated',
		detail:
			'Real sex differences in brain development exist, but the neuroscience community has cautioned against simplistic ' +
			'"boys\' brains are different so teach them differently" conclusions. Lise Eliot and others have argued these differences ' +
			'are smaller and more variable than popularly presented. Meta-analyses suggest considerable overlap between sexes even where mean differences exist. ' +
			'Sax presents the strongest version of the sex-difference findings.'
	},
	{
		claim: 'Finnish children start formal schooling at age 7 but outperform American students on PISA exams, suggesting early academics harm boys.',
		source: 'PISA exam data; Finnish educational model.',
		pages: 'Ch. 2, ~pp. 5-10',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Valid comparison, but Finland differs in many other ways',
		detail:
			'The comparison is valid but Finland differs from the US in many other ways (teacher training, socioeconomic equality, ' +
			'homogeneity, cultural attitudes). Attributing Finland\'s success primarily to later school start is an oversimplification. ' +
			'The example supports the general principle but the causal inference is weak.'
	},
	{
		claim: 'ADHD medications improve performance equally in children with and without ADHD, undermining the "try it and see" diagnostic approach.',
		source: 'Gabrieli (MIT) study; conference presentation.',
		pages: 'Ch. 4, ~pp. 30-37',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Important finding, but based on conference presentation rather than published paper at time of writing',
		detail:
			'Sax\'s description is based on a conference presentation by Gabrieli at MIT, not a published peer-reviewed paper (at the time). ' +
			'Similar findings have since been documented. The principle is sound: positive response to treatment does not validate the diagnosis. ' +
			'This is a crucial finding for Sax\'s overdiagnosis argument.'
	},
	{
		claim: 'Juvenile laboratory animals given stimulant medications displayed loss of drive in adulthood; the nucleus accumbens appears to be damaged.',
		source: 'William Carlezon (Harvard) animal studies.',
		pages: 'Ch. 4, ~pp. 33-37',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Well-conducted animal studies, but human extrapolation requires caution',
		detail:
			'The animal studies are well-conducted, but extrapolation to humans requires caution. Human brain imaging studies show some nucleus accumbens ' +
			'changes but are cross-sectional, not longitudinal. The claim of lasting, clinically significant damage in humans taking therapeutic doses ' +
			'is not proven. Sax acknowledges uncertainty ("I think they probably do [cause lasting damage]. But maybe they don\'t.") but his overall ' +
			'presentation leans strongly toward the harm conclusion.'
	},
	{
		claim: 'Mothers with high phthalate levels were ~10x more likely to have sons with genital malformations; declining sperm counts documented across industrialized nations.',
		source: 'Shanna Swan\'s phthalate epidemiological studies; Swan et al. (1997) sperm count meta-analysis; 2017 confirmatory meta-analysis.',
		pages: 'Ch. 5, ~pp. 37-43',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Well-conducted epidemiological work, but the 10x figure may be the extreme end; sperm count decline magnitude is debated',
		detail:
			'Swan\'s work is well-regarded in the field. The phthalate findings are concerning, but the 10x figure represents the extreme end; ' +
			'overall associations are more modest in some replications. The sperm count meta-analysis was originally controversial but subsequent studies, ' +
			'including a major 2017 meta-analysis, have supported the trend. Some researchers dispute the magnitude and clinical significance.'
	},
	{
		claim: 'Craig Anderson\'s meta-analyses show consistent associations between violent video game play and increased aggression, decreased empathy, comparable to secondhand smoke evidence.',
		source: 'Craig Anderson meta-analyses; contested by Christopher Ferguson and others.',
		pages: 'Ch. 3, ~pp. 23-26',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Frequently cited but also frequently criticized; significant scientific disagreement remains',
		detail:
			'Anderson\'s work is frequently cited but also frequently criticized. Christopher Ferguson and others have argued that publication bias ' +
			'inflates effect sizes, that measured "aggression" outcomes are laboratory artifacts, and that the secondhand smoke comparison is misleading. ' +
			'The APA has issued qualified statements supporting the aggression link while noting limitations. ' +
			'Sax presents Anderson\'s conclusions without acknowledging the significant scientific disagreement.'
	},
	{
		claim: 'Risk of fracture for boys roughly doubled between 1960s-1990s; 350% increase 2004-2009; 440% increase in mid-shaft forearm fractures 2000-2009, possibly linked to endocrine disruptors.',
		source: 'Peer-reviewed studies on fracture rate trends; cross-species endocrine disruptor/bone density research.',
		pages: 'Ch. 5, ~pp. 42-43',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Fracture increase documented, but causal attribution to endocrine disruptors is speculative',
		detail:
			'The fracture rate studies are peer-reviewed, but multiple confounders exist (decreased physical activity, changes in play behavior, ' +
			'dietary changes). Sax acknowledges dietary changes (less milk, more cola) but argues they can\'t fully explain the trend. ' +
			'The endocrine disruptor explanation is one hypothesis among several.'
	},
	{
		claim: 'Half of American girls begin puberty before age 10; boys\' puberty onset has not shifted earlier and may be slightly delayed; endocrine disruptors are the proposed cause.',
		source: 'Puberty timing epidemiological data; endosulfan pesticide study (2003); BPA sex-differential research.',
		pages: 'Ch. 5, ~pp. 39-43',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Puberty timing trend is well-documented; causal attribution to endocrine disruptors is contested',
		detail:
			'The trend toward earlier female puberty is well-documented. The claim that boys\' puberty is being delayed by the same chemicals ' +
			'is less firmly established. Obesity and improved nutrition also play roles in earlier female puberty. ' +
			'The endosulfan and BPA studies are peer-reviewed but the causal chain is complex.'
	}
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
		'The book is strongest when citing federal datasets and demographic trends: the gender gap in education, the "failure to launch" phenomenon, ' +
		'and the immigrant paradox are all well-documented with green-status evidence. The endocrine disruptor evidence (feminized fish, phthalate studies) ' +
		'draws on real and growing scientific concern, though Sax sometimes overstates the certainty of the human health extrapolations. ' +
		'The ADHD overdiagnosis argument is widely shared in the medical community, but the specific claim about nucleus accumbens damage ' +
		'from stimulant medications extends beyond what human studies have firmly established. The video game violence evidence is presented one-sidedly, ' +
		'omitting the significant scientific disagreement in the field. The brain sex difference literature is presented without noting the substantial ' +
		'scientific skepticism about its educational implications. Overall, the book is most reliable when describing trends and least reliable ' +
		'when attributing specific causal mechanisms or making prescriptive recommendations.'
};
