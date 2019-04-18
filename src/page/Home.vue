<template>
    <div>
        <p>我是home页面</p>
        <router-link to="/about">
            <p>关于我们</p>
        </router-link>
        <div>
            <p>ProductDetail 组件部分</p>
            <product-detail></product-detail>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ProductDetail from '../components/ProductDetail.vue';

    @Component ({
        components: {
            ProductDetail,
        },
    })
    export default class Home extends Vue {}
</script>

<style scoped>
</style>
