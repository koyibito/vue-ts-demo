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
          this.$router.go(-1);
        }
    }
</script>

<style scoped>

</style>
