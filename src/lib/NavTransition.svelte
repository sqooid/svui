<script lang="ts">
  import { linear } from 'svelte/easing'

  export let url = ''
  export let x = 0
  export let y = 0

  const ripple = (node, { x = 0, y = 0, duration = 200, delay = 0 }) => {
    const rect = node.getBoundingClientRect()
    const radius = Math.max(rect.width, rect.height)
    return {
      delay,
      duration,
      easing: linear,
      css: (t) => `clip-path:circle(${radius * t}px at ${x}px ${y}px)`,
    }
  }
  const dummy = (node, { duration = 200 }) => {
    return { delay: 0, duration, easing: linear, css: (t) => '' }
  }
</script>

{#key url}
  <div in:ripple={{ x, y }} out:dummy class="svui-nav-transition">
    <div class="svui-nav-transition-content">
      <slot />
    </div>
  </div>
{/key}

<style>
  .svui-nav-transition {
    /* clip-path: circle(200px at 0px 100px); */
    top: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
  .svui-nav-transition-content {
    margin-left: 80px;
    pointer-events: all;
  }
</style>
