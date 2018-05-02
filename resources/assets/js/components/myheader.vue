<template>
  <div class="header-box">
      <div>
         <router-link to="/">header</router-link>
         <router-link to="/content">content</router-link>
      </div>
      <router-view></router-view>
  </div>


</template>

<script>
export default {
  name: 'myHeader',
  data() {
      return {msg:'头部'}
  }
}
</script>
<style>
.header-box{
    width: 1200px;
    margin: auto;
    background-color:khaki;
}
</style>
