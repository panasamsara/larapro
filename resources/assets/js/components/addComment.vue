<template>
    <div>
        <h5>评论</h5>
        <div  v-for="comment in comments.data" class='comment-box'>
            <span class='comment-auth' v-if='comment.user'>{{comment.user.name}} </span>
            <span class='comment-auth' v-if='!comment.user'>游客 </span>
            评论：{{comment.content}}
        </div>
        <el-form ref="form" :model="form" label-width="80px">
        
          <el-form-item label="发表评论:">
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
            comments: {},
            form: {
              title: '',
              content: '',
              user_id: ''
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
        props: {
            articleId: {// 数据总条数
                type: Number,
                default: 0
            } 
        },
        watch: {
            'articleId': function (newValue, oldV) {
                this.getCommeentsByArticleId(newValue)
            }   
        },
        mounted() {
            this.getUser()
        },
        methods: {
          onSubmit() {
            this.$ajax({
                method: 'post',
                url: 'comment',
                data:{
                  content: this.form.content,
                  user_id: this.user.id,
                  article_id: this.articleId
                }
            }).then((response) => {
                console.log("发布成功")
                this.form = {}
                this.getCommeentsByArticleId(this.articleId)
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
          getCommeentsByArticleId(article_id){
              this.$ajax({
                  method: 'get',
                  url: 'comments/'+article_id,
              }).then((response) => {
                  this.comments = response.data
              })
          }
        }
    }
</script>

<style>
.comment-box{
    margin-bottom: 20px;
}
.comment-auth{
    color: #409EFF;
}
</style>