import react from 'react'
import '../css/header.css'
import logo from '../assets/image/logo.png'
import {useSelector} from 'react-redux'
function header(){
   const logos = useSelector(state=>state.ObjLists) 
   console.log(logos.standings)
   return(
     <>
        <div className="header2">
          <div className="blanck"><div></div></div>
          <div className="nav">
             <div>club sites :</div>
             {
                logos.teams.map((m,i)=>{
                   return (
                      
                         <div key={i} className="nav2"><img src={m.images.crest}/></div> 
                     
                   )
                })
             }
                  
          </div>
       </div>
       <div className="header">
          <div className="logo"><div><img src={logo}/>Premire League</div></div>
          <div className="nav">
             <div className="nav2">no room for racism</div>
          </div>
       </div>
     </>
   )
}

export default header;