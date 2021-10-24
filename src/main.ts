import App from "./App.vue";
import Vue from "vue";
import myPlugin from "./plugins/my-plugin";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(myPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
