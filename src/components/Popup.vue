<template>
  <div class="popup">
    <div class="popup--header" >
      <h3 class="popup--title">Комментарии</h3>
      <Button
        @click="onClose"
        style="transform: rotate(45deg); opacity: 1"
        type="neutral rounded"><img :src="closeIcon" alt="close"
      >
      </Button>
    </div>
    <ul class="popup--messages-list" v-if="messages.length">
      <li class="popup--item" v-for="(message, index) in messages" :key="index">
        <span>{{ message }}</span>
      </li>
    </ul>
    <span v-else>Для этого заказа пока нет сообщений</span>
    <InputField
      @onenter="onAdd"
      style="font-size: 10px; width: 250px;"
      placeholder="Добавить комментарий"
    ></InputField>
  </div>
</template>

<script>
import InputField from '@/components/InputField'
import Button from '@/components/Button'
import closeIcon from '@/assets/icons/plus-circle.svg'


export default {
  components: { Button, InputField },
  props: ['messages'],
  data () {
    return {
      closeIcon
    }
  },
  methods: {
    onClose () {
      this.$emit('onclose')
    },
    onAdd (comment) {
      this.$emit('onadd', comment)
    }
  }
}
</script>

<style lang="scss">
.popup {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  min-height: 400px;
  padding: 1em 1.5em;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3);

  &--header {
    display: flex;
    justify-content: space-between;
  }

  &--title {
    font-size: 1.2em;
  }

  &--messages-list {
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    font-size: 1em;
  }

  &--item {
    margin-bottom: 1.4em;

    & > span {
      padding: 0.5em 1em;
      background-color: #eee;
      border-radius: 5px;
    }
  }
}
</style>