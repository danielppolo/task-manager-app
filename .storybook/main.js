module.exports = {
  stories: ['../src/stories/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds/register',
  ],
};
