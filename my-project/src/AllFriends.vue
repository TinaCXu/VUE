<template>
    <div id="all-friends">
        <h2>All Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span>{{ friend.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AllFriends',
    // the props name is the attribute name bind in App.vue
    props: ['friends'],
    data() {
        return{
        }
    }
}
</script>

<style>

</style>