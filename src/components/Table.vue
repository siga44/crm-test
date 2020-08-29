<template>
  <div class="table">
    <div class="table--column-wrapper">
      <span v-for="col in cols" :key="col.id" class="table--column-item">{{ col.title }}</span>
    </div>
    <ul class="order-list">
      <ListItem
        @ondelete="onDelete"
        @comments-click="onCommentsClick"
        :order="order"
        v-for="order in orders"
        :key="order._id"
      />
    </ul>
    <Popup @onadd="onAdd" @onclose="onClose" v-if="isPopup" :messages="currentOrderComments"></Popup>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';
import { mapActions, mapGetters } from 'vuex';
import Popup from '@/components/Popup';
import { elementById } from '@/utils';

export default {
  computed: {
    ...mapGetters(['orders'])
  },
  components: {
    Popup,
    ListItem
  },
  data () {
    return {
      cols: [
        { id: 'orderNumber', title: '№' },
        { id: 'receivingDate', title: 'Дата получения' },
        { id: 'companyName', title: 'Название фирмы' },
        { id: 'courierName', title: 'ФИО перевозчика' },
        { id: 'phone', title: 'Телефон' }
      ],
      isPopup: null,
      currentOrder: null,
      currentOrderComments: null
    };
  },
  methods: {
    ...mapActions(['updateOrder']),
    onCommentsClick (id) {
      this.isPopup = true
      this.currentOrder = elementById(this.orders, id)
      this.currentOrderComments = this.currentOrder.comments
    },
    onClose () {
      this.isPopup = this.currentOrderComments = this.currentOrder = null
    },
    onAdd (comment) {
      this.currentOrder.comments.push(comment)
      this.updateOrder(this.currentOrder)
    },
    onDelete (id) {
      if (this?.currentOrder?._id === id) {
        this.onClose()
      }
    }
  }
};
</script>

<style lang="scss">
.table {
  border-top: 3px solid #000;
  padding: 2em 0;
  width: 100%;

  &--column {
    &-wrapper {
      padding: 0.5em 1.5em;
    }

    &-item {
      display: inline-block;
      text-align: center;
      width: 180px;
      font-size: 1.2em;
      margin-right: 50px;

      &:first-child {
        width: 30px;
      }

      &:last-child {
        width: 150px;
      }
    }
  }
}

.order-list {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
}
</style>
