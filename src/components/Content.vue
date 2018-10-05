<template>
  <h1>
    content
    <hello></hello>
  </h1>
</template>

<script>
import Hello from '../common/Hello.vue'

export default {
  name: 'content',

  components: {
    Hello
  }
}
</script>
