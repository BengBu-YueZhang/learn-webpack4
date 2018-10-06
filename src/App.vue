<template>
  <div id="app" :class="$style.content">
    <h2>Hello Vue</h2>
    <img src="./assets/logo.png" />
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
.content {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
</style>
