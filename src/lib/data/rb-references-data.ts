// rb-references-data.ts
// Structured reference data for "Real Boys" (William S. Pollack, 1998)
// Source: RealBoys/analysis/sources-raw.md

export interface Author {
  name: string;
  field: string;
  works: Work[];
  pages: string;
  context: string;
  keyFigure?: boolean;
}

export interface Work {
  title: string;
  type: 'book' | 'article' | 'study' | 'film' | 'talk' | 'dissertation' | 'report' | 'other';
  year: number | string;
  publisher?: string;
  coAuthors?: string[];
}

export interface Institution {
  name: string;
  type: string;
  context: string;
  pages: string;
}

export interface StudyRef {
  name: string;
  authors?: string;
  year?: string;
  finding: string;
  pages: string;
}

// ---------------------------------------------------------------------------
// AUTHORS
// ---------------------------------------------------------------------------

export const authors: Author[] = [
  // ---- Stone Center / Relational-Cultural Theory (Pollack's primary theoretical lineage) ----
  {
    name: "Gilligan, Carol",
    field: "Developmental Psychology / Relational Theory",
    works: [
      { title: "In a Different Voice", type: "book" as const, year: 1982, publisher: "Harvard University Press" },
      { title: "Meeting at the Crossroads: Women's Psychology and Girls' Development", type: "book" as const, year: 1992, publisher: "Ballantine Books", coAuthors: ["L. M. Brown"] }
    ],
    pages: "Intro; Ch. 1 (p. 18); Ch. 4; Ch. 8",
    context: "Harvard developmental psychologist; her work on girls' 'voices' is the direct model Pollack adapts for boys. The 'Listening to Boys' Voices' study name is an explicit homage.",
    keyFigure: true
  },
  {
    name: "Jordan, Judith V.",
    field: "Relational-Cultural Theory / Shame Theory",
    works: [
      { title: "Empathy and Self-Boundaries", type: "other" as const, year: 1984, publisher: "Stone Center Working Paper Series No. 16, Wellesley College" },
      { title: "Relational Development: Therapeutic Implications of Empathy and Shame", type: "other" as const, year: 1989, publisher: "Stone Center Working Paper Series No. 39, Wellesley College" },
      { title: "Women's Growth in Connection", type: "book" as const, year: 1991, publisher: "Guilford Press", coAuthors: ["A. G. Kaplan", "J. Baker Miller", "I. P. Stiver", "J. L. Surrey"] }
    ],
    pages: "Ch. 2 (pp. 61-64); Ch. 5; Ch. 6",
    context: "Pollack's Harvard Medical School colleague; provides the theoretical definition of shame as 'the feeling state that accompanies emotional disconnection.' Her work on empathy and shame is the theoretical bridge between Pollack's observations and his causal claims.",
    keyFigure: true
  },
  {
    name: "Miller, Jean Baker",
    field: "Feminist Psychology / Relational Theory",
    works: [
      { title: "Toward a New Psychology of Women", type: "book" as const, year: 1976, publisher: "Beacon Press" },
      { title: "The Healing Connection", type: "book" as const, year: 1997, publisher: "Beacon Press", coAuthors: ["I. P. Stiver"] },
      { title: "The Construction of Anger in Women and Men", type: "other" as const, year: 1983, publisher: "Stone Center Working Paper No. 4" }
    ],
    pages: "Ch. 1; Ch. 13 (pp. 392-393)",
    context: "Founder of Stone Center relational-cultural theory. Pollack cites her directly on how boys are 'made to fear not being aggressive lest they be found wanting...or (worst of all) be like a girl.'",
    keyFigure: true
  },
  {
    name: "Stiver, Irene P.",
    field: "Relational-Cultural Theory",
    works: [
      { title: "Women's Growth in Connection", type: "book" as const, year: 1991, publisher: "Guilford Press", coAuthors: ["J. V. Jordan", "A. G. Kaplan", "J. Baker Miller", "J. L. Surrey"] }
    ],
    pages: "Intro; Ch. 5",
    context: "Stone Center co-author; part of the theoretical framework Pollack applies from women's psychology to boys' development."
  },
  {
    name: "Surrey, Janet L.",
    field: "Relational-Cultural Theory",
    works: [
      { title: "Women's Growth in Connection", type: "book" as const, year: 1991, publisher: "Guilford Press", coAuthors: ["J. V. Jordan", "A. G. Kaplan", "J. Baker Miller", "I. P. Stiver"] }
    ],
    pages: "Intro",
    context: "Stone Center co-author; contributor to relational-cultural theoretical framework."
  },
  {
    name: "Pipher, Mary",
    field: "Clinical Psychology",
    works: [
      { title: "Reviving Ophelia", type: "book" as const, year: 1994, publisher: "Grosset/Putnam" }
    ],
    pages: "Foreword; Ch. 1 (pp. 6-7)",
    context: "Wrote the foreword to Real Boys. Pollack explicitly frames his book as 'Rescuing Ophelia's Brothers' — the male companion to Pipher's work on adolescent girls.",
    keyFigure: true
  },

  // ---- Boy Code Source ----
  {
    name: "David, Deborah",
    field: "Gender Studies / Sociology",
    works: [
      { title: "The Forty-nine Percent Majority: The Male Sex Role", type: "book" as const, year: 1976, publisher: "Addison-Wesley", coAuthors: ["Robert Brannon"] }
    ],
    pages: "Ch. 2 (pp. 52-54)",
    context: "Source of the four Boy Code injunctions: 'The Sturdy Oak,' 'Give 'em Hell,' 'The Big Wheel,' and 'No Sissy Stuff.' Pollack adopts and extends their framework throughout the book.",
    keyFigure: true
  },
  {
    name: "Brannon, Robert",
    field: "Gender Studies",
    works: [
      { title: "The Forty-nine Percent Majority: The Male Sex Role", type: "book" as const, year: 1976, publisher: "Addison-Wesley", coAuthors: ["Deborah David"] }
    ],
    pages: "Ch. 2 (pp. 52-54)",
    context: "Co-author of the four male sex role injunctions that form the structural basis of Pollack's Boy Code.",
    keyFigure: true
  },
  {
    name: "Chodorow, Nancy",
    field: "Feminist Psychoanalysis / Sociology",
    works: [
      { title: "The Reproduction of Mothering", type: "book" as const, year: 1978, publisher: "University of California Press" },
      { title: "Feminism and Psychoanalytic Theory", type: "book" as const, year: 1989, publisher: "Yale University Press" }
    ],
    pages: "Ch. 2 (pp. 57-58)",
    context: "Pollack cites Chodorow on 'dis-identification' — the process by which boys define masculinity as NOT being feminine/maternal. Pollack explicitly DISAGREES with her framing of this as healthy, arguing instead that the ruptured connection is damaging."
  },

  // ---- Infant & Child Emotion Research (Ch 2 core) ----
  {
    name: "Malatesta, Carol Z.",
    field: "Developmental Psychology",
    works: [
      { title: "Learning Display Rules: The Socialization of Emotion Expression in Infancy", type: "study" as const, year: 1982, publisher: "Child Development 53: 991-1003", coAuthors: ["Jeannette M. Haviland"] },
      { title: "The Development of Emotion Expression During the First Two Years of Life", type: "study" as const, year: 1989, publisher: "Monographs of the Society for Research in Child Development 50, Serial No. 219", coAuthors: ["C. Culver", "J. Tesman"] }
    ],
    pages: "Ch. 2 (pp. 70-72)",
    context: "Rutgers-based research showing that mothers actively mirror boys' smiles but ignore their unhappy emotions (responding to girls' sadness 22% of the time, to boys' 0%). Foundational evidence for Pollack's claim that emotional suppression in boys is socialized, not innate.",
    keyFigure: true
  },
  {
    name: "Haviland, Jeannette M.",
    field: "Developmental Psychology",
    works: [
      { title: "Learning Display Rules: The Socialization of Emotion Expression in Infancy", type: "study" as const, year: 1982, publisher: "Child Development 53: 991-1003", coAuthors: ["Carol Z. Malatesta"] }
    ],
    pages: "Ch. 2 (pp. 70-72)",
    context: "Co-author of the Rutgers infant emotion studies that demonstrate differential maternal response to boys' vs. girls' negative emotions.",
    keyFigure: true
  },
  {
    name: "Brody, Leslie R.",
    field: "Gender Differences in Emotional Expression",
    works: [
      { title: "On Understanding Gender Differences in the Expression of Emotion", type: "other" as const, year: 1993, publisher: "In Human Feelings: Explorations in Affect Development and Meaning (Analytic Press)" },
      { title: "Gender, Emotional Expression and the Family", type: "other" as const, year: 1996, publisher: "In Emotion: Interdisciplinary Perspectives (Lawrence Erlbaum)" },
      { title: "Gender and Emotion", type: "other" as const, year: 1993, publisher: "In Handbook of Emotions (Guilford Press)", coAuthors: ["J. Hall"] }
    ],
    pages: "Ch. 1; Ch. 2 (pp. 72-73); Ch. 6",
    context: "Boston University; her meta-analytic work on gender and emotional expression is cited by both Pollack (Real Boys) and Kindlon & Thompson (Raising Cain). Shows developmental divergence: males become LESS facially expressive with age while females become more so.",
    keyFigure: true
  },
  {
    name: "Grief, Esther",
    field: "Developmental Psychology",
    works: [
      { title: "Recognizing Emotions in Other People: Sex Differences in Socialization", type: "other" as const, year: 1981, publisher: "Society for Research in Child Development, Boston", coAuthors: ["M. Alvarez", "K. Ulman"] }
    ],
    pages: "Ch. 2 (p. 74)",
    context: "Boston University study: mothers never used the word 'angry' with girls in story-creation tasks but frequently used it with boys."
  },
  {
    name: "Fivush, Robyn",
    field: "Developmental Psychology / Emotion Socialization",
    works: [
      { title: "Exploring Sex Differences in the Emotional Content of Mother-Child Conversations about the Past", type: "study" as const, year: 1989, publisher: "Sex Roles 20: 675-91" }
    ],
    pages: "Ch. 2 (p. 74)",
    context: "Emory University research: parents focus on anger more frequently with sons; when guiding children through conflicts, parents favor reestablishing harmony with daughters but accept retaliation as reasonable for sons."
  },

  // ---- Father Research ----
  {
    name: "Parke, Ross D.",
    field: "Family Psychology / Father-Child Interaction",
    works: [
      { title: "Father", type: "book" as const, year: 1981, publisher: "Harvard University Press" }
    ],
    pages: "Ch. 6 (pp. 113-115)",
    context: "UC Riverside Center for Family Studies. Pollack cites his research showing fathers are as responsive to infant cues as mothers are, but with a distinctive style that draws out wider emotional intensity and teaches boys to handle complex social situations.",
    keyFigure: true
  },
  {
    name: "Herzog, Jim (James)",
    field: "Child Psychiatry / Psychoanalysis",
    works: [
      { title: "On Father Hunger: The Father's Role in the Modulation of Aggressive Drive and Fantasy", type: "other" as const, year: 1982, publisher: "In Cath, Gurwitt & Ross (eds.), Father and Child (Little, Brown)" }
    ],
    pages: "Ch. 2 (pp. 61-62); Ch. 6 (p. 114, p. 159)",
    context: "Harvard psychiatrist; originator of the 'father hunger' concept that Pollack uses throughout. Also coined 'kamikaze play' for fathers' rough-and-tumble play with sons.",
    keyFigure: true
  },
  {
    name: "Pruett, Kyle D.",
    field: "Child Psychiatry",
    works: [
      { title: "The Nurturing Father", type: "book" as const, year: 1987, publisher: "Warner Books" },
      { title: "The Nurturing Male: A Longitudinal Study of Primary Nurturing Fathers", type: "other" as const, year: 1989, publisher: "In Fathers and Their Families (Analytic Press)" }
    ],
    pages: "Ch. 6 (pp. 131-133)",
    context: "Yale child psychiatrist; conducted a 10-year longitudinal study of fathers who served as primary caregivers. Found that their sons showed more caring behavior, greater gender flexibility, and stronger self-assurance about identity — directly contradicting myths about boys 'needing' male toughening.",
    keyFigure: true
  },
  {
    name: "Snarey, John",
    field: "Developmental Psychology / Fatherhood Research",
    works: [
      { title: "How Fathers Care for the Next Generation: A Four-Decade Study", type: "book" as const, year: 1993, publisher: "Harvard University Press" }
    ],
    pages: "Ch. 6 (pp. 118-119, 169)",
    context: "Harvard follow-up of the landmark Glueck Study of 240 fathers and sons in Boston, begun 40+ years before. Found supportive fathering in first 10 years predicted sons' HS/college success, and continued nurturing through adolescence predicted career success — no upper bound on father involvement.",
    keyFigure: true
  },
  {
    name: "Belsky, Jay",
    field: "Developmental Psychology / Family Research",
    works: [
      { title: "Beyond Fathering Behaviors: Types of Dads", type: "study" as const, year: 1996, publisher: "Journal of Family Psychology 10(4): 431-42", coAuthors: ["A. Jain", "K. Crnic"] }
    ],
    pages: "Ch. 6 (p. 115)",
    context: "Penn State pioneer researcher on fathers' impact on children. Pollack quotes his quip: 'If Adam had been a better father, things would have turned out differently for Cain and Abel.'"
  },
  {
    name: "D'Angelo, Laura L.",
    field: "Developmental Psychology",
    works: [
      { title: "Like Father, Like Son? Predicting Male-Adolescents' Adjustment from Parents' Distress and Self-restraint", type: "study" as const, year: 1995, publisher: "Developmental Psychology 31(6): 883-96", coAuthors: ["D. A. Weinberger", "S. S. Feldman"] }
    ],
    pages: "Ch. 6 (pp. 121-122)",
    context: "Case Western Reserve University study of 80+ adolescent boys. Found that fathers with poor self-control had sons with difficulties across all life domains: school problems, peer conflict, drug/alcohol use, promiscuity."
  },
  {
    name: "Sears, Robert",
    field: "Developmental Psychology",
    works: [
      { title: "Patterns of Child Rearing", type: "book" as const, year: 1957, publisher: "Row, Peterson", coAuthors: ["E. Maccoby", "H. Levin"] }
    ],
    pages: "Ch. 6 (pp. 118)",
    context: "Original Sears/Maccoby longitudinal study that later became the basis for the 26-year follow-up by Koestner et al. Pollack cites the finding that age-5 father involvement predicted age-23 compromise ability, age-31 empathy, and age-40s intimacy/social health.",
    keyFigure: true
  },
  {
    name: "Hardesty, Constance",
    field: "Psychology / Fatherhood Research",
    works: [],
    pages: "Ch. 6 (p. 117)",
    context: "Morehead State University Kentucky longitudinal study following boys ages 7 to 22; found that fathers who were 'close and nurturing' had adolescent sons with flexible attitudes about gender and life."
  },
  {
    name: "Bernadett-Shapiro, Shoshana",
    field: "Family Therapy",
    works: [
      { title: "Father Participation in Childcare and the Development of Empathy in Sons: An Empirical Study", type: "study" as const, year: 1996, publisher: "Family Therapy 23(2): 77-93", coAuthors: ["D. Ehrensaft", "J. L. Shapiro"] }
    ],
    pages: "Ch. 6 (p. 117)",
    context: "Santa Clara University study finding that first-grade boys whose fathers participated in their care showed greater capacity for empathy."
  },
  {
    name: "Bryan, Mark",
    field: "Education / Fatherhood",
    works: [],
    pages: "Ch. 6 (pp. 173-174)",
    context: "Harvard Graduate School of Education; cited for research on 'prodigal fathers' — 50% of divorced fathers see their children but once a year; 30% never or rarely. Source of the 'deadpan dad' concept Pollack uses as a counter to 'deadbeat dad.'"
  },
  {
    name: "Hite, Shere",
    field: "Sexuality Research",
    works: [],
    pages: "Ch. 6 (pp. 158-159)",
    context: "Cited for her survey of 7000+ men, in which 'almost none could claim they were close to their fathers' — statistical foundation for Pollack's claim about father hunger being pervasive."
  },
  {
    name: "Sternback, Jack",
    field: "Clinical Psychology",
    works: [],
    pages: "Ch. 6 (p. 159)",
    context: "Massachusetts psychologist; informal survey of 71 clients found 25% had physically absent fathers, 40% psychologically/emotionally absent, 15% had fathers they found frightening or dangerous."
  },

  // ---- Attachment & Secure Base ----
  {
    name: "Gunnar, Megan",
    field: "Developmental Psychology / Attachment",
    works: [],
    pages: "Ch. 5 (pp. 118-119)",
    context: "University of Minnesota attachment research. Pollack cites her finding that secure attachments to mother work as buffers against frightening situations."
  },
  {
    name: "Sroufe, L. Alan",
    field: "Developmental Psychology / Attachment",
    works: [],
    pages: "Ch. 5 (pp. 118-119)",
    context: "University of Minnesota colleague of Gunnar. Securely attached infants show greater self-reliance, lower rates of psychopathology, better school performance, and higher self-esteem throughout their lives."
  },

  // ---- Mothers & Cross-Cultural ----
  {
    name: "Barnett, Rosalind C.",
    field: "Psychology / Work-Family Research",
    works: [
      { title: "Physical Symptoms and the Interplay of Work and Family Roles", type: "study" as const, year: 1991, publisher: "Health Psychology 10: 94-101", coAuthors: ["N. Marshall"] },
      { title: "She Works, He Works", type: "book" as const, year: 1996, publisher: "HarperCollins", coAuthors: ["C. Rivers"] }
    ],
    pages: "Ch. 5 (p. 131); Ch. 6 (p. 170)",
    context: "Wellesley College. Pollack cites her finding that young adult men with close relationships to their parents had LOWER levels of psychological distress, and did not experience their parents as intrusive. Also the dual-earner study finding that fathers' positive relationships with children was the best predictor of men's physical health."
  },
  {
    name: "Gurian, Michael",
    field: "Men's Movement / Education",
    works: [],
    pages: "Ch. 5 (p. 120)",
    context: "Cited by Pollack as representing a view he DISAGREES with — that mothers are 'confused by boys' because they 'weren't brought up in male cultures.' Pollack argues it's the culture that is confused, not mothers specifically. This is an explicit disagreement with the Wonder of Boys / boy-crisis-essentialist camp."
  },

  // ---- Depression Research ----
  {
    name: "Nolen-Hoeksema, Susan",
    field: "Clinical Psychology / Depression Research",
    works: [
      { title: "Sex Differences in Depression", type: "book" as const, year: 1990, publisher: "Stanford University Press" },
      { title: "The Emergence of Gender Differences in Depression During Adolescence", type: "study" as const, year: 1994, publisher: "Psychological Bulletin 115(3): 424-43", coAuthors: ["J. S. Girgus"] },
      { title: "Gender Differences in Coping with Depression Across the Life-span", type: "article" as const, year: 1995, publisher: "Depression 3: 81-90" }
    ],
    pages: "Ch. 12 (pp. 356-358, 359)",
    context: "Stanford University. Leading researcher on gender and depression. Pollack cites her findings that boys ages 8-12 actually reported MORE depression than girls, and that girls 'ruminate' while boys distract — providing the basis for his 'hidden epidemic' thesis.",
    keyFigure: true
  },
  {
    name: "Angst, Jules",
    field: "Psychiatry / Depression Epidemiology",
    works: [
      { title: "Do the Diagnostic Criteria Determine the Sex Ratio in Depression?", type: "study" as const, year: 1984, publisher: "Journal of Affective Disorders 7: 189-98", coAuthors: ["A. Dobler-Mikola"] }
    ],
    pages: "Ch. 12 (pp. 357-358)",
    context: "Swiss longitudinal research finding that men with the same functional impairment as depressed women reported FEWER symptoms and tended to forget their past depression. Critical support for Pollack's masking thesis.",
    keyFigure: true
  },
  {
    name: "Dobler-Mikola, Anna",
    field: "Psychiatry",
    works: [
      { title: "Do the Diagnostic Criteria Determine the Sex Ratio in Depression?", type: "study" as const, year: 1984, publisher: "Journal of Affective Disorders 7: 189-98", coAuthors: ["J. Angst"] }
    ],
    pages: "Ch. 12 (p. 357)",
    context: "Co-author of the Angst Swiss gender-depression study."
  },
  {
    name: "Girgus, Joan",
    field: "Psychology / Depression",
    works: [
      { title: "Why Do Sex Differences in Depression Emerge During Adolescence?", type: "other" as const, year: 1989, publisher: "APA Annual Meeting, New Orleans", coAuthors: ["S. Nolen-Hoeksema", "M. E. Seligman"] }
    ],
    pages: "Ch. 12 (pp. 355-356)",
    context: "Princeton University. Her study found that, contrary to expectation, boys' depression was significantly correlated with BOTH popularity AND rejection — directly supporting Pollack's 'hidden yearning for relationships' thesis against the myth that boys don't care about peer acceptance."
  },
  {
    name: "Rohde, Paul",
    field: "Clinical Psychology",
    works: [
      { title: "Correlates of Suicide Behavior in a Juvenile Detention Population", type: "study" as const, year: 1997, publisher: "Suicide and Life-Threatening Behavior 27(2): 164-75", coAuthors: ["J. R. Seeley", "D. E. Mace"] }
    ],
    pages: "Ch. 12 (p. 356)",
    context: "Eugene, Oregon study finding that delinquent adolescents' suicide ideation was closely linked to lack of social supports, loneliness, and few close relatives — supporting the social-connection thesis."
  },
  {
    name: "Smucker, M.",
    field: "Child Psychology",
    works: [
      { title: "The Children's Depression Inventory: Norms and Psychometric Analysis", type: "dissertation" as const, year: 1982, publisher: "Pennsylvania State University" }
    ],
    pages: "Ch. 12 (p. 357)",
    context: "Penn State survey of 2,790 rural Pennsylvania children — found no gender difference in depression, directly contradicting the traditional female-majority assumption."
  },
  {
    name: "Bowden, Blake",
    field: "Pediatrics / Adolescent Health",
    works: [],
    pages: "Ch. 7 (p. 174); Ch. 12 (p. 356)",
    context: "Cincinnati Children's Hospital Medical Center researcher. Found that teenagers who ate dinner with their parents at least five nights a week were significantly better adjusted than classmates who dined alone."
  },

  // ---- Violence Research ----
  {
    name: "Gilligan, James",
    field: "Forensic Psychiatry / Violence Research",
    works: [
      { title: "Violence: Our Deadly Epidemic and Its Causes", type: "book" as const, year: 1996, publisher: "Putnam" }
    ],
    pages: "Ch. 13 (p. 394)",
    context: "Widely cited synthesis of male violence. Pollack quotes his observation that 'trans-historically, men have been the more violent sex' but frames this as socialization, not biology.",
    keyFigure: true
  },
  {
    name: "Raine, Adrian",
    field: "Criminology / Psychobiology",
    works: [
      { title: "Interaction between Birth Complications and Early Maternal Rejection in Predisposing Individuals to Adult Violence: Specificity to Serious, Early-Onset Violence", type: "study" as const, year: 1997, publisher: "American Journal of Psychiatry 154: 1265-71", coAuthors: ["P. Brennan", "S. A. Mednick"] }
    ],
    pages: "Ch. 13 (p. 395)",
    context: "Danish longitudinal cohort study. Found that individuals who suffered BOTH birth complications and early maternal rejection were most likely to become violent offenders in adulthood. Specifically supports Pollack's disconnection-causes-violence thesis.",
    keyFigure: true
  },
  {
    name: "Canada, Geoffrey",
    field: "Community Activism / Violence Prevention",
    works: [
      { title: "Fist Stick Knife Gun: A Personal History of Violence in America", type: "book" as const, year: 1995, publisher: "Beacon Press" }
    ],
    pages: "Ch. 13",
    context: "First-person account of male violence from a community-organizing perspective."
  },

  // ---- Homosexuality Research ----
  {
    name: "Kallman, Franz J.",
    field: "Psychiatric Genetics",
    works: [
      { title: "Heredity in Health and Mental Disorder: Principles of Psychiatric Genetics in the Light of Comparative Twin Studies", type: "book" as const, year: 1953, publisher: "Norton" }
    ],
    pages: "Ch. 9 (pp. 214-215)",
    context: "Foundational twin study of 85 gay men showing ~100% identical twin concordance for homosexuality vs. 11.5% fraternal twin concordance — key evidence for biological basis."
  },
  {
    name: "LeVay, Simon",
    field: "Neuroscience / Sexual Orientation",
    works: [],
    pages: "Ch. 9 (pp. 215-216)",
    context: "His finding that certain hypothalamus nuclei were larger in heterosexual men than in homosexual men or heterosexual women opened the door to brain-based differences in sexual orientation."
  },
  {
    name: "Isay, Richard A.",
    field: "Psychiatry / Gay Affirmative Therapy",
    works: [
      { title: "Being Homosexual: Gay Men and Their Development", type: "book" as const, year: 1989, publisher: "Farrar, Straus & Giroux" }
    ],
    pages: "Ch. 9",
    context: "Influential psychiatric account of gay male development that challenged traditional psychoanalytic pathologizing."
  },
  {
    name: "Friedman, Carl",
    field: "Psychiatry / Sexual Orientation Research",
    works: [
      { title: "Psychoanalysis, Psychobiology, and Homosexuality", type: "study" as const, year: 1993, publisher: "Journal of American Psychoanalytic Association 41(4): 1159-98", coAuthors: ["J. Downey"] },
      { title: "Homosexuality", type: "article" as const, year: 1994, publisher: "New England Journal of Medicine 331(14): 923-30", coAuthors: ["J. Downey"] }
    ],
    pages: "Ch. 9",
    context: "NEJM review article providing the biomedical case against pathologizing homosexuality."
  },
  {
    name: "Ford, Clellan",
    field: "Anthropology",
    works: [],
    pages: "Ch. 9 (p. 212)",
    context: "Cross-cultural study of 76+ societies (with Frank Beach) finding that a majority considered homosexuality socially acceptable or normal — used by Pollack to historicize Western attitudes."
  },

  // ---- School Research ----
  {
    name: "Hedges, Larry V.",
    field: "Educational Statistics",
    works: [
      { title: "Sex Differences in Mental Test Scores, Variability, and Numbers of High-Scoring Individuals", type: "study" as const, year: 1995, publisher: "Science 269: 41-45", coAuthors: ["A. Nowell"] }
    ],
    pages: "Ch. 10 (pp. 274-275)",
    context: "University of Chicago meta-analysis combining 6 major surveys spanning 30 years of educational achievement data. Shows boys dominate top 10% of math/science but bottom of reading/writing — the foundational quantitative evidence for the academic gender gap.",
    keyFigure: true
  },
  {
    name: "Nowell, A.",
    field: "Educational Statistics",
    works: [
      { title: "Sex Differences in Mental Test Scores, Variability, and Numbers of High-Scoring Individuals", type: "study" as const, year: 1995, publisher: "Science 269: 41-45", coAuthors: ["L. V. Hedges"] }
    ],
    pages: "Ch. 10 (p. 275)",
    context: "Co-author of the landmark University of Chicago meta-analysis on sex differences in educational test scores."
  },
  {
    name: "Purkey, William W.",
    field: "Education / Self-Concept Research",
    works: [
      { title: "Research in Middle Level Education", type: "article" as const, year: 1993, publisher: "National Middle School Association 17(1): 79-89", coAuthors: ["K. L. Harper"] }
    ],
    pages: "Ch. 1 (p. 16); Ch. 10 (pp. 278-279)",
    context: "University of North Carolina creator of the Self-Concept as Learner Scale. Found that girls scored higher than boys across all grade levels. Provides the key self-esteem measurement data Pollack uses to argue boys' confidence is fragile despite bragging.",
    keyFigure: true
  },
  {
    name: "Finger, Joan P. K.",
    field: "Educational Psychology",
    works: [
      { title: "A Study of Professed and Inferred Self-Concept-as-Learner of African-American and Caucasian Middle Grade Students", type: "dissertation" as const, year: 1995, publisher: "University of North Carolina at Greensboro" }
    ],
    pages: "Ch. 10 (p. 279)",
    context: "UNC-Greensboro dissertation replicating Purkey's findings in African American middle school students; found the gender pattern held across racial groups."
  },
  {
    name: "Lee, Valerie",
    field: "Educational Research",
    works: [
      { title: "The Influence of School Climate on Gender Differences in Achievement and Engagement of Young Adolescents", type: "study" as const, year: "1990s", publisher: "University of Michigan" }
    ],
    pages: "Ch. 10 (pp. 280-281)",
    context: "University of Michigan analysis of 9000+ eighth-grade students finding that girls were more academically engaged, had better study habits and attendance, and were more positive about school than boys."
  },
  {
    name: "Nottelmann, Editha",
    field: "Developmental Psychology",
    works: [
      { title: "Competence and Self-Esteem during Transition from Childhood to Adolescence", type: "study" as const, year: 1987, publisher: "Developmental Psychology 23(3): 441-50" }
    ],
    pages: "Ch. 10 (p. 278)",
    context: "National Institute of Mental Health researcher. Found that boys rated themselves as more competent than their teachers rated them, while girls' self-ratings matched their teachers' — supporting the boys-mask-their-weakness thesis."
  },
  {
    name: "Riley, Richard W.",
    field: "Education Policy",
    works: [],
    pages: "Ch. 10 (pp. 275-276)",
    context: "US Secretary of Education during the Clinton administration. Cited for his 1997 testimony to Congress on reading as a 'make or break' point in children's educational trajectories."
  },
  {
    name: "Bushweller, Kevin",
    field: "Education Journalism",
    works: [
      { title: "Turning Our Backs on Boys", type: "article" as const, year: 1994, publisher: "American School Board Journal 181: 20-25" }
    ],
    pages: "Ch. 1; Ch. 10",
    context: "Early popular journalism documenting the boy-crisis in schools."
  },
  {
    name: "Cohen, Lawrence",
    field: "Child Psychology / Education",
    works: [
      { title: "Hunters and Gatherers in the Classroom", type: "article" as const, year: 1997, publisher: "Independent School Magazine 57(1): 28-36" }
    ],
    pages: "Ch. 13 (pp. 396-397)",
    context: "Writes about how traditional gender stereotypes persist in classroom behavior despite 40+ years of progress on gender roles."
  },

  // ---- Sports & Play ----
  {
    name: "Winnicott, Donald W.",
    field: "Psychoanalysis / Object Relations",
    works: [
      { title: "The Maturational Process and the Facilitating Environment", type: "book" as const, year: 1974, publisher: "International Universities Press" }
    ],
    pages: "Ch. 11 (p. 316)",
    context: "Pollack cites Winnicott's foundational claim that play is at the heart of healthy integrated development — a theoretical grounding for his defense of sports as transformational for boys."
  },
  {
    name: "Giamatti, A. Bartlett",
    field: "Sports Philosophy / Humanities",
    works: [
      { title: "Take Time for Paradise", type: "book" as const, year: 1989, publisher: "Summit" }
    ],
    pages: "Ch. 11 (p. 316)",
    context: "Former commissioner of baseball and Renaissance scholar. Pollack quotes his distinction between 'winning' and 'fully playing' — used to frame the book's sports chapter."
  },
  {
    name: "Miedzian, Myriam",
    field: "Philosophy / Violence Prevention",
    works: [
      { title: "Boys Will Be Boys: Breaking the Link between Masculinity and Violence", type: "book" as const, year: 1991, publisher: "Anchor Books" }
    ],
    pages: "Ch. 11; Ch. 13",
    context: "Philosopher who made the early case that masculine socialization and violence are culturally linked, not biologically determined."
  },

  // ---- Other notable voices ----
  {
    name: "Sullivan, Harry Stack",
    field: "Psychiatry / Interpersonal Theory",
    works: [],
    pages: "Ch. 8 (p. 220)",
    context: "His concept of 'chumships' — same-sex intimate friendships in preadolescence — is Pollack's theoretical foundation for arguing that boys' friendships matter as much as girls'."
  },
  {
    name: "Tannen, Deborah",
    field: "Linguistics / Gender",
    works: [
      { title: "You Just Don't Understand", type: "book" as const, year: 1990, publisher: "William Morrow" }
    ],
    pages: "Ch. 8",
    context: "Linguistic research on gender differences in conversational style — referenced for the 'action love' framework."
  },
  {
    name: "Wallerstein, Judith S.",
    field: "Psychology / Divorce Research",
    works: [
      { title: "Surviving the Break-up: How Children and Parents Cope with Divorce", type: "book" as const, year: 1980, publisher: "Basic Books", coAuthors: ["J. B. Kelly"] },
      { title: "Second Chances", type: "book" as const, year: 1989, publisher: "Ticknor and Fields", coAuthors: ["S. Blakeslee"] }
    ],
    pages: "Ch. 14 (pp. 416)",
    context: "Founder of the Center for the Family in Transition. Source of the 'sleeper effect' concept — girls appear to handle divorce well at the time but show negative effects years later.",
    keyFigure: true
  },
  {
    name: "Fergusson, D. M.",
    field: "Longitudinal Psychology",
    works: [
      { title: "Parental Separation, Adolescent Psychopathology, and Problem Behaviors", type: "study" as const, year: 1994, publisher: "J. Am. Acad. Child Adolesc. Psychiatry 33(8): 1122-31", coAuthors: ["L. J. Horwood", "M. T. Lynskey"] }
    ],
    pages: "Ch. 14 (p. 417)",
    context: "New Zealand longitudinal study of 1000+ children from birth to age 15. Found children of divorced families were more likely to start sex earlier, abuse drugs, and were 2× as likely to drop out of school."
  },
  {
    name: "Kasen, Stephanie",
    field: "Psychiatric Epidemiology",
    works: [
      { title: "A Multiple-Risk Interaction Model: Effects of Temperament and Divorce on Psychiatric Disorders in Children", type: "study" as const, year: 1996, publisher: "Journal of Abnormal Child Psychology 24(2): 121-50", coAuthors: ["P. Cohen", "J. S. Brook", "C. Hartmark"] }
    ],
    pages: "Ch. 14 (p. 422)",
    context: "Studied 648 children for 8 years after parental divorce. Found that boys in mother-only households were 5× more at risk for major depressive disorders than girls in mother-only families — striking gender disparity."
  },
  {
    name: "Santrock, J. W.",
    field: "Developmental Psychology",
    works: [],
    pages: "Ch. 14 (p. 420)",
    context: "Researcher who interviewed 45 fifth-grade boys about divorce; argues that divorce is actually more traumatic for boys than parental death because divorce leaves ambiguous hope for reconciliation while death is clear-cut."
  },

  // ---- Pollack's own key collaborators ----
  {
    name: "Pollack, William S.",
    field: "Clinical Psychology / Psychology of Men",
    works: [
      { title: "In a Time of Fallen Heroes: The ReCreation of Masculinity", type: "book" as const, year: 1993, publisher: "Atheneum", coAuthors: ["R. W. Betcher"] },
      { title: "A New Psychology of Men", type: "book" as const, year: 1995, publisher: "Basic Books", coAuthors: ["R. Levant (co-editor)"] },
      { title: "Deconstructing Dis-identification: Rethinking Psychoanalytic Concepts of Male Development", type: "article" as const, year: 1995, publisher: "Psychoanalysis and Psychotherapy 12(1): 30-45" },
      { title: "'I'ness and 'We'ness: Parallel Lines of Development", type: "dissertation" as const, year: 1982, publisher: "Boston University Ph.D. dissertation" }
    ],
    pages: "Throughout",
    context: "The author himself: Harvard Medical School faculty, Director of the Center for Men at McLean Hospital, founding member of the Society for the Psychological Study of Men and Masculinity (APA). Real Boys is the trade-book synthesis of his 20+ years of clinical and research work, anchored by the 'Listening to Boys' Voices' study.",
    keyFigure: true
  },
  {
    name: "Levant, Ronald F.",
    field: "Psychology of Men",
    works: [
      { title: "A New Psychology of Men", type: "book" as const, year: 1995, publisher: "Basic Books", coAuthors: ["W. S. Pollack"] },
      { title: "Toward the Reconstruction of Masculinity", type: "study" as const, year: 1992, publisher: "Journal of Family Psychology 5: 379-402" }
    ],
    pages: "Acknowledgments; Ch. 1",
    context: "Pollack's primary intellectual collaborator in the 'new psychology of men' movement. Co-editor of A New Psychology of Men (1995)."
  },
  {
    name: "Grossman, Frances",
    field: "Developmental Psychology / Family Research",
    works: [
      { title: "Good Enough Fathering", type: "other" as const, year: 1984, publisher: "National Council on Family Relations", coAuthors: ["W. S. Pollack"] }
    ],
    pages: "Acknowledgments",
    context: "Boston University. Pollack's early research mentor — invited him onto the BU Parenthood Project, which began his father-research trajectory."
  },
  {
    name: "Betcher, R. William",
    field: "Clinical Psychology",
    works: [
      { title: "In a Time of Fallen Heroes: The ReCreation of Masculinity", type: "book" as const, year: 1993, publisher: "Atheneum", coAuthors: ["W. S. Pollack"] }
    ],
    pages: "Acknowledgments",
    context: "Pollack's co-author on an earlier book and co-director of the Center for Men at McLean Hospital."
  }
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "Harvard Medical School / McLean Hospital Center for Men",
    type: "University / Research Hospital",
    context: "Pollack's institutional base. Home of the 'Listening to Boys' Voices' study. Center for Men co-directed with Bill Betcher. Colleagues cited: Dr. Steven Mirin, Dr. Bruce Cohen, Dr. Joseph Coyle (Consolidated Dept. of Psychiatry), Dr. Shervert Frazier.",
    pages: "Throughout"
  },
  {
    name: "Stone Center, Wellesley College",
    type: "Research Center",
    context: "Pollack's primary theoretical lineage. Jean Baker Miller, Irene Stiver, Judith Jordan, Janet Surrey developed relational-cultural theory and 'connected self' framework that Pollack applies to boys.",
    pages: "Intro; throughout"
  },
  {
    name: "International Coalition of Boys' Schools",
    type: "Professional Association",
    context: "Professional organization that supported Pollack's research on boys' schools; funded early analysis of the Listening to Boys' Voices study. Key figures: John Farber, Rick Hawley, Tony Jarvis, Rick Melvoin (Belmont Hill School).",
    pages: "Acknowledgments; Ch. 10"
  },
  {
    name: "Society for the Psychological Study of Men and Masculinity (APA Division 51)",
    type: "Professional Association",
    context: "Pollack was a founding member. Framework for the 'new psychology of men' that underlies Real Boys.",
    pages: "Acknowledgments; Intro"
  },
  {
    name: "Rutgers University",
    type: "University",
    context: "Malatesta & Haviland infant emotion research on differential maternal response to boys' vs. girls' emotions.",
    pages: "Ch. 2"
  },
  {
    name: "Boston University",
    type: "University",
    context: "Leslie Brody's work on gender and emotional expression; Esther Grief's work on mother-child story creation.",
    pages: "Ch. 1, Ch. 2"
  },
  {
    name: "Stanford University",
    type: "University",
    context: "Susan Nolen-Hoeksema's research program on sex differences in depression.",
    pages: "Ch. 12"
  },
  {
    name: "University of California, Riverside",
    type: "University",
    context: "Ross Parke's Center for Family Studies; research on father-infant interaction.",
    pages: "Ch. 6"
  },
  {
    name: "Yale University",
    type: "University",
    context: "Kyle Pruett's 10-year longitudinal study of primary-caregiver fathers.",
    pages: "Ch. 6"
  },
  {
    name: "University of Chicago",
    type: "University",
    context: "Hedges & Nowell meta-analysis of sex differences in educational test scores across 30 years of data, published in Science (1995).",
    pages: "Ch. 10"
  },
  {
    name: "University of North Carolina",
    type: "University",
    context: "William Purkey's development of the Self-Concept as Learner Scale; Finger's dissertation on African American students.",
    pages: "Ch. 1, Ch. 10"
  },
  {
    name: "University of Michigan",
    type: "University",
    context: "Valerie Lee's study of 9000+ 8th graders on gender differences in academic engagement.",
    pages: "Ch. 10"
  },
  {
    name: "University of Minnesota",
    type: "University",
    context: "Megan Gunnar and Alan Sroufe's research on secure attachment and resilience.",
    pages: "Ch. 5"
  },
  {
    name: "Case Western Reserve University",
    type: "University",
    context: "D'Angelo, Weinberger & Feldman study of 80+ adolescent boys on fathers' self-control and sons' adjustment.",
    pages: "Ch. 6"
  },
  {
    name: "Princeton University",
    type: "University",
    context: "Joan Girgus's adolescent depression research.",
    pages: "Ch. 12"
  },
  {
    name: "Penn State University",
    type: "University",
    context: "Smucker's 2,790-child Pennsylvania survey on depression in children; Jay Belsky's fatherhood research.",
    pages: "Ch. 6, Ch. 12"
  },
  {
    name: "Wellesley College",
    type: "College / Research Center",
    context: "Home of the Stone Center. Rosalind Barnett's work-family research on men's relationships with parents and health.",
    pages: "Ch. 5, Ch. 6"
  },
  {
    name: "Cincinnati Children's Hospital Medical Center",
    type: "Research Hospital",
    context: "Blake Bowden's research on family dinners and adolescent adjustment.",
    pages: "Ch. 7, Ch. 12"
  },
  {
    name: "Centers for Disease Control and Prevention (CDC)",
    type: "Government Agency",
    context: "Suicide surveillance reports (1985, 1995, 1997); the primary source for the US 15-24 suicide tripling statistic.",
    pages: "Ch. 12, Ch. 13"
  },
  {
    name: "US Department of Education",
    type: "Government Agency",
    context: "Condition of Education 1997 report documenting the female advantage in reading proficiency at all age levels.",
    pages: "Ch. 10"
  },
  {
    name: "National Institute of Mental Health (NIMH)",
    type: "Government Agency",
    context: "Editha Nottelmann's research on boys inflating self-ratings vs. teacher ratings.",
    pages: "Ch. 10"
  },
  {
    name: "American Medical Association (AMA)",
    type: "Professional Organization",
    context: "Source of the statistic that 1 in 10 boys has been kicked in the groin by 16; 25% suffer actual injury; majority don't tell parents.",
    pages: "Ch. 2, Ch. 13"
  },
  {
    name: "Alan Guttmacher Institute",
    type: "Research Institute",
    context: "Statistics on teen sexual activity; 'Sex and American Teenagers' (1994) and 'Facts in Brief: Teen Sex and Pregnancy' (1997).",
    pages: "Ch. 7"
  },
  {
    name: "Italian National Statistics Institute (ISTAT)",
    type: "Government Agency",
    context: "1997 demographic data showing 58% of Italian 'boys' 18-34 living with their mothers — Pollack's cross-cultural 'mammismo' evidence against the cut-the-apron-strings orthodoxy.",
    pages: "Ch. 5"
  }
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Listening to Boys' Voices",
    authors: "William S. Pollack, Harvard Medical School / McLean Hospital",
    year: "1990s",
    finding: "Pollack's own Harvard Medical School research program. Hundreds of young and adolescent boys interviewed, observed, tested, with parent reports. Qualitative documentation of the mask of masculinity, timed silence syndrome, action love, and other core concepts. The book's primary empirical base.",
    pages: "Throughout"
  },
  {
    name: "Malatesta & Haviland Infant Emotion Study",
    authors: "Carol Z. Malatesta, Jeannette M. Haviland (Rutgers)",
    year: "1982",
    finding: "Male infants are born MORE emotionally expressive than females. Mothers mirror boys' smiles but ignore their sad emotions (responding to girls' sadness 22% of the time, to boys' 0%). Foundational evidence for Pollack's claim that boys' emotional suppression is socialized.",
    pages: "Ch. 2 (pp. 70-72)"
  },
  {
    name: "Haviland & Malatesta Monograph (Emotion Development)",
    authors: "Carol Z. Malatesta, C. Culver, J. Tesman et al.",
    year: "1989",
    finding: "The Development of Emotion Expression During the First Two Years of Life. Monograph of the Society for Research in Child Development. Extended longitudinal follow-up of the 1982 findings.",
    pages: "Ch. 2"
  },
  {
    name: "Glueck Study / Snarey 40-Year Follow-up",
    authors: "Sheldon Glueck (original); John Snarey (Harvard, 40-year follow-up 1993)",
    year: "1940s-1993",
    finding: "240 fathers and sons in Boston. Supportive fathers in first 10 years → boys excelled in HS and college. Nurturing through adolescence → positive career success. Virtually impossible to be 'too involved' — no upper bound on father involvement.",
    pages: "Ch. 6 (pp. 118-119, 169)"
  },
  {
    name: "Hedges & Nowell Meta-Analysis",
    authors: "Larry V. Hedges & A. Nowell (University of Chicago)",
    year: "1995 (Science 269: 41-45)",
    finding: "Combined 6 major surveys spanning 30 years and involving thousands of children. Boys outnumber girls 3:1 in top 10% of math/science, 7:1 in top 1%. BUT boys outnumber girls 2:1 at the BOTTOM of reading comprehension, perceptual speed, and word association memory. Males 'at a rather profound disadvantage' in writing.",
    pages: "Ch. 10 (pp. 274-275)"
  },
  {
    name: "Kallman Twin Study",
    authors: "Franz J. Kallman",
    year: "1953",
    finding: "85 gay men twin study: 100% concordance for homosexuality in identical twins, only 11.5% in fraternal twins. Foundational evidence for heritable component of sexual orientation.",
    pages: "Ch. 9 (pp. 214-215)"
  },
  {
    name: "Raine/Brennan/Mednick Danish Violence Study",
    authors: "Adrian Raine, Patricia Brennan, Sarnoff A. Mednick",
    year: "1997 (Am. J. Psychiatry 154: 1265-71)",
    finding: "Danish longitudinal cohort. Individuals who suffered BOTH birth complications AND early maternal rejection were most likely to become violent offenders as adults. Specific support for Pollack's disconnection-causes-violence thesis.",
    pages: "Ch. 13 (p. 395)"
  },
  {
    name: "Angst & Dobler-Mikola Swiss Depression Study",
    authors: "Jules Angst, Anna Dobler-Mikola",
    year: "1984 (Journal of Affective Disorders 7: 189-98)",
    finding: "Men with equal functional impairment as women reported FEWER depressive symptoms; men tended to forget their past depression when interviewed a year later. Key evidence for the depression-masking hypothesis.",
    pages: "Ch. 12 (pp. 357-358)"
  },
  {
    name: "Nolen-Hoeksema Depression Research Program",
    authors: "Susan Nolen-Hoeksema (Stanford)",
    year: "1990-1995",
    finding: "Multiple studies showing boys 8-12 reported MORE depression than girls. Girls 'ruminate' on sadness while boys distract. Documented the 'hidden epidemic' of boy depression before it became widely recognized.",
    pages: "Ch. 12 (pp. 356-358, 359)"
  },
  {
    name: "Add Health (Resnick JAMA 1997)",
    authors: "M. D. Resnick, P. S. Bearman, R. W. Blum et al.",
    year: "1997 (JAMA 278(10): 823-32)",
    finding: "National Longitudinal Study of Adolescent Health. Family 'connectedness' protects teens against emotional distress, violence, suicide attempts, and substance use across ALL risk domains. Gold standard adolescent health finding that directly supports Pollack's 'potency of connection' thesis.",
    pages: "Ch. 7 (p. 174); Ch. 12 (p. 356)"
  },
  {
    name: "Smucker Pennsylvania Depression Survey",
    authors: "M. Smucker (Penn State Ph.D. dissertation)",
    year: "1982",
    finding: "2,790 rural Pennsylvania children surveyed; no gender differences in depression numbers OR severity. Contradicts the traditional female-majority assumption about depression.",
    pages: "Ch. 12 (p. 357)"
  },
  {
    name: "Purkey Self-Concept as Learner Scale",
    authors: "William W. Purkey (UNC)",
    year: "1993 (National Middle School Association 17(1): 79-89)",
    finding: "Indirect-measure self-esteem instrument found girls scored higher than boys across all grade levels and categories. Boys use bragging as 'a shield to hide a deep-seated lack of confidence.'",
    pages: "Ch. 1 (p. 16); Ch. 10 (pp. 278-279)"
  },
  {
    name: "Pruett Primary-Caregiver Father Study",
    authors: "Kyle D. Pruett (Yale)",
    year: "1987-1989",
    finding: "10-year longitudinal study of families in which fathers served as primary nurturing parents. Sons showed more caring behavior, gender flexibility, and self-assurance — contradicting myths about over-mothering/over-fathering creating identity problems.",
    pages: "Ch. 6 (pp. 131-133)"
  },
  {
    name: "Girgus/Nolen-Hoeksema/Seligman Depression Study",
    authors: "Joan Girgus, Susan Nolen-Hoeksema, Martin E. P. Seligman (Princeton)",
    year: "1989",
    finding: "Expected boys' depression to be less correlated with peer popularity/rejection than girls' — found the OPPOSITE. Boys' depression was significantly correlated with BOTH popularity and rejection, girls' only with rejection. Directly falsifies the stereotype that boys don't care about relationships.",
    pages: "Ch. 12 (pp. 355-356)"
  },
  {
    name: "Rohde Juvenile Detention Suicide Study",
    authors: "Paul Rohde, John R. Seeley, David E. Mace",
    year: "1997 (Suicide and Life-Threatening Behavior 27(2): 164-75)",
    finding: "Eugene, Oregon. Boys' suicidal behavior linked specifically to stressful life events + lack of social supports + loneliness + few close relatives. Supports the social-connection thesis for male suicide.",
    pages: "Ch. 12 (p. 356)"
  },
  {
    name: "Kasen Divorce Depression Study",
    authors: "Stephanie Kasen, P. Cohen, J. S. Brook, C. Hartmark",
    year: "1996 (Journal of Abnormal Child Psychology 24(2): 121-50)",
    finding: "648 children followed 8 years after parental divorce. Boys in mother-only households were 5× more at risk for major depressive disorders than girls in mother-only families. Striking gender asymmetry in divorce effects.",
    pages: "Ch. 14 (p. 422)"
  },
  {
    name: "Fergusson NZ Longitudinal Study",
    authors: "D. M. Fergusson, L. J. Horwood, M. T. Lynskey",
    year: "1994 (J. Am. Acad. Child Adolesc. Psychiatry 33(8): 1122-31)",
    finding: "New Zealand cohort of 1000+ children followed birth to 15. Children of divorced families were more likely to start sex earlier, abuse drugs, and were 2× as likely to drop out of school altogether.",
    pages: "Ch. 14 (p. 417)"
  },
  {
    name: "Navy Recruit Abuse Study",
    authors: "B. Bower (reporting, 1997)",
    year: "1997",
    finding: "Navy commissioned a study on childhood sexual abuse of female recruits — accidentally found that 39% of MALE recruits had experienced physical violence (beyond spanking) from parents before age 18. Striking under-reporting of male abuse.",
    pages: "Ch. 2 (pp. 76-77); Ch. 13"
  },
  {
    name: "Bowden Family Dinners Study",
    authors: "Blake Bowden (Cincinnati Children's Hospital)",
    year: "1990s",
    finding: "Teens who ate dinner with parents 5+ nights per week were significantly better adjusted than classmates who dined alone.",
    pages: "Ch. 7 (p. 174); Ch. 12 (p. 356)"
  },
  {
    name: "AMA Groin Injury Statistic",
    authors: "American Medical Association",
    year: "1990s",
    finding: "By junior high school, 1 in 10 boys has been kicked in the groin; 25% of those suffer actual injuries to the groin area; the majority never tell an adult. 25% show signs of depression a year later; 12% manifest post-traumatic syndromes.",
    pages: "Ch. 2 (pp. 76-77); Ch. 13"
  },
  {
    name: "Sears/Koestner Longitudinal Study",
    authors: "Robert Sears (original); Koestner, Franz & Weinberger (follow-up)",
    year: "1957 / follow-up 1990",
    finding: "Age-5 father sharing predicted age-23 compromise ability, age-31 empathy assessment, and age-40s social relationship health / intimacy capacity. One of the longest longitudinal chains in father research.",
    pages: "Ch. 6 (p. 118)"
  },
  {
    name: "Italian Mammismo Data",
    authors: "Italian National Statistics Institute",
    year: "1997",
    finding: "58% of Italian 'boys' aged 18-34 still live with their mothers. Cross-cultural existence proof against the American 'cut the apron strings' orthodoxy.",
    pages: "Ch. 5 (pp. 131-132)"
  },
  {
    name: "Barnett Dual-Earner Health Study",
    authors: "Rosalind C. Barnett & Nancy Marshall (Wellesley)",
    year: "1991-1996",
    finding: "Young adult men with close relationships to their parents had LOWER psychological distress and did not feel their parents were intrusive. In dual-earner couples, fathers' positive relationship with their children was the BEST predictor of men's physical health.",
    pages: "Ch. 5 (p. 131); Ch. 6 (p. 170)"
  }
];

