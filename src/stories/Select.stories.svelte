<script lang="ts">
  import Select from '$lib/Select.svelte'
  import ThemeDecorator from '$lib/ThemeDecorator.svelte'
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  const options = [
    {
      value: 'cat',
      title: 'Cat',
      description: 'Will claw your face',
      color: 'yellow',
    },
    {
      value: 'dog',
      title: 'Dog',
      image:
        'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg',
      description: "Man's best friend",
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

<Story name="Searchable" args={{ searchable: true }} />
<Story name="Not searchable" />
<Story name="Disabled" args={{ disabled: true }} />

<style>
</style>
