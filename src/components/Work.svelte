<script lang="ts">
    import Steps from "./Steps.svelte";
    import Card from "./Card.svelte";
    import Success from "./Success.svelte";
    import {steps} from "../stores/steps";
    import {complete} from "../services/firestore";

    $: activeStep = $steps.find(step => !step.completed)
    $: success = $steps.length > 0 && !activeStep
    const completeStep = async () => await complete(activeStep.id)
</script>

<Steps steps={$steps}/>

{#if activeStep}
    <Card {activeStep} {completeStep}/>
{/if}

{#if success}
    <Success/>
{/if}