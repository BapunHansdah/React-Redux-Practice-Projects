const init = [
{
   id:1,
   title:"name",
   todo:"some todos"
},
{
   id:2,
   title:"name2",
   todo:"some todos2"
},
   

]



export function todoList(state=init, action) {
    

   if(action.type ==="DELETE"){
        const delObj = state.filter(l=> l.id !== action.id)
        return delObj;
    }
    
console.log(action.title, action.todo)
   
    if(action.type === "ADD"){
      if(action.title.length !== 0 && action.todo.length !== 0){
        return [...state , {id:new Date(),title:action.title,todo:action.todo}]
      }else{
         alert("inputs cant be empty")
         return [...state]
      }
    }


  
    return state
}

export function modal(state=false,action){
    if(action.type ==="OPEN_MODAL"){
        return true
    }
    if(action.type ==="CLOSE_MODAL"){
        return false;
    }
    return state;
}

export function setName(state="",action){
   if(action.type === "SET_NAME"){
      const setname = action.title;
      return setname;
   }
   return state
}
export function setTodo(state="",action){
   if(action.type === "SET_TODO"){
      const settodo = action.todo
      return settodo; 
   }
   return state;
}