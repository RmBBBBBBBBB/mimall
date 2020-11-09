import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import env from './util/env'


//请求默认的 地址
// axios.defaults.baseURL = '/api'

axios.defaults.baseUrl = env.baseUrl

console.log(env.baseURL,'main.js')

//超时时间
axios.defaults.timeout = 8000

//接口 错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data
  }else if(res.data == 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})

Vue.use(VueAxios,axios)

// 生成 环境的 日志信息 打印
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
