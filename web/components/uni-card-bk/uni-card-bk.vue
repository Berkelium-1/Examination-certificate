<template>
	<view class="uni-card-bk">
		<view class="header">
			<image :src="thumbnail" mode="widthFix"></image>
			<view class="info">
				<text class="nickname">{{nickname}}</text>
				<text class="time">{{dateTime}}</text>
			</view>
		</view>
		<view class="content">
			<view class="text">
				{{text}}
			</view>
		</view>
		<view class="footer">
			<view class="key">
				<uni-icons class="icon" type="redo" color="#CCCCCC"></uni-icons>转发
			</view>
			<view class="key">
				<uni-icons class="icon" type="chat" color="#CCCCCC"></uni-icons>评论
			</view>
			<view class="key">
				<uni-icons class="icon" type="hand-thumbsup" color="#CCCCCC"></uni-icons>赞
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'UniCardBk',
	props: {
		thumbnail:{// 头像
			type:String,
			default:''
		},
		nickname:{// 昵称
			type:String,
			default:''
		},
		dateTime:{// 日期时间
			type:String,
			default:''
		},
		text:{// 文本内容
			type:String
		}
		
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.uni-card-bk {
	width: 100%;
	background-color: #FFFFFF;
	.header {
		margin: 0 auto;
		width: 690rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		image{
			width: 60rpx;
			height: 60rpx;
		}
		.info{
			margin-left: 24rpx;
			display: flex;
			flex-direction: column;
			.nickname{
				font-size: 28rpx;
				font-weight: bold;
				color: #333333;
			}
			.time{
				font-size: 20rpx;
				color: #CCCCCC;
			}
		}
	}
	
	.content{
		margin: 0 auto;
		width: 690rpx;
		.text{
			font-size: 28rpx;
			padding-bottom: 20rpx;
		}
	}
	
	.footer{
		margin: 0 auto;
		width: 690rpx;
		display: flex;
		padding: 20rpx 0;
		>.key{
			flex: 1;
			font-size: 19rpx;
			color: #CCCCCC;
			display: flex;
			justify-content: center;
			align-items: center;
			
			.icon{
				margin-right: 15rpx;
				font-size: 15rpx;
			}
		}
	}
}
</style>
