import Vue from 'vue'
import axios from 'axios'
import { getToken } from './token'

axios.defaults.baseURL = process.env.VUE_APP_BASEURL
axios.defaults.withCredentials = true // 配置为true

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const Token = getToken()
    if (Token) {
      config.headers.token = Token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = axios
