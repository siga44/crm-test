<template>
  <li class="order-list--item">
    <span class="order-list--item-column">1</span>
    <span class="order-list--item-column">22.08.1999</span>
    <span class="order-list--item-column">YetiCrab</span>
    <span class="order-list--item-column">Квашнин С.Е.</span>
    <span class="order-list--item-column">80123456789</span>
    <div class="order-list--options">
      <Button type="rounded neutral" v-for="option in options" :key="option.id">
        <img :src="option.src" :alt="option.id" />
      </Button>
    </div>
  </li>
</template>

<script>
import deleteIcon from '@/assets/icons/delete.svg'
import newWindowIcon from '@/assets/icons/open-in-new.svg'
import editIcon from '@/assets/icons/square-edit-outline.svg'
import infoIcon from '@/assets/icons/information-outline.svg'

import Button from '@/components/Button'

export default {
  components: {
    Button
  },
  data() {
    return {
      options: [
        { id: 'info', src: infoIcon },
        { id: 'edit', src: editIcon },
        { id: 'delete', src: deleteIcon }
      ]
    }
  }
}
</script>

<style lang="scss">
.order-list {
  &--item {
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    background-color: rgba(0, 0, 0, 0.1);
    color: #000;
    padding: 0.5em 1.5em;
    border-radius: 10px;
    transition: background-color 0.133s ease-in-out;
    &-column {
      display: inline-block;
      text-align: center;
      width: 180px;
      font-size: 1em;
      margin-right: 50px;
      &:first-child {
        width: 30px;
      }
      &:last-child {
        width: 130px;
        margin-right: 0;
      }
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      &,
      .order-list--options {
        opacity: 1;
      }
    }
  }
  &--options {
    display: inline-flex;
    justify-content: space-between;
    width: 130px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
}
</style>
