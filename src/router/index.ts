import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../pages/GamesPage.vue'),
    children: [{
      path: ':id',
      name: 'GameId',
      props: true,
      component: () => import('../pages/GameIdPage.vue')
    }]
  },
  {
    path: '/players',
    name: 'Players',
    component: () => import('../pages/PlayersPage.vue'),
    children: [{
      path: ':id',
      name: 'PlayerId',
      props: true,
      component: () => import('../pages/HouseIdPage.vue')
    }]
  },
  {
    path: '/houses',
    name: 'Houses',
    component: () => import('../pages/HousesPage.vue'),
    children: [{
      path: ':id',
      name: 'HouseId',
      props: true,
      component: () => import('../pages/HouseIdPage.vue')
    }]
  },
  {
    path: '/randomizer',
    name: 'Randomizer',
    component: () => import('../pages/RandomizerPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
