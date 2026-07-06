// pr-references-data.ts
// Structured reference data for "Was Sie (Wirklich) Über Erziehung Wissen Müssen"
// (Tillmann Prüfer, dtv 2026). Source: WasSieWirklich/analysis/kausalpfade-analysis.md (Sections 3–4, 7).

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
// AUTHORS — grouped by Forschungsfeld from analysis Section 4
// ---------------------------------------------------------------------------

export const authors: Author[] = [
	// ---- Bindungsforschung ----
	{
		name: 'Bowlby, John',
		field: 'Bindungsforschung',
		works: [
			{ title: 'Attachment and Loss, Vol. 1: Attachment', type: 'book', year: 1969 },
			{ title: 'Maternal Care and Mental Health', type: 'report', year: 1951, publisher: 'WHO Monograph' }
		],
		pages: 'Endnote [83,96]; Kap. 6',
		context:
			'Begründer der Bindungstheorie. Prüfer zeigt: Theoretische Grundlagen (Lorenz-Analogie, inneres Arbeitsmodell) sind aus heutiger Sicht schwach fundiert.',
		keyFigure: true
	},
	{
		name: 'Ainsworth, Mary',
		field: 'Bindungsforschung',
		works: [
			{
				title: 'Patterns of Attachment: A Psychological Study of the Strange Situation',
				type: 'book',
				year: 1978,
				publisher: 'Erlbaum'
			}
		],
		pages: 'Endnote [84]; Kap. 6',
		context:
			'Strange-Situation-Procedure und Baltimore-Studie (N=26). Prüfer kritisiert Stichprobe und Methodik (via Vicedo 2013).',
		keyFigure: true
	},
	{
		name: 'Grossmann, Karin & Klaus',
		field: 'Bindungsforschung',
		works: [
			{
				title: 'Longitudinal Study of Attachment (Bielefeld/Regensburg)',
				type: 'study',
				year: '1976–',
				publisher: 'Diverse Publikationen, u. a. Zimmermann et al. (2000)'
			}
		],
		pages: 'Endnote [92]; Kap. 6',
		context:
			'Deutsche Bindungsforschungsschule. Zimmermann et al. (2000) findet keine signifikante Kontinuität 1 Jahr → 16 Jahre.'
	},
	{
		name: 'Keller, Heidi',
		field: 'Bindungsforschung',
		works: [
			{
				title: 'Mythos Bindungstheorie. Konzept, Methode, Bilanz',
				type: 'book',
				year: 2021,
				publisher: 'Psychosozial-Verlag'
			}
		],
		pages: 'Endnote [97]; Kap. 6 (Interview)',
		context:
			'Hauptkritikerin der Bindungstheorie aus kulturvergleichender Perspektive. „Die Bindungstheorie richtet großen Schaden an." Von Prüfer prominent zitiert.',
		keyFigure: true
	},
	{
		name: 'Vicedo, Marga',
		field: 'Wissenschaftsgeschichte / Bindung',
		works: [
			{
				title: 'The Nature & Nurture of Love: From Imprinting to Attachment in Cold War America',
				type: 'book',
				year: 2013,
				publisher: 'University of Chicago Press'
			}
		],
		pages: 'Endnote [85]; Kap. 6 (Interview)',
		context:
			'Wissenschaftshistorikerin, revidiert Baltimore-Originaldaten. Von Prüfer prominent zitiert.',
		keyFigure: true
	},
	{
		name: 'Fearon, R. Pasco',
		field: 'Bindungsforschung',
		works: [
			{
				title:
					'The significance of insecure attachment and disorganization in the development of children\'s externalizing behavior: A meta-analytic study',
				type: 'study',
				year: 2010,
				publisher: 'Child Development'
			}
		],
		pages: 'Endnote [88]; Kap. 6',
		context:
			'Meta-Analyse disorganisierter Bindung → externalisierendes Verhalten. Der robuste Kern der Bindungstheorie.'
	},
	{
		name: 'Sroufe, L. Alan',
		field: 'Bindungsforschung',
		works: [
			{
				title: 'Minnesota Study of Risk and Adaptation from Birth to Adulthood',
				type: 'study',
				year: 2005,
				publisher: 'Guilford (2010 follow-up)'
			}
		],
		pages: 'Endnote [91,328]; Kap. 6, Kap. 17',
		context: 'Minnesota Longitudinal Study — findet keine starke Kontinuität Säuglings- zu Erwachsenen-Bindung.'
	},
	{
		name: 'Dugan, Kevin A.',
		field: 'Bindungsforschung',
		works: [
			{
				title: 'Canalization-Test der Bindungsstabilität',
				type: 'study',
				year: 2024,
				publisher: 'Journal of Personality and Social Psychology'
			}
		],
		pages: 'Endnote [99]; Kap. 6',
		context: 'Aktueller Test der Bindungskanalisierungs-Hypothese.'
	},

	// ---- Entwicklungspsychologie (klassisch) ----
	{
		name: 'Freud, Sigmund',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'Vorlesungen zur Einführung in die Psychoanalyse', type: 'book', year: 1917 }],
		pages: 'Endnote [53]; Kap. 4',
		context: 'Als historischer Rahmen der „Kindheit als Schicksal"-These, die Prüfer empirisch relativiert.'
	},
	{
		name: 'Winnicott, Donald W.',
		field: 'Entwicklungspsychologie',
		works: [
			{
				title: 'Transitional Objects and Transitional Phenomena',
				type: 'article',
				year: 1953,
				publisher: 'International Journal of Psychoanalysis'
			}
		],
		pages: 'Endnote [327]; Kap. 17',
		context: '„Good enough mother" als zentrales Rahmenkonzept von Prüfers Praxis-Empfehlung.',
		keyFigure: true
	},
	{
		name: 'Bettelheim, Bruno',
		field: 'Entwicklungspsychologie',
		works: [
			{ title: 'A Good Enough Parent', type: 'book', year: 1987, publisher: 'Thames & Hudson' }
		],
		pages: 'Endnote [334]; Kap. 17',
		context: '„Good enough parent"-Konzept; Prüfer erwähnt auch Kontroversen um Bettelheims Biographie.',
		keyFigure: true
	},
	{
		name: 'Jenni, Oskar',
		field: 'Entwicklungspsychologie',
		works: [
			{
				title: 'Die kindliche Entwicklung verstehen',
				type: 'book',
				year: 2021,
				publisher: 'Springer'
			}
		],
		pages: 'Endnote [58]; Kap. 4',
		context: 'Schweizer Standardwerk zur Entwicklungspsychologie.'
	},

	// ---- Erziehungsstile ----
	{
		name: 'Baumrind, Diana',
		field: 'Erziehungsstile',
		works: [
			{
				title: 'Effects of Authoritative Parental Control on Child Behavior',
				type: 'article',
				year: 1966,
				publisher: 'Child Development'
			}
		],
		pages: 'Endnote [33]; Kap. 3',
		context: 'Kanonische Typologie autoritär/autoritativ/permissiv; Prüfer kritisch reanalysiert.',
		keyFigure: true
	},
	{
		name: 'Lewis, Catherine C.',
		field: 'Erziehungsstile',
		works: [
			{
				title: 'The Effects of Parental Firm Control: A Reinterpretation of Findings',
				type: 'article',
				year: 1981,
				publisher: 'Psychological Bulletin'
			}
		],
		pages: 'Endnote [35]; Kap. 3',
		context: 'Reanalyse der Baumrind-Daten: Wärme erklärt die Effekte, nicht Kontrolle.',
		keyFigure: true
	},
	{
		name: 'Steinberg, Laurence',
		field: 'Erziehungsstile',
		works: [
			{
				title: 'We Know Some Things: Parent-Adolescent Relationships in Retrospect and Prospect',
				type: 'article',
				year: 2001,
				publisher: 'Journal of Research on Adolescence'
			}
		],
		pages: 'Endnote [41]; Kap. 3',
		context: 'US-Adoleszenzforschung zu Baumrind-Rahmen.'
	},
	{
		name: 'Pinquart, Martin',
		field: 'Erziehungsstile',
		works: [
			{
				title: 'Associations of Parenting Dimensions and Styles With Externalizing Problems of Children and Adolescents: An Updated Meta-Analysis',
				type: 'study',
				year: 2017,
				publisher: 'Developmental Psychology'
			},
			{
				title: 'Meta-Analyse zu Elternstil und pädiatrischer Adipositas',
				type: 'study',
				year: 2014,
				publisher: 'Journal of Pediatric Psychology'
			}
		],
		pages: 'Endnote [42,284]; Kap. 3, Kap. 14',
		context: 'Meta-Analyse von 1400+ Studien zu Erziehungsstilen.',
		keyFigure: true
	},
	{
		name: 'Smetana, Judith',
		field: 'Erziehungsstile',
		works: [
			{ title: 'Parenting Styles and Beliefs about Parental Authority', type: 'article', year: 2017 }
		],
		pages: 'Endnote [36]; Kap. 3',
		context: 'Domain-specific parenting.'
	},
	{
		name: 'Grusec, Joan E.',
		field: 'Erziehungsstile',
		works: [
			{
				title: 'Impact of Parental Discipline Methods on the Child\'s Internalization of Values',
				type: 'article',
				year: 1994,
				publisher: 'Developmental Psychology'
			}
		],
		pages: 'Endnote [125]; Kap. 7',
		context: 'Internalisierung elterlicher Werte.'
	},
	{
		name: 'Kerr, Margaret; Stattin, Håkan; Özdemir, Metin',
		field: 'Erziehungsstile',
		works: [
			{
				title: 'Perceived parenting style and adolescent adjustment: revisiting directions of effects',
				type: 'study',
				year: 2012,
				publisher: 'Developmental Psychology'
			}
		],
		pages: 'Endnote [37]; Kap. 3',
		context: 'Schwedische Längsschnittstudie zur Bidirektionalität von Eltern-Kind-Effekten.',
		keyFigure: true
	},
	{
		name: 'Garcia, Fernando',
		field: 'Erziehungsstile',
		works: [
			{
				title: 'Parenting Styles and Developmental Outcomes in Spain',
				type: 'study',
				year: 2018,
				publisher: 'Psychology in Spain'
			}
		],
		pages: 'Endnote [39,40,46]; Kap. 3',
		context: 'Spanische Studien: nachgiebig ≈ autoritativ in nicht-hierarchischen Kulturen.'
	},
	{
		name: 'Kohn, Alfie',
		field: 'Erziehung / Kritik',
		works: [
			{ title: 'Unconditional Parenting', type: 'book', year: 2005, publisher: 'Atria' },
			{ title: 'Punished by Rewards', type: 'book', year: 1993 }
		],
		pages: 'Endnote [34,240,241,245]; Kap. 3, Kap. 13',
		context:
			'Kritiker von Erziehungsstil-Forschung und Belohnungen. Prüfer positioniert sich differenziert gegen Kohns Universalfassung.',
		keyFigure: true
	},

	// ---- Neurowissenschaft / Hirnentwicklung ----
	{
		name: 'Eliot, Lise',
		field: 'Neurowissenschaft',
		works: [
			{
				title: 'Dump the "dimorphism": Comprehensive synthesis of human brain studies',
				type: 'study',
				year: 2021,
				publisher: 'Neuroscience & Biobehavioral Reviews'
			}
		],
		pages: 'Endnote [204]; Kap. 11',
		context: 'Hauptkronzeugin dafür, dass biologische Geschlechter-Hirndifferenzen klein und größtenteils durch Körpergröße erklärt sind.',
		keyFigure: true
	},
	{
		name: 'DeCasien, Alex R.',
		field: 'Neurowissenschaft',
		works: [
			{
				title: 'Sex Differences in the Human Brain: A Roadmap for More Careful Analysis and Interpretation',
				type: 'article',
				year: 2022,
				publisher: 'Biology of Sex Differences'
			}
		],
		pages: 'Endnote [205]; Kap. 11',
		context: 'Konvergent mit Eliot: Sex differences in the human brain reanalysed.'
	},
	{
		name: 'Williams, Camille M.',
		field: 'Neurowissenschaft',
		works: [
			{ title: 'Sex Differences in the Brain', type: 'article', year: 2021 }
		],
		pages: 'Endnote [203]; Kap. 11',
		context: 'Teil der 2021–2022-Welle neurowissenschaftlicher Re-Analysen.'
	},
	{
		name: 'Hyde, Krista L.',
		field: 'Neurowissenschaft',
		works: [
			{
				title: 'Musical Training Shapes Structural Brain Development',
				type: 'study',
				year: 2009,
				publisher: 'Journal of Neuroscience'
			}
		],
		pages: 'Endnote [179]; Kap. 9',
		context: 'Musiktraining und strukturelle Hirnänderung.'
	},
	{
		name: 'Schellenberg, E. Glenn',
		field: 'Musikkognition',
		works: [
			{
				title: 'Music Training and Cognitive Abilities',
				type: 'article',
				year: 2024,
				publisher: 'Annual Review of Psychology',
				coAuthors: ['Lima, César']
			}
		],
		pages: 'Endnote [180]; Kap. 9',
		context: 'Haupt-Kritiker behaupteter Musik-Transfer-Effekte.',
		keyFigure: true
	},
	{
		name: 'Schneider, Peter',
		field: 'Musikkognition',
		works: [
			{ title: 'Graz 12-Jahres-Musik-Längsschnitt', type: 'study', year: 2023 }
		],
		pages: 'Endnote [181]; Kap. 9',
		context: 'Längsschnittstudie zu Musikunterricht und Kognition.'
	},
	{
		name: 'Burani, Kreshnik',
		field: 'Neurowissenschaft',
		works: [
			{
				title:
					'Harsh Parenting and Neural Responses to Reward and Error',
				type: 'study',
				year: 2023,
				publisher: 'Biological Psychiatry CNNI'
			}
		],
		pages: 'Endnote [261]; Kap. 13',
		context: 'Neuroimaging-Evidenz: Körperstrafen verändern ERN-Amplituden und Reward-Verarbeitung.'
	},
	{
		name: 'Merz, Emily C.',
		field: 'Neurowissenschaft',
		works: [
			{ title: 'Parental harshness and striatal volume', type: 'study', year: 2019 }
		],
		pages: 'Endnote [262]; Kap. 13',
		context: 'Striatales Volumen und elterliche Härte.'
	},
	{
		name: 'van Houtum, Lisanne A. E. M.',
		field: 'Neurowissenschaft',
		works: [
			{
				title: 'Parental feedback and salience network activation',
				type: 'study',
				year: 2022,
				publisher: 'Developmental Cognitive Neuroscience'
			}
		],
		pages: 'Endnote [255]; Kap. 13',
		context: 'Salienznetzwerk bei elterlichem Feedback.'
	},
	{
		name: 'Hutton, John S.',
		field: 'Neurowissenschaft / Medien',
		works: [
			{
				title: 'Associations Between Screen-Based Media Use and Brain White Matter Integrity in Preschool-Aged Children',
				type: 'study',
				year: 2020,
				publisher: 'JAMA Pediatrics'
			}
		],
		pages: 'Endnote [308]; Kap. 15',
		context: 'MRT: Bildschirmzeit und weiße Substanz bei Kleinkindern.'
	},
	{
		name: 'Law, Evelyn C.',
		field: 'Neurowissenschaft / Medien',
		works: [
			{ title: 'EEG markers of screen time in 12-month-old infants', type: 'study', year: 2023, publisher: 'JAMA Pediatrics' }
		],
		pages: 'Endnote [307]; Kap. 15',
		context: 'EEG-Evidenz für Kleinkinder-Bildschirmnutzung.'
	},
	{
		name: 'Braus, Dieter',
		field: 'Neurowissenschaft',
		works: [{ title: 'Interview mit Tillmann Prüfer', type: 'other', year: 2025 }],
		pages: 'Kap. 16, 17 (Interview)',
		context: 'Adoleszenz als zweites Entwicklungsfenster; von Prüfer interviewt.'
	},

	// ---- Soziologie / Epidemiologie ----
	{
		name: 'Holt-Lunstad, Julianne',
		field: 'Sozialepidemiologie',
		works: [
			{
				title: 'Social Relationships and Mortality Risk: A Meta-analytic Review',
				type: 'study',
				year: 2010,
				publisher: 'PLOS Medicine',
				coAuthors: ['Smith, Timothy B.', 'Layton, J. Bradley']
			}
		],
		pages: 'Endnote [134]; Kap. 8',
		context: '148-Studien-Meta-Analyse; Effektgröße vergleichbar mit Rauchverzicht.',
		keyFigure: true
	},
	{
		name: 'Giles, Lynne C.',
		field: 'Sozialepidemiologie',
		works: [
			{ title: 'Australian Longitudinal Study of Aging', type: 'study', year: 2005, publisher: 'Journal of Epidemiology and Community Health' }
		],
		pages: 'Endnote [134]; Kap. 8',
		context: 'Australischer Langzeit-Nachweis zur Freundschaft-Mortalität-Verbindung.'
	},
	{
		name: 'Pezirkianidis, Christos',
		field: 'Psychologie / Freundschaft',
		works: [
			{ title: 'Friendship and Mental Health: A 38-Studies Review', type: 'study', year: 2023 }
		],
		pages: 'Endnote [135]; Kap. 8',
		context: '38-Studien-Review zu Freundschaftsqualität und psychischer Gesundheit.'
	},
	{
		name: 'Cain, Susan',
		field: 'Psychologie / Populäre Literatur',
		works: [
			{ title: 'Still: The Power of Introverts in a World That Can\'t Stop Talking', type: 'book', year: 2013 },
			{ title: 'Bittersweet', type: 'book', year: 2023 }
		],
		pages: 'Endnote [129]; Kap. 8',
		context: 'Populäre Einordnung für die Rehabilitation introvertierter Kinder.'
	},
	{
		name: 'Masten, Carrie L.',
		field: 'Entwicklungsneurowissenschaft',
		works: [
			{ title: 'Time spent with friends and neural sensitivity to rejection', type: 'study', year: 2012, publisher: 'SCAN' }
		],
		pages: 'Endnote [138]; Kap. 8',
		context: 'Neuroimaging zu Freundschaftszeit und rejection sensitivity.'
	},
	{
		name: 'Roskam, Isabelle',
		field: 'Psychologie / Burnout',
		works: [
			{
				title: 'Parental Burnout Around the Globe: A 42-Country Study',
				type: 'study',
				year: 2021,
				publisher: 'Affective Science'
			}
		],
		pages: 'Endnote [10]; Kap. 1',
		context: 'Cross-Cultural-Studie zu Parental Burnout.',
		keyFigure: true
	},
	{
		name: 'McCoy, David',
		field: 'Psychologie',
		works: [
			{ title: 'Helicopter Parenting Meta-Analysis', type: 'study', year: 2024, publisher: 'Journal of Adult Development', coAuthors: ['Dimler', 'Rodrigues'] }
		],
		pages: 'Endnote [7]; Kap. 1',
		context: 'Meta-Analyse zu Helicopter Parenting.'
	},
	{
		name: 'Perry, Nicole B.',
		field: 'Entwicklungspsychologie',
		works: [
			{
				title: 'Childhood Self-Regulation as a Mechanism Through Which Early Overcontrolling Parenting is Associated with Adjustment in Preadolescence',
				type: 'study',
				year: 2018,
				publisher: 'Developmental Psychology'
			}
		],
		pages: 'Endnote [8]; Kap. 1',
		context: 'U. Minnesota Längsschnittstudie zu Overcontrolling Parenting.'
	},
	{
		name: 'Vigdal, Jørgen S.',
		field: 'Psychologie',
		works: [
			{ title: 'Helicopter Parenting and Depression: A Systematic Review of 38 Studies', type: 'study', year: 2022, publisher: 'Frontiers in Psychology', coAuthors: ['Brennick'] }
		],
		pages: 'Endnote [8]; Kap. 1',
		context: '38-Studien-Review Helicopter Parenting und Depression.'
	},

	// ---- Verhaltensgenetik ----
	{
		name: 'Plomin, Robert',
		field: 'Verhaltensgenetik',
		works: [
			{
				title: 'Genetics and general cognitive ability (intelligence)',
				type: 'study',
				year: 2015,
				publisher: 'Molecular Psychiatry',
				coAuthors: ['Deary, Ian J.']
			},
			{
				title: 'Top 10 Replicated Findings From Behavioral Genetics',
				type: 'study',
				year: 2016,
				publisher: 'Perspectives on Psychological Science'
			},
			{ title: 'Blueprint: How DNA Makes Us Who We Are', type: 'book', year: 2018 }
		],
		pages: 'Endnote [160,162]; Kap. 9, Kap. 18',
		context: 'Behavior-genetics Mainstream; Heritabilität steigt mit Alter.',
		keyFigure: true
	},
	{
		name: 'Polderman, Tinca J. C.',
		field: 'Verhaltensgenetik',
		works: [
			{
				title: 'Meta-analysis of the heritability of human traits based on fifty years of twin studies',
				type: 'study',
				year: 2015,
				publisher: 'Nature Genetics'
			}
		],
		pages: 'Endnote [161]; Kap. 9',
		context: '50 Jahre Zwillingsforschung, methodisch umfassendste Meta-Analyse.',
		keyFigure: true
	},
	{
		name: 'Tucker-Drob, Elliot M.',
		field: 'Verhaltensgenetik',
		works: [
			{ title: 'Gene-by-Environment Interactions in Psychology', type: 'study', year: 2013, coAuthors: ['Briley, Daniel A.', 'Harden, K. Paige'] }
		],
		pages: 'Endnote [325]; Kap. 16',
		context: 'Gene-Umwelt-Interaktion über die Entwicklung.'
	},
	{
		name: 'Rohrer, Julia M.',
		field: 'Verhaltensgenetik / Persönlichkeit',
		works: [
			{
				title: 'Examining the effects of birth order on personality',
				type: 'study',
				year: 2015,
				publisher: 'PNAS',
				coAuthors: ['Egloff, Boris', 'Schmukle, Stefan C.']
			}
		],
		pages: 'Endnote [75]; Kap. 5',
		context: 'N=377k; begräbt den Mythos starker Geburtenrang-Effekte.',
		keyFigure: true
	},
	{
		name: 'Damian, Rodica Ioana',
		field: 'Persönlichkeit',
		works: [
			{ title: 'The Associations of Birth Order with Personality and Intelligence', type: 'study', year: 2015, coAuthors: ['Roberts, Brent W.'] }
		],
		pages: 'Endnote [74]; Kap. 5',
		context: 'Parallelstudie zu Rohrer; gleiche Nullbefunde.'
	},
	{
		name: 'Ashton, Michael C.',
		field: 'Persönlichkeit',
		works: [
			{ title: 'Birth order and personality (HEXACO-Analyse)', type: 'study', year: 2024, publisher: 'PNAS', coAuthors: ['Lee, Kibeom'] }
		],
		pages: 'Endnote [73]; Kap. 5',
		context: 'Replikation der Rohrer-Befunde mit HEXACO-Modell.'
	},
	{
		name: 'Scarr, Sandra',
		field: 'Verhaltensgenetik',
		works: [
			{ title: 'The Minnesota Adoption Studies', type: 'study', year: 1983, coAuthors: ['Weinberg, Richard A.'] }
		],
		pages: 'Endnote [324]; Kap. 16',
		context: 'Minnesota Adoption Study — Klassiker der Verhaltensgenetik.'
	},
	{
		name: 'Kandler, Christian',
		field: 'Verhaltensgenetik / Werte',
		works: [
			{ title: 'Zwillingsstudie zur Werteübertragung', type: 'study', year: 2016, coAuthors: ['Gottschling, Juliana', 'Spinath, Frank M.'] }
		],
		pages: 'Endnote [118]; Kap. 7',
		context: 'Werteübertragung in Zwillingsdesign.'
	},
	{
		name: 'Specht, Jule',
		field: 'Persönlichkeitspsychologie',
		works: [
			{ title: 'Big Five Personality Traits and Their Stability Across the Life Course', type: 'study', year: 2011, coAuthors: ['Egloff, Boris', 'Schmukle, Stefan C.'] }
		],
		pages: 'Endnote [56]; Kap. 4',
		context: 'Stabilität und Plastizität der Persönlichkeit über die Lebensspanne.'
	},

	// ---- Trauma / Resilienz ----
	{
		name: 'Rutter, Michael',
		field: 'Entwicklungspsychopathologie',
		works: [
			{
				title: 'Deprivation-Specific Psychological Patterns: Effects of Institutional Deprivation',
				type: 'study',
				year: 2010,
				publisher: 'Monographs of the Society for Research in Child Development (ERA Study)'
			}
		],
		pages: 'Endnote [52]; Kap. 4',
		context: 'English and Romanian Adoptees Study — eine der methodisch solidesten Längsschnittstudien der Entwicklungspsychologie.',
		keyFigure: true
	},
	{
		name: 'Kumsta, Robert',
		field: 'Entwicklungspsychopathologie',
		works: [
			{ title: 'ERA-Folgestudien zu rumänischen Adoptierten', type: 'study', year: 2010 }
		],
		pages: 'Endnote [55]; Kap. 4',
		context: 'ERA-Folgestudien.'
	},
	{
		name: 'Yehuda, Rachel',
		field: 'Trauma',
		works: [{ title: 'Risk and Resilience in Posttraumatic Stress Disorder', type: 'article', year: 2004 }],
		pages: 'Endnote [57]; Kap. 4',
		context: 'Resilienz-Konzept im Trauma-Kontext.'
	},
	{
		name: 'Seery, Mark D.',
		field: 'Gesundheitspsychologie',
		works: [
			{
				title: 'Whatever Does Not Kill Us: Cumulative Lifetime Adversity, Vulnerability, and Resilience',
				type: 'study',
				year: 2010,
				publisher: 'Journal of Personality and Social Psychology',
				coAuthors: ['Holman, E. Alison', 'Silver, Roxane Cohen']
			}
		],
		pages: 'Endnote [9]; Kap. 1, Kap. 4',
		context: 'Hormesis-Hypothese; später gemischt repliziert.'
	},
	{
		name: 'Vaillant, George E.',
		field: 'Entwicklungspsychologie',
		works: [
			{
				title: 'Triumphs of Experience: The Men of the Harvard Grant Study',
				type: 'book',
				year: 2012,
				publisher: 'Harvard University Press'
			}
		],
		pages: 'Endnote [62]; Kap. 4',
		context: 'Harvard Grant Study — lebenslange Entwicklung der Persönlichkeit.',
		keyFigure: true
	},

	// ---- Medien / Screentime ----
	{
		name: 'Haidt, Jonathan',
		field: 'Medienpsychologie',
		works: [
			{
				title: 'The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness',
				type: 'book',
				year: 2024,
				publisher: 'Penguin Press'
			}
		],
		pages: 'Endnote [295]; Kap. 15',
		context: 'Haupt-Alarmist der Smartphone-Jugend-Krisen-These. Prüfer rezipiert respektvoll, stellt aber Orben gleichgewichtig daneben.',
		keyFigure: true
	},
	{
		name: 'Twenge, Jean M.',
		field: 'Medienpsychologie',
		works: [
			{ title: 'Screen and Wellbeing', type: 'study', year: 2018, coAuthors: ['Campbell, W. Keith'] }
		],
		pages: 'Endnote [296]; Kap. 15',
		context: 'Generational Screens-and-Wellbeing-Forschung.',
		keyFigure: true
	},
	{
		name: 'Orben, Amy',
		field: 'Medienpsychologie',
		works: [
			{
				title: 'The association between adolescent well-being and digital technology use',
				type: 'study',
				year: 2019,
				publisher: 'Nature Human Behaviour',
				coAuthors: ['Przybylski, Andrew K.']
			}
		],
		pages: 'Endnote [297]; Kap. 15',
		context: 'Drei Zeitbudget-Datensätze, findet nur minimale Effekte. Zentrales Gegengewicht zu Haidt.',
		keyFigure: true
	},
	{
		name: 'Yang, Jian',
		field: 'Medienpsychologie',
		works: [
			{ title: '14-Studies Review Smartphone and Depression', type: 'study', year: 2019 }
		],
		pages: 'Endnote [300]; Kap. 15',
		context: 'Meta-Review zu Smartphone und Depression.'
	},
	{
		name: 'Augner, Christoph',
		field: 'Medienpsychologie',
		works: [
			{ title: '17-Studien-Meta zu Smartphone-Nutzung und Angst', type: 'study', year: 2023 }
		],
		pages: 'Endnote [301]; Kap. 15',
		context: 'Meta-Analyse zu Smartphone und Angst-/Depressionssymptomen.'
	},
	{
		name: 'Eirich, Rachel',
		field: 'Medienpsychologie',
		works: [
			{ title: 'Association of Screen Time and Internalizing Symptoms in Children and Adolescents', type: 'study', year: 2022, publisher: 'JAMA Psychiatry' }
		],
		pages: 'Endnote [302]; Kap. 15',
		context: 'JAMA-Meta-Analyse zu Screentime und internalisierenden Symptomen.'
	},
	{
		name: 'Mallawaarachchi, Suranga R.',
		field: 'Medienpsychologie',
		works: [
			{ title: '100-Studies Meta-Analysis on Screens in Children under 6', type: 'study', year: 2024, publisher: 'JAMA Pediatrics' }
		],
		pages: 'Endnote [310]; Kap. 15',
		context: 'Umfangreichste Meta-Analyse zu Kleinkindern und Bildschirmen.'
	},
	{
		name: 'Sun, Yijun',
		field: 'Medienpsychologie',
		works: [
			{ title: '5-Jahres-Längsschnitt Stanford zu Jugendlichen-Smartphone-Nutzung', type: 'study', year: 2023 }
		],
		pages: 'Endnote [312]; Kap. 15',
		context: 'Stanford-Längsschnitt zu Jugendlichen-Smartphone-Effekten.'
	},
	{
		name: 'Chaarani, Bader',
		field: 'Medienpsychologie',
		works: [{ title: 'ABCD Video Gaming Study', type: 'study', year: 2022 }],
		pages: 'Endnote [311]; Kap. 15',
		context: 'ABCD-Kohorte zu Videospielen.'
	},
	{
		name: 'Dienlin, Tobias',
		field: 'Kommunikationswissenschaft',
		works: [{ title: 'Interview mit Tillmann Prüfer', type: 'other', year: 2025 }],
		pages: 'Kap. 15 (Interview)',
		context: 'Kommunikationswissenschaftler, Interview-Partner für Prüfers Smartphone-Kapitel.'
	},

	// ---- Gender / Geschlechtsidentität ----
	{
		name: 'Sax, Leonard',
		field: 'Gender / Medizin',
		works: [
			{
				title: 'How Common Is Intersex? A Response to Anne Fausto-Sterling',
				type: 'article',
				year: 2002,
				publisher: 'Journal of Sex Research'
			}
		],
		pages: 'Endnote [202]; Kap. 11',
		context: 'Prüfer zitiert Sax zur Intersex-Prävalenz (0,02 %).'
	},
	{
		name: 'Ganna, Andrea',
		field: 'Genetik',
		works: [
			{
				title: 'Large-scale GWAS reveals insights into the genetic architecture of same-sex sexual behavior',
				type: 'study',
				year: 2019,
				publisher: 'Science'
			}
		],
		pages: 'Endnote [213]; Kap. 11',
		context: 'Große GWAS zur genetischen Architektur gleichgeschlechtlichen Verhaltens.'
	},
	{
		name: 'Bachmann, Celin F.',
		field: 'Kinder- und Jugendpsychiatrie',
		works: [
			{ title: 'Trends der Gender-Dysphorie-Diagnosen in Deutschland 2013–2022', type: 'study', year: 2024, publisher: 'Deutsches Ärzteblatt' }
		],
		pages: 'Endnote [208]; Kap. 11',
		context: 'Deutsche Diagnose-Trends Gender-Dysphorie.'
	},
	{
		name: 'Simons, Laura K.',
		field: 'Psychologie / Trans',
		works: [
			{ title: 'Parental Support and Mental Health Among Transgender Adolescents', type: 'study', year: 2013 }
		],
		pages: 'Endnote [209]; Kap. 11',
		context: 'Los Angeles N=66: elterliche Unterstützung als Schutzfaktor.'
	},
	{
		name: 'Ryan, Caitlin',
		field: 'Psychologie / LGBT',
		works: [
			{ title: 'Family Rejection as a Predictor of Negative Health Outcomes in LGBT Young Adults', type: 'study', year: 2009, publisher: 'Pediatrics' }
		],
		pages: 'Endnote [210]; Kap. 11',
		context: 'Family-Rejection-Studie, LGBT-Jugendliche.'
	},
	{
		name: 'Olson, Kristina R.',
		field: 'Entwicklungspsychologie / Trans',
		works: [
			{ title: 'Gender Identity 5 Years After Social Transition', type: 'study', year: 2022, publisher: 'Pediatrics' }
		],
		pages: 'Endnote [212]; Kap. 11',
		context: '5-Jahres-Studie zur Stabilität früher sozialer Transition.',
		keyFigure: true
	},
	{
		name: 'Hayton, Debbie',
		field: 'Gender / Kritik',
		works: [{ title: 'Interview mit Tillmann Prüfer', type: 'other', year: 2025 }],
		pages: 'Kap. 11 (Interview)',
		context: 'Kritische Insider-Stimme zur trans-medizinischen Debatte.'
	},
	{
		name: 'Finne, Emily',
		field: 'Gesundheitsforschung',
		works: [
			{ title: 'HBSC Körperbild-Studie', type: 'study', year: 2020, coAuthors: ['Schlattmann', 'Kolip'] }
		],
		pages: 'Endnote [217]; Kap. 11/12',
		context: 'Deutsche HBSC-Welle zu Körperbild und Jugendlichen.'
	},
	{
		name: 'Suarez, Nicolas A.',
		field: 'Epidemiologie',
		works: [
			{ title: 'Youth Risk Behavior Survey — Gender Identity', type: 'report', year: 2024, publisher: 'MMWR' }
		],
		pages: 'Endnote [206,214]; Kap. 11',
		context: 'US-CDC-Daten zu Jugendlichen und Gender Identity.'
	},
	{
		name: 'Johns, Michelle M.',
		field: 'Epidemiologie',
		works: [{ title: 'Transgender Youth and School-Based Risk Behaviors', type: 'study', year: 2019 }],
		pages: 'Endnote [211]; Kap. 11',
		context: 'CDC-Forschung zu Jugendlichen und Transgender-Erfahrung.'
	},
	{
		name: 'Jones, Jeffrey M.',
		field: 'Demoskopie',
		works: [{ title: 'LGBTQ+ Identification (Gallup)', type: 'report', year: 2025, publisher: 'Gallup' }],
		pages: 'Endnote [207]; Kap. 11',
		context: 'Gallup-Daten zur LGBTQ+-Identifikation in den USA.'
	},

	// ---- Belohnung / Strafe / Motivation ----
	{
		name: 'Deci, Edward L.',
		field: 'Motivationspsychologie',
		works: [
			{ title: 'Self-Determination Theory', type: 'article', year: 2000, coAuthors: ['Ryan, Richard M.'] }
		],
		pages: 'Endnote [265]; Kap. 13',
		context: 'Self-Determination-Theory — Grundlage der Autonomie-Unterstützungs-Forschung.',
		keyFigure: true
	},
	{
		name: 'Skinner, B. F.',
		field: 'Behaviorismus',
		works: [{ title: 'The Behavior of Organisms', type: 'book', year: 1938 }],
		pages: 'Endnote [247]; Kap. 13',
		context: 'Grundlagenwerk Behaviorismus.'
	},
	{
		name: 'Greene, David; Lepper, Mark R.',
		field: 'Motivationspsychologie',
		works: [
			{ title: 'Overjustification Studies', type: 'study', year: 1976, coAuthors: ['Sternberg, Robert J.'] }
		],
		pages: 'Endnote [244]; Kap. 13',
		context: 'Klassische Overjustification-Forschung.'
	},
	{
		name: 'Cameron, Judy',
		field: 'Bildungspsychologie',
		works: [
			{
				title: 'Reinforcement, Reward, and Intrinsic Motivation: A Meta-Analysis',
				type: 'study',
				year: 1994,
				publisher: 'Review of Educational Research',
				coAuthors: ['Pierce, W. David']
			}
		],
		pages: 'Endnote [264]; Kap. 13',
		context: 'Widerlegt die Universalfassung der Overjustification-Hypothese.'
	},
	{
		name: 'Cerasoli, Christopher P.',
		field: 'Arbeitspsychologie',
		works: [
			{
				title: 'Intrinsic Motivation and Extrinsic Incentives Jointly Predict Performance: A 40-Year Meta-Analysis',
				type: 'study',
				year: 2014,
				publisher: 'Psychological Bulletin',
				coAuthors: ['Nicklin, Jessica M.', 'Ford, Michael T.']
			}
		],
		pages: 'Endnote [263]; Kap. 13',
		context: '40-Jahre-Meta-Analyse zu intrinsischer/extrinsischer Motivation.'
	},
	{
		name: 'Fabiano, Gregory A.',
		field: 'Klinische Psychologie',
		works: [
			{ title: 'Token Economies in ADHD Treatment', type: 'study', year: 2010, coAuthors: ['Pelham, William E.'] }
		],
		pages: 'Endnote [243]; Kap. 13',
		context: 'Token-Economies bei ADHS — Belohnungen nützen hier.'
	},
	{
		name: 'Kubanek, Jan',
		field: 'Kognitionsforschung',
		works: [
			{ title: 'Losses lead to faster learning than gains', type: 'study', year: 2015, publisher: 'Cognition', coAuthors: ['Snyder, Lawrence H.', 'Abrams, Richard A.'] }
		],
		pages: 'Endnote [249]; Kap. 13',
		context: 'Verlustlernen schneller als Gewinnlernen.'
	},
	{
		name: 'Aronson, Elliot',
		field: 'Sozialpsychologie',
		works: [{ title: 'Forbidden-Fruit-Experiments', type: 'study', year: 1963, coAuthors: ['Carlsmith, J. Merrill'] }],
		pages: 'Endnote [251]; Kap. 13',
		context: 'Verbotene-Frucht-Experimente.'
	},
	{
		name: 'Owen, Dylan J.',
		field: 'Erziehungsforschung',
		works: [
			{ title: 'Parental Feedback: A Systematic Review of 41 Studies', type: 'study', year: 2012 }
		],
		pages: 'Endnote [250]; Kap. 13',
		context: 'Systematischer Review elterliches Feedback.'
	},
	{
		name: 'Ferguson, Christopher J.',
		field: 'Psychologie',
		works: [
			{ title: 'Spanking and Child Outcomes — A Longitudinal Meta-Analysis', type: 'study', year: 2013 }
		],
		pages: 'Endnote [259]; Kap. 13',
		context: 'Längsschnitt-Meta zu Körperstrafen.'
	},
	{
		name: 'Heilmann, Anita',
		field: 'Gesundheitsforschung',
		works: [
			{
				title: 'Physical Punishment and Child Outcomes: A Narrative Review of Prospective Studies',
				type: 'study',
				year: 2021,
				publisher: 'The Lancet'
			}
		],
		pages: 'Endnote [260]; Kap. 13',
		context: 'Lancet-Review zu Körperstrafen.'
	},
	{
		name: 'Finkelhor, David',
		field: 'Sozialforschung',
		works: [
			{ title: 'Corporal Punishment: Current Rates from a National Survey', type: 'study', year: 2019 }
		],
		pages: 'Endnote [257]; Kap. 13',
		context: 'Nationale US-Umfrage zur Verbreitung körperlicher Strafen.'
	},
	{
		name: 'Harris, Sandra L.',
		field: 'Klinische Psychologie',
		works: [
			{ title: 'Study on Corporal Punishment (N=883)', type: 'study', year: 1984, coAuthors: ['Howard, Kenneth I.'] }
		],
		pages: 'Endnote [256]; Kap. 13',
		context: 'Frühe Studie zu körperlichen Strafen und Kindesentwicklung.'
	},

	// ---- Ernährung & Gesundheit ----
	{
		name: 'Sokol, Rebeccah L.',
		field: 'Ernährungsforschung',
		works: [
			{
				title: 'Parenting Styles and Childhood Obesity: A Meta-Analysis',
				type: 'study',
				year: 2017,
				publisher: 'Obesity Reviews',
				coAuthors: ['Qin, Bo', 'Poti, Jennifer M.']
			}
		],
		pages: 'Endnote [285]; Kap. 14',
		context: 'Meta-Analyse Elternstil und kindliches Übergewicht.'
	},
	{
		name: 'Ruzicka, Emma B.',
		field: 'Ernährungsforschung',
		works: [
			{ title: 'Parental Restrictive Feeding Meta-Analysis', type: 'study', year: 2021, coAuthors: ['Darling', 'Sato'] }
		],
		pages: 'Endnote [289]; Kap. 14',
		context: 'Meta zu restriktivem Fütterungsstil und späterem BMI.'
	},
	{
		name: 'Hittner, Erica F.',
		field: 'Ernährungsforschung',
		works: [
			{ title: 'Colorado Adoption Project — Feeding Practices', type: 'study', year: 2016 }
		],
		pages: 'Endnote [291]; Kap. 14',
		context: 'Colorado Adoption Project zu Essensstilen.'
	},
	{
		name: 'Mahmood, Lalla',
		field: 'Ernährungsforschung',
		works: [{ title: 'Parental Influences on Child Eating Behavior', type: 'study', year: 2021 }],
		pages: 'Endnote [292]; Kap. 14',
		context: 'Elterneinfluss auf kindliches Essverhalten.'
	},

	// ---- Frühförderung / IQ / Spiel ----
	{
		name: 'Sylva, Kathy',
		field: 'Bildungsforschung',
		works: [
			{ title: 'Effective Provision of Pre-School Education (EPPE)', type: 'study', year: 2004 }
		],
		pages: 'Endnote [175]; Kap. 9',
		context: 'EPPE-Studie — britische Goldstandard-Langzeitstudie zur Frühförderung.',
		keyFigure: true
	},
	{
		name: 'Taggart, Brenda',
		field: 'Bildungsforschung',
		works: [
			{ title: 'Effective Pre-school, Primary and Secondary Education Project (EPPSE)', type: 'study', year: 2015 }
		],
		pages: 'Endnote [158]; Kap. 9',
		context: 'EPPSE-Folgestudie zu EPPE.'
	},
	{
		name: 'Reynolds, Arthur J.',
		field: 'Bildungsforschung',
		works: [
			{ title: 'Chicago Longitudinal Study', type: 'study', year: 2011, publisher: 'Child Development' }
		],
		pages: 'Endnote [176]; Kap. 9',
		context: 'Langzeiteffekte früher Intervention in Chicago.'
	},
	{
		name: 'Campbell, Frances A.',
		field: 'Bildungsforschung',
		works: [
			{ title: 'Abecedarian Project Follow-up', type: 'study', year: 2014, publisher: 'Science' }
		],
		pages: 'Endnote [177]; Kap. 9',
		context: 'Abecedarian Project — 30-Jahre-Langzeiteffekte der Säuglingsförderung.',
		keyFigure: true
	},
	{
		name: 'Li, Xinyan',
		field: 'Bildungsforschung',
		works: [
			{ title: 'Review of 67 Early-Intervention Studies, Brown University', type: 'study', year: 2020 }
		],
		pages: 'Endnote [157]; Kap. 9',
		context: '67-Studien-Review zur Frühförderung.'
	},
	{
		name: 'Gunderson, Elizabeth A.',
		field: 'Entwicklungspsychologie',
		works: [
			{ title: 'Parent Praise to 1- to 3-Year-Olds Predicts Children\'s Motivational Frameworks 5 Years Later', type: 'study', year: 2013, publisher: 'Child Development' }
		],
		pages: 'Endnote [164]; Kap. 9',
		context: 'Prozesslob vs. Personlob — Längsschnitt-Evidenz.'
	},
	{
		name: 'Cimpian, Andrei',
		field: 'Entwicklungspsychologie',
		works: [
			{ title: 'Subtle Linguistic Cues Affect Children\'s Motivation', type: 'study', year: 2007, publisher: 'Psychological Science' }
		],
		pages: 'Endnote [163]; Kap. 9',
		context: 'Generisches vs. spezifisches Feedback.'
	},
	{
		name: 'Sternberg, Robert J.',
		field: 'Intelligenzforschung',
		works: [{ title: 'Interview mit Tillmann Prüfer', type: 'other', year: 2025 }],
		pages: 'Kap. 9 (Interview)',
		context: 'Intelligenz-Theoretiker; Interview-Partner für Prüfers IQ-Kapitel.'
	},
	{
		name: 'Boyce, W. Thomas',
		field: 'Entwicklungspädiatrie',
		works: [
			{ title: 'Biological Sensitivity to Context', type: 'article', year: 2005, coAuthors: ['Ellis, Bruce J.'] }
		],
		pages: 'Endnote [171]; Kap. 9',
		context: 'Orchideen-/Löwenzahn-Metapher; Prüfer kritisch.'
	},
	{
		name: 'Lionetti, Francesca',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'Dandelions, Tulips and Orchids', type: 'study', year: 2018 }],
		pages: 'Endnote [172]; Kap. 9',
		context: 'Erweiterung um „Tulpen" — kontinuierliche Sensibilität.'
	},
	{
		name: 'Widaman, Keith F.; Zhang, Lijing; Belsky, Jay',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'Sensitivity Distribution Analysis', type: 'study', year: 2023 }],
		pages: 'Endnote [173]; Kap. 9',
		context: 'Zeigt: Verteilung ist kontinuierlich, nicht bimodal.'
	},

	// ---- Freies Spiel / Geschlecht-Spielvorlieben ----
	{
		name: 'Vygotsky, Lev',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'Mind in Society', type: 'book', year: 1978, publisher: 'Harvard University Press' }],
		pages: 'Endnote [184]; Kap. 10',
		context: 'Spieltheorie und Zone der nächsten Entwicklung.'
	},
	{
		name: 'Gray, Peter',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'Free to Learn', type: 'book', year: 2013, publisher: 'Basic Books' }],
		pages: 'Endnote [186]; Kap. 10',
		context: 'Plädoyer für freies Spiel; empirische Basis der Hunter-Gatherer-Analogie schwach.'
	},
	{
		name: 'Yogman, Michael',
		field: 'Kinderheilkunde',
		works: [{ title: 'The Power of Play: A Pediatric Role in Enhancing Development in Young Children', type: 'report', year: 2018, publisher: 'American Academy of Pediatrics' }],
		pages: 'Endnote [188]; Kap. 10',
		context: 'AAP-Stellungnahme zur Wichtigkeit des freien Spiels.'
	},
	{
		name: 'Lillard, Angeline S.',
		field: 'Entwicklungspsychologie',
		works: [
			{ title: 'The Impact of Pretend Play on Children\'s Development: A Review of the Evidence', type: 'study', year: 2013, publisher: 'Psychological Bulletin' }
		],
		pages: 'Endnote [191]; Kap. 10',
		context: 'Kritischer Review zu Pretend-Play-Effekten.'
	},
	{
		name: 'Smits-van der Nat, Marlies',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'Pretend Play Meta-Analysis 2024', type: 'study', year: 2024 }],
		pages: 'Endnote [194]; Kap. 10',
		context: 'Neuere Meta-Analyse, optimistischer als Lillard.'
	},
	{
		name: 'Bonawitz, Elizabeth',
		field: 'Kognitive Entwicklung',
		works: [{ title: 'The Double-Edged Sword of Pedagogy', type: 'article', year: 2011, publisher: 'Cognition' }],
		pages: 'Endnote [168]; Kap. 10',
		context: 'Wenn Unterricht Exploration erstickt.'
	},
	{
		name: 'Davis, Jac T. M.',
		field: 'Gender / Entwicklung',
		works: [
			{ title: 'Sex Differences in Children\'s Toy Preferences: A Systematic Review, Meta-Regression, and Meta-Analysis', type: 'study', year: 2021, publisher: 'Archives of Sexual Behavior', coAuthors: ['Hines, Melissa'] }
		],
		pages: 'Endnote [199]; Kap. 11',
		context: '50-Jahre-Meta-Analyse zu Spielzeug-Präferenzen; >75 Studien.',
		keyFigure: true
	},

	// ---- Werte / Freundschaft / Geschwister ----
	{
		name: 'Knafo-Noam, Ariel; Barni, Daniela; Schwartz, Shalom H.',
		field: 'Entwicklungspsychologie / Werte',
		works: [
			{ title: 'Parent-Child Value Similarity', type: 'article', year: 2020, publisher: 'Oxford Handbook' }
		],
		pages: 'Endnote [119]; Kap. 7',
		context: 'Oxford Handbook Kapitel zur Werteübertragung.'
	},
	{
		name: 'Doering, Anna K.',
		field: 'Werteforschung',
		works: [{ title: 'Values in Adolescence', type: 'study', year: 2017 }],
		pages: 'Endnote [106]; Kap. 7',
		context: 'Werte und Wärme in Familien.'
	},
	{
		name: 'Bornstein, Marc H.; Yu, Jiyoung; Putnick, Diane L.',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'Cross-Cultural Studies of Parenting Values', type: 'study', year: 2022 }],
		pages: 'Endnote [116]; Kap. 7',
		context: 'Kulturvergleichende Werteübertragung.'
	},
	{
		name: 'Lee, Sang Min; Shin, Minseon; Bong, Mimi',
		field: 'Bildungsforschung',
		works: [{ title: 'Intergenerational Transmission of Academic Values', type: 'study', year: 2020 }],
		pages: 'Endnote [112]; Kap. 7',
		context: 'Korea-Studie zu akademischen Werten.'
	},
	{
		name: 'Zhang, Lei',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'Only-Child Theory of Mind', type: 'study', year: 2021 }],
		pages: 'Endnote [63]; Kap. 5',
		context: 'Theory of Mind bei Einzelkindern.'
	},
	{
		name: 'Jensen, Alexander C.',
		field: 'Familienforschung',
		works: [
			{ title: 'Parental Differential Treatment: A Meta-Analytic Review', type: 'study', year: 2025, publisher: 'Psychological Bulletin' }
		],
		pages: 'Endnote [76]; Kap. 5',
		context: 'Meta zu Differentialbehandlung in Familien.'
	},
	{
		name: 'Adler, Alfred',
		field: 'Individualpsychologie',
		works: [{ title: 'Understanding Human Nature', type: 'book', year: 1927 }],
		pages: 'Endnote [59]; Kap. 5',
		context: 'Historische Geschwisterposition-Theorie; durch Rohrer widerlegt.'
	},
	{
		name: 'Sullivan, Harry Stack',
		field: 'Psychiatrie',
		works: [{ title: 'The Interpersonal Theory of Psychiatry', type: 'book', year: 1953 }],
		pages: 'Endnote [130]; Kap. 8',
		context: 'Historischer Rahmen der Freundschaftsforschung.'
	},
	{
		name: 'Jung, Carl Gustav',
		field: 'Analytische Psychologie',
		works: [{ title: 'Psychologische Typen', type: 'book', year: 1921 }],
		pages: 'Endnote [143]; Kap. 8',
		context: 'Introversion als Persönlichkeitsdimension.'
	},
	{
		name: 'Li, Norman P.; Kanazawa, Satoshi',
		field: 'Evolutionspsychologie',
		works: [{ title: 'Country Roads, Take Me Home…: How Social Intelligence Moderates Well-Being', type: 'study', year: 2016 }],
		pages: 'Endnote [145]; Kap. 8',
		context: 'Moderne Freundschaftsquantität und Intelligenz.'
	},
	{
		name: 'Sandstrom, Gillian M.',
		field: 'Sozialpsychologie',
		works: [{ title: 'Social Interactions and Well-Being: The Surprising Power of Weak Ties', type: 'study', year: 2014, coAuthors: ['Dunn, Elizabeth W.'] }],
		pages: 'Endnote [139]; Kap. 8',
		context: 'Lose Bekanntschaften verbessern Wohlbefinden.'
	},

	// ---- Adoleszenz ----
	{
		name: 'Arnett, Jeffrey J.',
		field: 'Entwicklungspsychologie',
		works: [
			{ title: 'Emerging Adulthood: A Theory of Development from the Late Teens Through the Twenties', type: 'article', year: 2000, publisher: 'American Psychologist' }
		],
		pages: 'Endnote [314]; Kap. 16',
		context: '„Emerging adulthood"-Konzept.'
	},
	{
		name: 'Schwartz, Orli S.',
		field: 'Adoleszenzforschung',
		works: [
			{ title: 'Orygen Adolescent Development Study', type: 'study', year: 2017, publisher: 'Orygen/Univ. Melbourne' }
		],
		pages: 'Endnote [326]; Kap. 16',
		context: 'Warme Eltern-Kind-Beziehung schützt Adoleszenten-Gehirn.'
	},
	{
		name: 'Scalici, Francesca',
		field: 'Public Health',
		works: [{ title: 'Peer Smoking Influence', type: 'study', year: 2014, coAuthors: ['Schulz, Peter'] }],
		pages: 'Endnote [323]; Kap. 16',
		context: 'Peer-Einfluss auf Rauchen in der Adoleszenz.'
	},
	{
		name: 'Harris, Judith Rich',
		field: 'Entwicklungspsychologie',
		works: [
			{
				title: 'The Nurture Assumption: Why Children Turn Out the Way They Do',
				type: 'book',
				year: 1998,
				publisher: 'Free Press'
			}
		],
		pages: 'Endnote [335]; Kap. 17/18',
		context: 'Group Socialization Theory — Peers > Eltern ab Adoleszenz.',
		keyFigure: true
	},
	{
		name: 'Perrig-Chiello, Pasqualina',
		field: 'Entwicklungspsychologie',
		works: [
			{ title: 'Empty Nest Longitudinal Study (Schweiz)', type: 'study', year: 2005, coAuthors: ['Höpflinger, François'] },
			{ title: 'Interview mit Tillmann Prüfer', type: 'other', year: 2025 }
		],
		pages: 'Endnote [316]; Kap. 16 (Interview)',
		context: 'Auszugs- und Empty-Nest-Forschung in der Schweiz.'
	},
	{
		name: 'Gorchoff, Sara M.',
		field: 'Psychologie',
		works: [{ title: 'Contextualizing Change in Marital Satisfaction During Middle Age', type: 'study', year: 2008 }],
		pages: 'Endnote [320]; Kap. 16',
		context: 'Ehe-Zufriedenheit nach Auszug der Kinder.'
	},

	// ---- Good-enough Parenting / Mindful Parenting ----
	{
		name: 'Sroufe, L. Alan; Egeland, Byron; Carlson, Elizabeth A.',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'The Development of the Person: The Minnesota Study', type: 'book', year: 2005, publisher: 'Guilford' }],
		pages: 'Endnote [328]; Kap. 17',
		context: 'Minnesota Longitudinal — Grundlage für empirische Good-Enough-Argumente.'
	},
	{
		name: 'Woodhouse, Susan S.',
		field: 'Klinische Psychologie',
		works: [{ title: 'Secure Base Provision: A New Approach to Examining Links Between Maternal Caregiving and Infant Attachment', type: 'study', year: 2020 }],
		pages: 'Endnote [329]; Kap. 17',
		context: 'Empirische Basis für die ~50%-Reaktionsschwelle (Good-Enough).'
	},
	{
		name: 'Bögels, Susan M.',
		field: 'Klinische Psychologie',
		works: [{ title: 'Mindful Parenting', type: 'study', year: 2014, publisher: 'Mindfulness' }],
		pages: 'Endnote [332]; Kap. 17',
		context: 'Mindful-Parenting-RCT, vielversprechende Pilotergebnisse.'
	},
	{
		name: 'Lilley, Olivia',
		field: 'Klinische Psychologie',
		works: [{ title: 'Perfectionism Meta-Analysis', type: 'study', year: 2020, coAuthors: ['Sirois, Fuschia', 'Rowse, Georgina'] }],
		pages: 'Endnote [336]; Kap. 17',
		context: 'Meta-Analyse zu elterlichem Perfektionismus.'
	},
	{
		name: 'Yerkes, Mara A.',
		field: 'Soziologie',
		works: [{ title: 'The Intensive Parenting Paradox', type: 'study', year: 2021 }],
		pages: 'Endnote [337]; Kap. 17',
		context: 'Intensive-Parenting-Paradox Analyse.'
	},
	{
		name: 'Vasquez, Ariana C.',
		field: 'Bildungspsychologie',
		works: [
			{ title: 'Parent Autonomy Support: A Meta-Analysis', type: 'study', year: 2015, publisher: 'Educational Psychology Review' }
		],
		pages: 'Endnote [341]; Kap. 17',
		context: 'Meta-Analyse 36 Studien zu Autonomie-Unterstützung.'
	},
	{
		name: 'Jungert, Tomas',
		field: 'Bildungspsychologie',
		works: [{ title: 'Parental Autonomy Support and Adolescent Wellbeing', type: 'study', year: 2014 }],
		pages: 'Endnote [339]; Kap. 17',
		context: 'Schwedische Studie zu Autonomie-Unterstützung.'
	},
	{
		name: 'Meuwissen, Alyssa S.',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'Autonomy Support Experiment', type: 'study', year: 2019, coAuthors: ['Carlson, Stephanie M.'] }],
		pages: 'Endnote [340]; Kap. 17',
		context: 'Experimentelle Evidenz zu Autonomie-Unterstützung.'
	},
	{
		name: 'Eriksson, Kimmo',
		field: 'Psychologie',
		works: [{ title: 'Parental Autonomy Support in Adolescence', type: 'study', year: 2022 }],
		pages: 'Endnote [338]; Kap. 17',
		context: 'Schwedische Autonomie-Unterstützungs-Studie.'
	},

	// ---- Levant / Alexithymie / Jungen-Emotionen ----
	{
		name: 'Levant, Ronald F.',
		field: 'Männerpsychologie',
		works: [
			{
				title: 'Normative Male Alexithymia',
				type: 'article',
				year: 2001
			},
			{
				title: 'Developments in the Assessment of Normative Male Alexithymia',
				type: 'article',
				year: 2013,
				coAuthors: ['Wong, Y. Joel']
			}
		],
		pages: 'Endnote [226,228]; Kap. 12',
		context: 'Zentrales Konzept normativer männlicher Alexithymie.',
		keyFigure: true
	},
	{
		name: 'Franz, Matthias',
		field: 'Psychosomatik',
		works: [
			{ title: 'Alexithymie in Deutschland — Repräsentativbefund', type: 'study', year: 2008 }
		],
		pages: 'Endnote [227]; Kap. 12',
		context: 'Deutsche Repräsentativdaten zur Alexithymie.'
	},
	{
		name: 'Thorberg, Fred A.',
		field: 'Klinische Psychologie',
		works: [
			{ title: 'Parental Bonding and Alexithymia: A Meta-Analysis', type: 'study', year: 2011 }
		],
		pages: 'Endnote [229]; Kap. 12',
		context: 'Meta-Analyse parental bonding und Alexithymie.'
	},
	{
		name: 'Van Tilburg, Miranda A. L.',
		field: 'Psychologie',
		works: [{ title: 'Crying Behavior in Children and Adolescents', type: 'study', year: 2002 }],
		pages: 'Endnote [219]; Kap. 12',
		context: 'Weinen-Verhalten nach Alter und Geschlecht.'
	},
	{
		name: 'Aznar, Ana; Tenenbaum, Harriet R.',
		field: 'Entwicklungspsychologie',
		works: [{ title: 'Gender differences in emotional language in parent-child conversations', type: 'study', year: 2015 }],
		pages: 'Endnote [232]; Kap. 12',
		context: 'Eltern nutzen mit Töchtern mehr Gefühlsvokabular.'
	},

	// ---- Ratgeber-Literatur (als Primärquelle der Kritik) ----
	{
		name: 'Sears, William; Sears, Martha',
		field: 'Elternratgeber',
		works: [
			{
				title: 'The Baby Book',
				type: 'book',
				year: 2013,
				publisher: 'Little, Brown'
			}
		],
		pages: 'Endnote [77]; Kap. 6',
		context: 'Attachment Parenting — von Prüfer kritisch zerlegt.',
		keyFigure: true
	},
	{
		name: 'Juul, Jesper',
		field: 'Elternratgeber',
		works: [{ title: 'Leitwölfe sein', type: 'book', year: 2016 }],
		pages: 'Endnote [30]; Kap. 3',
		context: 'Populäre dt. Ratgeber-Metapher; Prüfers „Leit-Erdmännchen"-Selbstironie.'
	},
	{
		name: 'Schmidt, Nicola',
		field: 'Elternratgeber',
		works: [{ title: 'Artgerecht', type: 'book', year: 2024 }],
		pages: 'Endnote [17]; Kap. 1/2',
		context: 'Dt. Attachment-nahe Ratgeberliteratur.'
	},
	{
		name: 'Schregardus, Petra',
		field: 'Elternratgeber',
		works: [{ title: 'Ferber-Methode in der deutschen Rezeption', type: 'book', year: 1998 }],
		pages: 'Endnote [2]; Kap. 1',
		context: 'Symptomatischer Eintrag für zeitgebundenen Ratgeber-Konsens.'
	},
	{
		name: 'Schreber, Daniel Gottlob Moritz',
		field: 'Historische Pädagogik',
		works: [{ title: 'Kallipädie', type: 'book', year: 1858 }],
		pages: 'Endnote [13–15]; Kap. 2',
		context: 'Historisches Negativbeispiel: harte 19.-Jh.-Pädagogik.'
	},
	{
		name: 'Niemeyer, August Hermann',
		field: 'Historische Pädagogik',
		works: [{ title: 'Grundsätze der Erziehung und des Unterrichts', type: 'book', year: 1796 }],
		pages: 'Endnote [16]; Kap. 2',
		context: 'Klassiker der aufklärerischen Erziehungsliteratur.'
	},
	{
		name: 'Key, Ellen',
		field: 'Pädagogik / Sozialreform',
		works: [{ title: 'Das Jahrhundert des Kindes', type: 'book', year: 1900 }],
		pages: 'Endnote [24]; Kap. 2',
		context: 'Klassiker der Kindheits-Idealisierung um 1900.'
	},
	{
		name: 'Dekker, Jeroen J. H.',
		field: 'Bildungsgeschichte',
		works: [{ title: 'Educational Ambitions in History', type: 'book', year: 2009 }],
		pages: 'Endnote [25]; Kap. 2',
		context: 'Bildungshistorische Rahmung.'
	},
	{
		name: 'Ariès, Philippe',
		field: 'Geschichtswissenschaft',
		works: [
			{
				title: 'L\'Enfant et la vie familiale sous l\'Ancien Régime',
				type: 'book',
				year: 1960,
				publisher: 'Éditions du Seuil'
			}
		],
		pages: 'Endnote [12]; Kap. 2',
		context: 'Klassische These „Kindheit wurde erfunden".'
	},
	{
		name: 'Lancy, David F.',
		field: 'Anthropologie',
		works: [
			{
				title: 'The Anthropology of Childhood: Cherubs, Chattel, Changelings',
				type: 'book',
				year: 2015,
				publisher: 'Cambridge University Press'
			}
		],
		pages: 'Endnote [18]; Kap. 2',
		context: '„Neontokratie vs. Gerontokratie"-Schema.',
		keyFigure: true
	},
	{
		name: 'Seel, Norbert M.; Hanke, Ulrike',
		field: 'Erziehungswissenschaft',
		works: [{ title: 'Erziehungswissenschaft', type: 'book', year: 2015 }],
		pages: 'Endnote [19]; Kap. 2',
		context: 'Einführendes Lehrbuch.'
	},
	{
		name: 'McDermott, Rose',
		field: 'Politikwissenschaft / Verhalten',
		works: [{ title: 'The Problem with Parenting', type: 'book', year: 2020 }],
		pages: 'Endnote [3]; Kap. 1',
		context: 'Ratgeber-Meta-Kritik.'
	},
	{
		name: 'Schmidbauer, Wolfgang',
		field: 'Psychoanalyse',
		works: [{ title: 'Interview mit Tillmann Prüfer', type: 'other', year: 2025 }],
		pages: 'Kap. 18 (Interview)',
		context: 'Psychoanalytiker; Interview für Prüfers Schluss-Kapitel.'
	},

	// ---- Weitere ----
	{
		name: 'Bilgin, Ayten; Wolke, Dieter',
		field: 'Entwicklungspsychologie',
		works: [
			{
				title: 'Parental Use of Cry it Out in Infancy: No Adverse Effects on Infant Attachment',
				type: 'study',
				year: 2020,
				publisher: 'Journal of Child Psychology and Psychiatry'
			}
		],
		pages: 'Endnote [11]; Kap. 6',
		context: 'Warwick-Studie — Ferber-Methode ohne Bindungsschäden.'
	},
	{
		name: 'Jansen, Jarno; de Weerth, Carolina; Riksen-Walraven, J. Marianne',
		field: 'Entwicklungspsychologie',
		works: [
			{ title: 'Breastfeeding and the Mother-Infant Relationship — A Review', type: 'study', year: 2008 }
		],
		pages: 'Endnote [89]; Kap. 6',
		context: 'Radboud-Review zu Stillen und Bindung.'
	},
	{
		name: 'Linde, Katharina',
		field: 'Hebammenwissenschaft',
		works: [
			{ title: 'Breastfeeding and Mother-Child Bonding: A Systematic Review', type: 'study', year: 2020, publisher: 'Midwifery' }
		],
		pages: 'Endnote [90]; Kap. 6',
		context: 'Zweiter unabhängiger Review zu Stillen und Bindung.'
	},
	{
		name: 'Marsh, Samantha; Dobson, Rosie; Maddison, Ralph',
		field: 'Gesundheitsforschung',
		works: [
			{ title: 'Household Chaos and Child Development — A Scoping Review', type: 'study', year: 2020 }
		],
		pages: 'Endnote [47]; Kap. 3',
		context: 'Neuseeland scoping review.'
	},
	{
		name: 'Selman, Sarah; Dilworth-Bart, Janean',
		field: 'Familienforschung',
		works: [
			{ title: 'Family Routines and Child Outcomes: A Systematic Review of 170 Studies', type: 'study', year: 2024, publisher: 'Journal of Family Theory & Review' }
		],
		pages: 'Endnote [48]; Kap. 3',
		context: '170-Studien-Review zu Familien-Routinen.'
	},
	{
		name: 'Levitt, Eugene E.',
		field: 'Entwicklungsforschung',
		works: [{ title: 'Massachusetts Study on Family Routines', type: 'study', year: 2020 }],
		pages: 'Endnote [49]; Kap. 3',
		context: 'Massachusetts-Studie N=215 zu Familien-Routinen.'
	},
	{
		name: 'Spagnola, Mary; Fiese, Barbara H.',
		field: 'Familienforschung',
		works: [{ title: 'Family Routines and Rituals: A Context for Development in the Lives of Young Children', type: 'study', year: 2007 }],
		pages: 'Endnote [330]; Kap. 3',
		context: 'Einflussreiche frühe Arbeit zu Routinen und Ritualen.'
	}
];

