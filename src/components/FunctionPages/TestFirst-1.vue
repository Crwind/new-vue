<template>
  <div class="test-first-base">
    TestFirst-1
  </div>
</template>

<script>
export default {
  name: 'TestFirst-1',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.test-first-base {
  background-color: red;
  min-height: 300px;
}
</style>