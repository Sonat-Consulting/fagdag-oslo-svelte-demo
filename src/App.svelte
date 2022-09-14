<script lang="ts">
  import { setContext } from "svelte"
  import Work from "./components/Work.svelte"
  import Statistics from "./components/Statistics.svelte"
  import { WorkService } from "./service/work.service"
  setContext<IServicesContext>("services", { workService: new WorkService()})
</script>

<main class="container mx-auto p-5">
  <h1 class="text-center text-4xl mb-10">Work to do</h1>
  <Work />
  <Statistics />
</main>

<style>
    :global body {
        background: #AABBB1;
        min-height: 100vh;
    }
</style>