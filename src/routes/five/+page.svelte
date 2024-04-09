<script lang="ts">
	import type { RequestPayload } from "./+server"

  let first: number
  let second: number
  let third: number
  let fourth: number
  let fifth: number
  const minValue = 1
  const maxValue = 90
  let lotteryData: any = []
  let err_mess = false
  let no_res = false
  let show = false
  let responseDataFormatted: any = null

  // For JSON visualization
	function formatAndSetResponseData(responseData: any) {
		responseDataFormatted = JSON.stringify(responseData, null, 2)
	}

  function formats(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  async function sendDataWithForm(event: any) {
    err_mess = false
    no_res = false
    show = false
		event.preventDefault()
    if (first === second || first === third || first === fourth || first === fifth ||
        second === third || second === fourth || second === fifth ||
        third === fourth || third === fifth || fourth === fifth) {
      console.error('Error: Two or more input fields have the same value')
      err_mess = true
      return
    }

    let arr = [first, second, third, fourth, fifth]
    arr.sort((a, b) => a - b)

    first = arr[0]
    second = arr[1]
    third = arr[2]
    fourth = arr[3]
    fifth = arr[4]

		try {
      const formData: RequestPayload = {
        first,
        second,
        third,
        fourth,
        fifth
      }

			const response = await fetch('http://localhost:5173/five', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			console.log(JSON.stringify(formData));
			if (response.ok) {
				const responseData = await response.json();
					//formatAndSetResponseData(responseData);
					lotteryData = responseData.lotteryData;
					console.log('RESPONSEData:' + responseData);
          if ((!lotteryData) || lotteryData.length === 0) {
            no_res = true
          } else {
            show = true
          }
				} else {
					console.error('Server error:', response.statusText);
				}
		} catch (error) {
				console.error('Error:', error);
		}
	}
</script>

<div class="h-screen bg-no-repeat bg-cover" style="background-image: url('balls100.jpg');">
  <body class="pt-12 bg-slate-900">
    <div>
      <br>
      <p class="flex items-center justify-center font-poppins font-extrabold text-5xl text-gray-50">Search on Pick-5 Lottery</p>

      <!--<div class="response-data">
        <pre>{responseDataFormatted}</pre>
      </div>-->

      <div class="pt-10 flex flex-col items-center justify-center font-poppins text-3xl font-semibold">
        <form on:submit={sendDataWithForm}>
          <input class="rounded bg-slate-500 opacity-90 border border-gray-400 text-white font-bold text-opacity-100" type="number" bind:value={first} min={minValue} max={maxValue} required>
          <input class="rounded bg-slate-500 opacity-90 border border-gray-400 text-white font-bold text-opacity-100" type="number" bind:value={second} min={minValue} max={maxValue} required>
          <input class="rounded bg-slate-500 opacity-90 border border-gray-400 text-white font-bold text-opacity-100" type="number" bind:value={third} min={minValue} max={maxValue} required>
          <input class="rounded bg-slate-500 opacity-90 border border-gray-400 text-white font-bold text-opacity-100" type="number" bind:value={fourth} min={minValue} max={maxValue} required>
          <input class="rounded bg-slate-500 opacity-90 border border-gray-400 text-white font-bold text-opacity-100" type="number" bind:value={fifth} min={minValue} max={maxValue} required>
          <button
            class="text-white md:hover:text-lime-300 font-normal"
            id="btn"
            type="submit"
          >
          Confirm
          </button>
        </form>
      </div>
      <div class="pt-6 pb-6 flex flex-col items-center justify-center font-poppins font-bold text-white opacity-86 text-3xl">
        {#if err_mess}
          <div class="text-2xl font-normal">
            <p><i>Numbers can not be the same.</i></p>
          </div>
        {/if}

        {#if no_res === true}
          <div class="text-2xl font-normal">
            <p>No result.</p>
          </div>
        {/if}

        {#if show === true}
          <div class="flex flex-col items-center justify-center">
            {#each lotteryData as lot}
              <p><span class="text-2xl font-normal">Amount:</span> {formats(lot.f_total)} <span class="text-2xl font-normal"> Ft</span></p>
              <p><span class="text-2xl font-normal">Year/Week:</span> {lot.f_year}/{lot.f_week}</p>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </body>
</div>
