import react from 'react'
import {useSelector} from 'react-redux'
function job(){
        const jobs = useSelector(state=>state.jobLists);
    return(
        <>
             <div className="grid-container">
                    <div className="search"><input type="text" /><div className="search-btn"><button className="btn">search</button></div></div>
                    <div className="card-container">
                    <div className="card-grid">
                        {
                            jobs.map((m,i)=>{
                                return(
                                    <div key={m.id} className="card">
                                        <div> {m.title}</div>
                                        <hr></hr>
                                        <div> {m.description}</div>
                                        
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

export default job