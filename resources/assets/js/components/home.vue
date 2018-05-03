<template>
    <div>
        <h1>home</h1>
        <div v-for="article in articles.data">
            <h5>{{article.title}}</h5>
          <div>{{article.content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                articles: ""
            }
        },
        mounted() {
            this.getAll()
        },
        methods: {
            getAll () {
                this.$ajax({
                    method: 'get',
                    url: 'article',
                }).then((response) => {
                    this.articles = response.data;
                    
                })
            }
        }
    }
</script>
