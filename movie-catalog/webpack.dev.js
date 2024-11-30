const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'), //saat mode development, kontent statis yang digunakan berdasar folder dist
    open: true, //memberitahu dev server untuk membuka browser saat local server dimulai
    port: 9100, //netapkan port server lokal
    client: {
      overlay: { //menampilkan error ditampilan browser (tidak hanya di console)
        errors: true,
        warnings: true,
      },
    },
    compress: true, //mengaktifkan gzip crompession agar berkas yang diperoleh server lokal lebih efisien
  },
});