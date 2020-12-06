import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
    state: {
        imgloading: 0,
        detailimgload: 0,
        cart: [],
    },
    mutations: mutations,
    actions: actions,
    modules: {}
})