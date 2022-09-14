<script lang="ts">
  export let steps: Work[] = []
</script>

<div class="flex justify-center mb-10">
  <ul class="steps steps-vertical lg:steps-horizontal">
    {#each steps as step (step.id)}
      <li class="step" class:step-primary={step.completed}>{step.title}</li>
    {/each}
  </ul>
</div>