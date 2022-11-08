import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from '@/assets/js/common.js'
import vuetify from './plugins/vuetify'

// import 'vx-easyui/dist/themes/default/easyui.css';
// import 'vx-easyui/dist/themes/icon.css';
// import 'vx-easyui/dist/themes/vue.css';

import '@/assets/css/style.css'

// import EasyUI from 'vx-easyui';

// Vue.use(EasyUI);

Vue.use(common);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  // EasyUI,
  render: h => h(App)
}).$mount('#app')
