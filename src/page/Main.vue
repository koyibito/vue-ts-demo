<template>
    <div class="root">
        <div class="page_bg"></div>
        <div id="title">vue 教程</div>
        <ul class="list">
            <router-link to="/home">
                <li>父子组件传值</li>
            </router-link>
            <router-link to="/lifeCycle">
                <li>生命周期函数</li>
            </router-link>
            <router-link to="/netRequest">
                <li>网络请求</li>
            </router-link>
            <router-link to="/store">
                <li>vuex</li>
            </router-link>
            <router-link to="/router">
                <li>router</li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Main extends Vue {
    }
</script>

<style lang="scss" scoped>
    .root{
        .page_bg{
            position: fixed;
            left: 0;
            top: 0;
            background-color: #ffffff;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        #title{
            background-color: #407fcc;
            color: white;
            text-align: center;
            font-weight: bold;
            font-size: 0.48rem;
            line-height: 1.5rem;
            border-bottom: 1px solid #dfdfdd;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 1.5rem;
        }
        .list{
            margin-top: 1.5rem;
            li{
                width: 100%;
                font-size: 0.48rem;
                line-height: 1.5rem;
                padding-left: 0.57rem;
                border-bottom: 1px solid #dfdfdd;
                color: #1a1b39;
            }
        }
    }
</style>