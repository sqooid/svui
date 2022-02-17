<script lang="ts">
  import IconNavBar from '../lib/IconNavBar.svelte'
  import NavTransition from '../lib/NavTransition.svelte'
  export let url = ''
  export let x = 0
  export let y = 0
</script>

<div class="svui-nav-layout-wrapper">
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
