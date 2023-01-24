import React from 'react'
import {FiSearch} from 'react-icons/fi'

function SearchBox() {
  return (
    <div className='flex justify-start items-center bg-gray-200 p-2 px-4 rounded-lg'>

        <div className='text-xl'>

            <FiSearch/>

        </div>
        <div className='text-sm mx-2'>
            <h1>Search here...</h1>

        </div>


    </div>
  )
}

export default SearchBox