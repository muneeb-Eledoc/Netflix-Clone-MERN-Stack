import axios from "../../axios"
import { listCreateFailure, listCreateStart, listCreateSuccess, listDeleteFailure, listDeleteStart, listDeleteSuccess, listsFailure, listsStart, listsSuccess } from "./ListsAction"

export const getLists = async(dispatch)=>{
   dispatch(listsStart())
   try{
      const res = await axios.get("/lists", {
          headers:{
              token: JSON.parse(localStorage.getItem("user")).token
          }
      })
      dispatch(listsSuccess(res.data.list))
   }catch(e){
       dispatch(listsFailure())
   }
}

// delete list
export const deleteList = async(id, dispatch)=>{
    dispatch(listDeleteStart())
    try{
       const res = await axios.delete("/lists/"+id, {
           headers:{
               token: JSON.parse(localStorage.getItem("user")).token
           }
       })
       dispatch(listDeleteSuccess(id))
    }catch(e){
        dispatch(listDeleteFailure())
    }
 }
 
//create list
export const createList = async(list, dispatch)=>{
    dispatch(listCreateStart())
    try{
       await axios.post("/lists", list, {
           headers:{
               token: JSON.parse(localStorage.getItem("user")).token
           }
       })
       dispatch(listCreateSuccess(list))
       alert("list has been created")
    }catch(e){
        dispatch(listCreateFailure())
    }
 }
