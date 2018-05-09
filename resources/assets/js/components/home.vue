<template>
    <div>
        <div class="content-top">
            <!-- <div>home页面</div> -->
            <!-- <router-link :to="{ name: 'create'}" class="create-art"> -->
                <!-- <h5>发布文章</h5> -->
            <!-- </router-link> -->
        </div>
        
        <div v-for="article in articles.data">
            <router-link :to="{ name: 'article', params: { id: article.id }}">
                <h5 class='article-title'>{{article.title}}</h5>
            </router-link>
            <div class='edit-btn'>
                <router-link :to="{ name: 'articleEdit', params: { id: article.id }}">
                    编辑
                </router-link>
            </div>
            <div>{{article.content}}</div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data () {
            return {
                articles: {},
                user: {}
            }
        },
        mounted() {
            this.getAll(),
            this.getUser()
        },
        methods: {
            getAll () {
                this.$ajax({
                    method: 'get',
                    url: 'article',
                }).then((response) => {
                    this.articles = response.data;
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
<style>
.create-art{
    width: 80px;
    height: 36px;
    border-radius: 3px;
    background-color: #636b6f;
    color: #fff !important;
    display: inline-block;
    text-align: center;
}
.content-top{
    margin: 10px;
}
.article-title{
    display: inline-block;
    margin-right: 20px;
}
.edit-btn{
    display: inline-block;
}
</style>
