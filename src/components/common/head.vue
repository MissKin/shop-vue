<template>
  <header id="head_top">
    <section class="head_goback" v-if="goback" @click="changeParent()">
      <img src="../../common/images/back.png" alt="">
    </section>
    <section class="head_text ellipsis"  v-if="headTitle">{{headTitle}}</section>
    <section class="head_icon_rt icon-shop" v-if="head_shop">
      <img src="../../common/images/shopping.png" alt="">
    </section>
    <section class="head_icon_rt icon-shop"  v-if="head_ellipsis">
      <img src="../../common/images/ellipsis.png" alt="">
    </section>
  </header>
</template>
<script>
  export default {
    data(){
      return{
        childParm:'123'
      }
    },
    props:["goback","headTitle","head_shop","head_ellipsis"],
    methods:{
      changeParent(){
        this.$emit('childMethod');
      }
    }
  };
</script>
<style scoped="">
  #head_top{
    background-color: #ffffff;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
  }
  .head_goback{
    width: 40px;
    height: 50px;
    line-height: 50px;
    margin-left: .4rem;
  }
  .head_goback img{
    vertical-align: middle;
    width: 20px;
  }
  .head_text{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 50%;
    color: #393939;
    font-size: 18px;
    text-align: center;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .head_icon_rt{
    position: absolute;
    right: 5px;
    width: 40px;
    height: 50px;
    line-height: 50px;
    top:0;
  }
  .head_icon_rt img{
    width: 20px;
    vertical-align: middle;
  }
</style>
