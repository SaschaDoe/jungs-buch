// mf-references-data.ts
// Structured reference data for "Male, Female: The Evolution of Human Sex Differences" (3rd ed.)
// Source: MaleFemale/analysis/sources-raw.md

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
  // =========================================================================
  // TIER 1: FOUNDATIONAL AUTHORS (10+ citations)
  // =========================================================================

  // ---- Evolutionary Biology / Sexual Selection ----
  {
    name: "Darwin, Charles",
    field: "Biology / Evolutionary Theory",
    works: [
      {
        title: "Journal of Researches (Voyage of the Beagle)",
        type: "book" as const,
        year: 1845,
        publisher: "John Murray",
      },
      {
        title: "On the Origin of Species",
        type: "book" as const,
        year: 1859,
        publisher: "John Murray",
      },
      {
        title: "The Descent of Man, and Selection in Relation to Sex",
        type: "book" as const,
        year: 1871,
        publisher: "John Murray",
      },
    ],
    pages: "Throughout; Chs. 1-5 especially",
    context: "Foundational figure for the entire book. Natural selection and sexual selection theory are the organizing framework. Darwin's distinction between natural and sexual selection (1871) is the starting point for Geary's argument.",
    keyFigure: true,
  },
  {
    name: "Andersson, Malte",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Sexual Selection",
        type: "book" as const,
        year: 1994,
        publisher: "Princeton University Press",
      },
    ],
    pages: "Throughout; most-cited single work (12+ times)",
    context: "Primary reference for sexual selection theory across species. The most frequently cited single work in the book, serving as the comprehensive authority on intersexual and intrasexual selection mechanisms.",
    keyFigure: true,
  },
  {
    name: "Clutton-Brock, Tim H.",
    field: "Behavioral Ecology",
    works: [
      {
        title: "Reproductive success in red deer",
        type: "study" as const,
        year: 1989,
      },
      {
        title: "The Evolution of Parental Care",
        type: "book" as const,
        year: 1991,
        publisher: "Princeton University Press",
      },
      {
        title: "Sexual selection and potential reproductive rates (with Vincent)",
        type: "article" as const,
        year: 1991,
        publisher: "Nature",
        coAuthors: ["A. C. J. Vincent"],
      },
      {
        title: "Sexual selection in females",
        type: "article" as const,
        year: 2009,
      },
      {
        title: "Mammalian societies",
        type: "book" as const,
        year: 2013,
      },
    ],
    pages: "Chs. 2-6",
    context: "Major authority on parental investment, mating systems, operational sex ratio theory, and sex role evolution. Work on red deer and mammalian mating systems provides key comparative evidence.",
    keyFigure: true,
  },
  {
    name: "Geary, David C.",
    field: "Evolutionary Psychology / Education",
    works: [
      {
        title: "Evolution and proximate expression of human paternal investment",
        type: "article" as const,
        year: 2000,
        publisher: "Psychological Bulletin",
      },
      {
        title: "Evolution of human parental investment",
        type: "article" as const,
        year: 2001,
        coAuthors: ["Mark V. Flinn"],
      },
      {
        title: "Sexual selection and brain evolution",
        type: "article" as const,
        year: "2002b",
      },
      {
        title: "The Origin of Mind: Evolution of Brain, Cognition, and General Intelligence",
        type: "book" as const,
        year: 2005,
        publisher: "American Psychological Association",
      },
      {
        title: "Evolution and development of boys' social behavior",
        type: "article" as const,
        year: 2003,
        coAuthors: ["Byrd-Craven", "Hoard", "Vigil", "Numtee"],
      },
      {
        title: "Evolution of vulnerability: Implications for sex differences in health and development",
        type: "article" as const,
        year: 2016,
      },
      {
        title: "The gender-equality paradox in science, technology, engineering, and mathematics education",
        type: "article" as const,
        year: 2018,
        publisher: "Psychological Science",
        coAuthors: ["Gijsbert Stoet"],
      },
    ],
    pages: "Throughout (23+ self-citations)",
    context: "Author of the book. Extensive self-citations of his own prior work on motivation-to-control model, evolution of fatherhood, sex differences in cognition, and the gender equality paradox. The book is the synthesis of his career-spanning research program.",
    keyFigure: true,
  },
  {
    name: "Muller, Martin N.",
    field: "Primatology / Evolutionary Anthropology",
    works: [
      {
        title: "Male chimpanzee dominance and testosterone",
        type: "study" as const,
        year: 2007,
      },
      {
        title: "Primate mating, testosterone, and chimpanzee behavior",
        type: "study" as const,
        year: 2017,
      },
    ],
    pages: "Chs. 5-8 (19+ citations, most-cited single author besides Geary)",
    context: "The single most-cited author other than Geary himself. Central source for primate male competition, testosterone effects, and chimpanzee social behavior. His work bridges comparative primatology and human evolutionary psychology.",
    keyFigure: true,
  },
  {
    name: "Goodall, Jane",
    field: "Primatology",
    works: [
      {
        title: "The Chimpanzees of Gombe: Patterns of Behavior",
        type: "book" as const,
        year: 1986,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Chs. 5, 8",
    context: "Foundational chimpanzee behavioral research. Gombe data on male-male competition, coalitions, and infanticide provides the primate baseline for understanding human sex differences.",
    keyFigure: true,
  },
  {
    name: "Eibl-Eibesfeldt, Irenaus",
    field: "Ethology / Human Behavior",
    works: [
      {
        title: "Human Ethology",
        type: "book" as const,
        year: 1989,
        publisher: "Aldine",
      },
    ],
    pages: "Chs. 5-8, 10-12",
    context: "Cross-cultural human behavior patterns. Ethnographic data from traditional societies documenting universal sex differences in play, social behavior, and aggression.",
    keyFigure: true,
  },
  {
    name: "Murdock, George Peter",
    field: "Anthropology",
    works: [
      {
        title: "Atlas of World Cultures",
        type: "book" as const,
        year: 1981,
        publisher: "University of Pittsburgh Press",
      },
    ],
    pages: "Chs. 6-8 (13+ citations)",
    context: "Cross-cultural data on marriage systems, division of labor, and polygyny. The Atlas provides the primary ethnographic dataset for demonstrating universality of sex-differentiated behavior across cultures.",
    keyFigure: true,
  },
  {
    name: "Hill, Kim",
    field: "Anthropology",
    works: [
      {
        title: "Ache Life History: The Ecology and Demography of a Foraging People",
        type: "book" as const,
        year: 1996,
        publisher: "Aldine",
        coAuthors: ["A. Magdalena Hurtado"],
      },
    ],
    pages: "Chs. 4-6 (11+ citations)",
    context: "Hunter-gatherer life history data from the Ache of Paraguay. Central source for parental investment patterns, division of labor, and life history trade-offs in a foraging society.",
    keyFigure: true,
  },
  {
    name: "Smuts, Barbara",
    field: "Primatology",
    works: [
      {
        title: "Sex and Friendship in Baboons",
        type: "book" as const,
        year: 1985,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Chs. 3, 5, 7",
    context: "Primate female social strategies and male-female friendships in baboons. Key source for female mate choice mechanisms and male protective investment in primates.",
    keyFigure: true,
  },
  {
    name: "Power, Thomas",
    field: "Developmental Psychology",
    works: [
      {
        title: "Play and Exploration in Children and Animals",
        type: "book" as const,
        year: 2000,
        publisher: "Erlbaum",
      },
    ],
    pages: "Chs. 10-11 (11+ citations)",
    context: "Primary reference for sex differences in play behavior across species and in human development. Play fighting, rough-and-tumble play, and exploration differences.",
    keyFigure: true,
  },
  {
    name: "Maccoby, Eleanor",
    field: "Developmental Psychology",
    works: [
      {
        title: "The Psychology of Sex Differences",
        type: "book" as const,
        year: 1974,
        publisher: "Stanford University Press",
        coAuthors: ["Carol Jacklin"],
      },
      {
        title: "The Two Sexes: Growing Up Apart, Coming Together",
        type: "book" as const,
        year: 1998,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Chs. 10-12 (11+ citations)",
    context: "Foundational work on sex differences in children's social development. Gender segregation in play, same-sex peer preferences, and developmental divergence between boys and girls.",
    keyFigure: true,
  },
  {
    name: "Whiting, Beatrice B.",
    field: "Anthropology",
    works: [
      {
        title: "Children of Different Worlds: The Formation of Social Behavior",
        type: "book" as const,
        year: 1988,
        publisher: "Harvard University Press",
        coAuthors: ["Carolyn P. Edwards"],
      },
    ],
    pages: "Chs. 10-11 (10+ citations)",
    context: "Cross-cultural studies of children's social behavior in six cultures. Demonstrates that sex differences in play and social behavior emerge universally across very different cultural environments.",
    keyFigure: true,
  },
  {
    name: "Adkins-Regan, Elizabeth",
    field: "Behavioral Neuroendocrinology",
    works: [
      {
        title: "Hormones and Animal Social Behavior",
        type: "book" as const,
        year: 2005,
        publisher: "Princeton University Press",
      },
    ],
    pages: "Chs. 2-4, 8 (9+ citations)",
    context: "Primary reference for hormonal mechanisms underlying sexual behavior and sex differentiation. Bridges endocrinology with behavioral ecology.",
    keyFigure: true,
  },
  {
    name: "Tanner, J. Michael",
    field: "Human Biology",
    works: [
      {
        title: "Fetus into Man: Physical Growth from Conception to Maturity",
        type: "book" as const,
        year: 1990,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Chs. 4, 10 (9+ citations)",
    context: "Definitive reference for human physical growth patterns. Documents sex differences in growth rates, puberty timing, and physical maturation.",
    keyFigure: true,
  },
  {
    name: "Stearns, Stephen C.",
    field: "Life History Biology",
    works: [
      {
        title: "The Evolution of Life Histories",
        type: "book" as const,
        year: 1992,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Ch. 4 (9+ citations)",
    context: "Foundational life history theory. Trade-offs between growth, reproduction, and survival that shape sex differences in development and aging.",
    keyFigure: true,
  },
  {
    name: "Roff, Derek",
    field: "Life History Biology",
    works: [
      {
        title: "The Evolution of Life Histories: Theory and Analysis",
        type: "book" as const,
        year: 1992,
        publisher: "Chapman & Hall",
      },
    ],
    pages: "Ch. 4 (9+ citations)",
    context: "Life history theory and quantitative genetics of fitness-related traits. Complementary to Stearns on theoretical framework for sex differences.",
    keyFigure: true,
  },
  {
    name: "Betzig, Laura",
    field: "Evolutionary Anthropology",
    works: [
      {
        title: "Despotism and Differential Reproduction: A Darwinian View of History",
        type: "book" as const,
        year: 1986,
        publisher: "Aldine",
      },
      {
        title: "Means, variances, and ranges in reproductive success",
        type: "article" as const,
        year: 2012,
        publisher: "Evolution and Human Behavior",
      },
    ],
    pages: "Chs. 6, 8",
    context: "Historical data on extreme male reproductive variance. Empires, harems, and differential reproduction demonstrate that high-status males historically monopolized reproduction.",
    keyFigure: true,
  },
  {
    name: "Dunbar, Robin",
    field: "Evolutionary Psychology / Primatology",
    works: [
      {
        title: "Primate social group size and neocortex",
        type: "article" as const,
        year: 1993,
      },
      {
        title: "Grooming, gossip, and the evolution of language",
        type: "book" as const,
        year: 1996,
        publisher: "Harvard University Press",
      },
      {
        title: "The social brain hypothesis and its relevance to social psychology",
        type: "article" as const,
        year: 2018,
      },
    ],
    pages: "Chs. 5, 9, 12",
    context: "Social brain hypothesis linking group size to neocortex size. Language evolution and social cognition as drivers of brain expansion.",
    keyFigure: true,
  },
  {
    name: "Burghardt, Gordon",
    field: "Ethology",
    works: [
      {
        title: "The Genesis of Animal Play: Testing the Limits",
        type: "book" as const,
        year: 2005,
        publisher: "MIT Press",
      },
    ],
    pages: "Chs. 10-11 (8+ citations)",
    context: "Comprehensive theory of play behavior in animals. Provides evolutionary framework for understanding sex differences in play across species.",
    keyFigure: true,
  },

  // =========================================================================
  // TIER 2: MAJOR CONTRIBUTORS (5-9 citations)
  // =========================================================================

  // ---- Evolutionary Theory ----
  {
    name: "Trivers, Robert",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Parental Investment and Sexual Selection",
        type: "article" as const,
        year: 1972,
        publisher: "In Campbell (Ed.), Sexual Selection and the Descent of Man, Aldine",
      },
    ],
    pages: "Chs. 2-3, 6",
    context: "Foundational parental investment theory. The asymmetry in parental investment (females invest more) drives sexual selection dynamics. One of the most important theoretical papers in the book.",
    keyFigure: true,
  },
  {
    name: "Williams, George C.",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Adaptation and Natural Selection",
        type: "book" as const,
        year: 1966,
        publisher: "Princeton University Press",
      },
      {
        title: "Sex and Evolution",
        type: "book" as const,
        year: 1975,
        publisher: "Princeton University Press",
      },
    ],
    pages: "Chs. 2-4",
    context: "Rigorous adaptationist framework. The gene-level perspective on natural selection and the evolution of sex provide theoretical scaffolding for the book.",
    keyFigure: true,
  },
  {
    name: "Hamilton, W. D.",
    field: "Evolutionary Biology",
    works: [
      {
        title: "The genetical evolution of social behaviour I, II",
        type: "article" as const,
        year: 1964,
        publisher: "Journal of Theoretical Biology",
      },
      {
        title: "Heritable true fitness and bright birds: A role for parasites?",
        type: "article" as const,
        year: 1982,
        publisher: "Science",
        coAuthors: ["Marlene Zuk"],
      },
    ],
    pages: "Chs. 2-3, 7",
    context: "Kin selection theory and parasite-mediated sexual selection (Hamilton-Zuk hypothesis). MHC-based mate choice and the evolution of immune-signaling ornaments.",
    keyFigure: true,
  },
  {
    name: "Fisher, R. A.",
    field: "Statistics / Genetics",
    works: [
      {
        title: "The Genetical Theory of Natural Selection",
        type: "book" as const,
        year: 1930,
        publisher: "Clarendon Press",
      },
    ],
    pages: "Chs. 2-3",
    context: "Runaway sexual selection model. Fisher's theory that female preferences and male traits can co-evolve in a self-reinforcing feedback loop.",
    keyFigure: true,
  },
  {
    name: "Zahavi, Amotz",
    field: "Behavioral Ecology",
    works: [
      {
        title: "Mate selection: A selection for a handicap",
        type: "article" as const,
        year: 1975,
        publisher: "Journal of Theoretical Biology",
      },
    ],
    pages: "Chs. 2-3, 7",
    context: "Handicap principle: costly signals must be honest because they are expensive to produce. Provides the theoretical basis for why ornaments indicate genuine quality.",
    keyFigure: true,
  },
  {
    name: "Alexander, Richard D.",
    field: "Evolutionary Biology",
    works: [
      {
        title: "The Biology of Moral Systems",
        type: "book" as const,
        year: 1987,
        publisher: "Aldine",
      },
      {
        title: "Evolution of the human psyche",
        type: "article" as const,
        year: 1989,
      },
    ],
    pages: "Chs. 5, 8-9",
    context: "Social competition as the driving force in human evolution. Intergroup conflict and coalitional competition shaping human cognitive and social traits.",
    keyFigure: true,
  },
  {
    name: "Buss, David M.",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Sex differences in human mate preferences",
        type: "article" as const,
        year: 1989,
        publisher: "Behavioral and Brain Sciences",
      },
      {
        title: "The evolution of desire: Strategies of human mating",
        type: "book" as const,
        year: 2003,
        publisher: "Basic Books",
      },
    ],
    pages: "Chs. 7-8",
    context: "Cross-cultural mate preference research. Women prefer resource-holding potential and status; men prefer youth and fertility cues. Intrasexual competition and sexual jealousy.",
    keyFigure: true,
  },
  {
    name: "Emlen, Stephen T.",
    field: "Behavioral Ecology",
    works: [
      {
        title: "Ecology, sexual selection, and the evolution of mating systems",
        type: "article" as const,
        year: 1977,
        publisher: "Science",
        coAuthors: ["Lewis W. Oring"],
      },
    ],
    pages: "Chs. 3, 6",
    context: "Ecological framework for mating systems. How resource distribution and operational sex ratio shape whether species are monogamous, polygynous, or polyandrous.",
    keyFigure: true,
  },

  // ---- Primatology / Anthropology ----
  {
    name: "Wrangham, Richard",
    field: "Primatology",
    works: [
      {
        title: "An ecological model of female-bonded primate groups",
        type: "article" as const,
        year: 1980,
        publisher: "Behaviour",
      },
      {
        title: "The Goodness Paradox: The Strange Relationship Between Virtue and Violence in Human Evolution",
        type: "book" as const,
        year: 2019,
        publisher: "Pantheon",
      },
    ],
    pages: "Chs. 5, 8",
    context: "Chimpanzee coalitional violence and lethal intergroup aggression. Male bonding, cooperative hunting, and warfare as selective pressures in human evolution.",
  },
  {
    name: "Chagnon, Napoleon A.",
    field: "Anthropology",
    works: [
      {
        title: "Life histories, blood revenge, and warfare in a tribal population",
        type: "article" as const,
        year: 1988,
        publisher: "Science",
      },
    ],
    pages: "Ch. 8",
    context: "Yanomamo studies on warfare and male reproductive success. Men who killed (unokai) had significantly more wives and offspring than non-killers.",
  },
  {
    name: "Chapais, Brian",
    field: "Primatology",
    works: [
      {
        title: "Primeval Kinship: How Pair-Bonding Gave Birth to Human Society",
        type: "book" as const,
        year: 2008,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Chs. 5-6",
    context: "Evolutionary origins of pair-bonding and kinship in primates. How the transition from promiscuity to pair-bonding reshaped human social organization.",
  },
  {
    name: "Konner, Melvin",
    field: "Anthropology",
    works: [
      {
        title: "The Evolution of Childhood: Relationships, Emotion, Mind",
        type: "book" as const,
        year: 2010,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Chs. 10-11",
    context: "Comprehensive evolutionary account of human childhood development. Cross-cultural data on sex differences in children's behavior from hunter-gatherer societies.",
  },
  {
    name: "Keeley, Lawrence",
    field: "Archaeology",
    works: [
      {
        title: "War Before Civilization: The Myth of the Peaceful Savage",
        type: "book" as const,
        year: 1996,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Ch. 8",
    context: "Archaeological evidence that prehistoric warfare was frequent and lethal. Challenges the myth of the peaceful primitive and documents coalition-based male violence as a pervasive feature of human history.",
  },
  {
    name: "Flinn, Mark V.",
    field: "Evolutionary Anthropology",
    works: [
      {
        title: "Resource distribution, social competition, and mating patterns in human societies",
        type: "article" as const,
        year: 1986,
        coAuthors: ["Bobbi S. Low"],
      },
    ],
    pages: "Chs. 6-7",
    context: "Cross-cultural analysis of marriage patterns and resource distribution. Co-author with Geary on australopithecine social structure and evolution of human parental investment.",
  },

  // ---- Psychology / Cognition ----
  {
    name: "Hall, Judith A.",
    field: "Social Psychology",
    works: [
      {
        title: "Nonverbal Sex Differences: Communication Accuracy and Expressive Style",
        type: "book" as const,
        year: 1984,
        publisher: "Johns Hopkins University Press",
      },
      {
        title: "Nonverbal communication in human interaction (8th ed.)",
        type: "book" as const,
        year: 2019,
        coAuthors: ["Mark L. Knapp"],
      },
    ],
    pages: "Ch. 12",
    context: "Authoritative source on sex differences in nonverbal communication. Women superior at decoding facial expressions, body language, and emotional tone.",
  },
  {
    name: "Hakim, Catherine",
    field: "Sociology",
    works: [
      {
        title: "Work-Lifestyle Choices in the 21st Century: Preference Theory",
        type: "book" as const,
        year: 2000,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Ch. 14",
    context: "Preference theory: women's occupational outcomes partly reflect genuine preference differences, not just discrimination. Challenges purely structural explanations for the gender gap in STEM and executive positions.",
  },
  {
    name: "Freedman, Daniel G.",
    field: "Developmental Psychology",
    works: [
      {
        title: "Human Infancy: An Evolutionary Perspective",
        type: "book" as const,
        year: 1974,
        publisher: "Erlbaum",
      },
    ],
    pages: "Ch. 10",
    context: "Pioneering work on infant sex differences. Documents behavioral sex differences apparent from birth, before significant socialization effects.",
  },
  {
    name: "Daly, Martin",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Homicide",
        type: "book" as const,
        year: 1988,
        publisher: "Aldine",
        coAuthors: ["Margo Wilson"],
      },
    ],
    pages: "Chs. 8, 14",
    context: "Evolutionary analysis of homicide patterns. Young men as primary perpetrators and victims, stepparent effects, and sexual jealousy as motives. Foundational for evolutionary psychology of violence.",
  },
  {
    name: "Halpern, Diane F.",
    field: "Psychology",
    works: [
      {
        title: "Sex Differences in Cognitive Abilities (3rd ed.)",
        type: "book" as const,
        year: 2000,
        publisher: "Erlbaum",
      },
    ],
    pages: "Chs. 12-14",
    context: "Comprehensive review of sex differences in cognitive abilities. Verbal, spatial, and mathematical differences with attention to both biological and environmental factors.",
  },
  {
    name: "Baron-Cohen, Simon",
    field: "Psychology",
    works: [
      {
        title: "The Essential Difference: Male and Female Brains and the Truth About Autism",
        type: "book" as const,
        year: 2003,
        publisher: "Basic Books",
      },
      {
        title: "Sex differences in the brain: Implications for explaining autism",
        type: "article" as const,
        year: 2005,
        publisher: "Science",
        coAuthors: ["Rebecca Knickmeyer", "Matthew Belmonte"],
      },
    ],
    pages: "Chs. 12, 14",
    context: "Empathizing-systemizing theory of sex differences. Males tilted toward systemizing (understanding mechanical systems), females toward empathizing (understanding people).",
  },
  {
    name: "Del Giudice, Marco",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Sex differences in romantic attachment",
        type: "article" as const,
        year: 2009,
      },
      {
        title: "Evolutionary psychopathology",
        type: "article" as const,
        year: 2018,
      },
    ],
    pages: "Chs. 11, 14",
    context: "Developmental sex differences and evolutionary psychopathology. Integrates life history theory with psychological development to explain sex-differentiated vulnerabilities.",
  },
  {
    name: "Martel, Michelle M.",
    field: "Clinical Psychology",
    works: [
      {
        title: "Sexual selection and sex differences in the prevalence of childhood externalizing and adolescent internalizing disorders",
        type: "article" as const,
        year: 2013,
        publisher: "Psychological Bulletin",
      },
    ],
    pages: "Ch. 14",
    context: "Evolutionary framework for sex differences in psychopathology. Boys more prone to externalizing disorders; girls to internalizing disorders, consistent with sexual selection pressures.",
  },
  {
    name: "Rose, Amanda J.",
    field: "Developmental Psychology",
    works: [
      {
        title: "Sex differences in peer relationships",
        type: "article" as const,
        year: 2006,
        coAuthors: ["Karen D. Rudolph"],
      },
    ],
    pages: "Ch. 11",
    context: "Meta-analytic review of sex differences in children's social development. Girls' friendships characterized by intimacy and co-rumination; boys' by shared activity and competition.",
  },

  // ---- Spatial Cognition / Education ----
  {
    name: "Silverman, Irwin",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Sex differences in spatial abilities: Evolutionary theory and data",
        type: "article" as const,
        year: 1992,
        coAuthors: ["Marion Eals"],
      },
    ],
    pages: "Ch. 13",
    context: "Foraging hypothesis for spatial sex differences. Males better at mental rotation and navigation (hunting); females better at object location memory (gathering).",
  },
  {
    name: "Linn, Marcia C.",
    field: "Psychology",
    works: [
      {
        title: "Emergence and characterization of sex differences in spatial ability: A meta-analysis",
        type: "article" as const,
        year: 1985,
        publisher: "Child Development",
        coAuthors: ["Anne C. Petersen"],
      },
    ],
    pages: "Ch. 13",
    context: "Major meta-analysis documenting sex differences in spatial abilities. Mental rotation shows the largest and most consistent sex difference favoring males.",
  },
  {
    name: "Hedges, Larry V.",
    field: "Education",
    works: [
      {
        title: "Sex differences in mental test scores, variability, and numbers of high-scoring individuals",
        type: "article" as const,
        year: 1995,
        publisher: "Science",
        coAuthors: ["Amy Nowell"],
      },
    ],
    pages: "Chs. 13-14 (6+ citations)",
    context: "Greater male variability in cognitive test scores. More males at both extremes (highest and lowest). Key evidence for understanding sex differences in representation at the tails of distributions.",
  },
  {
    name: "Stoet, Gijsbert",
    field: "Education / Psychology",
    works: [
      {
        title: "The gender-equality paradox in science, technology, engineering, and mathematics education",
        type: "article" as const,
        year: 2018,
        publisher: "Psychological Science",
        coAuthors: ["David C. Geary"],
      },
    ],
    pages: "Ch. 14 (6+ citations)",
    context: "Gender equality paradox: countries with greater gender equality show larger sex differences in STEM participation, not smaller. Challenges the assumption that equality eliminates sex differences.",
  },

  // ---- Human Biology / Growth ----
  {
    name: "Bogin, Barry",
    field: "Human Biology",
    works: [
      {
        title: "Patterns of Human Growth (2nd ed.)",
        type: "book" as const,
        year: 1999,
        publisher: "Cambridge University Press",
      },
    ],
    pages: "Chs. 4, 10",
    context: "Human growth patterns and their evolutionary significance. Sex differences in growth trajectories, puberty timing, and the evolution of the uniquely human childhood stage.",
  },
  {
    name: "Gray, Peter B.",
    field: "Biological Anthropology",
    works: [
      {
        title: "Evolution and Human Sexual Behavior",
        type: "book" as const,
        year: 2013,
        publisher: "Harvard University Press",
        coAuthors: ["Justin R. Garcia"],
      },
      {
        title: "Testosterone, pair bonding, and fatherhood",
        type: "article" as const,
        year: 2017,
      },
    ],
    pages: "Chs. 6, 8",
    context: "Testosterone decreases in paired and fathering men across cultures. Links hormonal changes to paternal investment trade-offs.",
  },

  // ---- Behavioral Ecology ----
  {
    name: "Parker, Geoffrey A.",
    field: "Evolutionary Biology",
    works: [
      {
        title: "The origin and evolution of gamete dimorphism and the male-female phenomenon",
        type: "article" as const,
        year: 1972,
        publisher: "Journal of Theoretical Biology",
        coAuthors: ["R. R. Baker", "V. G. F. Smith"],
      },
    ],
    pages: "Ch. 2",
    context: "Anisogamy theory: the origin of two sexes from gamete size dimorphism. The fundamental asymmetry between small, cheap sperm and large, costly eggs is the ultimate cause of sex differences.",
    keyFigure: true,
  },
  {
    name: "Dawkins, Richard",
    field: "Evolutionary Biology",
    works: [
      {
        title: "The Selfish Gene",
        type: "book" as const,
        year: 1989,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Ch. 2",
    context: "Gene's-eye view of evolution. The selfish gene framework provides the theoretical lens for understanding parental investment conflicts and sexual selection.",
  },
  {
    name: "Ridley, Matt",
    field: "Evolutionary Biology",
    works: [
      {
        title: "The Red Queen: Sex and the Evolution of Human Nature",
        type: "book" as const,
        year: 1993,
        publisher: "Viking",
      },
    ],
    pages: "Chs. 2-3",
    context: "Red Queen hypothesis: sexual reproduction maintained by parasite-host arms race. Accessible synthesis of sexual selection theory relevant to human mate choice.",
  },
  {
    name: "Cronin, Helena",
    field: "Philosophy of Biology",
    works: [
      {
        title: "The Ant and the Peacock: Altruism and Sexual Selection from Darwin to Today",
        type: "book" as const,
        year: 1991,
        publisher: "Cambridge University Press",
      },
    ],
    pages: "Chs. 2-3",
    context: "Historical and philosophical analysis of sexual selection theory from Darwin through the modern synthesis. Reconciles altruism and sexual selection.",
  },
  {
    name: "West-Eberhard, Mary Jane",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Sexual selection, social competition, and evolution",
        type: "article" as const,
        year: 1983,
      },
    ],
    pages: "Chs. 3, 8",
    context: "Broadened sexual selection theory to include social competition. Argues that competition for social status, not just mating, is a major selective force.",
  },

  // ---- Primatology (additional) ----
  {
    name: "Dixson, Alan F.",
    field: "Primatology",
    works: [
      {
        title: "Primate Sexuality: Comparative Studies of the Prosimians, Monkeys, Apes, and Humans (3rd ed.)",
        type: "book" as const,
        year: 2012,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Chs. 3, 5",
    context: "Comparative primate sexuality. Sperm competition, genital morphology, and mating systems across primate species.",
  },
  {
    name: "Harcourt, Alexander H.",
    field: "Primatology",
    works: [
      {
        title: "Gorilla Society: Conflict, Compromise, and Cooperation Between the Sexes",
        type: "book" as const,
        year: 2007,
        publisher: "University of Chicago Press",
        coAuthors: ["Kelly J. Stewart"],
      },
    ],
    pages: "Ch. 5",
    context: "Gorilla social organization and mating patterns. Male gorillas as extreme example of sexually selected dimorphism and single-male harem defense.",
  },

  // ---- Anthropology / Cross-Cultural (additional) ----
  {
    name: "Hewlett, Barry S.",
    field: "Anthropology",
    works: [
      {
        title: "Intimate Fathers: The Nature and Context of Aka Pygmy Paternal Infant Care",
        type: "book" as const,
        year: 1991,
        publisher: "University of Michigan Press",
      },
    ],
    pages: "Ch. 6",
    context: "Aka Pygmy fathers hold infants more than fathers in any other society. Demonstrates that high paternal investment is possible in foraging societies and varies with ecological context.",
  },
  {
    name: "Marlowe, Frank W.",
    field: "Anthropology",
    works: [
      {
        title: "The Hadza: Hunter-Gatherers of Tanzania",
        type: "book" as const,
        year: 2010,
        publisher: "University of California Press",
      },
    ],
    pages: "Chs. 5-6",
    context: "Hadza hunter-gatherer division of labor, mate preferences, and paternal investment. Key contemporary foraging society data.",
  },
  {
    name: "Borgerhoff Mulder, Monique",
    field: "Behavioral Ecology / Anthropology",
    works: [
      {
        title: "Kipsigis women's preferences for wealthy men: Evidence for female choice in mammals?",
        type: "article" as const,
        year: 1990,
        publisher: "Behavioral Ecology and Sociobiology",
      },
    ],
    pages: "Ch. 7",
    context: "Female mate choice documented in a human population (Kipsigis of Kenya). Women choose wealthier men, paralleling female choice for resource-holding males in other species.",
  },
  {
    name: "Henrich, Joseph",
    field: "Cultural Evolution",
    works: [
      {
        title: "The evolution of prestige: Freely conferred deference as a mechanism for enhancing the benefits of cultural transmission",
        type: "article" as const,
        year: 2001,
        publisher: "Evolution and Human Behavior",
        coAuthors: ["Francisco Gil-White"],
      },
      {
        title: "The puzzle of monogamous marriage",
        type: "article" as const,
        year: 2012,
        publisher: "Philosophical Transactions of the Royal Society B",
        coAuthors: ["Robert Boyd", "Peter Richerson"],
      },
    ],
    pages: "Chs. 8, 6",
    context: "Prestige vs. dominance hierarchies in human status competition. Also argues that socially imposed monogamy reduces male-male competition and is adaptive at the group level.",
  },
  {
    name: "Boehm, Christopher",
    field: "Anthropology",
    works: [
      {
        title: "Hierarchy in the Forest: The Evolution of Egalitarian Behavior",
        type: "book" as const,
        year: 1999,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Ch. 8",
    context: "Reverse dominance hierarchies in human hunter-gatherer societies. Coalitions of subordinates suppress would-be despots, creating egalitarianism.",
  },
  {
    name: "Brown, Donald E.",
    field: "Anthropology",
    works: [
      {
        title: "Human Universals",
        type: "book" as const,
        year: 1991,
        publisher: "Temple University Press",
      },
    ],
    pages: "Ch. 9",
    context: "Catalog of cultural universals that appear in all known human societies. Sex differences in behavior, roles, and interests are among the documented universals.",
  },
  {
    name: "Symons, Donald",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "The Evolution of Human Sexuality",
        type: "book" as const,
        year: 1979,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Chs. 7-8",
    context: "Pioneering application of evolutionary theory to human sexual behavior. Male visual arousal, female selectivity, and the evolutionary logic of sex differences in desire.",
  },

  // ---- Developmental Psychology (additional) ----
  {
    name: "Lever, Janet",
    field: "Sociology",
    works: [
      {
        title: "Sex differences in the complexity of children's play and games",
        type: "article" as const,
        year: 1978,
        publisher: "American Sociological Review",
      },
    ],
    pages: "Ch. 11 (6+ citations)",
    context: "Boys' games are more complex, rule-governed, and competitive; girls' play emphasizes dyadic interaction and cooperation. Foundational observational data on play sex differences.",
  },
  {
    name: "Alexander, Gerianne M.",
    field: "Developmental Psychology",
    works: [
      {
        title: "An evolutionary perspective on sex-typed toy preferences: Pink, blue, and the brain",
        type: "article" as const,
        year: 2003,
        publisher: "Archives of Sexual Behavior",
      },
    ],
    pages: "Ch. 10",
    context: "Visual pathway sex differences underlying toy preferences. Boys prefer objects that can be propelled through space; girls prefer objects with faces. Even vervet monkeys show sex-typed toy preferences.",
  },
  {
    name: "Parker, Jeffrey G.",
    field: "Developmental Psychology",
    works: [
      {
        title: "Peer relations, child development, and adjustment",
        type: "article" as const,
        year: 1993,
        publisher: "Psychological Bulletin",
        coAuthors: ["Steven R. Asher"],
      },
      {
        title: "Friendship and friendship quality in middle childhood (with Seal)",
        type: "article" as const,
        year: 1996,
        coAuthors: ["Joann Seal"],
      },
    ],
    pages: "Ch. 11",
    context: "Children's friendships and peer relationships. Sex differences in friendship structure, conflict resolution, and social network organization.",
  },
  {
    name: "Benenson, Joyce F.",
    field: "Psychology",
    works: [
      {
        title: "Warriors and Worriers: The Survival of the Sexes",
        type: "book" as const,
        year: 2014,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Chs. 11-12",
    context: "Sex differences in social strategies from an evolutionary perspective. Males form coalitions for intergroup competition; females prioritize dyadic relationships and indirect competition.",
  },

  // ---- Neuroscience ----
  {
    name: "Arnold, Arthur P.",
    field: "Neuroscience",
    works: [
      {
        title: "A general theory of sexual differentiation",
        type: "article" as const,
        year: 2017,
        publisher: "Journal of Neuroscience Research",
      },
    ],
    pages: "Ch. 4",
    context: "Sex chromosome effects on brain and behavior beyond gonadal hormones. Four core genotypes model demonstrating direct genetic effects on sex differences.",
  },
  {
    name: "Damasio, Antonio",
    field: "Neuroscience",
    works: [
      {
        title: "Looking for Spinoza: Joy, Sorrow, and the Feeling Brain",
        type: "book" as const,
        year: 2003,
        publisher: "Harcourt",
      },
    ],
    pages: "Ch. 9",
    context: "Somatic marker hypothesis: emotions guide rational decision-making. Relevant to sex differences in emotional processing and social cognition.",
  },

  // ---- Additional Significant Authors ----
  {
    name: "Lippa, Richard A.",
    field: "Psychology",
    works: [
      {
        title: "Sex differences in personality traits and gender-related occupational preferences across 53 nations",
        type: "article" as const,
        year: 2007,
        publisher: "Archives of Sexual Behavior",
      },
    ],
    pages: "Ch. 14",
    context: "Cross-cultural sex differences in personality and vocational interests. In more gender-equal nations, sex differences in interests grow larger, not smaller.",
  },
  {
    name: "Conroy-Beam, Daniel",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Mate preferences across 36 cultures",
        type: "article" as const,
        year: 2015,
      },
    ],
    pages: "Ch. 7",
    context: "Updated large-scale cross-cultural replication of Buss's mate preference research. Confirms universal sex differences in mate preferences with modern methodology.",
  },
  {
    name: "Li, Norman P.",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "The necessities and luxuries of mate preferences",
        type: "article" as const,
        year: 2002,
        publisher: "Journal of Personality and Social Psychology",
      },
    ],
    pages: "Ch. 7",
    context: "Budget allocation method for studying mate preferences. Physical attractiveness is a necessity for men; resources and status are necessities for women.",
  },
  {
    name: "Thomas, Jerry R.",
    field: "Kinesiology",
    works: [
      {
        title: "Gender differences across age in motor performance: A meta-analysis",
        type: "article" as const,
        year: 1985,
        publisher: "Psychological Bulletin",
        coAuthors: ["Karen E. French"],
      },
    ],
    pages: "Ch. 10",
    context: "Meta-analysis of sex differences in motor performance. Throwing distance/accuracy shows one of the largest sex differences in any cognitive or physical domain, emerging by age 3.",
  },
  {
    name: "Irons, William",
    field: "Anthropology",
    works: [
      {
        title: "Cultural and biological success",
        type: "article" as const,
        year: 1979,
        publisher: "In Chagnon & Irons (Eds.), Evolutionary Biology and Human Social Behavior",
      },
    ],
    pages: "Ch. 8",
    context: "Cultural success concept: culturally defined markers of success translate into reproductive success. Wealth, status, and prestige all correlate with male reproductive output.",
  },
  {
    name: "Mathew, Sarah",
    field: "Anthropology",
    works: [
      {
        title: "Punishment sustains large-scale cooperation in prestate warfare",
        type: "article" as const,
        year: 2011,
        publisher: "Proceedings of the National Academy of Sciences",
        coAuthors: ["Robert Boyd"],
      },
    ],
    pages: "Ch. 8",
    context: "Turkana pastoralist raiding and cooperation. Punishment mechanisms sustain male coalition cooperation in intergroup conflict, connecting warfare to altruism.",
  },
  {
    name: "Sear, Rebecca",
    field: "Anthropology",
    works: [
      {
        title: "Who keeps children alive? A review of the effects of kin on child survival",
        type: "article" as const,
        year: 2008,
        publisher: "Evolution and Human Behavior",
        coAuthors: ["Ruth Mace"],
      },
    ],
    pages: "Ch. 6",
    context: "Cross-cultural review of kin effects on child survival. Maternal grandmothers have the strongest positive effect; father presence effects are variable across societies.",
  },
  {
    name: "Plavcan, J. Michael",
    field: "Paleoanthropology",
    works: [
      {
        title: "Sexual dimorphism in primate evolution",
        type: "article" as const,
        year: 2001,
        publisher: "American Journal of Physical Anthropology",
      },
      {
        title: "Body size, size variation, and sexual size dimorphism in early Homo",
        type: "article" as const,
        year: 2012,
      },
    ],
    pages: "Ch. 5",
    context: "Primate body size dimorphism as an indicator of mating system and male-male competition intensity. Tracking dimorphism changes through hominin evolution.",
  },
  {
    name: "Grabowski, Mark",
    field: "Paleoanthropology",
    works: [
      {
        title: "Body mass estimates of hominin fossils and the evolution of human body size",
        type: "article" as const,
        year: 2015,
        publisher: "Journal of Human Evolution",
      },
    ],
    pages: "Ch. 5",
    context: "Revised body mass estimates for hominin fossils showing changes in sexual size dimorphism over human evolutionary history.",
  },
  {
    name: "Janicke, Tim",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Darwinian sex roles confirmed across the animal kingdom",
        type: "article" as const,
        year: 2016,
        publisher: "Science Advances",
      },
    ],
    pages: "Ch. 3",
    context: "Major meta-analysis confirming Bateman's principles (greater male variance in reproductive success, stronger sexual selection on males) across the animal kingdom.",
  },
  {
    name: "Bateman, Angus J.",
    field: "Genetics",
    works: [
      {
        title: "Intrasexual selection in Drosophila",
        type: "article" as const,
        year: 1948,
        publisher: "Heredity",
      },
    ],
    pages: "Ch. 3",
    context: "Bateman's principle: males have higher variance in reproductive success than females because male fitness increases with number of mates. Foundational empirical test of sexual selection theory.",
    keyFigure: true,
  },
  {
    name: "Grant, Peter R.",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Unpredictable evolution in a 30-year study of Darwin's finches",
        type: "article" as const,
        year: 2002,
        publisher: "Science",
        coAuthors: ["B. Rosemary Grant"],
      },
      {
        title: "40 Years of Evolution: Darwin's Finches on Daphne Major Island",
        type: "book" as const,
        year: 2014,
        publisher: "Princeton University Press",
        coAuthors: ["B. Rosemary Grant"],
      },
    ],
    pages: "Ch. 2",
    context: "Darwin's finches long-term study. Real-time observation of natural and sexual selection operating on beak morphology. Demonstrates sexual selection principles in a wild population.",
  },
  {
    name: "Scheidel, Walter",
    field: "History",
    works: [
      {
        title: "The Great Leveler: Violence and the History of Inequality from the Stone Age to the Twenty-First Century",
        type: "book" as const,
        year: 2017,
        publisher: "Princeton University Press",
      },
    ],
    pages: "Ch. 8",
    context: "Historical inequality in wealth and reproductive success. Extreme resource monopolization by elite males throughout recorded history.",
  },
  {
    name: "Marmot, Michael",
    field: "Epidemiology",
    works: [
      {
        title: "The Status Syndrome: How Social Standing Affects Our Health and Longevity",
        type: "book" as const,
        year: 2004,
        publisher: "Times Books",
      },
    ],
    pages: "Ch. 8",
    context: "Social status gradients in health outcomes. Low status is toxic; the stress of subordination has physiological consequences relevant to male status competition.",
  },
  {
    name: "Kahneman, Daniel",
    field: "Psychology",
    works: [
      {
        title: "Thinking, Fast and Slow",
        type: "book" as const,
        year: 2011,
        publisher: "Farrar, Straus and Giroux",
      },
    ],
    pages: "Ch. 9",
    context: "Dual-process theory of cognition. Fast (intuitive) and slow (deliberate) processing relevant to evolved cognitive modules and folk domains.",
  },
  {
    name: "Bandura, Albert",
    field: "Psychology",
    works: [
      {
        title: "Social cognitive theory: An agentic perspective",
        type: "article" as const,
        year: 2001,
        publisher: "Annual Review of Psychology",
      },
    ],
    pages: "Ch. 9",
    context: "Social learning theory and self-efficacy. Represents the standard social science model that Geary engages with but ultimately argues is insufficient to explain sex differences.",
  },
  {
    name: "Lane, Nick",
    field: "Biochemistry",
    works: [
      {
        title: "Power, Sex, Suicide: Mitochondria and the Meaning of Life",
        type: "book" as const,
        year: 2005,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Ch. 2",
    context: "Mitochondrial biology and the evolution of sex. The deep biochemical reasons why sexual reproduction exists and why there are exactly two sexes.",
  },
  {
    name: "Shuster, Stephen M.",
    field: "Behavioral Ecology",
    works: [
      {
        title: "Mating Systems and Strategies",
        type: "book" as const,
        year: 2003,
        publisher: "Princeton University Press",
        coAuthors: ["Michael J. Wade"],
      },
    ],
    pages: "Ch. 3",
    context: "Comprehensive framework for understanding mating system variation. Alternative mating tactics, reproductive skew, and the ecology of mating patterns.",
  },
  {
    name: "Collis, K.",
    field: "Behavioral Ecology",
    works: [
      {
        title: "Female choice in the satin bowerbird",
        type: "article" as const,
        year: 1992,
        coAuthors: ["Gerald Borgia"],
      },
    ],
    pages: "Ch. 3",
    context: "Bowerbird female choice research. Elaborate male displays (bower construction) as extended phenotype demonstrating quality to choosy females.",
  },
  {
    name: "Roney, James R.",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Ovarian hormones and female mating psychology",
        type: "article" as const,
        year: 2013,
        coAuthors: ["Zachary Simmons"],
      },
    ],
    pages: "Ch. 7",
    context: "Hormonal influences on female mate preferences across the ovulatory cycle. Women show shifted preferences toward masculine, dominant males during peak fertility.",
  },
  {
    name: "Christov-Moore, Leonardo",
    field: "Neuroscience",
    works: [
      {
        title: "Empathy: Gender effects in brain and behavior",
        type: "article" as const,
        year: 2014,
        publisher: "Neuroscience & Biobehavioral Reviews",
      },
    ],
    pages: "Ch. 12",
    context: "Neuroimaging evidence for sex differences in empathy. Female advantage in emotional empathy reflected in mirror neuron system and limbic activation patterns.",
  },
  {
    name: "Nicolson, Nancy A.",
    field: "Primatology",
    works: [
      {
        title: "Infants, mothers, and other females",
        type: "article" as const,
        year: 1987,
        publisher: "In Smuts et al. (Eds.), Primate Societies",
      },
    ],
    pages: "Ch. 5",
    context: "Primate maternal behavior and alloparenting. Female investment in infant care across primate species.",
  },
  {
    name: "Gross, Mart R.",
    field: "Behavioral Ecology",
    works: [
      {
        title: "Disruptive selection for alternative life histories in salmon",
        type: "article" as const,
        year: 1985,
        publisher: "Nature",
      },
    ],
    pages: "Ch. 3",
    context: "Alternative male mating tactics in salmon. Sneaker males vs. hooknose fighters as examples of frequency-dependent selection maintaining multiple male strategies.",
  },
  {
    name: "Mousseau, Timothy A.",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Natural selection and the heritability of fitness components",
        type: "article" as const,
        year: 1987,
        publisher: "Heredity",
        coAuthors: ["Derek A. Roff"],
      },
    ],
    pages: "Ch. 4",
    context: "Heritability of fitness-related life history traits. Demonstrates that life history traits show heritable variation subject to natural selection.",
  },
  {
    name: "Kingsolver, Joel G.",
    field: "Evolutionary Biology",
    works: [
      {
        title: "The strength of phenotypic selection in natural populations",
        type: "article" as const,
        year: 2001,
        publisher: "American Naturalist",
      },
    ],
    pages: "Ch. 2",
    context: "Meta-analysis of selection strength in wild populations. Establishes that natural and sexual selection are measurably strong forces in the wild.",
  },
  {
    name: "Hassrick, Royal B.",
    field: "Anthropology",
    works: [
      {
        title: "The Sioux: Life and Customs of a Warrior Society",
        type: "book" as const,
        year: 1964,
        publisher: "University of Oklahoma Press",
      },
    ],
    pages: "Ch. 8",
    context: "Warrior culture and male status competition among the Sioux. Illustrates how cultural institutions channel male intrasexual competition.",
  },
  {
    name: "Huxley, Thomas Henry",
    field: "Biology",
    works: [
      {
        title: "Evidence as to Man's Place in Nature",
        type: "book" as const,
        year: 1863,
        publisher: "Appleton",
      },
    ],
    pages: "Ch. 5",
    context: "Early comparative anatomy placing humans among the great apes. Historical foundation for evolutionary approach to human nature.",
  },
  {
    name: "Archer, John",
    field: "Psychology",
    works: [
      {
        title: "Sex differences in aggression in real-world settings: A meta-analytic review",
        type: "article" as const,
        year: 2004,
        publisher: "Review of General Psychology",
      },
      {
        title: "Does sexual selection explain human sex differences in aggression?",
        type: "article" as const,
        year: 2009,
        publisher: "Behavioral and Brain Sciences",
      },
    ],
    pages: "Chs. 8, 11",
    context: "Meta-analytic evidence for sex differences in aggression. Males more physically aggressive; the difference is large and cross-culturally consistent, consistent with sexual selection theory.",
  },
  {
    name: "Apicella, Coren",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Hadza hunter-gatherer mate preferences and hormones",
        type: "article" as const,
        year: 2014,
      },
    ],
    pages: "Ch. 7",
    context: "Mate preferences among Hadza hunter-gatherers. Demonstrates that mate preference sex differences exist even in small-scale foraging societies.",
  },
  {
    name: "Zerjal, Tatiana",
    field: "Population Genetics",
    works: [
      {
        title: "The genetic legacy of the Mongols",
        type: "article" as const,
        year: 2003,
        publisher: "American Journal of Human Genetics",
      },
    ],
    pages: "Ch. 8",
    context: "Genghis Khan's Y-chromosome: approximately 16 million living men (0.5% of the world's male population) carry a Y-chromosome lineage traceable to a single man ~1,000 years ago. Extreme example of male reproductive skew.",
  },
  {
    name: "Gettler, Lee T.",
    field: "Biological Anthropology",
    works: [
      {
        title: "Longitudinal evidence that fatherhood decreases testosterone in human males",
        type: "article" as const,
        year: 2011,
        publisher: "Proceedings of the National Academy of Sciences",
      },
    ],
    pages: "Ch. 6",
    context: "Cebu longitudinal study showing testosterone drops when men become fathers. First prospective evidence that fatherhood itself causes hormonal changes, not just selection effects.",
  },
  {
    name: "Wingfield, John C.",
    field: "Behavioral Endocrinology",
    works: [
      {
        title: "The challenge hypothesis: Theoretical implications for patterns of testosterone secretion, mating systems, and breeding strategies",
        type: "article" as const,
        year: 1990,
        publisher: "American Naturalist",
      },
    ],
    pages: "Ch. 8",
    context: "Challenge hypothesis: testosterone rises in response to competitive challenges and decreases during parental care. Framework for understanding hormonal trade-offs between mating and parenting effort.",
  },
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  // Publisher
  {
    name: "American Psychological Association (APA)",
    type: "Publisher / Professional Organization",
    context: "Publisher of Male, Female (all three editions). Also publisher of Geary's The Origin of Mind (2005).",
    pages: "Throughout",
  },
  // Universities and Research Centers
  {
    name: "University of Missouri",
    type: "University",
    context: "David C. Geary's home institution. Curators' Distinguished Professor of Psychology.",
    pages: "Throughout",
  },
  {
    name: "Harvard University",
    type: "University",
    context: "Goodall/Gombe data; Smuts (baboons); Chapais (primatology); Konner (anthropology); Boehm. Harvard University Press publishes multiple key referenced works.",
    pages: "Chs. 5-6, 8-11",
  },
  {
    name: "Princeton University",
    type: "University",
    context: "Princeton University Press publishes Andersson (1994), Clutton-Brock (1991), Williams (1966), Adkins-Regan (2005), Stearns (1992), Grant & Grant (2014), Scheidel (2017).",
    pages: "Chs. 2-5",
  },
  {
    name: "Oxford University Press",
    type: "Publisher",
    context: "Publishes Dawkins (1989), Williams (1975), Symons (1979), Keeley (1996), Dixson (2012), Lane (2005), Benenson (2014), and multiple other referenced works.",
    pages: "Throughout",
  },
  {
    name: "Cambridge University Press",
    type: "Publisher",
    context: "Publishes Cronin (1991), Bogin (1999), and multiple other referenced works.",
    pages: "Chs. 2-4",
  },
  {
    name: "Stanford University",
    type: "University",
    context: "Maccoby & Jacklin (1974), Stanford University Press. Foundational sex differences in children research.",
    pages: "Chs. 10-12",
  },
  {
    name: "University of Chicago",
    type: "University",
    context: "University of Chicago Press publishes Harcourt & Stewart (2007). Anthropology and primatology research.",
    pages: "Ch. 5",
  },
  {
    name: "MIT Press",
    type: "Publisher",
    context: "Publishes Burghardt (2005), The Genesis of Animal Play.",
    pages: "Chs. 10-11",
  },
  {
    name: "Aldine / Aldine de Gruyter",
    type: "Publisher",
    context: "Publishes Trivers (1972), Hill & Hurtado (1996), Betzig (1986), Eibl-Eibesfeldt (1989), Alexander (1987), Daly & Wilson (1988). Major publisher for evolutionary behavioral science.",
    pages: "Chs. 2-8",
  },
  {
    name: "Johns Hopkins University Press",
    type: "Publisher",
    context: "Publishes Hall (1984), Nonverbal Sex Differences.",
    pages: "Ch. 12",
  },
  {
    name: "University of Cambridge",
    type: "University",
    context: "Clutton-Brock's long-term behavioral ecology research. Darwin's alma mater.",
    pages: "Chs. 2-5",
  },
  {
    name: "Gombe Stream Research Centre, Tanzania",
    type: "Research Station",
    context: "Goodall's chimpanzee study site. 60+ years of continuous data on chimpanzee social behavior, male competition, and coalitions.",
    pages: "Chs. 5, 8",
  },
  {
    name: "Amboseli Research Station, Kenya",
    type: "Research Station",
    context: "Altmann, Silk, Alberts baboon research. 40+ year study of dominance, paternity, and social networks in yellow baboons.",
    pages: "Ch. 5",
  },
  {
    name: "University of New Mexico",
    type: "University",
    context: "Hill & Hurtado's Ache Life History Project. Evolutionary anthropology of hunter-gatherers.",
    pages: "Chs. 4-6",
  },
  {
    name: "University of Pittsburgh",
    type: "University",
    context: "Murdock's Atlas of World Cultures (Univ. of Pittsburgh Press). Cross-cultural anthropological database.",
    pages: "Chs. 6-8",
  },
  {
    name: "University of Texas at Austin",
    type: "University",
    context: "David Buss's evolutionary psychology laboratory. Cross-cultural mate preferences research program.",
    pages: "Chs. 7-8",
  },
  {
    name: "Boston University",
    type: "University",
    context: "Peter Gray's research on testosterone, pair-bonding, and fatherhood across cultures.",
    pages: "Chs. 6, 8",
  },
  {
    name: "University of California, Davis",
    type: "University",
    context: "Peter Richerson, Robert Boyd — cultural evolution research.",
    pages: "Ch. 8",
  },
  {
    name: "Arizona State University",
    type: "University",
    context: "Sarah Mathew — Turkana pastoralist research on cooperation and warfare.",
    pages: "Ch. 8",
  },
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Darwin's Finches Long-Term Study (Galapagos)",
    authors: "Peter Grant & B. Rosemary Grant",
    year: "1973-present (40+ years)",
    finding: "Real-time observation of natural and sexual selection on beak morphology in Geospiza finches. Demonstrates that selection is measurable and can be rapid. Female choice for male song type documented.",
    pages: "Ch. 2",
  },
  {
    name: "Gombe Chimpanzee Study",
    authors: "Jane Goodall, Anne Pusey, Michael Wilson, Ian Gilby",
    year: "1960-present (60+ years)",
    finding: "Male chimpanzees form coalitions, compete violently for dominance, commit infanticide, and engage in lethal intergroup raids. Females transfer between groups. Foundational primate data for understanding human male competition.",
    pages: "Chs. 5, 8",
  },
  {
    name: "Amboseli Baboon Project",
    authors: "Jeanne Altmann, Joan Silk, Susan Alberts",
    year: "1971-present (40+ years)",
    finding: "Male baboon dominance rank predicts mating access and paternity. Social bonds among females affect infant survival. Demonstrates sexual selection in a well-studied primate population.",
    pages: "Ch. 5",
  },
  {
    name: "Mandrill Colony Studies (CIRMF, Gabon)",
    authors: "Alan Dixson, Joanna Setchell, E. Jean Wickings",
    year: "1990s-2010s (20+ years)",
    finding: "Male mandrill facial coloration (red and blue) is testosterone-dependent and signals dominance rank. Alpha males are dramatically more colorful. Reproductive skew is extreme.",
    pages: "Ch. 5",
  },
  {
    name: "Ache Life History Project",
    authors: "Kim Hill & A. Magdalena Hurtado",
    year: "1980s-present (30+ years)",
    finding: "Comprehensive life history data from Ache hunter-gatherers of Paraguay. Documents sex-differentiated foraging, parental investment, and mortality patterns. Men hunt large game; women gather plant foods and care for children.",
    pages: "Chs. 4-6",
  },
  {
    name: "Aka Pygmy Paternal Investment Studies",
    authors: "Barry Hewlett",
    year: "1980s-present (30+ years)",
    finding: "Aka fathers hold their infants more than fathers in any other documented society. Demonstrates that high paternal investment exists in some foraging societies, varying with ecological and social context.",
    pages: "Ch. 6",
  },
  {
    name: "Yanomamo Studies",
    authors: "Napoleon Chagnon",
    year: "1964-1990s (30+ years)",
    finding: "Men who have killed (unokai) have significantly more wives and offspring. Warfare is frequent and lethal. Male aggression is directly tied to reproductive success in this tribal society.",
    pages: "Ch. 8",
  },
  {
    name: "Turkana Pastoralist Cooperation Studies",
    authors: "Sarah Mathew & Robert Boyd",
    year: "2000s-present",
    finding: "Turkana warriors cooperate in large-scale cattle raids across ethnic boundaries. Punishment mechanisms sustain cooperation in warfare. Links male coalitional psychology to intergroup conflict.",
    pages: "Ch. 8",
  },
  {
    name: "Kipsigis Female Choice Studies",
    authors: "Monique Borgerhoff Mulder",
    year: "1980s-2000s (20+ years)",
    finding: "Kipsigis women preferentially marry wealthier men with more land. One of the clearest demonstrations of female mate choice for resource-holding potential in a human population.",
    pages: "Ch. 7",
  },
  {
    name: "Tsimane Health and Life History Project",
    authors: "Michael Gurven, Hillard Kaplan",
    year: "2000s-present (20+ years)",
    finding: "Tsimane men's testosterone, hunting success, and health across the lifespan. Life history trade-offs between somatic maintenance and reproduction in a natural-fertility population.",
    pages: "Chs. 4, 6",
  },
  {
    name: "Hadza Hunter-Gatherer Studies",
    authors: "Frank Marlowe, Kristen Hawkes",
    year: "1990s-present (20+ years)",
    finding: "Division of labor, mate preferences, and grandmothering among the Hadza of Tanzania. Tests predictions from sexual selection theory in one of the last remaining hunter-gatherer societies.",
    pages: "Chs. 5-6",
  },
  {
    name: "Northern Elephant Seal Studies (Ano Nuevo)",
    authors: "Burney Le Boeuf et al.",
    year: "1960s-present (30+ years)",
    finding: "Extreme polygyny: top-ranking male elephant seals sire the vast majority of offspring. Most males die without reproducing. Textbook example of intense sexual selection on males.",
    pages: "Ch. 3",
  },
  {
    name: "Soay Sheep Studies (St. Kilda, Scotland)",
    authors: "Tim Clutton-Brock et al.",
    year: "1985-present (30+ years)",
    finding: "Life history trade-offs and sexual selection in a wild ungulate population. Males with larger horns have higher mating success but shorter lifespans.",
    pages: "Chs. 3-4",
  },
  {
    name: "Collared Flycatcher Study (Gotland, Sweden)",
    authors: "Anna Qvarnstrom, Lars Gustafsson",
    year: "1990s-2010s (24 years)",
    finding: "Long-term test of 'sexy son' hypothesis. Females mating with attractive males produce sons with higher reproductive success, confirming Fisherian runaway selection.",
    pages: "Ch. 3",
  },
  {
    name: "PISA / Gender Equality Paradox Study",
    authors: "Gijsbert Stoet & David C. Geary",
    year: "2018",
    finding: "Using PISA data from 67 countries: nations with greater gender equality show larger, not smaller, sex differences in STEM participation. Women in more equal countries are less likely to enter STEM fields.",
    pages: "Ch. 14",
  },
  {
    name: "Bateman's Drosophila Experiment",
    authors: "Angus J. Bateman",
    year: "1948",
    finding: "Foundational experiment showing males have higher variance in reproductive success than females, and male fitness increases with number of mates while female fitness does not. Establishes Bateman's principle.",
    pages: "Ch. 3",
  },
  {
    name: "Janicke et al. Meta-Analysis of Sexual Selection",
    authors: "Tim Janicke et al.",
    year: "2016",
    finding: "Meta-analysis across 66 species confirming Bateman's principles: sexual selection is consistently stronger in males than females across the animal kingdom.",
    pages: "Ch. 3",
  },
  {
    name: "Hamilton-Zuk Parasite-Mediated Sexual Selection",
    authors: "W. D. Hamilton & Marlene Zuk",
    year: "1982",
    finding: "Brighter plumage in birds signals resistance to parasites. Female choice for elaborate ornaments selects for disease resistance, maintaining genetic variation through host-parasite coevolution.",
    pages: "Ch. 3",
  },
  {
    name: "Hedges & Nowell Mental Test Score Analysis",
    authors: "Larry V. Hedges & Amy Nowell",
    year: "1995",
    finding: "Greater male variability in cognitive test scores: more males at both the highest and lowest extremes. Explains sex differences in representation among top performers in math and science.",
    pages: "Chs. 13-14",
  },
  {
    name: "Buss 37-Culture Mate Preferences Study",
    authors: "David M. Buss",
    year: "1989",
    finding: "Cross-cultural study of mate preferences in 37 cultures: women universally value resources, status, and ambition more than men; men universally value youth and physical attractiveness more than women.",
    pages: "Ch. 7",
  },
  {
    name: "Zerjal et al. Genghis Khan Y-Chromosome Study",
    authors: "Tatiana Zerjal et al.",
    year: "2003",
    finding: "Approximately 16 million men (0.5% of the world's male population) carry a Y-chromosome lineage traceable to a single individual ~1,000 years ago, likely Genghis Khan. Extreme example of male reproductive skew.",
    pages: "Ch. 8",
  },
  {
    name: "Gettler Cebu Longitudinal Testosterone Study",
    authors: "Lee T. Gettler et al.",
    year: "2011",
    finding: "Prospective longitudinal study showing testosterone drops when men become fathers. First evidence that fatherhood itself causes hormonal changes, supporting the trade-off between mating and parenting effort.",
    pages: "Ch. 6",
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
  title: "Male, Female",
  subtitle: "The Evolution of Human Sex Differences",
  author: "David C. Geary",
  publisher: "American Psychological Association",
  year: 2021,
  isbn: "978-1-4338-3427-0",
  description:
    "Third edition of the comprehensive evolutionary account of human sex differences. Synthesizes evidence from evolutionary biology, behavioral ecology, primatology, anthropology, developmental psychology, neuroscience, and education to argue that sexual selection is the primary driver of psychological and behavioral sex differences. Covers ~1,180 citations across 14 chapters spanning natural selection, sexual selection, life history theory, primate comparisons, fatherhood, mate choice, male competition, cognitive evolution, play, social development, folk psychology, folk physics, and modern applications.",
};
