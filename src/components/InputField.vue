<template>
  <div class="input-wrapper">
    <label :for="index" class="input-label">
      <slot></slot>
    </label>
    <input
      :id="index"
      :disabled="disabled"
      :placeholder="placeholder || ''"
      :required="required"
      :type="htmlType"
      :value="value"
      :autofocus="autofocus"
      class="input-field"
      @change="onChange"
      @keypress.enter="onEnter"
    />
  </div>
</template>

<script>
export default {
  props: ['index', 'htmlType', 'required', 'placeholder', 'value', 'disabled', 'autofocus'],
  methods: {
    onChange ({ target }) {
      this.$emit('update', target.value, this.index);
      console.log(target.value)
    },
    onEnter (event) {
      this.$emit('onenter', event)
    }
  }
};
</script>

<style lang="scss">
.input {
  min-width: 300px;

  &-wrapper {
    margin-bottom: 2em;
  }

  &-label {
    padding-left: 1em;
  }

  &-field {
    width: 100%;
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