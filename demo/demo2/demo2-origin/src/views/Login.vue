<template>
    <div>
        <form v-if="!isReg">
            <div>User name:</div>
            <input type="text" v-model="name">
            <div>Password:</div>
            <input type="password" v-model="password">
            <button type="button" @click="login()">Login</button>
            <button type="button" @click="reg()">Regist</button>
        </form>
        <form v-else>
            <div>User name:</div>
            <input type="text" v-model="name">
            <div>Password:</div>
            <input type="password" v-model="password">
            <div>Re-enter Password:</div>
            <input type="password" v-model="repeat">
            <button type="button" @click="addUser()">Regist</button>
            <button type="button" @click="cancel()">Cancel</button>

        </form>
    </div>
</template>
<script>
export default {
    name:'Login',
    methods:{
        data() {
            return {
                isReg: false,
                name: '',
                password: '',
                repeat: ''
            }
        },
        reg() {
            this.isReg = true
        },
        login() {
            if (localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password){
                this.name = ''
                this.password = ''
                // 在vue.js中想要跳转到不同的 URL，需要使用 router.push 方法
                // 这个方法会向 history 栈添加一个新的记录，当用户点击浏览器后退按钮时，则回到之前的 URL。
                this.$router.push('/home/list')
            }else{
                alert('Wrong username or password!')
            }

        },
        addUser() {
            if (this.password == this.repeat){
                localStorage.setItem("name",this.name)
                localStorage.setItem("password",this.password)
                this.name = ''
                this.password = ''
                this.repeat = ''
                this.isReg = false
            }else{
                alert('Please make sure password match!')
            }

        },
        cancel() {
            this.isReg = false
        }

    }
} 
</script>