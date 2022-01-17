const path = require("path");
const common = require("./webpack.config.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        port: 9000,
    },
});