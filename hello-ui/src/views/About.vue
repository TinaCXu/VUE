<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{msg}}</p>
  </div>
</template>
<script>
import Store from '@/store/index'
export default {
  name: 'about',
  Store,
  data () {
    return {
      msg: Store.state.count
    }
  }
}
</script>
