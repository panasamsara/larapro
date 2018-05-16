<template>
    <div >
        <h1>upload</h1>
        <div class="form-group">
            <label>上传图片</label>
            <input type="file" class="form-control"  @change="onFileChange">
        </div>
        <div class="form-group" v-if="image">
                <label>预览</label>
                <img :src="image"> 
        </div>
        <button type="button" v-if='showUploadBtn' class="btn btn-default" name="button" @click="uploadImg"> 上传</button>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                image: '',
                imgData: {  
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',  
                },
                showUploadBtn: false,
                formData: {}
            }
        },
        methods: {
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
                var uri = ''  
                let form = new FormData();   
                form.append('imageUpload',img,img.name);  
                this.formData = form;

            },
            uploadImg(){
                this.$ajax.post('upload',this.formData,{  
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
