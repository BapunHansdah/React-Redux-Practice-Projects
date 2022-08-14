import react from 'react'
import '../css/login.css'
import {Link} from 'react-router-dom'
function login(){
    return(
        <>
            <div className="login-container">
            
                     <Link to ="login"><button className="button-13">Login or signup</button></Link>
            
            </div>
        </>
    )
}
export default login;