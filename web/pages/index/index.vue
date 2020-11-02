<template>
	<view class="index">
		<!-- 轮播图 -->
		<uni-swiper-dot :info="swiper_data" :current="swiper_current" mode="dot" :dotsStyles="dots_styles">
			<swiper class="swiper-wraper" @change="swiperChange">
				<swiper-item v-for="(item, index) in swiper_data" :key="index">
					<view class="swiper-item">{{ item.content }}</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>

		<view class="section1">
			<navigator url="/pages/search/index" class="search">
				<uni-icons type="search" size="17.5" color="#d6d6d6"></uni-icons>
				<text>高三学生如何短时间内提分</text>
			</navigator>
			<view class="item-group">
				<navigator url="/pages/search/index" class="item" v-for="item in 4" :key="item">
					<image src="/static/icons/dynamic_o.png" mode="widthFix"></image>
					<text>去考证</text>
				</navigator>
			</view>
		</view>

		<view class="section2">
			<scroll-view class="main" scroll-x><navigator url="/pages/search/index" class="item" v-for="item in 2" :key="item"></navigator></scroll-view>
		</view>

		<view class="section3"></view>

		<view class="section4">
			<view class="title">热门考证</view>
			<view class="item-group"><view class="item" v-for="item in 4" :key="item"></view></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 轮播图数据
			swiper_data: [
				{
					content: '内容 A'
				},
				{
					content: '内容 B'
				},
				{
					content: '内容 C'
				}
			],
			swiper_current: 0, // 默认显示的轮播图
			dots_styles: {
				// 分页器样式
				border: 'none',
				selectedBorder: 'none',
				backgroundColor: '#E6E6E6',
				selectedBackgroundColor: '#00DEFF'
			}
		};
	},
	onLoad() {},
	methods: {
		// 轮播图切换
		swiperChange(e) {
			this.swiper_current = e.detail.current;
		}
	}
};
</script>

<style lang="scss">
.index {
	// background-color: #f6f7fb;
	.swiper-wraper {
		.swiper-item {
			width: 750rpx;
			height: 310rpx;
			background-color: #efefef;
		}
	}

	.section1 {
		padding: 16rpx 0;
		width: 100%;
		background-color: #ffffff;
		.search {
			margin: 0 auto;
			padding: 12rpx 6rpx;
			width: 634rpx;
			height: 58rpx;
			display: flex;
			align-items: center;
			background-color: #ffffff;
			font-size: 24rpx;
			border: 1rpx solid #e6e6e6;
			border-radius: 8rpx;
			box-sizing: border-box;
			box-shadow: 0 6rpx 10rpx 0 rgba($color: #000000, $alpha: 0.04);

			text {
				color: #b5b5b5;
				margin-left: 17rpx;
			}
		}

		.item-group {
			margin-top: 7rpx;
			padding: 20rpx 0;
			width: 100%;
			display: flex;
			justify-content: space-around;
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;

				image {
					width: 82rpx;
				}

				text {
					margin-top: 12.8rpx;
					color: #727070;
					font-size: 20rpx;
				}
			}
		}
	}

	.section2 {
		margin-top: 10rpx;
		padding: 20rpx;
		background-color: #ffffff;

		.main {
			width: 710rpx;
			white-space: nowrap; // 不设置不换行 scroll-x不生效
			.item {
				margin: 0 10rpx;
				display: inline-block;
				flex-basis: 335rpx;
				width: 335rpx;
				height: 171rpx;
				border-radius: 10rpx;
				background-color: #4cd964;
			}
		}
	}

	.section3 {
		margin-top: 10rpx;
		width: 100%;
		height: 40.4rpx;
		background-color: #ffffff;
	}

	.section4 {
		margin: 25.6rpx auto;
		width: 690rpx;
		.title {
			border-left: 5rpx solid #0d91ff;
			font-size: 28rpx;
			color: #0d91ff;
			padding-left: 9rpx;
		}

		.item-group {
			margin-top: 20rpx;
			border-top: 2rpx solid #f0f0f0;
			padding-top: 17.8rpx;
			width: 100%;
			.item {
				margin-bottom: 23rpx;
				width: 100%;
				height: 250rpx;
				background-color: #ffffff;
				border-radius: 15rpx;
				box-shadow: 0 5rpx 10rpx 17% rgba($color: #000000, $alpha: 0.05);
			}
		}
	}
}
</style>
