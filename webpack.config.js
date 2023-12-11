const path = require("path");

module.exports = {
  // specify the entry point for your app
  entry: "./src/index.js",
  // specify the output path and filename for your bundle
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  // specify the loaders for different file types
  module: {
    rules: [
      // use babel-loader to transpile JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // use css-loader and style-loader to load CSS files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // use file-loader to load image files
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  // specify the plugins for additional functionality
  plugins: [
    // use HtmlWebpackPlugin to generate an HTML file for your app
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
