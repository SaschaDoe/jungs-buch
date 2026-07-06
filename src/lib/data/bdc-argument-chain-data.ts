// bdc-argument-chain-data.ts
// Argument chain for Jack Urwin, "Boys Don't Cry: Identität, Gefühl und Männlichkeit" (Nautilus Flugschrift, dt. Übers. 2017; engl. Original 2016)

export interface ChainLink {
	id: string;
	step: number;
	type: 'premise' | 'observation' | 'causal' | 'theory' | 'consequence' | 'solution';
	claim: string;
	shortLabel: string;
	evidence: string;
	status: 'red' | 'yellow' | 'green' | 'untestable';
	explanation: string;
	dependsOn: string[];
	collapseRisk: string;
	bookLocations: BookLocation[];
	evidenceRefs: EvidenceRef[];
}

export interface EvidenceRef {
	label: string;
	authorSearch: string;
}

export interface BookLocation {
	pages: string;
	chapter: string;
	context: string;
}

export const typeLabels: Record<string, { label: string; color: string }> = {
	premise: { label: 'Premise', color: '#6366f1' },
	observation: { label: 'Observation', color: '#3b82f6' },
	causal: { label: 'Causal claim', color: '#f59e0b' },
	theory: { label: 'Theoretical framework', color: '#8b5cf6' },
	consequence: { label: 'Consequence', color: '#ef4444' },
	solution: { label: 'Prescriptive recommendation', color: '#10b981' }
};

