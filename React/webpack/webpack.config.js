const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "word-chain-setting",
  mode: "development", // publich option -> production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"], // already webpack knows about wordchain.jsx file
  }, // Input

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          // Adding all browsers can affect performance, so adding only the browsers you want is important.
          // It also allows you to apply different options in detail
          // plugins are setting for preset
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"], // browserslists
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  // extension, if you need to add more options
  // add debug in all module components
  // plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  }, // Output
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
