import React from 'react'
import ProductList from './components/productList'
import SearchedList from './components/searchedList'
import Header from './components/header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles.css'

function App() {
  
  return (
    
    <>
      
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/search' element={<SearchedList/>} />
          </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App