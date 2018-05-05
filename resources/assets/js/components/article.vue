<template>
    <div>
        <h1>article</h1>

       <h5>{{article.data.title}}</h5>
       <div>{{article.data.content}}</div>
       <button type="button" class="btn btn-danger" name="button" @click='deleteArticle(article.data.id)'>删除</button>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data () {
            return {
                article: {
                    data: {}
                }
            }
        },
        props: ['id'],
        mounted() {
            this.getArticle()
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
            deleteArticle (id){
              // axios.delete('article/', {
              //   id:id
              // }).then(function (response) {
              //   console.log(response);
              // })
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
            }
        }
    }
</script>
