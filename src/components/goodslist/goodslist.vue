<template>
  <div class="goods-wrapper">
   <v-head :goback="true" :headTitle="headTitle" :head_shop="true" :head_ellipsis="false" ></v-head>
  </div>
</template>
<script >
  import vHead from '../common/head.vue'
  export default {
    data(){
      return{
        headTitle:'每日推广'
      }
    },
    components:{
      vHead
    }
  };
</script>
<style scoped>

</style>
