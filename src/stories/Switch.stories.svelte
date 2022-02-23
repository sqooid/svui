<script lang="ts">
  import SvuiRoot from '$lib/SvuiRoot.svelte'

  import Switch from '$lib/Switch.svelte'
  import ThemeDecorator from '$lib/ThemeDecorator.svelte'
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  let checked
</script>

<Template let:args>
  <ThemeDecorator>
    <Switch {...args} bind:checked />
    {checked}
  </ThemeDecorator>
</Template>

<Meta title="Components/Switch" component={Switch} />

<Story name="Normal" />
<Story name="Disabled" args={{ disabled: true }} />

<style>
</style>
