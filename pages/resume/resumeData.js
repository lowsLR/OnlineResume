const theme = 'list1'; ////显示默认主题
// 主题背景，默认有三套主题，也可以自己添加
const wiredCardBg = {
	list1: { // 默认主题色为黑色背景，白色线条，白色字体
		fill: '#333333', //背景色--->这个为白色的要修改气泡颜色透明度
		linearGradient: '#FFFFFF', //线条色
		customBgColor: '#FFFFFF', //字体色---->这个要处理，没有全部统一字体颜色
		lineColor: '#B1B1B1', // 简介组件的标题下的分割线
		exImageColor: '#B1B1B1', //公司logo的border颜色
		indictor: '#FFFFFF', //轮播图小圆点颜色
		selectedBg: '#222222', //项目切换键的颜色
		selectedColor: '#FFFFFF', //项目切字体颜色
		worImageColor: '#B1B1B1', //项目扫码图片线框颜色
	},
	list2: { // 晚点再添加多几个主题色搭配

	}
};
// 简介
const briefIntroduction = {
	headerImg: '../../static/logo.png', //头像路径
	sex: '男', //性别
	age: 26, //年龄
	marriage: '未婚', //是否结婚
	place: '广州', //现住址
	statu: '离职', //是否已离职
	education: '大专', //学历
	exampleInt: '纵然前端虐我千百遍，我依然待ta如初恋', //标题
	exampleTit: '我叫刘荣,是一名前端工程师。', //职位
	exampleCon: '两年多的前端开发经验，vue开发过pc端，uni开发过app端，小程序开发，bootstrap制作公司官网以及目前使用cocos creator 开发2d仙侠类游戏，该款游戏已在大陆内、外上线。', //自我简述
};
// 经验
const experience = {
	array: [{
			exName: '广州猫爪信息科技有限公司', //公司名
			exSrc: '../../static/maoZhua.png', // 公司logo路径
			exTime: '2020-5至2021-8', // 工作年限
			exsContent: [{ // 填写工作内容
					text: '1.vue开发pc端网页视频点播；'
				},
				{
					text: '2.uniapp开发视频点播类app端和仙侠类文字游戏app端；'
				},
				{
					text: '3.DragonBones Pro 制作人/怪/头像/技能等龙骨动画；'
				},
				{
					text: '4.cocos creator 开发仙侠类2d游戏，已上线；'
				},
			]
		},
		{
			exName: '广州文慧信息科技有限公司',
			exSrc: 'http://www.wenhuitec.com/static/upload/image/20200309/1583712202292132.png',
			exTime: '2018-11至2019-11',
			exsContent: [{
					text: '1.根据UI设计还原页面；'
				},
				{
					text: '2.开发公司所需的点餐小程序'
				},
				{
					text: '3.维护和二次开发公司已有的小程序和vue项目'
				},
			]
		},
	]
};
// 作品/项目
const works = {
	worksArr: [ //项目数据,最多列五个，我没做滚动处理，有兴趣的可以修改
		{
			selectedName: '项目1', //选中项目下标，修改数字就行了
			title: '道源世界/永劫之灵',
			worksTitle: 'cocos creator', //开发工具
			worksSrc: '', //项目二维码图片
			worksDate: '2020.10-2021.07', //项目时间
			worksContent: '仙侠类游戏，大陆内外已上线，海外只有ios版《道源世界》，国内《永劫之灵》', //项目简述
			worksList: [ //所负责的模块
				{
					text: '1.负责游戏里一些动态动画，如人/怪/npc/技能等龙骨动画和粒子效果；'
				},
				{
					text: '2.负责游戏里一部分的界面，如登录注册，邮箱，每日奖励，小说界面等；'
				},
				{
					text: '3.负责封装一些公用工具/方法，如时间格式，简繁体转换，数值处理，装备回收或复用等；'
				}
			],
			worksLink: '',
			worksBrowse: ''
		},
	]
};
// 联系
const contact = {
	contactArr: [{ // 联系信息，isFlag为false不显示
			icon: '../../static/res/school.png',
			contact: 'school',
			contactName: '学校',
			contactText: '广东工商职业技术学院', // 修改这里就行了，若为空则不显示
		},
		{
			icon: '../../static/res/phone.png',
			contact: 'phone',
			contactName: '联系',
			contactText: '13790711751',
		},
		{
			icon: '../../static/res/email.png',
			contact: 'email',
			contactName: '邮箱',
			contactText: '1228747929@qq.com',
		},
		{
			icon: '../../static/res/dizhi.png',
			contact: 'dizhi',
			contactName: '地址',
			contactText: '广州市番禺区大石站',
		},
		{
			icon: '../../static/res/QQ.png',
			contact: 'QQ',
			contactName: 'qq',
			contactText: '',
		},
		{
			icon: '../../static/res/wechat.png',
			contact: 'wechat',
			contactName: '微信',
			contactText: '',
		},
		{
			icon: '../../static/res/bokeyyuan.png',
			contact: 'bokeyyuan',
			contactName: '博客',
			contactText: '',
		},
		{
			icon: '../../static/res/gitee-fill-round.png',
			contact: 'gitee',
			contactName: '码云',
			contactText: 'https://gitee.com/liu_rong',
		},
		{
			icon: '../../static/res/github.png',
			contact: 'github',
			contactName: 'github',
			contactText: 'https://github.com/lowsLR',
		},
		{
			icon: '../../static/res/xinlang.png',
			contact: 'xinlang',
			contactName: '新浪',
			contactText: '',
		},
		{
			icon: '../../static/res/zhihu.png',
			contact: 'zhihu',
			contactName: '知乎',
			contactText: '',
		}
	]
};
// 尾部
const footer = {
	footerArr: [ //结束语
		{
			text: '人生,有两条路要走'
		},
		{
			text: '一条用心走，叫做梦想'
		},
		{
			text: '一条用脚走，叫做现实'
		},
		{
			text: '敢于去迈步，用代码敲出一条梦想的道路'
		},
	],
	footerCopy: 'Copyright ©LR All rights reserved'
};
const ResumeData = [
	wiredCardBg,
	briefIntroduction,
	experience,
	works,
	contact,
	footer
];
export {
	ResumeData,
	theme
};
