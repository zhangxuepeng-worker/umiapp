import Mock from 'mockjs'
export default {
	"GET /api/lazy" :(req,res)=>{
		setTimeout(()=>{
			res.send(Mock.mock({
				"list|100":[{city:"@city","value|0-100":10,"type|0-3":2}]
			}))
		},2000)	
	}
}