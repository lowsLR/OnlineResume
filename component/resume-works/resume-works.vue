<template>
	<view class="resume-works">
		<wired-tabs selected="项目1" class="works-selected"
			:style="{ '--wired-item-selected-bg': selectedBg, '--wired-item-selected-color': selectedColor,color:selectedColor }">
			<wired-tab v-for="(item, index) in worksArr" :key="index" :name="item.selectedName">
				<view class="title">{{item.title}}</view>
				<view class="title-date">
					<view class="date">{{ item.worksDate }}</view>
					<view class="title">{{ item.worksTitle }}</view>
				</view>
				<view class="content">
					<view class="works-image" v-if="item.worksSrc">
						<wired-image :elevation="3" :src="item.worksSrc"
							:style="{ color: worImageColor, width: '300rpx', height: '300rpx' }"></wired-image>
					</view>
					<view class="content-list">
						<view class="conten">简述：{{ item.worksContent }}</view>
						<view class="list">
							<view v-if="!item.selectedName=='其他'">所责任务：</view>
							<view v-for="(items, indexs) in item.worksList" :key="indexs">{{items.text}}
							</view>
						</view>
					</view>
				</view>
				<view class="works-link" v-if="item.worksLink">
					gitHub/gitee：
					<text @click="navto(item.worksLink)">{{ item.worksLink }}</text>
				</view>
				<view class="works-browse" v-if="item.worksBrowse">
					在线浏览：
					<text @click="navto(item.worksBrowse)">{{ item.worksBrowse }}</text>
				</view>
			</wired-tab>
		</wired-tabs>
	</view>
	<!-- --wired-item-selected-bg 有线项目所选选项卡的背景色.
	--wired-item-selected-color 有线项目所选颜色所选选项卡的文本颜色.
	selected - 当前选定选项卡的名称
	name - 该选项卡的唯一标识符
	label - 要在选项卡中显示的文本。默认为name属性
	-->
</template>

<script>
	export default {
		name: 'resume-works',
		data() {
			return {
				selectedBg: this.RD[0][this.theme].selectedBg, //项目切换键的颜色
				worksArr: this.RD[3].worksArr, //项目数据
				worImageColor: this.RD[0][this.theme].worImageColor, //项目扫码图片线框颜色
				selectedColor: this.RD[0][this.theme].selectedColor, //项目切字体颜色
			}
		},
		methods: {
			navto(url) {
				// console.log(url);
				window.location.href = url;
			}
		},
	};
</script>

<style scoped>
	.works-selected {
		min-height: 600rpx;
		/* border: 1px solid red; */
		padding: 0 10rpx;
	}

	.works-selected .title {
		font-weight: 600;
		margin: 10rpx 0;
	}

	.works-selected:focus {
		border: none;
	}

	.title-date {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 36rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}

	.works-image {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content-list {
		margin-top: 20rpx;
		font-size: 32rpx;
	}

	.content-list .conten {
		margin: 10rpx 0;
	}

	.list {
		display: flex;
		flex-direction: column;
	}

	.list>view {
		margin: 10rpx 0;
	}

	.works-link,
	.works-browse {
		margin: 10rpx 0;
		font-size: 32rpx;
	}

	.works-link text,
	.works-browse text {
		text-decoration: underline;
	}
</style>
