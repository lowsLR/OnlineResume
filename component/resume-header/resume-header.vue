<template>
	<view class="resume-header">
		<view class="brief-introduction">
			<view class="<brief-l></brief-l> brief">
				<wired-fab :class="[sex=='男'?'male':'female']"><view class="maringleft">xxxx</view></wired-fab>
				<wired-fab class="pinkbg"><view class="maringleft">xxxx</view></wired-fab>
				<wired-fab class="pinkbg"><view class="maringleft">xxxxx4</view></wired-fab>
			</view>	
			<view class="brief-img"><image src="../../static/logo.png" mode=""></image></view>
			<view class="brief-r brief">
				<wired-fab class="pinkbg"><view class="maringleft">xxxx</view></wired-fab>
				<wired-fab class="pinkbg"><view class="maringleft">xxxx</view></wired-fab>
				<wired-fab class="pinkbg"><view class="maringleft">xxxx</view></wired-fab>
			</view>
		</view>
	</view>	
</template>

<script>
export default {
	name: 'resume-header',
	data() {
		return {
			sex: '男'
		}
	},
};
</script>

<style scoped>
.brief-introduction {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* border: 1px solid red; */
	min-height: 400rpx;
}
.brief-introduction .brief-img {
	width: 200rpx;
	height: 200rpx;
	border: 1rpx solid;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5rpx;
	border-radius: 50%;
	overflow: hidden;
	/* margin: 0 30rpx; */
}
.brief-introduction .brief-img image {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.brief{
	display: flex;
	flex-direction: column;
}
.maringleft{
	margin-left: -12rpx;
}
.male{
	color: #F2F2F2;
	--wired-fab-bg-color: #0000cc;
	--wired-icon-size: 30rpx;
	padding: 0;
}
.female {
	color: red;
	--wired-fab-bg-color: pink;
	--wired-icon-size: 30rpx;
	padding: 0;
}	
</style>
