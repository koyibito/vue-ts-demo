<template>
    <div>
        <div class="content" v-if="visible">
            <p>我是一个产品详情组件</p>
            <p v-on:click="callParent">点我调用父组件的方法</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

    @Component
    export default class ProductDetail extends Vue {
        @Prop({ default: false })
        private visible!: boolean;

        @Emit()
        private callParent(): void {
            console.log('我是产品详情组件内容');
        }
    }
</script>

<style scoped>

</style>
