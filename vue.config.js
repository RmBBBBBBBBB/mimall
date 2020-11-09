module.exports  = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {  //代理
      '/api': {
        // target:'https://www.imooc.com',// 目标，代理到哪里
        target:'127.0.0.1',// 目标，代理到哪里
        changeOrigin: true,  //是否要将主机头的原点，更改为url的地址
        pathRewrite: {  // 转发地址
          '/api': ''
        }
      }
    }
  }
}