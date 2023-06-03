<script>
	import Logo from '$lib/components/Logo.svelte';
</script>

<div
	class="flex flex-col w-full top-0 absolute font-primary px-5 sm:px-11 md:px-20 lg:px-44 py-20 gap-10"
>
	<div class="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
		<a href="/" aria-label="homepage">
			<Logo />
		</a>
		<a
			href="/contact"
			class="text-md md:text-lg lg:text-2xl font-bold font-primary text-white bg-primary px-5 md:px-10 lg:px-20 py-4 hover:shadow-lg hover:brightness-110"
			>Get Involve</a
		>
	</div>
	<div class="flex">
		<h1
			class="text-white w-full lg:w-[600px] text-4xl text-center md:text-start md:text-4xl lg:text-6xl xl:text-8xl font-bold font-primary mt-20 md:mt-auto"
		>
			Care and Love for the Indigenous People
		</h1>
	</div>
</div>
