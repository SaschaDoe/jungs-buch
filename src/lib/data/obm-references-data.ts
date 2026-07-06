// obm-references-data.ts
// Structured reference data for Richard V. Reeves, "Of Boys and Men" (Brookings Institution Press, 2022)

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
    name: "Reeves, Richard V.",
    field: "Policy / Brookings",
    works: [
      { title: "Of Boys and Men: Why the Modern Male is Struggling, Why It Matters, and What To Do About It", type: "book" as const, year: 2022, publisher: "Brookings Institution Press" },
      { title: "Dream Hoarders: How the American Upper Middle Class Is Leaving Everyone Else in the Dust", type: "book" as const, year: 2017, publisher: "Brookings Institution Press" },
      { title: "John Stuart Mill: Victorian Firebrand", type: "book" as const, year: 2007, publisher: "Atlantic Books" }
    ],
    pages: "Autor des gesamten Buches",
    context: "Britisch-amerikanischer Policy-Wonk am Brookings Institution, Senior Fellow in Economic Studies. Zuvor Forschung zu sozialer Mobilität und Chancengleichheit. Vater von drei Söhnen. 2023 gründete er das American Institute for Boys and Men (AIBM). Of Boys and Men ist bewusst zentristisch positioniert — Advocate für Gleichberechtigung, aber ohne Bindung an Links- oder Rechtsflügel.",
    keyFigure: true
  },

  // ---- Key empirical sources (Meta-analyses and big data studies) ----
  {
    name: "Chetty, Raj",
    field: "Economics / Social Mobility",
    works: [
      { title: "Race and Economic Opportunity in the United States: An Intergenerational Perspective (QJE)", type: "article" as const, year: 2020, coAuthors: ["Nathaniel Hendren", "Maggie R. Jones", "Sonya R. Porter"] },
      { title: "The Opportunity Insights Project", type: "study" as const, year: "ongoing", publisher: "Harvard" }
    ],
    pages: "Kap. 4, S. 37-38",
    context: "Harvard-Ökonom, Gründer von Opportunity Insights. Seine 20-Millionen-Personen-Studie mit IRS-Daten zur intergenerationellen Einkommensmobilität ist methodologisch eine der stärksten Sozialmobilität-Analysen überhaupt. Zentraler Befund: Der Black-white mobility gap ist „entirely driven by differences in men's, not women's, outcomes”.",
    keyFigure: true
  },
  {
    name: "Autor, David H.",
    field: "Economics / Labor Market",
    works: [
      { title: "Wayward Sons: The Emerging Gender Gap in Labor Markets and Education", type: "article" as const, year: 2013, publisher: "Third Way", coAuthors: ["Melanie Wasserman"] },
      { title: "The China Shock: Learning from Labor Market Adjustment to Large Changes in Trade", type: "article" as const, year: 2016, publisher: "Annual Review of Economics" }
    ],
    pages: "Kap. 2, S. 14-16",
    context: "MIT-Ökonom, führender Forscher zum Arbeitsmarkt-Einfluss von Automatisierung, Globalisierung und Bildung. Seine Arbeit mit Wasserman zum männlichen Arbeitsmarkt-Abstieg ist die akademische Hauptreferenz für Reeves' Kap. 2. Der 4-Dimensionen-Befund („skills acquisition; employment rates; occupational stature; real wage levels”) stammt von ihm.",
    keyFigure: true
  },
  {
    name: "Hooven, Carole",
    field: "Evolutionary Biology / Human Evolutionary Biology",
    works: [
      { title: "Testosterone: The Story of the Hormone That Dominates and Divides Us", type: "book" as const, year: 2021, publisher: "Henry Holt" }
    ],
    pages: "Kap. 7, S. 66-67",
    context: "Harvard-Evolutionsbiologin. Ihre 2021-Synthese zu Testosteron ist Reeves' zentrale Quelle für die Amplifier-statt-Trigger-These. Hooven vertritt die Position, dass Testosteron reale Effekte auf Verhalten hat, aber dass diese kulturabhängig moduliert werden. Ein methodologischer Mittelweg zwischen Biologismus und Konstruktivismus.",
    keyFigure: true
  },
  {
    name: "Henrich, Joseph",
    field: "Cultural Evolution / Evolutionary Anthropology",
    works: [
      { title: "The WEIRDest People in the World: How the West Became Psychologically Peculiar and Particularly Prosperous", type: "book" as const, year: 2020, publisher: "Farrar, Straus and Giroux" },
      { title: "The Secret of Our Success: How Culture Is Driving Human Evolution", type: "book" as const, year: 2016, publisher: "Princeton University Press" }
    ],
    pages: "Kap. 7, S. 67, 69",
    context: "Harvard-Anthropologe und Evolutionspsychologe. Seine Forschung zur Ko-Evolution von Biologie und Kultur gibt Reeves den Rahmen „nature and nurture both matter”. Das Konzept der Ehe als „testosterone suppression system” stammt von ihm. Ebenso die „math problem of surplus men”-Analyse zum Zusammenhang Geschlechterverhältnis-Kriminalität.",
    keyFigure: true
  },
  {
    name: "Steinberg, Laurence",
    field: "Developmental Psychology / Adolescent Development",
    works: [
      { title: "Age of Opportunity: Lessons from the New Science of Adolescence", type: "book" as const, year: 2014, publisher: "Houghton Mifflin Harcourt" },
      { title: "Adolescence", type: "book" as const, year: "multiple editions", publisher: "McGraw-Hill" }
    ],
    pages: "Kap. 1, S. 8-10",
    context: "Temple University, einer der führenden Entwicklungspsychologen des Teenage-Gehirns. Reeves' zentrale Quelle für die „brain timing”-These. Steinbergs Metapher von „accelerator and brake pedals” im adoleszenten Hirn strukturiert Reeves' Kap. 1.",
    keyFigure: true
  },
  {
    name: "Hrdy, Sarah Blaffer",
    field: "Anthropology / Evolutionary",
    works: [
      { title: "Mothers and Others: The Evolutionary Origins of Mutual Understanding", type: "book" as const, year: 2009, publisher: "Belknap Press" },
      { title: "Mother Nature: A History of Mothers, Infants, and Natural Selection", type: "book" as const, year: 1999, publisher: "Pantheon" }
    ],
    pages: "Kap. 12, S. 108",
    context: "Emerita Professor an UC Davis, Pionierin evolutionärer Mutter-Forschung. Reeves zitiert ihre Berechnung, dass menschliche Erziehung 13 Millionen Kalorien erfordert, die eine einzelne Mutter nicht bereitstellen kann — daher mussten Väter evolutionär in die Rolle der Versorger eintreten.",
    keyFigure: true
  },

  // ---- Education research ----
  {
    name: "Schanzenbach, Diane Whitmore",
    field: "Economics of Education",
    works: [
      { title: "First in the Class? Age and the Education Production Function", type: "article" as const, year: 2007, publisher: "NBER Working Paper", coAuthors: ["Elizabeth U. Cascio"] }
    ],
    pages: "Kap. 10, S. 90-91",
    context: "Northwestern University, Direktorin am Institute for Policy Research. Ihre Redshirting-Studien (zusammen mit Cascio) sind die methodologische Grundlage für Reeves' Policy-Vorschlag, alle Jungen ein Jahr später einzuschulen."
  },
  {
    name: "Cascio, Elizabeth U.",
    field: "Economics of Education",
    works: [
      { title: "First in the Class? Age and the Education Production Function", type: "article" as const, year: 2007, coAuthors: ["Diane Whitmore Schanzenbach"] }
    ],
    pages: "Kap. 10, S. 90-91",
    context: "Dartmouth College. Zusammen mit Schanzenbach verantwortlich für die Tennessee-Redshirting-Studie."
  },
  {
    name: "Deming, David",
    field: "Economics / Labor Market",
    works: [
      { title: "The Growing Importance of Social Skills in the Labor Market", type: "article" as const, year: 2017, publisher: "Quarterly Journal of Economics" }
    ],
    pages: "Kap. 11, S. 100",
    context: "Harvard, Education Economist. Seine QJE-Studie zu Social Skills im Arbeitsmarkt belegt, dass „jobs requiring high levels of social interaction grew by nearly 12 percentage points” 1980-2012. Reeves nutzt das als empirische Grundlage für seine „Men Can HEAL” These: die Zukunftsjobs sind interpersonell und daher in traditionell weiblich konnotierten Sektoren."
  },

  // ---- Fatherhood research ----
  {
    name: "Eggebeen, David J.",
    field: "Family Sociology",
    works: [
      { title: "What Fathers Contribute to Child Well-Being (in Palkovitz & Eggebeen 2013)", type: "article" as const, year: 2013 }
    ],
    pages: "Kap. 12, S. 109-110",
    context: "Sozioiologe, spezialisiert auf Familie-Transitions. Seine Analyse der National Longitudinal Study of Adolescent to Adult Health liefert den „42% additive / 12% redundant / 22% unique”-Befund, der Reeves' These von distinktiven Vater-Beiträgen trägt. „Dads teach, moms tend” ist eine direkte Formulierung von Eggebeens Daten."
  },
  {
    name: "Edin, Kathryn",
    field: "Sociology / Poverty Research",
    works: [
      { title: "Doing the Best I Can: Fatherhood in the Inner City", type: "book" as const, year: 2013, publisher: "University of California Press", coAuthors: ["Timothy J. Nelson"] },
      { title: "Promises I Can Keep: Why Poor Women Put Motherhood Before Marriage", type: "book" as const, year: 2005, coAuthors: ["Maria Kefalas"] }
    ],
    pages: "Kap. 3, S. 33; Kap. 12, S. 110",
    context: "Princeton Sozioiologin, eine der führenden Forscher:innen zu Armut und Familie in den USA. Ihre 7-Jahres-Ethnographie mit 110 unverheirateten Vätern in Philadelphia/Camden ist Reeves' zentrale qualitative Quelle zum „Dad Deficit” und zur Reform des Child Support Systems.",
    keyFigure: true
  },
  {
    name: "Machin, Anna",
    field: "Anthropology / Fatherhood Research",
    works: [
      { title: "The Life of Dad: The Making of a Modern Father", type: "book" as const, year: 2018, publisher: "Simon & Schuster UK" }
    ],
    pages: "Kap. 12, S. 108-109",
    context: "Oxford-Anthropologin. Ihre evolutionäre und entwicklungspsychologische Analyse der Vaterschaft unterstützt Reeves' These, dass Väter distinktive Beiträge leisten — „protection and teaching”. Besonders die Rolle in der späten Kindheit und Adoleszenz."
  },
  {
    name: "Killewald, Alexandra",
    field: "Sociology / Family",
    works: [
      { title: "A Reconsideration of the Fatherhood Premium: Marriage, Coresidence, Biology, and Fathers' Wages", type: "article" as const, year: 2013, publisher: "American Sociological Review" }
    ],
    pages: "Kap. 3, S. 32",
    context: "Harvard, Family Sociology. Ihre Studien zur „husband breadwinner norm” zeigen, dass arbeitslose Ehemänner heute ein höheres Scheidungs-Risiko haben als in der Vergangenheit — auch wenn die Erwartung an Hausarbeit für Frauen gesunken ist."
  },

  // ---- Biology and sex differences (nuanced middle-ground voices) ----
  {
    name: "Ritchie, Stuart J.",
    field: "Psychology / Neuroscience",
    works: [
      { title: "Sex Differences in the Adult Human Brain: Evidence from 5216 UK Biobank Participants", type: "article" as const, year: 2018, publisher: "Cerebral Cortex" },
      { title: "Intelligence: All That Matters", type: "book" as const, year: 2015, publisher: "Teach Yourself" }
    ],
    pages: "Kap. 7, S. 65",
    context: "King's College London, psychologist. Seine UK Biobank MRI-Meta mit 5.216 Teilnehmern ist die bisher größte einzelne Brain-Sex-Differences-Studie. Kernbefund: „dimorph aber überlappend, nicht binär” — selbst bei der größten Differenz (Hirngesamtvolumen) 48% Overlap. Wichtigstes empirisches Argument für Reeves' Mittelposition."
  },
  {
    name: "Konner, Melvin",
    field: "Biological Anthropology",
    works: [
      { title: "Women After All: Sex, Evolution, and the End of Male Supremacy", type: "book" as const, year: 2015, publisher: "W. W. Norton" },
      { title: "The Evolution of Childhood: Relationships, Emotion, Mind", type: "book" as const, year: 2010, publisher: "Belknap Press" }
    ],
    pages: "Kap. 7, S. 65",
    context: "Emory University Anthropologe. Seine Synthese „Women After All” ist eine zentrale Quelle für Reeves' Mittelposition zur Biologie. Kernthese: Biologie matters, aber in einer Art, die eher Frauen begünstigt — Reeves zitiert ihn für die „WoW” (Women-are-Wonderful)-Effekt-Literatur."
  },
  {
    name: "Benenson, Joyce F.",
    field: "Evolutionary Psychology",
    works: [
      { title: "Warriors and Worriers: The Survival of the Sexes", type: "book" as const, year: 2014, publisher: "Oxford University Press" }
    ],
    pages: "Kap. 7, S. 67",
    context: "Harvard. Ihre Warriors-und-Worriers-These wird von Reeves zitiert — aber nur als Teil der biologischen Beweisführung, nicht als Gesamtposition (Reeves ist weniger biologistisch als Benenson). Ihre Risk-Taking-Daten (Jungen bevorzugen Risiko in 93% aller untersuchten Gesellschaften) sind wichtig für Reeves' Kap. 7."
  },

  // ---- Critical / countervoices ----
  {
    name: "Harrington, Carol",
    field: "Sociology / Gender Studies",
    works: [
      { title: "What is ‚Toxic Masculinity' and Why Does It Matter?", type: "article" as const, year: 2021, publisher: "Men and Masculinities" }
    ],
    pages: "Kap. 8, S. 75-76",
    context: "Victoria University Wellington. Ihre empirische Begriffsgeschichte von „toxic masculinity” zeigt, dass der Begriff vor 2015 fast ausschließlich in akademischen Nischen verwendet wurde und seither in den Mainstream-Medien explodiert ist, „almost never defined”, nur „to signal disapproval”. Reeves nutzt sie als Kronzeugin für seine Ablehnung des Begriffs.",
    keyFigure: true
  },
  {
    name: "Curry, Tommy",
    field: "Philosophy / Black Male Studies",
    works: [
      { title: "The Man-Not: Race, Class, Genre and the Dilemmas of Black Manhood", type: "book" as const, year: 2017, publisher: "Temple University Press" }
    ],
    pages: "Kap. 4, S. 38",
    context: "University of Edinburgh, Chair of Africana Philosophy and Black Male Studies. Seine scharfe Kritik an mainstream-feministischer Intersektionalitätsforschung — die Black men als „innately patriarchal” statt als „oppressed racialized men” rahmt — gibt Reeves die theoretische Grundlage für sein Black-Boys-Kapitel. Reeves argumentiert, dass ein neues Feld „Black Male Studies” nötig ist."
  },
  {
    name: "Rippon, Gina",
    field: "Cognitive Neuroimaging",
    works: [
      { title: "The Gendered Brain: The New Neuroscience That Shatters the Myth of the Female Brain", type: "book" as const, year: 2019, publisher: "The Bodley Head" }
    ],
    pages: "Kap. 7, S. 65 (zitiert als Skeptikerin)",
    context: "Aston University. Rippons konstruktivistische Position („a belief in biology brings with it a particular mindset regarding the fixed and unchangeable nature of human activity”) wird von Reeves direkt zitiert und zurückgewiesen — Reeves ist mit Rippon nicht einverstanden, nutzt sie aber als Illustration der progressiven Biologie-Skepsis."
  },

  // ---- Other notable scholars cited ----
  {
    name: "Hyde, Janet S.",
    field: "Psychology / Gender Similarities",
    works: [
      { title: "The Gender Similarities Hypothesis", type: "article" as const, year: 2005, publisher: "American Psychologist" }
    ],
    pages: "Kap. 1, S. 10-11; Kap. 7",
    context: "University of Wisconsin-Madison, einer der meist-zitierten Gender-Research-Artikel aller Zeiten. Hydes Meta-Analyse zeigt, dass die meisten kognitiven und psychologischen Sex-Differenzen klein sind (d<0.35). Reeves nutzt sie als Referenz für die Überlappungen zwischen den Geschlechtern."
  },
  {
    name: "Goldin, Claudia",
    field: "Economics / Labor History",
    works: [
      { title: "Career and Family: Women's Century-Long Journey toward Equity", type: "book" as const, year: 2021, publisher: "Princeton University Press" },
      { title: "A Grand Gender Convergence: Its Last Chapter", type: "article" as const, year: 2014, publisher: "American Economic Review" }
    ],
    pages: "Kap. 2; Kap. 12",
    context: "Harvard, Nobelpreis Wirtschaft 2023 (nach Reeves' Buch). Ihre „grand gender convergence”-Analyse und ihr Konzept der „greedy jobs” (wo Karriereaufstieg lange unvorhersagbare Stunden erfordert) sind zentral für Reeves' Kap. 12 zum Thema father-friendly jobs.",
    keyFigure: true
  },
  {
    name: "Bertrand, Marianne",
    field: "Economics / Labor Discrimination",
    works: [
      { title: "Dynamics of the Gender Gap for Young Professionals in the Financial and Corporate Sectors", type: "article" as const, year: 2010, publisher: "American Economic Journal: Applied Economics" }
    ],
    pages: "Kap. 2, S. 26",
    context: "University of Chicago Booth. Ihre Forschung zur MBA-Gender-Pay-Gap-Dynamik zeigt: die Lücke öffnet sich mit der Geburt des ersten Kindes und verfestigt sich — earnings for men and women move in sync up until the birth of a couple's first child."
  },
  {
    name: "Ruggles, Steven",
    field: "Historical Demography",
    works: [
      { title: "Patriarchy, Power, and Pay: The Transformation of American Families, 1800-2015", type: "article" as const, year: 2015, publisher: "Demography" },
      { title: "IPUMS USA (Integrated Public Use Microdata Series)", type: "study" as const, year: "ongoing", publisher: "University of Minnesota" }
    ],
    pages: "Kap. 3, S. 34",
    context: "University of Minnesota, Direktor von IPUMS, dem wichtigsten US-Datenrepositorium für historische Zensus-Daten. Seine Analyse der Heiratsraten-Daten zeigt: 40% des Rückgangs der US-Heiratsraten 1960-2013 erklärt sich durch fallende Männerlöhne."
  },

  // ---- Policy-oriented colleagues ----
  {
    name: "Sawhill, Isabel V.",
    field: "Economics / Family Policy",
    works: [
      { title: "Generation Unbound: Drifting into Sex and Parenthood without Marriage", type: "book" as const, year: 2014, publisher: "Brookings Institution Press" }
    ],
    pages: "Acknowledgments; various mentions",
    context: "Brookings Institution Senior Fellow, Reeves' long-term mentor. Sie hat Reeves ins Brookings gebracht."
  },
  {
    name: "Ray, Rashawn",
    field: "Sociology / Race and Gender",
    works: [
      { title: "Race and the Built Environment: Unpacking Neighborhood Effects on Black Men's Physical Activity", type: "article" as const, year: "multiple" }
    ],
    pages: "Kap. 4, S. 39",
    context: "University of Maryland und Brookings. Seine Forschung zu Black middle-class men und wie sie in weißen Nachbarschaften ihr Verhalten anpassen, um nicht als Bedrohung wahrgenommen zu werden, ist ein wichtiger empirischer Baustein für Reeves' Kap. 4."
  },
  {
    name: "Case, Anne; Deaton, Angus",
    field: "Economics / Public Health",
    works: [
      { title: "Deaths of Despair and the Future of Capitalism", type: "book" as const, year: 2020, publisher: "Princeton University Press" }
    ],
    pages: "Kap. 5, S. 46-47",
    context: "Princeton. Ihre Forschung zur Mortalität von US-Männern ohne College-Abschluss seit ~1990 ist eine der einflussreichsten Public-Health-Analysen der letzten Dekade. 'Deaths of despair' (Suizide, Überdosen, Alkoholismus) trifft Männer unproportional."
  }
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
  {
    name: "Brookings Institution",
    type: "Policy-Think-Tank",
    context: "Reeves' institutionelle Heimat. Das Brookings-Milieu prägt den Stil des Buches: empirisch-rigorös, politisch zentristisch, explizit policy-orientiert. Mehrere der zitierten Wissenschaftler (Sawhill, Ray, Muro, Haque, Smith) sind Brookings-Kolleg:innen von Reeves.",
    pages: "Author affiliation, durchgehend"
  },
  {
    name: "American Institute for Boys and Men (AIBM)",
    type: "Forschungsinstitut",
    context: "Reeves gründete AIBM 2023 (nach der Veröffentlichung von Of Boys and Men) als erste nicht-politische, evidenz-basierte Institution, die sich spezifisch auf Jungen- und Männerprobleme fokussiert. Das Institut setzt Reeves' Policy-Agenda nun aktiv um.",
    pages: "Nach Buchveröffentlichung"
  },
  {
    name: "Opportunity Insights (Harvard)",
    type: "Forschungszentrum",
    context: "Raj Chettys Team am Harvard. Ihre 20-Millionen-Personen-IRS-Datenstudie zur Sozialmobilität liefert einen der wichtigsten empirischen Bausteine von Reeves' Kap. 4 (Black Men).",
    pages: "Kap. 4"
  },
  {
    name: "US Bureau of Labor Statistics (BLS)",
    type: "Regierungsstatistik-Agentur",
    context: "Reeves' Hauptquelle für Arbeitsmarktdaten (Erwerbsquoten, Löhne, Beschäftigung nach Geschlecht). Die BLS Current Population Survey ist international Goldstandard.",
    pages: "Kap. 2, durchgehend"
  },
  {
    name: "National Center for Education Statistics (NCES)",
    type: "Regierungsstatistik-Agentur",
    context: "Reeves' Hauptquelle für Bildungsdaten (Abschlussraten, Degrees Conferred, Testscores nach Geschlecht).",
    pages: "Kap. 1, durchgehend"
  },
  {
    name: "OECD — Programme for International Student Assessment (PISA)",
    type: "Internationale Organisation",
    context: "Alle 3 Jahre durchgeführter Vergleichstest für 15-Jährige in OECD-Ländern. Liefert die empirische Grundlage für Reeves' Behauptung, dass der Bildungs-Gender-Gap ein globales Phänomen ist.",
    pages: "Kap. 1, S. 5-6"
  },
  {
    name: "Centers for Disease Control and Prevention (CDC)",
    type: "US-Gesundheitsagentur",
    context: "Reeves' Quelle für Mortalitätsdaten (Suizide, Überdosen, COVID-Sterblichkeit nach Geschlecht). Die WONDER-Datenbank des CDC ist die maßgebliche US-Quelle für epidemiologische Forschung.",
    pages: "Kap. 5; Kap. 8"
  },
  {
    name: "UK Biobank",
    type: "Bio-Medical Database",
    context: "Eine der größten Gesundheits- und Neuro-Imaging-Datenbanken der Welt, mit ~500.000 Teilnehmer:innen. Ritchie et al. nutzten 5.216 Teilnehmer:innen für ihre Brain Sex Differences-Studie, die Reeves' zentrale biologische Referenz ist.",
    pages: "Kap. 7, S. 65"
  },
  {
    name: "White House Gender Policy Council",
    type: "US-Regierungsberatung",
    context: "2021 von Biden gegründet, Nachfolger der Council on Women and Girls. Reeves kritisiert explizit, dass dessen „National Strategy on Gender Equity and Equality” (Oktober 2021) keine einzige Gender-Ungleichheit zum Nachteil von Jungen/Männern nennt.",
    pages: "Kap. 8, S. 78-79"
  },
  {
    name: "World Economic Forum — Global Gender Gap Report",
    type: "Internationaler Bericht",
    context: "WEF's jährlicher Global Gender Gap Report ist einer der einflussreichsten internationalen Gender-Reports. Reeves kritisiert dessen methodologische Asymmetrie: wenn Frauen Männer überholen, wird der Wert auf „1” (Parität) gedeckelt, ohne die umgekehrte Ungleichheit zu erfassen.",
    pages: "Kap. 8, S. 79-80"
  },
  {
    name: "NOMAS (National Organization for Men Against Sexism)",
    type: "Advocacy-Organisation",
    context: "Eine der wenigen pro-feministischen Männer-Organisationen. Reeves erwähnt sie als positives Beispiel für engagierte Männer-Allianzen mit dem Feminismus — im Gegensatz zu den MRA-Gruppen, die er kritisch sieht.",
    pages: "Implicit mention in solutions chapters"
  },
  {
    name: "Men's Rights Activism (MRA) / Manosphere",
    type: "Politische Subkultur",
    context: "Von Reeves kritisch diskutiert. Er unterscheidet zwischen legitimen Sorgen um männliche Probleme und der anti-feministischen MRA-Ideologie. Seine Kritik: MRA-Bewegungen verwenden ihre Energie auf Frauen-Angriffe statt auf Policy-Lösungen.",
    pages: "Kap. 9; Kap. 8"
  }
];

