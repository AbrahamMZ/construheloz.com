module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(() => {
        return {
          name: 'files/[name].[hash:8].[ext]',
        }
      })
  },
  transpileDependencies: ['vuetify'],
}
