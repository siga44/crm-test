<template>
  <button
    :class="`btn ${type ? (type.search(/\s/) !== -1 ? `btn-${type.split(' ').join(' btn-')}` : `btn-${type}`) : ''}`"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type"],
};
</script>

<style lang="scss">
.btn {
  font-family: Roboto;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  line-height: 1;
  padding: 0.5em 1em;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  color: #000;
  opacity: 0.85;
  transition-property: opacity, background-color;
  transition-duration: 0.133s;
  transition-timing-function: ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &-success {
    color: #fff;
    background-color: rgb(65, 143, 34);
  }
  &-danger {
    color: #fff;
    background-color: rgb(200, 20, 20);
  }
  &-rounded {
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 50%;
    box-shadow: none;
    opacity: 0.5;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      opacity: 1;
    }
  }
  &-neutral {
    color: #000;
    background-color: transparent;
  }
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
