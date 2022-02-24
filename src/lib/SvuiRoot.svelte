<script lang="ts">
  import type { SvuiOptions } from '$lib/utils/interfaces'
  import { deepAssign, objToCssVars } from '$lib/utils/transform'
  import { onMount } from 'svelte'

  export let global = false
  export let theme = 'light'
  export let overrides: Partial<SvuiOptions> = {}

  const options: SvuiOptions = {
    themes: {
      light: {
        background: '#fafafa',
        text: '#000000',
        placeholder: '#777777',
        elev1: '#ededed',
        elev2: '#e7e7e7',
        primary: '#58f356',
        onPrimary: '#000000',
        secondary: '#a7f356',
        onSecondary: '#000000',
        error: '#ff0055',
        onError: '#ffffff',
      },
      dark: {
        background: '#121212',
        text: '#ffffff',
        placeholder: '#777777',
        elev1: '#1d1d1d',
        elev2: '#212121',
        primary: '#03fbf2',
        onPrimary: '#000000',
        secondary: '#81fdf8',
        onSecondary: '#000000',
        error: '#ff0055',
        onError: '#ffffff',
      },
    },
    general: {
      font: "'Roboto', sans-serif",
      shadow: '0 2px 10px -5px #0008, 2px 2px 10px -5px #0005',
    },
  }

  deepAssign(options, overrides)

  const lightStr = objToCssVars(options.themes.light)
  const darkStr = objToCssVars(options.themes.dark)

  $: styleStr = theme === 'light' ? lightStr : darkStr
  const generalStr = objToCssVars(options.general)

  const appliedStyle = {
    backgroundColor: 'var(--svui-background)',
    color: 'var(--svui-text)',
    fontFamily: 'var(--svui-font)',
    transitionProperty: 'background-color, color',
    transitionTimingFunction: 'ease-out',
    transitionDuration: '0.2s',
  }

  let ref: HTMLElement
  onMount(() => {
    if (global) {
      Object.assign(document.body.style, appliedStyle)
    }
  })
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet" />
  {#if global}
    {@html `<${'style'}>body{${styleStr + generalStr}}</style>}`}
  {/if}
</svelte:head>

<div
  id="svui-root"
  class={theme}
  bind:this={ref}
  style={global ? '' : styleStr + generalStr}>
  <slot />
</div>

<style>
  #svui-root {
    width: 100%;
    height: 100%;
    background-color: var(--svui-background);
    color: var(--svui-text);
    font-family: var(--svui-font);
    transition-property: background-color, color;
    transition-timing-function: ease-out;
    transition-duration: 0.2s;
  }
</style>
