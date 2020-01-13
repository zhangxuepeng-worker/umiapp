import Mock from 'mockjs'	
export default {
	"GET /api/tags": Mock.mock({
		'list|100': [{ city: '@city', 'value|1-100': 50, 'type|0-2': 1,isShow:Mock.Random.boolean() }],
	})
}