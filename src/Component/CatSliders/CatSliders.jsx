import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
export default function CatSliders() {
    const [categories, setcategories] = useState([])
    async function setcategoriesS(){
      let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      setcategories(data.data)
      
    }
    useEffect(()=>{
      setcategoriesS()
    },[])
    var settings = {
        autoplaySpeed:3000,
        autoplay : true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 6,
      };
  return (
     <Slider  {...settings}>
                    {categories?.map((category , index)=><img key={index} src={category.image} className='w-full py-4' alt="" />)}
    </Slider>
  )
}
