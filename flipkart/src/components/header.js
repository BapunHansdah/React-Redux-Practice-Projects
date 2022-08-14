import react from 'react'
import '../css/header.css'
import {useDispatch,useSelector} from 'react-redux'
import {searchList} from '../actions/index'
import {BiCartAlt} from 'react-icons/bi'
import {FaSearch} from 'react-icons/fa'
function header(){
   const dispatch = useDispatch()
   return(
     <>
      <div className="heading">
         <div>My Store</div>
         <div className="cart"><BiCartAlt size={25}/></div>
      </div>
       <div className="header">
          <div className="logo"><div><input placeholder="search products" type="text" onChange={(e)=>dispatch(searchList(e.target.value))}/><span><FaSearch/></span></div></div>
          <div className="nav">
             <div className="nav1"></div>
          </div>
       </div>
     </>
   )
}

export default header;