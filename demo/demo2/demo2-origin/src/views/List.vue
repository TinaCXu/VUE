<template>
    <div>List
        <ul>
            <li v-for="(item,index) in pageLists" :key="index">
                {{item.title}}-{{item.content}}
            </li>
        </ul>
    </div>
    
</template>
<script>
import store from '@/store/index'
export default {
    name: 'List',
    store,
    // 动态列表，需要动态监听list的变化，因此需要computed
    computed: {
        pageLists () {
            return store.state.lists
        }
    }
}
</script>