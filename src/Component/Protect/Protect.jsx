import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protect(e) {
    if(localStorage.getItem('uToken')){
        return e.children
      }
      else{
        return <Navigate to ={'/login'}/>
      }
}
