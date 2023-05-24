module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    /* HERE GOING ESLINT RULES */
    'no-console': 'off',
    'no-duplicate-imports': 'error',
  },
}
