<script lang="ts">
  import { getContext } from "svelte"
  import Ad from "./Ad.svelte"

  let searchCity: string = ""

  const adsService = getContext<IServicesContext>("services").workAdsService
  $: adsPromise = adsService.getAdsByCity(searchCity)
</script>

<input bind:value={searchCity} type="text" placeholder="Søk på by" class="mb-10 input w-full max-w-xs" />
<section>
  {#await adsPromise}
  {:then ads }
    <div class="flex flex-wrap">
      {#each ads as ad (ad.uuid)}
        <Ad {ad} />
      {/each}
    </div>
  {/await}
</section>