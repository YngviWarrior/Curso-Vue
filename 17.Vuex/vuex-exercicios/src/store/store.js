import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modulos/carrinho'
import parametros from './modulos/parametros'

import * as getters from './getters' // Todos os métodos definidos.

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nome: 'Maria',
    sobrenome: 'Silva'
  },
  // Pode declarar como objeto caso tenha outros getters diretamente no store
  getters, // Instanciando getters genéricos, através do Ecma Script
  modules: { carrinho, parametros }
})