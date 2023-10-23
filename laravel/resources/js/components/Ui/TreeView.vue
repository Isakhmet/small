<template>
    <ul>
        <li v-for="node in treeData" :key="node.id">
            <label class="dropdown-item" @click="changeCategory(node.label)">
                {{ node.label }}
            </label>
            <tree-view :treeData="node.children" v-if="node.children.length > 0"/>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        treeData: Array
    },
    methods: {
        changeCategory(label) {
            this.$store.commit('feedback/setCategory', label)
        }
    }
}
</script>

<style>

ul, li {
    cursor: pointer;
    list-style: none;
}

label {
    cursor: pointer;
}

</style>
