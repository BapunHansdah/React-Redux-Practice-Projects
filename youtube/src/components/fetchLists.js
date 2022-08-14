import react from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {deleteList,fetchData} from '../actions/index'
import {youtubeApi} from '../apis/youtubeApi'
import {useEffect,useState} from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import {AiFillDelete} from 'react-icons/ai'
Modal.setAppElement('#root')
function  fetch() {
   const [searchInput,setSearchInput] = useState("react")
   const [storeInput,setStoreInput] =useState('')
   const fetched_objList = useSelector(state=>state.fetched_ObjLists) ///from fetchedData
   const dispatch = useDispatch()
	//modal
	const [openmodal ,setopenModal] = useState(false)
    const [postId,setPostId] = useState({video:null,title:null})
    function open(id,title){
        setPostId({video:id,title:title})   
        setopenModal(true)
    }
    function close(){
        setopenModal(false)
    }
   ///search video functions
   function searchVid(e){
	   setStoreInput(e)
   }
	function handleKeyDown(e){
		if(e.key==="Enter"){
			setSearchInput(storeInput)
		}
	}
	
  ///if using fetch from an api
  function apiCall(){ 
   const getVideos = async () => {
	 const fetchh =  await youtubeApi.get("/search", {
        params: {
          q: searchInput,
        },
      })
	   return fetchh
   }
	getVideos().then(response=>{
        dispatch(fetchData(response.data.items))
    })
   }

  useEffect(() => {
      apiCall();
  }, [searchInput]);
 
 console.log(fetched_objList)



   
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
		   <>
           <div className="container" style={{flexDirection:'column'}}>
               <h3>Video search</h3>
			   <input type="text" onKeyPress={(e)=>handleKeyDown(e)} onChange={(e)=>searchVid(e.target.value)} style={{padding:'10px',width:'500px'}}/>
			<div className="contentList">
             <div className="grid">
                 {
                   fetched_objList.map((s,i)=>{
                      return(
                        <div key={i} className="box" style={{border:'1px solid',backgroundColor:'#e8e8e9',padding:'5px'}}>
							<div><img onClick={()=>open(s.id.videoId,s.snippet.title)} style={{width:'200px'}}src={s.snippet.thumbnails.medium.url}/></div>
							<div>{`${s.snippet.title.length > 40 ? s.snippet.title.slice(0,40)+'....': s.snippet.title }`}</div>
							<div style={{alignSelf:'flex-end',color:'red'}}><AiFillDelete onClick={(e)=>dispatch(deleteList(s.id.videoId,e))} size={20}/></div>
                        </div>
                      )
                   })
                 }
			  </div>
             </div>
           </div>
			   <Modal isOpen={openmodal}>
                <div style ={{display:'flex' ,justifyContent:'flex-end'}}>
                    <div onClick={close}>X</div>
                </div>
                <div className="modal-container">
                              <div className="modal-content">
                                  <div className="modal-image"><iframe style={{width:"70vw",height:'70vh'}}src={`https://www.youtube.com/embed/${postId.video}`}></iframe></div>
                                  <div className="modal-description">
                                    <div>
                                        <div className="modal-description">{postId.title}</div>
                                    </div>
                                   </div>
							  </div>
                </div>
            </Modal>
		   </>
      )  
   }

}

export default fetch;