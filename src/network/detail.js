import request from './request'
export function getGoodsItemData(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}