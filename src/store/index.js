import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [
      {
        _id: Date.now().toString(16),
        orderNumber: 1,
        date: '22.08.2020',
        company: 'YetiCrab',
        courierName: 'Квашнин С.Е.',
        phoneNumber: '80123456789',
        comments: ['Номер получателя: 89876543210'],
        atiCode: 'https://ati.su/firms/12345/info'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    orders: ({ orders }) =>
      orders.map(order => ({
        ...order,
        comments: order.comments.length
      })),
    order: ({ orders }) => id => orders.find(({ _id }) => _id === id)
  }
})
