module.exports = {
  plugins: ['cypress', 'prettier', '@typescript-eslint'],
  env: {
    mocha: true,
    'cypress/globals': true
  },
  extends: [
    '@vue/standard',
    'plugin:vue/essential',
    'prettier',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    strict: 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 180,
        bracketSpacing: true,
        arrowParens: 'always',
        trailingComma: 'none',
        vueIndentScriptAndStyle: false
      }
    ]
  }
};
