<template>
  <div class="header-base">
    <div class="Header-left">  
      <div>      
        <img src="https://fakeimg.pl/100x50/113300/ffffff/?retina=1&text=練習寫VUE&font=noto" class="image-1">
      </div>
      <div class="router-style">
        <router-link to="/TestFirst" active-class="active">第一個頁面<br>的練習</router-link>  
      </div>   
    </div>
    <div class="Header-right">
      123
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-base{
    height:105px;
    background-color:#DDDDDD;
    justify-content: space-between;
    display: flex;
    -moz-box-shadow: 10px 10px 5px #888888; /* 老的 Firefox */
    box-shadow: 10px 10px 5px #888888;
  }
  .image-1{
    border-radius: 15px;
    padding: 0 25px;
  }
  .Header-left{
    display: flex;
  }
  .Header-right{
    position: relative;
  }
  .router-style > a {
    text-decoration: none;
  }
  .router-style{
    text-decoration: none;
    margin-top: 30px;
    text-align: center;
  }
  .active{
    color: black;
  }
</style>
