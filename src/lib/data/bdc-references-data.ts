// bdc-references-data.ts
// Structured reference data for Jack Urwin, "Boys Don't Cry: Identität, Gefühl und Männlichkeit" (Nautilus Flugschrift, 2017)

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
    name: "Urwin, Jack",
    field: "Journalismus / Popkultur",
    works: [
      { title: "Boys Don't Cry: Identität, Gefühl und Männlichkeit", type: "book" as const, year: 2017, publisher: "Edition Nautilus (dt.) / Iconbooks (engl. Original 2016)" },
      { title: "A Stiff Upper Lip Is Killing British Men", type: "article" as const, year: 2014, publisher: "VICE Magazine" }
    ],
    pages: "Autor des gesamten Buches",
    context: "Britischer Journalist, schreibt für VICE, 1992 in Loughborough geboren. Studierte Journalistik in London. Im Oktober 2014 veröffentlichte er den VICE-Artikel „A Stiff Upper Lip Is Killing British Men”, der viral ging und ihn international bekannt machte. Boys Don't Cry ist die Buchlänge-Ausarbeitung der im Artikel angeschnittenen Themen. Das Buch ist dezidiert journalistisch, nicht akademisch — Urwin selbst betont, kein Experte für Gender Studies zu sein. Der autobiographische Ausgangspunkt ist der Tod seines Vaters Richard Urwin mit 51 an einem Herzinfarkt (1999), verursacht durch verschwiegene frühere Herzprobleme und Hilfevermeidung.",
    keyFigure: true
  },

  // ---- Interview-Subjekte ----
  {
    name: "Sharples, Jonny",
    field: "Journalismus / Hinterbliebenenarbeit",
    works: [
      { title: "Essays und Artikel über Suizid-Hinterbliebenschaft", type: "article" as const, year: "2014-" }
    ],
    pages: "Kap. Die Zukunft, S. 60-65",
    context: "Bruder von Simon Sharples (36, Vater), der sich Weihnachten 2014 das Leben nahm. Jonny Sharples schrieb nach dem Tod seines Bruders öffentlich darüber und engagiert sich gegen das Tabu um männlichen Suizid. Urwin interviewt ihn im Kapitel „Die Zukunft” als primäres Beispiel dafür, wie „gewöhnlich” die Suizid-Epidemie unter britischen Männern aussieht."
  },
  {
    name: "Huddleston, Josh",
    field: "Militär / Veteranenstimme",
    works: [
      { title: "Interview in Boys Don't Cry über USMC-Kultur", type: "other" as const, year: 2015 }
    ],
    pages: "Kap. Mann am Boden, S. 96-115",
    context: "US-Marine-Corps-Veteran, Einsätze in Djibouti 2004 und Irak 2005/2006. Wuchs im ländlichen Ohio auf. Wählte die Marines, weil sein Vater bei den Marines war und weil er als schmächtiger Junge seine Männlichkeit beweisen wollte. Urwin interviewt ihn als Beispiel dafür, wie US-Popkultur (Sport, Kriegsfilme, Videospiele) Jungen auf eine militärisch-toxische Männlichkeit konditioniert."
  },
  {
    name: "Bentley, Christina",
    field: "Militär / Trans-Aktivismus",
    works: [
      { title: "Interview in Boys Don't Cry über Coming-out in der RAF", type: "other" as const, year: 2014 }
    ],
    pages: "Kap. Mann am Boden, S. 112-120",
    context: "Erste trans Polizistin der britischen Royal Air Force, die sich öffentlich outete. Zur RAF zu gehen war ursprünglich ein Versuch, ihre Trans-Identität zu verdrängen und zu „übertönen”. Das Coming-out in der RAF war aufgrund der strikten Anti-Diskriminierungspolitik weniger traumatisch als im zivilen Leben. Urwins Interview zeigt, dass institutionelle Männlichkeits-Reform durch gut durchgesetzte Regeln möglich ist."
  },
  {
    name: "Oliver, Huw",
    field: "Journalismus / Essstörungs-Zeugenschaft",
    works: [
      { title: "Artikel über männliche Anorexie", type: "article" as const, year: "2014-" }
    ],
    pages: "Kap. Der ideale Mann, S. 140-145",
    context: "Journalist, der als Teenager an Anorexie erkrankte — zu einer Zeit, als er auf einer reinen Jungenschule war. Urwin interviewt ihn als Beispiel für männliche Essstörungen und das verstärkte Stigma: weil Anorexie als „Mädchenkrankheit” gilt, verschwieg Oliver seine Krankheit jahrelang. Die Rolle der Medien (NME, Topman-Jeans, indie-Magerkeits-Ideal) wird über das Interview zugänglich gemacht."
  },
  {
    name: "Reynolds, Emily",
    field: "Feministische Journalistin / Psychische Gesundheit",
    works: [
      { title: "A Beginner's Guide to Losing Your Mind (2017)", type: "book" as const, year: 2017, publisher: "Hodder" }
    ],
    pages: "Kap. Ausrasten, S. 200-205",
    context: "Britische Journalistin, schreibt über psychische Gesundheit und Feminismus. Urwin interviewt sie zu ihrem porno-besessenen Ex-Freund als Fall, wo Pornografie-Konsum mit Kontrollzwang und dem Wunsch verbunden war, Frauen nicht real respektieren zu müssen."
  },

  // ---- Zitierte Schriftsteller:innen / Theoretiker:innen ----
  {
    name: "Larkin, Philip",
    field: "Lyrik",
    works: [
      { title: "This Be The Verse (Gedicht, 1971)", type: "other" as const, year: 1971 },
      { title: "High Windows (Gedichtband)", type: "book" as const, year: 1974, publisher: "Faber & Faber" }
    ],
    pages: "Kap. Mann & Frau, S. 121",
    context: "Britischer Lyriker. Urwin zitiert die berühmten Eröffnungsverse „They fuck you up, your mum and dad / They may not mean to, but they do” als Motto des Familien-Kapitels. Illustriert die unvermeidliche emotionale Weitergabe elterlicher Beschädigungen."
  },
  {
    name: "Penny, Laurie",
    field: "Feministische Journalistin",
    works: [
      { title: "Unspeakable Things: Sex, Lies and Revolution", type: "book" as const, year: 2014, publisher: "Bloomsbury" },
      { title: "Meat Market: Female Flesh Under Capitalism", type: "book" as const, year: 2011, publisher: "Zero Books" }
    ],
    pages: "Kap. Ausrasten; Kap. Wir müssen reden",
    context: "Prominenteste feministische Autorin ihrer Generation in UK. Urwin zitiert ihre Formulierung „Die ideale Frau ist fickbar, fickt aber nie selber” als Paradebeispiel der sexuellen Doppelmoral. Penny hat Urwin persönlich zum Schreiben dieses Buches ermutigt."
  },
  {
    name: "Palahniuk, Chuck",
    field: "Literatur",
    works: [
      { title: "Fight Club", type: "book" as const, year: 1996 }
    ],
    pages: "Kap. Fight Club, S. 76-80",
    context: "Amerikanischer Romancier. Fight Club als von Urwin ambivalent diskutierter Roman: Urwin mag das Buch, kritisiert aber seine Fetischisierung durch junge männliche Leser, die den Text unironisch als Männlichkeits-Manifest lesen, statt als Kritik am Konsumkapitalismus und toxischer Männlichkeit."
  },
  {
    name: "Simpson, Mark",
    field: "Journalismus / Popkultur-Theorie",
    works: [
      { title: "Metrosexuelle Beiträge in The Independent (seit 1994)", type: "article" as const, year: 1994, publisher: "The Independent" },
      { title: "Male Impersonators: Men Performing Masculinity", type: "book" as const, year: 1994, publisher: "Cassell" }
    ],
    pages: "Kap. Der ideale Mann, S. 128",
    context: "Britischer Journalist und Theoretiker der Männlichkeit, prägte 1994 den Begriff „metrosexuell” in einem Artikel für The Independent. Der Begriff beschreibt die Verschiebung der männlichen Körperästhetik hin zu Konsum, Mode und Selbst-Pflege."
  },
  {
    name: "Daubney, Martin",
    field: "Journalismus / Porno-Pädagogik",
    works: [
      { title: "Guardian-Artikel zur Porno-Pädagogik", type: "article" as const, year: "2013-", publisher: "The Guardian" }
    ],
    pages: "Kap. Ausrasten, S. 195-200",
    context: "Ehemaliger Chefredakteur der britischen Lad-Zeitschrift Loaded. Urwin zitiert ihn (mit Abstand, „auch wenn ich kein Fan bin”) als pragmatische Stimme zur Porno-Pädagogik: Ein Verbot wird scheitern, daher muss man jungen Männern beibringen, Pornografie kritisch und verantwortungsbewusst zu konsumieren."
  },

  // ---- Popkulturelle Referenzen ----
  {
    name: "Louis CK",
    field: "Stand-up Comedy",
    works: [
      { title: "Stand-up-Auftritte zur Kritik weißer/männlicher Privilegien", type: "talk" as const, year: "2008-" }
    ],
    pages: "Kap. Männerdämmerung, S. 44-46",
    context: "Amerikanischer Komiker. Urwin zitiert CK's Bit über weißes Privileg („Ich find's toll, weiß zu sein”) als Analogie für männliche Privilegien — Privilegierte haben keinen Anreiz, freiwillig ihre Position aufzugeben. (Die Ironie, dass CK später wegen sexuellen Fehlverhaltens diskreditiert wurde, war zum Zeitpunkt der Buchveröffentlichung noch nicht öffentlich.)"
  },
  {
    name: "Lee, Stewart",
    field: "Stand-up Comedy",
    works: [
      { title: "Comedy Vehicle (BBC)", type: "other" as const, year: "2009-" }
    ],
    pages: "Kap. Fight Club, S. 83",
    context: "Britischer Komiker. Zitiert mit seiner berühmten Charakterisierung von Top-Gear-Moderator Richard Hammond als jemand, der „eine Karriere als Bestseller-Autor darauf aufbaut, dass er nicht sicher Autofahren kann”."
  },
  {
    name: "Welsh, Irvine",
    field: "Literatur",
    works: [
      { title: "Trainspotting", type: "book" as const, year: 1993 }
    ],
    pages: "Einführung, S. 19",
    context: "Schottischer Autor. Welsh nannte Urwins VICE-Artikel „phantastisch”, was Urwin als einen der Momente beschreibt, in dem er begriff, dass sein Artikel etwas Größeres angestoßen hatte."
  },
  {
    name: "Hicks, Bill",
    field: "Stand-up Comedy",
    works: [
      { title: "The War (Stand-up)", type: "talk" as const, year: 1992 }
    ],
    pages: "Kap. Fight Club, S. 84",
    context: "Amerikanischer Komiker. Urwin zitiert Hicks' Witz über Waffengewalt in den USA vs. Fußball-Gewalt in Großbritannien."
  }
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "Samaritans",
    type: "Hilfsorganisation / Suizidprävention",
    context: "Britische Non-Profit-Organisation zur Suizidprävention. Ihr Bericht „Men, Suicide and Society” (2012) ist Urwins wichtigste Sekundärquelle — er legte fest, dass das soziale Konstrukt von Männlichkeit eine Hauptursache für die männliche Suizidrate ist. Die Samariter-Kampagne „Wir sind auf deiner Seite” mit Boxer-, Soldat- und Arbeiter-Rollenbildern wird von Urwin pragmatisch gutgeheißen, auch wenn er ihre Verstärkung traditioneller Männlichkeitsideale kritisiert.",
    pages: "Durchgängig; Einführung, Kap. Die Zukunft, Kap. Fight Club, Kap. Wir müssen reden"
  },
  {
    name: "CALM (Campaign Against Living Miserably)",
    type: "Hilfsorganisation / Männergesundheit",
    context: "Britische Non-Profit-Organisation zur Männer-Suizidprävention. CALMs Partnerschaft mit Lynx (Deodorant-Marke) wird von Urwin als pragmatisch-wirksames Beispiel diskutiert: Eine Marke mit toxischer Werbe-Geschichte wird zum Vehikel für Anti-Suizid-Botschaften. Strategisch kompromisshaft, aber effektiv.",
    pages: "Kap. Wir müssen reden, S. 232-236"
  },
  {
    name: "VICE Media",
    type: "Medien-Unternehmen",
    context: "Globales Online-Medium, in dem Urwins Durchbruchs-Artikel „A Stiff Upper Lip Is Killing British Men” im Oktober 2014 erschien. Der Artikel ging viral und ermöglichte Urwin den Buchvertrag.",
    pages: "Einführung, S. 17-20; durchgängig als biographischer Anker"
  },
  {
    name: "British National Health Service (NHS)",
    type: "Staatliches Gesundheitssystem",
    context: "Quelle der Mortalitäts-, Essstörungs- und Gesundheitsverhaltens-Statistiken, die Urwin durchgängig zitiert. Der NHS erhielt in den 1940ern einen besonderen Status im britischen Identitätsnarrativ der Nachkriegszeit.",
    pages: "Einführung, Kap. Der ideale Mann"
  },
  {
    name: "United States Marine Corps (USMC)",
    type: "Militär / Streitkräfte",
    context: "Als Paradigma US-amerikanischer hypermaskuliner Institution analysiert. Josh Huddleston als Interviewpartner. Zentral für Urwins Diskussion über institutionelle Reproduktion toxischer Männlichkeit.",
    pages: "Kap. Mann am Boden, S. 96-115"
  },
  {
    name: "Royal Air Force (RAF)",
    type: "Militär / Streitkräfte",
    context: "Als Gegenbeispiel zur USMC: Die RAF hat strikte Anti-Diskriminierungspolitik und Christina Bentley konnte dort als trans Polizistin ihr Coming-out weniger traumatisch erleben als im zivilen Leben. Zeigt, dass institutionelle Männlichkeit reformierbar ist.",
    pages: "Kap. Mann am Boden, S. 112-120"
  },
  {
    name: "BMFSFJ / UK Department for Transport",
    type: "Regierungsbehörde",
    context: "Quelle für die Verkehrsunfallstatistiken, die Urwin im Fight-Club-Kapitel zitiert.",
    pages: "Kap. Fight Club, S. 70-72"
  },
  {
    name: "Clemenger BBDO / Ogilvy",
    type: "Werbeagenturen",
    context: "Werbeagenturen hinter der australischen NSW-Verkehrssicherheitskampagne „Speeding: No One Thinks Big Of You” — eines der wenigen Beispiele für erfolgreiche verhaltensändernde Interventionen gegen toxische Männlichkeit.",
    pages: "Kap. Fight Club, S. 74-75"
  },
  {
    name: "Fußball-Hooliganismus-Subkultur (Clapton Ultras)",
    type: "Fan-Subkultur",
    context: "Die Clapton Ultras werden von Urwin positiv hervorgehoben: ein antifaschistisches, anti-rassistisches, anti-sexistisches Hardcore-Fan-Kollektiv, das gegen die patriarchal-hooligan-Tradition im britischen Fußball steht. Ihr Ausschluss von Steve Hedley (RMT Union) wegen häuslicher Gewalt ist ein positives Gegenbeispiel zur üblichen Mob-Mentalität.",
    pages: "Kap. Fight Club, S. 86-88"
  },
  {
    name: "Men's Rights Activists (MRAs) / Manosphere",
    type: "Politische Subkultur",
    context: "Von Urwin explizit abgelehnt. MRAs behaupten, sich für männliche Suizidprävention und Opfer-Männer einzusetzen, verwenden aber ihre Energie primär auf Anti-Feminismus-Kampagnen. A Voice for Men (AVFM) als paradigmatische Organisation. Urwin unterscheidet klar zwischen legitimen Anliegen männlicher Verwundbarkeit und der MRA-Ideologie.",
    pages: "Kap. Die Zukunft, S. 55-57; Kap. Wir müssen reden, S. 230-232"
  }
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Samaritans — Men, Suicide and Society Report",
    authors: "Samaritans (UK)",
    year: "2012",
    finding: "Der zentrale britische Bericht zur männlichen Suizidepidemie. Identifiziert das soziale Konstrukt von Männlichkeit als Hauptursache: „Männern wird von Kindesbeinen an beigebracht, ‚männlich' zu sein bedeute, keinen Wert auf soziale und emotionale Kompetenzen zu legen”. Die ‚gesunde' Bewältigungsstrategie für Männer sei, Stress durch Musik oder Sport zu verarbeiten, nicht durch Reden. Grundlage für Urwins gesamte Argumentation.",
    pages: "Einführung, Kap. Die Zukunft, durchgängig"
  },
  {
    name: "UK Office for National Statistics — Suizidraten",
    authors: "UK Government",
    year: "laufend",
    finding: "Britische Suizidstatistiken: 78% aller Suizide 2013 männlich; Selbstmord Haupttodesursache britischer Männer im Alter 20-49. Ratio 3× weiblich ist in westlichen Ländern konsistent.",
    pages: "Einführung, S. 14-16; Kap. Die Zukunft, S. 58"
  },
  {
    name: "NHS UK — Men's Health Statistics",
    authors: "NHS",
    year: "laufend",
    finding: "Männer gehen nur halb so oft zum Hausarzt; vorzeitige Todesfälle (unter 50) bei Männern 1,5× häufiger; Hautkrebs bei gleicher Inzidenz doppelte Mortalität; männliche Essstörungen +27% seit 2000.",
    pages: "Einführung, S. 14; Kap. Der ideale Mann, S. 140-142"
  },
  {
    name: "NSW (Australien) Verkehrssicherheitskampagne",
    authors: "Clemenger BBDO / Ogilvy; NSW Roads Authority",
    year: "ca. 2007-2010",
    finding: "Kampagne „Speeding: No One Thinks Big Of You” mit Bildern von Frauen, die mit dem kleinen Finger auf junge Männer zeigen. Die Kampagne entlarvte implizit die Penis-Kompensations-Motivation hinter riskantem Fahren. Ergebnis: Verringerte Verkehrstote im ersten Jahr, 75% der jungen Fahrer gaben an, ihr Verhalten angepasst zu haben. Leigh Bignell von Ogilvy: „Sie hatten mehr Angst, uncool zu gelten, als zu sterben.”",
    pages: "Kap. Fight Club, S. 74-75"
  },
  {
    name: "UK Road Safety Statistics (Department for Transport)",
    authors: "UK Government",
    year: "laufend",
    finding: "Zahl der Männer, die beim Autofahren getötet oder schwer verletzt werden, ist durchschnittlich doppelt so hoch wie die der Frauen. Die Versicherungsprämien-Ungleichheit vor dem EuGH-Urteil 2012 spiegelte diese Statistik.",
    pages: "Kap. Fight Club, S. 70-72"
  },
  {
    name: "Urwins VICE-Artikel-Rezeption",
    authors: "VICE Media / Jack Urwin",
    year: "Oktober 2014",
    finding: "Der ursprüngliche 1.500-Wort-Artikel „A Stiff Upper Lip Is Killing British Men” wurde weltweit zehntausendfach geteilt und von Autor:innen wie Irvine Welsh und Laurie Penny öffentlich unterstützt. Die ungewöhnlich breite Resonanz (sowohl von Feminist:innen als auch von ganz normalen Männern, sogar einigen MRAs) war der Anlass für das Buch.",
    pages: "Einführung, S. 17-20"
  },
  {
    name: "Interviews im Buch — primäre qualitative Erhebung",
    authors: "Jack Urwin",
    year: "2014-2016",
    finding: "Sechs zentrale Interviews strukturieren das Buch: Jonny Sharples (Bruder eines Suizidopfers), Josh Huddleston (USMC-Veteran), Christina Bentley (erste trans RAF-Polizistin), Huw Oliver (männliche Anorexie), Emily Reynolds (zu Porno-Besessenheit), Megan (Urwins Ex-Freundin). Die Interviews liefern lived experience als empirischen Kern; sie sind qualitativ reichhaltig, aber nicht als repräsentative Studie gedacht.",
    pages: "Durchgängig"
  },
  {
    name: "Fenerbahce Istanbul Frauen-Stadion-Experiment 2011",
    authors: "Türkischer Fußballverband",
    year: "2011",
    finding: "Als Disziplinarmaßnahme gegen männliche Fan-Gewalt wurde Fenerbahce gezwungen, zwei Heimspiele ohne männliche Fans auszutragen — nur Frauen und Kinder (kostenlos) wurden zugelassen. Das Resultat: die Gastmannschaft wurde mit Applaus statt mit Spott begrüßt; Omer Aysan (Mittelfeldspieler) sagte: „Es hat großen Spaß gemacht und die Atmosphäre war freundlich.” Ein natürliches Experiment, das zeigt, dass die giftige Atmosphäre in Fußballstadien spezifisch an männlicher Massendynamik hängt.",
    pages: "Kap. Fight Club, S. 87-88"
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
  title: "Boys Don't Cry",
  subtitle: "Identität, Gefühl und Männlichkeit",
  author: "Jack Urwin",
  publisher: "Edition Nautilus (Nautilus Flugschrift, dt. Übersetzung)",
  year: 2017,
  description:
    "Ein journalistisch-persönliches Buch über die lebensgefährlichen Folgen rigider Männlichkeitsnormen, insbesondere in britisch-working-class-Kontexten. Der VICE-Journalist Jack Urwin schreibt aus dem autobiographischen Anlass des frühzeitigen Todes seines Vaters Richard (gestorben mit 51 an einem Herzinfarkt, nachdem er einen früheren Infarkt verschwiegen und nie einen Arzt aufgesucht hatte). Das Buch entstand aus Urwins viralem VICE-Artikel vom Oktober 2014 („A Stiff Upper Lip Is Killing British Men”). " +
    "Zentrale Konzepte: Toxische Männlichkeit als organisierender Dachbegriff (definiert als übertriebenes Verhalten zur Performance von Männlichkeit, motiviert durch Unsicherheit); Urwins analytische Originalleistung — die Unterscheidung zwischen aktiver toxischer Männlichkeit (Machismo, Gewalt, Risikoverhalten) und passiver toxischer Männlichkeit (Schweigen, Hilfeverweigerung, „Stiff Upper Lip”); „Jungen weinen nicht” als paradigmatische Phrase früher Konditionierung; Anti-Biologismus als Grundposition; „Das Patriarchat schadet auch den Männern” als strategische Rekrutierungs-Formel; Inter-generationales Trauma als Transmissionsmechanismus (WW2-Veteran-Großvater → emotional verschlossener Vater → depressiver Sohn). " +
    "Empirischer Ankerpunkt: britische Suizidrate (3× weiblich, 78% aller UK-Suizide 2013 männlich), halbe Arztbesuchsfrequenz, 1,5× höhere vorzeitige Mortalität, doppelte Hautkrebs-Mortalität, 27% Anstieg männlicher Essstörungen seit 2000. " +
    "Struktur: Einführung (Vatertod als Anker), Männerdämmerung (Anti-Biologismus, patriarchaler Anreiz), Die Zukunft (Suizidepidemie, „Jungen weinen nicht”), Fight Club (aktive Variante, NSW-Kampagne, Hooliganismus), Mann am Boden (Militär als toxisch-und-reformierbar), Der ideale Mann (Konsumkapitalismus und Körperbild), Mann & Frau (Beziehungsschäden, häusliche Gewalt), Männlichkeit jenseits (Homophobie und LGBT), Ausrasten (Vergewaltigungskultur), Wir müssen reden (pragmatische Lösungen). " +
    "Positionierung: bewusst populär und anti-akademisch („Ich weiß nicht das Geringste über Gender Studies”), aber konvergent mit der kritischen Männerforschung. Das britisch-journalistische Pendant zu Süfkes klinischer Phänomenologie und zu Böhnischs akademischer Soziologie. Teilt mit hooks die strategische These „Patriarchat schadet auch den Männern”. Steht explizit gegen MRA-/Mythopoetic-Männerbewegung und gegen biologistische Autoren wie Sax oder Gurian."
};
