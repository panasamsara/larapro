<template>
    <div>
        <h1>article</h1>

       <h5>{{article.data.title}}</h5>
       <div>{{article.data.content}}</div>
       <button type="button" class="btn btn-default" name="button" @click='$router.history.go(-1)'>返回</button>
       
        <router-link :to="'edit/'+article.data.id" v-if='showEditBtn'>
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
                showEditBtn: false,
                showDeleteBtn: false
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

                    this.$ajax({
                        method: 'get',
                        url: 'user',
                    }).then((response) => {
                        this.user = response.data
                        if(this.user.id == this.article.data.user_id){
                            this.showEditBtn = true;
                            this.showDeleteBtn = true;
                        }else{
                            this.showEditBtn = false;
                            this.showDeleteBtn = false;
                        }
                    })
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