const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const entryPath = path.join(__dirname, 'src')
const outputPath = path.join(__dirname, 'dist')
const publicPath = path.join(__dirname, 'public')

module.exports = {
    mode: 'development',
    entry: path.join(entryPath, 'app.js'),
    //lee todos los ficheros que se importan en app.js
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // ts|tsx etc dependiendo de los tipo de ficheros que tengo
                exclude: /node_modules/,
                loader: 'babel-loader'
                // equivale a   use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            //    use es un array de loader
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'saas-loader']
            }
        ]
    },
    plugins : [
        new HTMLWebpackPlugin({template: path.join(publicPath, 'index.html')})
    ],
    devServer: {
        static: outputPath,
        historyApiFallback: true
    //    conectado con el routing
    },
    resolve: {
        extensions: ['.js', '.jsx']
        // intenta resolver los imports con esas extenciones (no hace falta ponerlo en los imports)
    }
}
