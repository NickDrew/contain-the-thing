<script>
    import BarrierCheck from "./BarrierCheck.svelte";
    export let barrierChecks = []

    function updateBarrierChecks(barrierCheck) {
        const i = barrierChecks.findIndex((t) => t.id === barrierCheck.id);
        barrierChecks[i] = { ...barrierChecks[i], ...barrierCheck };
    }

</script>

<style>
    .barrier-check-outer {
        float: left;
        font: 600 1rem/1.3 Consolas, Andale Mono, monospace;
        color: white;
        margin-left:200px;
        margin-top:50px;
    }
</style>

<div class="barrier-check-outer">
    <div>Electric Fence Status</div>
    {#each barrierChecks as barrierCheck (barrierCheck.id)}
        <BarrierCheck {barrierCheck}  on:update={(e) => updateBarrierChecks(e.detail)} />
    {/each}
</div>
