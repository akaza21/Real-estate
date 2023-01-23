import React from 'react'
import Bubble from './Bubble'
import {MdOutlineKingBed} from 'react-icons/md'
import {BiBath} from 'react-icons/bi'
import {FaRuler} from 'react-icons/fa'
function Card() {
  return (
    <div className='w-full shadow-md rounded-3xl '>
        <div className='rounded-3xl h-[15vh] bg-gray-500 w-full' id='card-img'>

        </div>
        <div className='p-4' id='card-text'>
            <div>
                <h1 className='text-2xl'>Text here</h1>
                <p className='text-base opacity-40'>lorem ipsum dolor sut</p>

            </div>

            <div className='flex justify-start mt-3'>
              <Bubble>
                {/* <BiBed/> */}
                <div className='flex justify-center items-center' id='text'>
                  <MdOutlineKingBed/>
                  <h1 className='text-sm ml-3'>2</h1>

                </div>

              </Bubble>
              <Bubble>
                {/* <BiBed/> */}
                <div className='flex justify-center items-center' id='text'>
                  <BiBath/>
                  <h1 className='text-sm ml-3'>2</h1>

                </div>

              </Bubble>
              <Bubble>
                {/* <BiBed/> */}
                <div className='flex justify-center items-center' id='text'>
                  <FaRuler/>
                  <h1 className='text-sm ml-3'>2</h1>

                </div>

              </Bubble>

            </div>


        </div>
    </div>
  )
}

export default Card