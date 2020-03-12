import request from './request'
export function getHomeMuliteData() {
    return request({
        url: '/home/multidata'
    })
}
export function getGoodsListData(type, page) {
    return request({
        url: "/home/data",
        params: {
            page,
            type
        }
    })
}
