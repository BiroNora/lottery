<script lang="ts">
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
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
			<button
				id="hamburger-button"
				data-collapse-toggle="navbar-default"
				type="button"
				class="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
				aria-controls="navbar-default"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>

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
<main>
	<slot />
</main>
