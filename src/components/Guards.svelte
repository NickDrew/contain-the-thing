<script>
    import Guard from "./Guard.svelte";
    export let guards = [];

    $: playingGuards = guards.filter((guard) => guard.inGame);

    function updateGuard(guard) {
        const i = guards.findIndex((t) => t.id === guard.id);
        guards[i] = { ...guards[i], ...guard };
    }
</script>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        background-image: url("/images/screenbackground.jpg");
        background-repeat: round;
        padding-left: 30px;
        padding-top: 15px;
        height: fit-content;
        border-radius: 5px;
    }
</style>

<div>
    {#each playingGuards as guard (guard.id)}
        <Guard {guard} on:update={(e) => updateGuard(e.detail)} />
    {/each}
</div>
