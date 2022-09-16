<script lang="ts">
  export let ad: Ad
</script>


<div class="card w-96 bg-base-100 shadow-xl mx-auto mb-10">
  <div class="card-body">
    <h2 class="card-title">{ad.title}</h2>
    {#each ad.workLocations as location (location.city)}
      <div class="badge badge-accent">{location.city}</div>
    {/each}
    <p class="mb-3 hidden">{@html ad.description}</p>
    <div class="card-actions justify-end">
      <label for="my-modal" class="btn modal-button">Les mer</label>
      <a class="btn btn-primary" href={ad.applicationUrl} target="_blank">Søk her</a>
    </div>
  </div>
</div>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{ad.title}</h3>
    <p class="py-4">{@html ad.description}</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>

<style>

</style>