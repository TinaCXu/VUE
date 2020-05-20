<template>
    <div id="all-friends">
        <h2>All Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span @click="unfriend(friend.name)">{{ friend.name}}</span>
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
    },
    methods: {
        unfriend(name){
            // $emit:make custom event from this component:'delete'-name of the custom event, then optional parameter wanted to send with custom event
            this.$emit('delete',{name:name})
        }
    }
}
</script>

<style>

</style>