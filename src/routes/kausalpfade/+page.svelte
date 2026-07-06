<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { chain as jvhChain } from '$lib/data/argument-chain-data';
	import { chain as wgmChain } from '$lib/data/wgm-argument-chain-data';
	import { chain as baChain } from '$lib/data/ba-argument-chain-data';
	import { chain as wbChain } from '$lib/data/wb-argument-chain-data';
	import { chain as pbChain } from '$lib/data/pb-argument-chain-data';
	import { chain as mfChain } from '$lib/data/mf-argument-chain-data';
	import { chain as wwChain } from '$lib/data/ww-argument-chain-data';
	import { chain as rcChain } from '$lib/data/rc-argument-chain-data';
	import { chain as rbChain } from '$lib/data/rb-argument-chain-data';
	import { chain as gmChain } from '$lib/data/gm-argument-chain-data';
	import { chain as wtcChain } from '$lib/data/wtc-argument-chain-data';
	import { chain as msChain } from '$lib/data/ms-argument-chain-data';
	import { chain as mseChain } from '$lib/data/mse-argument-chain-data';
	import { chain as bdcChain } from '$lib/data/bdc-argument-chain-data';
	import { chain as obmChain } from '$lib/data/obm-argument-chain-data';
	import { chain as dsChain } from '$lib/data/ds-argument-chain-data';
	import { chain as prChain } from '$lib/data/pr-argument-chain-data';
	import { chain as nbmChain } from '$lib/data/nbm-argument-chain-data';
	import {
		books,
		scienceFields,
		themeClusters,
		type BookMeta
	} from '$lib/data/cross-book-data';
	import { convergences, verdictInfo, convergenceSummary, type Verdict } from '$lib/data/convergence-data';

	const bookChains: { id: string; chain: any[] }[] = [
		{ id: 'jvh', chain: jvhChain },
		{ id: 'wgm', chain: wgmChain },
		{ id: 'ba', chain: baChain },
		{ id: 'wb', chain: wbChain },
		{ id: 'pb', chain: pbChain },
		{ id: 'mf', chain: mfChain },
		{ id: 'ww', chain: wwChain },
		{ id: 'rc', chain: rcChain },
		{ id: 'rb', chain: rbChain },
		{ id: 'gm', chain: gmChain },
		{ id: 'wtc', chain: wtcChain },
		{ id: 'ms', chain: msChain },
		{ id: 'mse', chain: mseChain },
		{ id: 'bdc', chain: bdcChain },
		{ id: 'obm', chain: obmChain },
		{ id: 'ds', chain: dsChain },
		{ id: 'pr', chain: prChain },
		{ id: 'nbm', chain: nbmChain },
	];

	function getStatus(link: any): string { return link.status ?? link.strength ?? 'yellow'; }
	function getShortLabel(link: any): string { return link.shortLabel ?? link.label ?? link.id; }
	function getDependsOn(link: any): string[] { return link.dependsOn ?? link.dependencies ?? []; }

	let graphEl: HTMLDivElement;
	let graphWrapperEl: HTMLDivElement;
	let cy: any = null;
	let selectedBooks = $state<Set<string>>(new Set(books.map(b => b.id)));
	let selectedFields = $state<Set<string>>(new Set(scienceFields.map(f => f.id)));
	let showFilters = $state(true);
	let showOverlaps = $state(true);
	let highlightShared = $state(true);
	let viewMode = $state<'overlaps' | 'chains'>('overlaps');
	let selectedNode = $state<any>(null);
	let selectedLink = $state<any>(null);
	let selectedBookId = $state<string>('');

	const statusIcons: Record<string, string> = {
		red: '\u{1F534}', yellow: '\u{1F7E1}', green: '\u{1F7E2}', untestable: '\u{1F7E3}'
	};
	const chainTypeLabels: Record<string, { label: string; color: string }> = {
		premise: { label: 'Premise', color: '#6366f1' },
		observation: { label: 'Observation', color: '#3b82f6' },
		causal: { label: 'Causal claim', color: '#f59e0b' },
		theory: { label: 'Theoretical framework', color: '#8b5cf6' },
		consequence: { label: 'Consequence', color: '#ef4444' },
		solution: { label: 'Prescriptive recommendation', color: '#10b981' }
	};

	function findFullLink(bookId: string, chainId: string): any {
		const bc = bookChains.find(b => b.id === bookId);
		if (!bc) return null;
		return bc.chain.find((l: any) => l.id === chainId) || null;
	}

	function clearHighlighting() {
		if (cy) cy.elements().removeClass('selected-node same-book overlap-peer dimmed same-book-edge active-overlap');
	}
	let tooltipContent = $state('');
	let tooltipVisible = $state(false);
	let tooltipX = $state(0);
	let tooltipY = $state(0);
	let graphReady = $state(false);

	const statusColors: Record<string, string> = {
		red: '#ef4444', yellow: '#f59e0b', green: '#10b981', untestable: '#8b5cf6'
	};
	const statusBg: Record<string, string> = {
		red: '#3b1111', yellow: '#3b2f11', green: '#113b28', untestable: '#1f113b'
	};
	const statusText: Record<string, string> = {
		red: '#fca5a5', yellow: '#fde68a', green: '#a7f3d0', untestable: '#c4b5fd'
	};
	const statusLabelsMap: Record<string, string> = {
		red: 'Weak', yellow: 'Mixed', green: 'Strong', untestable: 'Untestable'
	};

	function getBook(id: string): BookMeta { return books.find(b => b.id === id)!; }

	// Shared nodes: claims that are genuinely identical across books
	interface SharedNode {
		id: string;
		label: string;
		claim: string;
		status: 'red' | 'yellow' | 'green' | 'untestable';
		type: string;
		bookIds: string[];       // books that share this claim
		replacedIds: string[];   // original node IDs that get merged
		convergenceId?: string;  // maps to convergence-data.ts for rich audit info
	}

	const sharedNodes: SharedNode[] = [
		{
			id: 'shared--boys-emotional-reactive',
			label: 'Jungen starten emotional (mindestens) genauso expressiv',
			claim: 'Die anti-essentialistische Kern-Konvergenz: Jungen sind im Säuglings- und Kindesalter mindestens genauso emotional expressiv wie Mädchen — die Geschlechterdifferenz entsteht durch differentielle Sozialisation und kulturelle Sanktionierung, nicht durch angeborene Unterschiede. Way (2011) ergänzt den longitudinalen observational anchor: auch in der frühen/mittleren Adoleszenz (13–15) sind die Jungen emotional hochartikuliert in ihren engsten männlichen Freundschaften.',
			status: 'green',
			type: 'premise',
			bookIds: ['pb', 'rc', 'rb', 'wtc', 'jvh', 'ds', 'pr'],
			replacedIds: [
				'pb--boys-more-emotional',
				'rc--emotional-potential',
				'rb--boys-expressive',
				'wtc--boys-expressive',
				'jvh--born-same',
				'ds--boys-emotionally-articulate-early-adolescence',
				'pr--pr-geschlechterunterschied-sozial',
			],
			convergenceId: 'boys-born-more-expressive',
		},
		{
			id: 'shared--mask-boy-code',
			label: 'Die Maske / Boy Code / Identitätslüge',
			claim: 'Die stärkste Konvergenz der Bibliothek: Jungen und Männer tragen eine defensive Fassade, die emotionales Innenleben verbirgt. Rb (Pollack) nennt es „Mask of Masculinity" und „Boy Code"; wtc (hooks) gleich; mse (Süfke) „Identitätslüge"; bdc (Urwin) „Stiff Upper Lip"; jvh (Dittmann) „Pseudoresilienz"; ds (Way) liefert die DIREKTE longitudinale Beobachtung — dieselben Jungen zwischen 13 und 18 bauen die Maske live in den Interview-Transkripten auf. Upgradet die Konvergenz von klinischer Inferenz zu observational evidence.',
			status: 'yellow',
			type: 'consequence',
			bookIds: ['rb', 'wtc', 'mse', 'bdc', 'jvh', 'ds', 'pr'],
			replacedIds: [
				'rb--mask-of-masculinity',
				'wtc--mask-of-masculinity',
				'mse--identitaetsluege',
				'bdc--passive-toxicity',
				'jvh--boys-mask',
				'ds--directly-observes-mask',
				'pr--pr-weinen-kulturell-sozialisiert',
			],
			convergenceId: 'mask-boy-code',
		},
		{
			id: 'shared--hidden-male-depression',
			label: 'Verdeckte männliche Depression',
			claim: 'Männliche Depression präsentiert sich oft als Reizbarkeit, Wut, Alkoholismus, Workaholismus oder Rückzug — nicht als klassische Traurigkeit. Darum wird sie unterdiagnostiziert, und darum ist die Suizidrate 3–4× höher als bei Frauen. Terrence Reals „covert depression" als gemeinsame theoretische Quelle (Pollack, Süfke, Urwin, hooks). Way (2011) liefert den Timing-Anker: Suizidrate steigt scharf im Altersfenster (16–18), in dem ihre Panel-Jungen die engen Freundschaften verlieren.',
			status: 'yellow',
			type: 'consequence',
			bookIds: ['rb', 'rc', 'mse', 'bdc', 'ds'],
			replacedIds: [
				'rb--hidden-depression',
				'rc--hidden-depression',
				'mse--maennliche-depression',
				'bdc--mortality-stats',
				'ds--suicide-timing-correlation',
			],
			convergenceId: 'hidden-male-depression',
		},
		{
			id: 'shared--reactive-violence',
			label: 'Männliche Gewalt ist reaktiv, nicht prädatorisch',
			claim: 'Die meiste männliche Gewalt entsteht aus Scham, Hilflosigkeit oder Bedrohung der Identität — nicht aus biologischem Aggressionsdrang. Testosteron amplifiziert, triggert aber nicht. Klinische Konvergenz zwischen Pollack, Kindlon/Thompson, Böhnisch, Süfke (Hilflosigkeit als Kerngefühl), hooks („disconnection is masculinity") und Connell (Gewalt als Gender-Order-Policing). Reeves nuanciert mit Carole Hoovens Mittelposition.',
			status: 'green',
			type: 'causal',
			bookIds: ['rc', 'rb', 'ms', 'mse', 'wtc', 'gm', 'pr'],
			replacedIds: [
				'rc--reactive-violence',
				'rb--reactive-violence',
				'ms--gewalt-als-hilflosigkeit',
				'mse--hilflosigkeit-kern',
				'wtc--disconnection-is-masc',
				'gm--crisis-tendencies',
				'pr--pr-bestrafung-schadet',
			],
			convergenceId: 'violence-reactive-not-testosterone',
		},
		{
			id: 'shared--father-hunger',
			label: 'Vater-Hunger / Vater-Entkopplung',
			claim: 'Abwesende oder emotional unverfügbare Väter produzieren die nächste Generation desselben Musters. Klinische Konvergenz zwischen Pollack (Father hunger, Glueck Harvard-Studie), Kindlon/Thompson (father-son gulf), Gurian (fathers essential), Sax (fatherhood degraded), Böhnisch (Eventvater), Urwin (drei-Generationen-Trauma), hooks (patriarchal fathers) und Reeves (Dad Deficit + Direct Dads + Eggebeen-Daten).',
			status: 'yellow',
			type: 'causal',
			bookIds: ['rb', 'rc', 'wb', 'ba', 'ms', 'bdc', 'obm', 'nbm'],
			replacedIds: [
				'rb--father-disengagement',
				'rc--father-son-gulf',
				'wb--fathers-essential',
				'ba--fatherhood-degraded',
				'ms--event-father',
				'bdc--relationship-damage',
				'obm--dad-deficit',
			],
			convergenceId: 'father-hunger',
		},
		{
			id: 'shared--friendship-crisis',
			label: 'Jungen-Freundschafts-Krise (13→18)',
			claim: 'Boys describe deep, emotionally articulate friendships at 13–15; the same boys lose them by 16–18. Dittmann zitiert Way direkt; Pollack adoptiert Sullivans „chumships" mit derselben Altersdynamik; Way liefert die longitudinale Primärquelle mit hunderten Interview-Transkripten; Raising Cain beschreibt „emotional isolation" als „rite of passage" für dieselbe Altersgruppe. Galloway (2025) liefert die ERWACHSENEN-Fortsetzung derselben Kurve: Friendship Recession (Cox 2021: keine engen Freunde 3%→12-15%), Loneliness-Mortalität (Holt-Lunstad), eigene „Scott Island"-Dekade — plus Gegenprogramm (Friendship-Cold-Calling, „go first").',
			status: 'green',
			type: 'observation',
			bookIds: ['ds', 'jvh', 'rc', 'pr', 'nbm'],
			replacedIds: [
				'ds--friendship-loss-late-adolescence',
				'jvh--friendship-crisis',
				'rc--emotional-isolation',
				'pr--pr-freundschaft-qualitaet',
				'nbm--loneliness-friendship',
			],
			convergenceId: 'boy-friendship-crisis',
		},

		// ── Biology cluster shared nodes ──────────────────────────
		{
			id: 'shared--aggression-innate',
			label: 'Aggression: biologisch-dimorphe Grundlage',
			claim: 'Geschlechterdifferenzen in physischer Aggression haben eine bedeutende biologisch-evolutionäre Grundlage. Jungen zeigen ~20× mehr physische Aggression; Raufkampf-Spiel ist Primaten-universal und geschlechtsdifferent. Male-male-Kompetition hat Körperbau, Armierungen und Verhaltensstrategien geformt. Benenson dokumentiert Kriegs-Adaptationen (coalitional fighting), Geary leitet es aus sexueller Selektion ab, Sax argumentiert, dass Unterdrückung von Raufkampf-Spiel echte Gewalt steigern kann.',
			status: 'green',
			type: 'observation',
			bookIds: ['wgm', 'mf', 'ww'],
			replacedIds: [
				'wgm--aggression',
				'mf--male-competition',
				'ww--boys-play-fighting',
			],
			convergenceId: 'bio-aggression-innate',
		},
		{
			id: 'shared--risk-taking-biological',
			label: 'Risikobereitschaft: biologisch männlich-typisch',
			claim: 'Männliche Risikobereitschaft hat biologische Wurzeln. Sax: Jungen überschätzen ihre Fähigkeiten systematisch (Primaten-Evidenz). Geary: das kompetitivere Geschlecht entwickelt sich langsamer und spielt riskanter als Vorbereitung auf erwachsene Kompetition. Benenson: Weibchen zeigen von Geburt an größere Furcht und Risikoaversion (Meta-Analyse von 150 Studien). Die Differenz ist kulturübergreifend und beginnt im Säuglingsalter.',
			status: 'green',
			type: 'observation',
			bookIds: ['wgm', 'mf', 'ww'],
			replacedIds: [
				'wgm--risk-taking',
				'mf--life-history',
				'ww--females-fear-risk',
			],
			convergenceId: 'bio-risk-taking',
		},
		{
			id: 'shared--group-dynamics-dimorphic',
			label: 'Gruppen-Dynamik: evolutionär geschlechtsdifferent',
			claim: 'Männliche und weibliche Gruppendynamik unterscheidet sich fundamental und hat evolutionäre Wurzeln. Sax: Männerfreundschaften „shoulder-to-shoulder" (gemeinsame Aktivität), Frauenfreundschaften „face-to-face" (geteilte Gefühle). Geary: Männliche Koalitions-Kompetition und Geschlechts-Segregation. Benenson: Männchen bilden größere, hierarchischere Gruppen mit flexiblen Dominanz-Hierarchien; Weibchen bevorzugen dyadische Intimität und erzwingen Gleichheit.',
			status: 'green',
			type: 'observation',
			bookIds: ['wgm', 'mf', 'ww'],
			replacedIds: [
				'wgm--friendships-differ',
				'mf--sex-segregation',
				'ww--males-larger-groups',
			],
			convergenceId: 'bio-group-dynamics',
		},

		// ── Empirically-anchored shared nodes ──────────────────────
		{
			id: 'shared--work-identity-crisis',
			label: 'Arbeit als männliche Identität — und deren Erosion',
			claim: 'Moderne männliche Identität ist an ökonomische Produktivität geknüpft. Die Erosion männlicher Arbeitsmöglichkeiten (seit den 1970ern) erzeugt eine Identitätskrise, die sich in „deaths of despair" (Case & Deaton), Vaterentkopplung und psychischer Decompensation niederschlägt. Böhnisch (abstrakte Arbeiterform), Süfke/hooks (Arbeit als Flucht), Sax (failure-to-launch), Reeves (labor decline + Dad Deficit). Empirisch verankert durch Case & Deaton 2015/2020/2022, Carbone & Huntington 2024, Killewald 2016, Ruggles 2015.',
			status: 'yellow',
			type: 'causal',
			bookIds: ['ba', 'ms', 'obm', 'wtc', 'nbm'],
			replacedIds: [
				'ba--failure-to-launch',
				'ms--abstract-worker',
				'obm--labor-decline',
				'wtc--work-as-flight',
			],
			convergenceId: 'work-identity-crisis',
		},
		{
			id: 'shared--schools-fail-boys',
			label: 'Schulen scheitern an Jungen',
			claim: 'Das Bildungssystem benachteiligt Jungen strukturell: die pädagogische Umgebung favorisiert frühere weibliche verbale Reife, pathologisiert männliche Aktivität als ADHS, und der Schreibgap ist in jeder Rassen- und Einkommensgruppe ~15 NAEP-Punkte breit. Der Männeranteil an Hochschulabsolventen ist von 57,7% (1970) auf 43,1% (2014) gefallen. Reeves ergänzt die Brain-Timing-Erklärung (präfrontaler Kortex ~2 Jahre später reif bei Jungen). Galloway (2025) übernimmt die Reeves-Erklärung eins zu eins — PFC-Timing, ADHD-Gap, Missing Misters — und illustriert sie autobiografisch (Abstufung von Calculus zu Algebra 1 nach dem Weggang des Vaters).',
			status: 'green',
			type: 'observation',
			bookIds: ['ba', 'rc', 'rb', 'obm', 'pr', 'nbm'],
			replacedIds: [
				'ba--education-gap',
				'rc--school-mismatch',
				'rb--school-boy-failure',
				'obm--education-gap',
				'nbm--pfc-timing',
			],
			convergenceId: 'schools-fail-boys',
		},
		{
			id: 'shared--homophobia-policing',
			label: 'Homophobie als Geschlechternorm-Policing',
			claim: 'Homophobie funktioniert primär als Mechanismus zur Durchsetzung von Geschlechternormen — nicht als Hass auf Homosexualität. Way: die kulturelle Gleichsetzung von Intimität mit „gay" zerstört Jungen-Freundschaften (direkt longitudinal beobachtet). Urwin: homophobes Verhalten beginnt als Bestrafung für Abweichungen von Männlichkeitsnormen. Connell: homophobe Gewalt poliziert hegemoniale Männlichkeit. hooks: Homophobie als Teil der patriarchalen Sozialisation.',
			status: 'yellow',
			type: 'causal',
			bookIds: ['ds', 'bdc', 'wtc'],
			replacedIds: [
				'ds--homophobia-mechanism',
				'bdc--homophobia-policing',
				'wtc--normal-traumatization',
			],
			convergenceId: 'homophobia-gender-policing',
		},
		{
			id: 'shared--differential-mirroring',
			label: 'Differentielle Emotions-Spiegelung bei Jungen',
			claim: 'Der Mechanismus, durch den emotionale Suppression bei Jungen ENTSTEHT: Eltern benennen bei Jungen weniger Gefühle, interpretieren denselben Emotionsausdruck anders (Baby-X-Experimente), verhängen härtere Disziplin, und der Satz „Jungen weinen nicht" wird verankert ohne Alternative. Süfke: mangelnde Spiegelung als Primärmechanismus der Alexithymie. Pollack: shame-hardening als Enforcement-Mechanismus des Boy Code.',
			status: 'green',
			type: 'causal',
			bookIds: ['mse', 'rc', 'rb', 'bdc'],
			replacedIds: [
				'mse--mangelnde-spiegelung',
				'rc--harsh-discipline',
				'rb--shame-hardening',
				'bdc--boys-dont-cry',
			],
			convergenceId: 'differential-emotional-mirroring',
		},

		// ── Prüfer-anchored shared nodes (parenting-effect cluster) ──
		{
			id: 'shared--parenting-effect-limited',
			label: 'Elterlicher Einflussspielraum ist begrenzt',
			claim: 'Behavior Genetics (Polderman 2015 Meta über 50 Jahre Zwillingsforschung) und Harris (1998) Group Socialization Theory konvergieren: Shared Environment (Eltern-Effekt) erklärt nur ~0-10% der Persönlichkeitsvarianz; Heritabilität ~30-50%; der Rest ist Peers/Zufall. Ab der Adoleszenz dominieren Peers. Prüfer macht dies zum expliziten Rahmen (L06/L07/L11/L34); Reeves (OBM) kritisiert den individualistischen Reflex der klinischen Konvergenz; Dittmann dagegen erwartet transformatorische Wirkung von gender-bewusster Erziehung — dieser Knoten relativiert die Wirksamkeitserwartung ohne Dittmanns Empfehlungen zu entwerten.',
			status: 'yellow',
			type: 'causal',
			bookIds: ['pr', 'jvh'],
			replacedIds: [
				'pr--pr-kind-praegt-eltern',
				'pr--pr-kindheit-nicht-schicksal',
				'pr--pr-iq-begrenzt',
				'jvh--parenting-can-fix',
			],
			convergenceId: 'parenting-effect-size-limited',
		},
		{
			id: 'shared--good-enough-parenting',
			label: '„Good enough parenting" — Verlässlichkeit schlägt Perfektion',
			claim: 'Winnicotts „good enough mother" und Bettelheims „good enough parent" als empirisch bester Rahmen: nicht-perfekte, aber verlässliche Reaktion; ~50% prompte Reaktion reicht für sichere Bindung (Woodhouse 2020 Secure Base Provision). Eltern-Perfektionismus führt zu Burnout (Roskam 42-Länder-Studie) und Kind-Angst (Lilley 2020 Meta). Prüfer ist der primäre Anker; Reeves (OBM) unterstützt die Entpathologisierung normaler Familien implizit; Dittmann steht als Kontrast mit ihrer transformations-orientierten Erwartung.',
			status: 'yellow',
			type: 'solution',
			bookIds: ['pr'],
			replacedIds: [
				'pr--pr-good-enough-parenting',
				'pr--pr-autonomie-foerdert',
			],
			convergenceId: 'good-enough-parenting',
		},
		{
			id: 'shared--behavior-genetics',
			label: 'Behavior Genetics: Gene + Peers > Shared Environment',
			claim: 'Polderman 2015 Nature Genetics Meta-Meta-Analyse über 50 Jahre Zwillingsforschung (14,5 Mio. Zwillingspaare): durchschnittliche Heritabilität ~49%, Shared Environment klein. Turkheimers „Three Laws of Behavior Genetics" sind Konsens. Prüfer macht dies zum expliziten Rahmen (L19/L34, Zitat Kap. 18: „Eltern schaffen nicht die Persönlichkeit ihrer Kinder"); er zitiert Plomin/Polderman als Kern-Evidenz gegen die populäre „Eltern formen den Charakter"-Erwartung. Stützt extern, was der JVH-Audit zu `born-same` bereits markiert.',
			status: 'green',
			type: 'premise',
			bookIds: ['pr'],
			replacedIds: [
				'pr--pr-erziehen-ist-entdecken',
			],
			convergenceId: 'behavior-genetics-dominates',
		},

		// ── Galloway (Notes on Being a Man) overlap nodes ──────────
		{
			id: 'shared--dopamine-economy',
			label: 'Dopamin-Ökonomie kapert junge Männer',
			claim: 'Sax (2007) und Galloway (2025) erzählen dieselbe Kausalstory über zwei Produktgenerationen: Dopamin-Produkte (Videospiele bei Sax; Social Media, Gaming, Sports Betting, Porn, Fast Food bei Galloway) kapern Motivation und Zeitbudget junger Männer mit unreifem PFC — „the world’s most valuable resource isn’t data, oil, or rare earth metals; it’s dopa.“ Dittmann ergänzt die algorithmische Radikalisierung, Prüfer die Moderation (Haidt vs. Orben). Deskriptiv real, Kausalgewicht umstritten (Odgers, Przybylski).',
			status: 'yellow',
			type: 'causal',
			bookIds: ['ba', 'nbm', 'jvh', 'pr'],
			replacedIds: [
				'nbm--addiction-economy',
			],
			convergenceId: 'dopamine-economy',
		},
		{
			id: 'shared--porn-replaces-mating',
			label: 'Porn ersetzt den Mating-Antrieb',
			claim: 'Fast deckungsgleiche Kausalthese bei Sax (2007: Porn konditioniert junge Männer weg von realen Partnerinnen) und Galloway (2025: „Porn is a masculinity killer“ — er eliminiert das Rejection-Training, Prognose „Homo solo“). Dittmann liefert die pädagogische Antwort (Porno-Kompetenz, Consent). Mechanismus plausibel (Supernormal-Stimulus), Längsschnitt-Kausalevidenz fehlt; Grubbs’ Moral-Incongruence-Befunde unterlaufen die Addiction-Rahmung.',
			status: 'yellow',
			type: 'causal',
			bookIds: ['ba', 'nbm', 'jvh'],
			replacedIds: [
				'ba--pornography-replacing',
				'nbm--porn-mating-crisis',
			],
			convergenceId: 'porn-replaces-mating',
		},
		{
			id: 'shared--prosocial-masculinity',
			label: 'Prosoziale Männlichkeit als Zielbild',
			claim: 'Die lagerübergreifendste normative Konvergenz des Korpus: Reeves („prosocial masculinity for a postfeminist world“), Galloway („aspirational masculinity“ / Surplus Value — explizit von Reeves übernommen), hooks („feminist masculinity“, Liebe als Kern), Dittmann („Caring Masculinity“) und Süfke (emotionale Selbst-Zugänglichkeit) beschreiben mit verschiedenem Vokabular dasselbe Zielbild: geben statt nehmen, schützen statt dominieren, fühlen statt panzern. Nicht falsifizierbar — aber dass Business-Selbsthilfe und Schwarzer Feminismus hier deckungsgleich sind, ist der interessanteste Einzelbefund des Vergleichs.',
			status: 'untestable',
			type: 'solution',
			bookIds: ['obm', 'nbm', 'wtc', 'jvh', 'mse'],
			replacedIds: [
				'obm--prosocial-masculinity',
				'nbm--aspirational-masculinity',
				'jvh--caring-masculinity',
			],
			convergenceId: 'prosocial-masculinity-vision',
		},
	];

	const replacedNodeMap = new Map<string, SharedNode>();
	for (const sn of sharedNodes) {
		for (const rid of sn.replacedIds) replacedNodeMap.set(rid, sn);
	}

	function buildOverlapEdges(): { source: string; target: string; theme: string }[] {
		const result: { source: string; target: string; theme: string }[] = [];
		for (const theme of themeClusters) {
			if (!theme.fields.some(f => selectedFields.has(f))) continue;
			const claims = theme.claims.filter(c => selectedBooks.has(c.bookId));
			for (let i = 0; i < claims.length; i++) {
				for (let j = i + 1; j < claims.length; j++) {
					if (claims[i].bookId !== claims[j].bookId) {
						result.push({
							source: `${claims[i].bookId}--${claims[i].chainId}`,
							target: `${claims[j].bookId}--${claims[j].chainId}`,
							theme: theme.name
						});
					}
				}
			}
		}
		return result;
	}

	function buildLayoutElements() {
		const nodes: any[] = [];
		const edges: any[] = [];
		const addedSharedIds = new Set<string>();

		for (const { id: bookId, chain } of bookChains) {
			if (!selectedBooks.has(bookId)) continue;
			const book = getBook(bookId);

			for (const link of chain) {
				const status = getStatus(link);
				const originalId = `${bookId}--${link.id}`;
				const shared = replacedNodeMap.get(originalId);

				if (shared) {
					// This node is merged — add shared node once
					if (!addedSharedIds.has(shared.id)) {
						const sharedBookColors = shared.bookIds.map(bid => getBook(bid).color);
						addedSharedIds.add(shared.id);
						nodes.push({
							data: {
								id: shared.id,
								label: shared.label,
								bookId: shared.bookIds.join('+'),
								chainId: shared.id,
								status: shared.status,
								type: shared.type,
								claim: shared.claim,
								bookColor: '#ffffff',
								bookTitle: shared.bookIds.map(bid => getBook(bid).shortTitle).join(' + '),
								borderColor: statusColors[shared.status] || '#64748b',
								bgColor: statusBg[shared.status] || '#1e293b',
								textColor: '#ffffff',
								isShared: true,
								sharedBookIds: shared.bookIds.join(','),
								sharedBookColors: sharedBookColors.join(','),
								convergenceId: shared.convergenceId || '',
							}
						});
					}
					// Redirect edges to the shared node
					for (const depId of getDependsOn(link)) {
						const depOriginal = `${bookId}--${depId}`;
						const depShared = replacedNodeMap.get(depOriginal);
						const sourceId = depShared ? depShared.id : depOriginal;
						if (chain.some((l: any) => l.id === depId)) {
							const edgeId = `e-${sourceId}-${shared.id}-${bookId}`;
							if (!edges.some(e => e.data.id === edgeId)) {
								edges.push({
									data: { id: edgeId, source: sourceId, target: shared.id, bookColor: book.color, isOverlap: false, isSharedEdge: true }
								});
							}
						}
					}
				} else {
					// Normal node
					nodes.push({
						data: {
							id: originalId,
							label: getShortLabel(link),
							bookId,
							chainId: link.id,
							status,
							type: link.type,
							claim: link.claim,
							bookColor: book.color,
							bookTitle: book.shortTitle,
							borderColor: statusColors[status] || '#64748b',
							bgColor: statusBg[status] || '#1e293b',
							textColor: statusText[status] || '#e2e8f0',
						}
					});

					for (const depId of getDependsOn(link)) {
						const depOriginal = `${bookId}--${depId}`;
						const depShared = replacedNodeMap.get(depOriginal);
						const sourceId = depShared ? depShared.id : depOriginal;
						if (chain.some((l: any) => l.id === depId)) {
							edges.push({
								data: {
									id: `e-${sourceId}-${originalId}`,
									source: sourceId,
									target: originalId,
									bookColor: book.color,
									isOverlap: false
								}
							});
						}
					}
				}
			}
		}

		// Also redirect edges that DEPEND ON replaced nodes, and mark edges touching shared nodes
		const sharedIds = new Set(sharedNodes.map(s => s.id));
		for (const edge of edges) {
			const srcShared = replacedNodeMap.get(edge.data.source);
			if (srcShared) edge.data.source = srcShared.id;
			const tgtShared = replacedNodeMap.get(edge.data.target);
			if (tgtShared) edge.data.target = tgtShared.id;
			if (sharedIds.has(edge.data.source) || sharedIds.has(edge.data.target)) {
				edge.data.isSharedEdge = true;
			}
		}

		return { nodes, edges };
	}

	let cytoscapeLib: any = null;

	async function createGraph() {
		if (!graphEl) return;
		if (cy) { cy.destroy(); cy = null; }

		if (!cytoscapeLib) {
			cytoscapeLib = (await import('cytoscape')).default;
		}

		const { nodes, edges } = buildLayoutElements();

		// Book grid positions (4 cols x 4 rows, generous spacing).
		// Layout intent: top rows = biology/evo; middle = mixed; bottom = clinical/social/longitudinal.
		// Books with most cross-convergence (rb, rc, wtc, mse, bdc, ms, ds) clustered in bottom half.
		const COL_W = 1800;
		const ROW_H = 1600;
		const bookCenters: Record<string, { x: number; y: number }> = {
			// Row 1 — biology / evolutionary
			'mf':  { x: 0 * COL_W, y: 0 * ROW_H },
			'ww':  { x: 1 * COL_W, y: 0 * ROW_H },
			'wb':  { x: 2 * COL_W, y: 0 * ROW_H },
			'pb':  { x: 3 * COL_W, y: 0 * ROW_H },
			// Row 2 — medical / popular / sociology
			'wgm': { x: 0 * COL_W, y: 1 * ROW_H },
			'ba':  { x: 1 * COL_W, y: 1 * ROW_H },
			'jvh': { x: 2 * COL_W, y: 1 * ROW_H },
			'gm':  { x: 3 * COL_W, y: 1 * ROW_H },
			// Row 3 — clinical core + policy
			'obm': { x: 0 * COL_W, y: 2 * ROW_H },
			'rc':  { x: 1 * COL_W, y: 2 * ROW_H },
			'rb':  { x: 2 * COL_W, y: 2 * ROW_H },
			'wtc': { x: 3 * COL_W, y: 2 * ROW_H },
			// Row 4 — german clinical / longitudinal
			'ms':  { x: 0 * COL_W, y: 3 * ROW_H },
			'mse': { x: 1 * COL_W, y: 3 * ROW_H },
			'bdc': { x: 2 * COL_W, y: 3 * ROW_H },
			'ds':  { x: 3 * COL_W, y: 3 * ROW_H },
			// Row 5 — parenting science / memoir-selfhelp (later additions)
			'pr':  { x: 1 * COL_W, y: 4 * ROW_H },
			'nbm': { x: 2 * COL_W, y: 4 * ROW_H },
		};

		// Step 1: Create a hidden graph to run dagre per-book
		const dagre = (await import('cytoscape-dagre')).default;
		try { cytoscapeLib.use(dagre); } catch (_) {}

		const positionMap = new Map<string, { x: number; y: number }>();

		// Run dagre layout for each book separately
		const activeBookIds = [...new Set(nodes.map((n: any) => n.data.bookId))];
		for (const bid of activeBookIds) {
			// For shared nodes, pick the first book
			const bookNodes = nodes.filter((n: any) => {
				if (n.data.isShared) return n.data.sharedBookIds.split(',')[0] === bid;
				return n.data.bookId === bid;
			});
			const bookNodeIds = new Set(bookNodes.map((n: any) => n.data.id));
			const bookEdges = edges.filter((e: any) =>
				bookNodeIds.has(e.data.source) && bookNodeIds.has(e.data.target)
			);

			if (bookNodes.length === 0) continue;

			const tempCy = cytoscapeLib({
				elements: [...bookNodes, ...bookEdges],
				headless: true,
				styleEnabled: false,
			});
			tempCy.layout({
				name: 'dagre',
				rankDir: 'TB',
				nodeSep: 160,
				rankSep: 120,
				edgeSep: 60,
				padding: 0,
			} as any).run();

			// Get the center of the first real book in this cluster
			const realBid = bid.includes('+') ? bid.split('+')[0] : bid;
			const center = bookCenters[realBid] || { x: 2000, y: 2000 };

			// Get bounding box of dagre result to center it
			const bb = tempCy.nodes().boundingBox();
			const bbCx = (bb.x1 + bb.x2) / 2;
			const bbCy = (bb.y1 + bb.y2) / 2;

			tempCy.nodes().forEach((n: any) => {
				const pos = n.position();
				positionMap.set(n.id(), {
					x: center.x + (pos.x - bbCx),
					y: center.y + (pos.y - bbCy),
				});
			});
			tempCy.destroy();
		}

		// Override shared-node positions: place them at the centroid of contributing book centers
		for (const node of nodes) {
			if (node.data.isShared) {
				const bookIds: string[] = node.data.sharedBookIds.split(',');
				const centers = bookIds.map((bid: string) => bookCenters[bid]).filter(Boolean);
				if (centers.length > 0) {
					const cx = centers.reduce((s: number, c: any) => s + c.x, 0) / centers.length;
					const cy2 = centers.reduce((s: number, c: any) => s + c.y, 0) / centers.length;
					positionMap.set(node.data.id, { x: cx, y: cy2 });
				}
			}
		}

		// Assign positions to all nodes
		for (const node of nodes) {
			const pos = positionMap.get(node.data.id);
			if (pos) {
				node.position = pos;
			}
		}

		// Create the real graph with preset layout (positions already assigned)
		cy = cytoscapeLib({
			container: graphEl,
			elements: [...nodes, ...edges],
			layout: { name: 'preset' },
			style: [
				{
					selector: 'node[!isLabel]',
					style: {
						'label': 'data(label)',
						'text-valign': 'center' as any,
						'text-halign': 'center' as any,
						'color': 'data(textColor)',
						'font-size': '10px',
						'font-weight': 600,
						'font-family': 'Inter, sans-serif',
						'background-color': 'data(bgColor)',
						'border-width': 2.5,
						'border-color': 'data(borderColor)',
						'shape': 'roundrectangle' as any,
						'width': 160,
						'height': 36,
						'text-wrap': 'wrap' as any,
						'text-max-width': '140px' as any,
						'cursor': 'pointer' as any,
					}
				},
				{
					selector: 'node[?isShared]',
					style: {
						'label': 'data(label)',
						'text-valign': 'center' as any,
						'text-halign': 'center' as any,
						'color': '#e2e8f0',
						'font-size': '10px',
						'font-weight': 600,
						'font-family': 'Inter, sans-serif',
						'background-color': '#1e293b',
						'border-width': 2,
						'border-color': '#64748b',
						'shape': 'roundrectangle' as any,
						'width': 160,
						'height': 36,
						'text-wrap': 'wrap' as any,
						'text-max-width': '140px' as any,
						'cursor': 'pointer' as any,
					} as any
				},
				{
					selector: 'node.shared-on',
					style: {
						'color': '#0f172a',
						'font-size': '15px',
						'font-weight': 800,
						'background-color': '#fbbf24',
						'background-opacity': 1,
						'border-width': 6,
						'border-color': '#fef3c7',
						'width': 280,
						'height': 72,
						'text-max-width': '250px' as any,
						'text-outline-color': '#fbbf24',
						'text-outline-width': 2,
						'shadow-blur': 40,
						'shadow-color': '#fbbf24',
						'shadow-opacity': 1,
						'shadow-offset-x': 0,
						'shadow-offset-y': 0,
						'z-index': 500,
					} as any
				},
				{
					selector: 'edge.shared-on-edge',
					style: {
						'width': 6,
						'line-color': '#fbbf24',
						'line-opacity': 0.9,
						'target-arrow-color': '#fbbf24',
						'target-arrow-shape': 'triangle' as any,
						'arrow-scale': 1.4,
						'curve-style': 'bezier' as any,
						'z-index': 400,
					} as any
				},
				{
					selector: 'node[?isLabel]',
					style: {
						'label': 'data(label)',
						'text-valign': 'center' as any,
						'text-halign': 'center' as any,
						'color': 'data(bookColor)',
						'font-size': '180px',
						'font-weight': 900,
						'font-family': 'Inter, sans-serif',
						'background-opacity': 0,
						'border-width': 0,
						'width': 1,
						'height': 1,
						'text-opacity': 0.5,
						'text-outline-color': '#0f172a',
						'text-outline-width': 4,
						'text-outline-opacity': 1,
						'z-index': 0,
						'events': 'no' as any,
					}
				},
				{
					selector: 'edge[!isOverlap]',
					style: {
						'width': 1.5,
						'line-color': 'data(bookColor)',
						'line-opacity': 0.35,
						'target-arrow-color': 'data(bookColor)',
						'target-arrow-shape': 'triangle' as any,
						'arrow-scale': 0.7,
						'curve-style': 'bezier' as any,
					}
				},
				{
					selector: 'edge[?isOverlap]',
					style: {
						'width': 1.5,
						'line-color': '#60a5fa',
						'line-opacity': 0.3,
						'line-style': 'dashed' as any,
						'target-arrow-shape': 'none' as any,
						'curve-style': 'bezier' as any,
					}
				},
				{
					selector: 'node.highlighted',
					style: {
						'border-width': 5,
						'z-index': 999,
					}
				},
				// Clicked node
				{
					selector: 'node.selected-node',
					style: {
						'border-width': 5,
						'border-color': '#ffffff',
						'z-index': 1000,
					}
				},
				// Same book as clicked
				{
					selector: 'node.same-book',
					style: {
						'opacity': 1,
						'z-index': 10,
					}
				},
				// Overlap-connected nodes from other books
				{
					selector: 'node.overlap-peer',
					style: {
						'opacity': 1,
						'border-width': 4,
						'z-index': 50,
						'shadow-blur': 12,
						'shadow-color': '#60a5fa',
						'shadow-opacity': 0.6,
						'shadow-offset-x': 0,
						'shadow-offset-y': 0,
					} as any
				},
				// Dimmed (everything else when a node is selected)
				{
					selector: 'node.dimmed',
					style: {
						'opacity': 0.12,
						'shadow-opacity': 0,
						'z-index': 1,
					} as any
				},
				{
					selector: 'edge.dimmed',
					style: {
						'opacity': 0.05,
					}
				},
				// Active overlap edges (connected to selected node)
				{
					selector: 'edge.active-overlap',
					style: {
						'width': 3,
						'line-color': '#60a5fa',
						'line-opacity': 0.8,
						'z-index': 100,
					}
				},
				// Active intra-book edges
				{
					selector: 'edge.same-book-edge',
					style: {
						'opacity': 1,
						'z-index': 10,
					}
				}
			],
			userZoomingEnabled: true,
			userPanningEnabled: true,
			boxSelectionEnabled: false,
			minZoom: 0.05,
			maxZoom: 3,
		});

		// AFTER layout: add floating book labels at centroid of each cluster
		for (const { id: bookId } of bookChains) {
			if (!selectedBooks.has(bookId)) continue;
			const book = getBook(bookId);
			const bookNodes = cy.nodes(`[bookId = "${bookId}"]`);
			if (bookNodes.length === 0) continue;
			const bb = bookNodes.boundingBox();
			const cx = (bb.x1 + bb.x2) / 2;
			const cy2 = (bb.y1 + bb.y2) / 2;
			cy.add({
				data: {
					id: `label-${bookId}`,
					label: book.shortTitle,
					bookColor: book.color,
					isLabel: true,
				},
				position: { x: cx, y: cy2 },
				locked: false,
				grabbable: false,
				selectable: false,
			});
		}

		// AFTER layout: always add overlap edges (toggle visibility via mode)
		if (showOverlaps) {
			const overlaps = buildOverlapEdges();
			const nodeIds = new Set(nodes.map((n: any) => n.data.id));
			const seen = new Set<string>();
			for (const ov of overlaps) {
				// Redirect endpoints that were merged into a shared node (instead of dropping the edge)
				const srcShared = replacedNodeMap.get(ov.source);
				const tgtShared = replacedNodeMap.get(ov.target);
				const source = srcShared ? srcShared.id : ov.source;
				const target = tgtShared ? tgtShared.id : ov.target;
				// Skip if both claims were merged into the SAME shared node (overlap already expressed by the merge)
				if (source === target) continue;
				if (!nodeIds.has(source) || !nodeIds.has(target)) continue;
				// Unordered dedup key so a↔b and b↔a collapse
				const key = source < target ? `${source}||${target}` : `${target}||${source}`;
				if (seen.has(key)) continue;
				seen.add(key);
				cy.add({
					data: {
						id: `ov-${seen.size}`,
						source,
						target,
						theme: ov.theme,
						isOverlap: true,
					}
				});
			}
		}

		// Apply shared highlight classes based on current toggle state
		applySharedHighlight();

		// Zoom handler: fade labels when zoomed in, show when zoomed out
		function updateLabelOpacity() {
			const zoom = cy.zoom();
			let opacity = 0;
			if (zoom < 0.3) {
				opacity = 0.5;
			} else if (zoom < 0.6) {
				opacity = 0.5 * (1 - (zoom - 0.3) / 0.3);
			}
			cy.nodes('[?isLabel]').style('text-opacity', opacity);
		}
		cy.on('zoom', updateLabelOpacity);
		updateLabelOpacity();

		// Events — only on non-label nodes
		cy.on('mouseover', 'node[!isLabel]', (evt: any) => {
			const node = evt.target;
			node.addClass('highlighted');
			const e = evt.originalEvent;
			const isShared = !!node.data('isShared');
			const bookLabel = isShared
				? `<span style="color:#fbbf24;font-weight:800">★ Shared: ${node.data('bookTitle')}</span>`
				: (() => { const book = getBook(node.data('bookId')); return `<span style="color:${book.color};font-weight:800">${book.shortTitle}</span>`; })();
			const ovCount = cy.edges('[?isOverlap]').filter((ed: any) =>
				ed.source().id() === node.id() || ed.target().id() === node.id()
			).length;
			const ovText = ovCount > 0 ? `<br/><span style="color:#60a5fa">${ovCount} overlap(s) with other books</span>` : '';
			tooltipContent = `${bookLabel}<br/><strong>${node.data('label')}</strong><br/><span style="color:${statusColors[node.data('status')]};font-weight:700">${statusLabelsMap[node.data('status')]}</span> &middot; ${node.data('type')}${ovText}`;
			tooltipX = e.clientX;
			tooltipY = e.clientY - 12;
			tooltipVisible = true;
		});

		cy.on('mouseout', 'node[!isLabel]', (evt: any) => {
			evt.target.removeClass('highlighted');
			tooltipVisible = false;
		});

		cy.on('tap', 'node[!isLabel]', (evt: any) => {
			const node = evt.target;
			const d = node.data();
			selectedNode = d;
			selectedBookId = d.bookId;
			if (d.isShared) {
				selectedLink = { id: d.id, shortLabel: d.label, claim: d.claim, status: d.status, type: d.type, isShared: true, sharedBookIds: d.sharedBookIds, convergenceId: d.convergenceId };
			} else {
				selectedLink = findFullLink(d.bookId, d.chainId);
			}

			clearHighlighting();
			node.addClass('selected-node');

			// Same-book nodes & edges always highlighted
			// For shared nodes, highlight ALL books they belong to
			const bookIds = d.isShared ? d.sharedBookIds.split(',') : [d.bookId];
			const sameBookNodes = cy.nodes('[!isLabel]').filter((n: any) => {
				const nBookId = n.data('bookId');
				const nSharedIds = n.data('sharedBookIds');
				return bookIds.some((bid: string) => nBookId === bid || (nSharedIds && nSharedIds.split(',').includes(bid)));
			});
			sameBookNodes.addClass('same-book');

			const sameBookEdges = cy.edges().filter((e: any) => {
				if (e.data('isOverlap')) return false;
				const src = e.source().data('bookId');
				const tgt = e.target().data('bookId');
				const srcShared = e.source().data('sharedBookIds')?.split(',') || [];
				const tgtShared = e.target().data('sharedBookIds')?.split(',') || [];
				return bookIds.some((bid: string) =>
					(src === bid || srcShared.includes(bid)) && (tgt === bid || tgtShared.includes(bid))
				);
			});
			sameBookEdges.addClass('same-book-edge');

			if (viewMode === 'overlaps') {
				// Show overlap connections from this specific node
				const overlapEdges = cy.edges('[?isOverlap]').filter((e: any) => {
					return e.source().id() === node.id() || e.target().id() === node.id();
				});
				overlapEdges.addClass('active-overlap');

				const overlapPeerIds = new Set<string>();
				overlapEdges.forEach((e: any) => {
					const otherId = e.source().id() === node.id() ? e.target().id() : e.source().id();
					overlapPeerIds.add(otherId);
				});
				overlapPeerIds.forEach(id => {
					cy.getElementById(id).addClass('overlap-peer');
				});

				// Dim everything else
				cy.nodes('[!isLabel]').filter((n: any) => {
					return !n.hasClass('same-book') && !n.hasClass('overlap-peer') && !n.hasClass('selected-node');
				}).addClass('dimmed');
				cy.edges().filter((e: any) => {
					return !e.hasClass('same-book-edge') && !e.hasClass('active-overlap');
				}).addClass('dimmed');
			} else {
				// Chains mode: dim everything except this book
				cy.nodes('[!isLabel]').filter((n: any) => !n.hasClass('same-book')).addClass('dimmed');
				cy.edges().filter((e: any) => !e.hasClass('same-book-edge')).addClass('dimmed');
			}
		});

		cy.on('tap', (evt: any) => {
			if (evt.target === cy) {
				selectedNode = null;
				selectedLink = null;
				clearHighlighting();
			}
		});

		cy.on('mouseover', 'edge[?isOverlap]', (evt: any) => {
			const edge = evt.target;
			const e = evt.originalEvent;
			const endpointLine = (data: any) => {
				if (data.isShared) return `<span style="color:#fbbf24">★ ${data.bookTitle}:</span> ${data.label}`;
				const book = getBook(data.bookId);
				return `<span style="color:${book.color}">${book.shortTitle}:</span> ${data.label}`;
			};
			tooltipContent = `<strong>Shared topic:</strong> ${edge.data('theme')}<br/>${endpointLine(edge.source().data())}<br/>${endpointLine(edge.target().data())}`;
			tooltipX = e.clientX;
			tooltipY = e.clientY - 12;
			tooltipVisible = true;
		});

		cy.on('mouseout', 'edge[?isOverlap]', () => {
			tooltipVisible = false;
		});

		cy.fit(undefined, 30);
		graphReady = true;
	}

	function toggleBook(id: string) {
		const next = new Set(selectedBooks);
		if (next.has(id)) next.delete(id); else next.add(id);
		selectedBooks = next;
	}
	function toggleField(id: string) {
		const next = new Set(selectedFields);
		if (next.has(id)) next.delete(id); else next.add(id);
		selectedFields = next;
	}
	function selectAllBooks() { selectedBooks = new Set(books.map(b => b.id)); }
	function selectNoBooks() { selectedBooks = new Set(); }
	function selectAllFields() { selectedFields = new Set(scienceFields.map(f => f.id)); }
	function selectNoFields() { selectedFields = new Set(); }

	function handleRebuild() {
		createGraph();
	}

	function applySharedHighlight() {
		if (!cy) return;
		cy.batch(() => {
			if (highlightShared) {
				cy.nodes('[?isShared]').addClass('shared-on');
				cy.edges('[?isSharedEdge]').addClass('shared-on-edge');
			} else {
				cy.nodes('[?isShared]').removeClass('shared-on');
				cy.edges('[?isSharedEdge]').removeClass('shared-on-edge');
			}
		});
	}

	$effect(() => {
		highlightShared;
		applySharedHighlight();
	});

	onMount(() => {
		createGraph();
	});

	onDestroy(() => {
		cy?.destroy();
	});

	// ── Shared-node book analysis ──────────────────────────────
	// Which books participate in shared nodes and which don't
	const bookSharedCounts = $derived.by(() => {
		const counts = new Map<string, string[]>();
		for (const sn of sharedNodes) {
			for (const bid of sn.bookIds) {
				if (!counts.has(bid)) counts.set(bid, []);
				counts.get(bid)!.push(sn.label);
			}
		}
		return counts;
	});

	const booksWithShared = $derived(
		books.filter(b => bookSharedCounts.has(b.id))
			.sort((a, b) => (bookSharedCounts.get(b.id)?.length ?? 0) - (bookSharedCounts.get(a.id)?.length ?? 0))
	);

	const booksWithoutShared = $derived(
		books.filter(b => !bookSharedCounts.has(b.id))
	);

	// When a shared node is clicked, find other shared nodes that overlap with its books
	const relatedSharedNodes = $derived.by(() => {
		if (!selectedLink?.isShared) return [];
		const clickedBookIds = new Set(selectedLink.sharedBookIds.split(','));
		return sharedNodes.filter(sn =>
			sn.id !== selectedLink.id && sn.bookIds.some(bid => clickedBookIds.has(bid))
		);
	});

	// ── Convergence panel state ─────────────────────────────────
	let expandedConvergenceId = $state<string | null>(null);
	let convergenceVerdictFilter = $state<Verdict | 'all'>('all');
	let filteredConvergences = $derived.by(() => {
		if (convergenceVerdictFilter === 'all') return convergences;
		return convergences.filter((c) => c.verdict === convergenceVerdictFilter);
	});
	function toggleConvergence(id: string) {
		expandedConvergenceId = expandedConvergenceId === id ? null : id;
	}
