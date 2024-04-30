import {loginStore} from "stores/piniaStore";
import {cityStore} from "stores/cityStore";

const myCityStore = cityStore();

const routes = [

  {
    path: '/',
    component: () => import('layouts/LoggedLayout.vue'),
    children: [
  { path: '', component: () => import('pages/IndexPage.vue') }
]
  },
  {
    path: '/Favourite',
    component: () => import('layouts/LoggedLayout.vue'),
    children: [
      { path: '', component: () => import('pages/favouritePage.vue') }
    ]
  },
  {
    path: `/${myCityStore.name}`,
    component: () => import('layouts/LoggedLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cityPage.vue') }
    ]
  },
  {
    path: `/${myCityStore.test}`,
    component: () => import('layouts/LoggedLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cityPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
