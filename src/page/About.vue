<template>
    <div>
        <p>我是about页面</p>
        <p v-on:click="back">返回</p>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class About extends Vue {
        private back(): void {
          console.log('aaaaa');
        }
    }
</script>

<style scoped>

</style>
