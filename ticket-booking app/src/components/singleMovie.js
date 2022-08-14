import react from 'react'
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {fetchData} from '../actions/index'


function singleMovie(){
	const dispatch = useDispatch()
	function apiCall(){ 
    axios.get("https://run.mocky.io/v3/55492543-1c03-4b5e-8ff4-28bbd2638780").then(response=>{
        dispatch(fetchData(response.data.movies))
    })
   }

  useEffect(() => {
      apiCall();
  }, []);
    const param = useParams()
    const {id} = param
    const objList = useSelector(state=>state.Lists)
    // console.log(objList)
    return(
        <>
            <div className="container">
                {
                   objList.map((m,i)=>{
                       if(m.id == id){
                       return(
                         <div key={i}>
							<div className="movieimg"><img src={`https://drive.google.com/uc?export=view&id=${m.imageUrl.slice(32,65)} `} /></div>
                            <div><h3>{m.Name}</h3></div>
							 <div>{m.genre}</div>
                         </div>
                      )   
                       }
                   })
                }
            </div>
        </>
    )
}
export default singleMovie