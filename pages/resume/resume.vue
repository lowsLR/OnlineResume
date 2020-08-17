<template>
	<view class="resume-layout">
		<!-- 背景 -->
		<wired-card elevation="4" :fill="fill" class="resume-bg" :style="{ 'background-image': linearGradient }">
			<!-- 简介 -->
			<resume-header></resume-header>
			<!-- 经验 -->
			<resume-experience></resume-experience>
			<!-- 作品/项目-->
			<resume-works></resume-works>
		</wired-card>
		<!-- 联系 -->
		<!-- 尾部 -->
	</view>
</template>

<script>
import resumeHeader from '../../component/resume-header/resume-header.vue';
import resumeExperience from '../../component/resume-experience/resume-experience.vue';
import resumeWorks from '../../component/resume-works/resume-works.vue';
export default {
	name: 'resume',
	components: {
		resumeHeader,
		resumeExperience,
		resumeWorks
	},
	data() {
		return {
			fill: '#333',
			linearGradient: 'linear-gradient(to top left, #b1b1b1, #f2f2f2);'
		};
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
