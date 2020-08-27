<template>
  <div class="form-wrapper">
    <form class="form">
      <div class="form-content">
        <InputField v-for="label in labels" :key="label.id">{{label.text}}</InputField>
      </div>
      <div class="form-buttons">
        <Button type="success" htmlType="submit">Создать</Button>
        <Button type="danger">Отмена</Button>
      </div>
    </form>
  </div>
</template>

<script>
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
        { id: "ord", text: "Номер заказа" },
        { id: "ord1", text: "Телефон" },
        { id: "ord2", text: "АТИ" },
      ],
    };
  },
};
</script>

<style lang="scss">
.form {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column nowrap;
}
</style>