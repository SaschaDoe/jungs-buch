// ba-references-data.ts
// Structured reference data for "Boys Adrift"
// Source: BoysAdrift/analysis/sources-raw.md

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
  // ---- Chapter 1: The Riddle ----
  {
    name: "Lewin, Tamar",
    field: "Journalism",
    works: [
      {
        title: "At College, Women Are Leaving Men in the Dust",
        type: "article" as const,
        year: 2006,
        publisher: "New York Times, July 9, 2006, pp. A1, A18, A19",
      },
    ],
    pages: "Notes Ch. 1, note 2 (Pages 251-252)",
    context: "Documents how women are outpacing men at college, supporting the book's premise about boys falling behind.",
  },
  {
    name: "Fulghum, Robert",
    field: "Education / Self-help",
    works: [
      {
        title: "All I Really Need to Know I Learned in Kindergarten",
        type: "book" as const,
        year: 1988,
      },
    ],
    pages: "Pages 21-22",
    context: "Contrasts traditional kindergarten (singing, playing, dancing) with modern academic kindergarten.",
  },
  {
    name: "Sax, Leonard",
    field: "Psychology / Education",
    works: [
      {
        title: "Reclaiming Kindergarten: Making Kindergarten Less Harmful to Boys",
        type: "article" as const,
        year: 2001,
        publisher: "Psychology of Men and Masculinity, vol. 2, pp. 3-12",
      },
      {
        title: "Why Gender Matters",
        type: "book" as const,
        year: 2005,
        publisher: "Basic Books",
      },
      {
        title: "Sex Differences in Hearing: Implications for Best Practice in the Classroom",
        type: "article" as const,
        year: 2010,
        publisher: "Advances in Gender and Education, vol. 2, pp. 13-21",
      },
      {
        title: "Polyethylene Terephthalate May Yield Endocrine Disruptors",
        type: "article" as const,
        year: 2010,
        publisher: "Environmental Health Perspectives, vol. 118, pp. 445-448",
      },
      {
        title: "Girls on the Edge",
        type: "book" as const,
        year: 2010,
        publisher: "Basic Books (New York)",
      },
      {
        title: "The Collapse of Parenting",
        type: "book" as const,
        year: 2015,
        publisher: "Basic Books (New York)",
      },
      {
        title: "The Feminization of American Culture: How Modern Chemicals May Be Changing American Biology",
        type: "article" as const,
        year: 2001,
        publisher: "The World & I, pp. 243-261",
      },
    ],
    pages: "Throughout; Notes Ch. 1 note 8 (Page 253); Pages 16, 19, 26, 34, 133, 145",
    context: "Author of the book. Multiple self-citations of academic papers and previous books. Foundational work on boys and education published by the American Psychological Association.",
    keyFigure: true,
  },

  // ---- Chapter 2: The First Factor -- Changes at School ----
  {
    name: "Weast, Jerry D.",
    field: "Education",
    works: [
      {
        title: "Why We Need Rigorous, Full-Day Kindergarten",
        type: "article" as const,
        year: 2001,
        publisher: "Principal magazine, May 2001",
      },
    ],
    pages: "Notes Ch. 2, note 1 (Page 253); body text Page 21",
    context: "Superintendent arguing for 'rigorous' and 'academic' kindergarten -- represents the trend Sax criticizes.",
  },
  {
    name: "Kang, Hyo Jung",
    field: "Neuroscience",
    works: [
      {
        title: "Spatiotemporal Transcriptome of the Human Brain",
        type: "study" as const,
        year: 2011,
        publisher: "Nature, vol. 478, pp. 483-489",
        coAuthors: ["24 coauthors (US, Croatia, England, Germany, Portugal)"],
      },
    ],
    pages: "Notes Ch. 2, note 2 (Pages 253-254)",
    context: "Demonstrates sex differences in gene expression in the human brain, biggest differences in prenatal period.",
  },
  {
    name: "Giedd, Jay",
    field: "Neuroscience",
    works: [
      {
        title: "Review: Magnetic Resonance Imaging of Male/Female Differences in Human Adolescent Brain Anatomy",
        type: "study" as const,
        year: 2012,
        publisher: "Biology of Sex Differences, vol. 3, issue 19",
      },
    ],
    pages: "Notes Ch. 2, note 3 (Page 254); body text Page 22",
    context: "Shows gray matter in average adolescent girl's brain is ~2 years more mature than same-age boy's.",
    keyFigure: true,
  },
  {
    name: "Bramen, Jennifer",
    field: "Neuroscience",
    works: [
      {
        title: "Sex Matters During Adolescence: Testosterone-Related Cortical Thickness Maturation Differs Between Boys and Girls",
        type: "study" as const,
        year: 2012,
        publisher: "PLOS One",
      },
    ],
    pages: "Notes Ch. 2, note 4 (Page 254)",
    context: "Testosterone associated with increased visual cortex thickness in boys but decreased in girls.",
  },
  {
    name: "Nguyen, Tuong-Vi",
    field: "Neuroscience",
    works: [
      {
        title: "Testosterone-Related Cortical Maturation Across Childhood and Adolescence",
        type: "study" as const,
        year: 2013,
        publisher: "Cerebral Cortex, vol. 23, pp. 1424-1432",
      },
    ],
    pages: "Notes Ch. 2, note 4 (Page 254)",
    context: "Additional evidence on testosterone and brain development differences.",
  },
  {
    name: "Lenroot, Rhoshel",
    field: "Neuroscience",
    works: [
      {
        title: "Sexual Dimorphism of Brain Developmental Trajectories During Childhood and Adolescence",
        type: "study" as const,
        year: 2007,
        publisher: "NeuroImage, vol. 36, pp. 1065-1073",
        coAuthors: ["12 coauthors"],
      },
    ],
    pages: "Notes Ch. 2, note 5 (Page 254); body text Page 22",
    context: "Documents different brain development trajectories in girls vs boys across multiple regions.",
  },
  {
    name: "Ingalhalikar, Madhura",
    field: "Neuroscience",
    works: [
      {
        title: "Sex Differences in the Structural Connectome of the Human Brain",
        type: "study" as const,
        year: 2014,
        publisher: "Proceedings of the National Academy of Sciences, vol. 111, pp. 823-828",
      },
    ],
    pages: "Notes Ch. 2, note 6 (Page 254); body text Page 23",
    context: "MRI study of 949 individuals aged 8-22; male brains optimized for intrahemispheric communication, female for interhemispheric. University of Pennsylvania School of Medicine.",
  },
  {
    name: "Sacher, Julia",
    field: "Neuroscience",
    works: [
      {
        title: "Sexual Dimorphism in the Human Brain: Evidence from Neuroimaging",
        type: "study" as const,
        year: 2013,
        publisher: "Magnetic Resonance Imaging, vol. 31, pp. 366-375",
      },
    ],
    pages: "Notes Ch. 2, note 6 (Page 254)",
    context: "Finds larger sex differences in older children compared to younger.",
  },
  {
    name: "Yu, Vickie",
    field: "Neuroscience",
    works: [
      {
        title: "Age-Related Sex Differences in Language Lateralization: A Magnetoencephalography Study in Children",
        type: "study" as const,
        year: 2014,
        publisher: "Developmental Psychology, vol. 50, pp. 2276-2284",
      },
    ],
    pages: "Notes Ch. 2, note 6 (Pages 254-255)",
    context: "Reports larger sex differences in young children (4-9) using magnetoencephalography.",
  },
  {
    name: "Gummadavelli, Abhijeet",
    field: "Neuroscience",
    works: [
      {
        title: "Spatiotemporal and Frequency Signatures of Word Recognition in the Developing Brain: A Magnetoencephalographic Study",
        type: "study" as const,
        year: 2013,
        publisher: "Brain Research, vol. 1498, pp. 20-32",
      },
    ],
    pages: "Notes Ch. 2, note 6 (Page 255)",
    context: "Larger sex differences in brain electrical activity in children 6-13 than 14-17.",
  },
  {
    name: "Stipek, Deborah",
    field: "Education / Psychology",
    works: [
      {
        title: "Good Beginnings: What Difference Does the Program Make in Preparing Young Children for School?",
        type: "study" as const,
        year: 1998,
        publisher: "Journal of Applied Developmental Psychology, vol. 19, pp. 41-66",
      },
      {
        title: "Pathways to Constructive Lives: The Importance of Early School Success",
        type: "other" as const,
        year: 2001,
        publisher: "American Psychological Association, in Constructive & Destructive Behavior, pp. 291-315",
      },
    ],
    pages: "Notes Ch. 2, note 7 (Page 255); body text Pages 25-26",
    context: "Dean of Stanford School of Education. Shows children form opinions about school early; negative perceptions difficult to reverse. Cited repeatedly.",
    keyFigure: true,
  },
  {
    name: "Valeski, Tricia",
    field: "Education / Psychology",
    works: [
      {
        title: "Young Children's Feelings About School",
        type: "study" as const,
        year: 2001,
        publisher: "Child Development, vol. 72, pp. 1198-1213",
        coAuthors: ["Deborah Stipek"],
      },
    ],
    pages: "Notes Ch. 2, note 7 (Page 255)",
    context: "Children who fail in kindergarten develop 'negative perceptions of competence' that are difficult to reverse.",
  },
  {
    name: "Sahlberg, Pasi",
    field: "Education",
    works: [
      {
        title: "Finnish Lessons 2.0: What Can the World Learn from Educational Change in Finland?",
        type: "book" as const,
        year: 2014,
        publisher: "Teachers College Press (New York)",
      },
    ],
    pages: "Notes Ch. 2, note 9 (Pages 255-256)",
    context: "Finland's education system -- children don't begin formal schooling until age 7.",
  },
  {
    name: "Bassok, Daphna",
    field: "Education",
    works: [
      {
        title: "'Academic Redshirting' in Kindergarten: Prevalence, Patterns, and Implications",
        type: "study" as const,
        year: 2013,
        publisher: "Educational Evaluation and Policy Analysis, vol. 35, pp. 283-297",
        coAuthors: ["Sean Reardon"],
      },
    ],
    pages: "Notes Ch. 2, note 11 (Page 256)",
    context: "Documents the practice of delaying kindergarten enrollment, more common in affluent neighborhoods.",
  },
  {
    name: "Gootman, Elissa",
    field: "Journalism",
    works: [
      {
        title: "Preschoolers Grow Older as Parents Seek an Edge",
        type: "article" as const,
        year: 2006,
        publisher: "New York Times, October 19, 2006",
      },
    ],
    pages: "Notes Ch. 2, note 12 (Page 256); body text Page 27",
    context: "Quotes Dana Haddad and Betsy Newell on 'the gift of a year' -- holding boys back from kindergarten.",
  },
  {
    name: "Lonsdorf, Elizabeth",
    field: "Primatology / Biology",
    works: [
      {
        title: "Sex Differences in Learning in Chimpanzees",
        type: "study" as const,
        year: 2004,
        publisher: "Nature, vol. 428, pp. 715-716",
        coAuthors: ["Lynn Eberly", "Anne Pusey"],
      },
      {
        title: "Boys Will Be Boys: Sex Differences in Wild Infant Chimpanzee Social Interactions",
        type: "study" as const,
        year: 2014,
        publisher: "Animal Behavior, vol. 88, pp. 79-83",
      },
    ],
    pages: "Notes Ch. 2, notes 14-15 (Page 256); body text Pages 29-30",
    context: "Girl chimps pay attention to adults and learn skills 2 years earlier; boy chimps prefer wrestling and running. Cited repeatedly for primate sex differences.",
    keyFigure: true,
  },
  {
    name: "Wildman, Derek",
    field: "Genetics",
    works: [
      {
        title: "Implications of Natural Selection in Shaping 99.4 Percent Nonsynonymous DNA Identity Between Humans and Chimpanzees",
        type: "study" as const,
        year: 2003,
        publisher: "Proceedings of the National Academy of Sciences, vol. 100, pp. 7181-7188",
      },
    ],
    pages: "Notes Ch. 2, note 16 (Pages 256-257)",
    context: "Human males share 99.4% of genes with male chimpanzees.",
  },
  {
    name: "Handa, Robert",
    field: "Neuroscience",
    works: [
      {
        title: "Steroid Hormones, Receptors, and Perceptual and Cognitive Sex Differences in the Visual System",
        type: "study" as const,
        year: 2015,
        publisher: "Current Eye Research, vol. 40, pp. 110-127",
        coAuthors: ["Robert McGivern"],
      },
    ],
    pages: "Notes Ch. 2, note 17 (Page 257)",
    context: "Sex differences in vision in humans and primates.",
  },
  {
    name: "Schroeder, Joseph",
    field: "Psychology",
    works: [
      {
        title: "Sex and Gender in Sensation and Perception",
        type: "other" as const,
        year: 2010,
        publisher: "Springer (New York), in Handbook of Gender Research in Psychology, pp. 235-257",
      },
    ],
    pages: "Notes Ch. 2, note 17 (Page 257)",
    context: "Cross-species and cross-modality review of sex differences in hearing, vision, smell.",
  },
  {
    name: "Brown, Gillian",
    field: "Primatology",
    works: [
      {
        title: "The Development of Behavioural Sex Differences in Infant Rhesus Macaques",
        type: "study" as const,
        year: 2000,
        publisher: "Primates, vol. 41, pp. 63-77",
        coAuthors: ["Alan Dixon"],
      },
    ],
    pages: "Notes Ch. 2, note 18 (Page 257)",
    context: "Young male primates more likely to engage in aggressive rough-and-tumble play.",
  },
  {
    name: "Watts, David",
    field: "Primatology",
    works: [
      {
        title: "Behavior of Juvenile and Adolescent Great Apes",
        type: "other" as const,
        year: 2002,
        publisher: "Oxford University Press, in Juvenile Primates, pp. 148-167",
        coAuthors: ["Anne Pusey"],
      },
    ],
    pages: "Notes Ch. 2, note 19 (Page 257)",
    context: "Alloparenting -- female primates always babysit, never males.",
  },
  {
    name: "Pereira, Michael",
    field: "Primatology",
    works: [
      {
        title: "Juvenile Primates: Life History, Development, and Behavior",
        type: "book" as const,
        year: 2002,
        publisher: "Oxford University Press (New York)",
        coAuthors: ["Lynn Fairbanks"],
      },
    ],
    pages: "Notes Ch. 2, notes 19, 20, 25 (Pages 257-258)",
    context: "Key reference on primate behavior; females reside in natal groups, males disperse at puberty.",
    keyFigure: true,
  },
  {
    name: "Edwards, Carolyn Pope",
    field: "Cross-cultural Psychology",
    works: [
      {
        title: "Behavioral Sex Differences in Children of Diverse Cultures: The Case of Nurturance to Infants",
        type: "other" as const,
        year: 2002,
        publisher: "Oxford University Press, in Pereira and Fairbanks, Juvenile Primates",
      },
    ],
    pages: "Notes Ch. 2, note 20 (Page 257)",
    context: "Girls far more likely to babysit younger siblings across cultures.",
  },
  {
    name: "Caspi, Avshalom",
    field: "Psychology",
    works: [
      {
        title: "Unraveling Girls' Delinquency: Biological, Dispositional, and Contextual Contributions to Adolescent Misbehavior",
        type: "study" as const,
        year: 1993,
        publisher: "Developmental Psychology, vol. 29, pp. 19-30",
      },
    ],
    pages: "Notes Ch. 2, note 21 (Page 258)",
    context: "Girls at coed schools more likely to have alcohol problems than girls at single-sex schools.",
  },
  {
    name: "Dowdall, George",
    field: "Psychology",
    works: [
      {
        title: "Binge Drinking Among American College Women: A Comparison of Single-Sex and Coeducational Institutions",
        type: "study" as const,
        year: 1998,
        publisher: "Psychology of Women Quarterly, vol. 22, pp. 705-715",
        coAuthors: ["Mary Crawford", "Henry Wechsler"],
      },
    ],
    pages: "Notes Ch. 2, note 21 (Page 258)",
    context: "Women at coed colleges more likely to binge drink than women at women's colleges.",
  },
  {
    name: "Hurst, Marianne",
    field: "Education",
    works: [
      {
        title: "Girls Seen to Help Avert Violence",
        type: "article" as const,
        year: 2005,
        publisher: "Education Week, May 18, 2005, p. 12",
      },
    ],
    pages: "Notes Ch. 2, note 22 (Page 258); body text Page 31",
    context: "In 18 of 20 cases of averted school shootings, girls alerted adults.",
  },
  {
    name: "McGee, James",
    field: "Forensic Psychology",
    works: [
      {
        title: "Study on school shooting prevention",
        type: "study" as const,
        year: 2005,
      },
      {
        title: "The Classroom Avenger",
        type: "article" as const,
        year: 1999,
        publisher: "The Forensic Examiner, vol. 8, May-June 1999",
        coAuthors: ["Caren DeBernardo"],
      },
    ],
    pages: "Body text Page 31; Notes Ch. 2, note 62 (Page 262)",
    context: "'Boys feel like snitches if they tell on a friend, [while] girls more openly seek out adults.' Also profiled potential school shooters.",
  },
  {
    name: "Tannen, Deborah",
    field: "Linguistics / Sociology",
    works: [
      {
        title: "You Just Don't Understand: Men and Women in Conversation",
        type: "book" as const,
        year: 2001,
        publisher: "HarperCollins (New York)",
      },
    ],
    pages: "Notes Ch. 2, note 24 (Page 258)",
    context: "Women more likely to ask for directions; men refuse.",
  },
  {
    name: "Mittermeier, Russell",
    field: "Conservation Biology",
    works: [
      {
        title: "Primates in Peril: The World's 25 Most Endangered Primates, 2004-2006",
        type: "study" as const,
        year: 2006,
        publisher: "Primate Conservation, vol. 20, pp. 1-28",
      },
    ],
    pages: "Notes Ch. 2, note 26 (Page 258)",
    context: "Muriqui monkey population fewer than 1,000 -- exception where females disperse.",
  },
  {
    name: "Lindahl, Lisbeth B.",
    field: "Developmental Psychology",
    works: [
      {
        title: "Social Proximity in Early Mother-Infant Interactions: Implications for Gender Differences?",
        type: "study" as const,
        year: 1997,
        publisher: "Early Development and Parenting, vol. 6, pp. 83-88",
        coAuthors: ["Mikael Heimann"],
      },
    ],
    pages: "Notes Ch. 2, note 27 (Page 258)",
    context: "Little girls more likely to stay close to mother.",
  },
  {
    name: "Xu, Jianzhong",
    field: "Education",
    works: [
      {
        title: "Gender and Homework Management Reported by High School Students",
        type: "study" as const,
        year: 2006,
        publisher: "Educational Psychology, vol. 26, pp. 73-91",
      },
    ],
    pages: "Notes Ch. 2, note 28 (Pages 258-259)",
    context: "Girls significantly more likely to do assigned homework in every subject.",
  },
  {
    name: "Mau, Wei-Cheng",
    field: "Education / Psychology",
    works: [
      {
        title: "Gender Differences in Homework and Test Scores in Mathematics, Reading and Science at Tenth and Twelfth Grade",
        type: "study" as const,
        year: 2000,
        publisher: "Psychology, Evolution, and Gender, vol. 2, pp. 119-125",
        coAuthors: ["Richard Lynn"],
      },
    ],
    pages: "Notes Ch. 2, note 28 (Page 259)",
    context: "Highest-achieving boys still less likely to do homework than comparably achieving girls.",
  },
  {
    name: "Rogers, Lynne",
    field: "Education",
    works: [
      {
        title: "Gender Differences in Approaches to Studying for the GCSE Among High-Achieving Pupils",
        type: "study" as const,
        year: 2006,
        publisher: "Educational Studies, vol. 32, pp. 59-71",
        coAuthors: ["Sue Hallam"],
      },
    ],
    pages: "Notes Ch. 2, note 29 (Page 259)",
    context: "Girls try harder than boys, leading to better grades.",
  },
  {
    name: "Duckworth, Angela Lee",
    field: "Psychology",
    works: [
      {
        title: "Self-Discipline Gives Girls the Edge: Gender in Self-Discipline, Grades, and Achievement Test Scores",
        type: "study" as const,
        year: 2006,
        publisher: "Journal of Educational Psychology, vol. 98, pp. 198-208",
        coAuthors: ["Martin E. P. Seligman"],
      },
    ],
    pages: "Notes Ch. 2, notes 30, 33 (Page 259); body text Page 33",
    context: "Girls' greater self-discipline and self-control key to their educational success. University of Pennsylvania.",
    keyFigure: true,
  },
  {
    name: "Pomerantz, Eva",
    field: "Psychology",
    works: [
      {
        title: "Making the Grade but Feeling Distressed: Gender Differences in Academic Performance and Internal Distress",
        type: "study" as const,
        year: 2002,
        publisher: "Journal of Educational Psychology, vol. 94, pp. 396-404",
        coAuthors: ["Ellen Altermatt", "Jill Saxon"],
      },
    ],
    pages: "Notes Ch. 2, note 32 (Pages 259-260)",
    context: "Girls do better in school but are less satisfied with achievements.",
  },
  {
    name: "Spitz, Rene A.",
    field: "Psychiatry",
    works: [
      {
        title: "Hospitalism: An Enquiry into the Genesis of Psychiatric Conditions in Early Childhood",
        type: "study" as const,
        year: 1945,
        publisher: "Psychoanalytic Study of the Child, vol. 1, pp. 53-74",
      },
    ],
    pages: "Notes Ch. 2, note 34 (Page 259); body text Pages 36-37",
    context: "Foundational research on 'hospitalism' -- stunted development in children raised in sterile environments.",
    keyFigure: true,
  },
  {
    name: "Louv, Richard",
    field: "Child Development / Environment",
    works: [
      {
        title: "Last Child in the Woods: Saving Our Children from Nature-Deficit Disorder",
        type: "book" as const,
        year: 2005,
        publisher: "Algonquin Books (Chapel Hill, NC)",
      },
    ],
    pages: "Notes Ch. 2, notes 35-39 (Page 259); body text Pages 35-38",
    context: "Coined 'nature-deficit disorder'; argues children need real-world sensory experiences; 'cultural autism' from too much screen time.",
    keyFigure: true,
  },
  {
    name: "Wilson, Frank",
    field: "Neurology",
    works: [
      {
        title: "Quoted in Louv, Last Child in the Woods",
        type: "other" as const,
        year: 2005,
      },
    ],
    pages: "Body text Pages 37-38",
    context: "Professor of neurology at Stanford; medical students can't understand how a heart works as pump because they lack real-world experience.",
  },
  {
    name: "Faber Taylor, Andrea",
    field: "Psychology / Public Health",
    works: [
      {
        title: "Could Exposure to Everyday Green Spaces Help Treat ADHD? Evidence from Children's Play Settings",
        type: "study" as const,
        year: 2011,
        publisher: "Applied Psychology: Health and Well-Being, vol. 3, pp. 281-303",
        coAuthors: ["Frances E. Kuo"],
      },
    ],
    pages: "Notes Ch. 2, note 40 (Page 259)",
    context: "Outdoor environments helpful in treating ADHD. University of Illinois.",
  },
  {
    name: "Rush, Benjamin",
    field: "Medicine",
    works: [
      {
        title: "Declaration about digging in soil and mental health",
        type: "other" as const,
        year: "~1800s",
      },
    ],
    pages: "Body text Page 38",
    context: "'Digging in the soil has a curative effect on the mentally ill.'",
  },
  {
    name: "Neisser, Ulric",
    field: "Psychology",
    works: [
      {
        title: "Cognitive Psychology",
        type: "book" as const,
        year: 1967,
        publisher: "Appleton-Century-Crofts (New York)",
      },
    ],
    pages: "Notes Ch. 2, note 43 (Page 260)",
    context: "First to coin the term 'cognitive psychology.'",
  },
  {
    name: "Weiss, Gabrielle",
    field: "Psychiatry",
    works: [
      {
        title: "The Hyperactive Child Syndrome",
        type: "study" as const,
        year: 1979,
        publisher: "Science, vol. 205, pp. 1348-1354",
        coAuthors: ["Lily Hechtman"],
      },
    ],
    pages: "Notes Ch. 2, note 44 (Page 260); body text Page 41",
    context: "In 1979, only 1.2% of kids had ADHD (then 'hyperkinetic reaction of childhood').",
  },
  {
    name: "Schwarz, Alan",
    field: "Journalism",
    works: [
      {
        title: "A.D.H.D. Seen in 11% of U.S. Children as Diagnoses Rise",
        type: "article" as const,
        year: 2013,
        publisher: "New York Times, March 31, 2013",
        coAuthors: ["Sarah Cohen"],
      },
    ],
    pages: "Notes Ch. 2, note 45 (Page 260)",
    context: "ADHD diagnosis rose from 12 per 1,000 to 110 per 1,000.",
  },
  {
    name: "Warner, Judith",
    field: "Journalism / Education",
    works: [
      {
        title: "What Boy Crisis?",
        type: "article" as const,
        year: 2006,
        publisher: "New York Times",
      },
      {
        title: "Is There Really a 'Boy Crisis'?",
        type: "article" as const,
        year: 2013,
        publisher: "Time magazine",
      },
    ],
    pages: "Notes Ch. 2, notes 47-48 (Page 260); body text Pages 42-43",
    context: "Claimed boys' crisis is a myth of class not gender; Sax rebuts with NAEP data.",
  },
  {
    name: "Von Drehle, David",
    field: "Journalism",
    works: [
      {
        title: "The Myth About Boys",
        type: "article" as const,
        year: 2007,
        publisher: "Time, July 26, 2007",
      },
    ],
    pages: "Notes Ch. 2, note 49 (Page 260)",
    context: "Asserted 'young men are better off, socially and academically, than ever.'",
  },
  {
    name: "Kleinfeld, Judith",
    field: "Education",
    works: [
      {
        title: "Analysis of NAEP data presented at White House Conference on Helping America's Youth",
        type: "talk" as const,
        year: 2006,
        publisher: "White House Conference, June 6, 2006",
      },
    ],
    pages: "Notes Ch. 2, note 51 (Page 261); body text Page 43",
    context: "1 in 4 white boys with college-educated parents cannot read at basic proficiency. University of Alaska, Fairbanks.",
    keyFigure: true,
  },
  {
    name: "Willis, Judy",
    field: "Neuroscience / Education",
    works: [
      {
        title: "The Gully in the 'Brain Glitch' Theory",
        type: "article" as const,
        year: 2007,
        publisher: "Educational Leadership, vol. 64, pp. 68-73",
      },
    ],
    pages: "Notes Ch. 2, note 53 (Page 261)",
    context: "Importance of developing love of reading, not just phonics mechanics.",
  },
  {
    name: "Bauerlein, Mark",
    field: "Education",
    works: [
      {
        title: "Why Johnny Won't Read",
        type: "article" as const,
        year: 2005,
        publisher: "Washington Post, January 25, 2005, p. A15",
        coAuthors: ["Sandra Stotsky"],
      },
    ],
    pages: "Notes Ch. 2, note 54 (Page 261); body text Pages 47-48",
    context: "NEA data showing gender gap in reading for fun widened 1980-2004; 'Girls read; boys don't.' Former director of research for National Endowment for the Arts.",
    keyFigure: true,
  },
  {
    name: "Killgore, William",
    field: "Neuroscience",
    works: [
      {
        title: "Multiple papers on sex differences in amygdala activation",
        type: "study" as const,
        year: "2001, 2004",
        publisher: "NeuroReport; Perceptual and Motor Skills",
        coAuthors: ["Mika Oki", "Deborah Yurgelun-Todd"],
      },
    ],
    pages: "Notes Ch. 2, note 55 (Page 261); body text Pages 49-50",
    context: "Negative emotion in teenage girls closely linked to language areas; in boys localized in amygdala with scant connections to language. Harvard Medical School.",
  },
  {
    name: "Yurgelun-Todd, Deborah",
    field: "Neuroscience",
    works: [
      {
        title: "Brain imaging studies on sex differences in emotion processing",
        type: "study" as const,
        year: "2001-2004",
        publisher: "Harvard Medical School",
      },
    ],
    pages: "Notes Ch. 2, note 55 (Page 261); body text Pages 49-50",
    context: "Key brain imaging researcher demonstrating sex differences in how emotion connects to language in the developing brain.",
    keyFigure: true,
  },
  {
    name: "Shih, Margaret",
    field: "Psychology",
    works: [
      {
        title: "Stereotype Susceptibility: Identity Salience and Shifts in Quantitative Performance",
        type: "study" as const,
        year: 1999,
        publisher: "Psychological Science, vol. 10, pp. 80-83",
        coAuthors: ["Todd Pittinsky", "Nalini Ambady"],
      },
    ],
    pages: "Notes Ch. 2, note 58 (Page 262); body text Pages 60-61",
    context: "Asian women's math scores affected by which identity (Asian or female) was primed. Harvard study.",
  },
  {
    name: "Cooper, Joel",
    field: "Psychology",
    works: [
      {
        title: "Gender and Computers: Understanding the Digital Divide",
        type: "book" as const,
        year: 2003,
        publisher: "Lawrence Erlbaum (Mahwah, NJ)",
        coAuthors: ["Kimberlee Weaver"],
      },
    ],
    pages: "Notes Ch. 2, note 59 (Page 262)",
    context: "Girls underperform on math/science when reminded of gender stereotype; Princeton psychologists.",
  },
  {
    name: "Baumeister, Roy",
    field: "Psychology",
    works: [
      {
        title: "Does High Self-Esteem Cause Better Performance, Interpersonal Success, Happiness, or Healthier Lifestyles?",
        type: "study" as const,
        year: 2003,
        publisher: "Psychological Science in the Public Interest, vol. 4, pp. 1-44",
      },
    ],
    pages: "Notes Ch. 2, note 60 (Page 262)",
    context: "Self-esteem does not predict better performance for boys.",
  },
  {
    name: "Martinez, Stephanie",
    field: "Education",
    works: [
      {
        title: "A System Gone Berserk: How Are Zero-Tolerance Policies Really Affecting Schools?",
        type: "study" as const,
        year: 2009,
        publisher: "Preventing School Failure, vol. 53, pp. 153-158",
      },
    ],
    pages: "Notes Ch. 2, note 57 (Page 262)",
    context: "Zero-tolerance policies have no beneficial effect, merely increase discipline referrals.",
  },
  {
    name: "Skiba, Russell",
    field: "Education",
    works: [
      {
        title: "Zero Tolerance, Zero Evidence: An Analysis of School Disciplinary Practice",
        type: "study" as const,
        year: 2001,
        publisher: "New Directions for Youth Development, issue 92, pp. 17-43",
        coAuthors: ["Kimberly Knesting"],
      },
    ],
    pages: "Notes Ch. 2, note 57 (Page 262)",
    context: "No evidence zero-tolerance policies reduce actual violence.",
  },
  {
    name: "Langman, Peter",
    field: "Forensic Psychology",
    works: [
      {
        title: "School Shooters: The Warning Signs",
        type: "article" as const,
        year: 2012,
        publisher: "Forensic Digest, Winter-Spring 2012",
      },
    ],
    pages: "Notes Ch. 2, note 63 (Page 263)",
    context: "Warning signs of potential school shooters.",
  },
  {
    name: "Cullen, Dave",
    field: "Journalism / True Crime",
    works: [
      {
        title: "Columbine",
        type: "book" as const,
        year: 2010,
        publisher: "Twelve (New York)",
      },
    ],
    pages: "Notes Ch. 2, notes 64-65 (Page 263); body text Pages 63, 66-67",
    context: "Detailed account of Columbine shooting; Dylan Klebold's warning signs in creative writing.",
  },

  // ---- Chapter 3: The Second Factor -- Video Games ----
  {
    name: "Watson, John S.",
    field: "Psychology",
    works: [
      {
        title: "Memory and 'Contingency Analysis' in Infant Learning",
        type: "study" as const,
        year: 1967,
        publisher: "Merrill-Palmer Quarterly, vol. 13, pp. 55-76",
      },
    ],
    pages: "Notes Ch. 3, note 2 (Page 264); body text Pages 70-71",
    context: "Classic study -- 2-month-old babies prefer to control their environment (mobile experiment).",
  },
  {
    name: "Gleitman, Henry",
    field: "Psychology",
    works: [
      {
        title: "Psychology",
        type: "book" as const,
        year: 1980,
        publisher: "W.W. Norton (New York)",
      },
    ],
    pages: "Notes Ch. 3, note 3 (Page 264)",
    context: "'Infants, no less than we, prefer to exercise some control over their environments.'",
  },
  {
    name: "Nietzsche, Friedrich",
    field: "Philosophy",
    works: [
      {
        title: "Gotzen-Dammerung (Twilight of the Idols)",
        type: "book" as const,
        year: 1889,
      },
      {
        title: "The Will to Power",
        type: "book" as const,
        year: "1968 translation",
        publisher: "Vintage Books, translated by Walter Kaufmann and R.J. Hollingdale",
      },
    ],
    pages: "Notes Ch. 3, notes 4-5 (Pages 264-265); body text Pages 70-77",
    context: "'Will to power' concept -- boys motivated by drive to control, to be in charge; central theoretical framework for understanding video game appeal.",
    keyFigure: true,
  },
  {
    name: "Castel, Alan",
    field: "Psychology",
    works: [
      {
        title: "The Effects of Action Video Game Experience on the Time Course of Inhibition of Return and the Efficiency of Visual Search",
        type: "study" as const,
        year: 2005,
        publisher: "Acta Psychologica, vol. 119, pp. 217-230",
        coAuthors: ["Jay Pratt", "Emily Drummond"],
      },
    ],
    pages: "Notes Ch. 3, note 8 (Page 265)",
    context: "Video games improve reaction times by ~0.02 seconds.",
  },
  {
    name: "Swing, Edward",
    field: "Psychology",
    works: [
      {
        title: "Television and Video Game Exposure and the Development of Attention Problems",
        type: "study" as const,
        year: 2010,
        publisher: "Pediatrics, vol. 126, pp. 214-221",
      },
    ],
    pages: "Notes Ch. 3, note 9 (Page 265)",
    context: "More video game time leads to more difficulty maintaining sustained concentration.",
  },
  {
    name: "Gentile, Douglas",
    field: "Psychology",
    works: [
      {
        title: "Video Game Playing, Attention Problems, and Impulsiveness: Evidence of Bidirectional Causality",
        type: "study" as const,
        year: 2012,
        publisher: "Psychology of Popular Media Culture, vol. 1, pp. 62-70",
      },
    ],
    pages: "Notes Ch. 3, note 9 (Page 265)",
    context: "Bidirectional relationship between attention problems and video games.",
  },
  {
    name: "Hull, Jay",
    field: "Psychology",
    works: [
      {
        title: "A Longitudinal Study of Risk-Glorifying Video Games and Reckless Driving",
        type: "study" as const,
        year: 2012,
        publisher: "Psychology of Popular Media Culture, vol. 1, pp. 244-253",
        coAuthors: ["Ana Draghici", "James Sargent"],
      },
      {
        title: "A Longitudinal Study of Risk-Glorifying Video Games and Behavioral Deviance",
        type: "study" as const,
        year: 2014,
        publisher: "Journal of Personality and Social Psychology, vol. 107, pp. 300-325",
      },
    ],
    pages: "Notes Ch. 3, notes 10, 16 (Pages 265, 267)",
    context: "Risk-glorifying games linked to dangerous driving behaviors. Over 4 years, more violent game time leads to alcohol abuse, smoking, risky sexual behavior.",
  },
  {
    name: "Beullens, Kathleen",
    field: "Psychology",
    works: [
      {
        title: "Predicting Young Drivers' Car Crashes",
        type: "study" as const,
        year: 2013,
        publisher: "Media Psychology, vol. 16, issue 1",
        coAuthors: ["Jan Van den Bulck"],
      },
    ],
    pages: "Notes Ch. 3, note 11 (Page 265)",
    context: "Teens playing risky racing games 3x more likely to be in actual car crash 5 years later.",
  },
  {
    name: "Mario, Stervo",
    field: "Nutrition / Health",
    works: [
      {
        title: "Frequent Video-Game Playing in Young Males is Associated with Central Adiposity and High-Sugar, Low-Fibre Dietary Consumption",
        type: "study" as const,
        year: 2014,
        publisher: "Eating and Weight Disorders, vol. 19, pp. 515-520",
      },
    ],
    pages: "Notes Ch. 3, note 12 (Pages 265-266)",
    context: "Video games linked to obesity in boys.",
  },
  {
    name: "Chaput, Jean-Philippe",
    field: "Nutrition",
    works: [
      {
        title: "Video Game Playing Increases Food Intake in Adolescents: A Randomized Crossover Study",
        type: "study" as const,
        year: 2011,
        publisher: "American Journal of Clinical Nutrition, vol. 93, pp. 1196-1203",
      },
    ],
    pages: "Notes Ch. 3, note 13 (Page 266)",
    context: "Video games have direct appetite-stimulant effect.",
  },
  {
    name: "Bastian, Brock",
    field: "Social Psychology",
    works: [
      {
        title: "Cyber-Dehumanization: Violent Video Game Play Diminishes Our Humanity",
        type: "study" as const,
        year: 2012,
        publisher: "Journal of Experimental Social Psychology, vol. 48, pp. 486-491",
        coAuthors: ["Jolanda Jetten", "Helena Radke"],
      },
    ],
    pages: "Notes Ch. 3, note 15 (Page 266)",
    context: "Players regard themselves as less human after playing violent games.",
  },
  {
    name: "Anderson, Craig",
    field: "Psychology",
    works: [
      {
        title: "Violent Video Game Effects on Aggression, Empathy, and Prosocial Behavior in Eastern and Western Countries: A Meta-Analytic Review",
        type: "study" as const,
        year: 2010,
        publisher: "Psychological Bulletin, vol. 136, pp. 151-173",
      },
      {
        title: "Violent Video Game Effects on Children and Adolescents",
        type: "book" as const,
        year: 2007,
        publisher: "Oxford University Press (New York)",
        coAuthors: ["Douglas Gentile", "Katherine Buckley"],
      },
    ],
    pages: "Notes Ch. 3, notes 24, 32 (Pages 268); body text Pages 78-79",
    context: "Strength of evidence linking video games to antisocial behavior comparable to secondhand smoke and lung cancer. Iowa State University. Most cited video game researcher in the book.",
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
    pages: "Notes Ch. 3, note 24 (Page 268)",
    context: "Commentary supporting Anderson's meta-analysis.",
  },
  {
    name: "Welsh, Patrick",
    field: "Education / Journalism",
    works: [
      {
        title: "It's No Contest; Boys Will Be Men, and They'll Still Choose Video Games",
        type: "article" as const,
        year: 2004,
        publisher: "Washington Post, December 5, 2004, p. B1",
      },
    ],
    pages: "Notes Ch. 3, notes 27, 29 (Page 268); body text Pages 80-82, 89",
    context: "T.C. Williams High School teacher on boys preferring video games to girls and school.",
  },

  // ---- Chapter 4: The Third Factor -- Medications for ADHD ----
  {
    name: "Breggin, Peter",
    field: "Psychiatry",
    works: [
      {
        title: "Talking Back to Ritalin",
        type: "book" as const,
        year: 1998,
        publisher: "Common Courage Press",
      },
      {
        title: "The Ritalin Fact Book",
        type: "book" as const,
        year: 2002,
        publisher: "Perseus (New York)",
      },
    ],
    pages: "Notes Ch. 4, note 2 (Page 269)",
    context: "Argued ADHD was invented by pharmaceutical industry -- Sax partially disagrees.",
  },
  {
    name: "Sax, Leonard and Kautz, Kathleen",
    field: "Medicine",
    works: [
      {
        title: "Who First Suggests the Diagnosis of Attention-Deficit Hyperactivity Disorder?",
        type: "study" as const,
        year: 2003,
        publisher: "Annals of Family Medicine, vol. 1, pp. 171-174",
      },
    ],
    pages: "Notes Ch. 4, note 8 (Page 270); body text Pages 103-104",
    context: "Teachers most likely to first suggest ADHD diagnosis; funded by American Academy of Family Physicians.",
    keyFigure: true,
  },
  {
    name: "Gabrieli, John",
    field: "Neuroscience",
    works: [
      {
        title: "Educating the Brain",
        type: "talk" as const,
        year: 2006,
        publisher: "Harvard University 'Learning and the Brain' conference",
      },
    ],
    pages: "Notes Ch. 4, note 9 (Page 270); body text Pages 104-106",
    context: "ADHD medications improve performance of NORMAL children by same degree as ADHD children -- critical finding. MIT professor.",
    keyFigure: true,
  },
  {
    name: "Carlezon, William",
    field: "Neuroscience",
    works: [
      {
        title: "Three papers on effects of methylphenidate on juvenile animals",
        type: "study" as const,
        year: "2003-2005",
        publisher: "Biological Psychiatry; Neuropharmacology",
      },
    ],
    pages: "Notes Ch. 4, notes 11, 14 (Pages 270, 273); body text Pages 106-107",
    context: "Stimulant medications given to juvenile animals cause loss of drive in adulthood; damage to nucleus accumbens. Harvard Medical School.",
    keyFigure: true,
  },
  {
    name: "Robinson, Terry",
    field: "Neuroscience",
    works: [
      {
        title: "Persistent Structural Modifications in Nucleus Accumbens and Prefrontal Cortex Neurons Produced by Previous Experiences with Amphetamine",
        type: "study" as const,
        year: 1997,
        publisher: "Journal of Neuroscience, vol. 17, pp. 8491-8497",
        coAuthors: ["Bryan Kolb"],
      },
    ],
    pages: "Notes Ch. 4, note 12 (Page 271)",
    context: "Low-dose amphetamine damages neurons in nucleus accumbens. University of Michigan.",
  },
  {
    name: "Advokat, Claire",
    field: "Neuroscience",
    works: [
      {
        title: "Literature Review: Update on Amphetamine Neurotoxicity and Its Relevance to the Treatment of ADHD",
        type: "article" as const,
        year: 2007,
        publisher: "Journal of Attention Disorders, vol. 11, pp. 8-16",
      },
    ],
    pages: "Notes Ch. 4, note 12 (Page 271)",
    context: "Review of amphetamine neurotoxicity evidence.",
  },
  {
    name: "Volkow, Nora",
    field: "Neuroscience",
    works: [
      {
        title: "Imaging the Effects of Methylphenidate on Brain Dopamine",
        type: "study" as const,
        year: 2005,
        publisher: "Biological Psychiatry, vol. 57, pp. 1410-1415",
      },
    ],
    pages: "Notes Ch. 4, note 13 (Page 273)",
    context: "Methylphenidate works by increasing dopamine action in the synapse.",
  },
  {
    name: "Hoekzema, Elseline",
    field: "Neuroscience",
    works: [
      {
        title: "Stimulant Drugs Trigger Transient Volumetric Changes in the Human Ventral Striatum",
        type: "study" as const,
        year: 2013,
        publisher: "Brain Structure and Function, vol. 219, pp. 23-34",
      },
    ],
    pages: "Notes Ch. 4, note 15 (Page 273)",
    context: "Stimulant medications may shrink nucleus accumbens in human brain.",
  },
  {
    name: "Steiner, Heinz",
    field: "Neuroscience",
    works: [
      {
        title: "Addiction-Related Gene Regulation: Risks of Exposure to Cognitive Enhancers vs. Other Psychostimulants",
        type: "article" as const,
        year: 2013,
        publisher: "Progress in Neurobiology, vol. 100, pp. 60-80",
        coAuthors: ["Vincent Van Waes"],
      },
    ],
    pages: "Notes Ch. 4, note 12 (Page 273)",
    context: "Review of similarities between prescription stimulants and cocaine, long-term risks.",
  },
  {
    name: "Carriere, Nicolas",
    field: "Neuroscience",
    works: [
      {
        title: "Apathy in Parkinson's Disease Is Associated with Nucleus Accumbens Atrophy",
        type: "study" as const,
        year: 2014,
        publisher: "Movement Disorders, vol. 29, pp. 897-903",
      },
    ],
    pages: "Notes Ch. 4, note 18 (Page 273)",
    context: "Smaller nucleus accumbens correlates with greater apathy.",
  },
  {
    name: "Roberts, Elizabeth",
    field: "Medicine / Journalism",
    works: [
      {
        title: "A Rush to Medicate Young Minds",
        type: "article" as const,
        year: 2006,
        publisher: "Washington Post, October 8, 2006, p. B7",
      },
    ],
    pages: "Notes Ch. 4, note 5 (Page 269)",
    context: "Critique of overprescription of ADHD medications.",
  },
  {
    name: "Harris, Jennifer",
    field: "Psychiatry",
    works: [
      {
        title: "Quoted in Psychotherapy Networker",
        type: "article" as const,
        year: 2006,
        publisher: "Psychotherapy Networker, February 2006",
      },
    ],
    pages: "Notes Ch. 4, note 7 (Page 270); body text Page 103",
    context: "'Many clinicians find it easier to tell parents their child has a brain-based disorder than to suggest parenting changes.'",
  },
  {
    name: "Pellegrino, Charles",
    field: "Archaeology",
    works: [
      {
        title: "Unearthing Atlantis",
        type: "book" as const,
        year: 1994,
        publisher: "Random House (New York)",
      },
    ],
    pages: "Notes Ch. 4, note 20 (Page 274)",
    context: "Book about Thera/Atlantis recommended to Sax by patient Jared.",
  },

  // ---- Chapter 5: The Fourth Factor -- Endocrine Disruptors ----
  {
    name: "Fahrenthold, David",
    field: "Environmental Science / Journalism",
    works: [
      {
        title: "Male Bass Across Region Found to Be Bearing Eggs",
        type: "article" as const,
        year: 2006,
        publisher: "Washington Post, September 6, 2006, pp. A1, A8",
      },
    ],
    pages: "Notes Ch. 5, notes 1-2 (Page 274); body text Pages 116-118",
    context: "Male fish in Potomac River making eggs instead of sperm; 80% of male smallmouth bass feminized.",
  },
  {
    name: "Blazer, Vicki",
    field: "Environmental Science / Veterinary Pathology",
    works: [
      {
        title: "Multiple papers on intersex fish and endocrine disruption in Potomac River",
        type: "study" as const,
        year: "2009, 2012",
        publisher: "Aquatic Toxicology; Environmental Monitoring and Assessment",
      },
    ],
    pages: "Notes Ch. 5, note 3 (Pages 274-275); body text Pages 117-118",
    context: "Documented widespread feminization of male fish across US rivers linked to manmade chemicals.",
    keyFigure: true,
  },
  {
    name: "Sessions Stepp, Laura",
    field: "Sociology / Journalism",
    works: [
      {
        title: "Cupid's Broken Arrow",
        type: "article" as const,
        year: 2006,
        publisher: "Washington Post, May 7, 2006",
      },
      {
        title: "Unhooked: How Young Women Pursue Sex, Delay Love and Lose at Both",
        type: "book" as const,
        year: 2007,
        publisher: "Riverhead/Penguin (New York)",
      },
    ],
    pages: "Notes Ch. 5, notes 4-5 (Page 275); Ch. 6 note 9 (Page 290); body text Pages 118, 150",
    context: "More young men struggling with impotence; ~25% of college men report erectile dysfunction. Also documents how two-thirds of young men said better to get married while more than half of young women said better to be single.",
  },
  {
    name: "Nagler, James",
    field: "Environmental Science",
    works: [
      {
        title: "High Incidence of a Male-Specific Genetic Marker in Phenotypic Female Chinook Salmon",
        type: "study" as const,
        year: 2001,
        publisher: "Environmental Health Perspectives, vol. 109, pp. 67-69",
      },
    ],
    pages: "Notes Ch. 5, note 6 (Pages 275-276)",
    context: "Genetically male fish completely feminized in Columbia River tributaries.",
  },
  {
    name: "Guillette, Louis J. Jr.",
    field: "Environmental Science / Biology",
    works: [
      {
        title: "Developmental Abnormalities of the Gonad and Abnormal Sex Hormone Concentrations in Juvenile Alligators",
        type: "study" as const,
        year: 1994,
        publisher: "Environmental Health Perspectives, vol. 102, pp. 680-688",
      },
    ],
    pages: "Notes Ch. 5, note 6 (Page 276); body text Pages 120, 131",
    context: "Male alligators with shriveled testicles near Lake Apopka, FL, linked to plastic derivatives.",
    keyFigure: true,
  },
  {
    name: "Colborn, Theo",
    field: "Environmental Science",
    works: [
      {
        title: "Developmental Effects of Endocrine-Disrupting Chemicals in Wildlife and Humans",
        type: "study" as const,
        year: 1993,
        publisher: "Environmental Health Perspectives, vol. 101, pp. 378-384",
        coAuthors: ["Frederick vom Saal", "Ana Soto"],
      },
    ],
    pages: "Notes Ch. 5, note 6 (Page 276)",
    context: "Great Lakes region endocrine disruption documentation. Pioneer in endocrine disruptor research.",
    keyFigure: true,
  },
  {
    name: "Saenz de Rodriguez, Carmen",
    field: "Pediatric Endocrinology",
    works: [
      {
        title: "An Epidemic of Precocious Development in Puerto Rican Children",
        type: "study" as const,
        year: 1985,
        publisher: "Journal of Pediatrics, vol. 107, pp. 393-396",
        coAuthors: ["Alfred Bongiovanni", "Lillian Conde de Borrego"],
      },
    ],
    pages: "Notes Ch. 5, note 7 (Page 276); body text Pages 119-121",
    context: "Girls as young as 7-8 going through puberty in Puerto Rico.",
  },
  {
    name: "Colen, Ivelisse",
    field: "Endocrinology",
    works: [
      {
        title: "Identification of Phthalate Esters in the Serum of Young Puerto Rican Girls with Premature Breast Development",
        type: "study" as const,
        year: 2000,
        publisher: "Environmental Health Perspectives, vol. 108, pp. 895-900",
      },
    ],
    pages: "Notes Ch. 5, note 11 (Page 277); body text Page 121",
    context: "Girls with early breast development had high phthalate levels.",
  },
  {
    name: "Kaplowitz, Paul",
    field: "Pediatric Endocrinology",
    works: [
      {
        title: "Reexamination of the Age Limit for Defining When Puberty Is Precocious in Girls",
        type: "study" as const,
        year: 1999,
        publisher: "Pediatrics, vol. 104, pp. 936-941",
        coAuthors: ["Sharon Oberfield"],
      },
    ],
    pages: "Notes Ch. 5, note 13 (Page 278); body text Page 121",
    context: "Redefined normal puberty onset to age 8 -- Sax criticizes this approach.",
  },
  {
    name: "Steingraber, Sandra",
    field: "Public Health",
    works: [
      {
        title: "The Falling Age of Puberty in U.S. Girls",
        type: "report" as const,
        year: 2007,
        publisher: "Breast Cancer Fund (San Francisco)",
      },
    ],
    pages: "Notes Ch. 5, note 15 (Page 278)",
    context: "Documentation of declining age of puberty in US girls.",
  },
  {
    name: "Swan, Shanna H.",
    field: "Environmental Health / Reproductive Biology",
    works: [
      {
        title: "Multiple papers on phthalate exposure, sperm counts, and anogenital distance",
        type: "study" as const,
        year: "2000-2015",
        publisher: "Environmental Health Perspectives; Human Reproduction",
      },
    ],
    pages: "Notes Ch. 5, notes 53, 56, 58, 62 (Pages 285-288); body text Pages 147-148",
    context: "Phthalate exposure decreases anogenital distance and sperm count; 'phthalate syndrome'; sperm counts declining worldwide.",
    keyFigure: true,
  },
  {
    name: "Travison, Thomas",
    field: "Endocrinology",
    works: [
      {
        title: "A Population-Level Decline in Serum Testosterone Levels in American Men",
        type: "study" as const,
        year: 2007,
        publisher: "Journal of Clinical Endocrinology and Metabolism, vol. 92, pp. 196-202",
      },
    ],
    pages: "Notes Ch. 5, note 50 (Page 285)",
    context: "Average testosterone levels declining in American men.",
  },
  {
    name: "Skakkebaek, Nils",
    field: "Reproductive Medicine",
    works: [
      {
        title: "Testicular Dysgenesis Syndrome",
        type: "study" as const,
        year: 2001,
        publisher: "Human Reproduction, vol. 16, pp. 972-978",
        coAuthors: ["E. Rajpert-De Meyts", "Katharina Main"],
      },
    ],
    pages: "Notes Ch. 5, note 52 (Page 285)",
    context: "Identified testicular dysgenesis syndrome linked to environmental factors.",
  },
  {
    name: "Klimentidis, Yann",
    field: "Biology / Epidemiology",
    works: [
      {
        title: "Canaries in the Coal Mine: A Cross-Species Analysis of the Plurality of Obesity Epidemics",
        type: "study" as const,
        year: 2011,
        publisher: "Proceedings of the Royal Society, vol. 278, pp. 1626-1632",
      },
    ],
    pages: "Notes Ch. 5, note 33 (Page 282)",
    context: "Obesity epidemic also affecting laboratory animals, feral rats, pets -- not just diet/exercise.",
  },
  {
    name: "Grandjean, Philippe",
    field: "Toxicology / Neuroscience",
    works: [
      {
        title: "Neurobehavioural Effects of Developmental Toxicity",
        type: "study" as const,
        year: 2014,
        publisher: "Lancet Neurology, vol. 13, pp. 330-338",
        coAuthors: ["Philip Landrigan"],
      },
    ],
    pages: "Notes Ch. 5, note 26 (Page 280)",
    context: "84,000 chemicals in commercial use; 'only a minority has been tested for developmental neurotoxicity.'",
  },

  // ---- Chapter 6: End Result -- Failure to Launch ----
  {
    name: "Murray, Charles",
    field: "Social Criticism / Education",
    works: [
      {
        title: "What's Wrong with Vocational School?",
        type: "article" as const,
        year: 2007,
        publisher: "Wall Street Journal, January 17, 2007",
      },
    ],
    pages: "Notes Ch. 6, notes 3-4 (Page 289); body text Pages 157-158",
    context: "Bachelor's degree 'certifies nothing'; master craftsmen can earn six figures; vocational education stigmatized.",
    keyFigure: true,
  },
  {
    name: "Mortenson, Tom",
    field: "Education / Sociology",
    works: [
      {
        title: "The State of American Manhood",
        type: "report" as const,
        year: 2006,
        publisher: "Postsecondary Education Opportunity, September 2006",
      },
    ],
    pages: "Notes Ch. 6, note 6 (Page 289)",
    context: "Analysis of disengagement of young men from workforce.",
  },
  {
    name: "Uchitelle, Louis",
    field: "Economics / Journalism",
    works: [
      {
        title: "Men Not Working, and Not Wanting Just Any Job",
        type: "article" as const,
        year: 2006,
        publisher: "New York Times, July 31, 2006, pp. A1, A18, A19",
        coAuthors: ["David Leonhardt", "Amanda Cox"],
      },
    ],
    pages: "Notes Ch. 6, note 7 (Page 289); body text Pages 147-148",
    context: "Growing trend of able-bodied men not working and not looking; 1 in 7 nationwide.",
  },
  {
    name: "Hipple, Steven",
    field: "Economics",
    works: [
      {
        title: "People Who Are Not in the Labor Force: Why Aren't They Working?",
        type: "report" as const,
        year: 2015,
        publisher: "Bureau of Labor Statistics, Beyond the Numbers, vol. 4, no. 15",
      },
    ],
    pages: "Notes Ch. 6, note 8 (Page 290)",
    context: "7,058,000 men aged 25-54 not working and not looking in 2014 (25% increase from 2004).",
  },
  {
    name: "Vespa, Jonathan",
    field: "Demography",
    works: [
      {
        title: "America's Families and Living Arrangements: 2012",
        type: "report" as const,
        year: 2013,
        publisher: "US Census Bureau",
      },
    ],
    pages: "Notes Ch. 6, note 10 (Page 290); body text Pages 150-151",
    context: "Married couples with children now just 20% of households; 27% are adults living alone.",
  },
  {
    name: "Wang, Wendy",
    field: "Sociology / Demography",
    works: [
      {
        title: "Record Share of Americans Have Never Married",
        type: "report" as const,
        year: 2014,
        publisher: "Pew Research Center, September 24, 2014",
        coAuthors: ["Kim Parker"],
      },
    ],
    pages: "Notes Ch. 6, note 11 (Page 290); body text Page 151",
    context: "52% of men aged 25-34 had never married in 2010 (up from 1 in 6 in 1970).",
  },
  {
    name: "Pearson, Allison",
    field: "Literature / Social Commentary",
    works: [
      {
        title: "I Don't Know How She Does It",
        type: "book" as const,
        year: 2002,
      },
    ],
    pages: "Body text Pages 150-151",
    context: "'Chick lit' about productive woman saddled with underachieving husband.",
  },
  {
    name: "Schneider, Jennifer",
    field: "Psychology",
    works: [
      {
        title: "A Qualitative Study of Cybersex Participants: Gender Differences, Recovery Issues, and Implications for Therapists",
        type: "study" as const,
        year: 2000,
        publisher: "Sexual Addiction and Compulsivity, vol. 7, pp. 249-278",
      },
    ],
    pages: "Notes Ch. 6, note 19 (Page 291)",
    context: "Escalating pattern of compulsive cybersex use in men.",
  },
  {
    name: "Musacchio, Najah S.",
    field: "Medicine",
    works: [
      {
        title: "Erectile Dysfunction and Viagra Use: What's Up with College-Age Males?",
        type: "study" as const,
        year: 2006,
        publisher: "Journal of Adolescent Health, vol. 39, pp. 452-454",
        coAuthors: ["Molly Hartrich", "Robert Garofalo"],
      },
    ],
    pages: "Notes Ch. 6, note 21 (Pages 291-292)",
    context: "33% of sexually active males 18-25 reported some form of erectile dysfunction.",
  },
  {
    name: "Dines, Gail",
    field: "Sociology / Media Studies",
    works: [
      {
        title: "Pornland: How Porn Has Hijacked Our Sexuality",
        type: "book" as const,
        year: 2011,
        publisher: "Beacon Press (Boston)",
      },
    ],
    pages: "Notes Ch. 6, note 26 (Page 292)",
    context: "Impact of pornography on male sexuality.",
  },
  {
    name: "Levy, Ariel",
    field: "Sociology",
    works: [
      {
        title: "Female Chauvinist Pigs: Women and the Rise of Raunch Culture",
        type: "book" as const,
        year: 2005,
        publisher: "Free Press (New York)",
      },
    ],
    pages: "Notes Ch. 6, note 26 (Page 292)",
    context: "Rise of raunch culture.",
  },
  {
    name: "Zielenziger, Michael",
    field: "Sociology",
    works: [
      {
        title: "Shutting Out the Sun: How Japan Created Its Own Lost Generation",
        type: "book" as const,
        year: 2006,
        publisher: "Nan A. Talese (New York)",
      },
    ],
    pages: "Notes Ch. 6, note 32 (Page 293); body text referenced",
    context: "Hikikomori phenomenon in Japan -- young men withdrawing from society.",
  },

  // ---- Chapter 7: The Fifth Factor -- The Revenge of the Forsaken Gods ----
  {
    name: "Moehringer, J. R.",
    field: "Memoir",
    works: [
      {
        title: "The Tender Bar",
        type: "book" as const,
        year: 2005,
        publisher: "Hyperion (New York)",
      },
    ],
    pages: "Notes Ch. 7, note 2 (Page 293); body text referenced",
    context: "Story of boy growing up without father, finding male role models at local bar.",
  },
  {
    name: "Brooks, David",
    field: "Social Commentary",
    works: [
      {
        title: "Virtues and Victims",
        type: "article" as const,
        year: 2006,
        publisher: "New York Times, April 9, 2006",
      },
    ],
    pages: "Notes Ch. 7, note 3 (Page 293)",
    context: "Commentary on masculinity and virtue.",
  },
  {
    name: "Gilmore, David",
    field: "Anthropology",
    works: [
      {
        title: "Manhood in the Making: Cultural Concepts of Masculinity",
        type: "book" as const,
        year: 1990,
        publisher: "Yale University Press (New Haven, CT)",
      },
    ],
    pages: "Notes Ch. 7, notes 4-5, 13-22 (Pages 293-296); body text Pages 205-213",
    context: "Cross-cultural study of masculinity; nearly every culture has manhood rituals; exceptions (Tahiti, Semai) collapsed on contact with other cultures.",
    keyFigure: true,
  },
  {
    name: "Leupp, Gary",
    field: "History / Anthropology",
    works: [
      {
        title: "Male Colors: The Construction of Homosexuality in Tokugawa Japan",
        type: "book" as const,
        year: 1996,
        publisher: "University of California Press (Berkeley)",
      },
    ],
    pages: "Notes Ch. 7, note 7 (Page 293)",
    context: "Homosexuality in Japanese culture -- demonstrates masculinity constructs vary across cultures.",
  },
  {
    name: "Vanggaard, Thorkil",
    field: "Anthropology / History",
    works: [
      {
        title: "Phallos: A Symbol and Its History in the Male World",
        type: "book" as const,
        year: 1972,
        publisher: "International Universities Press (New York)",
      },
    ],
    pages: "Notes Ch. 7, note 8 (Page 293)",
    context: "Homosexuality among Spartans and ancient Greeks; phallic worship.",
  },
  {
    name: "Drexler, Peggy",
    field: "Parenting / Sociology",
    works: [
      {
        title: "Raising Boys Without Men: How Maverick Moms Are Creating the Next Generation of Exceptional Men",
        type: "book" as const,
        year: 2006,
        publisher: "Rodale (Emmaus, PA)",
      },
    ],
    pages: "Notes Ch. 7, note 11 (Page 295); body text referenced",
    context: "Argues boys can be raised without men -- Sax takes a different view.",
  },
  {
    name: "Hantover, Jeffrey P.",
    field: "Sociology",
    works: [
      {
        title: "The Boy Scouts and the Validation of Masculinity",
        type: "study" as const,
        year: 1978,
        publisher: "Journal of Social Issues, vol. 34, pp. 184-195",
      },
    ],
    pages: "Notes Ch. 7, note 16 (Page 296)",
    context: "Boy Scouts as institution for teaching masculinity.",
  },
  {
    name: "Grant, Julia",
    field: "History",
    works: [
      {
        title: "A 'Real Boy' and Not a Sissy: Gender, Childhood, and Masculinity, 1890-1940",
        type: "study" as const,
        year: 2004,
        publisher: "Journal of Social History, vol. 37, pp. 829-851",
      },
    ],
    pages: "Notes Ch. 7, note 16 (Page 296)",
    context: "Historical constructions of masculinity in American boyhood.",
  },
  {
    name: "Habegger, Alfred",
    field: "Literary Criticism",
    works: [
      {
        title: "Gender, Fantasy, and Realism in American Literature",
        type: "book" as const,
        year: 1982,
        publisher: "Columbia University Press (New York)",
      },
    ],
    pages: "Notes Ch. 7, note 17 (Page 296)",
    context: "Gender and masculinity in American literature.",
  },
  {
    name: "Garcia Coll, Cynthia",
    field: "Psychology",
    works: [
      {
        title: "The Immigrant Paradox in Children and Adolescents: Is Becoming American a Developmental Risk?",
        type: "book" as const,
        year: 2011,
        publisher: "American Psychological Association (Washington, DC)",
        coAuthors: ["Amy Kerivan Marks"],
      },
    ],
    pages: "Notes Ch. 7, notes 23-27 (Pages 297-301)",
    context: "'Immigrant paradox' -- children of immigrants do better than US-born children; supports Sax's argument about cultural transmission of values.",
    keyFigure: true,
  },
  {
    name: "Mansfield, Harvey",
    field: "Political Philosophy",
    works: [
      {
        title: "Manliness",
        type: "book" as const,
        year: 2006,
        publisher: "Yale University Press (New Haven, CT)",
      },
    ],
    pages: "Notes Ch. 7, notes 32-35 (Page 301); body text referenced",
    context: "Definition and defense of manliness as a concept; Harvard professor.",
    keyFigure: true,
  },
  {
    name: "Benton, Sherry",
    field: "Psychology",
    works: [
      {
        title: "Changes in counseling center client problems across 13 years",
        type: "study" as const,
        year: 2003,
        publisher: "Professional Psychology: Research and Practice, vol. 34, p. 69",
      },
    ],
    pages: "Notes Ch. 7, note 28 (Page 301)",
    context: "Increasing mental health problems among college students.",
  },
  {
    name: "Gordon, Milton",
    field: "Sociology",
    works: [
      {
        title: "Assimilation in American Life: The Role of Race, Religion, and National Origins",
        type: "book" as const,
        year: 1964,
        publisher: "Oxford University Press (New York)",
      },
    ],
    pages: "Notes Ch. 7, note 25 (Page 301)",
    context: "Historical barriers to immigrant assimilation pre-1960.",
  },

  // ---- Chapter 8: Detox ----
  {
    name: "Gorges, Roland",
    field: "Education",
    works: [
      {
        title: "Der Waldkindergarten",
        type: "article" as const,
        year: 2000,
        publisher: "Unsere Jugend, Spring 2000, pp. 275-281",
      },
    ],
    pages: "Notes Ch. 8, note 4 (Page 302); body text Pages 231-233",
    context: "Germany's Waldkindergarten (forest kindergarten) -- over 1,500 in Germany; children learn outdoors.",
  },
  {
    name: "Datnow, Amanda",
    field: "Education",
    works: [
      {
        title: "Is Single Gender Schooling Viable in the Public Sector?",
        type: "report" as const,
        year: 2001,
        publisher: "Ford Foundation",
        coAuthors: ["Lea Hubbard", "Elisabeth Woody"],
      },
    ],
    pages: "Notes Ch. 8, notes 18-19 (Page 303)",
    context: "Study of single-sex schooling viability in public schools.",
  },
  {
    name: "Campbell, Joseph",
    field: "Mythology / Comparative Religion",
    works: [
      {
        title: "The Power of Myth",
        type: "book" as const,
        year: 1991,
        publisher: "Anchor (New York)",
        coAuthors: ["Bill Moyers"],
      },
    ],
    pages: "Notes Ch. 8, note 24 (Page 304); body text referenced",
    context: "Campbell's ideas on mythology and the hero's journey.",
  },
  {
    name: "Trulock, Alice Rains",
    field: "History / Biography",
    works: [
      {
        title: "In the Hands of Providence: Joshua L. Chamberlain and the American Civil War",
        type: "book" as const,
        year: 1992,
        publisher: "University of North Carolina Press (Chapel Hill)",
      },
    ],
    pages: "Notes Ch. 8, note 25 (Page 304); body text Pages 258-262",
    context: "Biography of Joshua Chamberlain, hero of Gettysburg -- exemplar of masculine virtue.",
  },
  {
    name: "LaFantasie, Glenn",
    field: "Military History",
    works: [
      {
        title: "Twilight at Little Round Top: July 2, 1863 -- The Tide Turns at Gettysburg",
        type: "book" as const,
        year: 2005,
        publisher: "John Wiley and Sons (Hoboken, NJ)",
      },
    ],
    pages: "Notes Ch. 8, notes 26-28 (Page 304)",
    context: "Alternative view of Little Round Top events.",
  },
  {
    name: "Shaara, Michael",
    field: "Historical Fiction",
    works: [
      {
        title: "The Killer Angels",
        type: "book" as const,
        year: 1974,
        publisher: "Ballantine (New York)",
      },
    ],
    pages: "Notes Ch. 8, note 26 (Page 304)",
    context: "Chamberlain as major character in Gettysburg narrative. Pulitzer Prize winner.",
  },
  {
    name: "Sears, Stephen W.",
    field: "Military History",
    works: [
      {
        title: "Gettysburg",
        type: "book" as const,
        year: 2003,
        publisher: "Houghton Mifflin (New York)",
      },
    ],
    pages: "Notes Ch. 8, note 29 (Page 304)",
    context: "Traditional account of Battle of Gettysburg.",
  },
  {
    name: "Hardwired to Connect panel",
    field: "Psychology / Child Development",
    works: [
      {
        title: "Hardwired to Connect: The New Scientific Case for Authoritative Communities",
        type: "book" as const,
        year: 2003,
        publisher: "Broadway (New York)",
      },
    ],
    pages: "Notes Ch. 7, notes 29, 31 (Page 301); body text referenced",
    context: "Panel of Dartmouth experts concluding children need authoritative communities for healthy development.",
  },
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  // Universities and Research Centers
  {
    name: "Stanford University",
    type: "University",
    context: "Deborah Stipek (Dean, School of Education); Frank Wilson (neurology).",
    pages: "Ch. 2",
  },
  {
    name: "Harvard University / Harvard Medical School",
    type: "University",
    context: "Shih/Pittinsky/Ambady stereotype study; Yurgelun-Todd brain research; William Carlezon (nucleus accumbens); 'Learning and the Brain' conference; Christopher Jencks (sociology).",
    pages: "Ch. 2, Ch. 4, Ch. 7",
  },
  {
    name: "University of Pennsylvania",
    type: "University",
    context: "Ingalhalikar brain connectivity study; Duckworth & Seligman self-discipline study; Sax's Ph.D. program in psychology.",
    pages: "Ch. 1, Ch. 2",
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    type: "University",
    context: "John Gabrieli's ADHD medication study showing meds improve normal children equally.",
    pages: "Ch. 4",
  },
  {
    name: "University of Michigan",
    type: "University",
    context: "Robinson & Kolb (amphetamine neurotoxicity); Pamela Smock (sociology).",
    pages: "Ch. 4",
  },
  {
    name: "Iowa State University",
    type: "University",
    context: "Craig Anderson's video game effects research.",
    pages: "Ch. 3",
  },
  {
    name: "University of Alaska, Fairbanks",
    type: "University",
    context: "Judith Kleinfeld's analysis of boys' education crisis and NAEP data.",
    pages: "Ch. 2",
  },
  {
    name: "Yale University",
    type: "University",
    context: "David Gilmore (anthropology of masculinity); Harvey Mansfield (manliness).",
    pages: "Ch. 7",
  },
  {
    name: "University of Illinois",
    type: "University",
    context: "Faber Taylor & Kuo (outdoor environments and ADHD).",
    pages: "Ch. 2",
  },
  {
    name: "Princeton University",
    type: "University",
    context: "Joel Cooper and Kimberlee Weaver (gender and computers).",
    pages: "Ch. 2",
  },
  {
    name: "Duke University",
    type: "University",
    context: "Keith Brodie (psychiatry, erectile dysfunction in young men).",
    pages: "Ch. 5",
  },
  {
    name: "University of North Carolina, Chapel Hill",
    type: "University",
    context: "Alice Rains Trulock (Chamberlain biography).",
    pages: "Ch. 8",
  },
  {
    name: "Oulu University Hospital, Finland",
    type: "University Hospital",
    context: "Sinikumpu (pediatric fractures research).",
    pages: "Ch. 2",
  },
  {
    name: "Universitat Pompeu Fabra",
    type: "University",
    context: "Franco Emch (nucleus accumbens research).",
    pages: "Ch. 4",
  },
  {
    name: "Monell Chemical Senses Center, Philadelphia",
    type: "Research Center",
    context: "Pamela Dalton (sex differences in smell).",
    pages: "Ch. 2",
  },
  {
    name: "Columbia University",
    type: "University",
    context: "Habegger (literature and gender).",
    pages: "Ch. 7",
  },
  {
    name: "University of California, Berkeley",
    type: "University",
    context: "Leupp (Tokugawa Japan).",
    pages: "Ch. 7",
  },
  // Government Agencies
  {
    name: "US Department of Education / Institute of Education Sciences / National Center for Education Statistics",
    type: "Government Agency",
    context: "NAEP, PISA, Digest of Education Statistics, Condition of Education -- primary data sources for gender gap analysis.",
    pages: "Ch. 1, Ch. 2",
  },
  {
    name: "Centers for Disease Control and Prevention (CDC)",
    type: "Government Agency",
    context: "ADHD diagnosis rates, nonmarital childbirth data, obesity data.",
    pages: "Ch. 2, Ch. 5, Ch. 6",
  },
  {
    name: "US Environmental Protection Agency (EPA)",
    type: "Government Agency",
    context: "Endosulfan regulation, pesticide reports.",
    pages: "Ch. 5",
  },
  {
    name: "Bureau of Labor Statistics",
    type: "Government Agency",
    context: "Employment/unemployment data; men not in labor force, 2004 vs 2014.",
    pages: "Ch. 6",
  },
  {
    name: "US Census Bureau",
    type: "Government Agency",
    context: "Household composition, living arrangements data.",
    pages: "Ch. 6",
  },
  {
    name: "US Fish and Wildlife Service",
    type: "Government Agency",
    context: "Feminized alligators in Florida.",
    pages: "Ch. 5",
  },
  {
    name: "Drug Enforcement Administration (DEA)",
    type: "Government Agency",
    context: "Schedule II classification of ADHD medications.",
    pages: "Ch. 4",
  },
  {
    name: "National Institutes of Health (NIH)",
    type: "Government Agency",
    context: "Various referenced studies.",
    pages: "Ch. 4",
  },
  {
    name: "American Psychiatric Association (APA)",
    type: "Professional Organization",
    context: "DSM-5 -- official criteria for ADHD and Oppositional-Defiant Disorder.",
    pages: "Ch. 4",
  },
  {
    name: "American Academy of Pediatrics (AAP)",
    type: "Professional Organization",
    context: "Guidelines for device monitoring.",
    pages: "Ch. 8",
  },
  {
    name: "OECD (Organisation for Economic Co-operation and Development)",
    type: "International Organization",
    context: "PISA testing; international educational performance comparisons.",
    pages: "Ch. 2",
  },
  // Other Organizations
  {
    name: "American Psychological Association",
    type: "Professional Organization",
    context: "Published Sax's 2001 paper; publisher of Constructive & Destructive Behavior.",
    pages: "Ch. 1, Ch. 2",
  },
  {
    name: "Education Sector",
    type: "Nonprofit",
    context: "2006 study claiming boys' crisis is myth -- Sax argues this is misleading.",
    pages: "Ch. 2",
  },
  {
    name: "National Endowment for the Arts",
    type: "Government Agency",
    context: "25-year survey of teen reading habits (1980-2004).",
    pages: "Ch. 2",
  },
  {
    name: "National Council of Teachers of English (NCTE)",
    type: "Professional Organization",
    context: "Creative writing award context.",
    pages: "Ch. 2",
  },
  {
    name: "Ford Foundation",
    type: "Foundation",
    context: "Funded single-sex schooling study by Datnow, Hubbard, and Woody.",
    pages: "Ch. 8",
  },
  {
    name: "Brookings Institution",
    type: "Think Tank",
    context: "Isabel V. Sawhill analysis of family structure.",
    pages: "Ch. 6",
  },
  {
    name: "Pew Research Center",
    type: "Research Organization",
    context: "Marriage data; record share of Americans never married.",
    pages: "Ch. 6",
  },
  {
    name: "Child Trends",
    type: "Research Organization",
    context: "Research group hired by Laura Sessions Stepp.",
    pages: "Ch. 6",
  },
  {
    name: "Alaska Native Science Commission",
    type: "Research Organization",
    context: "Larry Merculieff.",
    pages: "Ch. 7",
  },
  {
    name: "Breast Cancer Fund",
    type: "Nonprofit",
    context: "Published Steingraber report on declining age of puberty.",
    pages: "Ch. 5",
  },
  {
    name: "International Clearinghouse for Birth Defects Surveillance and Research",
    type: "Research Organization",
    context: "Hypospadias/cryptorchidism data.",
    pages: "Ch. 5",
  },
  {
    name: "Heritage Foundation",
    type: "Think Tank",
    context: "Commentary on zero-tolerance policies.",
    pages: "Ch. 2",
  },
  {
    name: "National Institute of Mental Health",
    type: "Government Agency",
    context: "Multimodal Treatment Study of ADHD follow-up; growth effects of medications.",
    pages: "Ch. 4",
  },
  // Schools Referenced
  {
    name: "The Heights (Potomac, MD)",
    type: "School (Boys)",
    context: "All-boys school where 'Jared' thrived after struggling in coed environment.",
    pages: "Ch. 4",
  },
  {
    name: "Mater Dei School (Montgomery County, MD)",
    type: "School",
    context: "Blue Team/White Team competition.",
    pages: "Ch. 8",
  },
  {
    name: "St. Andrew's (Aurora, Ontario)",
    type: "School",
    context: "Snowball policy.",
    pages: "Ch. 2",
  },
  {
    name: "Avon Old Farms",
    type: "School (Boys)",
    context: "Boys' school referenced in context of single-sex education.",
    pages: "Ch. 8",
  },
  {
    name: "Georgetown Preparatory School",
    type: "School (Boys)",
    context: "Referenced in context of boys' education.",
    pages: "Ch. 8",
  },
  {
    name: "T.C. Williams High School (Alexandria, VA)",
    type: "School",
    context: "Patrick Welsh's school; boys preferring video games to school.",
    pages: "Ch. 3",
  },
  {
    name: "Robert Morris University (Chicago)",
    type: "University",
    context: "E-sports scholarships.",
    pages: "Ch. 3",
  },
  {
    name: "Lomond Elementary (Shaker Heights, OH)",
    type: "School (Elementary)",
    context: "Author's own elementary school.",
    pages: "Ch. 1",
  },
  {
    name: "Shaker Heights High School",
    type: "School",
    context: "Author's own high school.",
    pages: "Ch. 1",
  },
  // Companies
  {
    name: "Miller & Long",
    type: "Company",
    context: "Concrete contractor; 75%+ workforce from El Salvador.",
    pages: "Ch. 6",
  },
  {
    name: "Donohoe Construction Company",
    type: "Company",
    context: "Recruiting difficulties finding American-born workers.",
    pages: "Ch. 6",
  },
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "National Assessment of Educational Progress (NAEP)",
    authors: "US Department of Education",
    year: "1969-present",
    finding: "'Our Nation's Report Card'; federal program measuring academic achievement across 50 states. Shows gender gap in reading comparable to race/class gap (15 points). Primary data source for gender gap analysis.",
    pages: "Pages 43-46",
  },
  {
    name: "PISA (Programme for International Student Assessment)",
    authors: "OECD",
    year: "2012",
    finding: "International test; US ranks #24 in reading. Finland scores 519 vs US 481 in math.",
    pages: "Pages 25-26",
  },
  {
    name: "NIMH Multimodal Treatment Study of ADHD Follow-up",
    authors: "National Institute of Mental Health",
    year: "2004",
    finding: "Boys on ADHD meds 3-4 inches shorter as adults if started at age 5.",
    pages: "Page 269",
  },
  {
    name: "National Endowment for the Arts 25-Year Survey",
    authors: "National Endowment for the Arts",
    year: "1980-2004",
    finding: "25-year survey of teen reading habits showing gender gap in reading for fun widened significantly.",
    pages: "Pages 47-48",
  },
  {
    name: "Higher Education: Gaps in Access and Persistence Study",
    authors: "US Department of Education",
    year: "2012",
    finding: "Documents gender gaps in higher education access and persistence.",
    pages: "Page 252",
  },
  {
    name: "Digest of Education Statistics (Tables 303.60, 303.70)",
    authors: "US Department of Education",
    year: "2013-2015",
    finding: "58.6% women vs 41.4% men pursuing postgraduate degrees in 2013; decline from 57.7% male in 1970 to 43.1% male in 2014 among undergraduates.",
    pages: "Pages 252; Page 14",
  },
  {
    name: "The Condition of Education 2015",
    authors: "US Department of Education",
    year: "2015",
    finding: "62% graduation rate for females vs 56% for males among 2007 cohort.",
    pages: "Pages 252-253",
  },
  {
    name: "Bureau of Labor Statistics 'Beyond the Numbers'",
    authors: "Steven Hipple, Bureau of Labor Statistics",
    year: "2015",
    finding: "7,058,000 men aged 25-54 not working and not looking in 2014 (25% increase from 2004).",
    pages: "Page 290",
  },
  {
    name: "US Census Bureau 'America's Families and Living Arrangements'",
    authors: "Jonathan Vespa et al., US Census Bureau",
    year: "2013",
    finding: "Married couples with children now just 20% of households; 27% are adults living alone.",
    pages: "Page 290",
  },
  {
    name: "Pew Research Center 'Record Share of Americans Have Never Married'",
    authors: "Wendy Wang and Kim Parker",
    year: "2014",
    finding: "52% of men aged 25-34 had never married in 2010 (up from 1 in 6 in 1970).",
    pages: "Page 290",
  },
  {
    name: "NAEP Writing Assessment 2011",
    authors: "US Department of Education",
    year: "2011",
    finding: "Extensive data showing gender gap in writing comparable to race/class gap.",
    pages: "Page 261; body text Pages 43-46",
  },
  {
    name: "A Nation at Risk",
    authors: "National Commission on Excellence in Education",
    year: "1983",
    finding: "Report that pushed 'everyone must go to college' consensus, contributing to devaluation of vocational education.",
    pages: "Page 158 (body text)",
  },
  {
    name: "Anderson Meta-analysis on Violent Video Games",
    authors: "Craig Anderson et al.",
    year: "2010",
    finding: "Strong evidence linking violent video games to antisocial behaviors across Eastern and Western countries; evidence strength comparable to secondhand smoke and lung cancer.",
    pages: "Ch. 3, Pages 78-79",
  },
  {
    name: "Carlezon Nucleus Accumbens Studies",
    authors: "William Carlezon et al., Harvard Medical School",
    year: "2003-2005",
    finding: "Stimulant medications given to juvenile animals cause loss of drive in adulthood; damage to nucleus accumbens -- central finding for ADHD medication chapter.",
    pages: "Ch. 4, Pages 106-107",
  },
  {
    name: "Sax & Kautz ADHD Diagnosis Survey",
    authors: "Leonard Sax, Kathleen Kautz",
    year: "2003",
    finding: "Teachers most likely to first suggest ADHD diagnosis, not doctors or parents.",
    pages: "Ch. 4, Pages 103-104",
  },
  {
    name: "Ingalhalikar Brain Connectivity Study",
    authors: "Madhura Ingalhalikar et al., University of Pennsylvania",
    year: "2014",
    finding: "MRI study of 949 individuals aged 8-22; male brains optimized for intrahemispheric communication, female for interhemispheric.",
    pages: "Ch. 2, Page 23",
  },
  {
    name: "Lonsdorf Chimpanzee Sex Differences Study",
    authors: "Elizabeth Lonsdorf, Lynn Eberly, Anne Pusey",
    year: "2004",
    finding: "Girl chimps pay attention to adults and learn skills 2 years earlier; boy chimps prefer wrestling and running.",
    pages: "Ch. 2, Pages 29-30",
  },
  {
    name: "Duckworth & Seligman Self-Discipline Study",
    authors: "Angela Lee Duckworth, Martin E. P. Seligman",
    year: "2006",
    finding: "Girls' greater self-discipline and self-control key to their educational success.",
    pages: "Ch. 2, Page 33",
  },
  {
    name: "Shih/Pittinsky/Ambady Stereotype Susceptibility Study",
    authors: "Margaret Shih, Todd Pittinsky, Nalini Ambady",
    year: "1999",
    finding: "Asian women's math scores affected by which identity (Asian or female) was primed.",
    pages: "Ch. 2, Pages 60-61",
  },
  {
    name: "Guillette Alligator Endocrine Disruption Study",
    authors: "Louis J. Guillette Jr. et al.",
    year: "1994",
    finding: "Male alligators with shriveled testicles near Lake Apopka, FL, linked to plastic derivatives in the environment.",
    pages: "Ch. 5, Pages 120, 131",
  },
  {
    name: "Swan Phthalate Syndrome Studies",
    authors: "Shanna H. Swan et al.",
    year: "2000-2015",
    finding: "Phthalate exposure decreases anogenital distance and sperm count; 'phthalate syndrome'; sperm counts declining worldwide.",
    pages: "Ch. 5, Pages 147-148",
  },
  {
    name: "Travison Testosterone Decline Study",
    authors: "Thomas Travison et al.",
    year: "2007",
    finding: "Average testosterone levels declining in American men independent of age, BMI, and other factors.",
    pages: "Ch. 5, Page 285",
  },
  {
    name: "Klimentidis Cross-Species Obesity Study",
    authors: "Yann Klimentidis et al.",
    year: "2011",
    finding: "Obesity epidemic also affecting laboratory animals, feral rats, and pets -- cannot be explained by diet and exercise alone.",
    pages: "Ch. 5, Page 282",
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
  title: "Boys Adrift",
  subtitle: "The Five Factors Driving the Growing Epidemic of Unmotivated Boys and Underachieving Young Men",
  author: "Leonard Sax, M.D., Ph.D.",
  publisher: "Basic Books",
  year: 2016,
  isbn: "978-0-465-04082-7",
  description:
    "Identifies five factors driving the growing epidemic of unmotivated boys: changes at school (academic kindergarten), video games, medications for ADHD, endocrine disruptors, and the loss of positive models of masculinity. Updated and revised edition with new research.",
};
