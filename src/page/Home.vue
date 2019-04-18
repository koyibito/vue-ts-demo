<template>
    <div>
        <p>我是home页面</p>
        <router-link to="/about">
            <p>关于我们</p>
        </router-link>
        <div>
            <p v-on:click="switchProductDetail">点击【显示-隐藏】ProductDetail</p>
            <product-detail :visible="isShowProductDetail"></product-detail>
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
    export default class Home extends Vue {

        private isShowProductDetail: boolean = false;

        private switchProductDetail(): void {
            this.isShowProductDetail = !this.isShowProductDetail;
        }
    }
</script>

<style scoped>
</style>
