// wtc-evidence-audit-data.ts
// Cross-referencing claims in hooks's "The Will to Change" with their evidentiary character

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
		claim: 'Male infants are born MORE emotionally expressive than female infants — they cry longer, louder, and fuss more. Adult male "stoicism" cannot therefore be biologically given.',
		source: 'hooks imports this finding from Kindlon & Thompson\'s Raising Cain and the broader Malatesta/Haviland/Brody/Fivush developmental-psychology literature. She does not engage with the primary sources directly but uses the finding as an anti-essentialist anchor.',
		pages: 'Ch. 3, "Being a Boy", opening paragraphs',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Well-replicated developmental psychology finding',
		detail:
			'The underlying empirical finding is robust across multiple independent labs (Rutgers-Malatesta/Haviland, Boston University-Brody, Emory-Fivush) and appears in Pollack\'s Real Boys, Kindlon & Thompson\'s Raising Cain, and Eliot\'s Pink Brain Blue Brain. hooks relies on the finding without engaging the primary sources, but the finding itself is one of the most robust in early developmental psychology. It is the foundation that blocks the essentialist defense of patriarchal masculinity.'
	},
	{
		claim: 'Violence against women is pervasive: 700,000+ women sexually assaulted per year in the US; 1 in 12 women stalked in her lifetime; the UN calls violence against women "the world\'s most pervasive form of human rights abuse."',
		source: 'Andrea Dworkin\'s Scapegoat is hooks\'s immediate source. Underlying statistics from the US Justice Department, American Medical Association (1995), and UN reporting.',
		pages: 'Ch. 4, "Stopping Male Violence", opening',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Government and intergovernmental statistics, well-documented',
		detail:
			'The statistical anchor on the scale of male violence against women is uncontested and comes from authoritative sources (DOJ, AMA, UN). hooks uses Dworkin as her intermediary but the underlying data is the gold standard. These statistics are Lift #1 for any account that takes male violence seriously as a structural phenomenon.'
	},

	// ============ YELLOW ============
	{
		claim: 'Terrence Real\'s "normal traumatization" of boys: "violence IS boyhood socialization…Disconnection IS masculinity."',
		source: 'Terrence Real, How Can I Get Through to You? Reconnecting Men and Women (Scribner, 2002). Clinical-therapeutic observation from family therapy practice.',
		pages: 'Ch. 2 (Alexander-Barbie vignette) and Ch. 4 ("disconnection IS masculinity" passage)',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Clinical-observational; strong face validity but no quantitative backing',
		detail:
			'Terrence Real is a respected family therapist with decades of clinical experience and his observation is reinforced by parallel clinical observation (Pollack, Kindlon & Thompson, Pittman). The specific framing of boy socialization as "trauma" is interpretively strong and aligns with the Stone Center shame tradition (Jordan), but there is no quantitative empirical study directly testing whether normative boy socialization meets clinical trauma criteria. Yellow-rated as rich clinical insight without hard data.'
	},
	{
		claim: '"The first act of violence that patriarchy demands of males is not violence toward women. Instead patriarchy demands of all males that they engage in acts of psychic self-mutilation, that they kill off the emotional parts of themselves."',
		source: 'hooks\'s own synthesis, supported by Real\'s clinical observation and Bradshaw\'s work on the false self.',
		pages: 'Ch. 4, "Stopping Male Violence"',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Interpretive claim with clinical-therapeutic resonance',
		detail:
			'A memorable and influential formulation. It is consistent with the broader clinical literature on male emotional suppression (Pollack\'s mask of masculinity, Jordan\'s shame theory, Real\'s disconnection claim). But "psychic self-mutilation" is metaphor doing heavy interpretive work. Yellow-rated as informed cultural criticism, not empirical finding.'
	},
	{
		claim: 'The "mask of masculinity" is the first lesson patriarchal boys learn — wearing a false self that splits them from their real feelings.',
		source: 'hooks synthesizes from John Bradshaw, M. Scott Peck (integrity as opposite of compartmentalization), and Rabbi Harold Kushner. The specific "mask" metaphor runs in parallel to William Pollack\'s identical use in Real Boys (without direct citation).',
		pages: 'Ch. 10, "Reclaiming Male Integrity"',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Clinical metaphor with strong face validity',
		detail:
			'The mask metaphor has strong resonance across the clinical literature (Pollack\'s Coopersmith false-positive data provides some quantitative support). It is hard to measure directly. As a metaphor for an observable phenomenon (men presenting as fine when they are not), it is productive; as a falsifiable claim, it is yellow.'
	},
	{
		claim: 'Maternal sadism: "Patriarchy breeds maternal sadism in women who embrace its logic." Single-parent homes are not automatically less patriarchal; maternal violence toward sons is a neglected feminist issue.',
		source: 'Dorothy Dinnerstein (The Mermaid and the Minotaur, 1976), Olga Silverstein (The Courage to Raise Good Men), Riane Eisler (The Power of Partnership) citing David Winter\'s cross-cultural research.',
		pages: 'Chs. 4 and 9',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Theoretically important claim with case-study support',
		detail:
			'A distinctive and courageous move in hooks\'s work. Dinnerstein and Silverstein provide the theoretical foundation. The Winter cross-cultural finding (women in strongly patriarchal cultures are controlling toward sons as the only males they can control) provides some empirical anchor. But there is no large-N data directly confirming that single-parent-mother households are MORE patriarchal on average than two-parent households. The weak version (some mothers enforce patriarchy severely) is uncontested; the strong version is yellow.'
	},
	{
		claim: 'Sexual obsession in men is addictive rather than natural — a displacement of unmet emotional needs onto sex as the one permitted outlet.',
		source: 'Gary Zukav & Linda Francis, The Heart of the Soul (sex addiction framework); Michael Kimmel, "Fuel for Fantasy: The Ideological Construction of Male Lust"; Steve Bearman, "Why Men Are So Obsessed with Sex"; Robert Jensen, "Patriarchal Sex."',
		pages: 'Ch. 5, "Male Sexual Being"',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Interpretive-theoretical synthesis with clinical support',
		detail:
			'Draws on multiple independent theorists and aligns with clinical literature on sex addiction. But male sexual behavior is not simply reducible to emotional addiction; biological, cultural, and economic factors all play roles. Yellow-rated as strong interpretive framework with partial empirical support.'
	},
	{
		claim: 'Workaholism is the most common male addiction, rewarded by patriarchal culture, functioning as a "deep sleep" that keeps painful emotions out of awareness.',
		source: 'Victor Seidler (Rediscovering Masculinity), Dean Ornish (Love and Survival), Zukav & Francis (The Heart of the Soul). hooks also reads American Beauty and Life as a House as cultural texts.',
		pages: 'Ch. 6, "Work: What\'s Love Got to Do with It?"',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Autobiographical testimony and interpretive case-based work',
		detail:
			'The observation that many men use work to escape emotional life has clinical support and resonates with Seidler and Ornish\'s autobiographical testimony. "Workaholism as addiction" is a framing accepted in the 12-step tradition and some clinical literature but contested in empirical psychology. Yellow-rated as rich case-based observation.'
	},
	{
		claim: 'The mythopoetic men\'s movement (Bly, Farrell, Goldberg, Keen) failed because it refused to critique patriarchy. It was a reaction that blamed mothers for wounds caused by patriarchal culture.',
		source: 'hooks\'s textual readings of Iron John, The Myth of Male Power, The Hazards of Being Male, Fire in the Belly. Christine A. James\'s essay "Feminism and Masculinity." Convergent with Connell\'s Ch. 9 in Masculinities and Messner\'s Politics of Masculinities.',
		pages: 'Ch. 7 and Ch. 9',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Shared academic verdict on the men\'s movement',
		detail:
			'The verdict that the mythopoetic men\'s movement was "reactionary" or "reformist without substance" is broadly accepted in academic masculinity studies (Connell, Messner, Kimmel, Schwalbe). It is contested by men\'s-movement participants but the 30-year track record (politically marginal, no measurable impact on patriarchal indicators) supports hooks\'s reading.'
	},
	{
		claim: 'Susan Faludi\'s Stiffed documented male crisis but refused to name patriarchy as its cause, making it "yet another betrayal of American men."',
		source: 'hooks\'s critical reading of Faludi\'s Stiffed: The Betrayal of the American Man (1999).',
		pages: 'Ch. 2, "Understanding Patriarchy", closing pages',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Interpretive-critical reading',
		detail:
			'A polemical reading with some force. Faludi did document male suffering without naming patriarchy, and hooks\'s critique is that this was a political choice to avoid antagonizing readers. Whether the critique is fair or overblown depends on how one reads Faludi\'s own intentions. Yellow-rated as contested interpretation.'
	},
	{
		claim: 'hooks\'s autobiographical material — her father\'s rage, her mother\'s complicity, her own childhood beatings, her adult reconciliation with her father — is presented as paradigmatic of the broader patterns.',
		source: 'hooks\'s personal memoir material, previously developed in Bone Black (1996) and Wounds of Passion (1997).',
		pages: 'Throughout, especially Chs. 1, 2, 4, 11',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Autobiographical; illuminative but not generalizable',
		detail:
			'hooks\'s autobiographical writing is vivid, specific, and emotionally honest. It functions as illustration of the broader claims rather than independent evidence. The marbles-beating scene in particular is one of the most-cited passages in the book. As case-based illustration it is strong; as independent evidence it is anecdotal.'
	},

	// ============ UNTESTABLE ============
	{
		claim: 'Patriarchy: "a political-social system that insists that males are inherently dominating, superior to everything and everyone deemed weak…and endowed with the right to dominate and rule through various forms of psychological terrorism and violence."',
		source: 'hooks\'s own synthesis drawing on her earlier work (Feminist Theory: From Margin to Center 1984, Feminism Is for Everybody 2000) + Terrence Real\'s "psychological patriarchy" + John Bradshaw\'s rules of patriarchy.',
		pages: 'Ch. 2, "Understanding Patriarchy"',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Theoretical framework; cannot be falsified directly',
		detail:
			'"Patriarchy" is a theoretical concept that organizes observations rather than a testable hypothesis. hooks\'s version includes the distinctive claim that patriarchy is enforced by both women and men, which aligns with Connell\'s "complicity" concept and distinguishes her from antimale feminism. Untestable by definition — but productive as organizing framework.'
	},
	{
		claim: 'The crisis facing men is "the crisis of patriarchal masculinity, not the crisis of masculinity." Maleness as such is not the problem; its patriarchal configuration is.',
		source: 'hooks\'s own theoretical move, supported by her critique of Faludi and by Olga Silverstein (The Courage to Raise Good Men).',
		pages: 'Ch. 2 and Ch. 7',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Conceptual distinction, not empirical claim',
		detail:
			'A strategic conceptual distinction that opens space for feminist thinking about maleness without requiring the abolition of maleness as a category. It is hooks\'s most original theoretical contribution. Cannot be tested — it is a way of framing the problem, not a hypothesis about it.'
	},
	{
		claim: 'Love defined as practice: CARE, COMMITMENT, KNOWLEDGE, RESPONSIBILITY, RESPECT, TRUST (from M. Scott Peck + Erich Fromm + hooks\'s own synthesis).',
		source: 'M. Scott Peck (The Road Less Traveled) on love as the will to nurture spiritual/emotional growth; Erich Fromm (The Art of Loving) on love as action not feeling; hooks\'s earlier trilogy on love.',
		pages: 'Ch. 4, "Stopping Male Violence"',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Normative-ethical framework',
		detail:
			'This is hooks\'s operational definition of love throughout the book. It is a normative definition, not an empirical finding — it tells us what love IS for the purposes of the book\'s argument. Its value is that it makes love a practice with concrete components rather than a vague feeling. Cannot be falsified.'
	},
	{
		claim: 'The love ethic: "To create loving men, we must love males. Loving maleness is different from praising and rewarding males for living up to sexist-defined notions of male identity. When we love maleness, we extend our love whether males are performing or not."',
		source: 'hooks\'s own ethical-political prescription, grounded in her earlier love trilogy (All About Love, Salvation, Communion). Influenced by the Dalai Lama (Ethics for the New Millennium) and Thich Nhat Hanh.',
		pages: 'Ch. 1 and throughout',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Ethical-political program, not hypothesis',
		detail:
			'The book\'s central normative commitment. It cannot be tested empirically — it is a political-ethical program. Its value is whether it organizes effective practice. hooks\'s claim is that no other approach (sociological critique, clinical therapy, men\'s movement, antimale feminism) can reach men in the way a love ethic can. This is asserted rather than demonstrated.'
	},
	{
		claim: 'Feminist masculinity\'s constituents: integrity, self-love, emotional awareness, assertiveness, and relational skill (empathy, autonomy, connection).',
		source: 'Olga Silverstein, The Courage to Raise Good Men.',
		pages: 'Ch. 7, "Feminist Manhood"',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Normative prescription',
		detail:
			'A list of positive traits that would define a feminist masculinity. Cannot be falsified; its value is prescriptive clarity. Contrasts with Robert Levant\'s catalog of patriarchal male norms (avoiding femininity, restrictive emotionality, seeking achievement/status, self-reliance, aggression, homophobia, nonrelational sexuality) which hooks uses as the target for replacement.'
	},
	{
		claim: 'Communities of resistance: relationships, families, and small groups reimagined as sites where men can heal from patriarchal wounding. "Healing does not take place in isolation."',
		source: 'Thich Nhat Hanh and Daniel Berrigan, The Raft Is Not the Shore.',
		pages: 'Ch. 11, "Loving Men"',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Strategic-political horizon',
		detail:
			'hooks\'s closing horizon. A normative-strategic prescription: change happens in relationships, not in isolation. Cannot be tested as hypothesis. Its value is whether it helps readers act. Parallels Connell\'s call for alliance-based politics over "men\'s groups."'
	},
	{
		claim: 'The warrior ethic must be replaced by "guardian, boundary-setter, husbandman, citizen."',
		source: 'Shepherd Bliss, "My War Story."',
		pages: 'Ch. 11, "Loving Men"',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Normative reframing',
		detail:
			'Offers alternative archetypes to the warrior. Cannot be tested; evaluated by whether it provides useful alternative framings for male identity.'
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
		'bell hooks\'s The Will to Change is unusual in this library because it is primarily a work of cultural theory and ethical prescription, not empirical research. Of 18 audited items, 2 are rated green (the developmental-psychology finding that male infants are more emotionally expressive, imported from the research tradition Pollack and Eliot use; and the government/UN statistics on the scale of violence against women), 9 are yellow (most of the book\'s interpretive claims — normal traumatization, psychic self-mutilation, mask of masculinity, maternal sadism, sex as addiction, work as flight, men\'s-movement critique, Faludi critique, autobiographical material), 7 are untestable theoretical frameworks (the definition of patriarchy, crisis-of-patriarchal-masculinity distinction, operational definition of love, love ethic, feminist masculinity traits, communities of resistance, warrior-replacement archetypes), and 0 are red. ' +
		'The empirical grounding is THIN by design. hooks imports one robust finding (male infant expressiveness) and one rock-solid statistical anchor (violence against women), and builds the rest of her case interpretively. She cites heavily — Terrence Real, John Bradshaw, M. Scott Peck, Nathaniel Branden, Dorothy Dinnerstein, Olga Silverstein, Michael Kimmel, Robert Jensen, Steve Bearman, Victor Seidler, Dean Ornish, Gary Zukav, Barbara Ehrenreich, Andrea Dworkin, R. W. Connell, the Dalai Lama, Thich Nhat Hanh — but these are mostly theorists, therapists, and spiritual teachers, not empirical researchers. ' +
		'The book\'s value is not empirical. It is interpretive and normative. hooks offers a love ethic as a political program, applies it to the question of how to raise and relate to boys and men, and sustains the argument through cultural criticism, autobiographical testimony, and theoretical synthesis. The strongest moves are (a) the distinction between patriarchal masculinity and maleness as such, (b) the operational definition of love as care/commitment/knowledge/responsibility/respect/trust, (c) the willingness to name women as enforcers of patriarchy (maternal sadism), and (d) the integration of ethical-political-spiritual registers that no other book in the library attempts. ' +
		'Readers seeking testable hypotheses, randomized interventions, or quantitative evidence should look to Pollack\'s Real Boys (for the clinical-observational tradition with some empirical anchors), Eliot\'s Pink Brain, Blue Brain (for the developmental-neuroscience empirical base), or Connell\'s Der gemachte Mann (for the sociological-structural account with ethnographic and statistical support). Readers seeking an integrated ethical-political framework that can organize the findings of all those books around a coherent normative horizon should read hooks. ' +
		'Compared to the library: hooks is the only explicit Black feminist voice, the only book using a love ethic as its central category, and one of very few that treats ethical-spiritual and political-structural claims as mutually necessary. Her overlap with Pollack (mask, father hunger) is substantial; her engagement with Connell is direct and cooperative (she cites his essay "Gender Politics of Men"); her opposition to Sax, Gurian, and Benenson on biological essentialism is total. The book is best read as the ETHICAL-NORMATIVE complement to Connell\'s STRUCTURAL-POLITICAL account and Pollack\'s CLINICAL-RELATIONAL account — the three together form the anti-essentialist triangle of the library.'
};
