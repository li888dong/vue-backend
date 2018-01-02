// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 网络请求配置
import axios from 'axios'
import * as api from './Api'

Vue.api = Vue.prototype.$api = api
const instance = axios.create({
    baseURL: "http://www.cx8o92.cn",
    timeout: 15000
});
Vue.http = Vue.prototype.$http = instance;
// let instance,
//     token = store.getters.access_token;
// if (!token) {
//     axios.post('http://www.cx8o92.cn/oauth/token', {
//         grant_type: 'client_credentials',
//         client_id: 1,
//         client_secret: 'IRwipTloBj54dYeznekQt2shYHaTrmeIIRXq0bQb',
//         scope: ''
//
//     }).then(res => {
//         console.log('令牌请求成功', res);
//         store.dispatch('setToken', res.data.access_token);
//         instance = axios.create({
//             headers: {
//                 common: {
//                     Authorization: res.data.access_token
//                 }
//             },
//             baseURL: "http://www.cx8o92.cn",
//             timeout: 15000
//         });
//         Vue.http = Vue.prototype.$http = instance;
//     }, err => {
//         router.push('login');
//         console.log(err)
//     });
//
// } else {
//     router.push('mains')
// }

//引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css';
//引入字体文件
import '../static/font/iconfont.css'
//引入重置样式文件
import '../static/reset.css'
//引入重置iView、样式文件
import '../static/reIview.css'

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
