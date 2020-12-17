<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let barrierCheck;

    function update(updatedBarrierCheck) {
        barrierCheck = { ...barrierCheck, ...updatedBarrierCheck };
        dispatch("update", barrierCheck);
    }

    function barrierToggle() {
        update({ status: !barrierCheck.status });
    }
</script>

<style>
    input {
        color: green;
    }
</style>

<input type="checkbox" checked={barrierCheck.status} on:click={barrierToggle} />
