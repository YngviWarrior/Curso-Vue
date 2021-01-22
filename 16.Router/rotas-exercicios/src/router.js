import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/Alt'

// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)
 //Import dinâmico, carrega de forma tardia os elementos, 
 //não sobrecarregando com numeros de requisições.
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')

const router = new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else if(to.hash) {
      return { selector: to.hash }
    }
    return { x:0, y:0 } 
  },
  routes: [{
    path: '/',
    name: 'inicio',
    // component: Inicio,
    components: {
      default: Inicio,
      menu: Menu
    }
  }, {
    path: '/usuario',
    // component: Usuario,
    components: {
      default: Usuario,
      menu: MenuAlt,
      menuInferior: MenuAlt
    },
    props: true, //propriedades da url serão passadas ao componente por props.
    children: [
      { path: '', component: UsuarioLista },
      { path: ':id', component: UsuarioDetalhe, props: true,
        beforeEnter: (to, from, next) => {
          console.log('antes da rota -> usuário detalhe')
          next()
        } },
      { path: ':id/editar', component: UsuarioEditar, props: true, 
        name: 'editarUsuario' },
    ]
  }, {
    path: '/redirecionar',
    redirect: '/usuario'
  }, {
    path: '*',
    redirect: '/'
  }]
})

router.beforeEach((to, from, next) => {
  console.log('antes das rotas -> global')
  // if(to.path !== '/usuario') {
  //   next('/usuario')
  // }
  next()
})

export default router