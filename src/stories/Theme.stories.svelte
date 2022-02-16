<script lang="ts">
  import Switch from '../lib/Switch.svelte'
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import ThemeDecorator from '../lib/ThemeDecorator.svelte'

  let isDarkMode = false
  const onChange = () => {
    console.log('yay')
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }
</script>

<Meta title="Extra/Theme" component={Switch} />

<Template>
  <ThemeDecorator>
    <Switch bind:checked={isDarkMode} on:click={onChange} />
  </ThemeDecorator>
</Template>

<Story name="Changing theme" />

<style>
</style>
