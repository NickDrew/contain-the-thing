<script>
    export let guards = [];
    $: patrolCount = 0;
    $: livingGuards = guards.filter((guard) => {
        return guard.alive;
    }).length;
    $: maxPatrolCount = livingGuards > 6 ? 6 : livingGuards;

    function generatePatrolSize() {
        patrolCount = Math.floor(Math.random() * maxPatrolCount) +1;
        patrolCount = patrolCount < 3? 3:patrolCount;
        console.log(maxPatrolCount)
    }

</script>

<style>
    .patrol-count-outer {
        font: 600 1rem/1.3 Consolas, Andale Mono, monospace;
        color: white;
        margin-top:50px;
    }
</style>

<div class="patrol-count-outer">
    <button on:click={()=>{generatePatrolSize()}}>Generate Patrol</button>
    Patrol Count
    <div>{patrolCount}</div>
</div>
