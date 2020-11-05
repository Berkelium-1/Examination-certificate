<template>
	<view class="roll-text">
		<scroll-view class="scroll-view" :scroll-into-view="view_id" scroll-y scroll-with-animation>
			<view v-for="(v, i) in textGroup" :key="v" :id="'text_' + i">{{ v }}</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		// 要轮播的文字数组
		textGroup: {
			type: Array
		},
		// 速度 单位ms
		speed: {
			type: [String, Number],
			default: 2000
		}
	},
	data() {
		return {
			// 播放内容的元素id
			view_id: '',
			// 定时器
			timer: null
		};
	},
	created() {
		// 开始播放
		this.roll();
	},
	methods: {
		// 走马灯
		roll() {
			let speed = parseInt(this.speed);
			let i = 0;
			this.timer = setInterval(() => {
				this.view_id = 'text_' + i;
				i++;
				if(i >= this.textGroup.length) i = 0;
			}, speed);
		}
	},
	destroyed() {
		clearInterval(this.timer);
	}
};
</script>

<style lang="scss">
.roll-text {
	width: 100%;
	height: 100%;
	.scroll-view {
		width: 100%;
		height: 100%;

		view {
			display: flex;
			align-items: center;
			height: 100%;
		}
	}
}
</style>
