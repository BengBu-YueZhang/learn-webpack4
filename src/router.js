import VueRouter from 'vue-router'
import Vue from 'vue'

const About = () => import('./components/About.vue')
const Home = () => import('./components/Home.vue')
const Content = () => import('./components/Content.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/about', component: About },
  { path: '/home', component: Home },
  { path: '/content', component: Content }
]

const router = new VueRouter({
  routes
})

export default router