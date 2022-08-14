import react,{useState} from 'react'
import '../css/header.css'
import {openModal} from '../actions/index'
import {useDispatch} from 'react-redux'

function header(){
   const [modalIsOpen,setModalIsOpen] = useState(false);
   const dispatch = useDispatch();
   return(
     <>
       <div className="header">
          <div className="logo"><div><img src="https://play-lh.googleusercontent.com/mBHs4ZXGE5uq6GQ9NlmldmEYxKnHEeotKmudetd3tYyNSI_zfNiLi81Uckyjj8S78w"/></div></div>
          <div className="nav">
             <div className="nav1">
                <button className="button-13" onClick={()=>dispatch(openModal())}>Create List</button>
             </div>
          </div>
       </div>
     </>
   )
}

export default header;