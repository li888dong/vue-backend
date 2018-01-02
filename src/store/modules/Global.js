const state = {
    curPage:'1',
    access_token:'',
    userInfo:{},
    comInfo:{}
}

const mutations = {
    DECREMENT_MAIN_COUNTER(state) {
        // state.main--
    },
    INCREMENT_MAIN_COUNTER(state) {
        // state.main++
    },
    setToken(state, res) {
       state.access_token = res
    },
    setUserInfo(state, res) {
       state.userInfo = res
    },
    setComInfo(state, res) {
       state.comInfo = res
    },
    setPage(state, res) {
       state.curPage = res
    }
}

const actions = {
    someAsyncTask({commit}) {
        // do something async
        commit('INCREMENT_MAIN_COUNTER')
    },
    'setToken': function ({commit}, res) {
        commit('setToken', res)
    },
    'setUserInfo': function ({commit}, res) {
        commit('setUserInfo', res)
    },
    'setComInfo': function ({commit}, res) {
        commit('setComInfo', res)
    },
    'setPage': function ({commit}, res) {
        commit('setPage', res)
    }
}

export default {
    state,
    mutations,
    actions,
    getters: {
        access_token: state => {
            return state.access_token
        },
        userInfo: state => {
            return state.userInfo
        },
        comInfo: state => {
            return state.comInfo
        },
        curPage: state => {
            return state.curPage
        },
    }
}
