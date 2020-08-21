<template>
	<view class="content">
		<!-- 声明 -->
		<view class="statement">
			我是一个前端小白，插件这么牛逼的事情本来与我无关的，但奈何前端大佬说这是一个小任务，写一个uni插件，嗯……想了很久，终于看到一个有趣的超真实手绘风格 UI 元素集合
			<wired-link
				elevation="3"
				href="https://github.com/rough-stuff/wired-elements/tree/master/packages/wired-link"
				target="_blank"
				style="color: #F59; width: auto;overflow: hidden;vertical-align:top;"
			>
				'wired-elements'
			</wired-link>
			的简易插件，我就用这个写一个在线简历，对于刚出来找工作的新人来说，有一份在线简历也算是一份门面，毕竟人靠衣装，佛靠金装嘛。如果觉得不好看的，大佬们别喷。
		</view>

		<view class="toUse">
			<view><wired-link elevation="5" href="https://wiredjs.com/showcase.html" target="_blank">组件库展示</wired-link></view>
			<view>
				<wired-listbox horizontal selected="one" class="customListBox" @selected="establish"><wired-item value="one">主题简历</wired-item></wired-listbox>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		establish() {
			uni.navigateTo({
				url: '../establish/establish'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.content {
	font-family: sans-serif;
}
.statement {
	padding: 0 40rpx;
	font-size: 28rpx;
	line-height: 50rpx;
	text-indent: 2em;
}
.wired-rendered {
	text-indent: 0;
}
// .customListBox {
// 	--wired-item-selected-bg: #f59;
// 	--wired-item-selected-color: #fff;
// 	// width: auto;
// }
.toUse {
	margin-top: 40rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 40rpx;
	view {
		width: auto;
		height: 100rpx;
		// border: 1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	view:first-child {
		margin-right: 40rpx;
	}
}
</style>
