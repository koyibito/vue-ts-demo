<template>
    <div>
        <p>生命周期函数 + vue router 钩子函数</p>
    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class LifeCycle extends Vue {

        private mounted(): void {
            console.log('执行mounted()方法');
        }

        private beforeRouteEnter(to: any, from: any, next: any): void {
            console.log('beforeRouteEnter()');
            next();
        }

        private beforeRouteLeave(to: any, from: any, next: any): void {
            console.log('beforeRouteLeave()');
            next();
        }
    }
</script>

<style scoped>

</style>