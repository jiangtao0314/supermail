import { request } from './request'

export function getdetail(iid) {
    // console.log(request);
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export function gettuijian() {
    return request({
        url: '/recommend',
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.score = shopInfo.score;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.goodsCount = shopInfo.cGoods
    }
}
export class Itemparams {
    constructor(itemparams, rule) {
        this.key = itemparams.key
        this.set = itemparams.set
        this.disclaimer = rule.disclaimer
        this.tables = rule.tables
    }
}