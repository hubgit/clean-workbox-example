const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(), // workbox directory is present
    new WorkboxWebpackPlugin.GenerateSW({
      importWorkboxFrom: "local"
    })
    // new CleanWebpackPlugin() // workbox directory is missing
  ]
};
