// ds-references-data.ts
// Structured reference data for Niobe Way, "Deep Secrets" (Harvard University Press, 2011)

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

export const authors: Author[] = [
  {
    name: "Way, Niobe",
    field: "Developmental Psychology",
    works: [
      { title: "Deep Secrets: Boys' Friendships and the Crisis of Connection", type: "book" as const, year: 2011, publisher: "Harvard University Press" },
      { title: "Everyday Courage: The Lives and Stories of Urban Teenagers", type: "book" as const, year: 1998, publisher: "NYU Press" },
      { title: "Urban Girls: Resisting Stereotypes, Creating Identities", type: "book" as const, year: 1996, coAuthors: ["Bonnie Leadbeater"] }
    ],
    pages: "Autorin des gesamten Buches",
    context: "Professor of Applied Psychology at New York University. Einer der führenden US-amerikanischen developmental psychologists zu adolescent friendships und zur Listening Guide-Methodologie. Schülerin von Carol Gilligan (Harvard). Deep Secrets ist ihre Synthese aus 20+ Jahren longitudinaler Forschung mit hunderten NYC public school Jungen. Die Methodologie steht in der Tradition der feministischen developmental psychology (Brown, Gilligan, Miller, Jordan).",
    keyFigure: true
  },

  // ---- Theoretical & methodological foundations ----
  {
    name: "Gilligan, Carol",
    field: "Developmental Psychology / Feminist Theory",
    works: [
      { title: "In a Different Voice: Psychological Theory and Women's Development", type: "book" as const, year: 1982, publisher: "Harvard University Press" },
      { title: "Meeting at the Crossroads: Women's Psychology and Girls' Development", type: "book" as const, year: 1992, publisher: "Harvard University Press", coAuthors: ["Lyn Mikel Brown"] }
    ],
    pages: "Kap. 2, 5, durchgängig",
    context: "Harvard/NYU. Feministische Entwicklungspsychologin, eine der einflussreichsten ihrer Generation. Ihre Forschung zu girls' development und der Verlust der „honest voice” in der Adoleszenz ist Way\'s direkte methodologische Inspiration. Way ist Gilligans Schülerin.",
    keyFigure: true
  },
  {
    name: "Brown, Lyn Mikel",
    field: "Developmental Psychology",
    works: [
      { title: "Meeting at the Crossroads: Women's Psychology and Girls' Development", type: "book" as const, year: 1992, publisher: "Harvard University Press", coAuthors: ["Carol Gilligan"] },
      { title: "Raising Their Voices: The Politics of Girls' Anger", type: "book" as const, year: 1999, publisher: "Harvard University Press" }
    ],
    pages: "Kap. 2, 5",
    context: "Colby College. Mit Gilligan Autorin der seminalen longitudinal studie, die zeigte, dass Mädchen mit 8-11 frei und ehrlich sprachen und diese Fähigkeit mit 12-13 verloren. Way\'s Buch ist explizit eine Parallele zu Brown & Gilligans Mädchen-Forschung, übertragen auf Jungen.",
    keyFigure: true
  },
  {
    name: "Geertz, Clifford",
    field: "Anthropologie",
    works: [
      { title: "The Interpretation of Cultures", type: "book" as const, year: 1973, publisher: "Basic Books" }
    ],
    pages: "Kap. 1, S. 55-80",
    context: "Princeton-Anthropologe. Seine Unterscheidung zwischen „thick” und „thin” description ist das methodologische Fundament von Way\'s Argument. „Thick culture interpretations” untersuchen die Stereotype selbst, nicht nur ihr Oberflächen-Erscheinungsbild."
  },
  {
    name: "Bronfenbrenner, Urie",
    field: "Developmental Psychology",
    works: [
      { title: "The Ecology of Human Development: Experiments by Nature and Design", type: "book" as const, year: 1979, publisher: "Harvard University Press" }
    ],
    pages: "Kap. 2, S. 80-85",
    context: "Cornell-Entwicklungspsychologe. Sein Mikro-/Makro-Kontext-Modell (family, school, peers → cultural stereotypes, economic structures) ist Way\'s theoretischer Rahmen für die Analyse, wie Jungen\' Freundschaften durch verschiedene Kontextebenen geprägt werden."
  },

  // ---- Parallel boys' research ----
  {
    name: "Chu, Judy Y.",
    field: "Developmental Psychology",
    works: [
      { title: "When Boys Become Boys: Development, Relationships, and Masculinity", type: "book" as const, year: 2014, publisher: "NYU Press" }
    ],
    pages: "Kap. 4, 5",
    context: "Stanford. Ihre Längsschnittstudie mit weißen Privatschul-Jungen repliziert Way\'s zentrale Befunde in einer demographisch sehr unterschiedlichen Population. Wenn weiße Privatschuljungen und urbane Black/Latino public school boys dasselbe Muster zeigen, spricht das stark gegen die These, es sei eine Artefakt der Stichprobe.",
    keyFigure: true
  },
  {
    name: "Santos, Carlos",
    field: "Developmental Psychology",
    works: [
      { title: "Measuring Resistance to Masculinity Stereotypes in Adolescent Boys", type: "article" as const, year: "multiple" }
    ],
    pages: "Kap. 5, S. 145-160",
    context: "Arizona State. Seine longitudinale Studie mit ~500 middle schoolers zeigt quantitative Korrelationen zwischen Resistance gegen Gender-Stereotype in Freundschaften und psychischer Gesundheit (Depression, Self-Esteem). Way nutzt Santos\' Daten als quantitative Validierung für ihre qualitativen Befunde."
  },
  {
    name: "Thompson, Michael",
    field: "Klinische Psychologie",
    works: [
      { title: "Best Friends, Worst Enemies: Understanding the Social Lives of Children", type: "book" as const, year: 2001, publisher: "Ballantine Books", coAuthors: ["Catherine O\'Neill Grace", "Lawrence J. Cohen"] },
      { title: "Raising Cain: Protecting the Emotional Life of Boys", type: "book" as const, year: 1999, publisher: "Ballantine Books", coAuthors: ["Dan Kindlon"] }
    ],
    pages: "Kap. 6 (Hal und Jack Fallstudie)",
    context: "Way zitiert Thompsons klinische Beschreibung von Hal und Jack — zwei Jungen die in der Sophomore-Year best friends waren und dann in Junior-Year auseinandergingen. Parallel zu Way\'s longitudinal findings, aber aus klinischer Perspektive."
  },
  {
    name: "Frosh, Stephen",
    field: "Klinische Psychologie",
    works: [
      { title: "Young Masculinities: Understanding Boys in Contemporary Society", type: "book" as const, year: 2002, publisher: "Palgrave", coAuthors: ["Ann Phoenix", "Rob Pattman"] }
    ],
    pages: "Kap. 2, 7",
    context: "Birkbeck, University of London. Seine Interviewstudie mit britischen working-class boys zeigt ähnliche Muster hoher emotional expressiveness in Freundschaften. Unterstützt Way\'s These für internationale Generalisierung."
  },
  {
    name: "Barker, Gary",
    field: "Gender & Development / Global Health",
    works: [
      { title: "Dying to be Men: Youth, Masculinity and Social Exclusion", type: "book" as const, year: 2005, publisher: "Routledge" }
    ],
    pages: "Kap. 5",
    context: "International Center for Research on Women; gründete Promundo. Seine Arbeit mit brasilianischen Straßenjungen zeigt, wie Jungen Widerstand gegen masculine Konventionen leisten können in den schwierigsten Umgebungen. International validation für Way\'s resistance findings."
  },
  {
    name: "Reichert, Michael",
    field: "Educational Psychology",
    works: [
      { title: "Reaching Boys, Teaching Boys", type: "book" as const, year: 2010, publisher: "Jossey-Bass", coAuthors: ["Richard Hawley"] }
    ],
    pages: "Kap. 5",
    context: "University of Pennsylvania / International Boys\' Schools Coalition. Mit Sharon Ravitch Forschung zu Jewish-identified boys, die traditional masculinity widerstehen können. Praktische Intervention-Implikationen für Way\'s „Resistance for Liberation”-Framework."
  },
  {
    name: "Tolman, Deborah",
    field: "Developmental Psychology",
    works: [
      { title: "Dilemmas of Desire: Teenage Girls Talk about Sexuality", type: "book" as const, year: 2002, publisher: "Harvard University Press" }
    ],
    pages: "Kap. 5",
    context: "CUNY/Hunter College. Ihre Forschung zu boys\' romantische Beziehungen und ihren Widerstand gegen Masculinity-Konventionen ergänzt Way\'s Fokus auf Freundschaften."
  },
  {
    name: "Ward, Janie Victoria",
    field: "Educational Psychology",
    works: [
      { title: "The Skin We're In: Teaching Our Children to Be Emotionally Strong, Socially Smart, Spiritually Connected", type: "book" as const, year: 2000, publisher: "Free Press" }
    ],
    pages: "Kap. 5, S. 144-155",
    context: "Simmons University. Entwickelte das „resistance for survival vs. resistance for liberation”-Framework, das Way zentral für die Analyse der Jungen verwendet, die die masculine Konvention durchbrechen."
  },

  // ---- Clinical tradition references ----
  {
    name: "Pollack, William S.",
    field: "Klinische Psychologie",
    works: [
      { title: "Real Boys: Rescuing Our Sons from the Myths of Boyhood", type: "book" as const, year: 1998, publisher: "Henry Holt" }
    ],
    pages: "Kap. 1, 2, 9",
    context: "Harvard Medical School. Pollacks „Mask of Masculinity” und „Boy Code” werden von Way explizit zitiert als klinischer Vorgänger. Way argumentiert, dass ihre longitudinale observational data Pollacks klinische Inferenz empirisch bestätigt — mit dem wichtigen Unterschied, dass sie die Maskenformation in Echtzeit beobachtet statt sie aus Erwachsenen-Therapien zu rekonstruieren."
  },
  {
    name: "Kindlon, Dan & Thompson, Michael",
    field: "Klinische Psychologie",
    works: [
      { title: "Raising Cain: Protecting the Emotional Life of Boys", type: "book" as const, year: 1999, publisher: "Ballantine Books" }
    ],
    pages: "Kap. 1, 9",
    context: "Harvard. Raising Cain ist einer von Way\'s klinischen Vorgängern. Sie teilt deren Diagnose (Jungen sind emotional verwundet durch Sozialisation), präzisiert aber den Mechanismus durch ihre longitudinale Daten."
  },
  {
    name: "Sullivan, Harry Stack",
    field: "Psychiatrie / Interpersonal Theory",
    works: [
      { title: "The Interpersonal Theory of Psychiatry", type: "book" as const, year: 1953, publisher: "W. W. Norton" }
    ],
    pages: "Kap. 1, S. 14",
    context: "Pionier der interpersonal Theorie der Psychiatrie. Sein Konzept von „chums” — die deep intimate friendships in der präadolescenten Phase — ist Way\'s historischer Ausgangspunkt. Sullivan schrieb bereits in den 1940er/50ern, dass diese Beziehungen „most enduring” across the life span sein könnten."
  },
  {
    name: "Bonser, F. G.",
    field: "Psychology (early 20th century)",
    works: [
      { title: "Chums: A study of youthful friendships", type: "article" as const, year: 1902 }
    ],
    pages: "Kap. 1, S. 13",
    context: "Frühe amerikanische Psychologin. Ihre 1902-Studie zu intimate friendships ist einer der frühesten wissenschaftlichen Dokumentationen des „Chums”-Phänomens. Way zitiert sie zusammen mit Sullivan als historischen Beweis, dass die emotionalen männlichen Freundschaften früher anerkannt waren."
  },
  {
    name: "Bukowski, William",
    field: "Developmental Psychology",
    works: [
      { title: "Handbook of Peer Interactions, Relationships, and Groups", type: "book" as const, year: 2009, publisher: "Guilford Press", coAuthors: ["Brett Laursen", "Kenneth H. Rubin"] }
    ],
    pages: "Kap. 1, S. 13",
    context: "Concordia University Montreal. Einer der führenden aktuellen Forscher zu Kindes- und Adolescent-Peer-Beziehungen. Way zitiert ihn zur most enduring form of relationships across the life span."
  },

  // ---- Critical voices ----
  {
    name: "Eliot, Lise",
    field: "Neurowissenschaft / Kritik des Biologismus",
    works: [
      { title: "Pink Brain, Blue Brain: How Small Differences Grow Into Troublesome Gaps — And What We Can Do About It", type: "book" as const, year: 2009, publisher: "Mariner Books" }
    ],
    pages: "Kap. 2, 9",
    context: "Rosalind Franklin University. Ihre Neurowissenschaft-Kritik des Biologismus ist Way\'s wichtigste wissenschaftliche Stütze gegen die Essentialisten (Sax, Gurian). Eliot zeigt, dass die Hirnunterschiede klein sind und kulturell massiv verstärkt werden."
  },
  {
    name: "Konrath, Sara",
    field: "Social Psychology",
    works: [
      { title: "Changes in Dispositional Empathy in American College Students Over Time: A Meta-Analysis", type: "article" as const, year: 2011, publisher: "Personality and Social Psychology Review" }
    ],
    pages: "Kap. 9, S. 325-330",
    context: "University of Michigan/Indiana University. Ihre Meta-Analyse von 72 Studien (1979-2009) zeigt einen signifikanten Rückgang von Empathie bei US-College-Studierenden, besonders nach 2000. Way nutzt dies als Beleg für die breitere „Crisis of Connection”."
  },
  {
    name: "Putnam, Robert",
    field: "Political Science / Social Capital",
    works: [
      { title: "Bowling Alone: The Collapse and Revival of American Community", type: "book" as const, year: 2000, publisher: "Simon & Schuster" }
    ],
    pages: "Kap. 9, S. 330",
    context: "Harvard Kennedy School. Seine seminal work zu decline in social capital ist Way\'s gesellschaftlicher Kontext für die Boys\' Friendship Crisis — der Verlust der männlichen adolescenten Freundschaften ist Teil einer breiteren gesellschaftlichen Fragmentierung."
  }
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "New York University — Department of Applied Psychology",
    type: "Universität",
    context: "Way\'s institutionelle Heimat. Ihr Forschungszentrum für longitudinale Jugendstudien. Ihre Graduate Students und Research Assistants führten den Großteil der Interviews durch.",
    pages: "Author affiliation"
  },
  {
    name: "Harvard Graduate School of Education — The Listening Guide Center",
    type: "Universität",
    context: "Carol Gilligans Forschungsbasis. Ursprung der Listening Guide-Methodologie, die Way übernommen und auf Jungen angewendet hat.",
    pages: "Kap. 2, durchgängig"
  },
  {
    name: "NYC Public High Schools",
    type: "Schulen",
    context: "Die eigentlichen Feldorte der Way-Studien. Etwa 10 verschiedene öffentliche High Schools, überwiegend in den Bezirken mit diverse demographics. Alle mit hohem Anteil an Free-or-Reduced-Lunch-Programmen.",
    pages: "Kap. 2, 3, 6, 7"
  },
  {
    name: "International Boys\' Schools Coalition (IBSC)",
    type: "Bildungsorganisation",
    context: "Michael Reicherts institutioneller Kontext. Research network zu boys\' education. Praktischer Anwendungsbereich für Way\'s Framework.",
    pages: "Kap. 5"
  },
  {
    name: "Promundo",
    type: "NGO / Gender and Masculinity",
    context: "Gary Barkers internationale Organisation zu Gender Justice und positive masculinity. Arbeit mit jungen Männern in 40+ Ländern. Way zitiert Barkers Arbeit als Beispiel für „resistance for liberation”-Framework in globalem Kontext.",
    pages: "Kap. 5"
  }
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Way\'s NYC Public School Longitudinal Friendship Studies",
    authors: "Niobe Way et al.",
    year: "1990-2010 (20+ years)",
    finding: "Drei separate longitudinale Studien mit insgesamt Hunderten adolescenten Jungen in NYC Public Schools. Kernsample für Deep Secrets: ~135 Jungen, 75% über 3+ Jahre interviewt, diverser Ethnicity/Race/Klasse-Zusammensetzung. Zentrale Finding: Jungen zwischen 13-15 sind emotional hochartikuliert über ihre engen männlichen Freundschaften; diese Freundschaften werden zwischen 16-18 systematisch verloren, mit Homophobie als Kernmechanismus.",
    pages: "Durchgängig"
  },
  {
    name: "Brown & Gilligan — Meeting at the Crossroads",
    authors: "Lyn Mikel Brown, Carol Gilligan",
    year: "1992",
    finding: "Longitudinale Interview-Studie mit hunderten Mädchen in privaten und öffentlichen Schulen. Zentraler Befund: Mädchen zwischen 8-11 sprechen „frei und ehrlich” über ihre Gedanken und Gefühle; zwischen 12-13 verlieren viele diese „honest voice” und werden „lost in a world of \'I don\'t know\'”. Der Mechanismus: kulturelle Pressure zum Konform mit feminen Normen („be nice,” „don\'t be selfish”). Way\'s Parallele: derselbe Mechanismus bei Jungen, aber 4-5 Jahre später.",
    pages: "Kap. 5"
  },
  {
    name: "Chu — When Boys Become Boys",
    authors: "Judy Y. Chu",
    year: "2014 (published after Deep Secrets)",
    finding: "Längsschnitt-Interviewstudie mit weißen Privatschul-Jungen in den USA. Repliziert Way\'s zentrale Befunde: Jungen in früher/mittlerer Adoleszenz sind emotional hochartikuliert, später verlieren sie ihre Kapazität. Unabhängige demografische Replikation — wenn weiße Privatschuljungen und urbane Black/Latino public school boys dasselbe Muster zeigen, spricht das für ein systematisches kulturelles Phänomen, nicht für eine Sample-Artefakt.",
    pages: "Kap. 4, 5"
  },
  {
    name: "Santos — Resistance in Middle Schoolers (longitudinal)",
    authors: "Carlos Santos et al.",
    year: "multiple publications",
    finding: "Longitudinale Studie mit ~500 middle schoolers (Black, Latino, Asian American, White). Quantitative Messung von Resistance zu Gender-Stereotypen in Freundschaften mit standardisierten Surveys. Kernbefund: höheres Resistance-Niveau korreliert mit signifikant niedrigeren depressiven Symptomen. Zeitliche Veränderungen in Resistance korrelieren mit zeitlichen Veränderungen in psychischer Anpassung. Quantitative Validation der Way-These.",
    pages: "Kap. 5, S. 145-160"
  },
  {
    name: "Konrath et al. — Empathy Meta-Analysis 1979-2009",
    authors: "Sara Konrath, Edward O\'Brien, Courtney Hsing",
    year: "2011 (Personality and Social Psychology Review)",
    finding: "Meta-Analyse von 72 Studien zu dispositional empathy bei College-Studierenden, 1979-2009. Kernbefund: signifikanter Rückgang von Empathie besonders seit 2000. Das ist Way's gesellschaftlicher Anker für die breitere Crisis of Connection.",
    pages: "Kap. 9, S. 325"
  },
  {
    name: "Listening Guide Method (Brown-Gilligan-Tradition)",
    authors: "Lyn Mikel Brown, Carol Gilligan (seminal 1992), refined by Way et al.",
    year: "1990-present",
    finding: "Qualitative Analysemethode für Interviewtranskripte. Mehrfache Durchläufe durchs gleiche Transcript, jedes Mal für eine andere „voice” (die dominante Erzählung, die Unterlage der Widerstand, die Accommodation). Erlaubt das Erfassen von Widersprüchen zwischen Oberflächen-Erzählung und zugrunde liegender Bedeutung. Peer-reviewed, etabliert in feministischer qualitativer Forschung.",
    pages: "Kap. 2"
  },
  {
    name: "Ward — Resistance for Survival vs. Resistance for Liberation",
    authors: "Janie Victoria Ward",
    year: "multiple publications 1990s-2000s",
    finding: "Theoretisches Framework zur Kategorisierung von Widerstand gegen kulturelle Stereotype. „Resistance for survival” = quick fixes, die in Moment empowern aber langfristig schaden (macho posturing, substance abuse). „Resistance for liberation” = constructive resistance, die zu stärkerer Identität führt. Way nutzt dieses Framework für die resistance-Kapitel.",
    pages: "Kap. 5"
  }
];

