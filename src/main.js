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
  // apiKey: "apiKey",
  // authDomain: "authDomain",
  // databaseURL: "https://databaseURL.com",
  // projectId: "projectId",
  // storageBucket: "storageBucket",
  // messagingSenderId: "messagingSenderId"

  
};

Vue.use(VeeValidate, { locale: 'pt_BR', dictionary: { 'pt_BR': br } });
Vue.use(Toasted, { iconPack : 'fontawesome'});
Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });

firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
