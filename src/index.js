import Vue from 'vue'
import App from './app.vue'

import './index.less';


import VueWebsocket from "vue-websocket";
// Vue.use(VueWebsocket, "ws://localhost:8081/ws");
Vue.use(VueWebsocket, "ws://mykrystal.com/ws");

new Vue({
	el: '#app',
	render: h => h(App)
})
