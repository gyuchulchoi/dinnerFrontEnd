<template>
<div>
    <SideBar @collapsedChange="collapsedChange" />
    <router-view :class="mainStyle" />

    <b-dropdown id="dropdown-dropup" dropup text="주문현황" variant="primary" class="m-2 overlay">
        <b-dropdown-item v-for="order in orderList" :key="order.id">
            {{order.orderer}} - {{order.name}}
        </b-dropdown-item>
    </b-dropdown>

</div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import {
    utils,
    toast
} from './assets/mixin'
import {
    mapActions,
    mapState
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
        ...mapActions('order', ['getOrderList']),
        collapsedChange: function (collapsed) {
            this.collapsed = collapsed
        }
    },
    computed: {
        mainStyle: function () {
            return this.collapsed ? 'mainStyle' : 'mainStyle2'
        },
        ...mapState('order', ['orderList'])
    },
    created() {
        this.getOrderList()
        this.$socket.emit('join')
        this.$socket.on(this.addOrderEvent, (data) => {
            this.getOrderList()
                .then(() => {
                    this.makeToast('success', '알림', `${data.order.orderer}님이 ${data.order.name}를 추가했습니다.`);
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

.overlay {
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 80px;
    height: 80px;
    border-radius: 40px;
}
</style>
