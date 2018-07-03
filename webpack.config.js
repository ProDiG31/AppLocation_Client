const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const extractSass = new ExtractTextPlugin({
    filename: 'css/[name].css'
  });
  
// const css_rules = {
//     test: /.scss$/,
//     exclude: /(node_modules|bower_components)/,
//     use: extractSass.extract({
//       use: [
//         {
//           loader: 'css-loader',
//           options: {
//             minimize: process.env.NODE_ENV === 'production'
//           }
//         },
//         {
//           loader: 'postcss-loader'
//         },
//         {
//           loader: 'sass-loader'
//         }
//       ]
//     })
//   };

const js_rules = {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
        presets: ['react', 'es2015', 'stage-3']
    }
}

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules : [
              js_rules
            //   ,              css_rules  
            ]   
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}