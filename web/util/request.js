const BASE_URL = 'http://120.77.254.145';
module.exports = (obj) => {
	// 默认请求为 get
	const method = obj.method || 'GET';
	// 判断是否为完整 api
	const url = /^http(s?):\/\//.test(obj.url) ? obj.url : BASE_URL + obj.url;
	// 判断是否有传参
	const data = obj.data || {};
	// 返回 Promise 对象
	return new Promise((resolve, reject) => {
		uni.request({
			method,
			url,
			data,
			success: (res) => {
				if (res.statusCode === 200) {
					resolve(res);
				} else {
					console.log('请求出错, 状态码: ', res.statusCode);
					return uni.showToast({
						title: `请求出错, 状态码: ${res.statusCode}`,
						icon: 'none'
					})
				}
			},
			fail: (res) => {
				uni.showToast({
					title: `接口调用失败`,
					icon: 'none'
				})
				reject(res);
			}
		})
	});
}