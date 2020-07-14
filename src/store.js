import Vue from 'vue'
import Vuex from 'vuex'
import articles from './assets/articles'
import dvlaTool from './assets/dvla_tool'
import costConfing from './assets/costConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: articles,
    dvlaTool: dvlaTool,
    costConfig: costConfing
  },
  mutations: {

  },
  getters: {
    questions: state => {
      return state.dvlaTool.questions
    },
    results: state => {
      return state.dvlaTool.results
    },
    rules: state => {
      return state.dvlaTool.rules
    }
  },
  actions: {

  }
})