// ---------------------------------------------------------------------------
// INSTITUTIONS
// ---------------------------------------------------------------------------

export const institutions: Institution[] = [
	{
		name: 'University of Minnesota',
		type: 'University',
		context:
			'Minnesota Longitudinal Study of Risk and Adaptation (Sroufe, Egeland, Carlson); Minnesota Adoption Study (Scarr & Weinberg); Perry et al. Overcontrolling Parenting.',
		pages: 'Kap. 1, Kap. 6, Kap. 16, Kap. 17'
	},
	{
		name: 'Max-Planck-Institut für Bildungsforschung Berlin',
		type: 'Forschungsinstitut',
		context: 'Rohrer/Egloff/Schmukle Geburtenrang-Studie; deutsche Persönlichkeitsforschung.',
		pages: 'Kap. 5'
	},
	{
		name: 'University of Warwick',
		type: 'University',
		context: 'Bilgin & Wolke — Ferber/Cry-it-out-Studie zu Bindung.',
		pages: 'Kap. 6'
	},
	{
		name: 'Radboud University Nijmegen',
		type: 'University',
		context: 'Jansen, de Weerth & Riksen-Walraven — Stillen und Bindung Review.',
		pages: 'Kap. 6'
	},
	{
		name: 'Université catholique de Louvain',
		type: 'University',
		context: 'Roskam et al. — 42-Länder-Parental-Burnout-Studie.',
		pages: 'Kap. 1'
	},
	{
		name: 'Brigham Young University',
		type: 'University',
		context: 'Holt-Lunstad et al. — Social Relationships and Mortality Meta-Analyse.',
		pages: 'Kap. 8'
	},
	{
		name: 'Brown University',
		type: 'University',
		context: 'Li et al. — 67-Studien-Frühförderungs-Review.',
		pages: 'Kap. 9'
	},
	{
		name: 'Harvard University',
		type: 'University',
		context: 'Harvard Grant Study (Vaillant); Waldinger-Forschung zu Beziehungsqualität und Lebenszufriedenheit.',
		pages: 'Kap. 4'
	},
	{
		name: 'University of Virginia',
		type: 'University',
		context: 'Olson et al. — 5-Jahres-Transgender-Jugendlichen-Studie.',
		pages: 'Kap. 11'
	},
	{
		name: 'University College London (UCL)',
		type: 'University',
		context: 'EPPE/EPPSE-Studien (Sylva, Taggart, Sammons).',
		pages: 'Kap. 9'
	},
	{
		name: 'Orygen — National Centre of Excellence in Youth Mental Health (Melbourne)',
		type: 'Forschungsinstitut',
		context: 'Schwartz et al. — Adolescent Development Study.',
		pages: 'Kap. 16'
	},
	{
		name: 'King\'s College London',
		type: 'University',
		context:
			'Robert Plomin (Behavior Genetics); Rutter (ERA-Studie); Polderman 50-Jahre-Zwillingsmeta.',
		pages: 'Kap. 4, Kap. 9'
	},
	{
		name: 'Université de Genève',
		type: 'University',
		context: 'Perrig-Chiello & Höpflinger — Empty-Nest-Längsschnitt Schweiz.',
		pages: 'Kap. 16'
	},
	{
		name: 'Universität Wien',
		type: 'University',
		context: 'Augner et al. — Smartphone-Nutzung Meta-Analyse.',
		pages: 'Kap. 15'
	},
	{
		name: 'Stanford University',
		type: 'University',
		context: 'Sun et al. — 5-Jahres-Längsschnitt zu Smartphones.',
		pages: 'Kap. 15'
	},
	{
		name: 'Universität Osnabrück',
		type: 'University',
		context: 'Heidi Keller — kulturvergleichende Bindungsforschung.',
		pages: 'Kap. 6'
	},
	{
		name: 'University of Toronto',
		type: 'University',
		context: 'Marga Vicedo — Wissenschaftsgeschichte der Bindung.',
		pages: 'Kap. 6'
	},
	{
		name: 'Universität Heidelberg',
		type: 'University',
		context: 'Dieter Braus — Adoleszenzforschung, Interview.',
		pages: 'Kap. 16, 17'
	},
	{
		name: 'Universität Hohenheim',
		type: 'University',
		context: 'Tobias Dienlin — Kommunikationswissenschaft, Screen-Media.',
		pages: 'Kap. 15'
	},
	{
		name: 'University of Cambridge',
		type: 'University',
		context: 'Melissa Hines — Gender-Entwicklung; Davis & Hines Meta-Analyse.',
		pages: 'Kap. 11'
	},
	{
		name: 'Kinsey Institute / Indiana University',
		type: 'Forschungsinstitut',
		context: 'Sex-Research-Kontext (Sax-Fausto-Sterling-Debatte).',
		pages: 'Kap. 11'
	},
	{
		name: 'OECD',
		type: 'Internationale Organisation',
		context: 'Education at a Glance 2024 — schulischer Leistungsabstand Jungen/Mädchen.',
		pages: 'Kap. 11'
	},
	{
		name: 'WHO',
		type: 'Internationale Organisation',
		context: 'Empfehlungen zu Zucker/Süßgetränken und Kinderernährung.',
		pages: 'Kap. 14'
	},
	{
		name: 'Robert Koch-Institut',
		type: 'Gesundheitsbehörde',
		context: 'KiGGS Welle 2 (Kinder- und Jugendgesundheitsstudie).',
		pages: 'Kap. 11, Kap. 12'
	},
	{
		name: 'Statistisches Bundesamt (Destatis)',
		type: 'Regierungsbehörde',
		context: 'Auszugsalter, Zeitverwendungsstudie, Familienstatistiken.',
		pages: 'Kap. 1, Kap. 11, Kap. 16'
	},
	{
		name: 'Bundesministerium für Familie, Senioren, Frauen und Jugend (BMFSFJ)',
		type: 'Regierungsbehörde',
		context: 'Väterreport 2023 [318].',
		pages: 'Kap. 16'
	},
	{
		name: 'Forsa / KKH',
		type: 'Sozialforschung / Krankenkasse',
		context: 'Eltern-Burnout-Umfragen 2024.',
		pages: 'Kap. 1'
	},
	{
		name: 'Bitkom',
		type: 'Branchenverband',
		context: 'Smartphone-Nutzungsdaten Deutschland 2024/2025.',
		pages: 'Kap. 15'
	},
	{
		name: 'Plan International',
		type: 'NGO',
		context: 'Männlichkeitsumfrage 2023.',
		pages: 'Kap. 11, 12'
	},
	{
		name: 'Gallup',
		type: 'Demoskopie',
		context: 'LGBTQ+-Identifikationsdaten USA.',
		pages: 'Kap. 11'
	},
	{
		name: 'CDC (Centers for Disease Control and Prevention)',
		type: 'Gesundheitsbehörde',
		context: 'Youth Risk Behavior Survey — Gender Identity Daten.',
		pages: 'Kap. 11'
	},
	{
		name: 'dtv Verlag',
		type: 'Verlag',
		context: 'Verlag des Buches.',
		pages: 'Impressum'
	},
	{
		name: 'DIE ZEIT',
		type: 'Zeitung / Medium',
		context: 'Prüfers „Familie"-Ressort; Datenbasis ZEIT-Rechner zu Väter-Zeit.',
		pages: 'Autor-Kontext; Kap. 16'
	}
];

