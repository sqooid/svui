<script lang="ts">
  import { SvuiEvent } from '$lib/utils/native-event'

  import { createEventDispatcher } from 'svelte'

  import { createRipple } from './util'

  const dispatch = createEventDispatcher()

  export let size = 60
  export let circle = true
  export let fill = false
  let ref

  const onClick = (e) => {
    SvuiEvent.dispatch(ref, 'navclick', { x: e.x, y: e.y })
    createRipple(e)
  }

  let iconSize = fill ? size : size / 1.41
  let padding = (size - iconSize) / 2
</script>

<button
  bind:this={ref}
  style={`width:${size}px;height:${size};padding:${padding}px`}
  class="svui-icon-nav-button"
  class:circle
  on:click={onClick}
  on:click>
  <slot size={iconSize} />
</button>

<style>
  .svui-icon-nav-button {
    overflow: hidden;
    position: relative;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: var(--svui-primary);
    color: var(--svui-background);
    aspect-ratio: 1;
    transition-property: transform, box-shadow, border-radius;
    transition-timing-function: ease-out;
    transition-duration: 0.2s;
  }
  .svui-icon-nav-button:hover,
  .svui-icon-nav-button:focus-visible {
    border-radius: 18px;
    transform: translateY(-2px);
    box-shadow: 0 2px 10px -5px #0007;
  }
  .circle {
    border-radius: 50%;
  }
</style>
