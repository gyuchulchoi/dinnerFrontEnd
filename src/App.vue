<template>
<div>
    <SideBar @collapsedChange="collapsedChange" />
    <router-view :class="mainStyle" />
</div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import {
    utils,
    toast
} from './assets/mixin'
import {
    mapActions
} from 'vuex'

export default {
    name: 'App',
    components: {
        SideBar
    },
    mixins: [utils('addOrderEvent'), toast],
    data() {
        return {
            collapsed: true
        }
    },
    methods: {
        ...mapActions('order', ['addOrder']),
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
        this.$socket.emit('join')
        this.$socket.on(this.addOrderEvent, (data) => {
            this.addOrder({
                order: data
            }).then((order) => {
                this.makeToast('success', `${order.orderer}님이 ${order.name}를 추가했습니다.`);
                console.log(order)
            })
        })
    }
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
