import react,{useState} from 'react'
import '../css/joblist.css'
import {Link} from 'react-router-dom'
import Login from './login'
import Job from './job'
import User from './user' 

function jobList(){
    const [tab,setTab] = useState(true)
    function settabtojob(){
        setTab(false)
    }
    function settabtouser(){
        setTab(true)
    }
    return (
        <>
             <Login/>
            <div className = "job-container">
                <div className="leftbar">                
                </div>
                <div className="navbar">
                    <Link to = "home"><div>Home</div></Link>
                    <div onClick={settabtojob}>job</div>
                    <div onClick={settabtouser}>User</div>    
                </div>
                <div className="grid">
                    {
                       tab ? <User/> : <Job/>
                    }
                </div>
                <div className="rightbar"></div>
            </div>
        </>
    )
}

export default jobList;