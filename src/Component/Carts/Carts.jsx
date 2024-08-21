import React, { useContext, useEffect } from 'react'
import { Cartcontext } from '../Context/Cartcontext'
import { Link } from 'react-router-dom'

export default function Carts() {
  const {getCart , cart, CountP,deleteP} = useContext(Cartcontext)
  useEffect(()=>{
    getCart()
  },[getCart])
  return <>
      {!cart ? <div className='flex justify-center items-center'><i className='fas fa-spinner fa-spin-pulse'></i></div>:<div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
        {cart.data.products.map((product)=>
          <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-10 md:w-32 max-w-full max-h-full" alt="iPhone 12" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button onClick={()=>CountP(product.product.id,product.count-1)} className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <i className='fas fa-minus'></i>
            </button>
            <div className="ms-3">
                  <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{product.count}</span>
            </div>
            <button onClick={()=>CountP(product.product.id,product.count+1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <i className='fas fa-plus'></i>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.price}
        </td>
        <td className="px-6 py-4">
          <button onClick={()=>deleteP(product.product.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
        </td>
      </tr>
        )}
        <tr className='text-center md:text-start'>
          <h1 className='text-2xl m-7'>Total Price :{cart?.data.totalCartPrice} </h1>
          <Link to={'/checkout'}><button className="text-white ml-7 mb-7 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cheakout</button></Link>
        </tr>
    </tbody>
                </table>
                
                </div>
        </div>}
    </>
  
}
