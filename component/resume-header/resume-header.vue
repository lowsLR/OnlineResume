<template>
	<view class="resume-header">
		<view class="brief-introduction">
			<view class="brief-l">xxx</view>
			<view class="brief-img"><image src="../../static/logo.png" mode=""></image></view>
			<view class="brief-r">xxx</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'resume-header'
};
</script>

<style scoped>
.brief-introduction {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid red;
	min-height: 400rpx;
}
.brief-introduction .brief-img {
	width: 160rpx;
	height: 160rpx;
	border: 1rpx solid;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5rpx;
	border-radius: 50%;
	overflow: hidden;
	margin: 0 30rpx;
}
.brief-introduction .brief-img image {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
</style>
