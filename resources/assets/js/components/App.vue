<template>
  <div id="app">
    <header class=''>
      <div class='nav-box'>
          <router-link class='nav-box' to="/home">首页</router-link>
      </div>
      <div class='nav-box'>
          <router-link class='nav-box' to="/about">关于</router-link>
      </div>


    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
header{
  background-color: #9edddd;
}
a{
  text-decoration: none;
}
.nav-box{
  display: inline-block;
  width: 80px;
  height: 60px;
}
.nav-box a{
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  line-height: 60px;
  color: #000;
}
.router-link-active{
  border-bottom: 2px solid #000; 
}
</style>
