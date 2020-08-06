const path = require('path');

module.exports = {
  mode: 'production',
  devtool: '',
  entry: {
    components: './src/app.tsx',
    silentRenew: './src/silentRenew.ts'
  },
  module: {
    rules: [
      {
        test: /(\.tsx)|(\.ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'production','public', 'src'),
    filename: '[name].js',
    chunkFilename: "[name].chunk.js",
  },
  optimization: {
    splitChunks: {
      name:'vendor',
      chunks: 'all',
    }
  }
};