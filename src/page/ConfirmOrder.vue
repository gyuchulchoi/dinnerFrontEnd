<template>
<div>
    <b-card-group deck class="group">
        <b-card header="본도시락">
            <b-list-group>
                <b-list-group-item v-for="order in orderList" :key="order.in">
                    {{order.name}} {{order.price}} {{order.orderer}}
                </b-list-group-item>
            </b-list-group>
            <p class="card-text mt-2">
                02-711-5010
            </p>
        </b-card>
    </b-card-group>

</div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    computed: {
        ...mapState('order', {
            orderList: state => state.orderList
        })
    }
}
</script>

<style scoped>
.group {
    padding: 30px
}
</style>
