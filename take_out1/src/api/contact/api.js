const API={
    getAdress:{
        url: "/position",
        method:"get",
        corsUrl:"/4000"
    },
    getShopList:{
        url: "/shops",
        method:"get",
        isForm:false,
        corsUrl:"/4000"
    },
    getCategory:{
        url: "/index_category",
        method:"get",
        isForm:false,
        corsUrl:"/4000"
    },
    editContact:{
        url: "/Msite/edit",
        method:"put",
        isForm:false
    },
    delContact:{
        url: "/Msite",
        method:"delete",
        isForm:false
    }
}

export default API
