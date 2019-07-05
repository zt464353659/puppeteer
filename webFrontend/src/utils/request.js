const axios = require('axios')
var instance = axios.create({
  baseURL: 'http://190.168.1.182:3000/',
  timeout: 1000
})
instance.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => Promise.reject(error))
instance.interceptors.response.use(response => {
  console.log(response)
  return response.data
}, error => {
  return Promise.reject(error)
})
export default instance