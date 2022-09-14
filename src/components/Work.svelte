<script lang="ts">
  import Steps from "./Steps.svelte"
  import Card from "./Card.svelte"
  import Success from "./Success.svelte"

  import { steps as store } from "../stores/work.store"
  import { onDestroy } from "svelte"

  let steps: Work[] = []

  const unsubscribe = store.subscribe(stepsInStore => steps = stepsInStore)

  onDestroy(() => {
    unsubscribe()
  })

  $: activeStep = steps.find(step => !step.completed)

  $: {
    console.log(`active step is now ${activeStep?.id}`)
  }

  const completeTask = () => {
    steps = steps.map(step => step.id === activeStep.id ? { ...step, completed: true } : step)
  }
</script>

<Steps {steps} />

{#if activeStep}
  <Card {activeStep} {completeTask} />
{:else}
  <Success />
{/if}