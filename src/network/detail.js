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
export class Shop {
    constructor(res) {
        this.iid=res.iid
        this.imgUrl = res.result.itemInfo.topImages[0];
        this.title = res.result.itemInfo.title;
        this.newPrice=res.result.itemInfo.highNowPrice;
        this.desc=res.result.itemInfo.desc;
    }
}