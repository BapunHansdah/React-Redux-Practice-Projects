export function openModal(){
    return {
        type:"OPEN_MODAL"
        }
}
export function closeModal(){
    return {
        type:"CLOSE_MODAL"
    }
}

export function deleteList(id,e){
    e.stopPropagation();
    return{
        type:"DELETE",
        id:id
    }
}
export function addToList(title,todo){
    console.log(title,todo)
  
        return{
            type:"ADD",
            title:title,
            todo:todo
        }
   
    
}

export function setName(value){
   
    return{
        type:'SET_NAME',
        title:value
    }
}
export function setTodo(value){
    console.log(value)
    return{
        type:'SET_TODO',
        todo:value
    }
}
