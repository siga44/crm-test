<template>
  <OrderForm :content="content"/>
</template>

<script>
// TODO: В форме создания заказа не верно индексируются поля
// TODO: Проблема с полями ATI и комментариями
// TODO: Можно исправить геттер в сторе чтобы он отдавал заказ без поля комментов
// TODO: Либо посмотреть что можно исправить во вьюхе Create
import OrderForm from '@/components/OrderForm';

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