<script lang="ts">
    import Steps from "./Steps.svelte";
    import Card from "./Card.svelte";
    import Success from "./Success.svelte";
    import {steps} from "../stores/steps";
    import {WorkService} from "../services/work.service";

    const workService = new WorkService()
    $: activeStep = $steps.find(step => !step.completed)
    $: success = $steps.length > 0 && !activeStep
    const completeStep = async () => await workService.completeWorkItem(activeStep.id)
</script>

<Steps steps={$steps}/>

{#if activeStep}
    <Card {activeStep} {completeStep}/>
{/if}

{#if success}
    <Success/>
{/if}