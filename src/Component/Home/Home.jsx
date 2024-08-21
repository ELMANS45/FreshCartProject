import axios from 'axios'
import { data } from 'jquery'
import React, { useEffect, useState } from 'react'
import RecentP from '../RecentP/RecentP'
import CatSliders from '../CatSliders/CatSliders'
import MainS from '../MainS/MainS'
import { QueryClient, useQuery } from '@tanstack/react-query'

export default function Home() {
  function setP(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  // const [product, setProduct] = useState([])
  // async function setP(){
  //   let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
  //   setProduct(data.data)
  // }
  // useEffect(()=>{
  //   setP()
  // },[])
  let {data} = useQuery({
    queryKey :['500product'],
    queryFn :setP,
    select:(data)=>data?.data.data.filter((product)=>product.price>800)
  })
  return (
    <>
    <div className='container'>
    <MainS/>
    <CatSliders/>
    </div>
    {data?.length ?     <div className='container flex flex-wrap gap-12'>
      {data.map((product,index)=><RecentP key={index} product={product}/>)}
    </div> : <div className='flex justify-center items-center'>
        <i className='flex items-center fas fa-spinner fa-spin-pulse text-black text-4xl mt-60 '></i>
      </div>}
    </>
  )
}
