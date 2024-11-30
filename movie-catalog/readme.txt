syntax command
1. npm init, unduh package.json (alternatif, npm init --yes)
2. npm install, unduh node module dan package yang tercatat(bila sebelumnya sudah pasang package)



aplikasi ini dibentuk dengan package dan dependencies:
devDependencies
    @babel/core
    @babel/preset-env
    babel-loader
    copy-webpack-plugin
    css-loader
    html-webpack-plugin
    style-loader
    webpack
    webpack-cli
    webpack-dev-server
    webpack-merge
==>npm install --save-dev @babel/core @babel/preset-env babel-loader copy-webpack-plugin css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server webpack-merge

Dependencies
    regenerator-runtime
==>npm install --save regenerator-runtime

aplikasi ini juga dibangun denga tools EsLint(pengoreksi penulisan code) dan predefined eslint config dicoding
==>npm init @eslint/config@latest
==>npm install --save-dev eslint-config-dicodingacademy

App ini juga menggunakan Workbox
Workbox adalah library untuk menyederhanakan service worker dan cache (abstraksi/ringkas)
untuk menerapkan WB dengan webpack, install 2 Dependencies berikut
==> npm install workbox-webpack-plugin -D (-D shortcut untuk --save-dev/mode development)
==> npm install workbox-window --save

lakukan instalasi diatas secara terpisah karena package dalam tingkatan berbeda