export const chain: ChainLink[] = [
	// ======== Row 0: Empirischer Ankerpunkt ========
	{
		id: 'mortality-stats',
		step: 1,
		shortLabel: 'Männer sterben vorzeitig — die Statistik',
		type: 'observation',
		claim:
			'Britische Männer sterben überproportional früh und an vermeidbaren Ursachen. Selbstmordrate 3× weiblich (78% aller UK-Suizide 2013 männlich). Arztbesuchsfrequenz halb so hoch wie bei Frauen. Vorzeitige Todesfälle (unter 50) 1,5× häufiger bei Männern (Herz-Kreislauf, Unfälle, Suizide, Krebs). Hautkrebs bei gleicher Inzidenz, aber doppelter Mortalität. Diese Zahlen sind kein biologisches Schicksal, sondern Folge einer kulturellen Norm der Hilfevermeidung.',
		evidence:
			'UK Office for National Statistics; Public Health England; NHS-Statistiken; Samaritans-Bericht 2012. Alle Statistiken sind öffentlich verfügbar und breit zitiert.',
		status: 'green',
		explanation:
			'Die Sterblichkeitsdiskrepanz zwischen britischen Männern und Frauen ist in offiziellen Statistiken robust dokumentiert. Die Interpretation als Folge verzögerter Hilfesuche ist gut gestützt durch die Gesundheitsverhaltens-Forschung (Courtenay 2000 "Constructions of masculinity and their influence on men\'s well-being" ist der klassische Meta-Review). Urwin gibt keine formalen Zitate, arbeitet aber mit allgemein akzeptierten Zahlen.',
		dependsOn: [],
		collapseRisk:
			'Wenn die Sterblichkeitsdiskrepanz primär biologisch wäre (z.B. testosteron-bedingte Alterungsunterschiede), wäre Urwins kausale Rahmung hinfällig. Das Ausmaß des Unterschiedes (besonders bei Suizid) widerspricht aber jeder rein biologischen Erklärung.',
		bookLocations: [
			{
				pages: 'Einführung, S. 11-20',
				chapter: 'Einführung',
				context: 'Der empirische Ankerpunkt des gesamten Buches. Persönlicher Anlass: Tod des Vaters Richard Urwin mit 51 an einem Herzinfarkt nach einem verschwiegenen früheren Infarkt.'
			},
			{
				pages: 'Kap. Die Zukunft, S. 58-65',
				chapter: 'Die männliche Selbstmordepidemie',
				context: 'Ausführliche Diskussion der Suizid-Diskrepanz; Interview mit Jonny Sharples zum Tod seines „ganz gewöhnlichen” Bruders Simon.'
			}
		],
		evidenceRefs: [
			{ label: 'Samaritans — Men, Suicide and Society Report (2012)', authorSearch: 'Samaritans' },
			{ label: 'UK Office for National Statistics — Suicide rates', authorSearch: 'ONS' }
		]
	},

	{
		id: 'reject-biologism',
		step: 2,
		shortLabel: 'Biologismus als faule Rechtfertigung',
		type: 'premise',
		claim:
			'Biologisch-evolutionäre Erklärungen männlichen Verhaltens („Männer sind von Natur aus aggressiv”, „Jäger-Gene”) sind lazy rationalizations. Anatomisch moderner Mensch seit 200.000 Jahren; modernes Verhalten seit 50.000 Jahren; Jäger-und-Sammler-Leben endete vor 10.000 Jahren. Körperliche Evolution ist extrem langsam (wir haben immer noch einen Blinddarm), aber Verhalten und Normen ändern sich von Generation zu Generation dramatisch. Wer heute mit „Das ist natürlich, so waren wir schon immer” argumentiert, ignoriert 10.000 Jahre Zivilisationsgeschichte.',
		evidence:
			'Historische und archäologische Standardreferenzen; gleichgeschlechtliche Ehe als Beispiel für schnellen normativen Wandel; Homophober-Büroangestellter als Gedankenexperiment. Keine systematische Auseinandersetzung mit Biologismus-Literatur (Baron-Cohen etc.), aber die Grundposition ist konvergent mit Eliot, Fine, Hyde.',
		status: 'yellow',
		explanation:
			'Die zugrundeliegende Position (Verhalten ist überwiegend kulturell geformt) ist in der Sozialpsychologie und der kritischen Neurowissenschaft breit akzeptiert (Hyde Gender Similarities, Eliot Pink Brain Blue Brain). Urwin bringt das Argument aber populärkulturell und ohne systematische Quellen. Die Position ist empirisch gestützt, die Argumentationsweise primär rhetorisch.',
		dependsOn: [],
		collapseRisk:
			'Wenn gut-dokumentierte biologische Verhaltensunterschiede (z.B. Benenson zu Jungen-Raufkampfspiel, Baron-Cohen zu E-S-Theorie) tragender wären, als Urwin annimmt, würde sein anti-essentialistischer Rahmen brüchig. Die konvergente Anti-Essentialismus-Linie (Eliot, Connell, Böhnisch, hooks) stützt ihn aber.',
		bookLocations: [
			{
				pages: 'Kap. Männerdämmerung, S. 30-40',
				chapter: 'Wie die Biologie unsere Genderrollen definiert',
				context: 'Die zentrale anti-essentialistische Passage. Verweise auf 50.000 Jahre Verhaltensevolution, Blinddarm-Analogie, Homosexualität als Beispiel für schnellen normativen Wandel.'
			}
		],
		evidenceRefs: [
			{ label: 'Hüther, Gerald — Hirnplastizität (allgemein zitiert)', authorSearch: 'Hüther' }
		]
	},

	// ======== Row 1: Sozialisations-Mechanismen ========
	{
		id: 'patriarchal-incentive',
		step: 3,
		shortLabel: 'Patriarchat als ökonomischer Anreiz',
		type: 'causal',
		claim:
			'Männer haben strukturell keinen Anreiz, traditionelle Geschlechterrollen zu verändern, weil sie ökonomisch davon profitieren: Gender pay gap, asymmetrischer Mutter-/Vaterschaftsurlaub, Diskriminierung bei Einstellung schwangerschaftsfähiger Frauen. Der Louis-CK-Witz („Ich find\'s toll, weiß zu sein”) als Analogie für männliche Privilegien: man erkennt das Problem vielleicht, aber opfert nicht freiwillig den eigenen Vorteil. Daraus folgt, dass Gender-Equality-Arbeit einen Anreiz braucht, der beide Seiten anspricht — daher die strategische Wichtigkeit von „Das Patriarchat schadet auch den Männern”.',
		evidence:
			'UK-Statistiken zum gender pay gap, Mutterschaftsurlaub-Regelungen. Louis CK Stand-up als kulturelle Analogie. Keine systematische Ungleichheitsforschung zitiert.',
		status: 'yellow',
		explanation:
			'Die Ungleichheitsdaten (pay gap, care work asymmetry) sind robust. Die Rahmung als ökonomischer Anreiz-Mechanismus, der soziale Trägheit erklärt, ist in der feministischen Soziologie Standard (vgl. Connells "patriarchal dividend"). Urwins Verbindung mit der popkulturellen Louis-CK-Analogie ist journalistisch-illustrativ, nicht akademisch.',
		dependsOn: ['reject-biologism'],
		collapseRisk:
			'Wenn Männer in der Realität mehr Reform-Anreiz hätten, als die „rational-actor”-Perspektive annimmt, wäre Urwins Pessimismus übertrieben. Die tatsächlichen historischen Reform-Bewegungen (NOMAS, White Ribbon, etc.) stützen aber die These, dass aktive Männer-Allianzen die Ausnahme sind.',
		bookLocations: [
			{
				pages: 'Kap. Männerdämmerung, S. 40-48',
				chapter: 'Geld regiert die ganze Welt',
				context: 'Entfaltet den ökonomischen Anreiz-Mechanismus und den Louis-CK-Witz als Analogie für weißes/männliches Privileg.'
			}
		],
		evidenceRefs: [
			{ label: 'Louis CK — Stand-up zur weißen Privilegiertheit', authorSearch: 'Louis CK' }
		]
	},

	{
		id: 'boys-dont-cry',
		step: 4,
		shortLabel: '„Jungen weinen nicht” als frühe Konditionierung',
		type: 'causal',
		claim:
			'Die Phrase „Jungen weinen nicht” (und funktional äquivalente kulturelle Skripte) wird in der frühen Kindheit verankert und prägt das gesamte spätere Verhältnis von Männern zu ihrer eigenen Gefühlswelt. Sie wird selten mit einer Alternative versehen — dem Jungen wird gesagt, welche Reaktion verboten ist, aber nicht, welche stattdessen erlaubt. Dadurch lernt er, dass emotionale Äußerung um jeden Preis zu vermeiden ist, wenn er „männlich rüberkommen” will.',
		evidence:
			'Samaritans-Bericht 2012: „Männern wird von Kindesbeinen an beigebracht, „männlich” zu sein bedeute, keinen Wert auf soziale und emotionale Kompetenzen zu legen." Urwin nimmt das als Rahmen; persönliche Beobachtungen und Anekdoten als Illustration.',
		status: 'yellow',
		explanation:
			'Die Beobachtung ist klinisch und entwicklungspsychologisch gut dokumentiert (konvergent mit Pollack "Boy Code", Real "covert depression", Süfke "mangelnde Spiegelung", Böhnisch "hidden gender curriculum"). Urwin zitiert keine direkte empirische Kausalkette, aber die konvergente Beobachtung über mehrere Forschungstraditionen hinweg stützt den Kern.',
		dependsOn: ['reject-biologism'],
		collapseRisk:
			'Wenn Jungen in der Realität gleich häufig wie Mädchen zum Weinen ermutigt würden (was Gendering-Studien widerlegen), wäre die Kausalkette hin. Die entwicklungspsychologische Literatur zur differenziellen Gefühlsbenennung ist aber konsistent.',
		bookLocations: [
			{
				pages: 'Kap. Die Zukunft, S. 53-60',
				chapter: 'Weinen als Katharsis / Unsere Doppelmoral in Bezug auf Gendernormen',
				context: '„Jungen weinen nicht” als Paradigma der frühen Konditionierung; Jungen bekommen mehr Druck als Mädchen, sich in Rollenskripten zu bewegen.'
			}
		],
		evidenceRefs: [
			{ label: 'Samaritans — Men, Suicide and Society Report (2012)', authorSearch: 'Samaritans' }
		]
	},

	// ======== Row 2: Resultat: Toxische Männlichkeit ========
	{
		id: 'toxic-masculinity',
		step: 5,
		shortLabel: 'Toxische Männlichkeit als organisierendes Konzept',
		type: 'theory',
		claim:
			'Toxische Männlichkeit = übertriebenes Verhalten, das darauf abzielt, noch männlicher zu erscheinen, gewöhnlich motiviert durch Unsicherheit und im Allgemeinen weit entfernt vom positiven, echten Ausdruck von Männlichkeit, die es zu imitieren sucht. Wenn Männer sich entmannt fühlen, klammern sie sich an alles, was sie irgendwie als männlich empfinden. Das umfasst sowohl passive Verhaltensweisen (Schweigen, Hilfeverweigerung, emotionale Verdrängung) als auch aktive (Gewalt, Machismo, Risikobereitschaft, Dominanz).',
		evidence:
			'Der Begriff stammt ursprünglich aus der mythopoetischen Männerbewegung (Shepherd Bliss, 1980er) und wurde in den 2010er Jahren von populärem Journalismus aufgegriffen. Urwin verwendet ihn als Dachbegriff, ohne akademische Abgrenzung.',
		status: 'yellow',
		explanation:
			'Der Begriff ist populär und intuitiv, aber akademisch umstritten. Kritiker (z.B. Harrington 2021) bemängeln, dass er Männlichkeit als solche pathologisiert. Urwins explizite Definition begegnet dieser Kritik teilweise, indem sie „toxische” von „positiver” Männlichkeit unterscheidet. Als analytische Kategorie ist der Begriff nicht quantifiziert, funktioniert aber als Heuristik.',
		dependsOn: ['boys-dont-cry', 'patriarchal-incentive'],
		collapseRisk:
			'Wenn sich zeigen sollte, dass Männlichkeit nicht als einheitliches kulturelles System, sondern als Vielzahl koexistierender Männlichkeiten existiert (wie Connell zeigt), wäre „toxische Männlichkeit” als Kategorie zu grob. Urwin operiert implizit mit einer vereinfachenden Sicht, die Connells „multiple masculinities”-Argument unterläuft.',
		bookLocations: [
			{
				pages: 'Durchgängig, Kerndefinition Kap. Mann & Frau, S. 123-125',
				chapter: 'Definition im Kapitel Mann & Frau',
				context: 'Explizite Definition: „übertriebenes Verhalten, das darauf abzielt, noch männlicher zu erscheinen, gewöhnlich motiviert durch Unsicherheit...”'
			}
		],
		evidenceRefs: [
			{ label: 'Urwin, Jack — A Stiff Upper Lip Is Killing British Men (VICE, 2014)', authorSearch: 'Urwin' }
		]
	},

	// ======== Row 3: Aktiv / Passiv ========
	{
		id: 'passive-toxicity',
		step: 6,
		shortLabel: 'Passive toxische Männlichkeit: „Stiff Upper Lip” tötet',
		type: 'consequence',
		claim:
			'Die „stille” Variante toxischer Männlichkeit — britischer „Stiff Upper Lip”, Schweigen, Hilfeverweigerung, emotionale Verdrängung, verzögerte Arztbesuche, Alkoholismus als Selbstmedikation — ist statistisch tödlich. Urwins Vater Richard als paradigmatischer Fall: Er hatte einen früheren Herzinfarkt, trug ein freiverkäufliches Herzmedikament bei sich, und sprach mit niemandem darüber. Sein Tod mit 51 war das direkte Ergebnis dieses Musters.',
		evidence:
			'Persönliche Autobiografie (Richard Urwin, gest. 1999); UK-Mortalitätsstatistiken; Samaritans-Bericht 2012 zur Korrelation zwischen männlicher Stoizismus-Norm und Suizid; Männer haben halbe GP-Besuchsfrequenz; Selbstmedikation mit Alkohol deutlich häufiger bei Männern.',
		status: 'yellow',
		explanation:
			'Die statistische Ebene (verzögerte Hilfesuche → höhere Mortalität) ist in der Gesundheitsforschung robust (Courtenay 2000, Addis & Mahalik 2003). Der persönliche Fall ist autobiografisch-plausibel. Die Zusammenbindung in das Konzept „passive toxische Männlichkeit” ist Urwins interpretatives Rahmenwerk — klinisch plausibel, aber nicht als distinkte messbare Kategorie operationalisiert.',
		dependsOn: ['toxic-masculinity', 'mortality-stats'],
		collapseRisk:
			'Wenn sich zeigen sollte, dass verzögerte Hilfesuche bei Männern primär strukturell ist (Arbeitszeiten, unzugängliche Gesundheitssysteme) und nicht primär normativ-maskulin, wäre die Zuweisung an „toxische Männlichkeit” zu eng. Die empirische Literatur spricht aber klar für einen normativen Anteil.',
		bookLocations: [
			{
				pages: 'Einführung, S. 11-20 / Kap. Mann & Frau, S. 120-130',
				chapter: 'Einführung + Mann & Frau',
				context: 'Der Tod des Vaters als Buch-Anlass; später als Illustration der passiven Variante.'
			}
		],
		evidenceRefs: [
			{ label: 'Samaritans — Men, Suicide and Society Report (2012)', authorSearch: 'Samaritans' }
		]
	},

	{
		id: 'active-toxicity',
		step: 7,
		shortLabel: 'Aktive toxische Männlichkeit: Gewalt, Risiko, Mob',
		type: 'consequence',
		claim:
			'Die „laute” Variante toxischer Männlichkeit — Machismo, Gewalt, riskantes Fahren, Hooliganismus, Lad-Kultur, Top-Gear-Fankultur, Fight-Club-Fetischisierung — ist ebenso tödlich, aber direkter. Männer werden beim Autofahren doppelt so häufig getötet; die australische NSW-Verkehrskampagne („Speeding: No One Thinks Big Of You”, mit Kleinfinger-Geste) senkte die Verkehrstote um 25% im ersten Jahr, weil sie die Penis-Kompensation entlarvte. Fußball-Hooliganismus als historisches Beispiel; Fenerbahce-Istanbul-Episode 2011: Männer aus dem Stadion verbannen führte sofort zu freundlicher Atmosphäre.',
		evidence:
			'UK-Verkehrstote-Statistiken (männlich doppelt weiblich); Ogilvy/Clemenger-BBDO-Evaluation der NSW-Kampagne; Turkish-Football-Federation-Disziplinarmaßnahmen 2011. Cultural-critical-Analyse von Top Gear, Clarkson-Petition, Fight Club.',
		status: 'yellow',
		explanation:
			'Die Verkehrstote-Statistiken sind robust und universal. Die Wirksamkeit der NSW-Kampagne ist empirisch dokumentiert (Zeitreihen-Analyse vor/nach). Die kulturelle Ebene (Mob-Mentalität, Lad-Kultur) ist interpretativ-journalistisch. Die Kausalkette „toxisches Männlichkeitsideal → Risikoverhalten → Tod” ist gut gestützt durch die Risk-Taking-Forschung bei adoleszenten Männern (Arnett, Steinberg), aber Urwin bringt das nicht systematisch.',
		dependsOn: ['toxic-masculinity'],
		collapseRisk:
			'Wenn sich männliches Risikoverhalten primär biologisch-hormonell (prenatale Testosteron-Organisation) erklären ließe (Benenson-Position), wäre Urwins kultureller Rahmen zu begrenzt. Die Gender-Differenz im Risiko-Verhalten ist aber kultur-variabel, was eine rein biologische Erklärung erschwert.',
		bookLocations: [
			{
				pages: 'Kap. Fight Club, S. 66-95',
				chapter: 'Fight Club: Aggression, Risiko und Mob-Mentalität',
				context: 'Die zentrale Entfaltung der aktiven Variante: NSW-Kampagne, Fenerbahce, Clapton Ultras, Clarkson-Fan-Petition, Moshpit-Gewalt.'
			}
		],
		evidenceRefs: [
			{ label: 'NSW Speeding Kampagne — Clemenger BBDO / Ogilvy', authorSearch: 'Clemenger' }
		]
	},

	// ======== Row 4: Institutionelle Reproduktion ========
	{
		id: 'military-popculture',
		step: 8,
		shortLabel: 'Militär & Popkultur als Reproduktionskanäle',
		type: 'causal',
		claim:
			'Toxische Männlichkeit wird institutionell reproduziert durch Militär (US Marine Corps als Paradigma), Sport (American Football, Rugby, Fußball-Hooliganismus), Popkultur (Hollywood-Kriegsfilme, Top Gear, Fight Club), Videospiele (First-Person-Shooter) und Konsumwerbung (Lynx-Deos, Spielzeug-Gender-Marketing). Interview mit Josh Huddleston (USMC-Veteran): er wählte die Marines, um seine „schmächtige” Erscheinung zu kompensieren und weil amerikanische Popkultur ihn darauf konditioniert hatte. Gleichzeitig kann das Militär auch progressiv wirken: Interview mit Christina Bentley (erste trans RAF-Polizistin) zeigt, wie strikt durchgesetzte Antidiskriminierungspolitik institutionelle Männlichkeit reformieren kann.',
		evidence:
			'Interviews mit Huddleston und Bentley (primäre qualitative Daten); historische Analyse der DADT-Aufhebung und des US-Trans-Verbots bis 2016; Vergleich mit israelischen und britischen Streitkräften.',
		status: 'yellow',
		explanation:
			'Die institutionelle These (Militär + Popkultur als Sozialisationskanäle) ist breit geteilt in der kritischen Männerforschung (Kimmel, Messner, Connell). Die Interviews sind qualitativ stark, aber nicht verallgemeinerbar. Die positive Wendung (Militär kann reformiert werden) ist eine wichtige Nuancierung, die Urwin gegen den „betonlinken” Reflex stellt.',
		dependsOn: ['active-toxicity'],
		collapseRisk:
			'Wenn Männer auch ohne diese Institutionen dieselben Verhaltensmuster entwickelten, wäre die institutionelle Ebene epiphänomenal. Die Militarismus-Literatur (Kimmel "Angry White Men") stützt aber den institutionellen Effekt.',
		bookLocations: [
			{
				pages: 'Kap. Mann am Boden, S. 96-120',
				chapter: 'Mann am Boden: Männlichkeit im Militär und institutionalisierte Gewalt',
				context: 'Joshua Huddleston und Christina Bentley Interviews; DADT-Geschichte; USMC-Kultur.'
			}
		],
		evidenceRefs: [
			{ label: 'Huddleston, Josh — Interview (USMC-Veteran)', authorSearch: 'Huddleston' },
			{ label: 'Bentley, Christina — Interview (erste trans RAF-Polizistin)', authorSearch: 'Bentley' }
		]
	},

	{
		id: 'body-consumption',
		step: 9,
		shortLabel: 'Body Image und Konsum-Kapitalismus',
		type: 'causal',
		claim:
			'Die 1980er Jahre markieren einen Bruch in der kulturellen Konstruktion von Männlichkeit. Der Zerfall der britischen Arbeiterklasse (Bergbau-Schließungen, Fabrikauslagerung, Thatcherismus) zerstörte die Versorger-Männlichkeit. Parallel entstand die „metrosexuelle” Konsum-Männlichkeit (Mark Simpson 1994). Werbung schuf unrealistische Körperideale, die bis dahin nur Frauen betrafen. Folgen: männliche Essstörungen +27% seit 2000, „Bigorexie” als neues Phänomen, chronisch unterdiagnostiziert, weil „Mädchen-Krankheit”. Interview mit Huw Oliver illustriert das Stigma männlicher Anorexie.',
		evidence:
			'NHS-Statistiken zu Essstörungen (+27% seit 2000, Männer); Interview mit Huw Oliver (Journalist, Teenager-Anorexie); historische Analyse der UK-Arbeitswelt 1980er.',
		status: 'yellow',
		explanation:
			'Die Zunahme männlicher Essstörungs-Diagnosen ist in NHS-Daten dokumentiert. Ob die Zunahme eine echte Inzidenzsteigerung oder eine Verbesserung der Diagnose ist, bleibt offen. Die kulturhistorische These (80er Jahre → Konsum-Männlichkeit → Körperdruck) ist plausibel, aber Urwin bringt sie populärhistorisch, nicht empirisch.',
		dependsOn: ['toxic-masculinity'],
		collapseRisk:
			'Wenn männliche Essstörungen unabhängig von Konsum-Kapitalismus zugenommen hätten (z.B. durch Diagnostik-Verbesserung), wäre die kausale Zuschreibung zu eng. Die Korrelation mit Werbe- und Medienexposition ist aber in der Körperbild-Forschung robust (Grogan 2016).',
		bookLocations: [
			{
				pages: 'Kap. Der ideale Mann, S. 125-152',
				chapter: 'Der ideale Mann: Körperbild, Konsumdenken und das oberflächliche Gesicht moderner Männlichkeit',
				context: 'Historische These zu Thatcherismus; Mark-Simpson-Metrosexualitätsbegriff; Huw-Oliver-Interview; American Psycho/Fight Club als popkulturelle Chiffren.'
			}
		],
		evidenceRefs: [
			{ label: 'Oliver, Huw — Interview (männliche Anorexie)', authorSearch: 'Oliver' },
			{ label: 'Simpson, Mark — Metrosexuell-Prägung (Independent 1994)', authorSearch: 'Simpson' }
		]
	},

	{
		id: 'homophobia-policing',
		step: 10,
		shortLabel: 'Homophobie als Männlichkeits-Polizei',
		type: 'causal',
		claim:
			'Homophobes Verhalten beginnt oft nicht als Hass auf Homosexuelle, sondern als Strafe für das Abweichen von gesellschaftlichen Vorstellungen von Männlichkeit. Jungen werden als „schwul” geschimpft, lange bevor sie eine Vorstellung von Sexualität haben. „Schwul sein” wird gleichgesetzt mit „unmännlich sein”. Die Konsequenz: Männlichkeitsarbeit und LGBT-Rechte sind strukturell verbunden. „Gay Panic Defense” in Teilen von USA/Australien als rechtlich kodifizierte Homophobie. Heterosexualität als „Voreinstellung” der Männlichkeit.',
		evidence:
			'Kulturelle Beobachtung und persönliche Anekdoten; historische Analyse der gleichgeschlechtlichen Ehe; Vergleich mit Mischehen-Verbot-Aufhebung in USA 1967.',
		status: 'yellow',
		explanation:
			'Die Beobachtung ist in der Homophobie-Forschung konvergent dokumentiert (Pascoe "Dude, You\'re a Fag" 2007 ist die klassische ethnographische Studie). Urwin bringt das journalistisch-intuitiv ohne akademische Belege, aber die Grundthese ist robust gestützt.',
		dependsOn: ['boys-dont-cry', 'toxic-masculinity'],
		collapseRisk:
			'Wenn homophobes Bullying primär durch Fremdenangst statt durch Männlichkeits-Polizei motiviert wäre, wäre die Kausalkette falsch. Pascoes Studie und nachfolgende Forschung widerlegen das aber.',
		bookLocations: [
			{
				pages: 'Kap. Männlichkeit jenseits, S. 152-180',
				chapter: 'Männlichkeit jenseits von (heterosexuellen) Männern',
				context: 'Zentrale Passage zur Verbindung Homophobie-Männlichkeit; „Gay Panic Defense”; Hemd-Farben-Beispiel; parallele zur Rassenbürgerrechte-Bewegung.'
			}
		],
		evidenceRefs: [
			{ label: 'Pascoe, C. J. — Dude, You\'re a Fag (implizit konvergent)', authorSearch: 'Pascoe' }
		]
	},

	// ======== Row 5: Familie, Beziehungen, Vergewaltigungskultur ========
	{
		id: 'relationship-damage',
		step: 11,
		shortLabel: 'Emotionale Verdrängung zerstört Beziehungen',
		type: 'consequence',
		claim:
			'Die durch „Jungen weinen nicht” verinnerlichte emotionale Verdrängung zerstört romantische Beziehungen, Familien und Freundschaften. Männer, die nicht gelernt haben zu kommunizieren, werden zur emotionalen Last für ihre Partnerinnen. Urwins eigenes Beispiel (Ex-Freundin Megan als „Punchingball”). Häusliche Gewalt steigt in wirtschaftlichen Krisen, weil Männer, deren Männlichkeit an Arbeit/Einkommen hängt, sich „entmannt” fühlen und zu Gewalt greifen. Inter-generationales Trauma: WW2-Veteranen → alkoholische Väter → depressive Söhne.',
		evidence:
			'Persönliche Autobiographie (Ex-Megan); häusliche-Gewalt-Statistiken in Krisenzeiten; Philip-Larkin-Gedicht als Motto; Urwins Großvater-Vater-Selbst-Kette als inter-generationales Beispiel.',
		status: 'yellow',
		explanation:
			'Die Korrelation zwischen wirtschaftlichen Krisen und häuslicher Gewalt ist statistisch dokumentiert. Die psychologische Interpretation als „Entmannungs-Kompensation” ist klinisch plausibel (konvergent mit Böhnischs "Gewalt als Hilflosigkeit"), aber empirisch schwer isolierbar. Das inter-generationale Trauma-Argument ist als Einzelfall illustrativ, als generelle These unbewiesen.',
		dependsOn: ['passive-toxicity', 'active-toxicity'],
		collapseRisk:
			'Wenn emotionale Verdrängung primär individuell und nicht sozial verursacht wäre, wäre die Kausalkette hin. Die konvergente entwicklungspsychologische Evidenz (Pollack, Real, Süfke, Böhnisch) stützt aber die soziale Genese.',
		bookLocations: [
			{
				pages: 'Kap. Mann & Frau, S. 121-150',
				chapter: 'Mann & Frau: Familien, persönliche Beziehungen und die destruktive Natur verdrängter Gefühle',
				context: 'Autobiographische Entfaltung; Philip Larkin als Motto; inter-generationales Trauma-Argument; häusliche Gewalt in Krisen.'
			}
		],
		evidenceRefs: [
			{ label: 'Larkin, Philip — „This Be The Verse”', authorSearch: 'Larkin' }
		]
	},

	{
		id: 'rape-culture',
		step: 12,
		shortLabel: 'Vergewaltigungskultur als Endpunkt',
		type: 'consequence',
		claim:
			'Die Kombination aus männlicher Berechtigung zum Sex (als Beweis der Männlichkeit), fehlender Konsens-Bildung und Porno-basierter sexueller Sozialisation führt zur Vergewaltigungskultur. Elliot Rodger (Isla Vista 2014) als extremes Symptom der incel/„Men\'s Rights”-Ideologie. Junge Männer haben Sex als soziale Währung eingebläut bekommen und schlagen aus, wenn sie nicht bekommen, was sie glauben verdient zu haben. Porno-Literacy fehlt in Schulen; Interview mit Martin Daubney als pragmatischer Porno-Pädagogik-Fürsprecher; Interview mit Emily Reynolds zum porno-besessenen Ex-Freund als Kontrollzwang-Symptom.',
		evidence:
			'Elliot-Rodger-Fall; Emily-Reynolds-Interview; Martin-Daubney-Guardian-Artikel zur Porno-Pädagogik; Michael-Fassbender-GQ-Interview-Episode als Beispiel der Medien-Doppelmoral.',
		status: 'yellow',
		explanation:
			'Vergewaltigungskultur als Analyserahmen ist breit etabliert (Buchwald/Fletcher/Roth 1993 „Transforming a Rape Culture”); die spezifische Kausalkette („toxische Männlichkeit → incel-Ideologie → Rodger-Typen”) ist extrem plausibel, aber die empirische Isolierung einzelner Mechanismen ist schwierig. Die Popularisierung des Begriffs „Entmannung” ist Urwins interessanter sprachlicher Beitrag.',
		dependsOn: ['toxic-masculinity', 'boys-dont-cry'],
		collapseRisk:
			'Wenn Extremfälle wie Rodger als psychopathologische Ausnahmen und nicht als Symptome einer breiten Kultur erklärt würden, wäre die Rahmung zu weit. Die incel-Forschung der letzten Jahre stützt aber die These, dass eine breite Subkultur diese Ideologie trägt.',
		bookLocations: [
			{
				pages: 'Kap. Ausrasten, S. 180-210',
				chapter: 'Ausrasten: Sex, Vergewaltigungskultur und der Frust männlicher Jungfrauen',
				context: 'Elliot Rodger als Extremfall; Fassbender-Doppelmoral; Emily-Reynolds-Interview; Pragmatik der Porno-Pädagogik.'
			}
		],
		evidenceRefs: [
			{ label: 'Rodger, Elliot — Isla Vista 2014 (Fallanalyse)', authorSearch: 'Rodger' },
			{ label: 'Daubney, Martin — Guardian Porno-Pädagogik', authorSearch: 'Daubney' }
		]
	},

	// ======== Row 6: Lösung ========
	{
		id: 'pragmatic-solutions',
		step: 13,
		shortLabel: 'Pragmatischer Kompromiss statt Idealismus',
		type: 'solution',
		claim:
			'Kampagnen wie die Samariter („Wir sind auf deiner Seite” mit Boxer/Soldat-Rollenbildern) und CALM/Lynx, die toxische Männlichkeits-Ideale als Vehikel nutzen, um Männer zu erreichen, sind langfristig problematisch, kurzfristig aber notwendig. „Wir können nur eine gewisse Zeit an unseren idealistischen Ansichten festhalten, dann müssen wir akzeptieren, dass sich nichts verändert und dass jeder noch so unvollkommene Fortschritt besser ist als gar keiner.” Urwin lehnt den „betonlinken” Purismus als strategisch unfruchtbar ab.',
		evidence:
			'Samariter-Bericht zur Kampagnen-Entwicklung; CALM/Lynx-Partnerschaft; Analyse der australischen NSW-Kampagne; Taylor-Swift-Feminismus-Debatte als Analogie.',
		status: 'untestable',
		explanation:
			'Eine strategische Empfehlung, keine empirische Hypothese. Die Wirksamkeit der Kampagnen ist dokumentiert (NSW-Fall), die langfristige Bewertung (ob sie Reform beschleunigen oder bremsen) ist offen. Die pragmatische Position ist in der Politik-Wissenschaft wohlbegründet (inkrementelle vs. transformationelle Strategien).',
		dependsOn: ['toxic-masculinity', 'mortality-stats'],
		collapseRisk:
			'Wenn sich zeigte, dass pragmatische Kampagnen die langfristige Reform-Dynamik bremsen (Backlash-Effekt), wäre Urwins Position zu fahrlässig. Die empirische Evaluation steht aus.',
		bookLocations: [
			{
				pages: 'Kap. Wir müssen reden, S. 210-240',
				chapter: 'Wir müssen reden: Was wir für Veränderungen tun können',
				context: 'Zentrale strategische Diskussion; Taylor-Swift-Feminismus-Vergleich; Samariter und CALM als positive Beispiele trotz Vorbehalten.'
			}
		],
		evidenceRefs: [
			{ label: 'CALM (Campaign Against Living Miserably)', authorSearch: 'CALM' },
			{ label: 'Samaritans — Kampagnenpraxis', authorSearch: 'Samaritans' }
		]
	},

	{
		id: 'three-level-action',
		step: 14,
		shortLabel: 'Drei Handlungsebenen + Feminismus als Verbündeter',
		type: 'solution',
		claim:
			'Die Lösung erfolgt auf drei Handlungsebenen: (1) An sich selbst arbeiten — Männer müssen lernen, sich wohlzufühlen mit dem, wer sie sind, und ihre Gefühle mit Vertrauten zu teilen; (2) Andere Männer erreichen — Freunde und Familienmitglieder ohne Verurteilung, ohne Männlichkeits-Infrage-Stellung; (3) Die nächste Generation erziehen — Konsens, Vergewaltigungskultur, emotionale Bildung. Strategisch: Der Feminismus ist Verbündeter, nicht Feind. „Wenn wir Männer nicht überflüssig werden wollen, müssen wir uns den Feminismus ansehen und fragen, was wir von Frauen lernen können.” Frauen haben die emotionale Reife kultiviert, die Männer jetzt nachholen müssen.',
		evidence:
			'Urwins zusammenfassende strategische Empfehlung; konvergent mit feministischer Männer-Literatur (hooks, Kimmel); persönliche Anekdoten (Briefe der Mutter, Bruder-Gespräch).',
		status: 'untestable',
		explanation:
			'Eine normative und strategische Empfehlung, keine falsifizierbare Hypothese. Die drei Ebenen sind in der praktischen Gleichstellungsarbeit breit akzeptiert (vgl. NOMAS, White Ribbon Campaign, Men Engage Alliance). Die ausdrückliche Absage an MRA-Positionen ist strategisch klar.',
		dependsOn: ['pragmatic-solutions', 'relationship-damage'],
		collapseRisk:
			'Wenn sich die drei Handlungsebenen in der Praxis als unwirksam erwiesen (z.B. weil individuelle Transformation ohne strukturelle Veränderung nicht trägt), wäre Urwin zu individualistisch. Die feministische Literatur (hooks, Kimmel) stützt aber die These, dass sowohl individuelle als auch strukturelle Arbeit nötig ist.',
		bookLocations: [
			{
				pages: 'Kap. Wir müssen reden, S. 220-240',
				chapter: 'Wir müssen reden',
				context: 'Das programmatische Schlusskapitel; „Das Patriarchat schadet auch den Männern” als zentrale strategische Formel; Feminismus als Verbündeter.'
			}
		],
		evidenceRefs: [
			{ label: 'hooks, bell — The Will to Change (implizit konvergent)', authorSearch: 'hooks' }
		]
	}
];

