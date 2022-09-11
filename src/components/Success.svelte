<script lang="ts">
    import {slide} from "svelte/transition";
</script>

<div class="flex justify-center">
    <img class="rounded" src="https://c.tenor.com/Cyr2PR6E3kkAAAAC/sacha-baron.gif" alt="Great success!">
</div>
<div class="toast absolute" transition:slide={{ duration: 750 }}>
    <div class="alert alert-success shadow-xl">Good job! All done.</div>
</div>