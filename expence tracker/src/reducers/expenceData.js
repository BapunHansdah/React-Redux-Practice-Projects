const transactions=[
    {
        id:1,
        text:"Laptop",
        amount:+2000
    }   
]

export function transactionData(state =[], action) {
    
    if(action.type === 'ADD_TRANSACTION'){
      if(action.text !=="" && action.amount !=0){
        return [...state,{id:new Date(),text:action.text,amount:action.amount}]
      } else{
        alert("text/amount cant be empty")
        return [...state]
      }  
    }
    

    return state
}

export function Text(state ="", action) {
        
     if(action.type === 'SET_TEXT'){
         const addtext = action.text;
         return addtext;
    }

    return state
}
export function Amount(state =1, action) {
        
     if(action.type === 'SET_AMOUNT'){
         const addamount = action.amount;
         return addamount;
    }

    return state
}