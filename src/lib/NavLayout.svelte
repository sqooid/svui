<script lang="ts">
  import { onMount } from 'svelte'
  import IconNavBar from '$lib/IconNavBar.svelte'
  import NavTransition from '$lib/NavTransition.svelte'
  import { SvuiEvent } from '$lib/utils/native-event'

  export let url = ''
  let x = 0
  let y = 0
  let ref
  onMount(() => {
    SvuiEvent.handle(ref, 'navclick', (e) => {
      x = e.x
      y = e.y
    })
  })
</script>

<div class="svui-nav-layout-wrapper" bind:this={ref}>
  <IconNavBar>
    <slot />
  </IconNavBar>
  <div class="svui-nav-layout-content">
    <NavTransition {url} {x} {y}>
      <slot name="content" />
    </NavTransition>
  </div>
</div>

<style>
  .svui-nav-layout-wrapper {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .svui-nav-layout-content {
    width: 100%;
    height: 100%;
  }
</style>
