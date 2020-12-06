export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            // let oldproduct = null
            let oldproduct = context.state.cart.find(function(value) {
                    return value.iid == payload.iid
                })
                // console.log(oldproduct);

            //find方法返回值是符合当前条件的成员  修改当前赋值的变量相当于直接修改数组（浅拷贝）
            //浅拷贝：一改全改
            if (oldproduct) {
                context.commit('addcount', oldproduct)
                resolve('当前商品数量+1')
            } else {
                payload.count = 1
                context.commit('addsp', payload)
                resolve('添加到购物车成功')
            }

        })

    }
}