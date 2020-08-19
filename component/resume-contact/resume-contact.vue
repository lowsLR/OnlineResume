<template>
	<view class="resume-contact">
		<view class="contact-content">
			<view class="contact-title">联系方式</view>
			<view class="contact-list-icon">
				<wired-icon-button class="red" v-for="(item, index) in contactArr" :key="index" @click="showContact(item)"><image :src="item.icon"></image></wired-icon-button>
			</view>
		</view>
		<view class="contact-show-content" v-if="contactList.length">
			<view class="contact-list" v-for="(items, indexs) in contactList" :key="indexs"><text>{{items.contactName}}:</text><text>{{items.contactText}}</text></view>
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
		}
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

<style scoped></style>
