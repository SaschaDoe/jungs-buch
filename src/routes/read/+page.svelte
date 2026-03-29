<script lang="ts">
	import { onMount } from 'svelte';

	let pdfDoc: any = null;
	let currentPage = $state(1);
	let totalPages = $state(0);
	let scale = $state(1.0);
	let loading = $state(true);
	let loadProgress = $state(0);
	let continuousMode = $state(true);
	let container: HTMLDivElement;
	let rendering = false;
	let renderedPages = new Map<number, HTMLCanvasElement>();

	onMount(async () => {
		const pdfjsLib = await import('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs');
		pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs';

		const loadingTask = pdfjsLib.getDocument('/raising-boys.pdf');
		loadingTask.onProgress = (progress: any) => {
			if (progress.total > 0) {
				loadProgress = Math.round((progress.loaded / progress.total) * 100);
			}
		};

		pdfDoc = await loadingTask.promise;
		totalPages = pdfDoc.numPages;
		loading = false;

		await fitToWidth();
	});

	async function renderPage(num: number): Promise<HTMLCanvasElement> {
		const page = await pdfDoc.getPage(num);
		const dpr = window.devicePixelRatio || 1;
		const viewport = page.getViewport({ scale: scale * dpr });
		const displayViewport = page.getViewport({ scale });

		const canvas = document.createElement('canvas');
		canvas.width = viewport.width;
		canvas.height = viewport.height;
		canvas.style.width = displayViewport.width + 'px';
		canvas.style.height = displayViewport.height + 'px';
		canvas.dataset.page = String(num);

		const ctx = canvas.getContext('2d')!;
		await page.render({ canvasContext: ctx, viewport }).promise;
		return canvas;
	}

	async function renderAllPages() {
		if (!container || !pdfDoc) return;
		container.innerHTML = '';
		renderedPages.clear();

		for (let i = 1; i <= pdfDoc.numPages; i++) {
			const canvas = await renderPage(i);
			container.appendChild(canvas);
			renderedPages.set(i, canvas);
		}
	}

	async function renderSinglePage(num: number) {
		if (!container || !pdfDoc) return;
		container.innerHTML = '';
		renderedPages.clear();
		const canvas = await renderPage(num);
		container.appendChild(canvas);
		renderedPages.set(num, canvas);
		currentPage = num;
		container.scrollTop = 0;
	}

	async function rerender() {
		if (rendering) return;
		rendering = true;
		if (continuousMode) {
			await renderAllPages();
			const target = renderedPages.get(currentPage);
			if (target) target.scrollIntoView({ behavior: 'instant' });
		} else {
			await renderSinglePage(currentPage);
		}
		rendering = false;
	}

	async function fitToWidth() {
		if (!pdfDoc || !container) return;
		const page = await pdfDoc.getPage(1);
		const viewport = page.getViewport({ scale: 1 });
		const containerWidth = container.clientWidth - 48;
		scale = containerWidth / viewport.width;
		await rerender();
	}

	function handleScroll() {
		if (!continuousMode || !container) return;
		const canvases = container.querySelectorAll('canvas');
		const containerRect = container.getBoundingClientRect();
		const containerMid = containerRect.top + containerRect.height / 3;

		for (const canvas of canvases) {
			const rect = canvas.getBoundingClientRect();
			if (rect.top <= containerMid && rect.bottom > containerMid) {
				const pageNum = parseInt(canvas.dataset.page || '1');
				if (pageNum !== currentPage) {
					currentPage = pageNum;
				}
				break;
			}
		}
	}

	function prevPage() {
		if (currentPage <= 1) return;
		currentPage--;
		if (continuousMode) {
			const target = renderedPages.get(currentPage);
			if (target) target.scrollIntoView({ behavior: 'smooth' });
		} else {
			renderSinglePage(currentPage);
		}
	}

	function nextPage() {
		if (!pdfDoc || currentPage >= pdfDoc.numPages) return;
		currentPage++;
		if (continuousMode) {
			const target = renderedPages.get(currentPage);
			if (target) target.scrollIntoView({ behavior: 'smooth' });
		} else {
			renderSinglePage(currentPage);
		}
	}

	function goToPage(e: Event) {
		const input = e.target as HTMLInputElement;
		let num = parseInt(input.value);
		if (isNaN(num) || num < 1) num = 1;
		if (num > totalPages) num = totalPages;
		currentPage = num;
		if (continuousMode) {
			const target = renderedPages.get(num);
			if (target) target.scrollIntoView({ behavior: 'smooth' });
		} else {
			renderSinglePage(num);
		}
	}

	function zoomIn() {
		scale = Math.min(scale + 0.15, 4);
		rerender();
	}

	function zoomOut() {
		scale = Math.max(scale - 0.15, 0.25);
		rerender();
	}

	function toggleView() {
		continuousMode = !continuousMode;
		rerender();
	}

	function handleKeydown(e: KeyboardEvent) {
		if ((e.target as HTMLElement).tagName === 'INPUT') return;
		if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prevPage(); }
		if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); nextPage(); }
		if (e.key === '+' || e.key === '=') { e.preventDefault(); zoomIn(); }
		if (e.key === '-') { e.preventDefault(); zoomOut(); }
	}
</script>

<svelte:head>
	<title>Read the Book — Raising Boys</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<svelte:window onkeydown={handleKeydown} onresize={() => fitToWidth()} />

