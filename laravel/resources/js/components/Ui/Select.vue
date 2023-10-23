<template>
    <div class="dropdown">
        <p class="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            {{category}}
        </p>
        <ul class="dropdown-menu p-0" aria-labelledby="dropdownMenuLink">
            <tree-view :treeData="treeData"/>
        </ul>
    </div>
</template>

<script>
import TreeView from './TreeView.vue';
import {mapState} from 'vuex';

export default {
    data() {
        return {
            treeData: [
                {
                    id: 1,
                    label: 'Category 1',
                    children: [
                        {
                            id: 3,
                            label: 'Category 1.1',
                            children: [
                                {
                                    id: 5,
                                    label: 'Category 1.1.1',
                                    children: [],
                                }
                            ],
                        },
                        {
                            id: 4,
                            label: 'Category 1.2',
                            children: [],
                        }
                    ],
                },
                {
                    id: 2,
                    label: 'Category 2',
                    children: [
                        {
                            id: 6,
                            label: 'Category 2.1',
                            children: [],
                        }
                    ]
                }
            ],
            selectedOption: null,
        };
    },
    components: {
        TreeView,
    },
    computed: {
        ...mapState('feedback', ["category"])
    }
};
</script>
