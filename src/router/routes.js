import {loginStore} from "stores/piniaStore";
const routes = [

  {
    path: '/',
    component: () => import('layouts/unLoggedLayout.vue'),
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
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
