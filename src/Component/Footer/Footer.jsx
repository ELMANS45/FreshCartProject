import React from 'react'
import logo1 from '../../assets/MasterCard-Logo-1979-1990.png'
import logo2 from '../../assets/5968269.png'
import logo3 from '../../assets/th.jpeg'
export default function Footer() {
  return (
    <>
    <footer className='bg-gray-200 py-2 mt-7 pb-5'>
      <div className="container mt-2 border-b-2 border-gray-300 py-10">
        <h1 className='text-2xl text-center md:text-start'>Get the FreshCart app</h1>
        <p className='text-gray-500 text-center md:text-start'>We will send you  a link, open it in your phone to download the app</p>
        <form className="flex flex-col md:flex-row flex-nowrap justify-center items-center mt-5">
            <div className="w-3/4 mb-6 md:mb-0">
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email.." required />
            </div>
            <div className="md:w-1/4 w-full flex justify-center">
            <button className='border rounded-md bg-green-600 text-base px-14 py-2 text-white'>Share App Link</button>
            </div>
        </form>
      </div>
      <div className="container mt-2 border-b-2 border-gray-300 py-10 mb-9">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex justify-center md:justify-normal items-center mb-4">
          <h5 className='text-base'>Payment Partners</h5>
          <div className="flex">
              <i className="fa-brands fa-amazon-pay  mx-3 my-3"></i>
              <i className="fa-brands fa-cc-mastercard  mx-3 my-3"></i>
              <i className="fa-brands fa-paypal mx-3 my-3"></i>
          </div>
          </div>
          <div className="flex justify-center items-center md:justify-normal">
          <h5 className='text-xl'>Get delivers with FreshCart</h5>
          <div className="flex">
              <i className="fa-brands fa-apple mx-3 my-3"></i>
              <i className="fa-brands fa-google-play mx-3 my-3"></i>
          </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
