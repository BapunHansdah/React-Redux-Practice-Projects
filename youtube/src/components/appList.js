import react from 'react'
import '../css/applist.css'

import ObjList from './ObjList'
import FetchedList from './fetchLists'
function appList(){
	return(
		<>
			{/* if fetching from an api */}
		    <FetchedList/>
		</>
	)
}

export default appList;