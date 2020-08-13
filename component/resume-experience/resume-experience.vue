<template>
	<view class="resume-experience">
		<view class="line"><wired-divider class="lineColor" :style="{ color: lineColor }"></wired-divider></view>
		<swiper :indicator-dots="indicatorDots" :autoplay="false" class="swiper-layout">
			<swiper-item class="swiper-item-container">
				<view class="swiper-item">
					<view class="corporate">
						<view class="name">广州xxxx信息有限公司</view>
						<wired-image
							elevation="1"
							src="https://www.gstatic.com/webp/gallery/1.sm.jpg"
							class="swiper-img"
							:style="{ color: exImageColor, width: exWidth, height: xeHeight }"
						></wired-image>
					</view>
					<view class="swiper-content">
						<view>1.根据UI设计还原页面；</view>
						<view>2.与后端交互数据；</view>
						<view>3.负责公司的官网和微信公众号开发；</view>
						<view>1.根据UI设计还原页面；</view>
						<view>2.与后端交互数据；</view>
						<view>3.负责公司的官网和微信公众号开发；</view>
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
				return [];
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
