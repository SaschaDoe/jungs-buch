// gm-references-data.ts
// Structured reference data for Raewyn (R. W.) Connell, "Der gemachte Mann" (Masculinities, 2nd ed. 2005 / dt. 4. Aufl. 2015)

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
  // ---- Connell's own foundational publications ----
  {
    name: "Connell, Raewyn (R. W.)",
    field: "Sociology of Gender",
    works: [
      { title: "Gender and Power: Society, the Person and Sexual Politics", type: "book" as const, year: 1987, publisher: "Allen & Unwin / Polity / Stanford" },
      { title: "Masculinities (1st edition)", type: "book" as const, year: 1995, publisher: "Allen & Unwin / Polity / University of California Press" },
      { title: "Masculinities (2nd edition)", type: "book" as const, year: 2005, publisher: "Polity / University of California Press" },
      { title: "Der gemachte Mann (4. deutsche Auflage)", type: "book" as const, year: 2015, publisher: "Springer VS / Geschlecht und Gesellschaft Bd. 8" },
      { title: "Southern Theory: The Global Dynamics of Knowledge in Social Science", type: "book" as const, year: 2007, publisher: "Allen & Unwin / Polity" },
      { title: "Gender (3rd edition)", type: "book" as const, year: 2013, publisher: "Polity" },
      { title: "Hegemonic Masculinity: Rethinking the Concept", type: "article" as const, year: 2005, publisher: "Gender and Society 19(6)", coAuthors: ["James W. Messerschmidt"] }
    ],
    pages: "Author of the entire book",
    context: "Australian sociologist (1944–), Professor Emerita at the University of Sydney. Foundational figure of the sociology of masculinity. Co-author of the 1985 Carrigan/Connell/Lee paper that first formulated 'hegemonic masculinity.' Published as 'R. W. Connell' until ~2006, then as 'Raewyn Connell.' Author of Gender and Power (1987), Masculinities (1995/2005), Southern Theory (2007), and dozens of articles. The single most-cited masculinity scholar in the world.",
    keyFigure: true
  },
  {
    name: "Carrigan, Tim",
    field: "Sociology of Gender",
    works: [
      { title: "Toward a New Sociology of Masculinity", type: "article" as const, year: 1985, publisher: "Theory and Society 14(5): 551-604", coAuthors: ["R. W. Connell", "John Lee"] }
    ],
    pages: "Vorwort; Ch. 1; throughout",
    context: "Co-author with Connell and Lee of the 1985 founding paper of the sociology of masculinity, which first formulated 'hegemonic masculinity' as a concept.",
    keyFigure: true
  },
  {
    name: "Lee, John",
    field: "Sociology of Gender",
    works: [
      { title: "Toward a New Sociology of Masculinity", type: "article" as const, year: 1985, publisher: "Theory and Society 14(5): 551-604", coAuthors: ["Tim Carrigan", "R. W. Connell"] }
    ],
    pages: "Vorwort; Ch. 1; throughout",
    context: "Co-author with Carrigan and Connell of the 1985 founding paper.",
  },
  {
    name: "Messerschmidt, James W.",
    field: "Sociology / Criminology",
    works: [
      { title: "Hegemonic Masculinity: Rethinking the Concept", type: "article" as const, year: 2005, publisher: "Gender and Society 19(6)", coAuthors: ["R. W. Connell"] },
      { title: "Masculinities and Crime: Critique and Reconceptualization", type: "book" as const, year: 1993, publisher: "Rowman & Littlefield" },
      { title: "Crime as Structured Action", type: "book" as const, year: 1997, publisher: "Sage" }
    ],
    pages: "Vorwort; Einführung; throughout",
    context: "Connell's co-author on the 2005 paper revising the hegemonic masculinity concept in response to a decade of critique. Independent contributor to masculinities-and-crime literature.",
    keyFigure: true
  },

  // ---- The German editorial team (4. Auflage 2015) ----
  {
    name: "Meuser, Michael",
    field: "Sociology of Gender",
    works: [
      { title: "Männlichkeiten in Gesellschaft (Editorial introduction to Der gemachte Mann)", type: "other" as const, year: 2015, publisher: "Springer VS", coAuthors: ["Ursula Müller"] },
      { title: "Geschlecht und Männlichkeit", type: "book" as const, year: 1998, publisher: "Leske + Budrich" }
    ],
    pages: "pp. 9-19 (Editorial introduction)",
    context: "Co-editor of the 4th German edition. Leading German sociologist of masculinity. His introduction provides the canonical German-language reception summary of Connell.",
    keyFigure: true
  },
  {
    name: "Müller, Ursula",
    field: "Sociology of Gender",
    works: [
      { title: "Männlichkeiten in Gesellschaft (Editorial introduction)", type: "other" as const, year: 2015, publisher: "Springer VS", coAuthors: ["Michael Meuser"] }
    ],
    pages: "pp. 9-19 (Editorial introduction)",
    context: "Co-editor of the 4th German edition. Bielefeld sociologist of gender."
  },
  {
    name: "Stahl, Christian",
    field: "Translation",
    works: [
      { title: "Der gemachte Mann (German translation of Masculinities)", type: "other" as const, year: 2015, publisher: "Springer VS" }
    ],
    pages: "Title page",
    context: "Translator of the German edition."
  },

  // ---- Hegemonic masculinity critics (named in the book) ----
  {
    name: "Donaldson, Mike",
    field: "Sociology",
    works: [
      { title: "What Is Hegemonic Masculinity?", type: "article" as const, year: 1993, publisher: "Theory and Society 22(5): 643-657" },
      { title: "Studying Up: The Masculinity of the Hegemonic", type: "article" as const, year: 2003 },
      { title: "Cool Guys, Swots and Wimps: The Interplay of Masculinity and Education", type: "other" as const, year: 1991 }
    ],
    pages: "Vorwort; Ch. 2 (factory workers); Nachwort",
    context: "Australian sociologist. Critic of the hegemonic masculinity concept (1993) for being difficult to pin down empirically. Also author of the empirical studies on Australian factory workers and biographical studies of the super-rich that Connell uses in transnational business masculinity discussion."
  },
  {
    name: "Hearn, Jeff",
    field: "Sociology / Critical Studies on Men",
    works: [
      { title: "From Hegemonic Masculinity to the Hegemony of Men", type: "article" as const, year: 2004, publisher: "Feminist Theory 5(1): 49-72" },
      { title: "The Gender of Oppression: Men, Masculinity and the Critique of Marxism", type: "book" as const, year: 1987, publisher: "Wheatsheaf Books" },
      { title: "Theorizing Men and Men's Theorizing", type: "article" as const, year: 1998, publisher: "Theory and Society 27(6)" },
      { title: "European Perspectives on Men and Masculinities", type: "book" as const, year: 2006, publisher: "Palgrave Macmillan" }
    ],
    pages: "Vorwort; Ch. 1; throughout",
    context: "British/Finnish critical studies on men. Coordinator of the European CROME project (Critical Research on Men in Europe) — the first major multinational quantitative masculinity research. Critic of hegemonic masculinity who proposes 'hegemony of men' as alternative.",
    keyFigure: true
  },
  {
    name: "Beasley, Christine",
    field: "Political Theory / Gender Studies",
    works: [
      { title: "Rethinking Hegemonic Masculinity in a Globalizing World", type: "article" as const, year: 2008, publisher: "Men and Masculinities 11(1): 86-103" }
    ],
    pages: "Vorwort",
    context: "Australian political theorist. Critic of hegemonic masculinity concept who argues it conflates three distinct referents: (a) a political mechanism, (b) a dominant cultural ideal, (c) an empirical reference to specific groups of men."
  },
  {
    name: "Coles, Tony",
    field: "Sociology",
    works: [
      { title: "Negotiating the Field of Masculinity", type: "article" as const, year: 2009 }
    ],
    pages: "Vorwort",
    context: "Critic who argues Connell does not sufficiently distinguish hegemony from dominance."
  },
  {
    name: "Demetriou, Demetrakis Z.",
    field: "Sociology",
    works: [
      { title: "Connell's Concept of Hegemonic Masculinity: A Critique", type: "article" as const, year: 2001, publisher: "Theory and Society 30(3)" }
    ],
    pages: "Einführung",
    context: "Critic who proposes 'dialectical pragmatism' as alternative theoretical framing."
  },
  {
    name: "Petersen, Alan",
    field: "Sociology of Health",
    works: [
      { title: "Unmasking the Masculine", type: "book" as const, year: 1998, publisher: "Sage" }
    ],
    pages: "Einführung",
    context: "Critic of hegemonic masculinity from a Foucauldian/post-structuralist perspective."
  },
  {
    name: "Jefferson, Tony",
    field: "Criminology",
    works: [
      { title: "Subordinating Hegemonic Masculinity", type: "article" as const, year: 2002 }
    ],
    pages: "Einführung",
    context: "Critic of the concept from a psychosocial criminology perspective."
  },

  // ---- Foundational influences (named throughout the book) ----
  {
    name: "Gramsci, Antonio",
    field: "Political Theory",
    works: [
      { title: "Prison Notebooks", type: "book" as const, year: "1929-1935", publisher: "Various editions" }
    ],
    pages: "Ch. 3, p. 130",
    context: "Italian Marxist whose concept of 'hegemony' (developed for class analysis) Connell adapts as the central organizing concept for the analysis of masculinity. Hegemony as 'consent + coercion + cultural leadership.'",
    keyFigure: true
  },
  {
    name: "Freud, Sigmund",
    field: "Psychoanalysis",
    works: [
      { title: "Aus der Geschichte einer infantilen Neurose (Wolfsmann)", type: "article" as const, year: 1918 },
      { title: "Drei Abhandlungen zur Sexualtheorie", type: "book" as const, year: 1905 }
    ],
    pages: "Ch. 1, pp. 53-58",
    context: "Connell's starting point for the psychoanalytic tradition. The Wolfsmann case as the founding moment of psychoanalytic thinking about masculinity. 'Freud let the cat out of the bag' — the bisexuality thesis and Oedipus complex undermined any essentialist masculinity from inside the psychoanalytic tradition."
  },
  {
    name: "Adler, Alfred",
    field: "Psychoanalysis",
    works: [
      { title: "Der männliche Protest", type: "other" as const, year: "1910s" }
    ],
    pages: "Ch. 1; Ch. 4",
    context: "Adler's concept of 'männlicher Protest' — early psychoanalytic critique of dominant masculinity — is one of Connell's theoretical roots. Influences Connell's reading of 'protest masculinity' in the working-class case studies."
  },
  {
    name: "Reich, Wilhelm",
    field: "Psychoanalysis / Marxism",
    works: [
      { title: "Die Massenpsychologie des Faschismus", type: "book" as const, year: 1933 }
    ],
    pages: "Ch. 1, pp. 60-62",
    context: "Reich's analysis of fascism as based on patriarchal-authoritarian character structure is part of Connell's radical psychoanalytic lineage."
  },
  {
    name: "Fromm, Erich",
    field: "Frankfurt School / Psychoanalysis",
    works: [
      { title: "Studien zum autoritären Charakter (with Horkheimer/Adorno)", type: "book" as const, year: 1936 }
    ],
    pages: "Ch. 1, pp. 60-62",
    context: "Connell calls the Frankfurt School Studien 'the first detailed clinical descriptions of masculinity that carefully take into account the economic and cultural conditions of their emergence.'"
  },
  {
    name: "Horkheimer, Max",
    field: "Frankfurt School",
    works: [
      { title: "Studien über Autorität und Familie", type: "book" as const, year: 1936 }
    ],
    pages: "Ch. 1",
    context: "Frankfurt School foundational figure. Co-author of the Studien zum autoritären Charakter."
  },
  {
    name: "Adorno, Theodor W.",
    field: "Frankfurt School",
    works: [
      { title: "The Authoritarian Personality", type: "book" as const, year: 1950 }
    ],
    pages: "Ch. 1",
    context: "Frankfurt School. Co-author of the post-war authoritarian personality study."
  },
  {
    name: "de Beauvoir, Simone",
    field: "Existentialist Philosophy / Feminism",
    works: [
      { title: "Le Deuxième Sexe", type: "book" as const, year: 1949 }
    ],
    pages: "Ch. 1, p. 60",
    context: "Foundational existentialist-feminist text. Part of Connell's radical psychoanalytic and existentialist lineage."
  },
  {
    name: "Sartre, Jean-Paul",
    field: "Existentialism / Marxism",
    works: [
      { title: "Critique de la raison dialectique", type: "book" as const, year: 1960 },
      { title: "L'Idiot de la famille (Flaubert biography)", type: "book" as const, year: "1971-1972" }
    ],
    pages: "Ch. 1; Vorwort",
    context: "Sartre's 'progressive-regressive method' (Critique de la raison dialectique) is the methodological framework Connell uses for the biographical interviews in Part II."
  },
  {
    name: "Lacan, Jacques",
    field: "Structuralist Psychoanalysis",
    works: [
      { title: "Écrits", type: "book" as const, year: 1966 }
    ],
    pages: "Ch. 1; Ch. 3",
    context: "Influence on Connell's understanding of the symbolic and semiotic register of gender. Connell critiques semiotic definitions of masculinity as inadequate but draws on the underlying insight."
  },
  {
    name: "Chodorow, Nancy",
    field: "Feminist Psychoanalysis",
    works: [
      { title: "The Reproduction of Mothering", type: "book" as const, year: 1978, publisher: "University of California Press" }
    ],
    pages: "Ch. 1, pp. 64-65",
    context: "Feminist psychoanalytic account of how gendered child-rearing reproduces gendered personality. Connell engages critically with the 'dis-identification' framing."
  },
  {
    name: "Dinnerstein, Dorothy",
    field: "Feminist Psychoanalysis",
    works: [
      { title: "The Mermaid and the Minotaur", type: "book" as const, year: 1976, publisher: "Harper & Row" }
    ],
    pages: "Ch. 1",
    context: "Feminist psychoanalytic account of the cultural consequences of mother-monopoly child-rearing."
  },
  {
    name: "Mitchell, Juliet",
    field: "Feminist Theory / Psychoanalysis",
    works: [
      { title: "Woman's Estate", type: "book" as const, year: 1971, publisher: "Pantheon" },
      { title: "Psychoanalysis and Feminism", type: "book" as const, year: 1974, publisher: "Pantheon" }
    ],
    pages: "Ch. 3, p. 124",
    context: "Mitchell's 1971 four-structure model of women's oppression (production, reproduction, sexuality, socialisation) is one of the direct sources for Connell's three-dimensional gender structure."
  },
  {
    name: "Rubin, Gayle",
    field: "Feminist Anthropology",
    works: [
      { title: "The Traffic in Women: Notes on the 'Political Economy' of Sex", type: "article" as const, year: 1975, publisher: "in Reiter, ed., Toward an Anthropology of Women" }
    ],
    pages: "Ch. 3, p. 124",
    context: "Rubin's 'sex/gender system' framework is one of the direct sources for Connell's structural-relational definition of gender."
  },

  // ---- Ethnography of multiple masculinities ----
  {
    name: "Mead, Margaret",
    field: "Cultural Anthropology",
    works: [
      { title: "Sex and Temperament in Three Primitive Societies", type: "book" as const, year: 1935, publisher: "William Morrow" },
      { title: "Male and Female", type: "book" as const, year: 1949, publisher: "William Morrow" }
    ],
    pages: "Ch. 1, pp. 76-78",
    context: "Foundational cross-cultural evidence for the variability of gender arrangements. Connell uses Mead\u2019s Tchambuli/Mundugumor/Arapesh comparison to undermine universalist claims about 'natural' male temperament."
  },
  {
    name: "Malinowski, Bronislaw",
    field: "Cultural Anthropology",
    works: [
      { title: "The Sexual Life of Savages", type: "book" as const, year: 1929 }
    ],
    pages: "Ch. 1",
    context: "Trobriand Islands ethnography. Used by Connell to establish the long ethnographic tradition of cross-cultural variability in masculinity arrangements."
  },
  {
    name: "Herdt, Gilbert",
    field: "Cultural Anthropology",
    works: [
      { title: "Guardians of the Flutes: Idioms of Masculinity", type: "book" as const, year: 1981, publisher: "McGraw-Hill" }
    ],
    pages: "Ch. 1, pp. 78-80",
    context: "Sambia (Papua New Guinea) ethnography documenting ritualized male-male sexual practices as part of normative male maturation. Key empirical evidence in Connell\u2019s argument that Western homosexuality/heterosexuality categories are culturally specific.",
    keyFigure: true
  },
  {
    name: "Strathern, Marilyn",
    field: "Cultural Anthropology",
    works: [
      { title: "The Gender of the Gift", type: "book" as const, year: 1988, publisher: "University of California Press" }
    ],
    pages: "Ch. 1, pp. 80-82",
    context: "Hagen (Papua New Guinea) ethnography. Connell uses Strathern as methodological antidote to Gilmore\u2019s positivist universalism — Strathern shows that Hagen gender concepts cannot be mapped onto Western categories at all."
  },
  {
    name: "Herzfeld, Michael",
    field: "Cultural Anthropology",
    works: [
      { title: "The Poetics of Manhood", type: "book" as const, year: 1985, publisher: "Princeton University Press" }
    ],
    pages: "Ch. 1, pp. 78-79",
    context: "Cretan sheep-stealing ethnography. Cited by Connell as exemplary cross-cultural masculinity research."
  },
  {
    name: "Gilmore, David D.",
    field: "Cultural Anthropology",
    works: [
      { title: "Manhood in the Making: Cultural Concepts of Masculinity", type: "book" as const, year: 1990, publisher: "Yale University Press" }
    ],
    pages: "Ch. 1, pp. 80-81",
    context: "Cross-cultural survey of masculinity. Connell criticizes Gilmore\u2019s positivist universalism (\u201cBig Impossible\u201d as supposedly universal pattern) as the wrong way to do cross-cultural research."
  },

  // ---- Sociology of masculinity (cited extensively) ----
  {
    name: "Messner, Michael A.",
    field: "Sociology of Sport",
    works: [
      { title: "Power at Play: Sports and the Problem of Masculinity", type: "book" as const, year: 1992, publisher: "Beacon Press" },
      { title: "Politics of Masculinities: Men in Movements", type: "book" as const, year: 1997, publisher: "Sage" }
    ],
    pages: "Ch. 1, Ch. 2, Ch. 9",
    context: "Leading US sociologist of sport and masculinity. Source for Connell\u2019s claim about ex-athletes and body damage. Also a key voice in the critical assessment of the men\u2019s movement.",
    keyFigure: true
  },
  {
    name: "Klein, Alan M.",
    field: "Sociology",
    works: [
      { title: "Little Big Men: Bodybuilding Subculture and Gender Construction", type: "book" as const, year: 1993, publisher: "SUNY Press" }
    ],
    pages: "Ch. 1; Ch. 2",
    context: "Bodybuilding subculture ethnography. Used as evidence for body-reflexive practice."
  },
  {
    name: "Tolson, Andrew",
    field: "Sociology",
    works: [
      { title: "The Limits of Masculinity", type: "book" as const, year: 1977, publisher: "Tavistock" }
    ],
    pages: "Ch. 1, Ch. 9, Ch. 10",
    context: "British early study of masculinity and class. Source of Connell\u2019s often-quoted formulation that the antisexist men\u2019s movement was \u201cimperialists in a slave revolt.\u201d"
  },
  {
    name: "Collinson, David",
    field: "Sociology of Work",
    works: [
      { title: "Managing the Shopfloor", type: "book" as const, year: 1992 }
    ],
    pages: "Ch. 1",
    context: "Sociology of working-class masculinity in UK manufacturing."
  },
  {
    name: "Willis, Paul",
    field: "Sociology of Education",
    works: [
      { title: "Learning to Labour: How Working Class Kids Get Working Class Jobs", type: "book" as const, year: 1977, publisher: "Saxon House" }
    ],
    pages: "Ch. 1, p. 86",
    context: "Foundational ethnography of working-class lads in a UK secondary school. The ‘lads vs. ear‘oles’ analysis is influential for Connell\u2019s understanding of marginalized masculinities."
  },
  {
    name: "Walker, James C.",
    field: "Sociology of Education",
    works: [
      { title: "Louts and Legends: Male Youth Culture in an Inner City School", type: "book" as const, year: 1988, publisher: "Allen & Unwin" }
    ],
    pages: "Ch. 1, pp. 86-87",
    context: "Australian school ethnography. Connell highlights the case of three boys in Walker\u2019s study who rejected the school rugby cult and took over the school newspaper as evidence that hegemonic masculinity is contestable from within."
  },
  {
    name: "Cockburn, Cynthia",
    field: "Sociology / Feminist Theory",
    works: [
      { title: "Brothers: Male Dominance and Technological Change", type: "book" as const, year: 1983, publisher: "Pluto Press" },
      { title: "The Postwar Moment: Militaries, Masculinities and International Peacekeeping", type: "book" as const, year: 2002, publisher: "Lawrence and Wishart", coAuthors: ["Dubravka Zarkov"] }
    ],
    pages: "Ch. 1; Nachwort",
    context: "London print shops ethnography on workplace masculinity and technology. Later co-author of post-war peacekeeping study cited in the Nachwort."
  },
  {
    name: "Staples, Robert",
    field: "Sociology",
    works: [
      { title: "Black Masculinity: The Black Male's Role in American Society", type: "book" as const, year: 1982, publisher: "Black Scholar Press" }
    ],
    pages: "Ch. 3, p. 134",
    context: "Foundational text on Black masculinity in the US. Cited by Connell as the source for the integration of race and class dynamics into the masculinity framework."
  },
  {
    name: "Hoch, Paul",
    field: "Cultural Studies",
    works: [
      { title: "White Hero, Black Beast: Racism, Sexism and the Mask of Masculinity", type: "book" as const, year: 1979 }
    ],
    pages: "Ch. 3",
    context: "Source for Connell\u2019s point about the racialized construction of masculinity (white hero opposed to black beast)."
  },
  {
    name: "Seidler, Victor J.",
    field: "Sociology / Philosophy",
    works: [
      { title: "Rediscovering Masculinity", type: "book" as const, year: 1989, publisher: "Routledge" }
    ],
    pages: "Ch. 1; Nachwort",
    context: "British sociology of masculinity. Cited as part of the broader profeminist men\u2019s organizing wave."
  },
  {
    name: "Heward, Christine",
    field: "History of Education",
    works: [
      { title: "Making a Man of Him: Parents and Their Sons' Education at an English Public School 1929-1950", type: "book" as const, year: 1988 }
    ],
    pages: "Ch. 1, p. 75",
    context: "Historical study of English public school masculinity production. Cited by Connell as exemplary historical research."
  },
  {
    name: "Phillips, Jock",
    field: "History",
    works: [
      { title: "A Man's Country? The Image of the Pakeha Male, A History", type: "book" as const, year: 1987, publisher: "Penguin (NZ)" }
    ],
    pages: "Ch. 1, p. 75",
    context: "Colonial New Zealand settler masculinity history. Cited as part of the new masculinity historiography."
  },
  {
    name: "Roper, Michael & Tosh, John",
    field: "History",
    works: [
      { title: "Manful Assertions: Masculinities in Britain since 1800", type: "book" as const, year: 1991, publisher: "Routledge" }
    ],
    pages: "Ch. 1; Ch. 8",
    context: "Major historical collection on British masculinities. Cited by Connell in the historical chapters."
  },

  // ---- Body, sport, and embodiment ----
  {
    name: "Gerschick, Thomas J.",
    field: "Sociology",
    works: [
      { title: "Coming to Terms: Masculinity and Physical Disability", type: "article" as const, year: 1995, publisher: "in Sabo & Gordon, eds., Men's Health and Illness", coAuthors: ["Adam S. Miller"] }
    ],
    pages: "Ch. 2, p. 105",
    context: "Foundational study of disability and masculinity. The three-pattern finding (intensify, modify, reject) is a key empirical anchor for Connell\u2019s body-reflexive practice argument.",
    keyFigure: true
  },
  {
    name: "Curry, Timothy J.",
    field: "Sociology of Sport",
    works: [
      { title: "Fraternal Bonding in the Locker Room", type: "article" as const, year: 1991, publisher: "Sociology of Sport Journal 8(2)" }
    ],
    pages: "Ch. 2, pp. 108-109",
    context: "Wrestling locker-room ethnography. Source for Connell\u2019s account of routinized sport injury culture."
  },
  {
    name: "Theberge, Nancy",
    field: "Sociology of Sport",
    works: [
      { title: "A Critique of Critiques: Radical and Feminist Writings on Sport", type: "article" as const, year: 1985, publisher: "Social Forces 60(2)" }
    ],
    pages: "Ch. 2",
    context: "Feminist sport sociology. Cited on the construction of athletic bodies."
  },

  // ---- Body politics, fashion, semiotics ----
  {
    name: "Wilson, Elizabeth",
    field: "Cultural Studies",
    works: [
      { title: "Adorned in Dreams: Fashion and Modernity", type: "book" as const, year: 1985, publisher: "Virago" }
    ],
    pages: "Ch. 2, p. 102",
    context: "Cited as example of strong semiotic/cultural-studies approach to the body — which Connell critiques as making the signified vanish."
  },
  {
    name: "Foucault, Michel",
    field: "Philosophy / History",
    works: [
      { title: "Surveiller et punir", type: "book" as const, year: 1975 },
      { title: "Histoire de la sexualité (Vol. 1)", type: "book" as const, year: 1976 }
    ],
    pages: "Ch. 2; Ch. 1",
    context: "Connell engages critically with Foucauldian body-discipline approaches, valuing the insight but rejecting the purely discursive reduction."
  },
  {
    name: "Garber, Marjorie",
    field: "Cultural Studies",
    works: [
      { title: "Vested Interests: Cross-Dressing and Cultural Anxiety", type: "book" as const, year: 1992, publisher: "Routledge" }
    ],
    pages: "Ch. 2",
    context: "Cited in the discussion of cross-dressing and gender boundaries."
  },
  {
    name: "Easthope, Antony",
    field: "Cultural Studies",
    works: [
      { title: "What a Man's Gotta Do: The Masculine Myth in Popular Culture", type: "book" as const, year: 1986, publisher: "Paladin" }
    ],
    pages: "Ch. 2",
    context: "Cited as semiotic-cultural studies approach to masculinity in popular culture."
  },
  {
    name: "Jeffords, Susan",
    field: "Cultural Studies",
    works: [
      { title: "The Remasculinization of America: Gender and the Vietnam War", type: "book" as const, year: 1989, publisher: "Indiana University Press" }
    ],
    pages: "Ch. 2",
    context: "Cited on cultural representation of post-Vietnam American masculinity."
  },
  {
    name: "Laqueur, Thomas",
    field: "History of Science",
    works: [
      { title: "Making Sex: Body and Gender from the Greeks to Freud", type: "book" as const, year: 1990, publisher: "Harvard University Press" }
    ],
    pages: "Ch. 2; Ch. 8",
    context: "Connell cites Laqueur on the historical shift from a one-sex to a two-sex medical model — key evidence that biological 'facts' about sex are culturally and historically constructed."
  },
  {
    name: "Kessler, Suzanne J. & McKenna, Wendy",
    field: "Sociology",
    works: [
      { title: "Gender: An Ethnomethodological Approach", type: "book" as const, year: 1978, publisher: "Wiley" }
    ],
    pages: "Ch. 3, p. 122",
    context: "Cited on the impossibility of describing 'masculine behavior' without prior categorization of bodies as male or female."
  },

  // ---- Biology critics and methodologists ----
  {
    name: "Kemper, Theodore D.",
    field: "Sociology of Emotion",
    works: [
      { title: "Social Structure and Testosterone: Explorations of the Socio-Bio-Social Chain", type: "book" as const, year: 1990, publisher: "Rutgers University Press" }
    ],
    pages: "Ch. 2, p. 99",
    context: "Source for the SOCIAL→BIOLOGICAL direction of testosterone causation. Decisive empirical lever against testosterone-as-cause arguments. Connell's quoted formulation: 'Wenn rassistische und sexistische Ideologien hierarchische soziale Arrangements aufgrund von Biologie rechtfertigen, muss die Biologie falsch sein.'",
    keyFigure: true
  },
  {
    name: "Wilson, Edward O.",
    field: "Sociobiology",
    works: [
      { title: "Sociobiology: The New Synthesis", type: "book" as const, year: 1975, publisher: "Harvard University Press" }
    ],
    pages: "Ch. 2",
    context: "Critical target. Connell rejects the sociobiological framework as scientifically unsupported and politically convenient."
  },
  {
    name: "Tiger, Lionel",
    field: "Anthropology / Sociobiology",
    works: [
      { title: "Men in Groups", type: "book" as const, year: 1969 }
    ],
    pages: "Ch. 2",
    context: "Critical target. Tiger\u2019s argument that male bonding has a biological basis is rejected by Connell as pseudo-scientific."
  },
  {
    name: "Imperato-McGinley, Julianne",
    field: "Endocrinology",
    works: [
      { title: "Androgens and the Evolution of Male-Gender Identity Among Male Pseudohermaphrodites With 5α-Reductase Deficiency", type: "article" as const, year: 1979, publisher: "New England Journal of Medicine 300(22): 1233-1237" }
    ],
    pages: "Ch. 2, p. 100",
    context: "The Dominican Republic 5-alpha-reductase study. Connell\u2019s reread shows it actually supports the social-construction view rather than refuting it.",
    keyFigure: true
  },

  // ---- Men's movement / mythopoetic / men's politics ----
  {
    name: "Bly, Robert",
    field: "Mythopoetic Men's Movement",
    works: [
      { title: "Iron John: A Book About Men", type: "book" as const, year: 1990, publisher: "Addison-Wesley" }
    ],
    pages: "Ch. 9, pp. 273-275",
    context: "Critical target. Connell calls Iron John 'Männlichkeitstherapie' rather than the mythopoetic breakthrough it was marketed as. \u201cThe workshops are led by paid therapists, the participants talk about their feelings.\u201d Bly\u2019s real lineage is Freud+Jung.",
    keyFigure: true
  },
  {
    name: "Farrell, Warren",
    field: "Men's Rights Activism",
    works: [
      { title: "The Liberated Man", type: "book" as const, year: 1974 },
      { title: "Why Men Are the Way They Are", type: "book" as const, year: 1986 },
      { title: "The Myth of Male Power", type: "book" as const, year: 1995 }
    ],
    pages: "Ch. 9, pp. 271-273",
    context: "Critical target. Connell traces Farrell\u2019s biographical trajectory — from organizing male NOW networks in 1974 (\u201cmen are the dominant class\u201d) to defending biological sex differences in 1995 — as exemplary of the reactionary modernization of patriarchy.",
    keyFigure: true
  },
  {
    name: "Goldberg, Herb",
    field: "Pop Psychology / Men's Movement",
    works: [
      { title: "The Hazards of Being Male", type: "book" as const, year: 1976 },
      { title: "The Inner Male", type: "book" as const, year: 1987 }
    ],
    pages: "Ch. 9, p. 273",
    context: "Critical target. Connell quotes Goldberg\u2019s explicit acknowledgment that his feminist antagonists (\u201cMarilyn the female macho, Ann the emancipated ice queen, Karen the devouring feminist, Alice whose total emancipation drives everyone mad\u201d) are FICTIONAL. \u201cDieser Teil sollte jeder lesen, der sich von der Wissenschaftlichkeit populärpsychologischer Schriften ein Bild machen möchte.\u201d"
  },
  {
    name: "Keen, Sam",
    field: "Men's Movement",
    works: [
      { title: "Fire in the Belly: On Being a Man", type: "book" as const, year: 1991, publisher: "Bantam" }
    ],
    pages: "Ch. 9, p. 277",
    context: "Connell judges Keen more sympathetically than Bly/Farrell/Goldberg as \u201cTeil eines umfassenderen Reformprojektes\u201d — Keen connects men\u2019s healing to healing of racism, homophobia, and environmental destruction."
  },
  {
    name: "Rowan, John",
    field: "Jungian Psychotherapy",
    works: [
      { title: "The Horned God: Feminism and Men as Wounding and Healing", type: "book" as const, year: 1987, publisher: "Routledge" }
    ],
    pages: "Ch. 9, p. 277",
    context: "Cited as alternative example of Jungian therapy that supports rather than opposes feminism."
  },
  {
    name: "Kaufman, Michael",
    field: "Profeminist Men's Activism",
    works: [
      { title: "Beyond Patriarchy: Essays by Men on Pleasure, Power and Change", type: "book" as const, year: 1987, publisher: "Oxford University Press" },
      { title: "The 7 P's of Men's Violence", type: "article" as const, year: 1999 }
    ],
    pages: "Ch. 9; Ch. 10; Nachwort",
    context: "Co-founder of the White Ribbon Campaign (Canada, 1991). Globally active anti-men's-violence campaign. Profeminist men\u2019s organizing model that Connell endorses.",
    keyFigure: true
  },
  {
    name: "Pease, Bob",
    field: "Profeminist Men's Activism / Social Work",
    works: [
      { title: "Men and Sexual Politics: Towards a Profeminist Practice", type: "book" as const, year: 1997 }
    ],
    pages: "Nachwort",
    context: "Australian profeminist men\u2019s movement. Cited in the international map of profeminist men\u2019s organizing."
  },
  {
    name: "Kimmel, Michael",
    field: "Sociology / Men's Studies",
    works: [
      { title: "Manhood in America: A Cultural History", type: "book" as const, year: 1996, publisher: "Free Press" }
    ],
    pages: "Ch. 9; throughout",
    context: "Leading US sociologist of masculinity. Co-author with Connell on multiple international handbook projects. Critical of the men\u2019s movement on similar grounds as Connell."
  },

  // ---- Transnational business masculinity ----
  {
    name: "Hooper, Charlotte",
    field: "International Relations / Gender Studies",
    works: [
      { title: "Manly States: Masculinities, International Relations, and Gender Politics", type: "book" as const, year: 2001, publisher: "Columbia University Press" },
      { title: "Masculinities in Transition: The Case of Globalization", type: "article" as const, year: 2000 }
    ],
    pages: "Einführung; Nachwort",
    context: "Discourse analysis of The Economist magazine. Hooper proposes a two-form model (hard military-diplomatic vs. softer corporate masculinity) as alternative to Connell\u2019s single \u201ctransnational business masculinity.\u201d",
    keyFigure: true
  },
  {
    name: "Wajcman, Judy",
    field: "Sociology of Work and Technology",
    works: [
      { title: "Managing Like a Man: Women and Men in Corporate Management", type: "book" as const, year: 1998, publisher: "Polity / Penn State Press" }
    ],
    pages: "Einführung; Nachwort",
    context: "Empirical study of women in corporate management. Cited on how the rise of women in some management positions has stabilized rather than disrupted the gendered managerial habitus."
  },
  {
    name: "Gee, James Paul, Hull, Glynda & Lankshear, Colin",
    field: "Education / Discourse Analysis",
    works: [
      { title: "The New Work Order: Behind the Language of the New Capitalism", type: "book" as const, year: 1996, publisher: "Westview" }
    ],
    pages: "Einführung",
    context: "Discourse analysis of management literature. Source for Connell\u2019s description of the language of \u201cnew capitalism\u201d masculinity."
  },

  // ---- Profeminist movements (Nachwort) ----
  {
    name: "Bulbeck, Chilla",
    field: "Feminist Theory",
    works: [
      { title: "Re-Orienting Western Feminisms: Women's Diversity in a Postcolonial World", type: "book" as const, year: 1998, publisher: "Cambridge University Press" }
    ],
    pages: "Nachwort",
    context: "Synthesis of international feminist movement. Cited in the Nachwort discussion of the global pressures on patriarchy."
  },
  {
    name: "Holter, Øystein Gullvåg",
    field: "Sociology",
    works: [
      { title: "Gender, Patriarchy and Capitalism: A Social Forms Analysis", type: "book" as const, year: 1997 }
    ],
    pages: "Einführung",
    context: "Norwegian sociologist. With Aarseth, conducted one of the few large-N quantitative masculinity studies; cited by Connell as a methodological model for the next generation of masculinity research."
  },
  {
    name: "Zulehner, Paul M. & Volz, Rainer",
    field: "Sociology of Religion",
    works: [
      { title: "Männer im Aufbruch: Wie Deutschlands Männer sich selbst und wie Frauen sie sehen", type: "book" as const, year: 1998, publisher: "Schwabenverlag" }
    ],
    pages: "Einführung",
    context: "Large German quantitative survey of men\u2019s attitudes — cited by Connell as one of the few attempts at quantitative masculinity research."
  },

  // ---- Walzer (normative source for Ch. 10) ----
  {
    name: "Walzer, Michael",
    field: "Political Philosophy",
    works: [
      { title: "Spheres of Justice: A Defense of Pluralism and Equality", type: "book" as const, year: 1983, publisher: "Basic Books" }
    ],
    pages: "Ch. 10, p. 297",
    context: "Walzer\u2019s \u201ccomplex equality\u201d framework is the normative basis for Connell\u2019s strategic synthesis in Ch. 10."
  },
  {
    name: "Pateman, Carole",
    field: "Political Philosophy / Feminist Theory",
    works: [
      { title: "The Sexual Contract", type: "book" as const, year: 1988, publisher: "Stanford University Press" }
    ],
    pages: "Ch. 10",
    context: "Source for the question \u201cdoes gender politics target men as a privileged group or a specific form of masculinity?\u201d that Connell discusses in Ch. 10."
  },
  {
    name: "Bourdieu, Pierre",
    field: "Sociology",
    works: [
      { title: "La domination masculine", type: "book" as const, year: 1998 }
    ],
    pages: "Vorwort",
    context: "Bourdieu\u2019s habitus theory of male domination is the second major theoretical reference in German-speaking masculinity research. Connell critiques Bourdieu for inability to accommodate change."
  },
  {
    name: "Segal, Lynne",
    field: "Feminist Theory / Psychology",
    works: [
      { title: "Slow Motion: Changing Masculinities, Changing Men", type: "book" as const, year: 1990, publisher: "Virago" }
    ],
    pages: "Ch. 1, p. 90",
    context: "Connell calls Segal\u2019s Slow Motion \u201cthe most systematic and penetrating feminist analysis of masculinity.\u201d",
    keyFigure: true
  },
  {
    name: "Ehrenreich, Barbara",
    field: "Cultural Critique / Sociology",
    works: [
      { title: "The Hearts of Men: American Dreams and the Flight from Commitment", type: "book" as const, year: 1983, publisher: "Anchor Press" }
    ],
    pages: "Ch. 1, p. 89",
    context: "Connell cites Ehrenreich on men \u201cfleeing relationships since the 40s\u201d as part of the feminist literature on changing male roles."
  },
  {
    name: "Mieli, Mario",
    field: "Gay Liberation Theory",
    works: [
      { title: "Homosexuality and Liberation: Elements of a Gay Critique", type: "book" as const, year: 1980 }
    ],
    pages: "Ch. 1, p. 88; Ch. 10",
    context: "Italian gay liberation theorist. Cited on suppressed homosexual desire and on the recombination strategy in Ch. 10."
  },
  {
    name: "Altman, Dennis",
    field: "Sociology / Gay Studies",
    works: [
      { title: "Homosexual: Oppression and Liberation", type: "book" as const, year: 1972 }
    ],
    pages: "Ch. 3",
    context: "Foundational text on gay subordination."
  },
  {
    name: "Las Casas, Bartolomé de",
    field: "History",
    works: [
      { title: "Brevísima relación de la destrucción de las Indias", type: "book" as const, year: 1552 }
    ],
    pages: "Ch. 8, p. 250",
    context: "Connell calls Las Casas\u2019s 1552 critique of the conquistadors \u201cthe first extensive critique of a developing form of gender\u201d — a key text for understanding early-modern masculinity."
  },
  {
    name: "Clausewitz, Carl von",
    field: "Military Theory",
    works: [
      { title: "Vom Kriege", type: "book" as const, year: 1832 }
    ],
    pages: "Ch. 8",
    context: "Connell calls Clausewitz \u201cthe equivalent of Las Casas for the 19th century\u201d \u2014 a sociotechnology of rationalized violence."
  },
  {
    name: "Weber, Max",
    field: "Sociology",
    works: [
      { title: "Die protestantische Ethik und der Geist des Kapitalismus", type: "book" as const, year: 1905 }
    ],
    pages: "Ch. 8",
    context: "Connell explicitly notes that Weber\u2019s Benjamin Franklin passage in the Protestant Ethic is about a MAN \u2014 the modern bourgeois subject."
  }
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "University of Sydney (Department of Education / Sociology)",
    type: "University",
    context: "Connell's institutional base for most of her career. The 36-interview corpus that grounds Part II was collected in NSW (mostly Sydney) 1985-86.",
    pages: "Methodological notes; Vorwort"
  },
  {
    name: "Macquarie University (Sydney)",
    type: "University",
    context: "Earlier career institution; site of Connell's gender-and-education research in the 1980s."
  ,pages: "Vorwort"},
  {
    name: "Springer VS / Geschlecht und Gesellschaft series",
    type: "Academic Publisher",
    context: "Publisher of the German edition (4. Aufl. 2015) within the 'Geschlecht und Gesellschaft' series (Bd. 8). Editors: Michael Meuser & Ursula Müller.",
    pages: "Title page; editorial introduction"
  },
  {
    name: "Polity Press / Allen & Unwin / University of California Press",
    type: "Academic Publisher",
    context: "Original English-language publishers of Masculinities (1995, 2005).",
    pages: "Title page"
  },
  {
    name: "Stone Center, Wellesley College",
    type: "Research Center",
    context: "Although Connell does not directly draw on Stone Center theorists, the parallels with Pollack's Real Boys go through the Stone Center relational tradition (Miller, Jordan, Stiver)."
  ,pages: "Implicit theoretical comparison"},
  {
    name: "Frankfurt School (Institut für Sozialforschung)",
    type: "Research Center",
    context: "Foundational influence on Connell\u2019s radical-psychoanalytic lineage. Horkheimer, Adorno, Fromm, Marcuse, Habermas. Connell draws on Habermas for the 'crisis tendency' framework.",
    pages: "Ch. 1; Ch. 3"
  },
  {
    name: "NOMAS (National Organization of Men Against Sexism, USA)",
    type: "Activist Organization",
    context: "US profeminist men\u2019s organization active since the early 1980s. Cited by Connell as the model for the kind of collective profeminist organizing she endorses in Ch. 10.",
    pages: "Ch. 10; Nachwort"
  },
  {
    name: "White Ribbon Campaign (Canada, founded 1991)",
    type: "Activist Organization",
    context: "Globally active anti-men's-violence campaign founded by Michael Kaufman and others. Cited by Connell as the most successful international example of profeminist men\u2019s organizing.",
    pages: "Nachwort"
  },
  {
    name: "CROME (Critical Research on Men in Europe) project",
    type: "Research Network",
    context: "European multinational quantitative masculinity research project (Hearn et al. 2002). Cited by Connell as the first major attempt at large-N comparative masculinity research.",
    pages: "Einführung; Nachwort"
  },
  {
    name: "UN Commission on the Status of Women (CSW)",
    type: "Intergovernmental Body",
    context: "The 2004 CSW session made \u201cthe role of men and boys in achieving gender equality\u201d a main theme \u2014 the first comprehensive international policy statement on this topic. Cited by Connell as evidence of institutional uptake of the new sociology of masculinity.",
    pages: "Nachwort"
  },
  {
    name: "Society for the Psychological Study of Men and Masculinity (APA Division 51)",
    type: "Professional Association",
    context: "Although Connell critically engages the therapeutic men\u2019s literature in Ch. 9, the APA Division 51 framework provides the institutional context for the \u201cnew psychology of men\u201d that she analyzes."
  ,pages: "Ch. 9 (background)"},
  {
    name: "International Sociological Association (ISA) — Research Committee 32 \u201cWomen, Gender and Society\u201d",
    type: "Academic Association",
    context: "Connell\u2019s primary academic disciplinary home. The international diffusion of the masculinity research field has been organized in part through the ISA RC32 network."
  ,pages: "Throughout"},
  {
    name: "Verein für Sozialwissenschaftliche Frauen- und Geschlechterforschung (Germany)",
    type: "Academic Association",
    context: "German-speaking association where the Geschlecht und Gesellschaft series (Springer VS) and the work of Meuser/Müller is anchored."
  ,pages: "Editorial introduction"}
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Connell's NSW Australia 36-interview study",
    authors: "Raewyn (R. W.) Connell + two interviewers",
    year: "1985-86",
    finding: "36 biographical interviews with men in four strategic groups (working-class unemployed, environmental activists, gay men, professional middle class) in NSW (mostly Sydney). Three-level analysis (narrative + structural + dynamic) influenced by Sartre's progressive-regressive method. The empirical base for Part II of the book.",
    pages: "Chs. 4-7 (pp. 145-244)"
  },
  {
    name: "Carrigan, Connell & Lee (1985) founding paper",
    authors: "Tim Carrigan, R. W. Connell, John Lee",
    year: "1985 (Theory and Society 14(5): 551-604)",
    finding: "Toward a New Sociology of Masculinity. The founding text of the new sociology of masculinity. First formulation of 'hegemonic masculinity' as a concept. Critique of sex-role theory and proposal of a structural-relational framework.",
    pages: "Vorwort; Ch. 1; throughout"
  },
  {
    name: "Connell & Messerschmidt (2005) revision paper",
    authors: "R. W. Connell, James W. Messerschmidt",
    year: "2005 (Gender and Society 19(6))",
    finding: "Hegemonic Masculinity: Rethinking the Concept. Reviews a decade of critique (Donaldson, Hearn, Beasley, Coles, Demetriou, Petersen, Jefferson) and partially revises the framework while defending its core. The authoritative later statement.",
    pages: "Vorwort; Einführung"
  },
  {
    name: "Imperato-McGinley Dominican Republic 5\u03b1-reductase study",
    authors: "Julianne Imperato-McGinley et al.",
    year: "1979 (NEJM 300(22): 1233-37)",
    finding: "18 cases of children with 5\u03b1-reductase deficiency raised as girls in a Dominican Republic village; at puberty most 'switched' to male identity. Used by sociobiologists as proof that biology beats socialization. Connell\u2019s reread shows the data actually supports the social-construction view: the village had a strict gendered division of labor; modern medicine\u2019s response (early surgical correction) reveals the social commitment to dichotomous gender.",
    pages: "Ch. 2, p. 100"
  },
  {
    name: "Kemper Social Structure and Testosterone (1990)",
    authors: "Theodore D. Kemper (Rutgers)",
    year: "1990",
    finding: "Documents multiple cases (sport, military, academic) where social position changes preceded and predicted hormone changes \u2014 the SOCIAL\u2192BIOLOGICAL causal direction, opposite of sociobiology. Decisive empirical lever against testosterone-as-cause arguments.",
    pages: "Ch. 2, p. 99"
  },
  {
    name: "Herdt Sambia Guardians of the Flutes",
    authors: "Gilbert Herdt",
    year: "1981",
    finding: "Sambia (Papua New Guinea) ethnography documenting ritualized male-male sexual practices as part of normative male maturation. Key empirical evidence in Connell\u2019s argument that Western homosexuality/heterosexuality categories are culturally specific.",
    pages: "Ch. 1, pp. 78-80"
  },
  {
    name: "Mead Sex and Temperament",
    authors: "Margaret Mead",
    year: "1935",
    finding: "Tchambuli/Mundugumor/Arapesh comparison documenting wide cross-cultural variability in gendered temperament. Foundational anthropological evidence against universalist masculinity claims.",
    pages: "Ch. 1, pp. 76-78"
  },
  {
    name: "Gerschick & Miller disability and masculinity",
    authors: "Thomas J. Gerschick & Adam S. Miller",
    year: "1994/1995",
    finding: "Three response patterns of men with physical disabilities to hegemonic-masculine standards: (1) intensify effort, (2) modify one\u2019s definition, (3) reject hegemonic masculinity. Foundational study in masculinity-and-disability research.",
    pages: "Ch. 2, p. 105"
  },
  {
    name: "Hedges of patriarchal-dividend statistics",
    authors: "UN, World Bank, ILO, OECD synthesized",
    year: "1992 baseline",
    finding: "Men's average income ~2\u00d7 women's in rich nations; 50/55 US billionaire fortunes controlled by men; ~10:1 male:female parliamentarians worldwide; women perform a disproportionate share of unpaid household and care work. The statistical core of the patriarchal dividend.",
    pages: "Ch. 3, pp. 138-141; Nachwort pp. 320-324"
  },
  {
    name: "Holter & Aarseth Norwegian quantitative masculinity research",
    authors: "\u00d8ystein G. Holter, Helene Aarseth (Norway)",
    year: "1990s-2000s",
    finding: "One of the few large-N quantitative studies of men\u2019s lives. Cited by Connell as a methodological model for the next generation of masculinity research.",
    pages: "Einführung"
  },
  {
    name: "Zulehner & Volz Männer im Aufbruch",
    authors: "Paul M. Zulehner & Rainer Volz (Germany)",
    year: "1998",
    finding: "Large German quantitative survey of men\u2019s attitudes \u2014 cited by Connell as one of the few attempts at quantitative masculinity research and as a model for German-speaking research.",
    pages: "Einführung"
  },
  {
    name: "CROME European multinational masculinity project",
    authors: "Jeff Hearn et al.",
    year: "2002 onward",
    finding: "Critical Research on Men in Europe (CROME) \u2014 the first major multinational quantitative masculinity research project. Compared men's situations across 10 European countries.",
    pages: "Einführung; Nachwort"
  },
  {
    name: "Connell & Wood Australian managers biographical study",
    authors: "R. W. Connell & Julian Wood",
    year: "2005 (Men and Masculinities)",
    finding: "Biographical study of Australian senior corporate managers. Empirical base for the transnational business masculinity concept.",
    pages: "Nachwort pp. 326-335"
  },
  {
    name: "Donaldson study of the super-rich",
    authors: "Mike Donaldson",
    year: "2003",
    finding: "Biographical study of extremely wealthy men. Empirical material for the transnational business masculinity discussion.",
    pages: "Nachwort"
  },
  {
    name: "Hooper The Economist gender analysis / Manly States",
    authors: "Charlotte Hooper",
    year: "2000-2001",
    finding: "Discourse analysis of The Economist magazine\u2019s gendered language. Hooper proposes a two-form model (hard military-diplomatic vs. softer corporate masculinity) as alternative to Connell\u2019s single transnational business masculinity.",
    pages: "Einführung; Nachwort"
  },
  {
    name: "Curry locker-room ethnography",
    authors: "Timothy J. Curry",
    year: "1991",
    finding: "Wrestling team locker-room ethnography. Documents the routinized injury culture of male sport: playing through pain, normalized doping, accidents as 'normal,' chronic stress.",
    pages: "Ch. 2, pp. 108-109"
  },
  {
    name: "Messner Power at Play",
    authors: "Michael A. Messner",
    year: "1992",
    finding: "Sport-sociology study of male athletes documenting how the body is used up in pursuit of hegemonic-masculine ideals. Former athletes live with damaged bodies, chronic pain, and shortened life expectancy.",
    pages: "Ch. 2, pp. 107-110"
  },
  {
    name: "Cockburn & Zarkov Bosnia peacekeeping study",
    authors: "Cynthia Cockburn & Dubravka Zarkov",
    year: "2002",
    finding: "Postwar Bosnia peacekeeping study \u2014 unique research on military masculinity in international peacekeeping operations. Cited in the Nachwort.",
    pages: "Nachwort"
  },
  {
    name: "Tomsen heterosexual panic defense study",
    authors: "Stephen Tomsen",
    year: "2002",
    finding: "Australian study of homophobic murder cases and the 'heterosexual panic defense' as a legal mechanism for justifying anti-gay violence. Cited by Connell as one mechanism in violence-as-masculinity-policing.",
    pages: "Nachwort"
  },
  {
    name: "Resnick Add Health (parallel reference)",
    authors: "M. D. Resnick et al. (JAMA 1997)",
    year: "1997",
    finding: "While not directly cited by Connell, the Add Health connectedness data provides exactly the kind of large-N quantitative evidence Connell calls for in the Einführung. Listed here as a methodological parallel.",
    pages: "Methodological context (not directly cited)"
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
  title: "Der gemachte Mann",
  subtitle: "Konstruktion und Krise von Männlichkeiten",
  author: "Raewyn (R. W.) Connell",
  publisher: "Springer VS / Geschlecht und Gesellschaft Bd. 8",
  year: 2015,
  description:
    "The German 4th edition (2015) of Connell's Masculinities (1995/2005), the foundational text of the sociology of masculinity. Argues that there is no single masculinity but multiple masculinities standing in hierarchical relations: hegemonic, subordinate, complicit, marginalized. Develops the concept of 'hegemonic masculinity' as the configuration of practice that legitimates patriarchy without requiring most men to embody it directly. Builds on Connell's three/four-dimensional structural model of gender (power, labor, kathexis, +symbolic representation), critiques sex-role theory and biological determinism, and proposes 'körperreflexive Praxis' as the way to handle the body in social analysis. Part II presents 36 biographical interviews with four groups of Australian men. Part III offers a 400-year history of Western masculinities, an analysis of contemporary masculinity politics (including a sharp critique of the mythopoetic men's movement), and a strategic synthesis grounded in collective politics and 'complex equality.' The 2005 Nachwort introduces 'transnational business masculinity' as the currently emerging globally hegemonic form. The German edition is edited by Michael Meuser and Ursula Müller, with Meuser's editorial introduction serving as the canonical German-language reception summary."
};
