<script lang="ts">
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
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  :global(body) {
    --svui-font: 'Roboto', serif;
    --svui-text: #000000;
    --svui-primary: #11d3d3;
    --svui-secondary: #6279b8;
    --svui-background: #fafafa;
    --svui-elev-2: #00000033;
    --svui-elev-1: #00000011;
  }
  :global(body.dark) {
    --svui-font: 'Roboto', serif;
    --svui-text: #fefefe;
    --svui-primary: #daffed;
    --svui-secondary: #9bf3f0;
    --svui-background: #131016;
    --svui-elev-2: #ffffff33;
    --svui-elev-1: #ffffff22;
  }
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
