<template>
    <div>
        <h1>编辑</h1>
        
       <h5>{{article.data.title}}</h5>
        <el-input type="textarea" class='text-box' v-model="article.data.content"></el-input>

       <el-button  @click='$router.history.go(-1)'>返回</el-button >
       <el-button type="primary" @click='update(article.data.id)'>保存</el-button>
        <div class='upload-box'>
            <div class="form-group">
                <h3>上传封面图片（尺寸：300 x 180）</h3>
                <input type="file" class="form-control"  @change="onFileChange">
            </div>
            <div class="form-group" v-if="image">
                    <label>预览</label>
                    <img :src="image"> 
            </div>
            <button type="button" v-if='showUploadBtn' class="btn btn-default" name="button" @click="uploadImg(article.data.id)"> 上传</button>
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'
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
                image: '',
                imgData: {  
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',  
                },
                showUploadBtn: false,
                formData: {}

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
            createImage(file) {
                var image = new Image();
                var reader = new FileReader();
                var vm = this;
                
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
                this.showUploadBtn = true
            },
            onFileChange(e){
                let reader =new FileReader();  
                let img=event.target.files[0]; 
                this.createImage(img);

                let type=img.type;//文件的类型，判断是否是图片  
                let size=img.size;//文件的大小，判断图片的大小  
                if(this.imgData.accept.indexOf(type) == -1){  
                    alert('请选择我们支持的图片格式！');  
                    return false;  
                }  
                if(size>3145728){  
                    alert('请选择3M以内的图片！');  
                    return false;  
                }  

                let form = new FormData();   
                form.append('imageUpload', img, img.name);  
                this.formData = form;

            },
            uploadImg(article_id){
                this.$ajax.post('upload/'+article_id,this.formData,{  
                    headers:{'Content-Type':'multipart/form-data'}  
                }).then(response => {  
                    this.showUploadBtn = false
                }).catch(error => {  
                    console.log('上传图片出错！');  
                })  
            }
        }
    }
</script>
<style>
.text-box{
    margin-bottom: 10px;
}
.text-box textarea{
    height: 120px;
}
.upload-box{
    margin-top: 20px;
}
</style>