<script lang="ts">
  import SvuiRoot from '$lib/SvuiRoot.svelte'
  import Switch from '$lib/Switch.svelte'

  // import '$lib/theme.css'
  import { onMount } from 'svelte'

  export let padding = true

  let decorator
  let darkMode = false
  $: theme = darkMode ? 'dark' : 'light'

  onMount(() => {
    if (!padding) {
      console.log(decorator)
      decorator.style.padding = '0'
    }
  })
</script>

<div class="decorator" bind:this={decorator}>
  <SvuiRoot global {theme}>
    <slot />
    <div class="theme-switch">
      <Switch bind:checked={darkMode} />
    </div>
  </SvuiRoot>
</div>

<style>
  .decorator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
  }
  .theme-switch {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
</style>
