/**
 * login模块接口列表
 */

import base from './base.js';  //导入接口域名列表
import axios from '@/utils/request2.js';     //导入request中创建的实例
import qs from 'qs'     //根据需求是否导入qs模块

const login = {
    //登录接口
    login(params){
        //第一种写法
        // return axios.post('/LoginController/login', qs.stringify(params))
        //第二种写法
        return axios.request({
            url: 'api/auth/login',
            method: 'post',
            params
        })
    }
}

//导出接口
export default login