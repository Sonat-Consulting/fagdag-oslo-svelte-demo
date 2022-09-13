<script lang="ts">
    import {getContext} from "svelte";
    import Steps from "./Steps.svelte";
    import Card from "./Card.svelte";
    import Success from "./Success.svelte";
    import {steps} from "../stores/steps";

    const workService = getContext<IServicesContext>("services").work
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