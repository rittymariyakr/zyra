
import axios from "axios"

// const api = axios.create({
//     baseURL: "http://127.0.0.1:8000/"
// }) 
//  const get = async(path)=>{
//     try {
//         const response = await api.get(path, {
//             headers: {
                
//             }})
//             return response
        
//     } catch (error) {
//         console.log(error);
//         alert('get error',error)
        
//     }
//  }

// export default {get}

export const commonAPI = async(httprequest,url,reqBody,reqHeader)=>{
    const reqConfig = {
        method: httprequest,
        url,
        data: reqBody,
        headers: reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}