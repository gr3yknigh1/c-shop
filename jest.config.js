/* eslint-env commonjs */
/** @type {import('jest').Config} */
module.exports = {
  testPathIgnorePatterns: [".next", "node_modules"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
};
