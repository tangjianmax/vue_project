const API= {
    getAdress: {
        url: "/position",
        method: "get",
        corsUrl: "/4000"
    },
    getShopList: {
        url: "/shops",
        method: "get",
        isForm: false,
        corsUrl: "/4000",
        needToken: true, //判断是否通过需要携带token来访问到数据
    },
    getCategory: {
        url: "/index_category",
        method: "get",
        isForm: false,
        corsUrl: "/4000",
        needToken: true,//判断是否通过需要携带token来访问到数据
    },
    //自动登录
    autoLogin: {
        url: "/auto_login",
        method: "get",
        corsUrl: "/4000",
        needToken: true
    }
}

export default API
