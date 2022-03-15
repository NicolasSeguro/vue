import Vue from 'vue'
import VueRouter from 'vue-router'
// Una de las maneras de importar vistas
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // Esta es mejor manera de importar porque carga de forma diferida la vista cuando se visita la ruta
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    // 5 - agregamos el componente 
    // 6 - También puedes navegar a una ruta usando su nombre (el parámetro name que has configurado antes en el array de rutas), esto es interesante porque si decides cambiar la url de la ruta, vas a poder seguir navegando correctamente porque el nombre sigue siendo el mismo.
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */ '../views/ServicesView.vue')
  },
  {
    // 8 - Rutas dinamicas - y creamos imagesview
    path: '/images/:id',
    name: 'images',
    component: () => import(/* webpackChunkName: "images" */ '../views/ImagesView.vue')
  },
  // 18 - Rutas hijas
  // Se trata de ir anidando rutas de tal forma que varias rutas tengan un componente padre común 
  // Además otra ventaja de esto es que en el componente padre, puedes por ejemplo poner una parte de la vista que todos los componentes hijos van a heredar
  { path: '/admin', 
    component: () => import(/* webpackChunkName: "images" */ '../views/AdminView.vue'),
      children: [
        {
          path: 'users',
          component: () => import(/* webpackChunkName: "images" */ '../views/UserView.vue')
        },
        {
          path: 'settings',
          component: () => import(/* webpackChunkName: "images" */ '../views/SettingsView.vue')
        }
      ]
  }

]

const router = new VueRouter({
  routes
})

export default router
