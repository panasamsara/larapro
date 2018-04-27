<template>
  <el-container>
    <my-header></my-header>
    <el-main>{{msg}}</el-main>
  </el-container>
</template>
<script>
import myHeader from './myheader' 

export default {
  name: 'myIndex',
  data() {
      return {msg:'1111'}
  },
  components: {
    myHeader
  },
  mounted() {
        this.getAll()
    },
  methods: {
    getAll () {
            this.$ajax({
                method: 'get',
                url: '/article',
            }).then(function(response){
                console.log(response);
            })
        }
    }
}
</script>
<style>

</style>
