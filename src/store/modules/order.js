import { ADD_ORDER } from "./mutation-types"


const state = () => ({
    orderList: [{name: '박태우', menu: '김밥'}]
})

const getters = {
}

const actions = {
    [ADD_ORDER] ({commit}, payload) {
        commit(ADD_ORDER, payload)
    }
}

const mutations = {
    [ADD_ORDER] (state, payload) {
        state.orderList.push(payload.order)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}