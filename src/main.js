import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzgJGDXmOntavnOcqI94_GpIiIw4kaT64",
  authDomain: "projeto-frontend.firebaseapp.com",
  projectId: "projeto-frontend",
  storageBucket: "projeto-frontend.appspot.com",
  messagingSenderId: "61751039150",
  appId: "1:61751039150:web:70adf8e61c262507ad093f",
  measurementId: "G-CNP6M2LBNN"
};

firebase.initializeApp(firebaseConfig);