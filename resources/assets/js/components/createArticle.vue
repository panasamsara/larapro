<template>
    <div>
        <h1>发布文章</h1>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.title"></el-input>
          </el-form-item>


          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即发布</el-button>
            <el-button @click='$router.history.go(-1)'>取消</el-button>
          </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        data() {
          return {
            form: {
              title: '',
              content: '',
              user_id: 1
            }
          }
        },
        methods: {
          onSubmit() {
            console.log(this.form);
            this.$ajax({
                method: 'post',
                url: 'article',
                data:{
                  title: this.form.title,
                  content: this.form.content,
                  user_id: this.form.user_id
                }
            }).then((response) => {
                console.log("发布成功")
                this.$router.push({path:'/'});
            })
          }
        }
    }
</script>
