// mse-references-data.ts
// Structured reference data for Björn Süfke, "Männerseelen: Ein psychologischer Reiseführer" (Gütersloher, 2010)

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
  {
    name: "Süfke, Björn",
    field: "Klinische Psychologie / Männerberatung",
    works: [
      { title: "Männerseelen: Ein psychologischer Reiseführer", type: "book" as const, year: 2010, publisher: "Gütersloher Verlagshaus" },
      { title: "Den Mann zur Sprache bringen. Psychotherapie mit Männern", type: "book" as const, year: 2004, publisher: "dgvt-Verlag Tübingen", coAuthors: ["Wolfgang Neumann"] },
      { title: "Psychotherapeutische Arbeit mit Männern in einer Männerberatungsstelle", type: "article" as const, year: 2005, publisher: "dgvt-Verlag (in Neumann/Süfke u.a., Wi(e)der die therapeutische Ohnmacht)" }
    ],
    pages: "Autor des gesamten Buches",
    context: "Diplom-Psychologe, Psychotherapeut in der Männerberatung Bielefeld. Einer der profiliertesten deutschsprachigen klinischen Experten für Psychotherapie mit Männern. Zusammen mit Wolfgang Neumann Verfasser des Standardwerks „Den Mann zur Sprache bringen” (2004). Männerseelen ist sein erstes allgemein zugängliches populäres Sachbuch und arbeitet den Stoff aus über einem Jahrzehnt klinischer Praxis für ein breiteres Publikum auf.",
    keyFigure: true
  },
  {
    name: "Neumann, Wolfgang",
    field: "Klinische Psychologie / Männerberatung",
    works: [
      { title: "Den Mann zur Sprache bringen. Psychotherapie mit Männern", type: "book" as const, year: 2004, publisher: "dgvt-Verlag Tübingen", coAuthors: ["Björn Süfke"] },
      { title: "Wi(e)der die therapeutische Ohmacht. Ressourcenorientierte Psychotherapie in schwierigen Fällen", type: "book" as const, year: 2005, publisher: "dgvt-Verlag Tübingen", coAuthors: ["Björn Süfke", "Stefan Reinisch", "Anna Julia Wittmann", "Jens Flassbeck"] }
    ],
    pages: "Durchgängig (Fallbeispiele aus gemeinsamer Arbeit)",
    context: "Langjähriger Kollege Süfkes und Mitbegründer des deutschsprachigen Ansatzes der ressourcenorientierten Männertherapie. Die gemeinsame Arbeit mit Süfke ist die empirisch-praktische Basis für Männerseelen.",
    keyFigure: true
  },

  // ---- Theoretische Grundlagen: Humanistische und Neuropsychotherapie ----
  {
    name: "Rogers, Carl R.",
    field: "Humanistische Psychologie",
    works: [
      { title: "Client-centered Therapy: Its Current Practice, Implications, and Theory", type: "book" as const, year: 1951, publisher: "Houghton Mifflin, Boston" },
      { title: "Entwicklung der Persönlichkeit. Psychotherapie aus der Sicht eines Therapeuten (13. Auflage)", type: "book" as const, year: 2000, publisher: "Klett-Cotta, Stuttgart" }
    ],
    pages: "Kap. 1-2 (theoretische Grundlage)",
    context: "Begründer der klientenzentrierten Psychotherapie. Süfkes Grundbegriff der „organismischen Erfahrung” (Körperempfindungen, Gefühle, Bedürfnisse als unmittelbare Erfahrung des Organismus) ist direkt aus Rogers 1951 übernommen. Das humanistische Menschenbild — Kongruenz als Kern psychischer Gesundheit — trägt das gesamte Buch.",
    keyFigure: true
  },
  {
    name: "Grawe, Klaus",
    field: "Klinische Psychologie / Neuropsychotherapie",
    works: [
      { title: "Neuropsychotherapie", type: "book" as const, year: 2004, publisher: "Hogrefe, Göttingen" }
    ],
    pages: "Kap. 1-2 (theoretische Grundlage)",
    context: "Verfasser des Konsistenzmodells der Psychotherapie, das humanistische und kognitiv-verhaltenstherapeutische Tradition integriert. Süfkes zweite theoretische Hauptquelle neben Rogers. Das Konsistenzmodell (Kongruenz zwischen motivationalen Zielen und tatsächlichen Erlebensinhalten) ist empirisch und metaanalytisch fundiert.",
    keyFigure: true
  },

  // ---- Psychoanalytische Tradition ----
  {
    name: "Chodorow, Nancy",
    field: "Psychoanalyse / Feministische Theorie",
    works: [
      { title: "Das Erbe der Mütter. Psychoanalyse und Soziologie der Geschlechter", type: "book" as const, year: 1985, publisher: "Frauenoffensive, München" }
    ],
    pages: "Kap. 3 (Umweg-Identifikation)",
    context: "US-amerikanische psychoanalytisch-feministische Theoretikerin, deren Konzept der asymmetrischen Identitätsentwicklung von Jungen (negative Abgrenzung von der Mutter als Hauptbezugsperson) die theoretische Grundlage für Süfkes Prägung „Nicht-Nicht-Mann” bildet. Eine der zentralen Referenzen des Buches.",
    keyFigure: true
  },
  {
    name: "Real, Terrence",
    field: "Klinische Psychologie / Paartherapie",
    works: [
      { title: "Mir geht's doch gut. Männer in der Midlife-Depression und was ihnen helfen kann (I Don\\'t Want to Talk About It, 1997)", type: "book" as const, year: 1999, publisher: "Scherz, Bern" }
    ],
    pages: "Kap. 7 (verdeckte männliche Depression)",
    context: "US-amerikanischer Familientherapeut, prägender Autor des Konzepts der „covert/externalized male depression”. Süfke übernimmt Reals Modell der unterdiagnostizierten, externalisiert gelebten männlichen Depression direkt. Einer der wenigen explizit zitierten klinischen Kronzeugen.",
    keyFigure: true
  },

  // ---- Deutsche Männerforschung ----
  {
    name: "Böhnisch, Lothar",
    field: "Sozialpädagogik / Soziologie",
    works: [
      { title: "Viele Männer sind im Mann", type: "book" as const, year: 2006, publisher: "Edition Roesner, Maria Enzersdorf" },
      { title: "Männliche Sozialisation", type: "book" as const, year: 1997, publisher: "Juventa, Weinheim", coAuthors: ["Reinhard Winter"] }
    ],
    pages: "Kap. 4, 7, Ausblick",
    context: "Süfkes wichtigster deutschsprachiger Bezugspunkt. Süfke übernimmt den Begriff der Externalisierung direkt von Böhnisch und integriert sein Bild der „Karriereleiter an der falschen Wand” und seinen normativen Horizont des Wegs nach innen statt zur Frau als Spiegel. Im Ausblick expliziter Rückbezug.",
    keyFigure: true
  },
  {
    name: "Winter, Reinhard",
    field: "Sozialpädagogik / Jungenarbeit",
    works: [
      { title: "Männliche Sozialisation", type: "book" as const, year: 1997, publisher: "Juventa, Weinheim", coAuthors: ["Lothar Böhnisch"] }
    ],
    pages: "Kap. 4 (gemeinsame Referenz mit Böhnisch)",
    context: "Langjähriger Kooperationspartner Böhnischs, Verfasser der ersten systematischen deutschsprachigen Einführung zur männlichen Sozialisation (1997). Grundlage für Süfkes strukturell-soziologische Einordnung."
  },

  // ---- Geschlechterunterschiede und Essentialismus-Debatte ----
  {
    name: "Baron-Cohen, Simon",
    field: "Kognitive Neurowissenschaft",
    works: [
      { title: "Vom ersten Tag an anders. Das weibliche und das männliche Gehirn", type: "book" as const, year: 2004, publisher: "Patmos, Düsseldorf" }
    ],
    pages: "Kap. 3, Kap. 7 (Endnoten 17, 30)",
    context: "Britischer Neuropsychologe, Verfasser der E-S-Theorie (Empathizing-Systemizing) und der Theorie des „extreme male brain” bei Autismus. Süfke zitiert Baron-Cohen mehrfach, nimmt aber keine starke Position zum Biologismus ein — er nutzt ihn als eine von vielen Quellen, ohne die Kausalkette zu übernehmen."
  },
  {
    name: "Bischof-Köhler, Doris",
    field: "Soziobiologisch orientierte Psychologie",
    works: [
      { title: "Von Natur aus anders. Die Psychologie der Geschlechterunterschiede", type: "book" as const, year: 2006, publisher: "Kohlhammer, Stuttgart" }
    ],
    pages: "Ausblick, S. 171-180",
    context: "Deutsche soziobiologisch orientierte Psychologin. Süfke zitiert sie im Ausblick positiv für das Argument, dass biologische Veranlagungen das Lernen bestimmter Verhaltensweisen zwar erleichtern, aber keine notwendige Voraussetzung sind. Damit rechtfertigt Süfke sein Androgynie-Programm — Lernen auch dann, wenn die Grundanlage nicht vorhanden ist."
  },
  {
    name: "Gilmore, David D.",
    field: "Kulturanthropologie",
    works: [
      { title: "Mythos Mann. Rollen, Rituale, Leitbilder (Manhood in the Making)", type: "book" as const, year: 1991, publisher: "Artemis & Winkler, München" }
    ],
    pages: "Kap. 7 (Endnoten 13, 19)",
    context: "US-amerikanischer Kulturanthropologe, der kulturübergreifende Männlichkeits-Initiationen untersucht. Süfke zitiert ihn für die These, dass Männlichkeit kulturübergreifend als „gemachte”, nie selbstverständlich gegebene Kategorie organisiert ist — Initiation statt biologischer Automatik."
  },

  // ---- Narzissmus und Männlichkeit ----
  {
    name: "Gratch, Alon",
    field: "Psychoanalyse",
    works: [
      { title: "Wenn Männer reden könnten und was sie fühlen, ohne es zu sagen (If Men Could Talk)", type: "book" as const, year: 2004, publisher: "Knaur, München" }
    ],
    pages: "Kap. 7 (Endnoten 14, 15, 18, 21, 27)",
    context: "US-amerikanischer Psychoanalytiker. Süfke empfiehlt Gratch ausdrücklich für die Analyse männlichen Narzissmus aus psychoanalytischer Sicht. Mehrfach in den Endnoten verwendet."
  },
  {
    name: "Sachse, Rainer",
    field: "Klärungsorientierte Psychotherapie",
    works: [
      { title: "Selbstverliebt, aber richtig. Paradoxe Ratschläge für das Leben mit Narzissten", type: "book" as const, year: 2004, publisher: "Klett-Cotta, Stuttgart" },
      { title: "Klärungsorientierte Psychotherapie", type: "book" as const, year: 2002, publisher: "Hogrefe, Göttingen" }
    ],
    pages: "Kap. 7 (Endnote 14)",
    context: "Deutscher klinischer Psychologe. Süfke verweist auf Sachses allgemeinverständliche Aufbereitung des Narzissmus-Themas."
  },

  // ---- Männliche Sexualität ----
  {
    name: "Zilbergeld, Bernie",
    field: "Sexualtherapie",
    works: [
      { title: "Die neue Sexualität der Männer (The New Male Sexuality)", type: "book" as const, year: 2000, publisher: "dgvt-Verlag, Tübingen" }
    ],
    pages: "Kap. 7 (Endnote 31)",
    context: "US-amerikanischer Sexualtherapeut. Süfke empfiehlt Zilbergelds Buch als einen der beiden Klassiker zur männlichen Sexualität. Zilbergelds pragmatische Entmythologisierung männlicher Sex-Mythen ist für Süfkes Kapitel über Lust prägend."
  },
  {
    name: "Schnack, Dieter",
    field: "Männerforschung / Jungenarbeit",
    works: [
      { title: "Die Prinzenrolle. Über die männliche Sexualität", type: "book" as const, year: 1995, publisher: "Rowohlt, Reinbek", coAuthors: ["Rainer Neutzling"] }
    ],
    pages: "Kap. 7 (Endnote 32)",
    context: "Mit Neutzling verfasst Schnack das zweite von Süfke empfohlene Standardwerk zur männlichen Sexualität. Humorvoll-einfühlsame Darstellung der Entwicklung des Jungen zum Mann."
  },
  {
    name: "Neutzling, Rainer",
    field: "Männerforschung / Jungenarbeit",
    works: [
      { title: "Die Prinzenrolle. Über die männliche Sexualität", type: "book" as const, year: 1995, publisher: "Rowohlt, Reinbek", coAuthors: ["Dieter Schnack"] }
    ],
    pages: "Kap. 7 (Endnote 32)",
    context: "Mit Schnack Verfasser der „Prinzenrolle”."
  },

  // ---- Dialektisch-Behaviorale Therapie ----
  {
    name: "Linehan, Marsha M.",
    field: "Klinische Psychologie / Borderline-Therapie",
    works: [
      { title: "Dialektisch-Behaviorale Therapie der Borderline-Persönlichkeitsstörung", type: "book" as const, year: 1996, publisher: "CIP-Medien, München" }
    ],
    pages: "Ausblick (Endnote 24)",
    context: "US-amerikanische Psychologin, Begründerin der Dialektisch-Behavioralen Therapie (DBT). Süfke verweist auf Linehan im Kontext des Prinzips, dass Wertschätzung des Vorhandenen und Förderung des Fehlenden parallel gehen müssen — ein DBT-Grundprinzip (radical acceptance + change), das Süfke auf die Männertherapie überträgt."
  },

  // ---- Literarische und musikalische Quellen ----
  {
    name: "Hacke, Axel",
    field: "Journalismus / Literatur",
    works: [
      { title: "Das Beste aus meinem Liebesleben", type: "book" as const, year: 2006, publisher: "Antje Kunstmann, München" }
    ],
    pages: "Kap. 7 (Endnote 10)",
    context: "Deutscher Kolumnist und Schriftsteller. Süfke zitiert aus Hackes humorvollen Beobachtungen zum Liebesleben."
  },
  {
    name: "Hornby, Nick",
    field: "Literatur",
    works: [
      { title: "About a Boy", type: "book" as const, year: 1999, publisher: "Indigo, London" }
    ],
    pages: "Literaturverzeichnis",
    context: "Britischer Romancier, in Süfkes Literaturliste als illustrierende populärkulturelle Referenz."
  },
  {
    name: "Element of Crime (Sven Regener)",
    field: "Musik",
    works: [
      { title: "Die schönen Rosen (Album, Song: Wer ich wirklich bin)", type: "other" as const, year: 1996, publisher: "Motor Music" }
    ],
    pages: "Kap. 2 (Endnote 8)",
    context: "Deutsche Rockband. Süfke zitiert aus dem Song „Wer ich wirklich bin” (Sven Regener) als literarisches Motto für das 4-Etappen-Modell der männlichen Selbstfindung."
  },
  {
    name: "Louisan, Annett",
    field: "Musik",
    works: [
      { title: "Unausgesprochen (Album, Song: Ausgesprochen unausgesprochen)", type: "other" as const, year: 2005, publisher: "105Music" }
    ],
    pages: "Kap. 7 (Endnote 29)",
    context: "Deutsche Chansonnière. Süfke zitiert aus ihrem Song „Ausgesprochen unausgesprochen” — thematisch passend zur Kommunikationsproblematik in Partnerschaften."
  }
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "Männerberatung Bielefeld",
    type: "Beratungsstelle",
    context: "Süfkes langjährige praktische Heimat. Eine der etabliertesten deutschen Männerberatungsstellen. Die dort gesammelten klinischen Erfahrungen bilden die empirische Grundlage für Männerseelen und für das Vorgängerwerk „Den Mann zur Sprache bringen” (Neumann/Süfke 2004).",
    pages: "Author affiliation, durchgängige Fallvignetten-Grundlage"
  },
  {
    name: "dgvt-Verlag (Deutsche Gesellschaft für Verhaltenstherapie)",
    type: "Fachverlag",
    context: "Verlag der beiden akademisch-fachlichen Vorgängerwerke von Neumann/Süfke (2004, 2005). Wichtigster deutschsprachiger Verlag für ressourcenorientierte Psychotherapieliteratur.",
    pages: "Literaturverzeichnis"
  },
  {
    name: "Gütersloher Verlagshaus",
    type: "Publikumsverlag",
    context: "Süfkes Verlag für Männerseelen — erster Schritt aus der akademisch-fachlichen dgvt-Schiene ins breitere Sachbuchpublikum.",
    pages: "Title page"
  },
  {
    name: "Stone Center (Wellesley College) — Relationaltheorie",
    type: "Forschungszentrum",
    context: "Obwohl Süfke das Stone Center nicht direkt zitiert, operiert er in derselben psychoanalytisch-relationalen Tradition, die über Chodorow in sein Buch einfließt. Indirekte theoretische Linie.",
    pages: "Implicit via Chodorow"
  },
  {
    name: "Humanistisch-psychotherapeutische Tradition (Rogers-Schule)",
    type: "Therapieschule",
    context: "Süfkes therapeutische Heimat. Der Buchtitel („Reiseführer”, „Einheimischen-Kontakt”) und die therapeutische Grundhaltung (Kongruenz, Akzeptanz, Empathie) stammen direkt aus dieser Tradition.",
    pages: "Durchgängig"
  },
  {
    name: "Deutsche Männerberatungsszene (BMG, Männerbüros, Jungenarbeit)",
    type: "Praxisnetzwerk",
    context: "Das professionelle Praxisnetzwerk, in dem Süfke arbeitet und publiziert. Süfke ist einer der sichtbarsten Autoren dieser Szene.",
    pages: "Implicit throughout"
  }
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Süfkes klinische Praxis (Männerberatung Bielefeld)",
    authors: "Björn Süfke, Wolfgang Neumann u. a.",
    year: "ca. 1998-2010",
    finding: "Über ein Jahrzehnt klinischer Praxis in einer deutschen Männerberatungsstelle ist die empirische Grundlage für Männerseelen. Süfke arbeitet durchgängig mit Fallvignetten (alle anonymisiert und verfremdet, teils aus mehreren Therapien kombiniert) als Illustrationsquelle. Die Vignetten sind keine kontrollierten Studien, sondern didaktische Zuspitzungen klinischer Muster.",
    pages: "Durchgängig"
  },
  {
    name: "Alexithymie-Forschung (Toronto Alexithymia Scale, Normative Male Alexithymia)",
    authors: "Sifneos (1973), Taylor/Bagby/Parker, Levant et al.",
    year: "1973-heute",
    finding: "Quantitative Psychometrie der Alexithymie. Meta-analytisch konsistent höhere Alexithymie-Werte bei Männern im Vergleich zu Frauen. Die „Normative Male Alexithymia Scale” (Levant u.a.) operationalisiert spezifisch männliche Emotionsverbalisierungsdefizite. Unterstützt Süfkes zentrale Phänomen-Behauptung empirisch.",
    pages: "Kap. 3 (implizit)"
  },
  {
    name: "Terrence Real — Male Depression / covert depression",
    authors: "Terrence Real",
    year: "1997/1999",
    finding: "Reals klinisches Modell der verdeckten/externalisierten männlichen Depression: Männer zeigen Depression häufig nicht als klassische Traurigkeit/Antriebslosigkeit, sondern als Gereiztheit, Wut, Workaholismus, Alkoholismus. Wird deshalb systematisch unterdiagnostiziert. Empirisch gestützt durch die Diskrepanz zwischen hohen männlichen Suizidraten und niedrigen offiziellen Depressionsdiagnose-Raten.",
    pages: "Kap. 7"
  },
  {
    name: "WHO-/Statistisches-Bundesamt-Suizidraten",
    authors: "WHO, nationale Statistikbehörden",
    year: "laufend",
    finding: "Die männliche Suizidrate liegt in westlichen Ländern konsistent bei 3-4x der weiblichen Rate, während offizielle Depressionsdiagnose-Raten bei Männern niedriger liegen. Diese Diskrepanz ist der epidemiologische Kern der These der verdeckten männlichen Depression.",
    pages: "Kap. 7 (implizit)"
  },
  {
    name: "Condry & Condry „Baby X”-Paradigma",
    authors: "John Condry, Sandra Condry u. Nachfolger",
    year: "1976-",
    finding: "Experimentelles Paradigma: Ein Säugling wird Beobachter:innen einmal als „Junge”, einmal als „Mädchen” präsentiert. Gleiches Verhalten wird systematisch unterschiedlich interpretiert (bei Jungen eher Ärger, bei Mädchen eher Trauer/Angst). Grundlage für die Gendering-Forschung zur differenziellen Gefühlsbenennung.",
    pages: "Kap. 3"
  },
  {
    name: "Böhnisch — Externalisierung und Bedürftigkeit",
    authors: "Lothar Böhnisch",
    year: "2003, 2006, 2013",
    finding: "Böhnischs soziologisch-sozialpädagogisches Konzept der Externalisierung (Außenorientierung, Abspaltung innerer Zustände) ist von Süfke direkt als Grundbegriff übernommen und klinisch operationalisiert. Süfkes Kapitel 4 ist die klinische Ausbuchstabierung von Böhnischs Theorie.",
    pages: "Kap. 4"
  },
  {
    name: "Chodorow — Asymmetrische Identitätsentwicklung",
    authors: "Nancy Chodorow",
    year: "1978 (engl.), 1985 (dt.)",
    finding: "Psychoanalytisch-feministische Theorie der asymmetrischen Geschlechtsidentitätsentwicklung: Jungen müssen sich zur Ausbildung männlicher Identität von ihrer primären Bezugsperson (Mutter) abgrenzen — daraus entsteht Süfkes Prägung „Nicht-Nicht-Mann” / Umweg-Identifikation.",
    pages: "Kap. 3"
  },
  {
    name: "Rogers — Organismische Erfahrung und Kongruenz",
    authors: "Carl R. Rogers",
    year: "1951, 2000",
    finding: "Klientenzentrierte Psychotherapie und humanistisches Menschenbild: Psychische Gesundheit gründet in der Kongruenz zwischen organismischer Erfahrung (Körper, Gefühl, Bedürfnis) und Selbstkonzept. Süfkes theoretischer Eckpfeiler.",
    pages: "Kap. 1-2"
  },
  {
    name: "Grawe — Konsistenzmodell der Psychotherapie",
    authors: "Klaus Grawe",
    year: "2004",
    finding: "Neuropsychotherapeutische Integration humanistischer und kognitiv-verhaltenstherapeutischer Ansätze. Das Konsistenzmodell als empirisch-metaanalytisch gestützte Neufassung der Rogers-Tradition. Süfkes zweite theoretische Hauptstütze.",
    pages: "Kap. 1-2"
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
  title: "Männerseelen",
  subtitle: "Ein psychologischer Reiseführer",
  author: "Björn Süfke",
  publisher: "Gütersloher Verlagshaus",
  year: 2010,
  description:
    "Der klinisch-phänomenologische Spiegel zu Lothar Böhnisch' „Männliche Sozialisation”. Süfke ist klinischer Psychologe der Männerberatung Bielefeld und schreibt aus über einem Jahrzehnt Therapiepraxis. Wo Böhnisch die Makro-Mechanik der männlichen Sozialisation erklärt (Externalisierung, Dominanz-Verfügbarkeits-Dialektik, Bewältigungsparadigma), zeigt Süfke die resultierende Innenwelt — oder eher die abwesende Innenwelt — im Therapiezimmer. Die Reiseführer-Metapher (Mann als fremdes Land mit Geschichte, Sitten, Highlights und Einheimischen) ist keine Verzierung, sondern strukturgebend: Der Mann ist dem Mann selbst fremd geworden. " +
    "Zentrale Konzepte: Alexithymie (systematische männliche Gefühlsblindheit); mangelnde Gefühls-Spiegelung bei Jungen durch Eltern und Umgebung; Umweg-Identifikation / „Nicht-Nicht-Mann” (Chodorow); Identitätslüge (Fassade ≠ Innenwelt); Konzeptverwirrung (Verwechslung von Gefühl, Gedanke und Handlung); Externalisierung (Böhnisch); Hilflosigkeit als verdecktes Kerngefühl unter praktisch allen männlichen Symptomen; verdeckte männliche Depression (Terrence Real); Impotenz als Metapher der Männlichkeitskrise; die 4 Etappen des „Wegs zu sich selbst” (Wahrnehmen → Akzeptieren → Mitteilen → Umsetzen); die 4 Lösungsetappen in der Männertherapie (Hilflosigkeit erkennen → Öffnen → Problemanalyse → Fühlen und Wollen); „liebevolle Konfrontation” als therapeutische Grundmethode; männliche Stärken (Humor/Selbstironie, Distanzierung, Rationalität, Selbstbehauptung) als therapeutische Ressourcen; „Sehnsucht nach sich selbst” als normatives Ziel. " +
    "Theoretische Heimat: humanistisch-neuropsychotherapeutisch (Rogers, Grawe) kombiniert mit psychoanalytisch-feministischer Geschlechtstheorie (Chodorow) und der deutschen sozialpädagogisch-soziologischen Männerforschung (Böhnisch). Das Buch ist das populäre Pendant zu Süfkes und Neumanns fachlichem Hauptwerk „Den Mann zur Sprache bringen” (2004) und arbeitet dessen Inhalt für ein breiteres Publikum auf."
};
