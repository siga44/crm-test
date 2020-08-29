<template>
  <div class="popup">
    <div class="popup--header">
      <h3 class="popup--title">Комментарии</h3>
      <Button
        style="transform: rotate(45deg); opacity: 1"
        type="neutral rounded"
        @click="onClose"><img :src="closeIcon" alt="close"
      >
      </Button>
    </div>
    <ul v-if="messages.length" class="popup--messages-list">
      <li v-for="(message, index) in messages" :key="index" class="popup--item">
        <p>{{ message }}</p>
      </li>
    </ul>
    <span v-else>Для этого заказа пока нет сообщений</span>
    <InputField
      placeholder="Добавить комментарий"
      style="font-size: 10px; width: 250px;"
      @onenter="onAdd"
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
    onAdd (event) {
      const comment = event.target.value.trim()
      if (comment) {
        this.$emit('onadd', comment)
        event.target.value = ''
      }
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
    margin-bottom: 1em;
  }

  &--messages-list {
    padding: 1em 0;
    height: 300px;
    overflow-y: scroll;
    display: flex;
    flex-flow: column nowrap;
    font-size: 1em;
  }

  &--item {
    margin-bottom: 1.4em;

    & > p {
      width: 230px;
      padding: 0.5em 1em;
      background-color: #eee;
      border-radius: 5px;
    }
  }
}
</style>