module.exports = {
  preset: "ts-jest",
  testMatch: [
    "**/*.test.ts",
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
};