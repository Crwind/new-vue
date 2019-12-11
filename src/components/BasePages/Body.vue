<template>
  <div class="Body-base">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Body',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Body-base{
    min-height:800px;
    background-color:#FFFFFF;
  }
</style>
