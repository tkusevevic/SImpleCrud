module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "overrides": [{
    "files": ["*.entity.ts", "*.env.ts", "*.dto.ts"],
    "rules": {
      "@typescript-eslint/member-ordering": "off",
    }
  }],
  "rules": {
    "@typescript-eslint/array-type": ["error", { "default": "array-simple" }],
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-function-return-type": "off", // should we warn? remove : leave
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "ignoreRestSiblings": true, "args": "none" }],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "SwitchCase": 1
      }
    ],

    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double"
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/unified-signatures": "error",
    "camelcase": "off",
    "@typescript-eslint/camelcase": ["error", { "properties": "never" }],
    "arrow-body-style": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "space-infix-ops": "error",
    "semi-spacing": "error",
    "comma-spacing": "error",
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": ["error", { "multiline": true, "consistent": true, }],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "space-before-blocks": "error",
    "block-spacing": "error",
    "func-call-spacing": "error",
    "switch-colon-spacing": "error",
    "space-unary-ops": "error",
    "no-whitespace-before-property": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "complexity": "off",
    "curly": "error",
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "max-classes-per-file": ["error", 1],
    "max-len": [
      "error",
      {
        "ignorePattern": "^import |^export |class [^,]+ implements |queryRunner\\.query|`,$",
        "code": 120,
        "ignoreStrings": true
      }
    ],
    "new-parens": "error",
    "no-console": "error",
    "no-eval": "error",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-return-await": "error",
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    "radix": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "asyncArrow": "always",
        "named": "never"
      }
    ],
    "spaced-comment": "error",
  }
};
