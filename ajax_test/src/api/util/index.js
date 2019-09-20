
export default (apiObjects,axios)=>{
  const obj = {}
  for(var name in apiObjects){
      let dataObj = {}
      let{url,method,isForm}=apiObjects[name]
      obj[name]= async(data,config={})=> {
        if(data&&isForm){
           dataObj =  new FormData()
          for(let key in data ){
            dataObj.append(key,data[key])
          }
        }else{
          dataObj=data
        }
        
        let res = null;
        if(method==="get"||method==="delete"){
          try{
         res=await axios({url,method,params:data})
            console.log(res);
            // res = Promise.resolve(res)
          }catch (e) {
           res= Promise.reject(e)
          }
        }else if(method==="post"||method==="put"){
          try{
            res = await axios({url,method,data:dataObj})
            // res = Promise.resolve(res)
          }catch (e) {
            res = Promise.reject(e)
          }
        }
        return  res
      }
    }
    return obj

}
