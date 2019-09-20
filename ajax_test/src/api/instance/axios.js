import axios from "axios"
import {Toast} from "vant"
var axiosInstance = axios.create({
    baseURL: "http://localhost:9000/api",
    timeout:4000
}
);

// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading({
    mask: true,
    message: '加载中...',
    duration:0,
    forbidClick:true
  })
  return config;
}, function (error) {
  // 对请求错误做些什么
  Toast.clear()
  Toast.fail('请求失败 请稍后重试');
  return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  Toast.clear()
  // console.log(response.data);
  return response.data
}, function (error) {
  // 对响应错误做点什么
  Toast.clear()
  Toast.fail('请求失败 请稍后重试');
  return Promise.reject(error);
});
export default axiosInstance
