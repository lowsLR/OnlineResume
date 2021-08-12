<template>
	<view class="resume-experience">
		<view class="line">
			<wired-divider class="lineColor" :style="{ color: lineColor }"></wired-divider>
		</view>
		<swiper :indicator-dots="indicatorDots" :autoplay="false" :indicator-active-color="indictor"
			:style="{height:swiperHeight}" @change="changeSwiperPage">
			<swiper-item v-for="(item, index) in array" :key="index">
				<view class="swiper-item">
					<view class="name">{{ item.exName }}</view>
					<view class="exTime">{{item.exTime}}</view>
					<view class="corporate-container">
						<view class="corporate">
							<wired-image :elevation="index >= 5 ? 5 : index" :src="item.exSrc" class="swiper-img"
								:style="{ color: exImageColor}"></wired-image>
							<image src="../../static/white.jpg" class="imgBg"></image>
						</view>
						<view class="swiper-content">
							<view class="exContenxtTitle">工作内容:</view>
							<view v-for="(items, indexs) in item.exsContent" :key="indexs" class="exText"
								v-if="items.text">{{ items.text }}</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="line">
			<wired-divider class="lineColor" :style="{ color: lineColor }"></wired-divider>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'resume-experience',
		props:['indictor','lineColor','exImageColor'],
		data() {
			return {
				indicatorDots: false, //轮播图小圆点
				swiperHeight: '500rpx', //轮播图默认高度
				changeIndex: 0, //轮播图默认下标
				array: this.RD[2].array,		
			};
		},
		created() {
			this.$nextTick(() => {
				if (this.array.length > 1) {
					this.indicatorDots = true;
				}
				this.getElementHeight();
			});
		},
		methods: {
			getElementHeight() {
				setTimeout(() => {
					const query = uni.createSelectorQuery().in(this);
					query.selectAll('.swiper-content').boundingClientRect(data => {
						// console.log("得到布局位置信息" + JSON.stringify(data));
						this.swiperHeight = data[this.changeIndex].height + 120 + 'px';
						// console.log(this.swiperHeight, "==>this.swiperHeight")
					}).exec();
				}, 20)
			},
			changeSwiperPage(e) {
				this.changeIndex = e.detail.current;
				this.getElementHeight();
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
		padding: 10rpx;
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
		padding: 0 10rpx;
	}

	.swiper-img {
		width: 240rpx;
		height: 200rpx;
		display: flex;
		margin-right: 20rpx;
	}

	.corporate {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.imgBg {
		width: 230rpx;
		height: 195rpx;
		position: absolute;
		z-index: -10;
		left: 20rpx;
		display: block;
	}

	.swiper-content {
		flex: 1;
		font-size: 32rpx;
		line-height: 50rpx;
	}

	.exTime {
		/* border: 1px solid red; */
		text-align: right;
		/* margin-top: -20rpx; */
		margin-bottom: 20rpx;
		font-size: 28rpx;
		padding-right: 20rpx;
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
