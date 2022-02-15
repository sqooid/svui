module.exports = {
  stories: [
    '../src/stories/*.stories.mdx',
    '../src/stories/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
  ],
  framework: '@storybook/svelte',
  // "svelteOptions": {
  //   "preprocess": require("../svelte.config.js").preprocess
  // }
}
