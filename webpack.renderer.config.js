const path = require('path');
const rules = require('./webpack.rules');

// Add the CSS and PostCSS loaders to the rules
rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    },
  ],
});

module.exports = {
  // Entry point for the main process
  entry: './src/main.js',

  // Module rules, including JS/JSX and CSS loaders
  module: {
    rules,
  },

  // Resolve extensions for imports without specifying the extension
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Output settings, where the compiled files will be placed
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Development server settings (if applicable)
  devServer: {
    hot: false, // Disable hot reloading
    liveReload: false, // Disable live reloading
  },
};
