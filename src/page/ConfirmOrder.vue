<template>
<div>
    <b-card-group deck class="group">
        <b-card header="본도시락">
            <b-list-group>
                <b-list-group-item v-for="order in bonOrderList" :key="order.in">
                    {{order.orderer}} {{order.name}}
                    <span class="price">{{order.price | comma}}원</span>
                </b-list-group-item>
            </b-list-group>
            <div class="totalPrice">
                합계 : {{bonTotalPrice | comma}}원
            </div>
            <p class="card-text mt-2">
                02-711-5010
            </p>
        </b-card>
    </b-card-group>

</div>
</template>

<script>
import {
    mapGetters,
    mapState
} from 'vuex'

export default {
    computed: {
        ...mapState('order', {
            orderList: state => state.orderList
        }),
        ...mapGetters('order', ['bonOrderList', 'bonTotalPrice'])
    }
}
</script>

<style scoped>
.group {
    padding: 30px
}

.totalPrice {
    text-align: right;
}
</style>
