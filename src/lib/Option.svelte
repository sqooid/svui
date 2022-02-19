<script lang="ts">
  export let title
  export let description = ''
  export let color = ''
  export let image = ''
  export let ref
</script>

<div
  class="svui-option"
  tabindex="0"
  bind:this={ref}
  on:click|stopPropagation
  on:keydown>
  {#if color}
    <div class="svui-option-color" style={`background-color:${color}`} />
  {:else if image}
    <img class="svui-option-image" src={image} alt={title} />
  {/if}
  <div>
    <span class="svui-option-title">{title}</span>
    <br />
    {#if description}
      <span class="svui-option-description">
        {description}
      </span>
    {/if}
  </div>
</div>

<style>
  .svui-option {
    padding: 10px;
    cursor: pointer;
    background-color: var(--svui-background);
    color: var(--svui-text);
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
  .svui-option * {
    pointer-events: none;
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
    background-color: var(--svui-elev-1);
  }

  .svui-option-title {
  }
  .svui-option-description {
    font-size: 80%;
  }
  .svui-option-color {
    border-radius: 5px;
    width: 39px;
    height: 39px;
  }
  .svui-option-image {
    object-fit: cover;
    width: 39px;
    height: 39px;
  }
</style>
