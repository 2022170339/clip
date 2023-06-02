<script>
	import '../app.postcss';
	import '@fontsource/poppins';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import Footer from '$lib/components/Footer.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="flex flex-col w-full min-h-screen h-full">
	<slot />
	<Footer />
</div>
