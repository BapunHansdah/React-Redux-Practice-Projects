import React from 'react'
import JobList from './components/jobList'
import Login from './components/login'
import Home from './components/home'
import LoginPage from './components/loginpage'
import SearchedList from './components/searchedList'
import Header from './components/header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles.css'

function App() {
  
  return (
    
    <>
      
      <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<JobList />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />   
          </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App