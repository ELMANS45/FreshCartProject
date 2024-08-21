import React, { useContext, useEffect, useState } from 'react'
import freshLogo from '../../assets/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Usercontext } from '../Context/UserContext';
import { Cartcontext } from '../Context/Cartcontext';
export default function Navbar() {
    let {cart,getCart} = useContext(Cartcontext)
    let navigate= useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const{user,setUser} = useContext(Usercontext)
    useEffect(()=>{
        getCart()
      },[getCart])
    function click(){
        setIsMenuOpen(!isMenuOpen)
    }
    function logOut(){
        if(user){
            localStorage.removeItem('uToken')
            setUser(null)
            navigate('/login')            
        }
    }
    return (
    <>
    <nav className='bg-gray-200 py-2'>
        <div className="container md:flex md:justify-between">
            <div className="flex text-center md:flex justify-center">
                <Link to=""><img src={freshLogo} width={120} alt="fresh logo"/></Link>
                <button className="text-gray-600 md:hidden" onClick={click}><i className={`fas ${isMenuOpen ? 'fa-bars' : 'fa-bars'}`}></i></button>
                {user && <>
                <ul className={ `md:flex justify-center px-3 flex-col md:flex-row hidden`}>
                    <li className='mx-2 my-3 md:my-0'><Link to="">Home</Link></li>
                    <li className='mx-2 my-3 md:my-0'><Link to="products">Products</Link></li>
                    <li className='mx-2 my-3 md:my-0'><Link to="category">Category</Link></li>
                    <li className='mx-2 my-3 md:my-0'><Link to="wishlist">wishlist</Link></li>
                    <li className='mx-2 my-3 md:my-0'><Link to="brands">Brands</Link></li>
                </ul></>}
            </div>
            <div className="flex md:justify-normal justify-between">
                <ul className={`block text-center md:flex justify-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li className='mx-2 cursor-pointer'><i className='fab fa-instagram'></i></li>
                    <li className='mx-2 cursor-pointer'><i className='fab fa-facebook-f'></i></li>
                    <li className='mx-2 cursor-pointer'><i className='fab fa-tiktok'></i></li>
                    <li className='mx-2 cursor-pointer'><i className='fab fa-x-twitter'></i></li>
                    <li className='mx-2 cursor-pointer'><i className='fab fa-linkedin'></i></li>
                    <li className='mx-2 cursor-pointer'><i className='fab fa-youtube'></i></li>
                </ul>
                {user &&<ul className={ `md:hidden text-center ml-14 px-3  flex-col md:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li className='mx-2 md:my-0'><Link to="">Home</Link></li>
                    <li className='mx-2 my-3 md:my-0'><Link to="products">Products</Link></li>
                    <li className='mx-2 my-3 md:my-0'><Link to="category">Category</Link></li>
                    <li className='mx-2 my-3 md:my-0'><Link to="wishlist">wishlist</Link></li>
                    <li className='mx-2 my-3 md:my-0'><Link to="brands">Brands</Link></li>
                </ul>}
                <ul className={`md:flex md:justify-center px-3 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    {!user && <>
                        <li className='mx-2 my-3 md:my-0'><Link to="register">Register</Link></li>
                        <li className='mx-2 my-3 md:my-0'><Link to="login">Login</Link></li></>}
                    {user &&<>
                    <li className='mx-2 my-3 md:my-0'><Link to="carts"><i className="fa-solid fa-cart-shopping text-4xl text-green-500 relative left-5"></i>{cart&&<span className='absolute text-white text-base'>{cart.numOfCartItems}</span>}</Link></li>
                    <li onClick={logOut} className='mx-2 my-3 md:my-0 cursor-pointer ml-9'>Logout</li></>}
                </ul>
            </div>
        </div>
    </nav>
    </>
)
}
