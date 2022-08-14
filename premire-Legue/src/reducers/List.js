
import Data from './Data'

//if fetching data from an api
import Fetched_Data from './fetchData'


export function searchedMovie(state ="", action) {
        
     if(action.type === 'SEARCH'){
        const searchedWord = action.search;
        return searchedWord;
    }

    return state
}

export function ObjLists(state=Data, action) {
    
    

   if(action.type ==="DELETE"){
        const delObj = state.filter(l=> l.id !== action.id)
        return delObj;
    }
    

    if(action.type === "ADD"){
        return [...state , {id:uuidv4(),name:action.name,age:action.age,complete:false}]
    }

    if(action.type ==='EDIT'){
        const editObj = state.map(e=>{
            if(e.id === action.id){
                return {...e , name:action.name, age:action.age}
            }else{
                return e
            }
        })
        return editObj
    }

    if(action.type === 'COMPLETE'){
        const completObj = state.map(c=>{
            if(c.id === action.id){
                if(action.complete === true){
                    return {...c , complete:false}
                }else{
                    return {...c,complete:true}
                }
            }else{
                return c
            }
        })
        return completObj
    }
    return state
}



///if fetching data from from an api

export function fetched_ObjLists(state=[], action) {
    
    if(action.type ==="FETCH_DATA"){
        const reqObj= action.payload
        return reqObj
    }

   if(action.type ==="DELETE"){
        const delObj = state.filter(l=> l.id !== action.id)
        return delObj;
    }
    

    if(action.type === "ADD"){
        return [...state , {id:uuidv4(),name:action.name,age:action.age,complete:false}]
    }

    if(action.type ==='EDIT'){
        const editObj = state.map(e=>{
            if(e.id === action.id){
                return {...e , name:action.name, age:action.age}
            }else{
                return e
            }
        })
        return editObj
    }

    if(action.type === 'COMPLETE'){
        const completObj = state.map(c=>{
            if(c.id === action.id){
                if(action.complete === true){
                    return {...c , complete:false}
                }else{
                    return {...c,complete:true}
                }
            }else{
                return c
            }
        })
        return completObj
    }
    return state
}
