const clubSeats= new Array(15).fill({complete:false})
const executivesSeat= new Array(15).fill({complete:false})

const cArr = [
            [1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
            ]
const eArr = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
            ]
export function seatVal(state=1,action){
    if(action.type==="SELECT_SEAT1"){
        return action.a;
    }
    if(action.type==="RESET"){
        return 1;
    }
    return state
}


export function club(state=cArr, action) {
    if(action.type ==="RESET"){
       
        return (
            [
            [1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
            ]
        )
    }

    if(action.type == 'SELECT_SEAT1'){ 
        
       const selectSeat = () =>{
         for (var i = 0; i < state.length; i++) {
            for (var j = 0; j < state[0].length ; j++) {
              if(parseInt(i.toString() + j.toString())+1 <= action.a){
                 state[i][j] = 1
              }
            }
          }
           console.log(state)
           return [...state]
       }
        return selectSeat();
    }

    if(action.type === 'COMPLETE'){
        //console.log(action.id,action.complete)
        const complete = state.map((m,i)=>{
            const abc = m.map((n,j)=>{
                if("c"+i+j == action.id){
                    if(action.complete === 0){                 
                        n = 1
                        return n
                    }else if(action.complete === 1){               
                        n =0  
                        return n
                    }
                    else{
                        alert("resereved")
                        return n
                    }              
                }else{
                    return n;
                }
            })
       
            return abc
        })
 
        return complete
        
    }
    return state
}

export function executive(state=eArr, action) {

    if(action.type === 'COMPLETE'){
        //console.log(action.id,action.complete)
        const complete = state.map((m,i)=>{
            const abc = m.map((n,j)=>{
                if("e"+i+j == action.id){
                    if(action.complete === 0){                 
                        n = 1
                        return n
                    }else if(action.complete === 1){               
                        n =0  
                        return n
                    }
                    else{
                        alert("resereved")
                        return n
                    }              
                }else{
                    return n;
                }
            })
       
            return abc
        })
 
        return complete
        
    }
    return state
}

