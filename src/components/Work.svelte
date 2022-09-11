<script lang="ts">
    import Steps from "./Steps.svelte";
    import Card from "./Card.svelte";
    import Success from "./Success.svelte";
    import {steps as store} from "../stores/steps";

    let steps = []

    store.subscribe(stepsInStore => steps = stepsInStore)

    $: activeStep = steps.find(step => !step.completed)

    const completeStep = () => {
        store.update(stepsInStore => stepsInStore.map(step => step.id === activeStep.id ? {
            ...step,
            completed: true
        } : step))
    }

</script>

<Steps {steps}/>

{#if activeStep}
    <Card {activeStep} {completeStep}/>
{:else}
    <Success/>
{/if}
