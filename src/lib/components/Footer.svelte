<script>
	import { Facebook, Twitter, Instagram } from 'lucide-svelte';
	import Logo from '$lib/components/Logo.svelte';
	let year = new Date().getFullYear();
</script>

<footer
	class="flex mt-auto w-full h-28 px-44 py-7 items-end font-primary bg-primary text-secondary justify-between"
>
	<div class="flex items-end gap-2">
		<a href="/" aria-label="homepage">
			<Logo />
		</a>
		<copyright class="font-normal text-sm mb-1 font-primary">
			Copyright © {year} Clip Org
		</copyright>
	</div>

	<div class="flex flex-row items-end gap-2 font-primary text-secondary">
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
