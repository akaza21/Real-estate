import Bubble from '@/components/bubble'
import Card from '@/components/Card'
import MapBox from '@/components/MapBox'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-start items-center mt-4'>
      <Bubble>
        <h1 className=''>Hello</h1>
      </Bubble>
      <Bubble>
        <h1 className=''>Hello</h1>
      </Bubble>
      <Bubble>
        <h1 className=''>Hello</h1>
      </Bubble>

    </div>

    <div className='flex justify-center  w-full px-4 py-8   '>


      <div className='grid grid-cols-2 gap-4  w-full overflow-y-scroll h-[70vh] px-2 py-6'>
        <Card/>
        <Card/>
        <Card/>
        

      </div>
      <div className=' w-full'>

        <MapBox/>
       

      </div>

    </div>
     
    </>
  )
}
