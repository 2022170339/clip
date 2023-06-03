<script>
	import { Facebook, Twitter, Instagram } from 'lucide-svelte';
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
			Copyright © {year} Clip Org
		</p>
	</div>
	<div class="flex text-md font-primary font-normal">
		<a href="https://www.linkedin.com/in/redenvalerio/" class="hover:underline text-md" aria-label="Redentor Valerio's linkedin page" target="_blank">
			Made by Redentor Valerio
		</a>
	</div>
	<div class="flex flex-row items-end gap-2 font-primary text-white text-md font-normal">
		<p>Follow us on</p>
		<ul class="flex flex-row gap-2">
			<li class="flex h-10 w-10">
				<a
					href="/"
					class=" rounded-full border-4 border-secondary p-1 items-center justify-center"
					aria-label="facebook"
				>
					<Facebook />
				</a>
			</li>
			<li class="flex h-10 w-10">
				<a
					href="/"
					class=" rounded-full border-4 border-secondary p-1 items-center justify-center"
					aria-label="twitter"
				>
					<Twitter />
				</a>
			</li>
			<li class="flex h-10 w-10">
				<a
					href="/"
					class=" rounded-full border-4 border-secondary p-1 items-center justify-center"
					aria-label="instagram"
				>
					<Instagram />
				</a>
			</li>
		</ul>
	</div>
</footer>
