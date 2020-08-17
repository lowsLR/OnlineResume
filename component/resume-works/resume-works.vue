<template>
	<view class="resume-works">
		<wired-tabs selected="项目1" class="works-selected" :style="{ '--wired-item-selected-bg': selectedBg, '--wired-item-selected-color': selectedColor }">
			<wired-tab v-for="(item,index) in worksArr" :key="index"  :name="item.selectedName">
				<view class="title-date">
					<view class="title">{{item.worksTitle}}</view>
					<view class="date">{{item.worksDate}}</view>
				</view>
				<view class="content">
					<view class="works-image" v-if="item.worksSrc">
						<wired-image
							:elevation="index >= 5 ? 5 : index"
							:src="item.worksSrc"
							class="swiper-img"
							:style="{ color: exImageColor, width: exWidth, height: xeHeight }"
						></wired-image>
					</view>
					<view class="content-list">
						<view class="conten">{{item.worksContent}}</view>
						<view class="list">
							<view v-for="(items,indexs) in item.worksList">{{indexs+1}}.{{items}}</view>
						</view>
					</view>
				</view>
				<view class="works-link" v-if="item.worksLink">gitHub/gitee：{{item.worksLink}}</view>
				<view class="works-browse" v-if="item.worksBrowse">>在线浏览：{{item.worksBrowse}}</view>
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
		worksArr: {
			type: Array,
			default: () => {
				return [
					{
						selectedName:'项目1',
						worksTitle: 'uni糗事百科',
						worksSrc: 'https://www.gstatic.com/webp/gallery/4.sm.jpg',
						worksDate: '2020.07.10-2020.08.17',
						worksContent: 'uni糗事百科是一个原创的糗事笑话分享社区,糗百网友分享的搞笑段子、搞笑图片大全,都是糗友最珍贵的开心经历,爆笑糗事笑话只在糗事百科!',
						worksList: ['使用了uniapp混合开发', '使用了element UI插件', '使用了xxxx'],
						worksLink: 'https://uniapp.dcloud.io/',
						worksBrowse: 'https://uniapp.dcloud.io/'
					},
					{
						selectedName:'项目2',
						worksTitle: '小程序糗事百科',
						worksSrc: '',
						worksDate: '2019.07.10-2019.08.17',
						worksContent: '小程序糗事百科是一个原创的糗事笑话分享社区,糗百网友分享的搞笑段子、搞笑图片大全,都是糗友最珍贵的开心经历,爆笑糗事笑话只在糗事百科!',
						worksList: ['使用了微信小程序开发', '使用了element UI插件', '使用了xxxx'],
						worksLink: 'https://uniapp.dcloud.io/',
						worksBrowse: ''
					}
				];
			}
		}
	}
};
</script>

<style scoped>
.works-selected {
	/* --wired-item-selected-bg:red;
		--wired-item-selected-color:#ffff00; */
}
</style>
