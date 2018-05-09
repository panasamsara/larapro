<template>
    <div>
        <h1>article编辑</h1>
        
       <h5>{{article.data.title}}</h5>
        <el-input type="textarea" v-model="article.data.content"></el-input>

       <el-button  @click='$router.history.go(-1)'>返回</el-button >
       <el-button type="primary"  @click='update(article.data.id)'>保存</el-button>
    </div>
</template>

<script>
import axios from 'axios'
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
                }

            }
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
          }
        }
    }
</script>
