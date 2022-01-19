const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    // context: path.resolve(__dirname, ''),
    entry: "./src/index.jsx",

    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.s[ca]ss$/,
                use: [
                    "style-loader",// 3. Adds CSS to DOM by injecting <syle> tags
                    "css-loader",  // 2. Translates CSS into CommonJS
                    "sass-loader"  // 1. Compiles Sass to CSS
                ]
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader", // Minimizes and exports HTML as string. Imports tags and attributes (favicon!)
                    
                ] 


            },
            // {
            //     test: /\.(png|svg|jpe?g|gif)$/i,
            //     type: "asset/resource",
            // },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svg-react-loader',
                    options: {
                        tag: 'symbol',
                        attrs: {
                            title: 'example',
                        },
                        name: 'MyIcon',
                    },
                },
            }
        
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            publicPath: '/',
            hash: true,
            template: path.resolve(__dirname, `/src/template.html`),
            filename: 'index.html'
        }),
    
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
}