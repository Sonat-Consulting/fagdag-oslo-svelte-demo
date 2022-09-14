<script lang="ts">
  let work: Work = {
    id: "1",
    title: "Present svelte",
    description: "Explain what Svelte is",
    completed: false
  }

  const steps: Work[] = [
    {
      id: "1",
      title: "Getting started",
      completed: true,
      description: "Set up project and install dependencies"
    },
    {
      id: "2",
      title: "Creating sub components",
      completed: false,
      description: "Create sub component to show how Svelte code modularization works"
    },
    {
      id: "3",
      title: "Passing props",
      completed: false,
      description: "Demonstrate how data is passed between components in Svelte"
    },
    {
      id: "4",
      title: "Triggering events",
      completed: false,
      description: "Demonstrate how sub components can notify parent components of data change"
    },
    {
      id: "5",
      title: "Finalize",
      completed: false,
      description: "Do this one last thing"
    }
  ]
</script>

<main class="container mx-auto p-5">
  <h1 class="text-center text-4xl mb-10">Hello world</h1>

  <div class="flex justify-center mb-10">
    <ul class="steps steps-vertical lg:steps-horizontal">
      {#each steps as step (step.id)}
        <li class="step">{step.title}</li>
      {/each}
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