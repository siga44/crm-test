<template>
  <div class="form-wrapper">
    <h2 class="form-title">{{ content.title }}</h2>
    <form class="form" @submit.prevent="onSubmit">
      <EditOrderForm v-if="order" :order="currentOrder" class="form-content" @update="onInputChange"/>
      <CreateOrderForm v-else class="form-content" @update="onInputChange"/>
      <div class="form-buttons">
        <Button htmlType="submit" type="success">{{ content.successButton }}</Button>
        <Button htmlType="button" type="danger" @onreject="onReject">{{ content.dangerButton }}</Button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import CreateOrderForm from '@/components/CreateOrderForm';
import EditOrderForm from '@/components/EditOrderForm';
import Button from '@/components/Button';

export default {
  props: ['content', 'order'],
  components: {
    Button,
    CreateOrderForm,
    EditOrderForm
  },
  data () {
    let currentOrder
    if (this.order) {
      currentOrder = {
        _id: this.order._id,
        orderNumber: this.order.orderNumber,
        date: this.order.date,
        company: this.order.company,
        courierName: this.order.courierName,
        phoneNumber: this.order.phoneNumber,
        atiCode: this.order.atiCode
      }
    }

    return {
      currentOrder: currentOrder || {
        orderNumber: null,
        date: null,
        company: null,
        courierName: null,
        phoneNumber: null,
        atiCode: null
      }
    };
  },
  methods: {
    ...mapActions(['createOrder', 'updateOrder']),
    onInputChange (value, index) {
      const key = Object.keys(this.currentOrder)[index];
      if (key === 'date') {
        const date = new Date(value);
        this.currentOrder[key] = date.toLocaleDateString();
      } else {
        this.currentOrder[key] = value;
      }
    },
    onSubmit () {
      if (this.order) {
        this.updateOrder(this.currentOrder);
      } else {
        const newOrder = {
          _id: Date.now().toString(32),
          comments: [],
          ...this.currentOrder
        };
        this.createOrder(newOrder);
      }
      this.$router.push('/');
    },
    onReject () {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss">
.form {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column nowrap;

  &-title {
    text-align: center;
    font-size: 2.4em;
    margin-bottom: 2em;
  }

  &-content {
    margin-bottom: 2em;
  }

  &-buttons {
    width: 350px;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>