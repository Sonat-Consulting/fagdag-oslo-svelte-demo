<script lang="ts">
  import { slide } from "svelte/transition"

  let steps: Work[] = [
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

  $: activeStep = steps.find(step => !step.completed)

  $: {
    console.log(`active step is now ${activeStep?.id}`)
  }

  const completeTask = () => {
    steps = steps.map(step => step.id === activeStep.id ? { ...step, completed: true } : step)
  }
</script>

<main class="container mx-auto p-5">
  <h1 class="text-center text-4xl mb-10">Hello world</h1>

  <div class="flex justify-center mb-10">
    <ul class="steps steps-vertical lg:steps-horizontal">
      {#each steps as step (step.id)}
        <li class="step" class:step-primary={step.completed}>{step.title}</li>
      {/each}
    </ul>
  </div>

  {#if activeStep}
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
      <div class="card-body">
        <h2 class="card-title">{activeStep.title}</h2>
        <p class="mb-3">{activeStep.description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" on:click={completeTask}>Done</button>
        </div>
      </div>
    </div>
  {:else}
    <div class="flex justify-center" transition:slide={{duration: 1500}}>
      <img src="https://c.tenor.com/Cyr2PR6E3kkAAAAC/sacha-baron.gif" alt="Great success" class="rounded">
    </div>
  {/if}
</main>

<style>
    :global body {
        background: #AABBB1;
        min-height: 100vh;
    }
</style>