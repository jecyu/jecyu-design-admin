const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  /** dev环境开启源代码映射 方便调试代码 */
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0", // 这将允许来自任何 IP 的连接
    port: 8888,
    historyApiFallback: {
      index: "/",
    },
    client: {
      overlay: false, // 启用错误覆盖层
    },
    open: ["/"],
  },
  entry: {
    app: ["./src/app.js"],
  },
  output: {
    filename: "static/[name].js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".less"],
    alias: {
      "@": path.join(__dirname, "/src"),
      src: path.join(__dirname, "/src"),
    },
  },
  module: {
    rules: [
      {
        // Match js, jsx, ts & tsx files
        test: /\.([jt]sx?|js|ts)$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015",
        },
        exclude: [/(node_modules)/],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["app"],
      filename: "index.html",
    }),
  ],
};
