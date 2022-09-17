
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/IndexPage.vue') },
      { path: 'sessao/:sessionId', name: 'SessionDetails', component: () => import('pages/SessionDetails.vue') },
      { path: 'sessao/:sessionId/item/:itemId', name: 'SessionItemDetails', component: () => import('pages/SessionItemDetails.vue') }
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
