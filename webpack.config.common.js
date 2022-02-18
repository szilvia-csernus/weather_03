const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');


module.exports = {
    // context: path.resolve(__dirname, ''),
    entry: ["regenerator-runtime/runtime.js", "./src/index.jsx"],

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
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
         
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]_[hash:base64:5]",
                            },
                        }
                    }, 
                    {
                        loader: 'sass-loader'
                    }
                ],
                include: [/\.module\.scss$/, /\.module\.css$/]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: [/\.module\.scss$/, /\.module\.css$/]
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader", // Minimizes and exports HTML as string. Imports tags and attributes (favicon!) 
                ]

            },
            // {
            //     test: /\.svg$/,
            //     use: [
            //         '@svgr/webpack'
            //     ],
            // },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                use: 'svgo-loader'
            },
        ]},

    plugins: [
        new HtmlWebpackPlugin({
            publicPath: '/',
            hash: true,
            template: path.resolve(__dirname, `/src/template.html`),
            filename: 'index.html'
        }),
        new Dotenv()
    
    ],
    devtool: 'source-map',
    resolve: {
        // alias: {
        //     components: path.resolve(__dirname, '/src/components'),
        // },
        extensions: ['.js', '.jsx', '*']
    }
}