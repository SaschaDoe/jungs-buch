// nbm-references-data.ts
// Structured reference data for Scott Galloway, "Notes on Being a Man" (Simon & Schuster, 2025)

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
    name: "Galloway, Scott",
    field: "Business / Media",
    works: [
      { title: "Notes on Being a Man: How to address the masculinity crisis, build mental strength and raise good sons", type: "book" as const, year: 2025, publisher: "Simon & Schuster" },
      { title: "The Algebra of Happiness", type: "book" as const, year: 2019, publisher: "Portfolio" },
      { title: "Adrift: America in 100 Charts", type: "book" as const, year: 2022, publisher: "Portfolio" },
      { title: "The Algebra of Wealth", type: "book" as const, year: 2024, publisher: "Portfolio" }
    ],
    pages: "Autor des gesamten Buches",
    context: "NYU-Stern-Marketingprofessor, Seriengründer (Prophet, RedEnvelope, L2, Section), Podcaster (Prof G, Pivot). Kein Fachautor: Er sagt selbst, das Buch enthalte „observations, not peer-reviewed academic research“. Struktur: Memoir entlang der eigenen Biografie (Scheidungskind in 1970er-Kalifornien, alleinerziehende Sekretärin-Mutter, UCLA/Berkeley, Morgan Stanley, Gründungen, späte Vaterschaft), unterbrochen von Statistik-Exkursen und Ratgeber-„Notes“. Politisch selbstverortet als kapitalismus-affiner Demokrat; zentrale Deutung der US-Wahl 2024 als „referendum on failing young men“.",
    keyFigure: true
  },
  {
    name: "Reeves, Richard V.",
    field: "Policy / Brookings / AIBM",
    works: [
      { title: "Of Boys and Men", type: "book" as const, year: 2022, publisher: "Brookings Institution Press" },
      { title: "Missing Misters: Gender Diversity Among Teachers", type: "report" as const, year: 2024, publisher: "American Institute for Boys and Men" },
      { title: "Deaths-of-Despair-Analysen des AIBM", type: "report" as const, year: "2023-2025", publisher: "AIBM" }
    ],
    pages: "durchgehend; explizit Einleitung, Kap. 1, Kap. 5",
    context: "„My Yoda on this subject“ — Galloways wichtigste inhaltliche Quelle und Widmungsträger der Danksagung. Von Reeves stammen: das Surplus-Value-Leitmotiv, die Redshirting-Idee, die Missing-Misters-Lehrerdaten, die Deaths-of-Despair-Aufbereitung, das „acceptable at a dance and invaluable in a shipwreck“-Ideal und die zentristische Grundhaltung. Galloway ist in weiten Teilen die Selbsthilfe-Übersetzung von Of Boys and Men — biologistischer im Ton, identisch in den Policy-Sympathien.",
    keyFigure: true
  },
  {
    name: "Hooven, Carole",
    field: "Evolutionary Biology / Endocrinology",
    works: [
      { title: "T: The Story of Testosterone, the Hormone That Dominates and Divides Us", type: "book" as const, year: 2021, publisher: "Henry Holt" }
    ],
    pages: "Kap. 1 (Scan S. 8-9), Fußnoten-Hauptquelle des T-Exkurses",
    context: "Harvard-Evolutionsbiologin; ihre T-Synthese (Amplifier, nicht Trigger; 10-20× Konzentrationsunterschied; vier Entwicklungsschübe) ist die wissenschaftliche Basis von Galloways Testosteron-Kapitel — dieselbe Quelle, auf die sich Reeves stützt. Galloway zieht daraus allerdings eine stärkere „more nature than nurture“-Folgerung, als Hoovens eigene Position hergibt.",
    keyFigure: true
  },
  {
    name: "Brizendine, Louann",
    field: "Pop-Neuroscience (kritisiert)",
    works: [
      { title: "The Female Brain", type: "book" as const, year: 2007, publisher: "Harmony Books" }
    ],
    pages: "Kap. 1 (Scan S. 16)",
    context: "Quelle der „doppelte Hirnfläche für Sexualtrieb“- und Amygdala-Claims. Brizendines quantitative Behauptungen wurden unmittelbar nach Erscheinen in Nature (Young & Balaban 2006) als unbelegt kritisiert; das Buch ist das Standard-Negativbeispiel der Neurosexismus-Debatte (Eliot, Fine, Rippon). Ihre Zitierung ist der deutlichste Qualitätsbruch zwischen Galloway und seinem Vorbild Reeves.",
    keyFigure: true
  },
  {
    name: "Diaz, Suzanna & Bailey, J. Michael",
    field: "Sexology (retracted)",
    works: [
      { title: "Rapid Onset Gender Dysphoria: Parent Reports on 1,655 Possible Cases", type: "study" as const, year: 2023, publisher: "Archives of Sexual Behavior — RETRACTED 06/2023" }
    ],
    pages: "Kap. 2 (Scan S. 20, Chart-Quellenzeile)",
    context: "Als Quelle der Chart „Age of Onset of Body Dysmorphia“ angegeben — ein Doppelfehler: Die Studie behandelt Rapid-Onset-GENDER-Dysphorie (nicht Body Dysmorphia) auf Basis einer selbstselektierten Eltern-Stichprobe und wurde von Springer im Juni 2023 wegen fehlender Einwilligungsdokumentation zurückgezogen. Der gravierendste Einzelbefund des Evidenz-Audits.",
    keyFigure: true
  },
  {
    name: "Haidt, Jonathan",
    field: "Social Psychology",
    works: [
      { title: "The Anxious Generation", type: "book" as const, year: 2024, publisher: "Penguin Press" },
      { title: "The Real Threat to Gen Z Isn't Smartphones. It's the Internet (NYT)", type: "article" as const, year: 2024 }
    ],
    pages: "Kap. 1 (Scan S. 17), Kap. 5 (Scan S. 72)",
    context: "NYU-Kollege Galloways. Liefert die „overprotected in the real world, under-protected online“-Formel und das „largest uncontrolled experiment“-Zitat. Galloway übernimmt Haidts Kausal-These zur Teen-Mental-Health-Krise ohne die Gegenliteratur (Odgers, Przybylski).",
    keyFigure: true
  },
  {
    name: "Chetty, Raj",
    field: "Economics / Social Mobility",
    works: [
      { title: "The Fading American Dream: Trends in Absolute Income Mobility Since 1940 (Science)", type: "article" as const, year: 2017, coAuthors: ["Grusky", "Hell", "Hendren", "Manduca", "Narang"] },
      { title: "Social Capital II: Determinants of Economic Connectedness", type: "study" as const, year: 2022, publisher: "Opportunity Insights" }
    ],
    pages: "Kap. 4 (Scan S. 56, Chart), Kap. 6 (Scan S. 78)",
    context: "Zweifach zitiert und beide Male korrekt: der Absturz der absoluten Einkommensmobilität (90% → 50%) als Beleg für den gebrochenen Generationenvertrag und die Social-Capital-Studie („reichere Freunde = stärkster Mobilitätsprädiktor“) als ökonomisches Argument für Freundschaft.",
    keyFigure: true
  },
  {
    name: "Holt-Lunstad, Julianne",
    field: "Psychology / Public Health",
    works: [
      { title: "Loneliness and Social Isolation as Risk Factors for Mortality: A Meta-Analytic Review", type: "study" as const, year: 2015, publisher: "Perspectives on Psychological Science", coAuthors: ["Smith", "Baker", "Harris", "Stephenson"] }
    ],
    pages: "Kap. 6 (Scan S. 79-80)",
    context: "Meta-analytische Basis der Loneliness-Mortalitätszahlen (+20% Isolation, +32% Alleinleben) und der populären 15-Zigaretten-Äquivalenz. Auch Grundlage des Surgeon-General-Advisory, das Galloway ebenfalls zitiert.",
    keyFigure: true
  },
  {
    name: "Cox, Daniel A.",
    field: "Survey Research",
    works: [
      { title: "The State of American Friendship: Change, Challenges, and Loss", type: "report" as const, year: 2021, publisher: "Survey Center on American Life" },
      { title: "American Men Suffer a Friendship Recession", type: "article" as const, year: 2021 }
    ],
    pages: "Kap. 6 (Scan S. 77-78, Charts)",
    context: "Standardquelle der Friendship-Recession-These: keine engen Freunde 3% (1990) → 12% (2021); Männer fünfmal häufiger ganz ohne enge Freunde als 1990. Solide Survey-Arbeit, korrekt referiert.",
    keyFigure: true
  },
  {
    name: "Lenroot, Rhoshel & Giedd, Jay",
    field: "Developmental Neuroscience",
    works: [
      { title: "Sex Differences in the Adolescent Brain (Brain and Cognition)", type: "study" as const, year: 2010 }
    ],
    pages: "Kap. 1 (Scan S. 16)",
    context: "NIH-Längsschnittdaten hinter der „Mädchen erreichen Peak-Hirnvolumina früher“-Aussage — dieselbe Evidenzbasis, die Sax (biologistisch) und Reeves (strukturell) je unterschiedlich deuten. Galloways Nutzung liegt näher bei Reeves.",
  },
  {
    name: "Grubbs, Joshua B.",
    field: "Clinical Psychology / Porn Research",
    works: [
      { title: "Self-Reported Addiction to Pornography in a Nationally Representative Sample", type: "study" as const, year: 2019, publisher: "Journal of Behavioral Addictions", coAuthors: ["Kraus", "Perry"] }
    ],
    pages: "Kap. 7 (Scan S. 98)",
    context: "Quelle der „11% der Männer fühlen sich porn-addicted“-Zahl. Ironie der Zitierung: Grubbs' Forschungsprogramm zeigt, dass selbstberichtete Porn-Addiction stark von moralischer Inkongruenz (Scham) getrieben ist, nicht vom Konsumniveau — eine Differenzierung, die Galloways „masculinity killer“-Rhetorik unterläuft.",
  },
  {
    name: "Peter, Jochen & Valkenburg, Patti M.",
    field: "Communication Science",
    works: [
      { title: "Adolescents' Exposure to Sexually Explicit Internet Material and Notions of Women as Sex Objects (Journal of Communication)", type: "study" as const, year: 2009 }
    ],
    pages: "Kap. 7 (Scan S. 98)",
    context: "Niederländischer Längsschnitt (962 Adoleszente): Porn-Exposition prädiziert objektifizierende Einstellungen. Eine der wenigen echten Längsschnittstudien im Porn-Kapitel.",
  },
  {
    name: "Lembke, Anna",
    field: "Psychiatry / Addiction",
    works: [
      { title: "Dopamine Nation", type: "book" as const, year: 2021, publisher: "Dutton" },
      { title: "Interview im Prof G Show", type: "talk" as const, year: 2025 }
    ],
    pages: "Kap. 7 (Scan S. 99)",
    context: "Stanford-Suchtmedizinerin: „Addiction ist eine Krankheit der Einsamkeit“ — alle Drogen (Porn eingeschlossen) als Ersatz für menschliche Verbindung. Theoretischer Anker von Galloways Addiction-Economy-Rahmung.",
  },
  {
    name: "Twenge, Jean M.",
    field: "Psychology / Generational Research",
    works: [
      { title: "Increases in Depression, Self-Harm, and Suicide Among U.S. Adolescents After 2012 (Psychological Inquiry)", type: "study" as const, year: 2022 }
    ],
    pages: "Kap. 5 (Scan S. 72)",
    context: "Datenlieferantin der Post-2012-Verschlechterung jugendlicher Mental Health; gemeinsam mit Haidt die Smartphone-Kausal-Fraktion der Debatte (Kritik: Odgers, Przybylski).",
  },
  {
    name: "Gottman, John & Julie",
    field: "Relationship Research",
    works: [
      { title: "Four-Horsemen-Forschung des Gottman Institute", type: "study" as const, year: "1992-heute" }
    ],
    pages: "Kap. 7 (Scan S. 103)",
    context: "Quelle der Vier-Reiter-Scheidungsprädiktoren und der „85% der Stonewaller sind Männer“-Zahl. Einflussreich, aber die berühmten Vorhersage-Genauigkeiten sind für Post-hoc-Fitting kritisiert worden.",
  },
  {
    name: "Wilcox, W. Bradford",
    field: "Family Sociology (advokatorisch)",
    works: [
      { title: "Two Is Wealthier Than One (Institute for Family Studies)", type: "article" as const, year: 2021 }
    ],
    pages: "Kap. 7 (Scan S. 94)",
    context: "Quelle der Ehe-Vermögens-Zahlen (3× Assets mit 50+). IFS ist ein pro-Ehe-Thinktank; die Korrelationen sind real, die kausale Lesart selektionskonfundiert.",
  },
  {
    name: "Saxbe, Darby",
    field: "Developmental Psychobiology",
    works: [
      { title: "Prenatal Testosterone Synchrony in First-Time Parents (Hormones and Behavior)", type: "study" as const, year: 2023 }
    ],
    pages: "Kap. 8 (Scan S. 105)",
    context: "USC-Forscherin zum T-Abfall werdender Väter — biologische Basis von Galloways „Ballast“-Vaterschaftsideal und unfreiwilliges Argument für die Plastizität der Hormone.",
  },
  {
    name: "Greene, Mark",
    field: "Masculinity Writing",
    works: [
      { title: "The Lack of Gentle Platonic Touch in Men's Lives Is a Killer (Medium)", type: "article" as const, year: 2017 }
    ],
    pages: "Kap. 8 (Scan S. 106)",
    context: "These der männlichen Berührungs-Enteignung (Touch nur als Sex-Vorstufe oder Schwulen-Verdacht) — Grundlage von Galloways „Taking Affection Back“-Programm (Küssen, Händchenhalten mit Söhnen). Konvergiert mit hooks und Way.",
  },
  {
    name: "Way, Niobe (implizit)",
    field: "Developmental Psychology",
    works: [
      { title: "Deep Secrets (Konvergenz, nicht zitiert)", type: "book" as const, year: 2011, publisher: "Harvard University Press" }
    ],
    pages: "Kap. 6 passim (sachliche Überlappung)",
    context: "Nicht von Galloway zitiert, aber die stärkste Konvergenz des Korpus: Ways adoleszenter Intimitätsverlust und Galloways Erwachsenen-Friendship-Recession sind dieselbe Kurve in zwei Lebensphasen. Galloways „go first“-Ratschlag ist praktisch Ways Befund als Handlungsanweisung.",
  },
  {
    name: "Eagleman, David",
    field: "Neuroscience",
    works: [
      { title: "Brain Time", type: "article" as const, year: "o. J." }
    ],
    pages: "Kap. 8 (Scan S. 112)",
    context: "Zeitwahrnehmungs-Forschung („Novelty verlangsamt gefühlte Zeit“) als Basis von Galloways Strategie, das Zeitraffer-Gefühl des Alterns mit neuen Erfahrungen zu bremsen.",
  },
  {
    name: "Ball, Matthew",
    field: "Media / Tech Analysis",
    works: [
      { title: "Breaking Down OnlyFans' Stunning Economics", type: "article" as const, year: 2024, publisher: "MatthewBall.co" }
    ],
    pages: "Kap. 7 (Scan S. 98-99, Chart)",
    context: "Quelle der OnlyFans-Ökonomie ($6,6 Mrd. Umsatz 2023, 88% des Wachstums aus Einzeltransaktionen — Galloways „Arbitrage auf die Mating-Lücke“).",
  },
  {
    name: "Huberman, Andrew",
    field: "Neuroscience / Podcast",
    works: [
      { title: "Fitness-Protokoll (persönliche Mitteilung im Buch)", type: "other" as const, year: 2025 }
    ],
    pages: "Kap. 5 (Scan S. 63-64)",
    context: "Liefert das konkrete Trainingsprotokoll (Morgenlicht, 3× Cardio, 2-3× Kraft). Populärer Vermittler mit solider Basis-Evidenz, aber bekannt für Überdehnung einzelner Studien — hier bleibt es beim Konventionellen.",
  },
  {
    name: "Karp, Harvey",
    field: "Pediatrics",
    works: [
      { title: "The Happiest Baby on the Block / 5-S-Methode", type: "book" as const, year: 2002 }
    ],
    pages: "Kap. 10 (Scan S. 131)",
    context: "Die Fünf-S-Beruhigungsmethode („That shit is genius“) im Crying-Exkurs.",
  }
];

