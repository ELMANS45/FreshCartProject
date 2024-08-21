import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function Brands() {
  function getB(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }
  let {data , isLoading} = useQuery({
    queryKey:['brands'],
    queryFn :getB,
  })
  console.log(data?.data.data)
  return (
    <>
              { !isLoading ? <><h1 className='text-center text-3xl text-green-500 mb-6 mt-6'>All Brands</h1>
        <div className=" flex justify-center flex-wrap gap-5">
          {!isLoading ? data?.data.data.map((product)=><div key={product._id} className=' w-3/4 md:w-1/5 border hover:border-green-600 p-10 rounded'><img src={product.image} className='w-full' alt="" />
            <h5 className='text-center'>{product.name}</h5>
            </div>): ''}
        </div></> : <div className='flex justify-center items-center'>
        <i className='flex items-center fas fa-spinner fa-spin-pulse text-black text-4xl mt-60 '></i>
      </div>}
    </>
  )
}
