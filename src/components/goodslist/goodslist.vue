<template>
  <div>
    <div class="goods-wrapper">
     <v-head :goback="true" :headTitle="headTitle" :head_shop="true" ></v-head>
    </div>
    <div class="goods-lists">
      <div class="goods-item" v-for="item in goods" @click="showFood(item)">
        <div class="goods-img">
          <img :src="item.images" width="100%" alt="">
        </div>
        <div class="goods-info">
          <div class="text">
            <p class="goods-name ellipsis">{{item.name}}</p>
            <p class="price"> RMB:{{item.price}}/{{item.weight}}</p>
          </div>
          <div class="btn-buy">购买</div>
        </div>
      </div>
    </div>
    <food ref="foods" :foods="foodDetail"></food>
  </div>
</template>
<script >
  import vHead from '../common/head.vue'
  import food from '../foods/food.vue'

  const ERR_OK =0;
  export default {
    data(){
      return{
        headTitle:'每日推广',
        goods:
          [
            {
              "name": "飘零大叔靖江猪肉脯200g蜜汁香辣原味特产猪肉干肉类休闲零食小吃",
              "price": 150,
              "oldPrice": "180",
              "sellCount": 229,
              "weight":"80g",
              "paycount":10,
              "images":[
                "http://www.lechinepay.com/msf-market/good-img2.jpg"
              ],
              "imgdetail":[
                "http://www.lechinepay.com/msf-market/goods-img2-detail1.jpg",
                "http://www.lechinepay.com/msf-market/goods-img2-detail2.jpg",
                "http://www.lechinepay.com/msf-market/goods-img2-detail3.jpg",
                "http://www.lechinepay.com/msf-market/goods-img2-detail4.jpg"
              ]
            },
            {
              "name": "好巴食豆腐干 小包装多口味香辣豆干麻辣零食小吃散装批发",
              "price": 56,
              "oldPrice": "180",
              "sellCount": 229,
              "weight":"500g",
              "paycount":12,
              "images":[
                "http://www.lechinepay.com/msf-market/good-img3.jpg"
              ],
              "imgdetail":[
                "http://www.lechinepay.com/msf-market/goods-img3-detail1.jpg",
                "http://www.lechinepay.com/msf-market/goods-img3-detail2.jpg",
                "http://www.lechinepay.com/msf-market/goods-img3-detail3.jpg",
                "http://www.lechinepay.com/msf-market/goods-img3-detail4.jpg"
              ]
            },
            {
              "name": "辣媳妇小包装泡椒凤爪重庆特产野山椒凤爪休闲零食小吃",
              "price": 85,
              "oldPrice": "180",
              "sellCount": 329,
              "weight":"500g",
              "paycount":12,
              "images":[
                "http://www.lechinepay.com/msf-market/good-img4.jpg"
              ],
              "imgdetail":[
                "http://www.lechinepay.com/msf-market/goods-img4-detail1.jpg",
                "http://www.lechinepay.com/msf-market/goods-img4-detail2.jpg",
                "http://www.lechinepay.com/msf-market/goods-img4-detail3.jpg",
                "http://www.lechinepay.com/msf-market/goods-img4-detail4.jpg"
              ]
            },
            {
              "name": "鱿鱼丝手撕香辣碳烤味袋装零食小吃海鲜大连特产",
              "price": 120,
              "oldPrice": "180",
              "sellCount": 329,
              "weight":"500g",
              "paycount":12,
              "images":[
                "http://www.lechinepay.com/msf-market/good-img5.jpg"
              ],
              "imgdetail":[
                "http://www.lechinepay.com/msf-market/goods-img5-detail1.jpg",
                "http://www.lechinepay.com/msf-market/goods-img5-detail2.jpg",
                "http://www.lechinepay.com/msf-market/goods-img5-detail3.jpg"
              ]
            }

        ],
        foodDetail:{}
      }
    },
    created(){
     /* this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if(response.errno === ERR_OK){
          this.goods = response.data;
        }
      })*/
    },
    methods:{
      showFood(food){
        this.foodDetail = food;
        this.$refs.foods.show()
      }
    },
    components:{
      vHead,
      food
    }
  };
</script>
<style scoped>
  .goods-lists{
    position: relative;
    width: 100%;
    margin-top: 50px;
  }
  .goods-item{
    position: relative;
    overflow: hidden;
    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.3);
    margin-bottom: 10px;
  }
  .goods-item .goods-img{
    width: 100%;
    height: 160px;
    overflow: hidden;
  }
  .goods-info{
    background: #ffffff;
    padding: 9px;
    display: flex;
    justify-content: space-between;

   }
  .goods-info .text{
    width: 75%;
    display: inline-block;
  }
  .goods-info .text .goods-name{
    color: #393939;
    font-size: 18px;
    line-height: 2;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text .price{
    color:#ff0000;
    font-size:16px;
  }
  .btn-buy{
    display: inline-block;
    margin-top: 10px;
    color: #ffffff;
    background: #68c21e;
    border-radius: 25px;
    font-size: 16px;
    vertical-align: middle;
    height: 30px;
    line-height: 30px;
    padding: 0 23px;
  }
</style>
