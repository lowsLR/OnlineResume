import Vue from 'vue'
import App from './App'

import {WiredButton, WiredInput,WiredLink,WiredListbox } from "wired-elements";
Vue.use({WiredButton, WiredInput,WiredLink,WiredListbox });

Vue.config.productionTip = false

App.mpType = 'app'

// 全局挂载简历数据
import RD from './pages/resume/resumeData.js';
Vue.prototype.RD = RD;
const app = new Vue({
    ...App
})
app.$mount()
