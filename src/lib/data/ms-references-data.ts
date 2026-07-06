// ms-references-data.ts
// Structured reference data for Lothar Böhnisch, "Männliche Sozialisation" (Beltz Juventa, 2. Auflage 2013)

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
    name: "Böhnisch, Lothar",
    field: "Sozialpädagogik / Soziologie",
    works: [
      { title: "Männliche Sozialisation: Eine Einführung (2., überarbeitete Auflage)", type: "book" as const, year: 2013, publisher: "Beltz Juventa" },
      { title: "Die Entgrenzung der Männlichkeit", type: "book" as const, year: 2003, publisher: "Leske + Budrich" },
      { title: "Sozialpädagogik der Lebensalter", type: "book" as const, year: 2012, publisher: "Beltz Juventa" },
      { title: "Abweichendes Verhalten", type: "book" as const, year: 2010, publisher: "Beltz Juventa" },
      { title: "Männliche Sozialisation. Bewältigungsprobleme männlicher Geschlechtsidentität im Lebenslauf", type: "book" as const, year: 1993, publisher: "Juventa", coAuthors: ["Reinhard Winter"] },
      { title: "Soziale Arbeit und Geschlecht", type: "book" as const, year: 2002, publisher: "Juventa", coAuthors: ["Heide Funk"] },
      { title: "Sozialisation und Bewältigung", type: "book" as const, year: 2009, publisher: "Beltz Juventa", coAuthors: ["Karl Lenz", "Wolfgang Schröer"] },
      { title: "Sozialpolitik und Soziale Arbeit", type: "book" as const, year: 2012, publisher: "Beltz Juventa", coAuthors: ["Wolfgang Schröer"] }
    ],
    pages: "Autor des gesamten Buches",
    context: "Lothar Böhnisch, Dr. rer. soc. habil., bis 2009 Professor für Sozialpädagogik und Sozialisation der Lebensalter an der TU Dresden, lehrt Soziologie an der Freien Universität Bozen/Bolzano. Einer der zentralen deutschsprachigen Soziologen männlicher Sozialisation, prägender Vertreter der sozialpädagogischen Lebensbewältigungstheorie. Hat mit Reinhard Winter schon 1993 die erste systematische Einführung zur männlichen Sozialisation im deutschsprachigen Raum vorgelegt. Herausgeber der Reihe 'Geschlechterforschung' bei Beltz Juventa (mit Heide Funk und Karl Lenz).",
    keyFigure: true
  },
  {
    name: "Wedel, Alexander",
    field: "Sozialwissenschaften / Körpersoziologie",
    works: [
      { title: "Männlichkeit und Körperlichkeit (Gastbeitrag in Böhnisch, Männliche Sozialisation)", type: "article" as const, year: 2013, publisher: "Beltz Juventa" }
    ],
    pages: "Ch. 1.5, S. 37-51",
    context: "Sozialwissenschaftler und Projektmitarbeiter am Institut für Sozialpädagogik, Sozialarbeit und Wohlfahrtswissenschaften der TU Dresden. Verfasser des Gastbeitrags zur Körperlichkeit männlicher Sozialisation."
  },
  {
    name: "Winter, Reinhard",
    field: "Sozialpädagogik / Jungenarbeit",
    works: [
      { title: "Jungen brauchen Helden!? (Gastbeitrag in Böhnisch 2013)", type: "article" as const, year: 2013, publisher: "Beltz Juventa" },
      { title: "Männliche Sozialisation (erste Auflage)", type: "book" as const, year: 1993, publisher: "Juventa", coAuthors: ["Lothar Böhnisch"] },
      { title: "Männer", type: "book" as const, year: 2002, publisher: "Beltz Juventa", coAuthors: ["Benedikt Sturzenhecker"] }
    ],
    pages: "Ch. 2.12, S. 158-170",
    context: "Pädagogische Männer- und Jungenarbeit. Seit Jahrzehnten Kooperationspartner Böhnischs. Sein Modell des 'balancierten Junge- und Mann-Seins' ist in Kapitel 2.13 eingebunden und strukturiert den normativen Horizont des Buches.",
    keyFigure: true
  },

  // ---- Connell-Tradition / Hegemoniale Männlichkeit ----
  {
    name: "Connell, Raewyn (R. W.)",
    field: "Soziologie / Gender Studies",
    works: [
      { title: "Masculinities", type: "book" as const, year: 1995, publisher: "University of California Press" },
      { title: "Der gemachte Mann (deutsche Übersetzung)", type: "book" as const, year: 1999, publisher: "Leske + Budrich" },
      { title: "Handbook of Studies on Men and Masculinities", type: "book" as const, year: 2004, publisher: "Sage", coAuthors: ["Jeff Hearn", "Michael Kimmel"] },
      { title: "Gender and Power", type: "book" as const, year: 1987, publisher: "Stanford University Press" },
      { title: "Im Inneren des gläsernen Turms", type: "article" as const, year: 2010 }
    ],
    pages: "Throughout. Central references: Ch. 1.3, S. 30-33",
    context: "Australische Soziologin und Begründerin des Konzepts der hegemonialen Männlichkeit. Böhnischs zentrale theoretische Bezugsperson. Er übernimmt das Dreiachsen-Modell (politische Macht, Arbeitsbeziehungen, emotionale Beziehungen) und die 'patriarchale Dividende', erweitert Connells Konzept aber um die Dialektik von Dominanz und Verfügbarkeit.",
    keyFigure: true
  },
  {
    name: "Meuser, Michael",
    field: "Soziologie / Männerforschung",
    works: [
      { title: "Geschlecht und Männlichkeit (2. Auflage)", type: "book" as const, year: 2006, publisher: "VS Verlag" },
      { title: "Geschlecht, Macht, Männlichkeit", type: "book" as const, year: 2010, publisher: "Springer VS" },
      { title: "Männer und Gender", type: "book" as const, year: 2012 },
      { title: "Strukturübungen. Peergroups, Risikohandeln und die Aneignung des männlichen Habitus", type: "article" as const, year: 2006 }
    ],
    pages: "Ch. 1.3, 1.6, 2.9, 5.4, 5.6, 5.7",
    context: "Einer der zentralen deutschsprachigen Soziologen der Männerforschung. Sein Konzept der 'Strukturübungen' für männliche Peergroups und sein Blick auf hegemoniale Männlichkeit sind zentrale Referenzen für Böhnisch. Meuser hat auch den Begriff des 'abstract worker' für die deutsche Männerforschung adaptiert und die These zur 'Retraditionalisierung bei Geburt des ersten Kindes' formuliert.",
    keyFigure: true
  },
  {
    name: "Brandes, Holger",
    field: "Psychoanalyse / Sozialpsychologie",
    works: [
      { title: "Der männliche Habitus. Bd. 1: Männer unter sich. Männergruppen und männliche Identität", type: "book" as const, year: 2001, publisher: "Leske + Budrich" },
      { title: "Der männliche Habitus. Bd. 2: Männerforschung und Männerpolitik", type: "book" as const, year: 2002, publisher: "Leske + Budrich" },
      { title: "Was bringen Männer in Kitas ein?", type: "article" as const, year: 2011, publisher: "Psychosozial" }
    ],
    pages: "Ch. 1.6, 2.4, 2.9, 5.3",
    context: "Zentraler deutscher Theoretiker des männlichen Habitus. Seine zweibändige Studie ist für die deutsche Männerforschung grundlegend. Böhnisch bezieht sich auf Brandes' Habitus-Begriff und dessen Ausarbeitung der männlichen Triebdynamik. Auch zu Männerbünden und deren Transformation.",
    keyFigure: true
  },
  {
    name: "Scholz, Sylka",
    field: "Soziologie / Gender Studies",
    works: [
      { title: "Männlichkeitsforschung und Väterforschung", type: "article" as const, year: 2008 },
      { title: "Männlichkeitsforschung", type: "article" as const, year: 2009 },
      { title: "Männlichkeit und Körperlichkeit", type: "article" as const, year: 2004 },
      { title: "Formen hegemonialer Weiblichkeit", type: "article" as const, year: 2010 }
    ],
    pages: "Ch. 1.3, 1.5, 1.11, 3.2, 5.6, 5.7",
    context: "Zentrale Figur der deutschen Männerforschung und Frauen-/Geschlechterforschung. Scholz hat für Böhnischs Rezeption der neuen Väterforschung und der Diskussion um weibliche Hegemonialität wichtige Überblicksartikel vorgelegt."
  },
  {
    name: "Kimmel, Michael",
    field: "Soziologie / Männerforschung",
    works: [
      { title: "Manhood in America: A Cultural History", type: "book" as const, year: 1996, publisher: "Free Press" },
      { title: "The Gendered Society", type: "book" as const, year: 2000 },
      { title: "Handbook of Studies on Men and Masculinities (als Mitherausgeber)", type: "book" as const, year: 2004, coAuthors: ["R. W. Connell", "Jeff Hearn"] }
    ],
    pages: "Einführung, Ch. 1.3",
    context: "US-amerikanischer Gender-Soziologe. Seine Forderung einer 'Transformation des Mannes' (2000) setzt den Ton für Böhnischs Einführung. Kimmel steht für die internationale gendersoziologische Männerforschung, in die Böhnisch sich einordnet."
  },
  {
    name: "Hearn, Jeff",
    field: "Soziologie / Critical Studies on Men",
    works: [
      { title: "Handbook of Studies on Men and Masculinities (als Mitherausgeber)", type: "book" as const, year: 2004, coAuthors: ["R. W. Connell", "Michael Kimmel"] }
    ],
    pages: "Ch. 1.3",
    context: "Britisch-finnischer Kritischer Männerforscher. Koordinator des CROME-Projekts und Mitherausgeber des internationalen Handbuchs zur Männerforschung, auf das Böhnisch sich bezieht."
  },
  {
    name: "Bereswill, Mechthild",
    field: "Soziologie / Kritische Männerforschung",
    works: [
      { title: "Dimensionen der Kategorie Geschlecht. Der Fall Männlichkeit", type: "book" as const, year: 2007, coAuthors: ["Michael Meuser", "Sylka Scholz"] }
    ],
    pages: "Ch. 1.3 (Kritik des Hegemonialitätskonzepts)",
    context: "Deutsche Gender-Soziologin. Mitherausgeberin wichtiger Sammelbände zur kritischen Männerforschung, die die theoretische Debatte um hegemoniale Männlichkeit weiterführen."
  },

  // ---- Psychoanalyse / Tiefenpsychologie ----
  {
    name: "Gruen, Arno",
    field: "Psychoanalyse / Sozialpsychologie",
    works: [
      { title: "Der Verrat am Selbst. Die Angst vor Autonomie bei Mann und Frau", type: "book" as const, year: 1992, publisher: "dtv" }
    ],
    pages: "Ch. 1.2, 1.4, 1.6, 5.3, 5.9",
    context: "Schweizer Psychoanalytiker. Sein 'Verrat am Selbst' ist eine der zentralen Quellen für Böhnischs Konzept der Externalisierung und der 'Gewalt als Kampf gegen die eigene Hilflosigkeit'. Gruen beschreibt, wie die Abspaltung der inneren Hilflosigkeit und ihre Projektion auf Schwächere zu einem Grundmuster männlicher Bewältigung wird.",
    keyFigure: true
  },
  {
    name: "Chodorow, Nancy",
    field: "Psychoanalyse / Feministische Theorie",
    works: [
      { title: "Das Erbe der Mütter. Psychoanalyse und Soziologie der Geschlechter", type: "book" as const, year: 1985, publisher: "Frauenoffensive" }
    ],
    pages: "Ch. 1.4, 2.2, 3.1, 3.2",
    context: "US-amerikanische Psychoanalytikerin. Ihr Konzept des 'mothering' ist für Böhnischs Mutter-Sohn-Analyse zentral. Sie erklärt, wie die Tatsache, dass in patriarchalen Gesellschaften die Mütter die primäre Kinderbetreuung leisten, zu spezifischen männlichen und weiblichen Persönlichkeitsmustern führt.",
    keyFigure: true
  },
  {
    name: "Winnicott, Donald W.",
    field: "Psychoanalyse / Pädiatrie",
    works: [
      { title: "Psychoanalytisches Schlüsselwerk", type: "book" as const, year: 1984 },
      { title: "Vom Spiel zur Kreativität", type: "book" as const, year: 1988 }
    ],
    pages: "Ch. 1.6 (tiefenpsychologischer Kern des Bewältigungskonzepts)",
    context: "Britischer Psychoanalytiker und Pädiater. Seine Theorie der frühen Mutter-Kind-Beziehung und der Selbstbehauptungsantriebe bildet zusammen mit Gruen die psychoanalytische Fundierung von Böhnischs Bewältigungsmodell.",
    keyFigure: true
  },
  {
    name: "Benjamin, Jessica",
    field: "Psychoanalyse / Feministische Theorie",
    works: [
      { title: "Die Fesseln der Liebe", type: "book" as const, year: 1990, publisher: "Stroemfeld" }
    ],
    pages: "Ch. 2.2, 3.1",
    context: "US-amerikanische Psychoanalytikerin. Ihr Zitat 'Ein Junge, der den Zugang zu seinem inneren Raum verloren hat, wird süchtig auf die Eroberung äußerer Räume' ist eine zentrale Formel für Böhnischs Externalisierungskonzept. Sie steht in der Tradition der feministisch gewendeten Objektbeziehungstheorie."
  },
  {
    name: "Dammasch, Frank",
    field: "Psychoanalyse",
    works: [
      { title: "Jungen in der Krise", type: "book" as const, year: 2009, coAuthors: ["Wolfgang Metzger", "Bernd Theising"] },
      { title: "Vaterhunger und Bindungskrise", type: "article" as const, year: 2011 }
    ],
    pages: "Ch. 1.4, 2.2",
    context: "Deutscher Psychoanalytiker. Seine Arbeit zum 'Vaterhunger des präödipalen Jungen' ist für Böhnischs Konzept der Mutter-Sohn-Bindung und der männlichen Identitätsentwicklung zentral."
  },
  {
    name: "Moeller, Michael Lukas",
    field: "Psychoanalyse",
    works: [
      { title: "Die Wahrheit beginnt zu zweit", type: "book" as const, year: 1983, publisher: "Rowohlt" }
    ],
    pages: "Ch. 3.1",
    context: "Deutscher Psychoanalytiker. Seine Rede vom 'modernen Männermatriarchat im Kleinen' beschreibt die paradoxe Situation, in der Mütter die Söhne erziehen müssen, die später die patriarchale Gesellschaft tragen — und dabei die Vaterrolle gleichzeitig aufbauen und schwächen.",
    keyFigure: true
  },
  {
    name: "Gottschalch, Wilfried",
    field: "Psychoanalytische Sozialisationsforschung",
    works: [
      { title: "Der schwache Verrat. Mann sein in dieser Gesellschaft", type: "book" as const, year: 1991 },
      { title: "Männliche Identität und Männlichkeitsideologie", type: "article" as const, year: 1997 }
    ],
    pages: "Ch. 1.2, 3.1",
    context: "Psychoanalytischer Sozialisationsforscher. Seine Formulierung 'Das Urgestein der Männlichkeit ist eine dünne Kruste' ist ein zentraler Ankerpunkt für Böhnischs Argumentation zur Fragilität männlicher Identität."
  },
  {
    name: "Flaake, Karin",
    field: "Psychoanalytische Gender-Forschung",
    works: [
      { title: "Neue Zugänge zu psychoanalytischen Sozialisationstheorien", type: "article" as const, year: 2012 },
      { title: "Adoleszenz und Geschlecht", type: "article" as const, year: 2005 },
      { title: "Neue Väter — alte Probleme?", type: "article" as const, year: 2009 }
    ],
    pages: "Ch. 1.4, 2.4, 2.5, 4.1, 5.7",
    context: "Deutsche psychoanalytische Gender-Forscherin. Ihre Arbeiten zur Verbindung von innerpsychischen und Geschlechterverhältnissen sind für Böhnischs interdisziplinären Zugang wichtig."
  },

  // ---- Deutsche Sozialpädagogik und Bildungssoziologie ----
  {
    name: "Hurrelmann, Klaus",
    field: "Sozialisationsforschung / Bildungssoziologie",
    works: [
      { title: "Einführung in die Sozialisationstheorie", type: "book" as const, year: 2000 },
      { title: "Konkurrenz, Karriere, Kollaps", type: "book" as const, year: 1999, coAuthors: ["Heidrun Bründel"] }
    ],
    pages: "Ch. 2.1, 3.1",
    context: "Klaus Hurrelmann, einer der wichtigsten deutschen Sozialisationstheoretiker. Sein Handlungsfähigkeitskonzept hat Böhnisch weiterentwickelt. Gemeinsam mit Heidrun Bründel auch zu 'Konkurrenz, Karriere, Kollaps' in der Männerforschung."
  },
  {
    name: "Bründel, Heidrun",
    field: "Männerforschung / Sozialpädagogik",
    works: [
      { title: "Konkurrenz, Karriere, Kollaps. Männerforschung und der Abschied vom Mythos Mann", type: "book" as const, year: 1999, publisher: "Kohlhammer", coAuthors: ["Klaus Hurrelmann"] }
    ],
    pages: "Ch. 3.1 (arbeitslose Väter)",
    context: "Deutsche Forscherin zur Männlichkeit. Zusammen mit Hurrelmann hat sie eine der ersten breiten deutschen Männerforschungsstudien vorgelegt. Ihre Arbeit zu arbeitslosen Vätern und ihren Kompensationsstrategien wird von Böhnisch rezipiert."
  },
  {
    name: "Neumann, Wolfgang",
    field: "Männerberatung / Klinische Sozialpsychologie",
    works: [
      { title: "Praxishandbuch Männerberatung", type: "book" as const, year: 2006, coAuthors: ["Björn Süfke"] }
    ],
    pages: "Ch. 1.1, 1.3, 1.6, 5.3",
    context: "Praktiker der Männerberatung. Gemeinsam mit Björn Süfke Autor eines Praxishandbuchs, das Böhnischs Bewältigungsmodell in der klinischen Arbeit validiert. Zentrale Referenz für den empirischen Teil des Buches.",
    keyFigure: true
  },
  {
    name: "Süfke, Björn",
    field: "Männerberatung / Klinische Sozialpsychologie",
    works: [
      { title: "Praxishandbuch Männerberatung", type: "book" as const, year: 2006, coAuthors: ["Wolfgang Neumann"] }
    ],
    pages: "Ch. 1.1, 1.3, 1.6, 5.3",
    context: "Zweiter Autor des Praxishandbuchs Männerberatung. Klinischer Sozialpsychologe, der Böhnischs Bewältigungsmodell in die therapeutische Praxis übertragen hat.",
    keyFigure: true
  },
  {
    name: "Sturzenhecker, Benedikt",
    field: "Sozialpädagogik / Jungenarbeit",
    works: [
      { title: "Praxis der Jungenarbeit", type: "book" as const, year: 2002, coAuthors: ["Reinhard Winter"] }
    ],
    pages: "Ch. 2.1 (Jungenarbeit)",
    context: "Deutscher Sozialpädagoge mit Schwerpunkt auf geschlechtssensitiver Jugendarbeit. Zusammen mit Reinhard Winter Verfasser praktischer Handbücher zur Jungenarbeit."
  },
  {
    name: "Kreher, Thomas",
    field: "Sozialpädagogik / Übergangsforschung",
    works: [
      { title: "Zwischen Selbstbestimmung und Fremdbestimmung. Kompetenzentwicklung junger Männer in prekären Ausbildungs- und Berufsperspektiven", type: "book" as const, year: 2007 }
    ],
    pages: "Ch. 1.3, 4.4",
    context: "Deutscher Sozialpädagoge. Seine qualitative Studie zu jungen Männern in prekären Arbeitsverhältnissen ist eine zentrale empirische Stütze für Böhnischs These, dass männliche Bewältigungsmuster in Situationen sozialer Benachteiligung besonders aktiviert werden."
  },
  {
    name: "Rohrmann, Tim",
    field: "Sozialpädagogik / Jungenarbeit",
    works: [
      { title: "Männer in Kitas", type: "book" as const, year: 2011 },
      { title: "Gender in der Pädagogik der frühen Kindheit", type: "book" as const, year: 2009 },
      { title: "Elementar – Männer in der pädagogischen Arbeit mit Kindern", type: "book" as const, year: 2012, coAuthors: ["Josef Christian Aigner"] }
    ],
    pages: "Ch. 4.2 (Männer im Kindergarten)",
    context: "Deutscher Experte für Jungen im Kindergarten und die Situation männlicher Erzieher. Seine Arbeiten sind für Böhnischs Kapitel zum 'frauendominierten Kindergarten' zentral."
  },

  // ---- Empirische Schul- und Bildungsforschung ----
  {
    name: "Enders-Dragässer, Uta",
    field: "Schulforschung / Gender Studies",
    works: [
      { title: "Geschlechteralltag in der Schulklasse", type: "book" as const, year: 1989, publisher: "Juventa", coAuthors: ["Claudia Fuchs"] }
    ],
    pages: "Ch. 4.3",
    context: "Pionierin der deutschen schulsoziologischen Gender-Forschung. Ihre Studie zum 'Geschlechteralltag in der Schulklasse' (1989) ist die empirische Grundlage für den Befund, dass Jungen 2/3 der Aufmerksamkeit im Unterricht erhalten. Zusammen mit Claudia Fuchs.",
    keyFigure: true
  },
  {
    name: "Breidenstein, Georg",
    field: "Schulethnographie / Sozialisationsforschung",
    works: [
      { title: "Geschlechteralltag in der Schulklasse", type: "book" as const, year: 1998, coAuthors: ["Helga Kelle"] },
      { title: "Jungenkulturen und Raum", type: "article" as const, year: 2008 }
    ],
    pages: "Ch. 2.9, 4.3",
    context: "Deutscher Schulethnograph. Seine Arbeiten zur Geschlechterdynamik im Klassenzimmer und zur Raumaneignung von Jungen sind für Böhnischs Kapitel zum hidden gender curriculum wichtig."
  },
  {
    name: "Faulstich-Wieland, Hannelore",
    field: "Schulforschung / Feministische Pädagogik",
    works: [
      { title: "Einführung in Genderstudien", type: "book" as const, year: 2004 }
    ],
    pages: "Ch. 4.3",
    context: "Deutsche Pädagogin und Gender-Forscherin. Ihre Studie zu Sensibilisierungsmaßnahmen in der Schule wird von Böhnisch referenziert."
  },
  {
    name: "Budde, Jürgen",
    field: "Schulforschung / Männerforschung",
    works: [
      { title: "Bildungsfigurationen im Kontext von Jungen in der Schule", type: "book" as const, year: 2008 }
    ],
    pages: "Ch. 4.3",
    context: "Deutscher Schulforscher mit Schwerpunkt auf Jungen in der Schule. Seine Arbeiten zum 'Jungenmalus'-Diskurs sind für Böhnischs Analyse relevant."
  },
  {
    name: "Diefenbach, Heike",
    field: "Bildungssoziologie",
    works: [
      { title: "Geschlechtsspezifische Disparitäten im Bildungssystem", type: "article" as const, year: 2012 }
    ],
    pages: "Ch. 4.3",
    context: "Deutsche Bildungssoziologin. Ihre Arbeiten zur 'Passung' zwischen Verhaltensstilen von Jungen und schulischen Anforderungen werden von Böhnisch zitiert."
  },
  {
    name: "Jösting, Sabine",
    field: "Sozialpädagogik / Jugendforschung",
    works: [
      { title: "Jungenfreundschaften. Zur Konstruktion von Männlichkeit in der Adoleszenz", type: "book" as const, year: 2005 }
    ],
    pages: "Ch. 2.9",
    context: "Deutsche Jungenfreundschafts-Forscherin. Ihre Arbeit ist eine zentrale Quelle für Böhnischs Kapitel zur männlichen Clique."
  },

  // ---- Väterforschung ----
  {
    name: "Ehnis, Patrick",
    field: "Gender Studies / Väterforschung",
    works: [
      { title: "Hegemoniale Mütterlichkeit", type: "article" as const, year: 2008 }
    ],
    pages: "Ch. 3.1",
    context: "Seine Prägung des Begriffs 'hegemoniale Mütterlichkeit' (Formen geschlechtsbezogener Praktiken, welche die Präsenz von Müttern sichern) ist für Böhnischs strukturalistische Perspektive auf die Mutter-Sohn-Beziehung zentral.",
    keyFigure: true
  },
  {
    name: "Zerle, Claudia",
    field: "Familienforschung",
    works: [
      { title: "Junge Väter und ihr Zeitbudget", type: "article" as const, year: 2009, coAuthors: ["Isabella Krok"] }
    ],
    pages: "Ch. 5.6",
    context: "Deutsche Familienforscherin. Die von Böhnisch zitierte Befund, dass über die Hälfte der jungen Männer bei Eintritt der Vaterschaft mehr arbeitet als zuvor, stammt aus dieser Studie."
  },
  {
    name: "Aigner, Josef Christian",
    field: "Sozialpädagogik / Jungenarbeit",
    works: [
      { title: "Fürsten und Könige? Aspekte der Psychodynamik von Männern in pädagogischen Berufsfeldern", type: "article" as const, year: 2011 },
      { title: "Elementar – Männer in der pädagogischen Arbeit mit Kindern", type: "book" as const, year: 2012, coAuthors: ["Tim Rohrmann"] }
    ],
    pages: "Ch. 4.2",
    context: "Österreichischer Sozialpädagoge. Zusammen mit Rohrmann die zentrale Referenz für die Situation männlicher Erzieher in Kindergärten."
  },

  // ---- Soziologie der zweiten Moderne ----
  {
    name: "Beck, Ulrich",
    field: "Soziologie / Zeitdiagnose",
    works: [
      { title: "Risikogesellschaft. Auf dem Weg in eine andere Moderne", type: "book" as const, year: 1986, publisher: "Suhrkamp" }
    ],
    pages: "Einführung, Ch. 1.1, Ch. 5.6",
    context: "Deutscher Soziologe, Begründer der Individualisierungs- und Risikogesellschaftstheorie. Sein Konzept der 'Zweiten Moderne' ist die zeitdiagnostische Rahmung des gesamten Böhnisch-Buches. Beck-Zitat in Ch. 5.6 zur Spannung zwischen Individualisierung und Partnerschaftsverhinderung.",
    keyFigure: true
  },
  {
    name: "Boltanski, Luc",
    field: "Soziologie",
    works: [
      { title: "Der neue Geist des Kapitalismus", type: "book" as const, year: 2006, publisher: "UVK", coAuthors: ["Ève Chiapello"] }
    ],
    pages: "Ch. 1.3, 5.4",
    context: "Französischer Soziologe. Gemeinsam mit Chiapello Autor der einflussreichen Zeitdiagnose zum 'neuen Geist des Kapitalismus' (Projektarbeit, Netzwerkideologie, Flexibilisierung). Ein zentraler Bezugstext für Böhnischs Analyse der Arbeitsgesellschaft der zweiten Moderne."
  },
  {
    name: "Chiapello, Ève",
    field: "Soziologie",
    works: [
      { title: "Der neue Geist des Kapitalismus", type: "book" as const, year: 2006, coAuthors: ["Luc Boltanski"] }
    ],
    pages: "Ch. 1.3, 5.4",
    context: "Französische Soziologin, Mitautorin des einflussreichen Werks zum neuen Kapitalismus."
  },
  {
    name: "Bourdieu, Pierre",
    field: "Soziologie",
    works: [
      { title: "Die feinen Unterschiede", type: "book" as const, year: 1993 },
      { title: "Die männliche Herrschaft", type: "book" as const, year: 1997 },
      { title: "Praktische Vernunft", type: "book" as const, year: 1998 },
      { title: "Sozialer Sinn", type: "book" as const, year: 1987 }
    ],
    pages: "Ch. 1.6 (Habituskonzept)",
    context: "Französischer Soziologe. Böhnisch übernimmt den Habitus-Begriff, aber kritisch: Er plädiert für den Bewältigungsbegriff statt für einen starren männlichen Habitus. Bourdieu-Zitat zur Genese des Habitus als 'zweite Natur' ist zentral.",
    keyFigure: true
  },
  {
    name: "Foucault, Michel",
    field: "Philosophie / Geschichte der Sexualität",
    works: [
      { title: "Die Sorge um sich", type: "book" as const, year: 1987, publisher: "Suhrkamp" }
    ],
    pages: "Ch. 5.3",
    context: "Französischer Philosoph. Sein Konzept der 'Selbstsorge' als gesellschaftlicher Praxis (nicht Einsamkeit) ist für Böhnischs normatives Modell des 'balancierten Mann-Seins' zentral. Die Sorge um sich als 'Intensivierung der gesellschaftlichen Beziehungen'."
  },
  {
    name: "Luhmann, Niklas",
    field: "Soziologie / Systemtheorie",
    works: [
      { title: "Das Erziehungssystem der Gesellschaft", type: "book" as const, year: 2003 }
    ],
    pages: "Einführung, Ch. 5.5",
    context: "Luhmann-Zitat: 'nur die Unterscheidung Mann und Frau ist kulturell variabel, nicht auch die Eigenschaft, Mann bzw. Frau zu sein'. Auch Luhmanns Exklusionsbegriff wird von Böhnisch in Ch. 5.5 (Männergesundheit) zitiert."
  },
  {
    name: "Giddens, Anthony",
    field: "Soziologie",
    works: [
      { title: "Transformation of Intimacy", type: "book" as const, year: 1993 }
    ],
    pages: "Ch. 5.6",
    context: "Britischer Soziologe. Seine These der 'Transformation der Intimität' wird von Böhnisch (via Lenz) kritisch rezipiert — Giddens vermenge die Ebene des Beziehungsalltags mit der Diskursebene."
  },
  {
    name: "Lenz, Karl",
    field: "Soziologie / Familienforschung",
    works: [
      { title: "Geschlechterverhältnisse/Geschlechterbeziehungen (mit Marina Adler)", type: "book" as const, year: 2011 },
      { title: "Soziologie der Zweierbeziehung", type: "book" as const, year: 2003 },
      { title: "Familien. Weinheim und München", type: "book" as const, year: 2003, coAuthors: ["Lothar Böhnisch"] },
      { title: "Sozialisation und Bewältigung", type: "book" as const, year: 2009, coAuthors: ["Lothar Böhnisch", "Wolfgang Schröer"] }
    ],
    pages: "Ch. 3.1, 5.6, 5.13",
    context: "Deutscher Familien- und Geschlechtersoziologe. Mit Böhnisch und Schröer Autor des zentralen Bewältigungswerks 2009. Seine Vier-Szenarien-Analyse der Geschlechterordnung der Zukunft (mit Marina Adler) strukturiert Böhnischs Schlusskapitel 5.13.",
    keyFigure: true
  },
  {
    name: "Schröer, Wolfgang",
    field: "Sozialpädagogik",
    works: [
      { title: "Sozialisation und Bewältigung", type: "book" as const, year: 2009, coAuthors: ["Lothar Böhnisch", "Karl Lenz"] },
      { title: "Sozialpolitik und Soziale Arbeit", type: "book" as const, year: 2012, coAuthors: ["Lothar Böhnisch"] }
    ],
    pages: "Ch. 1.6, 2.1",
    context: "Deutscher Sozialpädagoge. Langjähriger Kooperationspartner Böhnischs. Gemeinsam mit Lenz und Böhnisch das Standardwerk 'Sozialisation und Bewältigung' (2009)."
  },

  // ---- Männerbewegung und Reform ----
  {
    name: "Zulehner, Paul M.",
    field: "Religionssoziologie / Männerforschung",
    works: [
      { title: "Männer im Aufbruch", type: "book" as const, year: 1999, coAuthors: ["Rainer Volz"] },
      { title: "Männer unterwegs", type: "book" as const, year: 2009, coAuthors: ["Rainer Volz"] }
    ],
    pages: "Einführung, Ch. 1.1, Ch. 5.9",
    context: "Österreichischer Theologe und Sozialforscher. Zusammen mit Rainer Volz Autor repräsentativer deutscher Männerstudien, die Böhnisch kritisch rezipiert und für den empirischen Teil nutzt."
  },
  {
    name: "Volz, Rainer",
    field: "Männerforschung",
    works: [
      { title: "Männer im Aufbruch", type: "book" as const, year: 1999, coAuthors: ["Paul M. Zulehner"] },
      { title: "Männer unterwegs", type: "book" as const, year: 2009, coAuthors: ["Paul M. Zulehner"] }
    ],
    pages: "Einführung, Ch. 1.1, Ch. 5.9",
    context: "Zusammen mit Zulehner Autor der Volz/Zulehner-Männerstudien, einer der wichtigsten deutschen empirischen Serien zur Männlichkeit."
  },
  {
    name: "Hollstein, Walter",
    field: "Männerforschung",
    works: [
      { title: "Was vom Manne übrig blieb", type: "book" as const, year: 2012 }
    ],
    pages: "Einführung S. 13 (Zitat 'Männlichkeiten im Spagat')",
    context: "Schweizer Männerforscher. Sein Bild von 'Hardware-Männlichkeit' (offizielle Erwartungen) und 'Software-Männlichkeit' (private Erwartungen) wird von Böhnisch zitiert."
  },
  {
    name: "Döge, Peter",
    field: "Männerforschung / Politikwissenschaft",
    works: [
      { title: "Männer auf dem Weg?", type: "article" as const, year: 2012 },
      { title: "Männlichkeit und soziale Ordnung", type: "book" as const, year: 2002, coAuthors: ["Michael Meuser"] }
    ],
    pages: "Ch. 5.9",
    context: "Deutscher Politikwissenschaftler mit Männerforschung-Schwerpunkt. Arbeiten zu männlicher Gewalt werden von Böhnisch zitiert."
  },

  // ---- Weitere zitierte Autoren ----
  {
    name: "Schwanitz, Dietrich",
    field: "Literaturwissenschaft / Kulturkritik",
    works: [
      { title: "Männer. Eine Spezies wird besichtigt", type: "book" as const, year: 2001 }
    ],
    pages: "Ch. 5.3",
    context: "Deutscher Literaturwissenschaftler. Seine populäre Essayistik über Männlichkeit wird von Böhnisch als Beispiel für die populäre Naturalisierung männlichen Verhaltens zitiert: 'Für den Mann ist sein Inneres eine gefährliche Zone'. Böhnisch nimmt sie als Gegenposition.",
    keyFigure: true
  },
  {
    name: "Bischof-Köhler, Doris",
    field: "Verhaltenspsychologie / Entwicklungspsychologie",
    works: [
      { title: "Von Natur aus anders. Die Psychologie der Geschlechterunterschiede", type: "book" as const, year: 2002 },
      { title: "Geschlechtstypisches Verhalten von Jungen aus evolutionstheoretischer und entwicklungspsychologischer Perspektive", type: "article" as const, year: 2012 }
    ],
    pages: "Ch. 1.2",
    context: "Deutsche Entwicklungspsychologin. Vertreterin einer evolutionsbiologischen Lesart geschlechtsspezifischer Verhaltensmuster. Böhnisch nutzt ihre Position als Kontrast: Sie steht für die biologistisch orientierte Seite des Anlage-Umwelt-Debatte, die Böhnisch kritisiert."
  },
  {
    name: "Hüther, Gerald",
    field: "Neurobiologie / Hirnforschung",
    works: [
      { title: "Männer. Das schwache Geschlecht und sein Gehirn", type: "book" as const, year: 2009 }
    ],
    pages: "Ch. 1.2",
    context: "Deutscher Hirnforscher. Seine These zur Hirnplastizität (~90% der Verknüpfungen entstehen erst im Leben) ist zentral für Böhnischs anti-essentialistisches Argument."
  },
  {
    name: "Palm, Kerstin",
    field: "Wissenschaftsgeschichte / Biologie",
    works: [
      { title: "Wissenschaftskritik der Evolutionsbiologie", type: "article" as const, year: 2011 }
    ],
    pages: "Ch. 1.2",
    context: "Deutsche Wissenschaftshistorikerin. Ihre archäologisch-kritische Dekonstruktion der 'man-the-hunter'-Theorie wird von Böhnisch genutzt."
  },
  {
    name: "Kaufmann, Jean-Claude",
    field: "Soziologie",
    works: [
      { title: "Schmutzige Wäsche. Zur ehelichen Konstruktion von Alltag", type: "book" as const, year: 1995 }
    ],
    pages: "Ch. 5.6",
    context: "Französischer Soziologe. Seine Arbeit zur Partnerwahl wird von Böhnisch zur Bewusstseinsfähigkeit von Partnerentscheidungen zitiert."
  },
  {
    name: "Rerrich, Maria",
    field: "Familiensoziologie",
    works: [
      { title: "Balanceakt Familie", type: "book" as const, year: 1988 }
    ],
    pages: "Ch. 5.6",
    context: "Deutsche Familiensoziologin. Ihre Beschreibung der 'zwei Ehen' in der Ehe (männliche und weibliche) ist für Böhnischs Kapitel zur heterosexuellen Partnersozialisation zentral."
  },
  {
    name: "Schnack, Dieter",
    field: "Sozialpädagogik",
    works: [
      { title: "Kleine Helden in Not", type: "book" as const, year: 1990, coAuthors: ["Rainer Neutzling"] }
    ],
    pages: "Ch. 2.9",
    context: "Deutscher Sozialpädagoge. Das mit Neutzling verfasste 'Kleine Helden in Not' war ein Bestseller und ist für Böhnischs Diskussion des jungenspezifischen Risikoverhaltens zentral."
  },
  {
    name: "Neutzling, Rainer",
    field: "Sozialpädagogik",
    works: [
      { title: "Kleine Helden in Not", type: "book" as const, year: 1990, coAuthors: ["Dieter Schnack"] }
    ],
    pages: "Ch. 2.9",
    context: "Mit Schnack Autor des Bestsellers zum jungenspezifischen Risikoverhalten."
  },
  {
    name: "Tertilt, Hermann",
    field: "Kulturanthropologie / Jugendforschung",
    works: [
      { title: "Turkish power boys. Ethnographie einer Jugendbande", type: "book" as const, year: 1996 }
    ],
    pages: "Ch. 2.10",
    context: "Deutscher Ethnograph. Seine 'Ethnographie einer Jugendbande' ist für Böhnischs Kapitel zu Jungen mit Migrationshintergrund zentral."
  },
  {
    name: "Schiffauer, Werner",
    field: "Kulturanthropologie / Migrationsforschung",
    works: [
      { title: "Die Gewalt der Ehre", type: "book" as const, year: 1983, publisher: "Suhrkamp" }
    ],
    pages: "Ch. 2.10",
    context: "Deutscher Kulturanthropologe. Sein Werk zur 'Gewalt der Ehre' in türkisch-muslimischen Gemeinschaften ist Böhnischs Hauptreferenz zum Ehre-Konzept in migrantischen Jungen-Cliquen."
  },
  {
    name: "Wellgraf, Stefan",
    field: "Bildungssoziologie / Ethnographie",
    works: [
      { title: "Hauptschüler. Zur gesellschaftlichen Produktion von Verachtung", type: "book" as const, year: 2011 }
    ],
    pages: "Ch. 2.9",
    context: "Deutscher Schulethnograph. Seine Hauptschul-Ethnographie zeigt, wie Homophobie als Mittel der maskulinen Selbstbehauptung in marginalisierten Jungen-Cliquen genutzt wird."
  },
  {
    name: "Roth, Gerhard",
    field: "Neurobiologie",
    works: [
      { title: "Persönlichkeit, Entscheidung und Verhalten", type: "book" as const, year: 2007 }
    ],
    pages: "Ch. 1.6",
    context: "Deutscher Hirnforscher. Seine Arbeit zur 'Urform des Selbst' in der psychischen Grundausrüstung liefert Böhnischs Bewältigungsmodell einen neurobiologischen Anker."
  },
  {
    name: "Brensell, Ariane",
    field: "Feministische Ökonomie",
    works: [
      { title: "Von Keksen und Kapitalismus", type: "article" as const, year: 2001, coAuthors: ["Friederike Habermann"] }
    ],
    pages: "Ch. 1.4",
    context: "Feministische Ökonomin. Ihre mit Habermann formulierte These zur geschlechtlichen Codierung der Warenform ist für Böhnischs Brückenbildung zwischen psychodynamischer und politökonomischer Analyse zentral."
  },
  {
    name: "Eisenstein, Hester",
    field: "Feministische Soziologie",
    works: [
      { title: "Gender Shock", type: "book" as const, year: 1991 }
    ],
    pages: "Ch. 1.11",
    context: "US-amerikanische feministische Soziologin. Zu hegemonialer Weiblichkeit zitiert."
  },
  {
    name: "Sauer, Birgit",
    field: "Politikwissenschaft / Gender Studies",
    works: [
      { title: "Hegemonie und hegemoniale Geschlechterverhältnisse", type: "article" as const, year: 2010 }
    ],
    pages: "Ch. 1.11",
    context: "Österreichische Politikwissenschaftlerin. Ihr Zitat zur neoliberalen hegemonialen Männlichkeit, die auch für biologische Frauen partiell offen sei, ist zentral für Böhnischs Diskussion weiblicher Hegemonialität."
  },
  {
    name: "McRobbie, Angela",
    field: "Cultural Studies / Geschlechterforschung",
    works: [
      { title: "Top Girls: Feminismus und der Aufstieg des neoliberalen Geschlechterregimes", type: "book" as const, year: 2011 }
    ],
    pages: "Ch. 5.5",
    context: "Britische Cultural-Studies-Forscherin. Zu neuen Körperästhetisierungen in der Frauenfilmindustrie wird sie von Böhnisch zitiert."
  },
  {
    name: "Adler, Marina",
    field: "Soziologie / Gender Studies",
    works: [
      { title: "Geschlechterverhältnisse/Geschlechterbeziehungen", type: "book" as const, year: 2011, coAuthors: ["Karl Lenz"] }
    ],
    pages: "Ch. 3.1, 5.13",
    context: "US-amerikanische Soziologin. Mit Karl Lenz Verfasserin des zentralen Überblickswerks zur Geschlechterforschung, das Böhnischs Schlusskapitel über Zukunftsszenarien strukturiert."
  }
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "TU Dresden — Institut für Sozialpädagogik, Sozialarbeit und Wohlfahrtswissenschaften",
    type: "Universität",
    context: "Böhnischs langjährige institutionelle Heimat bis 2009. Dort entstand ein Großteil der theoretischen Arbeiten und der empirischen Projekte (Dresdner Übergangsforschung, sächsische Männerstudien). Auch der Gastbeitrag Alexander Wedels stammt aus diesem Institut.",
    pages: "Author affiliation"
  },
  {
    name: "Freie Universität Bozen/Bolzano",
    type: "Universität",
    context: "Böhnischs aktueller institutioneller Standort. Hier entstand die Südtiroler Männerstudie 2012, die eine zentrale empirische Stütze des Buches bildet. Die Kontrollstudie Frauen 2012 kam aus derselben Einrichtung.",
    pages: "Author affiliation"
  },
  {
    name: "Beltz Juventa — Reihe 'Geschlechterforschung'",
    type: "Akademischer Verlag",
    context: "Verlag der Reihe 'Geschlechterforschung', die Böhnisch mit Heide Funk und Karl Lenz herausgibt. Juventa/Beltz ist einer der zentralen deutschen Verlage für Sozialpädagogik und Erziehungswissenschaft.",
    pages: "Title page"
  },
  {
    name: "Stone Center (Wellesley College) — Relationaltheorie",
    type: "Forschungszentrum",
    context: "Obwohl Böhnisch nicht direkt aus dem Stone Center schöpft (im Unterschied zu Pollack), operiert er in der gleichen psychoanalytisch-relationalen Tradition, die Chodorow, Benjamin und andere geprägt haben.",
    pages: "Indirekte theoretische Parallele"
  },
  {
    name: "Deutsche Gesellschaft für Soziologie — Sektion Frauen- und Geschlechterforschung",
    type: "Fachgesellschaft",
    context: "Institutioneller Kontext der deutschen Geschlechterforschung, in dem Böhnisch lange aktiv war. Die Sektion bildet das Netzwerk für Scholz, Meuser, Bereswill und andere zentrale Referenzen des Buches.",
    pages: "Implicit throughout"
  },
  {
    name: "BMFSFJ (Bundesministerium für Familie, Senioren, Frauen und Jugend)",
    type: "Ministerium",
    context: "Der 'Erste Deutsche Männergesundheitsbericht' (2011) und die Pilotstudie 'Gewalt gegen Männer' (2004) wurden vom BMFSFJ beauftragt und sind zentrale Datenquellen für Böhnischs Kapitel 5.5 und 5.9.",
    pages: "Ch. 5.5, 5.9"
  },
  {
    name: "CROME (Critical Research on Men in Europe)",
    type: "Forschungsnetzwerk",
    context: "Das europäische Forschungsnetzwerk zur kritischen Männerforschung, koordiniert von Jeff Hearn, an dem auch die deutsche Männerforschung anschließt.",
    pages: "Ch. 1.3 (via Hearn)"
  },
  {
    name: "Psychoanalytische Schule Frankfurt / Kritische Theorie",
    type: "Intellektuelle Tradition",
    context: "Böhnischs theoretischer Hintergrund in der Frankfurter Schule und der psychoanalytischen Sozialisationsforschung (Leithäuser, Adorno, Horkheimer). Die Rede vom 'Verdeckungszusammenhang' ist direkt aus dieser Tradition.",
    pages: "Einführung, durchgängig"
  },
  {
    name: "Juventa-Tradition der deutschen Sozialpädagogik",
    type: "Wissenschaftsrichtung",
    context: "Die deutsche sozialpädagogische Tradition (Hurrelmann, Grundmann, Böhnisch, Schröer), die den Kern des Buches bildet. Geht über reine Soziologie hinaus und integriert praxisnahe Beratungs- und Jugendhilfeansätze.",
    pages: "Throughout"
  }
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Südtiroler Männerstudie",
    authors: "Lothar Böhnisch et al., Freie Universität Bozen",
    year: "2010-2012",
    finding: "Repräsentative quantitative Studie zu Arbeitsverhältnissen, Vaterschaft, Vereinbarkeit und Geschlechterrollen in Südtirol. Zentrale Befunde: 90% halten es für selbstverständlich, dass der Kindergartenberuf von Frauen ausgeübt wird. Durchschnittliche Erwerbsarbeitszeit der Männer (inkl. Anfahrt) über 50 Stunden/Woche. Wunsch-Wirklichkeit-Diskrepanz bei Vätern besonders ausgeprägt. Die Studie ist die empirische Haupt-Stütze des gesamten Buches.",
    pages: "Ch. 3.2, 4.2, 5.6, 5.7, 5.10, 5.12"
  },
  {
    name: "Sächsische Männerstudie",
    authors: "Lothar Böhnisch et al., TU Dresden",
    year: "2008",
    finding: "Quantitative Studie zu männlichen Bewältigungsmustern in Ostsachsen. Bestätigte die Diskrepanz zwischen beruflicher Intensivierung und Familienorientierung bei jungen Vätern. Grundlage für die Extension der Analyse auf die Südtiroler Studie.",
    pages: "Ch. 3.2"
  },
  {
    name: "Ostsächsische Vater-Interviews",
    authors: "Lothar Böhnisch et al.",
    year: "ca. 2008",
    finding: "Qualitative narrative Leitfadeninterviews mit 128 Männern aus zwei Altersgruppen, davon 32 Väter in vertiefter Befragung. Dokumentiert den 'Eventvater' in der Mittelschicht und die strukturelle Verwehrung des Alltagslebens mit Kindern trotz hohem Engagement-Wunsch.",
    pages: "Ch. 3.2"
  },
  {
    name: "Dresdner Sozialpädagogische Übergangsforschung",
    authors: "Arnold, H., Böhnisch, Winter u. a.",
    year: "2004",
    finding: "Qualitative Untersuchung zum Übergang in den Beruf bei jungen Männern mit prekären Berufsperspektiven. Zentraler Befund: Verwehrter Arbeitsmarktzugang schränkt auch den Zugang zum Selbst ein und führt zur Freisetzung naturalistisch-maskuliner Durchsetzungsorientierung.",
    pages: "Ch. 4.4, Ch. 1.6"
  },
  {
    name: "Enders-Dragässer/Fuchs Klassenzimmer-Studie",
    authors: "Uta Enders-Dragässer, Claudia Fuchs",
    year: "1989",
    finding: "Pionierstudie zur geschlechterdifferenten Aufmerksamkeitsverteilung im koedukativen Klassenzimmer. Zentrale Befunde: Lehrer:innen geben Jungen 2/3 der Aufmerksamkeitszeit, Jungen werden häufiger bestraft, sie reden öfter und länger, unterbrechen häufiger und schreien ungefragt dazwischen. Diese Befunde sind seither mehrfach repliziert worden.",
    pages: "Ch. 4.3"
  },
  {
    name: "Volz/Zulehner Männerstudien (repräsentativ Deutschland)",
    authors: "Rainer Volz, Paul M. Zulehner",
    year: "1999 (Männer im Aufbruch), 2009 (Männer unterwegs)",
    finding: "Zwei repräsentative deutsche Männerstudien. 1999: 'Männer im Aufbruch' — dokumentiert den Wunsch nach Rollenwandel ohne dessen Realisierung. 2009: Bestätigt die Korrelation zwischen männlicher Lebensunzufriedenheit und physischer Gewalt im sozialen Nahraum. Zentrale deutsche Datenquelle für Böhnischs Argumentation.",
    pages: "Einführung, Ch. 1.1, Ch. 5.9"
  },
  {
    name: "Erster Deutscher Männergesundheitsbericht",
    authors: "Stiftung Männergesundheit",
    year: "2011",
    finding: "Staatlicher Bericht zur Männergesundheit. Zentraler Befund für Böhnisch: 23% der arbeitslosen Männer bewerten ihren Gesundheitszustand als 'weniger gut' oder 'schlecht', gegenüber 11% der Berufstätigen. Unterstützt die These zum Zusammenhang zwischen Arbeitslosigkeit, Identität und Gesundheit bei Männern.",
    pages: "Ch. 5.5"
  },
  {
    name: "BMFSFJ Pilotstudie 'Gewalt gegen Männer'",
    authors: "Bundesministerium für Familie, Senioren, Frauen und Jugend",
    year: "2004",
    finding: "Erste systematische deutsche Studie zu Gewalterfahrungen von Männern. Dokumentiert, dass Männer in bestimmten Konstellationen auch Opfer von Gewalt sind, ohne dass dies das Hauptverhältnis (Männer als Täter) aufhebt.",
    pages: "Ch. 5.9"
  },
  {
    name: "Kreher — Junge Männer in prekären Ausbildungsverhältnissen",
    authors: "Thomas Kreher",
    year: "2007",
    finding: "Qualitative Studie zur Kompetenzentwicklung junger Männer in prekären Ausbildungs- und Berufsperspektiven. Zentraler Befund: Männer entwickeln biografische Orientierungsmuster, die auf das Normalarbeitsverhältnis fixiert sind, obwohl ihre aktuelle Lage dies nicht hergibt. Typische männliche Bewältigungsmuster: Problem abspalten, rationalisieren, über Abwertung anderer positionieren.",
    pages: "Ch. 4.4, Ch. 1.3"
  },
  {
    name: "Gille/Marbach Haushaltsstudie",
    authors: "Martina Gille, Jan H. Marbach",
    year: "2004",
    finding: "Deutsche Länderstudie zur familialen Arbeitsteilung. Quantitativer Befund: Frauen investieren etwa 1,5 mal so viel Zeit in Kinderbetreuung wie Männer. Bestätigt die Persistenz geschlechtstypischer Muster in zentralen Haushaltsbereichen trotz gestiegener Frauenberufstätigkeit.",
    pages: "Ch. 5.7"
  },
  {
    name: "Neumann/Süfke Männerberatung Praxis",
    authors: "Wolfgang Neumann, Björn Süfke",
    year: "2006",
    finding: "Praxishandbuch der Männerberatung, das Böhnischs Bewältigungsmodell in der klinischen Arbeit validiert hat. Dokumentiert, dass Männer in kritischen Lebenssituationen quer durch alle Schichten auf dezidiert maskuline Bewältigungsmuster (Gefühlsabwehr, Rationalisierung, Kontroll- und Abwertungsstrategien) zurückgreifen.",
    pages: "Ch. 1.1, 1.3, 1.6, 5.3"
  },
  {
    name: "Meuser — Strukturübungen / Aneignung des männlichen Habitus",
    authors: "Michael Meuser",
    year: "2006",
    finding: "Qualitative Untersuchung zur Aneignung des männlichen Habitus in Peergroups. Entwickelt das Konzept der 'Strukturübungen' als nichtbegriffliche vortheoretische Aneignung der sozialen Welt durch Jungen. Zentrale deutsche Referenz für die Analyse männlicher Peer-Dynamiken.",
    pages: "Ch. 1.6, 2.9"
  },
  {
    name: "Tertilt Turkish Power Boys Ethnographie",
    authors: "Hermann Tertilt",
    year: "1996",
    finding: "Ethnographische Untersuchung einer türkisch-migrantischen Jugendbande in Frankfurt. Zentraler Befund: Maskulinität wird in der migrantischen Situation als Selbstbehauptungsressource aktiviert, nicht einfach 'importiert'. Die 'Gewalt der Ehre' (Schiffauer) als Matrix des männlichen Selbstwertes.",
    pages: "Ch. 2.10"
  },
  {
    name: "Wellgraf Hauptschule-Ethnographie",
    authors: "Stefan Wellgraf",
    year: "2011",
    finding: "Ethnographische Untersuchung an einer deutschen Hauptschule. Zentraler Befund: Homophobie dient der Betonung und Durchsetzung männlicher Dominanzansprüche, vor allem in Gruppen marginalisierter (oft migrantischer) Jungen, die kaum Chancen haben, soziale Anerkennung auf anderen Wegen zu erlangen.",
    pages: "Ch. 2.9"
  },
  {
    name: "Gerhard Hüther — Hirnplastizitäts-Forschung",
    authors: "Gerald Hüther (und andere Hirnforscher)",
    year: "2009",
    finding: "Neurobiologische Befunde zur Hirnplastizität: Etwa 90% der neuronalen Verknüpfungen zwischen Nervenzellen bilden sich erst im Verlauf des Lebens aus. Zentrale Unterstützung für Böhnischs anti-essentialistische Position.",
    pages: "Ch. 1.2"
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
  title: "Männliche Sozialisation",
  subtitle: "Eine Einführung",
  author: "Lothar Böhnisch",
  publisher: "Beltz Juventa",
  year: 2013,
  description:
    "Das Standardwerk der deutschsprachigen sozialpädagogisch-soziologischen Männerforschung. Böhnisch verbindet die Connell-Tradition der hegemonialen Männlichkeit mit der psychoanalytischen Sozialisationsforschung (Gruen, Chodorow, Winnicott) und der deutschen Sozialpädagogik. Kernkonzepte: Externalisierung (die männliche Tendenz zur Abspaltung von Gefühlen und Projektion innerer Hilflosigkeit); Bedürftigkeit (der leibseelische Zwangszustand, in dem Männer sich nach Innehalten und Sorge sehnen, aber durch die Intensivierung der Erwerbsarbeit daran gehindert werden); Männlichkeit als Medium der Lebensbewältigung statt als starrer Habitus; Dialektik von Dominanz und Verfügbarkeit (Eigenkritik an Connell); 'hidden gender curriculum' in Kindergarten und Schule; 'Gespenst des rollenlosen Mannes' als Krisensymptom; 'balanciertes Mann-Sein' als normatives Ziel. Die zweite, überarbeitete Auflage 2013 integriert eigene empirische Studien (Südtiroler Männerstudie 2012, Sächsische Männerstudie 2008), die Debatte um hegemoniale Männlichkeit in der Globalisierung (Connell/Wood) und eine gesellschaftsdiagnostische Rahmung durch die 'Zweite Moderne' (Beck, Boltanski/Chiapello). Mit Gastbeiträgen von Alexander Wedel (Körperlichkeit) und Reinhard Winter (Jungen und Helden, balanciertes Mann-Sein). Grundlage der deutschsprachigen Männerforschung, direkt rezipiert von Anne Dittmann in 'Jungs von heute, Männer von morgen'."
};
