<script lang="ts">
  import { getContext } from "svelte"
  import Ad from "./Ad.svelte"

  const adsService = getContext<IServicesContext>("services").workAdsService
  let adsPromise = adsService.getAds()
</script>

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