import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import './styles/index.scss' // global css

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

import Tips from 'v-tips'
Vue.use(Tips)

new Vue({
  render: h => h(App),
}).$mount('#app')
