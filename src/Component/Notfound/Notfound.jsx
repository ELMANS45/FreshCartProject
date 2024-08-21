import React from 'react'
import NotFoundLogo from '../../assets/error.svg'
export default function Notfound() {
  return (
    <div className='flex justify-center m-7'>
      <img src={NotFoundLogo} alt="" />
    </div>
  )
}