// ---------------------------------------------------------------------------
// STUDIES
// ---------------------------------------------------------------------------

export const studies: StudyRef[] = [
  {
    name: "Chetty et al. Opportunity Insights Race-Gender-Mobility-Studie",
    authors: "Raj Chetty, Nathaniel Hendren, Maggie R. Jones, Sonya R. Porter",
    year: "2020 (QJE)",
    finding: "20-Millionen-Personen-Längsschnittstudie basierend auf IRS-Steuerdaten. Zentraler Befund: Der Black-white intergenerational mobility gap ist „entirely driven by differences in men's, not women's, outcomes”. Black boys aus wohlhabenden Familien haben niedrigere Erwachsenen-Einkommen als Black girls aus armen Familien. Methodologisch eine der stärksten Mobility-Studien je durchgeführt.",
    pages: "Kap. 4, S. 37-38"
  },
  {
    name: "Cascio & Schanzenbach Tennessee Redshirting-Studie",
    authors: "Elizabeth U. Cascio, Diane Whitmore Schanzenbach",
    year: "2007 / 2016",
    finding: "Administrative Tennessee-Bildungsdaten mit natürlichem Experiment (Kindergarten-Cutoff-Dates). Zentraler Befund: Redshirting hat dramatische positive Effekte auf alle Outcome-Maße, und die Gewinne für Jungen sind mindestens doppelt so groß wie für Mädchen. Low-income boys profitieren am meisten.",
    pages: "Kap. 10, S. 90-91"
  },
  {
    name: "Ritchie et al. UK Biobank MRI Meta",
    authors: "Stuart J. Ritchie et al.",
    year: "2018 (Cerebral Cortex)",
    finding: "Bisher größte einzelne Brain Sex Differences-Studie: 5.216 UK Biobank Teilnehmer:innen. Zentraler Befund: Sex differences in der Hirn-Struktur sind dimorph (unterschiedlich aber überlappend), nicht binär. Selbst bei der größten Differenz (Hirngesamtvolumen) gibt es 48.1% Sample-Overlap. Argument gegen beide Extrempositionen — weder Binär-Determinismus noch reiner Konstruktivismus.",
    pages: "Kap. 7, S. 65"
  },
  {
    name: "Eggebeen Analyse der National Longitudinal Study of Adolescent to Adult Health",
    authors: "David J. Eggebeen",
    year: "2013",
    finding: "Analyse einer 20.000-Personen-Studie zu elterlichen Einflüssen auf Teen-Outcomes. Zentraler Befund: 42% der elterlichen Inputs sind „additive” (beide Eltern tragen gleich bei), 12% „redundant” (ein Elternteil genügt), 22% „unique” (nur ein Elternteil trägt bei), 24% ohne messbare Wirkung. Die „unique” Inputs zeigen distinktive Vater- und Mutter-Beiträge: „Dads teach, moms tend”.",
    pages: "Kap. 12, S. 109-110"
  },
  {
    name: "Kalamazoo Promise Scholarship Evaluation",
    authors: "Timothy J. Bartik, Brad J. Hershbein, Marta Lachowska",
    year: "2021",
    finding: "Rigorose Difference-in-Differences-Evaluierung des Kalamazoo Promise Free College Programms. Zentraler Befund: „women experience very large gains” (+50% Abschlussrate), „while men seem to experience zero benefit”. Einer der wichtigsten Einzelbefunde in Reeves' Buch, demonstriert das Muster, dass Sozialinterventionen strukturell nicht männer-kompatibel sind.",
    pages: "Kap. 6, S. 58-59"
  },
  {
    name: "Case & Deaton Deaths of Despair-Forschung",
    authors: "Anne Case, Angus Deaton",
    year: "2015-2020",
    finding: "Epidemiologische Analyse der US-Mortalität zeigt, dass die Lebenserwartung für US-Weiße ohne College-Abschluss seit etwa 1999 fällt, getrieben von „deaths of despair” (Suizid, Alkoholleberzirrhose, Drogenüberdosen). Männer sind ~74% aller dieser Tode. Der erste Lebenserwartungs-Rückgang in einer wohlhabenden Nation in der modernen Ära.",
    pages: "Kap. 5, S. 46-47"
  },
  {
    name: "Bertrand/Goldin/Katz MBA-Gender-Studie",
    authors: "Marianne Bertrand, Claudia Goldin, Lawrence F. Katz",
    year: "2010",
    finding: "Analyse der Gender Pay Gap-Dynamik bei Chicago MBA-Absolvent:innen: unmittelbar nach Abschluss 12% Gap, 13 Jahre später 38% Gap. Kernbefund: die Gap öffnet sich mit der Geburt des ersten Kindes und verfestigt sich in den folgenden Jahren — „pay gap = parenting pay gap”.",
    pages: "Kap. 2, S. 26"
  },
  {
    name: "Moberg Same-Sex vs. Hetero-Sex-Paar Studie",
    authors: "Ylva Moberg (Swedish Institute for Evaluation of Labour Market and Education Policy)",
    year: "2016",
    finding: "Innovative Natürliches-Experiment-Studie: Vergleich von Einkommensentwicklungen bei Geburtmüttern in same-sex vs. hetero-sex Paaren. Kernbefund: Die Einkommens-Gap-Öffnung mit dem ersten Kind sieht bei Geburtmüttern in beiden Familientypen fast identisch aus — Evidenz dafür, dass die Parenting Pay Gap strukturell ist, nicht gender-spezifisch.",
    pages: "Kap. 2, S. 26-27"
  },
  {
    name: "Deming Social Skills in Labor Market",
    authors: "David J. Deming (Harvard)",
    year: "2017 (QJE)",
    finding: "Analyse der US-Arbeitsmarktentwicklung 1980-2012: „jobs requiring high levels of social interaction grew by nearly 12 percentage points as a share of the U.S. labor force.” Math-intensive-aber-weniger-soziale Jobs schrumpften um 3.3 Prozentpunkte. Reeves nutzt das als empirische Grundlage für seine HEAL-These: die Zukunftsjobs sind interpersonell.",
    pages: "Kap. 11, S. 100"
  },
  {
    name: "Harrington — What is ‚Toxic Masculinity' and Why Does It Matter?",
    authors: "Carol Harrington",
    year: "2021 (Men and Masculinities)",
    finding: "Empirische Begriffsgeschichte des Ausdrucks „toxic masculinity”. Zentraler Befund: vor 2015 gab es weniger als 20 akademische Erwähnungen pro Jahr, fast alle in Fachzeitschriften. Ab 2017 Tausende, überwiegend in Mainstream-Medien. Der Begriff wird „almost never defined” und wird benutzt, um „to simply signal disapproval”. Als analytische Kategorie unbrauchbar.",
    pages: "Kap. 8, S. 75-76"
  },
  {
    name: "Thomas Dee Male Teachers Study",
    authors: "Thomas S. Dee",
    year: "2007",
    finding: "Analyse der Wirkung männlicher Lehrer auf Jungen-Leistungen. Kernbefund: Wenn 50% der 6-8 Klasse Englisch-Lehrer männlich wären, würde der Reading-Gender-Gap um ca. ein Drittel schrumpfen. Die Performance der Mädchen wird durch die Lehrer-Gender nicht beeinflusst.",
    pages: "Kap. 10, S. 93"
  },
  {
    name: "Rutz Gotland Male Depression Study",
    authors: "Wolfgang Rutz et al.",
    year: "1992",
    finding: "Naturexperiment in Gotland, Schweden: GP-Training in der Erkennung männlich-atypischer Depressionssymptome reduzierte die Suizidraten deutlich. Grundlegende empirische Stütze für das „Covert Depression”-Konzept (Real). Nachfolge-Replikationen in Nuremberg/München zeigen gemischtes Bild.",
    pages: "Nicht direkt von Reeves zitiert, aber im Hintergrund der Kap. 8 Diskussion"
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
  title: "Of Boys and Men",
  subtitle: "Why the Modern Male is Struggling, Why It Matters, and What To Do About It",
  author: "Richard V. Reeves",
  publisher: "Brookings Institution Press",
  year: 2022,
  description:
    "Die empirisch robusteste und policy-konkreteste Analyse der Männerkrise in der modernen Bibliothek. Richard V. Reeves, Senior Fellow am Brookings Institution und später Gründer des American Institute for Boys and Men (AIBM, 2023), liefert eine bewusst zentristische Position zwischen progressiver „toxischer Männlichkeit”-Rhetorik und konservativer Rückkehrs-Fantasie. " +
    "Sein Kernargument: Die Probleme von Jungen und Männern sind STRUKTURELL (Bildungssystem, Arbeitsmarkt, Familienrecht), nicht individuell-psychologisch. Der männliche Präfrontal-Kortex reift ca. 2 Jahre später als der weibliche — das ist die neurobiologische Erklärung für den globalen Bildungs-Gender-Gap, der sich seit Title IX (1972) umgekehrt hat. Männliche Arbeitsmarkt-Position fällt (Autor/Wasserman 4-Dimensionen-Befund). „Deaths of despair” (Suizide, Überdosen) sind zu 74% männlich. Viele Sozialinterventionen (Kalamazoo Free College etc.) zeigen null Effekte auf Männer trotz positiver Gesamtergebnisse. " +
    "Reeves akzeptiert Biologie UND Kultur („nature and nurture both matter”), lehnt sowohl Rippons Konstruktivismus als auch Sax/Gurians Biologismus ab. Er zitiert Hooven (Testosteron als Amplifier, nicht Trigger), Henrich (Ehe als „testosterone suppression system”), Ritchie et al. (MRI-Studie: 48% Overlap selbst bei größten Brain-Differenzen). " +
    "Politisch ist er explizit kritisch gegen beide Seiten: die progressive Linke (pathologisiert Männlichkeit durch „toxic masculinity”, individualisiert Probleme, leugnet Biologie, operiert mit Einbahn-Ungleichheit) UND die konservative Rechte (Grievance-Politik, Biologismus-Überbetonung, unrealistische Rückkehr zur traditionellen Familie). " +
    "Drei konkrete Policy-Vorschläge: (1) **Redshirt the Boys** — alle Jungen default ein Jahr später einschulen, basierend auf Cascio-Schanzenbach Tennessee-Evidence; (2) **Men Can HEAL** — $1 Milliarde nationales Investment, um Männer in Health/Education/Administration/Literacy-Berufe zu bewegen, analog zur STEM-für-Frauen-Bewegung; (3) **Direct Dads** — Vaterschaft als eigenständige Institution mit 6 Monaten gleicher bezahlter Elternzeit, reformiertem Familienrecht und father-friendly employment. " +
    "Reeves ist der einzige Autor der Bibliothek, der mit peer-reviewed Meta-Analysen, Regierungsstatistiken und benannten Autorschaften auf Brookings-Niveau arbeitet. Für fast jede Behauptung gibt es eine spezifische Fußnotenquelle. Das macht sein Buch zur empirisch stärksten Einzelquelle des gesamten Korpus."
};
