<script lang="ts">
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
	let is_menu_open = false;

	function toggleMenu() {
		is_menu_open = !is_menu_open;
	}
</script>

<nav class="fixed top-0 left-0 w-full h-12 bg-teal-700">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
		<a
			href="https://github.com/BiroNora/lottery"
			target="_blank"
			class="flex items-center space-x-3 rtl:space-x-reverse"
		>
			<img src="/git.png" class="h-8" alt="Github Logo" />
			<span
				class="self-center font-poppins font-medium text-gray-100 md:hover:text-purple-300 whitespace-nowrap overflow-ellipsis text-lg sm:text-base md:text-xl lg:text-2xl hidden sm:inline"
				>See You on Github</span
			>
		</a>
		<div>
			<a
				on:click={toggleMenu}
				id="hamburger-button"
				class="text-white relative h-8 w-8 cursor-pointer text-3xl md:hidden"
				href="/"
			>
				&#9776;
			</a>

			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
				<ul
					class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
				>
					<li>
						<a
							href="/"
							class="font-poppins block py-2 px-3 text-gray-100 md:hover:text-slate-200"
							aria-current="page"
						>
							Home</a
						>
					</li>
					<li>
						<a
							href="/five"
							class="font-poppins block py-2 px-3 text-gray-100 md:hover:text-green-200"
							aria-current="page"
						>
							Pick 5</a
						>
					</li>
					<li>
						<a
							href="/six"
							class="font-poppins block py-2 px-3 text-gray-100 md:hover:text-green-200"
							aria-current="page"
						>
							Pick 6</a
						>
					</li>
					<li>
						<a
							href="/skandi"
							class="font-poppins block py-2 px-3 text-gray-100 md:hover:text-green-200"
							aria-current="page"
						>
							Skandi</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>

{#if is_menu_open}
	<nav
		class="py-8 top-12 justify-center absolute w-full origin-top flex-col text-white bg-slate-500/80 font-poppins text-4xl"
		aria-label="mobile"
	>
		<ul class="flex min-h-screen flex-col items-center">
			<li class="pt-6 pb-7">
				<a on:click={toggleMenu} href="/five" class="w-full py-6 text-center font-medium">Pick 5</a>
			</li>
			<li class="pb-7">
				<a on:click={toggleMenu} href="/six" class="w-full py-6 text-center font-medium">Pick 6</a>
			</li>
			<li class="pb-7">
				<a href="/skandi" on:click={toggleMenu} class="w-full py-6 text-center font-medium"
					>Skandi</a
				>
			</li>
			<li class="pt-10">
				<a
					href="/"
					on:click={toggleMenu}
					class="w-full py-8 text-5xl text-red-500 font-bold text-center">Home</a
				>
			</li>
		</ul>
	</nav>
{/if}

<main>
	<slot />
</main>
