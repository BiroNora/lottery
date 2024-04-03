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
  let err_mess1 = false
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
    err_mess1 = false
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

    if (first > second || second > third || third > fourth || fourth > fifth) {
      console.error('Error: Numbers must be in ascending order')
      err_mess1 = true
      return
    }

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

<body >
  <div class="main w-full h-full bg-no-repeat bg-cover" style="background-image: url('balls111.png');">
		<h1 >Search on Pick-5 Lottery</h1>
	  <br>

    <!--<div class="response-data">
      <pre>{responseDataFormatted}</pre>
    </div>-->

    <div class="h-screen flex items-center justify-center font-poppins text-3xl font-semibold">
      <form on:submit={sendDataWithForm}>
        <input class="rounded bg-slate-500 opacity-90 text-white font-bold text-opacity-100" type="number" bind:value={first} min={minValue} max={maxValue} required>
        <input class="rounded bg-slate-500 opacity-90 text-white font-bold text-opacity-100" type="number" bind:value={second} min={minValue} max={maxValue} required>
        <input class="rounded bg-slate-500 opacity-90 text-white font-bold text-opacity-100" type="number" bind:value={third} min={minValue} max={maxValue} required>
        <input class="rounded bg-slate-500 opacity-90 text-white font-bold text-opacity-100" type="number" bind:value={fourth} min={minValue} max={maxValue} required>
        <input class="rounded bg-slate-500 opacity-90 text-white font-bold text-opacity-100" type="number" bind:value={fifth} min={minValue} max={maxValue} required>
        <button
          class="text-white"
          id="btn"
          type="submit"
        >
        Confirm
        </button>
        {#if err_mess}
          <div class="text-white opacity-86 text-lg" style="margin-bottom: 8rem;">
            <p><i>Numbers can not be the same.</i></p>
          </div>
        {/if}

        {#if err_mess1}
          <div class="text-white opacity-86 text-lg font-semibold" style="margin-bottom: 8rem;">
            <p><i>Numbers must be in increasing order.</i></p>
          </div>
        {/if}
      </form>
    </div>


    {#if no_res === true}
      <div class="container" style="margin-bottom: 8rem;">
        <p><i>No result.</i></p>
      </div>
    {/if}
    {#if show === true}
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Year / Week</th>
            </tr>
          </thead>
          <tbody>
            {#each lotteryData as lot}
              <tr>{formats(lot.f_total)} Ft</tr>
              <tr>{lot.f_year} / {lot.f_week}</tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
</div>
</body>

<style>

</style>
