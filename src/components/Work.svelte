<script lang="ts">
  import Steps from "./Steps.svelte"
  import Card from "./Card.svelte"
  import Success from "./Success.svelte"
  import { steps } from "../stores/work.store"

  $: activeStep = $steps.find(step => !step.completed)

  $: {
    console.log(`active step is now ${activeStep?.id}`)
  }

  const completeTask = () => {
    steps.update(currentStepsInStore =>
      currentStepsInStore.map(step => step.id === activeStep.id ? { ...step, completed: true } : step)
    )
  }
</script>

<Steps steps={$steps} />

{#if activeStep}
  <Card {activeStep} {completeTask} />
{:else}
  <Success />
{/if}