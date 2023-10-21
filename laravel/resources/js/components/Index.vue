<template>
    <div>
        <Navbar></Navbar>
        <main class="py-4">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>

import Navbar from "./Ui/Navbar.vue";

export default {
    name: "Index",
    components: {
        Navbar
    }
}
</script>
