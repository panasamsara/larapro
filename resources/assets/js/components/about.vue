<template>
    <div >
        <h3>一个简单的博客</h3>
        <h4>目前功能：</h4>
        <div class='indent'>
            1.登录注册
        </div>
        <div class='indent'>
            2.文章发布、查看、编辑、删除（需要登录）
        </div>
        <div class='indent'>
            3.图片上传
        </div>
        <div class='indent'>
            4.评论（不登录，游客也可发评论）
        </div>
        <div class='indent'>
            5.图片裁剪功能（避免上传超大图片占用空间、避免图片尺寸不合规格而变形影响美观）
        </div>
        <div class='indent'>
            持续迭代……欢迎提需求~ (ง •̀_•́)ง
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