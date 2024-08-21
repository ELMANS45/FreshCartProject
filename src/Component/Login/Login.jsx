import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { Usercontext } from '../Context/UserContext'
export default function Login() {
  const [apierr, setApiError] = useState(null)
  const {setUser} = useContext(Usercontext)
  const [load, setLoad] = useState(false)
  let navigate = useNavigate()
  async function Reg(values){
    try{
      setLoad(true)
      let { data }= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
      localStorage.setItem('uToken',data.token)
      setUser(data.token)
      navigate('/home')
      setLoad(false)
    }
    catch(err){
      setApiError(err.response.data.message)
      setLoad(false);
    }
  }
  let validationSchema = Yup.object().shape({
    email : Yup.string().email('Invaild Email').required('Email is required'),
    password: Yup.string().min(8 , 'min length is 8').max(20 , 'max length is 20').required('Password is Required')
  })
  let formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },validationSchema:validationSchema ,
    onSubmit:Reg
  })
  return (
    <>
    <div className="w-10/12 mx-auto mb-[100px]">
        <h1 className='text-3xl text-center'>Sign in</h1>
        <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
                  {apierr&&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  {apierr}
            </div>}
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-green-500 peer" placeholder=" " required />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            {formik.errors.email&& formik.touched.email &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  {formik.errors.email}
            </div>}
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-green-500 peer" placeholder=" " required />
              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              {formik.errors.password&& formik.touched.password &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  {formik.errors.password}
            </div>}
          </div>
          <button type="submit" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{load ? <i className='fas fa-spinner fa-spin-pulse'></i>:'Submit'}</button>
        </form>
    </div>
    </>
  )
}
