import request from './request'
export function getGoodsItemData(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function getRecommendData(){
    return request({
        url:'/recommend'
    })
}