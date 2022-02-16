<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  :global(body) {
    --svui-font: 'Roboto', serif;
    --svui-primary: #11d3d3;
    --svui-secondary: #6279b8;
    --svui-background: #efefef;
    --svui-outline: #00000033;
    --svui-hover: #00000011;
  }
  :global(body.dark) {
    --svui-font: 'Roboto', serif;
    --svui-primary: #daffed;
    --svui-secondary: #9bf3f0;
    --svui-background: #131016;
    --svui-outline: #ffffff33;
    --svui-hover: #ffffff11;
  }
</style>
