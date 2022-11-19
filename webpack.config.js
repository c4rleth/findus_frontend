const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

// se eu não estiver em produção, eu estou em desenvolvimento
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry:path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        hot: true,
        historyApiFallback: true
        
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/playground_assets'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        })
    ].filter(Boolean),
    module: {
        rules: [
        {   
            test: /\.(j|t)sx$/, 
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        isDevelopment && require.resolve('react-refresh/babel')
                    ].filter(Boolean)
                }
            },
        },
        {   
            test: /\.css$/, 
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
        },
        {   
            test: /\.scss$/, 
            exclude: /node_modules/,
            use: ['sass-loader']
        }
        ]
    }
}