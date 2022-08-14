import react from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {deleteList} from '../actions/index'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {fetchData} from '../actions/index'
import '../css/applist.css'
function appList(){

   const objList = useSelector(state=>state.Lists)
   const dispatch = useDispatch()
   
  ///if using fetch
  function apiCall(){ 
    axios.get("https://run.mocky.io/v3/55492543-1c03-4b5e-8ff4-28bbd2638780").then(response=>{
        dispatch(fetchData(response.data.movies))
    })
   }

  useEffect(() => {
      apiCall();
  }, []);

   //console.log(objList)
   if(objList.length === 0){
      return(
         <div className="container">
            <div className="noresult"><h1>No Results..</h1></div>
         </div>
      )
   }else{
       return(
           <div className="container">
				   <div className="contentList">
             <div className="grid">
                {
                   objList.map((m,i)=>{
                      return(
                         <div key={i}>
							 
                            
							<div className="movieimg"><img src={`https://drive.google.com/uc?export=view&id=${m.imageUrl.slice(32,65)} `} /></div>
                            <div><h3>{m.Name}</h3></div>
							 <div>{m.genre}</div>
							 <Link to={`bookseat/${m.id}`}><button className="button-13">Book</button></Link>
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

export default appList;