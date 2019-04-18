<template>
    <div>
        <div class="content" v-if="visible">
            <p>我是一个产品详情组件</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class ProductDetail extends Vue {
        @Prop({ default: false })
        private visible!: boolean;
    }
</script>

<style scoped>

</style>
