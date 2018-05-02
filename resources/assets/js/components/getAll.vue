<template>
  <div>
      {{msg}}
  </div>
</template>
<script>

export default {
    name: 'getAll',
    data() {
        return {msg:'2'}
    },
    // components: {

    // },
    mounted() {
        this.getAll()
    },
    methods: {
        getAll () {
            this.$ajax({
                method: 'get',
                url: 'article',
            }).then((response) => {
              if(response.data.data[0]){
                this.msg = response.data.data[0].content;
              }

            })
        }
    }
}
</script>
<style>

</style>
