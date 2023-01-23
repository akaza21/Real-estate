import React from 'react'
import {BsFillSuitHeartFill} from 'react-icons/bs'

function Navbar() {
  return (
    <div className='flex justify-between px-4 py-4 items-center'>

        <div className='text-4xl'>
            <h1>Real State</h1>
            
        </div>
       
        <div className='flex justify-center cursor-pointer'>
            
            <div className='text-xl px-4 hover:text-primary transition delay-150 hover:border-b-[3px] mx-2 border-primary'>

                <h1>Link</h1>

            </div>
            <div className='text-xl px-4 hover:text-primary transition delay-150 hover:border-b-[3px] mx-2 border-primary'>

                <h1>Link</h1>

            </div>
            <div className='text-xl px-4 hover:text-primary transition delay-150 hover:border-b-[3px] mx-2 border-primary'>

                <h1>Link</h1>

            </div>

        </div>
        <div className='flex justify-between items-center'>
            <div>
                <BsFillSuitHeartFill/>
            </div>
            <div className='rounded-full h-8 w-8 bg-gray-400 ml-8'>

            </div>

        </div>

    </div>
  )
}

export default Navbar