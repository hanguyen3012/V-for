

import { createStore } from 'vuex'

const store = createStore({
    state: {
        authenticated: false,
        username: "",
        password: "",
        usernameAcc:"hanguyen",
        passwordAcc: "123"
    },
    getters: {
        auth(state) {return state.authenticated},
        usernameAcc: state => state.usernameAcc,
        passwordAcc: state => state.passwordAcc,
    },
    mutations: {
        setAuthenticated(state, authenticated){
            state.authenticated = authenticated;
        },
        setUsername(state, username){
            state.username = username;
        },
        setPassword(state, password){
            state.password = password
        }
    },
    actions: {
        async logout({commit}){
            commit('setAuthenticated',false)
            commit('setUsername',null)
            commit('setPassword', null)
        },
        async login({commit},state){
            commit('setAuthenticated',true)
            commit('setUsername', state.usernameAcc)
            commit('setPassword', state.passwordAcc)
        }
    }
})


 
export default store