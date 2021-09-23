/**
 * login模块接口列表
 */

 import base from './base.js';  //导入接口域名列表
 import {get,post,delte,put} from '@/utils/request.js';     //导入request中创建的实例
 import qs from 'qs'     //根据需求是否导入qs模块

 
 const login = {
     //登录接口
     login(params){
         return post('/api/auth/login', params)
     }
 }
 
 //导出接口
 export default login