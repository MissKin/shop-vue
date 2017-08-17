<template>
  <div class="pay-wrapper" v-show="showFlag">
    <v-head :goback="true" :headTitle="headTitle" v-on:childMethod = "closePay()" ></v-head>
    <div class="payinfo">
      <div class="pay-food">
        <div class="pay-img">
          <img :src="foods.images" alt="">
        </div>
        <div class="pay-name">{{foods.name}}</div>
        <div class="pay-sell">
          <p>{{foods.price}}/{{foods.weight}}</p>
          <p class="count"> X{{foods.paycount}}</p>
        </div>
      </div>
      <div class="account">合计：{{foods.price * foods.paycount}}</div>
    </div>
    <div class="line-box">选择支付方式</div>
    <div class="pay-icon-box">
        <div class="pay-icon alipay-icon">
          支付宝支付
          <div class="check-box">
            <input type="radio" id="pay1" name="pay" checked class="displaynone">
            <label for="pay1" class="pay-label"></label>
          </div>
        </div>
      <div class="pay-icon weixin-icon">
        微信支付
        <div class="check-box">
          <input type="radio" id="pay2" name="pay" class="displaynone">
          <label for="pay2" class="pay-label"></label>
        </div>
      </div>
      <div class="pay-icon yinlian-icon">
        银行卡支付
        <div class="check-box">
          <input type="radio" id="pay3" name="pay" class="displaynone">
          <label for="pay3" class="pay-label"></label>
        </div>
      </div>
    </div>
    <div class="btn-pay">
      确认支付
    </div>
  </div>
</template>
<script >
  import vHead from '../common/head.vue'
  export default {
    data(){
      return {
        showFlag: false,
        headTitle:'付款',
      }
    },
    props:{
      foods:{
        type:Object
      }
    },
    methods:{
      showPay(){
        this.showFlag = true;
      },
      closePay(){
        this.showFlag = false;
      }
    },
    components:{
      vHead
    }
  };
</script>
<style >

  .pay-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    z-index: 30;
    background: #e6e6e6;
    overflow-y: scroll;
  }
  .payinfo{
    position: relative;
    margin-top: 60px;
    padding: 15px 0;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);
    background: #ffffff;
  }
  .pay-food{
    width: 100%;
    background: #f5f5f5;
    padding: 0 15px;
    display: flex;
    justify-content: space-around;
  }
  .pay-img{
    width: 50px;
    height: 50px;
    overflow: hidden;
  }
  .pay-img img{
    height: 50px;
  }
  .pay-name{
    display: inline-block;
    flex: 3;
    padding-left: 10px;
    line-height: 1.2;
    margin-top: 5px;
  }
  .pay-sell{
    flex: 1;
    margin-top: 5px;
    line-height: 1.5;
    text-align: right;
    margin-right: 20px;
  }
  .account{
    text-align: right;
    line-height: 2;
    margin-right: 5px;
    font-size: 20px;
    color: #ff0000;
  }
  .line-box{
    padding: 8px 15px;
    font-size: 14px;

  }
  .pay-icon-box{
    position: relative;
    background: #ffffff;
  }
  .pay-icon{
    position: relative;
    display: block;
    padding: 5px 15px;
    background: url("../../common/images/pay-icon.png") no-repeat;
    height: 40px;
    line-height: 40px;
    padding-left: 67px;
    background-size: 18%;
    border-bottom: 1px solid #DBD8D8;
  }
  .alipay-icon{
    background-position: 0 -12px;
  }
  .weixin-icon{
    background-position: 0 -75px;
  }
  .yinlian-icon{
    background-position: 0 -140px;
  }
  .check-box{
    display: inline-block;
    position: absolute;
    right: 10px;
    top:5px;
  }
  input[name='pay'] + .pay-label{
    display: inline-block;
    background: url("../../common/images/check-icon.png") no-repeat;
    height: 30px;
    background-size: 130%;
    width: 30px;
    margin-top: 5px;
    background-position: -6px -45px;
  }
  input[name='pay']:checked + .pay-label{
    background-position: -6px -6px;
  }
  .displaynone{display: none;}
  .btn-pay{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    background: #68c21e;
  }
</style>
