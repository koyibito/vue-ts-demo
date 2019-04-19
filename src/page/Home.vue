<template>
    <div>
        <p>我是home页面</p>
        <router-link to="/about">
            <p>关于我们</p>
        </router-link>
        <div>
            <p v-on:click="switchProductDetail">点击【显示-隐藏】ProductDetail</p>
            <p>parentCount: {{parentCount}}</p>
            <product-detail :visible="isShowProductDetail" v-on:add-to-count="ParentAddToCount" v-on:reset="ParentResetCount"
                            v-on:return-value="ParentReturnValue" v-on:promise = "ParentPromise"></product-detail>
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

        private parentCount: number = 0;
        private isShowProductDetail: boolean = false;

        private switchProductDetail(): void {
            this.isShowProductDetail = !this.isShowProductDetail;
        }

        private ParentAddToCount(n: number): number {
            return this.parentCount = this.parentCount + n;
        }

        private ParentResetCount(): void {
            this.parentCount = 0;
        }

        private ParentReturnValue(n: number): void {
            this.parentCount = n;
        }

        private ParentPromise(value: number): string {
            return value + '';
        }
    }
</script>

<style scoped>
</style>