// ---------------------------------------------------------------------------
// CATEGORIES
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
  title: "Deep Secrets",
  subtitle: "Boys' Friendships and the Crisis of Connection",
  author: "Niobe Way",
  publisher: "Harvard University Press",
  year: 2011,
  description:
    "Die stärkste longitudinale Primärquelle der gesamten Bibliothek. Niobe Way, Professor of Applied Psychology an der NYU und Schülerin von Carol Gilligan, liefert 20+ Jahre longitudinaler Interviewstudien mit hunderten NYC public school Jungen (Black, Latino, Chinese American, White; ~70% aus armen/Arbeiterklasse-Familien). " +
    "Zentraler empirischer Befund: Jungen zwischen 13-15 beschreiben ihre engsten männlichen Freundschaften in einer Sprache, die „wie ein altmodischer Romanroman” klingt — voller Worte wie „love”, „deep”, „trust”, „secret”. Sie sagen direkt, dass sie ohne diese Freundschaften „gehen wacko” oder „versuchen, sich umzubringen” würden. Die Jungen kommen aus diversen Hintergründen, und das Muster ist kulturübergreifend. " +
    "Zwischen 16-18 dokumentiert Way, wie DIESELBEN Jungen diese Freundschaften verlieren — nicht allmählich, sondern in beobachtbaren Schritten. Sie beginnen, „no homo”-Disclaimers einzufügen. Sie rationalisieren den Verlust als „natural”, „mature”, „growing up”. Sie zeigen gleichzeitig Symptome von Einsamkeit, Misstrauen und Trauer. " +
    "Der Mechanismus, den die Jungen selbst identifizieren: die kulturelle Gleichsetzung emotionaler Intimität mit „gay”, „girlish”, oder „immature”. Way verbindet diesen Verlust direkt mit dem dramatischen Anstieg der männlichen Suizidrate ab ca. 16 Jahren — 4× die der Mädchen in derselben Altersgruppe. " +
    "Methodologie: Listening Guide (Brown/Gilligan), Bronfenbrenner ecological framework. Längsschnitt-Design mit wiederholten jährlichen Interviews an denselben Jungen über 3-5 Jahre. Ca. 135 Jungen im Kern-Sample, 75% über 3+ Jahre. Sample deliberately diverse, nicht white middle class. " +
    "Theoretischer Rahmen: Brown & Gilligan parallel (Mädchen verlieren „honest voice” mit 12-13, Jungen verlieren sie mit 16-18 — gleicher Mechanismus, verschiedene Timing). „Thick culture” vs „thin culture” Interpretationen (Geertz): die meisten Boy-Crisis-Literatur operiert mit thin interpretations, die Stereotype als gegeben akzeptieren. " +
    "Positionierung im Gesamtkorpus: Way ist die longitudinale observational Parallele zu Reeves\' statistisch-policy Anker. Wo Reeves die Brookings-Level-Empirik liefert, liefert Way die direct observation. Zusammen bilden sie die zwei empirischen Stützen der Bibliothek, die außerhalb der klinisch-konvergenten Tradition stehen und diese Tradition mit unabhängigen Methoden validieren. " +
    "Der wichtigste Beitrag zum Konvergenz-Audit: Way liefert direkte longitudinale Beobachtung für die „Mask/Boy Code/Stiff Upper Lip/Identitätslüge”-Konvergenz. Wo Pollack, Süfke, hooks und Urwin die Maske aus Adult-Präsentationen inferieren, beobachtet Way ihre Formation in Echtzeit bei adolescenten Jungen. Das ist ein upgrade von klinischer Inferenz zu direkter longitudinaler Beobachtung."
};
