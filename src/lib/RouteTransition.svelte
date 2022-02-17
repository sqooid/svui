<script lang="ts">
  import { fly } from 'svelte/transition'
  export let url = ''
</script>

{#key url}
  <div in:fly={{ x: -5 }} out:fly={{ x: 5 }}>
    <slot />
  </div>
{/key}

<style>
</style>
