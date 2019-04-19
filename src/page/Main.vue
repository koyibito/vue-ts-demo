<template>
    <div>
        <div class="list">
            <router-link to="/home">
                <p>父子组件传值</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { Component, Vue } from 'vue-property-decorator';

    @Component ({})
    export default class Main extends Vue {}
</script>

<style scoped>

</style>