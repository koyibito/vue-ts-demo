<template>
    <div>
        <p>我是home页面</p>
        <router-link to="/about">
            <p>关于我们</p>
        </router-link>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {}
</script>

<style scoped>
</style>
