<template>
  <div class="about">
    <h1> Hello Info Component</h1>
    <button type="button" @click="add()">ADD</button>
  </div>
</template>
<script>
import Store from '@/store/index'
export default {
  name: 'Info',
  Store,
  mounted () {
    window.vue = this
  },
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    add () {
      console.log('add Event from info!')
      //  console.error('INFO!')
      //  添加debugger断点进行调试
      debugger
      Store.commit('increase')
    },
    output () {
      console.log('OUTPUT')
    }
  }
}
</script>
