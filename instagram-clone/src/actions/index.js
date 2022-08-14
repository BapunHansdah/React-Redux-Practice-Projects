export function fetchData(request) {
  return {
    type: "FETCH_DATA",
    payload: request
  };
}


export function deleteList(id,e){
    e.stopPropagation();
    return{
        type:"DELETE",
        id:id
    }
}
export function addToList(name,age){
    if(name.length !== 0 && age.length !== 0){
        return{
            type:"ADD",
            name:name,
            age:age
        }
    }
    
}

export function editList(id,name,age){
    return{
        type:"EDIT",
        id:id,
        name:name,
        age:age
    }
}

export function completedList(id,complete){

    return {
        type:"COMPLETE",
        id:id,
        complete:complete
    }
}

export function searchList(search){
    console.log(search)
    return {
        type:"SEARCH",
        search:search
    }
}
