<template>
    <div>
        <p>Titel</p>
        <input type="text" v-model="title">
        <p>Content</p>
        <input type="text" v-model="content">
        <button @click="add()">Add</button>
    </div>
</template>
<script>
import store from '@/store/index'
export default {
    name: "Add",
    store,
    data () {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        add () {
            store.commit('addItem',{
                title: this.title,
                content: this.content
            })
            this.title = ''
            this.content = ''

        }
    }
}
</script>