/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios'
import { message } from 'ant-design-vue'
//请求拦截器
axios.interceptors.request.use(config => {

  return config
}, error => {
  // console.log('error-config:',config);

  return Promise.reject(error)
})

//相应拦截器
axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error)
})

export default function ajax(url, data = {}, type = 'GET') {
  //优化处理请求异常这样就不用在请求的地方用try catch判断了；这里新建一个promise在错误的时候不用返回reject（error）了
  return new Promise(function (resolve) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      } `+`
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      //失败了调用reject()
      // if(error.error== "Invalid Access Token"){
      //   window.location.href = '/'//进去登录页面
      //   return;
      // }
      message.info(error.message);
      //reject(error)
    })
  })
}

