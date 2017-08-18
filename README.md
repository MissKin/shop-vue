# vueshopping

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

``` bash
#技术
vue-cli  vue-resource
使用 vue-cli 搭建的webpack 环境

#开始
vue init webpack vue-shopping	搭建 webpack 环境
npm install	下载对应的插件
npm run dev	 启动开发环境

#数据
data.json
建的一个关于goods的json 数据，比较简单的静态数据


#每次修改 data.json 需要重启服务 doc 命令输入 npm run dev
#在写这些文字的时候，因 npm run build 生成 生产环境时候 请求的接口 /api/goods 不成功，最后就把数据写在主组件里面了，撤消了 $http 请求

build/dev-server.js 配置数据接口


#在main.js 中配置了两个路由，只有一个路由是真的有用


#总效果




#翻页 其实都是子组件， 使用 css 样式覆盖在上一层的div上，出现的 滚动条比较尴尬。对了 这些图片 放在了www.lechinepay.com 的虚拟机上， 通过 ftp上传的 ，反正我有账号，哈哈哈

#知识点
#父组件 调用 子组件的方法
 栗子： 点击 商品信息， 显示商品详情
父组件
<div class='parent' @click='showFood()' > 点击显示 子组件 </div>
<div class="goods-item" @click="showFood(item)"></div>
<food ref="foods" :foods="foodDetail"></food>
methods:{
showFood(item){
this.foodDetail = item;
this.$refs.foods.show() //子组件中的show()方法
}
}
子组件
<div class="food-wrapper" v-show="showFlag" ></div>
methods:{
show(){
this.showFlag = true;
}
}

子组件调用 父组件的方法
子组件
<child  @click="changeParent()"></child>
methods:{
 	 changeParent(){
   	 	this.$emit('childMethod');
 	 }
}
父组件
<child  v-on:childMethod = "closeFood()" ></child>
methods:{
closeFood(){
console.log('这是父的地盘');
}
}


#根据教程 写 http server

 根目录 创建 prod.server.js
在config/ index.js 中的build 添加 port:9000 添加端口号






完整的 小型的 http server
启动 node prod.server.js

正式上线 关闭 调试   config/ index.js  中 productionSourceMap: false
```
