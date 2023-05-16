import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// main.js，注意要在use方法之后执行
import uView from 'uview-ui'
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'


import {
  $http
} from '@escook/request-miniprogram';
uni.$http = $http
//请求的基础路径
$http.baseUrl = 'http://www.wsit.cn:8068/shuati1/public/index.php/api'
//请求拦截器

$http.beforeRequest = function(options) {
  options.header = {
    "Content-Type": 'application/x-www-form-urlencoded'
  }
  uni.showLoading({
    title: "数据加载中..."
  })


}
//响应拦截器
$http.afterRequest = function() {
  uni.hideLoading()
}
uni.$showMsg = function(title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}
Vue.config.productionTip = false







App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
