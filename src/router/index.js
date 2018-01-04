import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '@/components/index';
import FirstPage from '@/components/first';
import DetailPage from '@/components/detail';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/first',
      component: FirstPage,
    },
    {
      path: '/detail',
      component: DetailPage
    }
]
});

