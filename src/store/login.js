
import {
  reqGetLoginData
} from '../api'
// reqGetLoginData = (loginData)
const state = {
  loginData: null
};
const mutations = {
  post_getLoginData(state, { data }) {
    state.loginData = data
  }
};

const actions = {
  async getLoginData({ commit }, loginData) {
    const result = await reqGetLoginData(loginData)
    // console.log(result)
    this.commit("showTokenFlag")
    if (result.ReslutCode === 200) {
      const data = result.Data
      if (result.Data.curTime == undefined) {
        result.Data.curTime = new Date().getTime()
      } else {
        result.Data.curTime = new Date().getTime()
      }
      localStorage.setItem('Authorization', result.Data.Access_Token);
      localStorage.setItem("testUserInfo", JSON.stringify(result.Data));
      commit('post_getLoginData', { data });
    }
  }
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