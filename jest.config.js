module.exports = {
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(svg|png|jpg|jpeg|gif)$': 'jest-transform-stub'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
