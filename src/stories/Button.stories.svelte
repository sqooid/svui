<script lang="ts">
  import Button from '$lib/Button.svelte'
  import ThemeDecorator from '$lib/ThemeDecorator.svelte'
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
  <ThemeDecorator>
    <Button {...args} />
  </ThemeDecorator>
</Template>

<Meta
  title="Components/Button"
  component={Button}
  argTypes={{
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    primary: { control: 'boolean' },
  }} />

<Story name="Normal" args={{ label: 'Button' }} />
<Story name="Primary" args={{ label: 'Button', primary: true }} />
<Story
  name="Disabled"
  args={{ label: 'Button', primary: true, disabled: true }} />

<style>
</style>
