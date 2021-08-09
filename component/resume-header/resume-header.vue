<!-- 简介 -->
<template>
	<view class="resume-header">
		<view class="brief-introduction">
			<view class="brief-l brief">
				<view class="briefContent">
					<view :class="[sex == '男' ? 'male' : 'female','maringleft']">{{ sex }}</view>
				</view>
				<view class="briefContent">
					<view class="maringleft marriage">{{marriage}}</view>
				</view>
				<view class="briefContent">
					<view class="maringleft age">{{ age }}</view>
				</view>
			</view>
			<view class="brief-img">
				<image :src="headerImg" mode=""></image>
			</view>
			<view class="brief-r brief">
				<view class="briefContent">
					<view class="maringleft place">{{ place }}</view>
				</view>
				<view class="briefContent">
					<view class="maringleft statu">{{statu}}</view>
				</view>
				<view class="briefContent">
					<view class="maringleft education">{{ education }}</view>
				</view>
			</view>
		</view>
		<!-- 简介 -->
		<view class="brief-content">
			<view class="example-introduction">{{ exampleInt }}</view>
			<view class="line">
				<wired-divider class="lineColor" :style="{ color: lineColor }"></wired-divider>
			</view>
			<view class="example-title">{{ exampleTit }}</view>
			<view class="example-content">{{ exampleCon }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'resume-header',
		data() {
			return {
				headerImg: this.RD[1].headerImg, //头像路径
				sex: this.RD[1].sex, //性别
				age: this.RD[1].age, //年龄
				marriage: this.RD[1].marriage, //是否结婚
				place: this.RD[1].place, //现住址
				statu: this.RD[1].statu, //是否已离职
				education: this.RD[1].education, //学历
				exampleInt: this.RD[1].exampleInt, //标题
				exampleTit: this.RD[1].exampleTit, //职位
				exampleCon: this.RD[1].exampleCon, //自我简述
				lineColor: this.RD[0].lineColor, //文字之间段落线条
			}
		},
	};
</script>

<style scoped>
	.brief-introduction {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		/* border: 1px solid red; */
		min-height: 400rpx;
		margin-top: 10rpx;
	}

	.brief-introduction .brief-img {
		width: 200rpx;
		height: 200rpx;
		border: 1rpx solid;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5rpx;
		border-radius: 50%;
		overflow: hidden;
	}

	.brief-introduction .brief-img image {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 50%;
		transition: width 2s;
		-webkit-transition: width 1s;
		/* Safari */
	}

	.brief-img image:hover {
		width: 10rpx;
	}

	.brief {
		display: flex;
		flex-direction: column;
		/* border: 1px solid red; */
		position: relative;
		width: 200rpx;
		min-height: 400rpx;
		align-items: center;
		padding: 15rpx 0;
	}

	.briefContent {
		/* border: 1px solid red; */
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
	}

	.maringleft {
		border-radius: 50%;
		width: 90rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		background: rgba(255, 255, 255, 0.2);
		box-shadow: 1px 1px 0 0px #f2f2f2;
		font-size: 32rpx;
	}

	.maringleft:hover {
		font-size: 33rpx;
		animation: bubble 1s ease-in-out 1;
		webkit-animation: bubble 1s ease-in-out 1;
	}

	@keyframes bubble {
		0% {
			margin-top: 0;
		}

		25% {
			margin-top: 10rpx;
		}

		75% {
			margin-top: -10rpx;
		}

		100% {
			margin-top: 0rpx;
		}
	}

	@-webkit-keyframes bubble {
		0% {
			margin-top: 0;
		}

		25% {
			margin-top: 10rpx;
		}

		75% {
			margin-top: -10rpx;
		}

		100% {
			margin-top: 0rpx;
		}
	}

	.female {
		color: #f59;
	}

	.male {
		color: #55AAFF;
	}

	.male,
	.female,
	.age {
		margin-right: -120rpx;
	}

	.place,
	.education {
		margin-left: -120rpx;
	}

	.brief-content {
		margin-top: 60rpx;
		padding: 0 10rpx;
	}

	.example-introduction {
		text-align: center;
		font-size: 40rpx;
		font-weight: 600;
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
		width: 85%;
	}

	.example-title,
	.example-content {
		text-indent: 2em;
		font-size: 36rpx;
		font-weight: 400;
		line-height: 50rpx;
		padding: 0 10rpx;
	}
</style>