export const institutions: Institution[] = [
  {
    name: "American Institute for Boys and Men (AIBM)",
    type: "Forschungsinstitut (Reeves)",
    context: "Datenlieferant für Suizid-Vergleiche, Missing-Misters-Lehrerstatistik und Deaths-of-Despair-Updates — Galloways wichtigste institutionelle Quelle.",
    pages: "Einleitung, Kap. 1, Kap. 5"
  },
  {
    name: "Brookings Institution",
    type: "Thinktank",
    context: "Carol Grahams Crisis-of-Despair-Analyse; Reeves' früherer Arbeitgeber; Herkunft der Black-Men-Statistiken in Kap. 2.",
    pages: "Einleitung, Kap. 2"
  },
  {
    name: "U.S. Bureau of Labor Statistics / U.S. Census",
    type: "Statistikbehörden",
    context: "Erwerbsquoten, Dual-Earner-Haushalte (67%), Breadwinner-Anteile (Frauen 41%), Living-with-parents-Charts.",
    pages: "Einleitung, Kap. 4, Kap. 8"
  },
  {
    name: "CDC / U.S. Surgeon General",
    type: "Gesundheitsbehörden",
    context: "ADHD-Diagnosen, Suizidraten, Alkohol-Mortalität, Obesity-Kosten ($173 Mrd.), Loneliness-Advisory 2023 und Social-Media-Advisory 2023.",
    pages: "Kap. 1, 5, 6"
  },
  {
    name: "Survey Center on American Life",
    type: "Survey-Institut (AEI)",
    context: "Friendship-Recession-Daten (Cox) — Kern des Freundschaftskapitels.",
    pages: "Kap. 6"
  },
  {
    name: "Pew Research Center",
    type: "Survey-Institut",
    context: "Dating-Absichten nach Geschlecht (34% vs. 54%), Bildungs-Heiratsgap, Equal-Earner-Ehen.",
    pages: "Kap. 7, Kap. 8"
  },
  {
    name: "Gallup / Harvard IOP Youth Poll",
    type: "Survey-Institute",
    context: "Kinderlosigkeit unter 30 (21% vs. 50% in 1950); 2025 Harvard Youth Poll: 4 von 10 unter 30 „barely getting by“, nur 15% sehen das Land auf richtigem Kurs — Galloways „five-alarm fire“.",
    pages: "Kap. 4 (Scan S. 56), Kap. 7"
  },
  {
    name: "Gottman Institute",
    type: "Beziehungsforschungs-Institut",
    context: "Four Horsemen, Stonewalling-Geschlechterverteilung.",
    pages: "Kap. 7"
  },
  {
    name: "Simon & Schuster",
    type: "Verlag",
    context: "Verlag des Buches (US + UK 2025). Peter Smith als Ghostwriter/„our writer“ und Lily Smith für Zitationen in der Danksagung genannt — relevant für die Verantwortlichkeits-Frage beim Fußnotenapparat.",
    pages: "Impressum, Acknowledgments"
  }
];

