<script>
    import{push} from 'svelte-spa-router'
    export let guards = [];
    export let barrierChecks = [];

    let barrierStrength = barrierChecks.length;

    function updateGuard(guard) {
        const i = guards.findIndex((t) => t.id === guard.id);
        guards[i] = { ...guards[i], ...guard };
    }

    function toggleInGame(guard) {
        updateGuard({ ...guard, inGame: !guard.inGame });
    }

    function setBarrierStrength(value) {
        const newBarrier = [];
        console.log(value);
        for (let i = 0; i < value; i++) {
            newBarrier.push({ id: i + 1, status: true });
        }
        console.log(newBarrier);
        barrierChecks = newBarrier;
    }
</script>

<style>
    .admin-outer {
        color: white;
    }

    .active-players-container {
        display: -webkit-flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .active-players-inner {
        flex: 1;
    }
</style>

<div class="admin-outer">
    <div>ACTIVE PLAYERS</div>
    <div class="active-players-container">
        {#each guards as guard (guard.id)}
            <div class="active-players-inner">
                <div>{guard.name}</div>
                <input
                    type="checkbox"
                    checked={guard.inGame}
                    on:click={() => {
                        toggleInGame(guard);
                    }} />
            </div>
        {/each}
    </div>

    <div>
        <div>WALL STRENGTH</div>
        <input
            type="number"
            bind:value={barrierStrength}
            on:blur={() => setBarrierStrength(barrierStrength)} />
    </div>
    <!-- re-add this once guard admin is setup -->
    <!-- <button on:click={() => push('/guardmanagement')}>
        Add/remove players
    </button> -->
</div>
