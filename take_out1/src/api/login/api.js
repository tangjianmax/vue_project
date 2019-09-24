const API={
    //获取短信验证码
    getIdentifyingCode:{
        url: "/sendcode",
        method:"get",
        corsUrl:"/4000"
    },
    getUserName:{
        url: "/login_pwd",
        method:"post",
        isForm:false,
        corsUrl:"/4000"
    },
    getUserTell:{
        url: "/login_sms",
        method:"post",
        isForm:false,
        corsUrl:"/4000"
    },
}

export default API
