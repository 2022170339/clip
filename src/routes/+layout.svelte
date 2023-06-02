<script>
	import '../app.postcss';
	import '@fontsource/poppins';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col w-full min-h-screen h-full">
	<slot />
	<Footer />
</div>
