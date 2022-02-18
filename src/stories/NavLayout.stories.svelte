<script lang="ts">
  import NavLayout from '../lib/NavLayout.svelte'
  import ThemeDecorator from '../lib/ThemeDecorator.svelte'
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import IconNavButton from '../lib/IconNavButton.svelte'
  import Icon from '../lib/Icon.svelte'

  let x = 0
  let y = 0

  let url = '1'
  const onClick1 = (e) => {
    url = '1'
  }
  const onClick2 = (e) => {
    url = '2'
  }
</script>

<Template let:args>
  <ThemeDecorator padding={false}>
    <NavLayout {url} {x} {y}>
      <IconNavButton on:click={onClick1}>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M366.2 256H400C461.9 256 512 306.1 512 368C512 388.9 498.6 406.7 480 413.3V464C480 490.5 458.5 512 432 512H80C53.49 512 32 490.5 32 464V413.3C13.36 406.7 0 388.9 0 368C0 306.1 50.14 256 112 256H145.8C175.7 256 200 231.7 200 201.8C200 184.3 190.8 168.5 180.1 154.8C167.5 138.5 160 118.1 160 96C160 42.98 202.1 0 256 0C309 0 352 42.98 352 96C352 118.1 344.5 138.5 331.9 154.8C321.2 168.5 312 184.3 312 201.8C312 231.7 336.3 256 366.2 256zM416 416H96V448H416V416z" />
          </svg>
        </Icon>
      </IconNavButton>
      <IconNavButton on:click={onClick2}>
        <Icon x={3} y={2}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              fill="currentColor"
              d="M147.8 192H480V144C480 117.5 458.5 96 432 96h-160l-64-64h-160C21.49 32 0 53.49 0 80v328.4l90.54-181.1C101.4 205.6 123.4 192 147.8 192zM543.1 224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480h447.1c12.12 0 23.2-6.852 28.62-17.69l96-192C583.2 249 567.7 224 543.1 224z" />
          </svg>
        </Icon>
      </IconNavButton>
      <svelte:fragment slot="content">
        {#if url === '1'}
          <div class="content first">
            Bunch of stuff Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Inventore suscipit nobis deserunt quaerat aliquam veritatis
            maiores et eos, temporibus modi praesentium dolore! Iste blanditiis
            modi deserunt beatae laborum, illo nemo.
          </div>
        {:else}
          <div class="content">
            Other bunch of stuff Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et ipsam, delectus maxime placeat cum adipisci
            sunt voluptatum sit quos quas, asperiores porro qui maiores. Maxime
            reiciendis pariatur odio est quisquam!
          </div>
        {/if}
      </svelte:fragment>
    </NavLayout>
  </ThemeDecorator>
</Template>

<Meta title="Components/NavLayout" component={NavLayout} />

<Story name="Layout" />

<style>
  .content {
    background-color: var(--svui-background);
    height: 100vh;
  }
  .first {
    background-color: var(--svui-primary);
    height: 100vh;
  }
</style>
