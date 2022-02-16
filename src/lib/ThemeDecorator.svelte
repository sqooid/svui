<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  :global(body) {
    --svui-font: 'Roboto', serif;
    --svui-text: #000000;
    --svui-primary: #11d3d3;
    --svui-secondary: #6279b8;
    --svui-background: #fafafa;
    --svui-outline: #00000033;
    --svui-hover: #00000011;
  }
  :global(body.dark) {
    --svui-font: 'Roboto', serif;
    --svui-text: #fefefe;
    --svui-primary: #daffed;
    --svui-secondary: #9bf3f0;
    --svui-background: #131016;
    --svui-outline: #ffffff33;
    --svui-hover: #ffffff11;
  }
  :global(#root) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    font-family: var(--svui-font);
    background-color: var(--svui-background);
    transition-property: background-color, color;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
  }
</style>
