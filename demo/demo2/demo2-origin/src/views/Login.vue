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
            this.$router.push('/home/list')
        }
    }
}
</script>