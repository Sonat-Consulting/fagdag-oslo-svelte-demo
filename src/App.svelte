<script lang="ts">
  let work: Work = {
    id: "1",
    title: "Present svelte",
    description: "Explain what Svelte is",
    completed: false
  }
</script>

<main class="container mx-auto p-5">
  <h1 class="text-center text-4xl mb-10">Hello world</h1>

  <div class="flex justify-center mb-10">
    <ul class="steps steps-vertical lg:steps-horizontal">
      <li class="step">Step 1</li>
      <li class="step">Step 2</li>
      <li class="step">Step 3</li>
      <li class="step">Step 4</li>
    </ul>
  </div>


  <div class="card w-96 bg-base-100 shadow-xl mx-auto">
    <div class="card-body">
      <h2 class="card-title">{work.title}</h2>
      <p class="mb-3">{work.description}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Done</button>
      </div>
    </div>
  </div>
</main>

<style>
    :global body {
        background: #AABBB1;
        min-height: 100vh;
    }
</style>