import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { Cartcontext } from '../Context/Cartcontext'
import { Wishcontext } from '../Context/Wishcontext'
export default function Productdetails() {
    let {Cart} = useContext(Cartcontext)
    let {addW ,delWish} = useContext(Wishcontext)
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
      var settings2 = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
    const [catId, setcatId] = useState([])
    const [DE, setDE] = useState({})
    let {id} = useParams()
    let {category} =useParams()
    async function Details(id) {
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        setDE(data.data)
    }
    async function Relate(category) {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${category}`);
      setcatId(data.data);
  }
    useEffect(()=>{
        Details(id)
        Relate(category)
    },[id,category])
    const [inWishlist, setInWishlist] = useState(false)

    const toggleWishlist = () => {
      if (inWishlist) {
        delWish(DE.id)
      } else {
        addW(DE.id)
      }
      setInWishlist(!inWishlist) 
    }
  return (
    <>
    {DE.images ?<><div className=" container flex justify-center flex-col md:flex-row items-center gap-3">
        <Slider className="mt-10 w-3/4 md:w-1/4" {...settings}>
          {DE.images&&DE.images.map((image ,index)=> <img key={index} src={image} alt="" />)}
        </Slider>
        <div className="w-full md:w-3/4 mt-8 md:mt-0">
            <h2>{DE.title}</h2>
            <p className='my-6 text-gray-700'>{DE.description}</p>
            <h3>{DE.category?.name}</h3>
            <div className="flex justify-between mt-2">
                <h3>{DE.price} EGP</h3>
                <h3><i className='fas fa-star text-yellow-500'></i>{DE.ratingsAverage}</h3>
            </div>
            <i onClick={toggleWishlist} className={`float-right mt-6 cursor-pointer ml-2 fa-solid fa-heart ${inWishlist ? 'text-pink-500' : ''}`}></i>
            <button onClick={()=>Cart(DE.id)} className='btn bg-green-600 text-white font-sm text-main-light w-full mt-6'>Add to Cart</button>
        </div>
    </div> <h1 className='text-center mt-9 mb-9'>This might be intrest</h1>
                  <Slider className="w-1/4 container" {...settings2}>
                    {catId.map((item, index) => (
                        <div key={index} className="relative">
                            <Link to={`/productdetails/${item._id}/${item.category._id}`}>
                            <img src={item.imageCover} alt={`Related product ${index}`} className="mb-4 max-w-full"/>
                            </Link>
                        </div>
                    ))}
                </Slider> </>: <div className='flex justify-center items-center'>
 <i className='flex items-center fas fa-spinner fa-spin-pulse text-black text-4xl mt-60 '></i> 
</div> }          
    </>
  )
}