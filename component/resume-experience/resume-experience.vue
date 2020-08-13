<template>
	<view class="resume-experience">
		<view class="line"><wired-divider class="lineColor" :style="{ color: lineColor }"></wired-divider></view>
		<swiper :indicator-dots="indicatorDots" :autoplay="false" class="swiper-layout" :indicator-active-color="indictor">
			<swiper-item class="swiper-item-container" v-for="(item,index) in experienceArr" :key="index">
				<view class="swiper-item">
					<view class="corporate">
						<view class="name">{{item.exName}}</view>
						<wired-image
							:elevation="index >= 5?5:index"
							:src="item.exSrc"
							class="swiper-img"
							:style="{ color: exImageColor, width: exWidth, height: xeHeight }"
						></wired-image>
					</view>
					<view class="swiper-content">
						<view v-for="(items,indexs) in item.exsContent" :key="indexs">{{indexs+1}}. {{items.text}}</view>
					</view>	
				</view>
			</swiper-item>
		</swiper>
		<view class="line"><wired-divider class="lineColor" :style="{ color: lineColor }"></wired-divider></view>
	</view>
</template>

<script>
let _self;
export default {
	name: 'resume-experience',
	props: {
		experienceArr: {
			type: Array,
			default: () => {
				return [
					{
						exName:'广州xxxx信息有限公司1',
						exSrc:'https://www.gstatic.com/webp/gallery/1.sm.jpg',
						exsContent:[
							{
								text:'根据UI设计还原页面；'
							},
							{
								text:'与后端交互数据；'
							},
							{
								text:'负责公司的官网和微信公众号开发；'
							}
						]
					},
					{
						exName:'广州xxxx信息有限公司2',
						exSrc:'https://www.gstatic.com/webp/gallery/2.sm.jpg',
						exsContent:[
							{
								text:'根据UI设计还原页面；'
							},
							{
								text:'与后端交互数据；'
							},
							{
								text:'负责公司的官网和微信公众号开发；'
							}
						]
					}
				];
			}
		},
		exImageColor: {
			type: String,
			default: () => {
				return '#b1b1b1';
			}
		},
		exWidth: {
			type: String,
			default: () => {
				return '240rpx';
			}
		},
		xeHeight: {
			type: String,
			default: () => {
				return '200rpx';
			}
		},
		lineColor: {
			type: String,
			default: () => {
				return '#B1B1B1';
			}
		},	
		indictor:{
			type: String,
			default: () => {
				return '#FFFFFF';
			}
		}
	},
	data() {
		return {
			array: [],
			indicatorDots: false
		};
	},
	created() {
		_self = this;
		this.$nextTick(() => {
			_self.array = _self.experienceArr;
			if (_self.array.length > 1) {
				_self.indicatorDots = true;
			}
		});
	}
};
</script>

<style scoped>
.resume-experience {
	/* border: 1px solid red; */
	margin-top: 20rpx;
}
.swiper-layout {
	min-height: 400rpx;
	padding: 0 10rpx;
}
.swiper-item-container {
	display: flex;
	align-items: center;
}
.swiper-item {
	display: flex;
	align-items: center;
}
.corporate .name {
	width: 240rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28rpx;
	font-weight: bold;
}
.swiper-img {
	display: flex;
	margin-right: 20rpx;
}
.swiper-content {
	flex: 1;
	font-size: 32rpx;
}
.line {
	margin: 10rpx 0;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}
.line .lineColor {
	width: 95%;
}
</style>
