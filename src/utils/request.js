/**
 * axios封装
 * 请求拦截、响应拦截
 */
import axios from 'axios'
import QS from 'qs'
import store from '@/store/index.js'
import router from '@/router/index.js'
// import {config} from '*vue/types/umd'


// const env = process.env.NODE_ENV;
// const PRO_URL = "xxxx";
// const DEV_URL = "xxxx";
// const TEST_URL = "xxxx";

// switch (env) {
//     case "production": {
//         axios.defaults.baseURL = PRO_URL;
//         break;
//     }
//     case "development": {
//         axios.defaults.baseURL = DEV_URL;
//         break;
//     }
//     case "test": {
//         axios.defaults.baseURL = TEST_URL;
//         break;
//     }
//     default: axios.defaults.baseURL = DEV_URL;
// }




//环境的切换
if (process.env.MODE_ENV == 'development') {
    // axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
} else if (process.env.MODE_ENV == 'production') {
    axios.defaults.baseURL = 'xxxx';
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.transformRequest=data=>QS.stringify(data)


//创建一个axios的实例
const instance = axios.create({
    // baseURL: axios.defaults.baseURL,
    baseURL: '/api',
    timeout: 5000,
})


//实例的请求拦截器
instance.interceptors.request.use(
    config => {
        let token = store.state.token;
        //在每个请求的头部加上token
        if (token) {
            config.headers.Authorization = 'Bearer' + token;
        }
    }, error => {
        this.$router.push('/login');
        return Promise.error(error);
    }
)


//实例的响应拦截器
instance.interceptors.response.use(
    config => {
        const res = response.data;
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.resolve(response);
        }
    }, error => {
        if (error.response.status) {
            switch (error.response.status) {
                //401: 未登录
                case 401:
                    alert('未登录');
                    //清楚token
                    // removeStroe({ name: 'access_token' });
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                // 403 token过期
                case 403:
                    alert('登录过期，请重新登录');
                    // 清除token
                    // removeStore({ name: 'access_token' });
                    localStorage.removeItem("token");
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    store.commit('loginSuccess', null);
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;
                // 404请求不存在
                case 404:
                    Toast({
                        message: '网络请求不存在',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;


                // 其他错误，直接抛出错误提示    
                default:
                    alert(error.response.data.message);
                    break;
            }
        }
        // 抛出错误提示
        // Vue.prototype.$message.error(error.response.data.message);
        return Promise.reject(error.response);
    }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/**
 * put方法， 对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function put(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/**
 * del方法， 对应delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function del(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, QS.stringify({ data: params }))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

export default {
    instance,
    get,
    post,
    put,
    del
}