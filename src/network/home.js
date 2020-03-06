import request from './request'
export function getHomeMuliteData(){
    return request({
        url:'/home/multidata'
    })
}