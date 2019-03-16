import { getOrder } from "@/api/order"



const other = {
	state:{
		order:[{
				"turnover": 109392,
				"volume": 516,
				"materialCost": 0,
				"timeFee": 0,
				"order": [{
						"name": "全国",
						"number": 1549
					},
					{
						"name": "钦州",
						"number": 349
					},
					{
						"name": "北海",
						"number": 337
					},
					{
						"name": "柳州",
						"number": 300
					},
					{
						"name": "其他城市",
						"number": 275
					}
				],
				"business": [{
						"businessrderType": "喷漆",
						"businessrderTypePercent": 428
					},
					{
						"businessrderType": "换火花塞",
						"businessrderTypePercent": 254
					},
					{
						"businessrderType": "洗车",
						"businessrderTypePercent": 229
					},
					{
						"businessrderType": "换玻璃",
						"businessrderTypePercent": 207
					},
					{
						"businessrderType": "补胎",
						"businessrderTypePercent": 177
					},
					{
						"businessrderType": "修空调",
						"businessrderTypePercent": 122
					},
					{
						"businessrderType": "其它",
						"businessrderTypePercent": 119
					}
				],
				"autoParts": [{
						"name": "坐垫",
						"number": 4823
					},
					{
						"name": "玻璃",
						"number": 4631
					},
					{
						"name": "机滤",
						"number": 4574
					},
					{
						"name": "后视镜",
						"number": 4253
					},
					{
						"name": "机油",
						"number": 3745
					},
					{
						"name": "雨刮器",
						"number": 3520
					},
					{
						"name": "变速箱",
						"number": 3470
					},
					{
						"name": "保护膜",
						"number": 2804
					},
					{
						"name": "轮胎",
						"number": 2557
					},
					{
						"name": "空调",
						"number": 2416
					}
				]
			},
			"2018"
		]
	},
	mutations:{
		GET_ORDER:(state,res) => {
			state.order = res

			//console.log("order后台数据",res)
		}
	},
	actions:{
		getOrder({ commit }){
			return new Promise((resolve,rejects) => {
				getOrder().then(response => {
                    //console.log("order后台数据",response.data)
                    if(response.data.result == 'SUCCESS'){
                    	const res = response.data.data;
                        commit("GET_ORDER",res)
                    }
                    
				})
			})
		}
	}
}

export default other