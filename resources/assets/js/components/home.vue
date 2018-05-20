<template>
    <div>
        <div class='content-left'>
            <div v-for="article in articles.data" class='article-box'>
                
                <img v-if='!article.cover' src='../../image/default.png' class='article-cover'>
                <img v-if='article.cover' v-bind:src="imgPath+ article.cover" class='article-cover'>
                <div class='content-box'>
                    <router-link :to="{ name: 'article', params: { id: article.id }}">
                        <span class='article-title'>{{article.title}}</span>
                    </router-link>
                    
                    <div class='article-content'>{{article.content}}</div>
                    <div class='article-bottom'>
                        
                        <div class='bottom-box'>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <span>{{article.user.name}}</span>
                        </div>
                        <div class='bottom-box'>
                            <i class="fa fa-eye" aria-hidden="true"></i>
                            <span>{{article.num}}</span>
                        </div>
                       
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        <div class='content-right'>
            <my-calendar  class='calendar-box'></my-calendar>
        </div>
        <paginate v-bind:total="total" v-bind:current-page='current' @pagechange="pagechange"></paginate>
     </div>
</template>

<script>
    import myCalendar from './calendar'
    import paginate from './paginate'

    export default {
        data () {
            return {
                articles: {},
                user: {},
                imgPath: '../../../../storage/uploads/',
                total: 100,     // 记录总条数
                display: 5,   // 每页显示条数
                current: 1,   // 当前的页数
                // calendar2:{
                //     range:false,
                //     value:[[2017,12,1],[2019,2,16]], //默认日期
                //     lunar:false, //显示农历
                //     begin:[2017,2,16], //可选开始日期
                //     end:[2019,2,16], //可选结束日期
                //     select(begin,end){
                //         // console.log(begin.toString(),end.toString());
                //     }
                // },
            }
        },
        components:{
            myCalendar,
            paginate
        },
        mounted() {
            this.getAll(1),
            this.getUser()
        },
        methods: {
            getAll (page) {
                this.$ajax({
                    method: 'get',
                    url: 'article?page=' + page,
                }).then((response) => {
                    this.articles = response.data.data;
                    console.log(this.articles)
                    this.total = response.data.data.total
                    this.current = response.data.data.current_page
                    this.display = response.data.data.per_page
                    console.log(this.total )
                    console.log(this.display )
                })
            },
            pagechange (currentPage){
                console.log(currentPage);
                // ajax请求, 向后台发送 currentPage, 来获取对应的数据
                this.getAll(currentPage)
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
.content-left{
    width: 750px;
    display: inline-block;
}
.content-right{
    display: inline-block;
    width: 360px;
    margin-left: 20px;
    float: right;
}
.calendar-box{
    padding-top: 20px;
    box-shadow: 0.5px 1px 5px #888;
}
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

.article-title{
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 15px;
    font-size: 36px;
     word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 1; /** 显示的行数 **/
    overflow: hidden;
}
.article-content{
    height: 64px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 3; /** 显示的行数 **/
    overflow: hidden;
}
.article-bottom{
    margin-top: 10px;
}
.bottom-box{
    display: inline-block;
    margin-right: 20px;
}
</style>
