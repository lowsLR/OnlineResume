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
		<!-- textarea 的需要用正则去除换行和字符操作 -->
		<wired-card elevation="2" class="card-form">
			<view class="resume-establish">
				<form @submit="formSubmit" @reset="formReset">
					<!-- 是否自定义 -->
					<view class="uni-switch">
						<view class="switch-title">是否自定义主题颜色</view>
						<wired-toggle :checked="themeChecked" @change="themeFun(themeChecked)"></wired-toggle>
						<switch name="switchTheme" :checked="themeChecked" v-show="false" />
					</view>
					<view class="uni-switch" v-if="themeChecked">
						<view class="switch-title">是否自定基本信息背景色</view>
						<wired-toggle :checked="infoChecked" @change="infoFun(infoChecked)" class="infoColor"></wired-toggle>
						<switch name="switchInfo" :checked="infoChecked" v-show="false" />
					</view>
					<view class="uni-switch" v-if="themeChecked">
						<view class="switch-title">是否自定义线条颜色</view>
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
					<!-- 姓名之类基本信息 用正则表达式去除省和市，限制6个字左右-->
					<view class="info-header">
						<view class="title-inp">
							<view class="inp-title">年龄：</view>
							<wired-card elevation="1" class="card-info"><input class="uni-input" name="age" placeholder="年年18" v-model="age" /></wired-card>
						</view>
						<view class="title-inp">
							<view class="inp-title">民族：</view>
							<wired-card elevation="1" class="card-info"><input class="uni-input" name="nation" placeholder="默认为汉族" v-model="nation" /></wired-card>
						</view>
						<view class="title-inp">
							<view class="inp-title">户籍：</view>
							<wired-card elevation="1" class="card-info"><input class="uni-input" name="place" placeholder="例:广东广州" v-model="place" /></wired-card>
						</view>
						<view class="title-inp">
							<view class="inp-title">学历：</view>
							<wired-card elevation="1" class="card-info"><input class="uni-input" name="education" placeholder="活着自在最重要" v-model="education" /></wired-card>
						</view>
					</view>
					<!-- 简介 -->
					<view class="introduction">
						<view class="int-title">简介内容：</view>
						<view class="int-brief">
							<wired-card elevation="1" class="card-int"><textarea auto-height placeholder="请用一句话描述简介标题" name="intTitle" /></wired-card>
						</view>
						<view class="int-content">
							<wired-card elevation="1" class="card-int"><textarea auto-height placeholder="用几句简单的话语介绍自己" name="intContent" /></wired-card>
						</view>
					</view>
					<!-- 尾部 -->
					<view class="footer">
						<view class="footer-content">
							<wired-card elevation="1" class="card-footer">
								<textarea auto-height placeholder="结束语==>以分号(;)为断句,例:人生短暂,及时行乐;与其忧愁,不如苦中作乐;" name="footerContent" />
							</wired-card>
							<view class="copyright">
								<view class="copyright-title">著重权是否显示：</view>
								<view class="switch-cop">
									<wired-toggle :checked="copChecked" @change="copyrightFun(copChecked)" class="copColor"></wired-toggle>
									<switch name="switchCop" :checked="copChecked" v-show="false" />
								</view>
								<view class="cop-contnet" v-if="copChecked">
									<wired-card elevation="1" class="card-int">
										<textarea auto-height placeholder="著重权==>以分号(;)为断句,例:人生短暂,及时行乐;与其忧愁,不如苦中作乐;" name="footerContent" />
									</wired-card>
								</view>
							</view>
						</view>
					</view>
					<!-- 经历 -->
					<view class="ex-layout">
						<view class="ex-seleter">
							<view id="ex-title">选择经验所要填写的数量</view>
							<wired-combo class="ex-combo" @selected="exCombo" ref="exRef" selected="1">
								<wired-item value="1">一份</wired-item>
								<wired-item value="2">两份</wired-item>
								<wired-item value="3">三份</wired-item>
								<wired-item value="4">四份</wired-item>
								<wired-item value="5">五份</wired-item>
								<wired-item value="6">六份</wired-item>
								<wired-item value="7">七份</wired-item>
								<wired-item value="8">八份</wired-item>
								<wired-item value="9">九份</wired-item>
							</wired-combo>
						</view>
						<view class="ex-container">
							<view class="ex-content" v-for="(item, index) in exArr" :key="index">
								<view class="exSrc">
									<view @click="chooseImageEx(index)">上传图片</view>
									<image :src="item.exImg" mode="" v-if="item.exImg"></image>
								</view>
								<wired-card elevation="1" class="card-ex">
									<input class="uni-input" @blur="exInp" placeholder="公司名" :data-index="index" :value="item.exName" />
								</wired-card>
								<wired-card elevation="1" class="card-ex">
									<textarea
										auto-height
										placeholder="经验==>以分号(;)为断句,例:人生短暂,及时行乐;与其忧愁,不如苦中作乐;"
										@blur="exTextarea"
										:data-index="index"
										:value="item.exContent"
									/>
								</wired-card>
							</view>
						</view>
					</view>
					<!-- 项目 -->
					<view class="works-layout">
						<view class="works-seleter">
							<view id="works-title">选择项目所要填写的数量</view>
							<wired-combo class="works-combo" @selected="worksCombo" ref="worksRef" selected="1">
								<wired-item value="1">一份</wired-item>
								<wired-item value="2">两份</wired-item>
								<wired-item value="3">三份</wired-item>
								<wired-item value="4">四份</wired-item>
								<wired-item value="5">五份</wired-item>
								<wired-item value="6">六份</wired-item>
								<wired-item value="7">七份</wired-item>
								<wired-item value="8">八份</wired-item>
								<wired-item value="9">九份</wired-item>
							</wired-combo>
						</view>
						<view class="works-container">
							<view class="works-content" v-for="(item, index) in worksArr" :key="index">
								<view class="worksSrc">
									<view @click="chooseImageWorks(index)">上传图片</view>
									<image :src="item.worksSrc" mode="" v-if="item.worksSrc"></image>
								</view>
								<wired-card elevation="1" class="card-works">
									<input
										class="uni-input"
										@blur="worksInp"
										placeholder="选项框对应的项目"
										:data-index="index"
										:data-name="selectedName"
										:value="item.selectedName"
									/>
								</wired-card>
								<wired-card elevation="1" class="card-works">
									<input class="uni-input" @blur="worksInp" placeholder="项目名" :data-index="index" :data-name="worksTitle" :value="item.worksTitle" />
								</wired-card>
								<wired-card elevation="1" class="card-works">
									<input class="uni-input" @blur="worksInp" placeholder="日期" :data-index="index" :data-name="worksDate" :value="item.worksDate" />
								</wired-card>
								<wired-card elevation="1" class="card-works">
									<input class="uni-input" @blur="worksInp" placeholder="项目简介" :data-index="index" :data-name="worksContent" :value="item.worksContent" />
								</wired-card>
								<wired-card elevation="1" class="card-works">
									<input class="uni-input" @blur="worksInp" placeholder="源码地址" :data-index="index" :data-name="worksLink" :value="item.worksLink" />
								</wired-card>
								<wired-card elevation="1" class="card-works">
									<input class="uni-input" @blur="worksInp" placeholder="在线浏览地址" :data-index="index" :data-name="worksBrowse" :value="item.worksBrowse" />
								</wired-card>
								<wired-card elevation="1" class="card-ex">
									<textarea
										auto-height
										placeholder="项目==>以分号(;)为断句,例:人生短暂,及时行乐;与其忧愁,不如苦中作乐;"
										@blur="worksTextarea"
										:data-index="index"
										:value="item.worksList"
									/>
								</wired-card>
							</view>
						</view>
					</view>
					<!-- 联系方式 -->
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
			themeChecked: false, //是否自定义
			infoChecked: false, //是否自定基本信息背景色
			lineChecked: false, //是否自定基本信息背景色
			imgSrc: '', //头像
			//性别
			checkedM: false,
			checkedW: false,
			//健康
			checkedG: false,
			checkedB: false,
			radioState: '',
			age: '', //姓名
			nation: '', //民族
			place: '', //地方
			education: '', //学历
			copChecked: false, //著重权是否显示
			exArr: [
				{
					exImg: '',
					exName: '',
					exContent: ''
				}
			], //ex渲染的数量
			worksArr: [
				{
					selectedName: '',
					worksTitle: '',
					worksSrc: '',
					worksDate: '',
					worksContent: '',
					worksList: '',
					worksLink: '',
					worksBrowse: ''
				}
			] //works渲染的数量
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
							// console.log(image);
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
					this.radioState = '男';
				} else {
					this.checkedM = false;
					this.checkedW = true;
					this.radioState = '女';
				}
			}
		},
		copyrightFun(e) {
			_self.copChecked = !_self.copChecked;
		},
		chooseImageEx(i) {
			// console.log(i, 'chooseImageEx');
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function(res) {
					console.log(JSON.stringify(res.tempFilePaths));
					uni.getImageInfo({
						src: res.tempFilePaths[0],
						success: function(image) {
							// console.log(image);
							_self.exArr[i].exImg = image.path;
						}
					});
				}
			});
		},
		exCombo(e) {
			_self.exArr = [];
			// console.log(this.$refs.exRef.selected, '==>refs');
			let index = this.$refs.exRef.selected - 0;
			for (let i = 1; i < index + 1; i++) {
				let obj = {
					exImg: '',
					exName: '',
					exContent: ''
				};
				_self.exArr.push(obj);
			}
			// console.log(_self.exArr, '==>_self.exArr');
		},
		exInp(e) {
			// console.log(e,"==?exInp");
			let i = e.target.dataset.index;
			let val = e.detail.value;
			_self.exArr[i].exName = val;
			// console.log(_self.exArr, '==>_self.exArr');
		},
		exTextarea(e) {
			// console.log(e,"==?exInp");
			let i = e.target.dataset.index;
			let val = e.detail.value;
			_self.exArr[i].exContent = val;
			// console.log(_self.exArr, '==>_self.exArr');
		},
		worksCombo(e) {
			_self.worksArr = [];
			let index = this.$refs.worksRef.selected - 0;
			for (let i = 1; i < index + 1; i++) {
				let obj = {
					selectedName: '',
					worksTitle: '',
					worksSrc: '',
					worksDate: '',
					worksContent: '',
					worksList: '',
					worksLink: '',
					worksBrowse: ''
				};
				_self.worksArr.push(obj);
			}
		},
		chooseImageWorks(i) {
			// console.log(i, 'chooseImageEx');
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function(res) {
					console.log(JSON.stringify(res.tempFilePaths));
					uni.getImageInfo({
						src: res.tempFilePaths[0],
						success: function(image) {
							// console.log(image);
							_self.worksArr[i].worksSrc = image.path;
						}
					});
				}
			});
		},
		worksInp(e) {
			let i = e.target.dataset.index;
			let val = e.detail.value;
			let iden = e.detail.name;
			switch (iden) {
				case 'selectedName':
					_self.worksArr[i].selectedName = val;
					break;
				case 'worksTitle':
					_self.worksArr[i].worksTitle = val;
					break;
				case 'worksDate':
					_self.worksArr[i].worksDate = val;
					break;
				case 'worksContent':
					_self.worksArr[i].worksContent = val;
					break;
				case 'worksLink':
					_self.worksArr[i].worksLink = val;
					break;
				case 'worksBrowse':
					_self.worksArr[i].worksBrowse = val;
					break;
			}
		},
		worksTextarea(e) {
			let i = e.target.dataset.index;
			let val = e.detail.value;
			_self.worksArr[i].worksList = val;
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
	--wired-radio-icon-color: #333333;
}
.copColor {
	--wired-toggle-off-color: #55aaff;
	--wired-toggle-on-color: #f59;
}
</style>
