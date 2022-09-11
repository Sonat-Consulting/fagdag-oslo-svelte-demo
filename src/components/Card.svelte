<script>
    export let activeStep;
    export let completeStep;
</script>

<div class="card w-96 bg-base-100 shadow-xl mx-auto">
    <div class="card-body">
        <h2 class="card-title">{activeStep.title}</h2>
        <p class="mb-3">{activeStep.description}</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary" on:click={completeStep}>Done</button>
        </div>
    </div>
</div>