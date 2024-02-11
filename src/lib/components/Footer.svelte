<script>
	import Logo from '$lib/components/Logo.svelte';
	let year = new Date().getFullYear();
</script>

<footer
	class="flex flex-col-reverse lg:flex-row gap-4 mt-auto w-full h-full px-10 lg:px-44 py-5 items-start font-primary bg-primary text-white font-semibold justify-start sm:justify-between min-h-10 lg:items-end"
>
	<div class="flex flex-row items-end gap-2">
		<a href="/" aria-label="homepage">
			<Logo />
		</a>
		<p class="font-normal text-md mb-1 font-primary text-white">
			Copyright © {year} Clip
		</p>
	</div>
</footer>
