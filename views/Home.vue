<template>
  <div class="home">
    <h1 class="title">Система ведения заявок</h1>
    <Toolbar></Toolbar>
    <main class="main">
      <Table></Table>
    </main>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Table from '@/components/Table'

export default {
  components: { Toolbar, Table }
}
</script>

<style lang="scss">
.title {
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  text-align: center;
  font-size: 3em;
  margin-bottom: 1em;
}
</style>
