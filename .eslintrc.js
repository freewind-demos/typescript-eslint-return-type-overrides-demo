/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint/eslint-plugin"
  ],
  "extends": "eslint:recommended",
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": false,
        "allowTypedFunctionExpressions": true,
        "allowHigherOrderFunctions": true
      }
    ]
  },
  overrides: [{
    files: ["*.tsx"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          "allowExpressions": true,
        }
      ]
    }
  }]
}
