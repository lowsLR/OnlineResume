<template>
	<view class="resume-experience">
		<view class="line"><wired-divider class="lineColor" :style="{ color: lineColor }"></wired-divider></view>
		<swiper :indicator-dots="indicatorDots" :autoplay="false" :indicator-active-color="indictor" :style="{height:swiperHeight}" @change="changeSwiperPage">
			<swiper-item  v-for="(item, index) in experienceArr" :key="index">
				<view class="swiper-item">
					<view class="name">{{ item.exName }}</view>
					<view class="corporate-container">
						<view class="corporate">
							<wired-image
								:elevation="index >= 5 ? 5 : index"
								:src="item.exSrc"
								class="swiper-img"
								:style="{ color: exImageColor, width: exWidth, height: xeHeight }"
							></wired-image>
						</view>
						<view class="swiper-content">
							<view v-for="(items, indexs) in item.exsContent" :key="indexs" class="exText">{{ indexs + 1 }}. {{ items.text }}</view>
						</view>
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
						exName: '广州xxxx信息有限公司1',
						exSrc: 'https://www.gstatic.com/webp/gallery/1.sm.jpg',
						exsContent: [
							{
								text: '根据UI设计还原页面；'
							},
							{
								text: '与后端交互数据；'
							},
							{
								text: '负责公司的官网和微信公众号开发；'
							}
						]
					},
					{
						exName: '广州xxxx信息有限公司2',
						exSrc: 'https://www.gstatic.com/webp/gallery/2.sm.jpg',
						exsContent: [
							{
								text: '根据UI设计还原页面；'
							},
							{
								text: '与后端交互数据；'
							},
							{
								text: '负责公司的官网和微信公众号开发；'
							},
							{
								text: '根据UI设计还原页面1；'
							},
							{
								text: '与后端交互数据1；'
							},
							{
								text: '负责公司的官网和微信公众号开发1；'
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
		indictor: {
			type: String,
			default: () => {
				return '#FFFFFF';
			}
		}
	},
	data() {
		return {
			array: [],
			indicatorDots: false,
			swiperHeight: '',
			changeIndex:0
		};
	},
	created() {
		_self = this;
		this.$nextTick(() => {
			_self.array = _self.experienceArr;
			if (_self.array.length > 1) {
				_self.indicatorDots = true;
			}
			_self.getElementHeight('.exText',_self.changeIndex);
		});
	},
	methods: {
		getElementHeight(element,changeIndex) {
			setTimeout(() => {
				let query = uni.createSelectorQuery().in(this);
				query.select(element).boundingClientRect();
				query.exec(res => {
					console.log(res,"==>res");
					if (!res) {
						//如果没获取到，再调一次
						_self.getElementHeight();
					} else {
						// _self.swiperHeight = res[0].height+'px';
					_self.swiperHeight = _self.array[changeIndex].exsContent.length*res[0].height+120+'px';
						console.log(_self.swiperHeight);
					}
				});
			}, 20);
		},
		changeSwiperPage(e){
			_self.changeIndex = e.detail.current;
			_self.getElementHeight('.exText',_self.changeIndex);
		}
	}
};
</script>

<style scoped>
page {
	width: 100%;
	min-height: 100%;
	display: flex;
}
.resume-experience {
	/* border: 1px solid red; */
	margin-top: 20rpx;
}
.swiper-layout {
	padding: 0 10rpx;
}
.swiper-item {
	display: flex;
	flex-direction: column;
}
.swiper-item .name {
	width: 100%;
	text-align: center;
	font-weight: bold;
	font-size: 36rpx;
	margin-bottom: 40rpx;
}
.corporate-container {
	display: flex;
	align-items: center;
	/* border: 1px solid red; */
}
.swiper-img {
	width: 240rpx;
	display: flex;
	margin-right: 20rpx;
}
.swiper-content {
	flex: 1;
	font-size: 32rpx;
}
.swiper-content view:nth-child(2n) {
	margin: 10rpx 0;
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
