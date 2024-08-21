import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../Context/Cartcontext'
import { Wishcontext } from '../Context/Wishcontext'

export default function RecentP( product ) {
  const { Cart } = useContext(Cartcontext)
  const { addW, delWish } = useContext(Wishcontext)
  
  const [inWishlist, setInWishlist] = useState(false)

  const toggleWishlist = () => {
    if (inWishlist) {
      delWish(product.product.id)
    } else {
      addW(product.product.id)
    }
    setInWishlist(!inWishlist)
  }

  return (
    <div className=' container w-full md:w-1/6 overflow-hidden cursor-pointer border border-transparent rounded-xl text-center p-5'>
      <Link to={`/productdetails/${product.product.id}/${product.product.category._id}`}>
        <img src={product.product.imageCover} className='w-full' alt="" />
        <h2 className='text-main'>{product.product.category.name}</h2>
        <h2 className='font-medium pb-6'>{product.product.title.split(' ').splice(0, 2).join(' ')}</h2>
      </Link>
      <div className="flex items-stretch">
        <button onClick={() => Cart(product.product.id)} className='btn bg-green-600 text-white font-sm text-main-light w-full'>Add to Cart</button>
        <i onClick={toggleWishlist} className={`cursor-pointer ml-2 fa-solid fa-heart ${inWishlist ? 'text-pink-500' : ''}`}></i>
      </div>
    </div>
  )
}
// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { Cartcontext } from '../Context/Cartcontext'
// import { Wishcontext } from '../Context/Wishcontext'
// export default function RecentP(product) {
//   let {Cart} = useContext(Cartcontext)
//   let {addW ,delwish} = useContext(Wishcontext)
//   return (
//     <div className='w-1/6 overflow-hidden cursor-pointer border border-transparent rounded-xl text-center p-5'>
//             <Link to={`/productdetails/${product.product.id}/${product.product.category._id}`}>
//             <img src={product.product.imageCover} className='w-full' alt="" />
//             <h2 className='text-main'>{product.product.category.name}</h2>
//             <h2 className='font-medium pb-6'>{product.product.title.split(' ').splice(0,2).join(' ')}</h2>
//             </Link>
//             <div className="flex items-stretch">
//               <button onClick={()=>Cart(product.product.id)} className='btn bg-green-600 text-white font-sm text-main-light w-full'>Add to Cart</button>
//               <i onClick={()=>addW(product.product.id)} className="cursor-pointer ml-2 fa-solid fa-heart"></i>
//               </div>
//     </div>
//   )
// }