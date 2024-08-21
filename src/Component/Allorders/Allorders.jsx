import React, { useContext, useEffect } from 'react'
import { Cartcontext } from '../Context/Cartcontext'

export default function Allorders() {
    let {clearCart} = useContext(Cartcontext)
    useEffect(()=>{
        clearCart()
    },[])
  return (
    <div className='h-96 flex justify-center items-center text-3xl text-green-600'>All orders is completed</div>
  )
}
