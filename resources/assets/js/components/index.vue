<template>
  <el-container>
    <my-header></my-header>
    <el-main>{{msg}}</el-main>
    <get-all></get-all>
  </el-container>
</template>
<script>
import myHeader from './myheader' 
import getAll from './getAll'

export default {
    name: 'myIndex',
    data() {
        return {msg:'1111'}
    },
    components: {
        myHeader,
        getAll
    },
    
}
</script>
<style>

</style>
