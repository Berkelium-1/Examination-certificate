<template>
	<view class="information">
		<!-- 轮播图 -->
		<uni-swiper-dot :info="swiper_data" :current="swiper_current" mode="dot" :dotsStyles="dots_styles">
			<swiper class="swiper-wraper" @change="swiperChange">
				<swiper-item v-for="(item, index) in swiper_data" :key="index">
					<view class="swiper-item">{{ item.content }}</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-search-bk placeholder="高三学生如何短时间内提分"></uni-search-bk>
		<view class="content">
			<view class="title">热门资讯</view>
			<view class="item-group">
				<view class="item" v-for="item in 4" :key="item">
					<image src="../../static/icons/info_o.png" mode="heightFix"></image>
					<view class="main">
						<text class="name">打好防控金融风险攻坚战 全面推进 银行业改革开放打好防控金融风险攻坚战 全面推进 银行业改革开放</text>
						<text class="introduce">由各种物质组成的巨型球状天体，叫做星球由各种物质组成的巨型球状天体，叫做星球由各种物质组成的巨型球状天体，叫做星球</text>
						<view class="info">
							转载自：
							<image src="../../static/icons/dynamic.png" mode="widthFix"></image>
							简七理财 丨 53分钟前
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
.information {
	.swiper-wraper {
		margin-bottom: 16rpx;
		.swiper-item {
			width: 750rpx;
			height: 310rpx;
			background-color: #efefef;
		}
	}
	.content {
		margin-top: 18rpx;
		>.title {
			border-left: 5rpx solid #0d91ff;
			font-size: 28rpx;
			color: #0d91ff;
			padding-left: 16rpx;
			margin-left: 32rpx;
		}

		>.item-group {
			margin-top: 15.6rpx;
			padding-top: 17.8rpx;
			padding-left: 30rpx;
			width: 750rpx;
			background-color: #ffffff;
			>.item {
				width: 720rpx;
				height: 244rpx;
				border-bottom: 1rpx solid #eeeeee;
				display: flex;
				align-items: center;
				> image {
					width: auto;
					height: 170rpx;
				}
				>.main {
					width: 487rpx;
					height: 170rpx;
					margin-left: 25rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					>.name {
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						font-size: 32rpx;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					>.introduce {
						font-size: 24rpx;
						color: #a9a9a9;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}

					>.info {
						font-size: 24rpx;
						color: #888888;
						display: flex;
						align-items: center;
						>image {
							width: 28rpx;
							height: 28rpx;
							border-radius: 50%;
							margin: 0 11rpx;
						}
					}
				}
			}
		}
	}
}
</style>
