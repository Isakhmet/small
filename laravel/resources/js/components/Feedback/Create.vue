<template>
    <div v-if="auth.authorize" class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Create Feedback Form</div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">Category</label>
                            <div class="col-md-6">
                                <Select></Select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="title" class="col-md-4 col-form-label text-md-end">Title</label>

                            <div class="col-md-6">
                                <input v-model="feedback.title" id="title" type="text"
                                       class="form-control
                                ">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="message" class="col-md-4 col-form-label text-md-end">Message</label>

                            <div class="col-md-6">
                                <input v-model="feedback.message" id="message" type="text"
                                       class="form-control
                                ">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="formFile" class="col-md-4 col-form-label text-md-end">File</label>

                            <div class="col-md-6">
                                <input @change="handleFileUpload()" ref="file" class="form-control" type="file" id="formFile">
                            </div>
                        </div>
                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button @click="createFeedback" type="submit" class="btn btn-primary">
                                    Create
                                </button>
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
import Select from "../Ui/Select.vue";

export default {
    components: {
        Select,
    },
    data() {
        return {
            feedbacks: [],
        }
    },
    mounted() {
        this.getFeedback();
    },
    computed: {
        ...mapState(['feedback', 'auth']),
    },
    methods: {
        ...mapActions('feedback', ["getFeedback", "createFeedback"]),
        handleFileUpload(){
            this.feedback.file = this.$refs.file.files[0];
        }
    }
}
</script>
