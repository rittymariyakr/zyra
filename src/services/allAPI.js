import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


export const registerAPI = async(user)=>{
    return await commonAPI('POST',`${BASE_URL}/api/users/register/`,user,"")
}


//logon api
export const loginAPI = async(user)=>{
    return await commonAPI('POST',`${BASE_URL}/api/users/login/`,user,"")
}

//get user project
export const getUsers = async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/api/users/profile`,"",reqHeader)
}
