import React, { useContext, useEffect } from 'react'
import { Wishcontext } from '../Context/Wishcontext'
import { Cartcontext } from '../Context/Cartcontext'

export default function WishList() {
    let {Cart} = useContext(Cartcontext)
    let{wish ,getWish,delWish} = useContext(Wishcontext)
    useEffect(()=>{
        getWish()
    },[getWish])
    let a = wish?.data.filter((value,index)=>wish.data.indexOf(value)==index)
    console.log(a)
  return (
        <>
              {!a ? <div className='flex justify-center items-center'><i className='fas fa-spinner fa-spin-pulse'></i></div>:<div>
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
      </tr>
    </thead>
    <tbody>
        {a?.map((product)=>
          <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.imageCover} className="w-10 md:w-32 max-w-full max-h-full" alt="iPhone 12" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.title}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.price}
        </td>
        <td className="px-6 py-4 flex flex-col gap-y-20">
          <button onClick={() => Cart(product.id)} className='btn bg-green-600 text-white font-sm text-main-light'>Add to Cart</button>
          <button onClick={()=>delWish(product.id)} className="btn btn bg-red-600 font-sm text-main-lightfont-sm text-main-light text-white dark:text-red-500 hover:underline">Remove</button>
        </td>
      </tr>
        )}
    </tbody>
                </table>
                
                </div>
        </div>}
        </>
  )
}

