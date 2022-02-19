<script lang="ts">
  import Option from '$lib/Option.svelte'
  import { wildcardStrInObj } from '$lib/utils/search'
  import { expand } from '$lib/utils/transition'

  export let disabled = false
  export let searchable = false
  export let placeholder = 'Select'
  export let options: Option[] = []

  interface Option {
    value: string
    title: string
    description?: string
    color?: string
    image?: string
  }

  export let value = ''
  let inputValue = ''
  $: value = selected ? selected.value : ''
  let selected: Option = { value: '', title: '' }
  let expanded = false
  let focused = false
  let valid = true
  let edited = false

  $: filteredOptions = options.filter((option) => {
    return wildcardStrInObj(inputValue, option, { ignore: ['image', 'color'] })
  })
  let optionRefs: HTMLElement[] = []
  for (let i = 0; i < options.length; ++i) {
    optionRefs.push(null)
  }
  let inputRef: HTMLElement

  const onInput = () => {
    edited = true
  }

  const outerClickListener = (e: MouseEvent) => {
    if ([inputRef, ...optionRefs].indexOf(e.target as HTMLElement) === -1) {
      onBlur()
      document.documentElement.removeEventListener(
        'mousedown',
        outerClickListener,
      )
    }
  }

  const onFocus = () => {
    if (disabled) return
    focused = true
    expanded = true
    document.documentElement.addEventListener('mousedown', outerClickListener, {
      capture: true,
    })
  }
  const onBlur = () => {
    if (!inputValue) focused = false
    expanded = false
    valid = !edited
    inputRef.blur()
  }
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onBlur()
      return
    }
    if (e.key === 'ArrowDown') {
      if (optionRefs[0]) optionRefs[0].focus()
      return
    }
    if (e.key === 'Enter') {
      if (filteredOptions[0]) {
        onSelect(0)
      }
      return
    }
  }

  const onSelect = (index: number) => {
    value = filteredOptions[index].value
    inputValue = filteredOptions[index].title
    edited = false
    onBlur()
  }
  const onKeyDownOption = (e: KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      onSelect(index)
      return
    }
    if (e.key === 'Escape') {
      onBlur()
      return
    }
    if (e.key === 'ArrowUp') {
      if (index > 0) optionRefs[index - 1].focus()
      else inputRef.focus()
      return
    }
    if (e.key === 'ArrowDown') {
      if (index < filteredOptions.length - 1) optionRefs[index + 1].focus()
      else optionRefs[0].focus()
      return
    }
  }
</script>

<div class="svui-select" on:click={onFocus} class:disabled>
  <input
    disabled={disabled || !searchable}
    bind:value={inputValue}
    bind:this={inputRef}
    tabindex="0"
    class="svui-select-value"
    class:searchable
    class:disabled
    class:valid
    on:input={onInput}
    on:focus={onFocus}
    on:keydown={onKeyDown} />
  <label for="" class="svui-select-label">
    <span class="svui-select-label-text" class:focused>
      {placeholder}
    </span>
  </label>
  <svg class="svui-select-arrow" class:expanded viewBox="0 0 24 24">
    <path
      d="M15.88 9.29L12 13.17L8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"
      fill="currentColor" />
  </svg>
  {#if expanded}
    <div class="svui-select-options" transition:expand={{ origin: 'top' }}>
      {#each filteredOptions as option, i (option)}
        <Option
          {...option}
          bind:ref={optionRefs[i]}
          on:click={() => {
            onSelect(i)
          }}
          on:keydown={(e) => {
            onKeyDownOption(e, i)
          }} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .svui-select {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: inherit;
    margin-top: 7px;
  }
  .svui-select:not(.disabled) {
    cursor: pointer;
  }
  .svui-select-arrow {
    pointer-events: none;
    color: var(--svui-elev-2);
    position: absolute;
    height: 100%;
    right: 0;
    transition: transform 0.2s ease-out;
  }
  .svui-select-arrow.expanded {
    transform: rotate(-0.5turn);
  }
  .svui-select-options {
    border-radius: 5px;
    box-shadow: var(--svui-shadow);
    position: absolute;
    width: 100%;
    top: 100%;
    display: flex;
    flex-direction: column;
  }
  .svui-select-label {
    pointer-events: none;
    font-family: var(--svui-font);
    position: absolute;
    left: 10px;
    background-color: inherit;
  }
  .svui-select-label-text {
    position: absolute;
    background-color: inherit;
    width: max-content;
    transition-property: transform color;
    transition-timing-function: ease-out;
    transition-duration: 0.1s;
    color: var(--svui-elev-2);
    top: 9.5px;
  }

  .svui-select-label-text:global(.focused) {
    color: var(--svui-primary);
    font-size: 12px;
    top: -7px;
  }
  .svui-select-value {
    appearance: none;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    pointer-events: all;
    background-color: inherit;
    font-family: var(--svui-font);
    border: 1px solid var(--svui-elev-2);
    color: var(--svui-text);
    padding: 10px;
  }
  .svui-select-value.searchable {
    cursor: auto;
  }
  .svui-select-value:disabled {
    pointer-events: none;
  }
  .svui-select-value:not(.valid) {
    border-color: var(--svui-error);
  }
</style>
