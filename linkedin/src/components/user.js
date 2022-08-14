import react from 'react'
import {useSelector} from 'react-redux'
function user(){
        const users = useSelector(state=>state.userLists);
    return(
        <>
             <div className="grid-container">
                    <div className="search"><input type="text" /><div className="search-btn"><button className="btn">search</button></div></div>
                    <div className="card-container">
                    <div className="card-grid">
                        {
                            users.map((m,i)=>{
                                return(
                                    <div key={m.id} className="card">
                                        <div> {m.name}</div>
                                        <hr></hr>
                                        <div> {m.email}</div>
                                        
                                    </div>
                                )
                            })

                        }
                    </div>
                    </div>
                    </div>
        </>
    )
}

export default user