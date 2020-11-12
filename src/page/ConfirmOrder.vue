<template>
<div>
    <b-card-group deck class="group">
        <b-card header="본도시락">
            <b-list-group>
                <b-list-group-item v-for="order in orderListbyRestaurant('bon')" :key="order.in">
                    {{order.orderer}} {{order.name}}
                    <span class="price">{{order.price | comma}}원</span>
                </b-list-group-item>
            </b-list-group>
            <div class="totalPrice">
                합계 : {{totalPrice('bon') | comma}}원
            </div>
            <p class="card-text mt-2">
                02-711-5010
            </p>
        </b-card>
        <b-card header="김가네">
            <b-list-group>
                <b-list-group-item v-for="order in orderListbyRestaurant('kim')" :key="order.in">
                    {{order.orderer}} {{order.name}}
                    <span class="price">{{order.price | comma}}원</span>
                </b-list-group-item>
            </b-list-group>
            <div class="totalPrice">
                합계 : {{totalPrice('kim') | comma}}원
            </div>
            <p class="card-text mt-2">
                02-711-5010
            </p>
        </b-card>
        <b-card header="중국집">
            <b-list-group>
                <b-list-group-item v-for="order in orderListbyRestaurant('kim')" :key="order.in">
                    {{order.orderer}} {{order.name}}
                    <span class="price">{{order.price | comma}}원</span>
                </b-list-group-item>
            </b-list-group>
            <div class="totalPrice">
                합계 : {{totalPrice('kim') | comma}}원
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
        ...mapGetters('order', ['totalPrice', 'orderListbyRestaurant'])
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
