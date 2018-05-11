<template>
    <div>
        <h1>article</h1>

       <h5>{{article.data.title}}</h5>
       <div>{{article.data.content}}</div>
       <button type="button" class="btn btn-default" name="button" @click='$router.history.go(-1)'>返回</button>
       
        <router-link :to="'edit/'+article.data.id">
            <button type="button" class="btn btn-default" name="button"> 编辑</button>
        </router-link>
       
       <button v-if='showDeleteBtn' type="button" class="btn btn-danger" name="button" @click='deleteArticle(article.data.id)'>删除</button>
       <button type="button" class="btn btn-danger" name="button" @click='lay()'>测试layer</button>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data () {
            return {
                article: {
                    data: {}
                },
                user: {},
                showDeleteBtn: false
            }
        },
        created() {
            this.getArticle()
            this.getUser()
            console.log(this.user)
        },
        methods: {
            getArticle () {
                this.$ajax({
                    method: 'get',
                    url: 'article/'+this.$route.params.id,
                    data: {
                        return:{

                        }
                    }
                }).then((response) => {
                    this.article = response.data;
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
            deleteArticle (id){
              this.$ajax({
                  method: 'delete',
                  // type: 'delete',
                  url: 'article/'+id,
                  data: {
                      return:{

                      }
                  }
              }).then((response) => {
                  console.log('删除成功');
                  this.$router.push({path:'/'});
              })
            },
            lay(){
                this.$layer.alert('sdhsdfghdfgh');
            }
        }
    }
</script>
<style>

</style>