import axios from "axios";
import {Toast} from "vant"
const contactAxios = axios.create({
    // baseURL:"http://localhost:5000",
    timeout:5000
});

contactAxios.interceptors.request.use((config)=>{
    return config
},(err)=>{
    return Promise.reject(err)
});

contactAxios.interceptors.response.use((res)=>{

    return res.data
},(err)=>{
    return Promise.reject(err)
})

export default contactAxios
