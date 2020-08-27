<template>
  <div class="input-wrapper">
    <label :for="index" class="input-label">
      <slot></slot>
    </label>
    <input
      :id="index"
      class="input-field"
      :placeholder="placeholder || ''"
      :required="required"
      :type="htmlType"
      :value="value"
      :disabled="disabled"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  props: ["index", "htmlType", "required", "placeholder", "value", "disabled"],
  methods: {
    onChange({ target }) {
      this.$emit("update", target.value, this.index);
    },
  },
};
</script>

<style lang="scss">
.input {
  &-wrapper {
    margin-bottom: 2em;
  }
  &-label {
    padding-left: 1em;
  }
  &-field {
    min-width: 300px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 1.4em;
    background-color: #eee;
    padding: 0.5em 1em;
    margin: 0.5em;
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
}
</style>