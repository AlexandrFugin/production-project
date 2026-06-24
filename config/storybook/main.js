module.exports = {
  stories: [
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-mock/register',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
