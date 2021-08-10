<template>
	<view class="resume-footer">
		<view class="footer-list" v-for="(item, index) in footerArr" :key="index">
			<text>{{ item.text }}</text>
		</view>
		<view class="footer-flag" v-if="footerCopy.length > 0">{{footerCopy}}</view>
	</view>
</template>

<script>
	export default {
		name: 'resume-footer',
		data() {
			return {
				footerArr: this.RD[5].footerArr, //结束语
				footerCopy: this.RD[5].footerCopy, // 注释权，可以不填写
			}
		},
	};
</script>

<style scoped>
	.resume-footer {
		padding: 10rpx;
		padding-left: 20rpx;
	}

	.footer-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 40rpx;
	}

	.footer-flag {
		border-top: 1rpx solid #ffffff;
		text-align: center;
		/* line-height: 40rpx; */
		font-size: 20rpx;
		margin-top: 10rpx;
	}
</style>
