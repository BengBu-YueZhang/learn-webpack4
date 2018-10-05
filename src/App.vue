<template>
  <div id="app">
    <h1 :class="$style.title">
      my vue cli
    </h1>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/content">Content</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" module>
#id {
  width: 100%;
  height: 100vh;
  background-color: aqua;
}

.title {
  color: bisque;
}
</style>



