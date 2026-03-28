// wgm-references-data.ts
// Structured reference data for "Why Gender Matters, Second Edition"
// Source: WhyGenderMatters/analysis/sources-raw.md

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
  // ---- Chapter 1: Differences ----
  {
    name: "Fausto-Sterling, Anne",
    field: "Biology / Gender Studies",
    works: [
      {
        title: "Sexing the Body: Gender Politics and the Construction of Sexuality",
        type: "book" as const,
        year: 2000,
        publisher: "Basic Books, New York",
      },
    ],
    pages: "Pages 6, 309",
    context: "Professor at Brown University; claims the division of the human race into two sexes is an artificial cultural invention. Central foil to Sax's thesis; cited repeatedly across the book.",
    keyFigure: true,
  },
  {
    name: "Dreifus, Claudia",
    field: "Journalism",
    works: [
      {
        title: "Anne Fausto-Sterling: Exploring What Makes Us Male or Female",
        type: "article" as const,
        year: 2001,
        publisher: "New York Times (January 2, 2001, p. F3)",
      },
    ],
    pages: "Ch. 1 notes",
    context: "Review/interview of Fausto-Sterling's work; cited alongside Washington Post and NEJM reviews.",
  },
  {
    name: "Weaver, Courtney",
    field: "Journalism",
    works: [
      {
        title: "Birds Do It",
        type: "article" as const,
        year: 2000,
        publisher: "Washington Post (March 26, 2000, p. X6)",
      },
    ],
    pages: "Ch. 1 notes",
    context: "Review of Fausto-Sterling's book.",
  },
  {
    name: "Breedlove, Marc",
    field: "Medicine",
    works: [
      {
        title: "Sexing the Body (review)",
        type: "article" as const,
        year: 2000,
        publisher: "New England Journal of Medicine, vol. 343, p. 668",
      },
    ],
    pages: "Ch. 1 notes",
    context: "Review praising Fausto-Sterling's 'careful and insightful' approach.",
  },
  {
    name: "Crawford, Susan Hoy",
    field: "Education / Parenting",
    works: [
      {
        title: "Beyond Dolls and Guns: 101 Ways to Help Children Avoid Gender Bias",
        type: "book" as const,
        year: 1995,
        publisher: "Heinemann, Portsmouth, NH",
      },
    ],
    pages: "Ch. 1 notes",
    context: "Example of books counseling gender-neutral child rearing; recommends buying dolls for sons.",
  },
  {
    name: "Zolotow, Charlotte",
    field: "Children's Literature",
    works: [
      {
        title: "William's Doll",
        type: "book" as const,
        year: 1972,
        publisher: "Harper & Row, New York",
      },
    ],
    pages: "Ch. 1 notes",
    context: "Cited alongside Crawford as promoting gender-neutral toy giving.",
  },
  {
    name: "Tannen, Deborah",
    field: "Linguistics",
    works: [
      {
        title: "You Just Don't Understand: Women and Men in Conversation (revised edition)",
        type: "book" as const,
        year: 2001,
        publisher: "HarperCollins, New York",
      },
    ],
    pages: "Pages 8, 319-320",
    context: "Finding that second-grade girls were 'more like the twenty-five-year-old women than like the second-grade boys' in language use -- supports argument that gender may be more fundamental to learning than age.",
    keyFigure: true,
  },
  {
    name: "Money, John",
    field: "Psychology / Sexology",
    works: [
      {
        title: "Work at Johns Hopkins on the 'boy raised as a girl' case",
        type: "other" as const,
        year: "~1970s-1980s",
      },
    ],
    pages: "Page 4",
    context: "Cited as example of what Sax was taught in graduate school -- that gender differences are socially constructed. Money's case of a boy raised as a girl was later discredited.",
    keyFigure: true,
  },
  {
    name: "Aronfreed, Justin",
    field: "Developmental Psychology",
    works: [
      {
        title: "Graduate seminar lectures, University of Pennsylvania",
        type: "other" as const,
        year: "~1980",
      },
    ],
    pages: "Ch. 1 (inline)",
    context: "Sax's professor who taught that gender differences are culturally constructed.",
  },
  {
    name: "Gleitman, Henry",
    field: "Psychology",
    works: [
      {
        title: "Graduate seminar lectures, University of Pennsylvania",
        type: "other" as const,
        year: "~1980s",
      },
    ],
    pages: "Ch. 1 (inline)",
    context: "Told students that 'most of the differences we observe between girls and boys are socially constructed.'",
  },

  // ---- Chapter 2: Smelling, Seeing, and Hearing ----
  {
    name: "Diamond, Jeanmarie",
    field: "Neuroscience / Sensory Science",
    works: [
      {
        title: "Gender-Specific Olfactory Sensitization: Hormonal and Cognitive Influences",
        type: "article" as const,
        year: 2005,
        publisher: "Chemical Senses, vol. 30 (supplement 1), pp. i224-i225",
        coAuthors: ["Pamela Dalton", "Nadine Doolittle", "Paul Breslin"],
      },
    ],
    pages: "Ch. 2 notes",
    context: "Evidence for sex differences in smell sensitivity; women's ability to detect odor improved 100,000-fold with repeated exposure; men showed no improvement.",
  },
  {
    name: "Dalton, Pamela",
    field: "Neuroscience / Sensory Science",
    works: [
      {
        title: "Gender-Specific Induction of Enhanced Sensitivity to Odors",
        type: "article" as const,
        year: 2002,
        publisher: "Nature Neuroscience, vol. 5, pp. 199-200",
        coAuthors: ["Nadine Doolittle", "Paul Breslin"],
      },
    ],
    pages: "Ch. 2 notes",
    context: "Core study on sex differences in olfactory sensitization. Reviewed the manuscript for the book.",
    keyFigure: true,
  },
  {
    name: "Boulkroune, Nassima",
    field: "Neuroscience",
    works: [
      {
        title: "Repetitive Olfactory Exposure to the Biologically Significant Steroid Androstadienone Causes a Hedonic Shift and Gender Dimorphic Changes in Olfactory-Evoked Potentials",
        type: "article" as const,
        year: 2007,
        publisher: "Neuropsychopharmacology, vol. 32, pp. 1822-1829",
      },
    ],
    pages: "Ch. 2 notes",
    context: "Additional evidence for sex differences in smell.",
  },
  {
    name: "Allen, Nicola",
    field: "Neuroscience",
    works: [
      {
        title: "Glia: More Than Just Brain Glue",
        type: "article" as const,
        year: 2009,
        publisher: "Nature, vol. 457, pp. 675-677",
        coAuthors: ["Ben Barres"],
      },
    ],
    pages: "Ch. 2 notes",
    context: "Importance of glial cells in brain function.",
  },
  {
    name: "Khakh, Baljit",
    field: "Neuroscience",
    works: [
      {
        title: "Diversity of Astrocyte Functions and Phenotypes in Neural Circuits",
        type: "article" as const,
        year: 2015,
        publisher: "Nature Neuroscience, vol. 18, pp. 942-952",
        coAuthors: ["Michael Sofroniew"],
      },
    ],
    pages: "Ch. 2 notes",
    context: "Additional evidence on glial cell importance.",
  },
  {
    name: "Oliveira-Pinto, Ana",
    field: "Neuroscience / Anatomy",
    works: [
      {
        title: "Sexual Dimorphism in the Human Olfactory Bulb: Females Have More Neurons and Glial Cells Than Males",
        type: "article" as const,
        year: 2014,
        publisher: "PLOS One",
      },
    ],
    pages: "Ch. 2 notes",
    context: "Women have 16.2 million cells in olfactory bulb vs. 9.2 million in men; 6.9 million neurons in women vs. 3.5 million in males.",
  },
  {
    name: "de Mello, Anthony",
    field: "Literature / Spirituality",
    works: [
      {
        title: "The Song of the Bird",
        type: "book" as const,
        year: 1982,
        publisher: "Doubleday, New York",
      },
    ],
    pages: "Ch. 2 notes",
    context: "Source of the Nasrudin fable about the falcon -- 'You cannot turn a falcon into a robin.'",
  },
  {
    name: "Alter-Muri, Simone",
    field: "Psychology / Art Education",
    works: [
      {
        title: "Gender Typicality in Children's Art Development: A Cross-Cultural Study",
        type: "article" as const,
        year: 2014,
        publisher: "Arts in Psychotherapy, vol. 41, pp. 155-162",
        coAuthors: ["Stephanie Vazzano"],
      },
    ],
    pages: "Ch. 2 notes",
    context: "Cross-cultural evidence that girls draw flowers/pets with colors; boys draw action scenes.",
  },
  {
    name: "Holm, Bill",
    field: "Literature",
    works: [
      {
        title: "Wedding Poem for Schele and Phil (from Playing the Black Piano: Poems)",
        type: "other" as const,
        year: 2004,
        publisher: "Milkweed Editions, Minneapolis",
      },
    ],
    pages: "Ch. 2 epigraph",
    context: "Epigraph for chapter 2; poem about men and women not hearing 'the music of the world in the same key.'",
  },

  // ---- Chapter 3: Risk ----
  {
    name: "Nietzsche, Friedrich",
    field: "Philosophy",
    works: [
      {
        title: "Die Froehliche Wissenschaft (The Gay Science), section 283",
        type: "book" as const,
        year: 1887,
      },
      {
        title: "Jenseits von Gut und Boese (Beyond Good and Evil), section 116",
        type: "book" as const,
        year: 1886,
      },
    ],
    pages: "Ch. 3 epigraph; p. 45",
    context: "Epigraph: 'The secret to getting the most fun out of life is: to live dangerously.' Also cited on hardship building character.",
  },
  {
    name: "Sorrentino, Richard",
    field: "Psychology",
    works: [
      {
        title: "Risk-Taking in Games of Chance and Skill: Informational and Affective Influences on Choice Behavior",
        type: "article" as const,
        year: 1992,
        publisher: "Journal of Personality and Social Psychology, vol. 62, pp. 522-533",
        coAuthors: ["Erin Hewitt", "Patricia Raso-Knott"],
      },
    ],
    pages: "Pages 26-27, 311",
    context: "Ring-toss experiment showing men stand further from target and show 'risky shift' when other men watch.",
  },
  {
    name: "Miller, David",
    field: "Psychology",
    works: [
      {
        title: "The Role of Contextual and Personal Factors in Children's Risk Taking",
        type: "article" as const,
        year: 1997,
        publisher: "Developmental Psychology, vol. 33, pp. 814-823",
        coAuthors: ["James Byrnes"],
      },
    ],
    pages: "Ch. 3 notes",
    context: "Girls less likely to enjoy physical risk taking; demonstrated with 3rd, 5th, and 7th graders.",
  },
  {
    name: "Byrnes, James",
    field: "Psychology",
    works: [
      {
        title: "Gender Differences in Risk Taking: A Meta-analysis",
        type: "article" as const,
        year: 1999,
        publisher: "Psychological Bulletin, vol. 125, pp. 367-383",
        coAuthors: ["David Miller", "William Schafer"],
      },
    ],
    pages: "Ch. 3 notes",
    context: "Largest meta-analysis of sex differences in risk taking; foundational source for the chapter.",
  },
  {
    name: "Kerr, J.H.",
    field: "Psychology",
    works: [
      {
        title: "Gender Differences in the Experience of Risk",
        type: "article" as const,
        year: 1997,
        publisher: "Personality and Individual Differences, vol. 22, pp. 293-295",
        coAuthors: ["J. Viaminkx"],
      },
    ],
    pages: "Ch. 3 notes",
    context: "Girls experienced risk as less fun and more stressful than boys.",
  },
  {
    name: "Poppen, Paul",
    field: "Psychology",
    works: [
      {
        title: "Gender and Patterns of Sexual Risk Taking in College Students",
        type: "article" as const,
        year: 1995,
        publisher: "Sex Roles, vol. 32, pp. 545-555",
      },
    ],
    pages: "Ch. 3 notes",
    context: "Sex differences in sexual risk-taking behavior.",
  },
  {
    name: "Murphy, Debra",
    field: "Public Health",
    works: [
      {
        title: "Adolescent Gender Differences in HIV-Related Sexual Risk Acts, Social-Cognitive Factors and Behavioral Skills",
        type: "article" as const,
        year: 1998,
        publisher: "Journal of Adolescence, vol. 21, pp. 197-208",
      },
    ],
    pages: "Ch. 3 notes",
    context: "Gender differences in sexual risk behaviors among adolescents.",
  },
  {
    name: "Morrongiello, Barbara",
    field: "Psychology",
    works: [
      {
        title: "Toddlers' and Mothers' Behaviors in an Injury-Risk Situation: Implications for Sex Differences in Childhood Injuries",
        type: "article" as const,
        year: 1998,
        publisher: "Journal of Applied Developmental Psychology, vol. 19, pp. 625-639",
        coAuthors: ["Tess Dawber"],
      },
      {
        title: "Children's Perspectives on Injury and Close-Call Experiences: Sex Differences in Injury-Outcome Processes",
        type: "article" as const,
        year: 1997,
        publisher: "Journal of Pediatric Psychology, vol. 22, pp. 499-512",
      },
      {
        title: "Gender Biases in Children's Appraisals of Injury Risk and Other Children's Risk-Taking Behaviors",
        type: "article" as const,
        year: 2000,
        publisher: "Journal of Experimental Child Psychology, vol. 77, pp. 317-336",
      },
    ],
    pages: "Ch. 3 notes",
    context: "Boys more likely to engage in physically risky activities from toddlerhood; less likely to comply with parental warnings. Boys attribute injuries to 'bad luck.' Cited repeatedly on risk.",
    keyFigure: true,
  },
  {
    name: "Pickett, William",
    field: "Pediatric Medicine",
    works: [
      {
        title: "Multiple Risk Behavior and Injury: An International Analysis of Young People",
        type: "article" as const,
        year: 2002,
        publisher: "Archives of Pediatrics and Adolescent Medicine, vol. 156, pp. 786-793",
      },
    ],
    pages: "Ch. 3 notes",
    context: "International data on boys being more likely to be seriously injured in accidents.",
  },
  {
    name: "Waller, Anna",
    field: "Public Health",
    works: [
      {
        title: "Childhood Injury Deaths: National Analysis and Geographic Variations",
        type: "article" as const,
        year: 1989,
        publisher: "American Journal of Public Health, vol. 79, pp. 310-315",
      },
    ],
    pages: "Ch. 3 notes",
    context: "Boys more likely to die from drowning, firearms misuse, bicycle head injuries.",
  },
  {
    name: "Sorenson, Susan",
    field: "Public Health",
    works: [
      {
        title: "Gender Disparities in Injury Mortality: Consistent, Persistent, and Larger Than You'd Think",
        type: "article" as const,
        year: 2011,
        publisher: "American Journal of Public Health, vol. 101, pp. S353-S358",
      },
    ],
    pages: "Ch. 3 notes",
    context: "Persistent gender disparities in injury mortality.",
  },
  {
    name: "Peterson, Lizette",
    field: "Developmental Psychology",
    works: [
      {
        title: "Gender and Developmental Patterns of Affect, Belief, and Behavior in Simulated Injury Events",
        type: "article" as const,
        year: 1997,
        publisher: "Journal of Applied Developmental Psychology, vol. 18, pp. 531-546",
      },
    ],
    pages: "Ch. 3 notes",
    context: "Simulated bike-riding study; boys slower to brake; boys reported feeling exhilarated by collision; girls felt fearful.",
  },
  {
    name: "Howland, Jonathan",
    field: "Public Health",
    works: [
      {
        title: "Why Are Most Drowning Victims Men? Sex Differences in Aquatic Skills and Behaviors",
        type: "article" as const,
        year: 1996,
        publisher: "American Journal of Public Health, vol. 86, pp. 93-96",
      },
    ],
    pages: "Pages 29-30",
    context: "Boys 9.8x more likely to drown (ages 15-19); men 'probably overestimate their swimming ability.'",
  },
  {
    name: "Fedigan, Linda Marie",
    field: "Primatology / Physical Anthropology",
    works: [
      {
        title: "Sex Differences in Mortality of Japanese Macaques: Twenty-one Years of Data from the Arashiyama West Population",
        type: "article" as const,
        year: 1997,
        publisher: "American Journal of Physical Anthropology, vol. 102, pp. 161-175",
        coAuthors: ["Sandra Zohar"],
      },
    ],
    pages: "Ch. 3 notes",
    context: "Male monkeys lost to population because of risk-taking behaviors (e.g., crossing highways); supports innate basis for male risk-taking.",
  },
  {
    name: "Heffernan, Margaret",
    field: "Business / Gender Studies",
    works: [
      {
        title: "Why Do Only 26 Fortune 500 Companies Have Female CEOs?",
        type: "article" as const,
        year: 2014,
        publisher: "Fortune",
      },
    ],
    pages: "Ch. 3 notes",
    context: "Only 26 of Fortune 500 companies led by women CEOs.",
  },
  {
    name: "Samuelson, Robert J.",
    field: "Economics",
    works: [
      {
        title: "What's the Real Gender Pay Gap?",
        type: "article" as const,
        year: 2016,
        publisher: "Washington Post",
      },
    ],
    pages: "Ch. 3 notes",
    context: "Gender pay gap persists even controlling for occupation, education, hours.",
  },
  {
    name: "Hegewisch, Ariane",
    field: "Economics / Gender Studies",
    works: [
      {
        title: "The Gender Wage Gap by Occupation 2015 and by Race and Ethnicity",
        type: "report" as const,
        year: 2016,
        publisher: "Institute for Women's Policy Research",
        coAuthors: ["Asha DuMonthier"],
      },
    ],
    pages: "Ch. 3 notes",
    context: "Women earn ~92 cents for every dollar earned by men in same job.",
  },
  {
    name: "Babcock, Linda",
    field: "Economics / Psychology",
    works: [
      {
        title: "Women Don't Ask: Negotiation and the Gender Divide",
        type: "book" as const,
        year: 2003,
        publisher: "Princeton University Press",
        coAuthors: ["Sara Laschever"],
      },
    ],
    pages: "Pages 33, 312",
    context: "Carnegie Mellon study: only 7% of women asked for more money vs. 57% of men; gender gap in starting salary explained by not asking.",
  },
  {
    name: "Olafsdottir, Margret Pala",
    field: "Education",
    works: [
      {
        title: "Kids Are Both Girls and Boys in Iceland",
        type: "article" as const,
        year: 1996,
        publisher: "Women's Studies International Forum, vol. 19, pp. 357-369",
      },
    ],
    pages: "Pages 34-36",
    context: "'Dare training' for girls in Iceland -- encouraging girls to take physical risks, make noise, jump from tables.",
  },

  // ---- Chapter 4: Aggression ----
  {
    name: "Patton, George S. (General)",
    field: "Military History",
    works: [
      {
        title: "Speech to American soldiers, June 5, 1944",
        type: "other" as const,
        year: 1944,
      },
    ],
    pages: "Ch. 4 epigraph",
    context: "Epigraph: 'Real men like to fight.'",
  },
  {
    name: "Simmons, Rachel",
    field: "Psychology / Education",
    works: [
      {
        title: "Odd Girl Out: The Hidden Culture of Aggression in Girls",
        type: "book" as const,
        year: 2002,
        publisher: "Harcourt (2002); Mariner (2011, revised)",
      },
    ],
    pages: "Pages 43, 56-58, 60, 313, 318",
    context: "'The surface of a girl fight can be as silent and smooth as a marble'; 'alternative aggression' concept; girl bullying differs from boy bullying. Sax dined with Simmons and discusses her work at length.",
    keyFigure: true,
  },
  {
    name: "Lever, Janet",
    field: "Sociology",
    works: [
      {
        title: "Sex Differences in the Games Children Play",
        type: "article" as const,
        year: 1976,
        publisher: "Social Problems, vol. 23, pp. 478-487",
      },
      {
        title: "Sex Differences in the Complexity of Children's Games",
        type: "article" as const,
        year: 1978,
        publisher: "American Sociological Review, vol. 43, pp. 471-83",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Boys fight ~20x as often as girls but end up better friends after; girls' fights end friendships.",
  },
  {
    name: "Blum, Deborah",
    field: "Neuroscience / Popular Science",
    works: [
      {
        title: "Sex on the Brain: The Biological Differences Between Men and Women",
        type: "book" as const,
        year: 1998,
        publisher: "Penguin, New York",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Source for Frans de Waal quote about male chimps fighting as 'a way to relate to one another.'",
  },
  {
    name: "de Waal, Frans",
    field: "Primatology",
    works: [
      {
        title: "(quoted in Blum, Sex on the Brain)",
        type: "other" as const,
        year: 1998,
      },
    ],
    pages: "Ch. 4 notes",
    context: "Male chimps fight then groom each other; female chimps are 'vindictive and irreconcilable' after fights. Primatologist at Yerkes National Primate Research Center.",
    keyFigure: true,
  },
  {
    name: "Collins-Stanley, Tracy",
    field: "Psychology",
    works: [
      {
        title: "Choice of Romantic, Violent, and Scary Fairy-Tale Books by Preschool Girls and Boys",
        type: "article" as const,
        year: 1996,
        publisher: "Child Study Journal, vol. 26, pp. 279-302",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Boys as young as 2 choose violent fairy tales; girls choose warm/fuzzy stories.",
  },
  {
    name: "von Klitzing, Kai",
    field: "Child Psychiatry",
    works: [
      {
        title: "Gender-Specific Characteristics of 5-Year-Olds' Play Narratives and Associations with Behavior Ratings",
        type: "article" as const,
        year: 2000,
        publisher: "Journal of the American Academy of Child and Adolescent Psychiatry, vol. 39, pp. 1017-1023",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Girls who make up violent stories are more likely to have behavior problems; for boys, violent story preference is normal.",
  },
  {
    name: "Perry, David",
    field: "Psychology",
    works: [
      {
        title: "Sex Differences in the Consequences That Children Anticipate for Aggression",
        type: "article" as const,
        year: 1989,
        publisher: "Developmental Psychology, vol. 25, pp. 312-319",
        coAuthors: ["Louise Perry", "Robert Weiss"],
      },
    ],
    pages: "Ch. 4 notes",
    context: "Boys confident physical aggression will succeed; girls anticipate guilt and emotional upset.",
  },
  {
    name: "Berenbaum, Sheri",
    field: "Psychology / Endocrinology",
    works: [
      {
        title: "Early Hormonal Influences on Childhood Sex-Typed Activity and Playmate Preferences",
        type: "article" as const,
        year: 1995,
        publisher: "Developmental Psychology, vol. 31, pp. 31-42",
        coAuthors: ["Elizabeth Snyder"],
      },
      {
        title: "Early Androgens Are Related to Childhood Sex-Typed Toy Preferences",
        type: "article" as const,
        year: 1992,
        publisher: "Psychological Science, vol. 3, pp. 203-206",
        coAuthors: ["Melissa Hines"],
      },
    ],
    pages: "Ch. 4 notes",
    context: "Congenital adrenal hyperplasia (CAH) studies showing girls exposed to prenatal androgens display masculinized toy preferences.",
    keyFigure: true,
  },
  {
    name: "Hines, Melissa",
    field: "Psychology / Neuroscience",
    works: [
      {
        title: "Sex-Related Variation in Human Behavior and the Brain",
        type: "article" as const,
        year: 2010,
        publisher: "Trends in Cognitive Science, vol. 10, pp. 448-456",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Review of sex-related behavioral and brain variation. CAH studies with Berenbaum on prenatal androgen effects.",
    keyFigure: true,
  },
  {
    name: "Servin, Anna",
    field: "Developmental Psychology / Endocrinology",
    works: [
      {
        title: "Prenatal Androgens and Gender-Typed Behavior: A Study of Girls with Mild and Severe Forms of Congenital Adrenal Hyperplasia",
        type: "article" as const,
        year: 2003,
        publisher: "Developmental Psychology, vol. 39, pp. 440-450",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Severity of CAH proportional to masculinity of toy preference.",
  },
  {
    name: "Van Noordwik, Maria",
    field: "Primatology",
    works: [
      {
        title: "Spatial Position and Behavioral Sex Differences in Juvenile Long-Tailed Macaques",
        type: "article" as const,
        year: 2002,
        publisher: "In Pereira & Fairbanks (eds.), Juvenile Primates, Oxford University Press",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Male monkeys 6x more likely to engage in rough-and-tumble play.",
  },
  {
    name: "Crockett, Carolyn",
    field: "Primatology",
    works: [
      {
        title: "Consequences of Sex Differences in Dispersal for Juvenile Red Howler Monkeys",
        type: "article" as const,
        year: 2002,
        publisher: "In Pereira & Fairbanks (eds.), Juvenile Primates, Oxford University Press",
        coAuthors: ["Theresa Pope"],
      },
    ],
    pages: "Ch. 4 notes",
    context: "Female monkeys engage in alloparenting (babysitting).",
  },
  {
    name: "Bolwig, Niels",
    field: "Primatology",
    works: [
      {
        title: "A Study of the Behaviour of the Chacma Baboon",
        type: "article" as const,
        year: 1959,
        publisher: "Behaviour, vol. 14, pp. 136-162",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Sex differences in baboon behavior.",
  },
  {
    name: "Lovejoy, Jennifer",
    field: "Primatology",
    works: [
      {
        title: "Sexually Dimorphic Behavior in Group-Housed Rhesus Monkeys at 1 Year of Age",
        type: "article" as const,
        year: 1988,
        publisher: "Psychobiology, vol. 16, pp. 348-356",
        coAuthors: ["Kim Wallen"],
      },
    ],
    pages: "Ch. 4 notes",
    context: "Sex differences in rhesus monkey behavior.",
  },
  {
    name: "Kahlenberg, Sonya",
    field: "Primatology",
    works: [
      {
        title: "Sex Differences in Chimpanzees' Use of Sticks as Play Objects Resemble Those of Children",
        type: "article" as const,
        year: 2010,
        publisher: "Current Biology, vol. 20, pp. R1067-R1068",
        coAuthors: ["Richard Wrangham"],
      },
    ],
    pages: "Ch. 4 notes",
    context: "Female chimps cradle sticks like babies; males use sticks as weapons.",
  },
  {
    name: "Lonsdorf, Elizabeth",
    field: "Primatology",
    works: [
      {
        title: "Boys Will Be Boys: Sex Differences in Wild Infant Chimpanzee Social Interactions",
        type: "article" as const,
        year: 2014,
        publisher: "Animal Behavior, vol. 88, pp. 79-83",
      },
      {
        title: "Sex Differences in Learning in Chimpanzees",
        type: "article" as const,
        year: 2004,
        publisher: "Nature, vol. 428, pp. 715-716",
        coAuthors: ["Lynn Eberly", "Anne Pusey"],
      },
    ],
    pages: "Ch. 4, Ch. 5 notes",
    context: "Sex differences in wild chimpanzee social interactions and how chimps learn; parallels to human education.",
  },
  {
    name: "Maestripieri, Dario",
    field: "Psychology / Evolutionary Biology",
    works: [
      {
        title: "Sex Differences in Interest in Infants Across the Lifespan: A Biological Adaptation for Parenting?",
        type: "article" as const,
        year: 2002,
        publisher: "Human Nature, vol. 13, pp. 327-344",
        coAuthors: ["Suzanne Pelka"],
      },
    ],
    pages: "Ch. 4 notes",
    context: "Girls much more interested in babies; difference diminishes with age; 'biological adaptation for parenting.'",
  },
  {
    name: "Cardenas, Rodrigo",
    field: "Psychology",
    works: [
      {
        title: "Sex Differences in Visual Attention Toward Infant Faces",
        type: "article" as const,
        year: 2013,
        publisher: "Evolution and Human Behavior, vol. 34, pp. 280-287",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Sex differences in visual attention to infants.",
  },
  {
    name: "Lytton, Hugh",
    field: "Psychology",
    works: [
      {
        title: "Parents' Differential Socialization of Boys and Girls: A Meta-analysis",
        type: "article" as const,
        year: 1991,
        publisher: "Psychological Bulletin, vol. 109, pp. 267-296",
        coAuthors: ["David Romney"],
      },
    ],
    pages: "Ch. 4 notes",
    context: "172 studies, 28,000 children: NO evidence that parents' child rearing affects gender-typical behavior.",
  },
  {
    name: "Meaney, Michael",
    field: "Primatology",
    works: [
      {
        title: "Infant Carrying by Nulliparous Female Vervet Monkeys",
        type: "article" as const,
        year: 1990,
        publisher: "Journal of Comparative Psychology, vol. 104, pp. 377-381",
        coAuthors: ["Elizabeth Lozos", "Jane Stewart"],
      },
    ],
    pages: "Ch. 4 notes",
    context: "Young female monkey babysitting experience improves parenting skills.",
  },
  {
    name: "Goodall, Jane",
    field: "Primatology",
    works: [
      {
        title: "Patterns of Predation by Chimpanzees on Red Colobus Monkeys in Gombe National Park, 1982-1991",
        type: "article" as const,
        year: 1994,
        publisher: "American Journal of Physical Anthropology, vol. 94, pp. 213-228",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Adolescent male chimps commonly kill monkeys; females never do. One male killed 76 monkeys. Only 2 females killed more than 2.",
    keyFigure: true,
  },
  {
    name: "Higley, J. Dee",
    field: "Primatology / Psychology",
    works: [
      {
        title: "Aggression (in Maestripieri (ed.), Primate Psychology)",
        type: "article" as const,
        year: 2003,
        publisher: "Harvard University Press, Cambridge, MA",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Males deprived of play-fighting grow up MORE violent; Sax's neighbor in Montgomery County.",
  },
  {
    name: "Fisher, Marc",
    field: "Journalism / Education",
    works: [
      {
        title: "Skittish Schools Need to Take a Recess",
        type: "article" as const,
        year: 2003,
        publisher: "Washington Post (November 23, 2003, p. C1)",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Schools banning body contact at recess.",
  },
  {
    name: "Gehring, John",
    field: "Education",
    works: [
      {
        title: "Snowball's Chance",
        type: "article" as const,
        year: 2004,
        publisher: "Education Week (January 21, 2004, p. 9)",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Schools banning snowball throwing.",
  },
  {
    name: "Bellow, Adam",
    field: "History / Sociology",
    works: [
      {
        title: "In Praise of Nepotism: A Natural History",
        type: "book" as const,
        year: 2003,
        publisher: "Doubleday, New York",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Story of young Abraham Lincoln fighting gang leader, then becoming their leader.",
  },
  {
    name: "Beveridge, Albert",
    field: "History",
    works: [
      {
        title: "Abraham Lincoln, 1809-1859",
        type: "book" as const,
        year: 1928,
        publisher: "Houghton-Mifflin, Boston",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Lincoln militia history; Black Hawk War.",
  },
  {
    name: "Bishop, John",
    field: "Education / Sociology",
    works: [
      {
        title: "Nerds and Freaks: A Theory of Student Culture and Norms",
        type: "article" as const,
        year: 2003,
        publisher: "In Diane Ravitch (ed.), Brookings Papers on Education Policy, Brookings Institution Press",
      },
    ],
    pages: "Ch. 4, Ch. 5 notes",
    context: "'When an unpopular kid is harassed by someone from a popular crowd, wanna-bes and posers may take the incident as a signal...' Also on what's 'cool' for boys vs. girls.",
    keyFigure: true,
  },
  {
    name: "Sutton, Jon",
    field: "Psychology",
    works: [
      {
        title: "Bullying and 'Theory of Mind': A Critique of the Social Skills Deficit View of Anti-Social Behaviour",
        type: "article" as const,
        year: 1999,
        publisher: "Social Development, vol. 8, pp. 117-127",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Girl bullies need good social cognition; boy bullies are often socially inept.",
  },
  {
    name: "Volk, Anthony",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Is adolescent bullying an evolutionary adaptation?",
        type: "article" as const,
        year: 2012,
        publisher: "Aggressive Behavior, vol. 38, pp. 222-238",
      },
    ],
    pages: "Ch. 4 notes",
    context: "Different perspective on sex differences in bullying.",
  },

  // ---- Chapter 5: School ----
  {
    name: "Valeski, Tricia",
    field: "Education / Psychology",
    works: [
      {
        title: "Young Children's Feelings About School",
        type: "article" as const,
        year: 2001,
        publisher: "Child Development, vol. 72, pp. 1198-1213",
        coAuthors: ["Deborah Stipek"],
      },
    ],
    pages: "Ch. 5 notes",
    context: "Boys less likely to like school; the longer boys are in school, the less they like it.",
  },
  {
    name: "Stipek, Deborah",
    field: "Education",
    works: [
      {
        title: "Good Beginnings: What Difference Does the Program Make in Preparing Young Children for School?",
        type: "article" as const,
        year: 1998,
        publisher: "Journal of Applied Developmental Psychology, vol. 19, pp. 41-66",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Benefits of developmentally appropriate kindergarten. Cited repeatedly on children's school engagement.",
    keyFigure: true,
  },
  {
    name: "Pomerantz, Eva",
    field: "Educational Psychology",
    works: [
      {
        title: "Making the Grade but Feeling Distressed: Gender Differences in Academic Performance and Internal Distress",
        type: "article" as const,
        year: 2002,
        publisher: "Journal of Educational Psychology, vol. 94(2), pp. 396-404",
        coAuthors: ["Ellen Altermatt", "Jill Saxon"],
      },
    ],
    pages: "Ch. 5 notes",
    context: "Gender differences in academic performance and internal distress.",
  },
  {
    name: "McFarland, Laura",
    field: "Education",
    works: [
      {
        title: "Student-Teacher Relationships and Student Self-Concept: Relations with Teacher and Student Gender",
        type: "article" as const,
        year: 2016,
        publisher: "Australian Journal of Education, vol. 60, pp. 5-25",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Teacher-student gender matching effects.",
  },
  {
    name: "Halpern, Diane",
    field: "Psychology",
    works: [
      {
        title: "The Smarter Sex: A Critical Review of Sex Differences in Intelligence",
        type: "article" as const,
        year: 2000,
        publisher: "Educational Psychology Review, vol. 12, pp. 229-246",
        coAuthors: ["Mary LeMay"],
      },
    ],
    pages: "Ch. 5 notes",
    context: "Critical review showing sex differences in intelligence are not straightforward.",
  },
  {
    name: "Duckworth, Angela",
    field: "Psychology",
    works: [
      {
        title: "Self-Discipline Gives Girls the Edge: Gender in Self-Discipline, Grades, and Achievement Test Scores",
        type: "article" as const,
        year: 2006,
        publisher: "Journal of Educational Psychology, vol. 98, pp. 198-208",
        coAuthors: ["Martin Seligman"],
      },
    ],
    pages: "Ch. 5 notes",
    context: "Girls outperform boys in grades due to greater self-discipline, not intelligence.",
  },
  {
    name: "Fisher, Helen",
    field: "Neuroscience / Psychology",
    works: [
      {
        title: "Why We Love: The Nature and Chemistry of Romantic Love",
        type: "book" as const,
        year: 2004,
        publisher: "Henry Holt, New York",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Girls' friendships are 'face to face' while boys' are 'shoulder to shoulder.'",
  },
  {
    name: "Dindia, Kathryn",
    field: "Psychology",
    works: [
      {
        title: "Sex Differences in Self-Disclosure: A Meta-analysis",
        type: "article" as const,
        year: 1992,
        publisher: "Psychological Bulletin, vol. 112, pp. 106-124",
        coAuthors: ["Mike Allen"],
      },
    ],
    pages: "Ch. 5 notes",
    context: "205 studies on sex differences in self-disclosure.",
  },
  {
    name: "Belle, Deborah",
    field: "Psychology",
    works: [
      {
        title: "Children's Social Networks and Well-Being",
        type: "article" as const,
        year: 2014,
        publisher: "In Handbook of Child Well-being, Springer, New York",
        coAuthors: ["Joyce Benenson"],
      },
    ],
    pages: "Ch. 5 notes",
    context: "Children's social network differences by gender.",
  },
  {
    name: "Taylor, Shelley",
    field: "Psychology",
    works: [
      {
        title: "Biobehavioral Responses to Stress in Females: Tend-and-Befriend, Not Fight-or-Flight",
        type: "article" as const,
        year: 2000,
        publisher: "Psychological Review, vol. 107, pp. 411-429",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Female stress response is 'tend-and-befriend' rather than 'fight-or-flight.'",
  },
  {
    name: "Joel, Daphna",
    field: "Neuroscience",
    works: [
      {
        title: "Sex Beyond the Genitalia: The Human Brain Mosaic",
        type: "article" as const,
        year: 2015,
        publisher: "Proceedings of the National Academy of Sciences, vol. 112, pp. 15468-15473",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Controversial claim that brains are a 'mosaic' and not distinctly male or female.",
  },
  {
    name: "Chekroud, Adam",
    field: "Neuroscience",
    works: [
      {
        title: "Patterns in the Human Brain Mosaic Discriminate Males from Females",
        type: "article" as const,
        year: 2016,
        publisher: "Proceedings of the National Academy of Sciences, vol. 113, p. E1968",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Response to Joel; showed patterns CAN discriminate male from female brains.",
  },
  {
    name: "Glezerman, Marek",
    field: "Neuroscience / Medicine",
    works: [
      {
        title: "Yes, There Is a Female and a Male Brain: Morphology Versus Functionality",
        type: "article" as const,
        year: 2016,
        publisher: "Proceedings of the National Academy of Sciences, vol. 113, p. E1971",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Argues for real functional differences between male and female brains.",
  },
  {
    name: "Elder, Todd",
    field: "Health Economics",
    works: [
      {
        title: "The Importance of Relative Standards in ADHD Diagnoses: Evidence Based on Exact Birth Dates",
        type: "article" as const,
        year: 2010,
        publisher: "Journal of Health Economics, vol. 29, pp. 641-656",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Youngest children in class more likely to be diagnosed with ADHD.",
  },
  {
    name: "Lenroot, Rhoshel",
    field: "Neuroscience",
    works: [
      {
        title: "Sexual Dimorphism of Brain Developmental Trajectories During Childhood and Adolescence",
        type: "article" as const,
        year: 2007,
        publisher: "Neuroimage, vol. 36, pp. 1065-1073",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Brain development trajectories differ by sex; Figure 2(a) used in book.",
  },
  {
    name: "Boyatzis, Chris",
    field: "Psychology",
    works: [
      {
        title: "Preschool Children's Decoding of Facial Emotions",
        type: "article" as const,
        year: 1993,
        publisher: "Journal of Genetic Psychology, vol. 154, pp. 375-382",
        coAuthors: ["Elizabeth Chazan", "Carol Ting"],
      },
    ],
    pages: "Ch. 5 notes",
    context: "Sex differences in preschoolers' ability to decode facial emotions.",
  },
  {
    name: "Sax, Leonard",
    field: "Medicine / Psychology",
    works: [
      {
        title: "Reclaiming Kindergarten: Making Kindergarten Less Harmful to Boys",
        type: "article" as const,
        year: 2001,
        publisher: "Psychology of Men and Masculinity, vol. 2, pp. 3-12",
      },
      {
        title: "How Common is Intersex? A Response to Anne Fausto-Sterling",
        type: "article" as const,
        year: 2002,
        publisher: "Journal of Sex Research, vol. 39, pp. 174-178",
      },
      {
        title: "Boys Adrift: The Growing Epidemic of Unmotivated Boys and Underachieving Young Men (2nd ed.)",
        type: "book" as const,
        year: 2015,
        publisher: "Basic Books",
      },
      {
        title: "Girls on the Edge",
        type: "book" as const,
        year: 2010,
        publisher: "Basic Books",
      },
      {
        title: "The Collapse of Parenting: How We Hurt Our Kids When We Treat Them Like Grown-Ups",
        type: "book" as const,
        year: 2015,
        publisher: "Basic Books",
      },
    ],
    pages: "Chs. 3, 4, 5, 7, 8, 11, 12",
    context: "The author's own papers and books, cited across multiple chapters.",
    keyFigure: true,
  },
  {
    name: "Burts, D.",
    field: "Education",
    works: [
      {
        title: "Observed Activities and Stress Behaviors of Children in Developmentally Appropriate and Inappropriate Kindergarten Classrooms",
        type: "article" as const,
        year: 1992,
        publisher: "Early Childhood Research Quarterly, vol. 7, pp. 297-318",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Stress behaviors in different kindergarten environments.",
  },
  {
    name: "Volkow, Nora",
    field: "Neuroscience / Psychiatry",
    works: [
      {
        title: "Imaging the Effects of Methylphenidate on Brain Dopamine",
        type: "article" as const,
        year: 2005,
        publisher: "Biological Psychiatry, vol. 57, pp. 1410-1415",
      },
    ],
    pages: "Ch. 5 notes",
    context: "How ADHD medications work on dopamine system.",
  },
  {
    name: "Franco Emch, Monica",
    field: "Neuroscience",
    works: [
      {
        title: "Ventro-Striatal/Nucleus Accumbens Alterations in Adult ADHD",
        type: "dissertation" as const,
        year: 2015,
        publisher: "Universitat Pompeu Fabra",
      },
    ],
    pages: "Ch. 5 notes",
    context: "ADHD medication effects on brain structure; nucleus accumbens.",
  },
  {
    name: "Fortin, Nicole",
    field: "Education / Economics",
    works: [
      {
        title: "Leaving Boys Behind: Gender Disparities in High Academic Achievement",
        type: "article" as const,
        year: 2015,
        publisher: "The Journal of Human Resources, vol. 50, pp. 549-579",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Gender disparities in academic achievement favoring girls.",
  },
  {
    name: "Summers, Lawrence",
    field: "Economics / Gender Studies",
    works: [
      {
        title: "Remarks at NBER conference",
        type: "talk" as const,
        year: 2005,
        publisher: "Harvard University",
      },
    ],
    pages: "Pages 323-324",
    context: "Harvard president's controversial remarks about women in STEM; led to faculty no-confidence vote.",
  },
  {
    name: "Tolley, Kim",
    field: "Education / History",
    works: [
      {
        title: "The Science Education of American Girls: A Historical Perspective",
        type: "book" as const,
        year: 2003,
        publisher: "RoutledgeFalmer, New York",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Historical perspective; 'Science for the Ladies, Classics for Gentlemen.'",
  },
  {
    name: "Zohar, Anat",
    field: "Education",
    works: [
      {
        title: "Her Physics, His Physics: Gender Issues in Israeli Advanced Placement Physics Classes",
        type: "article" as const,
        year: 2003,
        publisher: "International Journal of Science Education, vol. 25, pp. 245-268",
        coAuthors: ["David Sela"],
      },
    ],
    pages: "Ch. 5 notes",
    context: "Gender issues in physics education.",
  },
  {
    name: "Kelleher, Caitlin",
    field: "Education / Computer Science",
    works: [
      {
        title: "Barriers to Programming Engagement",
        type: "article" as const,
        year: 2009,
        publisher: "Advances in Gender & Education, vol. 1, pp. 5-10",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Barriers to girls' engagement in computer programming.",
  },
  {
    name: "Garland, Trudi Hammel",
    field: "Mathematics Education",
    works: [
      {
        title: "Fascinating Fibonaccis: Mystery and Magic in Numbers",
        type: "book" as const,
        year: 1987,
        publisher: "Pearson, Parsippany, NJ",
      },
    ],
    pages: "Ch. 5 notes",
    context: "Example of engaging math education approach.",
  },

  // ---- Chapter 6: Sex ----
  {
    name: "Jarrell, Anne",
    field: "Journalism",
    works: [
      {
        title: "The Face of Teenage Sex Grows Younger",
        type: "article" as const,
        year: 2000,
        publisher: "New York Times (April 2, 2000)",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Rise of teen sexual activity at younger ages.",
  },
  {
    name: "Howey, Noelle",
    field: "Journalism / Public Health",
    works: [
      {
        title: "Oral Report (survey and report on oral sex)",
        type: "article" as const,
        year: 2003,
        publisher: "Seventeen magazine (August 2003)",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Girls performing oral sex without pleasure; hookup culture.",
  },
  {
    name: "Orenstein, Peggy",
    field: "Journalism / Gender Studies",
    works: [
      {
        title: "Girls and Sex: Navigating the Complicated New Landscape",
        type: "book" as const,
        year: 2016,
        publisher: "Harper, New York",
      },
    ],
    pages: "Ch. 6 notes",
    context: "How hookup culture has transformed teen experience.",
  },
  {
    name: "Martinez, Gladys",
    field: "Public Health",
    works: [
      {
        title: "Teenagers in the United States: Sexual Activity, Contraceptive Use, and Childbearing, 2006-2010 National Survey of Family Growth",
        type: "report" as const,
        year: 2011,
        publisher: "National Center for Health Statistics, Vital Health Statistics, vol. 23, no. 31",
      },
    ],
    pages: "Ch. 6 notes",
    context: "CDC data showing decrease in teen sexual intercourse between 1988 and 2010.",
  },
  {
    name: "Hall, Alexandra",
    field: "Journalism",
    works: [
      {
        title: "The Mating Habits of the Suburban High School Teenager",
        type: "article" as const,
        year: 2003,
        publisher: "Boston magazine",
      },
    ],
    pages: "Ch. 6 notes",
    context: "'Oral sex is the new second base'; hookup culture replacing dating.",
  },
  {
    name: "Kass, Leon",
    field: "Bioethics",
    works: [
      {
        title: "Interview on The Merrow Report",
        type: "other" as const,
        year: 2000,
        publisher: "PBS (November 29, 2000)",
      },
    ],
    pages: "Ch. 6 notes",
    context: "'Kids don't date nowadays.'",
  },
  {
    name: "Whitehead, Barbara Dafoe",
    field: "Sociology / Journalism",
    works: [
      {
        title: "Forget Sex in the City, Women Want Romance in Their Lives",
        type: "article" as const,
        year: 2003,
        publisher: "Washington Post (February 9, 2003, p. B2)",
      },
    ],
    pages: "Ch. 6 notes",
    context: "'Traditional dating is dead.'",
  },
  {
    name: "Diamond, Lisa",
    field: "Psychology",
    works: [
      {
        title: "What Does Sexual Orientation Orient? A Biobehavioral Model Distinguishing Romantic Love and Sexual Desire",
        type: "article" as const,
        year: 2003,
        publisher: "Psychological Review, vol. 110, pp. 173-192",
      },
      {
        title: "Was It a Phase? Young Women's Relinquishment of Lesbian/Bisexual Identities over a 5-Year Period",
        type: "article" as const,
        year: 2003,
        publisher: "Journal of Personality and Social Psychology, vol. 84, pp. 352-364",
      },
    ],
    pages: "Ch. 6, Ch. 10",
    context: "Oxytocin circuits for love and sex are estrogen-dependent and gender-specific; women's sexual identity is more fluid than men's.",
    keyFigure: true,
  },
  {
    name: "Karama, Sherif",
    field: "Neuroscience",
    works: [
      {
        title: "Areas of Brain Activation in Males and Females during Viewing of Erotic Film Excerpts",
        type: "article" as const,
        year: 2002,
        publisher: "Human Brain Mapping, vol. 16, pp. 1-13",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Men show more activity in primitive brain areas during sexual arousal.",
  },
  {
    name: "Hamann, Stephan",
    field: "Neuroscience",
    works: [
      {
        title: "Men and Women Differ in Amygdala Response to Visual Sexual Stimuli",
        type: "article" as const,
        year: 2004,
        publisher: "Nature Neuroscience, vol. 7, pp. 411-416",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Sex differences in amygdala response to sexual stimuli.",
  },
  {
    name: "Stoleru, Serge",
    field: "Neuroscience",
    works: [
      {
        title: "Functional Neuroimaging Studies of Sexual Arousal and Orgasm in Healthy Men and Women: A Review and Meta-analysis",
        type: "article" as const,
        year: 2012,
        publisher: "Neuroscience & Biobehavioral Reviews, vol. 36, pp. 1481-1509",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Confirms sex differences in brain activation during sexual arousal.",
  },
  {
    name: "Hernandez-Gonzalez, Marisela",
    field: "Neuroscience",
    works: [
      {
        title: "Sexual Arousal Decreases the Functional Synchronization Between Cortical Areas in Young Men",
        type: "article" as const,
        year: 2013,
        publisher: "Journal of Sex & Marital Therapy, vol. 39, pp. 264-279",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Sexual arousal literally causes brain to 'come unglued' in young men.",
  },
  {
    name: "Peplau, Letitia Anne",
    field: "Psychology",
    works: [
      {
        title: "Human Sexuality: How Do Men and Women Differ?",
        type: "article" as const,
        year: 2003,
        publisher: "Current Directions in Psychological Science, vol. 12, pp. 37-44",
      },
    ],
    pages: "Ch. 6 notes",
    context: "'Women's sexuality tends to be strongly linked to a close relationship.'",
  },
  {
    name: "Malamuth, Neil",
    field: "Psychology",
    works: [
      {
        title: "Rape Proclivity Among Males",
        type: "article" as const,
        year: 1981,
        publisher: "Journal of Social Issues, vol. 37",
      },
      {
        title: "Testing Hypotheses Regarding Rape",
        type: "article" as const,
        year: 1980,
        publisher: "Journal of Research in Personality, vol. 14",
      },
    ],
    pages: "Ch. 6 notes",
    context: "35% of 'normal' college men said they would rape if sure of not being caught; over half in another study.",
  },
  {
    name: "Bridges, Ana",
    field: "Media Studies / Psychology",
    works: [
      {
        title: "Aggression and Sexual Behavior in Best-Selling Pornography Videos: A Content Analysis Update",
        type: "article" as const,
        year: 2010,
        publisher: "Violence Against Women, vol. 16, pp. 1065-1085",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Over 80% of popular porn includes degrading violence against women.",
  },
  {
    name: "Kohut, Taylor",
    field: "Psychology",
    works: [
      {
        title: "Is Pornography Really About 'Making Hate to Women'?",
        type: "article" as const,
        year: 2016,
        publisher: "Journal of Sex Research, vol. 53, pp. 1-11",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Porn users hold MORE gender-egalitarian attitudes than non-users.",
  },
  {
    name: "Baumeister, Roy",
    field: "Psychology",
    works: [
      {
        title: "Gender Differences in Erotic Plasticity: The Female Sex Drive as Socially Flexible and Responsive",
        type: "article" as const,
        year: 2000,
        publisher: "Psychological Bulletin, vol. 126, pp. 247-274",
      },
    ],
    pages: "Ch. 6 notes",
    context: "'Male desire aims at the sexual activity itself, whereas female desire aims beyond it.'",
  },
  {
    name: "Brumberg, Joan Jacobs",
    field: "History / Gender Studies",
    works: [
      {
        title: "The Body Project: An Intimate History of American Girls",
        type: "book" as const,
        year: 1997,
        publisher: "Random House, New York",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Girls provide oral sex 'without pleasure'; sexual pleasure not motivating factor for teen girls.",
  },
  {
    name: "Eyre, Stephen",
    field: "Psychology",
    works: [
      {
        title: "What Leads to Sex? Adolescent Preferred Partners and Reasons for Sex",
        type: "article" as const,
        year: 1999,
        publisher: "Journal of Research on Adolescence, vol. 9, pp. 277-307",
        coAuthors: ["Susan Millstein"],
      },
    ],
    pages: "Ch. 6 notes",
    context: "Girls don't list sexual arousal as reason for having sex.",
  },
  {
    name: "Grello, Catherine",
    field: "Psychology",
    works: [
      {
        title: "No Strings Attached: The Nature of Casual Sex in College Students",
        type: "article" as const,
        year: 2006,
        publisher: "Journal of Sex Research, vol. 43, pp. 255-267",
        coAuthors: ["Deborah Welsh", "Melinda Harper"],
      },
    ],
    pages: "Ch. 6 notes",
    context: "Nature of casual sex among college students.",
  },
  {
    name: "Rosin, Hanna",
    field: "Journalism",
    works: [
      {
        title: "Boys on the Side",
        type: "article" as const,
        year: 2012,
        publisher: "The Atlantic (September 2012)",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Hookup culture analysis.",
  },
  {
    name: "Joyner, K.",
    field: "Sociology / Psychology",
    works: [
      {
        title: "You Don't Bring Me Anything But Down: Adolescent Romance and Depression",
        type: "article" as const,
        year: 2000,
        publisher: "Journal of Health and Social Behavior, vol. 41, pp. 369-391",
        coAuthors: ["J. Udry"],
      },
    ],
    pages: "Ch. 6 notes",
    context: "Link between adolescent romantic relationships and depression.",
  },
  {
    name: "Hallfors, Denise",
    field: "Public Health / Psychology",
    works: [
      {
        title: "Which Comes First in Adolescence -- Sex and Drugs or Depression?",
        type: "article" as const,
        year: 2005,
        publisher: "American Journal of Preventive Medicine, vol. 29, pp. 163-170",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Causal direction between teen sex and depression.",
  },
  {
    name: "Mendle, Jane",
    field: "Psychology",
    works: [
      {
        title: "Depression and Adolescent Sexual Activity in Romantic and Nonromantic Relational Contexts",
        type: "article" as const,
        year: 2013,
        publisher: "Journal of Abnormal Psychology, vol. 122, pp. 51-63",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Depression linked to teen sexual activity in non-romantic contexts.",
  },
  {
    name: "Furman, Wyndol",
    field: "Psychology",
    works: [
      {
        title: "Adolescent Romantic Relationships: A Developmental Perspective",
        type: "article" as const,
        year: 1997,
        publisher: "In Shulman & Collins (eds.), Romantic Relationships in Adolescence, Wiley/Jossey-Bass",
        coAuthors: ["Elizabeth Wehner"],
      },
    ],
    pages: "Ch. 6 notes",
    context: "Developmental perspective on teen romance.",
  },
  {
    name: "Parker-Pope, Tara",
    field: "Psychology / Journalism",
    works: [
      {
        title: "For Better: How the Surprising Science of Happy Couples Can Help Your Marriage Succeed",
        type: "book" as const,
        year: 2011,
        publisher: "Plume, New York",
      },
    ],
    pages: "Ch. 6 notes",
    context: "Health benefits of marriage ('marriage advantage').",
  },

  // ---- Chapter 7: Drugs and Alcohol ----
  {
    name: "Moon, Dreama",
    field: "Public Health",
    works: [
      {
        title: "Ethnic and Gender Differences and Similarities in Adolescent Drug Use and Refusals of Drug Offers",
        type: "article" as const,
        year: 1999,
        publisher: "Substance Use and Misuse, vol. 34, pp. 1059-1083",
      },
    ],
    pages: "Ch. 7 notes",
    context: "Gender differences in drug use patterns.",
  },
  {
    name: "Simantov, Elisabeth",
    field: "Pediatric Medicine",
    works: [
      {
        title: "Health-Compromising Behaviors: Why Do Adolescents Smoke or Drink?",
        type: "article" as const,
        year: 2000,
        publisher: "Archives of Pediatrics and Adolescent Medicine, vol. 154, pp. 1025-1033",
        coAuthors: ["Cathy Schoen", "Jonathan Klein"],
      },
    ],
    pages: "Ch. 7 notes",
    context: "Gender differences in motivations for teen substance use.",
  },
  {
    name: "Kuntsche, Emmanuel",
    field: "Public Health",
    works: [
      {
        title: "Drinking Motives Mediate Cultural Differences but Not Gender Differences in Adolescent Alcohol Use",
        type: "article" as const,
        year: 2015,
        publisher: "Journal of Adolescent Health, vol. 56, pp. 323-329",
      },
    ],
    pages: "Ch. 7 notes",
    context: "Gender differences in drinking motives.",
  },
  {
    name: "Moore, Michele",
    field: "Public Health",
    works: [
      {
        title: "Sport and Physical Activity Participation and Substance Use Among Adolescents",
        type: "article" as const,
        year: 2005,
        publisher: "Journal of Adolescent Health, vol. 36, pp. 486-493",
        coAuthors: ["Chad Werch"],
      },
    ],
    pages: "Ch. 7 notes",
    context: "Sports participation protective for girls but may increase drinking for boys.",
  },
  {
    name: "Keyes, Katherine M.",
    field: "Epidemiology",
    works: [
      {
        title: "Birth Cohort Effects and Gender Differences in Alcohol Epidemiology: A Review and Synthesis",
        type: "article" as const,
        year: 2011,
        publisher: "Alcoholism: Clinical and Experimental Research, vol. 35, pp. 2101-2112",
        coAuthors: ["Guohua Li", "Deborah S. Hasin"],
      },
    ],
    pages: "Ch. 7 notes",
    context: "Gender convergence in alcohol use patterns across birth cohorts.",
  },
  {
    name: "Erol, Almila",
    field: "Addiction Medicine",
    works: [
      {
        title: "Sex and Gender-Related Differences in Alcohol Use and Its Consequences",
        type: "article" as const,
        year: 2015,
        publisher: "Drug and Alcohol Dependence, vol. 156, pp. 1-13",
        coAuthors: ["Victor Karpyak"],
      },
    ],
    pages: "Ch. 7 notes",
    context: "Women more vulnerable to alcohol's effects; pharmacokinetic differences.",
  },
  {
    name: "Medina, Krista",
    field: "Neuroscience / Addiction",
    works: [
      {
        title: "Prefrontal Cortex Volumes in Adolescents with Alcohol Use Disorders: Unique Gender Effects",
        type: "article" as const,
        year: 2008,
        publisher: "Alcoholism: Clinical and Experimental Research, vol. 32, pp. 386-394",
      },
    ],
    pages: "Ch. 7 notes",
    context: "Teen girls with alcohol disorders had smaller prefrontal cortices; not true for boys.",
  },
  {
    name: "Kvamme, Timo",
    field: "Neuroscience",
    works: [
      {
        title: "Sexually Dimorphic Brain Volume Interaction in College-Aged Binge Drinkers",
        type: "article" as const,
        year: 2016,
        publisher: "NeuroImage: Clinical, vol. 10, pp. 310-317",
      },
    ],
    pages: "Ch. 7 notes",
    context: "Sex-specific effects of binge drinking on brain.",
  },
  {
    name: "Foster, K.T.",
    field: "Psychology / Addiction",
    works: [
      {
        title: "Gender Differences in the Structure of Risk for Alcohol Use Disorder in Adolescence and Young Adulthood",
        type: "article" as const,
        year: 2015,
        publisher: "Psychological Medicine, vol. 45, pp. 3047-3058",
      },
    ],
    pages: "Ch. 7 notes",
    context: "Different risk structures for alcohol use disorder by gender.",
  },

  // ---- Chapter 8: Social Media and Video Games ----
  {
    name: "Herring, Susan",
    field: "Communication / Gender Studies",
    works: [
      {
        title: "Teens, Gender, and Self-Presentation in Social Media",
        type: "article" as const,
        year: 2015,
        publisher: "In International Encyclopedia of Social and Behavioral Sciences, 2nd ed., Elsevier",
        coAuthors: ["Sanja Kapidzic"],
      },
    ],
    pages: "Ch. 8 notes",
    context: "Gender differences in social media self-presentation.",
  },
  {
    name: "Ringrose, Jessica",
    field: "Gender Studies / Media",
    works: [
      {
        title: "Teen Girls, Sexual Double Standards, and Sexting: Gendered Value in Digital Image Exchange",
        type: "article" as const,
        year: 2013,
        publisher: "Feminist Theory, vol. 14, pp. 305-323",
      },
    ],
    pages: "Ch. 8 notes",
    context: "Sexual double standards in social media; girls feel pressure to present sexually.",
  },
  {
    name: "Doring, Nicola",
    field: "Media Studies",
    works: [
      {
        title: "How Gender-Stereotypical Are Selfies?",
        type: "article" as const,
        year: 2016,
        publisher: "Computers in Human Behavior, vol. 55, pp. 955-962",
      },
    ],
    pages: "Ch. 8 notes",
    context: "Girls' Instagram self-presentation more sexist than magazine advertisements.",
  },
  {
    name: "Daniels, Elizabeth",
    field: "Psychology / Media",
    works: [
      {
        title: "The Price of Sexy: Viewers' Perceptions of a Sexualized Versus Nonsexualized Facebook Profile Photography",
        type: "article" as const,
        year: 2016,
        publisher: "Psychology of Popular Media Culture, vol. 5, pp. 2-14",
        coAuthors: ["Eileen Zurbriggen"],
      },
    ],
    pages: "Ch. 8 notes",
    context: "Sexualized photos make girls seem less appealing as friends.",
  },
  {
    name: "Gabriel, Marsha",
    field: "Psychology",
    works: [
      {
        title: "Narcissistic Illusions in Self-Evaluations of Intelligence and Attractiveness",
        type: "article" as const,
        year: 1994,
        publisher: "Journal of Personality, vol. 62, pp. 143-155",
      },
    ],
    pages: "Ch. 8 notes",
    context: "Boys overestimate attractiveness; girls underestimate.",
  },
  {
    name: "Bearman, Sarah Kate",
    field: "Psychology",
    works: [
      {
        title: "The Skinny on Body Dissatisfaction: A Longitudinal Study of Adolescent Girls and Boys",
        type: "article" as const,
        year: 2006,
        publisher: "Journal of Youth and Adolescence, vol. 35, pp. 217-229",
        coAuthors: ["Erin Martinez", "Eric Stice"],
      },
    ],
    pages: "Ch. 8 notes",
    context: "Girls become more dissatisfied with bodies through adolescence; boys become more satisfied.",
  },
  {
    name: "Beyer, Sylvia",
    field: "Psychology",
    works: [
      {
        title: "Gender Differences in Self-Perception and Negative Recall Biases",
        type: "article" as const,
        year: 1998,
        publisher: "Sex Roles, vol. 38, pp. 103-133",
      },
    ],
    pages: "Ch. 8 notes",
    context: "Girls more likely to notice and remember their own mistakes.",
  },
  {
    name: "Grijalva, Emily",
    field: "Psychology",
    works: [
      {
        title: "Gender Differences in Narcissism: A Meta-analytic Review",
        type: "article" as const,
        year: 2015,
        publisher: "Psychological Bulletin, vol. 141, pp. 261-310",
      },
    ],
    pages: "Ch. 8 notes",
    context: "Boys more narcissistic than girls on average.",
  },
  {
    name: "Nesi, Jacqueline",
    field: "Psychology",
    works: [
      {
        title: "Using Social Media for Social Comparison and Feedback-Seeking: Gender and Popularity Moderate Associations with Depressive Symptoms",
        type: "article" as const,
        year: 2015,
        publisher: "Journal of Abnormal Child Psychology, vol. 43, pp. 1427-1438",
        coAuthors: ["Mitchell Prinstein"],
      },
    ],
    pages: "Ch. 8 notes",
    context: "Social media comparison more strongly associated with depression in girls.",
  },
  {
    name: "Fairlie, Robert",
    field: "Economics / Education",
    works: [
      {
        title: "Do Boys and Girls Use Computers Differently, and Does It Contribute to Why Boys Do Worse in School Than Girls?",
        type: "report" as const,
        year: 2015,
        publisher: "IZA Discussion Papers, No. 9302",
      },
    ],
    pages: "Ch. 8 notes",
    context: "Boys more likely to play video games; girls spend more time on social media.",
  },
  {
    name: "Griffiths, Mark",
    field: "Psychology",
    works: [
      {
        title: "Dependence on Computer Games by Adolescents",
        type: "article" as const,
        year: 1998,
        publisher: "Psychological Reports, vol. 82, pp. 475-480",
        coAuthors: ["Nigel Hunt"],
      },
    ],
    pages: "Ch. 8 notes",
    context: "Video game addiction among adolescents. Cited repeatedly on video game research.",
    keyFigure: true,
  },
  {
    name: "Hoeft, Fumiko",
    field: "Neuroscience",
    works: [
      {
        title: "Gender Differences in the Mesocorticolimbic System During Computer Game-Play",
        type: "article" as const,
        year: 2008,
        publisher: "Journal of Psychiatric Research, vol. 42, pp. 253-258",
      },
    ],
    pages: "Ch. 8 notes",
    context: "Different brain areas light up in boys vs. girls playing games; games more rewarding for boys.",
  },
  {
    name: "Anderson, Craig",
    field: "Psychology",
    works: [
      {
        title: "Violent Video Game Effects on Aggression, Empathy, and Prosocial Behavior in Eastern and Western Countries: A Meta-analytic Review",
        type: "article" as const,
        year: 2010,
        publisher: "Psychological Bulletin, vol. 136, pp. 151-173",
      },
      {
        title: "Violent Video Game Effects on Children and Adolescents",
        type: "book" as const,
        year: 2007,
        publisher: "Oxford University Press, New York",
        coAuthors: ["Douglas Gentile", "Katherine Buckley"],
      },
    ],
    pages: "Ch. 8 notes",
    context: "Strong evidence linking violent video games to antisocial behaviors; compared to secondhand smoke/lung cancer evidence. Central to the video game argument.",
    keyFigure: true,
  },
  {
    name: "Huesmann, L. Rowell",
    field: "Psychology",
    works: [
      {
        title: "Nailing the Coffin Shut on Doubts That Violent Video Games Stimulate Aggression",
        type: "article" as const,
        year: 2010,
        publisher: "Psychological Bulletin, vol. 136, pp. 179-181",
      },
    ],
    pages: "Ch. 8 notes",
    context: "Commentary on strength of video game violence evidence.",
  },
  {
    name: "Bartholow, Bruce",
    field: "Psychology",
    works: [
      {
        title: "Chronic Violent Video Game Exposure and Desensitization to Violence",
        type: "article" as const,
        year: 2006,
        publisher: "Journal of Experimental Social Psychology, vol. 42, pp. 532-539",
      },
    ],
    pages: "Ch. 8 notes",
    context: "Violent video games change brains, causing desensitization.",
  },
  {
    name: "Lewin, Tamar",
    field: "Journalism / Education",
    works: [
      {
        title: "At Colleges, Women Are Leaving Men in the Dust",
        type: "article" as const,
        year: 2006,
        publisher: "New York Times (July 9, 2006)",
      },
    ],
    pages: "Ch. 8 notes",
    context: "Gender gap in college attendance and achievement favoring women.",
  },

  // ---- Chapter 9: Gender Nonconforming ----
  {
    name: "Kagan, Jerome",
    field: "Psychology",
    works: [
      {
        title: "Temperament and Allergic Symptoms",
        type: "article" as const,
        year: 1991,
        publisher: "Psychosomatic Medicine",
      },
      {
        title: "Galen's Prophecy: Temperament in Human Nature",
        type: "book" as const,
        year: 1994,
        publisher: "Basic Books, New York",
      },
    ],
    pages: "Ch. 9 notes",
    context: "'Highly reactive' boys -- shy, timid boys with narrow faces, more allergies. Kagan's temperament research is foundational for the chapter. Reviewed chapter 9 for first edition.",
    keyFigure: true,
  },
  {
    name: "Sexton, Patricia Cayo",
    field: "Sociology / Education",
    works: [
      {
        title: "The Feminized Male: Classrooms, White Collars, and the Decline of Manliness",
        type: "book" as const,
        year: 1969,
        publisher: "Random House, New York",
      },
    ],
    pages: "Ch. 9 notes",
    context: "Early argument that schools feminize boys; discussed at length. Reviewed chapter 9 for first edition.",
    keyFigure: true,
  },
  {
    name: "Green, Katherine",
    field: "Psychology",
    works: [
      {
        title: "Blue Versus Periwinkle: Color Identification and Gender",
        type: "article" as const,
        year: 1995,
        publisher: "Perceptual and Motor Skills, vol. 80, pp. 27-32",
        coAuthors: ["Malcolm Gynther"],
      },
    ],
    pages: "Ch. 9 notes",
    context: "Gender differences in color naming.",
  },
  {
    name: "Aluja, Anton",
    field: "Genetics / Endocrinology",
    works: [
      {
        title: "Interactions Among Impulsiveness, Testosterone, Sex Hormone Binding Globulin and Androgen Receptor Gene CAG Repeat Length",
        type: "article" as const,
        year: 2015,
        publisher: "Physiology & Behavior, vol. 147, pp. 91-96",
      },
    ],
    pages: "Ch. 9 notes",
    context: "Androgen receptor gene CAG repeat length affects masculinity of behavior.",
  },
  {
    name: "Seidman, Stuart",
    field: "Psychiatry / Genetics",
    works: [
      {
        title: "Testosterone Level, Androgen Receptor Polymorphism, and Depressive Symptoms in Middle-Aged Men",
        type: "article" as const,
        year: 2001,
        publisher: "Biological Psychiatry, vol. 50, pp. 371-376",
      },
    ],
    pages: "Ch. 9 notes",
    context: "Androgen receptor gene variants and depression in men.",
  },
  {
    name: "Butovskaya, Marina",
    field: "Anthropology / Genetics",
    works: [
      {
        title: "Androgen Receptor Gene Polymorphism, Aggression, and Reproduction in Tanzanian Foragers and Pastoralists",
        type: "article" as const,
        year: 2015,
        publisher: "PLOS One",
      },
    ],
    pages: "Ch. 9 notes",
    context: "AR gene polymorphism and aggression across cultures.",
  },
  {
    name: "Konno, Akitsugu",
    field: "Animal Genetics",
    works: [
      {
        title: "Androgen Receptor Gene Polymorphisms Are Associated with Aggression in Japanese Akita Inu",
        type: "article" as const,
        year: 2011,
        publisher: "Biology Letters, vol. 7, pp. 658-660",
      },
    ],
    pages: "Ch. 9 notes",
    context: "AR gene polymorphism linked to aggression in dogs too.",
  },

  // ---- Chapter 10: Lesbian, Gay, Bisexual ----
  {
    name: "Bailey, J. Michael",
    field: "Psychology / Sexology",
    works: [
      {
        title: "Sexual Orientation, Controversy, and Science",
        type: "article" as const,
        year: 2016,
        publisher: "Psychological Science in the Public Interest, vol. 17, pp. 45-101",
      },
      {
        title: "A Genetic Study of Male Sexual Orientation",
        type: "article" as const,
        year: 1991,
        publisher: "Archives of General Psychiatry, vol. 48, pp. 1089-1096",
        coAuthors: ["Richard Pillard"],
      },
      {
        title: "The Man Who Would Be Queen: The Science of Gender-Bending and Transsexualism",
        type: "book" as const,
        year: 2003,
        publisher: "National Academies Press, Washington, DC",
      },
    ],
    pages: "Chs. 10-11",
    context: "Comprehensive review of sexual orientation science; twin study; extensively cited on gay femininity, bisexuality, and transsexualism. Reviewed chapters 10 and 11 for the book.",
    keyFigure: true,
  },
  {
    name: "Faderman, Lillian",
    field: "History / LGBTQ Studies",
    works: [
      {
        title: "The Gay Revolution: The Story of the Struggle",
        type: "book" as const,
        year: 2015,
        publisher: "Simon & Schuster, New York",
      },
    ],
    pages: "Ch. 10 notes",
    context: "History of the gay rights movement.",
  },
  {
    name: "McCullough, David",
    field: "History",
    works: [
      {
        title: "Truman",
        type: "book" as const,
        year: 1993,
        publisher: "Simon & Schuster, New York",
      },
    ],
    pages: "Ch. 10 notes",
    context: "Truman biography, cited for historical context.",
  },
  {
    name: "Langstrom, Niklas",
    field: "Genetics",
    works: [
      {
        title: "Genetic and Environmental Effects on Same-Sex Sexual Behavior: A Population Study of Twins in Sweden",
        type: "article" as const,
        year: 2010,
        publisher: "Archives of Sexual Behavior, vol. 39, pp. 75-80",
      },
    ],
    pages: "Ch. 10 notes",
    context: "Swedish twin study on genetics of sexual orientation.",
  },
  {
    name: "Blanchard, Ray",
    field: "Psychology / Biology",
    works: [
      {
        title: "Homosexuality in Men and Number of Older Brothers (and related papers)",
        type: "article" as const,
        year: "1996-2006",
        publisher: "American Journal of Psychiatry; PNAS; Hormones and Behavior",
        coAuthors: ["Anthony Bogaert"],
      },
    ],
    pages: "Ch. 10 notes",
    context: "Fraternal birth order effect on male homosexuality; maternal immune hypothesis.",
    keyFigure: true,
  },
  {
    name: "Zucker, Kenneth",
    field: "Psychology",
    works: [
      {
        title: "Reflections on the Relation Between Sex-Typed Behavior in Childhood and Sexual Orientation in Adulthood",
        type: "article" as const,
        year: 2008,
        publisher: "Journal of Gay & Lesbian Mental Health, vol. 12, pp. 29-59",
      },
    ],
    pages: "Chs. 10-11",
    context: "Childhood gender nonconformity and adult sexual orientation. Cited extensively across Chs. 10-11.",
    keyFigure: true,
  },
  {
    name: "Bell, Alan",
    field: "Psychology / Sexology",
    works: [
      {
        title: "Sexual Preference: Its Development in Men and Women",
        type: "book" as const,
        year: 1981,
        publisher: "Indiana University Press",
        coAuthors: ["Martin Weinberg", "Sue Hammersmith"],
      },
    ],
    pages: "Ch. 10 notes",
    context: "Classic study of sexual preference development.",
  },
  {
    name: "Masters, William",
    field: "Sexology",
    works: [
      {
        title: "Homosexuality in Perspective",
        type: "book" as const,
        year: 1979,
        publisher: "Lippincott, Williams & Wilkins, Philadelphia",
        coAuthors: ["Virginia Johnson"],
      },
    ],
    pages: "Ch. 10 notes",
    context: "Classic study of homosexuality.",
  },
  {
    name: "Symons, Donald",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "The Evolution of Human Sexuality",
        type: "book" as const,
        year: 1979,
        publisher: "Oxford University Press, New York",
      },
    ],
    pages: "Ch. 10 notes",
    context: "Evolutionary perspective on human sexuality.",
  },
  {
    name: "Chivers, Meredith",
    field: "Psychology",
    works: [
      {
        title: "A Sex Difference in the Specificity of Sexual Arousal",
        type: "article" as const,
        year: 2004,
        publisher: "Psychological Science, vol. 15, pp. 736-744",
        coAuthors: ["J. Michael Bailey"],
      },
    ],
    pages: "Ch. 10 notes",
    context: "Sex differences in sexual arousal patterns; male arousal is more category-specific than female.",
  },
  {
    name: "Marshal, Michael",
    field: "Public Health / Psychology",
    works: [
      {
        title: "Suicidality and Depression Disparities Between Sexual Minority and Heterosexual Youth: A Meta-analytic Review",
        type: "article" as const,
        year: 2011,
        publisher: "Journal of Adolescent Health, vol. 49, pp. 115-123",
      },
    ],
    pages: "Ch. 10 notes",
    context: "Higher rates of depression and suicidality among sexual minority youth.",
  },
  {
    name: "Hatzenbuehler, Mark",
    field: "Pediatrics / Public Health",
    works: [
      {
        title: "The Social Environment and Suicide Attempts in Lesbian, Gay, and Bisexual Youth",
        type: "article" as const,
        year: 2011,
        publisher: "Pediatrics, vol. 127, pp. 896-903",
      },
    ],
    pages: "Ch. 10 notes",
    context: "Social environment factors in LGB youth suicide attempts.",
  },

  // ---- Chapter 11: Intersex and Transgender ----
  {
    name: "Diamond, Milton",
    field: "Medicine",
    works: [
      {
        title: "Sex Reassignment at Birth: Long-Term Review and Clinical Implications",
        type: "article" as const,
        year: 1997,
        publisher: "Archives of Pediatrics and Adolescent Medicine, vol. 151, pp. 298-304",
        coAuthors: ["H.K. Sigmundson"],
      },
    ],
    pages: "Ch. 11 notes",
    context: "Long-term follow-up of the 'boy who was raised as a girl' (David Reimer case).",
  },
  {
    name: "Colapinto, John",
    field: "Journalism / Gender Studies",
    works: [
      {
        title: "As Nature Made Him: The Boy Who Was Raised as a Girl",
        type: "book" as const,
        year: 2006,
        publisher: "Harper, New York",
      },
    ],
    pages: "Ch. 11 notes",
    context: "Full account of David Reimer case; shows Money's treatment was harmful.",
  },
  {
    name: "Dhejne, Cecilia",
    field: "Medicine / Psychiatry",
    works: [
      {
        title: "Long-Term Follow-up of Transsexual Persons Undergoing Sex Reassignment Surgery: Cohort Study from Sweden",
        type: "article" as const,
        year: 2011,
        publisher: "PLOS One",
      },
    ],
    pages: "Ch. 11 notes",
    context: "Swedish cohort study showing elevated mortality after sex reassignment surgery.",
  },
  {
    name: "Hare, Lauren",
    field: "Genetics / Psychiatry",
    works: [
      {
        title: "Androgen Receptor Repeat Length Polymorphism Associated with Male-to-Female Transsexualism",
        type: "article" as const,
        year: 2009,
        publisher: "Biological Psychiatry, vol. 65, pp. 93-96",
      },
    ],
    pages: "Ch. 11 notes",
    context: "Genetic basis for male-to-female transsexualism via androgen receptor.",
  },
  {
    name: "Drummond, Kelley",
    field: "Psychology",
    works: [
      {
        title: "A Follow-up Study of Girls with Gender Identity Disorder",
        type: "article" as const,
        year: 2008,
        publisher: "Developmental Psychology, vol. 44, pp. 34-45",
      },
    ],
    pages: "Ch. 11 notes",
    context: "Most girls with childhood gender identity disorder do not persist into adulthood.",
  },
  {
    name: "Steensma, Thomas",
    field: "Child Psychiatry",
    works: [
      {
        title: "Factors Associated with Desistence and Persistence of Childhood Gender Dysphoria",
        type: "article" as const,
        year: 2013,
        publisher: "Journal of the American Academy of Child & Adolescent Psychiatry, vol. 52, pp. 582-590",
      },
    ],
    pages: "Ch. 11 notes",
    context: "71% of boys with childhood gender dysphoria desist; 50% of girls desist.",
  },
  {
    name: "Nutt, Amy Ellis",
    field: "Journalism / Gender Studies",
    works: [
      {
        title: "Becoming Nicole: The Transformation of an American Family",
        type: "book" as const,
        year: 2015,
        publisher: "Random House, New York",
      },
    ],
    pages: "Ch. 11 notes",
    context: "Account of a transgender child's family experience.",
  },
  {
    name: "Prosser, Jay",
    field: "Gender Studies / Literature",
    works: [
      {
        title: "Second Skins: The Body Narratives of Transsexuality",
        type: "book" as const,
        year: 1998,
        publisher: "Columbia University Press, New York",
      },
    ],
    pages: "Ch. 11 notes",
    context: "Narratives of transsexual experience.",
  },

  // ---- Chapter 12: The Male/Female Mistake ----
  {
    name: "Kuby, Gabriele",
    field: "Sociology / Gender Studies",
    works: [
      {
        title: "The Global Sexual Revolution",
        type: "book" as const,
        year: 2015,
        publisher: "Angelico, Kettering, OH (translated by James Kirchner)",
      },
    ],
    pages: "Ch. 12 notes",
    context: "Summary of Judith Butler's career; Yogyakarta Principles; critique of gender ideology.",
  },
  {
    name: "Yunger, Jennifer",
    field: "Psychology",
    works: [
      {
        title: "Does Gender Identity Influence Children's Psychological Well-being?",
        type: "article" as const,
        year: 2004,
        publisher: "Developmental Psychology, vol. 40, pp. 572-582",
      },
    ],
    pages: "Ch. 12 notes",
    context: "Gender identity and child well-being.",
  },
  {
    name: "Shriver, Lionel",
    field: "Literature / Opinion",
    works: [
      {
        title: "Gender -- Good for Nothing",
        type: "article" as const,
        year: 2016,
        publisher: "Prospect (April 21, 2016)",
      },
    ],
    pages: "Ch. 12 notes",
    context: "Critique of modern gender ideology.",
  },
  {
    name: "Datnow, Amanda",
    field: "Education",
    works: [
      {
        title: "Is Single Gender Schooling Viable in the Public Sector?",
        type: "report" as const,
        year: 2001,
        publisher: "Ford Foundation, New York",
        coAuthors: ["Lea Hubbard", "Elisabeth Woody"],
      },
    ],
    pages: "Ch. 12 notes",
    context: "Study of single-sex schooling viability.",
  },
  {
    name: "de Beauvoir, Simone",
    field: "Philosophy / Feminism",
    works: [
      {
        title: "The Second Sex (translated by Constance Borde)",
        type: "book" as const,
        year: "2011 (original 1949)",
        publisher: "Vintage, New York",
      },
    ],
    pages: "Ch. 12 notes",
    context: "'One is not born, but rather becomes, woman' -- foundational feminist text.",
  },
  {
    name: "Harris, Judith Rich",
    field: "Psychology",
    works: [
      {
        title: "The Nurture Assumption: Why Children Turn Out the Way They Do (2nd edition)",
        type: "book" as const,
        year: 2009,
        publisher: "Simon & Schuster, New York",
      },
    ],
    pages: "Ch. 12 notes",
    context: "Group contrast effects -- how being in girl/boy groups amplifies gender differences.",
  },
  {
    name: "Gilmore, David",
    field: "Anthropology",
    works: [
      {
        title: "Manhood in the Making: Cultural Concepts of Masculinity",
        type: "book" as const,
        year: 1990,
        publisher: "Yale University Press, New Haven",
      },
    ],
    pages: "Ch. 12 notes",
    context: "Cross-cultural concepts of masculinity; how cultures define manhood.",
  },
  {
    name: "Haupt, Heather",
    field: "Parenting / Education",
    works: [
      {
        title: "Knights in Training: Ten Principles for Raising Honorable, Courageous, and Compassionate Boys",
        type: "book" as const,
        year: 2017,
        publisher: "Tarcher Perigee, New York",
      },
    ],
    pages: "Ch. 12 notes",
    context: "Principles for raising boys to be honorable men.",
  },
  {
    name: "Cahill, Larry",
    field: "Neuroscience",
    works: [
      {
        title: "An Idea Whose Time Has Come",
        type: "article" as const,
        year: 2017,
        publisher: "Journal of Neuroscience Research, vol. 95, pp. 12-13",
      },
    ],
    pages: "Ch. 12 notes",
    context: "Introduction to special issue on sex differences in neuroscience.",
  },

  // ---- Extra Stuff: Sex Differences in Hearing ----
  {
    name: "McFadden, Dennis",
    field: "Neuroscience / Audiology",
    works: [
      {
        title: "Sex Differences in the Auditory System",
        type: "article" as const,
        year: 1998,
        publisher: "Developmental Neuropsychology, vol. 14, pp. 261-298",
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "Foundational review of sex differences in hearing.",
  },
  {
    name: "Stevens, Stanley",
    field: "Psychophysics",
    works: [
      {
        title: "Neural Events and the Psychophysical Law",
        type: "article" as const,
        year: 1970,
        publisher: "Science, vol. 170, pp. 1043-1050",
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "Psychophysical law underlying hearing research.",
  },
  {
    name: "Sagi, Elad",
    field: "Psychology / Audiology",
    works: [
      {
        title: "Identification Variability as a Measure of Loudness: An Application to Gender Differences",
        type: "article" as const,
        year: 2007,
        publisher: "Canadian Journal of Experimental Psychology, vol. 61, pp. 64-70",
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "Men's loudness value 38% higher than women's, meaning women perceive sounds as louder.",
  },
  {
    name: "D'Alessandro, Lisa",
    field: "Audiology",
    works: [
      {
        title: "Loudness Adaptation Measured by the Simultaneous Dichotic Loudness Balance Technique Differs Between Genders",
        type: "article" as const,
        year: 2009,
        publisher: "Hearing Research, vol. 247, pp. 122-127",
        coAuthors: ["Kenneth Norwich"],
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "Men's loudness adaptation values 44-49% higher than women's.",
  },
  {
    name: "McGuinness, Diane",
    field: "Psychophysiology",
    works: [
      {
        title: "Equating Individual Differences for Auditory Input",
        type: "article" as const,
        year: 1974,
        publisher: "Psychophysiology, vol. 11, pp. 115-120",
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "'Comfortable loudness hearing level' figure reproduced in book; foundational data on sex differences in hearing.",
  },
  {
    name: "Elliott, Colin",
    field: "Psychology",
    works: [
      {
        title: "Noise Tolerance and Extraversion in Children",
        type: "article" as const,
        year: 1971,
        publisher: "British Journal of Psychology, vol. 62, pp. 375-380",
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "Sex differences in noise tolerance among children.",
  },
  {
    name: "Rogers, Deanna",
    field: "Audiology",
    works: [
      {
        title: "The Influence of Listener's Gender on the Acceptance of Background Noise",
        type: "article" as const,
        year: 2003,
        publisher: "Journal of the American Academy of Audiology, vol. 14, pp. 372-382",
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "Gender differences in background noise acceptance.",
  },
  {
    name: "Weinstein, Neil",
    field: "Psychology",
    works: [
      {
        title: "Individual Differences in Reactions to Noise: A Longitudinal Study in a College Dormitory",
        type: "article" as const,
        year: 1978,
        publisher: "Journal of Applied Psychology, vol. 63, pp. 458-466",
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "Noise sensitivity questionnaire study; Sax critiques its methodology.",
  },
  {
    name: "Eliot, Lise",
    field: "Neuroscience / Education",
    works: [
      {
        title: "Single-Sex Education and the Brain",
        type: "article" as const,
        year: 2013,
        publisher: "Sex Roles, vol. 69, pp. 363-381",
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "Attacked Sax's claims about sex differences in hearing; Sax provides detailed rebuttal.",
  },
  {
    name: "Ellermeier, Wolfgang",
    field: "Psychoacoustics",
    works: [
      {
        title: "Psychoacoustic Correlates of Individual Noise Sensitivity",
        type: "article" as const,
        year: 2001,
        publisher: "Journal of the Acoustical Society of America, vol. 109, pp. 1464-1473",
        coAuthors: ["Monika Eigenstetter", "Karin Zimmer"],
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "Sax critiques their methodology for using biased questionnaires that conflate noise sensitivity with aggressiveness.",
  },
  {
    name: "DeBonis, David",
    field: "Audiology / Speech-Language Pathology",
    works: [
      {
        title: "Auditory Processing Disorders: An Update for Speech-Language Pathologists",
        type: "article" as const,
        year: 2008,
        publisher: "American Journal of Speech-Language Pathology, vol. 17, pp. 4-18",
        coAuthors: ["Deborah Moncrieff"],
      },
    ],
    pages: "Extra Stuff: Hearing",
    context: "Update on auditory processing disorders.",
  },

  // ---- Extra Stuff: Sex Differences in Vision ----
  {
    name: "Hassett, Janice",
    field: "Primatology / Behavioral Endocrinology",
    works: [
      {
        title: "Sex Differences in Rhesus Monkey Toy Preferences Parallel Those of Children",
        type: "article" as const,
        year: 2008,
        publisher: "Hormones and Behavior, vol. 54, pp. 359-364",
        coAuthors: ["Erin Siebert", "Kim Wallen"],
      },
    ],
    pages: "Extra Stuff: Vision",
    context: "Male monkeys prefer trucks over dolls; female monkeys show no strong preference. Figures reproduced in book.",
  },
  {
    name: "Konner, Melvin",
    field: "Anthropology / Evolutionary Biology",
    works: [
      {
        title: "The Evolution of Childhood: Relationships, Emotion, Mind",
        type: "book" as const,
        year: 2010,
        publisher: "Harvard University Press, Cambridge, MA",
      },
    ],
    pages: "Extra Stuff: Vision",
    context: "Cited on evolution of sex differences in childhood.",
  },
  {
    name: "Alexander, Gerianne",
    field: "Psychology / Evolutionary Psychology",
    works: [
      {
        title: "Sex Differences in Response to Children's Toys in Nonhuman Primates",
        type: "article" as const,
        year: 2002,
        publisher: "Evolution and Human Behavior, vol. 23, pp. 467-479",
        coAuthors: ["Melissa Hines"],
      },
      {
        title: "An Evolutionary Perspective of Sex-Typed Toy Preferences: Pink, Blue, and the Brain",
        type: "article" as const,
        year: 2003,
        publisher: "Archives of Sexual Behavior, vol. 32, pp. 7-14",
      },
      {
        title: "Sex Differences in Infants' Visual Interest in Toys",
        type: "article" as const,
        year: 2009,
        publisher: "Archives of Sexual Behavior, vol. 38, pp. 427-433",
        coAuthors: ["Teresa Wilcox", "Rebecca Woods"],
      },
    ],
    pages: "Extra Stuff: Vision",
    context: "Vervet monkey toy preferences parallel human sex differences; evolutionary explanation for sex-typed toy preferences; sex differences in visual interest present in infancy.",
    keyFigure: true,
  },
  {
    name: "Ungerleider, Leslie",
    field: "Neuroscience",
    works: [
      {
        title: "Object Vision and Spatial Vision: Two Cortical Pathways",
        type: "article" as const,
        year: 1983,
        publisher: "Trends in Neuroscience, vol. 6, pp. 414-417",
        coAuthors: ["Mortimer Mishkin", "Kathleen Macko"],
      },
    ],
    pages: "Extra Stuff: Vision",
    context: "Discovery of 'what' system vs. 'where' system in visual cortex.",
  },
  {
    name: "Goodale, Melvyn",
    field: "Neuroscience",
    works: [
      {
        title: "An Evolving View of Duplex Vision: Separate But Interacting Cortical Pathways for Perception and Action",
        type: "article" as const,
        year: 2004,
        publisher: "Current Opinion in Neurobiology, vol. 14, pp. 203-211",
        coAuthors: ["David Westwood"],
      },
    ],
    pages: "Extra Stuff: Vision",
    context: "Review of dual visual pathways literature.",
  },
  {
    name: "Handa, Robert",
    field: "Neuroscience / Ophthalmology",
    works: [
      {
        title: "Steroid Hormones, Receptors, and Perceptual and Cognitive Sex Differences in the Visual System",
        type: "article" as const,
        year: 2015,
        publisher: "Current Eye Research, vol. 40, pp. 110-127",
        coAuthors: ["Robert McGivern"],
      },
    ],
    pages: "Extra Stuff: Vision",
    context: "Steroid hormones produce sex differences in visual system.",
  },
  {
    name: "Amunts, Katrin",
    field: "Neuroscience",
    works: [
      {
        title: "Gender-Specific Left-Right Asymmetries in Human Visual Cortex",
        type: "article" as const,
        year: 2007,
        publisher: "Journal of Neuroscience, vol. 27, pp. 1356-1364",
      },
    ],
    pages: "Extra Stuff: Vision",
    context: "Gender-specific asymmetries in visual cortex.",
  },
  {
    name: "Vanston, John",
    field: "Neuroscience",
    works: [
      {
        title: "Sex Differences in the Human Visual System",
        type: "article" as const,
        year: 2017,
        publisher: "Journal of Neuroscience Research, vol. 95, pp. 617-625",
        coAuthors: ["Lars Strother"],
      },
    ],
    pages: "Extra Stuff: Vision",
    context: "Comprehensive review of sex differences in human visual system.",
  },

  // ---- Inline Citations from Body Text ----
  {
    name: "Gilligan, Carol",
    field: "Psychology / Ethics",
    works: [],
    pages: "p. 38",
    context: "Referenced for the phrase 'found her voice.'",
  },
  {
    name: "Maslow, Abraham",
    field: "Psychology",
    works: [],
    pages: "p. 149",
    context: "Referenced for hierarchy of needs / adults who never figure out what they want.",
  },
  {
    name: "Horace",
    field: "Literature (Classical)",
    works: [
      {
        title: "Epistles (I, 10): 'Naturam expellas furca, tamen usque recurret'",
        type: "other" as const,
        year: "~20 BCE",
      },
    ],
    pages: "p. 53",
    context: "Classical Latin quotation on nature always reasserting itself.",
  },
  {
    name: "Tolman, Deborah",
    field: "Psychology / Gender Studies",
    works: [],
    pages: "p. 114",
    context: "Wellesley College Center for Research on Women; on girls and oral sex.",
  },
  {
    name: "Levy-Warren, Marsha",
    field: "Psychology",
    works: [],
    pages: "p. 105",
    context: "New York psychologist on girls' emotional turmoil after hookups.",
  },
  {
    name: "Leone, Peter",
    field: "Medicine",
    works: [],
    pages: "p. 106",
    context: "University of North Carolina professor on oral sex trend.",
  },
  {
    name: "Kreinin, Tamara",
    field: "Public Health / Education",
    works: [],
    pages: "p. 106",
    context: "President, Sexuality Information and Education Council.",
  },
  {
    name: "Milburn, Michael",
    field: "Psychology",
    works: [],
    pages: "p. 109",
    context: "University of Massachusetts professor on dating being replaced by hookups.",
  },
  {
    name: "Pinsky, Drew (Dr. Drew)",
    field: "Medicine / Media",
    works: [
      {
        title: "Cracked: Putting Broken Lives Together Again",
        type: "book" as const,
        year: 2003,
        publisher: "HarperCollins",
      },
    ],
    pages: "p. 328",
    context: "NPR Fresh Air interview (Sept. 24, 2003); cited on addiction and broken lives.",
  },
  {
    name: "Mayer, John",
    field: "Music / Popular Culture",
    works: [],
    pages: "p. 112",
    context: "Rolling Stone interview; 'the new generation of masturbator.'",
  },
  {
    name: "Sanders, Deion",
    field: "Sports",
    works: [],
    pages: "p. 41",
    context: "Dallas Cowboys concussion story -- used as parenting metaphor.",
  },
  {
    name: "Collins, Julie",
    field: "Education",
    works: [],
    pages: "p. 53",
    context: "Counselor at Georgetown Prep: 'You can't turn a bully into a flower child. But you can turn a bully into a knight.'",
  },
  {
    name: "Romero, John (Judge)",
    field: "Law / Juvenile Justice",
    works: [],
    pages: "pp. 155-156",
    context: "Presiding Judge, juvenile court, Albuquerque; on boys and gangs/video games.",
  },
  {
    name: "Jennings, Doris",
    field: "Education",
    works: [],
    pages: "p. 52",
    context: "Principal, Woodlin Elementary School, Silver Spring, MD: 'Body contact is inappropriate for recess activities.'",
  },
  {
    name: "Willis, Jen",
    field: "Education",
    works: [],
    pages: "pp. 37-38",
    context: "Director of outdoor education at Lauriston girls' school, Melbourne.",
  },
  {
    name: "Burkitt, Elinor",
    field: "Journalism",
    works: [
      {
        title: "What Makes a Woman?",
        type: "article" as const,
        year: 2015,
        publisher: "New York Times (June 6, 2015)",
      },
    ],
    pages: "p. 354",
    context: "Essay on defining womanhood in the context of transgender rights.",
  },
  {
    name: "Kersten, Katherine",
    field: "Journalism / Opinion",
    works: [
      {
        title: "Transgender Conformity",
        type: "article" as const,
        year: 2016,
        publisher: "First Things (December 2016)",
      },
    ],
    pages: "p. 354",
    context: "Article on transgender conformity and social pressure.",
  },
  {
    name: "Singal, Jesse",
    field: "Journalism",
    works: [
      {
        title: "How the Fight over Transgender Kids Got a Leading Sex Researcher Fired",
        type: "article" as const,
        year: 2016,
        publisher: "New York Magazine (February 7, 2016)",
      },
    ],
    pages: "p. 348",
    context: "Article on Kenneth Zucker's dismissal from CAMH.",
  },
  {
    name: "Friess, Steve",
    field: "Journalism",
    works: [
      {
        title: "Mike Penner, Christine Daniels: A Tragic Love Story",
        type: "article" as const,
        year: 2010,
        publisher: "LA Weekly (August 19, 2010)",
      },
    ],
    pages: "pp. 348-349",
    context: "Account of sportswriter Mike Penner's transition and tragic death.",
  },
  {
    name: "Penner, Mike / Christine Daniels",
    field: "Journalism",
    works: [
      {
        title: "Old Mike, New Christine",
        type: "article" as const,
        year: 2007,
        publisher: "Los Angeles Times (April 26, 2007)",
      },
    ],
    pages: "p. 348",
    context: "Sportswriter's public transition announcement.",
  },
  {
    name: "Kovner Kline, Kathleen",
    field: "Child Psychiatry / Neuroscience",
    works: [
      {
        title: "Hardwired to Connect",
        type: "report" as const,
        year: "~2003",
        publisher: "YMCA of the USA, Dartmouth Medical School, Institute for American Values",
        coAuthors: ["Arthur Maerlender"],
      },
    ],
    pages: "Ch. 12 notes",
    context: "Conference report on children's need for connection; includes contributions from T. Berry Brazelton, Robert Coles, Stephen Suomi.",
  },
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  // Universities
  {
    name: "University of Pennsylvania",
    type: "University",
    context: "Where Sax earned his Ph.D. and M.D. (author's alma mater). Professors Aronfreed and Gleitman taught social construction of gender.",
    pages: "Ch. 1",
  },
  {
    name: "Johns Hopkins University",
    type: "University",
    context: "John Money's gender research program; the 'boy raised as a girl' case.",
    pages: "Ch. 1, Ch. 11",
  },
  {
    name: "Georgetown University",
    type: "University",
    context: "Deborah Tannen's linguistics work on gender differences in language.",
    pages: "Ch. 1",
  },
  {
    name: "Brown University",
    type: "University",
    context: "Anne Fausto-Sterling's academic home; gender studies and biology.",
    pages: "Ch. 1",
  },
  {
    name: "Harvard University",
    type: "University",
    context: "Lawrence Summers' controversial remarks about women in STEM; Robert Coles; Harvard Graduate School of Education.",
    pages: "Ch. 5, Ch. 12",
  },
  {
    name: "Carnegie Mellon University",
    type: "University",
    context: "Linda Babcock's salary negotiation study: only 7% of women asked for more money vs. 57% of men.",
    pages: "Ch. 3",
  },
  {
    name: "Cornell University",
    type: "University",
    context: "John Bishop's student culture research on 'nerds and freaks.'",
    pages: "Ch. 4, Ch. 5",
  },
  {
    name: "UCLA",
    type: "University",
    context: "Letitia Anne Peplau's sexuality research.",
    pages: "Ch. 6",
  },
  {
    name: "Boston University",
    type: "University",
    context: "Drowning victims study.",
    pages: "Ch. 3",
  },
  {
    name: "University of Pittsburgh",
    type: "University",
    context: "Thunderstorm deaths research; alcohol research.",
    pages: "Ch. 3, Ch. 7",
  },
  {
    name: "University of Missouri",
    type: "University",
    context: "Lizette Peterson's risk studies with simulated bike-riding experiments.",
    pages: "Ch. 3",
  },
  {
    name: "University of Massachusetts",
    type: "University",
    context: "Michael Milburn on dating being replaced by hookups.",
    pages: "Ch. 6",
  },
  {
    name: "University of North Carolina at Chapel Hill",
    type: "University",
    context: "Peter Leone on the oral sex trend among teens.",
    pages: "Ch. 6",
  },
  {
    name: "Wellesley College",
    type: "University",
    context: "Deborah Tolman, Center for Research on Women; research on girls and sexual behavior.",
    pages: "Ch. 6",
  },
  {
    name: "Yale University",
    type: "University",
    context: "Marc Rosen (Sax's medical school classmate).",
    pages: "Ch. 12",
  },
  {
    name: "University of Toronto",
    type: "University",
    context: "Devita Singh dissertation on gender identity.",
    pages: "Ch. 11",
  },
  {
    name: "Stanford University",
    type: "University",
    context: "Andrew Phillips' alma mater.",
    pages: "Ch. 12",
  },
  {
    name: "MIT",
    type: "University",
    context: "Sax's undergraduate institution; Edgerton's applesauce photo.",
    pages: "Ch. 2",
  },
  {
    name: "University of Texas at Austin",
    type: "University",
    context: "Education graduate programs.",
    pages: "Ch. 5",
  },
  {
    name: "Stetson University",
    type: "University",
    context: "Exception in gender-aware education training.",
    pages: "Ch. 12",
  },
  {
    name: "University of Nevada at Reno",
    type: "University",
    context: "Exception in gender-aware education training.",
    pages: "Ch. 12",
  },
  {
    name: "Universitat Pompeu Fabra",
    type: "University",
    context: "Monica Franco Emch thesis on ADHD and nucleus accumbens.",
    pages: "Ch. 5",
  },
  {
    name: "Iowa State University",
    type: "University",
    context: "Craig Anderson's video game research.",
    pages: "Ch. 8",
  },
  {
    name: "Dartmouth Medical School",
    type: "University",
    context: "Hardwired to Connect report co-sponsor.",
    pages: "Ch. 12",
  },
  // Research Centers and Organizations
  {
    name: "Yerkes National Primate Research Center",
    type: "Research Center",
    context: "Frans de Waal's primate research in Atlanta.",
    pages: "Ch. 4",
  },
  {
    name: "Gombe National Park",
    type: "Research Station",
    context: "Jane Goodall's long-term chimpanzee research.",
    pages: "Ch. 4",
  },
  {
    name: "National Center for Health Statistics (CDC)",
    type: "Government Agency",
    context: "Sexual activity data from the National Survey of Family Growth.",
    pages: "Ch. 6",
  },
  {
    name: "National Institutes of Health",
    type: "Government Agency",
    context: "Stephen Suomi's primate research.",
    pages: "Ch. 12",
  },
  {
    name: "Institute for Women's Policy Research",
    type: "Research Organization",
    context: "Gender wage gap data and analysis.",
    pages: "Ch. 3",
  },
  {
    name: "Center on Addiction and Substance Abuse (CASA)",
    type: "Research Center",
    context: "Columbia University; report on girls ages 8-22 and pathways to substance abuse.",
    pages: "Ch. 7",
  },
  {
    name: "College Board",
    type: "Educational Organization",
    context: "AP exam data showing gender disparities across subjects (2015).",
    pages: "Ch. 2, Ch. 5",
  },
  {
    name: "American Academy of Pediatrics",
    type: "Professional Organization",
    context: "Screen time guidelines for children.",
    pages: "Ch. 8",
  },
  {
    name: "National Campaign to Prevent Teen Pregnancy",
    type: "NGO",
    context: "'14 and Younger' report on sexual behavior of very young teens.",
    pages: "Ch. 6",
  },
  {
    name: "Rutherford Institute",
    type: "Legal Organization",
    context: "Defense of boy suspended for imaginary arrow.",
    pages: "Ch. 4",
  },
  {
    name: "Brookings Institution",
    type: "Think Tank",
    context: "Education policy papers; published Bishop's 'Nerds and Freaks.'",
    pages: "Ch. 4",
  },
  {
    name: "Ford Foundation",
    type: "Foundation",
    context: "Funded single-sex schooling study by Datnow, Hubbard, and Woody.",
    pages: "Ch. 12",
  },
  {
    name: "YMCA of the USA",
    type: "NGO",
    context: "Hardwired to Connect report sponsor.",
    pages: "Ch. 12",
  },
  {
    name: "Institute for American Values",
    type: "Think Tank",
    context: "Hardwired to Connect report sponsor.",
    pages: "Ch. 12",
  },
  {
    name: "American Civil Liberties Union (ACLU)",
    type: "Legal Organization",
    context: "Video game lawsuit (Brown v. Entertainment Merchants Association).",
    pages: "Ch. 8",
  },
  {
    name: "American Psychiatric Association",
    type: "Professional Organization",
    context: "DSM-IV definition relevant to gender identity disorder.",
    pages: "Ch. 12",
  },
  {
    name: "National Institute on Alcohol Abuse and Alcoholism",
    type: "Government Agency",
    context: "Alcohol effects data.",
    pages: "Ch. 7",
  },
  {
    name: "U.S. Supreme Court",
    type: "Government / Legal",
    context: "Brown v. Entertainment Merchants Association (2011); ruled California law banning sale of violent video games to minors was unconstitutional.",
    pages: "Ch. 8",
  },
  {
    name: "U.S. Census Bureau",
    type: "Government Agency",
    context: "Household data.",
    pages: "Ch. 12",
  },
  {
    name: "Centers for Disease Control and Prevention (CDC)",
    type: "Government Agency",
    context: "Sexual activity data.",
    pages: "Ch. 6",
  },
  // Schools Referenced
  {
    name: "Mater Dei (Bethesda, Maryland)",
    type: "School (Boys)",
    context: "All-boys school; Andrew Phillips story.",
    pages: "Ch. 12",
  },
  {
    name: "Nga Tawa (near Hastings, New Zealand)",
    type: "School (Girls)",
    context: "Girls' school in New Zealand.",
    pages: "Ch. 3",
  },
  {
    name: "Lauriston (Melbourne, Australia)",
    type: "School (Girls)",
    context: "Girls' school; Howqua outdoor education program directed by Jen Willis.",
    pages: "Ch. 3",
  },
  {
    name: "St. Michael's Collegiate School (Tasmania, Australia)",
    type: "School (Girls)",
    context: "Girls' school; Freycinet abseiling program.",
    pages: "Ch. 3",
  },
  {
    name: "Korowa (Melbourne, Australia)",
    type: "School",
    context: "School teaching physics differently for girls.",
    pages: "Ch. 5",
  },
  {
    name: "Georgetown Prep",
    type: "School (Boys)",
    context: "Julie Collins, counselor: 'You can't turn a bully into a flower child. But you can turn a bully into a knight.'",
    pages: "Ch. 4",
  },
  {
    name: "Woodlin Elementary School (Silver Spring, Maryland)",
    type: "School (Elementary)",
    context: "Principal Doris Jennings banned body contact at recess.",
    pages: "Ch. 4",
  },
  {
    name: "Avon Old Farms",
    type: "School (Boys)",
    context: "Boys' school story in Ch. 12.",
    pages: "Ch. 12",
  },
  {
    name: "University School (Hunting Valley, Ohio)",
    type: "School (Boys)",
    context: "Photo permission for the book.",
    pages: "Front matter",
  },
  {
    name: "Morning Glory Public School (York Region, Ontario)",
    type: "School (Elementary)",
    context: "Snowball ban.",
    pages: "Ch. 4",
  },
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "National Survey of Family Growth (2006-2010)",
    authors: "CDC / National Center for Health Statistics",
    year: "2011",
    finding: "4,662 teens interviewed; CDC data showing decrease in teen sexual intercourse between 1988 and 2010.",
    pages: "Ch. 6, p. 108",
  },
  {
    name: "CAH (Congenital Adrenal Hyperplasia) Studies",
    authors: "Berenbaum, Hines, Servin et al.",
    year: "1992-2003",
    finding: "Multiple studies showing girls exposed to prenatal androgens display masculinized toy preferences; severity of CAH proportional to masculinity of behavior.",
    pages: "Ch. 4, pp. 48-49",
  },
  {
    name: "Byrnes, Miller & Schafer Meta-analysis",
    authors: "James Byrnes, David Miller, William Schafer",
    year: "1999",
    finding: "Largest meta-analysis of sex differences in risk taking; foundational evidence for innate gender differences in risk behavior.",
    pages: "Ch. 3",
  },
  {
    name: "Lytton & Romney Meta-analysis",
    authors: "Hugh Lytton, David Romney",
    year: "1991",
    finding: "172 studies, 28,000 children: NO evidence that parents' child rearing affects gender-typical behavior.",
    pages: "Ch. 4",
  },
  {
    name: "Dindia & Allen Meta-analysis",
    authors: "Kathryn Dindia, Mike Allen",
    year: "1992",
    finding: "205 studies on sex differences in self-disclosure; confirmed gender differences in how people share personal information.",
    pages: "Ch. 5",
  },
  {
    name: "Arashiyama West Population Study",
    authors: "Linda Marie Fedigan, Sandra Zohar",
    year: "1997",
    finding: "21 years of data on Japanese macaque sex differences in mortality; male monkeys lost to population due to risk-taking behaviors.",
    pages: "Ch. 3",
  },
  {
    name: "Gombe National Park Chimpanzee Studies",
    authors: "Jane Goodall and associates",
    year: "1994",
    finding: "Adolescent male chimps commonly kill monkeys; females never do. One male killed 76 monkeys. Only 2 females killed more than 2.",
    pages: "Ch. 4",
  },
  {
    name: "Carnegie Mellon Salary Study",
    authors: "Linda Babcock, Sara Laschever",
    year: "2003",
    finding: "Only 7% of women asked for more money vs. 57% of men; gender gap in starting salary explained by not asking.",
    pages: "Ch. 3, pp. 33, 312",
  },
  {
    name: "Swedish Transsexual Cohort Study",
    authors: "Cecilia Dhejne et al.",
    year: "2011",
    finding: "Long-term follow-up showing elevated mortality after sex reassignment surgery in Sweden.",
    pages: "Ch. 11",
  },
  {
    name: "Swedish Twin Study of Sexual Orientation",
    authors: "Niklas Langstrom et al.",
    year: "2010",
    finding: "Population study of twins in Sweden examining genetic and environmental effects on same-sex sexual behavior.",
    pages: "Ch. 10",
  },
  {
    name: "Bailey-Pillard Twin Study",
    authors: "J. Michael Bailey, Richard Pillard",
    year: "1991",
    finding: "Genetic study of male sexual orientation using twin methodology.",
    pages: "Ch. 10",
  },
  {
    name: "Joel Brain Mosaic Study",
    authors: "Daphna Joel et al.",
    year: "2015",
    finding: "Controversial claim that brains are a 'mosaic' and not distinctly male or female. Rebutted by Chekroud et al. and Glezerman.",
    pages: "Ch. 5",
  },
  {
    name: "College Board AP Exam Data (2015)",
    authors: "College Board",
    year: "2015",
    finding: "Gender breakdown across AP subjects; fewer than 1 in 4 Studio Art students were boys (24.8%).",
    pages: "Ch. 2, Ch. 5",
  },
  {
    name: "'14 and Younger' Report",
    authors: "National Campaign to Prevent Teen Pregnancy",
    year: "2003",
    finding: "Report on sexual behavior of very young adolescents.",
    pages: "Ch. 6",
  },
  {
    name: "CASA Report on Girls and Substance Abuse",
    authors: "Center on Addiction and Substance Abuse / Columbia University",
    year: "undated",
    finding: "Weight/appearance concerns increase girls' risk of substance abuse in ages 8-22.",
    pages: "Ch. 7",
  },
  {
    name: "Anderson Meta-analysis on Video Games",
    authors: "Craig Anderson et al.",
    year: "2010",
    finding: "Strong evidence linking violent video games to antisocial behaviors across Eastern and Western countries; compared to secondhand smoke/lung cancer evidence.",
    pages: "Ch. 8",
  },
  {
    name: "Grijalva Narcissism Meta-analysis",
    authors: "Emily Grijalva et al.",
    year: "2015",
    finding: "Boys more narcissistic than girls on average; meta-analytic review of gender differences in narcissism.",
    pages: "Ch. 8",
  },
  {
    name: "Marshal et al. Meta-analysis on Sexual Minority Youth",
    authors: "Michael Marshal et al.",
    year: "2011",
    finding: "Higher rates of depression and suicidality among sexual minority youth compared to heterosexual peers.",
    pages: "Ch. 10",
  },
  {
    name: "Stoleru et al. Neuroimaging Meta-analysis",
    authors: "Serge Stoleru et al.",
    year: "2012",
    finding: "Confirms sex differences in brain activation during sexual arousal across multiple neuroimaging studies.",
    pages: "Ch. 6",
  },
  {
    name: "Brown v. Entertainment Merchants Association",
    authors: "U.S. Supreme Court (Justice Alito concurrence)",
    year: "2011",
    finding: "Court ruled California law banning sale of violent video games to minors was unconstitutional (564 U.S. 786).",
    pages: "Ch. 8",
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
  title: "Why Gender Matters",
  subtitle: "What Parents and Teachers Need to Know About the Emerging Science of Sex Differences",
  author: "Leonard Sax, M.D., Ph.D.",
  year: 2017,
  publisher: "Harmony Books / Penguin Random House",
  isbn: "978-0-451-49760-3",
  description:
    "A comprehensive guide to innate sex differences in children and adolescents, covering differences in senses, risk-taking, aggression, school performance, sexuality, substance use, social media, gender nonconformity, sexual orientation, and transgender issues. Second edition updated with over 70% new material.",
};
