const webpack = require("webpack");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("../paths");
const { clientOnly } = require("../../tasks/utils");

const env = require("../env")();

const common = [];

const client = [
    // TODO: add client side only mode
    clientOnly &&
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
        }),
    // new webpack.ProgressPlugin(), // make this optional e.g. via `--progress` flag
    new CaseSensitivePathsPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new webpack.DefinePlugin({
        __SERVER__: "false",
        __BROWSER__: "true",
    }),
    new MiniCssExtractPlugin({
        filename: process.env.NODE_ENV === "development" ? "[name].css" : "[name].[contenthash].css",
        chunkFilename: process.env.NODE_ENV === "development" ? "[id].css" : "[id].[contenthash].css",
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ManifestPlugin({ fileName: "manifest.json" }),
].filter(Boolean);

const server = [
    new webpack.DefinePlugin({
        __SERVER__: "true",
        __BROWSER__: "false",
    }),
];

module.exports = {
    common,
    client,
    server,
};
