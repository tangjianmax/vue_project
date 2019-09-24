import axios from "axios";
import {Toast,Dialog} from "vant"
import state from "../../store/state"
import router from "../../router"
const contactAxios = axios.create({
    // baseURL:"http://localhost:5000",
    timeout:5000
});

contactAxios.interceptors.request.use((config)=>{
    // console.log(config);
    //请求需要带token才能访问数据
    let needToken = config.headers.needToken;
    // console.log(needToken);
    if(needToken){
        // const token =state.token;
        const token = state.token
        // console.log(token);
        if(token){
            config.headers.Authorization = state.token
        }else{
            //没有token就要跳转到登录页面
            Dialog({ message: '没有token，请先登录' });
            // router.replace("/login")
            // let error = new Error("没有token 请先登录")
            // error.status = 401
            // throw error
        }
    }
     // config.headers=
    if(config.url === "/4000/position"){
        config.url = config.url+"/"+config.params.latitude+","+config.params.longitude;
        config.params={}
        // console.log(config);
    }
    Toast.loading({
        mask: true,
        message: '加载中...',
        duration:0,
        forbidClick:true
    })
    return config
},(err)=>{
    Toast.clear()
    Toast.fail('请求失败 请稍后重试');
    return Promise.reject(err)
})

contactAxios.interceptors.response.use((res)=>{
    Toast.clear()
    return res.data
},(err)=>{
    Toast.clear()
    Toast.fail('请求失败 请稍后重试');
    return Promise.reject(err)
})


export default contactAxios
