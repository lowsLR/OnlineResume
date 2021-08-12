import Vue from 'vue'
import App from './App'

import {
	WiredButton,
	WiredInput,
	WiredLink,
	WiredListbox
} from "wired-elements";
Vue.use({
	WiredButton,
	WiredInput,
	WiredLink,
	WiredListbox
});

Vue.config.productionTip = false

App.mpType = 'app'

// 全局挂载简历数据
import {
	ResumeData,
	theme
} from './pages/resume/resumeData.js';
Vue.prototype.RD = ResumeData;
Vue.prototype.theme = theme;
const app = new Vue({
	...App,
	// data: {theme} 全局挂载可修改，使用this.$root调用
})
app.$mount()
