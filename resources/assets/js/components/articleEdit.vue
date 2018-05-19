<template>
    <div>
        <h1>编辑</h1>
        <label for="male" class='text-label'>标题:</label>
       <el-input type="textarea" class='text-title' v-model="article.data.title"></el-input>
       <label for="male" class='text-label-content'>内容:</label>
        <el-input type="textarea" class='text-box' v-model="article.data.content"></el-input>

       <el-button  @click='$router.history.go(-1)'>返回</el-button >
       <el-button type="primary" @click='update(article.data.id)'>保存</el-button>
       
        <upload></upload>
       
    </div>
</template>

<script>
import axios from 'axios'
import upload from './upload'
    export default {
        data () {
            return {
                article: {
                    data: {
                        title: '',
                        content: '',
                        user_id: ''
                    }
                   
                },
                user: {
                    created_at: '',
                    email:"",
                    id: '',
                    name: "",
                    updated_at:""
                },

            }
        },
        components: {
            upload
        },
        mounted() {
            this.getArticle()
        },
        methods: {
            getArticle () {
                this.$ajax({
                    method: 'get',
                    url: 'article/'+this.$route.params.id,
                }).then((response) => {
                    this.article = response.data;
                })
            },
            update (id){
              this.$ajax({
                  method: 'put',
                  url: 'article/'+id,
                  data: {
                        title: this.article.data.title,
                        content: this.article.data.content,
                        user_id: this.user.id
                  }
              }).then((response) => {
                  console.log('修改成功');
                  this.$router.push({path:'/'});
              })
            },
            getUser (){
              this.$ajax({
                  method: 'get',
                  url: 'user',
              }).then((response) => {
                  this.user = response.data
              })
            },
            
        }
    }
</script>
<style>
.text-label{
    height: 38px;
    margin-right: 10px;
}
.text-label-content{
    display: block;
}
.text-title{
    display: inline-block;
    width: 420px;
    margin-bottom: 10px;
}
.text-title textarea{
    width: 420px;
    height: 38px;
}
.text-box{
    margin-bottom: 10px;
}
.text-box textarea{
    height: 120px;
}

</style>