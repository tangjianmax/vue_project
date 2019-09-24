import {GETADRESS,GETSHOPLIST,GETCATEGORY,GETUSER,AUTOLOGIN,SIGNOUT} from "./mution_types"
import http from "../api/index"
import { Toast } from 'vant';
import router from "../router"
const OK=0;
const ERROR =1;
//当请求成功后，跳转到个人中心
const skipToPersonCenter=()=>{
  router.replace("/profile")
};
//当请求失败我们出现轻提示
const errorTips=(msg)=>{
  Toast('用户名或密码不正确');
};
export default {
  async MisteAdress(store) {
    const res = await http.contact.getAdress({
      latitude: store.state.latitude,
      longitude: store.state.longitude
    });
    // console.log(res);
    if (res.code === OK) {
      //调用mutation
      store.commit(GETADRESS, res.data)
    }
  },
  async getShopList(store) {
    const res = await http.contact.getShopList(
      {
        latitude: store.state.latitude,
        longitude: store.state.longitude
      }
    );
    // console.log(res);
    if (res.code === OK) {
      //调用mutation
      store.commit(GETSHOPLIST, res.data)
    }
  },
  async getFoodList(store) {
    const res = await http.contact.getCategory()
    if (res.code === OK) {
      //调用mutation
      store.commit(GETCATEGORY, res.data)
    }
  },
  // 用户名登录及手机登录
  async userLogin(store,{flag,data,updateImage}) {
    let res = null
    if (flag) {
      //短信登录
      res = await http.login.getUserTell({
        phone: data.phone,
        code: data.code,
      })
    } else {
      //用户名登录
      res = await http.login.getUserName({
        name: data.name,
        pwd: data.pwd,
        captcha: data.captcha
      })
    }
    // console.log(res);
    if (res.code === OK) {
      //调用mutation
      store.commit(GETUSER, res.data)
    } else if (res.code===ERROR) {
      //当返回的是错误的时候，要更新验证码,通过传入进来的
      updateImage()
    };
    //当是成功的状态的时候，我们把数据保存到store的仓库当中，
    //利用封装函数的方式，减少下面的代码多
     (res.code===OK)&&(skipToPersonCenter());
     (res.code===ERROR)&&(errorTips(res.msg))
  },
  async autoLogin(store) {
    const res = await http.contact.autoLogin()
    // console.log(res);
    if (res.code === OK) {
      //调用mutation
      store.commit(AUTOLOGIN, res.data)
    }
  },
  //退出登录
   signOut(store) {
      store.commit(SIGNOUT)
    }
}



  // var ACCOUNT_SID = '8aaf07086d05d00c016d4c53fef32cda';
// // var AUTH_TOKEN = 'eaabedec21f8417783160fcad6f7ff91'; // 可以改成自己的
// var AUTH_TOKEN = 'fc7010d1c3e240f098849fceef69f6da';
// var Rest_URL = 'https://app.cloopen.com:8883';
// // var AppID = '8aaf07086d05d00c016d29527614134f'; // 可以改成自己的
// var AppID ='8aaf07086d05d00c016d4c53ff442ce1'; // 可以改成自己的
