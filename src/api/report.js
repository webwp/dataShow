import request from '@/api/utils/request'
import configApi from "@/api/utils/configApi"

export function getReport(){
	return request({
		url:configApi.baseUrl + "/report",
		method:"post"
	})
}