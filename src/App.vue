<template>
<div>
    <SideBar @collapsedChange="collapsedChange" />
    <router-view :class="mainStyle" />
</div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import axios from 'axios'

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
        collapsedChange: function (collapsed) {
            this.collapsed = collapsed
        }
    },
    computed: {
        mainStyle: function () {
            return this.collapsed ? 'mainStyle' : 'mainStyle2'
        }
    },
    created() {
        axios.get('http://localhost:3000')
            .then(res => {
                console.log(res)
            }, err => {
                console.log(err)
            });
    },
    sockets: {
        connect: function () {
            console.log('11111111111111111')
        },
        customEmit: function (data) {
            console.log('22222222222222222')
            console.log(data)
        }
    },
}
</script>

<style scoped>
.mainStyle {
    padding-left: 50px;
}

.mainStyle2 {
    padding-left: 350px;
}
</style>
