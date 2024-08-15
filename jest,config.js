module.exports = {
    preset: "ts-jest", // Ensure ts-jest is installed
    testEnvironment: "node",
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
      "^axios$": require.resolve("axios"),
    },
  };