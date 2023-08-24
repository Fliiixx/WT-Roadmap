module.exports = {
  mode: "development", //doesnt minify
  entry: "./index.js",
  output: {
    filename: "main.js",
    publicPath: 'dist' //only necessary for webpack server
  },
  devtool: "source-map",

  //babel => tell Babel to look for any js files excluding node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }

};

//    .\node_modules\.bin\webpack