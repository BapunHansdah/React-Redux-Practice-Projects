import react from 'react'
import '../css/seat.css'
import SingleMovie from './singleMovie'
import {useDispatch,useSelector} from 'react-redux'
import {selectSeat,resetSubmit,seatVal} from '../actions/index'
function bookseat(){
    const dispatch = useDispatch()
    const clubSeat= useSelector(state=>state.club);
	const executivesSeat =useSelector(state=>state.executive)
    const seatVal = useSelector(state=>state.seatVal)
    console.log(clubSeat)
    //console.log(executivesSeat)
    return(
        <> 
            <SingleMovie/>
            <div className="seatcontainer">
              <div className="inputBox"> 
                  <input type="number" value={seatVal} onChange={(e)=> dispatch(selectSeat(e.target.value))}/>&nbsp;
                  <button className="button-13" onClick={()=>dispatch(resetSubmit())}>Reset</button>
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
                                        >{j+1}</div>
                                    )
                                })
                               )
                            })
                         }
                                          
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

export default bookseat;