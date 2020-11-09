<template>
<div>
    <b-jumbotron :header="appName" lead="Bootstrap v4 Components for Vue.js 2" />
    {{orderList}}
    <button @click="addOrder({order:{name:'dd'}})">추가</button>
    <button @click="removeOrder({id:1})">삭제</button>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'

export default {
    computed: {
        ...mapState('order', {
            orderList: state => state.orderList
        }),
        ...mapState(['appName'])
    },
    methods: {
        ...mapActions('order', ['addOrder', 'removeOrder'])
    }
}
</script>
