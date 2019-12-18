const state = {
    spin: true,
};
const mutations = {
    showLoading(state) {
        state.spin = true
    },
    hideLoading(state) {
        state.spin = false
        console.log(this.spin);
    }
};

const actions = {
   
};
const getters = {

};

// 不要忘记把state, mutations等暴露出
export default {
    state,
    mutations,
    actions,
    getters
}