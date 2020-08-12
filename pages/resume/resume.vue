<template>
	<view class="resume-layout">
		<!-- 背景 -->
		<wired-card elevation="4" :fill="fill" class="resume-bg" :style="{ backgroundImage: linearGradient }">
			<!-- 简介 -->
			<resume-header></resume-header>
		</wired-card>

		<!-- 经验 -->
		<!-- 作品/项目-->
		<!-- 联系 -->
		<!-- 尾部 -->
	</view>
</template>

<script>
import resumeHeader from '../../component/resume-header/resume-header.vue';
export default {
	name: 'resume',
	components: {
		resumeHeader
	},
	data() {
		return {
			fill: '#FFFFFF',
			linearGradient: '(to top left, #b1b1b1, #f2f2f2)'
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
	color: #333;
	width: 100%;
	min-height: 1200rpx;
	/* background: #333; */
	background-image: linear-gradient(to top left, #b1b1b1, #f2f2f2);
}
</style>
