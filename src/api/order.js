import request from "@/api/utils/request"
import configApi from "@/api/utils/configApi"

export function getOrder(){
	return request({
		url:configApi.baseUrl + "/order",
		method:"post"
	})
}