// wb-references-data.ts
// Structured reference data for "The Wonder of Boys"
// Source: TheWonderOfBoys/analysis/sources-raw.md

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
  // ---- Part One: The Science of Boyhood (Ch. 1-2) ----
  {
    name: "Moir, Anne & Jessel, David",
    field: "Neuroscience / Gender Differences",
    works: [
      {
        title: "Brain Sex",
        type: "book" as const,
        year: 1989,
        publisher: "Laurel (New York)",
      },
    ],
    pages: "Pages 34, 35, 36, 37, 38, 382-384",
    context: "Primary source for brain sex differences. Quoted on p.34: 'What we are and how we live is largely dictated by the messages that mould and inform our brains.' Used extensively throughout Ch.1 for structural brain differences between males and females.",
    keyFigure: true,
  },
  {
    name: "Moore, Sheila & Frost, Roon",
    field: "Child Development / Parenting",
    works: [
      {
        title: "The Little Boy Book",
        type: "book" as const,
        year: 1986,
        publisher: "Ballantine (New York)",
      },
    ],
    pages: "Pages 27, 36, 81, 377, 382, 383",
    context: "Quoted mother anecdotes about boys' behavior. Summarized how the male cortex develops more slowly, leading to enriched right-hemisphere connections. Recommended as a year-by-year resource.",
    keyFigure: true,
  },
  {
    name: "Elium, Don & Jeanne",
    field: "Parenting / Psychology",
    works: [
      {
        title: "Raising a Son",
        type: "book" as const,
        year: 1992,
        publisher: "Beyond Words (Hillsboro, Oregon)",
      },
    ],
    pages: "Pages 27, 33, 383",
    context: "Quoted father's anecdote about his quiet, sensitive son. Cited on testosterone and the tension-release cycle in males: 'a short buildup of tension followed by a quick, gratifying, and decisive release.'",
  },
  {
    name: "Kipnis, Aaron",
    field: "Psychology / Men's Issues",
    works: [
      {
        title: "Knights Without Armor",
        type: "book" as const,
        year: 1992,
        publisher: "Jeremy P. Tarcher (Los Angeles)",
      },
      {
        title: "Gender War/Gender Peace",
        type: "book" as const,
        year: 1994,
        publisher: "William Morrow (New York)",
        coAuthors: ["Elizabeth Herron"],
      },
    ],
    pages: "Pages 28, 86, 380, 385",
    context: "Quoted on distinction between aggression and violence: 'Violence is not hard-wired into boys. Violence is taught. Aggression is hard-wired.' Co-authored balanced feminist work with Elizabeth Herron.",
    keyFigure: true,
  },
  {
    name: "Benbow, Camilla & Stanley, Julian",
    field: "Psychology / Education / Gender Differences",
    works: [
      {
        title: "100,000 Boys and Girls Longitudinal Study",
        type: "study" as const,
        year: "Late 1980s",
        publisher: "Johns Hopkins University",
      },
    ],
    pages: "Page 25",
    context: "Studied 100,000 boys and girls over 15 years on sex-different approaches to learning. Benbow quoted: 'After fifteen years of looking for an environmental explanation and getting zero results, I gave up.'",
    keyFigure: true,
  },
  {
    name: "Gorski, Roger",
    field: "Neuroscience",
    works: [
      {
        title: "Brain Structure Differences Research",
        type: "study" as const,
        year: "Not specified",
      },
    ],
    pages: "Pages 25-26",
    context: "Discovered 'marked differences in physiological structures between the male and the female brain.'",
  },
  {
    name: "Allen, Laurie",
    field: "Neuroscience",
    works: [
      {
        title: "Brain Structure Sex Differences Research",
        type: "study" as const,
        year: "Not specified",
        publisher: "UCLA",
      },
    ],
    pages: "Page 36",
    context: "Pointed out that 'in at least seven of the measured brain structures there are structural differences between female and male brains.'",
  },
  {
    name: "Gur, Rubin",
    field: "Neuroscience",
    works: [
      {
        title: "Brain Scan Studies of Sex Differences",
        type: "study" as const,
        year: "Not specified",
        publisher: "University of Pennsylvania",
      },
    ],
    pages: "Pages 37-38",
    context: "Used brain-scan equipment to photograph brain activity differences between males and females during spatial and verbal tasks. Demonstrated male right-hemisphere dominance for spatial tasks and female bilateral activity.",
    keyFigure: true,
  },
  {
    name: "James, Jennifer",
    field: "Social Anthropology",
    works: [
      {
        title: "Male Emotive Processing Study",
        type: "study" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 47",
    context: "Told Gurian of a study showing 'males can take up to seven hours longer than females to process hard emotive data.'",
  },
  {
    name: "Saint-Exupery, Antoine de",
    field: "Literature / Philosophy",
    works: [
      {
        title: "The Little Prince",
        type: "book" as const,
        year: 1943,
      },
    ],
    pages: "Page 49",
    context: "Quoted: 'It is such a secret place, the land of tears' -- used to illustrate the secrecy of boys' emotional lives.",
  },
  {
    name: "Grey, John",
    field: "Relationship Psychology",
    works: [
      {
        title: "Things Your Mother Couldn't Tell You and Your Father Didn't Know",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 44",
    context: "Listed among books developing standards honoring both male and female brain intimacy styles.",
  },
  {
    name: "Hendrix, Harville",
    field: "Relationship Psychology",
    works: [
      {
        title: "Getting the Love You Want",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 44",
    context: "Listed alongside Grey's book as working toward dual-brain-honoring intimacy.",
  },
  {
    name: "Smalley, Gary",
    field: "Relationship Education",
    works: [
      {
        title: "Videotapes for Couples",
        type: "other" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 44",
    context: "Mentioned alongside Barbara DeAngelis for couple education materials.",
  },
  {
    name: "DeAngelis, Barbara",
    field: "Relationship Education",
    works: [
      {
        title: "Videotapes for Couples",
        type: "other" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 44",
    context: "Mentioned alongside Gary Smalley for couple education materials.",
  },
  {
    name: "Stoltenberg, John & Dworkin, Andrea",
    field: "Gender Studies / Feminism",
    works: [
      {
        title: "Radical Feminist Critiques of Masculinity",
        type: "other" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 53",
    context: "Mentioned as having 'called for the end of masculine culture altogether.'",
  },

  // ---- Part Two: What Boys Need (Ch. 3-5) ----
  {
    name: "Miedzian, Myriam",
    field: "Sociology / Violence Studies",
    works: [
      {
        title: "Boys Will Be Boys",
        type: "book" as const,
        year: 1991,
        publisher: "Anchor (New York)",
      },
    ],
    pages: "Pages 57, 385",
    context: "Referenced as having 'pointed out' how competition can feed patterns of male violence.",
  },
  {
    name: "Tannen, Deborah",
    field: "Linguistics / Gender Communication",
    works: [
      {
        title: "You Just Don't Understand",
        type: "book" as const,
        year: 1990,
        publisher: "Ballantine (New York)",
      },
    ],
    pages: "Pages 66-67, 385",
    context: "Noticed male/female language and social relationship style differences growing from different group sizes.",
  },
  {
    name: "Turner, Victor",
    field: "Anthropology",
    works: [
      {
        title: "The Forest of Symbols: Aspects of Ndembu Ritual",
        type: "book" as const,
        year: 1967,
        publisher: "Cornell University Press (Ithaca, NY)",
      },
    ],
    pages: "Pages 66, 385",
    context: "Confirmed distinct differences in how male and female culture creates groups; boys initiated in large groups, girls individually. Called this the 'collective nature' of boy culture vs. 'individual nature' of girl culture.",
  },
  {
    name: "Maccoby, Eleanor",
    field: "Psychology",
    works: [
      {
        title: "Gender and Relationships",
        type: "article" as const,
        year: 1990,
        publisher: "American Psychologist",
      },
    ],
    pages: "Pages 63, 385",
    context: "Pioneering studies at Stanford observing how much more empathic boys are in cross-gender culture than in boy culture.",
  },
  {
    name: "Rubin, Lillian",
    field: "Psychology / Gender",
    works: [
      {
        title: "Intimate Strangers",
        type: "book" as const,
        year: 1983,
        publisher: "Harper Colophon (New York)",
      },
    ],
    pages: "Pages 69, 385",
    context: "Referenced ironically for analyzing 'a male's need for independence.'",
  },
  {
    name: "Silverstein, Olga",
    field: "Psychology / Parenting",
    works: [
      {
        title: "The Courage to Raise Good Men",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 84",
    context: "Analyzes the tough position of single mothers of sons.",
  },
  {
    name: "Blankenhorn, David",
    field: "Sociology / Fatherhood",
    works: [
      {
        title: "Fatherless in America",
        type: "book" as const,
        year: 1995,
        publisher: "Basic Books (New York)",
      },
    ],
    pages: "Pages 75, 380, 385, 378",
    context: "Cited as one of many 'fine, recent writings' on the necessity of fathers and male role models. Called 'invaluable resource' in Additional Resources section.",
    keyFigure: true,
  },
  {
    name: "Whittier, Robert Greenleaf",
    field: "Leadership / Social Thought",
    works: [
      {
        title: "Servant Leadership Theory",
        type: "other" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 98",
    context: "Distinguished between 'servant leaders' and 'ego leaders.'",
  },
  {
    name: "Vonnegut, Kurt Jr.",
    field: "Literature / Social Commentary",
    works: [
      {
        title: "Quote on Extended Family",
        type: "other" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 104",
    context: "Quoted on the loss of extended family and community.",
  },
  {
    name: "Brazelton, T. Berry",
    field: "Pediatrics / Child Development",
    works: [
      {
        title: "The Earliest Relationship",
        type: "book" as const,
        year: 1990,
        publisher: "Addison-Wesley (Reading, MA)",
        coAuthors: ["Bertrand G. Cramer"],
      },
    ],
    pages: "Pages 81, 111, 129, 382, 383, 387",
    context: "Recommended as 'very helpful' resource. Argued mothers should stay home for first year. Quoted on preschool benefits. Central source for infant attachment theory.",
    keyFigure: true,
  },
  {
    name: "Ames, Louise Bates & Ilg, Frances L.",
    field: "Child Development",
    works: [
      {
        title: "Your _ Year Old (series)",
        type: "book" as const,
        year: "1976 onward",
        publisher: "Dell (New York)",
      },
    ],
    pages: "Page 81",
    context: "Recommended as year-by-year guides from the Gesell Institute for Human Development.",
  },
  {
    name: "Caplan, Frank",
    field: "Child Development",
    works: [
      {
        title: "The First Twelve Months of Life",
        type: "book" as const,
        year: "Not specified",
        publisher: "Princeton Center for Infancy and Early Childhood",
      },
    ],
    pages: "Page 81",
    context: "Takes readers year by year through a young child's life.",
  },
  {
    name: "Hoff-Sommers, Christina",
    field: "Gender Studies / Feminism Critique",
    works: [
      {
        title: "Who Stole Feminism",
        type: "book" as const,
        year: 1994,
        publisher: "Simon & Schuster (New York)",
      },
    ],
    pages: "Pages 86, 385",
    context: "Listed among balanced feminist works.",
  },
  {
    name: "Farrell, Warren",
    field: "Gender Studies / Men's Issues",
    works: [
      {
        title: "The Myth of Male Power",
        type: "book" as const,
        year: 1993,
        publisher: "Simon & Schuster (New York)",
      },
    ],
    pages: "Pages 86, 380",
    context: "Listed among balanced works on gender issues.",
  },
  {
    name: "Roiphe, Katie",
    field: "Gender Studies / Feminism Critique",
    works: [
      {
        title: "The Morning After",
        type: "book" as const,
        year: 1993,
        publisher: "Little Brown (New York)",
      },
    ],
    pages: "Pages 86, 385",
    context: "Listed among balanced feminist works.",
  },
  {
    name: "Paglia, Camille",
    field: "Gender Studies / Cultural Criticism",
    works: [
      {
        title: "Sexual Personae",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 86",
    context: "Listed among balanced feminist and gender works.",
  },
  {
    name: "Tutko, Thomas",
    field: "Sports Psychology",
    works: [
      {
        title: "Winning Is Everything and Other American Myths",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 78",
    context: "Quoted on youth sports burnout: 'Good athletes are scarred by injury or burned out psychologically by the time they are fifteen.'",
  },

  // ---- Part Three: Fatherhood and the Role of Men (Ch. 5-7) ----
  {
    name: "Louv, Richard",
    field: "Fatherhood / Parenting",
    works: [
      {
        title: "FatherLove",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 151",
    context: "Quoted: 'The degree to which fatherhood is valued by our culture depends fundamentally on the stories men tell each other about fathering.'",
  },
  {
    name: "Peck, Robert",
    field: "Literature",
    works: [
      {
        title: "The Day No Pigs Would Die",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Pages 151-152",
    context: "Classic American father-son novel, quoted for fence-building wisdom passage.",
  },
  {
    name: "Potok, Chaim",
    field: "Literature / Spirituality",
    works: [
      {
        title: "The Chosen",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Pages 169-170, 202",
    context: "Elder Reb Saunders' passage about raising with silence and teaching compassion through pain. Also cited as spiritually transformative reading for boys.",
  },
  {
    name: "Pederson, Loren",
    field: "Psychology / Fatherhood",
    works: [
      {
        title: "Fatherhood Writings",
        type: "other" as const,
        year: "Not specified",
      },
    ],
    pages: "Pages 151, 389",
    context: "Epigraph quote for Ch.5: 'The father must live a vision he himself has searched through and accepted from a position of spiritual freedom.'",
  },
  {
    name: "du Pont, Pete",
    field: "Policy / National Center for Policy Analysis",
    works: [
      {
        title: "Fatherhood Statistics Report",
        type: "report" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 157",
    context: "Reported statistics: 'Four out of every ten children in America will go to bed tonight in a home where their father doesn't live.'",
  },
  {
    name: "Wallenstein, Judith",
    field: "Psychology / Divorce Research",
    works: [
      {
        title: "Second Chances",
        type: "book" as const,
        year: 1989,
        publisher: "Ticknor and Fields",
      },
    ],
    pages: "Pages 159, 187",
    context: "Twenty-four-year study on effects of divorce on children. Quoted: 'we didn't see a single child who was well adjusted' among children of divorce.",
    keyFigure: true,
  },
  {
    name: "Lawlor, Robert",
    field: "Anthropology / Aboriginal Studies",
    works: [
      {
        title: "Voices of the First Day",
        type: "book" as const,
        year: 1990,
        publisher: "Inner Traditions International (Rochester, VT)",
      },
    ],
    pages: "Pages 177-178",
    context: "Classic study of Australian aboriginal life. Quoted on birth rituals and the spiritual significance of a boy's birthplace.",
  },
  {
    name: "Leach, Penelope",
    field: "Child Development",
    works: [
      {
        title: "Babyhood",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 163",
    context: "Recommended for new fathers.",
  },
  {
    name: "Klaus & Klaus",
    field: "Neonatology / Child Development",
    works: [
      {
        title: "The Amazing Newborn",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 163",
    context: "Recommended for new fathers.",
  },

  // ---- Part Four: Initiation, Morality, Archetypes (Ch. 6-8) ----
  {
    name: "Moore, Thomas",
    field: "Philosophy / Spirituality",
    works: [
      {
        title: "Care of the Soul",
        type: "book" as const,
        year: 1992,
        publisher: "HarperCollins (New York)",
      },
    ],
    pages: "Pages 202, 286-287",
    context: "Called a 'classic bestseller' and 'useful reading for anybody involved in boys' lives.' Quoted extensively on 'loss of soul.'",
  },
  {
    name: "Hesse, Hermann",
    field: "Literature / Spirituality",
    works: [
      {
        title: "Siddhartha",
        type: "book" as const,
        year: 1922,
      },
    ],
    pages: "Page 202",
    context: "Boys report feeling 'changed' by reading it.",
  },
  {
    name: "Campbell, Joseph",
    field: "Mythology / Comparative Religion",
    works: [
      {
        title: "The Hero with a Thousand Faces",
        type: "book" as const,
        year: 1968,
        publisher: "Princeton University Press",
      },
      {
        title: "The Power of Myth",
        type: "book" as const,
        year: 1988,
        publisher: "Doubleday",
      },
    ],
    pages: "Pages 285, 289, 391",
    context: "'The Hero's Journey' framework used throughout Ch.6. Campbell cited alongside Carl Jung as foundational for archetypal thinking.",
    keyFigure: true,
  },
  {
    name: "Jung, Carl",
    field: "Psychology / Archetypes",
    works: [
      {
        title: "Archetypal Psychology Works",
        type: "other" as const,
        year: "Not specified",
      },
    ],
    pages: "Pages 256, 285",
    context: "Quoted: 'When an inner situation is not made conscious, it appears outside as fate.' First to notice universal archetypes.",
    keyFigure: true,
  },
  {
    name: "Keen, Sam",
    field: "Philosophy / Men's Issues",
    works: [
      {
        title: "Fire in the Belly",
        type: "book" as const,
        year: 1991,
        publisher: "Bantam",
      },
    ],
    pages: "Page 256",
    context: "Quoted: 'We all leave childhood with wounds. In time we may transform our liabilities into gifts.'",
  },
  {
    name: "Piaget, Jean",
    field: "Developmental Psychology",
    works: [
      {
        title: "Stages of Moral Development Theory",
        type: "other" as const,
        year: "Early-mid 20th century",
      },
    ],
    pages: "Page 263",
    context: "Foundational work on stages of moral development -- objective and subjective stages.",
    keyFigure: true,
  },
  {
    name: "Kohlberg, Lawrence",
    field: "Developmental Psychology / Moral Development",
    works: [
      {
        title: "Moral Stages and Moralization",
        type: "article" as const,
        year: 1976,
        publisher: "In Moral Development and Behavior, ed. T. Lickona (Holt, Rinehart and Winston)",
      },
    ],
    pages: "Pages 263-280, 394",
    context: "Six-stage model of moral development extensively presented. The 'Plus 1' system described for practical application.",
    keyFigure: true,
  },
  {
    name: "Bly, Robert",
    field: "Mythology / Men's Movement",
    works: [
      {
        title: "Iron John",
        type: "book" as const,
        year: 1990,
        publisher: "Addison-Wesley (Reading, MA)",
      },
    ],
    pages: "Page 289",
    context: "Cited alongside Campbell and Estes as part of resurgence of interest in archetypal stories for adults.",
  },
  {
    name: "Estes, Clarissa Pinkola",
    field: "Mythology / Jungian Psychology",
    works: [
      {
        title: "Women Who Run With the Wolves",
        type: "book" as const,
        year: 1993,
        publisher: "Ballantine (New York)",
      },
    ],
    pages: "Page 289",
    context: "Cited alongside Bly and Campbell as part of resurgence of interest in archetypal stories.",
  },
  {
    name: "Collins, Chase",
    field: "Parenting / Storytelling",
    works: [
      {
        title: "Tell Me a Story",
        type: "book" as const,
        year: 1992,
        publisher: "Houghton Mifflin (New York)",
      },
    ],
    pages: "Page 289",
    context: "'Wonderful resource for using stories with younger kids.'",
  },
  {
    name: "Bruner, Jerome",
    field: "Psychology",
    works: [
      {
        title: "Storytelling and Child Development Research",
        type: "other" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 278",
    context: "Suggests all adults try storytelling with kids: 'Adults who don't use storytelling are missing out on a powerful ally.'",
  },
  {
    name: "Pearmain, Elisa",
    field: "Education / Storytelling",
    works: [
      {
        title: "Storytelling in Schools Practice",
        type: "other" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 278",
    context: "Uses storytelling in Boston schools, trains teachers at Lesley College.",
  },
  {
    name: "Moore, Robert & Gillette, Douglas",
    field: "Jungian Psychology / Archetypes",
    works: [
      {
        title: "King, Warrior, Magician, Lover",
        type: "book" as const,
        year: 1990,
        publisher: "HarperSanFrancisco",
      },
    ],
    pages: "Page 394",
    context: "Archetype framework for masculine development.",
  },
  {
    name: "Weiner, Bernard",
    field: "Initiation / Fatherhood",
    works: [
      {
        title: "Boy Into Man",
        type: "book" as const,
        year: 1992,
        publisher: "Transformation Press (San Francisco)",
      },
    ],
    pages: "Pages 220, 382, 396",
    context: "Recorded a coming-of-age ceremony for eighth-grade boys; David Edeli's initiation account quoted.",
  },

  // ---- Part Five: Love, Sexuality, and Community (Ch. 9-11) ----
  {
    name: "Whitehead, Barbara Dafoe",
    field: "Education / Sex Education",
    works: [
      {
        title: "The Failure of Sex Education",
        type: "article" as const,
        year: 1994,
        publisher: "Atlantic Monthly",
      },
    ],
    pages: "Pages 304, 399",
    context: "Quoted extensively on how boys and girls view love and sex differently.",
  },
  {
    name: "Sonenstein, Freya",
    field: "Sociology",
    works: [
      {
        title: "Adolescent Male Sexual Behavior Research",
        type: "report" as const,
        year: "Not specified",
        publisher: "Urban Institute",
      },
    ],
    pages: "Page 304",
    context: "Quoted: 'A typical picture of an adolescent male's year would be separate relationships with two partners, lasting a few months each.'",
  },
  {
    name: "Francoeur, Robert",
    field: "Biology / Neuroscience",
    works: [
      {
        title: "Sexual Difference and Brain Structure Research",
        type: "study" as const,
        year: "Not specified",
        publisher: "Fairleigh Dickinson University",
      },
    ],
    pages: "Page 304",
    context: "Points to brain structure as essential area of sexual difference between males and females.",
  },
  {
    name: "Elders, Joycelyn",
    field: "Medicine / Public Health",
    works: [
      {
        title: "Public Statement on Masturbation",
        type: "other" as const,
        year: 1994,
      },
    ],
    pages: "Page 309",
    context: "Fired as Surgeon General for saying masturbation is a normal function that should be taught.",
  },
  {
    name: "Gagnon, John H.",
    field: "Sociology / Sexuality",
    works: [
      {
        title: "The Social Organization of Sexuality Report",
        type: "study" as const,
        year: 1994,
        publisher: "SUNY Stony Brook",
      },
    ],
    pages: "Pages 336, 395, 398",
    context: "Study of 3,000+ adults showed sexually abused adults are more promiscuous and unhappy.",
  },
  {
    name: "Hart-Rossi, Janie",
    field: "Child Protection / Parenting",
    works: [
      {
        title: "Protect Your Child From Sexual Abuse: A Parent's Guide",
        type: "book" as const,
        year: 1984,
        publisher: "Parenting Press (Seattle)",
      },
    ],
    pages: "Pages 339, 398",
    context: "Defines child sexual abuse clearly, distinguishing it from normal boyhood sexual play.",
  },
  {
    name: "Grahn, Judy",
    field: "Linguistics / Gay Studies",
    works: [
      {
        title: "Another Mother Tongue",
        type: "book" as const,
        year: 1984,
        publisher: "Beacon Press (Boston)",
      },
    ],
    pages: "Pages 314, 399",
    context: "Goes through world languages with a gay lens, showing how English is linked to past gay cultures.",
  },

  // ---- Part Six: Discipline and the Adolescent (Ch. 7-8) ----
  {
    name: "Straus, Murray S.",
    field: "Sociology / Family Violence",
    works: [
      {
        title: "Beating the Devil Out of Them",
        type: "book" as const,
        year: 1995,
        publisher: "Lexington Books (New York)",
      },
    ],
    pages: "Pages 240, 396",
    context: "Fought for two decades to reduce spanking. Utilized National Family Violence Surveys.",
  },
  {
    name: "Rosemond, John",
    field: "Family Psychology",
    works: [
      {
        title: "To Spank or Not to Spank",
        type: "book" as const,
        year: 1994,
        publisher: "Andrews and McNeel (Kansas City)",
      },
    ],
    pages: "Pages 242, 396",
    context: "'Rules of Palm' for spanking guidelines.",
  },
  {
    name: "Newton, Miller",
    field: "Adolescent Psychology",
    works: [
      {
        title: "Adolescence",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 253",
    context: "Quoted: 'Adolescence has become increasingly dangerous for a growing minority of teens.'",
  },

  // ---- Part Seven: Work and Economy (Ch. 10) ----
  {
    name: "Rose, Stephen",
    field: "Economics / Employment",
    works: [
      {
        title: "22-Year Longitudinal Economic Study",
        type: "study" as const,
        year: "1970s-1980s",
        publisher: "National Commission for Employment Policy",
      },
    ],
    pages: "Pages 352-353, 401",
    context: "Studied 5,000 families. Found men were income losers in increasing percentages; women were consistent winners.",
  },
  {
    name: "Sawyer, David",
    field: "Youth Service / Community Development",
    works: [
      {
        title: "Students for Appalachia Program",
        type: "other" as const,
        year: 1992,
        publisher: "Berea College",
      },
    ],
    pages: "Pages 123, 258, 385",
    context: "National trainer in Youth Service. Quoted on National and Community Service Act. Received Presidential Points of Light award.",
  },

  // ---- Part Eight: Education and Schools (Ch. 4) ----
  {
    name: "Sadker & Sadker",
    field: "Education / Gender",
    works: [
      {
        title: "Failing at Fairness",
        type: "book" as const,
        year: 1994,
        publisher: "Scribners (New York)",
      },
    ],
    pages: "Pages 117, 387, 398",
    context: "Pointed out teachers call on boys more; girls hide in shadows. Gurian argues their conclusion that girls have it worse is 'dangerous and untrue.'",
  },
  {
    name: "Ravitch, Diane",
    field: "Education",
    works: [
      {
        title: "Boys Education Research",
        type: "study" as const,
        year: "Not specified",
        publisher: "NYU",
      },
    ],
    pages: "Page 117",
    context: "'Boys are 50 percent more likely to be held back a grade than girls.'",
  },

  // ---- Additional Resources / Bibliography ----
  {
    name: "Batten, Mary",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Sexual Strategies",
        type: "book" as const,
        year: 1992,
        publisher: "Tarcher/Putnam (Los Angeles)",
      },
    ],
    pages: "Pages 382, 383",
    context: "Listed in bibliography as supporting evolutionary biology of sex differences.",
  },
  {
    name: "Fisher, Helen",
    field: "Anthropology / Evolutionary Biology",
    works: [
      {
        title: "Anatomy of Love",
        type: "book" as const,
        year: 1992,
        publisher: "Fawcett (New York)",
      },
    ],
    pages: "Pages 382, 385",
    context: "Listed in bibliography as supporting evolutionary biology framework.",
  },
  {
    name: "Margulis, Lynn & Sagan, Dorion",
    field: "Evolutionary Biology",
    works: [
      {
        title: "Mystery Dance",
        type: "book" as const,
        year: 1991,
        publisher: "Summit Books (New York)",
      },
    ],
    pages: "Pages 382, 383",
    context: "Listed in bibliography as supporting evolutionary biology framework.",
  },
  {
    name: "Sagan, Carl & Druyan, Ann",
    field: "Evolutionary Biology / Anthropology",
    works: [
      {
        title: "Shadows of Forgotten Ancestors",
        type: "book" as const,
        year: 1992,
        publisher: "Random House (New York)",
      },
    ],
    pages: "Pages 382, 383",
    context: "Listed in bibliography as supporting evolutionary biology framework.",
  },
  {
    name: "Pool, Robert",
    field: "Biology / Gender",
    works: [
      {
        title: "Eve's Rib",
        type: "book" as const,
        year: 1994,
        publisher: "Crown Publishers (New York)",
      },
    ],
    pages: "Page 382",
    context: "Listed in bibliography supporting biological sex differences.",
  },
  {
    name: "Wright, Robert",
    field: "Evolutionary Psychology",
    works: [
      {
        title: "The Moral Animal",
        type: "book" as const,
        year: 1994,
        publisher: "Vintage (New York)",
      },
    ],
    pages: "Pages 382, 384",
    context: "Listed in bibliography supporting evolutionary psychology framework.",
  },
  {
    name: "Williamson, Marianne",
    field: "Spirituality",
    works: [
      {
        title: "Illuminata",
        type: "book" as const,
        year: 1994,
        publisher: "Random House (New York)",
      },
    ],
    pages: "Page 382",
    context: "Shows how communities can create prayers for initiation.",
  },
  {
    name: "Some, Malidoma",
    field: "Anthropology / African Spirituality",
    works: [
      {
        title: "Of Water and the Spirit",
        type: "book" as const,
        year: 1994,
        publisher: "Tarcher/Putnam (Los Angeles)",
      },
    ],
    pages: "Page 399",
    context: "Source for Dagara tribe's treatment of gay members as 'guardians of the gate.'",
  },
  {
    name: "Wakefield, Dan",
    field: "Spirituality / Writing",
    works: [
      {
        title: "Creativity Writings",
        type: "other" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 291",
    context: "Quoted on creativity: 'Life is a lot more fulfilling when you see it as creation.'",
  },
  {
    name: "Fox, Matthew",
    field: "Theology / Spirituality",
    works: [
      {
        title: "The Re-invention of Work",
        type: "book" as const,
        year: "Not specified",
      },
    ],
    pages: "Page 340",
    context: "Epigraph quote for Ch.10.",
  },
  {
    name: "Helprin, Mark",
    field: "Literature",
    works: [
      {
        title: "A Soldier of the Great War",
        type: "book" as const,
        year: 1991,
        publisher: "Avon (New York)",
      },
    ],
    pages: "Page 258",
    context: "Epigraph quote for Ch.8.",
  },
  {
    name: "Mannis, Robert",
    field: "Social Thought",
    works: [
      {
        title: "Husbandry",
        type: "article" as const,
        year: 1991,
        publisher: "Utne Reader, May/June 1991",
      },
    ],
    pages: "Page 398",
    context: "Source for the 'husbandry' concept that Gurian develops as a sacred male role.",
  },

  // ---- Michael Gurian's Own Works ----
  {
    name: "Gurian, Michael",
    field: "Psychology / Education / Boys' Development",
    works: [
      {
        title: "Mothers, Sons and Lovers",
        type: "book" as const,
        year: 1993,
        publisher: "Shambhala (Boston)",
      },
      {
        title: "The Prince and the King: Healing the Father-Son Wound",
        type: "book" as const,
        year: 1992,
        publisher: "Tarcher/Putnam (Los Angeles)",
      },
      {
        title: "Love's Journey",
        type: "book" as const,
        year: 1995,
        publisher: "Shambhala (Boston)",
      },
      {
        title: "The Role of the Mentor",
        type: "other" as const,
        year: "Not specified",
        publisher: "Big Brothers and Big Sisters (training video)",
      },
      {
        title: "Understanding the Mother-Son Relationship",
        type: "other" as const,
        year: "Not specified",
        publisher: "Big Brothers and Big Sisters (training video)",
      },
    ],
    pages: "Throughout; Bibliography pp. 377-401",
    context: "Author of The Wonder of Boys. Multiple self-citations of previous books and training materials. Foundational work on boys' development, fatherhood, and gender.",
    keyFigure: true,
  },
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  // Universities and Research Centers
  {
    name: "Johns Hopkins University",
    type: "University",
    context: "Camilla Benbow & Julian Stanley's 15-year study of 100,000 boys and girls on sex differences in learning.",
    pages: "Page 25",
  },
  {
    name: "University of Pennsylvania",
    type: "University",
    context: "Rubin Gur brain scan research on sex differences in spatial and verbal tasks.",
    pages: "Pages 37-38",
  },
  {
    name: "UCLA",
    type: "University",
    context: "Laurie Allen brain structure research; UCLA School of Medicine homosexuality research.",
    pages: "Page 36",
  },
  {
    name: "Stanford University",
    type: "University",
    context: "Eleanor Maccoby gender and relationships studies.",
    pages: "Pages 63, 385",
  },
  {
    name: "University of New Hampshire",
    type: "University",
    context: "Murray Straus, Family Research Lab; National Family Violence Surveys.",
    pages: "Pages 240, 396",
  },
  {
    name: "University of Colorado at Denver",
    type: "University",
    context: "Co-participant in daycare quality study (Cost, Quality and Child Outcomes in Child Care Centers).",
    pages: "Ch. 4",
  },
  {
    name: "University of North Carolina",
    type: "University",
    context: "Co-participant in daycare quality study.",
    pages: "Ch. 4",
  },
  {
    name: "Yale University",
    type: "University",
    context: "Co-participant in daycare quality study.",
    pages: "Ch. 4",
  },
  {
    name: "NYU",
    type: "University",
    context: "Diane Ravitch education research on boys being held back a grade.",
    pages: "Page 117",
  },
  {
    name: "SUNY Stony Brook",
    type: "University",
    context: "John Gagnon's Social Organization of Sexuality research.",
    pages: "Pages 336, 395, 398",
  },
  {
    name: "Fairleigh Dickinson University",
    type: "University",
    context: "Robert Francoeur biology and neuroscience of sexual difference.",
    pages: "Page 304",
  },
  {
    name: "Eastern Washington University",
    type: "University",
    context: "Professor Armin Arendt, Applied Psychology.",
    pages: "Not specified",
  },
  {
    name: "Berea College",
    type: "University",
    context: "David Sawyer, Students for Appalachia youth service program.",
    pages: "Pages 123, 258, 385",
  },
  {
    name: "Lesley College",
    type: "University",
    context: "Elisa Pearmain storytelling training for teachers.",
    pages: "Page 278",
  },
  {
    name: "London Institute of Psychiatry",
    type: "Research Center",
    context: "Homosexuality brain research.",
    pages: "Not specified",
  },
  {
    name: "Texas A&M",
    type: "University",
    context: "Dr. Jagdish Kulanapoor's medical education.",
    pages: "Not specified",
  },
  {
    name: "University of Michigan Survey Research Center",
    type: "University",
    context: "Martha S. Hill work hours research.",
    pages: "Not specified",
  },
  {
    name: "Princeton Center for Infancy and Early Childhood",
    type: "Research Center",
    context: "Frank Caplan publications on early child development.",
    pages: "Page 81",
  },
  {
    name: "Gesell Institute for Human Development",
    type: "Research Institute",
    context: "Ames & Ilg year-by-year child development series.",
    pages: "Page 81",
  },
  {
    name: "Urban Institute",
    type: "Research Center",
    context: "Freya Sonenstein adolescent male sexual behavior research.",
    pages: "Page 304",
  },
  // Government Agencies
  {
    name: "U.S. Department of Education",
    type: "Government Agency",
    context: "Survey of male/female educational aspirations.",
    pages: "Not specified",
  },
  {
    name: "Bureau of Justice Statistics",
    type: "Government Agency",
    context: "Crime statistics referenced throughout.",
    pages: "Various",
  },
  {
    name: "National Commission for Employment Policy",
    type: "Government Agency",
    context: "Stephen Rose 22-year study on income trends by gender.",
    pages: "Pages 352-353, 401",
  },
  {
    name: "National Center for Policy Analysis",
    type: "Government Agency",
    context: "Pete du Pont fatherhood statistics report.",
    pages: "Page 157",
  },
  {
    name: "National Fatherhood Initiative",
    type: "Government Agency",
    context: "Birth/fatherhood statistics.",
    pages: "Not specified",
  },
  {
    name: "Alan Guttmacher Institute",
    type: "Research Organization",
    context: "Sex and America's Teenagers study -- teen sexual activity statistics.",
    pages: "Pages 299-300, 395",
  },
  {
    name: "Center for Disease Control",
    type: "Government Agency",
    context: "AIDS surveillance data.",
    pages: "Not specified",
  },
  // Organizations & Programs
  {
    name: "Big Brothers and Big Sisters of America (BBSA)",
    type: "Nonprofit Organization",
    context: "Serves 125,000 children/year; Gurian's training videos produced for this organization.",
    pages: "Various",
  },
  {
    name: "American Business Collaboration for Quality Dependent Care",
    type: "Corporate Consortium",
    context: "IBM, AT&T, Time Warner, etc. working on child care.",
    pages: "Not specified",
  },
  {
    name: "Child Care Action Campaign",
    type: "Nonprofit Organization",
    context: "Elliot Lehman advocacy for quality child care.",
    pages: "Not specified",
  },
  {
    name: "NAEYC (National Association for the Education of Young Children)",
    type: "Professional Organization",
    context: "Early childhood education standards.",
    pages: "Not specified",
  },
  {
    name: "Neighborhood Accountability Boards",
    type: "Juvenile Justice Program",
    context: "Alternative juvenile justice approach.",
    pages: "Not specified",
  },
  {
    name: "Boys Project",
    type: "Think Tank",
    context: "National think tank on boys' issues.",
    pages: "Not specified",
  },
  {
    name: "WrapAround Care",
    type: "Psychological Services Program",
    context: "Comprehensive psychological services program for at-risk youth.",
    pages: "Not specified",
  },
  {
    name: "Apple Program (Washington State)",
    type: "Education Program",
    context: "90 hours/year parent school involvement program.",
    pages: "Not specified",
  },
  {
    name: "Institute for Responsible Fatherhood (Washington D.C.)",
    type: "Nonprofit Organization",
    context: "Fatherhood advocacy and training.",
    pages: "Not specified",
  },
  {
    name: "Mad Dads (Omaha, Nebraska)",
    type: "Community Organization",
    context: "Community fatherhood initiative.",
    pages: "Not specified",
  },
  {
    name: "Stepfamily Association of America",
    type: "Nonprofit Organization",
    context: "Support for blended families.",
    pages: "Not specified",
  },
  {
    name: "Institute of Cultural Affairs",
    type: "Community Organization",
    context: "Stan Crow, Bothell, WA -- community development.",
    pages: "Not specified",
  },
  {
    name: "Children and Adults with Attention Deficit Disorders",
    type: "National Network",
    context: "Support network for ADHD-affected families.",
    pages: "Not specified",
  },
  {
    name: "American Academy of Pediatrics",
    type: "Professional Organization",
    context: "Published Caring For Your Baby and Young Child: Birth to Five Years (ed. Steven P. Shelov, 1993).",
    pages: "Pages 81, 377",
  },
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "100,000 Boys and Girls Longitudinal Study",
    authors: "Camilla Benbow & Julian Stanley, Johns Hopkins University",
    year: "Late 1980s",
    finding: "15-year study of sex differences in learning. After exhaustive environmental analysis, researchers concluded differences were biological. Benbow: 'After fifteen years of looking for an environmental explanation and getting zero results, I gave up.'",
    pages: "Page 25",
  },
  {
    name: "Brain Scan Studies of Sex Differences",
    authors: "Rubin Gur, University of Pennsylvania",
    year: "Not specified",
    finding: "Used brain-scan equipment to photograph brain activity differences between males and females during spatial and verbal tasks. Demonstrated male right-hemisphere dominance and female bilateral activity.",
    pages: "Pages 37-38",
  },
  {
    name: "Brain Structure Sex Differences Research",
    authors: "Laurie Allen, UCLA",
    year: "Not specified",
    finding: "Identified at least seven measured brain structures with differences between female and male brains.",
    pages: "Page 36",
  },
  {
    name: "Children of Divorce 24-Year Study",
    authors: "Judith Wallenstein",
    year: "1988-1989",
    finding: "Twenty-four-year longitudinal study on effects of divorce on children. Concluded: 'We didn't see a single child who was well adjusted' among children of divorce.",
    pages: "Pages 159, 187",
  },
  {
    name: "Sex and America's Teenagers",
    authors: "Alan Guttmacher Institute",
    year: "1994",
    finding: "Provided comprehensive statistics on sexual activity by age among American teenagers.",
    pages: "Pages 299-300, 395",
  },
  {
    name: "The Social Organization of Sexuality",
    authors: "John H. Gagnon, SUNY Stony Brook",
    year: "1994",
    finding: "Study of 3,000+ adults showed sexually abused adults are more promiscuous and unhappy.",
    pages: "Pages 336, 395, 398",
  },
  {
    name: "National Family Violence Survey",
    authors: "Murray Straus, University of New Hampshire",
    year: "1975, 1985",
    finding: "Found 90%+ of American parents use corporal punishment. Two-decade campaign by Straus to reduce spanking.",
    pages: "Pages 240, 396",
  },
  {
    name: "Cost, Quality and Child Outcomes in Child Care Centers",
    authors: "University of Colorado Denver, UCLA, University of North Carolina, Yale",
    year: "Not specified",
    finding: "Found the majority of daycare centers in America are substandard in quality.",
    pages: "Ch. 4",
  },
  {
    name: "Families and Work Institute Study",
    authors: "Families and Work Institute (New York)",
    year: "Not specified",
    finding: "Similar findings to the university daycare study -- quality of daycare is generally poor.",
    pages: "Ch. 4",
  },
  {
    name: "Stephen Rose 22-Year Economic Study",
    authors: "Stephen Rose, National Commission for Employment Policy",
    year: "1970s-1980s",
    finding: "Tracked 5,000 families over 22 years. Found men were income losers in increasing percentages while women were consistent income winners.",
    pages: "Pages 352-353, 401",
  },
  {
    name: "Gender and Relationships",
    authors: "Eleanor Maccoby, Stanford University",
    year: "1990",
    finding: "Pioneering studies observing how much more empathic boys are in cross-gender culture than in boy-only culture.",
    pages: "Pages 63, 385",
  },
  {
    name: "Ndembu Tribe Initiation Study",
    authors: "Victor Turner",
    year: "1967",
    finding: "Documented distinct differences in how male and female culture creates groups: boys initiated collectively in large groups, girls individually. Coined 'collective nature' of boy culture vs. 'individual nature' of girl culture.",
    pages: "Pages 66, 385",
  },
  {
    name: "Harvard Medical Letter Homosexuality Debate",
    authors: "Michael Bailey & Richard Pillard vs. William Byne & Bruce Parsons",
    year: "1994",
    finding: "Scientific debate on the innateness of homosexuality. Both sides presented biological and environmental evidence.",
    pages: "Not specified",
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
  title: "The Wonder of Boys",
  subtitle: "What Parents, Mentors and Educators Can Do to Shape Boys into Exceptional Men",
  author: "Michael Gurian",
  publisher: "Tarcher/Putnam",
  year: 2006,
  isbn: "Not specified",
  description:
    "Explores the biological, developmental, and cultural foundations of boyhood. Drawing on neuroscience, anthropology, and developmental psychology, Gurian argues that boys need a 'three-family' system (family, extended family, community) and structured rites of passage to become healthy men. Covers brain differences, moral development, fatherhood, discipline, sexuality, and the role of mentors and community. 10-Year Anniversary Edition.",
};
