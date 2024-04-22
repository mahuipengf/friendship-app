import axios from 'axios';

console.log('import.meta.env.Node_ENV', import.meta.env.Node_ENV);
axios.interceptors.request.use((config) => {
  return {
    ...config,
    params: config.params || {},
    withCredentials: true,
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',// 允许跨域
    },
    baseURL: import.meta.env.Node_ENV === 'production' ? 'http://47.99.144.198:3030' : 'http://localhost:5173',
    // baseURL: 'http://47.99.144.198:3030',
    timeout: 2000, // 设置超时时间为2s
  } as any;
}, (err) => {
  return Promise.reject(err);
});

axios.interceptors.response.use((response) => {
  return response.data;
}, (err) => {
  return Promise.reject(err);
})
function _get(url: string, params?: any) {
  return axios.get(url, { params });
}

// export default {
//     get: _get
// };
export default axios;