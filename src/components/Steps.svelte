<script>
    export let steps;
</script>

<div class="container rounded-xl p-5 flex justify-center mb-10 text-white">
    <ul class="steps steps-vertical lg:steps-horizontal">
        {#each steps as step (step.id)}
            <li class="step text-black" class:step-primary={step.completed}>{step.title}</li>
        {/each}
    </ul>
</div>