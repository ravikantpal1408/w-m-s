module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // ✅ mock styles
    "^react-leaflet$": "<rootDir>/src/tests/__mocks__/react-leaflet.ts", // ✅ mock leaflet
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  coverageReporters: ["text", "lcov"],
  testMatch: [
    "<rootDir>/tests/**/*.(test|spec).[jt]s?(x)",
    "<rootDir>/src/**/*.(test|spec).[jt]s?(x)",
  ],
};
