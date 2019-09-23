import {GETADRESS,GETSHOPLIST,GETCATEGORY} from "./mution_types"

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
  }
}

