import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./muations"
// import muation_types from "./mution_types"
import actions from "./actions"
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  mutations,
  actions,
});
export default store;
