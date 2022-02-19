<script lang="ts">
  import Select from '$lib/Select.svelte'
  import ThemeDecorator from '$lib/ThemeDecorator.svelte'
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  const options = [
    {
      value: 'cat',
      title: 'Cat',
    },
    {
      value: 'dog',
      title: 'Dog',
    },
    {
      value: 'parrot',
      title: 'Parrot',
    },
  ]
  let value = ''
</script>

<Template let:args>
  <ThemeDecorator>
    <span style="color: var(--svui-text);">value: {value}</span>
    <Select {...args} {options} bind:value />
  </ThemeDecorator>
</Template>

<Meta title="Components/Select" component={Select} />

<Story name="Normal" />
<Story name="Disabled" args={{ disabled: true }} />

<style>
</style>
