import react from 'react'
import Instabody from './instabody'
import Header from './header'
import ObjList from './ObjList'
import FetchedList from './fetchLists'
import FeedBody from './feedBody'
import Container from '@mui/material/Container'


function appList(){
	return(
		<>	
			<Header/>
            <Container maxWidth="md">
				  
				  <Instabody/> 
				  <FeedBody/>
            </Container>
		
		</>
	)
}

export default appList;