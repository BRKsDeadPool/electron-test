window.Vue = require('vue')
import Electron from 'vue-electron'
import VueMaterial from 'vue-material'
import router from './router'
import store from './vuex'
import App from './App'
import 'material-design-icons/iconfont/material-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'vue-material/dist/vue-material.css'
import './style/main.css'
import 'moment/locale/pt-br'

Vue.use(Electron)
Vue.use(VueMaterial)
Vue.config.debug = true
Vue.prototype.$moment = require('moment')
Vue.material.registerTheme({
  app: {
    primary: 'teal',
    accent: 'red',
    warn: 'deep-orange',
    background: {
      color: 'grey',
      hue: 200
    }
  }
})
Vue.material.setCurrentTheme('app')

new Vue({
  created() {
      this.$moment.locale('pt-BR')
  },
  router,
  store,
  ...App
}).$mount('#app')
