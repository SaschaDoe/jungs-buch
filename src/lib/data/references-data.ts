// references-data.ts
// Structured reference data for "Jungs von heute, Männer von morgen"
// Source: kindle-text/references.md

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

// Helper to get proper literal types for Work objects
function w(work: Work): Work { return work; }

export const authors: Author[] = [
  {
    name: "Alt, Peter-Andre",
    field: "Literatur",
    works: [
      {
        title: "Sigmund Freud. Der Arzt der Moderne. Eine Biographie",
        type: "book" as const,
        year: 2016,
        publisher: "München: C. H. Beck",
      },
    ],
    pages: "Anmerkungen S. 232 (Ref. 54)",
    context: "Biograph Freuds; zitiert im Kontext psychoanalytischer Grundlagen der Männlichkeitsentwicklung.",
  },
  {
    name: "Antolini, Katherine Lane",
    field: "Geschichte",
    works: [
      {
        title: "Memorializing Motherhood: Anna Jarvis and the Struggle for Control of Mother's Day",
        type: "dissertation" as const,
        year: 2009,
        publisher: "West Virginia University",
      },
    ],
    pages: "Anmerkungen S. 242 (Ref. 258)",
    context: "Historikerin; Dissertation zu den historischen Hintergründen und der Entstehungsgeschichte des Muttertags.",
  },
  {
    name: "Audre Lorde",
    field: "Literatur",
    works: [
      {
        title: "Zitat: »Ich bin nicht frei, solange noch eine einzige Frau unfrei ist, auch wenn sie ganz andere Fesseln trägt als ich.«",
        type: "other" as const,
        year: "o. J.",
      },
    ],
    pages: "S. 197",
    context: "Lesbische, Schwarze US-Aktivistin, Mutter und Schriftstellerin; zitiert im Kontext von Frieden und Solidarität.",
  },
  {
    name: "Beck, Ulrich",
    field: "Soziologie",
    works: [
      {
        title: "Risikogesellschaft. Auf dem Weg in eine andere Moderne",
        type: "book" as const,
        year: 1986,
        publisher: "Frankfurt: Suhrkamp",
      },
    ],
    pages: "Anmerkungen S. 240 (Ref. 210)",
    context: "Soziologe; zitiert zur gesellschaftlichen Transformation und den Risiken der Moderne.",
  },
  {
    name: "Behjat, Shila",
    field: "Literatur",
    works: [
      {
        title: "Söhne großziehen als Feministin. Ein Streitgespräch mit mir selbst",
        type: "book" as const,
        year: 2024,
        publisher: "München: Hanser",
      },
    ],
    pages: "Anmerkungen S. 231 (Ref. 11); zitiert in Einleitung",
    context: "Autorin; zitiert in der Einleitung zur feministischen Erziehung von Söhnen und den damit verbundenen Widersprüchen.",
  },
  {
    name: "Bengel, Jürgen",
    field: "Psychologie",
    works: [
      {
        title: "Schutzfaktoren bei Kindern und Jugendlichen. Stand der Forschung zu psychosozialen Schutzfaktoren für Gesundheit",
        type: "report" as const,
        year: 2009,
        publisher: "Köln: Bundeszentrale für gesundheitliche Aufklärung",
        coAuthors: ["Meinders-Lücking, Frauke", "Rottmann, Nina"],
      },
    ],
    pages: "Anmerkungen S. 232 (Ref. 67)",
    context: "Psychologe; co-verfasste Forschungsübersicht zu psychosozialen Schutzfaktoren für die Gesundheit von Kindern und Jugendlichen.",
  },
  {
    name: "Benson, Jan",
    field: "Soziologie",
    works: [
      {
        title: "Männer und Muskeln. Soziale Konstruktion des männlichen Körperideals",
        type: "dissertation" as const,
        year: 2013,
        publisher: "Düsseldorf: Heinrich-Heine-Universität",
      },
    ],
    pages: "Anmerkungen S. 236 (Ref. 122)",
    context: "Soziologe; Dissertation zur sozialen Konstruktion des männlichen Körperideals.",
  },
  {
    name: "Biles, Simone",
    field: "Sport",
    works: [
      {
        title: "Rise",
        type: "film" as const,
        year: "o. J.",
      },
    ],
    pages: "S. 219",
    context: "Weltklasseturnerin; zitiert im Dokumentarfilm Rise als Vorbild für mentale Gesundheit und den Umgang mit Leistungsdruck.",
  },
  {
    name: "Bola, JJ",
    field: "Literatur",
    works: [
      {
        title: "Sei kein Mann. Warum Männlichkeit ein Albtraum für Jungs ist",
        type: "book" as const,
        year: 2020,
        publisher: "München: hanserblau",
      },
    ],
    pages: "Anmerkungen S. 237 (Ref. 147)",
    context: "Autor; thematisiert, wie toxische Männlichkeitsnormen Jungen und Männer schaden.",
  },
  {
    name: "Bojcan, Alexander",
    field: "Literatur",
    works: [
      {
        title: "Du darfst nicht alles glauben, was du denkst. Meine Depression",
        type: "book" as const,
        year: 2022,
        publisher: "Köln: Kiepenheuer & Witsch",
      },
    ],
    pages: "Anmerkungen S. 232 (Ref. 60)",
    context: "Autor; persönlicher Erfahrungsbericht über Depression bei Männern.",
  },
  {
    name: "Böhnisch, Lothar",
    field: "Soziologie",
    works: [
      {
        title: "Männliche Sozialisation. Eine Einführung",
        type: "book" as const,
        year: 2013,
        publisher: "Weinheim und Basel: Beltz Juventa",
      },
    ],
    pages: "S. 34, 35, 206, 230; Anmerkungen S. 232 (Ref. 27–29, 32), S. 237 (Ref. 155–156), S. 238 (Ref. 177), S. 240 (Ref. 206), S. 241 (Ref. 277)",
    context: "Soziologe; prägte den Begriff des »Gespenstes des rollenlosen Mannes«; zentrale Referenz für männliche Sozialisationstheorie im Buch.",
    keyFigure: true,
  },
  {
    name: "Bonnenberg, Britta",
    field: "Psychologie",
    works: [],
    pages: "S. 184",
    context: "Amokforscherin; im Text als Expertin für Amoklauf-Forschung im Kapitel zu Gewalt und Extremismus genannt.",
  },
  {
    name: "Brown, Brené",
    field: "Psychologie",
    works: [
      {
        title: "The Power of Vulnerability",
        type: "talk" as const,
        year: 2011,
      },
    ],
    pages: "Anmerkungen S. 236 (Ref. 136)",
    context: "US-amerikanische Forscherin; ihr TED-Talk über die Kraft der Verletzlichkeit wird im Kontext emotionaler Gesundheit von Jungen zitiert.",
  },
  {
    name: "Cammarata, Patricia",
    field: "Journalismus",
    works: [
      {
        title: "Dreißig Minuten, dann ist aber Schluss. Mit Kindern tiefenentspannt durch den Mediendschungel",
        type: "book" as const,
        year: 2020,
        publisher: "Köln: Bastei Lübbe",
      },
      {
        title: "Musterbruch. Überraschende Lösungen für wirkliche Gleichberechtigung",
        type: "book" as const,
        year: 2024,
        publisher: "Weinheim und Basel: Beltz Verlag",
      },
    ],
    pages: "Anmerkungen S. 241 (Ref. 223), S. 244 (Ref. 190, 195)",
    context: "Journalistin und Autorin; zitiert zu Medienkonsum von Kindern sowie zu strukturellen Lösungen für Gleichberechtigung in der Erziehung.",
  },
  {
    name: "Chaplin, Charlie",
    field: "Film",
    works: [
      {
        title: "Moderne Zeiten (Modern Times)",
        type: "film" as const,
        year: 1936,
      },
    ],
    pages: "S. 218",
    context: "Filmemacher; sein Film Moderne Zeiten wird als Metapher für Entfremdung und Produktivitätswahn im Kapitalismus zitiert.",
  },
  {
    name: "Daldry, Stephan",
    field: "Film",
    works: [
      {
        title: "Billy Elliot – I Will Dance",
        type: "film" as const,
        year: 2000,
        publisher: "BBC Films, Tiger Aspect Pictures and Working Title Films",
      },
    ],
    pages: "Anmerkungen (Ref. 26)",
    context: "Britischer Filmregisseur; sein Film Billy Elliot wird im frühen Teil des Buches zur Frage nach Rollenbildern und Freiräumen für Jungen zitiert.",
  },
  {
    name: "Chodorow, Nancy",
    field: "Psychologie",
    works: [
      {
        title: "Das Erbe der Mütter – Psychoanalyse und Soziologie der Geschlechter",
        type: "book" as const,
        year: 1990,
        publisher: "München: Frauenoffensive",
      },
    ],
    pages: "Anmerkungen S. 232 (Ref. 53, 66)",
    context: "Psychoanalytikerin und Soziologin; zitiert zur psychoanalytischen Theorie der Geschlechtersozialisation und Mutterrolle.",
  },
  {
    name: "Connell, Raewyn",
    field: "Soziologie",
    works: [
      {
        title: "Der gemachte Mann. Konstruktion und Krise von Männlichkeiten",
        type: "book" as const,
        year: 2015,
        publisher: "Wiesbaden: Springer Fachmedien",
      },
    ],
    pages: "Anmerkungen S. 232 (Ref. 52, 58–59), S. 237 (Ref. 145), S. 243 (Ref. 289)",
    context: "Australische Soziologin; prägte den Begriff »hegemoniale Männlichkeit«; zentrale theoretische Referenz des gesamten Buches.",
    keyFigure: true,
  },
  {
    name: "Dahlmüller, Till",
    field: "Pädagogik",
    works: [
      {
        title: "CarMiA – Handreichung für die Konzeption und Durchführung von Peer-to-Peer Projekten zur Stärkung von Caring Masculinities",
        type: "report" as const,
        year: 2023,
        publisher: "Dissens",
        coAuthors: ["Gelhaar, David", "Moschitz, Alexander", "Scambor, Elli"],
      },
    ],
    pages: "Anmerkungen S. 239 (Ref. 189)",
    context: "Pädagoge; Mitherausgeber der CarMiA-Handreichung zu Peer-to-Peer-Projekten für fürsorgliche Männlichkeit.",
  },
  {
    name: "Deggerich, Markus",
    field: "Journalismus",
    works: [
      {
        title: "»Worunter moderne Väter leiden.«",
        type: "article" as const,
        year: 2021,
        publisher: "Der Spiegel, Nr. 33 / 13.08.2021",
        coAuthors: ["Klovert, Heike", "Röhlig, Marc", "Stanek, Julia"],
      },
    ],
    pages: "Anmerkungen S. 240 (Ref. 211, 214)",
    context: "Journalist; co-verfasste einen Spiegel-Artikel über die Belastungen moderner Väter zwischen Erwerbs- und Familienarbeit.",
  },
  {
    name: "Dehnert, Celsy",
    field: "Journalismus",
    works: [],
    pages: "S. 189",
    context: "Journalistin und Autorin; auf Threads zitiert mit einem kritischen Post über den Begriff »Frauenwahlrecht« im Kontext eines CDU-Politikerstatements.",
  },
  {
    name: "Dickens, Charles",
    field: "Literatur",
    works: [
      {
        title: "Eine Geschichte zweier Städte",
        type: "book" as const,
        year: 1859,
        publisher: "München: Anaconda Verlag (Reprint 2018)",
      },
    ],
    pages: "S. 226–227; Anmerkungen S. 244 (Ref. 308)",
    context: "Britischer Romancier; berühmter Romananfang über die Gleichzeitigkeit von bester und schlimmster Zeit dient als Rahmung für das Schlusskapitel.",
  },
  {
    name: "El-Mafaalani, Aladin",
    field: "Soziologie",
    works: [],
    pages: "S. 208",
    context: "Promovierter Soziologe und Bildungsexperte; im Instagrampost Januar 2024 über den politischen Rechtsdrall als Folge »starker Verunsicherung in einer strukturellen Transformation« zitiert.",
  },
  {
    name: "Eliot, Lise",
    field: "Neurowissenschaft",
    works: [
      {
        title: "Wie verschieden sind sie? – Die Gehirnentwicklung von Jungen und Mädchen",
        type: "book" as const,
        year: 2010,
        publisher: "Berlin: Berlin Verlag",
      },
    ],
    pages: "S. 195; Anmerkungen S. 232 (Ref. 45), S. 235 (Ref. 89–91, 97–98), S. 237 (Ref. 143)",
    context: "US-amerikanische Neurobiologin; widerlegt biologistische Vereinfachungen zu Hirnunterschieden zwischen Geschlechtern; zitiert u. a. zu Kriegsspielen.",
    keyFigure: true,
  },
  {
    name: "Elliott, Karla",
    field: "Soziologie",
    works: [
      {
        title: "»Zum Problem von Macht und Dominanz im Konzept Caring Masculinities.«",
        type: "article" as const,
        year: 2019,
        publisher: "In: Scholz/Heilmann (Hrsg.): Caring Masculinities? München: Oekom",
      },
    ],
    pages: "Anmerkungen S. 240 (Ref. 218)",
    context: "Soziologin; thematisiert Machtfragen innerhalb des Konzepts fürsorglicher Männlichkeit.",
  },
  {
    name: "Evans, Robert",
    field: "Journalismus",
    works: [],
    pages: "S. 183",
    context: "US-amerikanischer Journalist und Extremismusexperte; zitiert zur Joker-Filmkontroverse und der Incel-Thematik im Kapitel zu Online-Extremismus.",
  },
  {
    name: "Focks, Petra",
    field: "Pädagogik",
    works: [
      {
        title: "Starke Mädchen, starke Jungen. Genderbewusste Pädagogik in der Kita",
        type: "book" as const,
        year: 2016,
        publisher: "Freiburg im Breisgau: Verlag Herder GmbH",
      },
    ],
    pages: "S. 205; Anmerkungen S. 233 (Ref. 74, 76), S. 235 (Ref. 107, 112), S. 243 (Ref. 276)",
    context: "Erziehungswissenschaftlerin; zitiert zur genderbewussten Pädagogik in der Kita, u. a. zu Jungen mit Migrationshintergrund.",
    keyFigure: true,
  },
  {
    name: "Gabbay, Alex",
    field: "Film",
    works: [
      {
        title: "Beyond Men and Masculinity",
        type: "film" as const,
        year: 2020,
        publisher: "Berlin: Monkey & Me Films",
      },
    ],
    pages: "Anmerkungen S. 232 (Ref. 65), S. 238 (Ref. 154), S. 239 (Ref. 204)",
    context: "Dokumentarfilmemacher; sein Film zu Männlichkeit und Maskulinität wird mehrfach als visuelle Quelle zitiert.",
  },
  {
    name: "Gilmore, David",
    field: "Soziologie",
    works: [
      {
        title: "Mythos Mann (Manhood in the Making)",
        type: "book" as const,
        year: "o. J.",
      },
    ],
    pages: "S. 208–209",
    context: "US-amerikanischer Hochschullehrer; zitiert mit der These, dass Männlichkeit eine kulturelle Leistungsanforderung ist, die in vielen Gesellschaften ähnlich konstruiert wird.",
  },
  {
    name: "Golding, William",
    field: "Literatur",
    works: [
      {
        title: "Herr der Fliegen",
        type: "book" as const,
        year: 1954,
      },
    ],
    pages: "S. 192–193",
    context: "Britischer Romancier; sein Roman über Jungen auf einer Insel wird als Gegenbeispiel zu realen Kooperationsgeschichten diskutiert.",
  },
  {
    name: "Griffith-Joyner, Florence",
    field: "Sport",
    works: [],
    pages: "S. 227",
    context: "US-amerikanische Sprinterin; hält den Frauen-Weltrekord über 100 Meter (10,49 Sekunden, 1988) und wird als Sportikone zitiert.",
  },
  {
    name: "Haberl, Tobias",
    field: "Journalismus",
    works: [],
    pages: "S. 208",
    context: "Journalist und Autor; im NDR-Interview zitiert über eine wahrgenommene »Verachtungs-Lawine« gegen Männer seit #MeToo.",
  },
  {
    name: "Heisig, Katharina",
    field: "Pädagogik",
    works: [
      {
        title: "»Vom Sinn einer geschlechtsneutralen Erziehung und Bildung.«",
        type: "article" as const,
        year: 2019,
        publisher: "ifo Dresden berichtet, 2/2019",
      },
    ],
    pages: "Anmerkungen S. 234 (Ref. 92)",
    context: "Bildungsforscherin; zitiert zur Debatte über Sinn und Grenzen geschlechtsneutraler Erziehung.",
  },
  {
    name: "Höcke, Björn",
    field: "Politik",
    works: [],
    pages: "S. 207–208",
    context: "Rechtsextremer AfD-Politiker; zitiert mit der Aussage, »wir unsere Männlichkeit wieder entdecken müssen« als Beispiel für rechte Instrumentalisierung von Männlichkeitsdiskursen.",
  },
  {
    name: "hooks, bell",
    field: "Literatur",
    works: [
      {
        title: "Männer, Männlichkeit und Liebe. Der Wille zur Veränderung",
        type: "book" as const,
        year: 2022,
        publisher: "München: Elisabeth Sandmann Verlag",
      },
    ],
    pages: "Einleitung (Ref. 12); S. 214 (Ref. 295)",
    context: "Schwarze, US-amerikanische Bürgerrechtsaktivistin und Autorin; zitiert in Einleitung und Schluss zur grundlegenden Fähigkeit von Männern zur Veränderung durch Liebe.",
    keyFigure: true,
  },
  {
    name: "Horbach, Emily (emitheteacher)",
    field: "Pädagogik",
    works: [
      {
        title: "Vortrag auf re:publica 2024 (#WirfürSchule)",
        type: "talk" as const,
        year: 2024,
      },
    ],
    pages: "S. 221",
    context: "Lehrerin; hielt 2024 auf der re:publica einen Vortrag über innovative Schulmethoden und kritisierte das Cold-Call-Prinzip im Unterricht.",
  },
  {
    name: "Howe, Julia Ward",
    field: "Politik",
    works: [
      {
        title: "Mother's Day Proclamation",
        type: "other" as const,
        year: 1870,
      },
    ],
    pages: "S. 196",
    context: "US-amerikanische Frauenrechtlerin; Mitbegründerin des Muttertags als ursprünglichen Friedenstag; zitiert mit ihrem Proklamationsaufruf.",
  },
  {
    name: "Hunger, Ina",
    field: "Pädagogik",
    works: [
      {
        title: "»Bewegung in der frühen Kindheit. Zur Dominanz und Materialisierung alter Geschlechterbilder im pädagogischen Alltag.«",
        type: "article" as const,
        year: 2014,
        publisher: "Sozialmagazin 1–2/2014",
      },
    ],
    pages: "Anmerkungen S. 233 (Ref. 83), S. 235 (Ref. 106)",
    context: "Sportwissenschaftlerin; zitiert zur Reproduktion von Geschlechterbildern durch Bewegungspädagogik in der frühen Kindheit.",
  },
  {
    name: "Inagaki, T. K.",
    field: "Psychologie",
    works: [
      {
        title: "»On the Benefits of Giving Social Support: When, Why, and How Support Providers Gain by Caring for Others.«",
        type: "article" as const,
        year: 2017,
        publisher: "Current Directions in Psychological Science, 26(2), 109–113",
        coAuthors: ["Orehek, E."],
      },
    ],
    pages: "Anmerkungen S. 239 (Ref. 192, 200)",
    context: "Psychologin; zitiert mit Forschungsergebnissen, dass soziale Unterstützung auch für die gebende Person positive Auswirkungen hat.",
  },
  {
    name: "Jarvis, Ann Maria Reeves",
    field: "Geschichte",
    works: [],
    pages: "S. 195–196",
    context: "US-Amerikanerin; organisierte in den 1860er-Jahren die Mothers' Friendship Days und gilt als Mitbegründerin des modernen Muttertags.",
  },
  {
    name: "Jha, Sonora",
    field: "Literatur",
    works: [
      {
        title: "How to raise a feminist son. Das Buch für alle Eltern, die Gleichberechtigung leben wollen",
        type: "book" as const,
        year: 2023,
        publisher: "München: &Töchter",
      },
    ],
    pages: "Anmerkungen S. 232 (Ref. 64)",
    context: "Autorin; zitiert mit praktischen Ansätzen zur feministischen Erziehung von Söhnen.",
  },
  {
    name: "Katz, Phyllis A.",
    field: "Psychologie",
    works: [
      {
        title: "»Raising Feminists.«",
        type: "article" as const,
        year: 1996,
        publisher: "Psychology of Women Quarterly, Band 20, Ausgabe 3",
      },
      {
        title: "Baby X",
        type: "study" as const,
        year: 1975,
        publisher: "Sex Roles 1(2)",
        coAuthors: ["Seavy, Carol A.", "Rosenberg, Sue"],
      },
    ],
    pages: "Anmerkungen S. 232 (Ref. 62), S. 233 (Ref. 73)",
    context: "Psychologin; Co-Autorin des klassischen Baby-X-Experiments zur geschlechtsspezifischen Sozialisation; auch zitiert zu feministischer Kindererziehung.",
  },
  {
    name: "Konieczny, Esther",
    field: "Wirtschaft",
    works: [
      {
        title: "Arbeit und das gute Leben. Wie wir Wohlstand neu erfinden",
        type: "book" as const,
        year: 2024,
        publisher: "Zürich: Atrium",
        coAuthors: ["Stoßberger, Lena"],
      },
    ],
    pages: "S. 217–220; Anmerkungen S. 244 (Ref. 297, 299, 300)",
    context: "Promovierte Unternehmensberaterin und Personalentwicklerin; zitiert zu Externalisierungskosten und Fürsorge als wirtschaftlichem Leitstern.",
  },
  {
    name: "Lawlor, Eilis",
    field: "Wirtschaft",
    works: [],
    pages: "S. 216–217",
    context: "Promovierte Ökonomin; Mitverfasserin der Studie der britischen Denkfabrik the new economics foundation über den sozialen Wert verschiedener Berufsgruppen.",
  },
  {
    name: "Leja, Kevin",
    field: "Soziologie",
    works: [
      {
        title: "»Von Angesicht zu Angesicht – Fürsorge in Freundschaften von männlichen Jugendlichen.«",
        type: "article" as const,
        year: 2022,
        publisher: "Gesellschaft – Individuum – Sozialisation (GISo), 3(2)",
        coAuthors: ["Schwarzenbacher, Iris"],
      },
    ],
    pages: "Anmerkungen S. 238 (Ref. 160)",
    context: "Soziologe; co-verfasste eine Studie zu Fürsorge und Freundschaft unter männlichen Jugendlichen.",
  },
  {
    name: "Liel, Christoph",
    field: "Psychologie",
    works: [
      {
        title: "Väter und familiäre Gewalt",
        type: "book" as const,
        year: 2018,
        publisher: "München: Universitätsbibliothek der LMU",
      },
    ],
    pages: "Anmerkungen S. 233 (Ref. 79)",
    context: "Psychologe; zitiert zu Vätern und familiärer Gewalt im Kontext von Erziehung und Schutzfaktoren.",
  },
  {
    name: "Liebl, Ole",
    field: "Journalismus",
    works: [],
    pages: "S. 184, 188–191",
    context: "Content Creator und Autor (TikTok: oleliebl); mehrfach interviewt zu TikTok, politischer Bildung und Medienkompetenz; zitiert u. a. zur AfD-Reichweite auf TikTok.",
  },
  {
    name: "Lunz, Kristina",
    field: "Politik",
    works: [
      {
        title: "Empathie und Widerstand",
        type: "book" as const,
        year: 2024,
        publisher: "Berlin: Ullstein",
      },
    ],
    pages: "Anmerkungen S. 231 (Ref. 37)",
    context: "Politikerin und Aktivistin; zitiert zu Empathie als politischer Haltung und Widerstand gegen toxische Normen.",
  },
  {
    name: "Luy, M.",
    field: "Medizin",
    works: [
      {
        title: "Warum Frauen länger leben: Erkenntnisse aus einem Vergleich von Kloster- und Allgemeinbevölkerung",
        type: "report" as const,
        year: 2002,
        publisher: "Wiesbaden: Bundesinstitut für Bevölkerungsforschung",
      },
    ],
    pages: "Anmerkungen S. 235 (Ref. 103)",
    context: "Bevölkerungswissenschaftler; zitiert mit Forschungsergebnissen zur geschlechtsspezifischen Lebenserwartung anhand eines Klostervergleichs.",
  },
  {
    name: "Maihofer, Andrea",
    field: "Soziologie",
    works: [
      {
        title: "»Wandel und Persistenz hegemonialer Männlichkeit und die Grenzen des Konzepts von Caring Masculinity.«",
        type: "article" as const,
        year: 2019,
        publisher: "In: Scholz/Heilmann (Hrsg.): Caring Masculinities? München: Oekom",
      },
    ],
    pages: "Anmerkungen S. 238 (Ref. 170)",
    context: "Soziologin und Philosophin; thematisiert Persistenz und Wandel hegemonialer Männlichkeit sowie die Grenzen des Caring-Masculinity-Konzepts.",
  },
  {
    name: "Marienfeld, Uli",
    field: "Pädagogik",
    works: [
      {
        title: "Vortrag auf re:publica 2024 (projektbasiertes Lernen, Fach »Verantwortung«)",
        type: "talk" as const,
        year: 2024,
      },
    ],
    pages: "S. 221",
    context: "Schulleiter einer evangelischen Oberschule in Berlin; zitiert zu projektbasiertem Lernen und dem Schulfach »Verantwortung«.",
  },
  {
    name: "Merkel, Angela",
    field: "Politik",
    works: [],
    pages: "S. 189",
    context: "Ehemalige Bundeskanzlerin; im Spiegel-Interview mit dem Kommentar »Männer!« über Scholz, Lindner und Habeck zitiert.",
  },
  {
    name: "Mierau, Susanne",
    field: "Pädagogik",
    works: [
      {
        title: "Frei und unverbogen. Kinder ohne Druck begleiten und bedingungslos annehmen",
        type: "book" as const,
        year: 2021,
        publisher: "Weinheim: Beltz",
      },
      {
        title: "New Moms for Rebel Girls. Unsere Töchter für ein gleichberechtigtes Leben stärken",
        type: "book" as const,
        year: 2022,
        publisher: "Weinheim und Basel: Beltz",
      },
    ],
    pages: "Anmerkungen S. 233 (Ref. 82), S. 231 (Ref. 25)",
    context: "Pädagogin und Autorin; zitiert zu druckfreier Begleitung von Kindern und zur gleichberechtigten Erziehung von Mädchen.",
  },
  {
    name: "Müller, Olaf",
    field: "Philosophie",
    works: [],
    pages: "S. 194",
    context: "Philosoph und bekannter Pazifist; im Zeit-Interview Ende 2024 zitiert zu militaristischem Denken und dem Ukrainekrieg.",
  },
  {
    name: "Neubauer, Luisa",
    field: "Politik",
    works: [],
    pages: "S. 219",
    context: "Klimaaktivistin; zitiert mit einem Aufruf an Mitarbeitende großer Unternehmen (Siemens Energy, Deutsche Bank, Audi) wegen Greenwashings.",
  },
  {
    name: "Oeming, Madita",
    field: "Soziologie",
    works: [
      {
        title: "Porno. Eine unverschämte Analyse",
        type: "book" as const,
        year: 2023,
        publisher: "Hamburg: Rowohlt",
      },
    ],
    pages: "Anmerkungen S. 238 (Ref. 173)",
    context: "Medienwissenschaftlerin; zitiert zur analytischen Auseinandersetzung mit Pornografie und ihrer Wirkung auf Geschlechterbilder.",
  },
  {
    name: "Pollack, William S.",
    field: "Psychologie",
    works: [
      {
        title: "Jungen: Was sie vermissen, was sie brauchen",
        type: "book" as const,
        year: 2009,
        publisher: "Frankfurt: Fischer Taschenbuch",
      },
      {
        title: "»Sustaining and Reframing Vulnerability and Connection. Creating Genuine Resilience in Boys and Young Males.«",
        type: "article" as const,
        year: 2005,
        publisher: "In: Goldstein/Brooks (Hrsg.): Handbook of Resilience in Children. New York: Kluwer Academic/Plenum Publishers",
      },
    ],
    pages: "Anmerkungen S. 236 (Ref. 129, 130, 135), S. 237 (Ref. 134, 139, 144)",
    context: "US-amerikanischer Psychologe; vielfach zitiert zu emotionaler Vulnerabilität, Resilienz und den Bedürfnissen von Jungen.",
    keyFigure: true,
  },
  {
    name: "Regehr, Kaitlyn",
    field: "Soziologie",
    works: [],
    pages: "S. 186–187",
    context: "Professorin für Informationswissenschaften an der University of Portsmouth; Studie zu frauenfeindlichen Inhalten auf TikTok; warnte vor »Incel 2.0«.",
  },
  {
    name: "Renz-Polster, Herbert",
    field: "Medizin",
    works: [
      {
        title: "Erziehung prägt Gesinnung. Wie der weltweite Rechtsruck entstehen konnte – und wie wir ihn aufhalten können",
        type: "book" as const,
        year: 2020,
        publisher: "München: Kösel",
      },
    ],
    pages: "S. 207; Anmerkungen S. 231 (Ref. 14), S. 243 (Ref. 282, 283)",
    context: "Kinderarzt und Erziehungsexperte; zitiert zur These, dass autoritäre Erziehung den weltweiten Rechtsruck begünstigt.",
  },
  {
    name: "Richter-Kornweitz, Antje",
    field: "Psychologie",
    works: [
      {
        title: "»Gleichheit und Differenz – die Relation zwischen Resilienz, Geschlecht und Gesundheit.«",
        type: "article" as const,
        year: 2011,
        publisher: "In: Zander (Hrsg.): Handbuch Resilienz. VS Verlag",
      },
    ],
    pages: "Anmerkungen S. 231 (Ref. 15–16), S. 232 (Ref. 31, 43), S. 233 (Ref. 71, 81), S. 234 (Ref. 108), S. 236 (Ref. 126–127, 137), S. 237 (Ref. 149)",
    context: "Gesundheitswissenschaftlerin; am häufigsten zitierte Forscherin im Buch; ihre Arbeit zu Resilienz, Geschlecht und Gesundheit durchzieht das gesamte Werk.",
    keyFigure: true,
  },
  {
    name: "Rukeyser, Muriel",
    field: "Literatur",
    works: [],
    pages: "S. 198",
    context: "US-amerikanische Schriftstellerin; zitiert mit dem Gedichtsatz: »Das Universum besteht aus Geschichten, nicht aus Atomen.«",
  },
  {
    name: "Sampliner, David",
    field: "Film",
    works: [
      {
        title: "My Own Man",
        type: "film" as const,
        year: 2014,
        publisher: "Class 5 Films & Sixteen Tons Productions",
      },
    ],
    pages: "Anmerkungen S. 236 (Ref. 128)",
    context: "Dokumentarfilmemacher; sein persönlicher Film über Vaterschaft und Männlichkeit wird im Kapitel zur männlichen Identität zitiert.",
  },
  {
    name: "Seavy, Carol A.",
    field: "Psychologie",
    works: [
      {
        title: "Baby X",
        type: "study" as const,
        year: 1975,
        publisher: "Sex Roles 1(2)",
        coAuthors: ["Katz, Phyllis A.", "Rosenberg, Sue"],
      },
    ],
    pages: "Anmerkungen S. 233 (Ref. 73)",
    context: "Psychologin; Co-Autorin des klassischen Baby-X-Experiments, das geschlechtsspezifische Sozialisation bereits im Säuglingsalter nachweist.",
  },
  {
    name: "Seifert, Nicole",
    field: "Literatur",
    works: [
      {
        title: "Frauen Literatur. Abgewertet, vergessen, wiederentdeckt",
        type: "book" as const,
        year: 2024,
        publisher: "Köln: Verlag Kiepenheuer & Witsch",
      },
    ],
    pages: "S. 210; Anmerkungen S. 243 (Ref. 290, 291)",
    context: "Promovierte Literaturwissenschaftlerin und Buchhändlerin; zitiert zur systematischen Abwertung von Literatur, die von Frauen verfasst oder über Frauen geschrieben wurde.",
  },
  {
    name: "Siegert, Susanne (keine.erinnerungskultur)",
    field: "Journalismus",
    works: [
      {
        title: "re:publica-Vortrag »Rechte Symbole auf TikTok erkennen«",
        type: "talk" as const,
        year: 2024,
      },
    ],
    pages: "S. 187",
    context: "Journalistin und Content Creator (TikTok: keine.erinnerungskultur, 300.000+ Follower); zitiert zu rechten Symbolen und Codes auf TikTok.",
  },
  {
    name: "Süfke, Björn",
    field: "Psychologie",
    works: [
      {
        title: "Männerseelen. Ein psychologischer Reiseführer",
        type: "book" as const,
        year: 2008,
        publisher: "München: Goldmann",
      },
    ],
    pages: "Anmerkungen S. 231 (Ref. 40–41), S. 232 (Ref. 70)",
    context: "Psychologe; zitiert zur Innenperspektive männlicher Psyche und zu emotionaler Sprachlosigkeit bei Männern.",
  },
  {
    name: "Tate, Andrew",
    field: "Journalismus",
    works: [],
    pages: "S. 183, 227",
    context: "Influencer, mutmaßlicher Menschenhändler und Vergewaltiger; mehrfach als Negativbeispiel für toxische Männlichkeit und ihren Einfluss auf Jugendliche zitiert.",
  },
  {
    name: "Thoits, P. A.",
    field: "Psychologie",
    works: [
      {
        title: "»Volunteer work and well-being.«",
        type: "article" as const,
        year: 2001,
        publisher: "J Health Soc Behav. 42(2):115–31",
        coAuthors: ["Hewitt, L. N."],
      },
    ],
    pages: "Anmerkungen S. 244 (Ref. 304)",
    context: "Sozialpsychologin; zitiert mit Forschungsergebnissen zur positiven Wirkung von Ehrenamt und sozialer Fürsorge auf das eigene Wohlbefinden.",
  },
  {
    name: "Trump, Donald",
    field: "Politik",
    works: [],
    pages: "S. 190–192, 226–227",
    context: "US-amerikanischer Politiker; mehrfach zitiert zu Falschaussagen (22.000 in erster Amtszeit), Social Media und Desinformationskampagnen.",
  },
  {
    name: "Urwin, Jack",
    field: "Literatur",
    works: [
      {
        title: "Boys don't cry – Identität, Gefühl und Männlichkeit",
        type: "book" as const,
        year: 2017,
        publisher: "Hamburg: Edition Nautilus",
      },
    ],
    pages: "Anmerkungen S. 235 (Ref. 111), S. 239 (Ref. 203)",
    context: "Journalist und Autor; zitiert zu emotionaler Unterdrückung und dem Schaden, den die Norm »Boys don't cry« bei Männern anrichtet.",
  },
  {
    name: "Waak, Anne",
    field: "Journalismus",
    works: [
      {
        title: "Kümmern und Kämpfen. Warum Geschlechtergerechtigkeit in Erziehung und Familie uns alle freier macht",
        type: "book" as const,
        year: 2023,
        publisher: "München: Goldmann",
      },
    ],
    pages: "Anmerkungen S. 233 (Ref. 85), S. 235 (Ref. 99)",
    context: "Journalistin; zitiert zur Verknüpfung von Geschlechtergerechtigkeit in Erziehung und Familie mit gesellschaftlicher Freiheit.",
  },
  {
    name: "Weidel, Alice",
    field: "Politik",
    works: [],
    pages: "S. 227",
    context: "AfD-Politikerin; zitiert als Beispiel für politische Falschaussagen, konkret ihre Bezeichnung Adolf Hitlers als »Kommunisten«.",
  },
  {
    name: "Wolpers, Ulrike",
    field: "Literatur",
    works: [
      {
        title: "Mein fremdes Kind. Wie wir die Computerspielsucht unseres Sohnes überwanden",
        type: "book" as const,
        year: 2021,
        publisher: "München: Benevento Verlag",
      },
    ],
    pages: "Anmerkungen S. 241 (Ref. 224)",
    context: "Autorin; persönlicher Erfahrungsbericht über den Umgang mit Computerspielsucht ihres Sohnes.",
  },
  {
    name: "Zaibi, Tarek",
    field: "Pädagogik",
    works: [],
    pages: "S. 204–213",
    context: "Lehrer, Bildungsaktivist und Politiker; mehrfach interviewt zu Gleichberechtigung im Schulalltag, Berufsorientierung, Demokratiebildung und dem Einfluss von Männlichkeitsidealen.",
  },
].sort((a, b) => a.name.localeCompare(b.name, "de"));

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "Bertelsmann Stiftung",
    type: "Forschung",
    context: "Publikation »Wer gewinnt, wer verliert« (2020) zu gesellschaftlichen Transformationsprozessen.",
    pages: "Anmerkungen (Ref. 1)",
  },
  {
    name: "Bildungsstätte Anne Frank",
    type: "NGO",
    context: "Analyse zur TikTok-Strategie der AfD; AfD-Mitglieder strukturieren Reden für kurze Videoschnipsel.",
    pages: "S. 191; Anmerkungen (Ref. 250)",
  },
  {
    name: "Bundesinstitut für Bevölkerungsforschung (BIB)",
    type: "Forschung",
    context: "Herausgeber der Studie von Luy (2002) zu geschlechtsspezifischer Lebenserwartung.",
    pages: "Anmerkungen (Ref. 103)",
  },
  {
    name: "Bundeskriminalamt (BKA)",
    type: "Politik",
    context: "Häusliche Gewalt. Bundeslagebild 2023; Daten zu Gewalt gegen Frauen.",
    pages: "Anmerkungen (Ref. 238)",
  },
  {
    name: "Bundesministerium des Innern (BMI)",
    type: "Politik",
    context: "Lagebild Gewalt gegen Frauen (2024); PKS 2023.",
    pages: "Anmerkungen (Ref. 9, 237, 239)",
  },
  {
    name: "Bundesministerium für Familie, Senioren, Frauen und Jugend (BMFSFJ)",
    type: "Politik",
    context: "Vaeterreport 2023; Familienreport 2024; Men in Care-Studie 2024; Aktionsleitfaden gewaltfreie Erziehung; Akuthilfe für pflegende Angehörige.",
    pages: "Anmerkungen (Ref. 2, 3, 44, 69, 207, 209, 264, 269)",
  },
  {
    name: "Bundeszentrale für gesundheitliche Aufklärung (BZgA)",
    type: "Forschung",
    context: "Herausgeberin des Forschungsberichts von Bengel et al. (2009) zu Schutzfaktoren bei Kindern und Jugendlichen.",
    pages: "Anmerkungen (Ref. 67)",
  },
  {
    name: "CarMiA (Caring Masculinities in Action)",
    type: "NGO",
    context: "EU-finanziertes Projekt; befähigt junge Männer zur Leitung von Workshops zu fürsorglicher Männlichkeit.",
    pages: "S. 214; Anmerkungen (Ref. 189, 294)",
  },
  {
    name: "Deutsches Institut für Wirtschaftsforschung (DIW)",
    type: "Forschung",
    context: "Studie zum Gender Pay Gap in Deutschland; Deutschland hat einen der höchsten GPG in Europa.",
    pages: "Anmerkungen (Ref. 180)",
  },
  {
    name: "Dissens e.V.",
    type: "NGO",
    context: "Trägerorganisation für ECaRoM, CarMiA und weitere Projekte zu fürsorglicher Männlichkeit.",
    pages: "Anmerkungen (Ref. 13, 86, 87, 189)",
  },
  {
    name: "Dublin City University",
    type: "Forschung",
    context: "Studie zu antifeministischen Inhalten auf TikTok (Toxicity Full Report, April 2024).",
    pages: "S. 186; Anmerkungen (Ref. 234)",
  },
  {
    name: "Europäische Kommission / EU",
    type: "Politik",
    context: "Digital Services Act; Forschung zu gemeinnütziger digitaler Infrastruktur.",
    pages: "S. 192; Anmerkungen (Ref. 253)",
  },
  {
    name: "EXIT Deutschland",
    type: "NGO",
    context: "Initiative für Aussteiger aus der rechtsextremen Szene; Handreichung zu Incel-Symbolen.",
    pages: "S. 187",
  },
  {
    name: "Global Peace Index / Institute for Economics and Peace",
    type: "Forschung",
    context: "Jährlicher Index zu weltweitem Frieden; 2024 zählte er 56 bewaffnete Konflikte weltweit.",
    pages: "S. 194; Anmerkungen (Ref. 257)",
  },
  {
    name: "Hamburger Institut für Sozialforschung",
    type: "Forschung",
    context: "Sieht den Wert von Fürsorge als entscheidenden Hebel in Krisenzeiten.",
    pages: "S. 220",
  },
  {
    name: "Harvard University",
    type: "Forschung",
    context: "80-jährige Glücksforschungsstudie; Ergebnis: »Was der Mensch braucht, ist die Gewissheit, in Beziehung zu sein.«",
    pages: "S. 218; Anmerkungen (Ref. 193)",
  },
  {
    name: "Heinrich-Böll-Stiftung",
    type: "Politik",
    context: "Mitherausgeberin der Leipzig-Autoritarismus-Studie zu zunehmender Ausländerfeindlichkeit in Deutschland.",
    pages: "Anmerkungen (Ref. 252)",
  },
  {
    name: "ifo Institut (Dresden)",
    type: "Forschung",
    context: "Veröffentlichungsort des Artikels von Heisig (2019) über geschlechtsneutrale Erziehung und Bildung.",
    pages: "Anmerkungen (Ref. 92)",
  },
  {
    name: "IU Internationale Hochschule",
    type: "Forschung",
    context: "Kurzstudie Männer in sozialen Berufen im Rahmen der Men in Care-Initiative.",
    pages: "Anmerkungen (Ref. 264)",
  },
  {
    name: "Kinderkanal (KiKa)",
    type: "Medien",
    context: "Studie zu geschlechtergerechter Sprache mit ca. 1000 Kindern; u. a. zu Ansprachegefühlen bei verschiedenen Genderformen.",
    pages: "S. 211–212; Anmerkungen (Ref. 292, 293)",
  },
  {
    name: "klicksafe.de",
    type: "NGO",
    context: "Befragung zu Pornografiekonsum und Sexting bei Kindern; Kinder sehen früher Pornos und senden häufiger Sexting-Nachrichten.",
    pages: "Anmerkungen (Ref. 171, 172)",
  },
  {
    name: "Kösel-Verlag",
    type: "Medien",
    context: "Verlag des vorliegenden Buches sowie von Erziehung prägt Gesinnung (Renz-Polster).",
    pages: "S. 229",
  },
  {
    name: "LovStorm-Plattform",
    type: "NGO",
    context: "Stellt Materialien für Lehrende und junge Menschen zur Gegenrede gegen Hate Speech bereit.",
    pages: "S. 188; Anmerkungen (Ref. 244)",
  },
  {
    name: "re:publica",
    type: "Medien",
    context: "Jährliche Konferenz für Medien und Gesellschaft; 2024 mit Schwerpunkt »Care«; Vorträge von Siegert und #WirfürSchule zitiert.",
    pages: "S. 187, 221",
  },
  {
    name: "Robert Koch Institut (RKI)",
    type: "Forschung",
    context: "KiGGS-Welle 2: Ergebnisse zu Gesundheit von Kindern und Jugendlichen in Deutschland.",
    pages: "Anmerkungen (Ref. 17)",
  },
  {
    name: "Statistisches Bundesamt (Destatis)",
    type: "Politik",
    context: "Zeitverwendungsstudie: unbezahlte Care-Arbeit wird überwiegend von Frauen geleistet; Daten zu Pflegegehältern und Fachkräftemangel.",
    pages: "Anmerkungen (Ref. 183, 185, 186, 187)",
  },
  {
    name: "Stiftung Verantwortungseigentum",
    type: "Wirtschaft",
    context: "Fordert mit 22 Wirtschaftsverbänden (100.000 Mitglieder) rechtliche Grundlage für Verantwortungseigentum; bekannte Beispiele: Ecosia, Bosch, Alnatura.",
    pages: "S. 220; Anmerkungen (Ref. 302, 303)",
  },
  {
    name: "The New Economics Foundation",
    type: "Forschung",
    context: "Britische Denkfabrik; Studie zum sozialen Wert verschiedener Berufe (Lawlor et al.); Erzieher generiert 10 Euro Nutzen pro verdientem Euro.",
    pages: "S. 216–217; Anmerkungen (Ref. 296)",
  },
  {
    name: "University of Portsmouth",
    type: "Forschung",
    context: "Professorin Kaitlyn Regehr; Studie zu frauenfeindlichen TikTok-Inhalten und der Warnung vor »Incel 2.0«.",
    pages: "S. 186–187; Anmerkungen (Ref. 240, 241)",
  },
  {
    name: "Universität Leipzig / Heinrich-Böll-Stiftung",
    type: "Forschung",
    context: "Leipzig-Autoritarismus-Studie zu zunehmender Ausländerfeindlichkeit und autoritären Einstellungen in Deutschland.",
    pages: "Anmerkungen (Ref. 252)",
  },
  {
    name: "Washington Post",
    type: "Medien",
    context: "Datenbank zu Falschaussagen von Donald Trump: 22.000 verifizierte Falschaussagen in Trumps erster Amtszeit.",
    pages: "S. 190",
  },
  {
    name: "Weltgesundheitsorganisation (WHO)",
    type: "Politik",
    context: "Bericht zu Fragen und Antworten zu Gender und Gesundheit.",
    pages: "Anmerkungen (Ref. 8)",
  },
  {
    name: "#WirfürSchule",
    type: "NGO",
    context: "Bewegung, die moderne pädagogische Ansätze in Schulen vermittelt; Vortrag auf re:publica 2024.",
    pages: "S. 221",
  },
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Baby X Studie",
    authors: "Seavy, Carol A.; Katz, Phyllis A.; Rosenberg, Sue",
    year: "1975",
    finding: "Klassisches Experiment zur geschlechtsspezifischen Sozialisation: Erwachsene behandeln dasselbe Baby unterschiedlich, je nach zugewiesenem Geschlecht.",
    pages: "Anmerkungen (Ref. 73)",
  },
  {
    name: "Bromance-Studie (The Bromance: Undergraduate Male Friendships)",
    year: "o. J.",
    finding: "Nachweis der Expansion homosozialer Grenzen bei Männern; enge männliche Freundschaften gewinnen an emotionaler Tiefe.",
    pages: "Anmerkungen (Ref. 161)",
  },
  {
    name: "CarMiA – Caring Masculinities in Action",
    authors: "Dahlmüller, Till et al. / Dissens e.V.",
    year: "2023",
    finding: "EU-finanziertes Projekt; Handreichung für Peer-to-Peer-Workshops zur Stärkung fürsorglicher Männlichkeit bei jungen Männern.",
    pages: "S. 214; Anmerkungen (Ref. 189, 294)",
  },
  {
    name: "Conformity to Masculine Norms Inventory (CMNI)",
    year: "o. J.",
    finding: "Forschungsinstrument zur Messung der Konformität mit männlichen Normen; zeigt, wie stark Männlichkeitsnormen internalisiert werden.",
    pages: "Anmerkungen (Ref. 20)",
  },
  {
    name: "DCU-Studie zu antifeministischen TikTok-Inhalten",
    authors: "Dublin City University",
    year: "2024",
    finding: "Antifeministischer Content auf TikTok ist weit verbreitet und richtet sich gezielt an jugendliche Nutzer.",
    pages: "S. 186; Anmerkungen (Ref. 234)",
  },
  {
    name: "DIW-Studie zum Gender Pay Gap in Deutschland",
    authors: "Deutsches Institut für Wirtschaftsforschung (DIW)",
    year: "o. J.",
    finding: "Deutschland hat einen der höchsten Gender Pay Gaps in Europa.",
    pages: "Anmerkungen (Ref. 180)",
  },
  {
    name: "ECaRoM / Equal Space-Projekt",
    authors: "Dissens e.V.",
    year: "o. J.",
    finding: "Projekt zur Förderung von Gleichberechtigung und fürsorglicher Männlichkeit in pädagogischen Einrichtungen.",
    pages: "Anmerkungen (Ref. 87); S. 13",
  },
  {
    name: "Familienreport 2024",
    authors: "BMFSFJ",
    year: "2024",
    finding: "Aktueller Überblick über Familiensituationen und Gleichstellungsthemen in Deutschland.",
    pages: "Anmerkungen (Ref. 207)",
  },
  {
    name: "Förderung fürsorglicher Männlichkeiten – Handbuch für pädagogische Fachkräfte",
    authors: "Holterman, Scambor (Dissens e.V. / ECaRoM)",
    year: "2023",
    finding: "Praxishandbuch für pädagogische Fachkräfte zur Förderung fürsorglicher Männlichkeit bei Jungen und jungen Männern.",
    pages: "Anmerkungen (Ref. 13, 86)",
  },
  {
    name: "Global Peace Index 2024",
    authors: "Institute for Economics and Peace",
    year: "2024",
    finding: "56 bewaffnete Konflikte weltweit im Jahr 2024 – mehr als je zuvor seit Ende des Zweiten Weltkriegs.",
    pages: "S. 194; Anmerkungen (Ref. 257)",
  },
  {
    name: "Harvard-Studie (80 Jahre Glücksforschung)",
    authors: "Harvard University",
    year: "o. J.",
    finding: "Langzeitstudie über 80 Jahre: »Was der Mensch braucht, ist die Gewissheit, in Beziehung zu sein.« Soziale Bindungen sind der wichtigste Faktor für Lebensglück.",
    pages: "S. 218; Anmerkungen (Ref. 193)",
  },
  {
    name: "Häusliche Gewalt – Bundeslagebild 2023",
    authors: "Bundeskriminalamt (BKA)",
    year: "2023",
    finding: "Aktuelle Lageanalyse zu häuslicher Gewalt in Deutschland; Frauen sind deutlich häufiger Opfer als Männer.",
    pages: "Anmerkungen (Ref. 238)",
  },
  {
    name: "Identity Dissonance-Studie (Erzieher)",
    year: "o. J.",
    finding: "Männliche Erzieher erleben »Identity Dissonance«: Sie müssen ihre Männlichkeit gegenüber der feminisierten Berufsidentität ständig neu verhandeln.",
    pages: "S. 204; Anmerkungen (Ref. 275)",
  },
  {
    name: "Inagaki & Orehek (2017): Benefits of Giving Social Support",
    authors: "Inagaki, T. K.; Orehek, E.",
    year: "2017",
    finding: "Soziale Unterstützung leisten ist nicht nur gut für Empfangende, sondern hat nachweislich positive Effekte auf die psychische und physische Gesundheit der Gebenden.",
    pages: "Anmerkungen (Ref. 192, 200)",
  },
  {
    name: "KiGGS-Welle 2",
    authors: "Robert Koch Institut (RKI)",
    year: "2018",
    finding: "Repräsentative Gesundheitsstudie für Kinder und Jugendliche in Deutschland; Daten zu Gesundheitsverhalten und psychischer Gesundheit.",
    pages: "Anmerkungen (Ref. 17)",
  },
  {
    name: "KiKa-Studie zu geschlechtergerechter Sprache bei Kindern",
    authors: "Kinderkanal (KiKa)",
    year: "o. J.",
    finding: "92% der Kinder fühlen sich bei »Schülerinnen und Schüler« angesprochen, 68% bei »Schüler«, nur 60% bei »Schüler*innen«.",
    pages: "S. 211–212; Anmerkungen (Ref. 292, 293)",
  },
  {
    name: "Klicksafe-Befragung zu Pornografie bei Kindern",
    authors: "klicksafe.de",
    year: "o. J.",
    finding: "Kinder sehen immer früher Pornografie und senden häufiger Sexting-Nachrichten; Medienkompetenz wird immer wichtiger.",
    pages: "Anmerkungen (Ref. 171, 172)",
  },
  {
    name: "Krankenpfleger-Studie (männliche Pflegekräfte, Großbritannien)",
    year: "o. J.",
    finding: "Männliche Krankenpfleger betonen ihre Männlichkeit durch Sprache und Körperhaltung, um der feminisierten Berufswahrnehmung entgegenzuwirken.",
    pages: "S. 203; Anmerkungen (Ref. 273)",
  },
  {
    name: "Leja & Schwarzenbacher (2022): Fürsorge in Freundschaften von männlichen Jugendlichen",
    authors: "Leja, Kevin; Schwarzenbacher, Iris",
    year: "2022",
    finding: "Männliche Jugendliche pflegen durchaus Fürsorge in Freundschaften, allerdings auf spezifische und oft unsichtbare Weisen.",
    pages: "Anmerkungen (Ref. 160)",
  },
  {
    name: "Leipzig-Autoritarismus-Studie",
    authors: "Heinrich-Böll-Stiftung / Universität Leipzig",
    year: "o. J.",
    finding: "Zunehmende Ausländerfeindlichkeit und autoritäre Einstellungen in der deutschen Bevölkerung.",
    pages: "Anmerkungen (Ref. 252)",
  },
  {
    name: "Männerperspektiven-Studie",
    authors: "maennerperspektiven.de",
    year: "o. J.",
    finding: "Männer wollen Gleichberechtigung und befürworten grundsätzlich Gleichstellungspolitik, fühlen sich aber von konkreter Gleichstellungspolitik enttäuscht.",
    pages: "Anmerkungen (Ref. 285)",
  },
  {
    name: "Men in Care-Studie",
    authors: "BMFSFJ / IU Internationale Hochschule",
    year: "2024",
    finding: "65% der Jugendlichen interessieren sich für soziale und pädagogische Berufe, aber Stigmatisierungsangst hält viele junge Männer davon ab; 90% der Jugendlichen nennen Eltern als wichtigste Informationsquelle bei der Berufswahl.",
    pages: "S. 202–204; Anmerkungen (Ref. 264, 269)",
  },
  {
    name: "New Economics Foundation-Studie (Job-Mythen)",
    authors: "Lawlor, Eilis u. a. / The New Economics Foundation",
    year: "o. J.",
    finding: "Investmentbanker verursacht mit jedem verdienten Euro 8 Euro gesellschaftlichen Schaden; ein Erzieher generiert dagegen 10 Euro Nutzen für die Gemeinschaft pro verdientem Euro.",
    pages: "S. 216–217; Anmerkungen (Ref. 296)",
  },
  {
    name: "TikTok / University of Portsmouth-Studie (Regehr)",
    authors: "Regehr, Kaitlyn (University of Portsmouth)",
    year: "o. J.",
    finding: "Frauenfeindliche Inhalte auf TikTok haben sich von expliziten »Incel 1.0«-Räumen zu mainstreamfähigen »Incel 2.0«-Formaten gewandelt.",
    pages: "S. 186–187; Anmerkungen (Ref. 240, 241)",
  },
  {
    name: "Thoits & Hewitt (2001): Volunteer Work and Well-Being",
    authors: "Thoits, P. A.; Hewitt, L. N.",
    year: "2001",
    finding: "Ehrenamtliche Arbeit hat nachweislich positive Auswirkungen auf das Wohlbefinden der Freiwilligen.",
    pages: "Anmerkungen (Ref. 304)",
  },
  {
    name: "Vaeterreport 2023",
    authors: "BMFSFJ",
    year: "2023",
    finding: "Aktueller Bericht zu Vaterschaft und Elternzeit in Deutschland; Väter wollen mehr Zeit mit Kindern, scheitern aber an strukturellen Hürden.",
    pages: "Anmerkungen (Ref. 3, 209)",
  },
  {
    name: "Washington Post Datenbank zu Trump-Lügen",
    authors: "Washington Post",
    year: "o. J.",
    finding: "Donald Trump tätigte in seiner ersten Amtszeit 22.000 verifizierte Falschaussagen.",
    pages: "S. 190",
  },
  {
    name: "WHO-Bericht zu Gender und Gesundheit",
    authors: "Weltgesundheitsorganisation (WHO)",
    year: "o. J.",
    finding: "Geschlecht ist ein zentraler Determinant von Gesundheit; Männlichkeitsnormen schaden der Gesundheit von Männern und Jungen.",
    pages: "Anmerkungen (Ref. 8)",
  },
  {
    name: "YouGov-Studie zu Männern und Emotionen",
    authors: "YouGov",
    year: "2023",
    finding: "US-Umfrage 2023: Viele Männer haben keine Freunde, denen sie emotionale Probleme anvertrauen können.",
    pages: "Anmerkungen (Ref. 96)",
  },
  {
    name: "Zeitverwendungsstudie",
    authors: "Statistisches Bundesamt (Destatis)",
    year: "o. J.",
    finding: "Unbezahlte Care-Arbeit wird in Deutschland überwiegend von Frauen geleistet; strukturelle Ungleichheit in der Hausarbeitsverteilung bleibt bestehen.",
    pages: "Anmerkungen (Ref. 183, 185, 186, 187)",
  },
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
  title: "Jungs von heute, Männer von morgen",
  subtitle: "Wie wir unsere Söhne stark und fürsorgreich aufziehen",
  author: "Lena Greiner",
  year: 2024,
  publisher: "Kösel-Verlag, München",
  isbn: "o. A.",
  description:
    "Ein Sachbuch über männliche Sozialisation, toxische Männlichkeitsnormen und wie Eltern, Pädagogen und die Gesellschaft Jungen zu fürsorgeorientierten, emotional kompetenten Männern erziehen können.",
};
