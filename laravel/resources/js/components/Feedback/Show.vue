<template>
    <div v-if="auth.authorize && feedback.feedback" class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div v-for="(item, key ) in feedback.feedback" class="card mt-2">
                    <div class="card-header text-center">Feedback {{item.id}}</div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">Category</label>
                            <div class="col-md-6">
                                <input :value="item.category" type="text" class="form-control" readonly>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">Title</label>

                            <div class="col-md-6">
                                <input :value="item.title" type="text" class="form-control" readonly>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">Message</label>

                            <div class="col-md-6">
                                <input :value="item.message" type="text" class="form-control" readonly>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">File</label>

                            <div class="col-md-6">
                                <input type="text" class="form-control" :value="item.file" readonly>
                            </div>
                        </div>
                        <div v-if="!auth.user?.isManager" class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">Answer</label>

                            <div class="col-md-6">
                                <input :value="item.answer" type="text" class="form-control" readonly>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">Created At</label>

                            <div class="col-md-6">
                                <input type="text" class="form-control" :value="item.createdAt" readonly>
                            </div>
                        </div>
                        <div v-if="auth.user?.isManager">
                            <div  class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">User name</label>

                                <div class="col-md-6">
                                    <input :value="item.userName" type="text" class="form-control">
                                </div>
                            </div>
                            <div  class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">User email</label>

                                <div class="col-md-6">
                                    <input :value="item.userEmail" type="text" class="form-control">
                                </div>
                            </div>
                            <div v-if="item.answer" class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Answer</label>

                                <div class="col-md-6">
                                    <input :value="item.answer" type="text" class="form-control">
                                </div>
                            </div>
                            <div v-if="showAnswerField && answerFeedbackId === item.id" class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Answer</label>
                                <div class="col-md-6">
                                    <input v-model="answer" type="text" class="form-control">
                                </div>
                                <div v-if="showAnswerField && answerFeedbackId === item.id" class="col-md-8 offset-md-4">
                                    <button @click="saveAnswer(item.id, answer); showAnswerField = false" type="submit" class="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </div>
                            <div v-if="!item.answer" class="row mb-0">
                                <div v-if="!showAnswerField" class="col-md-8 offset-md-4">
                                    <button @click="showAnswer(item.id); showAnswerField = true" type="submit" class="btn btn-primary">
                                        Answer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
    data(){
        return {
            showAnswerField: false,
            answerFeedbackId: null,
            answer: ''
        }
    },
    mounted() {
        this.getFeedback();
    },
    computed: {
        ...mapState(['feedback', 'auth']),
    },
    methods: {
        ...mapActions('feedback', ["getFeedback", "createFeedback", "updateFeedback"]),

        showAnswer(feedbackId) {
            this.answerFeedbackId = feedbackId
        },

        saveAnswer(feedbackId, answer) {
            if (!answer) {
                return;
            }

            const data = {
                id: feedbackId,
                answer: answer
            }

            this.updateFeedback(data)
        }
    }
}
</script>
