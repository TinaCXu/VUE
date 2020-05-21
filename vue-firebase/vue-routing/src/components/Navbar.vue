<template>
    <nav class='main-nav'>
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link :to="{ name: 'About' }">About</router-link></li>
        </ul>
        <h2>User Profile</h2>
        <ul>
            <li v-for="(Id, index) in userIds" :key="index" >
                <router-link :to="{ name: 'ViewProfile', params: { user_id: Id}}">
                    <span>Profile {{ Id }}</span>
                </router-link>
            </li>
        </ul>
        <h2>Navigation Control</h2>
        <ul>
            <li><button @click="goBack">Go Back</button></li>
            <li><button @click="goHome">Redirect to Home</button></li>
            <li><button @click="goForward">Go Forward</button></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'Navbar',
    data(){
        return{
            userIds: ['1', '2', '3', '4']
        }
    },
    methods:{
        // $route means the current route we are on
        // $router keeps track on the entire navigation history
        goHome(){
            this.$router.push({ name: 'Home' })
        },
        goBack(){
            this.$router.go(-1)
        },
        goForward(){
            this.$router.go(1)
        }
    }
}
</script>
<style scoped>
ul{
    list-style-type: none;
    padding: 0;
}
a{
    color: #42b684;
}
li{
    display: inline-block;
    margin: 10px;
}
a.router-link-exact-active{
    color: purple;
}
</style>