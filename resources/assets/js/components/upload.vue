<template>
    <div >
        <h1>upload</h1>
        <div class="form-group">
            <label>上传图片</label>
            <input type="file" class="form-control" @change="onFileChange">
        </div>
        <div class="form-group" v-if="image">
                <label>预览</label>
                <img :src="image"> 
        </div>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                image: ''
            }
        },
        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                return;
                this.createImage(files[0]);
            },
            createImage(file) {
                var image = new Image();
                var reader = new FileReader();
                var vm = this;
                
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                    reader.readAsDataURL(file);
            },
        }
    }
</script>
