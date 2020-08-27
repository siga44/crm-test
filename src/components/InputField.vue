<template>
  <div class="input-wrapper">
    <label :for="id" class="input-label">
      <slot></slot>
    </label>
    <input :id="id" class="input-field" type="text" :placeholder="placeholder" :value="value" />
  </div>
</template>

<script>
export default {
  props: ["placeholder", "id", "value"],
};
</script>

<style lang="scss">
.input {
  &-wrapper {
  }
  &-field {
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 1.4em;
    background-color: #eee;
    padding: 0.5em 1em;
    margin: 0.5em;
  }
}
</style>