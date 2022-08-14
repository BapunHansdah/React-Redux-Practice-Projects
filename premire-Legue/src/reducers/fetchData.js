//https://run.mocky.io/v3/55492543-1c03-4b5e-8ff4-28bbd2638780
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {fetchData} from '../actions/index'

function fetch() {

  const dispatch = useDispatch()
  function apiCall(){ 
    axios.get("https://run.mocky.io/v3/55492543-1c03-4b5e-8ff4-28bbd2638780").then(response=>{
        dispatch(fetchData(response.data.movies))
    })
   }

  useEffect(() => {
      apiCall();
  }, []);
   
}

export default fetch;
