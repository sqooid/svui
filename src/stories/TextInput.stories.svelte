<script lang="ts">
  import TextInput from '../lib/TextInput.svelte'
  import ThemeDecorator from '../lib/ThemeDecorator.svelte'
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
  <ThemeDecorator>
    <TextInput {...args} />
  </ThemeDecorator>
</Template>

<Meta
  title="Components/Text Input"
  component={TextInput}
  argTypes={{
    value: { control: 'text' },
    placeholder: { control: 'text' },
  }} />

<Story name="Normal" args={{ placeholder: 'Text input', value: '' }} />

<style>
</style>
