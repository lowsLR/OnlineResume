<template>
	<view class="resume-layout">
		<!-- 背景 -->
		<wired-card elevation="4" :fill="fill" class="resume-bg"
			:style="{ background: linearGradient, color: customBgColor }">
			<!-- 简介 -->
			<resume-header :lineColor="lineColor" :marriageBG="marriageBG" :mboxShadow="mboxShadow"></resume-header>
			<!-- 经验 -->
			<resume-experience :lineColor="lineColor" :indictor="indictor" :exImageColor="exImageColor">
			</resume-experience>
			<!-- 作品/项目-->
			<resume-works :selectedBg="selectedBg" :worImageColor="worImageColor" :selectedColor="selectedColor">
			</resume-works>
			<!-- 联系 -->
			<resume-contact :contactColor="contactColor"></resume-contact>
			<!-- 尾部 -->
			<resume-footer></resume-footer>
			<view class="switchTheme" @click="switchTheme" :style="{boxShadow:mboxShadow}">切换</view>
		</wired-card>
	</view>
</template>

<script>
	import resumeHeader from '../../component/resume-header/resume-header.vue';
	import resumeExperience from '../../component/resume-experience/resume-experience.vue';
	import resumeWorks from '../../component/resume-works/resume-works.vue';
	import resumeContact from '../../component/resume-contact/resume-contact.vue';
	import resumeFooter from '../../component/resume-footer/resume-footer.vue';
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
				// 背景
				fill: this.RD[0][this.theme].fill, //背景色
				linearGradient: this.RD[0][this.theme].linearGradient, //线条色
				customBgColor: this.RD[0][this.theme].customBgColor, //字体色
				lineColor: this.RD[0][this.theme].lineColor, //文字之间段落线条
				marriageBG: this.RD[0][this.theme].marriageBG, //气泡颜色
				mboxShadow: this.RD[0][this.theme].mboxShadow, //气泡阴影
				indictor: this.RD[0][this.theme].indictor, //轮播图小圆点颜色
				exImageColor: this.RD[0][this.theme].exImageColor, //公司logo的border颜色
				selectedBg: this.RD[0][this.theme].selectedBg, //项目切换键的颜色
				worImageColor: this.RD[0][this.theme].worImageColor, //项目扫码图片线框颜色
				selectedColor: this.RD[0][this.theme].selectedColor, //项目切字体颜色
				contactColor: this.RD[0][this.theme].linearGradient, //图标外圈颜色
				themeIndex: 0, //当前主题下标
				themeNum: Object.keys(this.RD[0]).length, //获取主题的数量
			};
		},
		onLoad() {
			// console.log(this.$root.theme, "==?atest")
		},

		methods: {
			switchTheme() {
				console.log('切换主题');
				this.themeIndex++;
				if (this.theme == 'list1') {
					this.themeIndex = 2;
				}
				if (this.themeIndex > this.themeNum) {
					this.themeIndex = 1;
				}
				let theme = `list${this.themeIndex}`;
				let rdt = this.RD[0][theme];
				this.fill = rdt.fill;
				this.linearGradient = rdt.linearGradient;
				this.customBgColor = rdt.customBgColor;
				this.lineColor = rdt.lineColor;
				this.marriageBG = rdt.marriageBG;
				this.mboxShadow = rdt.mboxShadow;
				this.indictor = rdt.indictor;
				this.exImageColor = rdt.exImageColor;
				this.selectedBg = rdt.selectedBg;
				this.worImageColor = rdt.worImageColor;
				this.selectedColor = rdt.selectedColor;
				this.contactColor = rdt.linearGradient;
			}
		},
		onUnload() {}
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	page {
		width: auto;
		height: auto;
	}

	.resume-bg {
		/* color: #fff; */
		width: auto;
		height: auto;
		/* min-height: 1800rpx; */
		/* background: #fff; */
		/* background-image: linear-gradient(to top left, #b1b1b1, #f2f2f2); */
	}

	.switchTheme {
		position: fixed;
		top: 10px;
		right: 10px;
		z-index: 100;
		background-image: -webkit-linear-gradient(92deg, #ffc93c, #a2d5f2);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-animation: hue 10s infinite linear;
		/* box-shadow: 2px 2px 0px #555555; */
		font-size: 36rpx;
		font-weight: 600;
	}

	@-webkit-keyframes hue {
		from {

			-webkit-filter: hue-rotate(0deg);
			-moz-filter: hue-rotate(0deg);
		}

		to {
			-webkit-filter: hue-rotate(-360deg);
			-moz-filter: hue-rotate(-360deg);
		}
	}
</style>
