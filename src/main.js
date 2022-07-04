import Vue from "vue";
import App from "./App.vue";
import hoc from "./hoc";
const comp = hoc();
Vue.component("comp", comp);
Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
