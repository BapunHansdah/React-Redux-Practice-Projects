import jobs from './jobs.js'

export function searchJob(state ="", action) {
        
     if(action.type === 'SEARCH'){
        const searchedWord = action.search;
        return searchedWord;
    }

    return state
}

export function jobLists(state =jobs, action) {
          
    return state
}