// pb-references-data.ts
// Structured reference data for "Pink Brain, Blue Brain"
// Source: PinkBrainBlueBrain/analysis/sources-raw.md

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
  // ==== KEY FIGURES: Authors the Book CRITIQUES ====
  {
    name: "Gurian, Michael",
    field: "Education / Psychology",
    works: [
      {
        title: "The Minds of Boys",
        type: "book" as const,
        year: 2005,
        coAuthors: ["Kathy Stevens"],
      },
      {
        title: "Boys and Girls Learn Differently",
        type: "book" as const,
        year: 2001,
      },
    ],
    pages: "pp. 9, 12, 15-16, Ch.8 (pp. 358-359)",
    context:
      "Criticized for stressing the nature side of sex differences; claims about serotonin, oxytocin, corpus callosum differences between boys and girls; advocates single-sex education based on flawed brain science.",
    keyFigure: true,
  },
  {
    name: "Sax, Leonard",
    field: "Medicine / Education",
    works: [
      {
        title: "Why Gender Matters",
        type: "book" as const,
        year: 2005,
      },
    ],
    pages: "pp. 9, 12, 62-63, Ch.8 (pp. 357-359)",
    context:
      "Criticized for trumpeting 'biologically programmed' differences; exaggerated claims about hearing/vision differences; advocates single-sex schools based on flawed sensory data.",
    keyFigure: true,
  },
  {
    name: "Brizendine, Louann",
    field: "Psychiatry",
    works: [
      {
        title: "The Female Brain",
        type: "book" as const,
        year: 2006,
      },
    ],
    pages: "pp. 9, 15-16, 73-74, 76, 88",
    context:
      "Criticized for claiming females are 'hardwired' for verbal agility and empathy; statement that boys lack emotional connection capacity called 'downright subversive'.",
    keyFigure: true,
  },
  {
    name: "Baron-Cohen, Simon",
    field: "Psychology",
    works: [
      {
        title: "Newborn face/mobile preference study; 'extreme male brain' theory of autism; empathizer vs. systematizer questionnaires",
        type: "study" as const,
        year: "2000+",
      },
    ],
    pages: "pp. 73-74, 76, 87, 91-92",
    context:
      "Newborn face/mobile preference study (with Connellan); 'empathizer vs. systematizer' questionnaires; prenatal testosterone and autism theory; critiqued for methodological problems.",
    keyFigure: true,
  },

  // ==== KEY FIGURES: Authors the Book SUPPORTS / Relies On ====
  {
    name: "Hyde, Janet",
    field: "Psychology",
    works: [
      {
        title: "The Gender Similarities Hypothesis",
        type: "article" as const,
        year: 2005,
      },
    ],
    pages: "pp. 14-15",
    context:
      "University of Wisconsin; quantified 124 psychological traits; 77% of sex differences are small (d < 0.35); central to book's thesis that differences are small.",
    keyFigure: true,
  },
  {
    name: "Maccoby, Eleanor & Jacklin, Carol",
    field: "Psychology",
    works: [
      {
        title: "The Psychology of Sex Differences",
        type: "book" as const,
        year: 1974,
      },
    ],
    pages: "pp. 59, 63, 74",
    context:
      "Landmark review of touch, hearing, vision studies in newborns; concluded most sensory differences are insignificant; foundational reference throughout.",
    keyFigure: true,
  },
  {
    name: "Spelke, Elizabeth",
    field: "Psychology",
    works: [
      {
        title: "Various infant cognition studies",
        type: "study" as const,
        year: 2005,
      },
    ],
    pages: "p. 74",
    context:
      "Harvard; decades of infant cognition research; noted Baron-Cohen study contradicts many prior studies.",
    keyFigure: true,
  },

  // ==== INTRODUCTION (Pages 1-21) ====
  {
    name: "Sharp",
    field: "Sociology",
    works: [
      {
        title: "Web survey of expectant parents learning baby's sex",
        type: "study" as const,
        year: 2004,
      },
    ],
    pages: "p. 1",
    context: "68% of expectant parents learn sex before birth.",
  },
  {
    name: "UNICEF",
    field: "Public Health",
    works: [
      {
        title: "Boys more likely to die in accidents",
        type: "report" as const,
        year: 2001,
        publisher: "UNICEF",
      },
    ],
    pages: "p. 3",
    context: "Boys 73% more likely to die in accidents.",
  },
  {
    name: "Wordes & Nunez",
    field: "Criminology",
    works: [
      {
        title: "Boys more often victims of violent crimes",
        type: "study" as const,
        year: 2002,
      },
    ],
    pages: "p. 3",
    context: "Males twice as likely to be victims of violent crimes.",
  },
  {
    name: "Centers for Disease Control (CDC)",
    field: "Public Health",
    works: [
      {
        title: "Girls more likely to attempt suicide",
        type: "report" as const,
        year: 2002,
        publisher: "CDC",
      },
      {
        title: "Boys more likely to commit suicide",
        type: "report" as const,
        year: 1997,
        publisher: "CDC",
      },
      {
        title: "Growth charts for head circumference",
        type: "report" as const,
        year: "n.d.",
        publisher: "CDC",
      },
    ],
    pages: "pp. 3, 57",
    context:
      "Girls twice as likely to attempt suicide; boys three times likelier to succeed at suicide. Also provides head size data for boys/girls.",
  },
  {
    name: "U.S. Dept. of Education",
    field: "Education",
    works: [
      {
        title: "Women as 57% of college students",
        type: "report" as const,
        year: "2007 (2005 data)",
        publisher: "Government",
      },
    ],
    pages: "p. 3",
    context: "Women majority of U.S. college students.",
  },
  {
    name: "College Board",
    field: "Education",
    works: [
      {
        title: "SAT score gaps",
        type: "report" as const,
        year: 2008,
        publisher: "College Board",
      },
      {
        title: "Mean SAT Scores of College-Bound Seniors 1967-2008",
        type: "report" as const,
        year: 2008,
        publisher: "College Board",
      },
    ],
    pages: "pp. 3, 246",
    context:
      "Boys score ~25 points higher on SAT. Data source for SAT gender gap figures.",
  },
  {
    name: "National Science Foundation",
    field: "Education",
    works: [
      {
        title: "College engineering degrees",
        type: "report" as const,
        year: 2006,
        publisher: "NSF",
      },
    ],
    pages: "p. 3",
    context: "Males outnumber females 4:1 in engineering.",
  },
  {
    name: "U.S. Government Accounting Agency",
    field: "Economics",
    works: [
      {
        title: "Wage gap",
        type: "report" as const,
        year: 2003,
        publisher: "Government",
      },
    ],
    pages: "p. 3",
    context: "Women earn less than 80 cents per dollar.",
  },
  {
    name: "Gilmore et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Newborn brain size sex differences",
        type: "study" as const,
        year: 2007,
      },
    ],
    pages: "p. 5 (notes)",
    context: "Boys' brains 8% larger at birth.",
  },
  {
    name: "Lenroot et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Brain volume differences at age 13",
        type: "study" as const,
        year: 2007,
      },
    ],
    pages: "p. 5 (notes)",
    context:
      "11% difference in brain volume; brain size throughout childhood.",
  },
  {
    name: "Clarke et al.; Barry et al.; Matthis et al.; Benninger et al.",
    field: "Neuroscience",
    works: [
      {
        title: "EEG sex differences",
        type: "study" as const,
        year: "1980-2004",
      },
    ],
    pages: "p. 5 (notes)",
    context: "Mixed results on EEG maturity patterns.",
  },
  {
    name: "Bishop & Whalsten",
    field: "Neuroscience",
    works: [
      {
        title: "Review of corpus callosum studies",
        type: "study" as const,
        year: 1997,
      },
    ],
    pages: "p. 12",
    context:
      "50 studies collectively found no significant sex differences in corpus callosum.",
  },
  {
    name: "Science (journal)",
    field: "Neuroscience",
    works: [
      {
        title: "Original corpus callosum sex difference claim",
        type: "article" as const,
        year: 1982,
        publisher: "Science",
      },
    ],
    pages: "p. 11",
    context: "Tiny study (5 female, 9 male brains) widely publicized.",
  },
  {
    name: "Donahue, Phil",
    field: "Popular Media",
    works: [
      {
        title: "The Human Animal",
        type: "book" as const,
        year: 1985,
        publisher: "Simon & Schuster",
      },
    ],
    pages: "p. 12",
    context:
      "Proclaimed corpus callosum basis for 'women's intuition'.",
  },
  {
    name: "Cahill",
    field: "Neuroscience",
    works: [
      {
        title: "Good research on sex differences in the brain",
        type: "article" as const,
        year: 2005,
      },
    ],
    pages: "p. 11 (notes)",
    context: "Replicated adult brain sex differences.",
  },
  {
    name: "Lippa, Richard",
    field: "Psychology",
    works: [
      {
        title: "Adult height sex differences (data and figure)",
        type: "book" as const,
        year: 2002,
      },
      {
        title: "Gifted teenagers and cross-gender abilities",
        type: "study" as const,
        year: 1998,
      },
    ],
    pages: "pp. 13-14, 16",
    context:
      "d value of 2.6 for adult height. Intelligence associated with cross-gender abilities.",
  },
  {
    name: "Lueptow, Lloyd",
    field: "Sociology",
    works: [
      {
        title: "Sex-roles survey of college students",
        type: "study" as const,
        year: 2005,
      },
    ],
    pages: "p. 15",
    context:
      "University of Akron; 25 years of surveys showing perception of gender differences has grown.",
  },
  {
    name: "Dindia, Kathryn",
    field: "Communications",
    works: [
      {
        title: "Men are from North Dakota, women are from South Dakota",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 15",
    context:
      "University of Wisconsin-Milwaukee; originated famous quote.",
  },
  {
    name: "Corbett et al.",
    field: "Education",
    works: [
      {
        title: "Both sexes earning higher grades",
        type: "study" as const,
        year: 2008,
      },
    ],
    pages: "p. 18",
    context: "Both sexes improving academically.",
  },
  {
    name: "Summers, Larry",
    field: "Education",
    works: [
      {
        title: "Harvard president speech on women in science",
        type: "talk" as const,
        year: 2005,
      },
    ],
    pages: "p. 15",
    context:
      "Invoked male variability to explain few women professors.",
  },

  // ==== CHAPTER 1: Pink and Blue in the Womb (Pages 22-61) ====
  {
    name: "Shettles, Landrum",
    field: "Obstetrics",
    works: [
      {
        title: "How to Choose the Sex of Your Baby",
        type: "book" as const,
        year: "2006 (reprint)",
        coAuthors: ["David Rorvik"],
      },
    ],
    pages: "p. 24",
    context: "Sex selection via intercourse timing; debunked.",
  },
  {
    name: "Wilcox et al.",
    field: "Medicine",
    works: [
      {
        title: "Timing of conception has no bearing on sex",
        type: "study" as const,
        year: 1995,
      },
    ],
    pages: "p. 24",
    context: "Debunked Shettles method.",
  },
  {
    name: "Efrat et al.",
    field: "Medicine",
    works: [
      {
        title: "Gender evident by ultrasound at earliest",
        type: "study" as const,
        year: 1999,
      },
    ],
    pages: "p. 20 (notes)",
    context: "Absolute earliest for gender determination.",
  },
  {
    name: "American Society for Reproductive Medicine",
    field: "Medicine",
    works: [
      {
        title: "Policy on IVF/PGD for sex selection",
        type: "report" as const,
        year: 2001,
      },
    ],
    pages: "p. 25",
    context:
      "Discouraged IVF/PGD solely for family balancing.",
  },
  {
    name: "Almond & Edlund",
    field: "Demographics",
    works: [
      {
        title: "Excess second/third-born boys among Asian Americans",
        type: "study" as const,
        year: 2008,
      },
    ],
    pages: "p. 25",
    context:
      "U.S. Census data showing sex-selective abortion.",
  },
  {
    name: "Simpson et al.",
    field: "Genetics",
    works: [
      {
        title: "SRY gene discovery",
        type: "study" as const,
        year: 1987,
      },
    ],
    pages: "p. 25 (notes)",
    context:
      "Discovery of sex-determining region of Y chromosome.",
  },
  {
    name: "Meyer-Bahlburg, Heinz",
    field: "Psychology",
    works: [
      {
        title: "Review of gender identity in reassigned males",
        type: "study" as const,
        year: 2005,
      },
    ],
    pages: "p. 36",
    context:
      "Columbia University; 17 of 77 reverted to male; concluded social factors important.",
  },
  {
    name: "Colapinto, John",
    field: "Journalism",
    works: [
      {
        title: "As Nature Made Him",
        type: "book" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 34-35",
    context:
      "Chronicled David Reimer case; boy raised as girl.",
  },
  {
    name: "Bradley et al.",
    field: "Medicine",
    works: [
      {
        title: "Less famous circumcision/reassignment case",
        type: "study" as const,
        year: 1998,
      },
    ],
    pages: "p. 35",
    context:
      "Opposite outcome -- child reassigned at 2 months grew up female.",
  },
  {
    name: "Cohen-Bendahan, Celina et al.",
    field: "Psychology",
    works: [
      {
        title: "Auditory lateralization in opposite-sex twins",
        type: "study" as const,
        year: 2004,
      },
    ],
    pages: "p. 39",
    context:
      "Netherlands; girls with male twins more lateralized.",
  },
  {
    name: "McFadden, Dennis",
    field: "Psychology",
    works: [
      {
        title: "Otoacoustic emissions in twins and homosexuality",
        type: "study" as const,
        year: "1993, 1998",
      },
    ],
    pages: "pp. 39-40",
    context:
      "University of Texas; OAEs in girls with male twins in male range; lesbian women with male-range OAEs.",
  },
  {
    name: "Henderson, Brenda & Berenbaum, Sheri",
    field: "Psychology",
    works: [
      {
        title: "Effect of brothers on play interests of younger sisters",
        type: "study" as const,
        year: 1997,
      },
    ],
    pages: "pp. 41-42",
    context:
      "Non-twin girls with older brothers play more with boys' toys.",
  },
  {
    name: "Manning, John et al.",
    field: "Psychology",
    works: [
      {
        title: "Finger-length (2D:4D) ratio and prenatal testosterone",
        type: "study" as const,
        year: 1998,
      },
    ],
    pages: "pp. 42-43",
    context:
      "British; sex difference in digit ratios possibly linked to prenatal testosterone.",
  },
  {
    name: "Rose et al.",
    field: "Psychology",
    works: [
      {
        title: "Finnish twin study -- no differences in women with male vs. female twins",
        type: "study" as const,
        year: 2002,
      },
    ],
    pages: "p. 40",
    context:
      "Tracked all female twins born in Finland 1983-87.",
  },
  {
    name: "Trivers & Willard",
    field: "Biology",
    works: [
      {
        title: "Trivers-Willard effect (fit mothers raise more males)",
        type: "other" as const,
        year: 1973,
      },
    ],
    pages: "p. 48",
    context:
      "Evolutionary theory of sex ratio and maternal fitness.",
  },
  {
    name: "Hippocrates",
    field: "Medicine",
    works: [
      {
        title: "Sex prediction based on skin tone",
        type: "other" as const,
        year: "~400 BCE",
      },
    ],
    pages: "p. 49",
    context:
      "Ancient claim about differences in male/female pregnancies.",
  },
  {
    name: "Askling et al.",
    field: "Medicine",
    works: [
      {
        title: "Hyperemesis gravidarum and fetal sex (Swedish study)",
        type: "study" as const,
        year: 1999,
      },
    ],
    pages: "p. 50",
    context:
      "Severe morning sickness more common with girl pregnancies.",
  },
  {
    name: "Vanston, Claire & Watson, Neil",
    field: "Psychology",
    works: [
      {
        title: "Cognitive test scores in pregnant women",
        type: "study" as const,
        year: 2005,
      },
    ],
    pages: "p. 50",
    context:
      "Simon Fraser University; women carrying boys scored higher on spatial/memory tests.",
  },
  {
    name: "Johns Hopkins University researchers",
    field: "Psychology",
    works: [
      {
        title: "Maternal intuition about baby's sex",
        type: "study" as const,
        year: 1999,
      },
    ],
    pages: "p. 51",
    context:
      "Educated women guessed baby's sex correctly 71% of time.",
  },
  {
    name: "Hines et al.",
    field: "Psychology",
    works: [
      {
        title: "AIS individuals are unequivocally female",
        type: "study" as const,
        year: 2003,
      },
    ],
    pages: "p. 27 (notes)",
    context:
      "AIS males raised as females regard themselves as female.",
  },
  {
    name: "Pasterski et al.",
    field: "Psychology",
    works: [
      {
        title: "CAH girls more aggressive and active",
        type: "study" as const,
        year: "2005, 2007",
      },
    ],
    pages: "pp. 36-37",
    context:
      "Effects of prenatal androgens on behavior; parents don't treat CAH girls differently.",
  },
  {
    name: "Berenbaum & Snyder",
    field: "Psychology",
    works: [
      {
        title: "CAH girls' toy preferences",
        type: "study" as const,
        year: 1995,
      },
    ],
    pages: "p. 36",
    context:
      "Preference for traditional boy toys in girls with CAH.",
  },
  {
    name: "Zucker et al.",
    field: "Psychology",
    works: [
      {
        title: "Sexual orientation in CAH women",
        type: "study" as const,
        year: 1996,
      },
    ],
    pages: "p. 37",
    context:
      "Modest shift toward lesbian/bisexual orientation in CAH.",
  },

  // ==== CHAPTER 2: Under the Pink or Blue Blankie (Pages 62-117) ====
  {
    name: "Denver Developmental Screening Test",
    field: "Medicine",
    works: [
      {
        title: "Infant development checklist",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 64",
    context: "No sex differences in motor milestones.",
  },
  {
    name: "Bayley Scales of Infant Development",
    field: "Psychology",
    works: [
      {
        title: "Infant development test",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 64",
    context: "No sex differences in motor achievement.",
  },
  {
    name: "Mondschein et al.",
    field: "Psychology",
    works: [
      {
        title: "Infant crawling slope experiment",
        type: "study" as const,
        year: 2000,
      },
    ],
    pages: "p. 66",
    context:
      "Mothers underestimate daughters' crawling abilities by 9 degrees; no sex difference in actual ability.",
  },
  {
    name: "Fenson, Larry et al.",
    field: "Psychology",
    works: [
      {
        title: "Early language development study",
        type: "study" as const,
        year: 1994,
      },
    ],
    pages: "pp. 69-70",
    context:
      "San Diego State University; documented sex differences in receptive language; girls ~1 month ahead.",
  },
  {
    name: "Berglund et al.",
    field: "Psychology",
    works: [
      {
        title: "Swedish study of infant gestures",
        type: "study" as const,
        year: 2005,
      },
    ],
    pages: "p. 70",
    context:
      "18-month-old girls produce 5% more gestures than boys.",
  },
  {
    name: "Connellan, Jennifer et al.",
    field: "Psychology",
    works: [
      {
        title: "Newborn face vs. mobile preference",
        type: "study" as const,
        year: 2000,
      },
    ],
    pages: "pp. 73-74",
    context:
      "Baron-Cohen's team; boys looked more at mobile, girls at face; critiqued for methodological issues.",
  },
  {
    name: "Cossette et al.",
    field: "Psychology",
    works: [
      {
        title: "Canadian study: both sexes prefer toys to faces",
        type: "study" as const,
        year: 1996,
      },
    ],
    pages: "p. 74",
    context:
      "At 11 weeks, both boys and girls gazed longer at toy than mother's face.",
  },
  {
    name: "Haviland, Jeanette & Malatesta, Carol",
    field: "Psychology",
    works: [
      {
        title: "Parents' emotional interactions with infants",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 76-77",
    context:
      "Rutgers University; mothers work harder to manage boys' emotions; ignore boys' pain expressions.",
  },
  {
    name: "Simner, Marvin",
    field: "Psychology",
    works: [
      {
        title: "Newborn empathetic crying",
        type: "study" as const,
        year: 1971,
      },
    ],
    pages: "p. 78",
    context:
      "Female newborns cried marginally longer in response to another baby's cry.",
  },
  {
    name: "McClure, Erin",
    field: "Psychology",
    works: [
      {
        title: "Review of facial expression recognition in infants",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 78-79",
    context:
      "Emory University; d = 0.26 for infant girls' advantage; smaller in later childhood.",
  },
  {
    name: "Leeb",
    field: "Psychology",
    works: [
      {
        title: "Eye contact study showing no sex difference at birth",
        type: "study" as const,
        year: 2004,
      },
    ],
    pages: "pp. 72, 76",
    context:
      "No newborn sex difference in eye contact; girls increased 4-fold by 4 months.",
  },
  {
    name: "Rovee-Collier, Carolyn",
    field: "Psychology",
    works: [
      {
        title: "Infant learning and memory studies",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 63",
    context:
      "Rutgers University; no sex differences in infant learning or memory in any age group.",
  },
  {
    name: "Bartocci et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Newborn cortical activation by pain (infrared)",
        type: "study" as const,
        year: 2006,
      },
    ],
    pages: "p. 60",
    context:
      "Swedish team; boys showed greater cortical activation during heel-stick pain.",
  },
  {
    name: "Balogh & Porter",
    field: "Psychology",
    works: [
      {
        title: "Newborn olfactory sex difference",
        type: "study" as const,
        year: 1986,
      },
    ],
    pages: "p. 60",
    context:
      "Vanderbilt University; girls preferred familiar odor; boys turned right regardless.",
  },
  {
    name: "American Academy of Pediatrics",
    field: "Medicine",
    works: [
      {
        title: "Circumcision analgesia recommendation",
        type: "report" as const,
        year: 1999,
      },
    ],
    pages: "p. 60",
    context: "Recommends anesthetic for all circumcisions.",
  },
  {
    name: "Hagger, Corinne & Bachevalier, Jocelyne",
    field: "Neuroscience",
    works: [
      {
        title: "Neonatal testosterone and object discrimination in monkeys",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 101-102",
    context:
      "NIMH; neonatal testosterone slows learning in male monkeys.",
  },
  {
    name: "Mann, David et al.",
    field: "Medicine",
    works: [
      {
        title: "Neonatal testosterone effects on puberty in monkeys",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 102",
    context:
      "Morehouse School of Medicine; blocking neonatal testosterone delayed puberty in males.",
  },
  {
    name: "Johnson, Mark",
    field: "Psychology",
    works: [
      {
        title: "Face perception in infants (personal correspondence)",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 74 (notes)",
    context:
      "University of London; no clear sex differences in newborn face preferences.",
  },

  // ==== CHAPTER 3: Learning Through Play in the Preschool Years (Pages 118-170) ====
  {
    name: "Plomin, Robert et al.",
    field: "Psychology",
    works: [
      {
        title: "Twin study of gender-typed play heritability",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 125-126",
    context:
      "King's College London; gender-typical play ~50% heritable.",
  },
  {
    name: "Lytton, Hugh & Romney, David",
    field: "Psychology",
    works: [
      {
        title: "Review of parental treatment of sons/daughters",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 127",
    context:
      "Canadian; parents don't differ in time/warmth but do react differently to toy choices.",
  },
  {
    name: "Alexander, Gerianne & Hines, Melissa",
    field: "Psychology",
    works: [
      {
        title: "Vervet monkey toy preferences",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 123-124",
    context:
      "UCLA; male vervets preferred ball/police car; females preferred doll/cooking pot.",
  },
  {
    name: "Yerkes Primate Research Center / Emory University",
    field: "Biology",
    works: [
      {
        title: "Rhesus monkey toy preferences",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 123-124",
    context:
      "Similar sex-typed toy preferences in rhesus monkeys.",
  },
  {
    name: "Blakemore, Judith",
    field: "Psychology",
    works: [
      {
        title: "Nurturing behavior and parenting style",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 150",
    context:
      "Indiana University-Purdue University Fort Wayne; boys from egalitarian homes nearly equal to girls in baby interest.",
  },
  {
    name: "Bem, Sandra",
    field: "Psychology",
    works: [
      {
        title: "Gender-neutral child-rearing; Jeremy barrettes anecdote",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 135-136",
    context:
      "Classic example of preschoolers enforcing gender stereotypes.",
  },
  {
    name: "Green, Richard",
    field: "Psychiatry",
    works: [
      {
        title: "Gender nonconformity and later sexual orientation",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 131",
    context:
      "UCLA; ~2/3 of boys treated for gender-identity issues leaned homosexual/bisexual.",
  },
  {
    name: "LeVay, Simon",
    field: "Neurobiology",
    works: [
      {
        title: "Queer Science",
        type: "book" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 132",
    context:
      "Describes cruel behavioral modification of gender-nonconforming boy 'Kyle'.",
  },
  {
    name: "Carlsson-Paige, Nancy & Levin, Diane",
    field: "Education",
    works: [
      {
        title: "The War Play Dilemma: Balancing Needs and Values in the Early Childhood Classroom",
        type: "book" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 148-149",
    context:
      "Guidelines for managing war play in preschool classrooms.",
  },
  {
    name: "Iervolino et al.",
    field: "Psychology",
    works: [
      {
        title: "Same-sex twins influence gender-typed behavior",
        type: "study" as const,
        year: 2005,
      },
    ],
    pages: "p. 35 (notes)",
    context:
      "Same-sex twins exert stronger influence than regular siblings.",
  },
  {
    name: "SUNY Binghamton study",
    field: "Psychology",
    works: [
      {
        title: "Peer influence on toy choices",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 139-140",
    context:
      "Classic study: children shift toy preferences when opposite-sex peer present.",
  },

  // ==== CHAPTER 4: Starting School (Pages 171-210) ====
  {
    name: "Rosenthal, Robert & Jacobson, Leonore",
    field: "Psychology",
    works: [
      {
        title: "Pygmalion effect in classrooms",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 183-184",
    context:
      "Harvard; teacher expectations create self-fulfilling prophecies.",
  },
  {
    name: "Kleinfeld, Judith",
    field: "Psychology",
    works: [
      {
        title: "Critique of teacher bias studies",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 185",
    context:
      "University of Alaska; 'research does not show consistent favoritism'.",
  },
  {
    name: "Tools of the Mind curriculum",
    field: "Education",
    works: [
      {
        title: "Dramatic play and self-regulation",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 190",
    context:
      "Uses dramatic play, private speech, partner work to promote inhibitory control in 5-year-olds.",
  },
  {
    name: "Montessori method",
    field: "Education",
    works: [
      {
        title: "Hands-on math learning",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 191",
    context: "Manipulatives for teaching math concepts.",
  },
  {
    name: "National Education Association",
    field: "Education",
    works: [
      {
        title: "Report on boys' achievement",
        type: "report" as const,
        year: 2001,
      },
    ],
    pages: "p. 190 (notes)",
    context: "Published report on boy-girl achievement gaps.",
  },

  // ==== CHAPTER 5: Language and Literacy (Pages 211-242) ====
  {
    name: "NAEP (National Assessment of Educational Progress)",
    field: "Education",
    works: [
      {
        title: "Reading and writing scores",
        type: "report" as const,
        year: "2002, 2007",
      },
    ],
    pages: "pp. 213-215",
    context:
      "Girls outscore boys by ~20 points in writing at all grades tested.",
  },
  {
    name: "Hedges, Larry",
    field: "Psychology",
    works: [
      {
        title: "Analysis of sex differences in cognitive abilities",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 215",
    context:
      "University of Chicago; called writing gap 'alarming'.",
  },
  {
    name: "Shaywitz, Bennett & Sally et al.",
    field: "Neuroscience",
    works: [
      {
        title: "fMRI study of language lateralization",
        type: "study" as const,
        year: 1995,
      },
    ],
    pages: "pp. 217-218",
    context:
      "Yale; women more bilateral in rhyme task; highly publicized but not replicated.",
  },
  {
    name: "Sommer, Iris et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Meta-analysis of 26 brain-imaging language studies",
        type: "study" as const,
        year: 2008,
      },
    ],
    pages: "p. 218",
    context:
      "University of Utrecht; no overall sex difference in language lateralization.",
  },
  {
    name: "Witelson, Sandra et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Neuron density in planum temporale",
        type: "study" as const,
        year: 1995,
      },
    ],
    pages: "p. 219",
    context:
      "McMaster University; women's brains 11% denser neurons in language area; based on only 9 brains.",
  },
  {
    name: "Scheibel, Arnold et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Dendrite length in language areas",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 219-220",
    context:
      "UCLA; women had longer dendrites but were also more educated.",
  },
  {
    name: "Mills, Debra et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Verbal experience predicts hemisphere response",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 221",
    context:
      "Emory University; verbal experience more than age/maturity predicts left-hemisphere response to speech.",
  },
  {
    name: "Hampson, Elizabeth",
    field: "Psychology",
    works: [
      {
        title: "Verbal skills and menstrual cycle",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 222",
    context:
      "Canadian; women 5-10% faster reading aloud at peak estrogen; later not well replicated.",
  },
  {
    name: "Strauss, Valerie",
    field: "Journalism",
    works: [
      {
        title: "Washington Post article on boys' language centers",
        type: "article" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 216",
    context:
      "Claim that boys born with smaller language centers; Eliot challenges this.",
  },
  {
    name: "Liberman, Mark",
    field: "Linguistics",
    works: [
      {
        title: "Debunking Leonard Sax's hearing claims",
        type: "article" as const,
        year: "2006, 2008",
      },
    ],
    pages: "pp. 62-63 (notes)",
    context:
      "University of Pennsylvania; thorough deconstruction of Sax's auditory claims.",
  },
  {
    name: "National Center for Education Statistics",
    field: "Education",
    works: [
      {
        title: "Reading/writing score data",
        type: "report" as const,
        year: "n.d.",
        publisher: "U.S. Department of Education",
      },
    ],
    pages: "p. 213",
    context: "U.S. Department of Education statistics.",
  },
  {
    name: "Friederici et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Left-hemisphere activation in newborn boys",
        type: "study" as const,
        year: 2008,
      },
    ],
    pages: "p. 68 (notes)",
    context:
      "Stronger left-hemisphere activation in boys, opposite of expected.",
  },

  // ==== CHAPTER 6: Math, Science, and Technical Skills (Pages 243-295) ====
  {
    name: "PISA (Program for International Student Assessment)",
    field: "Education",
    works: [
      {
        title: "International math/science test scores",
        type: "report" as const,
        year: 2003,
      },
    ],
    pages: "pp. 244-245",
    context:
      "Boys score higher in most countries; exceptions: Iceland, Thailand.",
  },
  {
    name: "Benbow, Camilla & Stanley, Julian",
    field: "Psychology",
    works: [
      {
        title: "Study of Mathematically Precocious Youth (SMPY)",
        type: "study" as const,
        year: "1980s",
      },
    ],
    pages: "pp. 248-250",
    context:
      "Johns Hopkins; 4:1 male-female ratio at high SAT scores; later criticized.",
  },
  {
    name: "Pinker, Steven",
    field: "Psychology",
    works: [
      {
        title: "'More geniuses, more idiots' quote on greater male variability",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 248",
    context: "On greater male variability.",
  },
  {
    name: "Pinker, Susan",
    field: "Psychology",
    works: [
      {
        title: "Sex difference commentary",
        type: "book" as const,
        year: 2008,
      },
    ],
    pages: "p. 73 (notes)",
    context:
      "Steven Pinker's sister; also cited Baron-Cohen study.",
  },
  {
    name: "Gardner, Howard",
    field: "Psychology",
    works: [
      {
        title: "Multiple intelligences theory",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 252",
    context:
      "Harvard; spatial intelligence as distinct intelligence.",
  },
  {
    name: "Crick, Francis",
    field: "Biology",
    works: [
      {
        title: "Spatial visualization in science",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 252",
    context: "Nobel laureate on visual-spatial reasoning.",
  },
  {
    name: "Franklin, Rosalind",
    field: "Biology",
    works: [
      {
        title: "X-ray crystallography / DNA",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 252",
    context:
      "Should have been recognized as co-discoverer of double helix; Eliot's university namesake.",
  },
  {
    name: "Olson, Steve",
    field: "Journalism",
    works: [
      {
        title: "Book about the Mathematical Olympiad",
        type: "book" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 250",
    context:
      "'Paucity of girls worse in US than other countries'; guitar analogy.",
  },
  {
    name: "Wood, Melanie",
    field: "Mathematics",
    works: [
      {
        title: "First girl on U.S. Mathematical Olympiad team",
        type: "other" as const,
        year: 1998,
      },
    ],
    pages: "p. 249",
    context: "Won silver medal; represented shift.",
  },
  {
    name: "Miller, Alison",
    field: "Mathematics",
    works: [
      {
        title: "First American girl to win gold at International Math Olympiad",
        type: "other" as const,
        year: 2004,
      },
    ],
    pages: "p. 249",
    context: "Further evidence of changing ratios.",
  },
  {
    name: "McDonnell, Fiona",
    field: "Education",
    works: [
      {
        title: "Educational researcher on women in science",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 275 (approx.)",
    context: "Discovered barriers facing women in STEM fields.",
  },
  {
    name: "Lee, Valerie et al.",
    field: "Education",
    works: [
      {
        title: "Science performance analysis",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 280 (approx.)",
    context:
      "University of Michigan; analyzed science across countries.",
  },
  {
    name: "MIND Institute",
    field: "Education",
    works: [
      {
        title: "Math curriculum (nonprofit)",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 285 (approx.)",
    context: "Developed effective math teaching approach.",
  },
  {
    name: "American Association of University Women",
    field: "Education",
    works: [
      {
        title: "Computing gender gap",
        type: "report" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 247",
    context:
      "Documented declining proportion of women in computer science.",
  },

  // ==== CHAPTER 7: Emotions, Empathy, Aggression, and More (Pages 296-356) ====
  {
    name: "Kling, Kristen; Hyde, Janet et al.",
    field: "Psychology",
    works: [
      {
        title: "Sex differences in self-esteem across age",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 302-303",
    context:
      "d = 0.21 overall; peaks at d = 0.33 in high school; masculinity predicts self-esteem.",
  },
  {
    name: "Emory University team",
    field: "Psychology",
    works: [
      {
        title: "Training children to recognize facial expressions",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 309",
    context:
      "6 sessions of training improved 8-9 year-olds' emotion recognition.",
  },
  {
    name: "McClintock, Martha",
    field: "Psychology",
    works: [
      {
        title: "'The magic age of ten' for sexual attraction",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 337",
    context:
      "University of Chicago; adrenarche triggers first romantic feelings.",
  },
  {
    name: "Udry, Richard",
    field: "Sociology",
    works: [
      {
        title: "Testosterone and sexual behavior in adolescents",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 339-340",
    context:
      "University of North Carolina; testosterone linked to sexual behavior but not aggression.",
  },
  {
    name: "Giedd, Jay",
    field: "Neuroscience",
    works: [
      {
        title: "MRI studies of brain development through adolescence",
        type: "study" as const,
        year: "n.d.",
      },
    ],
    pages: "pp. 341-342",
    context:
      "National Institute of Mental Health; no dramatic brain shift at puberty; girls' brains mature 1-2 years earlier.",
  },
  {
    name: "Robinson, Pamela",
    field: "Psychology",
    works: [
      {
        title: "See Jane Win",
        type: "book" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 330 (approx.)",
    context: "Studied successful women; found common factors.",
  },

  // ==== CHAPTER 8: Teaching Boys and Girls / Single-Sex Schools (Pages 357-370) ====
  {
    name: "Salomone, Rosemary",
    field: "Law / Education",
    works: [
      {
        title: "Same, Different, Equal: Rethinking Single-Sex Schooling",
        type: "book" as const,
        year: 2003,
      },
    ],
    pages: "pp. 360-361",
    context:
      "St. John's University; most thorough analysis; benefits 'tentative'.",
  },
  {
    name: "U.S. Department of Education",
    field: "Education",
    works: [
      {
        title: "Systematic review of single-sex vs. coeducation",
        type: "report" as const,
        year: 2005,
      },
    ],
    pages: "pp. 360-361",
    context:
      "Benefits 'equivocal'; 53% found no difference; 75% no long-term difference.",
  },
  {
    name: "Smithers, Alan & Robinson, Pamela",
    field: "Education",
    works: [
      {
        title: "The Paradox of Single-Sex Education",
        type: "report" as const,
        year: "n.d.",
      },
    ],
    pages: "p. 362",
    context:
      "British; 50 years of data; 'little conclusive evidence' of advantage.",
  },
  {
    name: "Newsweek",
    field: "Journalism",
    works: [
      {
        title: "Article on Foust Elementary School",
        type: "article" as const,
        year: 2005,
      },
    ],
    pages: "pp. 358-359",
    context:
      "Description of Gurian-influenced gender-segregated classrooms.",
  },

  // ==== ENDNOTES: Developmental / Prenatal ====
  {
    name: "Abramovich et al.",
    field: "Medicine",
    works: [
      {
        title: "Androgen receptors in human fetuses",
        type: "study" as const,
        year: 1987,
      },
    ],
    pages: "Notes section",
    context: "Androgen receptors in human fetuses.",
  },
  {
    name: "Choate et al.",
    field: "Biology",
    works: [
      {
        title: "Androgen receptors in rhesus monkeys",
        type: "study" as const,
        year: 1998,
      },
    ],
    pages: "Notes section",
    context: "Androgen receptors in rhesus monkeys.",
  },
  {
    name: "Reyes et al.; Nagamani et al.",
    field: "Medicine",
    works: [
      {
        title: "Fetal testosterone levels",
        type: "study" as const,
        year: "1974, 1979",
      },
    ],
    pages: "Notes section",
    context: "Fetal testosterone levels.",
  },
  {
    name: "Bakker et al.",
    field: "Biology",
    works: [
      {
        title: "Alpha-fetoprotein",
        type: "study" as const,
        year: 2006,
      },
    ],
    pages: "Notes section",
    context: "Alpha-fetoprotein research.",
  },
  {
    name: "vom Saal & Bronson; Vandenbergh",
    field: "Biology",
    works: [
      {
        title: "Uterine position effects in rodents",
        type: "study" as const,
        year: "1980, 2003",
      },
    ],
    pages: "Notes section",
    context: "Uterine position effects in rodents.",
  },
  {
    name: "Beatty",
    field: "Biology",
    works: [
      {
        title: "Castration effects on male rats",
        type: "study" as const,
        year: 1992,
      },
    ],
    pages: "Notes section",
    context: "Castration effects on male rats.",
  },
  {
    name: "Meaney & Stewart",
    field: "Biology",
    works: [
      {
        title: "Testosterone-treated female rats",
        type: "study" as const,
        year: 1981,
      },
    ],
    pages: "Notes section",
    context: "Testosterone-treated female rats.",
  },
  {
    name: "Kelly et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Hypothalamic sex differences in rats",
        type: "study" as const,
        year: 1999,
      },
    ],
    pages: "Notes section",
    context: "Hypothalamic sex differences in rats.",
  },
  {
    name: "Vito & Fox",
    field: "Biology",
    works: [
      {
        title: "Testosterone receptors in rats",
        type: "study" as const,
        year: 1981,
      },
    ],
    pages: "Notes section",
    context: "Testosterone receptors in rats.",
  },
  {
    name: "Herman et al.; Wallen",
    field: "Psychology",
    works: [
      {
        title: "Prenatal testosterone and monkey behavior",
        type: "study" as const,
        year: "2003, 2005",
      },
    ],
    pages: "Notes section",
    context: "Prenatal testosterone and monkey behavior.",
  },
  {
    name: "Herman & Wallen",
    field: "Psychology",
    works: [
      {
        title: "Vocalizations and spatial navigation in monkeys",
        type: "study" as const,
        year: 2007,
      },
    ],
    pages: "Notes section",
    context:
      "Vocalizations and spatial navigation in monkeys.",
  },

  // ==== ENDNOTES: Birth and Infancy ====
  {
    name: "Eogan et al.",
    field: "Medicine",
    works: [
      {
        title: "Labor duration sex difference",
        type: "study" as const,
        year: 2003,
      },
    ],
    pages: "Notes section",
    context: "Labor duration sex difference.",
  },
  {
    name: "Boatella-Costa et al.",
    field: "Medicine",
    works: [
      {
        title: "Analgesic use; Brazelton scale",
        type: "study" as const,
        year: 2007,
      },
    ],
    pages: "Notes section",
    context: "Analgesic use and Brazelton scale findings.",
  },
  {
    name: "Bekedam et al.",
    field: "Medicine",
    works: [
      {
        title: "Fetal distress",
        type: "study" as const,
        year: 2002,
      },
    ],
    pages: "Notes section",
    context: "Fetal distress research.",
  },
  {
    name: "Sheiner et al.",
    field: "Medicine",
    works: [
      {
        title: "Apgar scores",
        type: "study" as const,
        year: 2004,
      },
    ],
    pages: "Notes section",
    context: "Apgar scores research.",
  },
  {
    name: "Guinsburg et al.",
    field: "Medicine",
    works: [
      {
        title: "Pain response in 2-day-olds",
        type: "study" as const,
        year: 2000,
      },
    ],
    pages: "Notes section",
    context: "Pain response in 2-day-olds.",
  },
  {
    name: "Richards et al.; Brackbill & Schroder",
    field: "Psychology",
    works: [
      {
        title: "Circumcision effects on behavior",
        type: "study" as const,
        year: "1976, 1980",
      },
    ],
    pages: "Notes section",
    context: "Circumcision effects on behavior.",
  },
  {
    name: "Makin & Porter",
    field: "Psychology",
    works: [
      {
        title: "Breast-milk odor preference",
        type: "study" as const,
        year: 1989,
      },
    ],
    pages: "Notes section",
    context: "Breast-milk odor preference.",
  },
  {
    name: "Ribeiro & Carvallo; Stuart & Yang; Eldredge & Salamy",
    field: "Neuroscience",
    works: [
      {
        title: "Wave V auditory response",
        type: "study" as const,
        year: "2008, 2001, 1996",
      },
    ],
    pages: "Notes section",
    context: "Wave V auditory response research.",
  },
  {
    name: "Sininger et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Auditory sensitivity in newborns",
        type: "study" as const,
        year: 1998,
      },
    ],
    pages: "Notes section",
    context: "Auditory sensitivity in newborns.",
  },
  {
    name: "Berninger",
    field: "Neuroscience",
    works: [
      {
        title: "OAE sex differences and cochlea length",
        type: "study" as const,
        year: 2007,
      },
    ],
    pages: "Notes section",
    context: "OAE sex differences and cochlea length.",
  },
  {
    name: "Gwiazda et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Stereovision onset",
        type: "study" as const,
        year: 1989,
      },
    ],
    pages: "Notes section",
    context: "Stereovision onset.",
  },
  {
    name: "Held et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Testosterone and 3-D vision",
        type: "study" as const,
        year: 1988,
      },
    ],
    pages: "Notes section",
    context: "Testosterone and 3-D vision.",
  },
  {
    name: "Molfese & Molfese",
    field: "Neuroscience",
    works: [
      {
        title: "Newborn brain wave patterns",
        type: "study" as const,
        year: 1979,
      },
    ],
    pages: "Notes section",
    context: "Newborn brain wave patterns.",
  },
  {
    name: "Shucard et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Language lateralization in infants (disputed)",
        type: "study" as const,
        year: 1981,
      },
    ],
    pages: "Notes section",
    context: "Language lateralization in infants (disputed).",
  },
  {
    name: "Hittleman & Dickes",
    field: "Psychology",
    works: [
      {
        title: "Newborn eye contact",
        type: "study" as const,
        year: 1979,
      },
    ],
    pages: "Notes section",
    context: "Newborn eye contact.",
  },
  {
    name: "Moss & Robson",
    field: "Psychology",
    works: [
      {
        title: "Boys pay greater attention to faces",
        type: "study" as const,
        year: 1968,
      },
    ],
    pages: "Notes section",
    context: "Boys pay greater attention to faces.",
  },

  // ==== ENDNOTES: Language and Cognitive Development ====
  {
    name: "Butterworth",
    field: "Psychology",
    works: [
      {
        title: "Pointing onset",
        type: "study" as const,
        year: 1998,
      },
    ],
    pages: "Notes section",
    context: "Pointing onset research.",
  },
  {
    name: "Zhang et al.",
    field: "Psychology",
    works: [
      {
        title: "Chinese children's language development",
        type: "study" as const,
        year: 2008,
      },
    ],
    pages: "Notes section",
    context: "Chinese children's language development.",
  },
  {
    name: "Eliot, Lise",
    field: "Neuroscience",
    works: [
      {
        title: "Language input = language output (author's own previous work)",
        type: "book" as const,
        year: 2000,
      },
    ],
    pages: "Notes section",
    context:
      "Author's own previous work on brain development.",
  },

  // ==== ENDNOTES: Hormones and Environment ====
  {
    name: "Flachaire et al.",
    field: "Biology",
    works: [
      {
        title: "No serotonin difference between boys and girls",
        type: "study" as const,
        year: 1990,
      },
    ],
    pages: "Notes section",
    context:
      "No serotonin difference between boys and girls.",
  },
  {
    name: "Fries et al.",
    field: "Biology",
    works: [
      {
        title: "No oxytocin difference between boys and girls",
        type: "study" as const,
        year: 2005,
      },
    ],
    pages: "Notes section",
    context: "No oxytocin difference between boys and girls.",
  },
  {
    name: "Speakman",
    field: "Biology",
    works: [
      {
        title: "Heritability of body mass",
        type: "study" as const,
        year: 2004,
      },
    ],
    pages: "Notes section",
    context: "Heritability of body mass.",
  },
  {
    name: "Ross et al.",
    field: "Genetics",
    works: [
      {
        title: "Genetic similarity of males and females",
        type: "study" as const,
        year: 2006,
      },
    ],
    pages: "Notes section",
    context: "Genetic similarity of males and females.",
  },

  // ==== ENDNOTES: Education and Achievement ====
  {
    name: "Halpern, Diane",
    field: "Psychology",
    works: [
      {
        title: "Sex Differences in Cognitive Abilities",
        type: "book" as const,
        year: 2000,
      },
    ],
    pages: "Notes section",
    context: "File-drawer effect; verbal development.",
  },

  // ==== ENDNOTES: Brain and Neuroscience ====
  {
    name: "Allen et al.; LeVay; Byne et al.",
    field: "Neuroscience",
    works: [
      {
        title: "Hypothalamic sex differences",
        type: "study" as const,
        year: "1989, 1991, 2001",
      },
    ],
    pages: "Notes section",
    context: "Hypothalamic sex differences.",
  },
  {
    name: "Swaab et al.; Garcia-Falgueras & Swaab",
    field: "Neuroscience",
    works: [
      {
        title: "INAH nuclei",
        type: "study" as const,
        year: "2002, 2008",
      },
    ],
    pages: "Notes section",
    context: "INAH nuclei research.",
  },
  {
    name: "Vasey & Pfaus",
    field: "Neuroscience",
    works: [
      {
        title: "Macaque hypothalamus",
        type: "study" as const,
        year: 2005,
      },
    ],
    pages: "Notes section",
    context: "Macaque hypothalamus research.",
  },
  {
    name: "Arnold",
    field: "Neuroscience",
    works: [
      {
        title: "SRY effects on rat and bird brains",
        type: "study" as const,
        year: 2003,
      },
    ],
    pages: "Notes section",
    context: "SRY effects on rat and bird brains.",
  },

  // ==== ADDITIONAL BOOKS CITED ====
  {
    name: "Hrdy, Sarah",
    field: "Biology",
    works: [
      {
        title: "Work on Trivers-Willard in humans",
        type: "book" as const,
        year: 1999,
      },
    ],
    pages: "Notes section",
    context: "Trivers-Willard effect in humans.",
  },
  {
    name: "LeVay, Simon & Valente, Sharon",
    field: "Neuroscience",
    works: [
      {
        title: "Work on Turner's syndrome",
        type: "book" as const,
        year: 2002,
      },
    ],
    pages: "Notes section",
    context: "Turner's syndrome research.",
  },
  {
    name: "Geary, David",
    field: "Psychology",
    works: [
      {
        title: "Work on boys' vulnerability",
        type: "book" as const,
        year: 1998,
      },
    ],
    pages: "Notes section",
    context: "Boys' vulnerability research.",
  },
  {
    name: "Hines, Melissa",
    field: "Psychology",
    works: [
      {
        title: "Work on real human infants and CAH",
        type: "book" as const,
        year: 2004,
      },
    ],
    pages: "Notes section",
    context: "Research on human infants and CAH.",
  },

  // ==== FILMS, MEDIA, AND CULTURAL REFERENCES ====
  {
    name: "Rain Man (1988 film)",
    field: "Popular Media",
    works: [
      {
        title: "Rain Man",
        type: "film" as const,
        year: 1988,
      },
    ],
    pages: "Cultural reference",
    context:
      "Dustin Hoffman's character as example of restricted interests in autism.",
  },
  {
    name: "Mean Girls (2004 film)",
    field: "Popular Media",
    works: [
      {
        title: "Mean Girls",
        type: "film" as const,
        year: 2004,
      },
    ],
    pages: "Cultural reference",
    context:
      "Lindsay Lohan math competition scene; stereotypes about girls and math.",
  },
  {
    name: "Meet the Parents (film)",
    field: "Popular Media",
    works: [
      {
        title: "Meet the Parents",
        type: "film" as const,
        year: "n.d.",
      },
    ],
    pages: "Cultural reference",
    context:
      "Ben Stiller as male nurse; stigma of men in female occupations.",
  },
  {
    name: "Harry Potter series",
    field: "Popular Media",
    works: [
      {
        title: "Harry Potter (Ron Weasley love potion scene)",
        type: "film" as const,
        year: "n.d.",
      },
    ],
    pages: "Cultural reference",
    context: "Puberty and attraction themes.",
  },
  {
    name: "Borat (film)",
    field: "Popular Media",
    works: [
      {
        title: "Borat",
        type: "film" as const,
        year: "n.d.",
      },
    ],
    pages: "Cultural reference",
    context:
      "Sacha Baron-Cohen (cousin of Simon Baron-Cohen).",
  },
  {
    name: "Reviving Ophelia",
    field: "Psychology / Popular Media",
    works: [
      {
        title: "Reviving Ophelia",
        type: "book" as const,
        year: "1990s",
      },
    ],
    pages: "Cultural reference",
    context:
      "1990s girl crisis about crashing self-esteem.",
  },
  {
    name: "Martha Stewart (The Apprentice)",
    field: "Popular Media",
    works: [
      {
        title: "The Apprentice",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "Cultural reference",
    context: "'Women in business don't cry.'",
  },
  {
    name: "Rowling, J.K.",
    field: "Popular Media",
    works: [
      {
        title: "Example of exceptional female writer",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "Cultural reference",
    context: "Example of exceptional female writer.",
  },
  {
    name: "Rolling Stone",
    field: "Popular Media",
    works: [
      {
        title: "List of top 100 rock guitarists (only 2 women)",
        type: "other" as const,
        year: "n.d.",
        publisher: "Rolling Stone magazine",
      },
    ],
    pages: "Cultural reference",
    context: "List of top 100 rock guitarists (only 2 women).",
  },
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "University of Wisconsin",
    type: "University",
    context: "Janet Hyde's research base.",
    pages: "pp. 14-15",
  },
  {
    name: "University of Cambridge",
    type: "University",
    context: "Baron-Cohen's lab; monkey testosterone studies.",
    pages: "pp. 73-74, 87, 91-92",
  },
  {
    name: "Columbia University",
    type: "University",
    context: "Heinz Meyer-Bahlburg's gender identity research.",
    pages: "p. 36",
  },
  {
    name: "Johns Hopkins University",
    type: "University",
    context: "Benbow & Stanley's SMPY; maternal intuition study.",
    pages: "pp. 51, 248-250",
  },
  {
    name: "University of Texas",
    type: "University",
    context: "Dennis McFadden's OAE research.",
    pages: "pp. 39-40",
  },
  {
    name: "Rutgers University",
    type: "University",
    context: "Carolyn Rovee-Collier's infant learning; Haviland & Malatesta.",
    pages: "pp. 63, 76-77",
  },
  {
    name: "San Diego State University",
    type: "University",
    context: "Fenson et al. early language development.",
    pages: "pp. 69-70",
  },
  {
    name: "Yale University",
    type: "University",
    context: "Shaywitz team's language lateralization study.",
    pages: "pp. 217-218",
  },
  {
    name: "University of Utrecht",
    type: "University",
    context: "Iris Sommer's meta-analysis of language lateralization.",
    pages: "p. 218",
  },
  {
    name: "McMaster University",
    type: "University",
    context: "Sandra Witelson's neuron density research.",
    pages: "p. 219",
  },
  {
    name: "UCLA",
    type: "University",
    context:
      "Alexander & Hines vervet study; Scheibel dendrite study; Richard Green.",
    pages: "pp. 123-124, 131, 219-220",
  },
  {
    name: "Emory University",
    type: "University",
    context:
      "Erin McClure face expression review; Yerkes Primate Center; Debra Mills verbal experience; empathy training.",
    pages: "pp. 78-79, 123-124, 221, 309",
  },
  {
    name: "Harvard University",
    type: "University",
    context:
      "Elizabeth Spelke infant cognition; Howard Gardner; Robert Rosenthal; Larry Summers.",
    pages: "pp. 15, 74, 183-184, 252",
  },
  {
    name: "Simon Fraser University",
    type: "University",
    context: "Vanston & Watson pregnancy cognition study.",
    pages: "p. 50",
  },
  {
    name: "King's College London",
    type: "University",
    context: "Robert Plomin twin study.",
    pages: "pp. 125-126",
  },
  {
    name: "University of Akron",
    type: "University",
    context: "Lloyd Lueptow's 25-year sex-roles survey.",
    pages: "p. 15",
  },
  {
    name: "University of Alaska",
    type: "University",
    context: "Judith Kleinfeld's critique of teacher bias studies.",
    pages: "p. 185",
  },
  {
    name: "Indiana University-Purdue University Fort Wayne",
    type: "University",
    context: "Judith Blakemore's nurturing behavior research.",
    pages: "p. 150",
  },
  {
    name: "Vanderbilt University",
    type: "University",
    context: "Newborn olfactory study (Balogh & Porter).",
    pages: "p. 60",
  },
  {
    name: "National Institute of Mental Health (NIMH)",
    type: "Government Research",
    context:
      "Hagger & Bachevalier monkey cognition; Jay Giedd brain development.",
    pages: "pp. 101-102, 341-342",
  },
  {
    name: "Morehouse School of Medicine",
    type: "University",
    context: "David Mann neonatal testosterone research.",
    pages: "p. 102",
  },
  {
    name: "SUNY Binghamton",
    type: "University",
    context: "Classic peer influence on toy choice study.",
    pages: "pp. 139-140",
  },
  {
    name: "Yerkes Primate Research Center",
    type: "Research Center",
    context: "Rhesus monkey toy preference study.",
    pages: "pp. 123-124",
  },
  {
    name: "University of Oregon",
    type: "University",
    context:
      "Gender awareness in toddlers from traditional vs. non-traditional homes.",
    pages: "Notes section",
  },
  {
    name: "University of Chicago",
    type: "University",
    context:
      "Larry Hedges cognitive analysis; Martha McClintock 'age of ten'.",
    pages: "pp. 215, 337",
  },
  {
    name: "University of Pennsylvania",
    type: "University",
    context:
      "Mark Liberman phonetics/linguistics; debunked Sax's hearing claims.",
    pages: "pp. 62-63 (notes)",
  },
  {
    name: "St. John's University",
    type: "University",
    context: "Rosemary Salomone single-sex education analysis.",
    pages: "pp. 360-361",
  },
  {
    name: "Penn State University",
    type: "University",
    context: "Adolescent hormone/psychology studies.",
    pages: "Notes section",
  },
  {
    name: "University of North Carolina",
    type: "University",
    context: "Richard Udry testosterone/behavior research.",
    pages: "pp. 339-340",
  },
  {
    name: "University of Western Ontario",
    type: "University",
    context: "Spatial skills research.",
    pages: "Notes section",
  },
  {
    name: "Stanford University",
    type: "University",
    context: "Niederle competition research.",
    pages: "Notes section",
  },
  {
    name: "University of Pittsburgh",
    type: "University",
    context: "Lise Vesterlund competition research.",
    pages: "Notes section",
  },
  {
    name: "American Academy of Pediatrics",
    type: "Professional Organization",
    context: "Circumcision and breastfeeding recommendations.",
    pages: "p. 60",
  },
  {
    name: "National Toxicology Program",
    type: "Government Agency",
    context: "Bisphenol A concerns.",
    pages: "Notes section",
  },
  {
    name: "Centers for Disease Control (CDC)",
    type: "Government Agency",
    context: "Growth charts; suicide/accident data.",
    pages: "pp. 3, 57",
  },
  {
    name: "College Board",
    type: "Organization",
    context: "SAT data.",
    pages: "pp. 3, 246",
  },
  {
    name: "British Dietetic Association",
    type: "Professional Organization",
    context: "Advised against soy formula for infants under 6 months.",
    pages: "Notes section",
  },
  {
    name: "European Union",
    type: "Government",
    context: "Banned phthalates in infant products (2005).",
    pages: "Notes section",
  },
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Hyde Gender Similarities Hypothesis",
    authors: "Janet Hyde",
    year: "2005",
    finding:
      "Quantified 124 psychological traits; 77% of sex differences are small (d < 0.35). Central to the book's thesis that sex differences are small and overlapping.",
    pages: "pp. 14-15",
  },
  {
    name: "Maccoby & Jacklin Review of Sex Differences",
    authors: "Eleanor Maccoby, Carol Jacklin",
    year: "1974",
    finding:
      "Landmark review of touch, hearing, vision studies in newborns; concluded most sensory differences are insignificant.",
    pages: "pp. 59, 63, 74",
  },
  {
    name: "Bishop & Whalsten Corpus Callosum Meta-Analysis",
    authors: "Bishop, Whalsten",
    year: "1997",
    finding:
      "50 studies collectively found no significant sex differences in corpus callosum, overturning the widely publicized 1982 Science claim.",
    pages: "p. 12",
  },
  {
    name: "Connellan Face vs. Mobile Newborn Study",
    authors: "Jennifer Connellan et al. (Baron-Cohen's team)",
    year: "2000",
    finding:
      "Boys looked more at mobile, girls at face; critiqued extensively for methodological issues including experimenter not being blind to infant sex.",
    pages: "pp. 73-74",
  },
  {
    name: "Mondschein Infant Crawling Slope Experiment",
    authors: "Mondschein et al.",
    year: "2000",
    finding:
      "Mothers underestimate daughters' crawling abilities by 9 degrees; no actual sex difference in crawling ability. Demonstrates parental expectation effects.",
    pages: "p. 66",
  },
  {
    name: "Fenson Early Language Development Study",
    authors: "Larry Fenson et al.",
    year: "1994",
    finding:
      "San Diego State University; documented sex differences in receptive language; girls ~1 month ahead.",
    pages: "pp. 69-70",
  },
  {
    name: "Shaywitz fMRI Language Lateralization Study",
    authors: "Bennett & Sally Shaywitz et al.",
    year: "1995",
    finding:
      "Yale; women more bilateral during rhyme task; highly publicized but not replicated in subsequent studies.",
    pages: "pp. 217-218",
  },
  {
    name: "Sommer Language Lateralization Meta-Analysis",
    authors: "Iris Sommer et al.",
    year: "2008",
    finding:
      "University of Utrecht; meta-analysis of 26 brain-imaging studies found no overall sex difference in language lateralization.",
    pages: "p. 218",
  },
  {
    name: "Benbow & Stanley Study of Mathematically Precocious Youth (SMPY)",
    authors: "Camilla Benbow, Julian Stanley",
    year: "1980s",
    finding:
      "Johns Hopkins; 4:1 male-female ratio at very high SAT-M scores; later criticized and ratio has been narrowing over decades.",
    pages: "pp. 248-250",
  },
  {
    name: "PISA International Math/Science Assessment",
    authors: "Program for International Student Assessment",
    year: "2003",
    finding:
      "Boys score higher in most countries, but exceptions exist (Iceland, Thailand), suggesting cultural factors.",
    pages: "pp. 244-245",
  },
  {
    name: "NAEP Reading and Writing Assessment",
    authors: "National Assessment of Educational Progress",
    year: "2002, 2007",
    finding:
      "Girls outscore boys by ~20 points in writing at all grades tested.",
    pages: "pp. 213-215",
  },
  {
    name: "Kling & Hyde Self-Esteem Meta-Analysis",
    authors: "Kristen Kling, Janet Hyde et al.",
    year: "n.d.",
    finding:
      "d = 0.21 overall for sex difference in self-esteem; peaks at d = 0.33 in high school; masculinity predicts self-esteem more than biological sex.",
    pages: "pp. 302-303",
  },
  {
    name: "Rosenthal & Jacobson Pygmalion Effect Study",
    authors: "Robert Rosenthal, Leonore Jacobson",
    year: "n.d.",
    finding:
      "Harvard; demonstrated that teacher expectations create self-fulfilling prophecies in student performance.",
    pages: "pp. 183-184",
  },
  {
    name: "Witelson Neuron Density Study",
    authors: "Sandra Witelson et al.",
    year: "1995",
    finding:
      "McMaster University; women's brains 11% denser in neurons in planum temporale (language area); based on only 9 brains.",
    pages: "p. 219",
  },
  {
    name: "Alexander & Hines Vervet Monkey Toy Study",
    authors: "Gerianne Alexander, Melissa Hines",
    year: "n.d.",
    finding:
      "UCLA; male vervets preferred ball/police car; females preferred doll/cooking pot; suggests evolutionary component to toy preferences.",
    pages: "pp. 123-124",
  },
  {
    name: "U.S. Department of Education Single-Sex Review",
    authors: "U.S. Department of Education",
    year: "2005",
    finding:
      "Systematic review: benefits 'equivocal'; 53% of studies found no difference; 75% found no long-term difference.",
    pages: "pp. 360-361",
  },
  {
    name: "California Single-Sex School Pilot Program",
    authors: "California state education",
    year: "Late 1990s",
    finding:
      "6 districts tried single-sex public schools; 4 closed after 2 years; failure that reinforced stereotypes.",
    pages: "pp. 363-364",
  },
  {
    name: "Pasterski CAH Studies",
    authors: "Pasterski et al.",
    year: "2005, 2007",
    finding:
      "Effects of prenatal androgens on behavior; CAH girls more aggressive and active; parents don't treat CAH girls differently from unaffected sisters.",
    pages: "pp. 36-37",
  },
  {
    name: "McFadden Otoacoustic Emissions Studies",
    authors: "Dennis McFadden",
    year: "1993, 1998",
    finding:
      "University of Texas; OAEs in girls with male twins fall in male range; lesbian women also show male-range OAEs; suggests prenatal androgen effects.",
    pages: "pp. 39-40",
  },
  {
    name: "Rose Finnish Twin Study",
    authors: "Rose et al.",
    year: "2002",
    finding:
      "Tracked all female twins born in Finland 1983-87; found no behavioral differences in women with male vs. female twins, challenging twin testosterone transfer claims.",
    pages: "p. 40",
  },
  {
    name: "Meyer-Bahlburg Gender Identity Review",
    authors: "Heinz Meyer-Bahlburg",
    year: "2005",
    finding:
      "Columbia University; reviewed 77 cases of males reassigned as females; 17 reverted to male identity; concluded social factors remain important.",
    pages: "p. 36",
  },
  {
    name: "Leeb Eye Contact Development Study",
    authors: "Leeb",
    year: "2004",
    finding:
      "No newborn sex difference in eye contact; girls increased 4-fold by 4 months, suggesting social learning rather than innate difference.",
    pages: "pp. 72, 76",
  },
  {
    name: "Liberman Hearing Claims Analysis",
    authors: "Mark Liberman",
    year: "2006, 2008",
    finding:
      "University of Pennsylvania linguist; thorough deconstruction of Sax's auditory claims showing misrepresentation of underlying data.",
    pages: "pp. 62-63 (notes)",
  },
  {
    name: "Plomin Twin Study of Gender-Typed Play",
    authors: "Robert Plomin et al.",
    year: "n.d.",
    finding:
      "King's College London; gender-typical play roughly 50% heritable, meaning environment accounts for the other half.",
    pages: "pp. 125-126",
  },
  {
    name: "Emory Facial Expression Training Study",
    authors: "Emory University team",
    year: "n.d.",
    finding:
      "6 sessions of training improved 8-9 year-olds' emotion recognition, showing empathy skills are trainable rather than fixed.",
    pages: "p. 309",
  },
  {
    name: "Giedd MRI Brain Development Studies",
    authors: "Jay Giedd",
    year: "n.d.",
    finding:
      "National Institute of Mental Health; no dramatic brain shift at puberty; girls' brains mature 1-2 years earlier than boys'.",
    pages: "pp. 341-342",
  },
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
  title: "Pink Brain, Blue Brain",
  subtitle:
    "How Small Differences Grow into Troublesome Gaps and What We Can Do About It",
  author: "Lise Eliot, Ph.D.",
  publisher: "Houghton Mifflin Harcourt",
  year: 2009,
  description:
    "Examines the science of sex differences in children's brains, arguing that most cognitive and behavioral differences between boys and girls are small at birth but amplified by parental expectations, educational practices, and cultural reinforcement. Critiques popular claims about hardwired gender differences and recommends interventions based on brain plasticity.",
};
