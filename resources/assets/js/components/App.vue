<template>
  <div>
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
  background-color: #dedede;
  border-bottom: 1px solid #fff;
}
a{
  text-decoration: none !important;
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
  color: #636b6f;
}
/* .nav-box a:active, .nav-box a:visited, .nav-box a:hover{
  text-decoration:none;
} */
.router-link-active{
  border-bottom: 2px solid #fff;
}
</style>
