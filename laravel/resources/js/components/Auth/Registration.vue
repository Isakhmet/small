<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register</div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>

                            <div class="col-md-6">
                                <input v-model="name" id="name" type="text" class="form-control" name="name" required autocomplete="name" autofocus>

                                <span v-if="email" class="invalid-feedback" role="alert">
                                        <strong>{{ email }}</strong>
                                    </span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>

                            <div class="col-md-6">
                                <input v-model="email" id="email" type="email"
                                       class="form-control @error('email')  " name="email"
                                       autocomplete="email" autofocus>

                                <span v-if="email" class="invalid-feedback" role="alert">
                                        <strong>{{ email }}</strong>
                                    </span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                            <div class="col-md-6">
                                <input v-model="password" id="password" type="password"
                                       class="form-control  " name="password"
                                       autocomplete="current-password">

                                <span v-if="email" class="invalid-feedback" role="alert">
                                        <strong>{{ email }}</strong>
                                    </span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">Confirm Password</label>

                            <div class="col-md-6">
                                <input v-model="passwordConfirmation" id="passwordConfirmation" type="password"
                                       class="form-control " name="passwordConfirmation"
                                       autocomplete="current-password">

                                <span v-if="email" class="invalid-feedback" role="alert">
                                        <strong>{{ email }}</strong>
                                    </span>
                            </div>
                        </div>
                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button @click="register" type="submit" class="btn btn-primary">
                                    Login
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
import {mapState, mapActions} from "vuex";

export default {
    name: "Registration",

    computed: {
        ...mapState('auth', ["email", "password", "name", "passwordConfirmation"]),
        name: {
            get() {
                return this.$store.state.auth.name;
            },
            set(value) {
                this.$store.commit('auth/setName', value);
            }
        },
        email: {
            get() {
                return this.$store.state.auth.email;
            },
            set(value) {
                this.$store.commit('auth/setEmail', value);
            },
        },

        password: {
            get() {
                return this.$store.state.auth.password;
            },
            set(value) {
                this.$store.commit('auth/setPassword', value);
            }
        },
        passwordConfirmation: {
            get() {
                return this.$store.state.auth.passwordConfirmation;
            },
            set(value) {
                this.$store.commit('auth/setPasswordConfirmation', value);
            }
        },
    },
    methods: {
        ...mapActions('auth', ['register'])
    }
}
</script>

<style scoped>

</style>
