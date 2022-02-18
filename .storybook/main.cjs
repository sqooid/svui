const path = require('path')
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
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      $lib: path.resolve(__dirname, '../src/lib'),
    }
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes('svelte-loader'),
    )
    svelteLoader.options.preprocess = require('svelte-preprocess')({})
    return config
  },
}