// ============================================================
// CHAIN ANALYSIS
// ============================================================

export function getWeakestPath(): ChainLink[] {
	const target = chain.find((c) => c.id === 'three-level-action')!;
	const path: ChainLink[] = [target];

	function findWeakestDep(link: ChainLink): ChainLink | null {
		if (link.dependsOn.length === 0) return null;
		const deps = link.dependsOn.map((id) => chain.find((c) => c.id === id)!);
		const order = { red: 0, yellow: 1, untestable: 2, green: 3 };
		deps.sort((a, b) => order[a.status] - order[b.status]);
		return deps[0];
	}

	let current = target;
	while (true) {
		const weakest = findWeakestDep(current);
		if (!weakest || path.includes(weakest)) break;
		path.unshift(weakest);
		current = weakest;
	}
	return path;
}

export const chainSummary = {
	totalLinks: chain.length,
	red: chain.filter((c) => c.status === 'red').length,
	yellow: chain.filter((c) => c.status === 'yellow').length,
	green: chain.filter((c) => c.status === 'green').length,
	untestable: chain.filter((c) => c.status === 'untestable').length,
	verdict:
		'Urwins Argumentationskette ist die eines Journalisten, nicht eines Akademikers. Von 14 Gliedern ist 1 grün (die UK-Sterblichkeits- und Gesundheits-Statistiken als empirischer Ankerpunkt), 11 gelb (alle zentralen interpretativen und theoretischen Glieder — Anti-Biologismus, patriarchaler Anreiz, „Jungen weinen nicht”, toxische Männlichkeit selbst, beide Varianten aktiv/passiv, institutionelle Reproduktion, Body-Image-Kapitalismus, Homophobie-Polizierung, Beziehungsschäden, Vergewaltigungskultur), und 2 untestbar (die pragmatischen und programmatischen Lösungsvorschläge). Keine roten Glieder. ' +
		'Die empirische Grundlage ist solide an den Stellen, wo Urwin mit Statistiken arbeitet: Suizidraten, Arztbesuchsfrequenz, vorzeitige Mortalität, männliche Essstörungen, Verkehrstote. Der Samaritans-Bericht 2012 ist seine wichtigste Sekundärquelle. Die qualitative Seite ist interview-basiert (Jonny Sharples, Josh Huddleston, Christina Bentley, Huw Oliver, Emily Reynolds), reichhaltig aber nicht verallgemeinerbar. ' +
		'Die theoretische Grundlage ist bewusst dünn: Urwin ist kein Akademiker und gibt das offen zu. „Toxische Männlichkeit” als organisierendes Konzept ist popularisiert, nicht rigoros operationalisiert. Seine Unterscheidung zwischen aktiver und passiver Variante ist seine originellste analytische Prägung. ' +
		'Im Vergleich zur Bibliothek: Urwin ist das journalistisch-populäre Pendant zu Süfkes klinischer Phänomenologie und zu Böhnischs akademischer Soziologie. Er teilt mit hooks die strategische These „Das Patriarchat schadet auch den Männern”; er teilt mit Pollack und Kindlon/Thompson die klinische Intuition zur männlichen Gefühlsblindheit; er teilt mit Connell und Eliot die anti-essentialistische Grundposition; er steht explizit gegen die MRA-/mythopoetic-Männerbewegung und gegen die Sax/Gurian-Biologismus-Linie. ' +
		'Seine distinctive contribution ist die Verbindung von persönlicher Autobiographie (Vatertod, inter-generationales Trauma), britischer Popkultur-Kritik (Top Gear, Fight Club, Hooliganismus) und UK-spezifischer Statistik zu einem journalistisch zugänglichen Gesamtbild. Für Leser, die weder akademische Soziologie noch klinische Psychologie lesen möchten, ist Boys Don\'t Cry das Einstiegsbuch. Für Leser, die schon Böhnisch, Süfke oder hooks gelesen haben, liefert es die populäre UK-Working-Class-Stimme und die aktiv/passiv-Unterscheidung als analytischen Mehrwert. ' +
		'Die Schwäche des Buches ist seine Quellen-Armut und die fehlende Auseinandersetzung mit der Gegenseite (Biologie, Hirnforschung, Essentialismus). Urwin weiß das und macht daraus ein Programm: er will kein trockenes Gender-Studies-Buch schreiben, sondern einen Männer erreichenden Text. Gemessen an diesem selbstgesetzten Ziel ist das Buch erfolgreich. Als wissenschaftlicher Beitrag ist es nachrangig; als kulturpolitische Intervention wichtig.'
};
