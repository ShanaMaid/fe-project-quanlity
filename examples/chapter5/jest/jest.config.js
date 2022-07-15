module.exports = {
  preset: "ts-jest",
  testMatch: [
    "**/__tests__/button.test.tsx",
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};