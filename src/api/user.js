import request from "@/api/utils/request"
import configApi from "@/api/utils/configApi"


export function getUserInfo(){
    return request({
        url:configApi.baseUrl + "/user",
        method:"post",
    })
}