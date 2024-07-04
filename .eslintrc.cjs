process.env.ESLINT_TSCONFIG = "tsconfig.json"

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  globals: {
    NodeJS: true,
    NodeListOf: true,
  },
  env: {
    es2022: true,
    node: true,
    browser: true
  },
  extends: ["@antfu", "eslint-config-prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "antfu/if-newline": "off",
    "antfu/top-level-function": "off",
    "@stylistic/js/no-tabs": "off",
    "@stylistic/ts/indent": "off",
    "@stylistic/js/operator-linebreak": "off",
    "@stylistic/js/no-mixed-spaces-and-tabs": "off",
    "@stylistic/ts/brace-style": "off",
    "@stylistic/js/multiline-ternary": "off",

    "comma-dangle": [ "error", "never" ],
    "indent": [ "warn", 2 ],
    "eol-last": "off",
    "quotes": [ "warn", "single" ],
    "semi": [ "warn", "never" ],
    "space-before-function-paren": "off",
    "object-curly-spacing": [ "warn", "always" ],
    "array-element-newline": [ "warn", "consistent" ],
    "array-bracket-newline": [ "warn", "consistent" ],
    "object-curly-newline": [
      "warn",
      {
        consistent: true,
        multiline: true
      }
    ],
    "padded-blocks": "off",
    "jsx-quotes": [ "warn", "prefer-single" ],

    "no-multiple-empty-lines": "off",
    "no-tabs": "off",
    "no-console": "off",
    "no-constant-binary-expression": "warn",
    "no-debugger": "warn",
    "no-extend-native": "off",
    "no-trailing-spaces": "warn",
    "no-unused-vars": "off",

    "n/prefer-global/process": "off",
    "unused-imports/no-unused-imports": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }
    ],
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "generic"
      }
    ]
  },
  overrides: [
    {
      files: [ "*.astro" ],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtension: [ ".astro" ]
      },
      rules: {
        "astro/no-set-html-directive": "error",
        "space-before-function-paren": "off"
      }
    },
    {
      files: [ "*.astro", "src/utils/serviceWorker.ts" ],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [ ".astro" ]
      },
      extends: [
        "plugin:astro/recommended",
        "plugin:astro/jsx-a11y-recommended"
      ],
      rules: {
        "astro/no-conflict-set-directives": "warn",
        "astro/no-unused-define-vars-in-style": "warn",
        "astro/no-unused-css-selector": "off",
        "astro/prefer-class-list-directive": "warn",
        "astro/semi": [ "warn", "never" ],
        "astro/jsx-a11y/anchor-is-valid": "warn",
        "@stylistic/ts/indent": "off"
      }
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: [ "**/*.astro/*.js", "*.astro/*.js" ],
      parser: "@typescript-eslint/parser"
    }
  ]
}
