import axios from "axios";
import router from "../../Router";

export default {
    namespaced: true,
    state: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        user: {},
        authorize: true
    },

    getters: {
      data: state => state.data,
    },

    actions: {
      async login({commit, state}) {
          axios.get('/sanctum/csrf-cookie').then(response => {
              axios.post('/login', {
                  email: state.email,
                  password: state.password
              }).then(response => {
                  if (response.data.data) {
                      commit('setUser', response.data.data)
                      commit('setAuthorize', true)
                  }

                  router.push({name: 'feedback'});
              }).catch( err => {
                  console.log(err)
              })
          });
      },

      async register({commit, state}) {
          axios.get('/sanctum/csrf-cookie').then(response => {
              axios.post('/register', {
                  name: state.name,
                  email: state.email,
                  password: state.password,
                  password_confirmation: state.passwordConfirmation,
              }).then(response => {
                  console.log(response)
                  if (response.data.data) {
                      commit('setUser', response.data.data)
                      commit('setAuthorize', true)
                  }

                  router.push({name: 'feedback'});
              }).catch( err => {
                  console.log(err)
              })
          });
      },

      async logout({commit}) {
          axios.post('/logout').then(response => {
              commit('setAuthorize', false)
              commit('setUser', {})
              console.log(response)
          }).catch( err => {
              console.log(err)
          });
      }
    },

    mutations: {
        setName(state, name) {
            state.name = name;
        },
        setEmail(state, email) {
            state.email = email;
        },
        setPassword(state, password) {
            state.password = password;
        },
        setPasswordConfirmation(state, passwordConfirmation) {
            state.passwordConfirmation = passwordConfirmation;
        },
        setUser(state, user) {
            state.user = user;
        },
        setAuthorize(state, authorize) {
            state.authorize = authorize;
        },
    }
}
