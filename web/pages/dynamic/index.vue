<template>
	<view class="dynamic">
		<uni-fab :pattern="pattern" horizontal="right" vertical="bottom" :popMenu="false"></uni-fab>
		<view class="content">
			<scroll-view class="scroll-view" scroll-y enable-flex>
				<uni-card-bk
					thumbnail="/static/icons/my.png"
					nickname="仰起的星光"
					dateTime="09/14  18:24"
					text="晚上下了一天的雨，淅淅沥沥 。我在想，什么时候能看到自己的未来，他在哪儿？"
					v-for="item in 8"
					:key="item"
				></uni-card-bk>
			</scroll-view>
		</view>
		
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			pattern: {
				color: '#FFFFFF',
				buttonColor:'rgba(0, 0, 0,.5)',
				// width:'50rpx'
			}
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss">
.dynamic {
	width: 750rpx;
	height: 100vh;
	> .content {
		// position: fixed;
		// left: 0;
		// bottom: 0;
		width: 750rpx;
		.scroll-view {
			width: 100%;
			height: 100%;
			.uni-card-bk {
				margin-top: 16rpx;
			}
		}
	}
}
</style>
