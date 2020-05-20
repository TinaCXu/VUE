<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle">Change Title</button>
        <input type="text" v-model="searchTerm">
        <div v-for="post in filteredPosts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body | snippet }}</p>
            <!-- snippet is the name of filter, create global filter in main.js -->
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Blogs',
    data(){
        return {
            blogTitle: 'Blogs',
            posts: [],
            searchTerm: '',
        }
    },
    methods: {
        changeTitle(){
            this.blogTitle = 'Amazing Blog Site'
        }
    },
    computed:{
        filteredPosts(){
            return this.posts.filter(post => {
                return post.title.match(this.searchTerm)
            })
        }
    },
    // create lifecycle hook, so that you can use different function in different lifecycle
    // these lifecycle hook function cannot go into methods function
    // no data appears on the DOM when alert, which means we can do something before data rendered to DOM
    beforeCreate(){
        alert('beforeCreate hook')
    },
    // created hook is a good hook to go out and get some external data
    // using jsonPlaceholder https://jsonplaceholder.typicode.com/ and axios to grap external data
    // npm install axios --save  under the project, axios will be installed under nolde module
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/').then(response => {
            console.log(response)
            // after grabing data through axios, then update the data post
            this.posts = response.data
        }).catch(err => {
            console.log(err)
        })
    },
    // when data is changed, this hook will alert
    beforeUpdate(){
        alert('beforeUpdate hook')
    }
}
</script>
<style scoped>

</style>