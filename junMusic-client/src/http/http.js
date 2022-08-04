// axios
import axios from 'axios';

// ******* 配置 ******
// axios 路径
axios.defaults.baseURL = 'http://localhost:3000';
// axios 响应拦截
axios.interceptors.response.use(function(res){
  return res.data;   //只有return res.data后才能完成响应
})

export default axios;