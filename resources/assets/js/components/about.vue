<template>
    <div >
        <h3>一个简单的博客</h3>
        <h4>目前功能：</h4>
        <div class='indent'>
            登录注册、文章发布、查看、编辑、删除、图片上传……后续再迭代加功能
        </div>
        <div class='indent'>
            欢迎提需求~ (ง •̀_•́)ง
        </div>
        <h4>使用的技术：</h4>
        <div class='indent'>Laravel、Vue、Vue-router、axios、element-ui</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aboutMsg: ''
            }
        },
        methods: {

        }
    }
</script>

<style>
.indent{
    text-indent: 40px;
}
</style>