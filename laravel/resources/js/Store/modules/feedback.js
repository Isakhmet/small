import router from "../../Router";

export default {
    namespaced: true,
    state: {
        feedback: {},
        title: '',
        message: '',
        answer: '',
        file: null,
        category: 'Choose category'
    },

    actions: {
        async getFeedback({commit, state}) {
            await axios.get('/api/feedback/get').then(response => {
                commit('setFeedback', response.data.data)
            }).catch(err => {
                alert(err.response.statusText)
            });
        },

        async createFeedback({commit, state}) {
            let formData = new FormData();

            formData.append('title', state.title);
            formData.append('message', state.message);
            formData.append('category', state.category);
            formData.append('file', state.file);

            await axios.post('/api/feedback/create',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(response => {
                commit('setDefault');
                router.push({name: 'feedback'});
                console.log(response.data)
                if (!response.data.success) {
                    alert(response.data.message)
                }
            }).catch(error => {
                alert(error.response.statusText)
            });
        },

        async updateFeedback({commit}, data) {
            await axios.put('/api/feedback/update',
                {
                    id: data.id,
                    answer: data.answer
                }
            ).then(response => {
                router.go()
            }).catch(error => {
                alert(error.response.statusText);
            });
        }
    },

    mutations: {
        setEmail(state, email) {
            state.email = email;
        },
        setPassword(state, password) {
            state.password = password;
        },
        setCategory(state, category) {
            state.category = category;
        },
        setFeedback(state, feedback) {
            state.feedback = feedback;
        },

        setDefault(state) {
            state.title = '';
            state.message = '';
            state.category = 'Choose category';
            state.answer = '';
            state.file = null;
        }
    }
}
