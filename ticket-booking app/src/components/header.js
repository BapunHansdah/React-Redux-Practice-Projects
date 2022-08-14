import react from 'react'
import '../css/header.css'
import {FaUserCircle} from 'react-icons/fa'
import {AiFillCaretDown} from 'react-icons/ai'
function header(){
   return(
     <>
       <div className="header">
          <div className="logo"><div><input type="text" placeholder="search for movies events play"/></div></div>
          <div className="nav">
             <div className="nav1">Mumbai&nbsp;<AiFillCaretDown/></div>
             <div className="nav2"><FaUserCircle size={30}/></div>
             <div className="nav2">Hi,Abhishek...</div>
          </div>
       </div>
     </>
   )
}

export default header;