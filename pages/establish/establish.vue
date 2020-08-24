<template>
	<view class="establish-layout">
		<view class="resume-establish">
			<!-- 1.是否自定义主题，背景颜色，渐变色，字体颜色，若选择默认下面的2，3点不显示 -->
			<!-- 2.是否自定基本信息背景色 -->
			<!-- 3.是否自定义线条颜色 -->
			<!-- 4.上传头像 ***-->
			<!-- 5.简介标题/内容填写 -->
			<!-- 6.经验填写 -->
			<!-- 7.项目填写 -->
			<!-- 8.联系填写 -->
			<!-- 9.尾部结束语填写-以及是否显示版权 -->

			<!-- 需要解决的问题，1.from表单，2.图片上传，3.动态添加多个input框 -->
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-switch">
					<view class="switch-title">是否自定义主题颜色</view>
					<view class="toggle-switch"></view>
					<wired-toggle :checked="themeChecked" @change="themeFun(themeChecked)"></wired-toggle>
					<switch name="switchTheme" :checked="themeChecked" v-show="false" />
				</view>
				<view class="uni-switch" v-if="themeChecked">
					<view class="switch-title">是否自定基本信息背景色</view>
					<view class="toggle-switch"></view>
					<wired-toggle :checked="infoChecked" @change="infoFun(infoChecked)"></wired-toggle>
					<switch name="switchInfo" :checked="infoChecked" v-show="false" />
				</view>
				<view class="uni-switch" v-if="themeChecked">
					<view class="switch-title">是否自定义线条颜色</view>
					<view class="toggle-switch"></view>
					<wired-toggle :checked="lineChecked" @change="lineFun(lineChecked)"></wired-toggle>
					<switch name="switchLine" :checked="lineChecked" v-show="false" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit"><wired-button class="wired-button">提交</wired-button></button>
					<button type="default" form-type="reset"><wired-button elevation="3" class="wired-button">重置</wired-button></button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
let _self;
export default {
	name: 'establish',
	data() {
		return {
			themeChecked: false,
			infoChecked: false,
			lineChecked: false
		};
	},
	onLoad() {
		_self = this;
	},
	methods: {
		formSubmit: function(e) {
			console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
		},
		formReset: function(e) {
			console.log('清空数据');
		},
		themeFun(e) {
			_self.themeChecked = !_self.themeChecked;
		},
		infoFun(e) {
			_self.infoChecked = !_self.infoChecked;
		},
		lineFun(e) {
			_self.lineChecked = !_self.lineChecked;
		}
	}
};
</script>

<style scoped>
.establish-layout {
	padding: 10rpx;
	font-size: 36rpx;
}
.uni-btn-v {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.uni-btn-v button {
	background-color: transparent;
	/* border: 1px solid red; */
}
.uni-btn-v button::after {
	outline: none;
	border: none;
}
.wired-button {
	width: 300rpx;
	/* border: 1px solid red; */
}
.switch-title {
	margin: 20rpx 0;
}
.toggle-switch {
	display: flex;
	align-items: center;
}
</style>
