<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
@import "@/assets/reset.scss";
* {
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none;
  color: #fff;
}
.container {
  max-width: 1200px;
  margin: 50px auto;
}
</style>
