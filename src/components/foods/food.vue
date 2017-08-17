<template>
  <div name="fade" class="food-wrapper" v-show="showFlag" >
    <v-head :goback="true" :headTitle="headTitle" :head_ellipsis="true" v-on:childMethod = "closeFood()" ></v-head>
    <div class="food-info">
      <div class="food-img"><img :src=foods.images width="100%" :title="foods.name"></div>
      <div class="description">
        <p class="name">{{foods.name}}</p>
        <div class="sell">
          <span class="price">RMB:{{foods.price}}/{{foods.weight}}</span>
          <span class="oldprice" v-show="foods.oldPrice">原价{{foods.oldPrice}}</span>
          <span class="sellcount">月销 <span class="number">{{foods.sellCount}}笔</span></span>
        </div>
      </div>
    </div>
    <div class="food-detail">
      <img :src="imgs" v-for=" imgs in foods.imgdetail" >
    </div>
    <div class="cart-wrapper">
      <div class="cart bg-ora">加入购物车</div>
      <div class="cart imm-buy" @click="goShop()">立即购买</div>
    </div>
    <pay ref="pay" :foods="foods"></pay>
  </div>
</template>
<script >
  import vHead from '../common/head.vue'
  import pay from '../pay/pay.vue'
  export default {
    data(){
      return {
        showFlag:false,
        headTitle:'商品详情'
      }
    },
    props:{
      foods:{
        type:Object
      }
    },
    methods:{
      show(){
        this.showFlag = true;
      },
      goShop(){
        this.$refs.pay.showPay()
      },
      closeFood(){
        this.showFlag = false;
      }
    },
    components:{
      vHead,
      pay
    }
  };
</script>
<style >
  .fade-enter-active, .fade-leave-active{
    transition: all 0.8s;
  }
  .fade-enter ,.fade-leave-active{
    opacity: 0;
  }
  .food-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    z-index: 20;
    background: #e6e6e6;
    overflow-y: scroll;
  }
  .food-info{
    position: relative;
    margin-top: 50px;
    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.3);
    margin-bottom: 10px;
  }
  .food-img{
    height: 160px;
    overflow: hidden;
  }
  .food-info .description{
    padding: 12px 15px;
    background: #ffffff;
  }
  .description .name{
    color: #393939;
    font-size: 18px;
    line-height: 1.2;
    margin-bottom: 5px;
  }
  .sell{
    position: relative;
  }
  .sell .price{
    display: inline-block;
    font-size: 16px;
    color: #ff0000;
    margin-right: 10px;
  }
  .oldprice{
    font-size: 14px;
    color: #a6a6a6;
    text-decoration: line-through;
  }
  .sellcount{
    display: inline-block;
    right: 10px;
    position: absolute;
    color: #a6a6a6;
  }
  .sellcount .number{
    font-size: 18px;
  }
  .food-detail {
    width: 100%;
  }
  .food-detail img{
    width: 100%;
  }
  .cart-wrapper{
    position: fixed;
    z-index: 25;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .cart-wrapper .cart{
    flex: 1;
    height: 45px;
    line-height: 45px;
    color: #ffffff;
    text-align: center;
    font-size: 16px;

  }
  .imm-buy{
    background: #68c21e;
  }
  .bg-ora{
    background: #f3883a;
  }
</style>
