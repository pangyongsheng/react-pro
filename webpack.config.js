const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production'

    return {
        entry: [
            "babel-polyfill",
            path.join(__dirname, './src/index.js')
        ],
        devServer: {
            host: '192.168.187.252',
            port: 3003, //端口号
        },
        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.tsx?$/,
                    loaders: ['babel-loader', 'ts-loader']
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }]
                },
                {
                    test: /\.css$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]

                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, 
                    use:{
                        loader: "file-loader" 
                    }
                }
            ]
        },
        plugins: [
            //new CleanWebpackPlugin(['dist']) ,
            new HtmlWebPackPlugin({
                template: "./public/index.html",
                filename: "./index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        }
    }
};