// ---------------------------------------------------------------------------
// STUDIES (most-cited specific studies)
// ---------------------------------------------------------------------------

export const studyRefs: StudyRef[] = [
	{
		name: 'Perry et al. — Overcontrolling Parenting Längsschnitt',
		authors: 'Perry, Dollar, Calkins, Keane, Shanahan',
		year: '2018',
		finding:
			'Minnesota-Längsschnitt: früh kontrollierendes Elternverhalten prädiziert schwächere Selbstregulation und höhere Ängstlichkeit/Depressivität im Jugendalter.',
		pages: 'Endnote [8]; Kap. 1'
	},
	{
		name: 'Watts et al. — Marshmallow-Replikation',
		authors: 'Watts, Duncan, Quan',
		year: '2018',
		finding:
			'Replikation des Marshmallow-Tests (Mischel) mit N~900 zeigt: ursprüngliche Effekte deutlich kleiner, verschwinden nach Kontrolle für SES und elterliche Ressourcen. (Von Prüfer im IQ-/Persönlichkeitskontext referiert.)',
		pages: 'Kap. 9'
	},
	{
		name: 'Polderman et al. — 50 Jahre Zwillingsforschung',
		authors: 'Polderman, Benyamin, de Leeuw, Sullivan, van Bochoven, Visscher, Posthuma',
		year: '2015',
		finding:
			'Nature Genetics Meta-Analyse: ~49 % Heritabilität über alle Merkmale; 17.804 Merkmale, 14,5 Mio. Zwillingspaare. Shared environment-Effekt schrumpft mit Alter.',
		pages: 'Endnote [161]; Kap. 9'
	},
	{
		name: 'Roskam et al. — 42-Länder-Parental-Burnout',
		authors: 'Roskam, Aguiar, Akgun et al.',
		year: '2021',
		finding:
			'Parental Burnout ist kulturabhängig; individualistische Kulturen zeigen deutlich höhere Prävalenz als kollektivistische.',
		pages: 'Endnote [10]; Kap. 1'
	},
	{
		name: 'Rohrer, Egloff & Schmukle — Geburtenrang',
		authors: 'Rohrer, Egloff, Schmukle',
		year: '2015',
		finding:
			'PNAS, N=377.000: keine substanziellen Geburtenrang-Effekte auf Big Five. Kleiner IQ-Effekt (1–2 IQ-Punkte). Begräbt populäre Mythen.',
		pages: 'Endnote [75]; Kap. 5'
	},
	{
		name: 'Holt-Lunstad et al. — Social Relationships and Mortality',
		authors: 'Holt-Lunstad, Smith, Layton',
		year: '2010',
		finding:
			'148 Studien, ~300k Teilnehmer: starke soziale Beziehungen senken Mortalität um ~50 %. Effektstärke vergleichbar mit Rauchverzicht.',
		pages: 'Endnote [134]; Kap. 8'
	},
	{
		name: 'Rutter et al. — ERA-Studie',
		authors: 'Rutter, Sonuga-Barke, Kennedy et al.',
		year: '2010',
		finding:
			'English and Romanian Adoptees Study: Adoption vor Monat 6 → weitgehende Erholung; nach >6 Monate institutioneller Deprivation bleiben messbare Defizite.',
		pages: 'Endnote [52]; Kap. 4'
	},
	{
		name: 'Pinquart — Erziehungsstile Meta',
		authors: 'Pinquart',
		year: '2017',
		finding: 'Meta-Analyse von 1400+ Studien: Wärme ist robuster Prädiktor, psychologische Kontrolle schadet.',
		pages: 'Endnote [42]; Kap. 3'
	},
	{
		name: 'Kerr, Stattin & Özdemir — Bidirektionalität',
		authors: 'Kerr, Stattin, Özdemir',
		year: '2012',
		finding:
			'Schwedische Längsschnittstudie mit ~1000 Jugendlichen: Kindverhalten prädiziert Elternstil besser als umgekehrt (cross-lagged panel).',
		pages: 'Endnote [37]; Kap. 3'
	},
	{
		name: 'Fearon et al. — Disorganisierte Bindung Meta',
		authors: 'Fearon, Bakermans-Kranenburg, van IJzendoorn, Lapsley, Roisman',
		year: '2010',
		finding: 'Meta-Analyse: disorganisierte Bindung prädiziert externalisierendes Verhalten.',
		pages: 'Endnote [88]; Kap. 6'
	},
	{
		name: 'Eliot et al. — Dump the Dimorphism',
		authors: 'Eliot, Ahmed, Khan, Patel',
		year: '2021',
		finding:
			'Neuroscience & Biobehavioral Reviews: Meta-Synthese menschlicher Hirnstudien. Geschlechtsdimorphismen verschwinden weitgehend nach Kontrolle für Kopfgröße.',
		pages: 'Endnote [204]; Kap. 11'
	},
	{
		name: 'Davis & Hines — Spielzeug-Präferenzen Meta',
		authors: 'Davis, Hines',
		year: '2021',
		finding:
			'Archives of Sexual Behavior: Systematischer Review und Meta-Analyse von >75 Studien über 50 Jahre: stabiles Muster geschlechts-typischer Spielzeugwahl.',
		pages: 'Endnote [199]; Kap. 11'
	},
	{
		name: 'Olson et al. — Trans-Jugendliche 5-Jahres-Studie',
		authors: 'Olson, Durwood, Horton, Gallagher, Devor',
		year: '2022',
		finding:
			'Pediatrics: 5-Jahres-Kohorte sozial transitionierter Kinder; ~94 % stabile Identität, ~2,5 % komplette Retransition.',
		pages: 'Endnote [212]; Kap. 11'
	},
	{
		name: 'Heilmann et al. — Lancet-Review Körperstrafen',
		authors: 'Heilmann, Mehay, Watt, Kelly, Durrant',
		year: '2021',
		finding:
			'The Lancet: narrative review prospektiver Studien; konsistente Assoziation zwischen Körperstrafen und negativen Kind-Outcomes.',
		pages: 'Endnote [260]; Kap. 13'
	},
	{
		name: 'Cameron & Pierce — Reward Meta',
		authors: 'Cameron, Pierce',
		year: '1994',
		finding:
			'Review of Educational Research: Meta-Analyse widerlegt die Universalfassung der Overjustification-Hypothese (Kohn). Belohnungen sind nicht durchgehend schädlich.',
		pages: 'Endnote [264]; Kap. 13'
	},
	{
		name: 'Orben & Przybylski — Digital Technology Use',
		authors: 'Orben, Przybylski',
		year: '2019',
		finding:
			'Nature Human Behaviour: drei große Datensätze, Smartphone-Effekte auf Wohlbefinden Jugendlicher sehr klein (Effektgrößen < 0,05).',
		pages: 'Endnote [297]; Kap. 15'
	},
	{
		name: 'Mallawaarachchi et al. — Screens in Under-6s Meta',
		authors: 'Mallawaarachchi, Anderson, Holloway',
		year: '2024',
		finding:
			'JAMA Pediatrics: 100-Studien-Meta zu Kleinkindern; Bildschirmzeit negativ mit Sprache, Exekutivfunktionen und sozialer Entwicklung assoziiert.',
		pages: 'Endnote [310]; Kap. 15'
	},
	{
		name: 'Campbell et al. — Abecedarian Follow-up',
		authors: 'Campbell, Conti, Heckman, Moon, Pinto, Pungello, Pan',
		year: '2014',
		finding:
			'Science: 30-Jahre-Langzeitstudie früher Intervention: substanzielle langfristige Effekte auf Bildung, Einkommen und Gesundheit.',
		pages: 'Endnote [177]; Kap. 9'
	},
	{
		name: 'Sylva et al. — EPPE',
		authors: 'Sylva, Melhuish, Sammons, Siraj-Blatchford, Taggart',
		year: '2004',
		finding:
			'Britischer Goldstandard zur Frühförderung: qualitativ hochwertige Frühbetreuung hat messbare, nachhaltige positive Effekte, v. a. bei benachteiligten Kindern.',
		pages: 'Endnote [175]; Kap. 9'
	},
	{
		name: 'Vasquez et al. — Autonomie-Unterstützung Meta',
		authors: 'Vasquez, Patall, Fong, Corrigan, Pine',
		year: '2015',
		finding:
			'Educational Psychology Review: 36-Studien-Meta; Autonomie-Unterstützung korreliert mit schulischer Leistung, Wohlbefinden und Selbstregulation.',
		pages: 'Endnote [341]; Kap. 17'
	}
];

