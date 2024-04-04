<script lang="ts">
	import type { RequestPayload } from "./+server"

  let first: number
  let second: number
  let third: number
  let fourth: number
  let fifth: number
  let sixth: number
  const minValue = 1
  const maxValue = 45
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
    if (first === second || first === third || first === fourth || first === fifth || first === sixth ||
        second === third || second === fourth || second === fifth || second === sixth ||
        third === fourth || third === fifth || third === sixth ||
        fourth === fifth || fourth === sixth ||
        fifth === sixth) {
      console.error('Error: Two or more input fields have the same value')
      err_mess = true
      return
    }

    let arr = [first, second, third, fourth, fifth, sixth]
    arr.sort((a, b) => a - b)

    first = arr[0]
    second = arr[1]
    third = arr[2]
    fourth = arr[3]
    fifth = arr[4]
    sixth = arr[5]

		try {
      const formData: RequestPayload = {
        first,
        second,
        third,
        fourth,
        fifth,
        sixth
      }

			const response = await fetch('http://localhost:5173/six', {
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

<div class="main">
		<h1 >Search on Pick-6 Lottery</h1>
	<br>

  <!--<div class="response-data">
		<pre>{responseDataFormatted}</pre>
	</div>-->

  <div>
    <form on:submit={sendDataWithForm}>
      <input type="number" bind:value={first} min={minValue} max={maxValue} required>
      <input type="number" bind:value={second} min={minValue} max={maxValue} required>
      <input type="number" bind:value={third} min={minValue} max={maxValue} required>
      <input type="number" bind:value={fourth} min={minValue} max={maxValue} required>
      <input type="number" bind:value={fifth} min={minValue} max={maxValue} required>
      <input type="number" bind:value={sixth} min={minValue} max={maxValue} required>
      <button
        class="btn"
        id="btn"
        type="submit"
      >
      Confirm
	    </button>
      {#if err_mess}
        <div class="container" style="margin-bottom: 8rem;">
          <p><i>Numbers can not be the same.</i></p>
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
            <tr>{formats(lot.s_total)} Ft</tr>
            <tr>{lot.s_year} / {lot.s_week}</tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>

<div>

</div>

<style>

</style>
