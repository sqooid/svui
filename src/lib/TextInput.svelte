<script lang="ts">
  export let value = ''
  export let placeholder = ''
  export let invalid = false
  let focused = false
</script>

<div class="svui-text-input-wrapper">
  <input
    class="svui-text-input"
    type="text"
    bind:value
    placeholder=" "
    class:invalid />
  <label for="" class="svui-text-input-label">
    <span class="svui-text-input-label-text">
      {placeholder}
    </span>
  </label>
</div>

<style>
  .svui-text-input-wrapper {
    margin-top: 7px;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
  }
  .svui-text-input-label {
    pointer-events: none;
    font-family: var(--svui-font);
    position: absolute;
    left: 10px;
    background-color: inherit;
  }
  .svui-text-input-label-text {
    background-color: var(--svui-background);
    border-radius: 5px;
    position: absolute;
    width: max-content;
    transition: top 0.1s ease-out, color 0.1s ease-out, font-size 0.1s ease-out,
      background-color 0.2s linear;
    color: var(--svui-placeholder);
    top: 9.5px;
  }
  .svui-text-input:focus + .svui-text-input-label .svui-text-input-label-text,
  .svui-text-input:not(:placeholder-shown)
    + .svui-text-input-label
    .svui-text-input-label-text {
    color: var(--svui-primary);
    font-size: 12px;
    top: -7px;
  }
  .svui-text-input {
    background-color: var(--svui-background);
    pointer-events: all;
    background-color: inherit;
    font-family: var(--svui-font);
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 5px;
    border: 1px solid var(--svui-elev-2);
    color: var(--svui-text);
    padding: 10px;
    transition-duration: 0.2s;
  }
  .svui-text-input:focus {
    border-color: var(--svui-primary);
  }
  .svui-text-input.invalid {
    border-color: var(--svui-error);
  }
  .svui-text-input.invalid
    + .svui-text-input-label
    .svui-text-input-label-text {
    color: var(--svui-error);
  }
</style>
