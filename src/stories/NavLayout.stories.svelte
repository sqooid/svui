<script lang="ts">
  import NavLayout from '../lib/NavLayout.svelte'
  import ThemeDecorator from '../lib/ThemeDecorator.svelte'
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
  <ThemeDecorator>
    <NavLayout {...args} />
  </ThemeDecorator>
</Template>

<Meta title="Components/NavLayout" component={NavLayout} />

<Story name="Layout" />

<style>
</style>