export const studies: StudyRef[] = [
  {
    name: "Kraus-Weber-Tests → Presidential Fitness Test",
    authors: "Kraus & Hirschland; Eisenhower-Administration",
    year: "1950er",
    finding: "60% der US-Kinder scheiterten an Basis-Fitnesstests vs. 8% der europäischen — Auslöser des Presidential Fitness Test. Galloways historischer Aufhänger für die Fitness-These.",
    pages: "Kap. 5 (Scan S. 59)"
  },
  {
    name: "Harvard Study of Adult Development („Harvard happiness study“)",
    authors: "Vaillant, Waldinger et al.",
    year: "1938-heute",
    finding: "Beziehungsqualität mit 50 prädiziert Gesundheit mit 80 besser als Cholesterin — Galloways Kernbeleg für „relationships are the ends“.",
    pages: "Kap. 6 (Scan S. 80)"
  },
  {
    name: "DoD Qualified Military Available Study",
    authors: "Pentagon",
    year: "2022",
    finding: "77% der 17-24-Jährigen ohne Waiver nicht dienstfähig (Gewicht, Mental Health, Drogen) — von Galloway leicht verschoben als „77% der Bewerber brauchen Waiver“ referiert.",
    pages: "Kap. 5 (Scan S. 60)"
  },
  {
    name: "Hinge/Tinder-Attention-Verteilung",
    authors: "Quartz (Kopf) / pseudonymer Medium-Autor",
    year: "2015/2017",
    finding: "Top-10% der Männer erhalten ~60% der Likes; Tinder-„Gini“ extremer als jede Volkswirtschaft. Richtung durch Bruch & Newman (2018, Science Advances) gestützt, Zahlen aber Blog-Qualität.",
    pages: "Kap. 7 (Scan S. 95)"
  },
  {
    name: "Abrams et al. — Neurodevelopmental Shift von Mutter- zu Fremdstimmen",
    authors: "Abrams, Menon et al.",
    year: "2022 (Journal of Neuroscience)",
    finding: "Adoleszente Belohnungssysteme orientieren sich ab ~13-15 von Elternstimmen auf fremde Stimmen um — Galloways neurowissenschaftliches Argument für Mentoren („Boys will listen to their dads' friends more than their own dads“).",
    pages: "Kap. 8 (Scan S. 118)"
  },
  {
    name: "Sharkey — Homebound",
    authors: "Patrick Sharkey",
    year: "2024 (Sociological Science)",
    finding: "US-Erwachsene verbringen seit 2003 dramatisch mehr Zeit zuhause (+100 min/Tag im Pandemie-Peak, stabil ~+60 min danach) — Basis der „Leave your house“-Mahnung.",
    pages: "Kap. 4 (Scan S. 51, Chart)"
  },
  {
    name: "Frederick et al. — Body Image Dissatisfaction",
    authors: "D. A. Frederick et al.",
    year: "2012",
    finding: "10-30% der US-Männer unzufrieden mit ihrem Körper; ~70% der adoleszenten Jungen unzufrieden mit Gewicht, ~90% mit Muskulatur — die korrekte Basis der Body-Dysmorphia-Passage (im Gegensatz zur falsch bequellten Chart).",
    pages: "Kap. 2 (Scan S. 19)"
  },
  {
    name: "Roth et al. — Caregiver-Mortalität",
    authors: "David L. Roth et al.",
    year: "2018 (Psychology and Aging)",
    finding: "Pflegende Angehörige haben NIEDRIGERE Mortalitätsraten als Nicht-Pflegende (Stress-Buffering) — Galloways Beleg, dass Geben gesund ist.",
    pages: "Kap. 7 (Scan S. 102-103)"
  },
  {
    name: "Rutz Gotland Study (Kontext der Bibliothek)",
    authors: "Wolfgang Rutz et al.",
    year: "1992",
    finding: "Nicht von Galloway zitiert — aber sein SCAFA-Selbstmanagement und die „men are either angry or fine“-Beobachtung (Bill Burr) decken sich mit der male-depression-Symptomatik (Reizbarkeit statt Trauer), die Rutz/Real in der Bibliothek verankern.",
    pages: "Kap. 5 (Scan S. 67-68, sachliche Überlappung)"
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
  title: "Notes on Being a Man",
  subtitle: "How to address the masculinity crisis, build mental strength and raise good sons",
  author: "Scott Galloway",
  publisher: "Simon & Schuster",
  year: 2025,
  description:
    "Das Selbsthilfe-Memoir der Bibliothek: NYU-Marketingprofessor und Podcaster Scott Galloway erzählt seine Biografie — Scheidungskind im Kalifornien der 1970er, alleinerziehende Sekretärin-Mutter, „unremarkable kid“, UCLA-Zulassung als Gnadenakt, Morgan Stanley, neun Gründungen, späte Vaterschaft zweier Söhne — und destilliert daraus ein Männlichkeitsprogramm. Kernkonzepte: der dreibeinige Hocker (Protect, Provide, Procreate); Surplus Value (mehr geben als nehmen — explizit von Richard Reeves übernommen, den Galloway „my Yoda“ nennt); Guardrails; die Addiction Economy als Feind des unreif-männlichen präfrontalen Kortex; Kindness als Praxis; Mentorship älterer Männer als „fastest blue-line path to a better world“. " +
    "Wissenschaftlicher Charakter: ausdrücklich „observations, not peer-reviewed academic research“. Wo Galloway Reeves, Regierungsstatistiken oder große Meta-Analysen nacherzählt (Deaths of Despair, PFC-Timing, Friendship Recession, Chetty, Holt-Lunstad, Noetel), ist er solide. Wo er selbst recherchiert, zitiert er Medium-Posts, Glamour und pseudonyme Blogs; im Hirn-Kapitel stehen Brizendine-Claims ohne peer-reviewte Basis, und eine Chart führt als Quelle eine ZURÜCKGEZOGENE Studie über ein anderes Konstrukt (Diaz & Bailey ROGD als „Body Dysmorphia“). " +
    "Position im Korpus: inhaltlich zu großen Teilen ein Reeves-Derivat mit biologistischerem Einschlag („more nature than nurture“ — näher bei Sax/Gurian als bei Reeves' Mittelposition), rhetorisch aber der lauteste Gegner des „toxische Männlichkeit“-Vokabulars („the emperor of all oxymorons“). Zugleich bestätigt seine Memoir-Ebene die klinische Konvergenz der Bibliothek — Maske, Alexithymie („16 Jahre nicht geweint“), Vaterhunger, Emotionsöffnung im Alter — in der ersten Person. Sein Alleinstellungsmerkmal: Er erreicht als einziger Autor des Korpus ein Millionenpublikum junger Männer, die weder hooks noch Pollack noch Reeves je lesen würden."
};
