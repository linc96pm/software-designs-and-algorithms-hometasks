module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: [
    '<rootDir>/src/'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/*.(spec|test).ts?(x)'
  ],
  verbose: true
};
