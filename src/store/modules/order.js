import { ADD_ORDER, REMOVE_ORDER } from "./mutation-types"


const state = () => ({
    orderList: []
})

const getters = {
    bonOrderList: (state) => {
        return state.orderList.filter(order => order.menu_type == "bon")
    },
    bonTotalPrice: (state, getters) => {
        let totalPrice = 0
        if(getters.bonOrderList.length == 0) return 0
        getters.bonOrderList.forEach(order => totalPrice += order.price)
        return totalPrice
    }
}

const mutations = {
    [ADD_ORDER] (state, payload) {
        state.orderList.push(payload.order)
    },
    [REMOVE_ORDER] (state, payload) {
        state.orderList = state.orderList.filter(order => order.id != payload.id)       
    }
}

const actions = {
    [ADD_ORDER] ({commit}, payload) {
        return new Promise((resolve) => {
            commit(ADD_ORDER, payload)
            resolve(payload.order)
        })
        // commit(ADD_ORDER, payload)
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