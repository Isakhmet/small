<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>

                            <div class="col-md-6">
                                <input v-model="email" id="email" type="email"
                                       class="form-control @error('email')  @enderror" name="email"
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
                                       class="form-control  @enderror" name="password"
                                       autocomplete="current-password">

                                <span v-if="email" class="invalid-feedback" role="alert">
                                        <strong>{{ email }}</strong>
                                    </span>
                            </div>
                        </div>
                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button @click="login" type="submit" class="btn btn-primary">
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

import {mapState} from "vuex";

export default {
    name: "Login",

    computed: {
        ...mapState('auth', ["email", "password"]),
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
        }
    },
    methods: {
        login() {
            this.$store.dispatch("auth/login")
        }
    }
}
</script>

<style scoped>

</style>
