import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 所有的任务列表
    list: []
  },
  mutations: {
    initList(state, list) {
      state.list = list
    }
  },
  actions: {
    async getList(context) {
      const { data } = await axios.get('/list.json')
      console.log(data)
      context.commit('initList', data)
    }
  },
  modules: {}
})
