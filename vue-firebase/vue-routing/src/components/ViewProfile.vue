<template>
    <div class='view-profile'>
        <h2>Profile for {{ userId }}</h2>
    </div>
</template>
<script>
export default {
    name:'ViewProfile',
    data(){
        return{
            // $route means the current route we are on
            // $router keeps track on the entire navigation history
            // when first enter this vue, Vue has created an instances of these component
            // but if you re-enter the params of route, the HTML page has not been destroyed, it is still the latest instance
            userId: this.$route.params.user_id
        }
    },
    methods:{
        updateId(){
            this.userId = this.$route.params.user_id
        }
    },
    // we need watch,用来监测Vue实例上的数据变动
    watch:{
        $route: 'updateId'
    }
}
</script>
<style scoped>

</style>