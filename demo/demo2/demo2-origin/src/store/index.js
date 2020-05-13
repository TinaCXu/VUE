import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 在state中需要定义我们所需要管理的数组、对象、字符串等等
    // 只有在这里定义了，在vue.js的组件中才能获取你定义的这个对象的状态。
    lists :[]
  },
  mutations: {
    // 更改store中state状态的唯一方法就是提交mutation，调用方法：store.commit
    addItem (state, value){
      state.lists.push(value)
    }
  },
  actions: {
    // action可以提交mutation，在action中可以执行store.commit，
  },
  modules: {
    // module可以将store分割成模块，每个模块中拥有自己的state、mutation、action和getter
  }
})
