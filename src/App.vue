<template>
<div>
    <SideBar @collapsedChange="collapsedChange" />
    <router-view :class="mainStyle" />
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
        this.$socket.emit('chat', {
            message: '클라이언트가 보냇다'
        })
    },
    sockets: {
        connect: function () {
            console.log('socket connected')
        },
        customEmit: function (data) {
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
