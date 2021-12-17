module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  overrides: [
    {
      files: ["*.vue"],
      processor: "vue/.vue"
    }
  ],
  // add your custom rules here
  rules: {
  }
}
