<template>
    <div>
        <h1>home页面</h1>
        <div v-for="article in articles.data">
            <router-link :to="{ name: 'article', params: { id: article.id }}">
                <h5>{{article.title}}</h5>
            </router-link>

            <div>{{article.content}}</div>
        </div>
        <router-link :to="{ name: 'create'}">
            <h5>发布文章</h5>
        </router-link>
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
