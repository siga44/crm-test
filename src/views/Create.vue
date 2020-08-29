<template>
  <OrderForm :content="content"/>
</template>

<script>
import OrderForm from '@/components/OrderForm'

export default {
  components: {
    OrderForm
  },
  data () {
    return {
      content: {
        title: 'Создание заявки',
        successButton: 'Создать',
        dangerButton: 'Отмена'
      }
    };
  }
};
</script>

<style lang="scss">
</style>