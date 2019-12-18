
const state = {
  // 修改左侧导航宽度大小参数
  collapsed: false,
  //pc、 移动端响应式切换参数
  responsive: false,
};
const mutations = {
  collapseState(state) {
    state.collapsed = !state.collapsed;
  },
  collapseMobileState(state,data) {
    state.collapsed = data;
  },
  responsiveState(state,data) {
    state.responsive = data;
  }
};

const actions = {

};
const getters = {

};

// 不要忘记把state, mutations等暴露出去。
export default {
  state,
  mutations,
  actions,
  getters
}