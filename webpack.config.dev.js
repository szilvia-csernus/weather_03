const path = require("path");
const common = require("./webpack.config.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        server: 'https',
        port: 9000,
    },
});