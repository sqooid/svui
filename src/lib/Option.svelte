<script lang="ts">
  export let value
  export let title
  export let description = ''
  export let color = ''
  export let image = ''
  export let ref
</script>

<div class="svui-option" tabindex="0" bind:this={ref} on:click on:keydown>
  <span>{title}</span>
  {#if description}
    <span>
      {description}
    </span>
  {/if}
</div>

<style>
  .svui-option {
    padding: 10px;
    cursor: pointer;
    background-color: var(--svui-elev-1);
    color: var(--svui-text);
  }
  .svui-option:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .svui-option:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .svui-option:hover,
  .svui-option:focus-visible {
    outline: none;
    background-color: var(--svui-elev-2);
  }
</style>
