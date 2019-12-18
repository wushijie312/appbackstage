// 包含了n个接口请求的函数的模块
//函数返回值为具体的数值：data
import ajax from './ajax'

// const BASE_URL='http://fuliapi.98ep.com'
// const BASE_URL='/apin'
const BASE_URL_N='/api'
//获取token

//解析登录接口数据 http://fuliapi.98ep.com/EMallProvider.svc/AnalysisLoginInfo
export const reqGetLoginData = (loginData) => ajax(BASE_URL_N + '/EMallProvider.svc/AnalysisLoginInfo', loginData, 'post')
