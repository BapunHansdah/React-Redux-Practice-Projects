import react from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {deleteList,fetchData} from '../actions/index'
import {useEffect} from 'react'
import axios from 'axios'

function  fetch() {
   const fetched_objList = useSelector(state=>state.fetched_ObjLists) ///from fetchedData
   const dispatch = useDispatch()
   
  ///if using fetch from an api
  function apiCall(){ 
    axios.get("https://run.mocky.io/v3/55492543-1c03-4b5e-8ff4-28bbd2638780").then(response=>{
        dispatch(fetchData(response.data.movies))
    })
   }

  useEffect(() => {
      apiCall();
  }, []);
    
    ///if there is no element in array
   if(fetched_objList.length === 0){
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
                   fetched_objList.map((m,i)=>{
                      return(
                         <div key={i}>
							<div className="movieimg"><img src={`https://drive.google.com/uc?export=view&id=${m.imageUrl.slice(32,65)} `} /></div>
                            <div><h3>{m.Name}</h3></div>
							<div>{m.genre}</div>
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

export default fetch;