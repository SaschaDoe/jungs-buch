// pr-evidence-audit-data.ts
// Cross-referencing claims in "Was Sie (Wirklich) Über Erziehung Wissen Müssen"
// (Tillmann Prüfer, dtv 2026) with replication status and methodological critiques.

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
	red: {
		label: 'Problematic',
		color: '#ef4444',
		icon: '🔴',
		description: 'Study not replicated, refuted, or subject to strong methodological criticism'
	},
	yellow: {
		label: 'Shaky / Contested',
		color: '#f59e0b',
		icon: '🟡',
		description:
			'Single study, weak replication, or presented more strongly than the evidence warrants'
	},
	green: {
		label: 'Solidly supported',
		color: '#10b981',
		icon: '🟢',
		description:
			'Replicated, meta-analyses, official statistics, or well-established findings'
	},
	untestable: {
		label: 'Theory / Not testable',
		color: '#8b5cf6',
		icon: '🟣',
		description: 'Theoretical framework, not an empirically falsifiable finding'
	}
};

export const evidenceItems: EvidenceItem[] = [
	// ============ CRITICAL — GREEN ============
	{
		claim: 'ERA-Studie: Erholungs-Potential nach früher Deprivation (rumänische Waisenhäuser).',
		source: 'Rutter et al. (2010) English and Romanian Adoptees Study [52].',
		pages: 'Kap. 4',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Methodisch solide Längsschnittstudie, gut repliziert',
		detail:
			'ERA ist eine der methodisch solidesten Längsschnittstudien der Entwicklungspsychologie. ' +
			'Naturexperiment mit deutlicher Schwellen-Evidenz: unter einem bestimmten Niveau von Deprivation ' +
			'erholen sich Kinder weitgehend; darüber bleiben messbare Defizite. Kumsta et al. (2010) und weitere Folgestudien bestätigen das Muster.'
	},
	{
		claim: 'Holt-Lunstad et al. (2010) Mortalität und soziale Beziehungen: 148 Studien, ~300k Personen, Effektstärke vergleichbar mit Rauchverzicht.',
		source: 'Holt-Lunstad, Smith & Layton (2010) PLOS Medicine [134].',
		pages: 'Kap. 8',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Meta-Analyse, sehr robust',
		detail:
			'Top-Befund der Sozialepidemiologie. 148 eingeschlossene Studien, konsistente Effektgrößen, ' +
			'repliziert in Australian Longitudinal Study of Aging (Giles et al. 2005) und anderen Kohorten.'
	},
	{
		claim: 'Rohrer et al. (2015): Geburtenrang hat praktisch keinen Einfluss auf Persönlichkeit (N=377.000).',
		source: 'Rohrer, Egloff & Schmukle (2015) PNAS [75].',
		pages: 'Kap. 5',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Sehr große Stichprobe, Methode vorbildlich, repliziert',
		detail:
			'Hat den populären Mythos starker Geburtenrang-Effekte praktisch begraben. Damian & Roberts (2015) ' +
			'und Ashton & Lee (2024) bestätigen das Ergebnis mit unabhängigen Datensätzen.'
	},
	{
		claim: 'Behavior-Genetics Top-10 (Plomin): Heritabilität steigt mit Alter von ~20 % auf ~80 %.',
		source: 'Plomin et al. (2016) [162]; Polderman et al. (2015) 50 Jahre Zwillingsforschung Meta [161].',
		pages: 'Kap. 9',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Meta-Analyse über 50 Jahre, behavior genetics Mainstream',
		detail:
			'Polderman (2015) ist eine der umfassendsten Meta-Analysen der Zwillingsforschung überhaupt. ' +
			'Die Altersabhängigkeit der Heritabilität (shared environment schrumpft, additive Genetik wächst) ' +
			'gehört zu den stabilsten Befunden der Psychologie.'
	},
	{
		claim: 'Eliot „Dump the dimorphism": Geschlechts-Hirndifferenzen sind sehr klein und größtenteils durch Körpergröße erklärt.',
		source: 'Eliot et al. (2021) Neuroscience & Biobehavioral Reviews [204].',
		pages: 'Kap. 11',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Konvergente Evidenz mehrerer Meta-/Re-Analysen',
		detail:
			'Eliot et al. (2021) und DeCasien et al. (2022) konvergieren: die Intragruppen-Varianz übersteigt ' +
			'die Intergruppen-Varianz klar. Der geschlechtsessentialistischen Lesart (Sax/Gurian) widersprechen.'
	},
	{
		claim: 'Lancet-Review zu Körperstrafen-Schäden (Heilmann et al. 2021).',
		source: 'Heilmann et al. (2021) The Lancet [260].',
		pages: 'Kap. 13',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Lancet narrative review + konvergente Meta-Evidenz',
		detail:
			'Heilmann fasst Längsschnitt-, Neuroimaging- und Querschnittstudien zusammen. Burani et al. (2023) ' +
			'und Merz et al. (2019) ergänzen neurobiologische Befunde (ERN-Amplituden, striatales Volumen). Gut repliziert.'
	},
	{
		claim: 'Vasquez Meta-Analyse: Autonomie-Unterstützung korreliert mit Wohlbefinden und schulischer Leistung.',
		source: 'Vasquez et al. (2015) Educational Psychology Review [341].',
		pages: 'Kap. 17',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Meta-Analyse 36 Studien, Self-Determination-Theory-Paradigma robust',
		detail:
			'Self-Determination-Theory ist eines der am besten replizierten Rahmenwerke der Motivationspsychologie. ' +
			'Meuwissen & Carlson (2019) bestätigen den Befund experimentell.'
	},
	{
		claim: 'Pinquart Meta-Analyse Erziehungsdimensionen: 1400+ Studien zeigen Wärme als robustesten Prädiktor.',
		source: 'Pinquart (2017) Developmental Psychology [42].',
		pages: 'Kap. 3',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Sehr große Meta-Analyse, konvergent',
		detail:
			'Die bisher umfassendste Meta-Analyse zu Erziehungsstilen. Zeigt, dass Wärme (statt Kontrolle) der robusteste Prädiktor ist — ' +
			'was Lewis\' (1981) Reanalyse der Baumrind-Daten stützt.'
	},
	{
		claim: 'Schwartz/Orygen Studie: Warme Eltern schützen das Gehirn Jugendlicher.',
		source: 'Schwartz et al. (2017) Orygen Adolescent Development Study [326].',
		pages: 'Kap. 16',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Großes Kohorten-Evidence, adolescence brain research',
		detail:
			'Gehört zum wachsenden Korpus der Neuroimaging-Forschung zur Adoleszenz. Konvergent mit Braus-Interview. ' +
			'Warme Eltern-Kind-Beziehungen modulieren Stress-Reaktivität und Gehirnentwicklung.'
	},
	{
		claim: 'Fearon Meta-Analyse zu disorganisierter Bindung und externalisierendem Verhalten.',
		source: 'Fearon et al. (2010) Child Development [88].',
		pages: 'Kap. 6',
		centrality: 'critical',
		status: 'green',
		statusLabel: 'Meta-Analyse, Kern der Bindungstheorie intakt',
		detail:
			'Der Kern der Bindungstheorie (sichere Bindung = Schutzfaktor, disorganisierte Bindung = Risikofaktor) ' +
			'ist gut belegt. Prüfer erkennt dies explizit an, während er die radikalen Ableitungen (Sears) kritisiert.'
	},

	// ============ CRITICAL — YELLOW ============
	{
		claim: 'Baumrinds drei Erziehungsstile (autoritär / autoritativ / permissiv) als Standardmodell.',
		source: 'Baumrind (1966) [33]; später 4-Kategorien-Erweiterung Maccoby & Martin.',
		pages: 'Kap. 3',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Populär, aber Stichprobe klein (N≈100), kritisch reanalysiert',
		detail:
			'Originalstichprobe N≈100 weiße Mittelschichtsfamilien. Reanalyse Lewis (1981) [35]: die Vorteile des autoritativen Stils ' +
			'gehen überwiegend auf Wärme zurück, nicht auf Kontrolle. Rahmen bleibt heuristisch nützlich, die starke Fassung „autoritativ = empirisch beste" wird nicht gestützt.'
	},
	{
		claim: 'Schwedische Längsschnittstudie: Kindliches Verhalten prägt elterlichen Erziehungsstil stärker als umgekehrt.',
		source: 'Kerr, Stattin & Özdemir (2012) [37].',
		pages: 'Kap. 3',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Methodisch sauber (cross-lagged panel), aber Einzelstudie',
		detail:
			'Zentraler Befund gegen die Alleinschuld-Narrative. Cross-lagged Panel-Design ist methodisch stark. ' +
			'Aber: Einzelstudie, kulturspezifisch (Schweden); cross-cultural Replikation wünschenswert. Smetana (2017) review stützt die Grundrichtung.'
	},
	{
		claim: 'Seery et al.: moderate Lebensbelastungen fördern Resilienz („Whatever does not kill us").',
		source: 'Seery, Holman & Silver (2010) [9].',
		pages: 'Kap. 1+4',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Einzelstudie, spätere Replikationen gemischt',
		detail:
			'Populär-attraktive Studie mit U-förmiger Dosis-Wirkung. Spätere Versuche, das Muster zu replizieren, sind gemischt. ' +
			'Prüfer nutzt den Befund vorsichtig als Argument gegen Überbehütung.'
	},
	{
		claim: 'Bowlby/Ainsworth Bindungstheorie: Kern robust, Peripherie (Attachment Parenting) nicht.',
		source: 'Bowlby (1969) [83]; Ainsworth (1978) [84]; Kritik: Vicedo (2013) [85], Keller (2021) [97].',
		pages: 'Kap. 6',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Theorie gemischt: Kern belegt, radikale Ableitungen fraglich',
		detail:
			'Kern (sichere Bindung = Schutzfaktor) gut belegt (Fearon 2010). Baltimore-Studie N=26 schwach; ' +
			'Konrad-Lorenz-Prägungsanalogie fragwürdig. Vicedo (2013) hat Originaldokumente als methodisch mangelhaft eingestuft. ' +
			'Sroufe Minnesota (2010) und Zimmermann et al. (2000) finden keine starke Kontinuität Säuglingsbindung → Erwachsenenbindung.'
	},
	{
		claim: 'Haidt Anxious Generation Hauptthese: Smartphones haben die Jugendkrise verursacht.',
		source: 'Haidt (2024) The Anxious Generation [295].',
		pages: 'Kap. 15',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Kohortendaten stark, Kausalrichtung ungelöst',
		detail:
			'Korrelation ≠ Kausation. Orbens Experimentaldaten (Orben & Przybylski 2019) [297] zeigen nur sehr kleine Effekte. ' +
			'Prüfer balanciert beide Positionen und landet auf „kleiner, aber real".'
	},
	{
		claim: 'Normative Male Alexithymia: Männlichkeitsnormen verhindern emotionale Artikulation.',
		source: 'Levant (2001) [226]; Levant & Wong (2013) [228].',
		pages: 'Kap. 12',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Konzept plausibel, klinische Diagnostik variabel',
		detail:
			'Alexithymie-Konzept ist nützlich, klinische Messinstrumente uneinheitlich. Franz et al. (2008) Dt. Repräsentativdaten und ' +
			'Thorberg et al. (2011) Meta zu parental bonding & alexithymia ergänzen Evidenz — gute deutsche Datenbasis.'
	},
	{
		claim: 'Lillard-Review zu Pretend Play: Behauptete Effekte oft schwächer als populäre Lesart suggeriert.',
		source: 'Lillard et al. (2013) Psychological Bulletin [191].',
		pages: 'Kap. 10',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Rigoroser Review, findet überwiegend schwache Evidenz',
		detail:
			'Lillard fand viele behauptete Effekte überwiegend schwach belegt. Jüngere Meta-Analyse (Smits-van der Nat 2024 [194]) ' +
			'ist optimistischer. Prinzip „Spiel zulassen" robust; konkrete Outcome-Versprechen schwächer.'
	},
	{
		claim: 'Olson: Transgender-Jugendliche 5 Jahre stabil in Identität (~2,5 % komplette Retransition).',
		source: 'Olson et al. (2022) Pediatrics [212].',
		pages: 'Kap. 11',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'Starke Studie, politisch umstritten',
		detail:
			'5-Jahres-Kohorte zeigt überwiegend stabile Geschlechtsidentität. Politisch heftig diskutiert. ~7 % Re-Identifikation ' +
			'im Beobachtungszeitraum, davon ~2,5 % komplette Retransition. Methodik solide, aber Selektionseffekte möglich.'
	},
	{
		claim: 'Kohn-These „jede Belohnung korrumpiert" (Alfie Kohn).',
		source: 'Kohn (2005) [34]; Interview Kohn [240,241,245].',
		pages: 'Kap. 13',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: 'In Universalfassung durch Meta-Analyse widerlegt',
		detail:
			'Bei intrinsisch motivierten Tätigkeiten plausibel; bei unmotivierten Tätigkeiten nicht. Cameron & Pierce (1994) [264] ' +
			'widerlegt die Universalfassung der Overjustification-These. Cerasoli et al. (2014) 40-Jahre-Meta differenziert weiter.'
	},
	{
		claim: 'Tiger-Parenting (Chua-Stil) führt zu schlechteren Outcomes.',
		source: 'Kim et al. (2013) Asian American Journal of Psychology [178].',
		pages: 'Kap. 9',
		centrality: 'critical',
		status: 'yellow',
		statusLabel: '8-Jahres-Längsschnitt, aber monokulturelle Stichprobe',
		detail:
			'Methodisch solider Längsschnitt, aber nur chinesisch-amerikanische Stichprobe. Kulturvergleichende Replikation offen.'
	},

	// ============ SUPPORTING — GREEN ============
	{
		claim: 'Roskam et al. Parental Burnout 42-Länder-Studie.',
		source: 'Roskam et al. (2021) Affective Science [10].',
		pages: 'Kap. 1',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Cross-cultural, sehr breite Datenbasis',
		detail:
			'42 Länder, belegt: Eltern-Burnout ist in individualistischen Kulturen deutlich häufiger als in kollektivistischen. ' +
			'Korrelation robust; kausale Richtung zwischen Kultur und Burnout bleibt offen.'
	},
	{
		claim: 'McCoy Meta-Analyse Helicopter Parenting.',
		source: 'McCoy, Dimler & Rodrigues (2024) Journal of Adult Development [7].',
		pages: 'Kap. 1',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Meta-Analyse, konvergente Effektgrößen',
		detail:
			'Helikopter-Parenting korreliert mit höherer Ängstlichkeit und schlechterer Selbstregulation bei Kindern/Jugendlichen. ' +
			'Effektgrößen moderat, aber konsistent.'
	},
	{
		claim: 'Perry Minnesota: früher Kontrolldruck → schlechtere spätere Selbstregulation.',
		source: 'Perry et al. (2018) Developmental Psychology [8].',
		pages: 'Kap. 1',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Längsschnittstudie, saubere Methodik',
		detail: 'Minnesota-Längsschnitt; Korrelativ, aber methodisch stark. Stützt die „weniger ist mehr"-Empfehlung.'
	},
	{
		claim: 'Vigdal & Brennick: 38-Studien-Review Helicopter Parenting und Depression.',
		source: 'Vigdal & Brennick (2022) Frontiers in Psychology [8].',
		pages: 'Kap. 1',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Systematischer Review, konvergente Befunde',
		detail: 'Bestätigt den korrelativen Zusammenhang zwischen Overparenting und internalisierenden Symptomen.'
	},
	{
		claim: 'Bilgin & Wolke Warwick-Studie: Ferber-Methode verursacht keine Bindungsschäden.',
		source: 'Bilgin & Wolke (2020) Journal of Child Psychology and Psychiatry [11].',
		pages: 'Kap. 6',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Längsschnittstudie, methodisch solide',
		detail: 'Stichhaltige Entwarnung für Eltern, die strukturierte Schlafgewöhnung praktizieren. Keine schädlichen Bindungsfolgen.'
	},
	{
		claim: 'Specht Big-Five-Stabilität über Lebensspanne.',
		source: 'Specht, Egloff & Schmukle (2011) [56].',
		pages: 'Kap. 4',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Große Stichprobe, repliziert',
		detail: 'Persönlichkeit bleibt moderat stabil, ändert sich aber auch im Erwachsenenalter weiter. Freud-basierte Determinismus widerlegt.'
	},
	{
		claim: 'Marsh et al. Neuseeland scoping review: chaotischer Haushalt → schlechtere Entwicklung.',
		source: 'Marsh, Dobson & Maddison (2020) [47].',
		pages: 'Kap. 3',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Scoping review, konvergente Evidenz',
		detail: 'Haushaltschaos korreliert mit schlechterer kognitiver und emotionaler Entwicklung. Struktur ist Schutzfaktor.'
	},
	{
		claim: 'Selman & Dilworth-Bart: 170-Studien-Review zu Familien-Routinen.',
		source: 'Selman & Dilworth-Bart (2024) Journal of Family Theory & Review [48].',
		pages: 'Kap. 3',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Großer systematischer Review',
		detail: 'Routinen korrelieren mit weniger Verhaltensproblemen und besserer kognitiver Entwicklung — SES-unabhängig.'
	},
	{
		claim: 'Jensen 2025 Meta: Eltern bevorzugen Töchter.',
		source: 'Jensen (2025) Psychological Bulletin [76].',
		pages: 'Kap. 5',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Meta-Analyse, klare Effektrichtung',
		detail: 'Parental differential treatment zugunsten von Töchtern ist ein robustes Muster über mehrere Jahrzehnte.'
	},
	{
		claim: 'EPPSE/EPPE: Frühförderung wirksam, v. a. bei benachteiligten Kindern.',
		source: 'Sylva et al. (2004) EPPE [175]; Taggart et al. (2015) EPPSE [158].',
		pages: 'Kap. 9',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Goldstandard-Langzeitstudien',
		detail: 'EPPE/EPPSE sind die britischen Referenzstudien. Deutliche, dauerhafte Effekte bei benachteiligten Kindern, ' +
			'kleinerer Grenznutzen bei Mittelschicht.'
	},
	{
		claim: 'Abecedarian Project: Säuglingsförderung zeigt 30-Jahre-Langzeiteffekte.',
		source: 'Campbell et al. (2014) Science [177].',
		pages: 'Kap. 9',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Randomisierte Längsschnittstudie, Gold-Standard',
		detail: 'Eine der wenigen randomisierten Frühförderungsstudien mit 30+ Jahre Follow-up. Robust positive Outcomes.'
	},
	{
		claim: 'Chicago Longitudinal Study: Frühförderung wirkt auf Bildungserfolg.',
		source: 'Reynolds et al. (2011) Child Development [176].',
		pages: 'Kap. 9',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Große Längsschnittstudie, wiederholt repliziert',
		detail: 'Überfrachtete Erwartungen an Frühförderung werden begrenzt; realistische positive Effekte bleiben bestehen.'
	},
	{
		claim: 'Davis & Hines: 50-Jahre-Meta-Analyse zu Spielzeug-Präferenzen.',
		source: 'Davis & Hines (2021) Archives of Sexual Behavior [199].',
		pages: 'Kap. 11',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Sehr große Meta-Analyse, 75+ Studien',
		detail: 'Deskriptiv robust: Geschlechts-Spielzeug-Präferenzen sind zeitstabil. Kausale Interpretation (angeboren vs. konditioniert) offen.'
	},
	{
		claim: 'Fearon Meta-Analyse zu disorganisierter Bindung.',
		source: 'Fearon et al. (2010) Child Development [88].',
		pages: 'Kap. 6',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Meta-Analyse, Kern-Bindungstheorie bestätigt',
		detail: 'Disorganisierte Bindung sagt externalisierendes Verhalten vorher. Prüfer erkennt explizit den Kern an, während er die radikalen Ableitungen kritisiert.'
	},
	{
		claim: 'Jansen: Stillen stärkt Mutter-Kind-Bindung nicht spezifisch.',
		source: 'Jansen, de Weerth & Riksen-Walraven (2008) [89].',
		pages: 'Kap. 6',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Systematischer Review, widerlegt populären Mythos',
		detail: 'Radboud-Review findet keinen Beleg für spezifische Stillen-Bindung-Kausalität. Stillen hat andere Gesundheitsvorteile.'
	},
	{
		claim: 'Linde et al. Midwifery Review: Stillen → Bindung kein Nachweis.',
		source: 'Linde et al. (2020) Midwifery [90].',
		pages: 'Kap. 6',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Zweiter unabhängiger Review mit demselben Ergebnis',
		detail: 'Bestätigt Jansen: keine spezifische Bindungswirkung durch Stillen. Robuster Befund gegen einen weit verbreiteten Mythos.'
	},
	{
		claim: 'Knafo-Noam: Werteübertragung hängt stärker von Wärme als Indoktrination ab.',
		source: 'Knafo-Noam, Barni & Schwartz (2020) Oxford Handbook [119].',
		pages: 'Kap. 7',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Handbook-Synthese, breit abgestützt',
		detail: 'Werteübereinstimmung Eltern-Kind korreliert stärker mit wahrgenommener Wärme als mit expliziter Werterziehung.'
	},
	{
		claim: 'Kandler Zwillingsstudie zur Werteübertragung.',
		source: 'Kandler, Gottschling & Spinath (2016) [118].',
		pages: 'Kap. 7',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Zwillingsstudie, behavior-genetics-fundiert',
		detail: 'Werte sind moderat heritabel und werden durch Wärme und Modellverhalten moduliert.'
	},
	{
		claim: 'Gunderson: Prozesslob formt Motivation fünf Jahre später.',
		source: 'Gunderson et al. (2013) Child Development [164].',
		pages: 'Kap. 9',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Längsschnittstudie, methodisch solide',
		detail: 'Process praise (Anstrengung loben) korreliert mit späterer Motivation, personbezogenes Lob hingegen mit fixed mindset.'
	},
	{
		claim: 'Cimpian: generisches vs. spezifisches Feedback wirkt unterschiedlich.',
		source: 'Cimpian et al. (2007) Psychological Science [163].',
		pages: 'Kap. 9',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Experimentell, direkt repliziert',
		detail: 'Generisches Lob („du bist klug") schwächt Resilienz bei Misserfolg, spezifisches Lob stärkt Motivation.'
	},
	{
		claim: 'WHO-Report zu Zuckergetränken und Kinder-Adipositas.',
		source: 'WHO (2023) [270].',
		pages: 'Kap. 14',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Offizielle WHO-Evidenzsynthese',
		detail: 'WHO-Guidelines zu Zucker sind auf breiter Evidenzbasis. Robust.'
	},
	{
		claim: 'Pinquart (2014) Meta zu Elterneinfluss auf pädiatrische Adipositas.',
		source: 'Pinquart (2014) Journal of Pediatric Psychology [284].',
		pages: 'Kap. 14',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Meta-Analyse, konvergent',
		detail: 'Restriktive Fütterungsstile korrelieren mit späterem höheren BMI. Autoritativer Stil schützt.'
	},
	{
		claim: 'Sokol et al. Meta: Erziehungsstil und BMI.',
		source: 'Sokol, Qin & Poti (2017) Obesity Reviews [285].',
		pages: 'Kap. 14',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Zweite unabhängige Meta-Analyse',
		detail: 'Bestätigt Pinquart. Autoritativer Stil auch im Ernährungskontext robust am günstigsten.'
	},
	{
		claim: 'Hutton JAMA Peds MRT: Bildschirmzeit korreliert mit weißer Substanz bei Kleinkindern.',
		source: 'Hutton et al. (2020) JAMA Pediatrics [308].',
		pages: 'Kap. 15',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Neuroimaging-Studie, bedeutsamer Effekt',
		detail: 'Bei Kleinkindern messbare Korrelation zwischen Bildschirmzeit und weißer Substanz. Kausalrichtung aber noch offen.'
	},
	{
		claim: 'Law et al. JAMA Peds: EEG-Marker bei 12 Monate alten Kindern mit Bildschirmzeit.',
		source: 'Law et al. (2023) JAMA Pediatrics [307].',
		pages: 'Kap. 15',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'EEG-Evidenz, methodisch sauber',
		detail: 'Bei 12-Monatigen zeigen sich EEG-Marker bei erhöhter Bildschirmzeit. Stützt den Kleinkinder-Schaden-Befund.'
	},
	{
		claim: 'Eirich JAMA Psychiatry Meta: Screentime und internalisierende Symptome.',
		source: 'Eirich et al. (2022) JAMA Psychiatry [302].',
		pages: 'Kap. 15',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Meta-Analyse, konvergente Effekte',
		detail: 'Bildschirmzeit korreliert mit höheren internalisierenden Symptomen. Effekt klein-moderat, aber konsistent.'
	},
	{
		claim: 'Mallawaarachchi 100-Studien-Meta: Bildschirmnutzung bei Kindern unter 6 Jahren.',
		source: 'Mallawaarachchi et al. (2024) JAMA Pediatrics [310].',
		pages: 'Kap. 15',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Sehr große Meta-Analyse, konvergent',
		detail: 'Bei Kleinkindern deutliche negative Effekte auf Entwicklung. Robuste Evidenzbasis für die „Vorsicht bei Kleinkindern"-Empfehlung.'
	},
	{
		claim: 'Tucker-Drob: Gene vs. Umwelt über Entwicklung.',
		source: 'Tucker-Drob, Briley & Harden (2013) [325].',
		pages: 'Kap. 16',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Behavior-genetics Mainstream',
		detail: 'Gene-Umwelt-Interaktion verändert sich über die Entwicklung; Peer-Einfluss steigt in der Adoleszenz.'
	},
	{
		claim: 'Heilmann Lancet: körperliche Strafen schaden.',
		source: 'Heilmann et al. (2021) Lancet [260].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Lancet review',
		detail: 'Narrative review fasst Längsschnitt- und Neuroimaging-Befunde zusammen. Starke Evidenz.'
	},
	{
		claim: 'Burani Biological Psychiatry: neuronale Reaktion auf Fehler/Belohnung nach Körperstrafe.',
		source: 'Burani et al. (2023) Biological Psychiatry CNNI [261].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Neuroimaging-Studie, bedeutsamer Effekt',
		detail: 'ERN-Amplituden und reward-Verarbeitung bei Kindern mit Körperstrafe-Erfahrung verändert.'
	},
	{
		claim: 'Finkelhor: Körperstrafen-Prävalenz in US-Umfragen.',
		source: 'Finkelhor et al. (2019) [257].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Große US-Umfrage',
		detail: 'Beschreibende Prävalenzdaten zu Körperstrafen in US-Familien.'
	},
	{
		claim: 'Kubanek: Lernen durch Verlust schneller als durch Gewinn.',
		source: 'Kubanek, Snyder & Abrams (2015) Cognition [249].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Experimentelle Studie, konvergent mit Loss-Aversion',
		detail: 'Neuro-behaviorale Replikation des Loss-Aversion-Befundes.'
	},
	{
		claim: 'van Houtum MRT-Studie: elterliches Feedback aktiviert Salienznetzwerk.',
		source: 'van Houtum et al. (2022) Developmental Cognitive Neuroscience [255].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Neuroimaging-Studie, methodisch solide',
		detail: 'Elterliches Feedback aktiviert Salienz- und Aufmerksamkeitsnetzwerke bei Jugendlichen.'
	},
	{
		claim: 'Cerasoli 40-Jahre-Meta zu intrinsischer/extrinsischer Motivation.',
		source: 'Cerasoli, Nicklin & Ford (2014) Psychological Bulletin [263].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Umfangreiche Meta-Analyse',
		detail: 'Differenziert Kontexte, in denen Belohnungen intrinsische Motivation schwächen oder stärken.'
	},
	{
		claim: 'Cameron & Pierce Meta: Kohn-Totalablehnung widerlegt.',
		source: 'Cameron & Pierce (1994) Review of Educational Research [264].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Klassische Meta-Analyse, direkte Widerlegung',
		detail: 'Widerlegt die Universalfassung der Overjustification-Hypothese. Belohnungen sind nicht universell schädlich.'
	},
	{
		claim: 'Holt-Lunstad Mortalitäts-Meta (supporting level).',
		source: 'Holt-Lunstad et al. (2010) [134].',
		pages: 'Kap. 8',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Meta-Analyse 148 Studien',
		detail: 'Zentraler Stützungs-Eintrag für L17. Soziale Integration senkt Mortalität vergleichbar mit Rauchverzicht.'
	},
	{
		claim: 'Giles et al. Australian Longitudinal Study of Aging.',
		source: 'Giles et al. (2005) Journal of Epidemiology and Community Health [134].',
		pages: 'Kap. 8',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Große Längsschnittstudie',
		detail: 'Australische Bestätigung der Freundschaft-Mortalität-Verbindung.'
	},
	{
		claim: 'Masten: Freundschaftszeit senkt neural rejection-sensitivity.',
		source: 'Masten, Telzer & Fuligni (2012) SCAN [138].',
		pages: 'Kap. 8',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Neuroimaging-Studie',
		detail: 'Mit Freunden verbrachte Zeit moduliert Ablehnungs-Sensitivität auf neuraler Ebene.'
	},
	{
		claim: 'Sandstrom & Dunn: auch lose Bekanntschaften fördern Wohlbefinden.',
		source: 'Sandstrom & Dunn (2014) [139].',
		pages: 'Kap. 8',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Experimentelle Studie',
		detail: 'Weak-Ties-Befund: Interaktionen mit losen Bekanntschaften heben Stimmung signifikant.'
	},
	{
		claim: 'Perrig-Chiello Empty-Nest Längsschnitt Schweiz.',
		source: 'Perrig-Chiello & Höpflinger (2005) [316].',
		pages: 'Kap. 16',
		centrality: 'supporting',
		status: 'green',
		statusLabel: 'Schweizer Kohorten-Längsschnitt',
		detail: 'Aktuellere Befunde relativieren das populäre „Empty-Nest-Syndrom": viele Mütter profitieren nach Auszug.'
	},

	// ============ SUPPORTING — YELLOW ============
	{
		claim: 'Orchideen/Löwenzahn-Typen als Persönlichkeits-Kategorie.',
		source: 'Boyce & Ellis (2005) [171]; Lionetti et al. (2018) [172].',
		pages: 'Kap. 9',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Metapher populär, aber empirisch nicht bimodal',
		detail:
			'Zhang, Widaman & Belsky (2023) [173] zeigen: die empirische Verteilung ist kontinuierlich, nicht bimodal. Das attraktive „zwei Typen"-Schema ist eine Überinterpretation — das Grundphänomen differentieller Sensibilität bleibt erhalten.'
	},
	{
		claim: 'Ainsworth Baltimore Strange-Situation-Studie.',
		source: 'Ainsworth (1978) [84].',
		pages: 'Kap. 6',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Stichprobe N=26, nicht repräsentativ',
		detail: 'Vicedo (2013) hat Originaldokumente als methodisch mangelhaft eingestuft. Dennoch breit rezipierte Messmethode.'
	},
	{
		claim: 'Vygotsky-Spieltheorie.',
		source: 'Vygotsky (1978) [184].',
		pages: 'Kap. 10',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Einflussreich, aber nicht im modernen Sinn empirisch getestet',
		detail: 'Vygotskys Konzepte (Zone der nächsten Entwicklung, Spiel als Entwicklungsmotor) sind theoretisch einflussreich, empirische Tests methodisch heterogen.'
	},
	{
		claim: 'Dugan & Fraley Canalization-Test zur Bindungstheorie.',
		source: 'Dugan et al. (2024) JPSP [99].',
		pages: 'Kap. 6',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Neu, noch nicht repliziert',
		detail: 'Methodisch innovativer Test der Bindungskanalisierungs-Hypothese. Folgeforschung erforderlich.'
	},
	{
		claim: 'Sax Intersex-Prävalenz 0,02 %.',
		source: 'Sax (2002) Journal of Sex Research [202].',
		pages: 'Kap. 11',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Gegenposition zu Fausto-Sterlings 1,7 %',
		detail: 'Umstritten gegen Fausto-Sterlings Zahl; Sax-Zahl unter strikter klinischer Definition mittlerweile Konsens.'
	},
	{
		claim: 'LoBue: 3-Jährige reagieren auf ungleiche Belohnung.',
		source: 'LoBue et al. (2011) [248].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Einzelstudie, aber replizierbar',
		detail: 'Interessante Einzelstudie zur frühen Fairness-Sensitivität. Repliziert ok.'
	},
	{
		claim: 'Brosnan & de Waal Kapuzineraffen-Fairness-Studie.',
		source: 'Brosnan & de Waal (2003) Nature [246].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Klassiker, aber menschliche Analogie spekulativ',
		detail: 'Bekannt; kausale Übertragung auf kindliche Fairness-Entwicklung bleibt interpretationsbedürftig.'
	},
	{
		claim: 'Haidt Anxious Generation (supporting).',
		source: 'Haidt (2024) [295].',
		pages: 'Kap. 15',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Korrelation stark, Kausation offen',
		detail: 'Starke Kohortendaten, aber Kausalitätsbehauptung durch Orben et al. [297] relativiert.'
	},
	{
		claim: 'Twenge & Campbell: Screens und Wohlbefinden.',
		source: 'Twenge & Campbell (2018) [296].',
		pages: 'Kap. 15',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Effektstärken-Streit',
		detail: 'Korrelation Smartphone-Besitz und psychische Gesundheit; Effektstärken bei Orben deutlich kleiner.'
	},
	{
		claim: 'Yang et al. Smartphone-Depression-Meta.',
		source: 'Yang et al. (2019) [300].',
		pages: 'Kap. 15',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Meta-Analyse, Kausalrichtung unklar',
		detail: '14-Studien-Review. Korrelation Smartphone-Sucht mit Depression. Kausalität offen.'
	},
	{
		claim: 'Gray „Free to Learn".',
		source: 'Gray (2013) [186].',
		pages: 'Kap. 10',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Essayistisch, begrenzte empirische Basis',
		detail: 'Hunter-Gatherer-Analogie pädagogisch attraktiv, aber empirische Basis dünn.'
	},
	{
		claim: 'Baumrind Originaltext (supporting-level).',
		source: 'Baumrind (1966) [33].',
		pages: 'Kap. 3',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Originalstichprobe klein, kritisch reanalysiert',
		detail: 'Siehe critical-yellow Eintrag. Fassungen in Folgestudien zeigen Wärme-Dominanz.'
	},
	{
		claim: 'Tiger-Parenting Kim et al. 2013 (supporting).',
		source: 'Kim et al. (2013) [178].',
		pages: 'Kap. 9',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Kulturspezifisch, monokulturelle Stichprobe',
		detail: 'Replikation in anderen Kulturen offen.'
	},
	{
		claim: 'Winnicott „good enough mother".',
		source: 'Winnicott (1953) [327].',
		pages: 'Kap. 17',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Psychoanalytisch-theoretisch, aber empirisch gestützt',
		detail: 'Winnicott selbst psychoanalytisch. Woodhouse (2020) [329] liefert empirische Unterstützung für die ~50%-Reaktionsschwelle.'
	},
	{
		claim: 'Bettelheim „A Good Enough Parent".',
		source: 'Bettelheim (1987) [334].',
		pages: 'Kap. 17',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Populär-theoretisch, biografische Vorwürfe',
		detail: 'Prüfer verweist explizit auf spätere Vorwürfe gegen Bettelheim [333]. Das Rahmenkonzept bleibt dennoch einflussreich.'
	},
	{
		claim: 'Harris „Nurture Assumption" — Gruppensozialisation schlägt Eltern.',
		source: 'Harris (1998) [335].',
		pages: 'Kap. 17/18',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Umstritten, aber Peer-Befund repliziert',
		detail: 'Harris\' zentrale Prämisse (Peers > Eltern ab Adoleszenz) ist vielfach bestätigt. Gesamttheorie bleibt umstritten.'
	},
	{
		claim: 'Bögels Mindful Parenting RCT.',
		source: 'Bögels et al. (2014) Mindfulness [332].',
		pages: 'Kap. 17',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Kleine RCT, vielversprechend',
		detail: 'Vielversprechende Effekte auf Eltern-Stress und Kind-Outcomes; größere Replikationen ausstehend.'
	},
	{
		claim: 'Arnett „emerging adulthood".',
		source: 'Arnett (2000) [314].',
		pages: 'Kap. 16',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Heuristisch-nützlich, keine strenge Kausaltheorie',
		detail: 'Beschreibendes Lebensphasen-Konzept, breit rezipiert, empirisch weich.'
	},
	{
		claim: 'Perry Overcontrolling Parenting (supporting).',
		source: 'Perry et al. (2018) [8].',
		pages: 'Kap. 1',
		centrality: 'supporting',
		status: 'yellow',
		statusLabel: 'Längsschnitt, aber korrelativ',
		detail: 'Korrelativer Längsschnitt, der die Richtung Elternkontrolle → Kind-Regulation nahelegt, aber Gegenkausalität nicht ausschließt.'
	},

	// ============ SUPPORTING — RED ============
	{
		claim: 'Sears „Baby-Bs" und Attachment Parenting als Gesamtpaket.',
		source: 'Sears & Sears (2013) The Baby Book [77].',
		pages: 'Kap. 6',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Populär-Ratgeber ohne eigene Evidenz',
		detail: 'Die von Sears abgeleiteten Empfehlungen (Familienbett-Pflicht, Tragen als Bindung, Still-Verpflichtung) sind empirisch nicht gestützt.'
	},
	{
		claim: 'Komisar „Mutter = zentrales Nervensystem, erste 1000 Tage".',
		source: 'Komisar über Taranto/WSJ (2017) [82].',
		pages: 'Kap. 1/6',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Populär, nicht peer-reviewed',
		detail: 'Populär-Rhetorik ohne peer-reviewte Basis. Widerspricht der modernen Bindungsforschung zur Rolle anderer Bezugspersonen.'
	},
	{
		claim: 'Schregardus-/harte Ferber-Version als pädagogischer Konsens.',
		source: 'Schregardus (1998) [2].',
		pages: 'Kap. 1',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Historisch, heute als problematisch gewertet',
		detail: 'Prüfer nennt als Beispiel für zeitgebundenen Ratgeberkonsens, der heute als Gewalt gilt.'
	},
	{
		claim: 'Baby Einstein u. ä. Frühförderprodukte.',
		source: 'Im Buch implizit, Kap. 9 (keine Endnote).',
		pages: 'Kap. 9',
		centrality: 'minor',
		status: 'red',
		statusLabel: 'Wissenschaftlich nicht gestützt',
		detail: 'Prüfer erwähnt knapp, dass Baby-Einstein und ähnliche Frühförderprodukte keine Evidenz für Wirksamkeit haben.'
	},
	{
		claim: 'Alfie Kohn: Totalablehnung von Lob.',
		source: 'Kohn (2005) [34]; Interview Kohn [241].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Durch Cameron & Pierce (1994) direkt widerlegt',
		detail: 'In Universalfassung empirisch falsifiziert. Prüfer zitiert Kohn ausführlich, dekonstruiert ihn aber.'
	},
	{
		claim: 'Lorenz-Prägung als Menschen-Modell (via Bowlby).',
		source: 'Lorenz 1935 (in Bowlby 1969).',
		pages: 'Kap. 6',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Heute als unwissenschaftlich gewertet',
		detail: 'Die direkte Übertragung von Konrad Lorenz\' Tier-Prägung auf menschliche Mutter-Kind-Bindung gilt als biologisch-methodisch unzulässig.'
	},
	{
		claim: 'Popularisierung der Loss-Aversion als kinder-pädagogisches Prinzip.',
		source: 'Gal (2018) [253]; Gal & Rucker (2018) [254].',
		pages: 'Kap. 13',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Experimenteller Effekt real, pädagogische Übertragung schwach',
		detail: 'Prüfer zeigt: der Effekt ist in Real-Welt-Kontexten schwerer nachweisbar als in Laborexperimenten.'
	},
	{
		claim: 'Empty-Nest-Syndrom als universelle mütterliche Krise.',
		source: 'Perrig-Chiello [316]; Gorchoff et al. (2008) [320].',
		pages: 'Kap. 16',
		centrality: 'supporting',
		status: 'red',
		statusLabel: 'Stereotyp, aktuell widerlegt',
		detail: 'Neuere Forschung zeigt: viele Mütter profitieren nach Auszug der Kinder an Zufriedenheit. Das Syndrom ist nicht universell.'
	},

	// ============ UNTESTABLE (theoretical frames) ============
	{
		claim: 'Lancy „Neontokratie vs. Gerontokratie".',
		source: 'Lancy (2015) Anthropology of Childhood [18].',
		pages: 'Kap. 2',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Anthropologisches Interpretationsmodell',
		detail: 'Beschreibend nützlich, aber nicht quantitativ testbar.'
	},
	{
		claim: 'Ariès „Kindheit wurde erfunden".',
		source: 'Ariès (1960) [12].',
		pages: 'Kap. 2',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Historiografisches Konstrukt, partiell korrigiert',
		detail: 'Urversion wurde korrigiert — auch Mittelalter kannte Kinder als besonders — das Grundargument der kulturellen Konstruiertheit hält.'
	},
	{
		claim: 'Skinner-Behaviorismus als Generalrahmen.',
		source: 'Skinner (1938) [247].',
		pages: 'Kap. 13',
		centrality: 'minor',
		status: 'untestable',
		statusLabel: 'Theoretisches Paradigma',
		detail: 'Paradigma der Verstärkungspsychologie. Einzelbefunde sind empirisch, aber der Gesamtrahmen ist ein Framework, nicht selbst testbar.'
	},
	{
		claim: 'Freuds Kindheitstrauma-Modell.',
		source: 'Freud (1917) [53].',
		pages: 'Kap. 4',
		centrality: 'minor',
		status: 'untestable',
		statusLabel: 'Historisch einflussreiches Interpretationssystem',
		detail: 'Empirische Spezifika weitgehend falsifiziert; Prüfer zitiert Freud als kultureller Reichweite-Beleg, nicht als empirische Stütze.'
	},
	{
		claim: 'Winnicotts Übergangsobjekt.',
		source: 'Winnicott (1953) [327].',
		pages: 'Kap. 17',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Psychoanalytisches Konzept',
		detail: 'Theoretisches Konzept, das aber in der Entwicklungsforschung phänomenologisch anerkannt ist.'
	},
	{
		claim: 'Historische Erziehungsmodelle: Rousseau, Locke, Schreber, Niemeyer.',
		source: 'Prüfer Kap. 2 [12–17, 22–24].',
		pages: 'Kap. 2',
		centrality: 'supporting',
		status: 'untestable',
		statusLabel: 'Historische Theorie',
		detail: 'Als historische Interpretationsmodelle, nicht als empirische Claims verwendet.'
	},
	{
		claim: 'Adlers Geschwisterposition-Theorie.',
		source: 'Adler (1927) [59].',
		pages: 'Kap. 5',
		centrality: 'minor',
		status: 'untestable',
		statusLabel: 'Historische Theorie, empirisch weitgehend widerlegt',
		detail: 'Die theoretische Grundlage populärer Geburtenrang-Mythen. Durch Rohrer (2015) empirisch obsolet.'
	},
	{
		claim: 'Sullivans interpersonale Psychiatrie.',
		source: 'Sullivan (1953) [130].',
		pages: 'Kap. 8',
		centrality: 'minor',
		status: 'untestable',
		statusLabel: 'Historisches Freundschafts-Theorierahmenwerk',
		detail: 'Einflussreich, aber nicht als empirische Einzelhypothese testbar.'
	},
	{
		claim: 'Jung\'sche Introversion als Persönlichkeitsdimension.',
		source: 'Jung (1921) [143].',
		pages: 'Kap. 8',
		centrality: 'minor',
		status: 'untestable',
		statusLabel: 'Historischer Typologie-Ansatz',
		detail: 'Das Introversions-Konzept ist heute in Big-Five-Forschung empirisch stark (Specht), Jungs Originalrahmen aber metaphorisch.'
	}
];

