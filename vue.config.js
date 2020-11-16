module.exports  = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {  //代理
      '/api': {
        target:'http://mall-pre.springboot.cn',// 目标，代理到哪里
        changeOrigin: true,  //是否要将主机头的原点，更改为url的地址
        pathRewrite: {  // 转发地址
          '/api': ''
        }
      }
    }
  }
}