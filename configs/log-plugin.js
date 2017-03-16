function ConsoleLogOnBuildWebpackPlugin(options = {}) {}

ConsoleLogOnBuildWebpackPlugin.prototype.apply = (compiler) => {
  compiler.plugin('done', (compiler) => {
    console.log('The webpack build process is starting!!!')
  });
};

module.exports = ConsoleLogOnBuildWebpackPlugin
