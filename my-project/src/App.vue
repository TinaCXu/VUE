<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <!-- the component we imported, self-closed -->
    <Navbar />
    <!-- two component share the same data, move the data into App.vue and bind attribute to these component -->
    <!-- in component vue, should respectively bind prop which has the same name with :friends -->
    <AllFriends :friends="friends" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import Navbar from './Navbar'
import OnlineFriends from './OnlineFriends'
import AllFriends from './AllFriends'
export default {
  name: 'app',
  // register the component we import to this App.vue
  components: {
    // Navbar: Navbar -we can do this if both name are same
    Navbar,
    OnlineFriends,
    AllFriends
  },
  data () {
    return {
      title: 'My first Vue app',
      friends: [
          { name: 'Anna', online: true},
          { name: 'Ben', online: false},
          { name: 'Cara', online: true},
          { name: 'Dora', online: false},
      ]
    }
  }
}
</script>

<style>
h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
