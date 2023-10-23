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
        authorize: false
    },

    actions: {
      async login({commit, state}) {
          axios.get('/sanctum/csrf-cookie').then(response => {
              axios.post('/login', {
                  email: state.email,
                  password: state.password
              }).then(response => {
                  if (response.data.data) {
                      localStorage.setItem('token', response.config.headers['X_XSRF_TOKEN'])
                      commit('setAuthorize', true)
                      commit('setUser', response.data.data)
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
                  if (response.data.data) {
                      localStorage.setItem('token', response.config.headers['X_XSRF_TOKEN'])
                      commit('setAuthorize', true)
                      commit('setUser', response.data.data)
                  }

                  router.push({name: 'feedback'});
              }).catch( err => {
                  console.log(err)
              })
          });
      },

      async logout({commit}) {
          axios.post('/logout').then(response => {
              commit('setDefault')
              localStorage.removeItem('token')
              sessionStorage.clear();

              router.push({name: 'login'});
          }).catch( err => {
              console.log(err)
          });
      },
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
        setDefault(state) {
            state.name = ''
            state.email = ''
            state.password = ''
            state.passwordConfirmation = ''
            state.user = {}
            state.authorize = false;
        }
    }
}
