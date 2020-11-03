<template>
	<navigator :url="url" class="search">
		<icon class="icon" type="search" :size="iconSize" :color="iconColor"></icon>
		<text>{{ placeholder }}</text>
	</navigator>
</template>

<script>
export default {
	name: 'UniSearchBk',
	props: {
		url: {
			type: String,
			default: '/pages/search/index'
		},
		placeholder: {
			type: String,
			default: ''
		},
		iconSize: {
			type: [Number, String],
			default: '17'
		},
		iconColor: {
			type: String,
			default: '#d6d6d6'
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.search {
	margin: 0 auto;
	padding: 12rpx 0;
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
	.icon {
		margin-left: 12rpx;
	}
	text {
		color: #b5b5b5;
		margin-left: 17rpx;
	}
}
</style>
