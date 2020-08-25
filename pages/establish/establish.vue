<template>
	<view class="establish-layout">
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
		<wired-card elevation="3" class="card-form">
			<view class="resume-establish">
				<form @submit="formSubmit" @reset="formReset">
					<!-- 是否自定义 -->
					<view class="uni-switch">
						<view class="switch-title">是否自定义主题颜色</view>
						<view class="toggle-switch"></view>
						<wired-toggle :checked="themeChecked" @change="themeFun(themeChecked)"></wired-toggle>
						<switch name="switchTheme" :checked="themeChecked" v-show="false" />
					</view>
					<view class="uni-switch" v-if="themeChecked">
						<view class="switch-title">是否自定基本信息背景色</view>
						<view class="toggle-switch"></view>
						<wired-toggle :checked="infoChecked" @change="infoFun(infoChecked)" class="infoColor"></wired-toggle>
						<switch name="switchInfo" :checked="infoChecked" v-show="false" />
					</view>
					<view class="uni-switch" v-if="themeChecked">
						<view class="switch-title">是否自定义线条颜色</view>
						<view class="toggle-switch"></view>
						<wired-toggle :checked="lineChecked" @change="lineFun(lineChecked)" class="lineColor"></wired-toggle>
						<switch name="switchLine" :checked="lineChecked" v-show="false" />
					</view>
					<!-- 上传头像 -->
					<view class="chooseImage-header">
						<view @click="chooseImageH">上传图片</view>
						<image :src="imgSrc" mode="" v-if="imgSrc"></image>
					</view>
					<!-- 性别 -->
					<view class="radio-gender" v-show="false">
						<radio-group name="gender">
							<label>
								<radio value="men" :checked="checkedM" />
								<text>男</text>
							</label>
							<label>
								<radio value="women" :checked="checkedW" />
								<text>女</text>
							</label>
						</radio-group>
					</view>
					<view class="wired-radio-gende">
						<wired-radio-group>
							<wired-radio name="men" class="customM" @click="genderRadio('men', 'gende')">男</wired-radio>
							<wired-radio name="women" class="customW" @click="genderRadio('women', 'gende')">女</wired-radio>
						</wired-radio-group>
					</view>
					<!-- 身体状态 -->
					<view class="radio-state" v-show="false">
						<radio-group name="state">
							<label>
								<radio value="good" :checked="checkedG" />
								<text>健康良好</text>
							</label>
							<label>
								<radio value="bad" :checked="checkedB" />
								<text>宅{{ radioState }}</text>
							</label>
						</radio-group>
					</view>
					<view class="wired-radio-state">
						<wired-radio-group>
							<wired-radio name="good" class="customG" @click="genderRadio('good', 'state')">健康良好</wired-radio>
							<wired-radio name="bad" class="customB" @click="genderRadio('bad', 'state')">宅{{ radioState }}</wired-radio>
						</wired-radio-group>
					</view>
					<!-- 提交 -->
					<view class="uni-btn-v">
						<button form-type="submit"><wired-button class="wired-button">提交</wired-button></button>
						<button type="default" form-type="reset"><wired-button elevation="3" class="wired-button">重置</wired-button></button>
					</view>
				</form>
			</view>
		</wired-card>
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
			lineChecked: false,
			imgSrc: '',
			checkedM: false,
			checkedW: false,
			checkedG: false,
			checkedB: false,
			radioState: ''
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
		},
		chooseImageH() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function(res) {
					console.log(JSON.stringify(res.tempFilePaths));
					uni.getImageInfo({
						src: res.tempFilePaths[0],
						success: function(image) {
							console.log(image.width);
							console.log(image);
							_self.imgSrc = image.path;
						}
					});
				}
			});
		},
		genderRadio(e, type) {
			// console.log('e==>', e);
			if (type == 'state') {
				if (e == 'good') {
					this.checkedG = true;
					this.checkedB = false;
				} else {
					this.checkedG = false;
					this.checkedB = true;
				}
			} else {
				if (e == 'men') {
					this.checkedM = true;
					this.checkedW = false;
					this.radioState = '男'
				} else {
					this.checkedM = false;
					this.checkedW = true;
					this.radioState = '女'
				}
			}
		}
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.establish-layout {
	font-size: 36rpx;
	width: 100%;
}
.card-form {
	width: 100%;
}
.resume-establish {
	padding: 20rpx;
}
.uni-btn-v {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.uni-btn-v button {
	background-color: transparent;
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
.infoColor {
	--wired-toggle-off-color: red;
	--wired-toggle-on-color: green;
}
.lineColor {
	--wired-toggle-off-color: #f59;
	--wired-toggle-on-color: #f50;
}
.customM {
	--wired-radio-icon-color: #55aaff;
}
.customW {
	--wired-radio-icon-color: #f59;
}
.customG {
	--wired-radio-icon-color: #00aa00;
}
.customB {
	--wired-radio-icon-color:#333333;
}
</style>
