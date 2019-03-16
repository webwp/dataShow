import { getOrderToday,testss } from "@/api/orderToday"

const orderToday = {
    state:{
        orderToday:{}
    },
    mutations:{
        GET_ORDERTODAY:(state,res)=>{
           
           state.orderToday = res
        }
    },
    actions:{
        getOrderToday({ commit }){
            return new Promise((resolve,rejects) => {
                getOrderToday().then(response=>{
                    const res = response.data;
                    //console.log("orderToday请求后台数据",res)
                    if(res.result == 'SUCCESS'){
                        var obj = {}
                        res.data.forEach(function(v,i){
                           obj[v.city] = v
                        })
                        commit("GET_ORDERTODAY",obj);
                    }
                })
            })
        },
        testss({commit},params){

            return new Promise((resolve,rejects) =>{
                testss(params).then(response=>{
                    const res = response.data
                })
            })
        }
    }
}

export default orderToday