module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  coverageReporters: ["text", "lcov"],
  testMatch: [
    "<rootDir>/tests/**/*.(test|spec).[jt]s?(x)",
    "<rootDir>/src/**/*.(test|spec).[jt]s?(x)",
  ],
};
