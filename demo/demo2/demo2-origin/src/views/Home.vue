<template>
    <div>
        <router-view/>
        <ul>
            <li><router-link :to="{name: 'list'}">News List</router-link></li>
            <li><router-link :to="{name: 'user'}">User</router-link></li>

        </ul>
    </div>
</template>