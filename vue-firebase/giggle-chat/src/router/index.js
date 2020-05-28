import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      // when props is true, route.params will be the property of component
      props: true,
      // router guard
      beforeEnter: (to, from, next) =>  {
        // to: where to go - chat.vue
        // from: from where
        // next: next will do what
        console.log(to.params.name)
        if (to.params.name){
          next()
        }else{
          next({ name: 'Welcome'})
        }
      }
    }

  ]
})
