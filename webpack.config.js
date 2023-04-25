const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const {EsbuildPlugin} = require('esbuild-loader')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "build.js",
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg?g|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.[jt]sx?$/,
                loader: 'esbuild-loader',
                options: {
                    target: 'es2015'
                }
            },
        ]
    },
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 8080,
        open: true,
    },
    devtool: "inline-source-map",
    optimization: {
        minimizer: [
            new EsbuildPlugin({
                target: 'es2015',
                css: true,
            }),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", {interlaced: true}],
                            ["jpegtran", {progressive: true}],
                            ["optipng", {optimizationLevel: 5}],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        {
                                            name: "preset-default",
                                            params: {
                                                overrides: {
                                                    removeViewBox: false,
                                                    addAttributesToSVGElement: {
                                                        params: {
                                                            attributes: [
                                                                {xmlns: "http://www.w3.org/2000/svg"},
                                                            ],
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
    },
};