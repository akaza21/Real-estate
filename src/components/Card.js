import React from 'react'
import Bubble from './Bubble'
import {MdOutlineKingBed} from 'react-icons/md'
import {BiBath} from 'react-icons/bi'
import {FaRuler} from 'react-icons/fa'
import Image from 'next/image'
import {BsFillSuitHeartFill} from 'react-icons/bs'
function Card({item}) {
  return (
    <div className='w-full shadow-lg rounded-3xl '>
        <div className='rounded-3xl h-[18vh] bg-gray-500 w-full relative' id='card-img'>
          <Image src={'https://picsum.photos/id/237/200/300'} className="rounded-3xl" fill objectFit='cover'  />

          <div className='absolute top-4 flex justify-between w-full items-start'>
            <div className='flex justify-start'>
              <Bubble color={'#468fd1'}>
                <div className='text-xs text-white'>
                  <h1>New</h1>
                </div>
              </Bubble>
              <Bubble color={'primary'}></Bubble>
            </div>
            
            <div>
              <Bubble>
                <div className='text-lg'>
                  <BsFillSuitHeartFill/>


                </div>
              </Bubble>
            </div>

          </div>

        </div>
        <div className='p-4' id='card-text'>
            <div>
                <h1 className='text-2xl'>{item.price}</h1>
                <p className='text-base opacity-40'>{item.description}</p>

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