import apiObjs from "./index1"
import axiosInsatnce from "./axios"
import util from "../util/index"
//可以暴露此把这个给到main里面去引入，也可以引入到util里面，然后在main里面引入util
export default util(apiObjs,axiosInsatnce)
