
import Modal from 'react-modal'
import {useDispatch,useSelector} from 'react-redux'
import {deleteList,openModal,closeModal,addToList,setName,setTodo} from '../actions/index'
import '../css/applist.css'
Modal.setAppElement("#root")
function appList(){
   
   const objList = useSelector(state=>state.todoList)
   const modal = useSelector(state=>state.modal)
   const name = useSelector(state=>state.setName)
	const todo =useSelector(state=>state.setTodo)
	console.log(name,todo)
   const dispatch = useDispatch()
   function closemodal(){
	   dispatch(closeModal())
   }
const customStyles = {
  content: {
	width:'300px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

   console.log(modal)
   console.log(objList)
   if(objList.length === 0){
      return(
         <div className="container">
			 
		 <div className="modalcontent"> 
                <Modal isOpen={modal} style={customStyles}>
				<div className='modalContainer'>
                   <h3>Title</h3>
			       <div><input type="text" value={name} onChange={(e)=>dispatch(setName(e.target.value))}/></div>
				    <h3>Todo</h3>
		           <div><input type="text" value={todo} onChange={(e)=>dispatch(setTodo(e.target.value))}/></div>
                  <button className="button-13" onClick={()=>dispatch(addToList(name,todo),closemodal())}>add</button>
                </div>
				</Modal>
		 </div>
             
			 
            <div className="noresult"><h1>No Results..</h1></div>
         </div>
      )
   }else{
       return(
           <div className="container">
                <Modal isOpen={modal} style={customStyles}>
				<div className='modalContainer'>
                   <h3>Title</h3>
			       <div><input type="text" value={name} onChange={(e)=>dispatch(setName(e.target.value))}/></div>
				    <h3>Todo</h3>
		           <div><input type="text" value={todo} onChange={(e)=>dispatch(setTodo(e.target.value))}/></div>
                  <button className="button-13" onClick={()=>dispatch(addToList(name,todo),closemodal())}>add</button>
                </div>
				</Modal>
			 <div className="contentList">
             <div className="grid">
                {
                   objList.map((m,i)=>{
                      return(
                         <div key={i}>			 
                             <h1>{m.title}</h1>
							 <div className="todo">{m.todo}</div>			
							<button className="button-13" onClick={(e)=>dispatch(deleteList(m.id,e))}>delete</button>
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