// ---------------------------------------------------------------------------
// CATEGORIES (auto-generated from author fields)
// ---------------------------------------------------------------------------

export const categories: Record<string, number> = authors.reduce<Record<string, number>>(
  (acc, author) => {
    acc[author.field] = (acc[author.field] ?? 0) + 1;
    return acc;
  },
  {}
);

// ---------------------------------------------------------------------------
// BOOK INFO
// ---------------------------------------------------------------------------

export const bookInfo = {
  title: "Real Boys",
  subtitle: "Rescuing Our Sons from the Myths of Boyhood",
  author: "William S. Pollack, Ph.D.",
  publisher: "Random House",
  year: 1998,
  description:
    "Argues that boys suffer a silent crisis caused by an unwritten 'Boy Code' — outdated 19th-century masculinity rules that force premature emotional separation from mothers, shame-hardening of vulnerable feelings, and the wearing of a 'mask of masculinity.' Pollack synthesizes extensive research (his Harvard Medical School 'Listening to Boys' Voices' study plus the Glueck/Snarey 40-year father study, Nolen-Hoeksema depression research, Add Health connectedness data, Hedges & Nowell school gender gap meta-analysis) with clinical case work to argue for the 'potency of connection' as the remedy — staying emotionally attached to boys rather than pushing them toward pseudo-independence."
};
