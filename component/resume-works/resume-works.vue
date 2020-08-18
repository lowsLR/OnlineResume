<template>
	<view class="resume-works">
		<wired-tabs selected="项目1" class="works-selected" :style="{ '--wired-item-selected-bg': selectedBg, '--wired-item-selected-color': selectedColor }">
			<wired-tab v-for="(item, index) in worksArr" :key="index" :name="item.selectedName">
				<view class="title-date">
					<view class="date">{{ item.worksDate }}</view>
					<view class="title">{{ item.worksTitle }}</view>
				</view>
				<view class="content">
					<view class="works-image" v-if="item.worksSrc">
						<wired-image :elevation="3" :src="item.worksSrc" :style="{ color: worImageColor, width: worWidth, height: worHeight }"></wired-image>
					</view>
					<view class="content-list">
						<view class="conten">{{ item.worksContent }}</view>
						<view class="list">
							<view v-for="(items, indexs) in item.worksList" :key="indexs">{{ indexs + 1 }}.{{ items }}</view>
						</view>
					</view>
				</view>
				<view class="works-link" v-if="item.worksLink">
					gitHub/gitee：
					<text @click="navto(item.worksLink)">{{ item.worksLink }}</text>
				</view>
				<view class="works-browse" v-if="item.worksBrowse">
					在线浏览：
					<text @click="navto(item.worksLink)">{{ item.worksBrowse }}</text>
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
	props: {
		selectedBg: {
			type: String,
			default: () => {
				return '';
			}
		},
		selectedColor: {
			type: String,
			default: () => {
				return '';
			}
		},
		worImageColor: {
			type: String,
			default: () => {
				return '';
			}
		},
		worWidth: {
			type: String,
			default: () => {
				return '300rpx';
			}
		},
		worHeight: {
			type: String,
			default: () => {
				return '300rpx';
			}
		},
		worksArr: {
			type: Array,
			default: () => {
				return [
					{
						selectedName: '项目1',
						worksTitle: 'uniapp',
						worksSrc: '../../static/uni-weChat-img.jpg',
						worksDate: '2020.07.10-2020.08.17',
						worksContent: 'uniapp是一个原创的xxx分享社区网友分享的xxx、图片大全,都是网友最珍贵的开心经历,xxxxx!',
						worksList: ['使用了uniapp混合开发', '使用了element UI插件', '使用了xxxx'],
						worksLink: 'https://uniapp.dcloud.io/',
						worksBrowse: 'https://uniapp.dcloud.io/'
					},
					{
						selectedName: '项目2',
						worksTitle: '小程序uni',
						worksSrc: '',
						worksDate: '2019.07.10-2019.08.17',
						worksContent: '小程序uni是一个原创的xxx分享社区网友分享的xxx、图片大全,都是网友最珍贵的开心经历,xxxxx!',
						worksList: ['使用了微信小程序开发', '使用了element UI插件', '使用了xxxx'],
						worksLink: 'https://uniapp.dcloud.io/',
						worksBrowse: ''
					},
					{
						selectedName: '项目3',
						worksTitle: 'uniH5',
						worksSrc: '../../static/uni-weChat-img.jpg',
						worksDate: '2020.07.10-2020.08.17',
						worksContent: 'uniapp是一个原创的xxx分享社区网友分享的xxx、图片大全,都是网友最珍贵的开心经历,xxxxx!',
						worksList: ['使用了uniapp混合开发', '使用了element UI插件', '使用了xxxx'],
						worksLink: 'https://uniapp.dcloud.io/',
						worksBrowse: 'https://uniapp.dcloud.io/'
					}
				];
			}
		}
	},
	methods: {
		navto(url) {
			// console.log(url);
			window.location.href = url;
		}
	}
};
</script>

<style scoped>
.works-selected {
	min-height: 600rpx;
	/* border: 1px solid red; */
	padding: 0 10rpx;
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
}
.content-list .conten {
	margin: 10rpx 0;
}
.list {
	display: flex;
	flex-direction: column;
}
.list > view {
	margin: 10rpx 0;
}
.works-link,
.works-browse {
	margin: 10rpx 0;
}
.works-link text,
.works-browse text {
	text-decoration: underline;
}
</style>
