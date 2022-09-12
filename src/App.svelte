<script lang="ts">
    import Work from "./components/Work.svelte";
    import Statistics from "./components/Statistics.svelte";
</script>

<main class="container mx-auto p-5">
    <h1 class="text-center text-4xl">Work to be done</h1>
    <Work/>
    <Statistics/>
</main>

<style>
    :global body {
        min-height: 100vh;
        background: #a1bdb0;
    }
</style>