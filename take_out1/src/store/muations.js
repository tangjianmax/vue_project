import {GETADRESS,GETSHOPLIST,GETCATEGORY,GETUSER,AUTOLOGIN,SIGNOUT} from "./mution_types"

export default {
    [GETADRESS](state,adrss){
      state.adress =adrss
  },
  [GETSHOPLIST](state,shopList){
      // console.log(shopList)
    state.shopList =shopList
  },
  [GETCATEGORY](state,foodList){
    // console.log(shopList)
    state.foodList =foodList
  },
  [GETUSER](state,userInfo){
    state.userInfo =userInfo
    state.token=userInfo.token
    localStorage.setItem("storgeToken",userInfo.token)
    // console.log(state.token);
  },
  [AUTOLOGIN](state,userInfo){
      state.userInfo=userInfo
  },
  [SIGNOUT](state){
    state.userInfo={}
    state.token=""
    localStorage.removeItem("storgeToken")
  },
}

