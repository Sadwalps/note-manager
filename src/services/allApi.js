import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//api for add notes
export const addnotesAPI = async(reqBody)=>{
    return await commonAPI(`POST`,`${serverURL}/addnotes`, reqBody)
}

//api for get notes
export const getnotesAPI = async()=>{
    return await commonAPI(`GET`, `${serverURL}/allnotes`,"")
}