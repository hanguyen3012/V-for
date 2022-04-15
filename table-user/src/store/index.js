

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
        username: state => state.username,
        password: state => state.password,
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
        async login({commit}){
            commit('setAuthenticated',true)
            commit('setUsername', "hanguyen")
            commit('setPassword', "123")
        }
    }
})


 
export default store