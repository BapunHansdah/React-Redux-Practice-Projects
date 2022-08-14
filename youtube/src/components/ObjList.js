import react from 'react'
import {useDispatch,useSelector} from 'react-redux'
import '../css/applist.css'

function obj(){

   const ObjList = useSelector(state=>state.ObjLists)
	console.log(ObjList)
   //const dispatch = useDispatch()
   
	return null
   ///if there is no element in array
   if(ObjList.movies.length === 0){
      return(
         <div className="container">
            <div className="noresult"><h1>No Results..</h1></div>
         </div>
      )
  /// else render the list
   }else{
       return(
           <div className="container">
			<div className="contentList">
             <div className="grid">
                {
                   ObjList.movies.map((m,i)=>{
                      return(
                         <div key={i}>
							<div className="movieimg"><img src={m.img} /></div>
                            <div><h3>{m.title}</h3></div>
							<div>{m.genres}</div>
                         </div>
                      )
                   })
                }
				</div>
             </div>
           </div>
      )  
   }
}

export default obj;