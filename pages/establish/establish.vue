<template>
	<view class="establish-layout">
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
					<!-- 自定义设置 -->
					<view class="custom" v-if="themeChecked">
						<view class="custom-bg">
							<wired-card elevation="1" class="card-custom"><input class="uni-input" @blur="custom" placeholder="主题深色线条-背景色" data-id="bg1" /></wired-card>
							<wired-card elevation="1" class="card-custom"><input class="uni-input" @blur="custom" placeholder="主题浅色线条-背景色" data-id="bg2" /></wired-card>
						</view>
						<view class="custom-info" v-if="infoChecked">
							<view v-for="(item, index) in infoArr" :key="index">
								<wired-card elevation="1" class="card-custom">
									<input class="uni-input" @blur="custom" :placeholder="item.placeholder" :data-id="item.id" />
								</wired-card>
							</view>
						</view>
						<view class="custom-line" v-if="lineChecked">
							<wired-card elevation="1" class="card-custom"><input class="uni-input" @blur="custom" placeholder="自定义线条色" data-id="line" /></wired-card>
						</view>
					</view>
					<!-- 上传头像 -->
					<view class="chooseImage-header">
						<view @click="chooseImageH">上传头像</view>
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
						<view class="title">状态</view>
						<wired-radio-group>
							<wired-radio name="good" class="customG" @click="genderRadio('good', 'state')">健康良好</wired-radio>
							<wired-radio name="bad" class="customB" @click="genderRadio('bad', 'state')">宅{{ radioState }}</wired-radio>
						</wired-radio-group>
					</view>
					<!-- 姓名之类基本信息 用正则表达式去除省和市，限制6个字左右-->
					<view class="info-header">
						<view class="title-inp">
							<view class="inp-title">年龄</view>
							<wired-card elevation="1" class="card-info"><input class="uni-input" name="age" placeholder="年年18" v-model="age" /></wired-card>
						</view>
						<view class="title-inp">
							<view class="inp-title">民族</view>
							<wired-card elevation="1" class="card-info"><input class="uni-input" name="nation" placeholder="默认为汉族" v-model="nation" /></wired-card>
						</view>
						<view class="title-inp">
							<view class="inp-title">户籍</view>
							<wired-card elevation="1" class="card-info"><input class="uni-input" name="place" placeholder="例:广东广州" v-model="place" /></wired-card>
						</view>
						<view class="title-inp">
							<view class="inp-title">学历</view>
							<wired-card elevation="1" class="card-info"><input class="uni-input" name="education" placeholder="活着自在最重要" v-model="education" /></wired-card>
						</view>
					</view>
					<!-- 简介 -->
					<view class="introduction">
						<view class="int-title">简介内容</view>
						<view class="int-brief">
							<wired-card elevation="1" class="card-int"><textarea auto-height placeholder="请用一句话描述简介标题" name="intTitle" maxlength="-1" /></wired-card>
						</view>
						<view class="int-content">
							<wired-card elevation="1" class="card-int">
								<textarea
									auto-height
									placeholder="用几句简单的话语介绍自己,以中文分号(;)为断句,例:人生短暂,及时行乐;与其忧愁,不如苦中作乐;"
									name="intContent"
									maxlength="-1"
								/>
							</wired-card>
						</view>
					</view>
					<!-- 经历 -->
					<view class="ex-layout">
						<view class="ex-seleter">
							<view id="ex-title">选择工作经验所要填写的数量</view>
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
									<view @click="chooseImageEx(index)">上传图片{{ index + 1 }}</view>
									<image :src="item.exImg" mode="" v-if="item.exImg"></image>
								</view>
								<wired-card elevation="1" class="card-ex">
									<input class="uni-input" @blur="exInp" :placeholder="'公司名' + (index + 1)" :data-index="index" :value="item.exName" />
								</wired-card>
								<wired-card elevation="1" class="card-ex">
									<textarea
										auto-height
										placeholder="工作经验==>以中文分号(;)为断句,例:人生短暂,及时行乐;与其忧愁,不如苦中作乐;"
										@blur="exTextarea"
										:data-index="index"
										:value="item.exContent"
										maxlength="-1"
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
									<view @click="chooseImageWorks(index)">上传图片{{ index + 1 }}</view>
									<image :src="item.worksSrc" mode="" v-if="item.worksSrc"></image>
								</view>
								<wired-card elevation="1" class="card-works">
									<input
										class="uni-input"
										@blur="worksInp"
										:placeholder="'选项框对应的项目名' + (index + 1)"
										:data-index="index"
										data-name="selectedName"
										:value="item.selectedName"
									/>
								</wired-card>
								<wired-card elevation="1" class="card-works">
									<input
										class="uni-input"
										@blur="worksInp"
										:placeholder="'项目名' + (index + 1)"
										:data-index="index"
										data-name="worksTitle"
										:value="item.worksTitle"
									/>
								</wired-card>
								<wired-card elevation="1" class="card-works">
									<input class="uni-input" @blur="worksInp" placeholder="日期" :data-index="index" data-name="worksDate" :value="item.worksDate" />
								</wired-card>
								<wired-card elevation="1" class="card-works">
									<input
										class="uni-input"
										@blur="worksInp"
										placeholder="用一句话简介项目功能"
										:data-index="index"
										data-name="worksContent"
										:value="item.worksContent"
									/>
								</wired-card>
								<wired-card elevation="1" class="card-works">
									<input class="uni-input" @blur="worksInp" placeholder="源码地址" :data-index="index" data-name="worksLink" :value="item.worksLink" />
								</wired-card>
								<wired-card elevation="1" class="card-works">
									<input class="uni-input" @blur="worksInp" placeholder="在线浏览地址" :data-index="index" data-name="worksBrowse" :value="item.worksBrowse" />
								</wired-card>
								<wired-card elevation="1" class="card-ex">
									<textarea
										auto-height
										placeholder="项目内容==>以中文分号(;)为断句,例:人生短暂,及时行乐;与其忧愁,不如苦中作乐;"
										@blur="worksTextarea"
										:data-index="index"
										:value="item.worksList"
										maxlength="-1"
									/>
								</wired-card>
							</view>
						</view>
					</view>
					<!-- 联系方式 -->
					<view class="contact-layout">
						<view class="contact-title">联系方式</view>
						<view class="contact-checkbox">
							<view v-for="(item, index) in contactArr" :key="index">
								<wired-checkbox @change="contactCheckbox" :checked="item.checked" :data-index="index">{{ item.contactName }}</wired-checkbox>
							</view>
						</view>
						<view class="contact-list">
							<view class="contact-text" v-for="(item, index) in contactArr" :key="index" v-if="item.checked">
								<image :src="item.icon" mode=""></image>
								<wired-card elevation="1" class="card-contact"><input class="uni-input" :name="item.contact" :placeholder="item.placeholder" /></wired-card>
							</view>
						</view>
						<!-- --wired-checkbox-icon-color Color of the checkbox. Default is currentColor. -->
					</view>
					<!-- 尾部 -->
					<view class="footer">
						<view>页尾</view>
						<view class="footer-content">
							<wired-card elevation="1" class="card-footer">
								<textarea auto-height placeholder="结束语==>以中文分号(;)为断句,例:人生短暂,及时行乐;与其忧愁,不如苦中作乐;" name="footerContent" maxlength="-1" />
							</wired-card>
							<view class="copyright">
								<view class="copyright-title">著重权是否显示：</view>
								<view class="switch-cop">
									<wired-toggle :checked="copChecked" @change="copyrightFun(copChecked)" class="copColor"></wired-toggle>
									<switch name="switchCop" :checked="copChecked" v-show="false" />
								</view>
								<view class="cop-contnet" v-if="copChecked">
									<wired-card elevation="1" class="cop">
										<input class="uni-input" name="footerCopy" placeholder="例子:Copyright ©xxx All rights reserved" />
									</wired-card>
								</view>
							</view>
						</view>
					</view>
					<!-- 提交 -->
					<view class="uni-btn-v">
						<button form-type="submit"><wired-button class="wired-button">提交</wired-button></button>
						<button type="default" form-type="reset"><wired-button elevation="3" class="wired-button">重置</wired-button></button>
					</view>
				</form>
			</view>
		</wired-card>
		<view class="browse">
			<view @click="browseRe(false)">例子简历浏览</view>
			<view @click="browseRe(true)">生成简历浏览</view>
		</view>
	</view>
