<template>
	<view class="resume-contact">
		<view class="contact-content">
			<view class="contact-title">联系方式</view>
			<view class="contact-list-icon">
				<wired-icon-button class="list-icon" v-for="(item, index) in contactArr" :key="index"
					@click="showContact(item)" :style="{ color: contactColor }" v-if="item.contactText">
					<image :src="item.icon" class="imgIcon"></image>
				</wired-icon-button>
			</view>
		</view>
		<view class="contact-show-content" v-if="contactList.length">
			<view v-for="(items, indexs) in contactList" :key="indexs"
				:class="[indexs == contactList.length - 1 ? 'scale' : '','contact-list']">
				<view>
					{{ items.contactName }}:
				</view>
				<view
					:class="[items.contact == 'gitee' || items.contact == 'github' || items.contact=='bokeyyuan' || items.contact == 'xinlang' || items.contact == 'zhihu' ? 'link':'']"
					@click="hyperlink(items)">
					{{ items.contactText }}
				</view>
			</view>
		</view>
	</view>
	<!-- School, major, mobile phone, email, wechat, QQ, Sina, microblog, blog Garden, Zhihu -->
</template>

<script>
	export default {
		name: 'resume-contact',
		props:['contactColor'],
		data() {
			return {
				contactList: [], // 显示联系信息
				contactArr: this.RD[4].contactArr, //联系信息
			};
		},
		created() {},
		methods: {
			showContact(con) {
				let obj = {};
				this.contactList.push(con);
				this.contactList = this.contactList.reduce((item, next) => {
					obj[next.contact] ? '' : (obj[next.contact] = true && item.push(next));
					return item;
				}, []);
				// console.log(this.contactList);
			},
			hyperlink(item) {
				if (item.contact == 'gitee' || item.contact == 'github' || item.contact == 'bokeyyuan' || item.contact ==
					'xinlang' || item.contact == 'zhihu') {
					window.location.href = item.contactText;
				}
			}
		}
	};
</script>

<style scoped>
	.resume-contact {
		padding: 20rpx;
	}

	.contact-content {}

	.contact-title {
		font-size: 40rpx;
		font-weight: bold;
		margin: 10rpx 0 20rpx 0;
		width: 100%;
		/* border: 1px solid red; */
		text-align: center;
	}

	.contact-list-icon {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		/* border: 1px solid red; */
	}

	.list-icon {
		color: #ffffff;
		/* background-color: red; */
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20%;
		margin: 10rpx 0;
	}

	.list-icon image {
		width: 60rpx;
		height: 60rpx;
		background-color: #ffffff;
		border-radius: 50%;
	}

	.contact-show-content {
		padding: 10rpx 20rpx;
	}

	.contact-list {
		font-size: 36rpx;
		display: flex;
		align-items: center;
	}

	.link {
		text-decoration: underline;
		color: #55aaff;
	}

	.contact-list view {
		margin: 10rpx 0;
	}

	.contact-list view:first-child {
		font-weight: bold;
		width: 180rpx;
		text-align: left;
	}

	.contact-list view:last-child {
		font-weight: 400;
		flex: 1;
		text-align: left;
	}

	.scale {
		font-size: 40rpx;
	}
</style>
