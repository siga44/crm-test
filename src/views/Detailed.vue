<template>
  <h1>Order number {{ order.orderNumber }}</h1>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$store.getters.order(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss">
</style>