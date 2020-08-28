import Vue from 'vue'
import Vuex from 'vuex'
import { initialState } from '@/constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: JSON.parse(localStorage.getItem('orders-state')) || initialState,
  mutations: {
    deleteOrder(state, id) {
      state.orders = state.orders.filter(order => order._id !== id)
      localStorage.setItem('orders-state', JSON.stringify(state))
    },
    createOrder(state, newOrder) {
      state.orders = [newOrder, ...state.orders]
      localStorage.setItem('orders-state', JSON.stringify(state))
    },
    updateOrder(state, changedOrder) {
      const index = state.orders.findIndex(order => order.id === changedOrder.id)
      const orders = [...state.orders]
      orders[index] = { ...state.orders[index], ...changedOrder }

      state.orders = orders
      localStorage.setItem('orders-state', JSON.stringify(state))
    }
  },
  actions: {
    deleteOrder({ commit }, id) {
      commit('deleteOrder', id)
    },
    createOrder({ commit }, payload) {
      commit('createOrder', payload)
    },
    updateOrder({ commit }, payload) {
      commit('updateOrder', payload)
    }
  },
  getters: {
    orders: s => s.orders,
    order: ({ orders }) => id => orders.find(({ _id }) => _id === id)
  }
})
