import react from 'react'
import {useDispatch,useSelector} from 'react-redux'
import '../css/applist.css'

function obj(){

   const ObjList = useSelector(state=>state.ObjLists)
	console.log(ObjList.standings)
   //const dispatch = useDispatch()
   
   ///if there is no element in array
   if(ObjList === 0){
      return(
         <div className="container">
            <div className="noresult"><h1>No Results..</h1></div>
         </div>
      )
  /// else render the list
   }else{
       return(
		   <>
           <div className="container">
			<div className="contentcolumn">
				      <h2 style={{paddingLeft:'20px'}}>clubs</h2>
		              <div className="grid">
						  {
							  ObjList.teams.map((m,i)=>{
								  return(
									  <div key={i} className="grid-container">
		                                   <div className="image"><img src={m.images.stadium}/></div>
										   <div className="description">
												 <div style={{fontWeight:'500',fontSize:'1.5em',color:'white'}}>{m.meta.name}</div>
												 <div style={{fontWeight:'300',fontSize:'.8em',color:'white',opacity:'.8'}}>{m.meta.stadium}</div>
												 <div style={{fontWeight:'400',fontSize:'.8em',color:'white',marginTop:'20px'}}>profile --></div>
										   </div>
						              </div>
								  )
							  })
						  }
						  
					  </div>
             </div>
			   <div className="contentrow">
				   <h2 style={{paddingLeft:'20px'}}>standings</h2>
				    <div className="grid2">
						 <div className="grid2-container">	
							 <div className ="box2">pos</div>
							 <div className ="box2">club</div>
							 <div className ="box2">pl</div>
							 <div className ="box2">gd</div>
							 <div className ="box2">pts</div>
						 </div>
						{
                           ObjList.standings.map((m,i)=>{
							   return(
							 <div key={i} className="grid2-container">	
								 <div className ="box2">{m.position}</div>
								 <div className ="box2"><img style={{width:'30px'}} src={m.url}/>{m.name.short}</div>
								 <div className ="box2">{m.stats.played}</div>
								 <div className ="box2">{m.stats.goalDifference}</div>
								 <div className ="box2">{m.stats.points}</div>
						     </div> 
							   )
						   })
						}
				    </div>
			   </div>
          </div>
		   </>
      )  
   }
}

export default obj;