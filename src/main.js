import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Hello from './components/Hello'
import goodsList from './components/goodslist/goodslist.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'goods',
      component: goodsList
    }
  ]
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

