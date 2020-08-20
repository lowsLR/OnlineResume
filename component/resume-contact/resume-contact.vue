<template>
	<view class="resume-contact">
		<view class="contact-content">
			<view class="contact-title">联系方式</view>
			<view class="contact-list-icon">
				<wired-icon-button class="list-icon" v-for="(item, index) in contactArr" :key="index" @click="showContact(item)" :style="{color:contactColor}"><image :src="item.icon" :style="{'background-color':contactBgColor}"></image></wired-icon-button>
			</view>
		</view>
		<view class="contact-show-content" v-if="contactList.length">
			<view class="contact-list" v-for="(items, indexs) in contactList" :key="indexs"><view>{{items.contactName}}:</view><view>{{items.contactText}}</view></view>
		</view>
	</view>
	<!-- School, major, mobile phone, email, wechat, QQ, Sina, microblog, blog Garden, Zhihu -->
</template>

<script>
let _self;
export default {
	name: '',
	props: {
		contactArr: {
			type: Array,
			default: () => {
				return [
					{
						icon: '../../static/res/school.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'school',
						contactName:'学校'
					},
					{
						icon: '../../static/res/email.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'email',
						contactName:'邮箱'
					},
					{
						icon: '../../static/res/phone.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'phone',
						contactName:'手机号码'
					},
					{
						icon: '../../static/res/dizhi.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'dizhi',
						contactName:'地址'
					},
					{
						icon: '../../static/res/QQ.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'QQ',
						contactName:'qq'
					},
					{
						icon: '../../static/res/wechat.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'wechat',
						contactName:'微信'
					},
					{
						icon: '../../static/res/bokeyyuan.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'bokeyyuan',
						contactName:'博客园'
					},
					{
						icon: '../../static/res/gitee-fill-round.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'gitee-fill-round',
						contactName:'码云'
					},
					{
						icon: '../../static/res/github.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'github',
						contactName:'github'
					},
					{
						icon: '../../static/res/xinlang.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'xinlang',
						contactName:'新浪'
					},
					{
						icon: '../../static/res/zhihu.png',
						contactText: '122xxxx',
						contactColor: '',
						contact: 'zhihu',
						contactName:'知乎'
					}
				];
			}
		},
		contactColor:{
			type:String,
			default:()=>{
				return '#ffffff'
			}
		},
		contactBgColor:{
			type:String,
			default:()=>{
				return '#ffffff'
			}
		},
	},
	data() {
		return {
			contactList: [],
		};
	},
	created() {
		_self = this;
	},
	methods: {
		showContact(con) {
			let obj = {};
			_self.contactList.push(con);
			_self.contactList = _self.contactList.reduce((item, next) => {
				obj[next.contact] ? '' : (obj[next.contact] = true && item.push(next));
				return item;
			}, []);
			console.log(_self.contactList);
		}
	}
};
</script>

<style scoped>
	.resume-contact{
		padding: 20rpx;
	}
	.contact-content{}
	.contact-title{
		font-size: 40rpx;
		font-weight: bold;
		margin: 10rpx 0 20rpx 0;
		width: 100%;
		/* border: 1px solid red; */
		text-align: center;
	}
	.contact-list-icon{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		/* border: 1px solid red; */
	}
	.list-icon{
		color: #FFFFFF;
		/* background-color: red; */
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20%;
		margin: 10rpx 0;
	}
	.list-icon image{
		width:60rpx;
		height:60rpx;
		background-color: #FFFFFF;
		border-radius: 50%;
	}
	.contact-show-content{
		padding: 10rpx 20rpx;
	}
	.contact-list{
		font-size: 36rpx;
		display: flex;
		align-items: center;
	}
	.contact-list view:first-child{
		font-weight: bold;
		width: 180rpx;
	}
	.contact-list view:last-child{
		font-weight: 400;
		flex: 1;
		text-align: left;
	}
</style>
