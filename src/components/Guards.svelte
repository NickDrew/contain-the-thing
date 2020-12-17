<script>
    import Guard from "./Guard.svelte";
</script>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        background-image:url("/images/screenbackground.jpg");
        background-repeat:round;
        padding-left: 30px;
        padding-top: 15px;
        height:fit-content;
        border-radius: 5px;
    }
</style>

<div>
    <Guard />
    <Guard />
    <Guard />
    <Guard />
    <Guard />
    <Guard />
    <Guard />
    <Guard />
    <Guard />
    <Guard />
</div>
