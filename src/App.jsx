import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, createHashRouter, Navigate, RouterProvider, useNavigate } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Layout from './Component/Layout/Layout.jsx'
import Carts from './Component/Carts/Carts.jsx'
import Brands from './Component/Brands/Brands.jsx'
import Products from './Component/Products/Products.jsx'
import Login from './Component/Login/Login.jsx'
import Logout from './Component/Logout/Logout.jsx'
import Register from './Component/Register/Register.jsx'
import Notfound from './Component/Notfound/Notfound.jsx'
import UsercontextProvider from './Component/Context/UserContext.jsx'
import Protect from './Component/Protect/Protect.jsx'
import Category from './Component/Category/Category.jsx'
import Productdetails from './Component/Productdetails/Productdetails.jsx'
import CartcontextProvider from './Component/Context/Cartcontext.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WishList from './Component/WishList/WishList.jsx'
import WishcontextProvider from './Component/Context/Wishcontext.jsx'
import Checkout from './Component/Checkout/Checkout.jsx'
import Allorders from './Component/Allorders/Allorders.jsx'

function App() {
  let queryClient = new QueryClient()
  let routers=createBrowserRouter([
    {path : '' , element : <Layout/>,children:[
      {path:'home', element : <Protect><Home/></Protect>},
      {index :true , element : <Protect><Home/></Protect>},
      {path:'brands', element:<Protect><Brands/></Protect>},
      {path:'carts', element:<Protect><Carts/></Protect>},
      {path:'products', element:<Protect><Products/></Protect>},
      {path:'category', element:<Protect><Category/></Protect>},
      {path:'wishlist', element:<Protect><WishList/></Protect>},
      {path:'checkout', element:<Protect><Checkout/></Protect>},
      {path:'allorders', element:<Protect><Allorders/></Protect>},
      {path:'productdetails/:id/:category', element:<Protect><Productdetails/></Protect>},
      {path:'login', element:<Login/>},
      {path:'logout', element:<Logout/>},
      {path:'register', element:<Register/>},
      {path:'*', element:<Notfound/>}
    ]}])
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <CartcontextProvider>
        <WishcontextProvider>
        <UsercontextProvider>
                    <RouterProvider router={routers}></RouterProvider>
                    <Toaster/>
              </UsercontextProvider>
        </WishcontextProvider>
        </CartcontextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
