const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "minesearch-dev",
  mode: "development", // publich option -> production
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: "./client", // already webpack knows about wordchain.jsx file
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          // Adding all browsers can affect performance, so adding only the browsers you want is important.
          // It also allows you to apply different options in detail
          // plugins are setting for preset
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 chrome versions"] },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"],
        },
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  // extension, if you need to add more options
  // for example, add debug in all module components
  // plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist",
  },
  devServer: {
    publicPath: "/dist",
    hot: true,
  },
};
