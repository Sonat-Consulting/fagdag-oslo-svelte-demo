<script lang="ts">
  import { setContext } from "svelte"
  import { WorkService } from "./service/work.service"
  import AdsListing from "./components/AdsListing.svelte"
  import { AdsService } from "./service/ads.service"

  setContext<IServicesContext>("services", { workService: new WorkService(), workAdsService: new AdsService() })
</script>

<main class="container mx-auto p-5">
  <h1 class="text-center text-4xl mb-10">Søk jobb her!</h1>
  <AdsListing />
</main>

<style>
    :global body {
        background: #AABBB1;
        min-height: 100vh;
    }
</style>