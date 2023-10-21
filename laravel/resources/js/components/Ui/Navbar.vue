<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'feedback'}">Feedback</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto">
                    <!-- Authentication Links -->

                    <li v-if="!this.authorize" class="nav-item">
                        <router-link class="nav-link" :to="{name: 'user.login'}">Login</router-link>
                    </li>
                    <li v-if="!this.authorize" class="nav-item">
                        <router-link class="nav-link" :to="{name: 'user.registration'}">Registration</router-link>
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
    computed: {
        ...mapState('auth', ["authorize"])
    },
    methods: {
        ...mapActions('auth', ['logout'])
    }
}
</script>

<style scoped>

</style>
