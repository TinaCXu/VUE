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
            // 使用v-model,需要在data中申明初始值
            title: '',
            content: ''
        }
    },
    methods: {
        add () {
            // addItem在store.mutation中，更改store中state状态的唯一方法就是提交mutation，
            // 使用store.commit方法通过触发mutations改变state。
            store.commit('addItem',{
                title: this.title,
                content: this.content
            })
            this.title = ''
            this.content = ''
            this.$router.push('/home/list')

        }
    }
}
</script>