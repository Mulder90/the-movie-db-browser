module.exports = {
  setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
