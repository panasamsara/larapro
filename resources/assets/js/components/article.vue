<template>
    <div>
        <h1>article</h1>

       <h5>{{article.data.title}}</h5> 
       <div>{{article.data.content}}</div> 

    </div>
</template>

<script>
    export default {
        data () {
            return {
                article: {
                    data: {}
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
                    url: 'article/1',
                    data: {
                    //   id: ''
                    }
                }).then((response) => {
                    this.article = response.data;
                })
            }
        }
    }
</script>
