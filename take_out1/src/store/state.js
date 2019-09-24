
export default {
  imgUrl:"https://fuss10.elemecdn.com",
  adress:{},
  shopList:[],
  foodList:[],
  userInfo:{},
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  token:localStorage.getItem("storgeToken")  //把个人信息里面的token存储到localStorage里面，防止刷新的时候token没有又要重新登录
}
