import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

export default function Category() {
  function getCategory(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  let {data,isLoading}=useQuery({
    queryKey:['category'],
    queryFn : getCategory
  })
  const [subCategory, setSubCategory] = useState(null)
  async function getsub(productId) {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${productId}/subcategories`)
    console.log(data?.data)
    setSubCategory(data?.data)
  }
  return <>
      { !isLoading ? <><h1 className='text-center text-3xl text-green-500 mb-6 mt-6'>All Brands</h1>
        <div className=" flex justify-center flex-wrap gap-5">
          {!isLoading ? data?.data.data.map((product)=><div onClick={()=>getsub(product._id)} key={product._id} className=' cursor-pointer md:w-1/5 w-3/4 border hover:border-green-600 p-10 rounded'><img src={product.image} className='w-full' alt="" />
            <h5 className='text-center'>{product.name}</h5>
            </div>): ''}
        </div></> : <div className='flex justify-center items-center'>
        <i className='flex items-center fas fa-spinner fa-spin-pulse text-black text-4xl mt-60 '></i>
      </div>}
      {subCategory &&<>
      <h1 className='text-center text-3xl text-green-500 mb-6 mt-6'>All Brands</h1>
      <div className="container flex justify-between gap-7 flex-wrap">
        {subCategory.map((product)=> <div key={product._id} className='cursor-pointer w-full  md:w-1/3 border hover:border-green-600 p-6'>
        <h5 className='text-center'>{product.name}</h5>
        </div>)}
      </div>
      </> }
  </>
}
