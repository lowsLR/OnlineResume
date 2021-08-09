// 主题背景，默认有三套主题，也可以自己添加
const wiredCardBg = {
	list1: { // 默认主题色为黑色背景，白色线条，白色字体
		fill: '#333', //背景色
		linearGradient: '#fff', //线条色
		customBgColor: '#fff', //字体色
		lineColor: '#B1B1B1', // 简介组件的标题下的分割线
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
	exampleCon: '两年多的前端开发经验，vue开发过pc端，uni开发过视频点播类app端，小程序开发过点餐支付，bootstrap制作公司官网以及目前使用cocos creator 开发2d仙侠类游戏，该款游戏已在大陆内外上线。', //自我简述
}
// 经验
const experience = {
	
}
const ResumeData = [
	wiredCardBg,
	briefIntroduction,
	experience
];
export default ResumeData;
