//get list
export const listsStart = ()=>(
    {
        type: "LISTS_START"
    }
)
export const listsSuccess = (lists)=>(
    {
        type: "LISTS_SUCCESS",
        payload: lists
    }
)
export const listsFailure = ()=>(
    {
        type: "LISTS_FAILURE"
    }
)

// delete list
export const listDeleteStart = ()=>(
    {
        type: "DELETE_LISTS_START"
    }
)
export const listDeleteSuccess = (id)=>(
    {
        type: "DELETE_LISTS_SUCCESS",
        payload: id
    }
)
export const listDeleteFailure = ()=>(
    {
        type: "DELETE_LISTS_FAILURE"
    }
)

//create movie
export const listCreateStart = ()=>(
    {
        type: "CREATE_LIST_START"
    }
)
export const listCreateSuccess = (movie)=>(
    {
        type: "CREATE_LIST_SUCCESS",
        payload: movie
    }
)
export const listCreateFailure = ()=>(
    {
        type: "CREATE_LIST_FAILURE"
    }
)