<div class="app">
	<!-- Header -->
	<header class="reader-header">
		<div class="header-left">
			<a href="/" class="back-link">&larr; Hauptseite</a>
			<a href="/outline" class="back-link">Outline</a>
		</div>
		<div class="header-center">
			<h1>Raising Boys</h1>
			<p class="header-subtitle">What the Science Actually Says</p>
		</div>
		<div class="header-right">
			<a href="/raising-boys.pdf" download="Raising-Boys.pdf" class="btn btn-download">
				<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
				Download PDF
			</a>
		</div>
	</header>

	<!-- Controls -->
	<div class="pdf-controls">
		<button class="ctrl-btn" onclick={prevPage} title="Previous page">
			<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
		</button>

		<span class="page-info">
			Page
			<input
				type="number"
				class="page-input"
				min="1"
				max={totalPages}
				value={currentPage}
				onchange={goToPage}
			/>
			of {totalPages}
		</span>

		<button class="ctrl-btn" onclick={nextPage} title="Next page">
			<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
		</button>

		<div class="divider"></div>

		<button class="ctrl-btn" onclick={zoomOut} title="Zoom out">
			<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 13H5v-2h14v2z"/></svg>
		</button>
		<span class="zoom-label">{Math.round(scale * 100)}%</span>
		<button class="ctrl-btn" onclick={zoomIn} title="Zoom in">
			<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
		</button>
		<button class="ctrl-btn" onclick={() => fitToWidth()} title="Fit to width">
			<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/></svg>
		</button>

		<div class="divider"></div>

		<button class="ctrl-btn" onclick={toggleView} title="Toggle single/continuous view">
			<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
				{#if continuousMode}
					<path d="M3 5h18v2H3V5zm0 4h18v2H3V9zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
				{:else}
					<path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z"/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- PDF Viewer -->
	{#if loading}
		<div class="loading">
			<div class="spinner"></div>
			<p>Loading book...</p>
			{#if loadProgress > 0}
				<p class="progress">{loadProgress}%</p>
			{/if}
		</div>
	{/if}

	<div class="pdf-container" bind:this={container} onscroll={handleScroll}></div>
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
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	/* Header */
	.reader-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1.5rem;
		background: rgba(30, 41, 59, 0.8);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(148, 163, 184, 0.1);
		flex-shrink: 0;
	}

	.header-left {
		display: flex;
		gap: 1rem;
	}

	.back-link {
		font-size: 0.82rem;
		color: #94a3b8;
		text-decoration: none;
		transition: color 0.2s;
	}
	.back-link:hover { color: #e2e8f0; }

	.header-center {
		text-align: center;
	}

	.header-center h1 {
		font-size: 1.1rem;
		font-weight: 700;
		color: #f1f5f9;
		margin: 0;
		line-height: 1.2;
	}

	.header-subtitle {
		font-size: 0.75rem;
		color: #64748b;
		margin: 2px 0 0;
	}

	.header-right {
		display: flex;
		gap: 0.5rem;
	}

	.btn-download {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.5rem 1rem;
		background: linear-gradient(135deg, #3b82f6, #2563eb);
		color: white;
		border-radius: 8px;
		font-size: 0.82rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s;
	}
	.btn-download:hover {
		background: linear-gradient(135deg, #60a5fa, #3b82f6);
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
	}

	/* Controls */
	.pdf-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.4rem 1.5rem;
		background: #1e293b;
		border-bottom: 1px solid rgba(148, 163, 184, 0.1);
		flex-shrink: 0;
	}

	.ctrl-btn {
		background: none;
		border: 1px solid #334155;
		color: #94a3b8;
		width: 32px;
		height: 32px;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s;
	}
	.ctrl-btn:hover {
		background: #334155;
		color: #e2e8f0;
	}

	.page-info {
		font-size: 0.82rem;
		color: #94a3b8;
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.page-input {
		width: 48px;
		background: #0f172a;
		border: 1px solid #334155;
		color: #e2e8f0;
		padding: 3px 6px;
		border-radius: 4px;
		text-align: center;
		font-size: 0.82rem;
		font-family: inherit;
	}

	.zoom-label {
		font-size: 0.82rem;
		color: #94a3b8;
		min-width: 40px;
		text-align: center;
	}

	.divider {
		width: 1px;
		height: 20px;
		background: #334155;
		margin: 0 0.25rem;
	}

	/* PDF Container */
	.pdf-container {
		flex: 1;
		overflow: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1.5rem;
		gap: 1rem;
	}

	.pdf-container :global(canvas) {
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
		border-radius: 2px;
	}

	/* Loading */
	.loading {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 3px solid #334155;
		border-top: 3px solid #3b82f6;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	.loading p {
		color: #94a3b8;
		font-size: 0.9rem;
		margin: 0;
	}

	.progress {
		color: #64748b !important;
		font-size: 0.82rem !important;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.reader-header {
			flex-direction: column;
			gap: 0.5rem;
			padding: 0.5rem 1rem;
		}
		.header-left { order: 1; }
		.header-center { order: 0; }
		.header-right { order: 2; }
		.pdf-controls {
			flex-wrap: wrap;
			padding: 0.4rem 0.75rem;
		}
		.pdf-container { padding: 0.5rem; }
	}

	@media (max-width: 480px) {
		.btn-download span { display: none; }
		.header-center h1 { font-size: 0.95rem; }
	}
</style>
