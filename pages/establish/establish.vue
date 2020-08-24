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
				
				<view class="uni-btn-v">
					<button form-type="submit"><wired-button class="submit">提交</wired-button></button>
					<button form-type="reset"><wired-button class="reset" elevation="3" form-type="reset">重置</wired-button></button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
export default {
	name: 'establish',
	data() {
		return {};
	},
	methods: {
		formSubmit: function(e) {
			console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
		},
		formReset: function(e) {
			console.log('清空数据');
		}
	}
};
</script>

<style scoped>
button::after {
	border: none;
	outline: none;
}
button {
	background-color: transparent;
	width: 100%;
}
input {
	background: none;
	outline: none;
	border: none;
}
.uni-btn-v {
	/* padding: 10rpx; */
	display: flex;
	align-items: center;
}
.submit,
.reset {
	width: 100%;
}
</style>
