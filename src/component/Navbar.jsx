import React from 'react'
import { assets } from '../assets'

const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-20'>
      <div className='mx-10 md:mx-20 '>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-semibold'>
            <span className='text-orange-200'>Esdeath</span>
            Relive.
          </h1>

          <div>
            <img className='w-10 cursor-pointer' src={assets.menu}></img>
          

            
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar