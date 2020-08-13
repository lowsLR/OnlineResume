<template>
	<view class="resume-header">
		<view class="brief-introduction">
			<view class="brief-l brief">
				<wired-fab :class="[sex == 'female' ? 'female' : 'male']" :style="{ '--wired-fab-bg-color': sexColor }">
					<view class="maringleft">{{ sex }}</view>
				</wired-fab>
				<wired-fab class="age" :style="{ '--wired-fab-bg-color': ageColor }">
					<view class="maringleft">{{ age }}</view>
				</wired-fab>
				<wired-fab class="healthy" :style="{ '--wired-fab-bg-color': healthyColor }">
					<view class="maringleft">{{ healthy }}</view>
				</wired-fab>
			</view>
			<view class="brief-img"><image src="../../static/logo.png" mode=""></image></view>
			<view class="brief-r brief">
				<wired-fab class="nation" :style="{ '--wired-fab-bg-color': nationColor }">
					<view class="maringleft">{{ nation }}</view>
				</wired-fab>
				<wired-fab class="place" :style="{ '--wired-fab-bg-color': placeColor }">
					<view class="maringleft">{{ place }}</view>
				</wired-fab>
				<wired-fab class="education" :style="{ '--wired-fab-bg-color': educationColor }">
					<view class="maringleft">{{ education }}</view>
				</wired-fab>
			</view>
		</view>
		<!-- 简介 -->
		<view class="brief-content">
			<view class="example-introduction">{{ exampleInt }}</view>
			<view class="line"><wired-divider class="lineColor" :style="{ color: lineColor }"></wired-divider></view>
			<view class="example-title">{{ exampleTit }}</view>
			<view class="example-content">{{ exampleCon }}</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'resume-header',
	props: {
		sex: {
			type: String,
			default: () => {
				return '性别';
			}
		},
		sexColor: {
			type: String,
			default: () => {
				return '';
			}
		},
		age: {
			type: String,
			default: () => {
				return '年龄';
			}
		},
		ageColor: {
			type: String,
			default: () => {
				return '';
			}
		},
		healthy: {
			type: String,
			default: () => {
				return '健康状态';
			}
		},
		healthyColor: {
			type: String,
			default: () => {
				return '';
			}
		},
		nation: {
			type: String,
			default: () => {
				return '民族';
			}
		},
		nationColor: {
			type: String,
			default: () => {
				return '';
			}
		},
		place: {
			type: String,
			default: () => {
				return '籍贯地区';
			}
		},
		placeColor: {
			type: String,
			default: () => {
				return '';
			}
		},
		education: {
			type: String,
			default: () => {
				return '学历';
			}
		},
		educationColor: {
			type: String,
			default: () => {
				return '';
			}
		},
		exampleInt: {
			type: String,
			default: () => {
				return '纵然前端虐我千百遍，我依然待ta如初恋';
			}
		},
		exampleTit: {
			type: String,
			default: () => {
				return '我叫小白,是一名前端工程师。';
			}
		},
		exampleCon: {
			type: String,
			default: () => {
				return '虽然只有一年的工作经验，但使用过vue开发过pc端，小程序商城，uni混合开发app，bootstrap制作官网。目前正在学习cocos creator制作2d游戏。';
			}
		},
		lineColor: {
			type: String,
			default: () => {
				return '#B1B1B1';
			}
		}
	}
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
	-webkit-transition: width 1s; /* Safari */
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
}
.maringleft {
	margin-left: -12rpx;
	margin-top: -16rpx;
}
.male,
.female,
.age,
.healthy,
.nation,
.place,
.education {
	color: #ffffff;
	--wired-icon-size: 40rpx;
	padding: 0;
	margin-left: 0;
	width: 140rpx;
	position: absolute;
}
.male {
	--wired-fab-bg-color: #0dcced;
}
.female {
	--wired-fab-bg-color: #f59;
}
.male,
.female {
	top: 10rpx;
	right: -40rpx;
}
.age {
	--wired-fab-bg-color: #059a79;
	top: 150rpx;
	right: 20rpx;
}
.healthy {
	--wired-fab-bg-color: #02cb9f;
	--wired-icon-size: 30rpx;
	top: 300rpx;
	right: -20rpx;
}
.nation {
	--wired-fab-bg-color: #bc1c41;
	top: 10rpx;
	left: -30rpx;
}
.place {
	--wired-fab-bg-color: #dea681;
	--wired-icon-size: 30rpx;
	top: 150rpx;
	left: 20rpx;
}
.education {
	--wired-fab-bg-color: #f3715c;
	top: 320rpx;
}
.brief-content {
	margin-top: 60rpx;
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
}
</style>
