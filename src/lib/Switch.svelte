<script lang="ts">
  export let checked = false
  export let disabled = false

  const onClick = () => {
    if (disabled) return
    checked = !checked
  }
</script>

<input class={'svui-switch-input'} type="checkbox" bind:checked {disabled} />
<div
  class="svui-switch-rail"
  class:checked
  on:click={onClick}
  class:disabled
  on:click>
  <div class="svui-switch-handle" class:checked />
</div>

<style>
  .svui-switch-input {
    width: 0;
    height: 0;
  }
  .svui-switch-input:focus-visible + .svui-switch-rail {
    outline: 2px solid var(--svui-secondary);
  }
  .svui-switch-rail {
    user-select: none;
    --width: 50px;
    --height: 30px;
    cursor: pointer;
    width: var(--width);
    height: var(--height);
    border-radius: 100vw;
    background-color: var(--svui-elev-2);
    transition-property: background-color, transform;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }
  .svui-switch-rail:global(.disabled) {
    cursor: auto;
    pointer-events: none;
    filter: grayscale(100%);
  }
  .svui-switch-rail:global(.checked) {
    background-color: var(--svui-primary);
  }
  .svui-switch-handle {
    --gap: 2px;
    --diameter: calc(var(--height) - 2 * var(--gap));
    width: var(--diameter);
    height: var(--diameter);
    border-radius: 50%;
    background-color: var(--svui-background);
    transform: translate(var(--gap), var(--gap));
    transition: transform 0.2s ease-out;
  }
  .svui-switch-handle:global(.checked) {
    transform: translate(
      calc(var(--width) - var(--gap) - var(--diameter)),
      var(--gap)
    );
  }
</style>
