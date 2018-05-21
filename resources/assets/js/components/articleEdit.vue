<template>
    <div>
        <h1>编辑</h1>
        <label for="male" class='text-label'>标题:</label>
       <el-input type="textarea" class='text-title' v-model="article.data.title"></el-input>
       <label for="male" class='text-label-content'>内容:</label>
        <el-input type="textarea" class='text-box' v-model="article.data.content"></el-input>

       <el-button  @click='$router.history.go(-1)'>返回</el-button >
       <el-button type="primary" @click='update(article.data.id)'>保存</el-button>
       
        <div class='m-t-20'>
            <el-button type="primary" @click='toggleShow'>上传封面图</el-button>
            <my-upload field="img"
                @crop-success="cropSuccess"
                @crop-upload-success="cropUploadSuccess"
                @crop-upload-fail="cropUploadFail"
                v-model="show"
                :width="300"
                :height="180"
                noCircle
                :url="'api/upload/'+article.data.id"
                :params="params"
                :headers="headers"
                img-format="png"></my-upload>
            <img :src="imgDataUrl">
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'
// import upload from './upload'
import myUpload from 'vue-image-crop-upload';//图片裁剪以及上传组件（第三方）
    export default {
        data () {
            return {
                article: {
                    data: {
                        title: '',
                        content: '',
                        user_id: ''
                    }
                   
                },
                user: {
                    created_at: '',
                    email:"",
                    id: '',
                    name: "",
                    updated_at:""
                },
                show: false,
                params: {
                    token: '123456798',
                    name: 'avatar'
                },
                headers: {
                    smail: '*_~'
                },
                imgDataUrl: '' // the datebase64 url of created image   
            }
        },
        components: {
            // upload
            'my-upload': myUpload
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
                })
            },
            update (id){
              this.$ajax({
                  method: 'put',
                  url: 'article/'+id,
                  data: {
                        title: this.article.data.title,
                        content: this.article.data.content,
                        user_id: this.user.id
                  }
              }).then((response) => {
                  console.log('修改成功');
                  this.$router.push({path:'/'});
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
            toggleShow() {
				this.show = !this.show;
			},
            /**
			 * crop success
			 *
			 * [param] imgDataUrl
			 * [param] field
			 */
			cropSuccess(imgDataUrl, field){
				console.log('-------- crop success --------');
				this.imgDataUrl = imgDataUrl;
			},
			/**
			 * upload success
			 *
			 * [param] jsonData  server api return data, already json encode
			 * [param] field
			 */
			cropUploadSuccess(jsonData, field){
				console.log('-------- upload success --------');
				console.log(jsonData);
				console.log('field: ' + field);
			},
			/**
			 * upload fail
			 *
			 * [param] status    server api return error status, like 500
			 * [param] field
			 */
			cropUploadFail(status, field){
				console.log('-------- upload fail --------');
				console.log(status);
				console.log('field: ' + field);
			}
        }
    }
</script>
<style>
.text-label{
    height: 38px;
    margin-right: 10px;
}
.text-label-content{
    display: block;
}
.text-title{
    display: inline-block;
    width: 420px;
    margin-bottom: 10px;
}
.text-title textarea{
    width: 420px;
    height: 38px;
}
.text-box{
    margin-bottom: 10px;
}
.text-box textarea{
    height: 120px;
}
.m-t-20{
    margin-top: 20px;
}
</style>