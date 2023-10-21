import {createStore} from 'vuex';
import auth from './modules/auth';
import feedback from './modules/feedback';

export default createStore({
    modules: {
        auth,
        feedback
    },
});
