module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
      // {
      //   test: /\.(.js|.jsx)$/,
      //   exclude: /node_modules/,
      //   loader: ["eslint-loader"]
      // }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
