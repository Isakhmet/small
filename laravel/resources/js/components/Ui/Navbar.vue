<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'feedback'}">Feedback</router-link>
            <router-link v-if="this.authorize && !user?.isManager" class="navbar-brand" :to="{name: 'feedback.create'}">Create feedback</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li v-if="!this.authorize" class="nav-item">
                        <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
                    </li>
                    <li v-if="!this.authorize" class="nav-item">
                        <router-link class="nav-link" :to="{name: 'registration'}">Registration</router-link>
                    </li>
                    <li v-if="this.authorize" class="nav-item">
                        <input @click="logout" class="form-control" type="submit" value="Logout">
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
    name: "Navbar",
    data() {
        return {
            token: null
        }
    },
    mounted() {
        this.getToken()
    },
    updated() {
        this.getToken()
    },
    computed: {
        ...mapState('auth', ["authorize", "user"])
    },
    methods: {
        ...mapActions('auth', ['logout']),
        getToken() {
            this.token = localStorage.getItem('token')
        }
    }
}
</script>

<style scoped>

</style>
