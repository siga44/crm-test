<template>
  <OrderForm :content="content" :order="order"/>
</template>

<script>
import OrderForm from '@/components/OrderForm';

export default {
  components: {
    OrderForm
  },
  computed: {
    order () {
      return this.$store.getters.order(this.$route.params.id);
    }
  },
  data () {
    return {
      content: {
        title: 'Редактирование заказа',
        successButton: 'Сохранить',
        dangerButton: 'Отмена'
      }
    };
  }
};
</script>

<style lang="scss">
</style>