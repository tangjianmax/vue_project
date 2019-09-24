import msite from '../pages/Msite/Msite.vue'
import search from "../pages/search/search.vue"
import order from "../pages/order/order.vue"
import profile from "../pages/profile/profile.vue"
import Login from "../pages/Login/Login"
import UserDetail from "../pages/UserDetail/UserDetail"
export default [
  {path:"/msite",component:msite},
  {path:"/search",component:search},
  {path:"/order",component:order},
  {path:"/profile",component:profile},
  {path:"/Login",component:Login},
  {path:"/UserDetail",component:UserDetail},
  {path:"/",redirect:"/msite"}
]
