const theme = 'list4'; ////显示默认主题
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
		marriageBG: 'rgba(255, 255, 255, 0.2)', //气泡颜色
		mboxShadow: '1px 1px 0 0px #f2f2f2', //气泡阴影
	},
	list2: { // 晚点再添加多几个主题色搭配
		fill: '#FFFFFF',
		linearGradient: '#333333',
		customBgColor: '#333333',
		lineColor: '#B1B1B1',
		exImageColor: '#B1B1B1',
		indictor: '#333333',
		selectedBg: '#B1B1B1',
		selectedColor: '#333333',
		worImageColor: '#B1B1B1',
		marriageBG: 'rgba(0, 0, 0, 0.1)',
		mboxShadow: '1px 1px 0 0px #000000',
	},
	list3: {
		fill: '#084F6B',
		linearGradient: '#E6E6E1',
		customBgColor: '#E6E6E1',
		lineColor: '#B2D9D8',
		exImageColor: '#B2D9D8',
		indictor: '#084F6B',
		selectedBg: '#222222',
		selectedColor: '#E6E6E1',
		worImageColor: '#B1B1B1',
		marriageBG: 'rgba(255, 255, 255, 0.1)',
		mboxShadow: '1px 1px 0 0px #f2f2f2',
	},
	list4: {
		fill: '#6AA17A',
		linearGradient: '#DBE8B2',
		customBgColor: '#FFFFFF',
		lineColor: '#2A5269',
		exImageColor: '#B2D9D8',
		indictor: '#2A5269',
		selectedBg: '#2A5269',
		selectedColor: '#FFFFFF',
		worImageColor: '#B2D9D8',
		marriageBG: 'rgba(255, 255, 255, 0.2)',
		mboxShadow: '1px 1px 0 0px #E3DBD7',
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
	worksArr: [ //项目数据,最多列五个，我没做滚动处理，有兴趣的可以修改,若项目过多可以添加"selectedName:'其他'",列出来;
		{
			selectedName: '项目1', //选中项目下标，修改数字就行了
			title: '道源世界/永劫之灵',
			worksTitle: 'cocos creator', //开发工具
			worksSrc: '', //项目二维码图片
			worksDate: '2020.10-2021.7', //项目时间
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
			worksLink: '', //gitHub/gitee链接
			worksBrowse: '' //在线浏览
		},
		{
			selectedName: '项目2',
			title: '零点八视频点播-pc端',
			worksTitle: 'vue + Element UI',
			worksSrc: '',
			worksDate: '2020.8-2020.10',
			worksContent: 'pc端视频点播类网站，视频主要类型是体育竞技，也有多频道的电视频道点播，其中也有相关体育竞技的新闻。（由于项目是外包的不是本公司产品，下面的链接是公司的服务器，数据也很久没更新了，若感兴趣可以点击查看）',
			worksList: [{
					text: '1.负责根据ui制作一部分页面，如登陆注册，新闻，电视频道，比赛录像等页面；'
				},
				{
					text: '2.负责封装一些公用的方法，如比赛时间倒数，搜索筛选功能，路由拦截等；'
				},
				{
					text: '3.负责vue打包后调整和优化项目性能；'
				}
			],
			worksLink: '',
			worksBrowse: 'http://8.129.19.0:8891/index.html#/main/1'
		},
		{
			selectedName: '项目3',
			title: '零点八视频点播-app/h5端',
			worksTitle: 'uniapp',
			worksSrc: '',
			worksDate: '2020.5-2020.8',
			worksContent: 'app/h5端和pc端数据虽然是一样的，但用的开发框架不一样，虽然uni可以一套代码生成多套，但代码量也会额外增加不少，特别是视频播放问题，因此pc端才会用vue。（也是外包项目，下面链接有安装包，若感兴趣的可以下载查看）',
			worksList: [{
					text: '1.负责根据ui制作一部分页面，如新闻，电视频道，比赛比分等页面；'
				},
				{
					text: '2.负责调式一些兼容性或者样式问题；'
				}
			],
			worksLink: '',
			worksBrowse: ''
		},
		{
			selectedName: '其他',
			title: '2019-2020期间其他项目',
			worksTitle: '',
			worksSrc: '',
			worksDate: '',
			worksContent: '小程序的可以在微信那查看',
			worksList: [{
					text: '2020.3-2020.4 个人小程序-手画板；'
				},
				{
					text: '2019.8-2019.11 小程序-超房网；'
				},
				{
					text: '2019.4-2019.8 小程序-酒大叔；'
				},
				{
					text: '2019.1-2019.4 vue开发网站挂载在公司的微信公众号上 ；'
				},
				{
					text: '2018.11-2018.12 广州文慧官网；'
				},
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
