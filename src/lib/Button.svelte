<script lang="ts">
  export let label = ''
  export let primary = false
  export let disabled = false

  let type = 'normal'
  if (primary) type = 'primary'

  const onClick = (e) => {
    const x = e.offsetX
    const y = e.offsetY
    const elem = e.target
    const width = elem.getBoundingClientRect().width
    const height = elem.getBoundingClientRect().height
    const radius = Math.max(width, height)
    const ripple = document.createElement('div')
    ripple.style.left = x - radius + 'px'
    ripple.style.top = y - radius + 'px'
    ripple.style.width = radius * 2 + 'px'
    ripple.style.height = radius * 2 + 'px'
    ripple.classList.add('ripple-overlay')
    e.target.appendChild(ripple)

    setTimeout(() => {
      e.target.removeChild(ripple)
    }, 500)
  }
</script>

<button
  class={'svui-button ' + type}
  class:disabled
  on:click={onClick}
  on:click
  {disabled}>
  <span class="svui-button-text">{label}</span>
</button>

<style>
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  .svui-button :global(.ripple-overlay) {
    border-radius: 50%;
    position: absolute;
    background-color: black;
    pointer-events: none;
    animation-name: ripple;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-play-state: running;
    user-select: none;
  }
  .svui-button {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 100vw;
    padding: 10px 12px;
    font-family: var(--svui-font);
    color: var(--svui-primary);
    background-color: #0000;
    border: none;
    outline: none;
    transition-property: color, background-color, filter;
    transition-duration: 0.1s;
  }
  .svui-button:focus-visible {
    outline: 2px solid var(--svui-secondary);
  }
  .svui-button-text {
    user-select: none;
  }
  button:global(.disabled) {
    filter: grayscale(100%);
    pointer-events: none;
    cursor: auto;
  }
  button:global(.normal:hover) {
    background-color: var(--svui-hover);
  }
  button:global(.primary) {
    background-color: var(--svui-primary);
    color: var(--svui-background);
  }
  button:global(.primary:hover) {
    backdrop-filter: brightness(50%);
  }
</style>
