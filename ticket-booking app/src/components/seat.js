import react from 'react'
import '../css/seat.css'
import SingleMovie from './singleMovie'
import {useDispatch,useSelector} from 'react-redux'
import {completedList} from '../actions/index'
function seat(){
    const dispatch = useDispatch()
    const clubSeat= useSelector(state=>state.club);
	const  executivesSeat =useSelector(state=>state.executive)
    console.log(clubSeat)
    console.log(executivesSeat)
    function setSeatValue(value) {
        
    }
    return(
        <> 
            <SingleMovie/>
            <div className="seatcontainer">
              <div className="inputBox"> 
                  <input type="number" onChange={(e)=> setSeatValue(e.target.value)}/>&nbsp;
                  <button className="button-13">Reset</button>
              </div>
             <div className="seats">
                 <div className="club">
                     <div>Club Rs:136</div>
                     <div className="seat">
                         {
                            clubSeat.map((m,i)=> {
                              return( 
                                m.map((n,j)=>{
                                    return(
                                        <div key={"c"+i+j} 
                                            className={`${n===1? "buttonGreen": n===2 ? "reserved":n==null? "null":"red"}`}
                                            onClick={()=>dispatch(completedList("c"+i+j,n))}
                                        >{j+1}</div>
                                    )
                                })
                               )
                            })
                         }
                                          {/*<div><button className={`${l.complete === true? "buttonGreen" : "buttonRed" }`} onClick={()=>dispatch(completedList(l.id,l.complete))}>{`${l.complete === true? "Completed" : "Not Completed" } `}</button></div>*/}
                                          {/*   <h3>A</h3> {clubSeat.map((m,i)=>{return(<div key={i} className={`${m.complete === true? "buttonGreen" : "red" }`} onClick={()=>dispatch(completedList(i,m.complete))}>{i+1}</div>)})} */}
                     </div>

                 </div>
                 <div className="executives">
                    <div>Executives Rs:236</div>
                    <div className="seat">
                          {
                            executivesSeat.map((m,i)=> {
                              return( 
                                m.map((n,j)=>{
                                    return(
                                        <div key={"c"+i+j} 
                                            className={`${n===1? "buttonGreen" : n===2 ? "reserved" :n==null? "null":"red"}`}
                                            onClick={()=>dispatch(completedList("e"+i+j,n))}
                                        >{j+1}</div>
                                    )
                                })
                               )
                            })
                         }
                        
                    </div>
                 </div>
             </div>
            </div>
        </>
    )
}

export default seat;