// ---------------------------------------------------------------------------
// Backwards-compatibility alias: code elsewhere in the repo uses `studies`.
// ---------------------------------------------------------------------------
export const studies: StudyRef[] = studyRefs;

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
	title: 'Was Sie (Wirklich) Über Erziehung Wissen Müssen',
	subtitle: 'Ein evidenzbasierter Rundgang durch die heutige Elternratgeber-Landschaft',
	author: 'Tillmann Prüfer',
	publisher: 'dtv (München)',
	year: 2026,
	description:
		'Tillmann Prüfer, Journalist und Leiter des „Familie"-Ressorts der ZEIT, legt ein Anti-Ratgeber-Programm vor. Kernthese: Eltern werden heute mit einer Flut widersprüchlicher Tipps überfordert, ' +
		'obwohl die empirische Evidenzlage offener ist, als die Ratgeberliteratur suggeriert. Vier Leit-Aussagen: ' +
		'(1) Elterlicher Einfluss ist real, aber schwächer als kulturell angenommen — Gene, Peers und Lebensweg dominieren ab dem Schulalter. ' +
		'(2) Wärme und Verlässlichkeit sind robust belegt, Kontrolle hingegen nur situativ nützlich. ' +
		'(3) Die populären Großtheorien (Bindungstheorie Bowlby/Ainsworth, Erziehungsstile Baumrind, Attachment Parenting Sears, Anxious Generation Haidt) sind schwächer fundiert, als ihre öffentliche Rezeption nahelegt. ' +
		'(4) Die angemessene Haltung lautet „good enough parenting" (Winnicott/Bettelheim), nicht Perfektionsoptimierung. ' +
		'Methodisch kombiniert Prüfer persönliche Anekdoten (vier Töchter Luna, Lotta, Greta, Juli), Experteninterviews ' +
		'(Heidi Keller, Marga Vicedo, Karin Grossmann, Robert Sternberg, Pasqualina Perrig-Chiello, Dieter Braus, Tobias Dienlin, Eva Bleckmann, Debbie Hayton u. a.) und eine dichte Sekundärauswertung mit 341 nummerierten Endnoten.'
};
