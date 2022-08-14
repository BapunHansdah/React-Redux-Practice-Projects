import React from 'react'
import AppList from './components/appList'
import SearchedList from './components/searchedList'
import Header from './components/header'
import ExpenceTracker from './components/expence'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles.css'

function App() {
  
  return (
    
    <>
      
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ExpenceTracker/>}/>
            <Route path='/appList' element={<AppList />} />
            <Route path='/search' element={<SearchedList/>} />
          </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App