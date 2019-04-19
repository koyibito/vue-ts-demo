<template>
    <div>
        <div class="content" v-if="visible">
            <p>我是一个产品详情组件</p>
            <p>以下为调用父组件的方法，并为父组件传值</p>
            <p v-on:click="addToCount(2)">addTocount</p>
            <p v-on:click="resetCount">resetCount</p>
            <p v-on:click="returnValue">returnValue</p>
            <p v-on:click="promise">promise</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

    @Component
    export default class ProductDetail extends Vue {
        @Prop({ default: false })
        private visible!: boolean;

        private count: number = 0;

        @Emit()
        private addToCount(n: number): void {
            this.count += n;
        }

        @Emit('reset')
        private resetCount(): void {
            this.count = 0;
        }

        @Emit()
        private returnValue(): number {
            return 10;
        }

        @Emit()
        private promise(): any {
            return new Promise((resolve) => {
                setTimeout(() => {
                   resolve(20);
                }, 0);
            });
        }
    }
</script>

<style scoped>

</style>
