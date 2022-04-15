

import { createStore } from 'vuex'

const store = createStore({
    state: {
        authenticated: false,
        username: "",
        password: ""
    },
    getters: {
        auth(state) {return state.authenticated},
        username: state => state.username,
        password: state => state.password
    },
    mutations: {
        setAuthenticated(state, authenticated){
            state.authenticated = authenticated;
        }
    },
    actions: {
        async logout({commit}){
            commit('setAuthenticated',false)
        },
        async login({commit}, ){
            commit('setAuthenticated', true)
        }
    }
})


 
export default store