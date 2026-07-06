// nbm-evidence-audit-data.ts
// Cross-referencing claims in Galloway's "Notes on Being a Man" with evidentiary character

export interface EvidenceItem {
	claim: string;
	source: string;
	pages: string;
	centrality: 'critical' | 'supporting' | 'minor';
	status: 'red' | 'yellow' | 'green' | 'untestable';
	statusLabel: string;
	detail: string;
}

export const evidenceStatusInfo = {
	red: { label: 'Problematic', color: '#ef4444', icon: '🔴', description: 'Study not replicated, refuted, retracted, or subject to strong methodological criticism' },
	yellow: { label: 'Shaky / Contested', color: '#f59e0b', icon: '🟡', description: 'Single study, weak/journalistic sourcing, or presented more strongly than the evidence warrants' },
	green: { label: 'Solidly supported', color: '#10b981', icon: '🟢', description: 'Replicated, meta-analyses, official statistics, or well-established findings' },
	untestable: { label: 'Theory / Not testable', color: '#8b5cf6', icon: '🟣', description: 'Normative framework or memoir claim, not an empirically falsifiable finding' }
};

export const evidenceItems: EvidenceItem[] = [
	// ============ GREEN ============
	{
		claim: 'Deaths of Despair: 2005-2019 starben jährlich ~70.000 Amerikaner an Suizid, Überdosis und Alkohol, überproportional arbeitslose weiße Männer ohne College-Abschluss; die Suizid-/Alkohol-Mortalität (ohne Opioide) ist die höchste seit einem Jahrhundert.',
		source: 'Carol Graham, Brookings Institution (2021); Joint Economic Committee (2019); dahinter Case & Deaton',
		pages: 'Einleitung (Scan S. 2)',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Epidemiologisch breit dokumentiert',
		detail:
			'Dieselbe Datenbasis wie Reeves Kap. 5. Case & Deatons Befund ist einer der robustesten Public-Health-Trends der letzten Dekade; die männliche Dominanz (74%) ist unstrittig. Galloway zitiert die Brookings-Sekundäraufbereitung statt der Primärstudien — inhaltlich folgenlos.'
	},
	{
		claim: 'Männer haben eine 3,8× höhere Suizidrate als Frauen; Veteranen 2,0×, Rural 1,6× — Geschlecht ist die größte Disparität aller verglichenen Gruppen (Chart „Select Comparisons of Suicide Rates", 2023).',
		source: 'CDC-Daten, analysiert vom American Institute for Boys and Men (Reeves\' AIBM)',
		pages: 'Kap. 5 (Scan S. 73, Chart)',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Offizielle Mortalitätsstatistik',
		detail:
			'CDC-WONDER-Daten sind der Goldstandard. Die 3-4×-Männer-Ratio ist international stabil und wird in der ganzen Bibliothek (Urwin, Süfke, Reeves) übereinstimmend berichtet.'
	},
	{
		claim: 'ADHD-Diagnosen: 15% der Jungen vs. 8% der Mädchen (3-17 Jahre, 2022) — plus die Einschränkung, dass Diagnose-Bias mitspielt (ADHD bei Mädchen wird übersehen, ASD bei nicht-weißen Kindern später erkannt).',
		source: 'CDC 2022; Kang-Yi et al. (2021) zu ethnischen ASD-Disparitäten',
		pages: 'Kap. 1 (Scan S. 16-17, Chart)',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Offizielle Daten, fair kontextualisiert',
		detail:
			'Eine der wenigen Stellen, wo Galloway die Gegenevidenz (Diagnose-Bias) selbst mitliefert. Vorbildlich — und ein Kontrast zu Sax, der dieselben Zahlen als reine Biologie liest.'
	},
	{
		claim: 'PFC-Reifung: Mädchen erreichen „peak values of brain volumes" früher; der weibliche PFC reift bis zu zwei Jahre vor dem männlichen; der männliche holt um ~25 auf.',
		source: 'Lenroot & Giedd (2010) Brain and Cognition; NIH Research Matters (2021)',
		pages: 'Kap. 1 (Scan S. 16)',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Replizierter Kernbefund — mit Folk-Neuroscience-Rändern',
		detail:
			'Der Timing-Befund ist solide (NIH-Längsschnittdaten) und das Rückgrat von Reeves\' Redshirt-Vorschlag. Grün mit Fußnote: „fertig mit 25" ist eine populäre Vergröberung — Reifung ist kontinuierlich, individuelle Varianz übersteigt die Gruppendifferenz deutlich.'
	},
	{
		claim: 'Friendship Recession: Amerikaner ohne enge Freunde 3% (1990) → 12% (2021); Männer teilen seltener Gefühle mit Freunden; 15% der Männer haben keinen einzigen engen Freund (5× mehr als 1990); zwei Drittel der US-Männer: „No one really knows me well."',
		source: 'Daniel A. Cox, Survey Center on American Life (2021); Equimundo State of American Men (2023); NYT/Pearson',
		pages: 'Kap. 6 (Scan S. 77-78, Charts)',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Aktuelle, mehrfach konvergierende Survey-Daten',
		detail:
			'Cox\' Survey ist die Standardquelle der Friendship-Recession-Debatte, Equimundo repliziert unabhängig. Konvergiert mit Niobe Ways Adoleszenz-Befund — Galloway liefert unwissentlich die Erwachsenen-Fortsetzung von Deep Secrets.'
	},
	{
		claim: 'Loneliness/Isolation: Mortalitätsrisiko +20% bei sozialer Isolation, +32% bei Alleinlebenden; Wirkung vergleichbar mit 15 Zigaretten täglich; stärkster Prädiktor der Gesundheit mit 80 ist die Beziehungsqualität mit 50.',
		source: 'Holt-Lunstad et al. (2015) Perspectives on Psychological Science; U.S. Surgeon General Advisory (2023); Harvard Study of Adult Development',
		pages: 'Kap. 6 + Kap. 7 (Scan S. 79-80, 90)',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Meta-analytisch abgesichert',
		detail:
			'Holt-Lunstads Meta-Analysen (308.000+ Teilnehmer) sind der Referenzstandard. Die Zigaretten-Äquivalenz ist eine legitime, wenn auch werbliche Übersetzung der Effektstärke. Die Harvard-Studie ist die längste Längsschnittstudie überhaupt.'
	},
	{
		claim: 'Chetty: Für Menschen aus niedrigen Einkommensschichten sind reichere Freunde „the single strongest predictor of upward mobility"; nur ~50% der 1980er-Geburtsjahrgänge verdienen mehr als ihre Eltern (vs. ~90% des Jahrgangs 1940).',
		source: 'Chetty et al. (2022) Social Capital II / Opportunity Insights; Chetty et al. (2017) „The Fading American Dream", Science',
		pages: 'Kap. 6 (Scan S. 78) + Kap. 4 (Scan S. 56, Chart)',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Big-Data-Studien höchster methodischer Qualität',
		detail:
			'Beide Chetty-Studien (21 Mrd. Facebook-Verbindungen; IRS-Steuerdaten) gehören zum methodisch Besten, was die Sozialwissenschaft hat. Galloway zitiert sie korrekt.'
	},
	{
		claim: 'Heirats-Klassen-Gap: Heiratsquote der untersten Einkommens-Quartile -35% (1970-2011) vs. -15% der obersten; Coupling-Rückgang doppelt so schnell bei Nicht-Akademikern; College-Abschluss erhöht Heiratswahrscheinlichkeit um 30%.',
		source: 'Greenstone & Looney, Hamilton Project (2012); Pew Research (2017); Cox (2021)',
		pages: 'Kap. 7 (Scan S. 95-96)',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Solide dokumentierter Strukturtrend',
		detail:
			'Der Klassen-Gradient der Ehe ist einer der robustesten familiensoziologischen Befunde der USA und deckt sich mit Reeves\' Dad-Deficit-Kapitel. Die Kausalrichtung (Ökonomie → Ehe) wird von Ruggles/Autor gestützt.'
	},
	{
		claim: 'Neue Väter: Testosteron sinkt ab der Schwangerschaft der Partnerin um etwa ein Drittel; kleinere Hoden korrelieren mit mehr väterlichem Investment.',
		source: 'Saxbe et al. (2023) Hormones and Behavior; Mascaro et al. via Scientific American (2013)',
		pages: 'Kap. 8 (Scan S. 105)',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Replizierter endokrinologischer Befund',
		detail:
			'Der Vater-T-Abfall ist mehrfach längsschnittlich repliziert (Gettler et al. Cebu-Studie als Klassiker) und ein schönes Beispiel für Biologie als ANPASSUNG an soziale Rollen — ironischerweise ein Argument gegen Galloways eigenes „more nature than nurture".'
	},
	{
		claim: 'Exercise als Antidepressivum: 2024er Netzwerk-Meta-Analyse zeigt Exercise als beste nicht-pharmakologische Depressions-Behandlung; CEO-Trait Nr. 1 ist 4-5× Training pro Woche.',
		source: 'Noetel et al. (2024) British Medical Journal; Mayo Clinic; (CEO-Claim: Business Insider)',
		pages: 'Kap. 5 (Scan S. 60-63)',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'BMJ-Meta-Analyse — der Fitness-Pfeiler hält',
		detail:
			'Noetel et al. (218 RCTs) ist hochwertige Evidenz; die Effektstärken von Walking/Jogging/Krafttraining sind klinisch relevant. Nur der CEO-Faktoid ist Anekdotik. Der Fitness-Teil ist insgesamt der am besten belegte Ratgeber-Anteil des Buches.'
	},
	{
		claim: 'Alkohol: führende vermeidbare Todesursache, Risikofaktor Nr. 1 für vorzeitigen Tod bei 25-49-Jährigen, Gruppe-1-Karzinogen (WHO: kein sicheres Konsumniveau), 178.000 Tote/Jahr chronisch.',
		source: 'CDC (2024); NIAAA; WHO (2023)',
		pages: 'Kap. 6 (Scan S. 86)',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Offizielle Public-Health-Daten',
		detail:
			'Korrekt referiert — bemerkenswert, weil Galloway anschließend GEGEN die Datenlage ein Plädoyer für moderates Trinken als Bindungsritual hält und diese Spannung offen ausstellt („trust your instincts").'
	},
	{
		claim: 'Kinder geschiedener Eltern: im Schnitt unglücklicher, ängstlicher, depressiver, seltener Abschlüsse, häufiger selbst geschieden — ABER: dasselbe gilt für Kinder aus konfliktreichen intakten Ehen. „Chaos is the culprit, not legal status."',
		source: 'D\'Onofrio & Emery (2019) World Psychiatry; Leopold (2018) Demography',
		pages: 'Kap. 7 (Scan S. 101-102)',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Konsens der Scheidungsforschung, fair dargestellt',
		detail:
			'Die Parallelität von Scheidungs- und Hochkonflikt-Folgen ist der differenzierteste Forschungsstand (Amato-Tradition), und Galloway referiert ihn korrekt inklusive der Anti-Resilienz-Pointe. Stärker als die meisten Ratgeber.'
	},

	// ============ YELLOW ============
	{
		claim: '„45 percent of men ages eighteen to twenty-five have never approached a woman in person."',
		source: 'Dean Brooks, Medium-Post (2024) — keine nachvollziehbare Primärerhebung',
		pages: 'Einleitung (Scan S. 2)',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Viral-Statistik ohne belastbare Quelle',
		detail:
			'Die Zahl kursiert seit 2023 in der Manosphere-Debatte; ihre Herkunft führt zu Online-Umfragen ohne dokumentierte Methodik. Es GIBT seriöse Belege für den Trend (GSS-Sexlessness-Daten, Pew zu Dating), aber diese spezifische Zahl ist als „terrifying stat" rhetorisch platziert und wissenschaftlich nicht zitierfähig.'
	},
	{
		claim: 'Trump gewann 2024 16 Punkte bei jungen Männern — der größte Shift aller Altersgruppen; zweiter großer Shift bei Frauen 46-64 („die Mütter der struggling young men"). Die Wahl war „a referendum on failing young men".',
		source: 'Navigator Research 2024 Post-Election Survey; Mütter-Interpretation: Galloways eigene',
		pages: 'Einleitung (Scan S. 4)',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Realer Trend, erhebungsabhängige Zahl, spekulative Kausalstory',
		detail:
			'Dass junge Männer 2024 stark nach rechts rückten, zeigen alle großen Erhebungen (AP VoteCast: Gap ~15 Punkte bei U30-Männern) — die exakte Größe variiert um mehrere Punkte je nach Survey. Die Mütter-These und die Referendums-Deutung sind unbelegte, wenn auch suggestive Interpretation.'
	},
	{
		claim: 'T-Biologismus: „My experience […] is that it\'s more nature than nurture"; T „masculinizes" das Gehirn und erklärt geschlechtstypisches Spielverhalten.',
		source: 'Hooven (2021) als Quelle — deren Position aber vorsichtiger ist; eigene Playdate-Beobachtungen',
		pages: 'Kap. 1 (Scan S. 8)',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Stärker formuliert als die eigene Hauptquelle',
		detail:
			'Hooven vertritt T als notwendige, nicht hinreichende Bedingung mit massiver kultureller Modulation — Reeves\' Mittelposition. Galloways Zuspitzung ignoriert Eliot (Plastizität), Joel (Mosaik-Gehirne) und die Meta-Analytik kleiner kognitiver Differenzen (Hyde). Innerhalb der Bibliothek steht er damit bei Sax/Gurian, deren Überklagen Pink Brain, Blue Brain seziert hat.'
	},
	{
		claim: 'Haidt-These: Phones + Social Media als Hauptursache der Teen-Mental-Health-Krise; 24% der Adoleszenten „addicted" an Social Media; Suizidrate junger Menschen +56% in einer Dekade.',
		source: 'Haidt (NYT 2024 / The Anxious Generation); Twenge (2022); Caner et al., Current Psychology (Addiction-Zahl); HHS Surgeon General (2023)',
		pages: 'Kap. 5 (Scan S. 72, Chart)',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Deskriptiv grün, kausal umstritten',
		detail:
			'Die Trend-Daten sind real. Die Kausal-These ist die prominenteste, aber angefochtenste Position der Debatte: Odgers (Nature-Review), Przybylski und Ferguson finden kleine, teils bidirektionale Effekte. Die „24% addicted"-Zahl entstammt einer einzelnen Studie mit weichem Selbstauskunfts-Konstrukt. Galloway präsentiert nur die Anklageseite.'
	},
	{
		claim: 'Dating-App-Ungleichheit: Top-10% der Hinge-Männer erhalten ~60% der Likes; die Bottom-80% der Tinder-Männer konkurrieren um die Bottom-22% der Frauen („Tinder-Gini höher als jedes Land").',
		source: 'Kopf/Quartz (2017, Hinge-internen Daten); „Worst-Online-Dater", pseudonymer Medium-Post (2015)',
		pages: 'Kap. 7 (Scan S. 95)',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Plausible Richtung, Blog-Datenqualität',
		detail:
			'Beide Quellen sind einmalige, nicht peer-reviewte Datenauswertungen (eine davon anonym, Selbstexperiment mit Fake-Profilen). Die grundsätzliche Rechtsschiefe der Attention-Verteilung auf Apps ist durch seriösere Arbeiten (Bruch & Newman 2018, Science Advances) gestützt — die hätten zitiert gehört.'
	},
	{
		claim: 'Porn: bis zu 1/3 des Internet-Traffics; 11% der Männer bejahen „I am addicted to pornography"; Porn-Konsum erklärt 9-20% der Varianz sexueller Objektifizierung; Porn tötet Risikobereitschaft und „mojo".',
		source: 'ExtremeTech (2012!) zur Traffic-Zahl; Grubbs, Kraus & Perry (2019); Bridges et al. (2024); Peter & Valkenburg (2009)',
		pages: 'Kap. 7 (Scan S. 98-100)',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Ehrlich als Forschungslücke markiert — dann doch stark behauptet',
		detail:
			'Galloway benennt selbst, dass Porn „understudied" ist und nicht im DSM steht — zitiert dann aber eine 13 Jahre alte Tech-Blog-Schätzung und Korrelationsstudien für eine starke Kausalthese („masculinity killer"). Pikant: Grubbs\' eigenes Forschungsprogramm zeigt, dass selbstberichtete Porn-Addiction primär moralische Inkongruenz misst. Die Richtung mag stimmen; die Evidenz trägt die Rhetorik nicht.'
	},
	{
		claim: 'Ehe-Ökonomie: Haushaltsvermögen wächst nach Heirat ~14%/Jahr; Verheiratete haben mit 50+ das 3-fache Vermögen von Singles; Verheiratete leben länger und sind glücklicher; Single-Männer sterben „8 bis 17 Jahre" früher.',
		source: 'Matsangou/World Finance; Wilcox/IFS (2021); Grover & Helliwell (2019); „8-17 Jahre": Glamour-Artikel (2011) über eine University-of-Louisville-Studie',
		pages: 'Kap. 7 (Scan S. 94) + Kap. 6 (Scan S. 79)',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Korrelation als Kausalität, eine Zahl grotesk überdreht',
		detail:
			'Der Ehe-Vorteil ist korrelativ real, aber massiv selektionskonfundiert (gesündere, reichere Männer heiraten eher) — Grover & Helliwell adressieren das teilweise, Wilcox (IFS, advokatorisch) weniger. Die „8-17 Jahre"-Spanne via Glamour ist Extremwert-Journalismus; seriöse Schätzungen des männlichen Ehe-Überlebensvorteils liegen im Bereich weniger Jahre.'
	},
	{
		claim: 'Mütter erhalten in 80% der Fälle das Sorgerecht; Väter beantragen selten das volle Sorgerecht.',
		source: 'Blog einer Scheidungs-Anwaltskanzlei („Dads Divorce Law")',
		pages: 'Kap. 8 (Scan S. 117)',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Ballpark plausibel, Quelle interessengebunden',
		detail:
			'US-Census-Daten zeigen tatsächlich ~80% mütterliche Custodial Parents — aber die Zahl vermischt Gerichtsentscheide mit einvernehmlichen Arrangements, was für Galloways Punkt (strukturelle Väter-Distanz) zentral wäre. Eine Anwalts-Marketing-Seite als Fußnote ist unter dem Niveau des eigenen Arguments.'
	},
	{
		claim: 'Gottman: Die „Four Horsemen" (Verachtung, Kritik, Defensivität, Stonewalling) sind führende Frühscheidungs-Prädiktoren; 85% der Stonewaller in heterosexuellen Beziehungen sind Männer.',
		source: 'Gottman Institute (Selbstdarstellung der eigenen Forschung)',
		pages: 'Kap. 7 (Scan S. 103)',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Einflussreich, aber methodisch umstritten',
		detail:
			'Gottmans berühmte „94%-Vorhersage"-Studien sind für Post-hoc-Fitting ohne Out-of-Sample-Validierung kritisiert worden (Heyman, Stanley). Die Vier-Reiter-Taxonomie ist klinisch nützlich und die Stonewalling-Geschlechterverteilung plausibel — als „Studien zeigen" verkauft, ist es Instituts-Eigenwerbung.'
	},
	{
		claim: 'TRT-Selbstversuch: „T makes me feel stronger, younger, and (supposedly) is brain- and heart-protective. Those aren\'t trivial benefits."',
		source: 'Eigenerfahrung; kein Beleg für die Schutz-Claims',
		pages: 'Kap. 1 (Scan S. 9)',
		centrality: 'minor',
		status: 'yellow',
		statusLabel: 'Umstrittene Longevity-Claims, immerhin mit „supposedly" markiert',
		detail:
			'Die kardio-/neuroprotektiven TRT-Behauptungen sind Gegenstand laufender Kontroversen (TRAVERSE-Studie 2023: kardiovaskulär non-inferior, aber kein Schutz-Nachweis; Demenz-Claims unbelegt). Bei einem Buch, das Millionen junge Männer erreicht — und einer laufenden TRT-Boom-Industrie — wäre mehr Sorgfalt geboten gewesen.'
	},
	{
		claim: 'US-Militär: 1 von 3 Bewerbern zu unfit; 77% brauchen einen Waiver (Gewicht, Mental Health, Drogen); Rekrutierungszahlen auf Rekordtief.',
		source: 'Novelly/Military.com (2022) über eine Pentagon-Studie; WAVY',
		pages: 'Kap. 5 (Scan S. 59-60)',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Reale Pentagon-Zahlen, verkürzt wiedergegeben',
		detail:
			'Die zugrundeliegende DoD-Qualified-Military-Available-Studie (2022: 77% der 17-24-Jährigen ohne Waiver nicht dienstfähig) existiert — Galloway macht daraus „77% require a waiver" unter Bewerbern, was die Population verschiebt. Richtung korrekt, Präzision journalistisch.'
	},
	{
		claim: '„Peak Male": Die amerikanische Mittelklasse entstand als „historische Freakery" um sieben Millionen attraktive WWII-Veteranen, denen die dankbare Nation via GI Bill, FHA-Krediten und Highway Act Wohlstand schenkte.',
		source: 'Galloways historische Erzählung; keine Historiker-Referenz',
		pages: 'Einleitung (Scan S. 3)',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Geschichtsbild als Pointe',
		detail:
			'Die Policy-Fakten (GI Bill etc.) stimmen; die Erzählung unterschlägt, dass genau diese Programme Schwarze Veteranen systematisch ausschlossen (Redlining, Jim-Crow-Administration) — was Galloways eigene Race-Passagen an anderer Stelle thematisieren. Als Verkaufsargument für „es kann wieder passieren" charmant, als Geschichtsschreibung selektiv.'
	},

	// ============ RED ============
	{
		claim: 'Die Chart „Age of Onset of Body Dysmorphia, U.S., by Gender, 2022" — als Quelle angegeben: Diaz & Bailey, „Rapid Onset Gender Dysphoria: Parent Reports on 1,655 Possible Cases", Archives of Sexual Behavior 52 (2023).',
		source: 'Diaz & Bailey (2023) — ZURÜCKGEZOGEN (Juni 2023, fehlende Einwilligungsdokumentation); und inhaltlich eine Studie über Gender-Dysphorie, nicht Body Dysmorphia',
		pages: 'Kap. 2 (Scan S. 20, Chart)',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Retracted UND falsches Konstrukt',
		detail:
			'Doppelfehler: (1) Die zitierte Studie behandelt Rapid-Onset-GENDER-Dysphorie (Eltern-Reports aus einer selbstselektierten Website-Stichprobe), nicht Body Dysmorphic Disorder — zwei völlig verschiedene Diagnosen. (2) Sie wurde von Springer im Juni 2023 retracted. Dass die Grafik es so in ein Simon-&-Schuster-Hardcover schaffte, ist der klarste Qualitätsindikator für den Fußnotenapparat des Buches. Die eigentliche Body-Dysmorphia-Passage (10-30% der Männer unzufrieden, 90% der Adoleszenten mit Muskulatur-Unzufriedenheit, Frederick et al.) wäre ohne die Chart korrekt belegbar gewesen.'
	},
	{
		claim: '„Men have more than double the brain space and processing power devoted to sexual drive. The male amygdala […] contains testosterone receptors that make males lose their cool faster and more easily."',
		source: 'Louann Brizendine, „The Female Brain" (2007)',
		pages: 'Kap. 1 (Scan S. 16)',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Pop-Neuroscience aus vielfach kritisierter Quelle',
		detail:
			'Brizendines Zahlenbehauptungen wurden unmittelbar nach Erscheinen in Nature (Young & Balaban 2006) als unbelegt demontiert; das berühmteste Beispiel (Wörter/Tag) musste aus späteren Auflagen entfernt werden. Die „doppelte Hirnfläche für Sexualtrieb"-Zahl hat keine peer-reviewte Grundlage. Die Bibliothek (Eliot Kap. 1, Joel passim) behandelt genau diese Claim-Klasse als Paradebeispiel für Neurosexismus. Dass sowohl Galloway als auch Brizendine T-Rezeptoren in der Amygdala korrekt benennen, rettet die quantitativen Behauptungen nicht.'
	},

	// ============ UNTESTABLE ============
	{
		claim: 'Protect, Provide, Procreate als die drei zeitlosen „givens" des Mann-Seins; „toxic masculinity" existiert nicht — Grausamkeit ist „anti-masculine".',
		source: 'Galloways normatives Framework',
		pages: 'Einleitung (Scan S. 4-5)',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Definition, keine Hypothese',
		detail:
			'Die definitorische Umpolung (schlechtes Verhalten = per Definition unmännlich) ist rhetorisch wirksam und pädagogisch möglicherweise klug (kein Defensiv-Reflex bei jungen Männern), analytisch aber zirkulär: Sie IMMUNISIERT Männlichkeit gegen Kritik, statt die empirische Frage zu beantworten, welche Männlichkeitsnormen welche Schäden erzeugen (Connells und Urwins Kernfrage). Harringtons Begriffskritik (via Reeves) gibt der Ablehnung des Labels allerdings echte Substanz.'
	},
	{
		claim: 'Surplus Value als Lebensethik: mehr geben als nehmen; „ending up in the minus column is what being a good dad means"; jährliche Selbstbesteuerung (mehr verschenken als ausgeben).',
		source: 'Reeves-Konzept, von Galloway zur Individualethik ausgebaut',
		pages: 'durchgehend; Kern in Kap. 8 + Kap. 10',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Normative Synthese — der beste Teil des Buches',
		detail:
			'Nicht falsifizierbar, aber intern konsistent durcherzählt und durch die Memoir-Ebene beglaubigt: Das Buch dokumentiert die Kosten der Gegenposition (transaktionale Jahre, Scheidung, 16 tränenlose Jahre) an der eigenen Biografie. Als ethisches Programm konvergiert es mit hooks\' Liebes-Ethik und Reeves\' Prosozialität — formuliert für ein Publikum, das beide nie lesen würde.'
	},
	{
		claim: 'Die Scott-Methode (Fitness, Nutrition, Money, Work + Rejection-Training + Screen-Audit) und Mentorship als „fastest blue-line path to a better world".',
		source: 'Eigene Coaching-Praxis; anekdotische Dialoge',
		pages: 'Kap. 5 (Scan S. 65-67), Kap. 8 (Scan S. 118-119)',
		centrality: 'critical',
		status: 'untestable',
		statusLabel: 'Unevaluiertes Programm mit plausiblen Bausteinen',
		detail:
			'Kein Outcome-Nachweis, aber die Bausteine haben unabhängige Evidenz (Exercise: Noetel; Verhaltensaktivierung als Depressions-Mechanismus; Mentoring: BBBS-RCTs mit moderaten Effekten; Abrams et al. zur adoleszenten Umorientierung auf Nicht-Eltern-Stimmen). Die Selbstverständlichkeit, mit der ein Prominenter Mentee-Erfolge generalisiert, bleibt Survivorship-anfällig.'
	},
	{
		claim: 'Memoir-Kernthesen: Kindness zahlt sich aus (Ms. Kelson, Calculus-Professor); Guardrails retteten ihn (Frat, Freundin, Ehefrau); „being born a white, heterosexual male in sixties California" als gewonnene Lotterie; „no person or institution can predict greatness or failure in an eighteen-year-old".',
		source: 'Autobiografische Evidenz (n=1)',
		pages: 'Kap. 1-4 passim',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Anekdotische Evidenz, transparent als solche markiert',
		detail:
			'Galloway markiert den Status selbst: „observations, not peer-reviewed academic research". Die Memoir-Ebene ist als Datenquelle nicht generalisierbar, aber sie ist der eigentliche Wert des Buches: eine ungewöhnlich schonungslose Innenansicht männlicher Scham, Statusjagd und später Emotionsöffnung, die die klinischen Befunde der Bibliothek (Pollack, Way, Süfke, Real) aus erster Person bestätigt.'
	}
];

