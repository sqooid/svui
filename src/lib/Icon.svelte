<script lang="ts">
  export let size = 60
  export let x = 0
  export let y = 0
</script>

<div class="svui-icon" style={`transform:translate(${x}px,${y}px);`}>
  <slot />
</div>

<style>
  .svui-icon {
    pointer-events: none;
    aspect-ratio: 1;
  }
</style>
