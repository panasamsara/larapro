<template>
    <div>
        <div class="content-top">
            <!-- <div>home页面</div> -->
            <!-- <router-link :to="{ name: 'create'}" class="create-art"> -->
                <!-- <h5>发布文章</h5> -->
            <!-- </router-link> -->
        </div>
        
        <div v-for="article in articles.data" class='article-box'>
            
            <img src='../../image/default.png' class='article-cover'>
            <div class='content-box'>
                <router-link :to="{ name: 'article', params: { id: article.id }}">
                    <span class='article-title'>{{article.title}}</span>
                </router-link>
                
                <div class='article-content'>{{article.content}}</div>
            </div>
            
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
.article-box{
    position: relative;
    margin-bottom: 20px;
    box-shadow: 0.5px 1px 5px #888;
}
.article-cover{
    width: 300px;
    height: 180px;
}
.content-box{
    display: inline-block;
    position: absolute;
    height: 180px;
    top: 0;
    padding-left: 30px;
    padding-right: 30px;
}
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
    font-size: 36px;
}
.article-content{
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 3; /** 显示的行数 **/
    overflow: hidden;
}

</style>
