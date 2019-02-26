import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import VeeValidate from 'vee-validate'
import br from 'vee-validate/dist/locale/pt_BR'
import Toasted from 'vue-toasted';
import VModal from 'vue-js-modal'

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyAgWeAGO1E_IVofZzwqwN9LSBZp9l3LrM0',
  authDomain: 'alterdata-nf-stock.firebaseapp.com',
  databaseURL: 'https://alterdata-nf-stock.firebaseio.com',
  projectId: 'alterdata-nf-stock',
  storageBucket: 'alterdata-nf-stock.appspot.com',
  messagingSenderId: '542911665828'
}

Vue.use(VeeValidate, { locale: 'pt_BR', dictionary: { 'pt_BR': br } });
Vue.use(Toasted, { iconPack : 'fontawesome'});
Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });

firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
