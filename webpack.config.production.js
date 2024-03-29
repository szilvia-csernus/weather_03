const path = require("path");
const common = require("./webpack.config.common");
const  { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name].[hash][ext]",
    },
    
});