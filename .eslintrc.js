module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "consistent-return": [0],
  },
};
