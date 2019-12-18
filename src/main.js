import Vue from 'vue'
import App from './App.vue'

import store  from './store'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios

// 引用地图
import VCharts from 'v-charts'
Vue.use(VCharts)
// ui组件start
import {Button,Row,Menu,Layout,Icon,Dropdown,Spin,Upload,Breadcrumb,Transfer,Drawer,Form,Input,Select,Table,Modal} from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false
Vue.use(Button);
// console.log(Skeleton.name);
Vue.use(Row);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(Spin);
Vue.use(Upload);
Vue.use(Breadcrumb);
Vue.use(Transfer);
Vue.use(Drawer);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(Table);
Vue.use(Modal);
//ui 组件end


// 加载中
import Loading from '@/plugin/loading/index'
// 这时需要 use(Loading)，如果不写 Vue.use()的话，浏览器会报错，大家可以试一下
Vue.use(Loading)
//图片延迟加载 start
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/img/loading_error.png'),   //请求失败后显示的图片
  loading: require('@/assets/img/load_s.gif'),   //加载的loading过渡图片
  attempt: 1     // 加载图片数量
})
//图片延迟加载 end


// 全局提示
// import { message } from 'ant-design-vue'
//注入全局属性$message
import { message,notification,modal } from 'ant-design-vue'
Vue.prototype.$message = message;
Vue.prototype.$modal = modal;
Vue.prototype.$notification = notification;
// console.log(message);
Vue.prototype.$message = message;
// message.config({
//     duration: 0.5,
// });

//公共样式
import './assets/css/reset.css'
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

