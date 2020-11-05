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
			<uni-search-bk placeholder="高三学生如何短时间内提分"></uni-search-bk>
			<view class="item-group">
				<navigator url="/pages/search/index" class="item" v-for="item in 4" :key="item">
					<image :src="'/static/img/' + (item + 1) + '.png'" mode="widthFix"></image>
					<text>去考证</text>
				</navigator>
			</view>
		</view>

		<view class="section2">
			<scroll-view class="main" scroll-x>
				<navigator url="/pages/search/index" class="item" v-for="item in 2" :key="item"></navigator>
			</scroll-view>
		</view>

		<view class="section3"></view>

		<view class="section4">
			<view class="title">热门考证</view>
			<view class="item-group">
				<view class="item" v-for="item in 4" :key="item">
					<view class="item-info">
						<view class="item-title">计算机二级</view>
						<view class="label">
							<text>报名时间:</text>
							<text>2020年07月14日-08月14日24:00</text>
						</view>
						<view class="label">
							<text>考试时间:</text>
							<text>2020年08月14日 周六上午9:00</text>
						</view>
						<view class="label">
							<text>证书标签:</text>
							<view class="label-list"><view v-for="v in 4" :key="v">应用</view></view>
						</view>
					</view>
					<view class="item-btn">
						<view class="btn">
							<view>立即</view>
							<view>报名</view>
						</view>
					</view>
				</view>
			</view>
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
		> .item-group {
			margin-top: 7rpx;
			padding: 20rpx 0;
			width: 100%;
			display: flex;
			justify-content: space-around;
			> .item {
				display: flex;
				flex-direction: column;
				align-items: center;

				image {
					width: 128rpx;
				}

				text {
					// margin-top: 12.8rpx;
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
		> .title {
			border-left: 5rpx solid #0d91ff;
			font-size: 28rpx;
			color: #0d91ff;
			padding-left: 9rpx;
		}

		> .item-group {
			margin-top: 20rpx;
			border-top: 2rpx solid #f0f0f0;
			padding-top: 17.8rpx;
			width: 100%;
			> .item {
				margin-bottom: 23rpx;
				width: 100%;
				height: 250rpx;
				background-color: #ffffff;
				border-radius: 15rpx;
				box-shadow: 0 5rpx 10rpx 17% rgba($color: #000000, $alpha: 0.05);
				display: flex;
				align-items: center;
				> .item-info {
					margin-left: 30rpx;
					> .item-title {
						margin-bottom: 5rpx;
						font-size: 32rpx;
						font-weight: bolder;
						color: #000000;
					}
					.label {
						margin-top: 20rpx;
						font-size: 24rpx;
						color: #9b9ba3;
						text {
							margin-right: 10rpx;
						}

						> .label-list {
							display: inline-flex;
							view {
								padding: 5rpx 15rpx;
								margin-right: 15rpx;
								color: #6adea0;
								font-size: 22rpx;
								border: 1rpx solid #6adea0;
								border-radius: 6rpx;
							}
						}
					}
				}

				> .item-btn {
					margin: 0 auto;

					.btn {
						width: 94rpx;
						height: 94rpx;
						font-size: 24rpx;
						border-radius: 50%;
						color: #ffffff;
						background-color: #fa974c;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						&:active {
							opacity: 0.6;
						}
					}
				}
			}
		}
	}
}
</style>
