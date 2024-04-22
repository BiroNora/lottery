<script lang="ts">
	import type { RequestPayload } from './+server';
	import { formats, url_router } from '../../routes/stores/dataStore';
	import { page } from '$app/stores';

	let first: number;
	let second: number;
	let third: number;
	let fourth: number;
	let fifth: number;
	const minValue = 1;
	const maxValue = 90;
	let lotteryData: any = [];
	let err_mess = false;
	let no_res = false;
	let show = false;
	let responseDataFormatted: any = null;
	let url = '';
	let folder_name = $page.url.pathname;

	// For JSON visualization
	function formatAndSetResponseData(responseData: any) {
		responseDataFormatted = JSON.stringify(responseData, null, 2);
	}

	async function sendDataWithForm(event: any) {
		err_mess = false;
		no_res = false;
		show = false;
		event.preventDefault();

		let nums = [first, second, third, fourth, fifth];
		let arr = new Set(nums);

		if (nums.length !== arr.size) {
			err_mess = true;
			return;
		}

		nums.sort((a, b) => a - b);

		first = nums[0];
		second = nums[1];
		third = nums[2];
		fourth = nums[3];
		fifth = nums[4];

		try {
			const formData: RequestPayload = {
				first,
				second,
				third,
				fourth,
				fifth
			};

			url_router(url, folder_name);

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			console.log(JSON.stringify(formData));
			if (response.ok) {
				const responseData = await response.json();
				//formatAndSetResponseData(responseData);
				lotteryData = responseData.lotteryData;
				console.log('RESPONSEData:' + responseData);
				if (!lotteryData || lotteryData.length === 0) {
					no_res = true;
				} else {
					show = true;
				}
			} else {
				console.error('Server error:', response.statusText);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}
</script>

<div class="pt-12 h-screen bg-no-repeat bg-cover" style="background-image: url('balls100.jpg');">
	<body class=" bg-slate-500">
		<div>
			<p class="p-5 text-center font-poppins md:font-extrabold md:text-5xl text-3xl text-gray-50">
				Search on Pick-5 Lottery
			</p>

			<!--<div class="response-data">
        <pre>{responseDataFormatted}</pre>
      </div>-->

			<div class="text-center flex flex-col items-center justify-center font-poppins text-3xl font-semibold">
				<form on:submit={sendDataWithForm}>
					<input
						class="md:my-0 my-1 md:mx-0 mx-0.5 rounded bg-slate-400 opacity-90 border-2 border-lime-300 text-white font-bold text-opacity-100"
						type="number"
						bind:value={first}
						min={minValue}
						max={maxValue}
						required
					/>
					<input
						class="md:my-0 my-1 md:mx-0 mx-0.5 rounded bg-slate-400 opacity-90 border-2 border-lime-300 text-white font-bold text-opacity-100"
						type="number"
						bind:value={second}
						min={minValue}
						max={maxValue}
						required
					/>
					<input
						class="md:my-0 my-1 md:mx-0 mx-0.5 rounded bg-slate-400 opacity-90 border-2 border-lime-300 text-white font-bold text-opacity-100"
						type="number"
						bind:value={third}
						min={minValue}
						max={maxValue}
						required
					/>
					<input
						class="md:my-0 my-1 md:mx-0 mx-0.5 rounded bg-slate-400 opacity-90 border-2 border-lime-300 text-white font-bold text-opacity-100"
						type="number"
						bind:value={fourth}
						min={minValue}
						max={maxValue}
						required
					/>
					<input
						class="md:my-0 my-1 md:mx-0 mx-0.5 rounded bg-slate-400 opacity-90 border-2 border-lime-300 text-white font-bold text-opacity-100"
						type="number"
						bind:value={fifth}
						min={minValue}
						max={maxValue}
						required
					/>
					<div class="md:my-0 my-1 md:mx-0 mx-0.5 md:inline">
						<button
						class="text-white md:hover:text-lime-300 font-normal text-2xl md:text-3xl"
						id="btn"
						type="submit"
					>
						Confirm
					</button>
				</form>
			</div>
			<div
				class="pt-6 pb-6 flex flex-col items-center justify-center font-poppins font-bold text-white opacity-86 text-3xl"
			>
				{#if err_mess}
					<div class="text-xl md:text-2xl font-normal">
						<p><i>Numbers can not be the same.</i></p>
					</div>
				{/if}

				{#if no_res === true}
					<div class="text-xl md:text-2xl font-normal">
						<p>No result.</p>
					</div>
				{/if}

				{#if show === true}
					<div class="flex flex-col items-center justify-center">
						{#each lotteryData as lot}
							<p>
								<span class="text-xl md:text-2xl font-normal">Amount:</span>
								{formats(lot.f_total)} <span class="text-2xl font-normal"> Ft</span>
							</p>
							<p><span class="text-xl md:text-2xl font-normal">Year/Week:</span> {lot.f_year}/{lot.f_week}</p>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</body>
</div>
