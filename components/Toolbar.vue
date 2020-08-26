<template>
  <div class="toolbar">
    <Button type="success">Создать заявку</Button>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  components: {
    Button
  }
}
</script>

<style lang="scss">
.toolbar {
  width: 100%;
  height: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3em;
}
</style>
