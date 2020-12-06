export default {
    homeloadimg(state) {
        state.imgloading++;
        // console.log(state.imgloading);
    },
    detailload(state) {
        state.detailimgload++
    },
    addsp(state, payload) {
        payload.checked = true
        state.cart.push(payload)
    },
    addcount(state, payload) {
        payload.count++
    },
    changeall(state, all) {
        // console.log(all);
        state.cart.forEach(value => {
            value.checked = all
        });
    },
    openall(state, all) {

    }
}