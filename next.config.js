const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const withCSS = require('@zeit/next-css')

// const debug = process.env.NODE_ENV !== 'production'
// The below is a work-around caused by using babel-plugin-import to resolve the antd css files per component
// https://github.com/zeit/next-plugins/issues/267#issuecomment-436454048
if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
  require.extensions['.css'] = file => {}
}

module.exports = {
  target: 'serverless',
  ...withTypescript(
    withCSS({
      // Although we'll use CSS-in-JS, we need a CSS loader for ant design components' styling
      webpack(config, options) {
        // add custom webpack config here

        // Show TS errors in console (ForkTsCheckerWebpackPlugin doesn't need to re-compile to achieve this)
        if (options.isServer) {
          config.plugins.push(new ForkTsCheckerWebpackPlugin())
        }
        return config
      },
    })
  ),
  //  assetPrefix: !debug ? '/Next-gh-page-example/' : ''
}
