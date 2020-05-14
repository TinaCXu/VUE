<template>
    <div>
        <router-view/>
        <ul class='footer'>
            <li class="icons"><router-link :to="{name: 'list'}">News List</router-link></li>
            <li class="icons"><router-link :to="{name: 'user'}">User</router-link></li>

        </ul>
    </div>
</template>
<style lang="scss" scoped>
li{
    list-style: none;
}
.footer{
    position: 100%;
    width: 100%;
    height: 60px;
    line-height: 60px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
}
.icons{
    font-size: 16px;
    flex: 1;
    text-align: center;
    border-top: 1px solid #42b983;
    a{
        color: #42b983;
        display: block;
        // &=a
        &.active{
            color: #fff;
            background-color: #42b983;
        }

    }
}
</style>