const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-postcss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  reactOptions: { legacyRootApi: true },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  },
  webpackFinal: async (config, { configType }) => {
    const assetRule = config.module.rules.find(({ test }) => test && test.test(".svg"));
    // exclude svg from the default storybook file-loader
    assetRule.exclude = /\.svg$/;

    // add svgr loader to handle svgs
    config.module.rules.push({
      test: /\.svg$/,
      use: ['url-loader'],
    });

    config.plugins.push(new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
    }));

    return config;
  },
  staticDirs: [
    '../static',
    { from: '../assets', to: '/' },
  ],
};
