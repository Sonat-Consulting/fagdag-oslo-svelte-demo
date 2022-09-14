<script lang="ts">
  import Steps from "./Steps.svelte"
  import Card from "./Card.svelte"
  import Success from "./Success.svelte"
  import { steps } from "../stores/work.store"
  import { getContext } from "svelte"

  const workService = getContext<IServicesContext>("services").workService

  $: activeStep = $steps.find(step => !step.completed)

  $: {
    console.log(`active step is now ${activeStep?.id}`)
  }

  const completeTask = () => {
    workService.completeWorkItem(activeStep.id)
  }
</script>

<Steps steps={$steps} />

{#if activeStep}
  <Card {activeStep} {completeTask} />
{:else}
  <Success />
{/if}