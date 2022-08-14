import react,{useState} from 'react'
import '../css/loginpage.css'

function loginpage(){
    const [tab, setTab] = useState(true)
    function settabtosignin(){
        setTab(true)
    }
    function settabtosignup(){
         setTab(false)
    }
    return(
        <>
        
            <div className="login-page-container">
                <div className="l-div">
                <div className="login-tab">
                    <h3 onClick={settabtosignin} className={`${tab ? "active" : ""}`}>Log in</h3>
                    <h3 onClick={settabtosignup} className={`${tab ? "" : "active"}`}>Sign Up</h3>
                </div>
                {
                    tab? (
                        <>
                            <input placeholder="email" type="email" />
                            <input placeholder="password" type="password"/>
                            <div><button className="button-13">Login</button></div>
                        </>
                    ):
                    (
                        <>
                           <input placeholder="email" type="email" />
                            <input placeholder="password" type="password"/>
                          <div><button className="button-13">Sign up</button></div>
                        </>
                    )
                }
                </div>
               
            </div>
            
        </>
    )
}
export default loginpage