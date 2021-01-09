<script>
	import AdminCommands from "./components/AdminCommands.svelte";
	import BarrierStatus from "./components/BarrierStatus.svelte";
	import DayNight from "./components/DayNight.svelte";
	import Guards from "./components/Guards.svelte";
	import Header from "./components/Header.svelte";
	import MainBody from "./components/MainBody.svelte";
	import PatrolCount from "./components/PatrolCount.svelte";

	import { guards, barrierChecks } from "./stores";
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
	<Header />
	<Guards bind:guards={$guards} />
	<BarrierStatus bind:barrierChecks={$barrierChecks} />
	<DayNight dayNightDuration={120000} />
	<PatrolCount bind:guards={$guards} />
	<MainBody />
	<AdminCommands bind:guards={$guards} bind:barrierChecks={$barrierChecks} />
</main>
