import { getUserInfo } from "@/api/user"

const user = {
    state:{
        user:[
                {
                    "province": "广西",
                    "vehicleRepairPlantCount": 430,
                    "carOwnerCount": 781,
                    "vehicleCount": 1046,
                    "childItem": [
                    ]
                },
                {
                    "province": "北京",
                    "vehicleRepairPlantCount": 111,
                    "carOwnerCount": 222,
                    "vehicleCount": 333,
                    "childItem":[]
                },
                {
                    "province": "全国",
                    "vehicleRepairPlantCount": 1817,
                    "carOwnerCount": 3104,
                    "vehicleCount": 3939,
                    "childItem":[]
                }
        ],
        city:'',

    },
    mutations:{
        GET_USER:(state,res)=>{
           //console.log("请求成功，数据处理结果：",res)
           state.user=res
        },
        SET_CITY:(state,city) => {
           state.city = city
        }
    },
    actions:{
        getUserInfo({ commit }){
            return new Promise((resolve,rejects) => {
                getUserInfo().then(response=>{
                    const res = response.data;
                    //console.log("请求后台数据",res)
                    if(res.result == 'SUCCESS'){
                        var obj = {},arr=[];
                        res.data.forEach(function(v,i){
                           obj[v.province] = v
                        })
                        commit("GET_USER",obj);
                    }
                })
            })
        },
        setCity({ commit },city){
            //console.log("提交的城市数据：",city)
            commit("SET_CITY",city);
        }
    }
}

export default user