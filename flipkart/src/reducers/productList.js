import Data from './Data1'

export function products(state=Data, action) {


   if(action.type ==="DELETE"){
        const delObj = state.filter(l=> l.id !== action.id)
        return delObj;
    }
    

    if(action.type === "ADD"){
        return [...state , {id:uuidv4(),name:action.name,age:action.age,complete:false}]
    }

    return state
}

export function searchedKey(state ="", action) {
        
     if(action.type === 'SEARCH'){
        const searchedWord = action.search;
        return searchedWord;
    }

    return state
}

export function addToCart(state=[] , action) {
   if(action.type === "ADD_TO_CART"){
        return [...state , {id:action.id,name:action.name,brand:action.brand,image:action.image,price:action.price}]
    }
   return state;
   
}