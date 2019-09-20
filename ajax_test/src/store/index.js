import  Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      count:0,
      firstName:"童",
      lastNmae:'子鸡',
    },

  getters:{
    full(state)  {
      return state.firstName + state.lastNmae
    },
    qw(state)  {
      return  state.count%2===0?"偶数":"奇数"
    }
  },
  //相当与工具库管理员，只有mtations才有资格来管理store里面的数据
  mutations:{
    add(state,obj) {
      state.count++
      console.log(obj.msg);
    },
    add1(state){
      state.count+=2
    },
    dec(state){
      state.count-=2
    },
    addAsync(state,{msg}){
      state.count+=3
      console.log(msg);
    }
  },
  actions:{
    addAsync({commit}){
      setTimeout(()=>{
        const msg={msg:"msg1"}
      commit('addAsync',msg)
      },2000)
    },
  }
});
export default store
