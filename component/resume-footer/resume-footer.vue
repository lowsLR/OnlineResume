<template>
	<view class="resume-footer">
		<view class="footer-list" v-for="(item, index) in footerArr" :key="index">{{ item }}</view>
		<view class="footer-flag" v-if="footerIsFlag"></view>
	</view>
</template>

<script>
export default {
	name: 'resume-footer',
	props: {
		footerArr: {
			type: Array,
			default: () => {
				return ['人生,有两条路要走', '一条用心走，叫做梦想', '一条用脚走，叫做现实', '敢于去迈步，用代码敲出一条梦想的道路'];
			}
		},
		footerIsFlag: {
			type: Boolean,
			default: () => {
				return true;
			}
		}
	}
};
</script>

<style scoped>
	.resume-footer{
		
	}
</style>
