<script lang="ts">
  export let value = ''
  export let placeholder = ''
  let textInputRef
  let textInputLabelTextRef
  let focused = false

  const onFocus = (e) => {
    console.log(e)
    focused = true
  }
  const onBlur = (e) => {
    if (value.length === 0) {
      focused = false
    }
  }
</script>

<div class="svui-text-input-wrapper">
  <input
    class="svui-text-input"
    type="text"
    bind:value
    on:focus={onFocus}
    on:blur={onBlur} />
  <label for="" class="svui-text-input-label">
    <span class="svui-text-input-label-text" class:focused>
      {placeholder}
    </span>
  </label>
</div>

<style>
  .svui-text-input-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: inherit;
  }
  .svui-text-input-label {
    pointer-events: none;
    font-family: var(--svui-font);
    position: absolute;

    left: 10px;
    background-color: inherit;
  }
  .svui-text-input-label-text {
    position: absolute;
    background-color: inherit;
    width: max-content;
    transition-property: transform color;
    transition-timing-function: ease-out;
    transition-duration: 0.1s;
    color: var(--svui-outline);
    top: 9.5px;
  }
  :global(.svui-text-input-label-text.focused) {
    color: var(--svui-primary);
    font-size: 12px;
    top: -7px;
  }
  .svui-text-input {
    pointer-events: all;
    font-family: var(--svui-font);
    border: none;
    outline: none;
    border-radius: 5px;
    border: 1px solid var(--svui-outline);
    padding: 10px;
  }
</style>