export const auditSummary = {
	total: evidenceItems.length,
	red: evidenceItems.filter((e) => e.status === 'red').length,
	yellow: evidenceItems.filter((e) => e.status === 'yellow').length,
	green: evidenceItems.filter((e) => e.status === 'green').length,
	untestable: evidenceItems.filter((e) => e.status === 'untestable').length,
	criticalRed: evidenceItems.filter((e) => e.status === 'red' && e.centrality === 'critical').length,
	criticalYellow: evidenceItems.filter((e) => e.status === 'yellow' && e.centrality === 'critical').length,
	verdict:
		'Galloways Evidenzprofil ist das eines brillanten Kommunikators ohne Fact-Checking-Abteilung: 12 grüne Items — fast alle dort, wo er Reeves\' AIBM-Ökosystem, Regierungsstatistiken oder große Meta-Analysen nacherzählt (Deaths of Despair, Suizid-Ratio, PFC-Timing, Friendship Recession, Chetty, Noetel). 12 gelbe Items mit einem wiederkehrenden Muster: richtige Richtung, überdrehte Zahl, journalistische Quelle (Medium-Posts, Glamour, Quartz, Anwalts-Blogs, pseudonyme Tinder-Auswertungen). 2 rote Items, beide in der Hirn-Abteilung: Brizendine-Zahlen ohne peer-reviewte Basis und — der gravierendste Einzelfund — eine Chart, deren Quellenangabe eine ZURÜCKGEZOGENE Studie über ein ANDERES Konstrukt ist (Diaz & Bailey ROGD als „Body Dysmorphia" etikettiert). 4 untestbare Items bilden den normativen Kern (Stool, Surplus Value, Scott-Methode, Memoir). ' +
		'Wissenschaftliche Angreifbarkeit in einem Satz: Wer die Statistiken des Buches zitieren will, muss jede einzelne gegen die Primärquelle prüfen — wer seine Ethik übernehmen will, braucht das nicht. ' +
		'Für den Cross-Book-Vergleich ist die Positionierung aufschlussreich: Galloway ist inhaltlich zu ~80% ein Reeves-Derivat (er nennt ihn „my Yoda") und zu ~20% ein Rückfall hinter Reeves — dort, wo er die Nature/Nurture-Frage biologistischer beantwortet als Hooven, seine eigene T-Quelle, und wo er Brizendine zitiert, die Reeves nie anfassen würde. Zugleich bestätigt seine Memoir-Ebene die klinische Konvergenz der Bibliothek (Maske, Alexithymie, Emotionsverlust, Vaterhunger) in der ersten Person — während er ihr Etikett „toxische Männlichkeit" als „emperor of all oxymorons" verwirft. Er ist damit der lebende Beweis, dass man die BEFUNDE der kritischen Männlichkeitsforschung teilen kann, ohne ihr VOKABULAR zu übernehmen — und das größere Publikum erreicht er damit.'
};
