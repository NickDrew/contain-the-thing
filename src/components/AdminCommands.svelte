<script>
    export let guards = [];
    export let barrierChecks = [];

    let barrierStrength = barrierChecks.length
    
    function updateGuard(guard) {
        const i = guards.findIndex((t) => t.id === guard.id);
        guards[i] = { ...guards[i], ...guard };
    }

    

    function toggleInGame(guard) {
        updateGuard({ ...guard, inGame: !guard.inGame });
    }

    function setBarrierStrength(value){
        const newBarrier = []
        console.log(value)
        for(let i=0; i<value; i++)
        {
            newBarrier.push({id:i+1,status: true })
        }
        console.log(newBarrier)
        barrierChecks = newBarrier;
    }
</script>

<style>
    .admin-outer {
        color: white;
    }
</style>

<div class="admin-outer">
    ADMIN PANEL
    <div>
        ACTIVE PLAYERS

        {#each guards as guard (guard.id)}
            <div>{guard.name}</div>
            <input
                type="checkbox"
                checked={guard.inGame}
                on:click={() => {
                    toggleInGame(guard);
                }} />
        {/each}
    </div>

    <div>
        <div>WALL STRENGTH</div>
    <input type="number" bind:value={barrierStrength} on:blur={()=>setBarrierStrength(barrierStrength)}/>
    </div>
</div>
