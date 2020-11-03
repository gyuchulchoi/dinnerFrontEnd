<template>
    <div>
        <SideBar @collapsedChange="collapsedChange"/>
        <router-view :class="mainStyle"/>
    </div>
</template>

<script>

import SideBar from './components/SideBar.vue'

export default {
    name: 'App',
    components: {
        SideBar
    },
    data() {
        return {
            collapsed: true
        }
    },
    methods: {
        collapsedChange : function (collapsed) {
            this.collapsed = collapsed
        }
    },
    computed: {
        mainStyle: function () {
            return this.collapsed? 'mainStyle':'mainStyle2'
        }
    },
    aaa : 'dd'
}
</script>

<style scoped>
 .mainStyle{
    padding-left: 50px;
 }
 .mainStyle2{
    padding-left: 350px;
 }
</style>