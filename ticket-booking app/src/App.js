import React from 'react'
import AppList from './components/appList'
import SearchedList from './components/searchedList'
import Header from './components/header'
import Landing from './components/landing'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Seat from './components/seat'
import Bookseat from './components/bookseat'
import './styles.css'

function App() {
  
  return (
    
    <>
      
      <BrowserRouter>
        <Header/>
        <Landing/>
          <Routes>
            <Route path='/' element={<AppList />} />
            <Route path='/search' element={<SearchedList/>} />
            <Route path="/seat/:id" element={<Seat/>} />
            <Route path="/bookseat/:id" element={<Bookseat/>} />
          </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App