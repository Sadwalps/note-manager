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

//api for delete notes
export const deletenotesAPI = async(id)=>{
    return await commonAPI(`DELETE`, `${serverURL}/deletenotes/${id}`,{})
}

//api for edit notes
export const editnotesAPI = async(id,reqBody)=>{
    return await commonAPI(`PUT`, `${serverURL}/editnotes/${id}`, reqBody)
}