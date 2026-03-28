// rc-references-data.ts
// Structured reference data for "Raising Cain"
// Source: RaisingCain/analysis/sources-raw.md

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
  // ---- Chapter 1: The Emotional Miseducation of Boys ----
  {
    name: "Izard, Carroll",
    field: "Developmental Psychology",
    works: [
      {
        title: "Emotion Knowledge, Social Competence, and Behavior Problems in Disadvantaged Children",
        type: "study" as const,
        year: 1997,
        publisher: "Paper presented at the biennial meeting of the Society for Research on Child Development, Washington, DC",
        coAuthors: ["D. Schultz", "B. P. Ackerman"],
      },
    ],
    pages: "Ch. 1, Notes (endnote 1)",
    context: "Foundational influence on authors' concept of emotional literacy; deficits in understanding emotion expressions contribute to behavior problems.",
    keyFigure: true,
  },
  {
    name: "Brody, Leslie R.",
    field: "Gender Differences in Emotional Expression",
    works: [
      {
        title: "Gender, Emotional Expression, and Parent-Child Boundaries",
        type: "other" as const,
        year: 1996,
        publisher: "Lawrence Erlbaum, Mahwah, NJ (in Emotion: Interdisciplinary Perspectives, ed. Kavanaugh, Zimmerberg, Fein)",
      },
    ],
    pages: "Ch. 1 (p. 9-10), Notes (endnote 2)",
    context: "Leading authority on gender differences; describes developmental shift where males become less facially expressive with age while females become more so.",
    keyFigure: true,
  },
  {
    name: "Fabes, Richard A.",
    field: "Developmental Psychology / Empathy",
    works: [
      {
        title: "The Relations of Children's Emotion Regulation to Their Vicarious Emotional Responses and Comforting Behaviors",
        type: "study" as const,
        year: 1994,
        publisher: "Child Development 65: 1678-93",
        coAuthors: ["Nancy Eisenberg", "M. Karbon", "D. Troyer", "G. Switzer"],
      },
    ],
    pages: "Ch. 1 (p. 14), Notes (endnote 3)",
    context: "Study played tape of crying baby to kindergarten/second-grade children; boys more stressed by crying were quicker to turn off speaker and more likely to act aggressively toward baby.",
    keyFigure: true,
  },
  {
    name: "McEwen, B. S.",
    field: "Neuroscience / Stress",
    works: [
      {
        title: "Paradoxical Effects of Adrenal Steroids on the Brain: Protection versus Degeneration",
        type: "study" as const,
        year: 1992,
        publisher: "Biological Psychiatry 31: 177-99",
        coAuthors: ["J. Angulo", "H. Cameron", "H. M. Chao", "D. Daniels", "et al."],
      },
    ],
    pages: "Ch. 1, Notes (endnote 4)",
    context: "Environmental factors can affect brain structure; prolonged stress causes hippocampal damage.",
  },
  {
    name: "Sapolsky, R.",
    field: "Neuroendocrinology",
    works: [
      {
        title: "The Neuroendocrinology of Stress and Aging: The Glucocorticoid Cascade Hypothesis",
        type: "study" as const,
        year: 1986,
        publisher: "Endocrinology Review 7: 284-301",
        coAuthors: ["L. Krey", "B. S. McEwen"],
      },
    ],
    pages: "Ch. 1, Notes (endnote 4)",
    context: "Stress regulation and hippocampal damage.",
  },
  {
    name: "Diamond, A.",
    field: "Developmental Neuroscience",
    works: [
      {
        title: "Rate of Maturation of the Hippocampus and the Developmental Progression of Children's Performance on the Delayed Non-Matching to Sample and Visual Paired Comparison Tasks",
        type: "article" as const,
        year: 1990,
        publisher: "Annals of the New York Academy of Sciences 608: 394-426",
      },
    ],
    pages: "Ch. 1, Notes (endnote 4)",
    context: "Memory dysfunction as manifestation of hippocampal damage.",
  },
  {
    name: "Bremmer, J. D.",
    field: "Psychiatry / PTSD",
    works: [
      {
        title: "MRI-Based Measurement of Hippocampal Volume in Patients with Combat-Related Post-traumatic Stress Disorder",
        type: "study" as const,
        year: 1995,
        publisher: "American Journal of Psychiatry 152: 973-81",
        coAuthors: ["P. Randall", "T. M. Scott", "et al."],
      },
    ],
    pages: "Ch. 1, Notes (endnote 4)",
    context: "Linked PTSD, hippocampal damage, and memory dysfunction in combat veterans.",
  },
  {
    name: "Maccoby, Eleanor",
    field: "Developmental Psychology / Gender Differences",
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
        publisher: "Belknap Press of Harvard University Press",
      },
    ],
    pages: "Ch. 1, Ch. 2, Notes (endnote 5), References",
    context: "Seminal work on sex differences research. Cited multiple times across chapters.",
    keyFigure: true,
  },
  {
    name: "Blum, Deborah",
    field: "Biology of Sex Differences",
    works: [
      {
        title: "Sex on the Brain: The Biological Differences Between Men and Women",
        type: "book" as const,
        year: 1997,
        publisher: "Viking",
      },
    ],
    pages: "Ch. 1, Notes (endnote 5), References",
    context: "General source on biological sex differences.",
  },
  {
    name: "Shibley, J.",
    field: "Educational Psychology",
    works: [
      {
        title: "Gender Differences in Mathematics Performance: A Metaanalysis",
        type: "study" as const,
        year: 1990,
        publisher: "Psychological Bulletin 107: 139-55",
        coAuthors: ["E. F. Hyde", "S. J. Lamon"],
      },
    ],
    pages: "Ch. 1, Notes (endnote 6)",
    context: "Girls tend to do slightly better overall in math.",
  },
  {
    name: "Tremblay, R. E.",
    field: "Biological Bases of Violence / Testosterone Research",
    works: [
      {
        title: "Male Physical Aggression, Social Dominance and Testosterone Levels at Puberty",
        type: "other" as const,
        year: 1997,
        publisher: "In Biosocial Bases of Violence (ed. Raine et al.), Plenum Press",
        coAuthors: ["B. Schaal", "B. Boulerice", "L. Arseneault", "R. Soussignan", "D. Perusse"],
      },
    ],
    pages: "Ch. 1 (p. 15), Ch. 11, Notes (endnote 7)",
    context: "No evidence of association between testosterone and aggressive behavior in preadolescent/early adolescent boys.",
    keyFigure: true,
  },
  {
    name: "Archer, J.",
    field: "Psychology / Aggression",
    works: [
      {
        title: "The Influence of Testosterone on Human Aggression",
        type: "article" as const,
        year: 1991,
        publisher: "British Journal of Psychology 82: 1-28",
      },
      {
        title: "The Behavioral Biology of Aggression",
        type: "book" as const,
        year: 1988,
        publisher: "Cambridge University Press",
      },
    ],
    pages: "Ch. 1, Ch. 11, Notes (endnotes 4, 7)",
    context: "Little or no conclusive evidence that testosterone facilitates aggression in primates. Different neural pathways for different types of aggression.",
  },
  {
    name: "Constantino, J. N.",
    field: "Child Psychiatry",
    works: [
      {
        title: "Testosterone and Aggression in Children",
        type: "study" as const,
        year: 1993,
        publisher: "Journal of the American Academy of Child and Adolescent Psychiatry 32: 1217-22",
        coAuthors: ["D. Grosz", "P. Saenger", "D. W. Chandler", "R. Nandi", "F. J. Earls"],
      },
    ],
    pages: "Ch. 1 (p. 15-16), Notes (endnote 8)",
    context: "Study at Bronx Children's Psychiatric Center; most violent young boys had normal testosterone levels; elevated testosterone may be effect rather than cause of aggression.",
  },
  {
    name: "Robarchek, C. A.",
    field: "Anthropology / Peace Studies",
    works: [
      {
        title: "Ghosts and Witches: The Psychocultural Dynamics of Semoi Peacefulness",
        type: "other" as const,
        year: 1994,
        publisher: "In The Anthropology of Peace and Nonviolence, Lynne Rienner",
      },
    ],
    pages: "Ch. 1 (p. 15-16), Notes (endnote 9)",
    context: "The Semoi of Malaysia as one of the most peaceful societies known.",
  },
  {
    name: "Briggs, J. L.",
    field: "Anthropology",
    works: [
      {
        title: "Never in Anger: Portrait of an Eskimo Family",
        type: "book" as const,
        year: 1970,
        publisher: "Harvard University Press",
      },
    ],
    pages: "Ch. 1, Notes (endnote 9)",
    context: "Cultural influences on aggressive behavior.",
  },
  {
    name: "Pleck, J. H.",
    field: "Adolescent Male Behavior / Masculinity Ideology",
    works: [
      {
        title: "Masculinity Ideology: Its Impact on Adolescent Males' Heterosexual Relationships",
        type: "study" as const,
        year: 1993,
        publisher: "Journal of Social Issues 49: 11-29",
        coAuthors: ["F. L. Sonenstein", "L. C. Ku"],
      },
      {
        title: "National Survey of Adolescent Males",
        type: "report" as const,
        year: 1996,
        publisher: "Urban Institute, Washington, DC",
        coAuthors: ["F. L. Sonenstein", "L. C. Ku", "L. C. Burbridge"],
      },
      {
        title: "Paternal Involvement: Levels, Sources, and Consequences",
        type: "other" as const,
        year: 1997,
        publisher: "In The Role of the Father in Child Development (ed. M. E. Lamb), Wiley",
      },
    ],
    pages: "Ch. 1 (p. 17), Ch. 5, Notes (endnotes 7, 10)",
    context: "Survey showed boys who agreed more with masculinity ideology were more likely to drink, smoke pot, have unprotected sex, get suspended. Fathers in two-parent families slightly more involved than 20 years ago (15% gain).",
    keyFigure: true,
  },
  {
    name: "Lamb, M. E.",
    field: "Developmental Psychology / Parenting",
    works: [
      {
        title: "Parent Child Relationships",
        type: "other" as const,
        year: 1992,
        publisher: "In Developmental Psychology: An Advanced Textbook, Lawrence Erlbaum",
        coAuthors: ["R. D. Ketterlinus", "M. P. Fracasso"],
      },
    ],
    pages: "Ch. 1, Notes (endnote 11)",
    context: "Parents have gender-stereotypic notions even about infants.",
  },
  {
    name: "Denham, S.",
    field: "Emotional Development",
    works: [
      {
        title: "Socialization of Preschoolers' Emotion Understanding",
        type: "study" as const,
        year: 1994,
        publisher: "Developmental Psychology 30: 928-36",
        coAuthors: ["D. Zoller", "E. A. Couchoud"],
      },
    ],
    pages: "Ch. 1, Notes (endnote 12)",
    context: "Different emotional education for sons vs. daughters.",
  },
  {
    name: "Dunn, J.",
    field: "Developmental Psychology",
    works: [
      {
        title: "Family Talk about Feelings and Moral Sensibility (multiple articles)",
        type: "article" as const,
        year: "1991, 1995",
        publisher: "Developmental Psychology 27: 448-55; 31: 649-59",
        coAuthors: ["J. R. Brown", "various"],
      },
    ],
    pages: "Ch. 1, Notes (endnote 12)",
    context: "Mothers speak about sadness/distress more with daughters, anger more with sons.",
  },
  {
    name: "Leaper, C.",
    field: "Gender and Parenting",
    works: [
      {
        title: "Moderators of Gender Effects of Parents' Talk with Their Children: A Meta-Analysis",
        type: "study" as const,
        year: 1998,
        publisher: "Developmental Psychology 43: 3-27",
        coAuthors: ["J. Anderson", "P. Sanders"],
      },
    ],
    pages: "Ch. 1, Notes (endnote 12)",
    context: "Mothers talked more and used more supportive speech with daughters than sons.",
  },
  {
    name: "Cervantes, C. A.",
    field: "Gender and Emotional Socialization",
    works: [
      {
        title: "Labels And Explanations in Mother-Child Emotion Talk: Age and Gender Differentiation",
        type: "study" as const,
        year: 1998,
        publisher: "Developmental Psychology 34: 88-98",
        coAuthors: ["M. A. Callanan"],
      },
    ],
    pages: "Ch. 1, Notes (endnote 13)",
    context: "Mothers use more emotional explanations with boys; connection between parent-child emotional conversation and later understanding.",
  },
  {
    name: "Wiesel, Elie",
    field: "Biblical Interpretation / Philosophy",
    works: [
      {
        title: "Cain and Abel: The First Genocide",
        type: "book" as const,
        year: 1976,
        publisher: "In Messengers of God: Biblical Portraits and Legends, Random House",
      },
    ],
    pages: "Ch. 1 (p. 18)",
    context: "Analysis of Cain and Abel story as parable for boys' emotional lives.",
  },

  // ---- Chapter 2: The Road Not Taken / School ----
  {
    name: "Rosenthal, Robert",
    field: "Educational Psychology",
    works: [
      {
        title: "Bloomer / Pygmalion Studies (teacher expectations)",
        type: "study" as const,
        year: "1960s",
        publisher: "Harvard University",
      },
    ],
    pages: "Ch. 2 (p. 30)",
    context: "Teachers' expectations shape student outcomes; 'bloomers' showed greater intellectual gains.",
  },
  {
    name: "Alexander, K. L.",
    field: "Educational Achievement",
    works: [
      {
        title: "Achievement in the First 2 Years of School: Patterns and Processes",
        type: "study" as const,
        year: 1988,
        publisher: "Monographs of the Society for Research in Child Development 53, serial 218",
        coAuthors: ["D. R. Entwisle"],
      },
    ],
    pages: "Ch. 2, Notes (endnote 1)",
    context: "By third grade, child has established learning pattern for entire school career.",
  },
  {
    name: "Halpern, Diane",
    field: "Cognitive Psychology / Sex Differences",
    works: [
      {
        title: "Sex Differences in Intelligence: Implications for Education",
        type: "article" as const,
        year: 1997,
        publisher: "American Psychologist 52: 1091-1102",
      },
    ],
    pages: "Ch. 2, Notes (endnote 2)",
    context: "Psychobiosocial model; inextricable links between biological bases of intelligence and environmental events.",
  },
  {
    name: "Huttenlocher, J.",
    field: "Language Development",
    works: [
      {
        title: "Early Vocabulary Growth: Relation to Language Input and Gender",
        type: "study" as const,
        year: 1991,
        publisher: "Developmental Psychology 27: 236-48",
        coAuthors: ["W. Haight", "A. Bryk", "M. Seltzer", "et al."],
      },
    ],
    pages: "Ch. 2, Notes (endnote 3)",
    context: "Girls' verbal abilities mature faster than boys'.",
  },
  {
    name: "Shaywitz, S. E.",
    field: "Learning Disabilities / Reading",
    works: [
      {
        title: "Prevalence of Reading Disability in Boys and Girls: Results of the Connecticut Longitudinal Study",
        type: "study" as const,
        year: 1990,
        publisher: "Journal of the American Medical Association 264: 998-1002",
        coAuthors: ["B. A. Shaywitz", "J. M. Fletcher", "M. D. Escobar"],
      },
    ],
    pages: "Ch. 2, Notes (endnote 3)",
    context: "Girls mature earlier in reading readiness.",
  },
  {
    name: "Kohnstamm, G. A.",
    field: "Temperament Research",
    works: [
      {
        title: "Temperament in Childhood: Cross-cultural and Sex Differences",
        type: "other" as const,
        year: 1989,
        publisher: "Wiley",
      },
    ],
    pages: "Ch. 2, Notes (endnote 4)",
    context: "Gender differences in activity level.",
  },
  {
    name: "Wolraich, M. L.",
    field: "ADHD Research",
    works: [
      {
        title: "Comparison of Diagnostic Criteria for Attention-Deficit Hyperactivity Disorder in a County-Wide Sample",
        type: "study" as const,
        year: 1996,
        publisher: "Journal of the American Academy of Child and Adolescent Psychiatry 35: 319-24",
        coAuthors: ["J. N. Hannah", "et al."],
      },
    ],
    pages: "Ch. 2 (p. 27), Notes (endnote 5)",
    context: "Study of 8,258 children in Tennessee; 4% of boys vs <1% of girls diagnosed hyperactive-impulsive ADD.",
  },
  {
    name: "Hallowell, N.",
    field: "ADHD",
    works: [
      {
        title: "Driven to Distraction",
        type: "book" as const,
        year: 1994,
        publisher: "Pantheon",
        coAuthors: ["J. Ratey"],
      },
    ],
    pages: "Ch. 2, Notes (endnote 8)",
    context: "ADD/ADHD diagnostic criteria reference.",
  },

  // ---- Chapter 3: Cruelty and Punishment ----
  {
    name: "Farrell, Warren",
    field: "Gender Politics / Criminal Justice",
    works: [
      {
        title: "The Myth of Male Power: Why Men Are the Disposable Sex",
        type: "book" as const,
        year: 1994,
        publisher: "Fourth Estate, London",
      },
    ],
    pages: "Ch. 3, Notes (endnote 1)",
    context: "Justice department statistics on gender disparity in sentencing.",
  },
  {
    name: "Strauss, Murray",
    field: "Family Violence / Corporal Punishment",
    works: [
      {
        title: "Beating the Devil Out of Them: Corporal Punishment in American Families",
        type: "book" as const,
        year: 1994,
        publisher: "Lexington Books",
      },
    ],
    pages: "Ch. 3, Notes (endnote 4)",
    context: "Most outspoken critic of spanking; 99% of parents used corporal punishment in 1950s, still over 90% in 1985.",
    keyFigure: true,
  },
  {
    name: "Davis, P. W.",
    field: "Child Abuse / Discipline",
    works: [
      {
        title: "Threats of Corporal Punishment as Verbal Aggression: A Naturalistic Study",
        type: "study" as const,
        year: 1996,
        publisher: "Child Abuse and Neglect 20: 289-304",
      },
    ],
    pages: "Ch. 3, Notes (endnote 5)",
    context: "300+ hours of observations in malls; verbal aggression most prevalent discipline; boys disciplined more harshly.",
  },
  {
    name: "Trickett, P. K.",
    field: "Child Abuse / Parenting",
    works: [
      {
        title: "Children's Misbehaviors and Parental Discipline Strategies in Abusive and Nonabusive Families",
        type: "study" as const,
        year: 1986,
        publisher: "Developmental Psychology 22: 115-23",
        coAuthors: ["L. Kuczynski"],
      },
    ],
    pages: "Ch. 3, Notes (endnote 6)",
    context: "Physical punishment most used for 'high-arousal transgressions'; normal parents were just as likely as abusive parents to use harsh punishment in high-arousal situations.",
  },
  {
    name: "Elder, G. H.",
    field: "Family Studies / Historical",
    works: [
      {
        title: "Parent-child Behavior in the Great Depression: Life Course and Inter-generational Influences",
        type: "study" as const,
        year: 1984,
        publisher: "Life-Span Development and Behavior 6: 109-58",
        coAuthors: ["J. K. Liker", "C. E. Cross"],
      },
    ],
    pages: "Ch. 3, Notes (endnote 8)",
    context: "Financial hardship particularly hard on fathers, leading to harsher discipline.",
  },
  {
    name: "Kochanska, Grazyna",
    field: "Conscience Development",
    works: [
      {
        title: "Toward a Synthesis of Parental Socialization and Child Temperament in the Development of Conscience",
        type: "article" as const,
        year: 1993,
        publisher: "Child Development 64: 325-47",
      },
    ],
    pages: "Ch. 3, Notes (endnote 9)",
    context: "Role of different memory processes (semantic vs. episodic) in conscience development.",
    keyFigure: true,
  },
  {
    name: "Hoffman, Martin L.",
    field: "Moral Development",
    works: [
      {
        title: "Discipline and Internalization",
        type: "article" as const,
        year: 1994,
        publisher: "Developmental Psychology 30: 26-28",
      },
    ],
    pages: "Ch. 3, Notes (endnote 9)",
    context: "Discipline and conscience development.",
    keyFigure: true,
  },
  {
    name: "Goldstein, Arnold P.",
    field: "Juvenile Delinquency",
    works: [
      {
        title: "Delinquents on Delinquency",
        type: "book" as const,
        year: 1990,
        publisher: "Research Press, Champaign, IL",
      },
    ],
    pages: "Ch. 3 (p. 49), Notes (endnote 10)",
    context: "Voices of delinquents on harsh parental discipline; 'anger just stays inside him'.",
  },
  {
    name: "Strassberg, Z.",
    field: "Child Development / Aggression",
    works: [
      {
        title: "Spanking in the Home and Children's Subsequent Aggression Toward Kindergarten Peers",
        type: "study" as const,
        year: 1994,
        publisher: "Development and Psychopathology 6: 445-61",
        coAuthors: ["K. A. Dodge", "G. S. Petit", "J. E. Bates"],
      },
    ],
    pages: "Ch. 3 (p. 49), Notes (endnote 11)",
    context: "Kindergartners spanked at home were more physically aggressive and more apt to be bullies at school.",
  },

  // ---- Chapter 4: Bullying / The Culture of Cruelty ----
  {
    name: "Olweus, D.",
    field: "Bullying Research",
    works: [
      {
        title: "Aggression in the Schools: Bullies and Whipping Boys",
        type: "book" as const,
        year: 1978,
        publisher: "Wiley",
      },
    ],
    pages: "Ch. 4, Notes (endnote 1)",
    context: "Boys who are systematically bullied or rejected.",
  },
  {
    name: "Gilmore, David",
    field: "Anthropology / Masculinity Studies",
    works: [
      {
        title: "Manhood in the Making: Cultural Concepts of Masculinity",
        type: "book" as const,
        year: 1990,
        publisher: "Yale University Press",
      },
    ],
    pages: "Ch. 4 (p. 55)",
    context: "Manhood as 'a prize to be won or wrested through struggle'; 'Big Impossible' of manhood.",
    keyFigure: true,
  },
  {
    name: "Golding, William",
    field: "Literature",
    works: [
      {
        title: "Lord of the Flies",
        type: "book" as const,
        year: 1954,
      },
    ],
    pages: "Ch. 4 (p. 54)",
    context: "Classic scapegoat 'Piggy' as archetype of boy cruelty; read in 7th-8th grade English.",
  },
  {
    name: "Signorile, Michelangelo",
    field: "LGBTQ Studies",
    works: [
      {
        title: "Queer in America: Sex, Media, and the Closets of Power",
        type: "book" as const,
        year: 1993,
        publisher: "Bantam Doubleday Dell",
      },
    ],
    pages: "Ch. 4 (p. 57), Notes (endnote 5)",
    context: "As teenager, joined gang that beat up boys suspected of being gay to defend against own homosexual feelings.",
  },

  // ---- Chapter 5: Fathers and Sons ----
  {
    name: "Duncan, Greg",
    field: "Father Involvement / Child Development",
    works: [
      {
        title: "Fathers' Activities and Child Attainments (Panel Study of Income Dynamics)",
        type: "study" as const,
        year: 1996,
        publisher: "NICHD Conference on Father Involvement",
        coAuthors: ["colleagues at University of Michigan"],
      },
    ],
    pages: "Ch. 5 (p. 67), Notes (endnote 3)",
    context: "1,000+ intact families studied over 27 years; father attendance at PTA meetings was most influential factor in child's income at age 27.",
    keyFigure: true,
  },
  {
    name: "Harris, K. M.",
    field: "Father Involvement",
    works: [
      {
        title: "Paternal Involvement with Adolescents in Intact Families: The Influence of Fathers over the Life Course",
        type: "study" as const,
        year: 1998,
        publisher: "Demography 35: 201-16",
        coAuthors: ["F. F. Furstenberg Jr.", "J. K. Kramer"],
      },
    ],
    pages: "Ch. 5 (p. 67), Notes (endnote 4)",
    context: "584 children studied over 11 years; emotionally close and highly involved fathers led to greater educational attainment and less delinquency.",
  },
  {
    name: "Koestner, R.",
    field: "Empathy Development",
    works: [
      {
        title: "The Family Origins of Empathic Concern: A 26-Year Longitudinal Study",
        type: "study" as const,
        year: 1990,
        publisher: "Journal of Personality and Social Psychology 58: 709-17",
        coAuthors: ["C. Franz", "J. Weinberger"],
      },
    ],
    pages: "Ch. 5 (p. 67), Notes (endnote 5)",
    context: "Continuation of Patterns of Child Rearing study by Robert Sears and Eleanor Maccoby; most influential factor for empathy at age 31 was whether father was involved in child's care.",
    keyFigure: true,
  },
  {
    name: "Erikson, Erik",
    field: "Developmental Psychology",
    works: [
      {
        title: "Identity Youth and Crisis",
        type: "book" as const,
        year: 1968,
        publisher: "W. W. Norton",
      },
    ],
    pages: "Ch. 5 (p. 69)",
    context: "Boys in middle childhood as 'purposeful, productive, and proud'.",
  },
  {
    name: "Larson, Reed",
    field: "Family Psychology",
    works: [
      {
        title: "Divergent Realities: The Emotional Lives of Mothers, Fathers, and Adolescents",
        type: "book" as const,
        year: 1994,
        publisher: "Basic Books",
        coAuthors: ["Mayse Richards"],
      },
    ],
    pages: "Ch. 5 (p. 71), Notes (endnote 10)",
    context: "'Beeper study' -- 50% of the time fathers and sons reported completely different experiences of same shared moment; fathers are the 'weak link' in emotional life of family.",
    keyFigure: true,
  },
  {
    name: "Youniss, J.",
    field: "Adolescent Psychology",
    works: [
      {
        title: "Adolescent Relations with Mothers, Fathers and Friends",
        type: "book" as const,
        year: 1985,
        publisher: "University of Chicago Press",
        coAuthors: ["J. Smollar"],
      },
    ],
    pages: "Ch. 5, Notes (endnote 11)",
    context: "Sons most frequently identified father as person least likely to confide true feelings to.",
  },
  {
    name: "DeLong, T.",
    field: "Work-Family Balance",
    works: [
      {
        title: "Managers as Fathers: Hope on the Homefront",
        type: "article" as const,
        year: 1992,
        publisher: "Human Resource Management 32: 178",
        coAuthors: ["C. C. DeLong"],
      },
    ],
    pages: "Ch. 5 (p. 69), Notes (endnote 8)",
    context: "Survey of 300 male executives; majority wished they could have been closer to their fathers.",
  },
  {
    name: "Sandburg, Carl",
    field: "Literature / Autobiography",
    works: [
      {
        title: "Always the Young Stranger",
        type: "book" as const,
        year: 1953,
      },
    ],
    pages: "Ch. 5 (p. 65)",
    context: "Moment of emotional distance between father and son; 'a rich soft wanting' for father's love.",
  },

  // ---- Chapter 6: Mothers and Sons ----
  {
    name: "Fromm, Erich",
    field: "Philosophy / Psychology",
    works: [
      {
        title: "Quoted on mother as 'all-enveloping, protective nourishing power'",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "Ch. 6 (p. 79)",
    context: "The child experiences mother as food, love, warmth, earth.",
  },
  {
    name: "Brown, Margaret Wise",
    field: "Children's Literature",
    works: [
      {
        title: "The Runaway Bunny",
        type: "book" as const,
        year: 1942,
      },
    ],
    pages: "Ch. 6 (p. 79)",
    context: "Celebrates dance of separation and connection between mother and child.",
  },
  {
    name: "Sendak, Maurice",
    field: "Children's Literature",
    works: [
      {
        title: "Where the Wild Things Are",
        type: "book" as const,
        year: 1963,
      },
    ],
    pages: "Ch. 6 (p. 92)",
    context: "Boy Max's journey to wildness and return to comfort of home and mother's love.",
  },
  {
    name: "Liu, D.",
    field: "Neuroscience / Maternal Care",
    works: [
      {
        title: "Maternal Care, Hippocampal Glucocorticoid Receptors and Hypothalamic-Pituitary-Adrenal Responses to Stress",
        type: "study" as const,
        year: 1997,
        publisher: "Science 277: 1659-62",
        coAuthors: ["et al.", "R. M. Sapolsky (commentary)"],
      },
    ],
    pages: "Ch. 6, Notes (endnote 2)",
    context: "Mother rats who lick/groom pups more have offspring with healthier adult stress responses; directly relevant to humans.",
  },

  // ---- Chapter 8: Depression / Suicide ----
  {
    name: "Rosenberg, M.",
    field: "Public Health / Suicide",
    works: [
      {
        title: "The Emergence of Youth Suicide: An Epidemiologic Analysis and Public Health Perspective",
        type: "article" as const,
        year: 1987,
        publisher: "Annual Review of Public Health 8: 420",
        coAuthors: ["J. Smith", "L. Davidson", "J. Cohn"],
      },
    ],
    pages: "Ch. 8, Notes (endnote 1)",
    context: "Suicide rate for adolescents gone up from under 4% in 1950 to nearly 15% in 1986.",
  },
  {
    name: "Birmaher, B.",
    field: "Child Psychiatry / Depression",
    works: [
      {
        title: "Childhood and Adolescent Depression: A Review of the Past 10 Years (Parts I and II)",
        type: "article" as const,
        year: 1996,
        publisher: "Journal of the American Academy of Child and Adolescent Psychiatry 35: 1427-39; 1575-83",
        coAuthors: ["et al."],
      },
    ],
    pages: "Ch. 8, Notes (endnote 2)",
    context: "Prevalence of major depression and dysthymia in children and adolescents.",
  },
  {
    name: "Remafedi, Gary",
    field: "LGBTQ Youth / Suicide",
    works: [
      {
        title: "Death by Denial: Studies of Suicide in Gay and Lesbian Teenagers",
        type: "book" as const,
        year: 1997,
        publisher: "Alyson Publications, Boston",
      },
    ],
    pages: "Ch. 8, Notes (endnote 4)",
    context: "Gay orientation in hostile environment as significant risk factor for suicide.",
  },

  // ---- Chapter 9: Risk-Taking ----
  {
    name: "Canada, Geoffrey",
    field: "Youth Development / Masculinity",
    works: [
      {
        title: "Reaching Up for Manhood: Transforming the Lives of Boys in America",
        type: "book" as const,
        year: 1998,
        publisher: "Beacon Press, Boston",
      },
    ],
    pages: "Ch. 9 (p. 115, 118)",
    context: "Risk-taking as way of life; 'we accepted the folklore that being a man meant being able to hold your liquor'.",
  },

  // ---- Chapter 10: Sex / Sexuality ----
  {
    name: "Lefkowitz, Bernard",
    field: "Sociology / Sexual Violence",
    works: [
      {
        title: "Our Guys: The Glen Ridge Rape and the Secret Life of the Perfect Suburb",
        type: "book" as const,
        year: 1997,
        publisher: "University of California Press, Berkeley",
      },
    ],
    pages: "Ch. 10 (p. 139)",
    context: "Gang rape of mentally retarded girl by high school football players; culture of athletic entitlement and sexual exploitation.",
  },
  {
    name: "Luria, Zella",
    field: "Developmental Psychology / Sexuality",
    works: [
      {
        title: "Research on parents talking to boys about masturbation",
        type: "study" as const,
        year: "n.d.",
        publisher: "Tufts University",
      },
    ],
    pages: "Ch. 10 (p. 133)",
    context: "Most parents talk to boys about masturbation at 13, about two years too late.",
  },

  // ---- Chapter 11: Violence ----
  {
    name: "Dodge, Ken",
    field: "Aggression Research",
    works: [
      {
        title: "Social Competence in Children",
        type: "study" as const,
        year: 1986,
        publisher: "Monographs of the Society for Research in Child Development",
        coAuthors: ["G. S. Pettit", "C. L. McClaskey", "M. M. Brown"],
      },
      {
        title: "Hostile Attributional Bias among Aggressive Boys Are Exacerbated under Conditions of Threat to Self",
        type: "study" as const,
        year: 1987,
        publisher: "Child Development 58: 213-24",
        coAuthors: ["D. R. Somberg"],
      },
    ],
    pages: "Ch. 11 (p. 149), Notes (endnote 7)",
    context: "Aggressive boys misinterpret intentions of others, see hostility where it does not exist, and feel aggression is justified; videotape studies of boys' perception of neutral events.",
    keyFigure: true,
  },
  {
    name: "Moffitt, T. E.",
    field: "Criminology / Neuropsychology",
    works: [
      {
        title: "The Neuropsychology of Juvenile Delinquency: A Critical Review of Research and Theory",
        type: "article" as const,
        year: 1990,
        publisher: "In Crime and Justice, vol. 12, University of Chicago Press",
      },
    ],
    pages: "Ch. 11, Notes (endnote 9)",
    context: "Boys not adept with verbal expression at increased risk for aggression and delinquency.",
  },

  // ---- Chapter 12: What Can We Do? ----
  {
    name: "Winnicott, Donald W.",
    field: "Psychoanalysis / Child Development",
    works: [
      {
        title: "The Child, the Family, and the Outside World",
        type: "book" as const,
        year: 1964,
      },
    ],
    pages: "Ch. 12 (p. 155)",
    context: "Epigraph for Ch. 12 on what the 'normal child' is like.",
  },
  {
    name: "Pipher, Mary",
    field: "Adolescent Girls / Psychology",
    works: [
      {
        title: "Reviving Ophelia",
        type: "book" as const,
        year: 1994,
      },
    ],
    pages: "Ch. 12 (p. 165), Reader's Guide",
    context: "Referenced as parallel work on girls; culture is 'toxic for girls' with narrow definitions of beauty.",
    keyFigure: true,
  },
  {
    name: "Muggeridge, Anne Roche",
    field: "Parenting",
    works: [
      {
        title: "Boys Should Be Boys",
        type: "article" as const,
        year: "n.d.",
        publisher: "Roxbury Latin School Newsletter",
      },
    ],
    pages: "Ch. 12 (p. 159)",
    context: "'Don't treat your boys with tranquilizers... simply wear them out'.",
  },

  // ---- Introduction / Other Chapters ----
  {
    name: "Payne, Robert",
    field: "Biography",
    works: [
      {
        title: "The Life and Death of Mahatma Gandhi",
        type: "book" as const,
        year: 1969,
      },
    ],
    pages: "Ch. 2 (p. 36)",
    context: "Gandhi was 'often boisterous' as a schoolboy; described school as 'the most miserable years of his life'.",
  },
  {
    name: "Wolff, Geoffrey",
    field: "Memoir / Literature",
    works: [
      {
        title: "The Duke of Deception",
        type: "book" as const,
        year: 1979,
      },
    ],
    pages: "Introduction (p. 4), Reader's Guide",
    context: "'My mind is never completely empty of my father'.",
  },
  {
    name: "Wolff, Tobias",
    field: "Memoir / Literature",
    works: [
      {
        title: "This Boy's Life: A Memoir",
        type: "book" as const,
        year: 1989,
        publisher: "Harper & Row",
      },
    ],
    pages: "Ch. 10 (p. 135), Reader's Guide",
    context: "Film version cited for portrayal of ninth-grade boys' sexual bravado; considered best book about adolescent boys.",
  },

  // ---- Literary / Cultural Epigraphs ----
  {
    name: "Wolfe, Thomas",
    field: "Literature",
    works: [
      {
        title: "Of Time and the River",
        type: "book" as const,
        year: 1935,
      },
    ],
    pages: "Ch. 1 epigraph",
    context: "Epigraph for Chapter 1.",
  },
  {
    name: "Carroll, Lewis",
    field: "Literature",
    works: [
      {
        title: "Quote on boys",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "Ch. 2 epigraph",
    context: "Epigraph for Chapter 2.",
  },
  {
    name: "Johnson, Samuel",
    field: "Literature",
    works: [
      {
        title: "Quote on abuse",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "Ch. 3 epigraph",
    context: "Epigraph for Chapter 3.",
  },
  {
    name: "Balzac, Honore de",
    field: "Literature",
    works: [
      {
        title: "Quote on cruelty and fear",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "Ch. 4 epigraph",
    context: "Epigraph for Chapter 4.",
  },
  {
    name: "Fitzgerald, F. Scott",
    field: "Literature",
    works: [
      {
        title: "The Great Gatsby",
        type: "book" as const,
        year: 1925,
      },
      {
        title: "The Crack-Up",
        type: "other" as const,
        year: 1936,
      },
    ],
    pages: "Ch. 5 epigraph, Ch. 8 epigraph",
    context: "Epigraphs for Chapters 5 and 8.",
  },
  {
    name: "Irving, Washington",
    field: "Literature",
    works: [
      {
        title: "Quote on mother's love",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "Ch. 6 epigraph",
    context: "Epigraph for Chapter 6.",
  },
  {
    name: "Simon and Garfunkel",
    field: "Music",
    works: [
      {
        title: "I Am a Rock",
        type: "other" as const,
        year: 1965,
      },
    ],
    pages: "Ch. 7 epigraph",
    context: "Epigraph for Ch. 7 (Inside the Fortress of Solitude) -- 'I am a rock, I am an island'.",
  },
  {
    name: "McCartney, Paul",
    field: "Music",
    works: [
      {
        title: "Maybe I'm Amazed",
        type: "other" as const,
        year: 1970,
      },
    ],
    pages: "Ch. 10 epigraph",
    context: "Epigraph for Chapter 10.",
  },
  {
    name: "Shakespeare, William",
    field: "Literature",
    works: [
      {
        title: "Romeo and Juliet (Act 3, Scene 3)",
        type: "other" as const,
        year: "~1597",
      },
    ],
    pages: "Ch. 10 epigraph",
    context: "Epigraph for Chapter 10.",
  },
  {
    name: "Seneca",
    field: "Philosophy",
    works: [
      {
        title: "Quote on anger and delay",
        type: "other" as const,
        year: "~65 AD",
      },
    ],
    pages: "Ch. 11 epigraph",
    context: "Epigraph for Chapter 11.",
  },
  {
    name: "Orwell, George",
    field: "Literature",
    works: [
      {
        title: "Animal Farm",
        type: "book" as const,
        year: 1945,
      },
    ],
    pages: "Ch. 8 (p. 108)",
    context: "Draft horse analogy -- the worse things got, the more he just plowed.",
  },
  {
    name: "Plato",
    field: "Philosophy",
    works: [
      {
        title: "Quote on boys as 'of all wild beasts, the most difficult to manage'",
        type: "other" as const,
        year: "~380 BC",
      },
    ],
    pages: "Ch. 2 (p. 30)",
    context: "Ancient observation on the difficulty of raising boys.",
  },
  {
    name: "Hillel",
    field: "Philosophy / Religion",
    works: [
      {
        title: "A person too anxious about being shamed cannot learn",
        type: "other" as const,
        year: "~30 BC",
      },
    ],
    pages: "Ch. 2 (p. 23)",
    context: "Hebrew sage on shame and learning.",
  },
  {
    name: "Twain, Mark",
    field: "Literature",
    works: [
      {
        title: "Quotes on admiration/imitation and courage",
        type: "other" as const,
        year: "n.d.",
      },
    ],
    pages: "Ch. 5 (p. 66, 69), Ch. 12",
    context: "Multiple quotes used across chapters.",
  },

  // ---- Section VI: Additional Works in References Section ----
  {
    name: "Beal, C. R.",
    field: "Developmental Psychology / Gender",
    works: [
      {
        title: "Boys and Girls: The Development of Gender Roles",
        type: "book" as const,
        year: 1994,
      },
    ],
    pages: "References section",
    context: "Additional reference on gender role development.",
  },
  {
    name: "Eron, L. D.",
    field: "Violence / Aggression",
    works: [
      {
        title: "Gender Differences in Violence",
        type: "other" as const,
        year: 1992,
      },
    ],
    pages: "References section",
    context: "Additional reference on gender differences in violence.",
  },
  {
    name: "Fivush, R.",
    field: "Emotional Development",
    works: [
      {
        title: "Emotional Content of Parent-Child Conversations about the Past",
        type: "other" as const,
        year: 1993,
      },
    ],
    pages: "References section",
    context: "Additional reference on parent-child emotional conversations.",
  },
  {
    name: "Cantwell, D. P.",
    field: "ADHD Research",
    works: [
      {
        title: "Attention Deficit Disorder: A Review of the Past 10 Years",
        type: "article" as const,
        year: 1996,
      },
    ],
    pages: "References section",
    context: "Additional reference on ADHD.",
  },
  {
    name: "Chamberlin, P.",
    field: "Parenting / Discipline",
    works: [
      {
        title: "Discipline and Child Compliance in Parenting",
        type: "other" as const,
        year: 1995,
        coAuthors: ["G. R. Patterson"],
      },
    ],
    pages: "References section",
    context: "Additional reference on discipline strategies.",
  },
  {
    name: "Conger, R.",
    field: "Family Stress",
    works: [
      {
        title: "Economic Stress, Coercive Family Processes...",
        type: "article" as const,
        year: 1994,
        coAuthors: ["et al."],
      },
    ],
    pages: "References section",
    context: "Additional reference on economic stress and family processes.",
  },
  {
    name: "Dishion, T. J.",
    field: "Peer Influence / Coercion",
    works: [
      {
        title: "The World of Parents and Peers Coercive Exchanges...",
        type: "article" as const,
        year: 1994,
        coAuthors: ["et al."],
      },
    ],
    pages: "References section",
    context: "Additional reference on parent and peer coercive exchanges.",
  },
  {
    name: "Hyman, I. A.",
    field: "Education / Discipline",
    works: [
      {
        title: "Reading Writing and the Hickory Stick",
        type: "book" as const,
        year: 1990,
      },
    ],
    pages: "References section",
    context: "Additional reference on corporal punishment in schools.",
  },
  {
    name: "Patterson, G. R.",
    field: "Antisocial Behavior",
    works: [
      {
        title: "A Developmental Perspective on Antisocial Behavior",
        type: "article" as const,
        year: 1989,
        coAuthors: ["et al."],
      },
    ],
    pages: "References section",
    context: "Additional reference on antisocial behavior development.",
  },
  {
    name: "Anthony, E.",
    field: "History / Masculinity",
    works: [
      {
        title: "American Manhood",
        type: "book" as const,
        year: 1993,
      },
    ],
    pages: "References section",
    context: "Additional reference on American manhood.",
  },
  {
    name: "Faludi, Susan",
    field: "Journalism / Gender",
    works: [
      {
        title: "The Naked Citadel",
        type: "article" as const,
        year: 1994,
        publisher: "The New Yorker",
      },
    ],
    pages: "References section",
    context: "Additional reference on masculinity and military culture.",
  },
  {
    name: "Grossman, D.",
    field: "Military Psychology",
    works: [
      {
        title: "On Killing",
        type: "book" as const,
        year: 1995,
      },
    ],
    pages: "References section",
    context: "Additional reference on the psychology of killing.",
  },
  {
    name: "Osherson, S.",
    field: "Father-Son Relationships",
    works: [
      {
        title: "Finding Our Fathers",
        type: "book" as const,
        year: 1986,
      },
      {
        title: "Wrestling with Love",
        type: "book" as const,
        year: 1992,
      },
    ],
    pages: "References section",
    context: "Additional references on father-son relationships and men's emotional lives.",
  },
  {
    name: "Parke, R. D.",
    field: "Fatherhood Research",
    works: [
      {
        title: "Fatherhood",
        type: "book" as const,
        year: 1996,
      },
    ],
    pages: "References section",
    context: "Additional reference on fatherhood.",
  },
  {
    name: "LaRossa, R.",
    field: "Fatherhood / Sociology",
    works: [
      {
        title: "The Modernization of Fatherhood",
        type: "book" as const,
        year: 1997,
      },
    ],
    pages: "References section",
    context: "Additional reference on the modernization of fatherhood.",
  },
  {
    name: "Levine, J. A.",
    field: "Work-Family Balance",
    works: [
      {
        title: "Working Fathers",
        type: "book" as const,
        year: 1997,
        coAuthors: ["T. L. Pittinsky"],
      },
    ],
    pages: "References section",
    context: "Additional reference on working fathers.",
  },
  {
    name: "Yogman, M. W.",
    field: "Pediatrics / Father Involvement",
    works: [
      {
        title: "Pediatric Opportunities with Fathers and Children",
        type: "article" as const,
        year: 1998,
        coAuthors: ["D. Kindlon"],
      },
    ],
    pages: "References section",
    context: "Additional reference co-authored by Dan Kindlon on pediatric opportunities with fathers.",
  },
  {
    name: "Elium, D.",
    field: "Parenting",
    works: [
      {
        title: "Raising a Son",
        type: "book" as const,
        year: 1994,
        coAuthors: ["J. Elium"],
      },
    ],
    pages: "References section",
    context: "Additional reference on raising sons.",
  },
  {
    name: "Silverstein, O.",
    field: "Parenting / Gender",
    works: [
      {
        title: "The Courage to Raise Good Men",
        type: "book" as const,
        year: 1994,
        coAuthors: ["B. Rashbaum"],
      },
    ],
    pages: "References section",
    context: "Additional reference on the mother-son relationship.",
  },
  {
    name: "Ross, J. M.",
    field: "Psychology / Masculinity",
    works: [
      {
        title: "What Men Want: Mothers, Fathers and Manhood",
        type: "book" as const,
        year: 1994,
      },
    ],
    pages: "References section",
    context: "Additional reference on men's psychological needs.",
  },
  {
    name: "Askew, S.",
    field: "Gender / Education",
    works: [
      {
        title: "Boys Don't Cry",
        type: "book" as const,
        year: 1988,
        coAuthors: ["C. Ross"],
      },
    ],
    pages: "References section",
    context: "Additional reference on boys and emotional expression.",
  },
  {
    name: "Cole, P. M.",
    field: "Emotional Development",
    works: [
      {
        title: "Expressive Control during a Disappointment",
        type: "article" as const,
        year: 1988,
        coAuthors: ["et al."],
      },
    ],
    pages: "References section",
    context: "Additional reference on emotional expression control.",
  },
  {
    name: "Davis, T. L.",
    field: "Emotional Masking",
    works: [
      {
        title: "Gender Differences in Masking Negative Emotions",
        type: "article" as const,
        year: 1995,
      },
    ],
    pages: "References section",
    context: "Additional reference on gender differences in emotional masking.",
  },
  {
    name: "Gjerde, P. F.",
    field: "Depressive Symptoms",
    works: [
      {
        title: "Alternate Pathways to Chronic Depressive Symptoms...",
        type: "article" as const,
        year: 1995,
      },
    ],
    pages: "References section",
    context: "Additional reference on depressive symptoms.",
  },
  {
    name: "Brooks, G.",
    field: "Men and Sexuality",
    works: [
      {
        title: "The Centerfold Syndrome",
        type: "book" as const,
        year: 1995,
      },
      {
        title: "Men and Sex",
        type: "book" as const,
        year: 1997,
        coAuthors: ["R. Levant"],
      },
    ],
    pages: "References section",
    context: "Additional references on men and sexuality.",
  },
  {
    name: "Simon, W.",
    field: "Psychosexual Development",
    works: [
      {
        title: "On Psychosexual Development",
        type: "other" as const,
        year: 1969,
        coAuthors: ["J. Gagnon"],
      },
    ],
    pages: "References section",
    context: "Additional reference on psychosexual development.",
  },
  {
    name: "Bass, E.",
    field: "LGBTQ Youth",
    works: [
      {
        title: "Free Your Mind",
        type: "book" as const,
        year: 1996,
        coAuthors: ["K. Kaufman"],
      },
    ],
    pages: "References section",
    context: "Additional reference on LGBTQ youth.",
  },
  {
    name: "Marcus, E.",
    field: "LGBTQ Studies",
    works: [
      {
        title: "Is It a Choice?",
        type: "book" as const,
        year: 1993,
      },
    ],
    pages: "References section",
    context: "Additional reference on sexual orientation.",
  },
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  // Universities and Research Centers
  {
    name: "Harvard Medical School",
    type: "University",
    context: "Dan Kindlon's affiliation (professor/researcher).",
    pages: "Throughout",
  },
  {
    name: "Harvard School of Public Health",
    type: "University",
    context: "Dan Kindlon's affiliation.",
    pages: "Throughout",
  },
  {
    name: "Belmont Hill School",
    type: "School",
    context: "Michael Thompson's school consultation site; all-boys school.",
    pages: "Throughout",
  },
  {
    name: "St. Sebastian's School",
    type: "School",
    context: "Dan Kindlon's school consultation site; all-boys school.",
    pages: "Throughout",
  },
  {
    name: "Allen Stevenson School (NYC)",
    type: "School",
    context: "David Trower, headmaster; boys need protection of single-sex environment in elementary school.",
    pages: "Ch. 2",
  },
  {
    name: "Ethical Culture School (NYC)",
    type: "School",
    context: "Historically admitted 5-year-old girls and 6-year-old boys to kindergarten for developmental reasons.",
    pages: "Ch. 2",
  },
  {
    name: "Waldorf Schools",
    type: "School System",
    context: "Creative arts-based curriculum with 'pictorial introduction' to reading.",
    pages: "Ch. 2",
  },
  {
    name: "Roxbury Latin School",
    type: "School",
    context: "Anne Roche Muggeridge 'Boys Should Be Boys' newsletter.",
    pages: "Ch. 12",
  },
  {
    name: "National Center for Study of Corporal Punishment and Alternatives in Schools",
    type: "Research Center",
    context: "Corporal punishment legal in over 1/3 of states.",
    pages: "Ch. 3",
  },
  {
    name: "National Institutes of Health (NICHD)",
    type: "Government Agency",
    context: "1996 conference on father involvement.",
    pages: "Ch. 5",
  },
  {
    name: "Office of Juvenile Justice and Delinquency Prevention",
    type: "Government Agency",
    context: "Juvenile crime statistics.",
    pages: "Ch. 11",
  },
  {
    name: "National Center for Health Statistics",
    type: "Government Agency",
    context: "Suicide statistics.",
    pages: "Ch. 8",
  },
  {
    name: "Bronx Children's Psychiatric Center",
    type: "Hospital",
    context: "Testosterone study in violent boys (Constantino et al.).",
    pages: "Ch. 1",
  },
  {
    name: "University of Arizona",
    type: "University",
    context: "Fabes and Eisenberg crying baby study.",
    pages: "Ch. 1",
  },
  {
    name: "University of Montreal",
    type: "University",
    context: "Tremblay longitudinal aggression study.",
    pages: "Ch. 1, Ch. 11",
  },
  {
    name: "Northwestern University",
    type: "University",
    context: "Duncan panel study of income dynamics.",
    pages: "Ch. 5",
  },
  {
    name: "University of North Carolina / Penn State",
    type: "University",
    context: "Harris et al. National Survey of Children.",
    pages: "Ch. 5",
  },
  {
    name: "Tufts University",
    type: "University",
    context: "Zella Luria, masturbation research.",
    pages: "Ch. 10",
  },
  {
    name: "Urban Institute (Washington, DC)",
    type: "Research Institute",
    context: "National Survey of Adolescent Males.",
    pages: "Ch. 1",
  },
  {
    name: "Stanford University Press",
    type: "University Press",
    context: "Published Maccoby and Jacklin's The Psychology of Sex Differences.",
    pages: "Ch. 1",
  },
  {
    name: "Harvard University",
    type: "University",
    context: "Rosenthal Pygmalion studies; Patterns of Child Rearing follow-up study (Koestner et al.).",
    pages: "Ch. 2, Ch. 5",
  },
  {
    name: "Yale University Press",
    type: "University Press",
    context: "Published David Gilmore's Manhood in the Making.",
    pages: "Ch. 4",
  },
  {
    name: "Saint George's School, Tacoma, WA",
    type: "School",
    context: "Sexual experimentation anecdote.",
    pages: "Ch. 10",
  },
  {
    name: "National Institute on Drug Abuse",
    type: "Government Agency",
    context: "Monitoring the Future survey on high school drug use.",
    pages: "Ch. 9",
  },
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "National Survey of Adolescent Males",
    authors: "Pleck, Sonenstein, Ku",
    year: "1993-1996",
    finding: "15-19 year-old boys surveyed on masculinity ideology and risk behavior; boys who agreed more with masculinity ideology were more likely to drink, smoke pot, have unprotected sex, and get suspended from school.",
    pages: "Ch. 1 (p. 17), Notes (endnote 10)",
  },
  {
    name: "Panel Study of Income Dynamics",
    authors: "Greg Duncan et al., Northwestern / University of Michigan",
    year: "1996",
    finding: "1,000+ intact families studied over 27 years; father attendance at PTA meetings was the most influential factor in child's income at age 27.",
    pages: "Ch. 5 (p. 67), Notes (endnote 3)",
  },
  {
    name: "National Survey of Children",
    authors: "Harris, Furstenberg, Kramer",
    year: "1998",
    finding: "584 children studied over 11 years; emotionally close and highly involved fathers led to greater educational attainment and less delinquency.",
    pages: "Ch. 5 (p. 67), Notes (endnote 4)",
  },
  {
    name: "Patterns of Child Rearing (26-Year Follow-up)",
    authors: "Koestner, Franz, Weinberger (original: Sears, Maccoby)",
    year: "1990",
    finding: "Most influential factor for empathy at age 31 was whether father was involved in child's care.",
    pages: "Ch. 5 (p. 67), Notes (endnote 5)",
  },
  {
    name: "Beeper Study (Divergent Realities)",
    authors: "Reed Larson and Mayse Richards",
    year: "1994",
    finding: "Family members buzzed at random and recorded feelings; 50% of the time fathers and sons reported completely different experiences of the same shared moment; fathers are the 'weak link' in emotional life of family.",
    pages: "Ch. 5 (p. 71), Notes (endnote 10)",
  },
  {
    name: "Tennessee ADHD Study",
    authors: "Wolraich et al.",
    year: "1996",
    finding: "8,258 children studied; 4% of boys vs <1% of girls diagnosed hyperactive-impulsive ADD.",
    pages: "Ch. 2 (p. 27), Notes (endnote 5)",
  },
  {
    name: "Connecticut Longitudinal Study",
    authors: "Shaywitz et al., Yale",
    year: "1990",
    finding: "Reading disability prevalence by gender; girls mature earlier in reading readiness.",
    pages: "Ch. 2, Notes (endnote 3)",
  },
  {
    name: "Monitoring the Future",
    authors: "Johnston, Bachman, O'Malley",
    year: "ongoing",
    finding: "National Institute on Drug Abuse national high school drug use survey.",
    pages: "Ch. 9",
  },
  {
    name: "National Family Violence Surveys",
    authors: "Murray Strauss",
    year: "1975, 1985",
    finding: "99% of parents used corporal punishment in 1950s, still over 90% in 1985.",
    pages: "Ch. 3, Notes (endnote 4)",
  },
  {
    name: "Great Depression Family Study",
    authors: "Elder, Liker, Cross",
    year: "1984",
    finding: "Financial hardship particularly hard on fathers, leading to harsher discipline of children.",
    pages: "Ch. 3, Notes (endnote 8)",
  },
  {
    name: "NICHD Conference on Father Involvement",
    authors: "Multiple researchers",
    year: "1996",
    finding: "National Institutes of Health conference presenting research on father involvement and child outcomes.",
    pages: "Ch. 5",
  },
  {
    name: "Bronx Children's Psychiatric Center Study",
    authors: "Constantino et al.",
    year: "1993",
    finding: "Most violent young boys had normal testosterone levels; elevated testosterone may be effect rather than cause of aggression.",
    pages: "Ch. 1 (p. 15-16), Notes (endnote 8)",
  },
  {
    name: "University of Montreal Longitudinal Study",
    authors: "Tremblay et al.",
    year: "1997",
    finding: "Boys tracked from kindergarten; no evidence of association between testosterone and aggressive behavior in preadolescent/early adolescent boys.",
    pages: "Ch. 1 (p. 15), Ch. 11, Notes (endnote 7)",
  },
  {
    name: "Dodge Aggression Studies",
    authors: "Ken Dodge et al.",
    year: "1986-1987",
    finding: "Aggressive boys misinterpret intentions of others, see hostility where it does not exist, and feel aggression is justified; hostile attributional bias in aggressive boys.",
    pages: "Ch. 11 (p. 149), Notes (endnote 7)",
  },
  {
    name: "Ontario Abuse Survey",
    authors: "MacMillan et al.",
    year: "n.d.",
    finding: "13,000+ Ontario residents surveyed; gender disparity in physical abuse.",
    pages: "Ch. 3",
  },
  {
    name: "Fabes and Eisenberg Crying Baby Study",
    authors: "Richard A. Fabes, Nancy Eisenberg et al.",
    year: "1994",
    finding: "Tape of crying baby played to kindergarten/second-grade children; boys more stressed by crying were quicker to turn off speaker and more likely to act aggressively toward baby.",
    pages: "Ch. 1 (p. 14), Notes (endnote 3)",
  },
  {
    name: "Davis Mall Observation Study",
    authors: "P. W. Davis",
    year: "1996",
    finding: "300+ hours of observations in malls; verbal aggression most prevalent discipline; boys disciplined more harshly than girls.",
    pages: "Ch. 3, Notes (endnote 5)",
  },
  {
    name: "Strassberg Spanking and Aggression Study",
    authors: "Strassberg, Dodge, Petit, Bates",
    year: "1994",
    finding: "Kindergartners spanked at home were more physically aggressive and more apt to be bullies at school.",
    pages: "Ch. 3 (p. 49), Notes (endnote 11)",
  },
  {
    name: "DeLong Executive Fathers Survey",
    authors: "T. DeLong, C. C. DeLong",
    year: "1992",
    finding: "Survey of 300 male executives; majority wished they could have been closer to their fathers.",
    pages: "Ch. 5 (p. 69), Notes (endnote 8)",
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
  title: "Raising Cain",
  subtitle: "Protecting the Emotional Life of Boys",
  author: "Dan Kindlon, Ph.D. & Michael Thompson, Ph.D.",
  publisher: "Ballantine Books",
  year: 1999,
  description:
    "Explores the emotional miseducation of boys, examining how cultural expectations of masculinity, harsh discipline, peer cruelty, absent fathers, and emotional illiteracy contribute to boys' struggles with depression, violence, and disconnection. Drawing on decades of research and clinical experience, the authors advocate for emotional literacy as the key to raising healthier boys.",
};
