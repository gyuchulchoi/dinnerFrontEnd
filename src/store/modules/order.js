import { ADD_ORDER, REMOVE_ORDER } from "./mutation-types"


const state = () => ({
    orderList: []
})

const getters = {
    // 각 음식점 종류별로 필터링

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
        // return new Promise((resolve, reject) => {
        //     commit('someMutation')
        //     resolve()
        // })
        commit(ADD_ORDER, payload)
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