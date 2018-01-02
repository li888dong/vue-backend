import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
import Api from '../Api'

Vue.use(Vuex)

export default new Vuex.Store({
    modules,
    Api,
    strict: process.env.NODE_ENV !== 'production',
})
