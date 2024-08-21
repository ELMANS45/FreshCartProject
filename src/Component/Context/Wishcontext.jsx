import axios from 'axios'
import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast'
export let Wishcontext = createContext()
export default function WishcontextProvider(e) {
  let headers = {
    token : localStorage.getItem('uToken')
}
const [wish, setWish] = useState(null)
  async function addW(productId) {
    try{
      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
        productId
      },{
        headers
      })
      toast.success(data.message)
    }
    catch(error){
      console.log(error)
    }
  }
  async function delWish(productId) {
      try{
        let {data}  = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
          headers
        })
          setWish(data)
          toast.success(data.message)
      }
      catch(error){
        console.log(error)
      }
  }
  async function getWish() {
    try{
      let {data}  = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        headers
      })
        setWish(data)
    }
    catch(error){
      console.log(error)
    }
}
  return <Wishcontext.Provider value={{wish , setWish ,getWish , delWish, addW}}>
    {e.children}
  </Wishcontext.Provider>
}