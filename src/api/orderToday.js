import request from "@/api/utils/request"
import configApi from "@/api/utils/configApi"

export function getOrderToday(){
    return request({
        url:configApi.baseUrl + "/orderToday",
        method:"post",
    })
}

export function testss(data){
	return request({
		url:configApi.baseUrl + '/v1',
		method:"post",
		data
	})
}