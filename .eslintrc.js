module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'spaced-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-duplicates': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/no-deprecated-v-bind-sync': 'off',
    'vue/no-mutating-props': 'off'
  }
}
