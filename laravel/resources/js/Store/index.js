import {createStore} from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';
import feedback from './modules/feedback';

export default createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    modules: {
        auth,
        feedback
    },
});
