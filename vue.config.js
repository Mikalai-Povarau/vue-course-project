const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
  },
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('file-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: [0.4, 0.8] },
        gifsicle: { optimizationLevel: 3 },
        webp: { quality: 75 },
      });
  },
});
