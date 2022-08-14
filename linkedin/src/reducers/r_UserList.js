import users from './users'

export function searchUser(state ="", action) {
        
     if(action.type === 'SEARCH'){
        const searchedWord = action.search;
        return searchedWord;
    }

    return state
}

export function userLists(state =users, action) {
          
    return state
}