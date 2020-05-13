<template>
    <div>
        <button type="button" @click="reg()">Login</button>
        <button type="button" @click="reg()">Regist</button>
    </div>
</template>
<script>
export default {
    name:'Login',
    methods:{
        reg() {
            // 在vue.js中想要跳转到不同的 URL，需要使用 router.push 方法
            // 这个方法会向 history 栈添加一个新的记录，当用户点击浏览器后退按钮时，则回到之前的 URL。
            this.$router.push('/home/list')
        }
    }
}
</script>