</template>

<script>
let _self;
export default {
	name: 'establish',
	data() {
		return {
			//自定义背景色
			customBg1: '',
			customBg2: '',
			customLine: '', //自定义线条色
			//自定义基本信息背景色
			infoArr: [
				{
					id: 'sex',
					placeholder: '性别背景色',
					color: ''
				},
				{
					id: 'age',
					placeholder: '年龄背景色',
					color: ''
				},
				{
					id: 'healthy',
					placeholder: '健康状态背景色',
					color: ''
				},
				{
					id: 'nation',
					placeholder: '民族背景色',
					color: ''
				},
				{
					id: 'place',
					placeholder: '籍贯背景色',
					color: ''
				},
				{
					id: 'education',
					placeholder: '学历背景色',
					color: ''
				}
			],
			themeChecked: false, //是否自定义
			infoChecked: false, //是否自定基本信息背景色
			lineChecked: false, //是否自定线条颜色
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
			], //works渲染的数量
			contactArr: [
				{
					icon: '../../static/res/school.png',
					contactText: '',
					contact: 'school',
					contactName: '学校',
					checked: true,
					placeholder: '请输入学校'
				},
				{
					icon: '../../static/res/email.png',
					contactText: '',
					contact: 'email',
					contactName: '邮箱',
					checked: true,
					placeholder: '请输入邮箱'
				},
				{
					icon: '../../static/res/phone.png',
					contactText: '',
					contact: 'phone',
					contactName: '手机号码',
					checked: true,
					placeholder: '请输入手机号码'
				},
				{
					icon: '../../static/res/dizhi.png',
					contactText: '',
					contact: 'dizhi',
					contactName: '地址',
					checked: true,
					placeholder: '请输入地址'
				},
				{
					icon: '../../static/res/QQ.png',
					contactText: '',
					contact: 'QQ',
					contactName: 'qq',
					checked: false,
					placeholder: '请输入qq'
				},
				{
					icon: '../../static/res/wechat.png',
					contactText: '',
					contact: 'wechat',
					contactName: '微信',
					checked: false,
					placeholder: '请输入微信'
				},
				{
					icon: '../../static/res/bokeyyuan.png',
					contactText: '',
					contact: 'bokeyyuan',
					contactName: '博客园',
					checked: false,
					placeholder: '请输入博客园'
				},
				{
					icon: '../../static/res/gitee-fill-round.png',
					contactText: '',
					contact: 'gitee-fill-round',
					contactName: '码云',
					checked: false,
					placeholder: '请输入码云'
				},
				{
					icon: '../../static/res/github.png',
					contactText: '',
					contact: 'github',
					contactName: 'github',
					checked: false,
					placeholder: '请输入github'
				},
				{
					icon: '../../static/res/xinlang.png',
					contactText: '',
					contact: 'xinlang',
					contactName: '新浪',
					checked: false,
					placeholder: '请输入新浪'
				},
				{
					icon: '../../static/res/zhihu.png',
					contactText: '',
					contact: 'zhihu',
					contactName: '知乎',
					checked: false,
					placeholder: '请输入知乎'
				}
			],
			estData: []
		};
	},
	onLoad() {
		_self = this;
	},
	methods: {
		formSubmit: function(e) {
			// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
			let val = e.detail.value;
			let sex = val.gender == 'men' ? '男' : '女';
			let healthy = val.state == 'good' ? '健康良好' : `宅${sex}`;
			let intContent = _self.trimSplit(val.intContent);
			// console.log(intContent,"==>aaa")
			let exampleCon = [];
			intContent.forEach((item, index) => {
				if (index != 0) {
					exampleCon.push(item);
				}
			});
			// console.log(exampleCon,"==>exampleCon");
			let exArr = [];
			_self.exArr.forEach(item => {
				let obj = {
					exName: item.exName,
					exSrc: item.exImg ? item.exImg : 'https://www.gstatic.com/webp/gallery/1.sm.jpg',
					exContent: _self.trimSplit(item.exContent)
				};
				exArr.push(obj);
			});
			// console.log(exArr,"==>exArr");
			let worksArr = [];
			_self.worksArr.forEach(item => {
				let obj = {
					selectedName: item.selectedName,
					worksTitle: item.worksTitle,
					worksSrc: item.worksSrc ? item.worksSrc : 'https://www.gstatic.com/webp/gallery/1.sm.jpg',
					worksDate: item.worksDate,
					worksContent: item.worksContent,
					worksList: _self.trimSplit(item.worksList),
					worksLink: item.worksLink,
					worksBrowse: item.worksBrowse
				};
				worksArr.push(obj);
			});
			// console.log(worksArr,"==>worksArr");
			let contactArr = [];
			_self.contactArr.forEach(item => {
				if (item.checked && val[`${item.contact}`].length) {
					item.contactText = val[`${item.contact}`];
					contactArr.push(item);
				}
			});
			// console.log(contactArr,"==>contactArr");
			// console.log(val['school'],"==>contactArr");
			let footerArr = _self.trimSplit(val.footerContent);
			let estData = [
				//背景
				{
					fill: _self.customBg1,
					linearGradient: _self.customBg2
				},
				//简介
				{
					headerImg: _self.imgSrc,
					sex: sex,
					age: val.age,
					healthy: healthy,
					nation: val.nation,
					place: val.place,
					education: val.education,
					sexColor: _self.infoArr[0].color,
					ageColor: _self.infoArr[1].color,
					healthyColor: _self.infoArr[2].color,
					nationColor: _self.infoArr[3].color,
					placeColor: _self.infoArr[4].color,
					educationColor: _self.infoArr[5].color,
					exampleInt: val.intTitle,
					exampleTit: intContent[0],
					exampleCon: exampleCon
				},
				// 经验
				{
					//还有很多没完善
					experienceArr: exArr
				},
				// 项目
				{
					worksArr: worksArr
				},
				// 联系
				{
					contactArr: contactArr
				},
				// 尾部
				{
					footerArr: footerArr,
					footerIsFlag: val.switchCop,
					footerCopy: val.footerCopy
				},
				//公用部分
				{
					lineColor: _self.customLine
				}
			];
			console.log(estData, '==>estData');
			_self.estData = estData;
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
			let iden = e.target.dataset.name;
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
			console.log(this.worksArr);
		},
		worksTextarea(e) {
			let i = e.target.dataset.index;
			let val = e.detail.value;
			_self.worksArr[i].worksList = val;
		},
		contactCheckbox(e) {
			// console.log(e, '==>checkbox');
			let index = Number(e.currentTarget.dataset.index);
			_self.contactArr[index].checked = !_self.contactArr[index].checked;
			console.log(_self.contactArr[index].checked);
		},
		custom(e) {
			console.log(e.target.dataset.id, '==>ee');
			let id = e.target.dataset.id;
			let val = e.detail.value;
			switch (id) {
				case 'bg1':
					_self.customBg1 = val;
					break;
				case 'bg2':
					_self.customBg2 = val;
					break;
				case 'line':
					_self.customLine = val;
					break;
				case 'sex':
					_self.infoArr[0].color = val;
					break;
				case 'age':
					_self.infoArr[1].color = val;
					break;
				case 'healthy':
					_self.infoArr[2].color = val;
					break;
				case 'nation':
					_self.infoArr[3].color = val;
					break;
				case 'place':
					_self.infoArr[4].color = val;
					break;
				case 'education':
					_self.infoArr[5].color = val;
					break;
			}
		},
		browseRe(isFlag) {
			uni.$emit('update', { msg: JSON.stringify(_self.estData) });
			uni.navigateTo({
				url: `../resume/resume?isFlag=${isFlag}`
			});
		},
		//去掉首尾空格+字符窜切割
		trimSplit(str) {
			// console.log(str.split('；'), '==>.split');
			let arr = [];
			str.split('；').forEach(item => {
				if (item) {
					// console.log(item.replace(/(^\s*)|(\s*$)/g, ''), '==>item');
					item = item.replace(/(^\s*)|(\s*$)/g, '');
					item = item.replace(/\s+/g, ''); //去除空格
					//去除换行
					item = item.replace(/<\/?.+?>/g, '');
					item = item.replace(/[\r\n]/g, '');
					item = item.replace(/^\s*/g, ''); //去除左侧空格
					item = item.replace(/\s*$/g, ''); //去右空格
					item = item.replace(/(^\s*)|(\s*$)/g, ''); //去掉字符串两端的空格
					item = item.replace(/\s/g, ''); //去除字符串中间空格
					let reg = /^[0-9]*$/; //匹配整数
					reg.test(item);
					arr.push(item);
				}
			});
			return arr;
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
.uni-switch {
	display: flex;
	flex-direction: column;
}
.chooseImage-header {
	/* border: 1rpx solid red; */
	margin: 10rpx 0;
}
.chooseImage-header image {
	width: 200rpx;
	height: 200rpx;
	border-radius: 50%;
	margin-top: 20rpx;
}
.wired-radio-state {
	margin: 10rpx 0;
}
.customG {
	margin-right: 20rpx;
}
.card-info {
	padding-left: 10rpx;
}
.card-info .uni-input {
	height: 60rpx;
}
.introduction .card-int {
	/* border: 1px solid red; */
	min-height: 200rpx;
	padding-left: 12rpx;
	padding-top: 10rpx;
}
.introduction .card-int textarea {
	min-height: 200rpx;
}

.ex-seleter {
	margin: 10rpx 0;
	/* border: 1px solid red; */
}
.ex-container {
	border: 1px solid #000;
	margin: 20rpx 0;
	padding: 20rpx 0;
}
.ex-content .exSrc view {
	/* margin: 10rpx 0; */
}
.ex-content .exSrc image {
	margin: 10rpx 20rpx;
	width: 240rpx;
	height: 200rpx;
}
.card-ex {
	/* border: 1px solid red; */
	padding-left: 15rpx;
}
.uni-input {
	height: 60rpx;
	padding: 10rpx;
}
textarea {
	min-height: 300rpx;
	padding: 10rpx;
}
.works-container {
	border: 1px solid #000;
	margin: 20rpx 0;
	padding: 10rpx;
}
.works-content {
	display: flex;
	flex-direction: column;
	/* border: 1px solid red; */
}
.worksSrc view {
	margin: 10rpx 0;
}
.worksSrc image {
	margin: 10rpx 20rpx;
	width: 300rpx;
	height: 300rpx;
}

.card-works input {
	padding: 10rpx;
}
.contact-checkbox {
	/* border: 1px solid red; */
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
.contact-checkbox view {
	width: 33%;
}
.contact-text {
	/* border: 1px solid red; */
}
.contact-text image {
	width: 60rpx;
	height: 60rpx;
	margin-right: 10rpx;
}
.browse {
	margin: 20rpx 0 0 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	/* flex-direction: column; */
	font-size: 40rpx;
	color: #ffffff;
	background: #000000;
	padding: 10rpx 0;
}
.cop-contnet .cop {
	width: 100%;
}
</style>
