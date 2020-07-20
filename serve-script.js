const { LiveReloadCompiler } = require('@nestjs/ng-universal');

const compiler = new LiveReloadCompiler({
  projectName: 'angular-with-nestjs'
});
compiler.run();
