<script>
	import Router from 'svelte-spa-router';
	import routes from './router';
</script>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<Router {routes}/>
</main>
