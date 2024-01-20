<script>
	import Hero from '$lib/components/Hero.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Verse from '$lib/components/Verse.svelte';
</script>

<svelte:head>
	<title>CLIP | Home</title>
	<meta name="description" content="Care and Love for the Indigenous People Organization" />
</svelte:head>

<Navbar />
<Hero />
<Verse />
<section class="bg-secondary">
	<h2 class="text-6xl text-primary font-bold font-primary text-center p-10">Tribal Missionaries</h2>
	<div class="flex flex-col gap-2">
		<img
			class="w-full h-[400px] object-cover object-center"
			src="https://ik.imagekit.io/x7llsy0ve/tr:w-1400,f-auto/IMG_4751.HEIC"
			alt="cliporg team group near indigenous people village"
		/>
		<img
			class="w-full h-[400px] object-cover object-[50%,80%]"
			src="https://ik.imagekit.io/x7llsy0ve/tr:w-1400,f-auto/IMG_9125__1_.PNG"
			alt="cliporg team on trucks with mountain background"
		/>
		<img
			class="w-full h-[400px] object-cover object-[50%,40%]"
			src="https://ik.imagekit.io/x7llsy0ve/tr:w-1400,f-auto/IMG_3139.HEIC"
			alt="cliporg team with indigenous people and food donations"
		/>
	</div>
</section>

<section class="bg-secondary pb-10">
	<h2 class="text-2xl lg:text-6xl text-primary font-bold font-primary text-center p-20">
		Our Mission
	</h2>

	<div class="flex flex-col gap-20">
		<div class="flex flex-col lg:flex-row px-20 md:px-44 justify-center gap-5">
			<div class="flex w-full justify-center lg:w-[500px]">
				<img
					class="rounded-2xl shadow-lg shadow-black aspect-square w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover object-[60%,80%]"
					src="https://ik.imagekit.io/x7llsy0ve/tr:w-500,f-auto/Screenshot_from_2023-06-02_18-53-19.png"
					alt="cliporg preaching the word of God to indigenous people"
				/>
			</div>
			<div class="flex flex-col w-full text-center mt-8 sm:mt-0 gap-4 lg:w-[400px]">
				<h3 class="text-primary text-4xl font-bold font-primary">We Preach the Word of God</h3>
				<p class="text-primary text-2xl md:text-3xl font-medium font-primary">
					Sharing the Word of God with indigenous people can be a way to promote spiritual guidance,
					support, and understanding within their communities.
				</p>
			</div>
		</div>

		<div class="flex flex-col-reverse lg:flex-row px-20 md:px-44 justify-center gap-5">
			<div class="flex flex-col w-full lg:w-[500px] mt-8 sm:mt-0 text-center gap-4">
				<h3 class="text-primary text-4xl font-bold font-primary">We Share The Salvation</h3>
				<p class="text-primary text-2xl md:text-3xl font-medium font-primary">
					Sharing the salvation is the act of spreading the message of hope, forgiveness, and
					redemption and help them understand their inherent value, their need for spiritual
					healing, and the opportunity to find peace and purpose in their lives.
				</p>
			</div>
			<div class="flex w-full lg:w-[500px] justify-center">
				<img
					class="rounded-2xl shadow-lg shadow-black aspect-square w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover object-[60%,80%]"
					src="https://ik.imagekit.io/x7llsy0ve/tr:f-auto,w-500/Screenshot_from_2023-06-02_18-54-02.png"
					alt="cliporg team sharing the message and salvation to indigenous people"
				/>
			</div>
		</div>

		<div class="flex flex-col lg:flex-row px-20 md:px-44 justify-center gap-5">
			<div class="flex w-full lg:w-[500px] justify-center">
				<img
					class="rounded-2xl shadow-lg shadow-black aspect-square w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover object-center"
					src="https://ik.imagekit.io/x7llsy0ve/tr:f-auto,w-500/IMG_3015.HEIC?updatedAt=1685706520566"
					alt="indigenous children gathered at a basketball court"
				/>
			</div>
			<div class="flex flex-col w-full lg:w-[500px] mt-8 sm:mt-0 text-center gap-4">
				<h3 class="text-primary text-4xl font-bold font-primary">
					We gather all the children to have fellowship
				</h3>
				<p class="text-primary text-2xl font-medium font-primary">
					Gathering children for fellowship is a wonderful way to nurture their spiritual growth,
					provide a sense of community, and create a supportive environment where they can learn and
					connect with others who share similar beliefs.
				</p>
			</div>
		</div>

		<div class="flex flex-col-reverse lg:flex-row px-20 lg:px-44 justify-center gap-5">
			<div class="flex flex-col w-full lg:w-[500px] text-center gap-4">
				<h3 class="text-primary text-4xl mt-8 sm:mt-0 font-bold font-primary">
					We also teach the chilren about the word of God
				</h3>
				<p class="text-primary text-2xl lg:text-3xl font-medium font-primary">
					Teaching children about the word of God is a valuable aspect of their spiritual
					development.
				</p>
			</div>
			<div class="flex w-full lg:w-[500px] justify-center">
				<img
					class="rounded-2xl shadow-lg shadow-black aspect-square w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover object-[60%,80%]"
					src="https://ik.imagekit.io/x7llsy0ve/tr:f-auto,w-500/IMG_3046.HEIC?updatedAt=1685706519155"
					alt="indiginous children learning about the word of God"
				/>
			</div>
		</div>
	</div>
