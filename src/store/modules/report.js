import { getReport } from "@/api/report"

const report = {
	state:{
		report:[{
			"reportCount": 10,
			"faultReportCount": 20,
			"brandDiagnost": [{
					"brand": "本田",
					"faultCount": 497,
					"normalReportCount": 363
				},
				{
					"brand": "宝马",
					"faultCount": 489,
					"normalReportCount": 415
				},
				{
					"brand": "大众",
					"faultCount": 478,
					"normalReportCount": 277
				},
				{
					"brand": "现代",
					"faultCount": 417,
					"normalReportCount": 564
				},
				{
					"brand": "马自达",
					"faultCount": 410,
					"normalReportCount": 435
				}
			],
			"systemDiagnost": [{
					"syatem": "发动机",
					"fault": 558
				},
				{
					"syatem": "空调系统",
					"fault": 439
				},
				{
					"syatem": "滑动天窗",
					"fault": 367
				},
				{
					"syatem": "ESP",
					"fault": 345
				},
				{
					"syatem": "安全气囊",
					"fault": 324
				}
			]
		}]
	},
	mutations:{
		GET_REPORT:(state,res) => {
			state.report = res
		}
	},
	actions:{
		getReport({ commit }){
			return new Promise(( resolve,rejects ) => {
				getReport().then(response => {

					if(response.data.result == 'SUCCESS'){
						//const res = response.data.
					    commit("GET_REPORT",response.data.data)
					}
					
				})
			})
		}
	}
}

export default report