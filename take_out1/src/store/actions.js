import {GETADRESS,GETSHOPLIST,GETCATEGORY} from "./mution_types"
import http from "../api/index"
import contact from "../api/contact";
// import axios from "axios"
const OK=0
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
    // console.log(res);
    if (res.code === OK) {
      //调用mutation
      store.commit(GETCATEGORY, res.data)
    }
  }
}