</section>

<section class="bg-secondary pb-20">
	<h2 class="text-6xl text-primary font-bold font-primary text-center p-20">Our Programs</h2>

	<div class="flex flex-col gap-20">
		<div class="flex flex-col lg:flex-row px-20 md:px-44 justify-center gap-5">
			<div class="flex w-full lg:w-[500px] justify-center">
				<img
					class="rounded-2xl shadow-lg shadow-black aspect-square w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover object-[60%,80%]"
					src="https://ik.imagekit.io/x7llsy0ve/tr:f-auto,w-500/IMG_3146.HEIC?updatedAt=1685706521875"
					alt="cliporg team sharing food to indigenous people"
				/>
			</div>
			<div class="flex flex-col w-full lg:w-[500px] mt-8 sm:mt-0 text-center gap-4">
				<h3 class="text-primary text-4xl font-bold font-primary">Feeding Programs</h3>
				<p class="text-primary text-2xl sm:text-3xl font-medium font-primary">
					Feeding programs are initiatives that provide meals and nutritional support to
					individuals, particularly those in need, such as children, families, or vulnerable
					populations. These programs aim to address food insecurity, malnutrition, and hunger by
					offering regular access to nutritious meals.
				</p>
			</div>
		</div>

		<div class="flex flex-col-reverse lg:flex-row px-20 lg:px-44 justify-center gap-5">
			<div class="flex flex-col w-full lg:w-[500px] text-center gap-4">
				<h3 class="text-primary text-4xl mt-8 sm:mt-0 font-bold font-primary">Clothing Donation</h3>
				<p class="text-primary text-2xl md:text-3xl font-medium font-primary">
					Clothing donation is the act of giving away clothing items, shoes, and accessories to
					individuals or organizations in need. It is a charitable practice aimed at providing
					clothing to those who may not have the means to afford new or adequate attire.
				</p>
			</div>
			<div class="flex w-full lg:w-[500px] justify-center">
				<img
					class="rounded-2xl shadow-lg shadow-black aspect-square w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover object-[60%,80%]"
					src="https://ik.imagekit.io/x7llsy0ve/tr:f-auto,w-500/IMG_3091.HEIC?updatedAt=1685706521426"
					alt="indigenous people receiving clothing donation"
				/>
			</div>
		</div>
	</div>
</section>

<section class="bg-primary">
	<div class="flex px-10 md:px-20 lg:px-40 xl:px-80 py-20 flex-col gap-10 justify-center">
		<h2 class="text-lg md:text-xl lg:text-4xl text-secondary font-primary font-bold text-center">
			Are you ready to make a meaningful difference in the lives of indigenous people? Join our
			charity work focused on caring for and loving indigenous communities.
		</h2>
		<a
			href="/contact"
			class="text-lg lg:text-2xl font-primary text-primary bg-secondary font-bold p-2 lg:p-5 w-full lg:w-[400px] mx-auto text-center hover:brightness-90"
			>Get Involve Now!</a
		>
	</div>
</section>

<section class="bg-secondary">
	<div class="flex justify-center">
		<video controls>
			<track kind="captions" />
			<source
				src="https://ik.imagekit.io/x7llsy0ve/IMG_9115.mp4?updatedAt=1685713671741"
				type="video/mp4"
			/>
		</video>
	</div>
</section>
