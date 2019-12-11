<template>
  <div>
    <div class="clearup"></div>
    <div class="test-first-base">
      <div class="test-first-top">
        <div class="top-box">
          11
        </div>
        <div class="top-box">
          <router-link to="/TestFirst/TestFirst-1">Orde111r</router-link> 
        </div>
      </div>
    </div>  
    <div class="clearup"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'TestFirst',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.clearup{
  height: 15px;
}
.test-first-base {
  display: block;
  margin: 0 15%;
}
.test-first-top{
  display: flex;
  justify-content: space-between;
}
.top-box{
  border: 1px solid black;
  width: 50%;
  min-height: 250px;
}
.top-box + .top-box{
  margin-left: 25px;
}

</style>
