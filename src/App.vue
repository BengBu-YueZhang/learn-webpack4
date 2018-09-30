<template>
  <div id="app">
    <h1 :class="$style.title">
      my vue cli
    </h1>
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



