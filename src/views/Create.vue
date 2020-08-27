<template>
  <div class="form-wrapper">
    <h2 class="form-title">Создание заявки</h2>
    <form class="form" @submit.prevent="onSubmit">
      <div class="form-content">
        <InputField
          v-for="(label, index) in labels"
          :key="index"
          :htmlType="label.type"
          :index="index"
          @update="onInputChange"
        >{{label.text}}</InputField>
      </div>
      <div class="form-buttons">
        <Button type="success" htmlType="submit">Создать</Button>
        <Button type="danger">Отмена</Button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
export default {
  components: {
    Button,
    InputField,
  },
  data() {
    return {
      labels: [
        { type: "number", text: "Номер заказа" },
        { type: "date", text: "Дата" },
        { type: "text", text: "Название компании" },
        { type: "text", text: "ФИО Перевозчика" },
        { type: "tel", text: "Телефон" },
        { type: "text", text: "Комментарии" },
        { type: "url", text: "АТИ" },
      ],
      currentOrder: {
        orderNumber: null,
        date: null,
        company: null,
        courierName: null,
        phoneNumber: null,
        comments: [],
        atiCode: null,
      },
    };
  },
  methods: {
    ...mapActions(["createOrder"]),
    onInputChange(value, index) {
      const key = Object.keys(this.currentOrder)[index];
      this.currentOrder[key] = value;
    },
    onSubmit() {
      const newOrder = {
        _id: Date.now().toString(32),
        ...this.currentOrder,
      };
      this.createOrder(newOrder);
      this.$router.push("/");
    },
  },
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
    width: 250px;
    display: flex;
    justify-content: space-between;
  }
}
</style>