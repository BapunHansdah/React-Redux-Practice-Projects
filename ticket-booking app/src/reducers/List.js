import Data from './Data'
// import FetchedData from './fetchData'


const INITIAL_STATE = Data;
export function searchedMovie(state ="", action) {
        
     if(action.type === 'SEARCH'){
        const searchedWord = action.search;
        return searchedWord;
    }

    return state
}

export function Lists(state=[], action) {
    
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
