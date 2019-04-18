<template>
    <div>
        <p>我是一个产品详情组件</p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class ProductDetail extends Vue {
        @Prop({ default: false })
        visible!: boolean;
    }
</script>

<style scoped>

</style>
