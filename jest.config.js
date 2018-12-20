module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/jest-vue-preprocessor",
  },
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  testPathIgnorePatterns: ["<rootDir>/tests/cypress", "<rootDir>/battlecry"],
  moduleFileExtensions: ["vue", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$":
      "<rootDir>/tests/mocks/fileMock.js",
    "\\.(scss|css|less)$": "<rootDir>/tests/mocks/styleMock.js",
  },
  coverageDirectory: "<rootDir>/tests/jest/coverage",
  setupFiles: ["<rootDir>/tests/jest/setupTests.js"],
  snapshotSerializers: ["jest-serializer-vue"],
};
