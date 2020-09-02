<template>
	<view class="resume-layout">
		<!-- 背景 -->
		<wired-card elevation="4" :fill="fill" class="resume-bg" :style="{ background: linearGradient }">
			<!-- 简介 -->
			<resume-header></resume-header>
			<!-- 经验 -->
			<resume-experience></resume-experience>
			<!-- 作品/项目-->
			<resume-works></resume-works>
			<!-- 联系 -->
			<resume-contact></resume-contact>
			<!-- 尾部 -->
			<resume-footer></resume-footer>
		</wired-card>
	</view>
</template>

<script>
import resumeHeader from '../../component/resume-header/resume-header.vue';
import resumeExperience from '../../component/resume-experience/resume-experience.vue';
import resumeWorks from '../../component/resume-works/resume-works.vue';
import resumeContact from '../../component/resume-contact/resume-contact.vue';
import resumeFooter from '../../component/resume-footer/resume-footer.vue';
let _self;
export default {
	name: 'resume',
	components: {
		resumeHeader,
		resumeExperience,
		resumeWorks,
		resumeContact,
		resumeFooter
	},
	data() {
		return {
			fill: '#333',
			linearGradient: '#fff',
			isFlag: false,
			resumeArr: []
		};
	},
	onLoad(option) {
		_self = this;
		// console.log(option.isFlag, '==>option');
		_self.isFlag = option.isFlag;
		uni.getStorage({
			key: 'storage_key',
			success: function(res) {
				console.log(res.data, '==>remuse');
				_self.resumeArr = res.data;
			}
		});
		_self.init();
	},
	methods: {
		init() {}
	},
	onUnload() {
		console.log('结束');
		if (!_self.isFlag) {
			uni.removeStorage({
				key: 'storage_key',
				success: function(res) {
					// console.log('success');
				}
			});
		}
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.resume-bg {
	color: #fff;
	width: 100%;
	min-height: 1800rpx;
	/* background: #fff; */
	/* background-image: linear-gradient(to top left, #b1b1b1, #f2f2f2); */
}
</style>
