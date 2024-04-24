<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="pt-24 mx-auto text-center justify-between font-poppins font-medium text-gray-400">
	<p class="font-extrabold">{$page.status}</p>
	<div class="pt-8">
		<p>Sorry, looks like something went wrong.</p>
		<div class="pt-5 font-extrabold text-xl text-red-500">
			<a href="/">Click here to return to the Home Page</a>
		</div>
	</div>
</div>
