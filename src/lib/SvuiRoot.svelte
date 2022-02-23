<script lang="ts">
  import type { Theme, ThemeOverrides } from '$lib/utils/interfaces'
  import { objToCssVars } from '$lib/utils/transform'
  import { onMount } from 'svelte'

  export let global = false
  export let theme = 'light'
  export let overrides: ThemeOverrides = {}

  let light: Theme = {
    font: "'Roboto', sans-serif",
    background: '#fafafa',
    text: '#000000',
    elev1: '#ededed',
    elev2: '#e7e7e7',
    primary: '#58f356',
    onPrimary: '#000000',
    secondary: '#a7f356',
    onSecondary: '#000000',
    error: '#ff0055',
    onError: '#ffffff',
    shadow: '0 2px 10px -5px #040404',
  }
  let dark: Theme = {
    font: "'Roboto', sans-serif",
    background: '#121212',
    text: '#ffffff',
    elev1: '#1d1d1d',
    elev2: '#212121',
    primary: '#03fbf2',
    onPrimary: '#000000',
    secondary: '#81fdf8',
    onSecondary: '#000000',
    error: '#ff0055',
    onError: '#ffffff',
    shadow: '0 2px 10px -5px #040404',
  }

  if (overrides.light) {
    light = Object.assign(light, overrides.light)
  }
  if (overrides.dark) {
    dark = Object.assign(dark, overrides.dark)
  }

  const lightStr = objToCssVars(light)
  const darkStr = objToCssVars(dark)

  const appliedStyle = {
    backgroundColor: 'var(--svui-background)',
    color: 'var(--svui-text)',
    fontFamily: 'var(--svui-font)',
    transitionProperty: 'background-color, color',
    transitionTimingFunction: 'linear',
    transitionDuration: '0.2s',
  }

  let ref: HTMLElement
  onMount(() => {
    if (global) {
      Object.assign(document.body.style, appliedStyle)
    } else {
      Object.assign(ref.style, appliedStyle)
    }
  })
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet" />
  {@html `<${'style'}>body{${theme === 'light' ? lightStr : darkStr}}</style>}`}
</svelte:head>

<div id="svui-root" class={theme} bind:this={ref}>
  <slot />
</div>

<style>
  #svui-root {
    width: 100%;
    height: 100%;
  }
</style>
