import axios from "axios"
import { API_SERVER, ORDERS } from "../../assets/urls"
import { GET_ORDER_LIST, ADD_ORDER, REMOVE_ORDER } from "./mutation-types"

const state = () => ({
    orderList: []
})

const getters = {
    orderListbyRestaurant: (state) => (restaurantType) => {
        return state.orderList.filter(order => order.menu_type == restaurantType)
    },
    totalPrice: (state, getters) => (restaurantType) => {
        let totalPrice = 0
        if(getters.orderListbyRestaurant(restaurantType).length == 0) return 0
        getters.orderListbyRestaurant(restaurantType).forEach(order => totalPrice += order.price)
        return totalPrice
    }
}

const mutations = {
    [GET_ORDER_LIST] (state, payload) {
        state.orderList = payload
    },
    [ADD_ORDER] (state, payload) {
        state.orderList.push(payload.order)
    },
    [REMOVE_ORDER] (state, payload) {
        state.orderList = state.orderList.filter(order => order.id != payload.id)       
    }
}

const actions = {
    [GET_ORDER_LIST] ({commit}) {
        axios.get(API_SERVER + ORDERS)
        .then(res => {
            commit(GET_ORDER_LIST, res.data)
        })
        .catch(err => console.log(err))  
    },
    [ADD_ORDER] ({commit}, payload) {
        return new Promise((resolve) => {
            commit(ADD_ORDER, payload)
            resolve(payload.order)
        })
    },
    [REMOVE_ORDER] ({commit}, payload) {
        commit(REMOVE_ORDER, payload)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}