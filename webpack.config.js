const path = require('path');

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: (file) => {
          const ourSrc = path.join(__dirname, 'src');
          // Include our src
          if (file.includes(ourSrc)) {
            return true;
          }
          // Include the shit list
          if (file.match(/query-string/)) {
            console.log(`Including ${file}`);
            return true;
          }
          // Exclude everything else
          return false;
        },
        exclude: (file) => {
          // Exlude everything in node modules except the shit list
          if (file.match(/node_modules/)) {
            if (file.match(/query-string/)) {
              console.log(`Not excluding ${file}`);
              return false;
            }
            return true;
          }
          return false;
        },
      },
    ],
  },

  // Entry point
  entry: {
    index: './src/index.js',
  },

  // All options relating to where files go when they're built
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    publicPath: '/',
  },

  devtool: 'source-map',
  mode: 'production',
};

module.exports = webpackConfig;
