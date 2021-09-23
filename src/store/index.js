import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    setToken(state,token){
      //让存储在vuex中的数据等于请求服务器传回来的token值
      state.token = token;
    }
  },
  actions: {
  },
  modules: {
  }
})
