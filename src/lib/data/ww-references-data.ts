// ww-references-data.ts
// Structured reference data for "Warriors and Worriers: The Survival of the Sexes"
// Source: WarriorsAndWorriers/analysis/sources-raw.md

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
  // ========================
  // KEY FIGURES (18)
  // ========================

  // Key Figure 1: Richard W. Wrangham
  {
    name: "Wrangham, Richard W.",
    field: "Primatology / Evolutionary Biology",
    works: [
      {
        title: "Evolution of Coalitionary Killing",
        type: "article" as const,
        year: 1999,
        publisher: "Yearbook of Physical Anthropology",
      },
      {
        title: "Demonic Males: Apes and the Origins of Human Violence",
        type: "book" as const,
        year: 1996,
        publisher: "Houghton Mifflin",
        coAuthors: ["Dale Peterson"],
      },
      {
        title: "Sex Differences in Behavioural Ecology of Chimpanzees",
        type: "article" as const,
        year: 1980,
        coAuthors: ["Barbara Smuts"],
      },
      {
        title: "Intergroup Relations in Chimpanzees",
        type: "article" as const,
        year: 2003,
        coAuthors: ["Michael L. Wilson"],
      },
      {
        title: "Is Military Incompetence Adaptive?",
        type: "article" as const,
        year: 1999,
      },
    ],
    pages: "Ch1[34,35,64], Ch2[4,25], Ch3[125], Ch4[61]",
    context: "Central intellectual influence; Benenson credits him in preface as shaping her career trajectory. His work on chimpanzee warfare and coalitionary killing forms the theoretical backbone of the 'warriors' thesis.",
    keyFigure: true,
  },

  // Key Figure 2: Joyce F. Benenson (Author)
  {
    name: "Benenson, Joyce F.",
    field: "Developmental Psychology",
    works: [
      {
        title: "Sex Differences in Children's Investment in Same-Sex Peers",
        type: "article" as const,
        year: 2004,
        coAuthors: ["Kimberly Alavi"],
      },
      {
        title: "Greater Preference Among Females Than Males for Dyadic Interaction in Early Childhood",
        type: "article" as const,
        year: 1993,
        publisher: "Child Development",
      },
      {
        title: "Gender Differences in Social Networks",
        type: "article" as const,
        year: 1990,
      },
      {
        title: "Males' Greater Tolerance of Same-Sex Peers",
        type: "article" as const,
        year: 2009,
      },
      {
        title: "Sex Differences in Reactions to Outperforming Same-Sex Friends",
        type: "article" as const,
        year: 2004,
        coAuthors: ["Jessica Schinazi"],
      },
      {
        title: "Under Threat of Social Exclusion, Females Exclude More Than Males",
        type: "article" as const,
        year: 2011,
      },
      {
        title: "Social Exclusion: More Important to Human Females Than Males",
        type: "article" as const,
        year: 2013,
        publisher: "PLoS One",
      },
      {
        title: "Male More Than Female Infants Imitate Propulsive Motion",
        type: "article" as const,
        year: 2011,
        publisher: "Cognition",
      },
      {
        title: "Girls Spend More Time with One Close Friend (Uganda)",
        type: "article" as const,
        year: 2013,
      },
      {
        title: "The Fragility of Girls' Same-Sex Friendships",
        type: "article" as const,
        year: 2009,
        coAuthors: ["Athena Christakos"],
      },
    ],
    pages: "All chapters; 30+ self-citations across entire book",
    context: "Author of the book. Her extensive experimental research with children forms the primary evidence base, with 30+ of her own published studies and manuscripts cited across all chapters.",
    keyFigure: true,
  },

  // Key Figure 3: Henry Markovits (Co-author)
  {
    name: "Markovits, Henry",
    field: "Developmental Psychology",
    works: [
      {
        title: "Males Outperform Females in Translating Social Relations into Spatial Positions",
        type: "article" as const,
        year: 2010,
        publisher: "Cognition",
        coAuthors: ["Joyce F. Benenson"],
      },
      {
        title: "Gender and Priming Differences in Speed of Processing",
        type: "article" as const,
        year: 2006,
        coAuthors: ["Joyce F. Benenson"],
      },
      {
        title: "Evidence That Children and Adolescents Have Internal Models of Peer Interactions That Are Gender Differentiated",
        type: "article" as const,
        year: 2001,
        coAuthors: ["Joyce F. Benenson"],
      },
      {
        title: "Sex Differences in Value of Parents Versus Same-Sex Peers",
        type: "article" as const,
        year: 2008,
        coAuthors: ["Joyce F. Benenson"],
      },
    ],
    pages: "Multiple chapters, co-authored studies with Benenson",
    context: "Co-author credited on the book's title page. Collaborated with Benenson on multiple studies providing key evidence for sex-differentiated peer interaction models.",
    keyFigure: true,
  },

  // Key Figure 4: Anne Campbell
  {
    name: "Campbell, Anne",
    field: "Evolutionary Psychology / Aggression Studies",
    works: [
      {
        title: "Staying Alive: Evolution, Culture, and Women's Intrasexual Aggression",
        type: "article" as const,
        year: 1999,
        publisher: "Behavioral and Brain Sciences",
      },
      {
        title: "Out of Control: Men, Women and Aggression",
        type: "book" as const,
        year: 1993,
      },
      {
        title: "The Girls in the Gang",
        type: "book" as const,
        year: 1992,
      },
      {
        title: "Girls' Talk",
        type: "article" as const,
        year: 1984,
        publisher: "Criminal Justice and Behavior",
      },
      {
        title: "Sex Differences in Direct Aggression",
        type: "article" as const,
        year: 2006,
      },
      {
        title: "Intent to Harm or Injure? Gender and the Expression of Anger",
        type: "article" as const,
        year: 2008,
        coAuthors: ["Steven Muncer"],
      },
      {
        title: "Female Competition and Aggression: Interdisciplinary Perspectives",
        type: "article" as const,
        year: 2004,
      },
    ],
    pages: "Ch1[42], Ch3[104,123,124], Ch4[69,70], Ch5[77,79,85], Ch6[36,72,95,98], Ch7[19]",
    context: "Central theorist on female intrasexual aggression and the 'staying alive' hypothesis -- that women's lower physical aggression is an evolutionary adaptation to protect their greater parental investment.",
    keyFigure: true,
  },

  // Key Figure 5: Martin Daly & Margo Wilson
  {
    name: "Daly, Martin & Wilson, Margo",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Homicide",
        type: "book" as const,
        year: 1988,
        publisher: "Aldine de Gruyter",
      },
      {
        title: "An Evolutionary Psychological Perspective on Homicide",
        type: "article" as const,
        year: 1999,
        publisher: "Sage",
      },
      {
        title: "The Truth About Cinderella: A Darwinian View of Parental Love",
        type: "book" as const,
        year: 1998,
      },
      {
        title: "The Darwinian Psychology of Discriminative Parental Solicitude",
        type: "article" as const,
        year: 1987,
      },
      {
        title: "Some Differential Attributes of Lethal Assaults on Small Children by Stepfathers Versus Genetic Fathers",
        type: "article" as const,
        year: 1994,
      },
    ],
    pages: "Ch1[19,20,59], Ch2[49], Ch5[84], Ch6[5], Ch7[103,106,156,191,192]",
    context: "Foundational evolutionary psychology research on homicide patterns, parental investment, and the Cinderella effect (stepparent abuse). Their data on sex-differentiated violence is central to the warriors thesis.",
    keyFigure: true,
  },

  // Key Figure 6: Eleanor E. Maccoby
  {
    name: "Maccoby, Eleanor E.",
    field: "Developmental Psychology",
    works: [
      {
        title: "The Psychology of Sex Differences",
        type: "book" as const,
        year: 1974,
        publisher: "Stanford University Press",
        coAuthors: ["Carol Nagy Jacklin"],
      },
      {
        title: "Gender and Relationships: A Developmental Account",
        type: "article" as const,
        year: 1990,
      },
      {
        title: "The Two Sexes: Growing Up Apart, Coming Together",
        type: "book" as const,
        year: 1998,
      },
    ],
    pages: "Ch1[17], Ch2[61], Ch3[13,14,32], Ch5[83], Ch6[53,100]",
    context: "Foundational researcher on sex differences in children. Her landmark book with Jacklin established the empirical basis for studying psychological sex differences.",
    keyFigure: true,
  },

  // Key Figure 7: Frank Marlowe
  {
    name: "Marlowe, Frank",
    field: "Anthropology",
    works: [
      {
        title: "The Hadza: Hunter-Gatherers of Tanzania",
        type: "book" as const,
        year: 2010,
        publisher: "University of California Press",
      },
      {
        title: "Mate Preferences Among Hadza Hunter-Gatherers",
        type: "article" as const,
        year: 2004,
      },
      {
        title: "Who Tends Hadza Children?",
        type: "article" as const,
        year: 2005,
      },
      {
        title: "Hunting and Gathering: The Human Sexual Division of Foraging Labor",
        type: "article" as const,
        year: 2007,
      },
    ],
    pages: "Ch1[49], Ch2[19], Ch3[12,45], Ch4[5], Ch6[9,31], Ch7[22,35]",
    context: "Primary source on Hadza hunter-gatherer society, used extensively throughout the book as a model of ancestral human social behavior.",
    keyFigure: true,
  },

  // Key Figure 8: Sarah Bliffer Hrdy
  {
    name: "Hrdy, Sarah Bliffer",
    field: "Primatology / Evolutionary Anthropology",
    works: [
      {
        title: "Mother Nature: A History of Mothers, Infants, and Natural Selection",
        type: "book" as const,
        year: 1999,
        publisher: "Pantheon",
      },
      {
        title: "Mothers and Others: The Evolutionary Origins of Mutual Understanding",
        type: "book" as const,
        year: 2009,
        publisher: "Belknap Press",
      },
      {
        title: "The Woman That Never Evolved",
        type: "book" as const,
        year: 1999,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Ch1[47,60], Ch5[11], Ch6[15], Ch7[59,111]",
    context: "Central authority on maternal behavior, infanticide, cooperative breeding, and female competition in primates. Her work frames the 'worrier' side of the thesis.",
    keyFigure: true,
  },

  // Key Figure 9: Carol Gilligan
  {
    name: "Gilligan, Carol",
    field: "Developmental Psychology / Moral Psychology",
    works: [
      {
        title: "In a Different Voice: Psychological Theory and Women's Development",
        type: "book" as const,
        year: 1982,
        publisher: "Harvard University Press",
      },
      {
        title: "The Origins of Morality in Early Childhood Relationships",
        type: "article" as const,
        year: 1987,
        coAuthors: ["Grant Wiggins"],
      },
      {
        title: "Mapping the Moral Domain",
        type: "book" as const,
        year: 1988,
      },
    ],
    pages: "Ch2[62], Ch3[138,141,142], Ch6[12]",
    context: "Her work on sex differences in moral reasoning -- males focused on rules and justice, females on relationships and care -- directly supports the warrior/worrier framework.",
    keyFigure: true,
  },

  // Key Figure 10: John M. Gottman
  {
    name: "Gottman, John M.",
    field: "Psychology / Relationship Research",
    works: [
      {
        title: "Conversations of Friends: Speculations on Affective Development",
        type: "book" as const,
        year: 1986,
        publisher: "Cambridge University Press",
      },
      {
        title: "The World of Coordinated Play: Same- and Cross-Sex Friendship in Young Children",
        type: "article" as const,
        year: 1986,
      },
      {
        title: "Speculations About Social and Affective Development: Friendship and Acquaintanceship Through Adolescence",
        type: "article" as const,
        year: 1986,
        coAuthors: ["Gwendolyn Mettetal"],
      },
    ],
    pages: "Ch2[5,39], Ch3[84], Ch6[79,80], Ch7[82]",
    context: "His recordings of children's natural conversations provide primary evidence for sex differences in fears, social behavior, and friendship patterns.",
    keyFigure: true,
  },

  // Key Figure 11: David M. Buss
  {
    name: "Buss, David M.",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Sex Differences in Human Mate Preferences: Evolutionary Hypotheses Tested in 37 Cultures",
        type: "article" as const,
        year: 1989,
        publisher: "Behavioral and Brain Sciences",
      },
      {
        title: "The Evolution of Desire: Strategies of Human Mating",
        type: "book" as const,
        year: 1994,
        publisher: "Basic Books",
      },
    ],
    pages: "Ch5[20], Ch6[33,34], Ch7[157,160]",
    context: "Mate selection theory and cross-cultural evidence for sex-differentiated mating strategies.",
    keyFigure: true,
  },

  // Key Figure 12: Marjorie Harkness Goodwin
  {
    name: "Goodwin, Marjorie Harkness",
    field: "Linguistic Anthropology",
    works: [
      {
        title: "He-Said-She-Said: Talk as Social Organization Among Black Children",
        type: "book" as const,
        year: 1990,
        publisher: "Indiana University Press",
      },
    ],
    pages: "Ch2[66], Ch3[143], Ch4[51], Ch6[54], Ch7[115]",
    context: "Extensive participant-observation study of children's speech in a Philadelphia neighborhood; provides primary evidence for sex differences in speech patterns, competition hierarchies, and expertise valuation.",
    keyFigure: true,
  },

  // Key Figure 13: Vivian Gussin Paley
  {
    name: "Paley, Vivian Gussin",
    field: "Education / Early Childhood",
    works: [
      {
        title: "Boys and Girls: Superheroes in the Doll Corner",
        type: "book" as const,
        year: 1984,
        publisher: "University of Chicago Press",
      },
    ],
    pages: "Ch2[36], Ch3[10], Ch7[61]",
    context: "Kindergarten teacher's detailed observations of sex differences in children's play; provides rich qualitative evidence for how boys and girls naturally organize their social worlds differently.",
    keyFigure: true,
  },

  // Key Figure 14: Beatrice B. Whiting & Carolyn P. Edwards
  {
    name: "Whiting, Beatrice B. & Edwards, Carolyn P.",
    field: "Cross-Cultural Developmental Psychology / Anthropology",
    works: [
      {
        title: "Children of Different Worlds: The Formation of Social Behavior",
        type: "book" as const,
        year: 1988,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Ch1[24], Ch2[15], Ch3[11], Ch5[35], Ch7[39]",
    context: "Major cross-cultural study of children's behavior across Kenya, Guatemala, Japan, Mexico, Philippines, Liberia, India, and Peru. Provides crucial evidence that sex differences in behavior transcend any single culture.",
    keyFigure: true,
  },

  // Key Figure 15: Robert Trivers
  {
    name: "Trivers, Robert",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Parental Investment and Sexual Selection",
        type: "article" as const,
        year: 1972,
        publisher: "Aldine",
      },
    ],
    pages: "Ch1[41], Ch7[190]",
    context: "Foundational parental investment theory that frames the entire book: the sex investing more in offspring (females) will be more selective in mating and more risk-averse.",
    keyFigure: true,
  },

  // Key Figure 16: Frans de Waal
  {
    name: "de Waal, Frans",
    field: "Primatology",
    works: [
      {
        title: "Chimpanzee Politics: Power and Sex Among Apes",
        type: "book" as const,
        year: 1982,
      },
      {
        title: "The Integration of Dominance and Social Bonding in Primates",
        type: "article" as const,
        year: 1986,
      },
      {
        title: "Primates: A Natural Heritage of Conflict Resolution",
        type: "article" as const,
        year: 2000,
        publisher: "Science",
      },
      {
        title: "Reconciliation and Consolation Among Chimpanzees",
        type: "article" as const,
        year: 1979,
        coAuthors: ["Angeline van Roosmalen"],
      },
    ],
    pages: "Ch1[28,29,36], Ch2[71,72], Ch5[87], Ch7[1,3]",
    context: "Valuable relationships hypothesis and reconciliation theory: that primates with more to gain from a relationship are more likely to reconcile after conflict.",
    keyFigure: true,
  },

  // Key Figure 17: Jane Goodall
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
    pages: "Ch1[31], Ch2[22]",
    context: "Foundational chimpanzee behavior observations at Gombe; her documentation of chimpanzee warfare provided early evidence for the evolutionary roots of male coalitionary violence.",
    keyFigure: true,
  },

  // Key Figure 18: Charles Darwin
  {
    name: "Darwin, Charles",
    field: "Evolutionary Biology",
    works: [
      {
        title: "The Descent of Man, and Selection in Relation to Sex",
        type: "book" as const,
        year: 1871,
        publisher: "John Murray",
      },
    ],
    pages: "Ch1[71], Ch4[7]",
    context: "Foundational evolutionary theory; his quote on cooperative groups opens Chapter 4. Sexual selection theory underpins the entire warrior/worrier framework.",
    keyFigure: true,
  },

  // ========================
  // CHAPTER 1: INTRODUCTION (Pages 1-19)
  // ========================

  {
    name: "Polgreen, Lydia",
    field: "Journalism",
    works: [
      {
        title: "Congo's Death Rate Unchanged Since War Ended",
        type: "article" as const,
        year: 2008,
        publisher: "New York Times",
      },
    ],
    pages: "Ch1[1]",
    context: "Opens the book with the devastating human cost of warfare in the Congo.",
  },
  {
    name: "Hyde, Janet Shibley",
    field: "Psychology",
    works: [
      {
        title: "The Gender Similarities Hypothesis",
        type: "article" as const,
        year: 2005,
        publisher: "American Psychologist",
      },
    ],
    pages: "Ch1[2]",
    context: "Represents the counter-position to Benenson's thesis -- that psychological sex differences are small and overstated.",
  },
  {
    name: "Wood, Wendy & Eagly, Alice H.",
    field: "Psychology",
    works: [
      {
        title: "A Cross-Cultural Analysis of the Behavior of Women and Men: Implications for the Origins of Sex Differences",
        type: "article" as const,
        year: 2002,
        publisher: "Psychological Bulletin",
      },
    ],
    pages: "Ch1[3]",
    context: "Cross-cultural analysis of sex differences in behavior.",
  },
  {
    name: "Volk, Anthony A. & Atkinson, Jeremy A.",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "Infant and Child Death in the Human Environment of Evolutionary Adaptation",
        type: "article" as const,
        year: 2013,
        publisher: "Evolution and Human Behavior",
      },
    ],
    pages: "Ch1[8]",
    context: "Historical child mortality data framing the survival pressures that shaped sex-differentiated strategies.",
  },
  {
    name: "Bakan, David",
    field: "Psychology",
    works: [
      {
        title: "The Duality of Human Existence: Isolation and Communion in Western Man",
        type: "book" as const,
        year: 1966,
        publisher: "Rand McNally",
      },
    ],
    pages: "Ch1[9]",
    context: "Agency vs. communion distinction that maps onto the warrior/worrier framework.",
  },
  {
    name: "Taylor, Shelley E.",
    field: "Psychology",
    works: [
      {
        title: "Biobehavioral Responses to Stress in Females: Tend-and-Befriend, Not Fight-or-Flight",
        type: "article" as const,
        year: 2000,
        publisher: "Psychological Review",
      },
    ],
    pages: "Ch1[11]",
    context: "Proposes that females respond to stress with tending and befriending rather than fighting or fleeing, providing an alternative stress-response model.",
  },
  {
    name: "Kaplan, Hillard",
    field: "Anthropology",
    works: [
      {
        title: "A Theory of Human Life History Evolution: Diet, Intelligence, and Longevity",
        type: "article" as const,
        year: 2000,
        publisher: "Evolutionary Anthropology",
      },
    ],
    pages: "Ch1[15]",
    context: "Human life history theory linking diet, intelligence, and longevity to evolutionary pressures.",
  },
  {
    name: "Moffitt, Terrie E.",
    field: "Psychology",
    works: [
      {
        title: "Sex Differences in Antisocial Behaviour: Conduct Disorder, Delinquency, and Violence in the Dunedin Longitudinal Study",
        type: "book" as const,
        year: 2001,
        publisher: "Cambridge University Press",
      },
    ],
    pages: "Ch1[18]",
    context: "Dunedin longitudinal study documenting sex differences in antisocial behavior from childhood through adulthood.",
  },
  {
    name: "Konner, Melvin",
    field: "Anthropology / Biology",
    works: [
      {
        title: "The Evolution of Childhood: Relationships, Emotion, Mind",
        type: "book" as const,
        year: 2010,
        publisher: "Harvard University Press",
      },
      {
        title: "Hunter-Gatherer Infancy and Childhood",
        type: "article" as const,
        year: 2005,
      },
    ],
    pages: "Ch1[51,61], Ch3, Ch7",
    context: "Comprehensive work on the evolution of childhood and hunter-gatherer child-rearing practices.",
  },
  {
    name: "Clutton-Brock, Tim",
    field: "Biology",
    works: [
      {
        title: "Sexual Selection in Females",
        type: "article" as const,
        year: 2009,
        publisher: "Animal Behaviour",
      },
    ],
    pages: "Ch1[54], Ch6",
    context: "Extends sexual selection theory to female competition, supporting the idea that females also compete intensely but through different mechanisms.",
  },
  {
    name: "Bowles, Samuel",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Did Warfare Among Ancestral Hunter-Gatherers Affect the Evolution of Human Social Behaviors?",
        type: "article" as const,
        year: 2009,
        publisher: "Science",
      },
    ],
    pages: "Ch1[65]",
    context: "Evidence that intergroup conflict was a significant selection pressure in human evolution.",
  },
  {
    name: "Keeley, Lawrence H.",
    field: "Archaeology",
    works: [
      {
        title: "War Before Civilization: The Myth of the Peaceful Savage",
        type: "book" as const,
        year: 1997,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Ch1[66]",
    context: "Archaeological evidence that warfare predates civilization, challenging the notion that war is a modern invention.",
  },
  {
    name: "LeBlanc, Steven A.",
    field: "Archaeology",
    works: [
      {
        title: "Constant Battles: The Myth of the Peaceful, Noble Savage",
        type: "book" as const,
        year: 2003,
        publisher: "St. Martin's Press",
        coAuthors: ["Katherine E. Register"],
      },
    ],
    pages: "Ch1[67]",
    context: "Further archaeological evidence for the prevalence of warfare throughout human history.",
  },
  {
    name: "Pinker, Steven",
    field: "Psychology",
    works: [
      {
        title: "The Better Angels of Our Nature: Why Violence Has Declined",
        type: "book" as const,
        year: 2011,
        publisher: "Viking",
      },
    ],
    pages: "Ch1[68], Ch7",
    context: "Documents the historical decline of violence while acknowledging its evolutionary roots.",
  },
  {
    name: "Alexander, Richard D.",
    field: "Biology",
    works: [
      {
        title: "The Biology of Moral Systems",
        type: "book" as const,
        year: 1987,
        publisher: "Aldine de Gruyter",
      },
    ],
    pages: "Ch1[70]",
    context: "Theory linking moral systems to biological evolution and group competition.",
  },
  {
    name: "Zahn-Waxler, Carolyn",
    field: "Developmental Psychology",
    works: [
      {
        title: "Warriors and Worriers: Gender and Psychopathology",
        type: "article" as const,
        year: 1993,
        publisher: "Development and Psychopathology",
      },
    ],
    pages: "Ch1[77]",
    context: "Originated the 'warriors and worriers' concept that became the book's title and central metaphor.",
  },
  {
    name: "Thomas, Jerry R. & French, Karen E.",
    field: "Psychology",
    works: [
      {
        title: "Gender Differences in Motor Performance: A Meta-Analysis",
        type: "article" as const,
        year: 1985,
        publisher: "Psychological Bulletin",
      },
    ],
    pages: "Ch1[78]",
    context: "Meta-analysis establishing robust sex differences in motor performance, especially throwing.",
  },
  {
    name: "Lancaster, Jane B. & Lancaster, Chet S.",
    field: "Anthropology",
    works: [
      {
        title: "Parental Investment: The Hominid Adaptation",
        type: "article" as const,
        year: 1983,
        publisher: "Smithsonian",
      },
    ],
    pages: "Ch1[44]",
    context: "Dual parental investment as a distinctive hominid adaptation.",
  },
  {
    name: "Black, Robert E.",
    field: "Medicine / Epidemiology",
    works: [
      {
        title: "Global, Regional, and National Causes of Child Mortality in 2008",
        type: "article" as const,
        year: 2010,
        publisher: "Lancet",
      },
    ],
    pages: "Ch1[45]",
    context: "Global child mortality data providing context for the survival pressures that shaped sex-differentiated strategies.",
  },

  // ========================
  // CHAPTER 2: ENEMY FIGHTING (Pages 23-55)
  // ========================

  {
    name: "DiPietro, Janet A.",
    field: "Developmental Psychology",
    works: [
      {
        title: "Rough-and-Tumble Play: A Function of Gender",
        type: "article" as const,
        year: 1981,
        publisher: "Developmental Psychology",
      },
    ],
    pages: "Ch2",
    context: "Evidence for sex differences in rough-and-tumble play, a key component of boys' warrior preparation.",
  },
  {
    name: "Pellegrini, Anthony D.",
    field: "Developmental Psychology",
    works: [
      {
        title: "Bullying, Dominance, and Victimization During Early Adolescence",
        type: "article" as const,
        year: 2001,
      },
      {
        title: "The Role of Recess in Children's Cognitive Performance and School Adjustment",
        type: "article" as const,
        year: 2005,
        publisher: "Educational Researcher",
      },
    ],
    pages: "Ch2",
    context: "Research on play fighting, bullying, and dominance hierarchies in children.",
  },
  {
    name: "Sutton-Smith, Brian",
    field: "Psychology / Play Studies",
    works: [
      {
        title: "The Ambiguity of Play",
        type: "book" as const,
        year: 1997,
      },
    ],
    pages: "Ch2",
    context: "Theoretical framework for understanding children's play, including war play and competitive games.",
  },
  {
    name: "Goldstein, Jeffrey",
    field: "Psychology",
    works: [
      {
        title: "Toys, Play, and Child Development",
        type: "book" as const,
        year: 1994,
      },
    ],
    pages: "Ch2",
    context: "Research on toy preferences and their relationship to play and development.",
  },
  {
    name: "Singer, Tania",
    field: "Neuroscience",
    works: [
      {
        title: "Empathic Neural Responses Are Modulated by the Perceived Fairness of Others",
        type: "article" as const,
        year: 2006,
        publisher: "Nature",
      },
    ],
    pages: "Ch2",
    context: "Males show reduced empathy for unfair opponents receiving pain, linking to warrior psychology of out-group dehumanization.",
  },
  {
    name: "Mesquida, Christian G. & Wiener, Neil I.",
    field: "Demography / Political Science",
    works: [
      {
        title: "Male Age Composition and Severity of Conflicts",
        type: "article" as const,
        year: 1999,
        publisher: "Politics and the Life Sciences",
      },
    ],
    pages: "Ch2",
    context: "Evidence linking young male population bulges to increased warfare and conflict.",
  },
  {
    name: "Kimura, Doreen",
    field: "Neuropsychology",
    works: [
      {
        title: "Sex and Cognition",
        type: "book" as const,
        year: 1999,
        publisher: "MIT Press",
      },
    ],
    pages: "Ch2",
    context: "Comprehensive review of sex differences in cognitive abilities including spatial and verbal skills.",
  },
  {
    name: "Gurven, Michael & Kaplan, Hillard",
    field: "Anthropology",
    works: [
      {
        title: "Longevity Among Hunter-Gatherers: A Cross-Cultural Examination",
        type: "article" as const,
        year: 2007,
        publisher: "Population and Development Review",
      },
    ],
    pages: "Ch2",
    context: "Cross-cultural data on hunter-gatherer longevity providing baseline mortality data.",
  },
  {
    name: "Hill, Kim",
    field: "Anthropology",
    works: [
      {
        title: "Mortality Rates Among Wild Chimpanzees and Hiwi Hunter-Gatherers",
        type: "article" as const,
        year: 2001,
      },
    ],
    pages: "Ch2",
    context: "Comparative mortality data between chimpanzees and Hiwi hunter-gatherers.",
  },
  {
    name: "Gosso, Yumi",
    field: "Developmental Psychology",
    works: [
      {
        title: "Play in Hunter-Gatherer Society",
        type: "article" as const,
        year: 2005,
      },
    ],
    pages: "Ch2",
    context: "Cross-cultural evidence for play patterns in hunter-gatherer children.",
  },
  {
    name: "Lever, Janet",
    field: "Sociology",
    works: [
      {
        title: "Sex Differences in the Games Children Play",
        type: "article" as const,
        year: 1978,
        publisher: "Social Problems",
      },
      {
        title: "Sex Differences in the Complexity of Children's Play and Games",
        type: "article" as const,
        year: 1978,
        publisher: "American Sociological Review",
      },
    ],
    pages: "Ch2, Ch3, Ch6",
    context: "Classic studies showing boys play in larger groups with more complex rules, while girls prefer smaller, more intimate play settings.",
  },

  // ========================
  // CHAPTER 3: MALE FRIENDS (Pages 56-97)
  // ========================

  {
    name: "Junger, Sebastian",
    field: "Journalism / War Reporting",
    works: [
      {
        title: "War",
        type: "book" as const,
        year: 2010,
        publisher: "Twelve",
      },
    ],
    pages: "Ch3",
    context: "First-hand account of male bonding in combat; illustrates the intensity of male coalitionary bonds formed under threat.",
  },
  {
    name: "Bowlby, John",
    field: "Developmental Psychology",
    works: [
      {
        title: "Attachment and Loss",
        type: "book" as const,
        year: 1969,
      },
    ],
    pages: "Ch3, Ch7",
    context: "Attachment theory providing framework for understanding sex-differentiated social bonds.",
  },
  {
    name: "Freud, Sigmund",
    field: "Psychiatry / Psychoanalysis",
    works: [
      {
        title: "Group Psychology and the Analysis of the Ego",
        type: "book" as const,
        year: 1921,
      },
      {
        title: "Female Sexuality",
        type: "article" as const,
        year: 1931,
      },
      {
        title: "Femininity",
        type: "article" as const,
        year: 1933,
      },
    ],
    pages: "Ch3, Ch4, Ch5",
    context: "Early insights on group psychology, male bonding, and female psychological development.",
  },
  {
    name: "Chodorow, Nancy",
    field: "Psychoanalytic Sociology",
    works: [
      {
        title: "The Reproduction of Mothering: Psychoanalysis and the Sociology of Gender",
        type: "book" as const,
        year: 1978,
      },
    ],
    pages: "Ch3",
    context: "Theory of how mothering reproduces sex-differentiated personality structures.",
  },
  {
    name: "Olweus, Dan",
    field: "Psychology",
    works: [
      {
        title: "Bullying at School: What We Know and What We Can Do",
        type: "book" as const,
        year: 1993,
      },
    ],
    pages: "Ch3",
    context: "Foundational research on bullying, dominance hierarchies, and sex differences in aggressive behavior among schoolchildren.",
  },
  {
    name: "Piaget, Jean",
    field: "Developmental Psychology",
    works: [
      {
        title: "The Moral Judgment of the Child",
        type: "book" as const,
        year: 1932,
      },
    ],
    pages: "Ch3",
    context: "Observations that boys develop more elaborate rule systems in games than girls, supporting the warrior-cooperation framework.",
  },
  {
    name: "Tiger, Lionel",
    field: "Anthropology",
    works: [
      {
        title: "Men in Groups",
        type: "book" as const,
        year: 1969,
      },
    ],
    pages: "Ch3, Ch4",
    context: "Early argument for the biological basis of male bonding and all-male group formation.",
  },
  {
    name: "Kohlberg, Lawrence",
    field: "Developmental Psychology",
    works: [
      {
        title: "The Philosophy of Moral Development",
        type: "book" as const,
        year: 1981,
      },
    ],
    pages: "Ch3",
    context: "Moral development stages framework; his emphasis on justice-oriented reasoning reflects male moral priorities.",
  },
  {
    name: "Mead, Margaret",
    field: "Anthropology",
    works: [
      {
        title: "Sex and Temperament in Three Primitive Societies",
        type: "book" as const,
        year: 1935,
      },
    ],
    pages: "Ch3",
    context: "Classic cross-cultural work on sex roles, used as context for universality of sex differences.",
  },
  {
    name: "Schlegel, Alice & Barry, Herbert",
    field: "Anthropology",
    works: [
      {
        title: "Adolescence: An Anthropological Inquiry",
        type: "book" as const,
        year: 1991,
      },
    ],
    pages: "Ch3, Ch7",
    context: "Cross-cultural study of adolescence showing universal patterns of sex-differentiated socialization.",
  },
  {
    name: "Eagly, Alice H. & Karau, Steven J.",
    field: "Social Psychology",
    works: [
      {
        title: "Role Congruity Theory of Prejudice Toward Female Leaders",
        type: "article" as const,
        year: 2002,
        publisher: "Psychological Review",
      },
    ],
    pages: "Ch3",
    context: "Theory explaining why female leaders face unique challenges due to role incongruity.",
  },
  {
    name: "Buck, Ross",
    field: "Psychology",
    works: [
      {
        title: "The Communication of Emotion",
        type: "book" as const,
        year: 1984,
      },
    ],
    pages: "Ch3",
    context: "Research on nonverbal emotional communication and sex differences in emotional expressiveness.",
  },
  {
    name: "Sheldon, Amy",
    field: "Linguistics",
    works: [
      {
        title: "Pickle Fights: Gendered Talk in Preschool Disputes",
        type: "article" as const,
        year: 1990,
        publisher: "Discourse Processes",
      },
    ],
    pages: "Ch2, Ch6",
    context: "Analysis of how preschool girls manage conflict through talk rather than physical confrontation.",
  },
  {
    name: "Farrington, David P.",
    field: "Criminology",
    works: [
      {
        title: "Family Backgrounds of Aggressive Youths",
        type: "article" as const,
        year: 1978,
      },
    ],
    pages: "Ch3",
    context: "Longitudinal research on predictors of male aggression and antisocial behavior.",
  },
  {
    name: "Rutter, Michael",
    field: "Psychiatry",
    works: [
      {
        title: "Antisocial Behavior by Young People",
        type: "book" as const,
        year: 1998,
      },
    ],
    pages: "Ch3",
    context: "Comprehensive analysis of sex differences in antisocial behavior and their developmental origins.",
  },

  // ========================
  // CHAPTER 4: ORGANIZING THE MILITARY (Pages 98-126)
  // ========================

  {
    name: "Wilson, Edward O.",
    field: "Biology / Sociobiology",
    works: [
      {
        title: "The Social Conquest of Earth",
        type: "book" as const,
        year: 2012,
        publisher: "Liveright",
      },
    ],
    pages: "Ch4",
    context: "Theory that group selection and intergroup competition drove the evolution of human social complexity.",
  },
  {
    name: "Sherif, Muzafer",
    field: "Social Psychology",
    works: [
      {
        title: "Intergroup Conflict and Cooperation: The Robbers Cave Experiment",
        type: "study" as const,
        year: 1961,
      },
    ],
    pages: "Ch4",
    context: "Classic Robbers Cave experiment demonstrating how intergroup competition creates in-group solidarity and out-group hostility among boys.",
  },
  {
    name: "Tajfel, Henri",
    field: "Social Psychology",
    works: [
      {
        title: "Human Groups and Social Categories",
        type: "book" as const,
        year: 1981,
      },
    ],
    pages: "Ch4",
    context: "Social identity theory and minimal group paradigm showing how easily group boundaries form.",
  },
  {
    name: "Sidanius, Jim & Pratto, Felicia",
    field: "Political Psychology",
    works: [
      {
        title: "Social Dominance: An Intergroup Theory of Social Hierarchy and Oppression",
        type: "book" as const,
        year: 1999,
      },
    ],
    pages: "Ch4",
    context: "Social dominance orientation theory explaining sex differences in support for group-based hierarchies.",
  },
  {
    name: "Le Bon, Gustave",
    field: "Social Psychology",
    works: [
      {
        title: "The Crowd: A Study of the Popular Mind",
        type: "book" as const,
        year: 1895,
      },
    ],
    pages: "Ch4",
    context: "Early work on crowd psychology and group behavior.",
  },
  {
    name: "Thrasher, Frederic M.",
    field: "Sociology",
    works: [
      {
        title: "The Gang: A Study of 1,313 Gangs in Chicago",
        type: "book" as const,
        year: 1927,
      },
    ],
    pages: "Ch4",
    context: "Classic study of male gang formation documenting the spontaneous organization of male groups into hierarchical structures.",
  },
  {
    name: "Bloom, Paul",
    field: "Developmental Psychology",
    works: [
      {
        title: "Just Babies: The Origins of Good and Evil",
        type: "book" as const,
        year: 2013,
      },
    ],
    pages: "Ch4",
    context: "Evidence that moral intuitions, including fairness and in-group preference, emerge in infancy.",
  },
  {
    name: "Hamlin, J. Kiley",
    field: "Developmental Psychology",
    works: [
      {
        title: "Social Evaluation by Preverbal Infants",
        type: "article" as const,
        year: 2007,
        publisher: "Nature",
      },
    ],
    pages: "Ch4",
    context: "Shows that even preverbal infants prefer prosocial over antisocial agents.",
  },
  {
    name: "Fehr, Ernst & Fischbacher, Urs",
    field: "Behavioral Economics",
    works: [
      {
        title: "The Nature of Human Altruism",
        type: "article" as const,
        year: 2003,
        publisher: "Nature",
      },
      {
        title: "Third-Party Punishment and Social Norms",
        type: "article" as const,
        year: 2004,
        publisher: "Evolution and Human Behavior",
      },
    ],
    pages: "Ch4",
    context: "Research on altruistic punishment and third-party enforcement of social norms, key to understanding male group cooperation.",
  },
  {
    name: "Hawkes, Kristen",
    field: "Anthropology",
    works: [
      {
        title: "Why Hunter-Gatherers Work: An Ancient Version of the Problem of Public Goods",
        type: "article" as const,
        year: 1993,
        publisher: "Current Anthropology",
      },
    ],
    pages: "Ch4",
    context: "Research on sex differences in foraging strategies among hunter-gatherers.",
  },
  {
    name: "McNeill, William H.",
    field: "History",
    works: [
      {
        title: "Keeping Together in Time: Dance and Drill in Human History",
        type: "book" as const,
        year: 1995,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Ch4",
    context: "Historical analysis of how synchronized movement (drilling, marching, dancing) builds group cohesion -- a key mechanism in male military organization.",
  },
  {
    name: "Wiltermuth, Scott S. & Heath, Chip",
    field: "Organizational Behavior",
    works: [
      {
        title: "Synchrony and Cooperation",
        type: "article" as const,
        year: 2009,
        publisher: "Psychological Science",
      },
    ],
    pages: "Ch4",
    context: "Experimental evidence that behavioral synchrony increases cooperation among group members.",
  },
  {
    name: "Baines, Ed & Blatchford, Peter",
    field: "Education",
    works: [
      {
        title: "Sex Differences in the Structure and Stability of Children's Playground Social Networks and Their Overlap with Friendship Relations",
        type: "article" as const,
        year: 2009,
        publisher: "British Journal of Developmental Psychology",
      },
    ],
    pages: "Ch4",
    context: "Evidence that boys form larger, more interconnected playground networks than girls.",
  },

  // ========================
  // CHAPTER 5: PROTECTING HERSELF (Pages 129-167)
  // ========================

  {
    name: "Nolen-Hoeksema, Susan",
    field: "Clinical Psychology",
    works: [
      {
        title: "Sex Differences in Unipolar Depression: Evidence and Theory",
        type: "article" as const,
        year: 1987,
        publisher: "Psychological Bulletin",
      },
      {
        title: "Gender Differences in Depression",
        type: "article" as const,
        year: 2001,
        publisher: "Current Directions in Psychological Science",
      },
    ],
    pages: "Ch5",
    context: "Research on women's greater tendency toward rumination and depression, linked to the worrier's heightened threat vigilance.",
  },
  {
    name: "Byrnes, James P.",
    field: "Psychology",
    works: [
      {
        title: "Gender Differences in Risk Taking: A Meta-Analysis",
        type: "article" as const,
        year: 1999,
        publisher: "Psychological Bulletin",
      },
    ],
    pages: "Ch5",
    context: "Meta-analysis confirming females' lower risk-taking across multiple domains.",
  },
  {
    name: "Hall, Judith A.",
    field: "Social Psychology",
    works: [
      {
        title: "Nonverbal Sex Differences: Communication Accuracy and Expressive Style",
        type: "book" as const,
        year: 1984,
      },
    ],
    pages: "Ch5",
    context: "Women's superior ability to read nonverbal cues, interpreted as part of the worrier's heightened social monitoring.",
  },
  {
    name: "Brody, Leslie R. & Hall, Judith A.",
    field: "Psychology",
    works: [
      {
        title: "Gender and Emotion in Context",
        type: "article" as const,
        year: 2008,
      },
    ],
    pages: "Ch5",
    context: "Research on sex differences in emotional expression and experience.",
  },
  {
    name: "LaFrance, Marianne",
    field: "Social Psychology",
    works: [
      {
        title: "Are Women the More Emotional Sex? Evidence from Meta-Analyses of Facial Displays of Smiling",
        type: "article" as const,
        year: 2003,
        publisher: "Psychological Bulletin",
      },
    ],
    pages: "Ch5",
    context: "Meta-analysis of sex differences in smiling behavior, with women smiling significantly more.",
  },
  {
    name: "Schumann, Karina & Ross, Michael",
    field: "Psychology",
    works: [
      {
        title: "Why Women Apologize More Than Men: Gender Differences in Thresholds for Perceiving Offensive Behavior",
        type: "article" as const,
        year: 2010,
        publisher: "Psychological Science",
      },
    ],
    pages: "Ch5",
    context: "Women apologize more because they have lower thresholds for perceiving behavior as offensive.",
  },
  {
    name: "Galinsky, Adam D.",
    field: "Social Psychology",
    works: [
      {
        title: "Power and Perspectives Not Taken",
        type: "article" as const,
        year: 2006,
        publisher: "Psychological Science",
      },
    ],
    pages: "Ch5",
    context: "Research on how power reduces perspective-taking, relevant to sex differences in social attention.",
  },
  {
    name: "Casanova, Jean-Laurent & Abel, Laurent",
    field: "Immunology / Genetics",
    works: [
      {
        title: "Inborn Errors of Immunity to Infection: The Rule Rather Than the Exception",
        type: "article" as const,
        year: 2007,
        publisher: "Journal of Experimental Medicine",
      },
    ],
    pages: "Ch5",
    context: "Evidence for sex differences in immune function relevant to women's greater health vigilance.",
  },
  {
    name: "Golombok, Susan & Fivush, Robyn",
    field: "Developmental Psychology",
    works: [
      {
        title: "Gender Development",
        type: "book" as const,
        year: 1994,
        publisher: "Cambridge University Press",
      },
    ],
    pages: "Ch5",
    context: "Comprehensive overview of gender development in children.",
  },
  {
    name: "Rosaldo, Michelle Z.",
    field: "Anthropology",
    works: [
      {
        title: "Woman, Culture, and Society",
        type: "book" as const,
        year: 1974,
        coAuthors: ["Louise Lamphere"],
      },
    ],
    pages: "Ch3, Ch5",
    context: "Foundational anthropological text on women's roles across cultures.",
  },
  {
    name: "Kristof, Nicholas & WuDunn, Sheryl",
    field: "Journalism",
    works: [
      {
        title: "Half the Sky: Turning Oppression into Opportunity for Women Worldwide",
        type: "book" as const,
        year: 2009,
      },
    ],
    pages: "Ch1, Ch5",
    context: "Documents the oppression and resilience of women worldwide.",
  },
  {
    name: "Post, Emily",
    field: "Etiquette / Social Norms",
    works: [
      {
        title: "Etiquette in Society, in Business, in Politics, and at Home",
        type: "book" as const,
        year: 1922,
      },
    ],
    pages: "Ch5",
    context: "Rules of social conduct illustrating women's role in maintaining social harmony.",
  },

  // ========================
  // CHAPTER 6: FEMALE FRIENDS (Pages 169-211)
  // ========================

  {
    name: "Simmons, Rachel",
    field: "Education / Popular Psychology",
    works: [
      {
        title: "Odd Girl Out: The Hidden Culture of Aggression in Girls",
        type: "book" as const,
        year: 2002,
      },
    ],
    pages: "Ch6",
    context: "Popular account of relational aggression and social exclusion among girls.",
  },
  {
    name: "Feshbach, Norma Deitch",
    field: "Psychology",
    works: [
      {
        title: "Sex Differences in Children's Modes of Aggressive Responses Toward Outsiders",
        type: "article" as const,
        year: 1969,
        publisher: "Merrill-Palmer Quarterly",
      },
    ],
    pages: "Ch6",
    context: "Early evidence that girls use social exclusion rather than physical aggression against outsiders.",
  },
  {
    name: "Sapolsky, Robert M.",
    field: "Neurobiology / Primatology",
    works: [
      {
        title: "The Influence of Social Hierarchy on Primate Health",
        type: "article" as const,
        year: 2005,
        publisher: "Science",
      },
    ],
    pages: "Ch6",
    context: "Research on how social hierarchy affects health and stress in primates, relevant to female status competition.",
  },
  {
    name: "Sterck, Elisabeth H. M.",
    field: "Primatology",
    works: [
      {
        title: "The Evolution of Female Social Relationships in Nonhuman Primates",
        type: "article" as const,
        year: 1997,
        publisher: "Behavioral Ecology and Sociobiology",
      },
    ],
    pages: "Ch6",
    context: "Theoretical framework for understanding female primate social relationships and competition.",
  },
  {
    name: "Leaper, Campbell & Holliday, Heithre",
    field: "Psychology",
    works: [
      {
        title: "Gossip in Same-Gender and Cross-Gender Friends' Conversations",
        type: "article" as const,
        year: 1995,
        publisher: "Personal Relationships",
      },
    ],
    pages: "Ch6",
    context: "Research on sex differences in gossip behavior and its social functions.",
  },
  {
    name: "Chesler, Phyllis",
    field: "Psychology / Feminism",
    works: [
      {
        title: "Woman's Inhumanity to Woman",
        type: "book" as const,
        year: 2001,
      },
    ],
    pages: "Ch6",
    context: "Documents patterns of female-on-female aggression, competition, and betrayal.",
  },
  {
    name: "Apter, Terri & Josselson, Ruthellen",
    field: "Psychology",
    works: [
      {
        title: "Best Friends: The Pleasures and Perils of Girls' and Women's Friendships",
        type: "book" as const,
        year: 1998,
      },
    ],
    pages: "Ch6",
    context: "Analysis of the unique intensity and fragility of female friendships.",
  },
  {
    name: "Heim, Pat",
    field: "Organizational Psychology",
    works: [
      {
        title: "In the Company of Women: Indirect Aggression Among Women",
        type: "book" as const,
        year: 2004,
        coAuthors: ["Susan Murphy", "Susan K. Golant"],
      },
    ],
    pages: "Ch6",
    context: "Documents indirect aggression among women in workplace settings, including findings from American Management Association survey of 1,000 women.",
  },
  {
    name: "Tracy, Noreen Cannon",
    field: "Psychology",
    works: [
      {
        title: "The Secret Between Us: Competition Among Women",
        type: "book" as const,
        year: 1991,
      },
    ],
    pages: "Ch6",
    context: "Analysis of hidden competition dynamics among women.",
  },
  {
    name: "Eichenbaum, Luise & Orbach, Susie",
    field: "Psychotherapy",
    works: [
      {
        title: "Between Women: Love, Envy, and Competition in Women's Friendships",
        type: "book" as const,
        year: 1988,
      },
    ],
    pages: "Ch6",
    context: "Psychoanalytic perspective on envy and competition in women's friendships.",
  },
  {
    name: "Von Hippel, William & Trivers, Robert",
    field: "Psychology / Evolutionary Biology",
    works: [
      {
        title: "The Evolution and Psychology of Self-Deception",
        type: "article" as const,
        year: 2011,
        publisher: "Behavioral and Brain Sciences",
      },
    ],
    pages: "Ch6",
    context: "Theory of self-deception relevant to understanding indirect female competition strategies.",
  },
  {
    name: "Kon, Igor S. & Losenkov, V. A.",
    field: "Sociology",
    works: [
      {
        title: "Friendship in Adolescence: Values and Behavior",
        type: "article" as const,
        year: 1978,
        publisher: "Journal of Marriage and the Family",
      },
    ],
    pages: "Ch6",
    context: "Soviet-era friendship studies showing cross-cultural consistency in sex differences in friendship patterns.",
  },
  {
    name: "Benenson, Joyce F. & Christakos, Athena",
    field: "Developmental Psychology",
    works: [
      {
        title: "The Greater Fragility of Females' Versus Males' Closest Same-Sex Friendships",
        type: "article" as const,
        year: 2003,
        publisher: "Child Development",
      },
    ],
    pages: "Ch6",
    context: "Key finding that girls' closest friendships are shorter-lived and more fragile than boys' -- central evidence for the worrier framework.",
  },

  // ========================
  // CHAPTER 7: ORGANIZING HER FAMILY (Pages 212-265)
  // ========================

  {
    name: "Chapais, Bernard",
    field: "Primatology / Anthropology",
    works: [
      {
        title: "Primeval Kinship: How Pair-Bonding Gave Birth to Human Society",
        type: "book" as const,
        year: 2008,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Ch7",
    context: "Theory linking pair-bonding to the origin of human social organization.",
  },
  {
    name: "Hamilton, William D.",
    field: "Evolutionary Biology",
    works: [
      {
        title: "The Genetical Evolution of Social Behaviour",
        type: "article" as const,
        year: 1964,
        publisher: "Journal of Theoretical Biology",
      },
    ],
    pages: "Ch7",
    context: "Foundational kin selection theory (Hamilton's rule) explaining altruism toward relatives.",
  },
  {
    name: "Nowak, Martin A.",
    field: "Evolutionary Biology / Mathematics",
    works: [
      {
        title: "The Evolution of Eusociality",
        type: "article" as const,
        year: 2010,
        publisher: "Nature",
      },
    ],
    pages: "Ch7",
    context: "Controversial paper on group selection and the evolution of complex social organization.",
  },
  {
    name: "Tannen, Deborah",
    field: "Linguistics",
    works: [
      {
        title: "You Just Don't Understand: Women and Men in Conversation",
        type: "book" as const,
        year: 1990,
        publisher: "William Morrow",
      },
    ],
    pages: "Ch7",
    context: "Sex differences in conversational style, with women emphasizing connection and men emphasizing status.",
  },
  {
    name: "Miller, Jean Baker",
    field: "Psychiatry / Feminist Psychology",
    works: [
      {
        title: "Toward a New Psychology of Women",
        type: "book" as const,
        year: 1976,
      },
    ],
    pages: "Ch7",
    context: "Feminist reconceptualization of women's psychological development emphasizing connection and care.",
  },
  {
    name: "Sear, Rebecca & Mace, Ruth",
    field: "Evolutionary Demography",
    works: [
      {
        title: "Who Keeps Children Alive? A Review of the Effects of Kin on Child Survival",
        type: "article" as const,
        year: 2008,
        publisher: "Evolution and Human Behavior",
      },
    ],
    pages: "Ch1[53], Ch7",
    context: "Review showing that maternal grandmothers have the strongest positive effect on child survival across cultures.",
  },
  {
    name: "Lahdenpera, Mirkka",
    field: "Biology",
    works: [
      {
        title: "Fitness Benefits of Prolonged Post-Reproductive Lifespan in Women",
        type: "article" as const,
        year: 2004,
        publisher: "Nature",
      },
    ],
    pages: "Ch7",
    context: "Evidence for the grandmother hypothesis: post-menopausal women increase their grandchildren's survival.",
  },
  {
    name: "Williamson, Laila",
    field: "Anthropology",
    works: [
      {
        title: "Infanticide: An Anthropological Analysis",
        type: "article" as const,
        year: 1978,
      },
    ],
    pages: "Ch7",
    context: "Cross-cultural analysis of infanticide patterns.",
  },
  {
    name: "Ainsworth, Mary D. Salter",
    field: "Developmental Psychology",
    works: [
      {
        title: "Patterns of Attachment: A Psychological Study of the Strange Situation",
        type: "book" as const,
        year: 1978,
      },
    ],
    pages: "Ch7",
    context: "Foundational work on attachment patterns between mothers and infants.",
  },
  {
    name: "Dawkins, Richard",
    field: "Evolutionary Biology",
    works: [
      {
        title: "The Selfish Gene",
        type: "book" as const,
        year: 1976,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Ch7",
    context: "Gene-centered view of evolution providing theoretical framework for understanding parental investment strategies.",
  },
  {
    name: "Hetherington, E. Mavis & Kelly, John",
    field: "Psychology",
    works: [
      {
        title: "For Better or for Worse: Divorce Reconsidered",
        type: "book" as const,
        year: 2002,
      },
    ],
    pages: "Ch7",
    context: "Research on divorce outcomes relevant to understanding women's family organization strategies.",
  },
  {
    name: "Strassmann, Beverly I.",
    field: "Anthropology",
    works: [
      {
        title: "Polygyny as a Risk Factor for Child Mortality Among the Dogon",
        type: "article" as const,
        year: 1997,
        publisher: "Current Anthropology",
      },
    ],
    pages: "Ch7",
    context: "Research on the Dogon of Mali showing costs of polygyny for child survival.",
  },
  {
    name: "Flinn, Mark V. & Ponzi, Davide",
    field: "Anthropology / Behavioral Endocrinology",
    works: [
      {
        title: "Hormonal Mechanisms for Regulation of Aggression in Human Coalitions",
        type: "article" as const,
        year: 2012,
        publisher: "Human Nature",
      },
    ],
    pages: "Ch7",
    context: "Hormonal regulation of aggression in the context of human coalitionary behavior.",
  },
  {
    name: "Nicolopoulou, Ageliki",
    field: "Developmental Psychology",
    works: [
      {
        title: "Narrative Play and Emergent Literacy",
        type: "article" as const,
        year: 2005,
      },
    ],
    pages: "Ch2, Ch7",
    context: "Research on sex differences in children's narrative play themes.",
  },
  {
    name: "Brown, Donald E.",
    field: "Anthropology",
    works: [
      {
        title: "Human Universals",
        type: "book" as const,
        year: 1991,
        publisher: "McGraw-Hill",
      },
    ],
    pages: "Ch3, Ch7",
    context: "Catalog of cross-cultural human universals including sex-differentiated behaviors.",
  },

  // ========================
  // ADDITIONAL IMPORTANT SOURCES (Cross-chapter)
  // ========================

  {
    name: "Watts, David P.",
    field: "Primatology",
    works: [
      {
        title: "Lethal Intergroup Aggression by Chimpanzees in Kibale National Park, Uganda",
        type: "article" as const,
        year: 2006,
        coAuthors: ["John C. Mitani"],
      },
      {
        title: "Intracommunity Coalitionary Killing of an Adult Male Chimpanzee at Ngogo",
        type: "article" as const,
        year: 2004,
      },
    ],
    pages: "Ch1[72,74,75], Ch2",
    context: "Documentation of lethal aggression among chimpanzees at Kibale, providing key evidence for the evolutionary roots of male coalitionary violence.",
  },
  {
    name: "Mitani, John C.",
    field: "Primatology",
    works: [
      {
        title: "Lethal Intergroup Aggression Leads to Territorial Expansion in Wild Chimpanzees",
        type: "article" as const,
        year: 2010,
        publisher: "Current Biology",
      },
    ],
    pages: "Ch1[72], Ch2",
    context: "Evidence that chimpanzee warfare results in territorial expansion, paralleling human patterns.",
  },
  {
    name: "Boesch, Christophe",
    field: "Primatology",
    works: [
      {
        title: "Cooperative Hunting in Wild Chimpanzees",
        type: "article" as const,
        year: 1989,
        publisher: "Animal Behaviour",
      },
    ],
    pages: "Ch1[33]",
    context: "Evidence for cooperative hunting among male chimpanzees.",
  },
  {
    name: "Smuts, Barbara B.",
    field: "Primatology / Anthropology",
    works: [
      {
        title: "Male Aggression Against Women: An Evolutionary Perspective",
        type: "article" as const,
        year: 1992,
        publisher: "Human Nature",
      },
    ],
    pages: "Ch1[35]",
    context: "Evolutionary perspective on male aggression against females across primate species.",
  },
  {
    name: "Hines, Melissa",
    field: "Neuroscience / Psychology",
    works: [
      {
        title: "Brain Gender",
        type: "book" as const,
        year: 2004,
        publisher: "Oxford University Press",
      },
    ],
    pages: "Ch2, Ch5",
    context: "Research on biological influences on sex-typed behavior and brain development.",
  },
  {
    name: "Moore, David S. & Johnson, Scott P.",
    field: "Developmental Psychology",
    works: [
      {
        title: "Mental Rotation in Human Infants: A Sex Difference",
        type: "article" as const,
        year: 2008,
        publisher: "Psychological Science",
      },
    ],
    pages: "Ch2",
    context: "Evidence for sex differences in spatial cognition emerging in infancy.",
  },
  {
    name: "McClure, Erin B.",
    field: "Developmental Psychology",
    works: [
      {
        title: "A Meta-Analytic Review of Sex Differences in Facial Expression Processing",
        type: "article" as const,
        year: 2000,
        publisher: "Psychological Bulletin",
      },
    ],
    pages: "Ch5",
    context: "Meta-analysis showing female advantage in processing facial expressions.",
  },
  {
    name: "Parsons, Talcott",
    field: "Sociology",
    works: [
      {
        title: "Working Papers in the Theory of Action",
        type: "book" as const,
        year: 1953,
        publisher: "Greenwood",
        coAuthors: ["Robert F. Bales", "Edward A. Shils"],
      },
    ],
    pages: "Ch1[10]",
    context: "Instrumental vs. expressive distinction in social roles, mapping onto the warrior/worrier framework.",
  },
  {
    name: "Gabriel, Richard A.",
    field: "Military History",
    works: [
      {
        title: "The Culture of War: Invention and Early Development",
        type: "book" as const,
        year: 1990,
        publisher: "Greenwood",
      },
    ],
    pages: "Ch1[69]",
    context: "History of warfare as a cultural institution.",
  },
  {
    name: "Eichstaedt, Peter",
    field: "Journalism",
    works: [
      {
        title: "First Kill Your Family: Child Soldiers in Uganda and the Lord's Resistance Army",
        type: "book" as const,
        year: 2009,
        publisher: "Lawrence Hill",
      },
    ],
    pages: "Ch1[76]",
    context: "Account of child soldiers in Uganda illustrating the weaponization of male coalitionary instincts.",
  },
  {
    name: "Vigil, Jacob M.",
    field: "Psychology",
    works: [
      {
        title: "Asymmetries in the Friendship Preferences and Social Styles of Men and Women",
        type: "article" as const,
        year: 2007,
        publisher: "Human Nature",
      },
    ],
    pages: "Ch3",
    context: "Research documenting sex differences in friendship preferences and social styles.",
  },
  {
    name: "Roy, Reeshma & Benenson, Joyce F.",
    field: "Developmental Psychology",
    works: [
      {
        title: "Sex and Contextual Effects on Children's Use of Interference Competition",
        type: "article" as const,
        year: 2002,
        publisher: "Developmental Psychology",
      },
    ],
    pages: "Ch2",
    context: "Experimental evidence for sex differences in competitive strategies.",
  },
  {
    name: "Marmot, Michael",
    field: "Epidemiology",
    works: [
      {
        title: "Health Inequalities Among British Civil Servants: The Whitehall II Study",
        type: "article" as const,
        year: 1991,
        publisher: "Lancet",
      },
    ],
    pages: "Ch5",
    context: "Whitehall II study showing how social hierarchy affects health, relevant to women's health vigilance.",
  },
  {
    name: "Gater, Richard",
    field: "Psychiatry",
    works: [
      {
        title: "Sex Differences in the Prevalence and Detection of Depressive and Anxiety Disorders in General Health Care Settings",
        type: "article" as const,
        year: 1998,
        publisher: "Archives of General Psychiatry",
      },
    ],
    pages: "Ch5",
    context: "WHO collaborative study documenting sex differences in depression and anxiety prevalence.",
  },
  {
    name: "Mustard, Cameron A.",
    field: "Epidemiology",
    works: [
      {
        title: "Sex Differences in the Use of Health Care Services",
        type: "article" as const,
        year: 1998,
        publisher: "New England Journal of Medicine",
      },
    ],
    pages: "Ch5",
    context: "Manitoba health care utilization study showing women use more health services across the lifespan.",
  },

  // ========================
  // REFERENCED LITERATURE / FICTION
  // ========================

  {
    name: "Rowling, J. K.",
    field: "Literature (Fiction)",
    works: [
      {
        title: "Harry Potter series",
        type: "book" as const,
        year: "1997-2007",
      },
    ],
    pages: "Referenced as illustration",
    context: "Used as cultural illustration of male group dynamics and hierarchical friendship structures.",
  },
  {
    name: "Bemelmans, Ludwig",
    field: "Literature (Children's)",
    works: [
      {
        title: "Madeline",
        type: "book" as const,
        year: 1939,
      },
    ],
    pages: "Referenced as illustration",
    context: "Used as cultural illustration of female social dynamics.",
  },
  {
    name: "Clemens, Samuel (Mark Twain)",
    field: "Literature (Fiction)",
    works: [
      {
        title: "The Adventures of Tom Sawyer",
        type: "book" as const,
        year: 1876,
      },
    ],
    pages: "Referenced as illustration",
    context: "Used as cultural illustration of boys' group dynamics, adventure, and warrior play.",
  },
  {
    name: "Ephron, Nora",
    field: "Literature / Journalism",
    works: [
      {
        title: "I Feel Bad About My Neck",
        type: "book" as const,
        year: 2006,
      },
    ],
    pages: "Ch7",
    context: "Used as illustration of women's health consciousness and self-monitoring.",
  },
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "Harvard University",
    type: "University",
    context: "Department of Human Evolutionary Biology (Wrangham's department); Benenson is associate member. Multiple researchers cited: Wrangham, Hrdy, Bloom, Chapais, McNeill.",
    pages: "Throughout",
  },
  {
    name: "Emmanuel College",
    type: "College",
    context: "Benenson's primary institutional affiliation.",
    pages: "Throughout",
  },
  {
    name: "Oxford University Press",
    type: "Publisher",
    context: "Publisher of the book.",
    pages: "N/A",
  },
  {
    name: "Peabody Museum at Harvard",
    type: "Museum / Research",
    context: "Steve LeBlanc provided feedback on the book; archaeological evidence of warfare.",
    pages: "Preface",
  },
  {
    name: "UNICEF",
    type: "International Organization",
    context: "Child mortality data and Millennium Development Goals; child soldiers data.",
    pages: "Ch1, Ch3",
  },
  {
    name: "United Nations",
    type: "International Organization",
    context: "Uganda National Report; military spending data; millennium development goals.",
    pages: "Ch1",
  },
  {
    name: "World Health Organization (WHO)",
    type: "International Organization",
    context: "Domestic violence data across 10 countries; depression and anxiety prevalence studies; Global Burden of Disease collaboration.",
    pages: "Ch3, Ch5",
  },
  {
    name: "World Bank",
    type: "International Organization",
    context: "Gender equality reports and global development data.",
    pages: "Ch1, Ch5",
  },
  {
    name: "American Psychiatric Association",
    type: "Professional Organization",
    context: "DSM-IV-TR diagnostic criteria referenced for anxiety disorders and depression.",
    pages: "Ch5",
  },
  {
    name: "Kibale National Park, Uganda",
    type: "Research Site",
    context: "Long-term chimpanzee research site (Watts, Wrangham, Mitani). Key data on lethal intergroup aggression.",
    pages: "Ch1, Ch2",
  },
  {
    name: "Gombe National Park, Tanzania",
    type: "Research Site",
    context: "Jane Goodall's chimpanzee research site. Foundational observations of chimpanzee warfare and social behavior.",
    pages: "Ch1, Ch2",
  },
  {
    name: "Global Day of Action on Military Spending (GDAMS)",
    type: "International Campaign",
    context: "Military vs. development spending data illustrating the scale of male coalitionary violence infrastructure.",
    pages: "Ch4",
  },
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "NICHD Study of Early Child Care and Youth Development (NICHD SECCYD)",
    authors: "National Institute of Child Health and Human Development",
    year: "1991-present",
    finding: "Begun in 1991 across 10 US cities; examines effects of day care on children's social and cognitive development.",
    pages: "Ch3",
  },
  {
    name: "Robbers Cave Experiment",
    authors: "Muzafer Sherif et al.",
    year: "1961",
    finding: "Eagles vs Rattlers summer camp study in Oklahoma demonstrating that intergroup competition rapidly creates in-group solidarity, hierarchical organization, and out-group hostility among boys.",
    pages: "Ch4",
  },
  {
    name: "Global Burden of Disease Study",
    authors: "Murray, C. J. L. & Lopez, A. D.",
    year: "1997",
    finding: "Worldwide mortality data by cause for eight regions, providing baseline for understanding sex-differentiated survival challenges.",
    pages: "Ch1",
  },
  {
    name: "Whitehall II Study",
    authors: "Marmot, M. et al.",
    year: "1991",
    finding: "Health inequalities among British civil servants showing that lower social status correlates with worse health outcomes, relevant to women's heightened sensitivity to social hierarchy.",
    pages: "Ch5",
  },
  {
    name: "Dunedin Longitudinal Study",
    authors: "Moffitt, T. E. et al.",
    year: "2001",
    finding: "Longitudinal study documenting sex differences in antisocial behaviour from childhood through adulthood, with males showing consistently higher rates of physical aggression.",
    pages: "Ch1",
  },
  {
    name: "WHO Multi-Country Study on Women's Health and Domestic Violence",
    authors: "World Health Organization",
    year: "2005",
    finding: "Data from 10 countries documenting prevalence of domestic violence against women, illustrating the threats that shaped female self-protective strategies.",
    pages: "Ch3",
  },
  {
    name: "WHO Collaborative Study on Sex Differences in Depression and Anxiety",
    authors: "Gater, R. et al.",
    year: "1998",
    finding: "Cross-national data showing women have significantly higher rates of depression and anxiety disorders across diverse cultural settings.",
    pages: "Ch5",
  },
  {
    name: "Minnesota Child Guidance Clinic Follow-up",
    authors: "Roff, M.",
    year: "1961",
    finding: "Boys treated at the clinic who later fought in WWII; examined relationship between childhood social adjustment and adult military performance.",
    pages: "Ch3",
  },
  {
    name: "Manitoba Health Care Utilization Study",
    authors: "Mustard, C. A. et al.",
    year: "1998",
    finding: "Canadian single-payer health records showing women use significantly more health services than men across the lifespan, consistent with greater health vigilance.",
    pages: "Ch5",
  },
  {
    name: "American Management Association Survey on Workplace Undermining",
    authors: "Via Heim, P. et al.",
    year: "2004",
    finding: "Survey of 1,000 women documenting high rates of indirect aggression and undermining among women in workplace settings.",
    pages: "Ch6",
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
  title: "Warriors and Worriers",
  subtitle: "The Survival of the Sexes",
  author: "Joyce F. Benenson",
  publisher: "Oxford University Press",
  year: 2014,
  description:
    "Argues that males and females have evolved fundamentally different survival strategies: males as 'warriors' who form coalitions to compete against out-groups, and females as 'worriers' who prioritize self-protection and family investment. Draws on developmental psychology, primatology, anthropology, and evolutionary biology across 7 chapters covering enemy fighting, male friendship, military organization, female self-protection, female friendship, and family organization.",
};
