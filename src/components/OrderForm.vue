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
import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default {
  components: {
    InputField,
    Button,
  },
};
</script>

<style lang="scss">
</style>