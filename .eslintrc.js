module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  // linebreak-style: ["error", "windows"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