// ============================================================
// AUDIT SUMMARY
// ============================================================

export const auditSummary = {
	red: evidenceItems.filter((e) => e.status === 'red').length,
	yellow: evidenceItems.filter((e) => e.status === 'yellow').length,
	green: evidenceItems.filter((e) => e.status === 'green').length,
	untestable: evidenceItems.filter((e) => e.status === 'untestable').length,
	criticalRed: evidenceItems.filter((e) => e.status === 'red' && e.centrality === 'critical').length,
	criticalYellow: evidenceItems.filter((e) => e.status === 'yellow' && e.centrality === 'critical').length,
	verdict:
		'Das Buch ist am stärksten dort, wo es große Meta-Analysen und offizielle Statistiken zitiert: ' +
		'Holt-Lunstad (Freundschaft und Mortalität), Rohrer et al. (Geburtenrang), Polderman (50 Jahre Zwillingsforschung), ' +
		'Eliot (Hirndifferenzen), Heilmann/Lancet (Körperstrafen), Pinquart (Elternstile), Rutter (ERA-Studie), Fearon (disorganisierte Bindung) ' +
		'und Vasquez (Autonomie-Unterstützung) stehen auf einer dichten, mehrfach konvergent replizierten Evidenzbasis. ' +
		'Schwächer wird es bei einzelnen Kernstützen: Baumrinds Originalstudie (N≈100), Kerr/Stattins bidirektionale Einzelstudie, ' +
		'Seerys Hormesis-Hypothese und die Bindungstheorie-Rezeption (Kern robust, Peripherie — Attachment Parenting, Sears — nicht gestützt). ' +
		'Haidt vs. Orben bleibt ungelöst; Lillards kritischer Pretend-Play-Review und die neuere optimistische Smits-van der Nat-Meta ergeben eine gemischte Lage. ' +
		'Klar widerlegt (rot) sind: Sears\' Attachment-Parenting-Ableitungen, Komisars „erste 1000 Tage"-These, Kohns Total-Ablehnung von Lob (Cameron & Pierce 1994), ' +
		'die Lorenz-Prägung als Menschenmodell und die universelle Empty-Nest-Syndrom-Zuschreibung. ' +
		'Prüfers eigene normative Synthesen („good enough parenting", „Erziehung = Entdecken") sind untestbar, aber kohärent mit der empirischen Lage. ' +
		'Insgesamt: das Buch ist methodisch auffällig konservativ-skeptisch und eignet sich sehr gut als externes Audit anderer Elternratgeber.'
};

