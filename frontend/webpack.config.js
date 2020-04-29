const path = require('path');

const { genWebpackConfig } = require('@nuvolo/webpack-config');
const config = genWebpackConfig({
  envPath: path.resolve('../.env'),
  servePath: path.resolve('./dist')
});

config.mode = 'development';
config.devtool = 'inline-source-map';
config.output = {
  filename: 'script.js',
  // filename: 'script.js?t=' + new Date().getTime(),
  // chunkFilename: 'script-chunk.js?t=' + new Date().getTime(),
  path: path.resolve('../src/sys_ui_script/x_nuvo_microfront.microfrontend_react')
};

// config.module.rules.push({test: /\.(ts|tsx)$/,  use: { loader: 'ts-loader'}})

module.exports = config;
