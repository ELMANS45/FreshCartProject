import axios from 'axios'
import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast'
export let Cartcontext = createContext()
export default function CartcontextProvider(e) {
    let headers = {
        token : localStorage.getItem('uToken')
    }
    async function Cart(productId) {
        try{
            let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
                productId
            },{
                headers 
            })
            toast.success(data.message)
        }
        catch(error){
            error
        }
    }
    async function CountP(productId,count) {    
            if(count>=0){
                try{
                    let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
                        count
                    },{
                        headers 
                    })
                    setCart(data)
                }
                catch(error){
                    error
                }
            }
    }
    const [cart, setCart] = useState(null)
    async function getCart() {
        try{
            let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
                headers 
            })
            setCart(data)
        }
        catch(error){
            error
        }
    }
    async function deleteP(productId) {    
            try{
                let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
                    headers 
                })
                toast.success(data.message)
                setCart(data)
            }
            catch(error){
                error
            }
}
async function checkout(shippingAddress) {
    try{
        let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`,{
            shippingAddress
        },{
            headers 
        })
        window.location.href = data.session.url
    }
    catch(error){
        error
    }
}
async function clearCart(){
    try{
        let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/`,{
            headers 
        })
        console.log(data)
        setCart(null)
    }
    catch(error){
        error
    }
}
  return (
    <Cartcontext.Provider value={{clearCart,checkout,Cart ,cart ,setCart ,getCart,CountP,deleteP}}>
        {e.children}
    </Cartcontext.Provider>
  )
}
