<script lang="ts">
  import '$lib/theme.css'
  import { onMount } from 'svelte'

  export let padding = true

  let decorator

  onMount(() => {
    if (!padding) {
      console.log(decorator)
      decorator.style.padding = '0'
    }
  })
</script>

<div class="decorator" bind:this={decorator}>
  <slot />
</div>

<style>
  .decorator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    font-family: var(--svui-font);
    background-color: var(--svui-background);
    transition-property: background-color, color;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
  }
</style>
