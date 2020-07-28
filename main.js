import Vue from 'vue'
import App from './App'

import {WiredButton, WiredInput,WiredLink,WiredListbox } from "wired-elements";
Vue.use({WiredButton, WiredInput,WiredLink,WiredListbox });

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
