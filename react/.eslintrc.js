module.exports = {
"parser": "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": 0
  },
  globals: {
    document: 1
  }
};