</script>

<svelte:head>
	<title>Kausalpfade — Buchvergleich</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
	<header class="hero">
		<div class="hero-inner">
			<div class="nav-links">
				<a href="/" class="back-link">&larr; Hauptseite</a>
				<a href="/forschungslandschaft" class="back-link">Forschungslandschaft</a>
			</div>
			<p class="book-label">Cross-Book Analysis</p>
			<h1>Causal Paths Compared</h1>
			<p class="subtitle">
				All argument chains from 8 books in one interactive graph. Drag nodes, zoom in/out, click for details.
				Dashed blue lines show where books overlap on the same topic.
			</p>
		</div>
	</header>

	<!-- Filter bar -->
	<button class="filter-toggle" onclick={() => (showFilters = !showFilters)}>
		{showFilters ? 'Hide' : 'Show'} Filters
		<span class="filter-count">{selectedBooks.size}/{books.length} books</span>
	</button>

	{#if showFilters}
		<div class="filters">
			<div class="filter-section">
				<div class="filter-header">
					<span class="filter-title">Books</span>
					<div class="filter-actions">
						<button class="filter-action" onclick={selectAllBooks}>All</button>
						<button class="filter-action" onclick={selectNoBooks}>None</button>
					</div>
				</div>
				<div class="filter-chips">
					{#each books as book}
						<button
							class="chip"
							class:chip-active={selectedBooks.has(book.id)}
							style="--chip-color: {book.color}"
							onclick={() => toggleBook(book.id)}
						>
							<span class="chip-dot" style="background: {book.color}"></span>
							{book.shortTitle}
						</button>
					{/each}
				</div>
			</div>

			<div class="filter-section">
				<div class="filter-header">
					<span class="filter-title">Overlap connections (fields)</span>
					<div class="filter-actions">
						<button class="filter-action" onclick={selectAllFields}>All</button>
						<button class="filter-action" onclick={selectNoFields}>None</button>
						<label class="overlap-toggle">
							<input type="checkbox" bind:checked={showOverlaps} />
							Show overlaps
						</label>
					</div>
				</div>
				<div class="filter-chips">
					{#each scienceFields as field}
						<button
							class="chip"
							class:chip-active={selectedFields.has(field.id)}
							style="--chip-color: {field.color}"
							onclick={() => toggleField(field.id)}
						>
							<span class="chip-dot" style="background: {field.color}"></span>
							{field.name}
						</button>
					{/each}
				</div>
			</div>

			<button class="rebuild-btn" onclick={handleRebuild}>
				Apply Filters &amp; Rebuild Graph
			</button>
		</div>
	{/if}

	<!-- Mode toggle -->
	<div class="mode-bar">
		<span class="mode-label">View mode:</span>
		<button class="mode-btn" class:mode-active={viewMode === 'overlaps'} onclick={() => { viewMode = 'overlaps'; if (cy) { cy.edges('[?isOverlap]').style('display', 'element'); clearHighlighting(); } }}>
			Thematic Overlaps
		</button>
		<button class="mode-btn" class:mode-active={viewMode === 'chains'} onclick={() => { viewMode = 'chains'; if (cy) { cy.edges('[?isOverlap]').style('display', 'none'); clearHighlighting(); } }}>
			Book Chains Only
		</button>
		<button class="mode-btn" class:mode-active={highlightShared} onclick={() => { highlightShared = !highlightShared; }}>
			{highlightShared ? '★' : '☆'} Shared Nodes
		</button>
		<span class="mode-desc">
			{viewMode === 'overlaps'
				? 'Dashed lines connect claims from different books on the same topic'
				: 'Click a node to see only that book\'s causal chain'}
		</span>
	</div>

	<!-- Graph -->
	{#if tooltipVisible && tooltipContent}
		<div class="graph-tooltip" style="left: {tooltipX}px; top: {tooltipY}px">
			{@html tooltipContent}
		</div>
	{/if}
	<div class="graph-wrapper" bind:this={graphWrapperEl}>
		<div class="graph-container" bind:this={graphEl}>
		</div>
		<div class="graph-legend">
			<span class="legend-title">Evidence:</span>
			<span class="gl-item"><span class="gl-dot" style="background: #10b981"></span> Strong</span>
			<span class="gl-item"><span class="gl-dot" style="background: #f59e0b"></span> Mixed</span>
			<span class="gl-item"><span class="gl-dot" style="background: #ef4444"></span> Weak</span>
			<span class="gl-item"><span class="gl-dot" style="background: #8b5cf6"></span> Untestable</span>
			<span class="gl-sep"></span>
			<span class="gl-item"><span class="gl-line-dash"></span> Cross-book overlap</span>
		</div>
	</div>

	<!-- Detail panel -->
	{#if selectedNode && selectedLink}
		{#if selectedLink.isShared}
			{@const status = selectedLink.status}
			{@const color = statusColors[status]}
			{@const typeInfo = chainTypeLabels[selectedNode.type] || { label: selectedNode.type, color: '#64748b' }}
			{@const statusLabel = status === 'red' ? 'Problematisch' : status === 'yellow' ? 'Wacklig' : status === 'green' ? 'Solide belegt' : 'Nicht testbar'}
			{@const sharedBookIds = selectedLink.sharedBookIds.split(',')}
			{@const conv = selectedLink.convergenceId ? convergences.find((c) => c.id === selectedLink.convergenceId) : null}
			{@const convVerdict = conv ? verdictInfo[conv.verdict] : null}
			<div class="node-detail shared-detail" style="--nd-color: #fbbf24">
				<div class="nd-header">
					<span class="nd-num" style="background: #fbbf24; color: #0f172a">★</span>
					<span class="nd-name">{selectedLink.shortLabel}</span>
					<span class="nd-type" style="color: {typeInfo.color}">{typeInfo.label}</span>
					<span class="nd-status" style="background: {color}">{statusIcons[status]} {statusLabel}</span>
					<button class="nd-close" onclick={() => { selectedNode = null; selectedLink = null; clearHighlighting(); }}>&#10005;</button>
				</div>

				<p class="nd-claim">{selectedLink.claim}</p>

				<div class="shared-books">
					<strong>Geteilt von {sharedBookIds.length} Quellen:</strong>
					<div class="shared-books-list">
						{#each sharedBookIds as bid}
							{@const b = getBook(bid)}
							{#if b}
								<a href={b.route} class="shared-book-chip" style="--chip-color: {b.color}">
									<span class="chip-dot" style="background: {b.color}"></span>
									{b.shortTitle}
									<span class="shared-arrow">&rarr;</span>
								</a>
							{/if}
						{/each}
					</div>
				</div>

				{#if conv}
					<div class="conv-audit">
						<h3 class="conv-audit-title">Konvergenz-Audit</h3>

						{#if convVerdict}
							<div class="conv-verdict-badge" style="--cv-color: {convVerdict.color}">
								<span class="cv-icon">{convVerdict.icon}</span>
								<span class="cv-label">{convVerdict.label}</span>
							</div>
						{/if}

						{#if conv.sharedBy.length > 0}
							<div class="conv-block">
								<strong>Wie jedes Buch es formuliert:</strong>
								<div class="conv-phrasings">
									{#each conv.sharedBy as entry}
										{@const b = getBook(entry.bookId)}
										{#if b}
											<div class="conv-phrasing">
												<span class="conv-phrasing-book" style="color: {b.color}">{b.shortTitle}:</span>
												<span class="conv-phrasing-text">{entry.phrasing}</span>
											</div>
										{/if}
									{/each}
								</div>
							</div>
						{/if}

						<div class="conv-block">
							<strong>Primärquellen dahinter:</strong>
							<p>{conv.primarySourcesBeneath}</p>
						</div>

						<div class="conv-block">
							<strong>Was die Daten tatsächlich zeigen:</strong>
							<p>{conv.whatTheDataShows}</p>
						</div>

						<div class="conv-block conv-counter">
							<strong>Gegenargumente / Einschränkungen:</strong>
							<p>{conv.counterEvidence}</p>
						</div>

						<div class="conv-block conv-bottom-line">
							<strong>Fazit:</strong>
							<p>{conv.verdictExplanation}</p>
						</div>
					</div>
				{/if}
			</div>
		{:else}
			{@const book = getBook(selectedNode.bookId)}
			{@const status = getStatus(selectedLink)}
			{@const color = statusColors[status]}
			{@const typeInfo = chainTypeLabels[selectedNode.type] || { label: selectedNode.type, color: '#64748b' }}
			{@const statusLabel = status === 'red' ? 'Problematisch' : status === 'yellow' ? 'Wacklig' : status === 'green' ? 'Solide belegt' : 'Nicht testbar'}
			{@const deps = getDependsOn(selectedLink)}
			{@const bookChain = bookChains.find(b => b.id === selectedNode.bookId)?.chain || []}
			<div class="node-detail" style="--nd-color: {color}">
				<div class="nd-header">
					<span class="nd-num" style="background: {color}">{selectedLink.step ?? '?'}</span>
					<span class="nd-name">{getShortLabel(selectedLink)}</span>
					<span class="nd-type" style="color: {typeInfo.color}">{typeInfo.label}</span>
					<span class="nd-status" style="background: {color}">{statusIcons[status]} {statusLabel}</span>
					<span class="nd-book" style="color: {book.color}">{book.shortTitle}</span>
					<button class="nd-close" onclick={() => { selectedNode = null; selectedLink = null; clearHighlighting(); }}>&#10005;</button>
				</div>

				<p class="nd-claim">{selectedLink.claim}</p>

				{#if deps.length > 0}
					<div class="nd-deps">
						<span class="nd-deps-label">Depends on:</span>
						{#each deps as depId}
							{@const dep = bookChain.find((c) => c.id === depId)}
							{#if dep}
								<button class="nd-dep-chip" style="border-color: {statusColors[getStatus(dep)]}" onclick={() => {
									const fullDep = findFullLink(selectedNode.bookId, depId);
									if (fullDep) {
										selectedLink = fullDep;
										selectedNode = { ...selectedNode, chainId: depId, label: getShortLabel(fullDep), status: getStatus(fullDep), type: fullDep.type, claim: fullDep.claim };
									}
								}}>
									{statusIcons[getStatus(dep)]} {dep.step ?? ''}. {getShortLabel(dep)}
								</button>
							{/if}
						{/each}
					</div>
				{/if}

				{#if selectedLink.evidenceRefs?.length > 0}
					<div class="nd-evidence">
						<strong>Evidence:</strong>
						{#each selectedLink.evidenceRefs as ref, i}
							<a class="ev-link" href="{book.route}/references?search={encodeURIComponent(ref.authorSearch)}">{ref.label}</a>{#if i < selectedLink.evidenceRefs.length - 1}<span class="ev-sep">&middot;</span>{/if}
						{/each}
					</div>
				{/if}

				{#if selectedLink.explanation}
					<div class="nd-explanation">{selectedLink.explanation}</div>
				{/if}

				<div class="nd-stats">
					<span class="nd-stat">{book.shortTitle}: {bookChains.find(b => b.id === selectedNode.bookId)?.chain.length ?? 0} nodes in chain</span>
				</div>
				<a href="{book.route}" class="nd-book-link">View full analysis in {book.shortTitle} &rarr;</a>
			</div>
		{/if}
	{/if}

	<section class="convergence-section">
		<!-- Book commonalities overview -->
		<div class="book-commonalities">
			<h2>Geteilte Knoten — welche Bücher konvergieren?</h2>

			{#if selectedLink?.isShared}
				{@const clickedBids = selectedLink.sharedBookIds.split(',')}
				<div class="bc-context">
					<p class="bc-label">Dieser Knoten wird geteilt von:</p>
					<div class="bc-books-row">
						{#each clickedBids as bid}
							{@const b = getBook(bid)}
							{#if b}
								<span class="bc-book-tag" style="--bc-color: {b.color}">
									<span class="chip-dot" style="background: {b.color}"></span>
									{b.shortTitle}
									<span class="bc-count">in {bookSharedCounts.get(bid)?.length ?? 0} geteilten Knoten</span>
								</span>
							{/if}
						{/each}
					</div>
				</div>

				{#if relatedSharedNodes.length > 0}
					<div class="bc-related">
						<p class="bc-label">Diese Bücher teilen auch:</p>
						<div class="bc-related-list">
							{#each relatedSharedNodes as rsn}
								{@const rsColor = statusColors[rsn.status]}
								<div class="bc-related-item" style="--rs-color: {rsColor}">
									<span class="bc-related-name">{rsn.label}</span>
									<span class="bc-related-books">
										{rsn.bookIds.map(bid => getBook(bid)?.shortTitle).filter(Boolean).join(', ')}
									</span>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{/if}

			<div class="bc-grid">
				<div class="bc-section">
					<h3>Bücher MIT geteilten Knoten ({booksWithShared.length})</h3>
					<p class="bc-desc">Diese Bücher konvergieren auf mindestens einen gemeinsamen Befund.</p>
					<div class="bc-book-list">
						{#each booksWithShared as b}
							{@const sharedLabels = bookSharedCounts.get(b.id) || []}
							<div class="bc-book-entry" style="--bc-color: {b.color}">
								<span class="bc-book-name" style="color: {b.color}">{b.shortTitle}</span>
								<span class="bc-book-author">{b.author}</span>
								<span class="bc-shared-count">{sharedLabels.length} geteilte Knoten</span>
								<div class="bc-shared-labels">
									{#each sharedLabels as lbl}
										<span class="bc-label-tag">{lbl}</span>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="bc-section bc-isolated">
					<h3>Bücher OHNE geteilte Knoten ({booksWithoutShared.length})</h3>
					<p class="bc-desc">Diese Bücher machen Einzelaussagen, die kein anderes Buch in der Bibliothek teilt — oder argumentieren in einer so spezifischen Richtung (biologisch, evolutionär, medizinisch), dass keine direkte Konvergenz entsteht.</p>
					<div class="bc-book-list">
						{#each booksWithoutShared as b}
							<div class="bc-book-entry bc-entry-isolated" style="--bc-color: {b.color}">
								<span class="bc-book-name" style="color: {b.color}">{b.shortTitle}</span>
								<span class="bc-book-author">{b.author}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="cv-header">
			<h2>Konvergenzen — was teilen die Bücher, und stimmt es?</h2>
			<p class="cv-intro">
				Mehrere Bücher vertreten dieselben Behauptungen. Aber <strong>Konvergenz ist nicht
				Wahrheit</strong>: viele dieser Bücher teilen eine gemeinsame theoretische Ahnenlinie
				(Rogers, Chodorow, Terrence Real, David &amp; Brannon, Connell) und replizieren dieselbe
				Erzählung, nicht dieselben Daten. Jede Konvergenz wurde hier auf die Primärquelle
				zurückverfolgt und gegen die aktuelle Meta-Analyse-Literatur geprüft.
			</p>

			<div class="cv-verdict-filters">
				<button
					class="cv-filter"
					class:active={convergenceVerdictFilter === 'all'}
					onclick={() => (convergenceVerdictFilter = 'all')}
				>
					Alle {convergences.length}
				</button>
				{#each Object.entries(verdictInfo) as [key, info]}
					{@const count = convergences.filter((c) => c.verdict === key).length}
					<button
						class="cv-filter"
						class:active={convergenceVerdictFilter === key}
						style="--cv-color: {info.color}"
						onclick={() => (convergenceVerdictFilter = convergenceVerdictFilter === key ? 'all' : key as Verdict)}
					>
						<span class="cv-filter-icon" style="color: {info.color}">{info.icon}</span>
						{info.label} ({count})
					</button>
				{/each}
			</div>
		</div>

		<div class="cv-list">
			{#each filteredConvergences as cnv}
				{@const info = verdictInfo[cnv.verdict]}
				{@const isExpanded = expandedConvergenceId === cnv.id}
				<div class="cv-card" class:expanded={isExpanded} style="--cv-color: {info.color}">
					<button class="cv-card-header" onclick={() => toggleConvergence(cnv.id)}>
						<div class="cv-card-head-left">
							<span class="cv-verdict-badge" style="background: {info.color}">
								{info.icon} {info.label}
							</span>
							<span class="cv-card-name">{cnv.name}</span>
						</div>
						<div class="cv-card-head-right">
							<span class="cv-book-count">{cnv.sharedBy.length} Bücher</span>
							<span class="cv-expand">{isExpanded ? '▼' : '▶'}</span>
						</div>
					</button>

					{#if isExpanded}
						<div class="cv-card-body">
							<p class="cv-one-liner">{cnv.oneLineClaim}</p>

							<div class="cv-section">
								<h4>Wer sagt es — und wie?</h4>
								<div class="cv-shared-by">
									{#each cnv.sharedBy as entry}
										{@const book = books.find((b) => b.id === entry.bookId)}
										{#if book}
											<div class="cv-share-row" style="border-left-color: {book.color}">
												<a class="cv-book-tag" href={book.route} style="background: {book.color}">
													{book.shortTitle}
												</a>
												<span class="cv-phrasing">{entry.phrasing}</span>
											</div>
										{/if}
									{/each}
								</div>
							</div>

							<div class="cv-section">
								<h4>Primärquellen (wer hat die Daten wirklich erzeugt?)</h4>
								<p class="cv-body-text">{cnv.primarySourcesBeneath}</p>
							</div>

							<div class="cv-section cv-data-section">
								<h4>Was die Daten tatsächlich zeigen</h4>
								<p class="cv-body-text">{cnv.whatTheDataShows}</p>
							</div>

							<div class="cv-section cv-counter-section">
								<h4>Einschränkungen &amp; Gegenevidenz</h4>
								<p class="cv-body-text">{cnv.counterEvidence}</p>
							</div>

							<div class="cv-verdict-box" style="border-left-color: {info.color}">
								<div class="cv-verdict-header">
									<span class="cv-verdict-icon" style="color: {info.color}">{info.icon}</span>
									<strong>Gesamturteil: {cnv.verdictLabel}</strong>
								</div>
								<p class="cv-verdict-text">{cnv.verdictExplanation}</p>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="cv-summary">
			<h3>Zusammenfassung</h3>
			<p>{convergenceSummary.verdict}</p>
		</div>
	</section>

	<footer class="app-footer">
		<p>Cross-book causal path analysis &middot; <a href="/">Back to all books</a></p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		background: #0f172a;
		color: #e2e8f0;
		-webkit-font-smoothing: antialiased;
	}
	.app {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px 60px;
		min-height: 100vh;
	}
	.hero { padding: 36px 0 20px; text-align: center; }
	.hero-inner { max-width: 640px; margin: 0 auto; }
	.nav-links { display: flex; gap: 16px; justify-content: center; margin-bottom: 16px; flex-wrap: wrap; }
	.back-link { font-size: 0.78rem; color: #64748b; text-decoration: none; transition: color 0.2s; }
	.back-link:hover { color: #94a3b8; }
	.book-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 3px; color: #64748b; margin: 0 0 10px; }
	.hero h1 {
		font-size: 2.2rem; font-weight: 800;
		background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
		-webkit-background-clip: text; -webkit-text-fill-color: transparent;
		background-clip: text; margin: 0 0 8px; line-height: 1.15;
	}
	.subtitle { color: #94a3b8; font-size: 0.88rem; line-height: 1.6; margin: 0; }

	.filter-toggle {
		display: flex; align-items: center; gap: 10px; width: 100%; padding: 12px 20px;
		margin: 12px 0 0; background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(148, 163, 184, 0.12);
		border-radius: 10px; color: #e2e8f0; font-size: 0.85rem; font-weight: 600;
		cursor: pointer; transition: background 0.2s;
	}
	.filter-toggle:hover { background: rgba(30, 41, 59, 0.9); }
	.filter-count { color: #64748b; font-weight: 400; margin-left: auto; font-size: 0.78rem; }

	.filters {
		background: rgba(30, 41, 59, 0.4); border-radius: 0 0 10px 10px;
		border: 1px solid rgba(148, 163, 184, 0.08); border-top: none; padding: 16px 20px;
	}
	.filter-section { margin-bottom: 12px; }
	.filter-section:last-child { margin-bottom: 0; }
	.filter-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
	.filter-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b; font-weight: 600; }
	.filter-actions { display: flex; gap: 10px; align-items: center; }
	.filter-action { font-size: 0.72rem; color: #60a5fa; background: none; border: none; cursor: pointer; text-decoration: underline; padding: 0; }
	.filter-action:hover { color: #93c5fd; }
	.overlap-toggle { display: flex; align-items: center; gap: 5px; font-size: 0.72rem; color: #94a3b8; cursor: pointer; }
	.overlap-toggle input { cursor: pointer; }

	.filter-chips { display: flex; flex-wrap: wrap; gap: 6px; }
	.chip {
		display: flex; align-items: center; gap: 5px; padding: 5px 10px; border-radius: 18px;
		font-size: 0.75rem; background: rgba(148, 163, 184, 0.08); border: 1px solid rgba(148, 163, 184, 0.12);
		color: #94a3b8; cursor: pointer; transition: all 0.15s; white-space: nowrap;
	}
	.chip:hover { background: rgba(148, 163, 184, 0.15); }
	.chip-active {
		background: color-mix(in srgb, var(--chip-color) 15%, transparent);
		border-color: color-mix(in srgb, var(--chip-color) 40%, transparent);
		color: #e2e8f0;
	}
	.chip-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }

	.mode-bar {
		display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
		padding: 12px 16px; margin-top: 12px;
		background: rgba(30, 41, 59, 0.5); border-radius: 10px;
		border: 1px solid rgba(148, 163, 184, 0.1);
	}
	.mode-label { font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
	.mode-btn {
		padding: 6px 16px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;
		border: 1px solid rgba(148, 163, 184, 0.15); background: rgba(148, 163, 184, 0.05);
		color: #94a3b8; cursor: pointer; transition: all 0.15s;
	}
	.mode-btn:hover { background: rgba(148, 163, 184, 0.12); }
	.mode-active {
		background: rgba(96, 165, 250, 0.15); border-color: rgba(96, 165, 250, 0.4);
		color: #60a5fa;
	}
	.mode-desc { font-size: 0.72rem; color: #475569; margin-left: auto; }

	.rebuild-btn {
		margin-top: 14px; padding: 10px 24px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);
		background: rgba(96, 165, 250, 0.1); color: #60a5fa; font-size: 0.82rem; font-weight: 600;
		cursor: pointer; transition: all 0.2s; width: 100%;
	}
	.rebuild-btn:hover { background: rgba(96, 165, 250, 0.2); border-color: rgba(96, 165, 250, 0.5); }

	.graph-wrapper {
		background: rgba(15, 23, 42, 0.6); border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.1); overflow: hidden;
		margin-top: 16px;
	}
	.graph-container { width: 100%; height: 75vh; min-height: 500px; position: relative; }

	.graph-tooltip {
		position: fixed; transform: translate(-50%, -100%);
		background: rgba(15, 23, 42, 0.97); border: 1px solid rgba(148, 163, 184, 0.25);
		border-radius: 8px; padding: 10px 14px; pointer-events: none; z-index: 99999;
		max-width: 340px; min-width: 180px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
		font-size: 0.8rem; line-height: 1.5; color: #e2e8f0;
	}

	.graph-legend {
		display: flex; flex-wrap: wrap; gap: 14px; align-items: center;
		padding: 10px 16px; border-top: 1px solid rgba(148, 163, 184, 0.08);
		background: rgba(15, 23, 42, 0.4);
	}
	.legend-title { font-size: 0.72rem; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
	.gl-item { display: flex; align-items: center; gap: 5px; font-size: 0.75rem; color: #94a3b8; }
	.gl-dot { width: 10px; height: 10px; border-radius: 50%; }
	.gl-sep { width: 1px; height: 14px; background: rgba(148, 163, 184, 0.15); }
	.gl-line-dash { width: 22px; height: 0; border-top: 2px dashed #60a5fa; }

	/* Node detail panel — matches per-book style */
	.node-detail {
		padding: 20px; margin: 16px 0;
		background: rgba(15, 23, 42, 0.7); border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.1);
		border-left: 4px solid var(--nd-color);
	}
	.nd-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; }
	.nd-num {
		width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center;
		justify-content: center; font-size: 0.85rem; font-weight: 700; color: white; flex-shrink: 0;
	}
	.nd-name { font-weight: 700; font-size: 1.05rem; color: #f1f5f9; }
	.nd-type { font-size: 0.75rem; }
	.nd-status {
		font-size: 0.72rem; padding: 4px 12px; border-radius: 12px; color: white;
		font-weight: 600; white-space: nowrap;
	}
	.nd-book { font-size: 0.75rem; font-weight: 600; }
	.nd-close {
		margin-left: auto; background: none; border: none; color: #64748b;
		cursor: pointer; font-size: 1.1rem; padding: 4px;
	}
	.nd-close:hover { color: #ef4444; }
	.nd-claim { font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin: 0 0 12px; }
	.nd-deps { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
	.nd-deps-label { font-size: 0.78rem; color: #64748b; font-weight: 500; }
	.nd-dep-chip {
		font-size: 0.75rem; padding: 4px 10px; border-radius: 10px;
		background: rgba(30, 41, 59, 0.8); color: #cbd5e1;
		border: 1.5px solid; cursor: pointer; font-family: inherit;
		transition: background 0.2s;
	}
	.nd-dep-chip:hover { background: rgba(30, 41, 59, 1); }
	.nd-evidence { font-size: 0.82rem; color: #64748b; margin-bottom: 12px; display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
	.ev-link {
		color: #60a5fa; text-decoration: none; font-weight: 500;
		padding: 2px 8px; border-radius: 6px; background: rgba(59, 130, 246, 0.08);
		border: 1px solid rgba(59, 130, 246, 0.15); transition: all 0.2s;
		font-size: 0.78rem; white-space: nowrap;
	}
	.ev-link:hover { background: rgba(59, 130, 246, 0.2); color: #93c5fd; }
	.ev-sep { color: #334155; }
	.nd-explanation {
		font-size: 0.85rem; color: #94a3b8; line-height: 1.6; margin-bottom: 12px;
		padding: 14px; background: rgba(30, 41, 59, 0.6); border-radius: 8px;
	}
	.nd-stats { margin-bottom: 10px; }
	.nd-stat { font-size: 0.75rem; color: #64748b; }
	.nd-book-link { font-size: 0.82rem; color: #60a5fa; text-decoration: none; }
	.nd-book-link:hover { text-decoration: underline; }

	.shared-detail { border-left-color: #fbbf24; background: rgba(251, 191, 36, 0.06); max-height: 80vh; overflow-y: auto; }

	.book-commonalities {
		padding: 28px; margin-bottom: 32px;
		background: rgba(30, 41, 59, 0.5); border-radius: 14px;
		border: 1px solid rgba(148, 163, 184, 0.12);
	}
	.book-commonalities h2 { font-size: 1.3rem; font-weight: 700; color: #fbbf24; margin: 0 0 16px; }
	.bc-context { margin-bottom: 20px; padding: 16px; background: rgba(251, 191, 36, 0.06); border-radius: 10px; border: 1px solid rgba(251, 191, 36, 0.15); }
	.bc-label { font-size: 0.82rem; color: #94a3b8; margin: 0 0 8px; font-weight: 600; }
	.bc-books-row { display: flex; flex-wrap: wrap; gap: 8px; }
	.bc-book-tag {
		display: flex; align-items: center; gap: 6px; padding: 6px 12px;
		border-radius: 8px; background: rgba(15, 23, 42, 0.6);
		border: 1px solid var(--bc-color); font-size: 0.82rem; color: #e2e8f0;
	}
	.bc-book-tag .chip-dot { width: 8px; height: 8px; border-radius: 50%; }
	.bc-count { font-size: 0.72rem; color: #64748b; margin-left: 4px; }
	.bc-related { margin-top: 16px; }
	.bc-related-list { display: flex; flex-direction: column; gap: 6px; }
	.bc-related-item {
		padding: 8px 12px; border-radius: 8px; background: rgba(15, 23, 42, 0.4);
		border-left: 3px solid var(--rs-color);
	}
	.bc-related-name { font-size: 0.88rem; font-weight: 600; color: #e2e8f0; display: block; }
	.bc-related-books { font-size: 0.75rem; color: #64748b; }
	.bc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px; }
	.bc-section h3 { font-size: 1rem; font-weight: 700; color: #e2e8f0; margin: 0 0 6px; }
	.bc-desc { font-size: 0.82rem; color: #64748b; margin: 0 0 12px; line-height: 1.4; }
	.bc-book-list { display: flex; flex-direction: column; gap: 8px; }
	.bc-book-entry {
		padding: 10px 14px; border-radius: 8px; background: rgba(15, 23, 42, 0.5);
		border-left: 3px solid var(--bc-color);
	}
	.bc-book-name { font-weight: 700; font-size: 0.9rem; display: block; }
	.bc-book-author { font-size: 0.78rem; color: #64748b; display: block; margin-bottom: 4px; }
	.bc-shared-count { font-size: 0.75rem; color: #fbbf24; font-weight: 600; display: block; margin-bottom: 4px; }
	.bc-shared-labels { display: flex; flex-wrap: wrap; gap: 4px; }
	.bc-label-tag {
		font-size: 0.68rem; padding: 2px 8px; border-radius: 10px;
		background: rgba(251, 191, 36, 0.1); color: #fde68a; border: 1px solid rgba(251, 191, 36, 0.2);
	}
	.bc-isolated h3 { color: #94a3b8; }
	.bc-entry-isolated { border-left-color: #334155; background: rgba(15, 23, 42, 0.3); }

	@media (max-width: 768px) {
		.bc-grid { grid-template-columns: 1fr; }
	}

	.conv-audit { margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(251, 191, 36, 0.2); }
	.conv-audit-title { font-size: 1.05rem; font-weight: 700; color: #fbbf24; margin: 0 0 12px; }
	.conv-verdict-badge {
		display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px;
		border-radius: 20px; background: var(--cv-color); color: #0f172a;
		font-size: 0.82rem; font-weight: 700; margin-bottom: 16px;
	}
	.cv-icon { font-size: 1rem; }
	.conv-block { margin-bottom: 16px; }
	.conv-block strong { display: block; font-size: 0.82rem; color: #94a3b8; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
	.conv-block p { font-size: 0.85rem; color: #cbd5e1; line-height: 1.65; margin: 0; }
	.conv-counter { padding: 14px; background: rgba(239, 68, 68, 0.06); border-radius: 8px; border-left: 3px solid #ef4444; }
	.conv-counter strong { color: #fca5a5; }
	.conv-bottom-line { padding: 14px; background: rgba(251, 191, 36, 0.08); border-radius: 8px; border-left: 3px solid #fbbf24; }
	.conv-bottom-line strong { color: #fbbf24; }
	.conv-phrasings { display: flex; flex-direction: column; gap: 8px; }
	.conv-phrasing { font-size: 0.82rem; line-height: 1.5; }
	.conv-phrasing-book { font-weight: 700; margin-right: 4px; }
	.conv-phrasing-text { color: #94a3b8; }
	.shared-books { margin-top: 12px; font-size: 0.85rem; color: #e2e8f0; }
	.shared-books strong { display: block; margin-bottom: 8px; color: #fbbf24; }
	.shared-books-list { display: flex; flex-wrap: wrap; gap: 8px; }
	.shared-book-chip {
		display: flex; align-items: center; gap: 6px; padding: 6px 14px;
		border-radius: 10px; background: rgba(30, 41, 59, 0.8);
		border: 1.5px solid var(--chip-color, #64748b); color: #e2e8f0;
		font-size: 0.82rem; font-weight: 500; text-decoration: none;
		transition: background 0.2s, border-color 0.2s;
	}
	.shared-book-chip:hover { background: rgba(30, 41, 59, 1); border-color: var(--chip-color); }
	.shared-book-chip .chip-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
	.shared-arrow { color: #475569; font-size: 0.75rem; margin-left: auto; }

	.app-footer {
		text-align: center; padding: 24px 0; color: #475569; font-size: 0.82rem;
		border-top: 1px solid rgba(148, 163, 184, 0.1); margin-top: 24px;
	}
	.app-footer a { color: #60a5fa; text-decoration: none; }
	.app-footer a:hover { text-decoration: underline; }

	/* ── Convergence section ─────────────────────────────────── */
	.convergence-section {
		margin-top: 48px;
		padding: 32px 28px;
		background: rgba(30, 41, 59, 0.4);
		border-radius: 14px;
		border: 1px solid rgba(148, 163, 184, 0.12);
	}
	.cv-header { margin-bottom: 24px; }
	.cv-header h2 {
		font-size: 1.5rem;
		font-weight: 800;
		color: #e2e8f0;
		margin: 0 0 12px;
		background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	.cv-intro {
		font-size: 0.9rem; color: #94a3b8; line-height: 1.6; margin: 0 0 18px;
		max-width: 820px;
	}
	.cv-intro strong { color: #fde68a; font-weight: 700; }

	.cv-verdict-filters {
		display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;
	}
	.cv-filter {
		padding: 8px 14px; border-radius: 10px;
		background: rgba(15, 23, 42, 0.5);
		border: 1px solid rgba(148, 163, 184, 0.15);
		color: #cbd5e1; font-size: 0.8rem; font-weight: 600;
		cursor: pointer; font-family: inherit;
		transition: all 0.2s;
		display: flex; align-items: center; gap: 6px;
	}
	.cv-filter:hover { border-color: var(--cv-color, #94a3b8); color: #f1f5f9; }
	.cv-filter.active {
		border-color: var(--cv-color, #94a3b8);
		background: rgba(15, 23, 42, 0.9);
		box-shadow: 0 0 16px -4px var(--cv-color);
	}
	.cv-filter-icon { font-weight: 800; font-size: 0.95rem; }

	.cv-list {
		display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;
	}

	.cv-card {
		background: rgba(15, 23, 42, 0.6);
		border-radius: 12px;
		border: 1px solid rgba(148, 163, 184, 0.1);
		border-left: 4px solid var(--cv-color);
		overflow: hidden;
		transition: border-color 0.2s, box-shadow 0.2s;
	}
	.cv-card:hover { border-color: rgba(148, 163, 184, 0.25); }
	.cv-card.expanded {
		box-shadow: 0 0 24px -6px var(--cv-color);
	}

	.cv-card-header {
		width: 100%;
		display: flex; align-items: center; justify-content: space-between;
		padding: 16px 18px;
		background: transparent; border: none;
		color: inherit; cursor: pointer;
		font-family: inherit; text-align: left;
		gap: 12px; flex-wrap: wrap;
	}
	.cv-card-header:hover { background: rgba(148, 163, 184, 0.04); }

	.cv-card-head-left {
		display: flex; align-items: center; gap: 12px;
		flex: 1; min-width: 0;
	}
	.cv-verdict-badge {
		font-size: 0.68rem; font-weight: 700;
		padding: 4px 10px; border-radius: 10px;
		color: #0f172a; white-space: nowrap;
		letter-spacing: 0.3px;
	}
	.cv-card-name {
		font-size: 1rem; font-weight: 700; color: #f1f5f9;
		line-height: 1.35;
	}
	.cv-card-head-right {
		display: flex; align-items: center; gap: 10px;
		flex-shrink: 0;
	}
	.cv-book-count {
		font-size: 0.75rem; color: #64748b; font-weight: 500;
	}
	.cv-expand { font-size: 0.75rem; color: #64748b; }

	.cv-card-body {
		padding: 4px 22px 22px;
		border-top: 1px solid rgba(148, 163, 184, 0.08);
	}
	.cv-one-liner {
		font-size: 0.92rem; color: #e2e8f0; line-height: 1.55;
		margin: 18px 0 20px;
		font-style: italic;
		padding-left: 12px; border-left: 2px solid var(--cv-color);
	}

	.cv-section {
		margin-bottom: 18px;
	}
	.cv-section h4 {
		font-size: 0.72rem; font-weight: 700;
		color: #64748b; text-transform: uppercase;
		letter-spacing: 1.2px;
		margin: 0 0 8px;
	}
	.cv-body-text {
		font-size: 0.86rem; color: #cbd5e1; line-height: 1.65;
		margin: 0;
	}
	.cv-data-section .cv-body-text {
		padding: 12px 14px;
		background: rgba(16, 185, 129, 0.05);
		border-left: 2px solid rgba(16, 185, 129, 0.4);
		border-radius: 6px;
	}
	.cv-counter-section .cv-body-text {
		padding: 12px 14px;
		background: rgba(239, 68, 68, 0.05);
		border-left: 2px solid rgba(239, 68, 68, 0.4);
		border-radius: 6px;
		color: #fca5a5;
	}

	.cv-shared-by {
		display: flex; flex-direction: column; gap: 8px;
	}
	.cv-share-row {
		display: flex; align-items: flex-start; gap: 10px;
		padding: 8px 10px;
		background: rgba(15, 23, 42, 0.5);
		border-radius: 8px;
		border-left: 3px solid;
	}
	.cv-book-tag {
		display: inline-block;
		padding: 3px 9px; border-radius: 10px;
		font-size: 0.7rem; font-weight: 700;
		color: #0f172a; text-decoration: none;
		flex-shrink: 0; white-space: nowrap;
		margin-top: 1px;
	}
	.cv-book-tag:hover { filter: brightness(1.1); }
	.cv-phrasing {
		font-size: 0.82rem; color: #cbd5e1; line-height: 1.55;
	}

	.cv-verdict-box {
		margin-top: 20px;
		padding: 14px 18px;
		background: rgba(15, 23, 42, 0.8);
		border-radius: 8px;
		border-left: 4px solid;
	}
	.cv-verdict-header {
		display: flex; align-items: center; gap: 8px;
		margin-bottom: 8px;
		font-size: 0.88rem;
		color: #f1f5f9;
	}
	.cv-verdict-icon { font-size: 1.1rem; font-weight: 800; }
	.cv-verdict-text {
		font-size: 0.85rem; color: #cbd5e1;
		line-height: 1.65; margin: 0;
	}

	.cv-summary {
		margin-top: 28px; padding: 22px;
		background: rgba(15, 23, 42, 0.7);
		border-radius: 10px;
		border: 1px solid rgba(148, 163, 184, 0.12);
	}
	.cv-summary h3 {
		font-size: 1rem; font-weight: 700;
		color: #e2e8f0; margin: 0 0 10px;
	}
	.cv-summary p {
		font-size: 0.86rem; color: #cbd5e1;
		line-height: 1.65; margin: 0;
	}

	@media (max-width: 640px) {
		.hero h1 { font-size: 1.5rem; }
		.graph-container { height: 60vh; min-height: 400px; }
		.node-detail { margin: 12px 0; padding: 16px; }
		.convergence-section { padding: 20px 16px; }
		.cv-header h2 { font-size: 1.2rem; }
		.cv-card-header { padding: 14px; }
		.cv-card-body { padding: 4px 14px 16px; }
	}
</style>
