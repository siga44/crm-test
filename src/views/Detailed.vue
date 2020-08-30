<template>
  <OrderForm v-if="order" :content="content" :order="order"/>
  <h2 v-else style="text-align: center">Заказа с таким ID не существует</h2>
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