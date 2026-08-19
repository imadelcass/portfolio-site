/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ["*.config.js", "postcss.config.js", "tailwind.config.js"],
      env: { node: true }
    },
    {
      files: ["src/views/**/*.vue"],
      rules: { "vue/multi-word-component-names": "off" }
    }
  ]
}
